// === Module 9909: ? ===

// Module 9909
import registerAssetDefault from "registerAsset" /* 9910 */;
import registerAssetDefault2 from "registerAsset" /* 9911 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;