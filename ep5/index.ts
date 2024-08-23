/**
let i: number = 1
let sum: number = 0

for (let j = 1; j < 10; j++) {
    i = i * 5
}
while (i <= 360) {
    sum = sum + i
    i++
}

console.log('total', sum) 
*/


// infinity loop
/** 
let sum: number = 0
let isBreak: boolean = false

while (true) {
    console.log('โสด')
    if (isBreak) {
        break
    }
}

setTimeout(() => {
    isBreak = true
}, 1000)
*/


/** 
let sum: number = 0
let isBreak: boolean = false
let row: number = 0

while (true) {
    console.log('โสด')
    row++
    if (row ===3) {
        break
    }
}
*/


//array

const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']

/** 
car[1] = 'Mazda' // เปลี่ยน array ที่ 1 คือ Yamaha เป็น Mazda

console.log(car[1]) // ทำการ output array 1 ออก
*/


/**
// loop สมาชิกที่เลือกใน Array
for (let i = 0; i < 4; i++) { 
   console.log(car[1])
}
*/

/** 
 * // for loop สมาชิก
for (let i = 0; i < car.length; i++) { 
   console.log(car[i])
}
*/


/** 
// ทำการลูปสมาชิก ถ้าสมาชิกเป็น Yamaha ให้ แสดง รถซื้อแกง จะแรงได้ยังไง
for (let i = 0;i < car.length ; i++) {
   if(car[i] === 'Yamaha'){
       console.log('รถซื้อแกง จะแรงได้ยังไง')
   }
}
*/

/** 
// การทำงานแบบ forEach ทำงานเหมือนกับ for loop สมาชิก สั้นกว่า
car.forEach(function (c) {
    console.log(c)
})
*/


 /** 
// การทำงานแบบ forEach เหมือนข้างบน เรียก function ด้านนอก
car.forEach(ck)

function ck(car: string){
    console.log(car)
}
*/