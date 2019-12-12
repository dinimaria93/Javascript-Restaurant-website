/*js for the json files in the Menu Page*/
$(document).ready(function() {
$("a").click(function() {
	var title = $(this).attr("title");
	var fileName = "json_files/" + title + ".json";
	getData(fileName);
});

function getData(fileName) {
	console.log(fileName);
	$.getJSON(fileName, function(data) {
					console.log(JSON.stringify(data));
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("main").children()[0].innerHTML = value.title;
						$("main").children()[1].src = value.image;
						$("main").children()[2].innerHTML = value.category + "<br>" +"<br>"+ value.item;
						$("main").children()[3].innerHTML = value.text + "<br>"  +"<br>"+ value.text2;
					});
				}); 
			});
};
}); 

/*Js for the slideshow in Menu Page and Index page with jquery*/
$("#slide > div:gt(0)").hide();

setInterval(function() {
  $('#slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide');
}, 4000);

/*Js for the Tabs in the Menu Page  with jquery*/

$(document).ready(function() {    

$('#tabs li a:not(:first)').addClass('inactive');
$('.container').hide();
$('.container:first').show();
    
$('#tabs li a').click(function(){
    var t = $(this).attr('id');
  if($(this).hasClass('inactive')){ //this is the start of the condition 
    $('#tabs li a').addClass('inactive');           
    $(this).removeClass('inactive');
    
    $('.container').hide();
    $('#'+ t + 'C').fadeIn('slow');
 }
});

});


// validate number
function validate(){
    var number = document.getElementById("number").value;
    if(isNaN(number) || number.length!=10){
        alert("please enter valid numberof 10 digits");
        return false;
    }
    else{
        return true;
    }
}

// Min  and max datepicker validation

$(document).ready(function(){
    var date = new Date();
    $("#datepicker").datepicker({
        minDate: new Date(),
        maxDate: "+1M"
    });
});
// tool tip used

    $( function() {
    $( document ).tooltip();
  } );