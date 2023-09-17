const graphDiv = document.getElementById("graph");
const premButton = document.getElementById("premier");
const l1Button = document.getElementById("ligue1");

premButton.onclick = () =>{
    fetcher(39)
}
l1Button.onclick = () =>{
    fetcher(61)
}
function fetcher(league){
    fetch(
        "https://oa-u1wt.onrender.com/api/?league="+league
        // "http://localhost:3000/api?league="+league //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
    ).then(async res => {
        Plotly.newPlot( graphDiv, [ await res.json() ]); 
    })
};
