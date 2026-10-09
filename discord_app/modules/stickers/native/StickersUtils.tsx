// discord_app/modules/stickers/native/StickersUtils.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import StickersTypes from "../StickersTypes.tsx";
import StickerCategoryUtils from "../StickerCategoryUtils.tsx";
import _modDef9733 from "../../../../_runtime/metro/09733__.js";
import _modDef9734 from "../../../../_runtime/metro/09734__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(9731).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1085).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1241).ExpressionPickerViewType;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStickerCategories(arg0) {
      _require = arg0;
      const cResult = require("c").c(15);
      let obj = require("c");
      const stickerPackCategories = require("StickersHooks").useStickerPackCategories(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function l() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj2 = require("StickersHooks");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const guilds = GuildStore.getGuilds();
        cResult[2] = guilds;
        let tmp9 = guilds;
      } else {
        tmp9 = cResult[2];
      }
      dependencyMap = tmp9;
      const tmpResult = require("initialize");
      const mobileStickerPickerUpsellRestyleEnabled =
        require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled(
          "native.StickerPicker",
        );
      if (cResult[3] === arg0) {
        if (cResult[4] === stickerPackCategories) {
          if (cResult[5] === mobileStickerPickerUpsellRestyleEnabled) {
            if (cResult[6] === stateFromStores) {
              return cResult[7];
            }
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
        cResult[8] = T;
      } else {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
      }
      if (stateFromStores != null) {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
      }
      if (cResult[9] !== undefined) {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
        if (stateFromStores != null) {
          class T {
            constructor(arg0) {
              return arg0.stickers.length > 0;
            }
          }
        }
        class C {
          constructor(arg0) {
            tmp = closure_2[arg0.id];
            tmp2 = arg0.type !== closure_0(closure_2[12]).StickerCategoryTypes.GUILD;
            if (!tmp2) {
              tmp3 = null;
              nsfwAllowed = undefined;
              if (closure_1 != null) {
                nsfwAllowed = closure_1.nsfwAllowed;
              }
              tmp2 = nsfwAllowed;
            }
            if (!tmp2) {
              tmp5 = null;
              tmp2 = null == tmp;
            }
            if (!tmp2) {
              tmp7 = tmp.nsfwLevel !== GuildNSFWContentLevel.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
              tmp2 = tmp7;
            }
            return tmp2;
          }
        }
        cResult[9] = tmp15;
        cResult[10] = C;
      } else {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
      }
      if (cResult[11] === arg0) {
        class T {
          constructor(arg0) {
            return arg0.stickers.length > 0;
          }
        }
      }
      const fn2 = function f(type) {
        let result = mobileStickerPickerUpsellRestyleEnabled;
        if (mobileStickerPickerUpsellRestyleEnabled) {
          result = StickerCategoryUtils.isStickerCategoryNitroLocked(type, stateFromStores, closure_0);
        }
        if (type.type !== StickersTypes.StickerCategoryTypes.FAVORITE) {
          if (type.type !== StickersTypes.StickerCategoryTypes.RECENT) {
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
        if (type.type === StickersTypes.StickerCategoryTypes.FAVORITE) {
          let tmp14 = _modDef9733;
        } else {
          tmp14 = _modDef9734;
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
      };
      cResult[11] = arg0;
      cResult[12] = mobileStickerPickerUpsellRestyleEnabled;
      cResult[13] = stateFromStores;
      cResult[14] = fn2;
      const tmpResult2 = require("MobileStickerPickerUpsellRestyleExperiment");
    }
  : function useStickerCategories(arg0) {
      _require = arg0;
      const stickerPackCategories = require("StickersHooks").useStickerPackCategories(arg0);
      let obj = require("StickersHooks");
      const items = [UserStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      const guilds = GuildStore.getGuilds();
      let obj2 = require("initialize");
      const mobileStickerPickerUpsellRestyleEnabled =
        require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled(
          "native.StickerPicker",
        );
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
            tmp2 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
            const tmp7 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
          }
          return tmp2;
        });
        return found1.map((type) => {
          let result = mobileStickerPickerUpsellRestyleEnabled;
          if (mobileStickerPickerUpsellRestyleEnabled) {
            result = closure_0(stateFromStores[13]).isStickerCategoryNitroLocked(type, nsfwAllowed, closure_1_0);
            const obj = closure_0(stateFromStores[13]);
          }
          if (type.type !== closure_0(stateFromStores[12]).StickerCategoryTypes.FAVORITE) {
            if (type.type !== closure_0(stateFromStores[12]).StickerCategoryTypes.RECENT) {
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
          if (type.type === closure_0(stateFromStores[12]).StickerCategoryTypes.FAVORITE) {
            let tmp14 = stickerPackCategories(stateFromStores[14]);
          } else {
            tmp14 = stickerPackCategories(stateFromStores[15]);
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
};
