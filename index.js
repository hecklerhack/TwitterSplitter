document.getElementById("enter").addEventListener('click', splitMessage);

function splitMessage(e)
{
  var msg = document.getElementById("tweet").value;
  var splitTweet = msg.split(" ");
  var lines = [""];
  var counter = 0;
  var index = 0;

  var board = document.getElementById("tweetBoard");

  for(var i = 0; i < splitTweet.length; i++)
  {
    var tweet = splitTweet[i];
    if(tweet.length > 50)
    {
      board.innerHTML = "<div class='alert alert-danger' role='alert'>Error: Can't split</div>";
      return false;
    }
    tweet +=  " ";
    counter = counter + tweet.length;
    console.log(counter);
    var str1 = lines[index];
    if(counter + 4 < 50)
    {
      lines[index] = str1.concat(tweet);
    }
    else {
      index++;
      str1 = "";
      lines[index] = str1.concat(tweet);
      str1 = lines[index];
      counter = str1.length;
    }
  }

  board.innerHTML="";
  for(var j = 0; j < lines.length; j++)
  {
    var str2 = (j+1) + "/" + lines.length + " ";
    lines[j] = str2.concat(lines[j]);
    //console.log(lines[j]);
    board.innerHTML += "<div class='card bg-transparent text-info border-info'><div class='card-body'>"+lines[j] +"</div></div>";
  }
    document.getElementById('tweetForm').reset();
//  board.insertAdjacentHTML("beforeend", "</div></div>");
}
