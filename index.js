document.getElementById("enter").addEventListener('click', splitMessage);

function splitMessage(e)
{
  var msg = document.getElementById("tweet").value;
  var lines = [""];
  var counter = 0;
  var index = 0;
  for(var i = 0; i < msg.length; i++)
  {
    counter = counter + 1;
    var str1 = lines[index];
    if(counter + 4 < 50)
    {
      lines[index] = str1.concat(msg.charAt(i));
    }
    else {
      index++;
      str1 = "";
      lines[index] = str1.concat(msg.charAt(i));
      counter = 0;
    }
  }

  var board = document.getElementById("tweetHolder");

  for(var j = 0; j < lines.length; j++)
  {
    var str2 = (j+1) + "/" + lines.length + " ";
    lines[j] = str2.concat(lines[j]);
    board.insertAdjacentHTML("beforeend", lines[j] + "<br>");
  }
//  board.insertAdjacentHTML("beforeend", "</div></div>");
}
