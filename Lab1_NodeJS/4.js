sum3 = (x) => {
    return (y,z) => {return x+y+z}
}

xy = sum3(1)
console.log(xy(2,3))
