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
    $('#startDatePicker').datepicker('setDate', requestDate);
    $('#endDatePicker').datepicker('setDate', requestDate);

};

function validatePageForDateSelection(){
	console.log('Testing');
    var startDate = new Date(document.getElementById('startDatePicker').value);
    var endDate = new Date(document.getElementById('endDatePicker').value);
    var diffDays = endDate.getDate() - startDate.getDate();
    var errorElement = document.getElementById('errorMessage');
    var successElement = document.getElementById('successMessage');
    if (diffDays < 0){
        errorElement.classList.remove("hidden");
        successElement.classList.add("hidden");
    }else{
        successElement.classList.remove("hidden");
        errorElement.classList.add("hidden");
        document.getElementById('successMsg').innerHTML = "The differance between start date and end date is " + diffDays;
    }
    return false;
};


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


