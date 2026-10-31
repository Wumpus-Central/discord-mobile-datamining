// === Module 9161: icons/Share ===

// Module 9161 (icons/Share)
import _modDef9162 from "module_9162" /* 9162 */;
import _modDef9163 from "module_9163" /* 9163 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9162;
} else {
  importDefaultResult = _modDef9163;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;