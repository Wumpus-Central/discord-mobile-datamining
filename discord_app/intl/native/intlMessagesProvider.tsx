// === Module 19332: intlMessagesProvider ===

// Module 19332 (intlMessagesProvider)
import util from "util" /* 1128 */;
import _mod1167 from "module_1167" /* 1167 */;
import NativeI18nModuleDefault from "NativeI18nModule" /* 19333 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
  const keys = NativeI18nModuleDefault.getKeys();
  const mapped = keys.map((item) => {
    const result = _mod1167.runtimeHashMessageKey(item);
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