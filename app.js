// This function is retrieving data from specific web servers and is used alongside two APIs.
// Quotes are generated through this function.
function generateQuote(eventDetails) {
    let taylorAjax = new XMLHttpRequest();
    let kanyeAjax = new XMLHttpRequest();

    let kanyeQuote = "";
    let taylorQuote = "";
    // Data retrieved from the server is transformed into a JS Object (using the JSON.parse method), for Javascript to read and interpret.
    taylorAjax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let taylorObject = JSON.parse(this.responseText);
            taylorQuote = taylorObject.quote;
            drawQuote();
        }
    }
    // Data retrieved from the server is transformed into a JS Object (using the JSON.parse method), for Javascript to read and interpret.
    kanyeAjax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let kanyeObject = JSON.parse(this.responseText);
            kanyeQuote = kanyeObject.quote;
            drawQuote();
        }
    }
    
    // This function displays the quotes on the page.
    // The conditional statement ensures that both quotes are displayed on the page exactly at the same time.
    function drawQuote() {
        if (kanyeQuote === "" || taylorQuote === "") {
            return;
        }
        
        // Both quotes will be displayed on the page.
        // Every quote made by Taylor Swift is cut in half before she gets disturbed by Kanye West.
        // Due to a lack of consideration for others, Kanye West cuts off Taylor Swift and gets his full quote.
        // However, he makes great music. His debut album, The College Dropout, is a classic.
        let taylorQuote1 = taylorQuote.slice(0, Math.floor(taylorQuote.length / 2));
        document.getElementById("taylorQuote1").innerHTML = taylorQuote1;
        document.getElementById("kanyeQuote").innerHTML = kanyeQuote;
    }
    
    // Making a request to the specified website's servers for the API.
    // The open function is used to configure our request and takes three arguments.
    // The send function is where the request is being made.
    taylorAjax.open("GET", "https://api.taylor.rest", true);
    taylorAjax.send();
    
    kanyeAjax.open("GET", "https://api.kanye.rest", true);
    kanyeAjax.send();
}

// Uses the click event so that the quotes generate when the specified button is clicked on.
document.getElementById("clickForQuote").addEventListener("click", generateQuote);

// This function is called upon so the page generates and displays the quotes when the user enters the site.
generateQuote();
