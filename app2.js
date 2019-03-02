d3.csv("data/final_data/beef_dashboard_data.csv", function(error, beefData) {
  if (error) return console.warn(error);
  console.log(beefData);
  beefData.forEach(function(row) {
    continent: row.Continent,
    country: row.Country,
    region: row.Region,
    year: +row.Year,
    population: +row.Population,
    totalEmissions: +row["Emissions"],
    emissionsPerCapitaKG: +row["Emissions Per Capita"],
    beefPerCapitaKG: +row["Beef Consumption Per Capita"],
    beefTotalKG: +row["Total Beef Consumption"]
  });
    var data_2012 = beefData.filter(function(d) { return d.year == 2012; });
    var data_2011 = beefData.filter(function(d) { return d.year == 2011; });
    var data_2010 = beefData.filter(function(d) { return d.year == 2010; });
    var data_2009 = beefData.filter(function(d) { return d.year == 2009; });
    var data_2008 = beefData.filter(function(d) { return d.year == 2008; });
    var data_2007 = beefData.filter(function(d) { return d.year == 2007; });
    var data_2006 = beefData.filter(function(d) { return d.year == 2006; });
    var data_2005 = beefData.filter(function(d) { return d.year == 2005; });
    var data_2004 = beefData.filter(function(d) { return d.year == 2004; });
    var data_2003 = beefData.filter(function(d) { return d.year == 2003; });
    var data_2002 = beefData.filter(function(d) { return d.year == 2002; });
    var data_2001 = beefData.filter(function(d) { return d.year == 2001; });
    var data_2000 = beefData.filter(function(d) { return d.year == 2000; });
    var data_1999 = beefData.filter(function(d) { return d.year == 1999; });
    var data_1998 = beefData.filter(function(d) { return d.year == 1998; });
    var data_1997 = beefData.filter(function(d) { return d.year == 1997; });
    var data_1996 = beefData.filter(function(d) { return d.year == 1996; });
    var data_1995 = beefData.filter(function(d) { return d.year == 1995; });
    var data_1994 = beefData.filter(function(d) { return d.year == 1994; });
    var data_1993 = beefData.filter(function(d) { return d.year == 1993; });
    var data_1992 = beefData.filter(function(d) { return d.year == 1992; });
    var data_1991 = beefData.filter(function(d) { return d.year == 1991; });
    var data_1990 = beefData.filter(function(d) { return d.year == 1990; });
});

var data2012 = {
  x: data_2012.beefTotalKG,
  y: data_2012.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2012.population
  }
};

var data2011 = {
  x: data_2011.beefTotalKG,
  y: data_2011.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2011.population
  }
};

var data2010 = {
  x: data_2010.beefTotalKG,
  y: data_2010.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2010.population
  }
};

var data2009 = {
  x: data_2009.beefTotalKG,
  y: data_2009.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2009.population
  }
};

var data2008 = {
  x: data_2008.beefTotalKG,
  y: data_2008.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2008.population
  }
};

var data2007 = {
  x: data_2007.beefTotalKG,
  y: data_2007.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2007.population
  }
};

var data2006 = {
  x: data_2006.beefTotalKG,
  y: data_2006.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2006.population
  }
};

var data2005 = {
  x: data_2005.beefTotalKG,
  y: data_2005.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2005.population
  }
};

var data2004 = {
  x: data_2004.beefTotalKG,
  y: data_2004.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2004.population
  }
};

var data2003 = {
  x: data_2003.beefTotalKG,
  y: data_2003.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2003.population
  }
};

var data2002 = {
  x: data_2002.beefTotalKG,
  y: data_2002.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2002.population
  }
};

var data2001 = {
  x: data_2001.beefTotalKG,
  y: data_2001.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2001.population
  }
};

var data2000 = {
  x: data_2000.beefTotalKG,
  y: data_2000.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_2000.population
  }
};

var data1999 = {
  x: data_1999.beefTotalKG,
  y: data_1999.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1999.population
  }
};

var data1998 = {
  x: data_1998.beefTotalKG,
  y: data_1998.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1998.population
  }
};

var data1997 = {
  x: data_1997.beefTotalKG,
  y: data_1997.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1997.population
  }
};

var data1996 = {
  x: data_1996.beefTotalKG,
  y: data_1996.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1996.population
  }
};

var data1995 = {
  x: data_1995.beefTotalKG,
  y: data_1995.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1995.population
  }
};

var data1994 = {
  x: data_1994.beefTotalKG,
  y: data_1994.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1994.population
  }
};

var data1993 = {
  x: data_1993.beefTotalKG,
  y: data_1993.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1993.population
  }
};

var data1992 = {
  x: data_1992.beefTotalKG,
  y: data_1992.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1992.population
  }
};

var data1991 = {
  x: data_1991.beefTotalKG,
  y: data_1991.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1991.population
  }
};

var data1990 = {
  x: data_1990.beefTotalKG,
  y: data_1990.totalEmissions,
  mode: 'markers',
  marker: {
    size: data_1990.population
  }
};

function init() {
  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("bubble", data1990, layout);
}

function updatePlotly(newdata) {
  var BUBBLE1 = document.getElementById("bubble");
  Plotly.restyle(BUBBLE1, "values", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = data1990;
    break;
  case "dataset2":
    data = data1991;
    break;
  case "dataset3":
    data = data1992;
    break;
  case "dataset4":
    data = data1993;
    break;
  case "dataset5":
    data = data1994;
    break;
  case "dataset6":
    data = data1995;
    break;
    case "dataset7":
    data = data1996;
    break;
  case "dataset8":
    data = data1997;
    break;
  case "dataset9":
    data = data1998;
    break;
  case "dataset10":
    data = data1999;
    break;
  case "dataset11":
    data = data2000;
    break;
  case "dataset12":
    data = data2001;
    break;
    case "dataset13":
    data = data2002;
    break;
  case "dataset14":
    data = data2003;
    break;
  case "dataset15":
    data = data2004;
    break;
  case "dataset16":
    data = data2005;
    break;
  case "dataset17":
    data = data2006;
    break;
  case "dataset18":
    data = data2007;
    break;
    case "dataset19":
    data = data2008;
    break;
  case "dataset20":
    data = data2009;
    break;
  case "dataset21":
    data = data2010;
    break;
  case "dataset22":
    data = data2011;
    break;
  case "dataset23":
    data = data2012;
    break;
  case "dataset12":
    data = data2001;
    break;
  default:
    data = data1990;
  }
  updatePlotly(data);
}

init();


