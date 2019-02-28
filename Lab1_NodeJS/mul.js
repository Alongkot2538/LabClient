exports = mul = () => {
    let stdin = process.openStdin()
    stdin.addListener("data",(num) => {
        for(let i=1 ; i<=12 ; i++)
        {
            console.log(num.toString().trim() + " x " + i + " = " + (num*i))
        }
        stdin.destroy()
    })
}
