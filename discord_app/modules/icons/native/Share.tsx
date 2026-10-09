// === Module 8710: icons/Share ===

// Module 8710 (icons/Share)
import _modDef8711 from "module_8711" /* 8711 */;
import _modDef8712 from "module_8712" /* 8712 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef8711;
} else {
  importDefaultResult = _modDef8712;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;