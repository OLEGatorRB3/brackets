module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
    // ['(', '(', '(', ')', ')', ')', '(', ')']

    let obj = bracketsConfig.reduce((acc, cur) => {
        acc[cur[1]] = cur[0]
        return acc
    }, {})
    console.log(obj)
    // {
        // ): '(',
        // ]: '[', 
        // }: '{', 
        // |: '|'
    // }
    let brackets = Object.values(obj)
    console.log(brackets)

    let stek = [];
    for(let i = 0; i < str.length; i++){
        let cur = str[i];
        // console.log(cur)

        if(brackets.includes(cur)){
            stek.push(cur)
        }         
        let lastElement = stek[stek.length - 1];
        console.log(lastElement)

        if(obj[cur] == lastElement) {
            stek.pop()
        } 
        
        
    }
    console.log(stek)
    return (stek.length == 0)
}
