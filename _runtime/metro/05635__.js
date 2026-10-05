// _runtime/metro/05635__.js
import _mod1548 from "01548__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const f90659 = (arg0, arg1) => {
  const NumberResult = Number(arg0);
  return NumberResult - Number(arg1);
};
function keysSorter(arr) {
  let sorted;
  let closure_0 = arr;
  if (Array.isArray(arr)) {
    sorted = arr.sort();
  } else {
    sorted = arr;
    if (typeof arr === "object") {
      const _Object = Object;
      const obj = keysSorter(Object.keys(arr));
      const sorted1 = obj.sort(f90659);
      sorted = sorted1.map((item) => obj[item]);
    }
  }
  return sorted;
}

export const extract = (arg0) => {
  const tmp = arg0.split("?")[1] || "";
  return tmp;
};
export const parse = (search, arg1) => {
  let fn;
  let obj;
  let closure_0;
  const arrayFormat = fn(obj[1])({ arrayFormat: "none" }, arg1).arrayFormat;
  if ("index" === arrayFormat) {
    fn = (str, arg1, arg2) => {
      obj = /\[(\d*)\]$/;
      closure_0 = obj.exec(str);
      const replaced = str.replace(/\[\d*\]$/, "");
      const tmp2 = closure_0;
      if (tmp2) {
        if (undefined === arg2[replaced]) {
          arg2[replaced] = {};
        }
        arg2[replaced][closure_0[1]] = arg1;
      } else {
        arg2[replaced] = arg1;
      }
    };
  } else {
    let str = "bracket";
    fn =
      "bracket" === arrayFormat
        ? (str, arg1, arg2) => {
            obj = /(\[\])$/;
            closure_0 = obj.exec(str);
            const replaced = str.replace(/\[\]$/, "");
            const tmp2 = closure_0;
            if (tmp2) {
              if (undefined !== arg2[replaced]) {
                const items = [];
                arg2[replaced] = items.concat(arg2[replaced], arg1);
              } else {
                const items1 = [arg1];
                arg2[replaced] = items1;
              }
            } else {
              arg2[replaced] = arg1;
            }
          }
        : (arg0, arg1, arg2) => {
            if (undefined !== arg2[arg0]) {
              const items = [];
              arg2[arg0] = items.concat(arg2[arg0], arg1);
            } else {
              arg2[arg0] = arg1;
            }
          };
  }
  obj = Object.create(null);
  let tmp2 = obj;
  if (typeof search === "string") {
    const str3 = search.trim();
    const str5 = str3.replace(/^(\?|#|&)/, "");
    let reduced = obj;
    if (str5) {
      let parts = str5.split("&");
      const item = parts.forEach((item) => {
        const str = item.replace(/\+/g, " ");
        const parts = str.split("=");
        let joined;
        const arr = parts.shift();
        if (parts.length > 0) {
          joined = parts.join("=");
        }
        let tmp3 = null;
        if (undefined !== joined) {
          tmp3 = _mod1548(joined);
        }
        fn(_mod1548(arr), tmp3, obj);
      });
      let _Object = Object;
      let keys = Object.keys(obj);
      let sorted = keys.sort();
      let _Object2 = Object;
      reduced = sorted.reduce((acc, item) => {
        obj = obj[item];
        if (Boolean(obj)) {
          if (typeof obj === "object") {
            const _Array2 = Array;
            if (!Array.isArray(obj)) {
              let sorted;
              const _Array = Array;
              if (Array.isArray(obj)) {
                sorted = obj.sort();
              } else {
                sorted = obj;
                if (typeof obj === "object") {
                  let sorted1;
                  const _Object = Object;
                  const keys = Object.keys(obj);
                  const _Array3 = Array;
                  if (Array.isArray(keys)) {
                    sorted1 = keys.sort();
                  } else {
                    sorted1 = keys;
                    if (typeof keys === "object") {
                      const _Object2 = Object;
                      const obj4 = keysSorter(Object.keys(keys));
                      const sorted2 = obj4.sort(f90659);
                      sorted1 = sorted2.map((item) => obj[item]);
                    }
                  }
                  const sorted3 = sorted1.sort(f90659);
                  sorted = sorted3.map((item) => obj[item]);
                }
              }
              acc[item] = sorted;
            }
            return acc;
          }
        }
        acc[item] = obj;
      }, Object.create(null));
    }
    tmp2 = reduced;
  }
  return tmp2;
};
export const stringify = (arg0, arg1) => {
  let closure_1;
  _require = arg0;
  const tmp = require("05637__.js")({ encode: true, strict: true, arrayFormat: "none" }, arg1);
  dependencyMap = tmp;
  _require = tmp;
  const arrayFormat = tmp.arrayFormat;
  if ("index" === arrayFormat) {
    let fn = (arg0, arg1, arg2) => {
      let joined;
      if (null === arg1) {
        let tmp17 = arg0;
        if (closure_0.encode) {
          let encodeURIComponentResult;
          if (closure_0.strict) {
            encodeURIComponentResult = closure_0(closure_1[0])(arg0);
          } else {
            const _encodeURIComponent4 = encodeURIComponent;
            encodeURIComponentResult = encodeURIComponent(arg0);
          }
          tmp17 = encodeURIComponentResult;
        }
        const items = [tmp17, "[", arg2, "]"];
        joined = items.join("");
      } else {
        let tmp5 = arg0;
        if (closure_0.encode) {
          let encodeURIComponentResult1;
          if (closure_0.strict) {
            encodeURIComponentResult1 = closure_0(closure_1[0])(arg0);
          } else {
            const _encodeURIComponent = encodeURIComponent;
            encodeURIComponentResult1 = encodeURIComponent(arg0);
          }
          tmp5 = encodeURIComponentResult1;
        }
        const items1 = [tmp5, "[", , ,];
        let tmp6 = arg2;
        if (closure_0.encode) {
          let encodeURIComponentResult2;
          if (closure_0.strict) {
            encodeURIComponentResult2 = closure_0(closure_1[0])(arg2);
          } else {
            const _encodeURIComponent2 = encodeURIComponent;
            encodeURIComponentResult2 = encodeURIComponent(arg2);
          }
          tmp6 = encodeURIComponentResult2;
        }
        items1[2] = tmp6;
        items1[3] = "]=";
        let tmp11 = arg1;
        if (closure_0.encode) {
          let encodeURIComponentResult3;
          if (closure_0.strict) {
            encodeURIComponentResult3 = closure_0(closure_1[0])(arg1);
          } else {
            const _encodeURIComponent3 = encodeURIComponent;
            encodeURIComponentResult3 = encodeURIComponent(arg1);
          }
          tmp11 = encodeURIComponentResult3;
        }
        items1[4] = tmp11;
        joined = items1.join("");
      }
      return joined;
    };
  } else {
    fn =
      "bracket" === arrayFormat
        ? (arg0, arg1) => {
            let joined;
            if (null === arg1) {
              let tmp12 = arg0;
              if (closure_0.encode) {
                let encodeURIComponentResult;
                if (closure_0.strict) {
                  encodeURIComponentResult = closure_0(closure_1[0])(arg0);
                } else {
                  const _encodeURIComponent3 = encodeURIComponent;
                  encodeURIComponentResult = encodeURIComponent(arg0);
                }
                tmp12 = encodeURIComponentResult;
              }
              joined = tmp12;
            } else {
              let tmp5 = arg0;
              if (closure_0.encode) {
                let encodeURIComponentResult1;
                if (closure_0.strict) {
                  encodeURIComponentResult1 = closure_0(closure_1[0])(arg0);
                } else {
                  const _encodeURIComponent = encodeURIComponent;
                  encodeURIComponentResult1 = encodeURIComponent(arg0);
                }
                tmp5 = encodeURIComponentResult1;
              }
              const items = [tmp5, "[]="];
              let tmp6 = arg1;
              if (closure_0.encode) {
                let encodeURIComponentResult2;
                if (closure_0.strict) {
                  encodeURIComponentResult2 = closure_0(closure_1[0])(arg1);
                } else {
                  const _encodeURIComponent2 = encodeURIComponent;
                  encodeURIComponentResult2 = encodeURIComponent(arg1);
                }
                tmp6 = encodeURIComponentResult2;
              }
              items[2] = tmp6;
              joined = items.join("");
            }
            return joined;
          }
        : (arg0, arg1) => {
            let joined;
            if (null === arg1) {
              let tmp12 = arg0;
              if (closure_0.encode) {
                let encodeURIComponentResult;
                if (closure_0.strict) {
                  encodeURIComponentResult = closure_0(closure_1[0])(arg0);
                } else {
                  const _encodeURIComponent3 = encodeURIComponent;
                  encodeURIComponentResult = encodeURIComponent(arg0);
                }
                tmp12 = encodeURIComponentResult;
              }
              joined = tmp12;
            } else {
              let tmp5 = arg0;
              if (closure_0.encode) {
                let encodeURIComponentResult1;
                if (closure_0.strict) {
                  encodeURIComponentResult1 = closure_0(closure_1[0])(arg0);
                } else {
                  const _encodeURIComponent = encodeURIComponent;
                  encodeURIComponentResult1 = encodeURIComponent(arg0);
                }
                tmp5 = encodeURIComponentResult1;
              }
              const items = [tmp5, "="];
              let tmp6 = arg1;
              if (closure_0.encode) {
                let encodeURIComponentResult2;
                if (closure_0.strict) {
                  encodeURIComponentResult2 = closure_0(closure_1[0])(arg1);
                } else {
                  const _encodeURIComponent2 = encodeURIComponent;
                  encodeURIComponentResult2 = encodeURIComponent(arg1);
                }
                tmp6 = encodeURIComponentResult2;
              }
              items[2] = tmp6;
              joined = items.join("");
            }
            return joined;
          };
  }
  let str2 = "";
  if (arg0) {
    let tmp2 = globalThis;
    const _Object = Object;
    const keys = Object.keys(arg0);
    const sorted = keys.sort();
    const mapped = sorted.map((item) => {
      let items;
      closure_0 = item;
      if (undefined === closure_0[item]) {
        return "";
      } else if (null === closure_0[item]) {
        let tmp12 = item;
        if (items.encode) {
          let encodeURIComponentResult;
          if (items.strict) {
            encodeURIComponentResult = closure_0(closure_1[0])(item);
          } else {
            const _encodeURIComponent3 = encodeURIComponent;
            encodeURIComponentResult = encodeURIComponent(item);
          }
          tmp12 = encodeURIComponentResult;
        }
        return tmp12;
      } else {
        const _Array = Array;
        if (Array.isArray(closure_0[item])) {
          items = [];
          const substr = arr.slice();
          item = substr.forEach((item) => {
            if (undefined !== item) {
              items.push(fn(closure_0, item, items.length));
            }
          });
          return items.join("&");
        } else {
          let tmp2 = item;
          if (items.encode) {
            let encodeURIComponentResult1;
            if (items.strict) {
              encodeURIComponentResult1 = closure_0(closure_1[0])(item);
            } else {
              const _encodeURIComponent = encodeURIComponent;
              encodeURIComponentResult1 = encodeURIComponent(item);
            }
            tmp2 = encodeURIComponentResult1;
          }
          let tmp7 = arr;
          const text = `${tmp2}=`;
          if (items.encode) {
            let encodeURIComponentResult2;
            if (items.strict) {
              encodeURIComponentResult2 = closure_0(closure_1[0])(arr);
            } else {
              const _encodeURIComponent2 = encodeURIComponent;
              encodeURIComponentResult2 = encodeURIComponent(arr);
            }
            tmp7 = encodeURIComponentResult2;
          }
          return text + tmp7;
        }
      }
    });
    const found = mapped.filter((item) => item.length > 0);
    str2 = found.join("&");
  }
  return str2;
};
