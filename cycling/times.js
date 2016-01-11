var fullUrl = location.href;
var charArray = fullUrl.split("");
var child = "";
if(charArray[8] == "w") {
    for(i = 0; i <= charArray.length - 1; i++) {
        if(i >= 28 && i < charArray.length - 1) {
            child += charArray[i];
        }
    }
}
else {
    for(i = 0; i <= charArray.length - 1; i++) {
        if(i >= 24 && i < charArray.length - 1) {
            child += charArray[i];
        }
    }
}
var clubName = "";
var info = "";
switch(child) {
    case "art":
        info = "Art Club meets on Mondays, 3:20, Room 307";
        clubName = "Art Club";
        break;
    case "asset":
        info = "Asset Club meets on 9/29, 7:30am, Room 175";
        clubName = "Asset Club";
        break;
    case "computerscience":
        info = "Computer Science Club meets on Thursdays, 3:15, Room 204";
        clubName = "Computer Science Club";
        break;
    case "fccla":
        info = "FCCLA meets on ?";
        clubName = "FCCLA";
        break;
    case "french":
        info = "French Club meets on Mondays, 3:15";
        clubName = "French Club";
        break;
    case "gaming":
        info = "Gaming Club meets on Wednesdays, #:30, Room 214";
        clubName = "Gaming Club";
        break;
    case "german":
        info = "German Club meets on Wednesdays, 3:20, Room 324";
        clubName = "German Club";
        break;
    case "go":
        info = "Go Club meets on Fridays, 3:15, Room 214";
        clubName = "Go Club";
        break;
    case "juniorclassboard":
        info = "Junior Class Board meets on 9/24, 7:30am, Room 245";
        clubName = "Junior Class Board";
        break;
    case "justicediversity":
        info = "Justice & Diversity League meets on Tuesdays, 3:20, 243";
        clubName = "Justice & Diversity League";
        break;
    case "key":
        info = "Key Club meets on 10/8, 7:30am, Lecture Hall";
        clubName = "Key Club";
        break;
    case "math":
        info = "Math Club meets on Tuesdays, 7:00am, Room 233";
        clubName = "Math Club";
        break;
    case "nhs":
        info = "National Honor Society meets on 10/6, 7:25am or 3:35pm, Lecture Hall";
        clubName = "National Honor Society";
        break;
    case "seniorclassboard":
        info = "Senior Class Board meets on 9/24, 7:30am, Room 270";
        clubName = "Senior Class Board";
        break;
    case "studentcouncil":
        info = "Student Council meets on Fridays, 7:15am, Wildcat 1";
        clubName = "Student Council";
        break;
    case "westfriends":
        info = "West Friends meets on 1st & 3rd Thursdays, 3:15, Room 115";
        clubName = "West Friends";
        break;
}
function showInfo() {
    alert(info);
}
