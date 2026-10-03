// === Module 18075: i18nMessagesProvider ===

// Module 18075 (i18nMessagesProvider)
import util from "util" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import NativeI18nModuleDefault from "NativeI18nModule" /* 18076 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  const keys = NativeI18nModuleDefault.getKeys();
  const mapped = keys.map((item) => {
    const result = _mod1165.runtimeHashMessageKey(item);
    const tmp4 = util.t[result];
    let str = "";
    if (null != tmp4) {
      const intl = util.intl;
      str = intl.reserialize(tmp4);
    }
    return str;
  });
  NativeI18nModuleDefault.valuesResult(mapped);
};