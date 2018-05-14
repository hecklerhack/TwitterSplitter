document.getElementById("enter").addEventListener('click', splitMessage);


function splitMessage(e)
{
  var board = document.getElementById("tweetBoard");  //where output is placed
  var msg = document.getElementById("tweet").value;   //the whole tweet
  var splitTweet = msg.split(/\s/); //split by whitespace
  var counter = 0;                //for counting the words in the tweets
  var charLimit = 50;             //character limit

  //estimateSplit makes an estimate on how many splits can be done in the tweet
  //actualSplit is the actual number of splits the algorithm has made

  /*since the length of the part indicator is appended to the string and is included in the char limit,
    the length of the part indicator may vary depending on the (digits of the) number of splits
    Thus, the number of splits may also be affected.

    For instance, if a tweet can be split into 9 without the part indicator, adding a "1/9 " to it may
    cause the characters of strings to exceed the char limit (on worst case) and result in making 10 splits instead.
    Thus, the reason why I made an estimateSplit and actualSplit.
  */
  var estimateSplit = Math.round(msg.length / charLimit);
  var actualSplit = 1;

  var lines = [""];

  while(actualSplit != estimateSplit)
  {
    var indicator = 1 + "/" + estimateSplit + " ";    //indicator would start at 1
    counter += indicator.length;                      //counts indicator length within character limit
    lines[0] = indicator;                             //initiate first indicator to the first line
    for(var i = 0; i < splitTweet.length; i++)
    {
      var word = splitTweet[i];
      if(word.length >= charLimit)                //in case a splitted word exceeds char limit
      {
        board.innerHTML = "<div class='alert alert-danger' role='alert'>Error: Can't split</div>";
        return false;
      }

      if((counter + word.length) <= charLimit)   //if word can fit within character limit
      {
        counter += word.length;                 //add length of word
        lines[actualSplit-1] += word;           //add word to the line
        if((counter + 1) <= charLimit)      //to account for spaces in between words
        {
          if(i+1 != splitTweet.length) //the last word in the tweet supposedly does not have a space afterwards
          {
            lines[actualSplit-1] += " ";
            counter++;
          }
        }
        else {        //if space can't fit in char limit
          actualSplit++;
          indicator = (actualSplit) + "/" + estimateSplit + " ";
          lines[actualSplit-1] = indicator;
          counter = indicator.length;
        }
      }
      else {      //if next word cannot fit within char limit
        actualSplit++;
        indicator = (actualSplit) + "/" + estimateSplit + " ";
        lines[actualSplit-1] = indicator + word;
        counter = indicator.length + word.length;
        if(i+1 < splitTweet.length) //the last word in the tweet supposedly does not have a space afterwards
        {
          counter++;
          lines[actualSplit-1] += " ";
        }
      }
    }
    if(actualSplit != estimateSplit)
    {
      //update estimateSplit, reset counter and start over again
      estimateSplit = actualSplit;
      actualSplit = 1;
      counter = 0;
    }
  }

  //print lines of tweets
  board.innerHTML="";
  for(var j = 0; j < lines.length; j++)
  {
    //var str2 = (j+1) + "/" + lines.length + " ";
    //lines[j] = str2.concat(lines[j]);
    board.innerHTML += "<div class='card bg-transparent text-info border-info'><div class='card-body'>"+lines[j] +"</div></div>";
  }
    document.getElementById('tweetForm').reset();
}
