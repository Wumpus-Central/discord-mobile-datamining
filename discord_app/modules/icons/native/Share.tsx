// === Module 9306: ? ===

// Module 9306
import registerAssetDefault from "registerAsset" /* 9307 */;
import registerAssetDefault2 from "registerAsset" /* 9308 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;