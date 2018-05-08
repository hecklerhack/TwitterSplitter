var msg = document.getElementById("msg").textContent;
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

for(var j = 0; j < lines.length; j++)
{
  var str2 = (j+1) + "/" + lines.length + " ";
  lines[j] = str2.concat(lines[j]);
}

console.log(lines);
