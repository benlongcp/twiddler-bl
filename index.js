
$(document).ready(() => {
  const $body = $('body');
  $body.html('');//clears the bod


////////////////////////////

//make and style the tweet div

$($body).css('background-color', '#ffccff')
// 
$body.append("<div id='tweet-div'></div>")

let $tweetDiv = $('#tweet-div');
console.log("TWEET CONTENTS:", $tweetDiv)

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
$($tweetDiv).css( 'width', '50%')




///////////////////////////////

//TITLE
let $title = $("<div><h1 class='site-title' style='display:none'>TWIDDLER<img id='dump' src='https://www.snipershide.com/shooting/attachments/giphy-gif.7617343/' height='25'/></h1><div><h3 class='site-title' style='display:none'>oy vey</h3>")


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
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`;

      $tweet.text(text);

      return $tweet.append("<div>", moment().calendar()).append(" - - - ", moment().format()).append("</div>").append('<div id="spacer"> - - - - - - </div>');


    });

    $tweetDiv.append($tweets).append("<div> </div>")
  };


///////////////////////////

//OTHER PEOPLE

console.log("STREAMS", streams)

console.log("USERS", users)


users.forEach(user => console.log(user));









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
  $($tweetButt).css( 'margin', 'auto')
  $($tweetButt).css( 'width', '50%')
  $($tweetButt).css( 'padding', '25px 25px 25px 25px')

  $("#tb-div").css( 'display', 'flex')
  $("#tb-div").css( 'align-items', 'center')
  $("#tb-div").css( 'justify-content', 'center')

  
  $('#tweet-butt').click(function(){
    $tweetDiv.append(makeTweets())
    $($tweetDiv).animate({scrollTop: $($tweetDiv).prop('scrollHeight')}, 100);
  })

//////////////////////////////

//tweet our own input


  $body.append('<div id="me-tweet"></div>')

  $meTweet = $('#me-tweet');

 

  $meTweet.append("<form id='tweeter'><input type='text' id='speak' value='type-speak'/ ><div class='butt-spacer'></div><button type='button' id='deliver'>deliver</button></form>")

  $($meTweet).css( 'display', 'flex')
  $($meTweet).css( 'align-items', 'center')
  $($meTweet).css( 'justify-content', 'center')
  $($meTweet).css( 'height', '200px')

  let $tweeter = $('#tweeter')
  
  console.log("TWEETER FORM:", $tweeter)

  

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

///////////////////////
//DELIVER TWEET BUTTON

  $deliverButt = $("");
  $meTweet.append($deliverButt)
  console.log("DELIVER BUTTON:", $deliverButt);


  $('#deliver').on('click',function(event){
    event.preventDefault();
    makeTweets()

    const $inputString = $('#speak').val();

    $('#tweet-div').append("<div>@YOU:  " + $inputString + "</div>").append(" - - - - - ").append(moment().calendar()).append(" - - - ", moment().format());;

    $($tweetDiv).animate({scrollTop: $($tweetDiv).prop('scrollHeight')}, 100);
  })

//////////////////////////



  $(document).ready(function(){
    $deliverButt.click(function(){
        $("#tweeter").submit(); // Submit the form
    });
  });


makeTweets();


});

//create a div that contains all the tweets