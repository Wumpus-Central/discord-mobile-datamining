// === Module 8701: icons/Share ===

// Module 8701 (icons/Share)
import _modDef8702 from "module_8702" /* 8702 */;
import _modDef8703 from "module_8703" /* 8703 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef8702;
} else {
  importDefaultResult = _modDef8703;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;