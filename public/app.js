window.addEventListener('load', function(){

	var url = 'https://restcountries.eu/rest/v2';

       makeRequest(url, function() {
          if (this.status !==200) return;
          var jsonString = this.responseText;
          var countries = JSON.parse(jsonString);
          // var name = ""
          // var population = ""

         var  filteredCountries  = filterCountries(countries);

          new PieChart(filteredCountries);
       });

});
   
var makeRequest = function(url, callback) {
	var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
}


 var filterCountries = function(countries) {


      var filteredCountries = []
      countries.forEach( function(country) {
 
      	filteredCountries.push(
      		{
      			name: country.name,
      			y: country.population
      		}
      	)
      	

      })

    return filteredCountries;

 }




 


	var title = "Our Favourite Programming Languages"
	var name = "Cohort 11"
	var data = [15, 8, 6, 1, 0]

	new ColumnChart(title, name, data);


 

// })