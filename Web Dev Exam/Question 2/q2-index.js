function printRightTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
                for (let space = 1; space <= rows - i; space++) {
            line += " ";
        }
        
        for (let star = 1; star <= i; star++) {
            line += "*";
        }
        
        console.log(line);
    }
}
printRightTriangle(5);