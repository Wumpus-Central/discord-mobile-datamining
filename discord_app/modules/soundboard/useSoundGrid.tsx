// discord_app/modules/soundboard/useSoundGrid.tsx
import react2 from "../../../_runtime/00576_react.js";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import SoundboardTypes from "SoundboardTypes.tsx";
import GuildBoostingUtils from "../../utils/GuildBoostingUtils.tsx";
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import useSoundOrganizer from "useSoundOrganizer.tsx";
import TopSoundboardSoundsActionCreators from "top_sounds/TopSoundboardSoundsActionCreators.tsx";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore_mod from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SoundboardStore from "SoundboardStore.tsx";
import SoundboardConstants from "SoundboardConstants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_7, importDefault, lockedCustomSoundCount, unlockedCustomSoundCount;

let closure_12;
let unpackModuleId;
function createSoundItems(items, sortSoundsFn) {
  let arr = items;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items);
  }
  return arr.map((sound, index) => {
    const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
}
function _addSectionForPotentialSoundIds(sectionType) {
  let allSounds;
  let obj3;
  let potentialSoundIdsForSection;
  let sections;
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  sectionType = sectionType.sectionType;
  const obj = {};
  const items = [];
  const sortSoundsFn = sectionType.sortSoundsFn;
  items[HermesBuiltin.arraySpread(items, sectionType.guildIds, 0)] = unpackModuleId;
  const tmp2 = items[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let items2 = allSounds.get(tmp3);
    if (items2 == null) {
      items2 = [];
    }
    function _loop(item10029) {
      let closure_0 = item10029;
      if (null != potentialSoundIdsForSection.find((item) => item === soundId.soundId)) {
        obj[item10029.soundId] = item10029;
      }
    }
    for (const item10029 of items2) {
      let _loopResult = _loop(item10029);
      continue;
    }
    continue;
  }
  const items1 = [];
  for (const item10039 of potentialSoundIdsForSection) {
    let tmp8 = obj[item10039];
    if (null != tmp8) {
      let arr = items1.push(tmp9);
    }
    continue;
  }
  const arr4 = createSoundItems(items1, sortSoundsFn);
  if (arr4.length > 0) {
    const obj2 = { key: sectionType, categoryInfo: obj3, items: arr4 };
    obj3 = { type: sectionType };
    sections.push(obj2);
  }
}
function addTopSoundsSection(items, stateFromStores3, arg2) {
  let allSounds;
  let obj3;
  let topSoundIds;
  ({ allSounds, topSoundIds } = arg2);
  const obj = {};
  let items1 = allSounds.get(stateFromStores3.id);
  if (items1 == null) {
    items1 = [];
  }
  for (const item10014 of items1) {
    obj[item10014.soundId] = item10014;
    continue;
  }
  items = [];
  for (const item10022 of topSoundIds) {
    let tmp = obj[item10022];
    if (null != tmp) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  if (0 !== items.length) {
    const push = items.push;
    const obj2 = {
      key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS,
      categoryInfo: obj3,
      items: createSoundItems(items),
    };
    obj3 = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: stateFromStores3 };
    push(obj2);
  }
}
function addGuildsSections(arg0) {
  let allSounds;
  let currentGuildId;
  let guilds;
  let hasNitro;
  let obj2;
  let sections;
  let sortSoundsFn;
  ({ sections, guilds, allSounds } = arg0);
  ({ currentGuildId, hasNitro, sortSoundsFn } = arg0);
  const iter = guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.id !== currentGuildId) {
      let items = allSounds.get(tmp2.id);
      if (items == null) {
        items = [];
      }
      let tmp9Result = createSoundItems(items, sortSoundsFn);
      if (tmp9Result.length > 0) {
        let obj = { categoryInfo: obj2, key: tmp2.id, items: tmp3 };
        obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: tmp2, isNitroLocked: !hasNitro };
        let push = sections.push;
        let arr = push(obj);
      }
    }
    continue;
  }
}
function addCurrentGuildSection(items, stateFromStores1, arg2) {
  let allSounds;
  let currentGuildHasAddPermissions;
  let filterOutEmptyCurrentGuild;
  let obj4;
  let sortSoundsFn;
  ({ allSounds, filterOutEmptyCurrentGuild, sortSoundsFn, currentGuildHasAddPermissions } = arg2);
  items = allSounds.get(stateFromStores1.id);
  if (items == null) {
    items = [];
  }
  let sortSoundsFnResult = items;
  if (null != sortSoundsFn) {
    sortSoundsFnResult = sortSoundsFn(items);
  }
  const mapped = sortSoundsFnResult.map((sound, index) => {
    const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
  const length = items.length;
  const obj = GuildBoostingUtils;
  const tmp5 =
    (!(length < obj.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions) && 0 !== mapped.length) ||
    filterOutEmptyCurrentGuild;
  if (!tmp5) {
    const push = mapped.push;
    const obj2 = { type: SoundboardTypes.SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
    push(obj2);
  }
  if (filterOutEmptyCurrentGuild) {
    filterOutEmptyCurrentGuild = tmp4;
  }
  if (!filterOutEmptyCurrentGuild) {
    const obj3 = { categoryInfo: obj4, key: stateFromStores1.id, items: mapped };
    const push2 = items.push;
    obj4 = {
      type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD,
      guild: stateFromStores1,
      isNitroLocked: false,
    };
    push2(obj3);
  }
}
let _slicedToArray = _slicedToArray_mod;
let GuildStore = GuildStore_mod;
({ DEFAULT_SOUND_GUILD_ID: unpackModuleId, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, arg1, arg2) => {
      let currentUser;
      let obj6;
      let sortedGuildIdsForSoundboard;
      let stateFromStores1;
      let substr;
      let tmp11;
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp24;
      let tmp26;
      let tmp28;
      let tmp31;
      let tmp35;
      let tmp38;
      let tmp4;
      let tmp41;
      let tmp7;
      let tmp8;
      _require = guild_id;
      let obj = require("react");
      const cResult = obj.c(64);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const filterOutEmptyCurrentGuild = tmp4.filterOutEmptyCurrentGuild;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function b() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] !== stateFromStores) {
        const obj4 = require("PremiumUtils");
        const isPremiumResult = obj4.isPremium(stateFromStores, PremiumTypes.TIER_2);
        cResult[4] = stateFromStores;
        cResult[5] = isPremiumResult;
        tmp11 = isPremiumResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SoundboardStore];
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[6] = items1;
        cResult[7] = A;
        tmp16 = A;
        tmp15 = items1;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult9 = require("get initialized");
      const tmp18 = stateFromStores1(tmpResult9.useStateFromStoresArray(tmp15, tmp16), 4);
      [obj6, tmp19] = tmp18;
      importDefault = tmp19;
      const tmpResult10 = require("useSoundOrganizer");
      const soundOrganizer = tmpResult10.useSoundOrganizer();
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: "useSoundGrid" };
        cResult[8] = obj3;
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
      } else {
        tmp22 = cResult[8];
      }
      const SoundboardFavoritesExperiment = tmp(tmp2[17]).SoundboardFavoritesExperiment;
      const sortOrder = SoundboardFavoritesExperiment.useConfig(tmp22).sortOrder;
      const tmpResult11 = require("useSortedGuildIdsForSoundboard");
      sortedGuildIdsForSoundboard = tmpResult11.useSortedGuildIdsForSoundboard(guild_id, false);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[9] = items2;
        tmp24 = items2;
      } else {
        tmp24 = cResult[9];
      }
      if (cResult[10] !== sortedGuildIdsForSoundboard) {
        const fn2 = function z() {
          const items = [];
          const item = sortedGuildIdsForSoundboard.forEach((item) => {
            guild = guild.getGuild(item);
            if (null != guild) {
              items.push(guild);
            }
          });
          return items;
        };
        cResult[10] = sortedGuildIdsForSoundboard;
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[11] = fn2;
        tmp26 = fn2;
      } else {
        tmp26 = cResult[11];
      }
      const tmpResult12 = require("get initialized");
      const stateFromStoresArray = tmpResult12.useStateFromStoresArray(tmp24, tmp26);
      if (cResult[12] !== stateFromStores) {
        const obj11 = require("PremiumUtils");
        let result = obj11.canUseSoundboardEverywhere(stateFromStores);
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[12] = stateFromStores;
        cResult[13] = result;
        tmp28 = result;
      } else {
        tmp28 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [GuildStore];
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[14] = items3;
        tmp31 = items3;
      } else {
        tmp31 = cResult[14];
      }
      guild_id = undefined;
      const tmp33 = cResult[15];
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (tmp33 !== guild_id) {
        let guild_id1;
        if (guild_id != null) {
          guild_id1 = guild_id.guild_id;
        }
        class J {
          constructor() {
            guild_id = undefined;
            const getGuild = GuildStore.getGuild;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return getGuild(guild_id);
          }
        }
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[15] = guild_id1;
        cResult[16] = J;
        tmp35 = J;
      } else {
        tmp35 = cResult[16];
      }
      const tmpResult13 = require("get initialized");
      stateFromStores1 = tmpResult13.useStateFromStores(tmp31, tmp35);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [];
        class J {
          constructor() {
            guild_id = undefined;
            const getGuild = GuildStore.getGuild;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return getGuild(guild_id);
          }
        }
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[17] = items4;
        tmp38 = items4;
      } else {
        tmp38 = cResult[17];
      }
      if (cResult[18] !== stateFromStores1) {
        class W {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        const items5 = [];
        class J {
          constructor() {
            guild_id = undefined;
            const getGuild = GuildStore.getGuild;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return getGuild(guild_id);
          }
        }
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[18] = stateFromStores1;
        cResult[19] = W;
        cResult[20] = items5;
        tmp41 = items5;
      } else {
        class W {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        tmp41 = cResult[20];
      }
      const tmpResult14 = require("get initialized");
      const stateFromStores2 = tmpResult14.useStateFromStores(tmp38, W, tmp41);
      if (cResult[21] === tmp19) {
        let tmp58;
        class W {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        const _Symbol = Symbol;
        class J {
          constructor() {
            guild_id = undefined;
            const getGuild = GuildStore.getGuild;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return getGuild(guild_id);
          }
        }
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        const tmpResult15 = require("get initialized");
        const stateFromStores3 = tmpResult15.useStateFromStores(tmp46, tmp47);
        const _Symbol2 = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          const config = obj15.getConfig({ location: "useSoundGrid" });
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        const enabled = tmp49.enabled;
        const topSoundsFirst = tmp49.topSoundsFirst;
        const tmp51 = cResult[29];
        if (stateFromStores3 != null) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        if (tmp51 !== undefined) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          if (stateFromStores3 != null) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          cResult[29] = tmp54;
          cResult[30] = tmp55;
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        require("useMountEffect")(tmp55);
        const _Symbol3 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          const items6 = [];
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          cResult[31] = items6;
          tmp58 = items6;
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        const tmp59 = cResult[32];
        if (stateFromStores3 != null) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        if (tmp59 !== undefined) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          if (stateFromStores3 != null) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          cResult[32] = tmp62;
          cResult[33] = tmp63;
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        const tmpResult16 = require("get initialized");
        const stateFromStoresArray1 = tmpResult16.useStateFromStoresArray(tmp58, tmp63);
        if (cResult[34] !== stateFromStoresArray1) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          cResult[34] = stateFromStoresArray1;
          cResult[35] = tmp66;
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        if (cResult[36] === obj6) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        GuildStore = 0;
        lockedCustomSoundCount = 0;
        const items7 = [];
        if (undefined !== arg2 && arg2) {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          const value = obj6.get(closure_11);
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          const push3 = items7.push;
          tmp93[0] = require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS;
          tmp93[1] = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
          const arr13 = value;
          const obj5 = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
          if (null != require("useSoundOrganizer").sortSoundsOldestToNewestCreationDate) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          tmp93[2] = arr13.map((sound, index) => {
            const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          });
          push3(tmp93);
          const value4 = obj6.get(tmp91);
          if (value4 == null) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
        } else {
          class W {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
          if (tmp68) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            const obj8 = { allSounds: null, topSoundIds: null };
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            addTopSoundsSection(items7, stateFromStores3, obj8);
          }
          class J {
            constructor() {
              guild_id = undefined;
              const getGuild = GuildStore.getGuild;
              if (guild_id != null) {
                guild_id = guild_id.guild_id;
              }
              return getGuild(guild_id);
            }
          }
          class A {
            constructor() {
              const items = [
                SoundboardStore.getSounds(),
                SoundboardStore.getFavorites(),
                SoundboardStore.getFrequentlyUsedSoundIds(),
                SoundboardStore.isFetching(),
              ];
              return items;
            }
          }
          const _Array = Array;
          const obj9 = {
            sections: items7,
            guildIds: sortedGuildIdsForSoundboard,
            allSounds: obj6,
            potentialSoundIdsForSection: Array.from(tmp19),
            sectionType: require("SoundboardTypes").SoundboardSoundGridSectionType.FAVORITES,
            sortSoundsFn: tmp70,
          };
          _addSectionForPotentialSoundIds(obj9);
          if (enabled) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          if (enabled) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          if (enabled) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            const obj10 = { allSounds: null, topSoundIds: null };
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            addTopSoundsSection(items7, stateFromStores3, obj10);
          }
          if (undefined !== stateFromStores1) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            const obj12 = {
              currentGuildHasAddPermissions: null,
              allSounds: null,
              filterOutEmptyCurrentGuild: undefined !== filterOutEmptyCurrentGuild && filterOutEmptyCurrentGuild,
              sortSoundsFn: soundOrganizer,
            };
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            addCurrentGuildSection(items7, stateFromStores1, obj12);
          }
          if (!tmp28) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            const value5 = obj6.get(closure_11);
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            const push = items7.push;
            tmp76[0] = require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS;
            tmp76[1] = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
            const arr11 = value5;
            const obj13 = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
            if (null != require("useSoundOrganizer").sortSoundsOldestToNewestCreationDate) {
              class W {
                constructor() {
                  const obj = useManageResourcePermissions;
                  return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
                }
              }
            }
            tmp76[2] = arr11.map((sound, index) => {
              const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
              return obj;
            });
            push(tmp76);
          }
          const obj14 = {
            sections: items7,
            guilds: stateFromStoresArray,
            currentGuildId: undefined,
            allSounds: obj6,
            hasNitro: tmp11,
            sortSoundsFn: soundOrganizer,
          };
          if (stateFromStores1 != null) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          addGuildsSections(obj14);
          if (tmp28) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            const value6 = obj6.get(closure_11);
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            const push2 = items7.push;
            tmp82[0] = require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS;
            tmp82[1] = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
            const arr12 = value6;
            const obj16 = { type: require("SoundboardTypes").SoundboardSoundGridSectionType.DEFAULTS };
            if (null != require("useSoundOrganizer").sortSoundsOldestToNewestCreationDate) {
              class W {
                constructor() {
                  const obj = useManageResourcePermissions;
                  return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
                }
              }
            }
            tmp82[2] = arr12.map((sound, index) => {
              const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
              return obj;
            });
            push2(tmp82);
          }
          let item = items7.forEach((categoryInfo) => {
            if (categoryInfo.categoryInfo.type === SoundboardTypes.SoundboardSoundGridSectionType.GUILD) {
              if (categoryInfo.categoryInfo.isNitroLocked) {
                closure_7 = closure_7 + categoryInfo.items.length;
              } else {
                closure_6 = closure_6 + categoryInfo.items.length;
              }
            }
          });
          if (cResult[53] !== obj6) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
            class J {
              constructor() {
                guild_id = undefined;
                const getGuild = GuildStore.getGuild;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                return getGuild(guild_id);
              }
            }
            class A {
              constructor() {
                const items = [
                  SoundboardStore.getSounds(),
                  SoundboardStore.getFavorites(),
                  SoundboardStore.getFrequentlyUsedSoundIds(),
                  SoundboardStore.isFetching(),
                ];
                return items;
              }
            }
            cResult[53] = obj6;
            cResult[54] = tmp86;
          } else {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          if (cResult[55] === tmp19.size) {
            class W {
              constructor() {
                const obj = useManageResourcePermissions;
                return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
              }
            }
          }
          const obj17 = {
            favoriteSoundCount: tmp19.size,
            unlockedCustomSoundCount: GuildStore,
            lockedCustomSoundCount,
          };
          cResult[55] = tmp19.size;
          cResult[56] = GuildStore;
          cResult[57] = lockedCustomSoundCount;
          cResult[58] = obj17;
        }
        cResult[36] = obj6;
        cResult[37] = tmp28;
        cResult[38] = stateFromStores1;
        cResult[39] = stateFromStores2;
        cResult[40] = undefined !== arg2 && arg2;
        cResult[41] = tmp19;
        cResult[42] = undefined !== filterOutEmptyCurrentGuild && filterOutEmptyCurrentGuild;
        cResult[43] = substr;
        cResult[44] = sortedGuildIdsForSoundboard;
        cResult[45] = stateFromStoresArray;
        cResult[46] = tmp11;
        cResult[47] = tmp18[3];
        cResult[48] = sortOrder;
        cResult[49] = soundOrganizer;
        cResult[50] = tmp66;
        cResult[51] = stateFromStores3;
        cResult[52] = tmp90;
      }
      if (cResult[24] !== tmp19) {
        class W {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        class J {
          constructor() {
            guild_id = undefined;
            const getGuild = GuildStore.getGuild;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return getGuild(guild_id);
          }
        }
        class A {
          constructor() {
            const items = [
              SoundboardStore.getSounds(),
              SoundboardStore.getFavorites(),
              SoundboardStore.getFrequentlyUsedSoundIds(),
              SoundboardStore.isFetching(),
            ];
            return items;
          }
        }
        cResult[25] = tmp44;
      } else {
        class W {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      const found = arr3.filter(tmp44);
      substr = found.slice(0, 3);
      cResult[21] = tmp19;
      cResult[22] = tmp18[2];
      cResult[23] = substr;
    }
  : (unlockedCustomSoundCount) => {
      let hasNitro;
      _require = unlockedCustomSoundCount;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let flag = obj.filterOutEmptyCurrentGuild;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = arg2;
      if (arg2 === undefined) {
        flag2 = false;
      }
      let sortOrder;
      let sortedGuildIdsForSoundboard;
      let stateFromStores1;
      let obj2 = require("get initialized");
      let items = [sortOrder];
      const stateFromStores = obj2.useStateFromStores(items, () => sortOrder.getCurrentUser());
      const obj3 = flag(flag2[16]);
      const isPremiumResult = obj3.isPremium(stateFromStores, stateFromStores1.TIER_2);
      _slicedToArray = isPremiumResult;
      let obj4 = require("get initialized");
      const items1 = [sortedGuildIdsForSoundboard];
      let tmp3 = _slicedToArray(
        obj4.useStateFromStoresArray(items1, () => {
          const items = [
            sortedGuildIdsForSoundboard.getSounds(),
            sortedGuildIdsForSoundboard.getFavorites(),
            sortedGuildIdsForSoundboard.getFrequentlyUsedSoundIds(),
            sortedGuildIdsForSoundboard.isFetching(),
          ];
          return items;
        }),
        4,
      );
      const allSounds = tmp3[0];
      let channel = tmp5;
      let closure_6 = tmp6;
      const isFetching = tmp7;
      let obj5 = require("useSoundOrganizer");
      const soundOrganizer = obj5.useSoundOrganizer();
      const SoundboardFavoritesExperiment = require("SoundboardFavoritesExperiment").SoundboardFavoritesExperiment;
      sortOrder = SoundboardFavoritesExperiment.useConfig({ location: "useSoundGrid" }).sortOrder;
      let obj6 = require("useSortedGuildIdsForSoundboard");
      sortedGuildIdsForSoundboard = obj6.useSortedGuildIdsForSoundboard(unlockedCustomSoundCount, false);
      let obj7 = require("get initialized");
      const items2 = [closure_6];
      const stateFromStoresArray = obj7.useStateFromStoresArray(items2, () => {
        const items = [];
        const item = sortedGuildIdsForSoundboard.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      });
      let obj8 = flag(flag2[16]);
      let result = obj8.canUseSoundboardEverywhere(stateFromStores);
      let c12 = result;
      let obj9 = require("get initialized");
      const items3 = [closure_6];
      stateFromStores1 = obj9.useStateFromStores(items3, () => {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (unlockedCustomSoundCount != null) {
          guild_id = unlockedCustomSoundCount.guild_id;
        }
        return getGuild(guild_id);
      });
      let obj10 = require("get initialized");
      const items4 = [isFetching];
      const items5 = [stateFromStores1];
      const stateFromStores2 = obj10.useStateFromStores(
        items4,
        () => {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        },
        items5,
      );
      const items6 = [tmp3[2], tmp5];
      const memo = allSounds.useMemo(() => {
        const found = closure_6.filter((item) => !set.has(item));
        return found.slice(0, 3);
      }, items6);
      let obj11 = require("get initialized");
      const items7 = [soundOrganizer, channel, closure_6];
      const stateFromStores3 = obj11.useStateFromStores(items7, () => {
        const voiceChannelId = soundOrganizer.getVoiceChannelId();
        channel = null;
        if (null != voiceChannelId) {
          channel = channel.getChannel(voiceChannelId);
        }
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        let guild;
        if (null != guild_id) {
          guild = closure_6.getGuild(channel.guild_id);
        }
        return guild;
      });
      const TopSoundboardSoundsMobileExperiment =
        require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
      const config = TopSoundboardSoundsMobileExperiment.getConfig({ location: "useSoundGrid" });
      const enabled = config.enabled;
      const topSoundsFirst = config.topSoundsFirst;
      flag(flag2[22])(() => {
        if (enabled) {
          let id;
          const maybeFetchTopSoundboardSoundsByGuild =
            TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild;
          TopSoundboardSoundsActionCreators;
          if (stateFromStores3 != null) {
            id = stateFromStores3.id;
          }
          const result = maybeFetchTopSoundboardSoundsByGuild(id);
        }
      });
      let obj12 = require("get initialized");
      const items8 = [sortedGuildIdsForSoundboard];
      const stateFromStoresArray1 = obj12.useStateFromStoresArray(items8, () => {
        let id;
        const getTopSoundboardSoundIds = SoundboardStore.getTopSoundboardSoundIds;
        if (stateFromStores3 != null) {
          id = stateFromStores3.id;
        }
        return getTopSoundboardSoundIds(id);
      });
      const items9 = [stateFromStoresArray1];
      const memo1 = allSounds.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
      const items10 = [
        sortedGuildIdsForSoundboard,
        allSounds,
        tmp5,
        false,
        stateFromStores1,
        stateFromStores2,
        flag,
        result,
        stateFromStoresArray,
        flag2,
        tmp3[3],
        isPremiumResult,
        soundOrganizer,
        memo,
        stateFromStores3,
        memo1,
        enabled,
        topSoundsFirst,
        sortOrder,
      ];
      return allSounds.useMemo(() => {
        let arr2;
        let id;
        let obj10;
        let obj13;
        let obj4;
        let result;
        let result1;
        let result2;
        let value4;
        unlockedCustomSoundCount = 0;
        lockedCustomSoundCount = 0;
        const items = [];
        if (flag2) {
          let value = allSounds.get(unpackModuleId);
          if (value == null) {
            value = closure_12;
          }
          const push3 = items.push;
          const obj2 = {
            key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS,
            categoryInfo: obj4,
            items: result.map((sound, index) => {
              const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
              return obj;
            }),
          };
          obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
          const sortSoundsOldestToNewestCreationDate4 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
          result = value;
          if (null != sortSoundsOldestToNewestCreationDate4) {
            result = sortSoundsOldestToNewestCreationDate4(value);
          }
          push3(obj2);
          const obj5 = {
            categories: items,
            availableSounds: value4,
            isFetching,
            soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 },
          };
          value4 = allSounds.get(unpackModuleId);
          if (value4 == null) {
            value4 = closure_12;
          }
          return obj5;
        } else {
          let sortSoundsOldestToNewestCreationDate;
          let tmp14;
          let tmp2 = enabled;
          const tmp3 = enabled && null != stateFromStores3 && topSoundsFirst;
          if (tmp3) {
            const obj = { allSounds, topSoundIds: memo1 };
            addTopSoundsSection(items, stateFromStores3, obj);
          }
          if ("favorite-date" === sortOrder) {
            sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate;
            tmp14 = require;
          } else {
            sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
            tmp14 = require;
          }
          const _Array = Array;
          const obj6 = {
            sections: items,
            guildIds: sortedGuildIdsForSoundboard,
            allSounds,
            potentialSoundIdsForSection: Array.from(channel),
            sectionType: tmp14(5805).SoundboardSoundGridSectionType.FAVORITES,
            sortSoundsFn: sortSoundsOldestToNewestCreationDate,
          };
          _addSectionForPotentialSoundIds(obj6);
          if (tmp2) {
            tmp2 = null != stateFromStores3;
          }
          if (tmp2) {
            tmp2 = !topSoundsFirst;
          }
          if (tmp2) {
            const obj7 = { allSounds, topSoundIds: memo1 };
            addTopSoundsSection(items, stateFromStores3, obj7);
          }
          if (undefined !== stateFromStores1) {
            const obj8 = {
              currentGuildHasAddPermissions: stateFromStores2,
              allSounds,
              filterOutEmptyCurrentGuild: flag,
              sortSoundsFn: soundOrganizer,
            };
            addCurrentGuildSection(items, stateFromStores1, obj8);
          }
          if (!c12) {
            let value5 = allSounds.get(unpackModuleId);
            if (value5 == null) {
              value5 = closure_12;
            }
            const push = items.push;
            const obj9 = {
              key: tmp14(5805).SoundboardSoundGridSectionType.DEFAULTS,
              categoryInfo: obj10,
              items: result1.map((sound, index) => {
                const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              }),
            };
            obj10 = { type: tmp14(5805).SoundboardSoundGridSectionType.DEFAULTS };
            const sortSoundsOldestToNewestCreationDate2 = tmp14(17231).sortSoundsOldestToNewestCreationDate;
            result1 = value5;
            if (null != sortSoundsOldestToNewestCreationDate2) {
              result1 = sortSoundsOldestToNewestCreationDate2(value5);
            }
            push(obj9);
          }
          const obj11 = {
            sections: items,
            guilds: stateFromStoresArray,
            currentGuildId: id,
            allSounds,
            hasNitro,
            sortSoundsFn: soundOrganizer,
          };
          id = undefined;
          if (stateFromStores1 != null) {
            id = stateFromStores1.id;
          }
          addGuildsSections(obj11);
          if (c12) {
            let value6 = allSounds.get(unpackModuleId);
            if (value6 == null) {
              value6 = closure_12;
            }
            const push2 = items.push;
            const obj12 = {
              key: tmp14(5805).SoundboardSoundGridSectionType.DEFAULTS,
              categoryInfo: obj13,
              items: result2.map((sound, index) => {
                const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              }),
            };
            obj13 = { type: tmp14(5805).SoundboardSoundGridSectionType.DEFAULTS };
            const sortSoundsOldestToNewestCreationDate3 = tmp14(17231).sortSoundsOldestToNewestCreationDate;
            result2 = value6;
            if (null != sortSoundsOldestToNewestCreationDate3) {
              result2 = sortSoundsOldestToNewestCreationDate3(value6);
            }
            push2(obj12);
          }
          const item = items.forEach((categoryInfo) => {
            if (
              categoryInfo.categoryInfo.type ===
              unlockedCustomSoundCount(flag2[10]).SoundboardSoundGridSectionType.GUILD
            ) {
              if (categoryInfo.categoryInfo.isNitroLocked) {
                closure_1 = closure_1 + categoryInfo.items.length;
              } else {
                closure_0 = closure_0 + categoryInfo.items.length;
              }
            }
          });
          const _Array2 = Array;
          const obj15 = { categories: items, availableSounds: arr2.flat(), isFetching, soundCounts: obj16 };
          arr2 = Array.from(allSounds.values());
          return obj15;
        }
      }, items10);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arr, arg2) => {
      let tmp = arg0;
      const obj = react2;
      const cResult = obj.c(5);
      if (arg2.length > 0) {
        let first;
        let tmp7;
        let tmp9;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== arr) {
          const mapped = arr.map((sound, index) => {
            const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          });
          cResult[1] = arr;
          cResult[2] = mapped;
          tmp7 = mapped;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== tmp7) {
          const items = [
            { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: first, items: tmp7 },
          ];
          cResult[3] = tmp7;
          cResult[4] = items;
          tmp9 = items;
          const obj3 = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: first, items: tmp7 };
        } else {
          tmp9 = cResult[4];
        }
        tmp = tmp9;
      }
      return tmp;
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const length = arg2;
      let items = [arg0, arg2.length, arg1];
      return react.useMemo(() => {
        let obj2;
        let tmp;
        if (length.length > 0) {
          let obj = {
            key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH,
            categoryInfo: obj2,
            items: closure_1.map((sound, index) => {
              const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
              return obj;
            }),
          };
          const items = [obj];
          tmp = items;
          obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
        } else {
          tmp = closure_0;
        }
        return tmp;
      }, items);
    };
let result = size.fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default tmp3;
export const useSearchCategories = tmp4;
