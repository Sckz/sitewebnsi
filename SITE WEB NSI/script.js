function result() {
    var answersContainer1 = document.getElementById('q1');
    var answersContainer2 = document.getElementById('q2');
    var answersContainer3 = document.getElementById('q3');
    var answersContainer4 = document.getElementById('q4');
    var answersContainer5 = document.getElementById('q5');
    var answersContainer6 = document.getElementById('q6');
    var answersContainer7 = document.getElementById('q7');
    var answersContainer8 = document.getElementById('q8');
    var answersContainer9 = document.getElementById('q9');
    var answersContainer10 = document.getElementById('q10');
    var submitButton = document.getElementById('submitButton');
    var score=0;
    if (document.getElementById('correct1').checked)
    {
        score++;
        answersContainer1.style.color = 'lightgreen';
    }
    else if (!document.getElementById('correct1').checked) {
        answersContainer1.style.color = 'red';
    }
    if (document.getElementById('correct2').checked)
    {
        score++;
        answersContainer2.style.color = 'lightgreen';
    }
    else if (!document.getElementById('correct2').checked) {
        answersContainer2.style.color = 'red';
    }
    if (document.getElementById('correct3').checked) {
        score++;
        answersContainer3.style.color = 'lightgreen';
    }
    else if (!document.getElementById('correct3').checked){
        answersContainer3.style.color = 'red';
    }
    if (document.getElementById('correct4').checked){
        answersContainer4.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct4').checked){
        answersContainer4.style.color = 'red';
    } 
    if (document.getElementById('correct5').checked){
        answersContainer5.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct5').checked) {
        answersContainer5.style.color = 'red';
    }
    if (document.getElementById('correct6').checked){
        answersContainer6.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct6').checked) {
        answersContainer6.style.color = 'red';
    }
    if (document.getElementById('correct7').checked){
        answersContainer7.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct7').checked) {
        answersContainer7.style.color = 'red';
    }
    if (document.getElementById('correct8').checked){
        answersContainer8.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct8').checked) {
        answersContainer8.style.color = 'red';
    }
    if (document.getElementById('correct9').checked){
        answersContainer9.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct9').checked) {
        answersContainer9.style.color = 'red';
    }
    if (document.getElementById('correct10').checked){
        answersContainer10.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct10').checked) {
        answersContainer10.style.color = 'red';
        answersContainer10.innerHTML = `<b>Question 10 :</b> <i>Pour vous, le Stade Toulousain est-il le meilleur club de rugby au monde ?</i><br/>Non? Vous avez tort de penser cela.<br/><br/>`;
        score++;
    }
    

    submitButton.innerHTML = `<b>Votre score est de ${score}/10</b>`;
}