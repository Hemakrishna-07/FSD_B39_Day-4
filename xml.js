const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayResult(){
    const countries = xhr.response;
    console.log(countries);
    console.log("No of countries =", countries.length);
    
    //Displaying all the country names in the console
    for(let index in countries){
        console.log('Country', +index+1, 'is', countries[index].name); 
     }

     //Displaying all the country Regions in the console
    for(let index in countries){
        console.log('Region of country', +index+1, 'is', countries[index].region); 
     }

     //Displaying all the country sub-regions in the console
    for(let index in countries){
        console.log('Sub-Region of country', +index+1, 'is', countries[index].subregion); 
     }

     //Displaying all the country populations in the console
    for(let index in countries){
        console.log('Population of country', +index+1, 'is', countries[index].population); 
     }

    //Displaying all the country lags in the console
    for(let index in countries){
        console.log('Click link to see Flag of country', +index+1, countries[index].flags.png); 
     }

};