function descendingOrder(n){
    let num2string = n.toString()
    let output = []
    let output2 = "" 
    
    for (let i = 0; i < num2string.length; i ++) {
      output.push(parseInt(+num2string.charAt(i)))
    }
    
    output.sort((a, b) => b - a)
    
    for (let i = 0; i < output.length; i++) {
            output2 += output[i].toString()
        
    }

    return parseInt(output2)
  }

  descendingOrder(123456789)