const studentsName: String = 'แนน,พู,บี,อ้นจี้,ลัคกี้,นัท,เอ็ม,ออม,ปลื้ม,ก็อต'

const studentsNameArray = studentsName.split(',')//แปลง String เป็น Array
console.log(studentsNameArray[0])
// console.log(studentsNameArray.toString()) แปลง Array กลับไปเป็น String
// console.log(studentsNameArray.join('/')) //เปลี่ยนตัวคั่นกลาง
//* */
const animalName: String = 'หมี*หมู*มด*ม้า'
const animalNameArray: String[] = animalName.split('*')
console.log('เติม: ', animalNameArray)
animalNameArray.pop() // ดึงตัวสุดท้ายออก
animalNameArray.push('คาบิบาล่า') // ดึงข้อมูลเข้า
//  "ใหม่: ",  ["หมี", "หมู", "มด", "คาบิบาล่า"] 
console.log('ใหม่: ', animalNameArray)

animalNameArray.shift() //ตัดตัวหน้า
console.log('ดึงตัวหน้า: ', animalNameArray)

animalNameArray.unshift('งูเห่า') //ใส่ตัวหน้า
// "ใส่ตัวหน้า: ",  ["งูเห่า", "หมู", "มด", "คาบิบาล่า"] 
console.log('ใส่ตัวหน้า: ', animalNameArray)

console.log('เรียง ก-ฮ ', animalNameArray.sort())
console.log('เรียง ฮ-ก ', animalNameArray.reverse())
console.log('slice 0-2 ', animalNameArray.slice(0, 2))

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log('เรียง A-Z ', fruits.sort())
console.log('เรียง Z-A ', fruits.reverse())