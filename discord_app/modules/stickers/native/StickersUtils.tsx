// === Module 10389: stickers/StickersUtils ===

// Module 10389 (stickers/StickersUtils)
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(10390).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  stickerPackCategories = stickerPackCategories(guilds[7]).useStickerPackCategories(channel);
  const currentUser = UserStore.getCurrentUser();
  guilds = GuildStore.getGuilds();
  const items = [guilds, stickerPackCategories, currentUser];
  return noop.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== stickerPackCategories(guilds[8]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
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
      if (type.type !== stickerPackCategories(5268).StickerCategoryTypes.FAVORITE) {
        if (type.type !== stickerPackCategories(5268).StickerCategoryTypes.RECENT) {
          return type;
        }
      }
      if (type.type === stickerPackCategories(5268).StickerCategoryTypes.FAVORITE) {
        let tmp4 = currentUser(10391);
      } else {
        tmp4 = currentUser(10392);
      }
      const obj = {};
      const merged = Object.assign(type);
      obj.icon = tmp4;
      return obj;
    });
  }, items);
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