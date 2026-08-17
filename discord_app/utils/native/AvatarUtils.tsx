// discord_app/utils/native/AvatarUtils.tsx
import registerAssetDefault from "registerAsset" /* 1439 */;
import registerAssetDefault2 from "registerAsset" /* 1440 */;
import registerAssetDefault3 from "registerAsset" /* 1441 */;
import registerAssetDefault4 from "registerAsset" /* 1442 */;
import registerAssetDefault5 from "registerAsset" /* 1443 */;
import registerAssetDefault6 from "registerAsset" /* 1444 */;
import registerAssetDefault7 from "registerAsset" /* 1445 */;
import registerAssetDefault8 from "registerAsset" /* 1446 */;
import registerAssetDefault9 from "registerAsset" /* 1447 */;
import registerAssetDefault10 from "registerAsset" /* 1448 */;
import registerAssetDefault11 from "registerAsset" /* 1449 */;
import registerAssetDefault12 from "registerAsset" /* 1450 */;
import registerAssetDefault13 from "registerAsset" /* 1451 */;
import registerAssetDefault14 from "registerAsset" /* 1452 */;
import registerAssetDefault15 from "registerAsset" /* 1453 */;
import registerAssetDefault16 from "registerAsset" /* 1454 */;
import registerAssetDefault17 from "registerAsset" /* 1455 */;
import registerAssetDefault18 from "registerAsset" /* 1456 */;
import registerAssetDefault19 from "registerAsset" /* 1457 */;
import registerAssetDefault20 from "registerAsset" /* 1458 */;
import registerAssetDefault21 from "registerAsset" /* 1459 */;
import registerAssetDefault22 from "registerAsset" /* 1460 */;
import registerAssetDefault23 from "registerAsset" /* 1461 */;
import registerAssetDefault24 from "registerAsset" /* 1462 */;
import registerAssetDefault25 from "registerAsset" /* 1463 */;
import registerAssetDefault26 from "registerAsset" /* 1464 */;
import registerAssetDefault27 from "registerAsset" /* 1465 */;
import registerAssetDefault28 from "registerAsset" /* 1466 */;
import registerAssetDefault29 from "registerAsset" /* 1468 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 2 */;
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
  return registerAsset;
};