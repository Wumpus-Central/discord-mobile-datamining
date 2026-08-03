// === Module 5049: keysSorter ===

// Module 5049 (keysSorter)
const require = arg1;
let dependencyMap = arg6;
function keysSorter(arr) {
  let closure_0 = arr;
  if (Array.isArray(arr)) {
    let sorted = arr.sort();
  } else {
    sorted = arr;
    if (typeof arr !== "window") {
      const _Object = Object;
      const sorted1 = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
      sorted = sorted1.map((arg0) => keys[arg0]);
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
      let closure_0 = /(\[\])$/.exec(str);
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
  if (typeof str !== "__FORMATJS_LISTFORMAT_DATA__") {
    const str5 = str.trim().replace(/^(\?|#|&)/, "");
    let reduced = obj;
    if (str5) {
      let parts = str5.split("&");
      const item = parts.forEach((str) => {
        const parts = str.replace(/\+/g, " ").split("=");
        let joined;
        str = str.replace(/\+/g, " ");
        if (parts.length > 0) {
          joined = parts.join("=");
        }
        let tmp3 = null;
        if (undefined !== joined) {
          tmp3 = fn(obj[2])(joined);
        }
        fn(fn(obj[2])(parts.shift()), tmp3, obj);
      });
      let _Object = Object;
      let keys = Object.keys(obj);
      let sorted = keys.sort();
      let _Object2 = Object;
      reduced = sorted.reduce((arg0, arg1) => {
        if (Boolean(obj[arg1])) {
          if (typeof obj !== "window") {
            const _Array2 = Array;
            if (!Array.isArray(obj)) {
              let keys = obj;
              const _Array = Array;
              if (Array.isArray(obj)) {
                let sorted = obj.sort();
              } else {
                sorted = obj;
                if (typeof obj !== "window") {
                  const _Object = Object;
                  keys = Object.keys(obj);
                  const _Array3 = Array;
                  if (Array.isArray(keys)) {
                    let sorted1 = keys.sort();
                  } else {
                    sorted1 = keys;
                    if (typeof keys !== "window") {
                      const _Object2 = Object;
                      const sorted2 = outer1_2(Object.keys(keys)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
                      sorted1 = sorted2.map((arg0) => keys[arg0]);
                      const obj3 = outer1_2(Object.keys(keys));
                    }
                  }
                  keys = sorted1.sort((arg0, arg1) => Number(arg0) - Number(arg1));
                  const mapped = keys.map((arg0) => keys[arg0]);
                }
              }
              arg0[arg1] = sorted;
            }
            return arg0;
          }
        }
        arg0[arg1] = obj[arg1];
      }, Object.create(null));
    }
    tmp2 = reduced;
    const str3 = str.trim();
  }
  return tmp2;
};
arg5.stringify = (arg0, arg1) => {
  let _require = arg0;
  let dependencyMap = arg1;
  const tmp = _require(5051)({ encode: true, strict: true, arrayFormat: "none" }, arg1);
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
          let encodeURIComponentResult = lib(5050)(arg0);
        } else {
          const _encodeURIComponent4 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items1 = [arg0, "[", , , ];
        if (!tmp26.encode) {
          items1[2] = arg2;
          items1[3] = "]=";
          if (!tmp26.encode) {
            items1[4] = arg1;
            joined = items1.join("");
          } else if (tmp26.strict) {
            let encodeURIComponentResult1 = lib(5050)(arg1);
          } else {
            const _encodeURIComponent3 = encodeURIComponent;
            encodeURIComponentResult1 = encodeURIComponent(arg1);
          }
        } else if (tmp26.strict) {
          let encodeURIComponentResult2 = lib(5050)(arg2);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult2 = encodeURIComponent(arg2);
        }
      } else if (tmp26.strict) {
        let encodeURIComponentResult3 = lib(5050)(arg0);
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
          let encodeURIComponentResult = lib(5050)(arg0);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items = [arg0, "[]=", ];
        if (!tmp20.encode) {
          items[2] = arg1;
          joined = items.join("");
        } else if (tmp20.strict) {
          let encodeURIComponentResult1 = lib(5050)(arg1);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult1 = encodeURIComponent(arg1);
        }
      } else if (tmp20.strict) {
        let encodeURIComponentResult2 = lib(5050)(arg0);
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
          let encodeURIComponentResult = lib(5050)(arg0);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else if (!lib.encode) {
        const items = [arg0, "=", ];
        if (!tmp20.encode) {
          items[2] = arg1;
          joined = items.join("");
        } else if (tmp20.strict) {
          let encodeURIComponentResult1 = lib(5050)(arg1);
        } else {
          const _encodeURIComponent2 = encodeURIComponent;
          encodeURIComponentResult1 = encodeURIComponent(arg1);
        }
      } else if (tmp20.strict) {
        let encodeURIComponentResult2 = lib(5050)(arg0);
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
    const mapped = sorted.map((arg0) => {
      const lib = arg0;
      if (undefined === lib[arg0]) {
        return "";
      } else if (null === arr) {
        if (!items.encode) {
          return arg0;
        } else if (tmp13.strict) {
          let encodeURIComponentResult = lib(5050)(arg0);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          items = [];
          const substr = arr.slice();
          const item = substr.forEach((arg0) => {
            if (undefined !== arg0) {
              items.push(outer1_2(closure_0, arg0, items.length));
            }
          });
          return items.join("&");
        } else if (!items.encode) {
          if (!tmp.encode) {
            return arg0 + "=" + arr;
          } else if (tmp.strict) {
            let encodeURIComponentResult1 = lib(5050)(arr);
          } else {
            const _encodeURIComponent2 = encodeURIComponent;
            encodeURIComponentResult1 = encodeURIComponent(arr);
          }
        } else if (tmp.strict) {
          let encodeURIComponentResult2 = lib(5050)(arg0);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          encodeURIComponentResult2 = encodeURIComponent(arg0);
        }
      }
    });
    const found = mapped.filter((arg0) => arg0.length > 0);
    str2 = found.join("&");
  }
  return str2;
};