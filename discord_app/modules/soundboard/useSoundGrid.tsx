// === Module 16556: createSoundItems ===

// Module 16556 (createSoundItems)
import SoundButtonOverlay from "SoundButtonOverlay" /* 4925 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4089 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import closure_10 from "handleSoundCreateOrUpdate" /* 4917 */;
import MAX_LENGTH_SOUND_NAME from "MAX_LENGTH_SOUND_NAME" /* 4919 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = arg1;
function createSoundItems(items, sortSoundsFn) {
  let arr = items;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items);
  }
  return arr.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
}
function _addSectionForPotentialSoundIds(sectionType) {
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
  const arr4 = createSoundItems(items1, sectionType.sortSoundsFn);
  if (arr4.length > 0) {
    obj = { key: null, categoryInfo: null, items: null };
    obj[0] = sectionType;
    obj = { type: null };
    obj[0] = sectionType;
    obj[1] = obj;
    obj[2] = arr4;
    sections.push(obj);
  }
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
  let memo;
  closure_15 = undefined;
  let stateFromStores3;
  let enabled;
  let topSoundsFirst;
  let stateFromStoresArray1;
  let memo1;
  let items = [sortedGuildIdsForSoundboard];
  const stateFromStores = _require(flag2[13]).useStateFromStores(items, () => sortedGuildIdsForSoundboard.getCurrentUser());
  let obj2 = _require(flag2[13]);
  let tmp4 = flag;
  const isPremiumResult = flag(flag2[14]).isPremium(stateFromStores, stateFromStores2.TIER_2);
  callback = isPremiumResult;
  let obj3 = flag(flag2[14]);
  const items1 = [stateFromStoresArray];
  let tmp7 = callback(_require(flag2[13]).useStateFromStoresArray(items1, () => {
    const items = [stateFromStoresArray.getSounds(), stateFromStoresArray.getFavorites(), stateFromStoresArray.getFrequentlyUsedSoundIds(), stateFromStoresArray.isFetching()];
    return items;
  }), 4);
  first = tmp7[0];
  closure_5 = tmp9;
  closure_6 = tmp10;
  closure_7 = tmp11;
  let obj4 = _require(flag2[13]);
  let tmp6 = stateFromStoresArray;
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
  const tmp14 = closure_6;
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
  const items6 = [tmp7[2], tmp7[1]];
  memo = first.useMemo(() => {
    const found = store.filter((arg0) => !set.has(arg0));
    return found.slice(0, 3);
  }, items6);
  let obj10 = _require(flag2[13]);
  let str = "useSoundGridNoFrequentlyUsed";
  if (memo.length > 0) {
    str = "useSoundGrid";
  }
  const tmp19 = flag(flag2[17]).useConfig({ location: str }).enabled || false;
  closure_15 = tmp19;
  let tmpResult = tmp(tmp2[13]);
  const items7 = [soundOrganizer, closure_5, tmp14];
  stateFromStores3 = tmpResult.useStateFromStores(items7, () => {
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
  const TopSoundboardSoundsMobileExperiment = tmp(tmp2[18]).TopSoundboardSoundsMobileExperiment;
  const config = TopSoundboardSoundsMobileExperiment.getConfig({ location: "useSoundGrid" });
  enabled = config.enabled;
  topSoundsFirst = config.topSoundsFirst;
  tmp4(flag2[19])(() => {
    if (enabled) {
      let id;
      if (stateFromStores3 != null) {
        id = stateFromStores3.id;
      }
      const result = guild_id(flag2[20]).maybeFetchTopSoundboardSoundsByGuild(id);
      const obj = guild_id(flag2[20]);
    }
  });
  tmpResult = tmp(tmp2[13]);
  const items8 = [tmp6];
  stateFromStoresArray1 = tmpResult.useStateFromStoresArray(items8, () => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    return stateFromStoresArray.getTopSoundboardSoundIds(id);
  });
  const items9 = [stateFromStoresArray1];
  memo1 = obj11.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
  const items10 = [sortedGuildIdsForSoundboard, first, tmp7[1], tmp19, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp7[3], isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1, enabled, topSoundsFirst];
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
      let obj13 = obj1;
      const obj18 = first;
      const tmp53 = c11;
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
        stateFromStores3(items, stateFromStores3, obj);
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
      callback(obj2);
      let tmp17 = callback;
      if (callback) {
        tmp17 = memo.length > 0;
      }
      if (tmp17) {
        const obj3 = { sections: null, guildIds: null, allSounds: null, potentialSoundIdsForSection: null, sectionType: null };
        obj3[0] = items;
        obj3[1] = tmp11;
        obj3[2] = obj2;
        obj3[3] = memo;
        obj3[4] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.FREQUENTLY_USED;
        tmp10(obj3);
      }
      if (tmp) {
        tmp = null != stateFromStores3;
      }
      if (tmp) {
        tmp = !topSoundsFirst;
      }
      if (tmp) {
        const obj4 = { allSounds: null, topSoundIds: null };
        obj4[0] = obj2;
        obj4[1] = memo1;
        stateFromStores3(items, stateFromStores3, obj4);
      }
      if (undefined !== stateFromStores1) {
        let tmp33 = c1;
        let value1 = obj2.get(tmp28.id);
        if (value1 == null) {
          value1 = [];
        }
        let tmp62Result = value1;
        if (null != soundOrganizer) {
          tmp62Result = tmp62(value1);
        }
        const mapped = tmp62Result.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        const tmp29 = value1.length < tmp14(tmp15[11]).getMaxSoundboardSlots(tmp28) && stateFromStores2;
        let tmp31 = !tmp29;
        if (!tmp29) {
          tmp31 = !tmp30;
        }
        if (!tmp31) {
          tmp31 = tmp33;
        }
        if (!tmp31) {
          const obj5 = { type: null, guild: null };
          obj5[0] = tmp14(tmp15[10]).SoundboardSoundItemType.ADD_SOUND;
          obj5[1] = tmp28;
          mapped.push(obj5);
        }
        if (tmp33) {
          tmp33 = tmp30;
        }
        if (!tmp33) {
          const obj6 = { categoryInfo: null, key: null, items: null };
          const obj7 = { type: null, guild: null, isNitroLocked: false };
          obj7[0] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.GUILD;
          obj7[1] = tmp28;
          obj6[0] = obj7;
          obj6[1] = tmp28.id;
          obj6[2] = mapped;
          items.push(obj6);
        }
        const tmp14Result = tmp14(tmp15[11]);
        const tmp61 = stateFromStores2;
      }
      if (!c11) {
        let value2 = obj2.get(c11);
        if (value2 == null) {
          value2 = stateFromStores1;
        }
        const obj8 = { key: null, categoryInfo: null, items: null };
        obj8[0] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj9 = { type: null };
        obj9[0] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.DEFAULTS;
        obj8[1] = obj9;
        const sortSoundsOldestToNewestCreationDate = tmp14(tmp15[12]).sortSoundsOldestToNewestCreationDate;
        let result1 = value2;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value2);
        }
        obj8[2] = result1.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj8);
      }
      const obj10 = { sections: null, guilds: null, currentGuildId: null, allSounds: null, hasNitro: null, sortSoundsFn: null };
      obj10[0] = items;
      obj10[1] = stateFromStoresArray;
      let id;
      if (stateFromStores1 != null) {
        id = tmp28.id;
      }
      obj10[2] = id;
      obj10[3] = obj2;
      obj10[4] = c3;
      obj10[5] = soundOrganizer;
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
      })(obj10);
      if (tmp35) {
        let value3 = obj2.get(c11);
        if (value3 == null) {
          value3 = stateFromStores1;
        }
        const obj11 = { key: null, categoryInfo: null, items: null };
        obj11[0] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj12 = { type: null };
        obj12[0] = tmp14(tmp15[10]).SoundboardSoundGridSectionType.DEFAULTS;
        obj11[1] = obj12;
        const sortSoundsOldestToNewestCreationDate2 = tmp14(tmp15[12]).sortSoundsOldestToNewestCreationDate;
        let result2 = value3;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value3);
        }
        obj11[2] = result2.map((sound, index) => ({ type: callback(table[10]).SoundboardSoundItemType.SOUND, sound, index }));
        items.push(obj11);
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
      obj13 = { categories: null, availableSounds: null, isFetching: null, soundCounts: null };
      obj13[0] = items;
      const _Array2 = Array;
      obj13[1] = Array.from(obj2.values()).flat();
      obj13[2] = closure_7;
      const obj14 = { favoriteSoundCount: null, unlockedCustomSoundCount: null, lockedCustomSoundCount: null };
      obj14[0] = closure_5.size;
      obj14[1] = c0;
      obj14[2] = c1;
      obj13[3] = obj14;
      const arr4 = Array.from(obj2.values());
      tmp10 = callback;
      tmp11 = sortedGuildIdsForSoundboard;
      const tmp13 = closure_5;
      tmp35 = c11;
    }
    return obj13;
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