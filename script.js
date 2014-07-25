$(document).ready(function(){

	var txt = $("#user-input");
	var stimestamp, etimestamp;
	var booboos = 0;
	var textToType = $("#text-to-type").html();
	var txt = $("#user-input");

	function displayStatistics(){

		// calculate the number of seconds passed

		// calculate the number of mistypes total

		// calculate a %age of the number of mistypes vs the number of characters typed

		// display calcu

	}

	txt.on("keyup", function(evt){
		if(!stimestamp)
			stimestamp = new Date().getTime();

		console.log (stimestamp);
		
		var input = this.value;

		for( var i=0; i<input.length; i++){
		
			if(textToType[i] != input[i]){
				booboos++;
				return false;
			}
		}

		if( textToType.length == input.length ){
			textToType.css('disabled', true);
			etimestamp = new Date().getTime();

			displayStatistics();
		}
	});

	console.log( "application initialized");

});