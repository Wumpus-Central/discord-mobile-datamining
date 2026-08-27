// _runtime/09759_byteLength.js
arg5.byteLength = function byteLength(arr) {
  if (0 < arr.length % 4) {
    const _Error = Error;
    error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (-1 === index) {
      index = length;
    }
    const items = [index, ];
    let num2 = 0;
    if (index !== length) {
      num2 = 4 - index % 4;
    }
    items[1] = num2;
    return 3 * (items[0] + items[1]) / 4 - items[1];
  }
};
arg5.toByteArray = function toByteArray(arr) {
  if (0 < arr.length % 4) {
    const _Error = Error;
    error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (-1 === index) {
      index = length;
    }
    const items = [index, ];
    let num = 0;
    if (index !== length) {
      num = 4 - index % 4;
    }
    items[1] = num;
    [tmp2, tmp3] = items;
    const tmp7 = new closure_2(3 * (tmp2 + tmp3) / 4 - tmp3);
    let diff = tmp2;
    if (tmp3 > 0) {
      diff = tmp2 - 4;
    }
    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    let num14 = 0;
    if (0 < diff) {
      do {
        let tmp10 = dependencyMap2;
        let tmp11 = dependencyMap2[arr.charCodeAt(arr, num12)] << 18;
        let tmp12 = dependencyMap2[arr.charCodeAt(arr, num12 + 1)] << 12;
        let tmp13 = dependencyMap2[arr.charCodeAt(arr, num12 + 2)] << 6;
        let tmp14 = tmp11 | tmp12 | tmp13 | dependencyMap2[arr.charCodeAt(arr, num12 + 3)];
        let sum = num11 + 1;
        tmp7[num11] = tmp14 >> 16 & 255;
        let sum1 = sum + 1;
        tmp7[sum] = tmp14 >> 8 & 255;
        num11 = sum1 + 1;
        tmp7[sum1] = 255 & tmp14;
        num12 = num12 + 4;
        num13 = num11;
        num14 = num12;
      } while (num12 < diff);
    }
    let sum2 = num13;
    if (2 === tmp3) {
      sum2 = num13 + 1;
      tmp7[num13] = 255 & (dependencyMap2[arr.charCodeAt(arr, num14)] << 2 | dependencyMap2[arr.charCodeAt(arr, num14 + 1)] >> 4);
      const tmp19 = dependencyMap2[arr.charCodeAt(arr, num14)] << 2;
    }
    if (1 === tmp3) {
      const tmp21 = dependencyMap2[arr.charCodeAt(arr, num14)] << 10;
      const tmp23 = tmp21 | dependencyMap2[arr.charCodeAt(arr, num14 + 1)] << 4 | dependencyMap2[arr.charCodeAt(arr, num14 + 2)] >> 2;
      tmp7[sum2] = tmp23 >> 8 & 255;
      tmp7[sum2 + 1] = 255 & tmp23;
      const tmp22 = dependencyMap2[arr.charCodeAt(arr, num14 + 1)] << 4;
    }
    return tmp7;
  }
};
arg5.fromByteArray = function fromByteArray(arg0) {
  let sum;
  const result = length % 3;
  const items = [];
  const diff = length - result;
  let num = 0;
  if (0 < diff) {
    do {
      sum = num + 16383;
      let sum2 = num;
      let tmp5 = sum;
      if (diff < sum) {
        tmp5 = diff;
      }
      let items1 = [];
      if (sum2 < tmp5) {
        do {
          let sum1 = (arg0[sum2] << 16 & 16711680) + (arg0[sum2 + 1] << 8 & 65280) + (255 & arg0[sum2 + 2]);
          let tmp7 = dependencyMap;
          let arr = items1.push(dependencyMap[sum1 >> 18 & 63] + dependencyMap[sum1 >> 12 & 63] + dependencyMap[sum1 >> 6 & 63] + dependencyMap[63 & sum1]);
          sum2 = sum2 + 3;
        } while (sum2 < tmp5);
      }
      arr = items.push(items1.join(""));
      num = sum;
    } while (sum < diff);
  }
  if (1 === result) {
    items.push(`${closure_0[arg0[length - 1] >> 2]}${closure_0[arg0[length - 1] << 4 & 63]}==`);
  } else if (2 === result) {
    const sum3 = (arg0[length - 2] << 8) + arg0[length - 1];
    items.push(`${closure_0[tmp13 >> 10]}${closure_0[tmp13 >> 4 & 63]}${closure_0[tmp13 << 2 & 63]}=`);
  }
  return items.join("");
};
let closure_0 = [];
let closure_1 = [];
let closure_2 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;