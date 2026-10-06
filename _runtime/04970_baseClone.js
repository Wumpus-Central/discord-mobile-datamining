// === Module 4970: baseClone ===

// Module 4970 (baseClone)
import assignValue from "assignValue" /* 4979 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
function baseClone(arr, arg1, fn, arg3, arg4, arg5) {
  let closure_1;
  let obj2;
  _require = arr;
  dependencyMap = arg1;
  let closure_2 = fn;
  let closure_3 = arg5;
  let tmp = 1 & arg1;
  let tmp2 = 2 & arg1;
  let tmp4;
  const tmp3 = 4 & arg1;
  if (fn) {
    let tmp5;
    if (arg4) {
      tmp5 = fn(arr, arg3, arg4, arg5);
    } else {
      tmp5 = fn(arr);
    }
    obj2 = tmp5;
    tmp4 = tmp5;
  }
  if (undefined !== tmp4) {
    return tmp4;
  } else if (require("isObject")(arr)) {
    let tmp14;
    const tmp10 = require("module_514")(arr);
    if (tmp10) {
      const tmp18 = require("initCloneArray")(arr);
      obj2 = tmp18;
      tmp14 = tmp18;
      if (!tmp) {
        return require("copyArray")(arr, tmp18);
      }
    } else {
      const tmp11 = require("module_645")(arr);
      const tmp12 = tmp11 == "[object Function]" || "[object GeneratorFunction]" == tmp11;
      if (require("module_536")(arr)) {
        return require("cloneBuffer")(arr, tmp);
      } else {
        if (tmp11 != "[object Object]") {
          if (tmp11 != "[object Arguments]") {
            if (closure_2[tmp11]) {
              tmp14 = tmp30(4987)(arr, tmp11, tmp);
              obj2 = tmp14;
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
            obj2 = tmp30(4974)(arr);
          }
          tmp14 = obj2;
          if (!tmp) {
            let tmp30ResultResult;
            if (tmp2) {
              const tmp30Result = require("copySymbolsIn");
              tmp30ResultResult = tmp30Result(arr, tmp30(4981)(obj2, arr));
            } else {
              const tmp30Result3 = require("copySymbols");
              tmp30ResultResult = tmp30Result3(arr, tmp30(4986)(obj2, arr));
            }
            return tmp30ResultResult;
          }
        }
        obj2 = {};
      }
    }
    let obj3 = arg5;
    if (!obj3) {
      const self = this;
      const self2 = this;
      const tmp19 = new require("Stack")();
      closure_3 = tmp19;
      obj3 = tmp19;
    }
    const value = obj3.get(arr);
    if (value) {
      return value;
    } else {
      let tmp26;
      let result = obj3.set(arr, tmp14);
      if (require("module_4993")(arr)) {
        const item = arr.forEach((item) => {
          obj2.add(baseClone(item, closure_1, fn, item, arr, closure_3));
        });
      } else if (require("module_4995")(arr)) {
        const item1 = arr.forEach((item, index) => {
          const result = obj2.set(index, baseClone(item, closure_1, fn, index, arr, closure_3));
        });
      }
      if (tmp3) {
        tmp26 = tmp2 ? 4997 : 667;
      } else {
        tmp26 = tmp2 ? 4982 : 531;
      }
      let tmp27;
      if (!tmp10) {
        tmp27 = tmp30(tmp26)(arr);
      }
      let closure_5 = tmp27;
      const tmp30Result4 = require("arrayEach");
      if (!tmp27) {
        tmp27 = arr;
      }
      tmp30Result4(tmp27, (arg0, arg1) => {
        let tmp = arg1;
        let tmp2 = arg0;
        if (closure_5) {
          tmp2 = arr[arg0];
          tmp = arg0;
        }
        const tmp4 = assignValue;
        tmp4(obj2, tmp, baseClone(tmp2, closure_1, fn, tmp, arr, closure_3));
      });
      return tmp14;
    }
  } else {
    return arr;
  }
}

export default baseClone;