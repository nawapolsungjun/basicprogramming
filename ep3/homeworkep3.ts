function BMI(weight: number, height: number){
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