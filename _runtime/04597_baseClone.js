// _runtime/04597_baseClone.js
import { isObject } from "00606_isObject.js";
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
function baseClone(arr) {
  const _require = arr;
  dependencyMap = arg1;
  obj = arg2;
  closure_3 = arg5;
  if (!arg2) {
    {
      if (isObject(arr)) {
        const tmp10 = tmp32(599)(arr);
        if (tmp10) {
          const tmp18 = tmp32(4598)(arr);
          closure_4 = tmp18;
          let tmp14 = tmp18;
          if (!tmp) {
            return tmp32(4599)(arr, tmp18);
          }
        } else {
          const tmp11 = tmp32(770)(arr);
          let tmp12 = tmp11 == "[object Function]";
          if (!tmp12) {
            tmp12 = "[object GeneratorFunction]" == tmp11;
          }
          if (tmp32(621)(arr)) {
            return tmp32(4600)(arr, tmp);
          } else {
            if (tmp11 != "[object Object]") {
              if (tmp11 != "[object Arguments]") {
                if (obj[tmp11]) {
                  tmp14 = tmp32(4614)(arr, tmp11, tmp);
                  closure_4 = tmp14;
                } else {
                  obj = arr;
                  if (!arg4) {
                    obj = {};
                  }
                  return obj;
                }
              }
            }
            if (!tmp2) {
              if (!tmp12) {
                obj = tmp32(4601)(arr);
              }
              closure_4 = obj;
              tmp14 = obj;
              if (!tmp) {
                if (tmp2) {
                  let tmp32Result = tmp32(4604);
                  let tmp32ResultResult = tmp32Result(arr, tmp32(4608)(obj, arr));
                } else {
                  tmp32Result = tmp32(4612);
                  tmp32ResultResult = tmp32Result(arr, tmp32(4613)(obj, arr));
                }
                return tmp32ResultResult;
              }
            }
            obj = {};
          }
        }
        let obj3 = arg5;
        if (!arg5) {
          const tmp21 = new tmp32(775)();
          closure_3 = tmp21;
          obj3 = tmp21;
        }
        const value = obj3.get(arr);
        if (value) {
          return value;
        } else {
          let result = obj3.set(arr, tmp14);
          if (tmp32(4620)(arr)) {
            const item = arr.forEach((arg0) => {
              closure_4.add(callback(arg0, closure_1, closure_2, arg0, closure_0, callback));
            });
          } else if (tmp32(4622)(arr)) {
            const item1 = arr.forEach((arg0, arg1) => {
              const result = closure_4.set(arg1, callback(arg0, closure_1, closure_2, arg1, closure_0, callback));
            });
          }
          if (!tmp3) {
            let tmp29;
            if (!tmp10) {
              tmp29 = tmp32(tmp2 ? 4609 : 616)(arr);
            }
            closure_5 = tmp29;
            if (!tmp29) {
              tmp29 = arr;
            }
            tmp32(600)(tmp29, (arg0, arg1) => {
              let tmp = arg1;
              let tmp2 = arg0;
              if (closure_5) {
                tmp2 = arr[arg0];
                tmp = arg0;
              }
              arr(table[21])(closure_4, tmp, callback(tmp2, table, closure_2, tmp, arr, callback));
            });
            return tmp14;
          }
        }
      } else {
        return arr;
      }
    }
  } else {
    if (arg4) {
      let tmp4 = arg2(arr, arg3, arg4, arg5);
    } else {
      tmp4 = arg2(arr);
    }
    closure_4 = tmp4;
  }
}

export default baseClone;
