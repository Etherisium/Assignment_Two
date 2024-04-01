function connect() {

    var searchcountryname = document.getElementById("countryBox").value ;

   

    var url= `https://restcountries.com/v3.1/name/${searchcountryname}?fullText=true`;
    

    fetch (url)
    .then (res => res.json() )
    .then( data => {console.log(data); show(data);})  }
    



function show (data) {
    
    var oldContent = document.getElementById("container");

   oldContent.textContent = " "; 
   
    for (var i=0; i< data.length; i++)
    
    {
   
       var newDiv = document.createElement("div");

       newDiv.innerHTML = `<h3>Country Name: <b>${data[i].name.common}</b> </h3><br>
                           <img src= "${data[i].flags.png}"> <br> <br>
                         <h3> Capital Name:</h3> <b>${data[i].capital}</b> <br><br> 
                         <h3> Population: </h3> <b> ${data[i].population} </b><br><br> 
                         <h3> Region: </h3> <b> ${data[i].region}<br><br> 
                         
                          <button onclick="display()"> More Details </button> `; 

       newDiv.classList.add("innerStyle");

       oldContent.appendChild(newDiv); 
       
    }
   
    
   
   
   }


function display(){

    var searchcountryname = document.getElementById("countryBox").value ;

console.log(searchcountryname);
 var weatherurl= `https://api.openweathermap.org/data/2.5/weather?q=${searchcountryname}&mode=json&appid=c266da69146121644983d8cb693644d6`;
    
    fetch (weatherurl)
    .then (res => res.json() )
    .then( weatherdata => {console.log(weatherdata); display2(weatherdata);})  }

 function display2 (weatherdata) {
    
        var oldContent = document.getElementById("container");
    
    
        oldContent.textContent = " "; 
        
           var newDiv = document.createElement("div");
    
           newDiv.innerHTML = ` <h2>Country Weather</h2> <br><br><br>
           <h3>Weather</h3> <b>${weatherdata.weather[0].main}</b> <br>
                              <h3>Description</h3> <b>${weatherdata.weather[0].description}</b> <br><br>

                              <h3>Temperature</h3> <b>${weatherdata.main.temp}</b> <br><br>`; 
    
           newDiv.classList.add("innerStyle");
    
oldContent.appendChild(newDiv); 
           
        
        
       
       
       }