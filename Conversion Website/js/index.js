// let pageTab = "Home"

// constTabSelected = document.querySelectorAll(".nav-link")
// constTabSelected.forEach(l => {
//     l.addEventListener("click", e => {
//         console.log("tab selected is :: ", l.innerText)
//     })
// })

const FromMenuBtnClicked = document.querySelector(".from-menu")
FromMenuBtnClicked.addEventListener("click", e => {
    const MenuItemsFrom= document.querySelector(".menu-items-from")
    let foundIndex = MenuItemsFrom.className.indexOf("visible")
    if(foundIndex === -1) {
        MenuItemsFrom.className += "visible"
    } else {
        MenuItemsFrom.className = MenuItemsFrom.className.slice(0, foundIndex)
    }
})

const ToMenuBtnClicked = document.querySelector(".to-menu")
ToMenuBtnClicked.addEventListener("click", e => {
    const MenuItemsTo= document.querySelector(".menu-items-to")
    let foundIndex = MenuItemsTo.className.indexOf("visible")
    if(foundIndex === -1) {
        MenuItemsTo.className += "visible"
    } else {
        MenuItemsTo.className = MenuItemsTo.className.slice(0, foundIndex)
    }
})

let fromUnit = ""
let toUnit = ""
let fromValue = ""

const dropdownItemFromClicked = document.querySelectorAll(".item-from")
dropdownItemFromClicked.forEach(o => {
    o.addEventListener("click", e => {
        dropdownItemFromClicked.forEach(a => {
            let foundIndex = a.className.indexOf("active")
            if(foundIndex > -1) {
                a.className = a.className.slice(0, foundIndex)
            }
        })
        o.className += "active"
        fromUnit = o.innerText

        calculateAndUpdateResult() 
    })
})

const dropdownItemToClicked = document.querySelectorAll(".item-to")
dropdownItemToClicked.forEach(o => {
    o.addEventListener("click", e => {
        dropdownItemToClicked.forEach(a => {
            let foundIndex = a.className.indexOf("active")
            if(foundIndex > -1) {
                a.className = a.className.slice(0, foundIndex)
            }
        })
        o.className += "active"
        toUnit = o.innerText

        calculateAndUpdateResult() 
    })
})

const inputBoxFrom = document.getElementById("input-from")
inputBoxFrom.addEventListener("input", e => {
    fromValue = inputBoxFrom.value
   
    calculateAndUpdateResult()
})

function calculateAndUpdateResult() {
    if(fromUnit !== "" && toUnit !== "") {
        let result = convertLength()
        const inputBoxTo = document.getElementById("input-to")
        inputBoxTo.value = result

        
    }
}
 
function convertLength() {
    if(fromValue === "") {
        fromValueLocal = 0
    } else {
        fromValueLocal = Number(fromValue) 
    }
    switch(String(fromUnit)) {
        case "Meters" :
            switch(String(toUnit)) {
                case "Meters" :
                    return fromValueLocal * 1 
                case "Kilometers":
                    return fromValueLocal * 0.001
                case "Inches":
                    return fromValueLocal * 39.3701
                case "Feet":
                    return fromValueLocal * 3.28084
            }
            break
        case "Kilometers":
            switch(String(toUnit)) {
                case "Meters" :
                    return fromValueLocal * 1000
                case "Kilometers":
                    return fromValueLocal * 1
                case "Inches":
                    return fromValueLocal * 39370.1
                case "Feet":
                    return fromValueLocal * 3280.84
            }
            break
        case "Inches":
            switch(String(toUnit)) {
                case "Meters" :
                    return fromValueLocal * 0.0254
                case "Kilometers":
                    return fromValueLocal * 0.0000254
                case "Inches":
                    return fromValueLocal * 1
                case "Feet":
                    return fromValueLocal * 0.0833333
            }
            break
        case "Feet":
            switch(String(toUnit)) {
                case "Meters" :
                    return fromValueLocal * 0.3048
                case "Kilometers":
                    return fromValueLocal * 0.0003048
                case "Inches":
                    return fromValueLocal * 12
                case "Feet":
                    return fromValueLocal * 1
            }
            break
    }
}

// function convertWeight() {
//     if(fromValue === "") {
//         fromValueLocal = 0
//     } else {
//         fromValueLocal = Number(fromValue) 
//     }
//     switch(String(fromUnit)) {
//         case "Grams" :
//             switch(String(toUnit)) {
//                 case "Grams" :
//                     return fromValueLocal * 1 
//                 case "Kilograms":
//                     return fromValueLocal * 0.001
//                 case "Pounds":
//                     return fromValueLocal * 0.00220462
//                 case "Ounces":
//                     return fromValueLocal * 0.035274
//             }
//             break
//         case "Kilograms":
//             switch(String(toUnit)) {
//                 case "Grams" :
//                     return fromValueLocal * 1000
//                 case "Kilograms":
//                     return fromValueLocal * 1
//                 case "Pounds":
//                     return fromValueLocal * 2.20462
//                 case "Ounces":
//                     return fromValueLocal * 35.274
//             }
//             break
//         case "Pounds":
//             switch(String(toUnit)) {
//                 case "Grams" :
//                     return fromValueLocal * 453.592
//                 case "Kilograms":
//                     return fromValueLocal * 0.453592
//                 case "Pounds":
//                     return fromValueLocal * 1
//                 case "Ounces":
//                     return fromValueLocal * 16
//             }
//             break
//         case "Ounces":
//             switch(String(toUnit)) {
//                 case "Grams" :
//                     return fromValueLocal * 28.3495
//                 case "Kilograms":
//                     return fromValueLocal * 0.0283495
//                 case "Pounds":
//                     return fromValueLocal * 0.0625
//                 case "Ounces":
//                     return fromValueLocal * 1
//             }
//             break
//     }
// }