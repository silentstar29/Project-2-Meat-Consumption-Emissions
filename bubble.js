function createBubble(width, height) {
    var line = d3.select("#line")
                    .attr("width", width)
                    .attr("height", height);
}

function drawBubble(data, currentYear) {
    var bubble = d3.select("#bubble");
    var yearData = data.filter(d => d.year === currentYear);
    
}