var vm = new Vue({
    el: "#app",
    data: {
        places: [
            {
                index: 1,
                placeName: "Bergen, Norway",
                tripDescription: "History and Hiking in the Homeland",
                tripDuration: "10 days",
                tripMonth: "August and September",
                tripCost: "$5,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "4 nights in hotels, 4 nights camping",
                airfareIncl: "No",
                activityLevel: "Moderate, some hiking involved",
                footwear: "adequate shoes with good support",
                clothing: "rain gear, warm clothes, wool socks, quick-dry clothing",
                weather: "partly cloudy and rainy",
                avgTemp: "45 to 55 degrees Fahrenheit",
                leavingUSA: "outside of the USA",
                additionalItems: "A passport will be required, and you will need medical documents, insurance cards and a copy of banking documents"
            },
            {
                index: 2,
                placeName: "San Diego, California",
                tripDescription: "A Sunny Start to Spring in Southern California",
                tripDuration: "4 days",
                tripMonth: "March and April",
                tripCost: "$1,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "3 nights in hotels",
                airfareIncl: "Yes",
                activityLevel: "Moderate, several long walks per day",
                footwear: "adequate shoes with good support and sandals",
                clothing: "lightweight clothing, light jacket and shorts",
                weather: "sunny",
                avgTemp: "65 to 75 degrees Fahrenheit",
                leavingUSA: "within the USA",
                additionalItems: "You shouldn't need additional items"
            },
            {
                index: 3,
                placeName: "Tofte, Minnesota",
                tripDescription: "Surviving Winter: Nothing but Nature on the North Shore",
                tripDuration: "5 days",
                tripMonth: "December and January",
                tripCost: "$500",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "4 nights hotel",
                airfareIncl: "No",
                activityLevel: "Difficult, several long hikes per day",
                footwear: "winter boots required",
                clothing: "very warm clothing, thermal base layers, wool socks, hat and gloves",
                weather: "partly cloudy and snowy",
                avgTemp: "-15 to 15 degrees Fahrenheit",
                leavingUSA: "within the USA",
                additionalItems: "You shouldn't need additional items"
            },
            {
                index: 4,
                placeName: "Mykonos, Greece",
                tripDescription: "Relaxing on the Magnificent Mediterranean",
                tripDuration: "10 days",
                tripMonth: "September and October",
                tripCost: "$7,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "8 nights in hotels",
                airfareIncl: "No",
                activityLevel: "Easy, beaches and great food",
                footwear: "sandals",
                clothing: "lightweight clothing, swimwear, and a protective sun hat",
                weather: "partly sunny and windy",
                avgTemp: "70 to 80 degrees Fahrenheit",
                leavingUSA: "outside of the USA",
                additionalItems: "A passport will be required, and you will need medical documents, insurance cards and a copy of banking documents"
            },
        ]
    }
});

var bookNow = document.getElementById("book");

var printNow = document.getElementById("print");

bookNow.addEventListener('click', function(){
    var bookParaTag = document.createElement("h4");
    bookNow.appendChild(bookParaTag);

    var bookParaMessage = document.createTextNode("Woo Hoo!! You're going to have an amazing trip!");
    bookParaTag.appendChild(bookParaMessage);

    bookParaTag.classList.add("bookyes");
});

printNow.addEventListener('click', function(){
    var printParaTag = document.createElement("h4");
    printNow.appendChild(printParaTag);

    var printParaMessage = document.createTextNode("Don't forget to pack a smile! If you forget it, we'll have one for you when you arrive!");
    printParaTag.appendChild(printParaMessage);

    printParaTag.classList.add("printsmile");
});