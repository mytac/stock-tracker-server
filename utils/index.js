const compareByAsc = (a, b) => {
    const c = a.charCodeAt()
    const d = b.charCodeAt()
    if (c < d) return -1
    if (c > d) return 1
    return compareByAsc(a.slice(1), b.slice(1))
}

const sortByAscIICode = (obj) => {
    const keys = Object.keys(obj)
    const sortedKeys = keys.sort(compareByAsc)
    const res = {}
    sortedKeys.forEach(key => {
        res[key] = obj[key]
    })
    return res
}

const qsStringify = obj => {
    let str = ''
    const keys = Object.keys(obj)
    keys.forEach((key, index) => {
        if (typeof obj[key] === 'string') {
            str += `${key}=${obj[key]}&`
        }
    })
    str = str.slice(0, -1)
    return str
}
/* module.exports = {
    sortByAscIICode
} */



console.log(qsStringify(sortByAscIICode(wechat_signature)))