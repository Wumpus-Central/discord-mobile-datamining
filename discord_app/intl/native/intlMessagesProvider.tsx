// === Module 19004: intlMessagesProvider ===

// Module 19004 (intlMessagesProvider)
import util from "util" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import NativeI18nModuleDefault from "NativeI18nModule" /* 19005 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
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