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
// Call this function from WITHIN your row elements loop. Then you will, in turn,need to loop over the resulting cell elements. 
//But where should this whole NESTED LOOP go? Think through the user's experience: when should WHAT happen? Requirements
//Write a nested loop which loops over the array of cell elements.
//For each cell element, check if a cell contains the user-provided search string. Use the string method includes().
//If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.

// YOUR CODE GOES HERE
//Add a click event listener to the replaceAllButton.
//On click but outside of a loop, assign the values of the two input textboxes ( findInput and replaceInput), so that you are only retrieving these values once per click.
replaceAllButton.addEventListener("click", function () {
    let searchString = findInput.value
    let replaceString = replaceInput.value
    let tally = 0
    
    console.log(searchString, replaceString)

    //Write a loop which loops over the rowElements array (which is already provided in the starter code).
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1) {
        //Inside this loop, invoke the function getCellElements() function from above and assign the resulting array of cell elements to a variable.
        const currentRowElement = rowElements[rowIndex]
        let cellElements = getCellElements(currentRowElement)

        // assigns extracted row to variable currentRowElement     
        //console.log("currentRowElement is " + rowIndex + ": " + cellElements);
        console.log("currentRowElement is " + rowIndex + ": ", cellElements);
        //let columns = column - headers.length
        // come back and figure out how to extract the # columns based on number of div in html
        // console.log("you have" + column - headers.length + "columns of data in your table")
        //let currentCellElement = ""

        for (let cellIndex = 0; cellIndex < cellElements.length; cellIndex += 1) {
            //for (let columnIndex = 0; columnIndex < 7; columnIndex += 1) {
            const currentCellElement = cellElements[cellIndex]
            let currentCellString = currentCellElement.innerHTML
            console.log("columnIndex is " + cellIndex + ": ", currentCellElement);

            while (currentCellString.includes(searchString)) {
                //let newCellElement = replace(currentCellElement | (findInput.value, replaceInput.value))
                //console.log(currentCellElement.replace(findInput, replaceInput));
                currentCellString = currentCellString.replace(searchString, replaceString)
                tally = tally + 1
            }
            currentCellElement.innerHTML = currentCellString
        }
    }
    console.log("You replaced " + tally + "items")
    tally.innerHTML = tally
})


// One last thing: dedicate very careful attention to using variables and naming them accurately. When you change the value you are assigning to a variable, 
// don't forget to consider changing the name to reflect the change you made! It is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of developing your code means wasted time.
// The time-cost of structuring and naming things well is FAR less than the time-cost of ignoring the quality and readability of your code. Stretch Goals
// Display for the user the number of items replaced during the most recent replace button press. But do so with JavaScript, 
// without changing the HTML file by hand. You can add some CSS for this.
// In addition to the "Replace All" button, create a "Replace One" button which only replaces the first occurrence of the found search string.
// replaceOneButton.addEventListener("click", function ()) {
   // let searchOneString = findInput.value
   // let replaceOneString = replaceInput.value
   // for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1) {
       // const currentRowElement = rowElements[rowIndex]
       // for (let cellIndex = 0; cellIndex < cellElements.length; cellIndex += 1) {
            //const currentCellElement = cellElements[cellIndex]
            //let currentCellString = currentCellElement.innerHTML
            //while (currentCellString.includes(searchString)) {
               // currentCellString = currentCellString.replace(searchString, replaceString)
            //}
// Add a checkbox which toggles case-insensitive searches.
// Research and use LocalStorage and JSON.stringify() to store a history of the user-provided search strings 
// which will persist beyond page refreshes. On page load, display any past search history in a console.log.