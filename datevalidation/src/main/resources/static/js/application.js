$('.my-form').on('submit', function () {
    return validatePageForDateSelection();
});

function setDatePicker(){
    $( "#startDatePicker" ).datepicker(
        { dateFormat: 'yy-mm-dd'});

    $( "#endDatePicker" ).datepicker(
        { dateFormat: 'yy-mm-dd'});
};

function getRequestParam(p){
    return (window.location.search.match(new RegExp('[?&]' + p + '=([^&]+)')) || [, null])[1];
};

function setInitialDate(){
    var requestDate = getRequestParam('date');
    if(requestDate == null){
        requestDate = new Date();
    }else{
        requestDate = formatDate(requestDate);
    }
    // Decided not to use default date
	//$('#startDatePicker').datepicker('setDate', requestDate);
	//$('#endDatePicker').datepicker('setDate', requestDate);

};

function validatePageForDateSelection(){
	var startDate = new Date(document.getElementById('startDatePicker').value);
	var endDate = new Date(document.getElementById('endDatePicker').value);
	var errorElement = document.getElementById('errorMessage');
	var successElement = document.getElementById('successMessage');
	    
	if (validateStartDate(startDate) && validateEndDate(endDate) ){
	    var diffDays = endDate.getDate() - startDate.getDate();
	    if (diffDays < 0){
	        errorElement.classList.remove("hidden");
	        successElement.classList.add("hidden");
	    }else{
	        successElement.classList.remove("hidden");
	        errorElement.classList.add("hidden");
	        document.getElementById('successMsg').innerHTML = "The differance between start date and end date is " + diffDays;
	    }
	}else{
		successElement.classList.add("hidden");
		errorElement.classList.add("hidden");
	}
    return false;
};

function validateStartDate(startDate){
    if (isNaN(startDate.getTime())){
    	document.getElementById('startDate').classList.add("has-error");
    	return false;
    }else{
       	document.getElementById('startDate').classList.remove("has-error");
       	return true;
    }
}

function validateEndDate(endDate){
    if (isNaN(endDate.getTime())){
    	document.getElementById('endDate').classList.add("has-error");
    	return false;
    }else{
       	document.getElementById('endDate').classList.remove("has-error");
    	return true;  	
    }
}

function formatDate(input) {
    var dateFormat = 'yyyy-mm-dd';
    var parts = input.match(/(\d+)/g),
        i = 0, fmt = {};
    dateFormat.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
};

$(document).ready(function(){
    setDatePicker();
    setInitialDate();
});
