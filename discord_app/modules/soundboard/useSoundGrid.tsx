// discord_app/modules/soundboard/useSoundGrid.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import handleSoundCreateOrUpdate from "SoundboardStore.tsx";
import MAX_LENGTH_SOUND_NAME from "SoundboardConstants.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

const require = fn;
function createSoundItems(items1, sortSoundsFn) {
  let arr = items1;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items1);
  }
  return arr.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
}
function _addSectionForPotentialSoundIds(sectionType) {
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  sectionType = sectionType.sectionType;
  let obj = {};
  let items = [];
  items[HermesBuiltin.arraySpread(sectionType.guildIds, 0)] = closure_9;
  while (tmp !== undefined) {
    items = allSounds.get(tmp2);
    if (items == null) {
      items = [];
    }
    function _loop(soundId) {
      potentialSoundIdsForSection = soundId;
      if (null != potentialSoundIdsForSection.find((item, index) => item === soundId.soundId)) {
        obj[soundId.soundId] = soundId;
      }
    }
    for (const item10029 of items) {
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
    obj = { key: null, categoryInfo: null, items: null };
    obj[0] = sectionType;
    obj = { type: null };
    obj[0] = sectionType;
    obj[1] = obj;
    obj[2] = arr4;
    sections.push(obj);
  }
}
({ DEFAULT_SOUND_GUILD_ID: c9, EMPTY_SOUND_LIST: c10 } = MAX_LENGTH_SOUND_NAME);
let result = require("obj132").fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

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
  closure_7 = undefined;
  let soundOrganizer;
  PremiumTypes = undefined;
  closure_15 = undefined;
  let items = [closure_7];
  const stateFromStores = _require(flag2[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = _require(flag2[11]);
  const isPremiumResult = flag(flag2[12]).isPremium(stateFromStores, PremiumTypes.TIER_2);
  const callback = isPremiumResult;
  let obj3 = flag(flag2[12]);
  const items1 = [soundOrganizer];
  const tmp3 = callback(_require(flag2[11]).useStateFromStoresArray(items1, () => {
    const items = [soundOrganizer.getSounds(), soundOrganizer.getFavorites(), soundOrganizer.getFrequentlyUsedSoundIds(), soundOrganizer.isFetching()];
    return items;
  }), 4);
  const first = tmp3[0];
  closure_5 = tmp5;
  closure_6 = tmp6;
  closure_7 = tmp7;
  let obj4 = _require(flag2[11]);
  soundOrganizer = _require(flag2[10]).useSoundOrganizer();
  let obj5 = _require(flag2[10]);
  const sortedGuildIdsForSoundboard = _require(flag2[13]).useSortedGuildIdsForSoundboard(guild_id, false);
  let obj6 = _require(flag2[13]);
  const items2 = [closure_5];
  const stateFromStoresArray = _require(flag2[11]).useStateFromStoresArray(items2, () => {
    const items = [];
    const item = sortedGuildIdsForSoundboard.forEach((item, index) => {
      const guild = closure_1_5.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let obj7 = _require(flag2[11]);
  let result = flag(flag2[12]).canUseSoundboardEverywhere(stateFromStores);
  PremiumTypes = result;
  let obj8 = flag(flag2[12]);
  const items3 = [closure_5];
  const stateFromStores1 = _require(flag2[11]).useStateFromStores(items3, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  let obj9 = _require(flag2[11]);
  const items4 = [closure_6];
  const items5 = [stateFromStores1];
  const stateFromStores2 = _require(flag2[11]).useStateFromStores(items4, () => guild_id(flag2[14]).getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
  const items6 = [tmp3[2], tmp3[1]];
  const memo = first.useMemo(() => {
    const found = closure_6.filter((item, index) => !set.has(item));
    return found.slice(0, 3);
  }, items6);
  let obj10 = _require(flag2[11]);
  let obj11 = first;
  let str = "useSoundGridNoFrequentlyUsed";
  if (memo.length > 0) {
    str = "useSoundGrid";
  }
  const tmp14 = flag(flag2[15]).useConfig({ location: str }).enabled || false;
  closure_15 = tmp14;
  const items7 = [sortedGuildIdsForSoundboard, first, tmp3[1], tmp14, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp3[3], isPremiumResult, soundOrganizer, memo];
  return obj11.useMemo(() => {
    c0 = 0;
    c1 = 0;
    let items = [];
    if (flag2) {
      let value = first.get(sortedGuildIdsForSoundboard);
      if (value == null) {
        value = stateFromStoresArray;
      }
      let obj = { key: null, categoryInfo: null, items: null };
      obj[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
      obj = { type: null };
      obj[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
      obj[1] = obj;
      const sortSoundsOldestToNewestCreationDate3 = guild_id(flag2[10]).sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      obj[2] = result.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
      items.push(obj);
      obj1 = { categories: null, availableSounds: null, isFetching: null, soundCounts: null };
      obj1[0] = items;
      value = first.get(sortedGuildIdsForSoundboard);
      if (value == null) {
        value = stateFromStoresArray;
      }
      obj1[1] = value;
      obj1[2] = closure_7;
      obj1[3] = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj11 = obj1;
    } else {
      obj = { sections: null, guildIds: null, allSounds: null, potentialSoundIdsForSection: null, sectionType: null, sortSoundsFn: null };
      obj[0] = items;
      obj[1] = sortedGuildIdsForSoundboard;
      obj1 = first;
      obj[2] = first;
      const _Array = Array;
      obj[3] = Array.from(size);
      obj[4] = guild_id(flag2[8]).SoundboardSoundGridSectionType.FAVORITES;
      obj[5] = guild_id(flag2[10]).sortSoundsOldestToNewestCreationDate;
      stateFromStores2(obj);
      let tmp8 = closure_15;
      if (closure_15) {
        tmp8 = memo.length > 0;
      }
      if (tmp8) {
        const obj2 = { sections: null, guildIds: null, allSounds: null, potentialSoundIdsForSection: null, sectionType: null };
        obj2[0] = items;
        obj2[1] = sortedGuildIdsForSoundboard;
        obj2[2] = obj1;
        obj2[3] = memo;
        obj2[4] = guild_id(flag2[8]).SoundboardSoundGridSectionType.FREQUENTLY_USED;
        stateFromStores2(obj2);
      }
      if (undefined !== stateFromStores1) {
        let tmp17 = c1;
        let value1 = obj1.get(stateFromStores1.id);
        if (value1 == null) {
          value1 = [];
        }
        let tmp46Result = value1;
        if (null != soundOrganizer) {
          tmp46Result = soundOrganizer(value1);
        }
        const mapped = tmp46Result.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
        const tmp13 = value1.length < guild_id(flag2[9]).getMaxSoundboardSlots(stateFromStores1) && stateFromStores2;
        let tmp15 = !tmp13;
        if (!tmp13) {
          tmp15 = !tmp14;
        }
        if (!tmp15) {
          tmp15 = tmp17;
        }
        if (!tmp15) {
          const obj3 = { type: null, guild: null };
          obj3[0] = guild_id(flag2[8]).SoundboardSoundItemType.ADD_SOUND;
          obj3[1] = stateFromStores1;
          mapped.push(obj3);
        }
        if (tmp17) {
          tmp17 = tmp14;
        }
        if (!tmp17) {
          const obj4 = { categoryInfo: null, key: null, items: null };
          const obj5 = { type: null, guild: null, isNitroLocked: false };
          obj5[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.GUILD;
          obj5[1] = stateFromStores1;
          obj4[0] = obj5;
          obj4[1] = stateFromStores1.id;
          obj4[2] = mapped;
          items.push(obj4);
        }
        const tmp5Result = guild_id(flag2[9]);
      }
      if (!c11) {
        let value2 = obj1.get(sortedGuildIdsForSoundboard);
        if (value2 == null) {
          value2 = stateFromStoresArray;
        }
        const obj6 = { key: null, categoryInfo: null, items: null };
        obj6[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj7 = { type: null };
        obj7[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
        obj6[1] = obj7;
        const sortSoundsOldestToNewestCreationDate = guild_id(flag2[10]).sortSoundsOldestToNewestCreationDate;
        let result1 = value2;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value2);
        }
        obj6[2] = result1.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
        items.push(obj6);
      }
      const obj8 = { sections: null, guilds: null, currentGuildId: null, allSounds: null, hasNitro: null, sortSoundsFn: null };
      obj8[0] = items;
      obj8[1] = stateFromStoresArray;
      let id;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      obj8[2] = id;
      obj8[3] = obj1;
      obj8[4] = c3;
      obj8[5] = soundOrganizer;
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
            let tmp9Result = callback(items, sortSoundsFn);
            if (tmp9Result.length > 0) {
              let obj = { type: null, guild: null, isNitroLocked: null };
              obj[0] = v0(table[8]).SoundboardSoundGridSectionType.GUILD;
              obj[1] = tmp2;
              obj[2] = !hasNitro;
              obj[0] = obj;
              obj[1] = tmp2.id;
              obj[2] = tmp3;
              let arr = sections.push(obj);
            }
          }
          continue;
        }
      })(obj8);
      if (c11) {
        let value3 = obj1.get(sortedGuildIdsForSoundboard);
        if (value3 == null) {
          value3 = stateFromStoresArray;
        }
        const obj9 = { key: null, categoryInfo: null, items: null };
        obj9[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
        const obj10 = { type: null };
        obj10[0] = guild_id(flag2[8]).SoundboardSoundGridSectionType.DEFAULTS;
        obj9[1] = obj10;
        const sortSoundsOldestToNewestCreationDate2 = guild_id(flag2[10]).sortSoundsOldestToNewestCreationDate;
        let result2 = value3;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value3);
        }
        obj9[2] = result2.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
        items.push(obj9);
      }
      const item = items.forEach((item, index) => {
        if (item.categoryInfo.type === v0(flag2[8]).SoundboardSoundGridSectionType.GUILD) {
          if (item.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + item.items.length;
          } else {
            closure_0 = closure_0 + item.items.length;
          }
        }
      });
      obj11 = { categories: null, availableSounds: null, isFetching: null, soundCounts: null };
      obj11[0] = items;
      const _Array2 = Array;
      obj11[1] = Array.from(obj1.values()).flat();
      obj11[2] = closure_7;
      const obj12 = { favoriteSoundCount: null, unlockedCustomSoundCount: null, lockedCustomSoundCount: null };
      obj12[0] = size.size;
      obj12[1] = c0;
      obj12[2] = c1;
      obj11[3] = obj12;
      const arr4 = Array.from(obj1.values());
    }
    return obj11;
  }, items7);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  closure_0 = categories;
  closure_1 = arg1;
  closure_2 = arg2;
  let items = [categories, arg2.length, arg1];
  return React.useMemo(() => {
    if (length.length > 0) {
      let obj = { key: null, categoryInfo: null, items: null };
      obj[0] = categories(length[8]).SoundboardSoundGridSectionType.SEARCH;
      obj = { type: null };
      obj[0] = categories(length[8]).SoundboardSoundGridSectionType.SEARCH;
      obj[1] = obj;
      obj[2] = closure_1.map((item, index) => ({ type: callback(table[8]).SoundboardSoundItemType.SOUND, sound: item, index }));
      const items = [obj];
      let tmp = items;
    } else {
      tmp = categories;
    }
    return tmp;
  }, items);
};