
function minus(a: number, b:number) {
    return a - b
}

console.log(minus(5,10))

function mul(x: number, y:number, z:number){
    return x * y * z
}

console.log(mul(5,5,4))

 
function grade(homework: number, midterm: number, final: number){
    let score: number = homework + midterm + final
    
    if(score < 50){
        return 'grade F'
    } else if (score < 60 ){
        return 'grade D'
    } else if (score < 70){
        return 'grade C'
    } else if(score < 80){
        return 'grade B'
    }else{
        return 'grade A'
    }
}
console.log(grade(20,50,10))