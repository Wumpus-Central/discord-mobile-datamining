// discord_app/modules/stickers/StickersHooks.tsx
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import StickersUtils from "StickersUtils.tsx";
import StickersTypes from "StickersTypes.tsx";
import StickerSendability from "StickerSendability.tsx";
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import FrecencyUserSettingsHooks from "../user_settings/FrecencyUserSettingsHooks.tsx";
import StickersActionCreators from "StickersActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import StickersPersistedStore from "StickersPersistedStore.tsx";
import StickersStore from "StickersStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchStickerPack(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        const fn = function n() {
          return StickersStore.hasLoadedStickerPacks;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arg0) {
          let tmp9 = cResult[4];
          let tmp10 = cResult[5];
        }
        const effect = noop.useEffect(tmp9, tmp10);
      }
      const fn2 = function u() {
        let tmp = stateFromStores;
        if (stateFromStores) {
          tmp = null == StickersStore.getStickerPack(closure_0);
        }
        if (tmp) {
          const stickerPack = StickersActionCreators.fetchStickerPack(closure_0);
        }
      };
      const items1 = [arg0, stateFromStores];
      cResult[2] = stateFromStores;
      cResult[3] = arg0;
      cResult[4] = fn2;
      cResult[5] = items1;
      tmp10 = items1;
      tmp9 = fn2;
      const tmpResult = require("initialize");
    }
  : function useFetchStickerPack(arg0) {
      _require = arg0;
      closure_13();
      const items = [StickersStore];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => StickersStore.hasLoadedStickerPacks,
      );
      const items1 = [arg0, stateFromStores];
      const effect = noop.useEffect(() => {
        let tmp = stateFromStores;
        if (stateFromStores) {
          tmp = null == StickersStore.getStickerPack(closure_0);
        }
        if (tmp) {
          const stickerPack = StickersActionCreators.fetchStickerPack(closure_0);
        }
      }, items1);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchStickerPacks() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const stickerPacks = require("StickersActionCreators").fetchStickerPacks();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useFetchStickerPacks() {
      const effect = noop.useEffect(() => {
        const stickerPacks = require("StickersActionCreators").fetchStickerPacks();
      }, []);
    };
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildStickerCategories(getGuildId) {
      _require = getGuildId;
      const cResult = require("c").c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [StickersStore];
        const fn = function c() {
          return allGuildStickers.getAllGuildStickers();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SortedGuildStore, GuildStore];
        const fn2 = function f() {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const items = [];
          const item = flattenedGuildIds.forEach((item) => {
            guild = guild.getGuild(item);
            if (null != guild) {
              items.push(guild);
            }
          });
          return items;
        };
        const items2 = [];
        cResult[2] = items1;
        cResult[3] = fn2;
        cResult[4] = items2;
        let tmp12 = items2;
        let tmp11 = fn2;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmp2Result = require("initialize");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp10, tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [UserStore];
        class F {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[5] = items3;
        cResult[6] = F;
        let tmp17 = F;
        let tmp16 = items3;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
      }
      const tmp2Result3 = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp16, tmp17);
      if (cResult[7] === getGuildId) {
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === stateFromStoresArray) {
            if (cResult[10] === stateFromStores1) {
              let tmp20 = cResult[11];
            }
            return tmp20;
          }
        }
      }
      const items4 = [];
      const iter = stateFromStoresArray[Symbol.iterator]();
      const tmp2Result4 = require("initialize");
      while (iter !== undefined) {
        ({ name, id } = nextResult);
        class F {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        let tmp24 = null != tmp23;
        if (tmp24) {
          tmp24 = 0 !== tmp23.length;
        }
        if (tmp24) {
          let obj2 = { type: null, id: null, name: null, stickers: null };
          class F {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          obj2.type = require("StickersTypes").StickerCategoryTypes.GUILD;
          obj2.id = id;
          obj2.name = name;
          obj2.stickers = tmp23;
          let arr = items4.push(obj2);
        }
        continue;
      }
      let guildId;
      if (getGuildId != null) {
        guildId = getGuildId.getGuildId();
      }
      if (null != guildId) {
        guild = GuildStore.getGuild(getGuildId.getGuildId());
        class F {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        const findIndexResult = items4.findIndex((id) => id.id === getGuildId.getGuildId());
        if (findIndexResult >= 1) {
          items4.unshift(items4.splice(findIndexResult, 1)[0]);
        } else {
          if (tmp34) {
            const obj3 = { type: null, id: null, name: null, stickers: null };
            class F {
              constructor() {
                return closure_1_9.getCurrentUser();
              }
            }
            obj3.type = tmp45(5750).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
            ({ id: obj6.id, name: obj6.name } = guild);
            obj3.stickers = [];
            tmp35(obj3);
          }
          tmp34 =
            -1 === findIndexResult && null != guild && obj9.getManageResourcePermissions(guild).canManageAllExpressions;
        }
        if (null != stateFromStores1) {
          const obj4 = { permission: null, user: null, context: null };
          class F {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          obj4.permission = Permissions.USE_EXTERNAL_EMOJIS;
          obj4.user = stateFromStores1;
          obj4.context = getGuildId;
          require("PermissionUtils").can(obj4);
          const obj7 = require("PermissionUtils");
        }
        obj9 = require("useManageResourcePermissions");
        tmp45 = _require;
      }
      cResult[7] = getGuildId;
      cResult[8] = stateFromStores;
      cResult[9] = stateFromStoresArray;
      cResult[10] = stateFromStores1;
      cResult[11] = items4;
      tmp20 = items4;
      nextResult = iter.next();
    }
  : function useGuildStickerCategories(arg0) {
      _require = arg0;
      let items = [StickersStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        allGuildStickers.getAllGuildStickers(),
      );
      let obj = require("initialize");
      const items1 = [SortedGuildStore, GuildStore];
      stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        const items = [];
        const item = flattenedGuildIds.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }, []);
      const obj2 = require("initialize");
      const items2 = [UserStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items2, () => currentUser.getCurrentUser());
      const items3 = [stateFromStores, stateFromStoresArray, stateFromStores1, arg0];
      return noop.useMemo(() => {
        const items = [];
        const iter = stateFromStoresArray[Symbol.iterator]();
        while (iter !== undefined) {
          ({ name, id } = nextResult);
          value = stateFromStores.get(id);
          let arr2 = value;
          let tmp6 = null != value;
          if (tmp6) {
            tmp6 = 0 !== arr2.length;
          }
          if (tmp6) {
            let obj = { type: StickersTypes.StickerCategoryTypes.GUILD, id, name, stickers: null };
            obj.stickers = arr2;
            let arr = items.push(obj);
          }
          continue;
        }
        let guildId;
        if (guildId != null) {
          guildId = obj2.getGuildId();
        }
        if (null != guildId) {
          guild = GuildStore.getGuild(obj2.getGuildId());
          const findIndexResult = items.findIndex((id) => id.id === guildId.getGuildId());
          if (findIndexResult >= 1) {
            items.unshift(items.splice(findIndexResult, 1)[0]);
          } else {
            if (tmp15) {
              const obj5 = {
                type: StickersTypes.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                id: null,
                name: null,
                stickers: null,
              };
              ({ id: obj3.id, name: obj3.name } = guild);
              obj5.stickers = [];
              items.unshift(obj5);
            }
            tmp15 =
              -1 === findIndexResult &&
              null != guild &&
              obj6.getManageResourcePermissions(guild).canManageAllExpressions;
          }
          if (null != stateFromStores1) {
            const obj8 = { permission: Permissions.USE_EXTERNAL_EMOJIS, user: tmp20, context: obj2 };
            PermissionUtilsAll.can(obj8);
          }
          obj6 = useManageResourcePermissions;
        }
        return items;
      }, items3);
    };
let closure_15 = [];
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoriteStickerIds() {
      const favoriteStickers = FrecencyUserSettingsHooks.useFrecencySettings().favoriteStickers;
      let stickerIds;
      if (favoriteStickers != null) {
        stickerIds = favoriteStickers.stickerIds;
      }
      if (stickerIds == null) {
        stickerIds = closure_15;
      }
      return stickerIds;
    }
  : function useFavoriteStickerIds() {
      const favoriteStickers = FrecencyUserSettingsHooks.useFrecencySettings().favoriteStickers;
      let stickerIds;
      if (favoriteStickers != null) {
        stickerIds = favoriteStickers.stickerIds;
      }
      if (stickerIds == null) {
        stickerIds = closure_15;
      }
      return stickerIds;
    };
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoriteStickers() {
      const cResult = require("c").c(4);
      const tmp4 = closure_16();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function s() {
          const mapped = closure_0.map((item) => stickerById.getStickerById(item));
          return mapped.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              const isGuildStickerResult = closure_1_0(dependencyMap[15]).isGuildSticker(item);
              let result = !isGuildStickerResult;
              if (isGuildStickerResult) {
                result = closure_1_0(dependencyMap[15]).isAvailableGuildSticker(item);
                const tmp2Result = closure_1_0(dependencyMap[15]);
              }
              tmp = result;
              const obj = closure_1_0(dependencyMap[15]);
            }
            return tmp;
          });
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useFavoriteStickers() {
      let tmp = closure_16();
      _require = tmp;
      const items = [StickersStore];
      const items1 = [tmp];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          const mapped = closure_0.map((item) => stickerById.getStickerById(item));
          return mapped.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              const isGuildStickerResult = closure_1_0(dependencyMap[15]).isGuildSticker(item);
              let result = !isGuildStickerResult;
              if (isGuildStickerResult) {
                result = closure_1_0(dependencyMap[15]).isAvailableGuildSticker(item);
                const tmp2Result = closure_1_0(dependencyMap[15]);
              }
              tmp = result;
              const obj = closure_1_0(dependencyMap[15]);
            }
            return tmp;
          });
        },
        items1,
      );
    };
let closure_17 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLatestFrecentStickerIds() {
      const cResult = c.c(2);
      let stickerFrecency = FrecencyUserSettingsHooks.useFrecencySettings();
      let tmp3 = null;
      let stickers;
      if (stickerFrecency != null) {
        const stickerFrecency2 = stickerFrecency.stickerFrecency;
        if (stickerFrecency2 != tmp3) {
          stickers = stickerFrecency2.stickers;
        }
      }
      if (tmp3 == stickers) {
        return closure_15;
      } else {
        let stickers1;
        if (stickerFrecency != tmp3) {
          const stickerFrecency3 = stickerFrecency.stickerFrecency;
          if (stickerFrecency3 != tmp3) {
            stickers1 = stickerFrecency3.stickers;
          }
        }
        if (cResult[0] !== stickers1) {
          let stickers2;
          if (stickerFrecency != tmp3) {
            const stickerFrecency4 = stickerFrecency.stickerFrecency;
            if (stickerFrecency4 != tmp3) {
              stickers2 = stickerFrecency4.stickers;
            }
          }
          const keys = Object.keys(stickers2);
          let stickers3;
          if (stickerFrecency != tmp3) {
            stickerFrecency = stickerFrecency.stickerFrecency;
            tmp3 = stickerFrecency == tmp3;
            if (!tmp3) {
              stickers3 = stickerFrecency.stickers;
            }
          }
          cResult[0] = stickers3;
          cResult[1] = keys;
        }
      }
    }
  : function useLatestFrecentStickerIds() {
      const frecencySettings = FrecencyUserSettingsHooks.useFrecencySettings();
      let keys = closure_15;
      let stickers;
      if (frecencySettings != null) {
        const stickerFrecency = frecencySettings.stickerFrecency;
        if (stickerFrecency != null) {
          stickers = stickerFrecency.stickers;
        }
      }
      if (null != stickers) {
        let stickers1;
        if (frecencySettings != null) {
          const stickerFrecency2 = frecencySettings.stickerFrecency;
          if (stickerFrecency2 != null) {
            stickers1 = stickerFrecency2.stickers;
          }
        }
        keys = Object.keys(stickers1);
      }
      return keys;
    };
let closure_18 = tmp7;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldAnimateSticker(dependencyMap) {
      const cResult = c.c(3);
      const AnimateStickers = UserSettings.AnimateStickers;
      const setting = AnimateStickers.useSetting();
      if (cResult[0] === setting) {
        if (cResult[1] === dependencyMap) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const shouldAnimateStickerResult = StickersUtils.shouldAnimateSticker(setting, dependencyMap);
      cResult[0] = setting;
      cResult[1] = dependencyMap;
      cResult[2] = shouldAnimateStickerResult;
      tmp5 = shouldAnimateStickerResult;
      const tmpResult = StickersUtils;
    }
  : function useShouldAnimateSticker(dependencyMap) {
      const AnimateStickers = UserSettings.AnimateStickers;
      const setting = AnimateStickers.useSetting();
      return StickersUtils.shouldAnimateSticker(setting, dependencyMap);
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStickerPackCategories(arg0) {
      _require = arg0;
      let RECENT = stateFromStores;
      const cResult = require("c").c(23);
      const tmp3 = closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore, StickersPersistedStore];
        const fn = function c() {
          return {
            packs: premiumPacks.getPremiumPacks(),
            frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently,
          };
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      const obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5, tmp6);
      const packs = stateFromStoresObject.packs;
      const prop = stateFromStoresObject.frequentlyUsedStickers;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        const fn2 = function f() {
          return currentUser.getCurrentUser();
        };
        cResult[3] = items2;
        cResult[4] = fn2;
        let tmp11 = fn2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      let tmpResult = require("initialize");
      stateFromStores = require("initialize").useStateFromStores(tmp10, tmp11);
      const tmp14 = closure_14(arg0);
      if (cResult[5] === arg0) {
        if (cResult[6] === tmp3) {
          if (cResult[7] === prop) {
            if (cResult[8] === tmp14) {
              if (cResult[9] === packs) {
                if (cResult[10] === stateFromStores) {
                  return cResult[11];
                }
              }
            }
          }
        }
      }
      const mapped = packs.map(tmp(RECENT[15]).createStickerPackCategory);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(RECENT[19]).intl;
        const stringResult = intl.string(tmp(RECENT[19]).t.y3LQCG);
        cResult[12] = stringResult;
        let tmp16 = stringResult;
      } else {
        tmp16 = cResult[12];
      }
      if (cResult[13] !== tmp3) {
        const obj2 = {
          type: tmp(RECENT[17]).StickerCategoryTypes.FAVORITE,
          id: tmp(RECENT[17]).StickerCategoryTypes.FAVORITE,
          name: tmp16,
          stickers: tmp3,
        };
        cResult[13] = tmp3;
        cResult[14] = obj2;
        let tmp18 = obj2;
      } else {
        tmp18 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(RECENT[19]).intl;
        const stringResult1 = intl2.string(tmp(RECENT[19]).t["6hjpXW"]);
        cResult[15] = stringResult1;
        let tmp19 = stringResult1;
      } else {
        tmp19 = cResult[15];
      }
      if (cResult[16] === arg0) {
        if (cResult[17] === prop) {
          if (cResult[18] === packs) {
            if (cResult[19] === stateFromStores) {
              let tmp21 = cResult[20];
            }
            if (cResult[21] !== tmp21) {
              const obj3 = { type: tmp(RECENT[17]).StickerCategoryTypes.RECENT, id: null, name: null, stickers: null };
              RECENT = tmp(RECENT[17]).StickerCategoryTypes.RECENT;
              obj3.id = RECENT;
              obj3.name = tmp19;
              obj3.stickers = tmp21;
              cResult[21] = tmp21;
              cResult[22] = obj3;
              let tmp22 = obj3;
            } else {
              tmp22 = cResult[22];
            }
            const items3 = [tmp18, tmp22];
            HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(tmp14, 2));
            cResult[5] = arg0;
            cResult[6] = tmp3;
            cResult[7] = prop;
            cResult[8] = tmp14;
            cResult[9] = packs;
            cResult[10] = stateFromStores;
            cResult[11] = items3;
          }
        }
      }
      let found;
      if (prop != null) {
        found = prop.filter((guild_id) => {
          if (obj.isGuildSticker(guild_id)) {
            const stickersByGuildId = StickersStore.getStickersByGuildId(guild_id.guild_id);
            let flag;
            if (stickersByGuildId != null) {
              flag = stickersByGuildId.some((id) => id.id === guild_id.id);
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              const stickerSendability = StickerSendability.getStickerSendability(guild_id, stateFromStores, guild_id);
              flag = stickerSendability !== StickerSendability.StickerSendability.NONSENDABLE;
              const tmpResult = StickerSendability;
            }
            let someResult = flag;
          } else {
            if (tmpResult2.isStandardSticker(guild_id)) {
              someResult = packs.some((id) => id.id === guild_id.pack_id);
            }
            tmpResult2 = StickersUtils;
          }
          return someResult;
        });
      }
      if (found == null) {
        found = [];
      }
      cResult[16] = arg0;
      cResult[17] = prop;
      cResult[18] = packs;
      cResult[19] = stateFromStores;
      cResult[20] = found;
      tmp21 = found;
      let tmpResult2 = require("initialize");
    }
  : function useStickerPackCategories(arg0) {
      _require = arg0;
      const tmp = closure_17();
      const stickers = tmp;
      let items = [StickersStore, StickersPersistedStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items,
        () => ({
          packs: StickersStore.getPremiumPacks(),
          frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently,
        }),
        [],
      );
      packs = stateFromStoresObject.packs;
      const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
      let obj = require("initialize");
      const items1 = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
      const tmp4 = closure_14(arg0);
      noop = tmp4;
      const items2 = [packs, tmp, frequentlyUsedStickers, tmp4, stateFromStores, arg0];
      return noop.useMemo(() => {
        const mapped = packs.map(StickersUtils.createStickerPackCategory);
        const obj = {
          type: StickersTypes.StickerCategoryTypes.FAVORITE,
          id: StickersTypes.StickerCategoryTypes.FAVORITE,
          name: null,
          stickers: null,
        };
        const intl = util.intl;
        obj.name = intl.string(util.t.y3LQCG);
        obj.stickers = stickers;
        const items = [obj];
        const obj2 = {
          type: StickersTypes.StickerCategoryTypes.RECENT,
          id: StickersTypes.StickerCategoryTypes.RECENT,
          name: null,
          stickers: null,
        };
        const intl2 = util.intl;
        obj2.name = intl2.string(util.t["6hjpXW"]);
        let found;
        if (frequentlyUsedStickers != null) {
          found = frequentlyUsedStickers.filter((guild_id) => {
            if (obj.isGuildSticker(guild_id)) {
              const stickersByGuildId = StickersStore.getStickersByGuildId(guild_id.guild_id);
              let flag;
              if (stickersByGuildId != null) {
                flag = stickersByGuildId.some((id) => id.id === guild_id.id);
              }
              if (flag == null) {
                flag = false;
              }
              if (flag) {
                const stickerSendability = tmp(packs[22]).getStickerSendability(guild_id, stateFromStores, closure_1_0);
                flag = stickerSendability !== tmp(packs[22]).StickerSendability.NONSENDABLE;
                const tmpResult = tmp(packs[22]);
              }
              let someResult = flag;
            } else {
              if (tmpResult2.isStandardSticker(guild_id)) {
                someResult = closure_1_2.some((id) => id.id === guild_id.pack_id);
              }
              tmpResult2 = tmp(packs[15]);
            }
            return someResult;
          });
        }
        if (found == null) {
          found = [];
        }
        obj2.stickers = found;
        items[1] = obj2;
        HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(closure_5, 2));
        return items;
      }, items2);
    };
let closure_19 = tmp9;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLatestFrecentStickers() {
      const cResult = require("c").c(4);
      const tmp4 = closure_18();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function s() {
          const mapped = closure_0.map((item) => stickerById.getStickerById(item));
          return mapped.filter((item) => undefined !== item);
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useLatestFrecentStickers() {
      const tmp = closure_18();
      _require = tmp;
      const items = [StickersStore];
      const items1 = [tmp];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          const mapped = closure_0.map((item) => stickerById.getStickerById(item));
          return mapped.filter((item) => undefined !== item);
        },
        items1,
      );
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStickerForRenderableSticker(id, arg1) {
      _require = id;
      const cResult = require("c").c(22);
      closure_1 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function l() {
          return StickersStore.getStickerById(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      const tmpResult = require("initialize");
      [tmp10, dependencyMap] = current(noop.useState(true), 2);
      const tmp9 = current(noop.useState(true), 2);
      [tmp12, asyncGeneratorStep] = current(noop.useState(false), 2);
      if (cResult[3] !== id) {
        let isGuildStickerResult = tmp(5749).isGuildSticker(id);
        if (!isGuildStickerResult) {
          isGuildStickerResult = tmp(5749).isStandardSticker(id);
          const tmpResult4 = tmp(5749);
        }
        cResult[3] = id;
        cResult[4] = isGuildStickerResult;
        let tmp13 = isGuildStickerResult;
        const tmpResult3 = tmp(5749);
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === tmp12) {
        if (cResult[6] === tmp13) {
          if (cResult[7] === id) {
            if (cResult[8] === tmp10) {
              if (cResult[9] === stateFromStores) {
                let tmp15 = cResult[10];
              }
              current = tmp15;
              noop = obj3.useRef(tmp15);
              if (cResult[11] !== tmp15) {
                class P {
                  constructor() {
                    closure_5.current = closure_4;
                    return;
                  }
                }
                cResult[11] = tmp15;
                cResult[12] = P;
              } else {
                class P {
                  constructor() {
                    closure_5.current = closure_4;
                    return;
                  }
                }
              }
              const effect = obj3.useEffect(P);
              if (cResult[13] !== tmp4) {
                class R {
                  constructor() {
                    tmp = closure_3(async () => {
                      if (c3 === 2) {
                        c3 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          c3 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              current = ref.current;
                              if (closure_2_1) {
                                if (!current.isReturnable) {
                                  if (null == current.stickersStoreDefinition) {
                                    if (current.shouldFetch) {
                                      if (!current.hasFetched) {
                                        dependencyMap(false);
                                        c2 = 1;
                                        c1 = 2;
                                        c3 = 1;
                                        const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                        return obj5;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            if (1 === tmp7) {
                              c2 = 0;
                            } else if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 0;
                              c3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c2 = 0;
                            }
                            closure_128_3(true);
                          }
                          c3 = 3;
                        } catch (tmp15) {
                          if (tmp4 === c2) {
                            c3 = tmp2;
                            throw tmp15;
                          } else {
                            c1 = tmp;
                          }
                        }
                      }
                    })();
                    return;
                  }
                }
                const items1 = [tmp4];
                cResult[13] = tmp4;
                cResult[14] = R;
                cResult[15] = items1;
                let tmp20 = items1;
              } else {
                class R {
                  constructor() {
                    tmp = closure_3(async () => {
                      if (c3 === 2) {
                        c3 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          c3 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              current = ref.current;
                              if (closure_2_1) {
                                if (!current.isReturnable) {
                                  if (null == current.stickersStoreDefinition) {
                                    if (current.shouldFetch) {
                                      if (!current.hasFetched) {
                                        dependencyMap(false);
                                        c2 = 1;
                                        c1 = 2;
                                        c3 = 1;
                                        const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                        return obj5;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            if (1 === tmp7) {
                              c2 = 0;
                            } else if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 0;
                              c3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c2 = 0;
                            }
                            closure_128_3(true);
                          }
                          c3 = 3;
                        } catch (tmp15) {
                          if (tmp4 === c2) {
                            c3 = tmp2;
                            throw tmp15;
                          } else {
                            c1 = tmp;
                          }
                        }
                      }
                    })();
                    return;
                  }
                }
                tmp20 = cResult[15];
              }
              const effect1 = obj3.useEffect(R, tmp20);
              if (tmp13) {
                class R {
                  constructor() {
                    tmp = closure_3(async () => {
                      if (c3 === 2) {
                        c3 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          c3 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              current = ref.current;
                              if (closure_2_1) {
                                if (!current.isReturnable) {
                                  if (null == current.stickersStoreDefinition) {
                                    if (current.shouldFetch) {
                                      if (!current.hasFetched) {
                                        dependencyMap(false);
                                        c2 = 1;
                                        c1 = 2;
                                        c3 = 1;
                                        const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                        return obj5;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            if (1 === tmp7) {
                              c2 = 0;
                            } else if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 0;
                              c3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c2 = 0;
                            }
                            closure_128_3(true);
                          }
                          c3 = 3;
                        } catch (tmp15) {
                          if (tmp4 === c2) {
                            c3 = tmp2;
                            throw tmp15;
                          } else {
                            c1 = tmp;
                          }
                        }
                      }
                    })();
                    return;
                  }
                }
                const items2 = [id, tmp12];
                cResult[16] = tmp12;
                cResult[17] = id;
                cResult[18] = items2;
              } else {
                class R {
                  constructor() {
                    tmp = closure_3(async () => {
                      if (c3 === 2) {
                        c3 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          c3 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              current = ref.current;
                              if (closure_2_1) {
                                if (!current.isReturnable) {
                                  if (null == current.stickersStoreDefinition) {
                                    if (current.shouldFetch) {
                                      if (!current.hasFetched) {
                                        dependencyMap(false);
                                        c2 = 1;
                                        c1 = 2;
                                        c3 = 1;
                                        const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                        return obj5;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            if (1 === tmp7) {
                              c2 = 0;
                            } else if (arg0 === 1) {
                              c3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 0;
                              c3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c2 = 0;
                            }
                            closure_128_3(true);
                          }
                          c3 = 3;
                        } catch (tmp15) {
                          if (tmp4 === c2) {
                            c3 = tmp2;
                            throw tmp15;
                          } else {
                            c1 = tmp;
                          }
                        }
                      }
                    })();
                    return;
                  }
                }
                if (stateFromStores == null) {
                  class R {
                    constructor() {
                      tmp = closure_3(async () => {
                        if (c3 === 2) {
                          c3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp6 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "IconComponent", done: "+51" };
                          }
                        } else {
                          try {
                            c3 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                current = ref.current;
                                if (closure_2_1) {
                                  if (!current.isReturnable) {
                                    if (null == current.stickersStoreDefinition) {
                                      if (current.shouldFetch) {
                                        if (!current.hasFetched) {
                                          dependencyMap(false);
                                          c2 = 1;
                                          c1 = 2;
                                          c3 = 1;
                                          const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                          return obj5;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            } else {
                              if (1 === tmp7) {
                                c2 = 0;
                              } else if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 0;
                                c3 = 3;
                                const obj = { value, done: true };
                                return obj;
                              } else {
                                c2 = 0;
                              }
                              closure_128_3(true);
                            }
                            c3 = 3;
                          } catch (tmp15) {
                            if (tmp4 === c2) {
                              c3 = tmp2;
                              throw tmp15;
                            } else {
                              c1 = tmp;
                            }
                          }
                        }
                      })();
                      return;
                    }
                  }
                }
                if (cResult[19] === tmp12) {
                  class R {
                    constructor() {
                      tmp = closure_3(async () => {
                        if (c3 === 2) {
                          c3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp6 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "IconComponent", done: "+51" };
                          }
                        } else {
                          try {
                            c3 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                current = ref.current;
                                if (closure_2_1) {
                                  if (!current.isReturnable) {
                                    if (null == current.stickersStoreDefinition) {
                                      if (current.shouldFetch) {
                                        if (!current.hasFetched) {
                                          dependencyMap(false);
                                          c2 = 1;
                                          c1 = 2;
                                          c3 = 1;
                                          const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                                          return obj5;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            } else {
                              if (1 === tmp7) {
                                c2 = 0;
                              } else if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 0;
                                c3 = 3;
                                const obj = { value, done: true };
                                return obj;
                              } else {
                                c2 = 0;
                              }
                              closure_128_3(true);
                            }
                            c3 = 3;
                          } catch (tmp15) {
                            if (tmp4 === c2) {
                              c3 = tmp2;
                              throw tmp15;
                            } else {
                              c1 = tmp;
                            }
                          }
                        }
                      })();
                      return;
                    }
                  }
                  return tmp23;
                }
                const items3 = [stateFromStores, tmp12];
                cResult[19] = tmp12;
                cResult[20] = stateFromStores;
                cResult[21] = items3;
                tmp23 = items3;
              }
            }
          }
        }
      }
      const obj2 = {
        hasFetched: tmp12,
        isReturnable: tmp13,
        renderableSticker: id,
        shouldFetch: tmp10,
        stickersStoreDefinition: stateFromStores,
      };
      cResult[5] = tmp12;
      cResult[6] = tmp13;
      cResult[7] = id;
      cResult[8] = tmp10;
      cResult[9] = stateFromStores;
      cResult[10] = obj2;
      tmp15 = obj2;
      const tmp11 = current(noop.useState(false), 2);
    }
  : function useStickerForRenderableSticker(renderableSticker) {
      _require = renderableSticker;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      c3 = undefined;
      let obj4;
      noop = undefined;
      const items = [StickersStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        StickersStore.getStickerById(id.id),
      );
      const tmp4 = obj4(noop.useState(true), 2);
      dependencyMap = tmp4[1];
      let obj = require("initialize");
      const tmp = _require;
      [tmp6, c3] = obj4(noop.useState(false), 2);
      const tmp5 = obj4(noop.useState(false), 2);
      let isGuildStickerResult = require("StickersUtils").isGuildSticker(renderableSticker);
      if (!isGuildStickerResult) {
        isGuildStickerResult = tmp(5749).isStandardSticker(renderableSticker);
        const tmpResult = tmp(5749);
      }
      obj4 = {
        hasFetched: tmp6,
        isReturnable: isGuildStickerResult,
        renderableSticker,
        shouldFetch: tmp4[0],
        stickersStoreDefinition: stateFromStores,
      };
      noop = obj2.useRef(obj4);
      const effect = obj2.useEffect(() => {
        closure_5.current = obj4;
      });
      const items1 = [flag];
      const effect1 = obj2.useEffect(() => {
        (async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj4 = { value, done: true };
                  return obj4;
                } else {
                  current = ref.current;
                  if (flag) {
                    if (!current.isReturnable) {
                      if (null == current.stickersStoreDefinition) {
                        if (current.shouldFetch) {
                          if (!current.hasFetched) {
                            closure_2_2(false);
                            c2 = 1;
                            c1 = 2;
                            c3 = 1;
                            const obj5 = { value: tmp3(c2[13]).fetchSticker(tmp23.id), done: false };
                            return obj5;
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (1 === tmp7) {
                  c2 = 0;
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c2 = 0;
                }
                closure_128_3(true);
              }
              c3 = 3;
            } catch (tmp15) {
              if (tmp4 === c2) {
                c3 = tmp2;
                throw tmp15;
              } else {
                c1 = tmp;
              }
            }
          }
        })();
      }, items1);
      if (isGuildStickerResult) {
        const items2 = [renderableSticker, tmp6];
        let items3 = items2;
      } else {
        let tmp11 = stateFromStores;
        if (stateFromStores == null) {
          tmp11 = null;
        }
        items3 = [tmp11, tmp6];
      }
      return items3;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = tmp2;
export const useShouldAnimateSticker = tmp3;
export const useStickersGrid = function useStickersGrid(collapsedStickersCategories) {
  collapsedStickersCategories = collapsedStickersCategories.collapsedStickersCategories;
  const filteredStickers = collapsedStickersCategories.filteredStickers;
  let num = collapsedStickersCategories.listPaddingRight;
  if (num === undefined) {
    num = 0;
  }
  let num2 = collapsedStickersCategories.listWidth;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = collapsedStickersCategories.stickerNodeMargin;
  if (num3 === undefined) {
    num3 = 0;
  }
  const stickerNodeWidth = collapsedStickersCategories.stickerNodeWidth;
  let stickersCategories = collapsedStickersCategories.stickersCategories;
  let flag = collapsedStickersCategories.collapsePremiumSearchSection;
  if (flag === undefined) {
    flag = false;
  }
  let items = [
    collapsedStickersCategories,
    filteredStickers,
    num,
    num2,
    num3,
    stickerNodeWidth,
    stickersCategories,
    flag,
  ];
  return stickerNodeWidth.useMemo(() => {
    let rounded = Math.floor((items2 - items1 + rowCount) / (gridSectionIndex + rowCount));
    const items = [];
    items1 = [];
    items2 = [];
    rowCount = 0;
    gridSectionIndex = 0;
    stickersCategories = 0;
    const rounded1 = Math.floor(Math.max(rowCount, (items2 - items1 - gridSectionIndex * rounded) / (rounded - 1)));
    if (0 !== items2) {
      function addGridSection(sendable, SEARCH_RESULTS) {
        const category = SEARCH_RESULTS;
        if (flag === undefined) {
          flag = false;
        }
        guild = undefined;
        if (obj.isGuildSticker(sendable[0])) {
          guild = stickersCategories.getGuild(sendable[0].guild_id);
        }
        obj = collapsedStickersCategories(num[15]);
        const guildId = flag.getGuildId();
        const tmpResult = collapsedStickersCategories(num[16]);
        let canCreateExpressions = null != guild;
        const findIndexResult = visibleRowIndex.findIndex(
          (type) => type.type === category(5750).StickerCategoryTypes.FAVORITE,
        );
        if (canCreateExpressions) {
          canCreateExpressions = guildId === guild.id;
        }
        if (canCreateExpressions) {
          canCreateExpressions = tmpResult.getManageResourcePermissions(guild).canCreateExpressions;
        }
        if (canCreateExpressions) {
          canCreateExpressions =
            sendable.length < collapsedStickersCategories(tmp2[18]).getTotalStickerCountForTier(guild.premiumTier);
          const tmpResult2 = collapsedStickersCategories(tmp2[18]);
        }
        let sum = length;
        if (canCreateExpressions) {
          sum = length + 1;
        }
        rounded = Math.ceil(sum / category);
        num = 0;
        if (!flag) {
          num = rounded;
        }
        items1[gridSectionIndex] = num;
        for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
          let result = num2 * category;
          let substr = sendable.slice(result, result + category);
          let mapped = substr.map((sticker, columnIndex) => {
            const obj = {
              type: StickersTypes.StickerGridItemTypes.STICKER,
              sticker,
              packId: null,
              gridSectionIndex: null,
              rowIndex: null,
              columnIndex: null,
              visibleRowIndex: null,
              category: null,
            };
            let str = "TODO - fix";
            if (obj2.isStandardSticker(sticker)) {
              str = sticker.pack_id;
            }
            obj.packId = str;
            obj.gridSectionIndex = gridSectionIndex;
            obj.rowIndex = rowIndex;
            obj.columnIndex = columnIndex;
            obj.visibleRowIndex = visibleRowIndex;
            obj.category = category;
            return obj;
          });
          let tmp15 = gridSectionIndex > findIndexResult1;
          if (tmp15) {
            tmp15 = gridSectionIndex > findIndexResult;
          }
          if (tmp15) {
            tmp15 = null != guild;
          }
          if (tmp15) {
            tmp15 = sum > sendable.length;
          }
          if (tmp15) {
            let obj2 = {
              type: null,
              guild_id: null,
              name: null,
              gridSectionIndex: null,
              rowIndex: null,
              columnIndex: null,
              visibleRowIndex: null,
            };
            obj2.type = collapsedStickersCategories(num[17]).StickerGridItemTypes.CREATE_STICKER;
            obj2.guild_id = guild.id;
            let intl = collapsedStickersCategories(num[19]).intl;
            obj2.name = intl.string(collapsedStickersCategories(num[19]).t["UwF+Cw"]);
            obj2.gridSectionIndex = gridSectionIndex;
            obj2.rowIndex = rowIndex;
            obj2.columnIndex = mapped.length;
            obj2.visibleRowIndex = visibleRowIndex;
            let arr = mapped.push(obj2);
          }
          if (!flag) {
            visibleRowIndex = visibleRowIndex + 1;
            let arr2 = items2.push(mapped);
            let arr5 = items.push(mapped.length);
          }
          rowIndex = rowIndex + 1;
        }
        gridSectionIndex = gridSectionIndex + 1;
        findIndexResult1 = visibleRowIndex.findIndex(
          (type) => type.type === category(5750).StickerCategoryTypes.RECENT,
        );
      }
      if (null == items) {
        const iter = stickersCategories[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp11 = nextResult;
          if (nextResult.stickers.length > 0) {
            rowCount = rowCount + 1;
            let obj = rounded;
            let hasItem;
            ({ stickers, type } = tmp11);
            if (rounded != null) {
              hasItem = obj.has(tmp11.id);
            }
            let addGridSectionResult = addGridSection(stickers, type, true === hasItem);
          } else if (tmp11.type === collapsedStickersCategories(num[17]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
            items1[gridSectionIndex] = 0;
            gridSectionIndex = gridSectionIndex + 1;
          }
          continue;
        }
      } else {
        if (tmp22.sendable.length > 0) {
          addGridSection(tmp22.sendable, collapsedStickersCategories(num[17]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (tmp22.sendableWithPremium.length > 0) {
          addGridSection(
            tmp22.sendableWithPremium,
            collapsedStickersCategories(num[17]).StickerCategoryTypes.SEARCH_RESULTS,
            flag,
          );
        }
      }
    }
    return { rowCount, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
  }, items);
};
export function useHasSendableSticker() {
  return true;
}
export const useFetchStickerPacks = tmp4;
export const useFavoriteStickerIds = tmp5;
export const useFavoriteStickers = tmp6;
export const useLatestFrecentStickerIds = tmp7;
export const useLatestFrecentStickers = tmp8;
export const useStickerPackCategories = tmp9;
export const useStickerForRenderableSticker = tmp10;
export const useFilteredStickerPackCategories = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFilteredStickerPackCategories(arg0) {
      const cResult = c.c(3);
      const arr = closure_19(arg0);
      if (cResult[0] !== arr) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function c(type) {
            let tmp = type.type === require("StickersTypes").StickerCategoryTypes.EMPTY_GUILD_UPSELL;
            if (!tmp) {
              tmp = type.stickers.length > 0;
            }
            return tmp;
          };
          cResult[2] = fn;
          let tmp3 = fn;
        } else {
          tmp3 = cResult[2];
        }
        const found = arr.filter(tmp3, []);
        cResult[0] = arr;
        cResult[1] = found;
      } else {
        return cResult[1];
      }
    }
  : function useFilteredStickerPackCategories(arg0) {
      let tmp = closure_19(arg0);
      closure_0 = tmp;
      const items = [tmp];
      return noop.useMemo(
        () =>
          closure_0.filter((type) => {
            let tmp = type.type === closure_1_0(closure_1_2[17]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
            if (!tmp) {
              tmp = type.stickers.length > 0;
            }
            return tmp;
          }, []),
        items,
      );
    };
