// === Module 10387: stickers/StickersUtils ===

// Module 10387 (stickers/StickersUtils)
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(10388).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1072).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1228).ExpressionPickerViewType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export function useStickerCategories(channel) {
  _require = channel;
  const stickerPackCategories = require("StickersHooks").useStickerPackCategories(channel);
  const obj = require("StickersHooks");
  items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  const items1 = [channel, guilds, stickerPackCategories, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_0(stateFromStores[9]).StickerCategoryTypes.GUILD;
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
      const result = closure_0(stateFromStores[10]).isStickerCategoryNitroLocked(type, nsfwAllowed, channel);
      if (type.type !== closure_0(stateFromStores[9]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[9]).StickerCategoryTypes.RECENT) {
          let tmp4 = type;
          if (result) {
            const obj2 = {};
            const merged = Object.assign(type);
            obj2.isNitroLocked = result;
            tmp4 = obj2;
          }
          return tmp4;
        }
      }
      if (type.type === closure_0(stateFromStores[9]).StickerCategoryTypes.FAVORITE) {
        let tmp9 = stickerPackCategories(stateFromStores[11]);
      } else {
        tmp9 = stickerPackCategories(stateFromStores[12]);
      }
      const obj3 = {};
      const merged1 = Object.assign(type);
      obj3.icon = tmp9;
      if (result) {
        obj3.isNitroLocked = result;
        let tmp12 = obj3;
      } else {
        tmp12 = obj3;
      }
      return tmp12;
    });
  }, items1);
}
export function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
}
export function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
}
export function openStickerPickerToPackId(arg0, dependencyMap) {
  state = useStickerPickerStore.getState();
  state.setPackToScrollTo(dependencyMap);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: null };
      const obj2 = { type: ExpressionPickerViewType.STICKER };
      obj.context = obj2;
      current.openCustomKeyboard(obj);
    }
  }, 1);
}