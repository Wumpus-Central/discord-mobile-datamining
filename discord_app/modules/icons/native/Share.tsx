// === Module 9518: Share ===

// Module 9518 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9519 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9520 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;