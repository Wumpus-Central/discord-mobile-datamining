// === Module 10126: stickers/StickersUtils ===

// Module 10126 (stickers/StickersUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import StickersTypes from "StickersTypes" /* 5436 */;
import StickerPickerStore from "StickerPickerStore" /* 10127 */;
import StickerCategoryUtils from "StickerCategoryUtils" /* 10128 */;
import AssetRegistryDefault from "AssetRegistry" /* 10129 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10130 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const NativeModules = react_native.NativeModules;
const useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let currentUser;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(15);
  let obj2 = require("StickersHooks");
  const stickerPackCategories = obj2.useStickerPackCategories(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const guilds = GuildStore.getGuilds();
    cResult[2] = guilds;
    tmp9 = guilds;
  } else {
    tmp9 = cResult[2];
  }
  dependencyMap = tmp9;
  const tmpResult2 = tmp(8856);
  const mobileStickerPickerUpsellRestyleEnabled = tmpResult2.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  if (cResult[3] === arg0) {
    if (cResult[4] === stickerPackCategories) {
      if (cResult[5] === mobileStickerPickerUpsellRestyleEnabled) {
        let tmp13;
        if (cResult[6] === stateFromStores) {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
    cResult[8] = T;
  } else {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
  }
  const tmp15 = cResult[9];
  if (stateFromStores != null) {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
  }
  if (tmp15 !== undefined) {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
    if (stateFromStores != null) {
      class T {
        constructor(stickers) {
          return stickers.stickers.length > 0;
        }
      }
    }
    const fn2 = function f(type) {
      let tmp2 = type.type !== StickersTypes.StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        tmp2 = closure_2[type.id].nsfwLevel !== GuildNSFWContentLevel.AGE_RESTRICTED && closure_2[type.id].nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    };
    cResult[9] = tmp17;
    cResult[10] = fn2;
  } else {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
  }
  if (cResult[11] === arg0) {
    class T {
      constructor(stickers) {
        return stickers.stickers.length > 0;
      }
    }
  }
  class C {
    constructor(type) {
      let tmp14;
      let tmp18;
      let result = mobileStickerPickerUpsellRestyleEnabled;
      if (result) {
        const obj = StickerCategoryUtils;
        result = obj.isStickerCategoryNitroLocked(type, stateFromStores, closure_0);
      }
      if (type.type !== StickersTypes.StickerCategoryTypes.FAVORITE) {
        if (type.type !== StickersTypes.StickerCategoryTypes.RECENT) {
          let tmp8 = type;
          if (result) {
            const obj2 = { isNitroLocked: result };
            const merged = Object.assign(type);
            tmp8 = obj2;
          }
          return tmp8;
        }
      }
      if (type.type === StickersTypes.StickerCategoryTypes.FAVORITE) {
        tmp14 = AssetRegistryDefault;
      } else {
        tmp14 = AssetRegistryDefault2;
      }
      const obj3 = { icon: tmp14 };
      const merged1 = Object.assign(type);
      if (result) {
        obj3.isNitroLocked = result;
        tmp18 = obj3;
      } else {
        tmp18 = obj3;
      }
      return tmp18;
    }
  }
  cResult[11] = arg0;
  cResult[12] = mobileStickerPickerUpsellRestyleEnabled;
  cResult[13] = stateFromStores;
  cResult[14] = C;
}) : ((arg0) => {
  let closure_0;
  let currentUser;
  let stateFromStores;
  _require = arg0;
  let obj = require("StickersHooks");
  const stickerPackCategories = obj.useStickerPackCategories(arg0);
  let obj2 = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  let obj3 = require("MobileStickerPickerUpsellRestyleExperiment");
  const mobileStickerPickerUpsellRestyleEnabled = obj3.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  const items1 = [arg0, guilds, stickerPackCategories, mobileStickerPickerUpsellRestyleEnabled, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_0(stateFromStores[12]).StickerCategoryTypes.GUILD;
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
        tmp2 = guilds[type.id].nsfwLevel !== constants.AGE_RESTRICTED && guilds[type.id].nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      let tmp14;
      let tmp18;
      let result = mobileStickerPickerUpsellRestyleEnabled;
      if (result) {
        const obj = closure_0(stateFromStores[13]);
        result = obj.isStickerCategoryNitroLocked(type, nsfwAllowed, closure_1_0);
      }
      if (type.type !== closure_0(stateFromStores[12]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[12]).StickerCategoryTypes.RECENT) {
          let tmp8 = type;
          if (result) {
            const obj2 = { isNitroLocked: result };
            const merged = Object.assign(type);
            tmp8 = obj2;
          }
          return tmp8;
        }
      }
      if (type.type === closure_0(stateFromStores[12]).StickerCategoryTypes.FAVORITE) {
        tmp14 = stickerPackCategories(stateFromStores[14]);
      } else {
        tmp14 = stickerPackCategories(stateFromStores[15]);
      }
      const obj3 = { icon: tmp14 };
      const merged1 = Object.assign(type);
      if (result) {
        obj3.isNitroLocked = result;
        tmp18 = obj3;
      } else {
        tmp18 = obj3;
      }
      return tmp18;
    });
  }, items1);
});
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = tmp2;
export const preloadSticker = function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
};
export const dropPreloadedSticker = function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
};
export const openStickerPickerToPackId = function openStickerPickerToPackId(arg0, pack_id) {
  const ref = arg0;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    let obj2;
    const current = ref.current;
    if (current != null) {
      const openCustomKeyboard = current.openCustomKeyboard;
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: obj2 };
      obj2 = { type: ExpressionPickerViewType.STICKER };
      openCustomKeyboard(obj);
    }
  }, 1);
};