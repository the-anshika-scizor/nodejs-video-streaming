import http from 'node:http';
import fs from 'node:fs';
const VIDEO_PATH = "C:\\Users\\nikgu\\Videos\\Captures\\imp.mp4";
//Decide the chunk size
const CHUNK_SIZE = 1_000_000; // 1MB chunk size;

// create server
const server = http.createServer((request, responce) =>{
    console.log('Request Coming ...' , request.url);
    if(request.url === '/'){
        return responce.end(`<html>
            <body style="background:black;color:red; font-family:sans-serif;text-align:center">
            <h1>Netflix vedio Streaming Example</h1>
            <video 
                src ="/stream" 
                controls
                autoplay 
                width ="800" 
                style="border-radius:8px">
            </video>
            </body>            
            </html>`);
    }
    if(request.url === '/stream'){
        // get the total number of bytes in vedio
        const videoSize = fs.statSync(VIDEO_PATH).size;
        const range = request.headers.range || 'bytes=0-';
        const start = Number(range.replace('bytes=','').split("-")[0]);
        const end = Math.min(start + CHUNK_SIZE -1, videoSize -1);
        const contentLength = end - start + 1;
        console.log(`stats Sending the chunks ${(start/1e6).toFixed(1)} MB -> ${(end/1e6).toFixed(1)} MB | Total ${(videoSize/1e6).toFixed(1)} MB`);

        responce.writeHead(206,{
            'content-range': `bytes ${start}-${end}/${videoSize}`,
            'accept-ranges' : 'bytes',
            'content-length' : contentLength,
            'content-type': 'video/mp4'
        });
        const videoSlicing = fs.createReadStream(VIDEO_PATH, {start, end});
        videoSlicing.pipe(responce);
    }
})
server.listen(3000 , (err)=>{
    if(err){
        console.log('Server Crahes');
    }
    else{
        console.log('Server Up and running');
    }
})