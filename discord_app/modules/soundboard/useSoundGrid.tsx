// === Module 16644: createSoundItems ===

// Module 16644 (createSoundItems)
import SoundButtonOverlay from "SoundButtonOverlay" /* 4973 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "getUncachedChannelPermissions" /* 4121 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import closure_10 from "handleSoundCreateOrUpdate" /* 4965 */;
import MAX_LENGTH_SOUND_NAME from "MAX_LENGTH_SOUND_NAME" /* 4967 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = arg1;
function createSoundItems(items) {
  let arr = items;
  if (null != arg1) {
    arr = arg1(items);
  }
  return arr.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
}
function addTopSoundsSection(arr, id) {
  ({ allSounds, topSoundIds } = arg2);
  let obj = {};
  let items = allSounds.get(id.id);
  if (items == null) {
    items = [];
  }
  for (const item10014 of items) {
    obj[item10014.soundId] = item10014;
    continue;
  }
  items = [];
  for (const item10022 of topSoundIds) {
    let tmp = obj[item10022];
    if (null != tmp) {
      let tmp3 = tmp;
      arr = items.push(tmp2);
    }
    continue;
  }
  if (0 !== items.length) {
    obj = { key: null, categoryInfo: null, items: null };
    obj[0] = SoundButtonOverlay.SoundboardSoundGridSectionType.TOP_SOUNDS;
    obj = { type: null, guild: null };
    obj[0] = SoundButtonOverlay.SoundboardSoundGridSectionType.TOP_SOUNDS;
    obj[1] = id;
    obj[1] = obj;
    obj[2] = createSoundItems(items);
    arr.push(obj);
  }
}
({ DEFAULT_SOUND_GUILD_ID: unpackModuleId, EMPTY_SOUND_LIST: closure_12 } = MAX_LENGTH_SOUND_NAME);
let result = require("set").fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default function useSoundGrid(guild_id) {
  const _require = guild_id;
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
  let callback;
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let soundOrganizer;
  let sortedGuildIdsForSoundboard;
  let stateFromStoresArray;
  c11 = undefined;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  let enabled;
  let topSoundsFirst;
  let stateFromStoresArray1;
  let memo1;
  let items = [sortedGuildIdsForSoundboard];
  const stateFromStores = _require(flag2[13]).useStateFromStores(items, () => sortedGuildIdsForSoundboard.getCurrentUser());
  let obj2 = _require(flag2[13]);
  const isPremiumResult = flag(flag2[14]).isPremium(stateFromStores, stateFromStores2.TIER_2);
  callback = isPremiumResult;
  let obj3 = flag(flag2[14]);
  let items1 = [stateFromStoresArray];
  let tmp3 = callback(_require(flag2[13]).useStateFromStoresArray(items1, () => {
    const items = [stateFromStoresArray.getSounds(), stateFromStoresArray.getFavorites(), stateFromStoresArray.getFrequentlyUsedSoundIds(), stateFromStoresArray.isFetching()];
    return items;
  }), 4);
  first = tmp3[0];
  closure_5 = tmp5;
  closure_6 = tmp6;
  closure_7 = tmp7;
  let obj4 = _require(flag2[13]);
  soundOrganizer = _require(flag2[12]).useSoundOrganizer();
  let obj5 = _require(flag2[12]);
  sortedGuildIdsForSoundboard = _require(flag2[15]).useSortedGuildIdsForSoundboard(guild_id, false);
  let obj6 = _require(flag2[15]);
  const items2 = [closure_6];
  stateFromStoresArray = _require(flag2[13]).useStateFromStoresArray(items2, () => {
    const items = [];
    const item = sortedGuildIdsForSoundboard.forEach((arg0) => {
      const guild = closure_1_6.getGuild(arg0);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let obj7 = _require(flag2[13]);
  let result = flag(flag2[14]).canUseSoundboardEverywhere(stateFromStores);
  c11 = result;
  let obj8 = flag(flag2[14]);
  const items3 = [closure_6];
  stateFromStores1 = _require(flag2[13]).useStateFromStores(items3, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return store.getGuild(guild_id);
  });
  let obj9 = _require(flag2[13]);
  const items4 = [closure_7];
  const items5 = [stateFromStores1];
  stateFromStores2 = _require(flag2[13]).useStateFromStores(items4, () => guild_id(flag2[16]).getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
  const items6 = [tmp3[2], tmp3[1]];
  const memo = first.useMemo(() => {
    const found = store.filter((arg0) => !set.has(arg0));
    return found.slice(0, 3);
  }, items6);
  let obj10 = _require(flag2[13]);
  const items7 = [soundOrganizer, closure_5, closure_6];
  stateFromStores3 = _require(flag2[13]).useStateFromStores(items7, () => {
    const voiceChannelId = soundOrganizer.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let guild;
    if (null != guild_id) {
      guild = store.getGuild(channel.guild_id);
    }
    return guild;
  });
  const TopSoundboardSoundsMobileExperiment = _require(flag2[17]).TopSoundboardSoundsMobileExperiment;
  const config = TopSoundboardSoundsMobileExperiment.getConfig({ location: "useSoundGrid" });
  enabled = config.enabled;
  topSoundsFirst = config.topSoundsFirst;
  flag(flag2[18])(() => {
    if (enabled) {
      let id;
      if (stateFromStores3 != null) {
        id = stateFromStores3.id;
      }
      const result = guild_id(flag2[19]).maybeFetchTopSoundboardSoundsByGuild(id);
      const obj = guild_id(flag2[19]);
    }
  });
  let obj11 = _require(flag2[13]);
  const items8 = [stateFromStoresArray];
  stateFromStoresArray1 = _require(flag2[13]).useStateFromStoresArray(items8, () => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    return stateFromStoresArray.getTopSoundboardSoundIds(id);
  });
  const items9 = [stateFromStoresArray1];
  memo1 = first.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
  const items10 = [sortedGuildIdsForSoundboard, first, tmp3[1], false, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp3[3], isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1, enabled, topSoundsFirst];
  return first.useMemo(() => {
    c0 = 0;
    c1 = 0;
    let items = [];
    if (flag2) {
      let value = first.get(c11);
      if (value == null) {
        value = stateFromStores1;
      }
      let obj = { key: null, categoryInfo: null, items: null };
      obj[0] = guild_id(flag2[10]).SoundboardSoundGridSectionType.DEFAULTS;
      obj = { type: null };
      obj[0] = guild_id(flag2[10]).SoundboardSoundGridSectionType.DEFAULTS;
      obj[1] = obj;
      const sortSoundsOldestToNewestCreationDate3 = guild_id(flag2[12]).sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      obj[2] = result.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
      items.push(obj);
      obj1 = { categories: null, availableSounds: null, isFetching: null, soundCounts: null };
      obj1[0] = items;
      value = first.get(c11);
      if (value == null) {
        value = stateFromStores1;
      }
      obj1[1] = value;
      obj1[2] = closure_7;
      obj1[3] = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj12 = obj1;
      const obj17 = first;
      const tmp48 = c11;
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
        obj = { allSounds: null, topSoundIds: null };
        obj[0] = first;
        obj[1] = memo1;
        enabled(items, stateFromStores3, obj);
      }
      let obj2 = { sections: null, guildIds: null, allSounds: null, potentialSoundIdsForSection: null, sectionType: null, sortSoundsFn: null };
      obj2[0] = items;
      obj2[1] = sortedGuildIdsForSoundboard;
      obj2 = first;
      obj2[2] = first;
      const _Array = Array;
      obj2[3] = Array.from(closure_5);
      obj2[4] = guild_id(flag2[10]).SoundboardSoundGridSectionType.FAVORITES;
      obj2[5] = guild_id(flag2[12]).sortSoundsOldestToNewestCreationDate;
      (function _addSectionForPotentialSoundIds(sectionType) {
        ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
        sectionType = sectionType.sectionType;
        let obj = {};
        let items = [];
        items[HermesBuiltin.arraySpread(sectionType.guildIds, 0)] = closure_11;
        while (tmp !== undefined) {
          items = allSounds.get(tmp2);
          if (items == null) {
            items = [];
          }
          function _loop(soundId) {
            potentialSoundIdsForSection = soundId;
            if (null != potentialSoundIdsForSection.find((arg0) => arg0 === soundId.soundId)) {
              obj[soundId.soundId] = soundId;
            }
          }
          let tmp3 = items;
          let tmp4 = items;
          for (const item10029 of items) {
            let tmp5 = _loop;
            let _loopResult = _loop(item10029);
            continue;
          }
          continue;
        }
        const items1 = [];
        for (const item10039 of potentialSoundIdsForSection) {
          let tmp7 = obj[item10039];
          if (null != tmp7) {
            let tmp9 = tmp7;
            let arr = items1.push(tmp8);
          }
          continue;
        }
        const arr4 = callback(items1, sectionType.sortSoundsFn);
        if (arr4.length > 0) {
          obj = { key: null, categoryInfo: null, items: null };
          obj[0] = sectionType;
          obj = { type: null };
          obj[0] = sectionType;
          obj[1] = obj;
          obj[2] = arr4;
          sections.push(obj);
        }
      })(obj2);
      if (tmp) {
        tmp = null != stateFromStores3;
      }
      if (tmp) {
        tmp = !topSoundsFirst;
      }
      if (tmp) {
        const obj3 = { allSounds: null, topSoundIds: null };
        obj3[0] = obj2;
        obj3[1] = memo1;
        enabled(items, stateFromStores3, obj3);
      }
      if (undefined !== stateFromStores1) {
        let tmp28 = c1;
        let value1 = obj2.get(tmp23.id);
        if (value1 == null) {
          value1 = [];
        }
        let tmp57Result = value1;
        if (null != soundOrganizer) {
          tmp57Result = tmp57(value1);
        }
        const mapped = tmp57Result.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        const tmp24 = value1.length < tmp13(tmp14[11]).getMaxSoundboardSlots(tmp23) && stateFromStores2;
        let tmp26 = !tmp24;
        if (!tmp24) {
          tmp26 = !tmp25;
        }
        if (!tmp26) {
          tmp26 = tmp28;
        }
        if (!tmp26) {
          const obj4 = { type: null, guild: null };
          obj4[0] = tmp13(tmp14[10]).SoundboardSoundItemType.ADD_SOUND;
          obj4[1] = tmp23;
          mapped.push(obj4);
        }
        if (tmp28) {
          tmp28 = tmp25;
        }
        if (!tmp28) {
          const obj5 = { categoryInfo: null, key: null, items: null };
          const obj6 = { type: null, guild: null, isNitroLocked: false };
          obj6[0] = tmp13(tmp14[10]).SoundboardSoundGridSectionType.GUILD;
          obj6[1] = tmp23;
          obj5[0] = obj6;
          obj5[1] = tmp23.id;
          obj5[2] = mapped;
          items.push(obj5);
        }
        const tmp13Result = tmp13(tmp14[11]);
        const tmp56 = stateFromStores2;
      }
      if (!c11) {
        let value2 = obj2.get(c11);
        if (value2 == null) {
          value2 = stateFromStores1;
        }
        const obj7 = { key: null, categoryInfo: null, items: null };
        obj7[0] = tmp13(tmp14[10]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj8 = { type: null };
        obj8[0] = tmp13(tmp14[10]).SoundboardSoundGridSectionType.DEFAULTS;
        obj7[1] = obj8;
        const sortSoundsOldestToNewestCreationDate = tmp13(tmp14[12]).sortSoundsOldestToNewestCreationDate;
        let result1 = value2;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value2);
        }
        obj7[2] = result1.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj7);
      }
      const obj9 = { sections: null, guilds: null, currentGuildId: null, allSounds: null, hasNitro: null, sortSoundsFn: null };
      obj9[0] = items;
      obj9[1] = stateFromStoresArray;
      let id;
      if (stateFromStores1 != null) {
        id = tmp23.id;
      }
      obj9[2] = id;
      obj9[3] = obj2;
      obj9[4] = c3;
      obj9[5] = soundOrganizer;
      (function addGuildsSections(arg0) {
        ({ sections, guilds, allSounds } = arg0);
        ({ currentGuildId, hasNitro, sortSoundsFn } = arg0);
        const iter = guilds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (nextResult.id !== currentGuildId) {
            let tmp10 = nextResult;
            let tmp9 = closure_14;
            let items = allSounds.get(tmp2.id);
            if (items == null) {
              items = [];
            }
            let tmp9Result = tmp9(items, sortSoundsFn);
            if (tmp9Result.length > 0) {
              let obj = { categoryInfo: null, key: null, items: null };
              obj = { type: null, guild: null, isNitroLocked: null };
              let tmp4 = v0;
              let tmp5 = table;
              obj[0] = v0(table[10]).SoundboardSoundGridSectionType.GUILD;
              let tmp6 = nextResult;
              obj[1] = tmp2;
              obj[2] = !hasNitro;
              obj[0] = obj;
              obj[1] = tmp2.id;
              let tmp7 = tmp9Result;
              obj[2] = tmp3;
              let arr = sections.push(obj);
            }
          }
          continue;
        }
      })(obj9);
      if (tmp30) {
        let value3 = obj2.get(c11);
        if (value3 == null) {
          value3 = stateFromStores1;
        }
        const obj10 = { key: null, categoryInfo: null, items: null };
        obj10[0] = tmp13(tmp14[10]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj11 = { type: null };
        obj11[0] = tmp13(tmp14[10]).SoundboardSoundGridSectionType.DEFAULTS;
        obj10[1] = obj11;
        const sortSoundsOldestToNewestCreationDate2 = tmp13(tmp14[12]).sortSoundsOldestToNewestCreationDate;
        let result2 = value3;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value3);
        }
        obj10[2] = result2.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj10);
      }
      const item = items.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === v0(closure_1_2[10]).SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + categoryInfo.items.length;
          } else {
            closure_0 = closure_0 + categoryInfo.items.length;
          }
        }
      });
      obj12 = { categories: null, availableSounds: null, isFetching: null, soundCounts: null };
      obj12[0] = items;
      const _Array2 = Array;
      obj12[1] = Array.from(obj2.values()).flat();
      obj12[2] = closure_7;
      const obj13 = { favoriteSoundCount: null, unlockedCustomSoundCount: null, lockedCustomSoundCount: null };
      obj13[0] = closure_5.size;
      obj13[1] = c0;
      obj13[2] = c1;
      obj12[3] = obj13;
      let arr4 = Array.from(obj2.values());
      const tmp12 = closure_5;
      tmp30 = c11;
    }
    return obj12;
  }, items10);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  closure_0 = categories;
  closure_1 = arg1;
  closure_2 = arg2;
  let items = [categories, arg2.length, arg1];
  return React.useMemo(() => {
    if (length.length > 0) {
      let obj = { key: null, categoryInfo: null, items: null };
      obj[0] = categories(length[10]).SoundboardSoundGridSectionType.SEARCH;
      obj = { type: null };
      obj[0] = categories(length[10]).SoundboardSoundGridSectionType.SEARCH;
      obj[1] = obj;
      obj[2] = closure_1.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
      const items = [obj];
      let tmp = items;
    } else {
      tmp = categories;
    }
    return tmp;
  }, items);
};