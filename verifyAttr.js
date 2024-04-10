export const verifyAttr=(arr,atrName,val)=>{
    return arr.find(obj=>obj[atrName]==val)
}