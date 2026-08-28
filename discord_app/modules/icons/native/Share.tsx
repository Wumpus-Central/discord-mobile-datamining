// === Module 9886: ? ===

// Module 9886
import registerAssetDefault from "registerAsset" /* 9887 */;
import registerAssetDefault2 from "registerAsset" /* 9888 */;
import set from "set" /* 500 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;