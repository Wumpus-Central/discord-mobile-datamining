// _runtime/04376_keysSorter.js
import { 04378__ } from "metro/04378__.js";
const require = arg1;
let dependencyMap = arg6;
function keysSorter(arr) {
  closure_0 = arr;
  if (Array.isArray(arr)) {
    let sorted = arr.sort();
  } else {
    sorted = arr;
    if (typeof arr === "object") {
      const _Object = Object;
      const sorted1 = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
      sorted = sorted1.map((item, index) => keys[item]);
      const obj = keysSorter(Object.keys(arr));
    }
  }
  return sorted;
}
arg5.extract = (arg0) => arg0.split("?")[1] || "";
arg5.parse = (str) => {
  let fn;
  const arrayFormat = fn(obj[1])({ arrayFormat: "none" }, arg1).arrayFormat;
  if ("index" === arrayFormat) {
    fn = (str) => {
      const table = /\[(\d*)\]$/.exec(str);
      const replaced = str.replace(/\[\d*\]$/, "");
      if (table) {
        if (undefined === arg2[replaced]) {
          arg2[replaced] = {};
        }
        arg2[replaced][table[1]] = arg1;
      } else {
        arg2[replaced] = arg1;
      }
    };
  } else {
    fn = "bracket" === arrayFormat ? ((str) => {
      closure_0 = /(\[\])$/.exec(str);
      const replaced = str.replace(/\[\]$/, "");
      if (closure_0) {
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
    }) : ((arg0, arg1, arg2) => {
      if (undefined !== arg2[arg0]) {
        const items = [];
        arg2[arg0] = items.concat(arg2[arg0], arg1);
      } else {
        arg2[arg0] = arg1;
      }
    });
  }
  obj = Object.create(null);
  let tmp2 = obj;
  if (typeof str === "string") {
    const str5 = str.trim().replace(/^(\?|#|&)/, "");
    let reduced = obj;
    if (str5) {
      let parts = str5.split("&");
      const item = parts.forEach((item, index) => {
        const parts = item.replace(/\+/g, " ").split("=");
        let joined;
        const str = item.replace(/\+/g, " ");
        if (parts.length > 0) {
          joined = parts.join("=");
        }
        let tmp3 = null;
        if (undefined !== joined) {
          tmp3 = fn(obj[2])(joined);
        }
        fn(fn(obj[2])(parts.shift()), tmp3, obj);
        const arr = parts.shift();
      });
      let _Object = Object;
      let keys = Object.keys(obj);
      let sorted = keys.sort();
      let _Object2 = Object;
      reduced = sorted.reduce((acc, item, index) => {
        if (Boolean(obj[item])) {
          if (typeof obj === "object") {
            const _Array2 = Array;
            if (!Array.isArray(obj)) {
              let keys = obj;
              const _Array = Array;
              if (Array.isArray(obj)) {
                let sorted = obj.sort();
              } else {
                sorted = obj;
                if (typeof obj === "object") {
                  const _Object = Object;
                  keys = Object.keys(obj);
                  const _Array3 = Array;
                  if (Array.isArray(keys)) {
                    let sorted1 = keys.sort();
                  } else {
                    sorted1 = keys;
                    if (typeof keys === "object") {
                      const _Object2 = Object;
                      const sorted2 = keysSorter(Object.keys(keys)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
                      sorted1 = sorted2.map((item, index) => keys[item]);
                      const obj3 = keysSorter(Object.keys(keys));
                    }
                  }
                  keys = sorted1.sort((arg0, arg1) => Number(arg0) - Number(arg1));
                  const mapped = keys.map((item, index) => keys[item]);
                }
              }
              acc[item] = sorted;
            }
            return acc;
          }
        }
        acc[item] = obj[item];
      }, Object.create(null));
    }
    tmp2 = reduced;
    const str3 = str.trim();
  }
  return tmp2;
};
arg5.stringify = (arg0, arg1) => {
  let _require = arg0;
  const tmp = 04378__({ encode: true, strict: true, arrayFormat: "none" }, arg1);
  dependencyMap = tmp;
  _require = tmp;
  const arrayFormat = tmp.arrayFormat;
  if ("index" === arrayFormat) {
    let fn = (arg0, arg1, arg2) => {
      if (null === arg1) {
        if (!lib.encode) {
          const items = [arg0, "[", arg2, "]"];
          let joined = items.join("");
        } else if (tmp19.strict) {
          let encodeURIComponentResult = lib(4377)(arg0);
        } else {
          const _encodeURIComponent4 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items1 = [arg0, "[", , , ];
        if (!lib.encode) {
          items1[2] = arg2;
          items1[3] = "]=";
          if (!lib.encode) {
            items1[4] = arg1;
            joined = items1.join("");
          } else if (lib.strict) {
            let encodeURIComponentResult1 = lib(4377)(arg1);
          } else {
            const _encodeURIComponent3 = encodeURIComponent;
            encodeURIComponentResult1 = encodeURIComponent(arg1);
          }
        } else if (lib.strict) {
          let encodeURIComponentResult2 = lib(4377)(arg2);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult2 = encodeURIComponent(arg2);
        }
      } else if (lib.strict) {
        let encodeURIComponentResult3 = lib(4377)(arg0);
      } else {
        const _encodeURIComponent = encodeURIComponent;
        encodeURIComponentResult3 = encodeURIComponent(arg0);
      }
      return joined;
    };
  } else {
    fn = "bracket" === arrayFormat ? ((arg0, arg1) => {
      if (null === arg1) {
        if (!lib.encode) {
          let joined = arg0;
        } else if (tmp13.strict) {
          let encodeURIComponentResult = lib(4377)(arg0);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items = [arg0, "[]=", ];
        if (!lib.encode) {
          items[2] = arg1;
          joined = items.join("");
        } else if (lib.strict) {
          let encodeURIComponentResult1 = lib(4377)(arg1);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult1 = encodeURIComponent(arg1);
        }
      } else if (lib.strict) {
        let encodeURIComponentResult2 = lib(4377)(arg0);
      } else {
        const _encodeURIComponent = encodeURIComponent;
        encodeURIComponentResult2 = encodeURIComponent(arg0);
      }
      return joined;
    }) : ((arg0, arg1) => {
      if (null === arg1) {
        if (!lib.encode) {
          let joined = arg0;
        } else if (tmp13.strict) {
          let encodeURIComponentResult = lib(4377)(arg0);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items = [arg0, "=", ];
        if (!lib.encode) {
          items[2] = arg1;
          joined = items.join("");
        } else if (lib.strict) {
          let encodeURIComponentResult1 = lib(4377)(arg1);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult1 = encodeURIComponent(arg1);
        }
      } else if (lib.strict) {
        let encodeURIComponentResult2 = lib(4377)(arg0);
      } else {
        const _encodeURIComponent = encodeURIComponent;
        encodeURIComponentResult2 = encodeURIComponent(arg0);
      }
      return joined;
    });
  }
  let str2 = "";
  if (arg0) {
    const _Object = Object;
    const keys = Object.keys(arg0);
    const sorted = keys.sort();
    const mapped = sorted.map((item, index) => {
      const lib = item;
      if (undefined === lib[item]) {
        return "";
      } else if (null === arr) {
        if (!items.encode) {
          return item;
        } else if (tmp13.strict) {
          let encodeURIComponentResult = lib(4377)(item);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(item);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          items = [];
          const substr = arr.slice();
          item = substr.forEach((item, index) => {
            if (undefined !== item) {
              items.push(fn(closure_0, item, items.length));
            }
          });
          return items.join("&");
        } else if (!items.encode) {
          if (!tmp.encode) {
            return item + "=" + arr;
          } else if (tmp.strict) {
            let encodeURIComponentResult1 = lib(4377)(arr);
          } else {
            const _encodeURIComponent2 = encodeURIComponent;
            encodeURIComponentResult1 = encodeURIComponent(arr);
          }
        } else if (tmp.strict) {
          let encodeURIComponentResult2 = lib(4377)(item);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          encodeURIComponentResult2 = encodeURIComponent(item);
        }
      }
    });
    const found = mapped.filter((item, index) => item.length > 0);
    str2 = found.join("&");
  }
  return str2;
};