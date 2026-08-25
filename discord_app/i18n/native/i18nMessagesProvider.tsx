// === Module 17245: i18nManager ===

// Module 17245 (i18nManager)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 17246 */;
import set from "set" /* 500 */;

if (set.isAndroid()) {
  let i18nManager = enforcingDefault;
} else {
  i18nManager = get_ActivityIndicator.NativeModules.i18nManager;
}
let result = set.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      closure_1_2.valuesResult(arr.map((code) => {
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