const mondayGraph = document.querySelector("#month-graphic")
const tuesdayGraph = document.querySelector("#tuesday-graphic")
const wednesdayGraph = document.querySelector("#wednesday-graphic")
const thursdayGraph = document.querySelector("#thursday-graphic")
const fridayGraph = document.querySelector("#friday-graphic")
const saturdayGraph = document.querySelector("#saturday-graphic")
const sundayGraph = document.querySelector("#sunday-graphic")

const mondayBox = document.querySelector("#monday-onclick")
const tuesdayBox = document.querySelector("#tuesday-onclick")
const wednesdayBox = document.querySelector("#wednesday-onclick")
const thursdayBox = document.querySelector("#thursday-onclick")
const fridayBox = document.querySelector("#friday-onclick")
const saturdayBox = document.querySelector("#saturday-onclick")
const sundayBox = document.querySelector("#sunday-onclick")

let mondayStatus = "closed"
let tuesdayStatus = "closed"
let wednesdayStatus = "closed"
let thursdayStatus = "closed"
let fridayStatus = "closed"
let saturdayStatus = "closed"
let sundayStatus = "closed"

mondayGraph.addEventListener('click',()=>{
    if(mondayStatus=="closed")
    {
        mondayStatus = "opened"
        mondayBox.style.display = "block"
    }
    else if(mondayStatus=="opened")
    {
        mondayStatus = "closed"
        mondayBox.style.display = "none"
    }
})

tuesdayGraph.addEventListener('click',()=>{
    if(tuesdayStatus=="closed")
    {
        tuesdayStatus = "opened"
        tuesdayBox.style.display = "block"
    }
    else if(tuesdayStatus=="opened")
    {
        tuesdayStatus = "closed"
        tuesdayBox.style.display = "none"
    }
})

wednesdayGraph.addEventListener('click',()=>{
    if(wednesdayStatus=="closed")
    {
        wednesdayStatus = "opened"
        wednesdayBox.style.display = "block"
    }
    else if(wednesdayStatus=="opened")
    {
        wednesdayStatus = "closed"
        wednesdayBox.style.display = "none"
    }
})

thursdayGraph.addEventListener('click',()=>{
    if(thursdayStatus=="closed")
    {
        thursdayStatus = "opened"
        thursdayBox.style.display = "block"
    }
    else if(thursdayStatus=="opened")
    {
        thursdayStatus = "closed"
        thursdayBox.style.display = "none"
    }
})

fridayGraph.addEventListener('click',()=>{
    if(fridayStatus=="closed")
    {
        fridayStatus = "opened"
        fridayBox.style.display = "block"
    }
    else if(fridayStatus=="opened")
    {
        fridayStatus = "closed"
        fridayBox.style.display = "none"
    }
})

saturdayGraph.addEventListener('click',()=>{
    if(saturdayStatus=="closed")
    {
        saturdayStatus = "opened"
        saturdayBox.style.display = "block"
    }
    else if(saturdayStatus=="opened")
    {
        saturdayStatus = "closed"
        saturdayBox.style.display = "none"
    }
})

sundayGraph.addEventListener('click',()=>{
    if(sundayStatus=="closed")
    {
        sundayStatus = "opened"
        sundayBox.style.display = "block"
    }
    else if(sundayStatus=="opened")
    {
        sundayStatus = "closed"
        sundayBox.style.display = "none"
    }
})