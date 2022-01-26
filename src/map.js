let textMap = [
    ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
    ['0 + - - - - + - - - - - + 0 + - - - - - + - - - - + 0'],
    ['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
    ['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
    ['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
    ['0 + - - - - + - - + - - + - + - - + - - + - - - - + 0'],
    ['0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0'],
    ['0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0'],
    ['0 + - - - - + 0 0 + - - + 0 + - - + 0 0 + - - - - + 0'],
    ['0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 + - - + - + - - + 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 | 0 0 0 1 0 0 0 | 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 | 0 0 1 1 1 0 0 | 0 0 | 0 0 0 0 0 0'],
    ['+ - - - - - + - - + 0 0 1 1 1 0 0 + - - + - - - - - +'],
    ['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 + - - - - - - - + 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
    ['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
    ['0 + - - - - + - - + - - + 0 + - - + - - + - - - - + 0'],
    ['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
    ['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
    ['0 + - + 0 0 + - - + - - + - + - - + - - + 0 0 + - + 0'],
    ['0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0'],
    ['0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0'],
    ['0 + - + - - + 0 0 + - - + 0 + - - + 0 0 + - - + - + 0'],
    ['0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0'],
    ['0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0'],
    ['0 + - - - - - - - - - - + - + - - - - - - - - - - + 0'],
    ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']
    ];
    
    
    let world = [];
    
        for(var i= 0; i < textMap.length; i++) {
            for(var j = 0; j < textMap[j].length; j++) {
                world.push(textMap[i][j].split(" "));
            }
        }
    
 