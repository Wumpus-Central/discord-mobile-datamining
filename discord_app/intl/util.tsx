// discord_app/intl/util.tsx
import noop from "noop";

const require = arg1;
const result = require("module_1274").fileFinishedImporting("intl/util.tsx");

export const getAvailableLocales = function getAvailableLocales() {
  _require = _require("messages/en-US.messages.js").default;
  const found = _require("../../_runtime/01296_items.js").filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    code = code.code;
    const obj = { value: code, name: code.name, localizedName: null };
    const obj2 = dependencyMap(outer1_1[2]);
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
  return require("../../_runtime/01296_items.js") /* items */;
};
export const getNormalizedLocale = function getNormalizedLocale(str, arg1) {
  const found = parts(1296).filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(str)) {
    return str;
  } else {
    parts = str.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((arg0) => "zh-TW" === arg0);
            if (found1 == null) {
              found1 = arg1;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((arg0) => arg0.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = arg1;
      }
    }
    return found2;
  }
  const arr = parts(1296);
};
export const useSyncMessages = function useSyncMessages(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const syncExternalStore = noop.useSyncExternalStore((arg0) => closure_0.onChange(arg0), () => closure_0.isLocaleLoaded(currentLocale.currentLocale));
};