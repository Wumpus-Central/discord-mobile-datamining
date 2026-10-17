// === Module 8998: icons/Share ===

// Module 8998 (icons/Share)
import _modDef8999 from "module_8999" /* 8999 */;
import _modDef9000 from "module_9000" /* 9000 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef8999;
} else {
  importDefaultResult = _modDef9000;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;