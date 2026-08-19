// === Module 10219: useStickerCategories ===

// Module 10219 (useStickerCategories)
import noop from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { useStickerPickerStore } from "useStickerPickerStore" /* 10220 */;
import { GuildNSFWContentLevel } from "ME" /* 676 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1338 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  stickerPackCategories = stickerPackCategories(guilds[7]).useStickerPackCategories(channel);
  currentUser = currentUser.getCurrentUser();
  guilds = guilds.getGuilds();
  const items = [guilds, stickerPackCategories, currentUser];
  return React.useMemo(() => {
    const found = stickerPackCategories.filter((item, index) => item.stickers.length > 0);
    const found1 = found.filter((item, index) => {
      let tmp2 = item.type !== stickerPackCategories(guilds[8]).StickerCategoryTypes.GUILD;
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
      }
      return tmp2;
    });
    return found1.map((item, index) => {
      if (item.type !== callback(4964).StickerCategoryTypes.FAVORITE) {
        if (item.type !== callback(4964).StickerCategoryTypes.RECENT) {
          return item;
        }
      }
      if (item.type === callback(4964).StickerCategoryTypes.FAVORITE) {
        let tmp4 = lib(10221);
      } else {
        tmp4 = lib(10222);
      }
      const obj = {};
      const merged = Object.assign(item);
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
      obj[0] = ref(dependencyMap[11]).KeyboardTypes.EXPRESSION;
      obj[1] = ExpressionPickerViewType.STICKER;
      current.openCustomKeyboard(obj);
    }
  }, 1);
};