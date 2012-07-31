function drawbarChart2 () {
  d3.csv ("accident_deaths.csv", function (data) {
    var width = 800;
    var height = 500;

    var margins = {
      left: 50,
      top: 50,
      right: 50,
      bottom: 50
    };

    var chart = d3.select("#barchart2").append("svg")
      .attr ("class", "chart")
      .attr ("width", width)
      .attr ("height", height);

    var xScale = d3.scale.linear ()
      .domain ([0, d3.max (data, function (d) {return d.deaths;})])
      .range ([margins.left, width - margins.right]);

    var yScale = d3.scale.ordinal ()
      .domain (data.map (function (d) {return d.year;}))
      .rangeBands ([margins.top, height - margins.bottom]);

    // Add rectangles
    chart.selectAll ("rect")
      .data (data)
      .enter ()
      .append ("rect")
      .attr ("width", function (d) {
        return xScale (d.deaths);
      })
      .attr ("height", yScale.rangeBand ())
      .attr ("y", function (d, i) {
        return yScale (d.year);
      });

    // Add text showing number of deaths
    chart.selectAll ("text")
      .data (data)
      .enter ()
      .append ("text")
      .text (function (d) {
        return String (d.deaths);
      })
      .attr ("x", function (d) {
        return xScale (d.deaths);
      })
      .attr ("y", function (d, i) {
        return yScale (d.year) + yScale.rangeBand () / 2;
      })
      .attr("dy", ".35em")
      .attr("dx", "-5")
      .attr ("text-anchor", "end");
  });
}
