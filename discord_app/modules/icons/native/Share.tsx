// === Module 10882: ? ===

// Module 10882
import registerAssetDefault from "registerAsset" /* 10883 */;
import registerAssetDefault2 from "registerAsset" /* 10884 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;