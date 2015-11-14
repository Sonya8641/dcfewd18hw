//first create var/array
var images = ["images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg"];

//create var for index

var i = 0;

//listen for click events

$(document).ready(function() {	
	$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});

//go to previous image

function previousImage() {
	//if the index is greater than 0 we want to increment the image and stop at 0
	if (i>0) {
		i = i-1;
	}

	$("#image-to-vote-on").attr("src", images[i]);
	}

//go to next image
function nextImage() {
		if (i<images.length-1) {
		i = i+1;
	}
	$("#image-to-vote-on").attr("src", images[i]);
}