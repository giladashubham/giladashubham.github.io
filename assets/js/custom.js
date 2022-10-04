(
    function() {
        window.addEventListener('load', () => {
            loadvalues();
        })
    }
)()

function loadvalues() {
    let today = moment();
    let birthdate = moment('1995-10-27');
    let age = moment.duration(today.diff(birthdate));
    const ageYears = age.years();
    const ageMonths = age.months();
    let agetext = ageYears + " years " + ageMonths + " months " ;
    document.getElementById("ageText").innerHTML = agetext;

    let jobstart = moment('2017-07-01');
    let exp = moment.duration(today.diff(jobstart));
    const expYears = exp.years();
    const expMonths = exp.months();
    let exptext = expYears + " years " + expMonths + " months " ;
    document.getElementById("expText").innerHTML = exptext;
    }
