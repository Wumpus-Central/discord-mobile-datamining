// discord_app/utils/native/AvatarUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import registerAssetDefault from "../../../_runtime/01439_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/01440_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/01441_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/01442_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/01443_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/01444_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/01445_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/01446_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/01447_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/01448_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/01449_registerAsset.js";
import registerAssetDefault12 from "../../../_runtime/01450_registerAsset.js";
import registerAssetDefault13 from "../../../_runtime/01451_registerAsset.js";
import registerAssetDefault14 from "../../../_runtime/01452_registerAsset.js";
import registerAssetDefault15 from "../../../_runtime/01453_registerAsset.js";
import registerAssetDefault16 from "../../../_runtime/01454_registerAsset.js";
import registerAssetDefault17 from "../../../_runtime/01455_registerAsset.js";
import registerAssetDefault18 from "../../../_runtime/01456_registerAsset.js";
import registerAssetDefault19 from "../../../_runtime/01457_registerAsset.js";
import registerAssetDefault20 from "../../../_runtime/01458_registerAsset.js";
import registerAssetDefault21 from "../../../_runtime/01459_registerAsset.js";
import registerAssetDefault22 from "../../../_runtime/01460_registerAsset.js";
import registerAssetDefault23 from "../../../_runtime/01461_registerAsset.js";
import registerAssetDefault24 from "../../../_runtime/01462_registerAsset.js";
import registerAssetDefault25 from "../../../_runtime/01463_registerAsset.js";
import registerAssetDefault26 from "../../../_runtime/01464_registerAsset.js";
import registerAssetDefault27 from "../../../_runtime/01465_registerAsset.js";
import registerAssetDefault28 from "../../../_runtime/01466_registerAsset.js";
import registerAssetDefault29 from "../../../_runtime/01468_registerAsset.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { registerAsset } from "../../../_runtime/01467_registerAsset.js";

function ensureAvatarSource(source) {
  if (typeof source === "number") {
    let assetSource = closure_2.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
({ Image: obj1, NativeModules } = get_ActivityIndicator);
const items = [registerAssetDefault, registerAssetDefault2, registerAssetDefault3, registerAssetDefault4, registerAssetDefault5, registerAssetDefault6];
const items1 = [registerAssetDefault7, registerAssetDefault8, registerAssetDefault9, registerAssetDefault10, registerAssetDefault11, registerAssetDefault12];
const items2 = [registerAssetDefault13, registerAssetDefault14, registerAssetDefault15, registerAssetDefault16, registerAssetDefault17, registerAssetDefault18];
const items3 = [registerAssetDefault19, registerAssetDefault20, registerAssetDefault21, registerAssetDefault22, registerAssetDefault23, registerAssetDefault24, registerAssetDefault25, registerAssetDefault26];
const MediaManager = NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
const obj = { clyde: registerAssetDefault27, nitro_wumpus: registerAssetDefault28 };
obj[5] = obj;
obj[6] = registerAssetDefault29;
obj[7] = ensureAvatarSource;
obj[8] = function canUseWebp() {
  return set.has("webp");
};
const result = obj132.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return registerAsset;
};