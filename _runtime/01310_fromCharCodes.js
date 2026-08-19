// _runtime/01310_fromCharCodes.js
arg5.utf8read = undefined;
function fromCharCodes(arg0) {

}
arg5.utf8read = function utf8read(arg0) {
  let sum1;
  if (arg0.length < 1) {
    return "";
  } else {
    const items = [];
    const items1 = [];
    let num2 = 0;
    let num4 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        let sum = num4 + 1;
        let tmp2 = arg0[num4];
        if (tmp2 < 128) {
          let num = num2 + 1;
          items1[num2] = tmp2;
          sum1 = sum;
        } else {
          if (tmp2 > 191) {
            if (tmp2 < 224) {
              num = num2 + 1;
              sum1 = sum + 1;
              items1[num2] = (31 & tmp2) << 6 | 63 & arg0[sum];
            }
          }
          if (tmp2 > 239) {
            if (tmp2 < 365) {
              let sum2 = sum + 1;
              let sum3 = sum2 + 1;
              sum1 = sum3 + 1;
              let diff = ((7 & tmp2) << 18 | (63 & arg0[sum]) << 12 | (63 & arg0[sum2]) << 6 | 63 & arg0[sum3]) - 65536;
              let sum4 = num2 + 1;
              items1[num2] = 55296 + (diff >> 10);
              num = sum4 + 1;
              items1[sum4] = 56320 + (1023 & diff);
            }
          }
          num = num2 + 1;
          let sum5 = sum + 1;
          sum1 = sum5 + 1;
          items1[num2] = (15 & tmp2) << 12 | (63 & arg0[sum]) << 6 | 63 & arg0[sum5];
        }
        if (8191 < num) {
          if (typeof fromCharCodes !== "function") {
            let throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          let _String = String;
          let _String2 = String;
          let arr = items.push(fromCharCode.apply(String, items1));
          num = 0;
        }
        num2 = num;
        num3 = num;
        num4 = sum1;
      } while (sum1 < length);
    }
    if (items.length) {
      if (num3) {
        const substr = items1.slice(0, num3);
        if (typeof fromCharCodes !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _String5 = String;
        const _String6 = String;
        items.push(fromCharCode3.apply(String, substr));
      }
      let joined = items.join("");
    } else {
      const substr1 = items1.slice(0, num3);
      if (typeof fromCharCodes !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _String3 = String;
      const _String4 = String;
      joined = fromCharCode2.apply(String, substr1);
    }
    return joined;
  }
};