
# 🎬 Node.js Video Streaming Application

A Netflix-style video streaming application built using **Pure Node.js** without Express.js or any external backend framework.

This project demonstrates how video streaming works using HTTP Range Requests, 206 Partial Content, and Node.js File System Streams.

Instead of loading the entire video into memory, the server reads and delivers video data in smaller chunks, making video delivery more memory-efficient.

## 🚀 Features

- Video streaming using Node.js HTTP Server
- Chunk-based video delivery
- HTTP Range Requests
- 206 Partial Content Response
- Video handling using Node.js File System (fs) module
- Readable Streams using `fs.createReadStream()`
- HTML5 Video Player
- No Express.js or external backend libraries

## 🛠️ Technologies Used

- Node.js
- JavaScript
- HTTP Module
- File System (fs) Module
- Node.js Streams
- HTML5

## 📂 Project Structure


nodejs-video-streaming/
│
├── netflix-vedio-stream.js
├── package.json
└── README.md
```

## ⚙️ How It Works

1. The user opens the application in the browser.
2. The Node.js HTTP server receives the request.
3. The HTML5 video player requests the `/stream` endpoint.
4. The browser sends an HTTP Range header indicating the requested starting byte.
5. The server calculates the chunk boundaries.
6. `fs.createReadStream()` reads the requested portion of the video.
7. The server responds with HTTP 206 Partial Content.
8. The video data is streamed to the browser using `.pipe()`.

## 📡 Important Concepts

### 1. HTTP Range Requests
Allows the browser to request a specific portion of a video file instead of downloading the entire file at once.

### 2. HTTP 206 Partial Content
Indicates that the server is sending only a portion of the requested resource.

### 3. Chunk Size
The video is divided into smaller data portions. In this project, the configured chunk size is 1 MB.

### 4. Content-Range
Specifies which byte range is being sent and the total size of the video.

### 5. Readable Streams
`fs.createReadStream()` reads video data from the file without loading the entire file into memory.

### 6. Pipe()
`.pipe(response)` transfers the readable stream data directly to the HTTP response.

## 💻 Installation and Setup

### Prerequisites
- Node.js installed
- A local MP4 video file

### Step 1: Clone the Repository

```bash
git clone https://github.com/the-anshika-scizor/nodejs-video-streaming.git
```

### Step 2: Navigate to Project Directory

```bash
cd nodejs-video-streaming
```

### Step 3: Configure Video Path

Update the `VIDEO_PATH` variable in `netflix-vedio-stream.js` with the location of your local MP4 video file.

### Step 4: Start the Server

```bash
npm start
```

### Step 5: Open in Browser

```text
http://localhost:3000
```

Enjoy video streaming!

## 📚 Learning Outcomes

Through this project, I learned:

- How Node.js HTTP servers work.
- Why streaming is useful for handling large files.
- How HTTP Range Requests work.
- How to send partial content using HTTP 206.
- How to work with Node.js File System Streams.
- How to stream video data using `createReadStream()` and `pipe()`.

## 🔮 Future Improvements

- Support for multiple video files.
- Better HTTP Range validation and error handling.
- Cloud-based video storage.
- Video streaming deployment.
- Improved user interface.

## 👩‍💻 Author

**Anshika Gupta**

GitHub: https://github.com/the-anshika-scizor

---

⭐ If you find this project useful, feel free to explore the repository!
