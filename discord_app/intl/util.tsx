// discord_app/intl/util.tsx
import _mod1153 from "../../_runtime/metro/01153__.js";
import _Parser from "../../_runtime/01176__Parser.js";
import noop from "../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = { es: "es-ES", nb: "no", nn: "no" };
const size = fn(2);
const result = size.fileFinishedImporting("intl/util.tsx");

export function getAvailableLocales() {
  _require = require("messages/en-US.messages.js").default;
  const found = require("../../_runtime/metro/01175__.js").filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    code = code.code;
    const obj = { value: code, name: code.name, localizedName: null };
    const obj2 = _mod1153;
    obj.localizedName = closure_0[obj2.runtimeHashMessageKey(obj2, code)];
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
}
export function getLanguages() {
  return require("../../_runtime/metro/01175__.js");
}
export function getNormalizedLocale(Language, arg1) {
  const found = require("../../_runtime/metro/01175__.js").filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(Language)) {
    return Language;
  } else {
    const parts = Language.split("-");
    if (mapped.includes(parts[0])) {
      return parts[0];
    } else {
      let tmp2 = null;
      if (1 === parts.length) {
        tmp2 = closure_3[parts[0]];
      }
      if (null != tmp2) {
        if (mapped.includes(tmp2)) {
          return tmp2;
        }
      }
      if ("zh" === parts[0]) {
        let found1 = mapped.find((item) => "zh-TW" === item);
        if (found1 == null) {
          found1 = arg1;
        }
        let found2 = found1;
      }
      found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = arg1;
      }
    }
  }
  const arr = require("../../_runtime/metro/01175__.js");
}
export function parseRuntimeIcuAsIntlMessage(acknowledgedBadgeLabel, currentLocale) {
  const parsed = _Parser.parse(acknowledgedBadgeLabel, { ignoreTag: true });
  const internalIntlMessage = new _mod1153.InternalIntlMessage(parsed, currentLocale);
  return internalIntlMessage;
}
export function useSyncMessages(arg0, withFormattersResult) {
  closure_0 = arg0;
  const currentLocale = withFormattersResult;
  const syncExternalStore = noop.useSyncExternalStore(
    (arg0) => closure_0.onChange(arg0),
    () => closure_0.isLocaleLoaded(currentLocale.currentLocale),
  );
}
