// discord_app/modules/stickers/native/StickersUtils.tsx
import noop from "noop";
import { NativeModules } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { useStickerPickerStore } from "useStickerPickerStore";
import { GuildNSFWContentLevel } from "ME";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  stickerPackCategories = stickerPackCategories(guilds[7]).useStickerPackCategories(channel);
  currentUser = currentUser.getCurrentUser();
  guilds = guilds.getGuilds();
  const items = [guilds, stickerPackCategories, currentUser];
  return React.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== outer1_0(outer1_2[8]).StickerCategoryTypes.GUILD;
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
        tmp2 = tmp.nsfwLevel !== outer1_8.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
        const tmp7 = tmp.nsfwLevel !== outer1_8.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      if (type.type !== callback(4985).StickerCategoryTypes.FAVORITE) {
        if (type.type !== tmp(4985).StickerCategoryTypes.RECENT) {
          return type;
        }
      }
      if (type.type === callback(4985).StickerCategoryTypes.FAVORITE) {
        let tmp4 = lib(9966);
      } else {
        tmp4 = lib(9967);
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
  let closure_0 = arg0;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { type: null, context: null };
      obj[0] = ref(outer1_2[11]).KeyboardTypes.EXPRESSION;
      obj[1] = outer1_9.STICKER;
      current.openCustomKeyboard(obj);
    }
  }, 1);
};