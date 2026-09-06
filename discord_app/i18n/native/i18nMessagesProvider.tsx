// === Module 17903: i18nMessagesProvider ===

// Module 17903 (i18nMessagesProvider)
import _mod17 from "module_17" /* 17 */;
import NativeI18nModuleDefault from "NativeI18nModule" /* 17904 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let i18nManager = NativeI18nModuleDefault;
} else {
  i18nManager = _mod17.NativeModules.i18nManager;
}
let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      i18nManager.valuesResult(arr.map((item) => {
        const result = closure_1_0(1155).runtimeHashMessageKey(item);
        const tmp4 = closure_1_0(1114).t[result];
        let str = "";
        if (null != tmp4) {
          const intl = closure_1_0(1114).intl;
          str = intl.reserialize(tmp4);
        }
        return str;
      }));
      closure_0(true);
    });
  });
};