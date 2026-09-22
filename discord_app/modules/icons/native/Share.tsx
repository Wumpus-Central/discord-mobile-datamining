// === Module 10119: icons/Share ===

// Module 10119 (icons/Share)
import _modDef10120 from "module_10120" /* 10120 */;
import _modDef10121 from "module_10121" /* 10121 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10120;
} else {
  importDefaultResult = _modDef10121;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;