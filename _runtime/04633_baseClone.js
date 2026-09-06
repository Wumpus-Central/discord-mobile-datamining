// _runtime/04633_baseClone.js
import assignValue from "04642_assignValue.js";

let obj = {};
obj["[object Uint32Array]"] = true;
obj["[object Uint16Array]"] = true;
obj["[object Uint8ClampedArray]"] = true;
obj["[object Uint8Array]"] = true;
obj["[object Symbol]"] = true;
obj["[object String]"] = true;
obj["[object Set]"] = true;
obj["[object RegExp]"] = true;
obj["[object Object]"] = true;
obj["[object Number]"] = true;
obj["[object Map]"] = true;
obj["[object Int32Array]"] = true;
obj["[object Int16Array]"] = true;
obj["[object Int8Array]"] = true;
obj["[object Float64Array]"] = true;
obj["[object Float32Array]"] = true;
obj["[object Date]"] = true;
obj["[object Boolean]"] = true;
obj["[object DataView]"] = true;
obj["[object ArrayBuffer]"] = true;
obj["[object Array]"] = true;
obj["[object Arguments]"] = true;
obj["[object WeakMap]"] = false;
obj["[object Function]"] = false;
obj["[object Error]"] = false;
function baseClone(arr, arg1, fn, key, arr, height) {
  _require = arr;
  dependencyMap = arg1;
  closure_2 = fn;
  closure_3 = height;
  if (!fn) {
    {
      if (require("metro/00521__.js")(arr)) {
        const tmp10 = tmp32(514)(arr);
        if (tmp10) {
          const tmp18 = tmp32(4634)(arr);
          closure_4 = tmp18;
          let tmp14 = tmp18;
          if (!tmp) {
            return tmp32(4635)(arr, tmp18);
          }
        } else {
          const tmp11 = tmp32(634)(arr);
          let tmp12 = tmp11 == "[object Function]";
          if (!tmp12) {
            tmp12 = "[object GeneratorFunction]" == tmp11;
          }
          if (tmp32(536)(arr)) {
            return tmp32(4636)(arr, tmp);
          } else {
            if (tmp11 != "[object Object]") {
              if (tmp11 != "[object Arguments]") {
                if (closure_2[tmp11]) {
                  tmp14 = tmp32(4650)(arr, tmp11, tmp);
                  closure_4 = tmp14;
                } else {
                  obj = arr;
                  if (!arr) {
                    obj = {};
                  }
                  return obj;
                }
              }
            }
            if (!tmp2) {
              if (!tmp12) {
                obj = tmp32(4637)(arr);
              }
              closure_4 = obj;
              tmp14 = obj;
              if (!tmp) {
                if (tmp2) {
                  let tmp32Result = tmp32(4640);
                  let tmp32ResultResult = tmp32Result(arr, tmp32(4644)(obj, arr));
                } else {
                  tmp32Result = tmp32(4648);
                  tmp32ResultResult = tmp32Result(arr, tmp32(4649)(obj, arr));
                }
                return tmp32ResultResult;
              }
            }
            obj = {};
          }
        }
        let obj3 = height;
        if (!height) {
          const tmp21 = new tmp32(639)();
          closure_3 = tmp21;
          obj3 = tmp21;
        }
        value = obj3.get(arr);
        if (value) {
          return value;
        } else {
          let result = obj3.set(arr, tmp14);
          if (tmp32(4656)(arr)) {
            const item = arr.forEach((item) => {
              closure_4.add(baseClone(item, closure_1, closure_2, item, closure_0, closure_3));
            });
          } else if (tmp32(4658)(arr)) {
            const item1 = arr.forEach((item, index) => {
              const result = closure_4.set(index, baseClone(item, closure_1, closure_2, index, closure_0, closure_3));
            });
          }
          if (!tmp3) {
            let tmp29;
            if (!tmp10) {
              tmp29 = tmp32(tmp2 ? 4645 : 531)(arr);
            }
            closure_5 = tmp29;
            if (!tmp29) {
              tmp29 = arr;
            }
            tmp32(515)(tmp29, (arg0, arg1) => {
              let tmp = arg1;
              let tmp2 = arg0;
              if (closure_5) {
                tmp2 = closure_0[arg0];
                tmp = arg0;
              }
              assignValue(closure_4, tmp, baseClone(tmp2, closure_1, closure_2, tmp, closure_0, closure_3));
            });
            return tmp14;
          }
        }
      } else {
        return arr;
      }
    }
  } else {
    if (arr) {
      let tmp4 = fn(arr, key, arr, height);
    } else {
      tmp4 = fn(arr);
    }
    closure_4 = tmp4;
  }
}

export default baseClone;
