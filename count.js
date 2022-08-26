function postView() {
    fetch("https://WebViewCounterAPI.alvin-hartantoh.repl.co/api/viewcount/add/htalvingithub", {method:"POST",})
    .then (response => {
        return response.json();
    })
    .catch (error => {
        console.log(error);
    })
}

function getView() {
    fetch("https://WebViewCounterAPI.alvin-hartantoh.repl.co/api/viewcount/retrieve/htalvingithub", {method:"GET",})
    .then (response => {
        return response.json();
    })
    .then (data => {
        document.getElementById("viewCount").innerHTML = "Total page view count: " + data.viewCount;
    })
    .catch (error => {
        console.log(error);
    })
}

postView();
getView();