// discord_app/utils/native/AvatarUtils.tsx
import registerAssetDefault from "../../../_runtime/01400_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/01401_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/01402_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/01403_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/01404_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/01405_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/01406_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/01407_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/01408_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/01409_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/01410_registerAsset.js";
import registerAssetDefault12 from "../../../_runtime/01411_registerAsset.js";
import registerAssetDefault13 from "../../../_runtime/01412_registerAsset.js";
import registerAssetDefault14 from "../../../_runtime/01413_registerAsset.js";
import registerAssetDefault15 from "../../../_runtime/01414_registerAsset.js";
import registerAssetDefault16 from "../../../_runtime/01415_registerAsset.js";
import registerAssetDefault17 from "../../../_runtime/01416_registerAsset.js";
import registerAssetDefault18 from "../../../_runtime/01417_registerAsset.js";
import registerAssetDefault19 from "../../../_runtime/01418_registerAsset.js";
import registerAssetDefault20 from "../../../_runtime/01419_registerAsset.js";
import registerAssetDefault21 from "../../../_runtime/01420_registerAsset.js";
import registerAssetDefault22 from "../../../_runtime/01421_registerAsset.js";
import registerAssetDefault23 from "../../../_runtime/01422_registerAsset.js";
import registerAssetDefault24 from "../../../_runtime/01423_registerAsset.js";
import registerAssetDefault25 from "../../../_runtime/01424_registerAsset.js";
import registerAssetDefault26 from "../../../_runtime/01425_registerAsset.js";
import registerAssetDefault27 from "../../../_runtime/01426_registerAsset.js";
import registerAssetDefault28 from "../../../_runtime/01427_registerAsset.js";
import registerAssetDefault29 from "../../../_runtime/01429_registerAsset.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import set from "../../../_runtime/00002_set.js";
import { registerAsset } from "../../../_runtime/01428_registerAsset.js";

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
const items = [
  registerAssetDefault,
  registerAssetDefault2,
  registerAssetDefault3,
  registerAssetDefault4,
  registerAssetDefault5,
  registerAssetDefault6,
];
const items1 = [
  registerAssetDefault7,
  registerAssetDefault8,
  registerAssetDefault9,
  registerAssetDefault10,
  registerAssetDefault11,
  registerAssetDefault12,
];
const items2 = [
  registerAssetDefault13,
  registerAssetDefault14,
  registerAssetDefault15,
  registerAssetDefault16,
  registerAssetDefault17,
  registerAssetDefault18,
];
const items3 = [
  registerAssetDefault19,
  registerAssetDefault20,
  registerAssetDefault21,
  registerAssetDefault22,
  registerAssetDefault23,
  registerAssetDefault24,
  registerAssetDefault25,
  registerAssetDefault26,
];
const MediaManager = NativeModules.MediaManager;
let set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: null,
  DEFAULT_CHANNEL_ICON: null,
  ensureAvatarSource: null,
  canUseWebp: null,
};
obj = { clyde: registerAssetDefault27, nitro_wumpus: registerAssetDefault28 };
obj[5] = obj;
obj[6] = registerAssetDefault29;
obj[7] = ensureAvatarSource;
obj[8] = function canUseWebp() {
  return set.has("webp");
};
const result = set.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return registerAsset;
};
