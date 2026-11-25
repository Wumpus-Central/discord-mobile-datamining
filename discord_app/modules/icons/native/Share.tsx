// === Module 10413: icons/Share ===

// Module 10413 (icons/Share)
import _modDef10414 from "module_10414" /* 10414 */;
import _modDef10415 from "module_10415" /* 10415 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10414;
} else {
  importDefaultResult = _modDef10415;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;