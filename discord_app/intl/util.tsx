// === Module 1128: intl/util ===

// Module 1128 (intl/util)
import react2 from "react" /* 576 */;
import _mod1165 from "module_1165" /* 1165 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, code;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== arg0) {
    const fn = function l(arg0) {
      return closure_0.onChange(arg0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === arg1) {
    let tmp3;
    if (cResult[3] === arg0) {
      tmp3 = cResult[4];
    }
    const syncExternalStore = react.useSyncExternalStore(tmp2, tmp3);
  }
  const fn2 = function o() {
    return closure_0.isLocaleLoaded(currentLocale.currentLocale);
  };
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn2;
  tmp3 = fn2;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const syncExternalStore = react.useSyncExternalStore((arg0) => closure_0.onChange(arg0), () => closure_0.isLocaleLoaded(currentLocale.currentLocale));
});
function getLanguages() {
  return require("module_1187");
}
const result = size.fileFinishedImporting("intl/util.tsx");

export const getAvailableLocales = function getAvailableLocales() {
  let closure_0;
  _require = require("module_1129").default;
  const arr = require("module_1187");
  const found = arr.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    let obj2;
    code = code.code;
    const obj = { value: code, name: code.name, localizedName: closure_0[obj2.runtimeHashMessageKey(obj2, code)] };
    obj2 = _mod1165;
    return obj;
  });
  return mapped.sort((name, name2) => {
    const str = name.name;
    const str2 = name2.name;
    const formatted = str.toLowerCase();
    const formatted1 = str2.toLowerCase();
    let num = -1;
    if (formatted >= formatted1) {
      let num2 = 0;
      if (formatted > formatted1) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
export { getLanguages };
export const getNormalizedLocale = function getNormalizedLocale(Language, arg1) {
  const arr = require("module_1187");
  const found = arr.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(Language)) {
    return Language;
  } else {
    let found2;
    const parts = Language.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((item) => "zh-TW" === item);
            if (found1 == null) {
              found1 = arg1;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = arg1;
      }
    }
    return found2;
  }
};
export const useSyncMessages = tmp2;