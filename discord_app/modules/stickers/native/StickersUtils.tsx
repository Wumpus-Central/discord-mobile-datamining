// discord_app/modules/stickers/native/StickersUtils.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(10518).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  _require = channel;
  const stickerPackCategories = require("StickersHooks").useStickerPackCategories(channel);
  let obj = require("StickersHooks");
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  const obj2 = require("initialize");
  const mobileStickerPickerUpsellRestyleEnabled =
    require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled(
      "native.StickerPicker",
    );
  const items1 = [channel, guilds, stickerPackCategories, mobileStickerPickerUpsellRestyleEnabled, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.GUILD;
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
      let tmp = mobileStickerPickerUpsellRestyleEnabled;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        closure_0 = nsfwAllowed;
        closure_1 = channel;
        let everyResult = type.type === closure_0(stateFromStores[7]).StickerCategoryTypes.GUILD;
        if (everyResult) {
          everyResult = 0 !== type.stickers.length;
        }
        if (everyResult) {
          const stickers = type.stickers;
          everyResult = stickers.every((item) => {
            const stickerSendability = channel(nsfwAllowed[8]).getStickerSendability(item, closure_0, closure_1);
            return stickerSendability === channel(nsfwAllowed[8]).StickerSendability.SENDABLE_WITH_PREMIUM;
          });
        }
        tmp = everyResult;
      }
      if (type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.RECENT) {
          let tmp9 = type;
          if (tmp) {
            let obj = {};
            const merged = Object.assign(type);
            obj.isNitroLocked = tmp;
            tmp9 = obj;
          }
          return tmp9;
        }
      }
      if (type.type === closure_0(stateFromStores[7]).StickerCategoryTypes.FAVORITE) {
        let tmp15 = stickerPackCategories(stateFromStores[12]);
      } else {
        tmp15 = stickerPackCategories(stateFromStores[13]);
      }
      obj = {};
      const merged1 = Object.assign(type);
      obj.icon = tmp15;
      if (tmp) {
        obj.isNitroLocked = tmp;
        let tmp19 = obj;
      } else {
        tmp19 = obj;
      }
      return tmp19;
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
