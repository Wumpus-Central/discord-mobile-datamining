// _runtime/metro/17148__.js
const items = [0.05, 0.2, 0.4, 0.6];
let c0 = 0.55;
Math.sqrt(1.8);
let num = 0;
let num2 = 0;
do {
  do {
    let tmp6 = (374761393 * num2) ^ tmp5 ^ 2147483647;
    let _Math = Math;
    let imulResult = Math.imul(tmp6 ^ (tmp6 >>> 13), 1274126177);
    let diff = items.length - 1;
    let num3 = 0;
    let tmp11 = diff;
    if (0 < items.length) {
      while (true) {
        let sum = num3 + 1;
        let num4 = 1;
        if (sum < items.length) {
          num4 = items[sum];
        }
        tmp11 = num3;
        if (tmp8 < num4) {
          break;
        } else {
          tmp11 = diff;
          num3 = sum;
          if (sum >= items.length) {
            break;
          }
        }
      }
    }
    let arr2 = tmp3[tmp11];
    let point = { x: 6 * num2, y: tmp4 };
    let arr = arr2.push(point);
    num2 = num2 + 1;
  } while (num2 < 24);
  num = num + 1;
} while (num < 24);
