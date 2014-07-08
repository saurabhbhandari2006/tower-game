var myCards = [
    {
        "card1": {
            "type": "attack",
            "id": "1",
            "red": "6",
            "blue": "0",
            "green": "4",
            "attack": "5",
            "image": "images/card1.png"
        },
        "card2": {
            "type": "build",
            "id": "2",
            "red": "8",
            "blue": "5",
            "green": "5",
            "attack": "8",
            "image": "images/card2.png"
        },
        "card3": {
            "type": "resource",
            "id": "3",
            "red": "10",
            "blue": "0",
            "green": "0",
            "attack": "12",
            "image": "images/card3.png"
        }
    }
];

$(document).ready(function () {
    var red_val = 50;
    var blue_val = 50; // for blue
    var green_val = 50; // for green
    var red, blue, green, attack;
    var tower_health = 50;
    var cal_health_tower;
    var r40_50 = false;
    var r30_40 = false;
    var r20_30 = false;
    var r10_20 = false;
    var card_type;

    $('#red_score').text(red_val);
    $('#blue_score').text(blue_val);
    $('#green_score').text(green_val);
    $('#tower_health').text(tower_health);

    user_turn = true;
    console.log("user_turn  on load :- " + user_turn);
    $(".cards").click(function (event) {
        card_type = $(this).find('img').attr("data-val-type");

        switch(card_type) {
            case "build":
                call_build();
                break;
            case "attack":
                call_attack();
                break;
            case "resource":
                call_resource();
                break;
            default:
                console.log("do nothing")
        }

        console.log();
        user_turn = true;
        comp_turn = false;
        //console.log("user_turn  on click of card :- " + user_turn);
        //console.log("comp_turn  on click of card :- " + comp_turn);
        red = $(this).find('img').attr("data-val-red");
        blue = $(this).find('img').attr("data-val-blue");
        green = $(this).find('img').attr("data-val-green");
        attack = $(this).find('img').attr("data-val-attack");


        var calRed = $('#red_score').text() - parseInt(red);
        var calBlue = $('#blue_score').text() - parseInt(blue);
        var calGreen = $('#green_score').text() - parseInt(green);
        var cal_health_tower = $('#tower_health').text() - attack;
        $('#tower_health').text(cal_health_tower);
        var calculated_th = $('#tower_health').text();

        //console.log(calRed);

        if( (parseInt(calRed)<0) ){
            event.preventDefault();
            alert("not enough resources")
        }
        else{
            $("#red_score").text(calRed);
            $("#blue_score").text(calBlue);
            $("#green_score").text(calGreen);
        }

        if (r40_50==false){
            if (between(calculated_th, 40 , 50)) {
                console.log("do nothing");
            }
            else{
                console.log("top tower damaged");
                $('#tower_container2').find('#t_block_5').attr('src','images/right/Layer1.png');
                //decrease_tower_height();
                r40_50=true;
            }
        }

        if ((r30_40==false) && (r40_50==true)){
            if (between(calculated_th, 30, 40)) {
                console.log("do nothing");
            }
            else{
                console.log("dec");
                decrease_tower_height();
                r30_40=true;
            }
        }

        if ((r20_30==false) && (r30_40==true) && (r40_50==true)){
            if (between(calculated_th, 20, 30)) {
                console.log("do nothing");
            }
            else{
                console.log("dec");
                decrease_tower_height();
                r20_30=true;
            }
        }

        if ((r10_20==false) && (r20_30==true) && (r30_40==true) && (r40_50==true)){
            if (between(calculated_th, 10, 20)) {
                console.log("do nothing");
            }
            else{
                console.log("dec");
                decrease_tower_height();
                r10_20=true;
            }
        }


        user_turn = false;
        comp_turn = true;

        console.log("user_turn after score :- " + user_turn);
        console.log("comp_turn after score  :- " + comp_turn);

//        if ( (comp_turn==true) && (user_turn==false)){
//           comp_play()
//        }
    });

});

function call_attack(){
    console.log("in attack fn");
}

function call_build(){
    console.log("in build fn");
}

function call_resource(){
    console.log("in resource fn");
}

function decrease_tower_height(){
    $('#tower_container2').animate({height: '-=50'}, 500);
}

function comp_play(){
    console.log("computer playing");

    var cards_present = [0, 1, 2];
    var item = cards_present[Math.floor(Math.random()*cards_present.length)];
    console.log(item);
    //console.log($($(".cards")[item]).attr('class'));
    $(".cards")[item].click(card_click(item));


    user_turn = true;
    comp_turn = false;

    console.log("user_turn after computer played :- " + user_turn);
    console.log("comp_turn after computer played :- " + comp_turn);

    if ( (comp_turn==false) && (user_turn==true)){
        user_play();
    }
}

function user_play(){
    console.log("click on card");
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function card_click(this_card_index){
    console.log($($(".cards")[this_card_index]).attr('class'));
};

