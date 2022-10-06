const prompt = require('prompt-sync')({sigint: true})

let one = "color combination"
let two = "color deconstruction"
let userChoice1 = (prompt("This is color calculator, 'one' is to combine and 'two' is to deconstruct. Enter your choice: "))

if (userChoice1 === "one"){
    let color1 = (prompt("choose first color: "))
    let color2 = (prompt("choose second color: "))

    if(color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){
    console.log("purple")
    }
    else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
    console.log("orange")
    } 
    else if(color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue"){
    console.log("green")    
    }
    else{
        console.log("error")
    }
}

if (userChoice1 === "two"){
    let color3 = (prompt("What color do you want to deconstruct?"))
    
    if(color3 === "purple"){
        console.log("purple comes from red + blue")
    }
    else if(color3 === "orange"){
        console.log("orange comes from red + yellow")
    }
    else if(color3 === "green"){
        console.log("green comes from blue + yellow")
    }
    else{
        console.log("error")
    }
}
