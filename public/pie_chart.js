var PieChart = function(countries) {
   var container = document.querySelector("#pie-chart");
   console.log(countries);
   var chart = new Highcharts.Chart({

      chart:  {
         type:  'pie',
         renderTo:  container
      },

      title:  {
          text: "Country Populations"
      },

      credits:  {
        enabled:  false
      },


      series:  countries


     
  })
 }