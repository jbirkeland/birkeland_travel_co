Vue.component('places-component', {
    props: ['placeName', 'tripDescription','tripDuration','tripMonth','tripCost','lodgingAndFoodIncl','accommodationType','airfareIncl','activityLevel','weather','avgTemp'],
    template: `
    <div class="places-container">
      <h3>{{placeName}}</h3>
      <p>{{tripDescription}}</p>
      <ul>
        <li>{{tripDuration}}</li>
        <li>{{tripMonth}}</li>
        <li>{{tripCost}}</li>
        <li>{{lodgingAndFoodIncl}}</li>
        <li>{{accommodationType}}</li>
        <li>{{airfareIncl}}</li>
        <li>{{activityLevel}}</li>
        <li>{{weather}}</li>
        <li>{{avgTemp}}</li>
      </ul>`
});

var vm = new Vue({
    el: "#app",
    data: {
        places: [
            {
                placeName: "Bergen, Norway",
                tripDescription: "History and Hiking in the Homeland",
                tripDuration: "10 days",
                tripMonth: "August and September",
                tripCost: "$5,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "4 nights in hotels, 4 nights camping",
                airfareIncl: "No",
                activityLevel: "Moderate, some hiking involved",
                weather: "Partly Cloudy, Rainy",
                avgTemp: "45 to 55 degrees Fahrenheit"
            },
            {
                placeName: "San Diego, California",
                tripDescription: "A Sunny Start to Spring in Southern California",
                tripDuration: "4 days",
                tripMonth: "March and April",
                tripCost: "$1,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "3 nights in hotels",
                airfareIncl: "Yes",
                activityLevel: "Moderate, several long walks per day",
                weather: "Sunny",
                avgTemp: "65 to 75 degrees Fahrenheit"
            },
            {
                placeName: "Tofte, Minnesota",
                tripDescription: "Nothing but Nature on the North Shore",
                tripDuration: "5 days",
                tripMonth: "December and January",
                tripCost: "$500",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "4 nights hotel",
                airfareIncl: "No",
                activityLevel: "Difficult, several long hikes per day",
                weather: "Partly Cloudy, Snowy",
                avgTemp: "-15 to 15 degrees Fahrenheit"
            },
            {
                placeName: "Mykonos, Greece",
                tripDescription: "Relaxing in the Magnificent Mediterranean",
                tripDuration: "10 days",
                tripMonth: "September and October",
                tripCost: "$7,000",
                lodgingAndFoodIncl: "Yes",
                accommodationType: "8 nights in hotels",
                airfareIncl: "No",
                activityLevel: "Easy, beaches and great food",
                weather: "Partly Sunny, Windy",
                avgTemp: "70 to 80 degrees Fahrenheit"
            },

        ]
    }
});