//mathematical expression - that checks if the expression is valid. 
//for the exercise consider only the following operators +,-,*,/,sin,cos,tan
function ValidateExpression() {
    var expression = $('#txtExpression').val().trim();
    if (expression != '') {
        try {
            var result = eval(expression);
            $('#spnMessage').html('Expression in Valid and Result is: ' + result);
        }
        catch (e) {
            $('#spnMessage').html('Expression in invalid.');
        }
    }
    else {
        $('#spnMessage').html('Please enter expression.');
    }
}      




