
$(document).ready(() => {
  const $body = $('body');
  $body.html('');//clears the bod


////////////////////////////

//make and style the tweet div

$body.append("<div id='tweet-div'></div>")

let $tweetDiv = $('#tweet-div');
console.log("TWEET CONTENTS:", $tweetDiv)

$($tweetDiv).css( 'background-color', '#F5F5F5')
$($tweetDiv).css( 'border', '1px solid #DDDDDD')
$($tweetDiv).css( 'border-radius', '4px 0 4px 0')
$($tweetDiv).css( 'font-size', '12px')
$($tweetDiv).css( 'font-weight', 'bold')
$($tweetDiv).css( 'left', '-1px')
$($tweetDiv).css( 'padding', '10px 7px 5px')
$($tweetDiv).css( 'display', 'block')
$($tweetDiv).css( 'height', '200px')
$($tweetDiv).css( 'overflow', 'scroll');

// $($tweetDiv).animate({scrollTop: $($tweetDiv).prop('scrollHeight')}, 1000);

///////////////////////////////

//TITLE
let $title = $("<div><h1 id='site-title' style='display:none'>TWIDDLER</h1><div>")

$body.prepend($title);
$('#site-title').fadeIn(3000)
$title.css('color', 'red')

//////////////////////////////////////

//makes the tweets appear



  function makeTweets(){

    const $tweets = streams.home.map((tweet) => {
      const $tweet = $('<div id="single-tweet"></div>');
      const text = `@${tweet.user}: ${tweet.message}`;

      $tweet.text(text);

      return $tweet.append(" - - - - - ").append(moment().calendar()).append(" - - - ", moment().format());


    });

;

    $tweetDiv.append($tweets)
  }


///////////////////////////

//add more tweets

  let $singleTweet = $('#single-tweet');

  console.log($singleTweet)

  $body.append('<button id="tweet-butt">more tweets!</button>')

  $('#tweet-butt').click(function(){
    $tweetDiv.append(makeTweets())
  })

//////////////////////////////

  $body.append('<div id="me-tweet"></div>')

  $meTweet = $('#me-tweet');

  console.log("METWEET", $meTweet)




  $meTweet.append("<form id='tweeter'><div><label for='speak'>speak</label><input type='text' id='speak' value='type-speak'/><button type='button' id='deliver'>deliver</button></div></form>")


///////////////////////
//DELIVER TWEET BUTTON

  $deliverButt = $("");
  $meTweet.append($deliverButt)
  console.log("DELIVER BUTTON:", $deliverButt);


  $('#deliver').on('click',function(event){
    event.preventDefault();

    const inputString = $('#speak').val();
    $('#tweet-div').prepend(inputString);
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