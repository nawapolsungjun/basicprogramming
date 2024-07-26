function helloWorld() {
    console.log('สวัสดีเหนือ')
}// ไม่มี input ไม่มี output

helloWorld()

function secondHello(name: string) {
    console.log(name)
} // รับ Input แต่ไม่ Output

console.log(secondHello('Nuye'))

function getPi() {
    return 3.14
}

console.log(getPi())


function start(fname: string, sname: string, tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}

start('nan', 'yo', 'pleum')


function a(sex: string, height: number, weight: number) {
    if (sex === 'men' && height > 170 || (weight > 50 && weight <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

a('men', 170, 111)