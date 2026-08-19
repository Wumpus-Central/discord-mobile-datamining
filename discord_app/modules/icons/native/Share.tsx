// === Module 10843: ? ===

// Module 10843
import registerAssetDefault from "registerAsset" /* 10844 */;
import registerAssetDefault2 from "registerAsset" /* 10845 */;
import obj132 from "obj132" /* 500 */;

if (obj132.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = obj132.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;