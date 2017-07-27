var myConfig = {
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
 	  text: 'Viewer Distribution of eSports',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},
 	plotarea: {
 	  margin: "20 0 0 0"
 	},
	series : [
		{
			values : [56],
			text: "21-35",
		  backgroundColor: '#50ADF5',
		},
		{
		  values: [16],
		  text: "10-20",
		  backgroundColor: '#FF7965',
		  detached:true
		},
		{
		  values: [28],
		  text: '36-65',
		  backgroundColor: '#FFCB45',
		  detached:true
		},
		{
		  text: '65+',
		  values: [0],
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
