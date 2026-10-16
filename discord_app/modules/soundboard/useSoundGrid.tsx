// === Module 18136: useSoundGrid ===

// Module 18136 (useSoundGrid)
import c from "c" /* 576 */;
import SoundboardTypes from "SoundboardTypes" /* 7272 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8247 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 8801 */;
import useSoundOrganizer from "useSoundOrganizer" /* 18137 */;
import TopSoundboardSoundsActionCreators from "TopSoundboardSoundsActionCreators" /* 18139 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import UserStore from "UserStore" /* 1392 */;
import SoundboardStore from "SoundboardStore" /* 5490 */;

require = fn;
function createSoundItems(items, sortSoundsFn) {
  let arr = items;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items);
  }
  return arr.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
}
function _addSectionForPotentialSoundIds(sectionType) {
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  sectionType = sectionType.sectionType;
  const obj = {};
  const items = [];
  items[HermesBuiltin.arraySpread(sectionType.guildIds, 0)] = closure_1_11;
  while (tmp !== undefined) {
    let items2 = allSounds.get(tmp2);
    if (items2 == null) {
      items2 = [];
    }
    function _loop(soundId) {
      if (null != potentialSoundIdsForSection.find((item) => item === soundId.soundId)) {
        obj[soundId.soundId] = soundId;
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
    let tmp7 = obj[item10039];
    if (null != tmp7) {
      let arr = items1.push(tmp8);
    }
    continue;
  }
  const arr4 = createSoundItems(items1, sectionType.sortSoundsFn);
  if (arr4.length > 0) {
    const obj2 = { key: sectionType, categoryInfo: null, items: null };
    const obj3 = { type: sectionType };
    obj2.categoryInfo = obj3;
    obj2.items = arr4;
    sections.push(obj2);
  }
}
function addTopSoundsSection(items, id, arg2) {
  ({ allSounds, topSoundIds } = arg2);
  const obj = {};
  let items1 = allSounds.get(id.id);
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
    const obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: null, items: null };
    const obj3 = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: id };
    obj2.categoryInfo = obj3;
    obj2.items = createSoundItems(items);
    items.push(obj2);
  }
}
function addGuildsSections(arg0) {
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
        let obj = { categoryInfo: null, key: null, items: null };
        let obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: null, isNitroLocked: null };
        obj2.guild = tmp2;
        obj2.isNitroLocked = !hasNitro;
        obj.categoryInfo = obj2;
        obj.key = tmp2.id;
        obj.items = tmp3;
        let arr = sections.push(obj);
      }
    }
    continue;
  }
}
function addCurrentGuildSection(items, stateFromStores1, arg2) {
  ({ allSounds, filterOutEmptyCurrentGuild, sortSoundsFn, currentGuildHasAddPermissions } = arg2);
  items = allSounds.get(stateFromStores1.id);
  if (items == null) {
    items = [];
  }
  let sortSoundsFnResult = items;
  if (null != sortSoundsFn) {
    sortSoundsFnResult = sortSoundsFn(items);
  }
  const mapped = sortSoundsFnResult.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
  const tmp3 = items.length < GuildBoostingUtils.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions;
  let tmp5 = !tmp3;
  if (!tmp3) {
    tmp5 = !tmp4;
  }
  if (!tmp5) {
    tmp5 = filterOutEmptyCurrentGuild;
  }
  if (!tmp5) {
    const obj2 = { type: SoundboardTypes.SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
    mapped.push(obj2);
  }
  if (filterOutEmptyCurrentGuild) {
    filterOutEmptyCurrentGuild = tmp4;
  }
  if (!filterOutEmptyCurrentGuild) {
    const obj3 = { categoryInfo: null, key: null, items: null };
    const obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: stateFromStores1, isNitroLocked: false };
    obj3.categoryInfo = obj4;
    obj3.key = stateFromStores1.id;
    obj3.items = mapped;
    items.push(obj3);
  }
}
const SoundboardConstants = fn(5492);
({ DEFAULT_SOUND_GUILD_ID: closure_11, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = fn(1394).PremiumTypes;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundGrid(guild_id, arg1, arg2) {
  _require = guild_id;
  const cResult = require("c").c(63);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const filterOutEmptyCurrentGuild = tmp4.filterOutEmptyCurrentGuild;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class G {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    cResult[2] = items;
    cResult[3] = G;
    let tmp6 = G;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[4] !== stateFromStores) {
    require("PremiumUtils");
    class G {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp13;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SoundboardStore];
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[6] = items1;
    cResult[7] = A;
    let tmp15 = A;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const tmpResult = require("initialize");
  const tmp17 = stateFromStores1(require("initialize").useStateFromStoresArray(tmp14, tmp15), 4);
  [r10065, tmp18] = tmp17;
  importDefault = tmp18;
  const tmpResult7 = require("initialize");
  const soundOrganizer = require("useSoundOrganizer").useSoundOrganizer();
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[8] = { location: "useSoundGrid" };
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    const obj3 = { location: "useSoundGrid" };
  } else {
    const tmp20 = cResult[8];
  }
  const SoundboardFavoritesExperiment = tmp(tmp2[17]).SoundboardFavoritesExperiment;
  const sortOrder = SoundboardFavoritesExperiment.useConfig(tmp20).sortOrder;
  const tmpResult8 = require("useSoundOrganizer");
  sortedGuildIdsForSoundboard = require("useSortedGuildIdsForSoundboard").useSortedGuildIdsForSoundboard(guild_id, false);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[9] = items2;
    let tmp22 = items2;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] !== sortedGuildIdsForSoundboard) {
    const fn = function z() {
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
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[11] = fn;
    let tmp24 = fn;
  } else {
    tmp24 = cResult[11];
  }
  const tmpResult9 = require("useSortedGuildIdsForSoundboard");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp22, tmp24);
  if (cResult[12] !== stateFromStores) {
    let result = require("PremiumUtils").canUseSoundboardEverywhere(stateFromStores);
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[12] = stateFromStores;
    cResult[13] = result;
    const obj9 = require("PremiumUtils");
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildStore];
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[14] = items3;
    let tmp29 = items3;
  } else {
    tmp29 = cResult[14];
  }
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[15] !== guild_id) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    class J {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[15] = guild_id1;
    cResult[16] = J;
    let tmp32 = J;
  } else {
    tmp32 = cResult[16];
  }
  const tmpResult10 = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp29, tmp32);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [];
    class J {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[17] = items4;
    let tmp35 = items4;
  } else {
    tmp35 = cResult[17];
  }
  if (cResult[18] !== stateFromStores1) {
    class W {
      constructor() {
        obj = closure_0(closure_2[19]);
        return obj.getManageResourcePermissions(closure_3).canCreateExpressions;
      }
    }
    const items5 = [];
    class J {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[18] = stateFromStores1;
    cResult[19] = W;
    cResult[20] = items5;
    let tmp38 = items5;
  } else {
    class W {
      constructor() {
        obj = closure_0(closure_2[19]);
        return obj.getManageResourcePermissions(closure_3).canCreateExpressions;
      }
    }
    tmp38 = cResult[20];
  }
  const tmpResult11 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp35, W, tmp38);
  if (cResult[21] === tmp18) {
    class W {
      constructor() {
        obj = closure_0(closure_2[19]);
        return obj.getManageResourcePermissions(closure_3).canCreateExpressions;
      }
    }
  }
  if (cResult[24] !== tmp18) {
    class W {
      constructor() {
        obj = closure_0(closure_2[19]);
        return obj.getManageResourcePermissions(closure_3).canCreateExpressions;
      }
    }
    class J {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    class A {
      constructor() {
        items = [, , , ];
        items[0] = closure_1_10.getSounds();
        items[1] = closure_1_10.getFavorites();
        items[2] = closure_1_10.getFrequentlyUsedSoundIds();
        items[3] = closure_1_10.isFetching();
        return items;
      }
    }
    cResult[25] = tmp41;
  } else {
    class W {
      constructor() {
        obj = closure_0(closure_2[19]);
        return obj.getManageResourcePermissions(closure_3).canCreateExpressions;
      }
    }
  }
  const found = arr3.filter(tmp41);
  const substr = found.slice(0, 3);
  cResult[21] = tmp18;
  cResult[22] = tmp17[2];
  cResult[23] = substr;
  const tmpResult12 = require("initialize");
}) : (function useSoundGrid(unlockedCustomSoundCount) {
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
  let items = [sortOrder];
  const stateFromStores = require("initialize").useStateFromStores(items, () => sortOrder.getCurrentUser());
  let obj2 = require("initialize");
  const isPremiumResult = flag(flag2[16]).isPremium(stateFromStores, stateFromStores1.TIER_2);
  _slicedToArray = isPremiumResult;
  const obj3 = flag(flag2[16]);
  const items1 = [sortedGuildIdsForSoundboard];
  const tmp3 = _slicedToArray(require("initialize").useStateFromStoresArray(items1, () => {
    const items = [sortedGuildIdsForSoundboard.getSounds(), sortedGuildIdsForSoundboard.getFavorites(), sortedGuildIdsForSoundboard.getFrequentlyUsedSoundIds(), sortedGuildIdsForSoundboard.isFetching()];
    return items;
  }), 4);
  const allSounds = tmp3[0];
  let channel = tmp5;
  closure_6 = tmp6;
  const isFetching = tmp7;
  let obj4 = require("initialize");
  const soundOrganizer = require("useSoundOrganizer").useSoundOrganizer();
  const SoundboardFavoritesExperiment = require("SoundboardFavoritesExperiment").SoundboardFavoritesExperiment;
  sortOrder = SoundboardFavoritesExperiment.useConfig({ location: "useSoundGrid" }).sortOrder;
  let obj5 = require("useSoundOrganizer");
  sortedGuildIdsForSoundboard = require("useSortedGuildIdsForSoundboard").useSortedGuildIdsForSoundboard(unlockedCustomSoundCount, false);
  let obj6 = require("useSortedGuildIdsForSoundboard");
  const items2 = [closure_6];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const items = [];
    const item = sortedGuildIdsForSoundboard.forEach((item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let obj7 = require("initialize");
  let result = flag(flag2[16]).canUseSoundboardEverywhere(stateFromStores);
  c12 = result;
  let obj8 = flag(flag2[16]);
  const items3 = [closure_6];
  stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let guild_id;
    if (unlockedCustomSoundCount != null) {
      guild_id = unlockedCustomSoundCount.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  let obj9 = require("initialize");
  const items4 = [isFetching];
  const items5 = [stateFromStores1];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => useManageResourcePermissions.getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
  const items6 = [tmp3[2], tmp3[1]];
  const memo = allSounds.useMemo(() => {
    const found = closure_6.filter((item) => !set.has(item));
    return found.slice(0, 3);
  }, items6);
  let obj10 = require("initialize");
  const items7 = [soundOrganizer, channel, closure_6];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => {
    const voiceChannelId = soundOrganizer.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    guild = undefined;
    if (null != guild_id) {
      guild = closure_6.getGuild(channel.guild_id);
    }
    return guild;
  });
  flag(flag2[21])(() => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    const result = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild(id);
  });
  let obj11 = require("initialize");
  const items8 = [sortedGuildIdsForSoundboard];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items8, () => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    return SoundboardStore.getTopSoundboardSoundIds(id);
  });
  const items9 = [stateFromStoresArray1];
  const memo1 = allSounds.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
  const items10 = [sortedGuildIdsForSoundboard, allSounds, tmp3[1], false, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp3[3], isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1, sortOrder];
  return allSounds.useMemo(() => {
    unlockedCustomSoundCount = 0;
    lockedCustomSoundCount = 0;
    const items = [];
    if (flag2) {
      value = allSounds.get(closure_2_11);
      if (value == null) {
        value = __initData;
      }
      const obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
      const obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      obj2.categoryInfo = obj4;
      const sortSoundsOldestToNewestCreationDate4 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate4) {
        result = sortSoundsOldestToNewestCreationDate4(value);
      }
      obj2.items = result.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
      items.push(obj2);
      const obj5 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      value4 = allSounds.get(closure_2_11);
      if (value4 == null) {
        value4 = __initData;
      }
      obj5.availableSounds = value4;
      obj5.isFetching = isFetching;
      obj5.soundCounts = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      return obj5;
    } else {
      if (null != stateFromStores3) {
        const obj = { allSounds, topSoundIds: memo1 };
        addTopSoundsSection(items, tmp, obj);
      }
      if ("favorite-date" === sortOrder) {
        let sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate;
        let tmp8 = require;
      } else {
        tmp8 = require;
        sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      }
      const obj6 = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds, potentialSoundIdsForSection: null, sectionType: null, sortSoundsFn: null };
      const _Array = Array;
      obj6.potentialSoundIdsForSection = Array.from(size);
      obj6.sectionType = tmp8(7272).SoundboardSoundGridSectionType.FAVORITES;
      obj6.sortSoundsFn = sortSoundsOldestToNewestCreationDate;
      _addSectionForPotentialSoundIds(obj6);
      if (undefined !== stateFromStores1) {
        const obj7 = { currentGuildHasAddPermissions: stateFromStores2, allSounds, filterOutEmptyCurrentGuild: flag, sortSoundsFn: soundOrganizer };
        addCurrentGuildSection(items, stateFromStores1, obj7);
      }
      if (!c12) {
        let value5 = allSounds.get(closure_2_11);
        if (value5 == null) {
          value5 = __initData;
        }
        const obj8 = { key: tmp8(7272).SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj9 = { type: tmp8(7272).SoundboardSoundGridSectionType.DEFAULTS };
        obj8.categoryInfo = obj9;
        const sortSoundsOldestToNewestCreationDate2 = tmp8(18137).sortSoundsOldestToNewestCreationDate;
        let result1 = value5;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result1 = sortSoundsOldestToNewestCreationDate2(value5);
        }
        obj8.items = result1.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj8);
      }
      const obj10 = { sections: items, guilds: stateFromStoresArray, currentGuildId: null, allSounds: null, hasNitro: null, sortSoundsFn: null };
      let id;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      obj10.currentGuildId = id;
      obj10.allSounds = allSounds;
      obj10.hasNitro = hasNitro;
      obj10.sortSoundsFn = soundOrganizer;
      addGuildsSections(obj10);
      if (c12) {
        let value6 = allSounds.get(closure_2_11);
        if (value6 == null) {
          value6 = __initData;
        }
        const obj11 = { key: tmp8(7272).SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj12 = { type: tmp8(7272).SoundboardSoundGridSectionType.DEFAULTS };
        obj11.categoryInfo = obj12;
        const sortSoundsOldestToNewestCreationDate3 = tmp8(18137).sortSoundsOldestToNewestCreationDate;
        let result2 = value6;
        if (null != sortSoundsOldestToNewestCreationDate3) {
          result2 = sortSoundsOldestToNewestCreationDate3(value6);
        }
        obj11.items = result2.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj11);
      }
      const item = items.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === closure_0(flag2[10]).SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + categoryInfo.items.length;
          } else {
            closure_0 = closure_0 + categoryInfo.items.length;
          }
        }
      });
      const obj14 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      const _Array2 = Array;
      obj14.availableSounds = Array.from(allSounds.values()).flat();
      obj14.isFetching = isFetching;
      const obj15 = { favoriteSoundCount: size.size, unlockedCustomSoundCount, lockedCustomSoundCount };
      obj14.soundCounts = obj15;
      return obj14;
    }
  }, items10);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default tmp3;
export const useSearchCategories = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchCategories(arg0, arr, arg2) {
  let SEARCH = dependencyMap;
  const cResult = c.c(5);
  if (arg2.length <= 0) {
    return arg0;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== arr) {
      const mapped = arr.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
      cResult[1] = arr;
      cResult[2] = mapped;
      let tmp4 = mapped;
    } else {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj3 = { key: null, categoryInfo: null, items: null };
      SEARCH = SoundboardTypes.SoundboardSoundGridSectionType.SEARCH;
      obj3.key = SEARCH;
      obj3.categoryInfo = first;
      obj3.items = tmp4;
      first = [obj3];
      cResult[3] = tmp4;
      cResult[4] = first;
    }
  }
}) : (function useSearchCategories(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let items = [arg0, arg2.length, arg1];
  return noop.useMemo(() => {
    if (length.length > 0) {
      const obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: null, items: null };
      const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj2;
      obj.items = closure_1.map((sound, index) => ({ type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
      const items = [obj];
      let tmp = items;
    } else {
      tmp = closure_0;
    }
    return tmp;
  }, items);
});