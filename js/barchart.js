function drawbarChart () {
  var data = [820, 883, 903, 836, 915, 981, 892, 761, 858, 757, 363];
  var chart = d3.select("#barchart").append("svg")
    .attr ("class", "chart")
    .attr ("width", 1000)
    .attr ("height", 20 * data.length);

// Draw rectangles
  chart.selectAll ("rect")
    .data (data)
    .enter ()
    .append ("rect")
    .attr ("width", function (d) {
      return d;
    })
    .attr ("height", 20)
    .attr ("y", function (d, i) {
      return i * 20;
    });

// Append death counts
  chart.selectAll ("text")
    .data (data)
    .enter ()
    .append ("text")
    .text (String)
    .attr ("x", function (d) {
      return d;
    })
    .attr ("y", function (d, i) {
      return i * 20 + 10;
    })
    .attr("dy", ".35em")
    .attr("dx", "-5")
    .attr ("text-anchor", "end");
}
