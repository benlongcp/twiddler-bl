
$(document).ready(() => {
  const $body = $('body');
  $body.html('');//clears the bod


////////////////////////////

//make and style the tweet div

$($body).css('background-color', '#ffccff')
// 
$body.append("<div id='title-spacer'></div><div id='tweet-div'></div>")

let $tweetDiv = $('#tweet-div');
// console.log("TWEET CONTENTS:", $tweetDiv)

$($tweetDiv).css( 'background-color', '#F5F5F5')
$($tweetDiv).css( 'border', '1px solid #DDDDDD')
$($tweetDiv).css( 'border-radius', '4px 4px 4px 4px')
$($tweetDiv).css( 'font-size', '12px')
$($tweetDiv).css( 'font-weight', 'bold')
// $($tweetDiv).css( 'left', '-1px')
$($tweetDiv).css( 'padding', '10px 7px 5px')
$($tweetDiv).css( 'display', 'block')
$($tweetDiv).css( 'height', '200px')
$($tweetDiv).css( 'overflow', 'scroll');
$($tweetDiv).css( 'padding', '25px 25px 25px 25px');
$($tweetDiv).css( 'margin', 'auto')
$($tweetDiv).css( 'width', '500px')




///////////////////////////////

//TITLE STYLE
let $title = $("<div><h1 class='site-title' style='display:none'>TWIDDLER<img id='dump' src='https://www.snipershide.com/shooting/attachments/giphy-gif.7617343/' height='25'/></h1><h3 class='site-title' style='display:none'>oy vey</h3><div>")


$body.prepend($title);
$title.css('position', 'relative')
$title.css('text-align', 'center')
$title.css('font-family', 'cursive')
$title.css('margin', '0px')

$('h3').delay(1000)
$('.site-title').fadeIn(3000)

$title.css('color', 'red')

$("h3").css('margin', '4px')
$("h3").css('position', 'absolute')
$("h3").css('top', '66%')
$("h3").css('left', '48%')




//////////////////////////////////////

//makes the tweets appear


  function makeTweets(){

    const $tweets = streams.home.map((tweet) => {
      const $tweet = $('<div class="single-tweet"></div>');

      let $tweetUser = $("<div class='username'>" +"<h2> @"+ tweet.user + ":</h2>" + "</div>")

      $tweet.append($tweetUser)
      $tweet.append("<div class='tweet-mess'>" + tweet.message +"</div>");

      return $tweet.append("<div id='time-spacer'></div><div>  - - -  ", moment().calendar()).append("  . . . . . . . .  ", moment().format()).append("</div>").append('<div id="spacer"></div>');

    });

    $tweetDiv.append($tweets)
    $singleTweet = $('.single-tweet');



//////////////////////////////////////////////////////////////////////////

//DELIVER TWEET BUTTON

$deliverButt = $("");
$meTweet.append($deliverButt)

//click the button:

function makeOwnTweets(){

  $('#deliver').on('click',function(event){
    event.preventDefault();
    makeTweets()
  
    

    const $inputString = $('#speak').val();
  
    const $userTweeter = $("<div class='youser-name'>" +"<h2> @YOU:</h2></div>")
  
    const $userTweet = $("<div class='your-string'>"+ $inputString + " " + "</div>")
  
    const $tweetTime = $("<div class='tweet-time'>" + (moment().calendar()) + " . . . . . . . . " + moment().format() + "</div>")
  
  
    const $userFullTweet = $('#tweet-div').append($userTweeter)
    .append($userTweet)
    .append($tweetTime)
  
    // .append(" - - - - - ")
    // .append(moment().calendar())
    // .append(" - - - ", moment().format());
  
    $('.youser-name').css('color', 'red');
  
    $($tweetDiv).animate({scrollTop: $($tweetDiv).prop('scrollHeight')}, 100);
  
    /////////////////////////////////
  
  return $userFullTweet;
    
    
    
    /////////////////////////////////
  
  })
}


makeOwnTweets();


/////////////////////////////////////




//////////////////////
//Make usernames red
let $userName = $('.username');
$('.username').css('color', 'red');

// console.log($userName);

//////////////////////////////////////////////////////////////////////////


  //GET OTHER PEOPLES' INFO

  const $youserName = $('.youser-name');
  console.log("YOUSERNAME:", $youserName);
  let currentUser;

///////////////////////////

//your OWN profile ..............................

  $($("#tweet-div")).on('click', '.youser-name' ,function(){
    console.log("you clicked")

    currentUser = this;
   
    $("#title-spacer").append('<div id="user-profile">')
    $('#user-profile').prepend('<button id="close-butt">X</button>')
    $('#tweet-div').hide()

    $("#tweet-butt").prop(
      "disabled",
      true
  );

  $("#deliver").prop(
    "disabled",

    true
);

// X CLOSE BUTTON STYLE
$("#close-butt").css( 'background-color', '#555555')
//  $("#close-butt").css( 'padding', '10px 10px')
$("#close-butt").css( 'font-size', '12px')
$("#close-butt").css( 'color', 'white')
$("#close-butt").css( 'border-radius', '4px')
$("#close-butt").css( 'font-family', 'cursive')
$("#close-butt").css( 'position', 'fixed')
$("#close-butt").css( 'top', '100px')
$("#close-butt").css( 'right', '67%')
$("#close-butt").css( 'transform', 'translate(-50%, -50%')
 $("#close-butt").css( 'margin', 'auto')
//  $("#close-butt").css( 'width', '5%')
//  $("#close-butt").css( 'padding', '8px 8px 8px 8px')


//closes the profile window
$('#close-butt').on('click', function(){
  $("#user-profile").remove();
  $("#tweet-div").show();
  $("#tweet-butt").prop(
    "disabled",
    false
    );
    $("#deliver").prop(
      "disabled",
      false
  );
})

///////////////////////////////////////
//USER PROFILE STYLING
// console.log("!!! User Profile !!!", $('#user-profile'))
$('#user-profile').css( 'background-color', '#F5F5F5')
$('#user-profile').css( 'border', '1px solid #DDDDDD')
$('#user-profile').css( 'border-radius', '4px 4px 4px 4px')
$('#user-profile').css( 'font-size', '12px')
$('#user-profile').css( 'font-weight', 'bold')
//  $('#user-profile').css( 'left', '-1px')
$('#user-profile').css( 'padding', '10px 7px 5px')
$('#user-profile').css( 'display', 'block')
$('#user-profile').css( 'height', '200px')
$('#user-profile').css( 'overflow', 'scroll');
$('#user-profile').css( 'padding', '25px 25px 25px 25px');
$('#user-profile').css( 'margin', 'auto')
$('#user-profile').css( 'width', '500px')


////////////////////////////////////////////////////////
//USER TWEET HISTORY

//loop through all the single tweets

   
    $("#user-profile")
    .append($(".youser-name"), $(".your-string"), $(".tweet-time"))





  })
///////////,,,,,,,,,,,,,,,
  
  //CLICK ON OTHER USERNAME
  $($userName).on('click', function(){
    console.log(this, "click")

  currentUser = this;
   
    $("#title-spacer").append('<div id="user-profile">')
    $('#user-profile').prepend('<button id="close-butt">X</button>')
    $('#tweet-div').hide()

    $("#tweet-butt").prop(
      "disabled",
      true
  );

  $("#deliver").prop(
    "disabled",

    true
);

  // X CLOSE BUTTON STYLE
    $("#close-butt").css( 'background-color', '#555555')
    //  $("#close-butt").css( 'padding', '10px 10px')
    $("#close-butt").css( 'font-size', '12px')
    $("#close-butt").css( 'color', 'white')
    $("#close-butt").css( 'border-radius', '4px')
    $("#close-butt").css( 'font-family', 'cursive')
    $("#close-butt").css( 'position', 'fixed')
    $("#close-butt").css( 'top', '100px')
    $("#close-butt").css( 'right', '67%')
    $("#close-butt").css( 'transform', 'translate(-50%, -50%')
     $("#close-butt").css( 'margin', 'auto')
    //  $("#close-butt").css( 'width', '5%')
    //  $("#close-butt").css( 'padding', '8px 8px 8px 8px')


  //closes the profile window
    $('#close-butt').on('click', function(){
      $("#user-profile").remove();
      $("#tweet-div").show();
      $("#tweet-butt").prop(
        "disabled",
        false
        );
        $("#deliver").prop(
          "disabled",
          false
      );
    })

///////////////////////////////////////
    //USER PROFILE STYLING
    // console.log("!!! User Profile !!!", $('#user-profile'))
    $('#user-profile').css( 'background-color', '#F5F5F5')
    $('#user-profile').css( 'border', '1px solid #DDDDDD')
    $('#user-profile').css( 'border-radius', '4px 4px 4px 4px')
    $('#user-profile').css( 'font-size', '12px')
    $('#user-profile').css( 'font-weight', 'bold')
    //  $('#user-profile').css( 'left', '-1px')
    $('#user-profile').css( 'padding', '10px 7px 5px')
    $('#user-profile').css( 'display', 'block')
    $('#user-profile').css( 'height', '200px')
    $('#user-profile').css( 'overflow', 'scroll');
    $('#user-profile').css( 'padding', '25px 25px 25px 25px');
    $('#user-profile').css( 'margin', 'auto')
    $('#user-profile').css( 'width', '500px')


    ////////////////////////////////////////////////////////
    //USER TWEET HISTORY

    //loop through all the single tweets
    for (let i = 0; i < $('.single-tweet').length; i++){

      if (currentUser.innerText.slice(2, -1) === $('.username')[i].innerText.slice(2, -1)){
       
        $("#user-profile")
        .append("<p>")
        .append($(".single-tweet")[i].innerText)
        .append("</p>")
        .append("<div> - - - - - - </div>")
      }

    
    }

    $("#time-spacer").css("white-space", "pre-line")
  })

//   $(".username").on('click', function(){
//     console.log($(".username"), "click")

//     $("#title-spacer").append('<div id="user-profile">')
//     $('#user-profile').prepend('<button id="close-butt">X</button>')
//     $('#tweet-div').hide()

//     $("#tweet-butt").prop(
//       "disabled",
//       true
//   );

//   $("#deliver").prop(
//     "disabled",

//     true
// );
//   })
};




//////////////////////////////
//add more tweets

  $body.append('<div id="tb-div"><div id="top-butt-spacer"></div><button id="tweet-butt">more tweets!</button></div>')

  let $tweetButt = ('#tweet-butt')
  
  $($tweetButt).css( 'background-color', '#555555')
  $($tweetButt).css( 'padding', '15px 32px')
  $($tweetButt).css( 'font-size', '24px')
  $($tweetButt).css( 'color', 'white')
  $($tweetButt).css( 'border-radius', '4px')
  $($tweetButt).css( 'font-family', 'cursive')
  $($tweetButt).css( 'position', 'relative')
  // $($tweetButt).css( 'margin', 'auto')
  $($tweetButt).css( 'width', '500px')
  $($tweetButt).css( 'padding', '25px 25px 25px 25px')

  $("#tb-div").css( 'display', 'flex')
  $("#tb-div").css( 'align-items', 'center')
  $("#tb-div").css( 'justify-content', 'center')

  
  $('#tweet-butt').click(function(){
    $tweetDiv.append(makeTweets())
    $($tweetDiv).animate({scrollTop: $($tweetDiv).prop('scrollHeight')}, 100);
  })

//////////////////////////////

//Tweet Input Styling

  $body.append('<div id="me-tweet"></div>')

  $meTweet = $('#me-tweet');

  $meTweet.append("<form id='tweeter'><input type='text' id='speak' value='dispense wisdom'/ ><div class='butt-spacer'></div><button type='button' id='deliver'>deliver</button></form>")

  $($meTweet).css( 'display', 'flex')
  $($meTweet).css( 'align-items', 'center')
  $($meTweet).css( 'justify-content', 'center')
  $($meTweet).css( 'height', '100px')
  
  $('#tweeter').css( 'padding', '12px 20px');
  $('#tweeter').css( 'margin', '8px 0');
  $('#tweeter').css( 'width', '33%');

  $('#speak').css('width', '97%')

  $('#deliver').css('width', '100%')
  $('#deliver').css( 'background-color', '#555555')
  $('#deliver').css( 'padding', '15px 32px')
  $('#deliver').css( 'color', 'white')
  $('#deliver').css( 'font-family', 'cursive')
  $('#deliver').css( 'border-radius', '4px')

  $('#tb-div').prepend($("<div class='butt-spacer'></div>"))

$("#top-butt-spacer").css('margin-top', '15%')

  $('.butt-spacer').css('height', '4px')

  $('#deliver').css
  $('#deliver').css


//////////////////////////

  $(document).ready(function(){
    $deliverButt.click(function(){
        $("#tweeter").submit();
         // Submit the form


    });
  });


makeTweets();


});

