// discord_app/utils/native/AvatarUtils.tsx
import get_ActivityIndicator from "registerAsset";
import set from "registerAsset";

let NativeModules;
let obj1;
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
const items = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items1 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items2 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items3 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const MediaManager = NativeModules.MediaManager;
let set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3, BOT_AVATARS: null, DEFAULT_CHANNEL_ICON: null, ensureAvatarSource: null, canUseWebp: null };
obj = { clyde: require("registerAsset"), nitro_wumpus: require("registerAsset") };
obj[5] = obj;
obj[6] = require("registerAsset");
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
  return importDefault(1448);
};