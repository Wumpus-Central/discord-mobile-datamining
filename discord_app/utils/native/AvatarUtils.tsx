// discord_app/utils/native/AvatarUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import _modDef1401 from "../../../_runtime/metro/01401__.js";
import _modDef1402 from "../../../_runtime/metro/01402__.js";
import _modDef1403 from "../../../_runtime/metro/01403__.js";
import _modDef1404 from "../../../_runtime/metro/01404__.js";
import _modDef1405 from "../../../_runtime/metro/01405__.js";
import _modDef1406 from "../../../_runtime/metro/01406__.js";
import _modDef1407 from "../../../_runtime/metro/01407__.js";
import _modDef1408 from "../../../_runtime/metro/01408__.js";
import _modDef1409 from "../../../_runtime/metro/01409__.js";
import _modDef1410 from "../../../_runtime/metro/01410__.js";
import _modDef1411 from "../../../_runtime/metro/01411__.js";
import _modDef1412 from "../../../_runtime/metro/01412__.js";
import _modDef1413 from "../../../_runtime/metro/01413__.js";
import _modDef1414 from "../../../_runtime/metro/01414__.js";
import _modDef1415 from "../../../_runtime/metro/01415__.js";
import _modDef1416 from "../../../_runtime/metro/01416__.js";
import _modDef1417 from "../../../_runtime/metro/01417__.js";
import _modDef1418 from "../../../_runtime/metro/01418__.js";
import _modDef1419 from "../../../_runtime/metro/01419__.js";
import _modDef1420 from "../../../_runtime/metro/01420__.js";
import _modDef1421 from "../../../_runtime/metro/01421__.js";
import _modDef1422 from "../../../_runtime/metro/01422__.js";
import _modDef1423 from "../../../_runtime/metro/01423__.js";
import _modDef1424 from "../../../_runtime/metro/01424__.js";
import _modDef1425 from "../../../_runtime/metro/01425__.js";
import _modDef1426 from "../../../_runtime/metro/01426__.js";
import _modDef1428 from "../../../_runtime/metro/01428__.js";
import _modDef1429 from "../../../_runtime/metro/01429__.js";
import _modDef1431 from "../../../_runtime/metro/01431__.js";
import NativeMediaManagerModule from "../../../discord_common/js/packages/rtn-codegen/js/NativeMediaManagerModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function ensureAvatarSource(source) {
  if (typeof source === "number") {
    let assetSource = Image.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
const Image = _mod17.Image;
const items = [_modDef1401, _modDef1402, _modDef1403, _modDef1404, _modDef1405, _modDef1406];
const items1 = [_modDef1407, _modDef1408, _modDef1409, _modDef1410, _modDef1411, _modDef1412];
const items2 = [_modDef1413, _modDef1414, _modDef1415, _modDef1416, _modDef1417, _modDef1418];
const items3 = [_modDef1419, _modDef1420, _modDef1421, _modDef1422, _modDef1423, _modDef1424, _modDef1425, _modDef1426];
const set = new Set(NativeMediaManagerModule.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: _modDef1428, nitro_wumpus: _modDef1429 },
  DEFAULT_CHANNEL_ICON: _modDef1431,
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
  return require("../../../_runtime/metro/01430__.js");
};
