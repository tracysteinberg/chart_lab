var ColumnChart = function(title, name, data) {



   var container = document.querySelector("#column-chart");

   var chart = new Highcharts.Chart({

     chart: {

       type:  "column",
       renderTo:  container
      },
      title:  {
          text: title
      },
      series:  [
        {

           name: name,
           data: data

        },

        {

           name:  "Cohort 14",
           data:  [6,11,3,1]

        }


       ],

      xAxis:  {
         categories: ['Javascript', 'Java', 'Ruby', 'Python']
      }

   });
}