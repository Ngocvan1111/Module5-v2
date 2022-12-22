
function fibonacci(n: number) {
    let f1: number = 0;
    let f2:number = 1;
    let f3:number;
    let temp:number;
    let sum:number = f1+f2;
    console.log(f1);
    console.log(f2);
    for (let i = 2;i<n;i++){
        f3 = f1+f2;
        temp = f3;
        f1 = f2;
        f2 = temp;
        sum += f3;
        console.log(f3);
    }
    return sum;
}
let n:number = parseInt(<string>prompt("Nhap so luong so: ")) ;
let result = fibonacci(n);
document.write("Sum of fibonacci: " + result);