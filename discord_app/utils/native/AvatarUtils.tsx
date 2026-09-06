// === Module 1399: utils/AvatarUtils ===

// Module 1399 (utils/AvatarUtils)
import _modDef1400 from "module_1400" /* 1400 */;
import _modDef1401 from "module_1401" /* 1401 */;
import _modDef1402 from "module_1402" /* 1402 */;
import _modDef1403 from "module_1403" /* 1403 */;
import _modDef1404 from "module_1404" /* 1404 */;
import _modDef1405 from "module_1405" /* 1405 */;
import _modDef1406 from "module_1406" /* 1406 */;
import _modDef1407 from "module_1407" /* 1407 */;
import _modDef1408 from "module_1408" /* 1408 */;
import _modDef1409 from "module_1409" /* 1409 */;
import _modDef1410 from "module_1410" /* 1410 */;
import _modDef1411 from "module_1411" /* 1411 */;
import _modDef1412 from "module_1412" /* 1412 */;
import _modDef1413 from "module_1413" /* 1413 */;
import _modDef1414 from "module_1414" /* 1414 */;
import _modDef1415 from "module_1415" /* 1415 */;
import _modDef1416 from "module_1416" /* 1416 */;
import _modDef1417 from "module_1417" /* 1417 */;
import _modDef1418 from "module_1418" /* 1418 */;
import _modDef1419 from "module_1419" /* 1419 */;
import _modDef1420 from "module_1420" /* 1420 */;
import _modDef1421 from "module_1421" /* 1421 */;
import _modDef1422 from "module_1422" /* 1422 */;
import _modDef1423 from "module_1423" /* 1423 */;
import _modDef1424 from "module_1424" /* 1424 */;
import _modDef1425 from "module_1425" /* 1425 */;
import _modDef1426 from "module_1426" /* 1426 */;
import _modDef1427 from "module_1427" /* 1427 */;
import _modDef1429 from "module_1429" /* 1429 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

function ensureAvatarSource(source) {
  if (typeof source === "number") {
    let assetSource = React2.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
({ Image: c2, NativeModules } = get_ActivityIndicator);
const items = [_modDef1400, _modDef1401, _modDef1402, _modDef1403, _modDef1404, _modDef1405];
const items1 = [_modDef1406, _modDef1407, _modDef1408, _modDef1409, _modDef1410, _modDef1411];
const items2 = [_modDef1412, _modDef1413, _modDef1414, _modDef1415, _modDef1416, _modDef1417];
const items3 = [_modDef1418, _modDef1419, _modDef1420, _modDef1421, _modDef1422, _modDef1423, _modDef1424, _modDef1425];
const MediaManager = NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3, BOT_AVATARS: null, DEFAULT_CHANNEL_ICON: null, ensureAvatarSource: null, canUseWebp: null };
obj = { clyde: _modDef1426, nitro_wumpus: _modDef1427 };
obj.BOT_AVATARS = obj;
obj.DEFAULT_CHANNEL_ICON = _modDef1429;
obj.ensureAvatarSource = ensureAvatarSource;
obj.canUseWebp = function canUseWebp() {
  return set.has("webp");
};
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("module_1428");
};