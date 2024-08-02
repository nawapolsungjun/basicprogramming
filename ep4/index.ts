/** 
 * 
 * function BMI(weight: number, height: number){
    let score: number = weight / (height*height)
    
    if(score < 18.5){
        return 'น้ำหนักน้อย / ผอม ภาวะเสี่ยงต่อโรค มากกว่าปกติ'
    } else if (score >= 18.50 && score <= 22.90 ){
        return 'ปกติ (สุขภาพดี) ภาวะเสี่ยงต่อโรค เท่าคนปกติ'
    } else if (score >= 23 && score <= 24.90){
        return 'ท้วม / โรคอ้วนระดับ 1 ภาวะเสี่ยงต่อโรค อันตรายระดับ 1'
    } else if(score >= 25 && score <= 29.90){
        return 'อ้วน / โรคอ้วนระดับ 2 ภาวะเสี่ยงต่อโรค อันตรายระดับ 1'
    }else if (score > 30){
        return 'อ้วนมาก / โรคอ้วยระดับ 3 ภาวะเสี่ยงต่อโรค อันตรายระดับ 1'
    }return
}
console.log(BMI(50,1.65))


function sayHi(dayOfweek: number) {
    if (dayOfweek === 1) {
        console.log('อาทิตย์')
    } else if (dayOfweek === 2) {
        console.log('จันทร์')
    } else if (dayOfweek === 3) {
        console.log('อังคาร')
    } else if (dayOfweek === 4) {
        console.log('พุธ')
    } else if (dayOfweek === 5) {
        console.log('พฤหัสบดี')
    } else if (dayOfweek === 6) {
        console.log('ศุกร์')
    } else if (dayOfweek === 7) {
        console.log('เสาร์')
    }
}

*/

function sayHi(dayOfweek: number) {
    switch (dayOfweek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
    }
}
sayHi(7)

console.log(getBmi(50, 180))

function getBmi(weight: number, height: number){

    const bmi: number = weight / ((height / 100) * (height / 100))

    
    switch (true) {
        case bmi < 18.50:
            console.log('น้ำหนักน้อย / ผอม');
            break;
        case bmi >= 18.50 && bmi <= 22.90:
            console.log('ปกติ (สุขภาพดี)');
            break;
        case bmi >= 23 && bmi <= 24.90:
            console.log('ท้วม');
            break;
        case bmi >= 25 && bmi <= 29.90:
            console.log('อ้วน');
            break;
        case bmi > 30:
            console.log('อ้วนมาก');
            break;
        default:
            console.log('ผิดพลาด');
            break;
    }
}

getBmi(50, 180);
