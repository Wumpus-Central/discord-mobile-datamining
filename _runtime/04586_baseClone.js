// === Module 4586: baseClone ===

// Module 4586 (baseClone)
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
  const _require = arr;
  dependencyMap = arg1;
  obj = fn;
  closure_3 = height;
  if (!fn) {
    {
      if (_require(606)(arr)) {
        const tmp10 = tmp32(599)(arr);
        if (tmp10) {
          const tmp18 = tmp32(4587)(arr);
          closure_4 = tmp18;
          let tmp14 = tmp18;
          if (!tmp) {
            return tmp32(4588)(arr, tmp18);
          }
        } else {
          const tmp11 = tmp32(770)(arr);
          let tmp12 = tmp11 == "[object Function]";
          if (!tmp12) {
            tmp12 = "[object GeneratorFunction]" == tmp11;
          }
          if (tmp32(621)(arr)) {
            return tmp32(4589)(arr, tmp);
          } else {
            if (tmp11 != "[object Object]") {
              if (tmp11 != "[object Arguments]") {
                if (obj[tmp11]) {
                  tmp14 = tmp32(4603)(arr, tmp11, tmp);
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
                obj = tmp32(4590)(arr);
              }
              closure_4 = obj;
              tmp14 = obj;
              if (!tmp) {
                if (tmp2) {
                  let tmp32Result = tmp32(4593);
                  let tmp32ResultResult = tmp32Result(arr, tmp32(4597)(obj, arr));
                } else {
                  tmp32Result = tmp32(4601);
                  tmp32ResultResult = tmp32Result(arr, tmp32(4602)(obj, arr));
                }
                return tmp32ResultResult;
              }
            }
            obj = {};
          }
        }
        let obj3 = height;
        if (!height) {
          const tmp21 = new tmp32(775)();
          closure_3 = tmp21;
          obj3 = tmp21;
        }
        const value = obj3.get(arr);
        if (value) {
          return value;
        } else {
          let result = obj3.set(arr, tmp14);
          if (tmp32(4609)(arr)) {
            const item = arr.forEach((item, index) => {
              closure_4.add(callback(item, closure_1, closure_2, item, closure_0, callback));
            });
          } else if (tmp32(4611)(arr)) {
            const item1 = arr.forEach((item, index) => {
              const result = closure_4.set(index, callback(item, closure_1, closure_2, index, closure_0, callback));
            });
          }
          if (!tmp3) {
            let tmp29;
            if (!tmp10) {
              tmp29 = tmp32(tmp2 ? 4598 : 616)(arr);
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
              const tmp4 = arr(table[21]);
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