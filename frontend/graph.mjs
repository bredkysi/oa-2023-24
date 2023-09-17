const graphDiv = document.getElementById("graph");
const premButton = document.getElementById("premier");
const l1Button = document.getElementById("ligue1");
const spanButton = document.getElementById("spanish");
const germanButton = document.getElementById("german");
const italyButton = document.getElementById("italy");

premButton.onclick = () =>{
    fetcher(39)
}
l1Button.onclick = () =>{
    fetcher(61)
}
spanButton.onclick = () =>{
    fetcher(140)
}
germanButton.onclick = () => {
    fetcher(78)
}
italyButton.onclick = () => {
    fetcher(135)
}
function fetcher(league){
    fetch(
        "https://oa-u1wt.onrender.com/api/?league="+league
        // "http://localhost:3000/api?league="+league //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
    ).then(async res => {
        Plotly.newPlot( graphDiv, [ await res.json() ]); 
    })
};
