function result() {
    var answersContainer1 = document.getElementById('q1');
    var answersContainer2 = document.getElementById('q2');
    var answersContainer3 = document.getElementById('q3');
    var answersContainer4 = document.getElementById('q4');
    var answersContainer10 = document.getElementById('q10')
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
    if (document.getElementById('correct10').checked){
        answersContainer10.style.color = 'lightgreen';
        score++;
    }
    else if (!document.getElementById('correct10').checked) {
        answersContainer10.style.color = 'red';
    }

    submitButton.innerHTML = `<b>Votre score est de ${score}/10</b>`
}