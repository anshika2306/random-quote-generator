var qbtn = document.getElementById("qbtn");
const url = "https://api.quotable.io/random";
function quote(){
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        document.getElementById("quoteText").innerHTML = `"${data.content}"`;
        document.getElementById("author").innerHTML = data.author;

    })
    .catch(err => console.log(err));
}
qbtn.addEventListener("click",quote);