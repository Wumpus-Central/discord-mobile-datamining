// === Module 17526: useSoundGrid ===

// Module 17526 (useSoundGrid)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4649 */;
import SoundboardTypes from "SoundboardTypes" /* 5232 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9759 */;
import useSoundOrganizer from "useSoundOrganizer" /* 17527 */;
import TopSoundboardSoundsActionCreators from "TopSoundboardSoundsActionCreators" /* 17530 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5224 */;

const require = globalThis.__r;

require = fn;
function createSoundItems(items, fn) {
  let arr = items;
  if (null != fn) {
    arr = fn(items);
  }
  return arr.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
}
function addTopSoundsSection(items, stateFromStores3, arg2) {
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
    const obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: null, items: null };
    const obj3 = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: stateFromStores3 };
    obj2.categoryInfo = obj3;
    obj2.items = createSoundItems(items);
    items.push(obj2);
  }
}
const SoundboardConstants = fn(5226);
({ DEFAULT_SOUND_GUILD_ID: closure_11, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default function useSoundGrid(guild_id) {
  _require = guild_id;
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
  let sortedGuildIdsForSoundboard;
  let stateFromStoresArray;
  let stateFromStores2;
  let items = [sortedGuildIdsForSoundboard];
  const stateFromStores = require("initialize").useStateFromStores(items, () => sortedGuildIdsForSoundboard.getCurrentUser());
  let obj2 = require("initialize");
  const isPremiumResult = flag(flag2[14]).isPremium(stateFromStores, stateFromStores2.TIER_2);
  _slicedToArray = isPremiumResult;
  let obj3 = flag(flag2[14]);
  let items1 = [stateFromStoresArray];
  let tmp3 = _slicedToArray(require("initialize").useStateFromStoresArray(items1, () => {
    const items = [stateFromStoresArray.getSounds(), stateFromStoresArray.getFavorites(), stateFromStoresArray.getFrequentlyUsedSoundIds(), stateFromStoresArray.isFetching()];
    return items;
  }), 4);
  const allSounds = tmp3[0];
  let channel = tmp5;
  closure_6 = tmp6;
  const isFetching = tmp7;
  let obj4 = require("initialize");
  const soundOrganizer = require("useSoundOrganizer").useSoundOrganizer();
  let obj5 = require("useSoundOrganizer");
  sortedGuildIdsForSoundboard = require("useSortedGuildIdsForSoundboard").useSortedGuildIdsForSoundboard(guild_id, false);
  let obj6 = require("useSortedGuildIdsForSoundboard");
  let items2 = [closure_6];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
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
  let result = flag(flag2[14]).canUseSoundboardEverywhere(stateFromStores);
  c11 = result;
  let obj8 = flag(flag2[14]);
  const items3 = [closure_6];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let guild_id;
    if (unlockedCustomSoundCount != null) {
      guild_id = unlockedCustomSoundCount.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  let obj9 = require("initialize");
  const items4 = [isFetching];
  const items5 = [stateFromStores1];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => useManageResourcePermissions.getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
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
    let guild;
    if (null != guild_id) {
      guild = closure_6.getGuild(channel.guild_id);
    }
    return guild;
  });
  const TopSoundboardSoundsMobileExperiment = require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
  const config = TopSoundboardSoundsMobileExperiment.getConfig({ location: "useSoundGrid" });
  const enabled = config.enabled;
  const topSoundsFirst = config.topSoundsFirst;
  flag(flag2[18])(() => {
    if (enabled) {
      let id;
      if (stateFromStores3 != null) {
        id = stateFromStores3.id;
      }
      const result = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild(id);
    }
  });
  let obj11 = require("initialize");
  const items8 = [stateFromStoresArray];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items8, () => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    return SoundboardStore.getTopSoundboardSoundIds(id);
  });
  const items9 = [stateFromStoresArray1];
  const memo1 = allSounds.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
  const items10 = [sortedGuildIdsForSoundboard, allSounds, tmp3[1], false, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp3[3], isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1, enabled, topSoundsFirst];
  return allSounds.useMemo(() => {
    unlockedCustomSoundCount = 0;
    lockedCustomSoundCount = 0;
    let items = [];
    if (flag2) {
      value = allSounds.get(closure_2_11);
      if (value == null) {
        value = closure_2_12;
      }
      let obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
      const obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      obj2.categoryInfo = obj4;
      const sortSoundsOldestToNewestCreationDate3 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      obj2.items = result.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
      items.push(obj2);
      const obj5 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      let value5 = allSounds.get(closure_2_11);
      if (value5 == null) {
        value5 = closure_2_12;
      }
      obj5.availableSounds = value5;
      obj5.isFetching = isFetching;
      obj5.soundCounts = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj16 = obj5;
    } else {
      let tmp = enabled;
      let tmp2 = enabled;
      if (enabled) {
        tmp2 = null != stateFromStores3;
      }
      if (tmp2) {
        tmp2 = topSoundsFirst;
      }
      if (tmp2) {
        let obj = { allSounds, topSoundIds: memo1 };
        addTopSoundsSection(items, stateFromStores3, obj);
      }
      const obj6 = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds, potentialSoundIdsForSection: null, sectionType: null, sortSoundsFn: null };
      const _Array = Array;
      obj6.potentialSoundIdsForSection = Array.from(size);
      obj6.sectionType = SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES;
      obj6.sortSoundsFn = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      (function _addSectionForPotentialSoundIds(sectionType) {
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
        const arr4 = stateFromStores3(items1, sectionType.sortSoundsFn);
        if (arr4.length > 0) {
          const obj2 = { key: sectionType, categoryInfo: null, items: null };
          const obj3 = { type: sectionType };
          obj2.categoryInfo = obj3;
          obj2.items = arr4;
          sections.push(obj2);
        }
      })(obj6);
      if (tmp) {
        tmp = null != stateFromStores3;
      }
      if (tmp) {
        tmp = !topSoundsFirst;
      }
      if (tmp) {
        const obj7 = { allSounds, topSoundIds: memo1 };
        addTopSoundsSection(items, stateFromStores3, obj7);
      }
      if (undefined !== stateFromStores1) {
        let tmp28 = flag;
        let value6 = allSounds.get(stateFromStores1.id);
        if (value6 == null) {
          value6 = [];
        }
        let tmp57Result = value6;
        if (null != soundOrganizer) {
          tmp57Result = soundOrganizer(value6);
        }
        const mapped = tmp57Result.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
        const tmp24 = value6.length < GuildBoostingUtils.getMaxSoundboardSlots(stateFromStores1) && stateFromStores2;
        let tmp26 = !tmp24;
        if (!tmp24) {
          tmp26 = !tmp25;
        }
        if (!tmp26) {
          tmp26 = tmp28;
        }
        if (!tmp26) {
          const obj8 = { type: SoundboardTypes.SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
          mapped.push(obj8);
        }
        if (tmp28) {
          tmp28 = tmp25;
        }
        if (!tmp28) {
          const obj9 = { categoryInfo: null, key: null, items: null };
          const obj10 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: stateFromStores1, isNitroLocked: false };
          obj9.categoryInfo = obj10;
          obj9.key = stateFromStores1.id;
          obj9.items = mapped;
          items.push(obj9);
        }
        const tmp13Result = GuildBoostingUtils;
      }
      if (!c11) {
        let value7 = allSounds.get(closure_2_11);
        if (value7 == null) {
          value7 = closure_2_12;
        }
        const obj11 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj12 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        obj11.categoryInfo = obj12;
        const sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
        let result1 = value7;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value7);
        }
        obj11.items = result1.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj11);
      }
      const obj13 = { sections: items, guilds: stateFromStoresArray, currentGuildId: null, allSounds: null, hasNitro: null, sortSoundsFn: null };
      let id;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      obj13.currentGuildId = id;
      obj13.allSounds = allSounds;
      obj13.hasNitro = hasNitro;
      obj13.sortSoundsFn = soundOrganizer;
      (function addGuildsSections(arg0) {
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
            let tmp9Result = stateFromStores3(items, sortSoundsFn);
            if (tmp9Result.length > 0) {
              let obj = { categoryInfo: null, key: null, items: null };
              let obj2 = { type: closure_0(flag2[10]).SoundboardSoundGridSectionType.GUILD, guild: null, isNitroLocked: null };
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
      })(obj13);
      if (c11) {
        let value8 = allSounds.get(closure_2_11);
        if (value8 == null) {
          value8 = closure_2_12;
        }
        const obj14 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj15 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        obj14.categoryInfo = obj15;
        const sortSoundsOldestToNewestCreationDate2 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
        let result2 = value8;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value8);
        }
        obj14.items = result2.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj14);
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
      obj16 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      const _Array2 = Array;
      obj16.availableSounds = Array.from(allSounds.values()).flat();
      obj16.isFetching = isFetching;
      const obj18 = { favoriteSoundCount: size.size, unlockedCustomSoundCount, lockedCustomSoundCount };
      obj16.soundCounts = obj18;
      const arr6 = Array.from(allSounds.values());
    }
    return obj16;
  }, items10);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  closure_0 = categories;
  closure_1 = arg1;
  let items = [categories, arg2.length, arg1];
  return noop.useMemo(() => {
    if (length.length > 0) {
      const obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: null, items: null };
      const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj2;
      obj.items = closure_1.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
      const items = [obj];
      let tmp = items;
    } else {
      tmp = closure_0;
    }
    return tmp;
  }, items);
};