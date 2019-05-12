//Vue.component('places-component', {
    //props: ['placeName', 'tripDescription','tripDuration','tripMonth','tripCost','lodgingAndFoodIncl','accommodationType','airfareIncl','activityLevel','weather','avgTemp'],
    //template: `
    //<div class="places-container">
        //<h3>{{placeName}}</h3>
        //<p>{{tripDescription}}</p>
        //<ul>
          //<li>{{tripDuration}}</li>
          //<li>{{tripMonth}}</li>
          //<li>{{tripCost}}</li>
          //<li>{{lodgingAndFoodIncl}}</li>
          //<li>{{accommodationType}}</li>
          //<li>{{airfareIncl}}</li>
          //<li>{{activityLevel}}</li>
          //<li>{{weather}}</li>
          //<li>{{avgTemp}}</li>
        //</ul>
      //</div>
    //</div>`
//});

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
                activityLevel: "moderate, some hiking involved",
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
                activityLevel: "moderate, several long walks per day",
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
                tripDescription: "Nothing but Nature on the North Shore",
                tripDuration: "5 days",
                tripMonth: "December and January",
                tripCost: "$500",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "4 nights hotel",
                airfareIncl: "No",
                activityLevel: "difficult, several long hikes per day",
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
                tripDescription: "Relaxing in the Magnificent Mediterranean",
                tripDuration: "10 days",
                tripMonth: "September and October",
                tripCost: "$7,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "8 nights in hotels",
                airfareIncl: "No",
                activityLevel: "easy, beaches and great food",
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