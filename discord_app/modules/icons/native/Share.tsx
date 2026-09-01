// === Module 9948: ? ===

// Module 9948
import registerAssetDefault from "registerAsset" /* 9949 */;
import registerAssetDefault2 from "registerAsset" /* 9950 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;