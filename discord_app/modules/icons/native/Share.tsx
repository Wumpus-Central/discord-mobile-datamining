// === Module 10843: ? ===

// Module 10843
import registerAssetDefault from "registerAsset" /* 10844 */;
import registerAssetDefault2 from "registerAsset" /* 10845 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;