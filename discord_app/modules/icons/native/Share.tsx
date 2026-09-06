// === Module 9857: ? ===

// Module 9857
import registerAssetDefault from "registerAsset" /* 9858 */;
import registerAssetDefault2 from "registerAsset" /* 9859 */;
import set from "set" /* 1115 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;