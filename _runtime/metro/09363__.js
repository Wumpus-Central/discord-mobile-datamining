// _runtime/metro/09363__.js
let items = [];
let items1 = [];
let closure_2 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
let num = 0;
do {
  items[num] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[num];
  let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt;
  items1["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(num)] = num;
  num = num + 1;
} while (num < 64);
items1["-".charCodeAt(0)] = 62;
items1["_".charCodeAt(0)] = 63;

export const byteLength = function byteLength(arr) {
  if (0 < arr.length % 4) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (-1 === index) {
      index = length;
    }
    items = [index];
    let num2 = 0;
    if (index !== arr.length) {
      num2 = 4 - (index % 4);
    }
    items[1] = num2;
    return (3 * (items[0] + items[1])) / 4 - items[1];
  }
};
export const toByteArray = function toByteArray(arr) {
  let tmp2;
  let tmp3;
  if (0 < arr.length % 4) {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (-1 === index) {
      index = length;
    }
    items = [index];
    let num = 0;
    if (index !== arr.length) {
      num = 4 - (index % 4);
    }
    items[1] = num;
    [tmp2, tmp3] = items;
    const self = this;
    const self2 = this;
    const tmp5 = new closure_2((3 * (tmp2 + tmp3)) / 4 - tmp3);
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
        let tmp9 = items1[arr.charCodeAt(arr, num12)] << 18;
        let tmp10 = items1[arr.charCodeAt(arr, num12 + 1)] << 12;
        let tmp11 = items1[arr.charCodeAt(arr, num12 + 2)] << 6;
        let tmp12 = tmp9 | tmp10 | tmp11 | items1[arr.charCodeAt(arr, num12 + 3)];
        let sum = num11 + 1;
        tmp5[num11] = (tmp12 >> 16) & 255;
        let sum1 = sum + 1;
        tmp5[sum] = (tmp12 >> 8) & 255;
        num11 = sum1 + 1;
        tmp5[sum1] = 255 & tmp12;
        num12 = num12 + 4;
        num13 = num11;
        num14 = num12;
      } while (num12 < diff);
    }
    let sum2 = num13;
    if (2 === tmp3) {
      sum2 = num13 + 1;
      const tmp17 = items1[arr.charCodeAt(arr, num14)] << 2;
      tmp5[num13] = 255 & (tmp17 | (items1[arr.charCodeAt(arr, num14 + 1)] >> 4));
    }
    if (1 === tmp3) {
      const tmp19 = items1[arr.charCodeAt(arr, num14)] << 10;
      const tmp20 = items1[arr.charCodeAt(arr, num14 + 1)] << 4;
      const tmp21 = tmp19 | tmp20 | (items1[arr.charCodeAt(arr, num14 + 2)] >> 2);
      tmp5[sum2] = (tmp21 >> 8) & 255;
      tmp5[sum2 + 1] = 255 & tmp21;
    }
    return tmp5;
  }
};
export const fromByteArray = function fromByteArray(uint8Array) {
  let sum;
  const result = length % 3;
  items = [];
  const diff = length - result;
  let num = 0;
  if (0 < diff) {
    do {
      sum = num + 16383;
      let sum2 = num;
      let tmp5 = sum;
      let push = items.push;
      if (diff < sum) {
        tmp5 = diff;
      }
      items1 = [];
      if (sum2 < tmp5) {
        do {
          let sum1 =
            ((uint8Array[sum2] << 16) & 16711680) +
            ((uint8Array[sum2 + 1] << 8) & 65280) +
            (255 & uint8Array[sum2 + 2]);
          let arr = items1.push(
            items[(sum1 >> 18) & 63] + items[(sum1 >> 12) & 63] + items[(sum1 >> 6) & 63] + items[63 & sum1],
          );
          sum2 = sum2 + 3;
        } while (sum2 < tmp5);
      }
      let arr2 = push(items1.join(""));
      num = sum;
    } while (sum < diff);
  }
  if (1 === result) {
    items.push(
      `${items[uint8Array[uint8Array.length - 1] >> 2]}${items[(uint8Array[uint8Array.length - 1] << 4) & 63]}==`,
    );
  } else if (2 === result) {
    const sum3 = (uint8Array[length - 2] << 8) + uint8Array[length - 1];
    items.push(`${items[tmp13 >> 10]}${items[(tmp13 >> 4) & 63]}${items[(tmp13 << 2) & 63]}=`);
  }
  return items.join("");
};
