//wait for the DOM elements to load before executing
$(document).ready(function() {
	$('#submit-btn').click(function()

        
        event.preventDefault();

        //get the value of the #mood input and correct for capitalization
        var city = jQuery('#city-type').val();

        city= city.toLowerCase().trim();

       
   //"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
        if(city == "new york" || city == "New York City" || city == "nyc"){
            $('body').attr('nyc');
        }

	//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		if(city == "san francisco" || city == "bay area" || city == "sf"){
            $('body').attr('sf');
        }

//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		if(city == "los Angeles" || city == "la" || city == "lax"){
            $('body').attr('la');

//"Austin" or "ATX" make the background of the page austin.jpg
		if(city == "austin" || city == "atx" || city == "austin"){
            $('body').attr('austin');


//"Sydney" or "SYD" make the background of the page sydney.jpg
		if(city == "sydney" || city == "syd" || city == "sydney"){
            $('body').attr('sydney');
        

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'
    }

    jQuery('#submit-btn').click(iHaveBeenClicked);

});