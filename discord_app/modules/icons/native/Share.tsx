// === Module 9241: icons/Share ===

// Module 9241 (icons/Share)
import _modDef9242 from "module_9242" /* 9242 */;
import _modDef9243 from "module_9243" /* 9243 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9242;
} else {
  importDefaultResult = _modDef9243;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;