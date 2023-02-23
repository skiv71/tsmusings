import math from "./lib/math"

let print = (...message: any) => console.log(...message)

let ans = math.add(5, 6)

print(ans)

ans = math.subtract(ans, 4)

print(ans)

ans = math.multiply(ans, 10)

print(ans)

ans = math.divide(ans, 2)

print(ans)