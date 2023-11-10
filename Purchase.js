function SubmitFunction() {

    let CourseM1 = document.getElementById("MonthCourse1").value
    let CourseM2 = document.getElementById("MonthCourse2").value
    let CourseM3 = document.getElementById("MonthCourse3").value
    let CourseM4 = document.getElementById("MonthCourse4").value

    document.getElementById("AddMCourse1").innerHTML = CourseM1;
    
        document.getElementById("AddMCourse2").innerHTML = CourseM2;
   
        document.getElementById("AddMCourse3").innerHTML = CourseM3;

        document.getElementById("AddMCourse4").innerHTML = CourseM4;

    let CountM = 0
    let CountS = 0

    let CountTotal = 0

    let Discount = 0

    if (document.getElementById("AddMCourse1").innerHTML != "No course selected") {
        CountM = CountM+1;
        CountTotal = CountTotal+1;
    };

    if (document.getElementById("AddMCourse2").innerHTML != "No course selected") {
        CountM = CountM+1;
        CountTotal = CountTotal+1;
    };

    if (document.getElementById("AddMCourse3").innerHTML != "No course selected") {
        CountM = CountM+1;
        CountTotal = CountTotal+1;
    };

    if (document.getElementById("AddMCourse4").innerHTML != "No course selected") {
        CountM = CountM+1;
        CountTotal = CountTotal+1;
    };

    //

    let CourseS1 = document.getElementById("WeekCourse1").value
    let CourseS2 = document.getElementById("WeekCourse2").value
    let CourseS3 = document.getElementById("WeekCourse3").value


    document.getElementById("AddSCourse1").innerHTML = CourseS1

    document.getElementById("AddSCourse2").innerHTML = CourseS2

    document.getElementById("AddSCourse3").innerHTML = CourseS3

    if (document.getElementById("AddSCourse1").innerHTML != "No course selected") {
        CountS = CountS+1;
        CountTotal = CountTotal+1;
    };

    if (document.getElementById("AddSCourse2").innerHTML != "No course selected") {
        CountS = CountS+1;
        CountTotal = CountTotal+1;
    }; 

    if (document.getElementById("AddSCourse3").innerHTML != "No course selected") {
        CountS = CountS+1;
        CountTotal = CountTotal+1;
    };

    //

    
    if (CountTotal=1) {
        Discount = 0
    };

    if (CountTotal=2) {
        Discount = 0.05
    };

    if (CountTotal=3) {
        Discount = 0.1
    };

    if (CountTotal>3) {
        Discount = 0.15
    };


    let TotalM = 0
    let TotalS = 0
    let TotalFinal = 0
    let TotalFinal2 = 0
    let Discount2 = 0
    let Vat1 = 0.15
    let Vat2 = 0

    TotalM = CountM*1500

    TotalS = CountS*750

    TotalFinal = TotalM+TotalS

    Discount2 = TotalFinal*Discount
    Vat2 = TotalFinal*Vat1

    TotalFinal2 = TotalFinal+Vat2




    document.getElementById("Total").innerHTML = "Total price:"+" "+"R"+TotalFinal2+" "+"Inc VAT"

    document.getElementById("Name").value = ""
    document.getElementById("Number").value = ""  
    document.getElementById("Email").value = ""

    document.getElementById("Confirm").innerHTML = "A confirmation will be sent via Email and SMS."
    
}

function AddMonthCourse() {

    let CourseM1 = document.getElementById("MonthCourse1").value
    let CourseM2 = document.getElementById("MonthCourse2").value
    let CourseM3 = document.getElementById("MonthCourse3").value
    let CourseM4 = document.getElementById("MonthCourse4").value

    let CountM = 0
    
    
        document.getElementById("AddMCourse1").innerHTML = CourseM1;
    
        document.getElementById("AddMCourse2").innerHTML = CourseM2;
   
        document.getElementById("AddMCourse3").innerHTML = CourseM3;

        document.getElementById("AddMCourse4").innerHTML = CourseM4;

        if (document.getElementById("AddMCourse1").innerHTML != "No course selected") {
            CountM = CountM+1;
        };

        if (document.getElementById("AddMCourse2").innerHTML != "No course selected") {
            CountM = CountM+1;
        };

        if (document.getElementById("AddMCourse3").innerHTML != "No course selected") {
            CountM = CountM+1;
        };

        if (document.getElementById("AddMCourse4").innerHTML != "No course selected") {
            CountM = CountM+1;
        };

        alert("Courses selected successfully");
    
        
      


 }
function AddWeekCourse() {
    let CourseS1 = document.getElementById("WeekCourse1").value
    let CourseS2 = document.getElementById("WeekCourse2").value
    let CourseS3 = document.getElementById("WeekCourse3").value

    let CountS = 0

    document.getElementById("AddSCourse1").innerHTML = CourseS1

    document.getElementById("AddSCourse2").innerHTML = CourseS2

    document.getElementById("AddSCourse3").innerHTML = CourseS3

    if (document.getElementById("AddSCourse1").innerHTML != "No course selected") {
        CountS = CountS+1;
    };

    if (document.getElementById("AddSCourse2").innerHTML != "No course selected") {
        CountS = CountS+1;
    }; 

    if (document.getElementById("AddSCourse3").innerHTML != "No course selected") {
        CountS = CountS+1;
    };

    alert("Courses selected successfully");
}

