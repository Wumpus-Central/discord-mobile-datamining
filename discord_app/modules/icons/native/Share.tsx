// === Module 9531: Share ===

// Module 9531 (Share)
import AssetRegistryDefault from "AssetRegistry" /* 9532 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9533 */;
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