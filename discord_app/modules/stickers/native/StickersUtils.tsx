// === Module 9839: stickers/StickersUtils ===

// Module 9839 (stickers/StickersUtils)
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(9840).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1218).ExpressionPickerViewType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  _require = channel;
  const stickerPackCategories = require("StickersHooks").useStickerPackCategories(channel);
  let obj = require("StickersHooks");
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  let obj2 = require("initialize");
  const mobileStickerPickerUpsellRestyleEnabled = require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  const items1 = [channel, guilds, stickerPackCategories, mobileStickerPickerUpsellRestyleEnabled, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_0(stateFromStores[10]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        nsfwAllowed = undefined;
        if (nsfwAllowed != null) {
          nsfwAllowed = nsfwAllowed.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        tmp2 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
        const tmp7 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      let result = mobileStickerPickerUpsellRestyleEnabled;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        result = closure_0(stateFromStores[11]).isStickerCategoryNitroLocked(type, nsfwAllowed, channel);
        const obj = closure_0(stateFromStores[11]);
      }
      if (type.type !== closure_0(stateFromStores[10]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[10]).StickerCategoryTypes.RECENT) {
          let tmp8 = type;
          if (result) {
            const obj2 = {};
            const merged = Object.assign(type);
            obj2.isNitroLocked = result;
            tmp8 = obj2;
          }
          return tmp8;
        }
      }
      if (type.type === closure_0(stateFromStores[10]).StickerCategoryTypes.FAVORITE) {
        let tmp14 = stickerPackCategories(stateFromStores[12]);
      } else {
        tmp14 = stickerPackCategories(stateFromStores[13]);
      }
      const obj3 = {};
      const merged1 = Object.assign(type);
      obj3.icon = tmp14;
      if (result) {
        obj3.isNitroLocked = result;
        let tmp18 = obj3;
      } else {
        tmp18 = obj3;
      }
      return tmp18;
    });
  }, items1);
};
export const preloadSticker = function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
};
export const dropPreloadedSticker = function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
};
export const openStickerPickerToPackId = function openStickerPickerToPackId(arg0, dependencyMap) {
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(dependencyMap);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: ExpressionPickerViewType.STICKER };
      current.openCustomKeyboard(obj);
    }
  }, 1);
};