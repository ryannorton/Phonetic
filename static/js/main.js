
$("#transcribeForm").submit(function(event) {
	event.preventDefault();
	var text = $("#userinput").val();
	var key = "023c06b3-d060-417d-96f0-44201d53f2db"
	//var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + text +"?key=" + key;
	var url = "https://dictionary.cambridge.org/api/v1/dictionaries/american-english/entries/test"
	$("#transcription p").html(text);
	$("#userinput").val("");
	// $.ajax({
	// 	url: url,
	// }).done(function(data) {
	// 	$("#transcription p").html(text);
	// });

	// sS3d3VHg0ZChkOukkj1tg6eyWOFEltPoHdP7CJevzByaEweqfc75hUyanIgNMc9P

})


$(function(){
	var $window = $(window);
	winHeight = $window.height();
	$("#transcription").height(winHeight/2);
	$("#transcribeForm").height(winHeight/2);
   
	$(window).resize(function(){
		winHeight = $window.height();
		$("#transcription").height(winHeight/2);
		$("#transcribeForm").height(winHeight/2);
	});
});