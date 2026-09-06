// === Module 1399: ensureAvatarSource ===

// Module 1399 (ensureAvatarSource)
import registerAssetDefault from "registerAsset" /* 1400 */;
import registerAssetDefault2 from "registerAsset" /* 1401 */;
import registerAssetDefault3 from "registerAsset" /* 1402 */;
import registerAssetDefault4 from "registerAsset" /* 1403 */;
import registerAssetDefault5 from "registerAsset" /* 1404 */;
import registerAssetDefault6 from "registerAsset" /* 1405 */;
import registerAssetDefault7 from "registerAsset" /* 1406 */;
import registerAssetDefault8 from "registerAsset" /* 1407 */;
import registerAssetDefault9 from "registerAsset" /* 1408 */;
import registerAssetDefault10 from "registerAsset" /* 1409 */;
import registerAssetDefault11 from "registerAsset" /* 1410 */;
import registerAssetDefault12 from "registerAsset" /* 1411 */;
import registerAssetDefault13 from "registerAsset" /* 1412 */;
import registerAssetDefault14 from "registerAsset" /* 1413 */;
import registerAssetDefault15 from "registerAsset" /* 1414 */;
import registerAssetDefault16 from "registerAsset" /* 1415 */;
import registerAssetDefault17 from "registerAsset" /* 1416 */;
import registerAssetDefault18 from "registerAsset" /* 1417 */;
import registerAssetDefault19 from "registerAsset" /* 1418 */;
import registerAssetDefault20 from "registerAsset" /* 1419 */;
import registerAssetDefault21 from "registerAsset" /* 1420 */;
import registerAssetDefault22 from "registerAsset" /* 1421 */;
import registerAssetDefault23 from "registerAsset" /* 1422 */;
import registerAssetDefault24 from "registerAsset" /* 1423 */;
import registerAssetDefault25 from "registerAsset" /* 1424 */;
import registerAssetDefault26 from "registerAsset" /* 1425 */;
import registerAssetDefault27 from "registerAsset" /* 1426 */;
import registerAssetDefault28 from "registerAsset" /* 1427 */;
import registerAssetDefault29 from "registerAsset" /* 1429 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 2 */;

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
let set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3, BOT_AVATARS: null, DEFAULT_CHANNEL_ICON: null, ensureAvatarSource: null, canUseWebp: null };
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
  return importDefault(1428);
};