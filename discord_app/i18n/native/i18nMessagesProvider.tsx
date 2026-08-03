import set from "set";
import set from "enforcing";

if (set.isAndroid()) {
  let i18nManager = require("enforcing");
} else {
  i18nManager = require("get ActivityIndicator").NativeModules.i18nManager;
}
let result = set.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      outer1_2.valuesResult(arr.map((code) => {
        const result = callback(1274).runtimeHashMessageKey(code);
        const tmp4 = callback(1236).t[result];
        let str = "";
        if (null != tmp4) {
          const intl = callback(1236).intl;
          str = intl.reserialize(tmp4);
        }
        return str;
      }));
      callback(true);
    });
  });
};