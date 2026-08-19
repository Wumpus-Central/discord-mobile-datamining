// discord_app/modules/icons/native/Share.tsx
import registerAssetDefault from "../../../../_runtime/10844_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/10845_registerAsset.js";
import obj132 from "../../../utils/PlatformUtils.tsx";

if (obj132.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = obj132.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;