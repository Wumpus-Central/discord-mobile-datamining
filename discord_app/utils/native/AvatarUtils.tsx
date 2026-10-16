// === Module 1420: utils/AvatarUtils ===

// Module 1420 (utils/AvatarUtils)
import _mod17 from "module_17" /* 17 */;
import _modDef1421 from "module_1421" /* 1421 */;
import _modDef1422 from "module_1422" /* 1422 */;
import _modDef1423 from "module_1423" /* 1423 */;
import _modDef1424 from "module_1424" /* 1424 */;
import _modDef1425 from "module_1425" /* 1425 */;
import _modDef1426 from "module_1426" /* 1426 */;
import _modDef1427 from "module_1427" /* 1427 */;
import _modDef1428 from "module_1428" /* 1428 */;
import _modDef1429 from "module_1429" /* 1429 */;
import _modDef1430 from "module_1430" /* 1430 */;
import _modDef1431 from "module_1431" /* 1431 */;
import _modDef1432 from "module_1432" /* 1432 */;
import _modDef1433 from "module_1433" /* 1433 */;
import _modDef1434 from "module_1434" /* 1434 */;
import _modDef1435 from "module_1435" /* 1435 */;
import _modDef1436 from "module_1436" /* 1436 */;
import _modDef1437 from "module_1437" /* 1437 */;
import _modDef1438 from "module_1438" /* 1438 */;
import _modDef1439 from "module_1439" /* 1439 */;
import _modDef1440 from "module_1440" /* 1440 */;
import _modDef1441 from "module_1441" /* 1441 */;
import _modDef1442 from "module_1442" /* 1442 */;
import _modDef1443 from "module_1443" /* 1443 */;
import _modDef1444 from "module_1444" /* 1444 */;
import _modDef1445 from "module_1445" /* 1445 */;
import _modDef1446 from "module_1446" /* 1446 */;
import _modDef1448 from "module_1448" /* 1448 */;
import _modDef1449 from "module_1449" /* 1449 */;
import _modDef1451 from "module_1451" /* 1451 */;
import NativeMediaManagerModule from "NativeMediaManagerModule" /* 1447 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function ensureAvatarSource(avatarSource) {
  if (typeof avatarSource === "number") {
    let assetSource = Image.resolveAssetSource(avatarSource);
  } else {
    const _Array = Array;
    assetSource = avatarSource;
  }
  return assetSource;
}
const Image = _mod17.Image;
const items = [_modDef1421, _modDef1422, _modDef1423, _modDef1424, _modDef1425, _modDef1426];
const items1 = [_modDef1427, _modDef1428, _modDef1429, _modDef1430, _modDef1431, _modDef1432];
const items2 = [_modDef1433, _modDef1434, _modDef1435, _modDef1436, _modDef1437, _modDef1438];
const items3 = [_modDef1439, _modDef1440, _modDef1441, _modDef1442, _modDef1443, _modDef1444, _modDef1445, _modDef1446];
const set = new Set(NativeMediaManagerModule.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: _modDef1448, nitro_wumpus: _modDef1449 },
  DEFAULT_CHANNEL_ICON: _modDef1451,
  ensureAvatarSource,
  canUseWebp() {
    return set.has("webp");
  }
};
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("module_1450");
};