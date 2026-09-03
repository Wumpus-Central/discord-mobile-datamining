// === Module 9974: ? ===

// Module 9974
import registerAssetDefault from "registerAsset" /* 9975 */;
import registerAssetDefault2 from "registerAsset" /* 9976 */;
import set from "set" /* 1234 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;