const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const fontPicker = document.getElementById("fontPicker");

const clearButton = document.getElementById("clearButton");
const saveButton = document.getElementById("saveButton");
const retrieveButton = document.getElementById("retrieveButton");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set default stroke color and line width
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = fontPicker.value;

// Event Listeners
colorPicker.addEventListener("input", (e) => {
    ctx.strokeStyle = e.target.value;
});

canvasColor.addEventListener("input", (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontPicker.addEventListener("change", (e) => {
    ctx.lineWidth = e.target.value;
});

// Drawing on Canvas
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));

// Clear Canvas
clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save Canvas as Image
saveButton.addEventListener("click", () => {
    localStorage.setItem("canvasContents", canvas.toDataURL());

    const link = document.createElement("a");
    link.download = "signature.png";
    link.href = canvas.toDataURL();
    link.click();
});

// Retrieve Saved Signature
retrieveButton.addEventListener("click", () => {
    const savedCanvas = localStorage.getItem("canvasContents");

    if (savedCanvas) {
        const img = new Image();
        img.src = savedCanvas;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    } else {
        alert("No saved signature found!");
    }
});
