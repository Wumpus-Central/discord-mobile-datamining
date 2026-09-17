// === Module 10008: icons/Share ===

// Module 10008 (icons/Share)
import _modDef10009 from "module_10009" /* 10009 */;
import _modDef10010 from "module_10010" /* 10010 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10009;
} else {
  importDefaultResult = _modDef10010;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;