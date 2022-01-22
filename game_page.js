function send(){
    number1 = document.getElementById("number1").value ; 
    number2 = ducument.getElementById("number2").value ;
    actual_awnser = parseInt(number1) * parseInt(number2) ; 

    question_word = "<h4 id='word_display'> Q"+ remove_charAt3 + "</h4>";
    input_box = "<br> Awnser: <input type='text' id='input_check_box'>" ;
    check_button = "<br> <button class='btn btn-info' onclick='check()'> Check </button>" ; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row ;
    
    document.getElementById("number1").value = "" ; 
    document.getElementById("number2").value = "" ; 
}