let overviewCards = [
    {
        "info": "Page Views",
        "website": "Facebook",
        "number": "87",
        "percentage": "3",
        "increase": true
    },
    {
        "info": "Likes",
        "website": "Facebook",
        "number": "52",
        "percentage": "3",
        "increase": false
    },
    {
        "info": "Likes",
        "website": "Instagram",
        "number": "5462",
        "percentage": "3",
        "increase": true
    },
    {
        "info": "Profile Views",
        "website": "Instagram",
        "number": "52k",
        "percentage": "1375",
        "increase": true
    },
    {
        "info": "Retweets",
        "website": "Twitter",
        "number": "117",
        "percentage": "303",
        "increase": true
    },
    {
        "info": "Likes",
        "website": "Twitter",
        "number": "507",
        "percentage": "553",
        "increase": true
    },
    {
        "info": "Likes",
        "website": "YouTube",
        "number": "107",
        "percentage": "19",
        "increase": false
    },
    {
        "info": "Total Views",
        "website": "YouTube",
        "number": "1407",
        "percentage": "12",
        "increase": false
    }
]


function formSubmit () {
    var inputDetails = {
        "username": $("#username-input").val(),
        "number": $("#number-input").val(),
        "text": $("#text-input").val(),
        "website": $("#website-input").val()
    }   

    var arr = []
    if (localStorage.getItem("cards-storage")) {
        arr = localStorage.getItem("cards-storage");
        arr = JSON.parse(arr);
        arr.push(inputDetails);
        console.log(arr);            
    }
    else {
        arr.push(inputDetails);
    }
    // console.log(arr);
    localStorage.setItem("cards-storage", JSON.stringify(arr));

    $("#username-input").val('');
    $("#number-input").val('');
    $("#text-input").val('');
    $("#website-input").val('');

}
$(document).ready(function(){
    
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "true") {
        $("body").toggleClass('dark');
    }

    

    let cardsList = localStorage.getItem("cards-storage");
    cardsList = JSON.parse(cardsList);
    // console.log(JSON.parse(cardsList));
    // console.log(cardsList);
    // console.log(JSON.parse(cardsList));
    let followersCount = 0;
    for (let i = 0; i < cardsList.length; i++) {
        let col3 = $("<div>", {"class": "col-md-3 g-4"});
        let div1 = $("<div>", {"class": "h-100 info-card d-flex flex-column align-items-center"});
        let div2 = $("<div>", {"class": "d-flex flex-row align-items-center gap-1 mt-3"});
        let icon = $("<img>", {"class": "website-icon"});
        let username = $("<div>", {"class": "followers-username", "text": cardsList[i].username});
        let followers = $("<div>", {"class": "followers-count", "text": cardsList[i].number});
        let followersText = $("<div>", {"class": "followers-desc", "text": cardsList[i].text});

        followersCount = followersCount + parseInt(cardsList[i].number);
        
        let todayTextDiv = $("<div>", {"class": "today-wrapper my-3 d-flex flex-row align-items-center"})
        let todayIcon = $("<i>", {"class": "bi bi-arrow-up-short"});
        let todayText = $("<h3>", {"class": "today-text", "text": "12 Today"});

        todayTextDiv.append(todayIcon);
        todayTextDiv.append(todayText);


        switch (cardsList[i].website) {
            case 'Facebook':
                div1.addClass('facebook-card');
                icon.attr("src", "assets/images/facebook-icon.png");
                break;
            case 'Twitter':
                div1.addClass('twitter-card');
                icon.attr("src", "assets/images/twitter-icon.png");

                break;
                case 'Instagram':
                    div1.addClass('instagram-card');
                icon.attr("src", "assets/images/instagram-icon.png");

                    break;
                    case 'YouTube':
                        div1.addClass('youtube-card');
                icon.attr("src", "assets/images/youtube-icon.png");

                        break;
        
            default:
                break;
        }


        
        $("#cards-row").append(col3);
        col3.append(div1);
        div1.append(div2);
        div2.append(icon);
        div2.append(username);
        div1.append(followers);
        div1.append(followersText);
        div1.append(todayTextDiv);

    }
    $("#followers-count").text(followersCount);

    $("#theme-switch").click(function () {
        $("body").toggleClass('dark');
        localStorage.setItem("theme", $("body").hasClass('dark'));
    });


    
for (let i = 0; i < overviewCards.length; i++) {
    var divCol = $("<div>", {"class": "col-md-3 gy-4"});
    var divFlex = $("<div>", {"class": "overview-card p-3"});
    divCol.append(divFlex);
    var titleIconDiv = $("<div>", {"class": "d-flex flex-row justify-content-between mb-3"});

    divFlex.append(titleIconDiv);

    var title = $("<h6>", {"class": "page-views", "text": overviewCards[i].info});
    var icon = $("<img>", {"class": "website-icon"});

    titleIconDiv.append(title, icon);

    var statisticsDiv = $("<div>", {"class": "d-flex flex-row justify-content-between align-items-center"});

    divFlex.append(statisticsDiv);

    var num = $("<h6>", {"class": "h2 p-0 m-0", "text": overviewCards[i].number});
    var perc = $("<h6>", {"class": "p-0 m-0", "text": overviewCards[i].percentage});
    perc.text(overviewCards[i].percentage + "%");

    var percDiv = $("<div>", {"class": "perc-div d-flex flex-row align-items-center"});
    var percIcon = $("<i>");

    percDiv.append(percIcon);
    percDiv.append(perc);


    if (overviewCards[i].increase) {  // Doesn't handle 0% case
        percDiv.addClass("green-color");
        percIcon.addClass("bi bi-arrow-up-short");
    }
    else {
        percDiv.addClass("red-color");
        percIcon.addClass("bi bi-arrow-down-short");
    }

    statisticsDiv.append(num, percDiv);




    switch (overviewCards[i].website) {
        case 'Facebook':
            icon.attr("src", "assets/images/facebook-icon.png");
            break;
        case 'Twitter':
            icon.attr("src", "assets/images/twitter-icon.png");

            break;
            case 'Instagram':
            icon.attr("src", "assets/images/instagram-icon.png");

                break;
                case 'YouTube':
            icon.attr("src", "assets/images/youtube-icon.png");

                    break;
    
        default:
            break;
    }
    

    $("#overview-row").append(divCol);
    
}

});