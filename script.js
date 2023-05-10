const data = [
{ x: 10, y: 20, value: 25 },
{ x: 40, y: 60, value: 40 },
{ x: 70, y: 30, value: 10 },
{ x: 30, y: 60, value: 30 },
{ x: 55, y: 80, value: 25}
];

const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);


// Configuring chart dimensions
const margin = 40;
const chartWidth = canvas.width - 2 * margin;
const chartHeight = canvas.height - 2 * margin;


// Draw grid lines
ctx.beginPath();

for (let i = 0; i < 6; i++) {
    const x = margin + i * (chartWidth / 5);
    ctx.moveTo(x, margin);
    ctx.lineTo(x, canvas.height - margin);

    const y = margin + i * (chartHeight / 5);
    ctx.moveTo(margin, y);
    ctx.lineTo(canvas.width - margin, y);
}

ctx.strokeStyle = '#ddd';
ctx.stroke();


// Draw axes
ctx.beginPath();
ctx.moveTo(margin, margin);
ctx.lineTo(margin, canvas.height - margin);
ctx.lineTo(canvas.width - margin, canvas.height - margin);
ctx.strokeStyle = '#000';
ctx.stroke();


// Draw axis labels
ctx.fillStyle = '#000';
ctx.font = '14px';

for (let i = 0; i < 6; i++) {
    const x = margin + i * (chartWidth / 5);
    const label_x = (i * 20).toString();
    ctx.fillText(label_x, x, canvas.height);

    const y = margin + i * (chartHeight / 5);
    const label_y = (100 - i * 20).toString();
    console.log(label_y)
    ctx.fillText(label_y, margin / 4 , y);
}


// Calculate minimum and maximum values
const minValue = Math.min(...data.map((point) => point.value));
const maxValue = Math.max(...data.map((point) => point.value));


// Draw data points
data.map((point) => {
    const x = margin + (point.x / 100) * chartWidth;
    const y = canvas.height - margin - (point.y / 100) * chartHeight;
    ctx.beginPath();
    ctx.arc(x, y, point.value, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fill();
});
