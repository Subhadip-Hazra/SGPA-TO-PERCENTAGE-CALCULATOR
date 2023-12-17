function typeEffect(element, text) {
    let i = 0;
    const interval = setInterval(function() {
        if (text.charAt(i) === '<') {
            const endIndex = text.indexOf('>', i);
            element.innerHTML += text.substring(i, endIndex + 1);
            i = endIndex + 1;
        } else {
            element.innerHTML += text.charAt(i);
            i++;
        }

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 50);
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    var oddSgpa = parseFloat(document.getElementById('odd-sgpa').value);
    var evenSgpa = parseFloat(document.getElementById('even-sgpa').value);
    var total=0;
    var oddPercent=(oddSgpa-0.75)*10;
    var evenPercent = (evenSgpa-0.75)*10;
    total=(oddPercent+evenPercent)/2;
    
    var resultText = 'Percentage of Odd Semester : ' + oddPercent.toFixed(3) +'  %' + '<br>Percentage of Even Semester: ' + evenPercent.toFixed(3) +'  %' +
        '<br>Total Percentage is: ' + total.toFixed(3) +'  %';

    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = '';
    typeEffect(resultElement, resultText);
});