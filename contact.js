{
    function buildJsonFormData(form) {
        const formData = {};

        formData["timestamp"] = Date.now();

        for (const pair of new FormData(form)) {
            formData[pair[0]] = pair[1];
        }

        console.log(formData);

        const jsonData = JSON.stringify(formData);
        console.log(jsonData);


        return jsonData;
    }


    function formSubmit(e, form) {
        e.preventDefault();

        console.log("submitting form...")

        const btnSubmit = document.getElementById("Submit");
        btnSubmit.disabled = true;

        setTimeout(() => btnSubmit.disabled = false, 2000);

        const jsonFormData = buildJsonFormData(form);

        fetch("https://WebViewCounterAPI.alvin-hartantoh.repl.co/api/contact/submit", {method:"POST", mode:"cors", headers: {"Content-type":"application/json"}, body: jsonFormData})
        .then (response => {
            document.getElementById("contactResult").classList.add("contactSuccess");
            document.getElementById("contactResult").innerHTML = "Contact sent successfully!";
            return response.json();
        })
        .catch (error => {
            document.getElementById("contactResult").classList.add("contactFailed");
            document.getElementById("contactResult").innerHTML = "Failed to request contact.";
            console.log(error);
        })
    }

    const formQuery = document.querySelector("#contactForm");
    if (formQuery) {

        formQuery.addEventListener("Submit", function(e) {
            console.log("Gate1 pass")
            formSubmit(e, this);
        })
        
        console.log("Query ready");
    }
}