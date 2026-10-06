// === Module 10124: StickersHooks ===

// Module 10124 (StickersHooks)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import StickersUtils from "StickersUtils" /* 5435 */;
import StickersTypes from "StickersTypes" /* 5436 */;
import StickerSendability from "StickerSendability" /* 6850 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9204 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10108 */;
import StickersActionCreators from "StickersActionCreators" /* 10125 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import UserStore from "UserStore" /* 1377 */;
import StickersPersistedStore from "StickersPersistedStore" /* 5693 */;
import StickersStore from "StickersStore" /* 5694 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, current, dependencyMap, flattenedGuildIds, rowCount, rowIndex, visibleRowIndex;

let react = react_mod;
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp5;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(6);
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    let tmp9;
    let tmp10;
    if (cResult[3] === arg0) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
  }
  const fn2 = function l() {
    const tmp = stateFromStores && null == StickersStore.getStickerPack(closure_0);
    if (tmp) {
      const obj = StickersActionCreators;
      const stickerPack = obj.fetchStickerPack(closure_0);
    }
  };
  const items1 = [arg0, stateFromStores];
  cResult[2] = stateFromStores;
  cResult[3] = arg0;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let tmp = closure_13();
  let obj = require("get initialized");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const items1 = [arg0, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && null == StickersStore.getStickerPack(closure_0);
    if (tmp) {
      const obj = StickersActionCreators;
      const stickerPack = obj.fetchStickerPack(closure_0);
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((dependencyMap) => {
  const obj = react2;
  const cResult = obj.c(3);
  const AnimateStickers = UserSettings.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  if (cResult[0] === setting) {
    let tmp5;
    if (cResult[1] === dependencyMap) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmpResult = StickersUtils;
  const shouldAnimateStickerResult = tmpResult.shouldAnimateSticker(setting, dependencyMap);
  cResult[0] = setting;
  cResult[1] = dependencyMap;
  cResult[2] = shouldAnimateStickerResult;
  tmp5 = shouldAnimateStickerResult;
}) : ((dependencyMap) => {
  const AnimateStickers = UserSettings.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  const obj = StickersUtils;
  return obj.shouldAnimateSticker(setting, dependencyMap);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = require("StickersActionCreators");
      const stickerPacks = obj.fetchStickerPacks();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = react.useEffect(() => {
    const obj = require("StickersActionCreators");
    const stickerPacks = obj.fetchStickerPacks();
  }, []);
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId) => {
  let allGuildStickers;
  let currentUser;
  let id;
  let name;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp6;
  let tmp7;
  _require = getGuildId;
  const obj = require("react");
  const cResult = obj.c(15);
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
  const tmp2Result = require("get initialized");
  const stateFromStores = tmp2Result.useStateFromStores(tmp6, tmp7);
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
    tmp12 = items2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmp2Result3 = require("get initialized");
  const stateFromStoresArray = tmp2Result3.useStateFromStoresArray(tmp10, tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[5] = items3;
    cResult[6] = E;
    tmp17 = E;
    tmp16 = items3;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmp2Result4 = require("get initialized");
  const stateFromStores1 = tmp2Result4.useStateFromStores(tmp16, tmp17);
  if (cResult[7] === getGuildId) {
    if (cResult[8] === stateFromStores) {
      if (cResult[9] === stateFromStoresArray) {
        let tmp20;
        if (cResult[10] === stateFromStores1) {
          tmp20 = cResult[11];
        }
        return tmp20;
      }
    }
  }
  const items4 = [];
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ name, id } = nextResult);
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    let tmp24 = null != tmp23 && 0 !== tmp23.length;
    if (tmp24) {
      let obj2 = { type: require("StickersTypes").StickerCategoryTypes.GUILD, id, name, stickers: tmp23 };
      class E {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      let push = items4.push;
      let arr = push(obj2);
    }
    continue;
  }
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  if (null != guildId) {
    let guild = GuildStore.getGuild(getGuildId.getGuildId());
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const obj9 = require("useManageResourcePermissions");
    const canManageAllExpressions = obj9.getManageResourcePermissions(guild).canManageAllExpressions;
    const findIndexResult = items4.findIndex((id) => id.id === getGuildId.getGuildId());
    const tmp45 = _require;
    if (findIndexResult >= 1) {
      items4.unshift(items4.splice(findIndexResult, 1)[0]);
    } else {
      const tmp34 = -1 === findIndexResult && null != guild && canManageAllExpressions;
      if (tmp34) {
        const obj3 = { type: tmp45(5436).StickerCategoryTypes.EMPTY_GUILD_UPSELL, id: null, name: null, stickers: [] };
        class E {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        ({ id: obj6.id, name: obj6.name } = guild);
        tmp35(obj3);
      }
    }
    if (null != stateFromStores1) {
      const obj4 = { permission: Permissions.USE_EXTERNAL_EMOJIS, user: stateFromStores1, context: getGuildId };
      const obj7 = require("PermissionUtils");
      class E {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      obj7.can(obj4);
    }
  }
  cResult[7] = getGuildId;
  cResult[8] = stateFromStores;
  cResult[9] = stateFromStoresArray;
  cResult[10] = stateFromStores1;
  cResult[11] = items4;
  tmp20 = items4;
}) : ((arg0) => {
  let allGuildStickers;
  let closure_0;
  let currentUser;
  let stateFromStoresArray;
  _require = arg0;
  let obj = require("get initialized");
  let items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => allGuildStickers.getAllGuildStickers());
  const obj2 = require("get initialized");
  const items1 = [SortedGuildStore, GuildStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
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
  const obj3 = require("get initialized");
  const items2 = [UserStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [stateFromStores, stateFromStoresArray, stateFromStores1, arg0];
  return react.useMemo(() => {
    let id;
    let name;
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ name, id } = nextResult);
      let value = stateFromStores.get(id);
      let arr2 = value;
      let tmp6 = null != value;
      if (tmp6) {
        tmp6 = 0 !== arr2.length;
      }
      if (tmp6) {
        let obj = { type: StickersTypes.StickerCategoryTypes.GUILD, id, name, stickers: arr2 };
        let push = items.push;
        let arr = push(obj);
      }
      continue;
    }
    let guildId;
    if (guildId != null) {
      guildId = obj2.getGuildId();
    }
    if (null != guildId) {
      guild = GuildStore.getGuild(obj2.getGuildId());
      const obj6 = useManageResourcePermissions;
      const canManageAllExpressions = obj6.getManageResourcePermissions(guild).canManageAllExpressions;
      const findIndexResult = items.findIndex((id) => id.id === guildId.getGuildId());
      if (findIndexResult >= 1) {
        items.unshift(items.splice(findIndexResult, 1)[0]);
      } else {
        const tmp15 = -1 === findIndexResult && null != guild && canManageAllExpressions;
        if (tmp15) {
          const unshift = items.unshift;
          ({ id: obj3.id, name: obj3.name } = guild);
          const obj5 = { type: StickersTypes.StickerCategoryTypes.EMPTY_GUILD_UPSELL, id: null, name: null, stickers: [] };
          unshift(obj5);
        }
      }
      if (null != stateFromStores1) {
        const obj8 = { permission: Permissions.USE_EXTERNAL_EMOJIS, user: tmp20, context: guildId };
        const obj4 = PermissionUtilsAll;
        obj4.can(obj8);
      }
    }
    return items;
  }, items3);
});
let closure_15 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = FrecencyUserSettingsHooks;
  const favoriteStickers = obj.useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_15;
  }
  return stickerIds;
}) : (() => {
  const obj = FrecencyUserSettingsHooks;
  const favoriteStickers = obj.useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_15;
  }
  return stickerIds;
});
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp4 = closure_16();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StickersStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function s() {
      let stickerById;
      const mapped = closure_0.map((item) => stickerById.getStickerById(item));
      return mapped.filter((item) => {
        let tmp = null != item;
        if (tmp) {
          const obj = closure_1_0(closure_1_2[15]);
          const isGuildStickerResult = obj.isGuildSticker(item);
          let result = !isGuildStickerResult;
          if (isGuildStickerResult) {
            const tmp2Result = closure_1_0(closure_1_2[15]);
            result = tmp2Result.isAvailableGuildSticker(item);
          }
          tmp = result;
        }
        return tmp;
      });
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (() => {
  let closure_0;
  let tmp = closure_16();
  _require = tmp;
  let obj = require("get initialized");
  const items = [StickersStore];
  const items1 = [tmp];
  return obj.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = closure_0.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        const obj = closure_1_0(closure_1_2[15]);
        const isGuildStickerResult = obj.isGuildSticker(item);
        let result = !isGuildStickerResult;
        if (isGuildStickerResult) {
          const tmp2Result = closure_1_0(closure_1_2[15]);
          result = tmp2Result.isAvailableGuildSticker(item);
        }
        tmp = result;
      }
      return tmp;
    });
  }, items1);
});
let closure_17 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = FrecencyUserSettingsHooks;
  const frecencySettings = obj2.useFrecencySettings();
  let tmp3 = closure_15;
  let stickers;
  if (frecencySettings != null) {
    const stickerFrecency = frecencySettings.stickerFrecency;
    if (stickerFrecency != null) {
      stickers = stickerFrecency.stickers;
    }
  }
  if (null != stickers) {
    let tmp6;
    let stickers1;
    const first = cResult[0];
    if (frecencySettings != null) {
      const stickerFrecency2 = frecencySettings.stickerFrecency;
      if (stickerFrecency2 != null) {
        stickers1 = stickerFrecency2.stickers;
      }
    }
    if (first !== stickers1) {
      let stickers2;
      const _Object = Object;
      if (frecencySettings != null) {
        const stickerFrecency3 = frecencySettings.stickerFrecency;
        if (stickerFrecency3 != null) {
          stickers2 = stickerFrecency3.stickers;
        }
      }
      const keys1 = keys(stickers2);
      let stickers3;
      if (frecencySettings != null) {
        const stickerFrecency4 = frecencySettings.stickerFrecency;
        if (stickerFrecency4 != null) {
          stickers3 = stickerFrecency4.stickers;
        }
      }
      cResult[0] = stickers3;
      cResult[1] = keys1;
      tmp6 = keys1;
    } else {
      tmp6 = cResult[1];
    }
    tmp3 = tmp6;
  }
  return tmp3;
}) : (() => {
  const obj = FrecencyUserSettingsHooks;
  const frecencySettings = obj.useFrecencySettings();
  let keys1 = closure_15;
  let stickers;
  if (frecencySettings != null) {
    const stickerFrecency = frecencySettings.stickerFrecency;
    if (stickerFrecency != null) {
      stickers = stickerFrecency.stickers;
    }
  }
  if (null != stickers) {
    let stickers1;
    const _Object = Object;
    if (frecencySettings != null) {
      const stickerFrecency2 = frecencySettings.stickerFrecency;
      if (stickerFrecency2 != null) {
        stickers1 = stickerFrecency2.stickers;
      }
    }
    keys1 = keys(stickers1);
  }
  return keys1;
});
let closure_18 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp4 = closure_18();
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StickersStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function s() {
      let stickerById;
      const mapped = closure_0.map((item) => stickerById.getStickerById(item));
      return mapped.filter((item) => undefined !== item);
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (() => {
  let closure_0;
  const tmp = closure_18();
  _require = tmp;
  const items = [StickersStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = closure_0.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => undefined !== item);
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let premiumPacks;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(23);
  const tmp5 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StickersStore, StickersPersistedStore];
    const fn = function c() {
      const obj = { packs: premiumPacks.getPremiumPacks(), frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently };
      return obj;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  const tmp2Result = require("get initialized");
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(tmp6, tmp7, tmp8);
  const packs = stateFromStoresObject.packs;
  const prop = stateFromStoresObject.frequentlyUsedStickers;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    const fn2 = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[3] = items2;
    cResult[4] = fn2;
    tmp13 = fn2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmp2Result2 = require("get initialized");
  stateFromStores = tmp2Result2.useStateFromStores(tmp12, tmp13);
  const tmp16 = closure_14(arg0);
  if (cResult[5] === arg0) {
    if (cResult[6] === tmp5) {
      if (cResult[7] === prop) {
        if (cResult[8] === tmp16) {
          if (cResult[9] === packs) {
            if (cResult[10] === stateFromStores) {
              tmp17 = cResult[11];
            }
            return tmp17;
          }
        }
      }
    }
  }
  const mapped = packs.map(tmp2(tmp3[15]).createStickerPackCategory);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp2(tmp3[19]).intl;
    const stringResult = intl.string(require("intl").t.y3LQCG);
    cResult[12] = stringResult;
    tmp19 = stringResult;
  } else {
    tmp19 = cResult[12];
  }
  if (cResult[13] !== tmp5) {
    const obj2 = { type: require("StickersTypes").StickerCategoryTypes.FAVORITE, id: require("StickersTypes").StickerCategoryTypes.FAVORITE, name: tmp19, stickers: tmp5 };
    cResult[13] = tmp5;
    cResult[14] = obj2;
    tmp21 = obj2;
  } else {
    tmp21 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp2(tmp3[19]).intl;
    const stringResult1 = intl2.string(require("intl").t["6hjpXW"]);
    cResult[15] = stringResult1;
    tmp22 = stringResult1;
  } else {
    tmp22 = cResult[15];
  }
  if (cResult[16] === arg0) {
    if (cResult[17] === prop) {
      if (cResult[18] === packs) {
        let tmp24;
        let tmp25;
        if (cResult[19] === stateFromStores) {
          tmp24 = cResult[20];
        }
        if (cResult[21] !== tmp24) {
          const obj3 = { type: require("StickersTypes").StickerCategoryTypes.RECENT, id: require("StickersTypes").StickerCategoryTypes.RECENT, name: tmp22, stickers: tmp24 };
          cResult[21] = tmp24;
          cResult[22] = obj3;
          tmp25 = obj3;
        } else {
          tmp25 = cResult[22];
        }
        const items3 = [tmp21, tmp25];
        HermesBuiltin.arraySpread(items3, mapped, HermesBuiltin.arraySpread(items3, tmp16, 2));
        cResult[5] = arg0;
        cResult[6] = tmp5;
        cResult[7] = prop;
        cResult[8] = tmp16;
        cResult[9] = packs;
        cResult[10] = stateFromStores;
        cResult[11] = items3;
        tmp17 = items3;
      }
    }
  }
  let found;
  if (prop != null) {
    found = prop.filter((guild_id) => {
      let someResult;
      closure_0 = guild_id;
      const obj = StickersUtils;
      if (obj.isGuildSticker(guild_id)) {
        const stickersByGuildId = StickersStore.getStickersByGuildId(guild_id.guild_id);
        let flag;
        if (stickersByGuildId != null) {
          flag = stickersByGuildId.some((id) => id.id === closure_0.id);
        }
        if (flag == null) {
          flag = false;
        }
        if (flag) {
          const tmpResult = StickerSendability;
          const stickerSendability = tmpResult.getStickerSendability(guild_id, stateFromStores, closure_0);
          flag = stickerSendability !== StickerSendability.StickerSendability.NONSENDABLE;
        }
        someResult = flag;
      } else {
        const tmpResult2 = StickersUtils;
        if (tmpResult2.isStandardSticker(guild_id)) {
          someResult = packs.some((id) => id.id === closure_0.pack_id);
        }
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
  tmp24 = found;
}) : ((arg0) => {
  let closure_5;
  let currentUser;
  let packs;
  _require = arg0;
  const tmp = closure_17();
  const stickers = tmp;
  let obj = require("get initialized");
  let items = [StickersStore, StickersPersistedStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { packs: StickersStore.getPremiumPacks(), frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently };
    return obj;
  }, []);
  packs = stateFromStoresObject.packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  let obj2 = require("get initialized");
  const items1 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp4 = closure_14(arg0);
  react = tmp4;
  const items2 = [packs, tmp, frequentlyUsedStickers, tmp4, stateFromStores, arg0];
  return react.useMemo(() => {
    let found;
    let intl;
    let intl2;
    const mapped = packs.map(StickersUtils.createStickerPackCategory);
    let obj = { type: StickersTypes.StickerCategoryTypes.FAVORITE, id: StickersTypes.StickerCategoryTypes.FAVORITE, name: intl.string(intl3.t.y3LQCG), stickers };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { type: StickersTypes.StickerCategoryTypes.RECENT, id: StickersTypes.StickerCategoryTypes.RECENT, name: intl2.string(intl3.t["6hjpXW"]), stickers: found };
    intl2 = intl3.intl;
    found = undefined;
    if (frequentlyUsedStickers != null) {
      found = frequentlyUsedStickers.filter((guild_id) => {
        let someResult;
        closure_0 = guild_id;
        const obj = closure_0(packs[15]);
        if (obj.isGuildSticker(guild_id)) {
          const stickersByGuildId = StickersStore.getStickersByGuildId(guild_id.guild_id);
          let flag;
          if (stickersByGuildId != null) {
            flag = stickersByGuildId.some((id) => id.id === closure_0.id);
          }
          if (flag == null) {
            flag = false;
          }
          if (flag) {
            const tmpResult = closure_0(packs[22]);
            const stickerSendability = tmpResult.getStickerSendability(guild_id, stateFromStores, closure_1_0);
            flag = stickerSendability !== tmp(packs[22]).StickerSendability.NONSENDABLE;
          }
          someResult = flag;
        } else {
          const tmpResult2 = closure_0(packs[15]);
          if (tmpResult2.isStandardSticker(guild_id)) {
            someResult = closure_1_2.some((id) => id.id === closure_0.pack_id);
          }
        }
        return someResult;
      });
    }
    if (found == null) {
      found = [];
    }
    items[1] = obj2;
    HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, closure_5, 2));
    return items;
  }, items2);
});
let closure_19 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let closure_5;
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp23;
  let tmp7;
  _require = id;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = undefined !== arg1 && arg1;
  let closure_1 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StickersStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function u() {
      return StickersStore.getStickerById(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let obj3 = react;
  [tmp10, dependencyMap] = current(react.useState(true), 2);
  const tmp9 = current(react.useState(true), 2);
  [tmp12, _asyncToGenerator] = current(react.useState(false), 2);
  const tmp11 = current(react.useState(false), 2);
  if (cResult[3] !== id) {
    const tmpResult3 = tmp(5435);
    let isGuildStickerResult = tmpResult3.isGuildSticker(id);
    if (!isGuildStickerResult) {
      const tmpResult4 = tmp(5435);
      isGuildStickerResult = tmpResult4.isStandardSticker(id);
    }
    cResult[3] = id;
    cResult[4] = isGuildStickerResult;
    tmp13 = isGuildStickerResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp12) {
    if (cResult[6] === tmp13) {
      if (cResult[7] === id) {
        if (cResult[8] === tmp10) {
          let tmp15;
          let tmp20;
          if (cResult[9] === stateFromStores) {
            tmp15 = cResult[10];
          }
          current = tmp15;
          react = obj3.useRef(tmp15);
          if (cResult[11] !== tmp15) {
            class R {
              constructor() {
                closure_5.current = current;
              }
            }
            cResult[11] = tmp15;
            cResult[12] = R;
          } else {
            class R {
              constructor() {
                closure_5.current = current;
              }
            }
          }
          const effect = obj3.useEffect(R);
          if (cResult[13] !== tmp4) {
            class P {
              constructor() {
                tmp = closure_3(async () => {
                  let closure_0;
                  let obj2;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
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
                                    const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                    obj2 = tmp(c2[13]);
                                    return obj5;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (1 === tmp4) {
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
                      return { value: "IconComponent", done: null };
                    } catch (tmp12) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp12;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                })();
                return;
              }
            }
            const items1 = [tmp4];
            cResult[13] = tmp4;
            cResult[14] = P;
            cResult[15] = items1;
            tmp20 = items1;
          } else {
            class P {
              constructor() {
                tmp = closure_3(async () => {
                  let closure_0;
                  let obj2;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
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
                                    const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                    obj2 = tmp(c2[13]);
                                    return obj5;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (1 === tmp4) {
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
                      return { value: "IconComponent", done: null };
                    } catch (tmp12) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp12;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                })();
                return;
              }
            }
            tmp20 = cResult[15];
          }
          const effect1 = obj3.useEffect(P, tmp20);
          if (tmp13) {
            class P {
              constructor() {
                tmp = closure_3(async () => {
                  let closure_0;
                  let obj2;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
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
                                    const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                    obj2 = tmp(c2[13]);
                                    return obj5;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (1 === tmp4) {
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
                      return { value: "IconComponent", done: null };
                    } catch (tmp12) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp12;
                      } else {
                        c1 = 1;
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
            class P {
              constructor() {
                tmp = closure_3(async () => {
                  let closure_0;
                  let obj2;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
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
                                    const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                    obj2 = tmp(c2[13]);
                                    return obj5;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (1 === tmp4) {
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
                      return { value: "IconComponent", done: null };
                    } catch (tmp12) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp12;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                })();
                return;
              }
            }
            if (stateFromStores == null) {
              class P {
                constructor() {
                  tmp = closure_3(async () => {
                    let closure_0;
                    let obj2;
                    if (c3 === 2) {
                      c3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      let c2;
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
                                      const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                      obj2 = tmp(c2[13]);
                                      return obj5;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          if (1 === tmp4) {
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
                        return { value: "IconComponent", done: null };
                      } catch (tmp12) {
                        if (0 === c2) {
                          c3 = 3;
                          throw tmp12;
                        } else {
                          c1 = 1;
                        }
                      }
                    }
                  })();
                  return;
                }
              }
            }
            if (cResult[19] === tmp12) {
              class P {
                constructor() {
                  tmp = closure_3(async () => {
                    let closure_0;
                    let obj2;
                    if (c3 === 2) {
                      c3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      let c2;
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
                                      const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                                      obj2 = tmp(c2[13]);
                                      return obj5;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          if (1 === tmp4) {
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
                        return { value: "IconComponent", done: null };
                      } catch (tmp12) {
                        if (0 === c2) {
                          c3 = 3;
                          throw tmp12;
                        } else {
                          c1 = 1;
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
  let obj2 = { hasFetched: tmp12, isReturnable: tmp13, renderableSticker: id, shouldFetch: tmp10, stickersStoreDefinition: stateFromStores };
  cResult[5] = tmp12;
  cResult[6] = tmp13;
  cResult[7] = id;
  cResult[8] = tmp10;
  cResult[9] = stateFromStores;
  cResult[10] = obj2;
  tmp15 = obj2;
}) : ((renderableSticker) => {
  let c3;
  let closure_2;
  let closure_5;
  let items3;
  let tmp7;
  _require = renderableSticker;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c3 = undefined;
  let obj4;
  react = undefined;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerById(renderableSticker.id));
  let obj2 = react;
  const tmp4 = obj4(react.useState(true), 2);
  dependencyMap = tmp4[1];
  const first = tmp4[0];
  [tmp7, c3] = obj4(react.useState(false), 2);
  obj4(react.useState(false), 2);
  let obj3 = require("StickersUtils");
  let isGuildStickerResult = obj3.isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    const tmpResult = tmp(5435);
    isGuildStickerResult = tmpResult.isStandardSticker(renderableSticker);
  }
  obj4 = { hasFetched: tmp7, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: first, stickersStoreDefinition: stateFromStores };
  react = obj2.useRef(obj4);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj4;
  });
  const items1 = [flag];
  const effect1 = obj2.useEffect(() => {
    let ref;
    const tmp = (async () => {
      let closure_0;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
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
              if (false) {
                if (!current.isReturnable) {
                  if (null == current.stickersStoreDefinition) {
                    if (current.shouldFetch) {
                      if (!current.hasFetched) {
                        closure_2_2(false);
                        c2 = 1;
                        c1 = 2;
                        c3 = 1;
                        const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                        obj2 = tmp(c2[13]);
                        return obj5;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (1 === tmp4) {
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
          return { value: "IconComponent", done: null };
        } catch (tmp12) {
          if (0 === c2) {
            c3 = 3;
            throw tmp12;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }, items1);
  if (isGuildStickerResult) {
    const items2 = [renderableSticker, tmp7];
    items3 = items2;
  } else {
    let tmp12 = stateFromStores;
    if (stateFromStores == null) {
      tmp12 = null;
    }
    items3 = [tmp12, tmp7];
  }
  return items3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(3);
  const arr = closure_19(arg0);
  if (cResult[0] !== arr) {
    let tmp4;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(type) {
        const tmp = type.type === require("StickersTypes").StickerCategoryTypes.EMPTY_GUILD_UPSELL || type.stickers.length > 0;
        return tmp;
      };
      cResult[2] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const found = arr.filter(tmp4, []);
    cResult[0] = arr;
    cResult[1] = found;
    tmp2 = found;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let tmp = closure_19(arg0);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter((type) => {
    const tmp = type.type === closure_1_0(closure_1_2[17]).StickerCategoryTypes.EMPTY_GUILD_UPSELL || type.stickers.length > 0;
    return tmp;
  }, []), items);
});
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
  let items = [collapsedStickersCategories, filteredStickers, num, num2, num3, stickerNodeWidth, stickersCategories, flag];
  return stickerNodeWidth.useMemo(() => {
    let gridSectionIndex;
    let items1;
    let items2;
    let stickers;
    let type;
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
        let intl;
        const category = SEARCH_RESULTS;
        let obj = collapsedStickersCategories(num[15]);
        let guild;
        if (obj.isGuildSticker(sendable[0])) {
          guild = stickersCategories.getGuild(sendable[0].guild_id);
        }
        const tmpResult = collapsedStickersCategories(num[16]);
        const canCreateExpressions = tmpResult.getManageResourcePermissions(guild).canCreateExpressions;
        const guildId = flag.getGuildId();
        let tmp8 = null != guild;
        const findIndexResult = visibleRowIndex.findIndex((type) => type.type === category(items1[17]).StickerCategoryTypes.FAVORITE);
        const findIndexResult1 = visibleRowIndex.findIndex((type) => type.type === category(items1[17]).StickerCategoryTypes.RECENT);
        if (tmp8) {
          tmp8 = guildId === guild.id;
        }
        if (tmp8) {
          tmp8 = canCreateExpressions;
        }
        if (tmp8) {
          const length2 = sendable.length;
          const tmpResult2 = collapsedStickersCategories(num[18]);
          tmp8 = length2 < tmpResult2.getTotalStickerCountForTier(guild.premiumTier);
        }
        let sum = length;
        if (tmp8) {
          sum = length + 1;
        }
        rounded = Math.ceil(sum / category);
        num = 0;
        const tmp12 = gridSectionIndex;
        if (!flag) {
          num = rounded;
        }
        items1[tmp12] = num;
        for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
          let result = num2 * category;
          let substr = sendable.slice(result, result + category);
          let mapped = substr.map((sticker, columnIndex) => {
            let str;
            const obj = { type: StickersTypes.StickerGridItemTypes.STICKER, sticker, packId: str, gridSectionIndex, rowIndex, columnIndex, visibleRowIndex, category };
            str = "TODO - fix";
            const obj2 = StickersUtils;
            if (obj2.isStandardSticker(sticker)) {
              str = sticker.pack_id;
            }
            return obj;
          });
          let tmp16 = gridSectionIndex > findIndexResult1;
          if (tmp16) {
            tmp16 = gridSectionIndex > findIndexResult;
          }
          if (tmp16) {
            tmp16 = null != guild;
          }
          if (tmp16) {
            tmp16 = sum > sendable.length;
          }
          if (tmp16) {
            let obj2 = { type: collapsedStickersCategories(num[17]).StickerGridItemTypes.CREATE_STICKER, guild_id: guild.id, name: intl.string(collapsedStickersCategories(num[19]).t["UwF+Cw"]), gridSectionIndex, rowIndex, columnIndex: mapped.length, visibleRowIndex };
            let push = mapped.push;
            intl = collapsedStickersCategories(num[19]).intl;
            let arr = push(obj2);
          }
          if (!flag) {
            visibleRowIndex = visibleRowIndex + 1;
            let arr2 = items2.push(mapped);
            let arr5 = items.push(mapped.length);
          }
          rowIndex = rowIndex + 1;
        }
        gridSectionIndex = gridSectionIndex + 1;
      }
      let tmp22 = items;
      let tmp23 = null;
      if (null == items) {
        const iter = stickersCategories[Symbol.iterator]();
        flag = true;
        let tmp8 = stickersCategories;
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp11 = nextResult;
          if (nextResult.stickers.length > 0) {
            let tmp17 = rowCount;
            rowCount = rowCount + 1;
            let tmp18 = nextResult;
            let obj = rounded;
            let hasItem;
            ({ stickers, type } = tmp11);
            if (rounded != null) {
              let tmp20 = nextResult;
              hasItem = obj.has(tmp11.id);
            }
            let addGridSectionResult = addGridSection(stickers, type, true === hasItem);
          } else {
            let tmp12 = nextResult;
            if (tmp11.type === collapsedStickersCategories(num[17]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
              let tmp15 = gridSectionIndex;
              items1[gridSectionIndex] = 0;
              let tmp16 = gridSectionIndex;
              gridSectionIndex = gridSectionIndex + 1;
            }
          }
          continue;
        }
      } else {
        if (tmp22.sendable.length > 0) {
          addGridSection(tmp22.sendable, collapsedStickersCategories(num[17]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (tmp22.sendableWithPremium.length > 0) {
          addGridSection(tmp22.sendableWithPremium, collapsedStickersCategories(num[17]).StickerCategoryTypes.SEARCH_RESULTS, flag);
        }
      }
    }
    let obj2 = { rowCount, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
    return obj2;
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
export const useFilteredStickerPackCategories = tmp11;