var days = {
    "Monday" : 0,
    "Tuesday": 1,
    "Wednesday" : 2,
    "Thursday" : 3,
    "Friday" : 4,
    "Saturday" : 5,
    "Sunday": 6
    
}

var daysNumber = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
    
}

function addElement(dict, date, value) {
    var tmp = date.toISOString().substring(0, 10)
    dict[tmp] = value;
}

function makeTmpDict(tDict, dict){
    for (let key in dict) {
        let date = new Date(key);
        let day = date.toLocaleString('en-us', {weekday: 'long'});
        
        if(tDict.hasOwnProperty(day)){
            tDict[day] = dict[key] + tDict[day]
        }
        else{
            tDict[day] = dict[key]
        }
    }
}

function findAns(ans, tDict, days, daysNumber){
    for(let day in days){
        
        let small = day.substring(0, 3);
        
        if(tDict.hasOwnProperty(day)){
            ans[small] = tDict[day]
        }
        else{
            let key1 = Math.abs((days[day]-1 + 7)%7)
            let key2 = Math.abs(days[day]+1)
            let day1 = daysNumber[key1]
            let day2 = daysNumber[key2]
            
            ans[small] = (tDict[day1] + tDict[day2])/2
        }
    }
}

var dict = {}
addElement(dict, new Date("2020-01-01"), 4)
addElement(dict, new Date("2020-01-02"), 4)
addElement(dict, new Date("2020-01-03"), 6)
addElement(dict, new Date("2020-01-04"), 8)
addElement(dict, new Date("2020-01-05"), 2)
addElement(dict, new Date("2020-01-06"), -6)
addElement(dict, new Date("2020-01-07"), 2)
addElement(dict, new Date("2020-01-08"), -2)

// console.log(dict);



var tDict = {}
makeTmpDict(tDict, dict);
// console.log(tDict);


var ans = {}
findAns(ans, tDict,days, daysNumber)
console.log(ans)