// === Module 10407: useStickerCategories ===

// Module 10407 (useStickerCategories)
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "createGuildRecordFromRust" /* 1908 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;
import { useStickerPickerStore } from "useStickerPickerStore" /* 10408 */;
import { GuildNSFWContentLevel } from "ME" /* 673 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1337 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  stickerPackCategories = stickerPackCategories(guilds[7]).useStickerPackCategories(channel);
  currentUser = currentUser.getCurrentUser();
  guilds = guilds.getGuilds();
  const items = [guilds, stickerPackCategories, currentUser];
  return React.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_1_0(closure_1_2[8]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed;
        if (lib != null) {
          nsfwAllowed = lib.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        tmp2 = tmp.nsfwLevel !== closure_1_8.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
        const tmp7 = tmp.nsfwLevel !== closure_1_8.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      if (type.type !== callback(5221).StickerCategoryTypes.FAVORITE) {
        if (type.type !== tmp(5221).StickerCategoryTypes.RECENT) {
          return type;
        }
      }
      if (type.type === callback(5221).StickerCategoryTypes.FAVORITE) {
        let tmp4 = lib(10409);
      } else {
        tmp4 = lib(10410);
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
export const openStickerPickerToPackId = function openStickerPickerToPackId(arg0, pack_id) {
  closure_0 = arg0;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { type: null, context: null };
      obj[0] = ref(closure_1_2[11]).KeyboardTypes.EXPRESSION;
      obj[1] = closure_1_9.STICKER;
      current.openCustomKeyboard(obj);
    }
  }, 1);
};