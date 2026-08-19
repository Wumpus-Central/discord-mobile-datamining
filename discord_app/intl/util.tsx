// === Module 1237: getAvailableLocales ===

// Module 1237 (getAvailableLocales)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("intl/util.tsx");

export const getAvailableLocales = function getAvailableLocales() {
  _require = _require(1238).default;
  const found = _require(1296).filter((item, index) => item.enabled);
  const mapped = found.map((item, index) => {
    const code = item.code;
    const obj = { value: code, name: item.name, localizedName: null };
    const obj2 = dependencyMap(closure_1_1[2]);
    obj[2] = dependencyMap[obj2.runtimeHashMessageKey(obj2, code)];
    return obj;
  });
  return mapped.sort((name, name2) => {
    const formatted = name.name.toLowerCase();
    const formatted1 = name2.name.toLowerCase();
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
export const getLanguages = function getLanguages() {
  return require(1296) /* items */;
};
export const getNormalizedLocale = function getNormalizedLocale(Language, arg1) {
  const found = parts(1296).filter((item, index) => item.enabled);
  const mapped = found.map((item, index) => item.code);
  if (mapped.includes(Language)) {
    return Language;
  } else {
    parts = Language.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((item, index) => "zh-TW" === item);
            if (found1 == null) {
              found1 = arg1;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((item, index) => item.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = arg1;
      }
    }
    return found2;
  }
  const arr = parts(1296);
};
export const useSyncMessages = function useSyncMessages(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const syncExternalStore = closure_2.useSyncExternalStore((arg0) => closure_0.onChange(arg0), () => closure_0.isLocaleLoaded(currentLocale.currentLocale));
};