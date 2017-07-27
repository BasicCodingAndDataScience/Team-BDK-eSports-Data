
var myConfig2 = {
 	type: "pie",
 	plot: {
 	  borderColor: "#2B313B",
 	  borderWidth: 5,
 	  // slice: 90,
 	  valueBox: {
 	    placement: 'out',
 	    text: '%t\n%npv%',
 	    fontFamily: "Open Sans"
 	  },
 	  tooltip:{
 	    fontSize: '18',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
 	},
 	source: {
 	  text: 'espn.com',
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans"
 	},
 	title: {
 	  fontColor: "#8e99a9",
 	  text: 'Viewer Distribution of Traditional Sports',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},

	series : [
		{
			values : [33],
			text: "21-35",
		  backgroundColor: '#50ADF5',
		},
		{
		  values: [12],
		  text: "10-20",
		  backgroundColor: '#FF7965',
		  detached:true
		},
		{
		  values: [43],
		  text: '36-65',
		  backgroundColor: '#FFCB45',
		  detached:true
		},
		{
		  text: '65+',
		  values: [12],
		  backgroundColor: '#6FB07F'
		}
	]
};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: '100%',
	width: '100%'
});
s
