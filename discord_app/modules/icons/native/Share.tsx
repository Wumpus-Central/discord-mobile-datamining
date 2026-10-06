// discord_app/modules/icons/native/Share.tsx
import AssetRegistryDefault from "../../../../_runtime/09532_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/09533_AssetRegistry.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefaultResult;
if (PlatformUtils.isIOS()) {
  importDefaultResult = AssetRegistryDefault;
} else {
  importDefaultResult = AssetRegistryDefault2;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
