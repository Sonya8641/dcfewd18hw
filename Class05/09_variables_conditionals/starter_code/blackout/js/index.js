//Create variable
var lights = 'off';

//function to add class (IF on)
//change variable value

//remove class (ELSE off)
//change variable

function switchLights() {
	if(lights == 'on') {
		$('body').addClass('dark');
		lights = 'off';
	} else {
		$('body').removeClass('dark');
		lights = 'on';
	}
//Listen for click and do function
}
$('#light_switch').click(switchLights);

