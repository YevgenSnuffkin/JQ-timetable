$(document).ready(function() {

	var week = {
    	mondayActivity:[],
    	tuesdayActivity:[],
    	wednesdayActivity:[],
    	thursdayActivity:[],
    	fridayActivity:[],
    	saturdayActivity:[],
    	sundayActivity:[]
	};

    $(".addActivity").click(function(eve){ 

		var text = $('#'+this.dataset.input).val();

        $(this.dataset.container).append("<p>"+text+"</p>");

        $(this.dataset.container+" "+"p").hide();

		$(this.dataset.container+" "+"p").fadeIn("slow");
       
        week[this.dataset.input].push(text);

        console.log(week[this.dataset.input],this.dataset.input);
        
	});


	$(".cleanDay").click(function(eve){

		$(this.dataset.box).slideUp("slow",function() {
			$(this.dataset.box+" "+"p").remove();            //have a callback from a slideUp, does hide() after slide
		});

 		// $(this.dataset.box+" "+"p").hide();

	});



	
	//console.log('DOС ready');
});
	//console.log('DOC not ready yet');

