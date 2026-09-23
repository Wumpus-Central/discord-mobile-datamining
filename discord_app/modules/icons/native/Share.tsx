// === Module 10199: icons/Share ===

// Module 10199 (icons/Share)
import _modDef10200 from "module_10200" /* 10200 */;
import _modDef10201 from "module_10201" /* 10201 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10200;
} else {
  importDefaultResult = _modDef10201;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;