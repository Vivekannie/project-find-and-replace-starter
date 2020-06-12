//Program to allow users to edit table of text data
//define variables in global scope


const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-One-button")

// The following variable holds your OUTER ARRAY of row elements.

const rowElements = document.querySelectorAll(".row")
const columnElements = document.querySelectorAll(".cell")

// When you call the function belwo, it will get and return an INNER ARRAY

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

// YOUR CODE GOES HERE
let ChangingCount=0
replaceAllButton.addEventListener("click", function () {
    let findInputValue=findInput.value
    let replaceInputValue=replaceInput.value
    
    if(findInputValue.length==0||replaceInputValue.length==0){alert('Enter A Value')}
    else{
        for(let outerIndex=0;outerIndex<rowElements.length;outerIndex+=1){
            let cellrows=getCellElements(rowElements[outerIndex])
                for(let innerIndex=0;innerIndex<cellrows.length; innerIndex+=1){
                
                    
                    if(cellrows[innerIndex].innerText.includes(findInputValue)){
                    let replacement=cellrows[innerIndex].innerText
                    replacement=replacement.replace(findInputValue,replaceInputValue)
                    cellrows[innerIndex].innerHTML=replacement 
                    ChangingCount+=1
                    console.log('Number Of Changes '+ ChangingCount)
                    
                    }
                }
        }
    }
    console.log(findInputValue)
    console.log(replaceInputValue)

})


replaceOneButton.addEventListener("click", function () {
    let findInputValue=findInput.value
    let replaceInputValue=replaceInput.value
    
    if(findInputValue.length==0||replaceInputValue.length==0){alert('Enter A Value')}
    else{
        for(let outerIndex=0;outerIndex<rowElements.length;outerIndex+=1){
            let cellrows=getCellElements(rowElements[outerIndex])
                for(let innerIndex=0;innerIndex<cellrows.length; innerIndex+=1){
                
                    
                    if(cellrows[innerIndex].innerText.includes(findInputValue)){
                    let replacement=cellrows[innerIndex].innerText
                    replacement=replacement.replace(findInputValue,replaceInputValue)
                    cellrows[innerIndex].innerHTML=replacement 
                    outerIndex=rowElements.length
                    ChangingCount+=1
                    console.log('Number Of Changes '+ ChangingCount)
                    
                    }
                }
        }
    }
    console.log(findInputValue)
    console.log(replaceInputValue)
})