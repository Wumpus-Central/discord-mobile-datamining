// discord_app/modules/icons/native/Share.tsx
import registerAssetDefault from "../../../../_runtime/09975_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/09976_registerAsset.js";
import set from "../../../utils/PlatformUtils.tsx";

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
