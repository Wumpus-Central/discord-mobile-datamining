// discord_app/utils/native/AvatarUtils.tsx
import _modDef1400 from "../../../_runtime/metro/01400__.js";
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
import _modDef1427 from "../../../_runtime/metro/01427__.js";
import _modDef1429 from "../../../_runtime/metro/01429__.js";
import get_ActivityIndicator from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

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
  return require("../../../_runtime/metro/01428__.js");
};
