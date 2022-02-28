
function sendApiRequest() 
{
    var input = document.getElementById("request").value
    console.log(input)

    var KEY = "FBpYWZIgH3TZb9VYhT4pftoXNsWulilj"
    var searchURL = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${KEY}`
  fetch(searchURL)
    .then(function(data) 
    {
      return data.json();

    }).then(function(json) 
    {
        console.log(json.data[0].images.fixed_height.url)
        var imgPath = json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute ("src", imgPath)
        document.body.appendChild(img)
    })
}