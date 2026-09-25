// === Module 9301: icons/Share ===

// Module 9301 (icons/Share)
import _modDef9302 from "module_9302" /* 9302 */;
import _modDef9303 from "module_9303" /* 9303 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9302;
} else {
  importDefaultResult = _modDef9303;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;