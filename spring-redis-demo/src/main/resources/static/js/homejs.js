
document.getElementById('closenav').style.display = 'none';
document.getElementById('homenav').style.display = 'block';

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById('homenav').style.display = 'none';
	document.getElementById('closenav').style.display = 'block';
	document.getElementById("mySidenav").style.width = "285px";
    document.getElementById("main").style.marginLeft = "285px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById('closenav').style.display = 'none';
	document.getElementById('homenav').style.display = 'block';
	document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var i = 0;
var random = Math.floor((Math.random() * 3) + 1);
var txt = 'What\'s new?'; 
var txt2 = 'Share your story';
var txt3 = 'Show your friends some love';
var txt4 = 'Post your thoughts';
var txtEr = '404 - Something went wrong, no fancy stuff for you :(';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	
	if (random == 1){
		if (i < txt.length) {
			document.getElementById("postArea").placeholder += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	} else if (random == 2){
		if (i < txt2.length) {
			document.getElementById("postArea").placeholder += txt2.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	} else if (random == 3){
		if (i < txt3.length) {
			document.getElementById("postArea").placeholder += txt3.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	} else if (random == 4){
		if (i < txt4.length) {
			document.getElementById("postArea").placeholder += txt4.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	} 
}

$('#pagination').easyPaginate({
    paginateElement: 'div',
    elementsPerPage: 5,
    effect: 'climb'
});
