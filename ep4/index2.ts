// รับตัวเลขจัดรับทศนิยมที่ต้องการ
function fixed(x:number,y:number){
    const z = x.toFixed(y)
    return z
}
console.log(fixed(5.48,5))

// รับตัวเลขจัดการเติม , ส่งค่าออกไป return
function LocaleString(x:number){
    const z = x.toLocaleString()
    return z        
}
console.log(LocaleString(99999999999999999999))

const str:string =`Nawapol` 

console.log(str.indexOf('a'))