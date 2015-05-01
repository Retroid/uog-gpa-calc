(function(){
    var i = 1;
    var grade, credits, gp;
    var totalCredits = 0;
    var gpa = 0;

    if (!document.title.startsWith('Unofficial Transcript')) {
        alert('You must be on WebAdvisor, under Students>Unofficial Transcript...');
        throw new Error('Not currently on Unofficial Transcript page.');
    } else if (document.getElementById('VAR_STC_VERIFIED_GRADE_' + i) === null) {
        alert('Please select a Transcript Type first and hit SUBMIT...');
        throw new Error('Not currently on Unofficial Transcript page.');
    }

    while ((grade = document.getElementById('VAR_STC_VERIFIED_GRADE_' + i)) != null) {
        grade = grade.innerHTML.trim();
        credits = Number(document.getElementById('VAR_STC_CMPL_CRED_' + i).innerHTML.trim());
        if (grade === '' || isNaN(grade)) {
            i++;
            continue;
        }

        if (grade >= 85) {
            gp = 4.0;
        } else if (grade >= 80) {
            gp = 3.7;
        } else if (grade >= 77) {
            gp = 3.3;
        } else if (grade >= 73) {
            gp = 3.0;
        } else if (grade >= 70) {
            gp = 2.7;
        } else if (grade >= 67) {
            gp = 2.3;
        } else if (grade >= 63) {
            gp = 2.0;
        } else if (grade >= 60) {
            gp = 1.7;
        } else if (grade >= 57) {
            gp = 1.3;
        } else if (grade >= 53) {
            gp = 1.0;
        } else if (grade >= 50) {
            gp = 0.7;
        } else {
            gp = 0.0;
        }

        totalCredits += credits;
        gpa += gp * credits;
        i++;
    }
    gpa = gpa/totalCredits;

    var gpaRow = document.createElement("tr");
    gpaRow.innerHTML =
        '<td class="component text label readonly">Cumulative 4.0 GPA</td>' +
        '<td class="control right"><div>' + gpa.toFixed(2) + '</div></td>';

    var table = document.getElementsByClassName('layout')[1].childNodes[1];
    table.appendChild(gpaRow);
    table.childNodes[table.childNodes.length - 1].style.cssText +=
        'background: red; color: yellow; transition: all 1s ease;';
    table.childNodes[table.childNodes.length - 1].scrollIntoView();
    table.childNodes[table.childNodes.length - 1].style.cssText +=
        'background: transparent; color: black;';
})();
