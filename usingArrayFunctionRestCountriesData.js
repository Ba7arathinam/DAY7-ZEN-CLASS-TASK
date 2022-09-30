//1.Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
//HTTP method:GET
//ADD API URL
request.open("GET","https://restcountries.com/v2/all");
//send request to server
request.send();
//status code or server code is 200
//onload is a event which will be fired once a data
//successfully loaded a data
request.onload=function(){
    //apply the JSON.parse method
    //we convert into array object
    var res=JSON.parse(request.response);
    console.log(res);
    var reg=res.filter((ele)=>ele.region==="Asia")
    console.log(reg)

    //2.Get all the countries with a population of less than 2 lakhs using Filter function
    var pop=res.filter((ele)=>ele.population<200000)
    console.log(pop)

    //3.Print the following details name, capital, flag using forEach function
    res.forEach(data => {
        console.log("Name: "+data.name+",","Capital: "+data.capital+",","Flag: "+data.flag)
    });

    //4.Print the total population of countries using reduce function
     var tot=res.reduce((acc,cv)=>acc+cv.population,0);
    console.log("Total population is :"+tot)
    
    //5.Print the country which uses US Dollars as currency
    var dollar=res.filter((ele)=>ele.currencies[0].codes==="USD")
    console.log(dollar)
}
   



