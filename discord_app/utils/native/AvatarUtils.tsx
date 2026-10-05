// discord_app/utils/native/AvatarUtils.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import AssetRegistryDefault from "../../../_runtime/01406_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/01407_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../_runtime/01408_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../_runtime/01409_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../_runtime/01410_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../_runtime/01411_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../_runtime/01412_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../_runtime/01413_AssetRegistry.js";
import AssetRegistryDefault9 from "../../../_runtime/01414_AssetRegistry.js";
import AssetRegistryDefault10 from "../../../_runtime/01415_AssetRegistry.js";
import AssetRegistryDefault11 from "../../../_runtime/01416_AssetRegistry.js";
import AssetRegistryDefault12 from "../../../_runtime/01417_AssetRegistry.js";
import AssetRegistryDefault13 from "../../../_runtime/01418_AssetRegistry.js";
import AssetRegistryDefault14 from "../../../_runtime/01419_AssetRegistry.js";
import AssetRegistryDefault15 from "../../../_runtime/01420_AssetRegistry.js";
import AssetRegistryDefault16 from "../../../_runtime/01421_AssetRegistry.js";
import AssetRegistryDefault17 from "../../../_runtime/01422_AssetRegistry.js";
import AssetRegistryDefault18 from "../../../_runtime/01423_AssetRegistry.js";
import AssetRegistryDefault19 from "../../../_runtime/01424_AssetRegistry.js";
import AssetRegistryDefault20 from "../../../_runtime/01425_AssetRegistry.js";
import AssetRegistryDefault21 from "../../../_runtime/01426_AssetRegistry.js";
import AssetRegistryDefault22 from "../../../_runtime/01427_AssetRegistry.js";
import AssetRegistryDefault23 from "../../../_runtime/01428_AssetRegistry.js";
import AssetRegistryDefault24 from "../../../_runtime/01429_AssetRegistry.js";
import AssetRegistryDefault25 from "../../../_runtime/01430_AssetRegistry.js";
import AssetRegistryDefault26 from "../../../_runtime/01431_AssetRegistry.js";
import AssetRegistryDefault27 from "../../../_runtime/01433_AssetRegistry.js";
import AssetRegistryDefault28 from "../../../_runtime/01434_AssetRegistry.js";
import AssetRegistryDefault29 from "../../../_runtime/01436_AssetRegistry.js";
import react_native2 from "../../../discord_common/js/packages/rtn-codegen/js/NativeMediaManagerModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function ensureAvatarSource(avatarSource) {
  let assetSource;
  if (typeof avatarSource === "number") {
    assetSource = Image.resolveAssetSource(avatarSource);
  } else {
    const _Array = Array;
    assetSource = avatarSource;
  }
  return assetSource;
}
const Image = react_native.Image;
const items = [
  AssetRegistryDefault,
  AssetRegistryDefault2,
  AssetRegistryDefault3,
  AssetRegistryDefault4,
  AssetRegistryDefault5,
  AssetRegistryDefault6,
];
const items1 = [
  AssetRegistryDefault7,
  AssetRegistryDefault8,
  AssetRegistryDefault9,
  AssetRegistryDefault10,
  AssetRegistryDefault11,
  AssetRegistryDefault12,
];
const items2 = [
  AssetRegistryDefault13,
  AssetRegistryDefault14,
  AssetRegistryDefault15,
  AssetRegistryDefault16,
  AssetRegistryDefault17,
  AssetRegistryDefault18,
];
const items3 = [
  AssetRegistryDefault19,
  AssetRegistryDefault20,
  AssetRegistryDefault21,
  AssetRegistryDefault22,
  AssetRegistryDefault23,
  AssetRegistryDefault24,
  AssetRegistryDefault25,
  AssetRegistryDefault26,
];
const set = new Set(react_native2.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: AssetRegistryDefault27, nitro_wumpus: AssetRegistryDefault28 },
  DEFAULT_CHANNEL_ICON: AssetRegistryDefault29,
  ensureAvatarSource,
  canUseWebp() {
    return set.has("webp");
  },
};
({ clyde: AssetRegistryDefault27, nitro_wumpus: AssetRegistryDefault28 });
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("AssetRegistry");
};
