// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

  const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

const superbowlWin = (arr) => {
    const wins = arr.find((element) => {
        if(element.result === "W"){
            return element
        }
    })
    if(wins){
        return wins.year
    }
}

console.log(superbowlWin(sadReality))