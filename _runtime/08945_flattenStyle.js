// _runtime/08945_flattenStyle.js
import { deprecatedCreateStrictShapeTypeChecker } from "08946_deprecatedCreateStrictShapeTypeChecker.js";
function flattenStyle(obj) {
  if (null !== obj) {
    if (typeof obj === "object") {
      const _Array = Array;
      if (Array.isArray(obj)) {
        obj = {};
        for (let num3 = 0; num3 < length; num3 = num3 + 1) {
          let tmp2 = flattenStyle;
          let tmp3 = flattenStyle(obj[num3]);
          let tmp4 = num3;
          if (tmp3) {
            let tmp5 = tmp3;
            for (const key10019 in tmp3) {
              let tmp6 = key10019;
              obj[key10019] = tmp3[key10019];
              continue;
            }
          }
        }
        return obj;
      } else {
        return obj;
      }
    }
  }
}

export default function DeprecatedStyleSheetPropType(arg0) {
  _require = _deprecatedCreateStrictShapeTypeChecker(arg0);
  return (arg0, arg1, arg2, arg3) => {
    const substr = [...arguments].slice();
    if (arg0[arg1]) {
      let tmp4;
      if (null !== arg0[arg1]) {
        if (typeof arr === "object") {
          const _Array = Array;
          tmp4 = arr;
          if (Array.isArray(arr)) {
            let obj = {};
            let num3 = 0;
            tmp4 = obj;
            if (0 < arr.length) {
              do {
                let arr2 = arr[num3];
                let tmp5 = num3;
                let tmp6;
                if (null !== arr2) {
                  if (typeof arr2 === "object") {
                    let _Array2 = Array;
                    tmp6 = arr2;
                    if (Array.isArray(arr2)) {
                      obj = {};
                      let length2 = arr2.length;
                      let num4 = 0;
                      tmp6 = obj;
                      if (0 < length2) {
                        do {
                          let tmp7 = outer1_2;
                          let tmp8 = outer1_2(arr2[num4]);
                          let tmp9 = num4;
                          if (tmp8) {
                            let tmp10 = tmp8;
                            for (const key10029 in tmp8) {
                              let tmp13 = key10029;
                              obj[key10029] = tmp8[key10029];
                              continue;
                            }
                          }
                          num4 = num4 + 1;
                          tmp6 = obj;
                        } while (num4 < length2);
                      }
                    }
                  }
                }
                if (tmp6) {
                  let tmp11 = tmp6;
                  for (const key10032 in tmp6) {
                    let tmp14 = key10032;
                    obj[key10032] = tmp6[key10032];
                    continue;
                  }
                }
                num3 = num3 + 1;
                tmp4 = obj;
              } while (num3 < length);
            }
          }
        }
      }
      obj = {};
      obj[arg1] = tmp4;
    }
    return callback(arg1, arg2, arg3, ...substr);
  };
};