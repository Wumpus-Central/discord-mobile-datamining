// _runtime/13721_base64Decode.js
let closure_0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

export default function base64Decode(arg0, arg1) {
  let num = 2;
  if ("=" !== arg0[arg0.length - 2]) {
    let num3 = 0;
    if ("=" === arg0[length - 1]) {
      num3 = 1;
    }
    num = num3;
  }
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < (arg0.length - num & 4294967292)) {
    do {
      let tmp2 = dependencyMap;
      let tmp3 = dependencyMap[arg0.charCodeAt(arg0, num4)] << 18;
      let tmp4 = dependencyMap[arg0.charCodeAt(arg0, num4 + 1)] << 12;
      let tmp5 = dependencyMap[arg0.charCodeAt(arg0, num4 + 2)] << 6;
      let tmp6 = tmp3 | tmp4 | tmp5 | dependencyMap[arg0.charCodeAt(arg0, num4 + 3)];
      let sum = num5 + 1;
      arg1[num5] = tmp6 >> 16 & 255;
      let sum1 = sum + 1;
      arg1[sum] = tmp6 >> 8 & 255;
      num5 = sum1 + 1;
      arg1[sum1] = 255 & tmp6;
      num4 = num4 + 4;
      num7 = num5;
      num6 = num4;
    } while (num4 < tmp);
  }
  let sum3 = num7;
  if (1 === num) {
    const tmp11 = dependencyMap[arg0.charCodeAt(arg0, num6)] << 10;
    const tmp13 = tmp11 | dependencyMap[arg0.charCodeAt(arg0, num6 + 1)] << 4 | dependencyMap[arg0.charCodeAt(arg0, num6 + 2)] >> 2;
    const sum2 = num7 + 1;
    arg1[num7] = tmp13 >> 8 & 255;
    sum3 = sum2 + 1;
    arg1[sum2] = 255 & tmp13;
    const tmp12 = dependencyMap[arg0.charCodeAt(arg0, num6 + 1)] << 4;
  }
  if (2 === num) {
    arg1[sum3] = 255 & (dependencyMap[arg0.charCodeAt(arg0, num6)] << 2 | dependencyMap[arg0.charCodeAt(arg0, num6 + 1)] >> 4);
    const tmp16 = dependencyMap[arg0.charCodeAt(arg0, num6)] << 2;
  }
};