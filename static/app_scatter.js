var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("beef_dashboard_data.csv")
  .then(function(beefData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    beefData.forEach(function(data) {
      data.kg_percapita = +data.kg_percapita;
      data.emissions_percapita = +data.emissions_percapita;
    });

    // Step 2: Create scale functions
    // ==============================
    var xMax=d3.max(beefData, d=>d.kg_percapita);
    var xMin= d3.min(beefData, d=>d.kg_percapita);

    var yMax=d3.max(beefData, d=>d.emissions_percapita);
    var yMin= d3.min(beefData, d=>d.emissions_percapita);

    var xLinearScale = d3.scaleLinear()
      .domain([xMin,xMax])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([yMin, yMax])
      .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
    .data(beefData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.kg_percapita))
    .attr("cy", d => yLinearScale(d.emissions_percapita))
    .attr("r", "15")
    .attr("fill", "pink")
    .attr("opacity", ".5");

    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
      .attr("class", "tooltip")
      //.offset([80, -60])
      .html(function(d) {
        return (`${d.country}<br>Kg Per Capita: ${d.kg_percapita}<br>Emissions Per Capita: ${d.emissions_percapita}`);
      });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Methane Emissions (Kg Per Capita)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Meat Consumption (Kg per Capita)");
  });
