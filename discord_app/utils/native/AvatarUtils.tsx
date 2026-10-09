// discord_app/utils/native/AvatarUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import _modDef1419 from "../../../_runtime/metro/01419__.js";
import _modDef1420 from "../../../_runtime/metro/01420__.js";
import _modDef1421 from "../../../_runtime/metro/01421__.js";
import _modDef1422 from "../../../_runtime/metro/01422__.js";
import _modDef1423 from "../../../_runtime/metro/01423__.js";
import _modDef1424 from "../../../_runtime/metro/01424__.js";
import _modDef1425 from "../../../_runtime/metro/01425__.js";
import _modDef1426 from "../../../_runtime/metro/01426__.js";
import _modDef1427 from "../../../_runtime/metro/01427__.js";
import _modDef1428 from "../../../_runtime/metro/01428__.js";
import _modDef1429 from "../../../_runtime/metro/01429__.js";
import _modDef1430 from "../../../_runtime/metro/01430__.js";
import _modDef1431 from "../../../_runtime/metro/01431__.js";
import _modDef1432 from "../../../_runtime/metro/01432__.js";
import _modDef1433 from "../../../_runtime/metro/01433__.js";
import _modDef1434 from "../../../_runtime/metro/01434__.js";
import _modDef1435 from "../../../_runtime/metro/01435__.js";
import _modDef1436 from "../../../_runtime/metro/01436__.js";
import _modDef1437 from "../../../_runtime/metro/01437__.js";
import _modDef1438 from "../../../_runtime/metro/01438__.js";
import _modDef1439 from "../../../_runtime/metro/01439__.js";
import _modDef1440 from "../../../_runtime/metro/01440__.js";
import _modDef1441 from "../../../_runtime/metro/01441__.js";
import _modDef1442 from "../../../_runtime/metro/01442__.js";
import _modDef1443 from "../../../_runtime/metro/01443__.js";
import _modDef1444 from "../../../_runtime/metro/01444__.js";
import _modDef1446 from "../../../_runtime/metro/01446__.js";
import _modDef1447 from "../../../_runtime/metro/01447__.js";
import _modDef1449 from "../../../_runtime/metro/01449__.js";
import NativeMediaManagerModule from "../../../discord_common/js/packages/rtn-codegen/js/NativeMediaManagerModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const items = [_modDef1419, _modDef1420, _modDef1421, _modDef1422, _modDef1423, _modDef1424];
const items1 = [_modDef1425, _modDef1426, _modDef1427, _modDef1428, _modDef1429, _modDef1430];
const items2 = [_modDef1431, _modDef1432, _modDef1433, _modDef1434, _modDef1435, _modDef1436];
const items3 = [_modDef1437, _modDef1438, _modDef1439, _modDef1440, _modDef1441, _modDef1442, _modDef1443, _modDef1444];
const set = new Set(NativeMediaManagerModule.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: _modDef1446, nitro_wumpus: _modDef1447 },
  DEFAULT_CHANNEL_ICON: _modDef1449,
  ensureAvatarSource,
  canUseWebp() {
    return set.has("webp");
  },
};
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("../../../_runtime/metro/01448__.js");
};
