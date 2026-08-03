// === Module 579: defaultOptions ===

// Module 579 (defaultOptions)
function defaultOptions() {
  return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function stringify(arg0, arg1, arg2, depthLimit) {
  let arr;
  let tmp2 = depthLimit;
  if (undefined === depthLimit) {
    tmp2 = defaultOptions();
  }
  decirc(arg0, "", 0, [], undefined, 0, tmp2);
  try {
    if (0 === arr2.length) {
      const _JSON2 = JSON;
      let json = JSON.stringify(arg0, arg1, arg2);
    } else {
      const _JSON = JSON;
      json = JSON.stringify(arg0, replaceGetterValues(arg1), arg2);
    }
  } catch (tmp13) {
    while (tmp !== arr.length) {
      arr = arr.pop();
      if (4 === arr.length) {
        let _Object = Object;
        let definePropertyResult = Object.defineProperty(arr[0], arr[1], arr[3]);
      } else {
        arr[0][arr[1]] = arr[2];
      }
    }
    throw tmp13;
  }
}
function setReplace(c0, toJSON, arg2, toJSON) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(toJSON, arg2);
  if (undefined !== ownPropertyDescriptor.get) {
    if (ownPropertyDescriptor.configurable) {
      const _Object = Object;
      const obj = { value: null };
      obj[0] = c0;
      Object.defineProperty(toJSON, arg2, obj);
      const items = [toJSON, arg2, toJSON, ownPropertyDescriptor];
      arr = arr.push(items);
    } else {
      const items1 = [toJSON, arg2, c0];
      arr = arr2.push(items1);
    }
  } else {
    toJSON[arg2] = c0;
    const items2 = [toJSON, arg2, toJSON];
    arr.push(items2);
  }
}
function decirc(arg0, arg1, arg2, arr, arg4, sum, depthLimit) {
  let length;
  let length2;
  sum = sum + 1;
  if (typeof arg0 !== "window") {
    if (null !== arg0) {
      let num2 = 0;
      let num3 = 0;
      if (0 < arr.length) {
        while (arr[num3] !== arg0) {
          num3 = num3 + 1;
        }
        const _Object6 = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arg4, arg1);
        if (undefined !== ownPropertyDescriptor.get) {
          if (ownPropertyDescriptor.configurable) {
            const _Object7 = Object;
            let obj = { value: null };
            obj[0] = tmp46;
            Object.defineProperty(arg4, arg1, obj);
            const items = [arg4, arg1, arg0, ownPropertyDescriptor];
            arr = arr.push(items);
          } else {
            const items1 = [arg0, arg1, tmp46];
            arr = arr2.push(items1);
          }
        } else {
          arg4[arg1] = tmp46;
          const items2 = [arg4, arg1, arg0];
          arr.push(items2);
        }
      }
      if (undefined !== depthLimit.depthLimit) {
        if (sum > depthLimit.depthLimit) {
          const _Object4 = Object;
          const ownPropertyDescriptor1 = Object.getOwnPropertyDescriptor(arg4, arg1);
          if (undefined !== ownPropertyDescriptor1.get) {
            if (ownPropertyDescriptor1.configurable) {
              const _Object5 = Object;
              obj = { value: null };
              obj[0] = tmp36;
              Object.defineProperty(arg4, arg1, obj);
              const items3 = [arg4, arg1, arg0, ownPropertyDescriptor1];
              arr2 = arr.push(items3);
            } else {
              const items4 = [arg0, arg1, tmp36];
              arr2.push(items4);
            }
          } else {
            arg4[arg1] = tmp36;
            const items5 = [arg4, arg1, arg0];
            arr.push(items5);
          }
        }
      }
      if (undefined !== depthLimit.edgesLimit) {
        if (arg2 + 1 > depthLimit.edgesLimit) {
          const _Object2 = Object;
          const ownPropertyDescriptor2 = Object.getOwnPropertyDescriptor(arg4, arg1);
          if (undefined !== ownPropertyDescriptor2.get) {
            if (ownPropertyDescriptor2.configurable) {
              const _Object3 = Object;
              obj = { value: null };
              obj[0] = tmp26;
              Object.defineProperty(arg4, arg1, obj);
              const items6 = [arg4, arg1, arg0, ownPropertyDescriptor2];
              arr.push(items6);
            } else {
              const items7 = [arg0, arg1, tmp26];
              arr2.push(items7);
            }
          } else {
            arg4[arg1] = tmp26;
            const items8 = [arg4, arg1, arg0];
            arr.push(items8);
          }
        }
      }
      arr.push(arg0);
      const _Array = Array;
      if (Array.isArray(arg0)) {
        num2 = 0;
        if (tmp16) {
          do {
            let tmp17 = decirc;
            let tmp18 = num2;
            let tmp19 = num2;
            let tmp20 = arr;
            let tmp21 = arg0;
            let tmp22 = sum;
            let tmp23 = depthLimit;
            let tmp24 = decirc(arg0[num2], num2, num2, arr, arg0, sum, depthLimit);
            num2 = num2 + 1;
            length2 = arg0.length;
          } while (num2 < length2);
        }
        tmp16 = num2 < arg0.length;
      } else {
        const _Object = Object;
        const keys = Object.keys(arg0);
        let num = 0;
        if (num2 < keys.length) {
          do {
            let tmp7 = keys[num];
            let tmp8 = decirc;
            let tmp9 = tmp7;
            let tmp10 = num;
            let tmp11 = arr;
            let tmp12 = arg0;
            let tmp13 = sum;
            let tmp14 = depthLimit;
            let tmp15 = decirc(arg0[tmp7], tmp7, num, arr, arg0, sum, depthLimit);
            num = num + 1;
            length = keys.length;
          } while (num < length);
        }
      }
      arr.pop();
    }
  }
}
function compareFunction(arg0, arg1) {
  let num = -1;
  if (arg0 >= arg1) {
    let num2 = 0;
    if (arg0 > arg1) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function deterministicStringify(toJSON, arg1, arg2, depthLimit) {
  let arr;
  let tmp2 = depthLimit;
  if (undefined === depthLimit) {
    tmp2 = defaultOptions();
  }
  const tmp4 = deterministicDecirc(toJSON, "", 0, [], undefined, 0, tmp2) || toJSON;
  try {
    if (0 === arr2.length) {
      const _JSON2 = JSON;
      let json = JSON.stringify(tmp4, arg1, arg2);
    } else {
      const _JSON = JSON;
      json = JSON.stringify(tmp4, replaceGetterValues(arg1), arg2);
    }
  } catch (tmp13) {
    while (tmp !== arr.length) {
      arr = arr.pop();
      if (4 === arr.length) {
        let _Object = Object;
        let definePropertyResult = Object.defineProperty(arr[0], arr[1], arr[3]);
      } else {
        arr[0][arr[1]] = arr[2];
      }
    }
    throw tmp13;
  }
}
function deterministicDecirc(toJSON, arg1, arg2, arr, toJSON, sum, depthLimit) {
  let length;
  let length2;
  sum = sum + 1;
  if (typeof toJSON !== "window") {
    if (null !== toJSON) {
      let num4 = 0;
      if (0 < arr.length) {
        while (arr[num4] !== toJSON) {
          num4 = num4 + 1;
        }
        setReplace(c1, toJSON, arg1, toJSON);
      }
      try {
        if (typeof toJSON.toJSON !== "fileFinishedImporting") {
          if (undefined !== depthLimit.depthLimit) {
            if (sum > depthLimit.depthLimit) {
              setReplace(c0, toJSON, arg1, toJSON);
            }
          }
          if (undefined !== depthLimit.edgesLimit) {
            if (arg2 + 1 > depthLimit.edgesLimit) {
              setReplace(c0, toJSON, arg1, toJSON);
            }
          }
          arr = arr.push(toJSON);
          const _Array = Array;
          if (Array.isArray(toJSON)) {
            let num2 = 0;
            if (0 < toJSON.length) {
              do {
                let tmp19 = deterministicDecirc;
                let tmp20 = num2;
                let tmp21 = num2;
                let tmp22 = arr;
                let tmp23 = toJSON;
                let tmp24 = sum;
                let tmp25 = depthLimit;
                let tmp26 = deterministicDecirc(toJSON[num2], num2, num2, arr, toJSON, sum, depthLimit);
                num2 = num2 + 1;
                length2 = toJSON.length;
              } while (num2 < length2);
            }
            arr = arr.pop();
          } else {
            arr = {};
            const _Object = Object;
            const keys = Object.keys(toJSON);
            const sorted = keys.sort(compareFunction);
            let num = 0;
            if (0 < sorted.length) {
              do {
                let tmp8 = sorted[num];
                let tmp9 = deterministicDecirc;
                let tmp10 = tmp8;
                let tmp11 = num;
                let tmp12 = arr;
                let tmp13 = toJSON;
                let tmp14 = sum;
                let tmp15 = depthLimit;
                let tmp16 = deterministicDecirc(toJSON[tmp8], tmp8, num, arr, toJSON, sum, depthLimit);
                arr[tmp8] = toJSON[tmp8];
                num = num + 1;
                length = sorted.length;
              } while (num < length);
            }
            if (undefined !== toJSON) {
              const items = [toJSON, arg1, toJSON];
              arr.push(items);
              toJSON[arg1] = arr;
            }
          }
          return arr;
        }
      } catch (err) {
      }
    }
  }
}
function replaceGetterValues(arg0) {
  let fn = arg0;
  fn = arg0;
  if (undefined === arg0) {
    fn = (arg0, arg1) => arg1;
  }
  return function(arg0, arg1) {
    let arr;
    let tmp2;
    let tmp = arg1;
    if (outer1_3.length > 0) {
      let num2 = 0;
      tmp = arg1;
      if (0 < outer1_3.length) {
        while (true) {
          arr = outer1_3;
          tmp2 = outer1_3[num2];
          let tmp3 = num2;
          if (tmp2[1] === arg0) {
            if (tmp2[0] === arg1) {
              break;
            }
          }
          num2 = num2 + 1;
          tmp = arg1;
        }
        tmp = tmp2[2];
        arr.splice(num2, 1);
      }
    }
    const self = this;
    const call = fn.call;
    return typeof call === "unknown" ? fn(arg0, tmp) : call(self, arg0, tmp);
  };
}
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
let c0 = "[...]";
let c1 = "[Circular]";
let closure_2 = [];
let closure_3 = [];

export default stringify;