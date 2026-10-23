// === Module 9069: icons/Share ===

// Module 9069 (icons/Share)
import _modDef9070 from "module_9070" /* 9070 */;
import _modDef9071 from "module_9071" /* 9071 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9070;
} else {
  importDefaultResult = _modDef9071;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;