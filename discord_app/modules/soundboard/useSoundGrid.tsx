// discord_app/modules/soundboard/useSoundGrid.tsx
import SoundboardTypes from "SoundboardTypes.tsx";
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import useSoundOrganizer from "useSoundOrganizer.tsx";
import TopSoundboardSoundsActionCreators from "top_sounds/TopSoundboardSoundsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SoundboardStore from "SoundboardStore.tsx";

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
  let obj = {};
  items = allSounds.get(stateFromStores3.id);
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
      let arr = items.push(tmp2);
    }
    continue;
  }
  if (0 !== items.length) {
    obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: null, items: null };
    obj = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: stateFromStores3 };
    obj.categoryInfo = obj;
    obj.items = createSoundItems(items);
    items.push(obj);
  }
}
const SoundboardConstants = fn(5014);
({ DEFAULT_SOUND_GUILD_ID: closure_11, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = fn(1373).PremiumTypes;
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
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    sortedGuildIdsForSoundboard.getCurrentUser(),
  );
  let obj2 = require("initialize");
  const isPremiumResult = flag(flag2[14]).isPremium(stateFromStores, stateFromStores2.TIER_2);
  _slicedToArray = isPremiumResult;
  let obj3 = flag(flag2[14]);
  let items1 = [stateFromStoresArray];
  let tmp3 = _slicedToArray(
    require("initialize").useStateFromStoresArray(items1, () => {
      const items = [
        stateFromStoresArray.getSounds(),
        stateFromStoresArray.getFavorites(),
        stateFromStoresArray.getFrequentlyUsedSoundIds(),
        stateFromStoresArray.isFetching(),
      ];
      return items;
    }),
    4,
  );
  const allSounds = tmp3[0];
  let channel = tmp5;
  closure_6 = tmp6;
  const isFetching = tmp7;
  let obj4 = require("initialize");
  const soundOrganizer = require("useSoundOrganizer").useSoundOrganizer();
  let obj5 = require("useSoundOrganizer");
  sortedGuildIdsForSoundboard = require("useSortedGuildIdsForSoundboard").useSortedGuildIdsForSoundboard(
    guild_id,
    false,
  );
  let obj6 = require("useSortedGuildIdsForSoundboard");
  const items2 = [closure_6];
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
  stateFromStores2 = require("initialize").useStateFromStores(
    items4,
    () => useManageResourcePermissions.getManageResourcePermissions(stateFromStores1).canCreateExpressions,
    items5,
  );
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
  const TopSoundboardSoundsMobileExperiment =
    require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
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
  const items10 = [
    sortedGuildIdsForSoundboard,
    allSounds,
    tmp3[1],
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
  ];
  return allSounds.useMemo(() => {
    unlockedCustomSoundCount = 0;
    lockedCustomSoundCount = 0;
    let items = [];
    if (flag2) {
      value = allSounds.get(closure_2_11);
      if (value == null) {
        value = closure_2_12;
      }
      let obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
      obj = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      obj.categoryInfo = obj;
      const sortSoundsOldestToNewestCreationDate3 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      obj.items = result.map((sound, index) => ({
        type: categories(length[10]).SoundboardSoundItemType.SOUND,
        sound,
        index,
      }));
      items.push(obj);
      const obj1 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      value = allSounds.get(closure_2_11);
      if (value == null) {
        value = closure_2_12;
      }
      obj1.availableSounds = value;
      obj1.isFetching = isFetching;
      obj1.soundCounts = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj12 = obj1;
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
        obj = { allSounds, topSoundIds: memo1 };
        addTopSoundsSection(items, stateFromStores3, obj);
      }
      let obj2 = {
        sections: items,
        guildIds: sortedGuildIdsForSoundboard,
        allSounds: null,
        potentialSoundIdsForSection: null,
        sectionType: null,
        sortSoundsFn: null,
      };
      obj2 = allSounds;
      obj2.allSounds = allSounds;
      const _Array = Array;
      obj2.potentialSoundIdsForSection = Array.from(size);
      obj2.sectionType = SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES;
      obj2.sortSoundsFn = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      (function _addSectionForPotentialSoundIds(sectionType) {
        ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
        sectionType = sectionType.sectionType;
        let categoryInfo = {};
        let items = [];
        items[HermesBuiltin.arraySpread(sectionType.guildIds, 0)] = closure_1_11;
        while (tmp !== undefined) {
          items = allSounds.get(tmp2);
          if (items == null) {
            items = [];
          }
          function _loop(soundId) {
            if (null != potentialSoundIdsForSection.find((item) => item === soundId.soundId)) {
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
          let tmp7 = categoryInfo[item10039];
          if (null != tmp7) {
            let arr = items1.push(tmp8);
          }
          continue;
        }
        const arr4 = stateFromStores3(items1, sectionType.sortSoundsFn);
        if (arr4.length > 0) {
          categoryInfo = { key: sectionType, categoryInfo: null, items: null };
          categoryInfo = { type: sectionType };
          categoryInfo.categoryInfo = categoryInfo;
          categoryInfo.items = arr4;
          sections.push(categoryInfo);
        }
      })(obj2);
      if (tmp) {
        tmp = null != stateFromStores3;
      }
      if (tmp) {
        tmp = !topSoundsFirst;
      }
      if (tmp) {
        const obj3 = { allSounds: obj2, topSoundIds: memo1 };
        addTopSoundsSection(items, stateFromStores3, obj3);
      }
      if (undefined !== stateFromStores1) {
        let tmp28 = flag;
        let value1 = obj2.get(tmp23.id);
        if (value1 == null) {
          value1 = [];
        }
        let tmp57Result = value1;
        if (null != soundOrganizer) {
          tmp57Result = tmp57(value1);
        }
        const mapped = tmp57Result.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        const tmp24 = value1.length < tmp13(4454).getMaxSoundboardSlots(tmp23) && stateFromStores2;
        let tmp26 = !tmp24;
        if (!tmp24) {
          tmp26 = !tmp25;
        }
        if (!tmp26) {
          tmp26 = tmp28;
        }
        if (!tmp26) {
          const obj4 = { type: tmp13(5020).SoundboardSoundItemType.ADD_SOUND, guild: tmp23 };
          mapped.push(obj4);
        }
        if (tmp28) {
          tmp28 = tmp25;
        }
        if (!tmp28) {
          const obj5 = { categoryInfo: null, key: null, items: null };
          const obj6 = { type: tmp13(5020).SoundboardSoundGridSectionType.GUILD, guild: tmp23, isNitroLocked: false };
          obj5.categoryInfo = obj6;
          obj5.key = tmp23.id;
          obj5.items = mapped;
          items.push(obj5);
        }
        const tmp13Result = tmp13(4454);
      }
      if (!c11) {
        value2 = obj2.get(closure_2_11);
        if (value2 == null) {
          value2 = closure_2_12;
        }
        const obj7 = { key: tmp13(5020).SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj8 = { type: tmp13(5020).SoundboardSoundGridSectionType.DEFAULTS };
        obj7.categoryInfo = obj8;
        const sortSoundsOldestToNewestCreationDate = tmp13(17064).sortSoundsOldestToNewestCreationDate;
        let result1 = value2;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value2);
        }
        obj7.items = result1.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        items.push(obj7);
      }
      const obj9 = {
        sections: items,
        guilds: stateFromStoresArray,
        currentGuildId: null,
        allSounds: null,
        hasNitro: null,
        sortSoundsFn: null,
      };
      let id;
      if (stateFromStores1 != null) {
        id = tmp23.id;
      }
      obj9.currentGuildId = id;
      obj9.allSounds = obj2;
      obj9.hasNitro = hasNitro;
      obj9.sortSoundsFn = soundOrganizer;
      (function addGuildsSections(arg0) {
        ({ sections, guilds, allSounds } = arg0);
        ({ currentGuildId, hasNitro, sortSoundsFn } = arg0);
        const iter = guilds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (nextResult.id !== currentGuildId) {
            let tmp9 = stateFromStores3;
            let items = allSounds.get(tmp2.id);
            if (items == null) {
              items = [];
            }
            let tmp9Result = tmp9(items, sortSoundsFn);
            if (tmp9Result.length > 0) {
              let obj = { categoryInfo: null, key: null, items: null };
              obj = { type: null, guild: null, isNitroLocked: null };
              obj.type = closure_0(flag2[10]).SoundboardSoundGridSectionType.GUILD;
              obj.guild = tmp2;
              obj.isNitroLocked = !hasNitro;
              obj.categoryInfo = obj;
              obj.key = tmp2.id;
              obj.items = tmp3;
              let arr = sections.push(obj);
            }
          }
          continue;
        }
      })(obj9);
      if (tmp30) {
        let value3 = obj2.get(closure_2_11);
        if (value3 == null) {
          value3 = closure_2_12;
        }
        const obj10 = { key: tmp13(5020).SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj11 = { type: tmp13(5020).SoundboardSoundGridSectionType.DEFAULTS };
        obj10.categoryInfo = obj11;
        const sortSoundsOldestToNewestCreationDate2 = tmp13(17064).sortSoundsOldestToNewestCreationDate;
        let result2 = value3;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value3);
        }
        obj10.items = result2.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        items.push(obj10);
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
      obj12 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      const _Array2 = Array;
      obj12.availableSounds = Array.from(obj2.values()).flat();
      obj12.isFetching = isFetching;
      const obj13 = { favoriteSoundCount: size.size, unlockedCustomSoundCount, lockedCustomSoundCount };
      obj12.soundCounts = obj13;
      let arr4 = Array.from(obj2.values());
      tmp30 = c11;
    }
    return obj12;
  }, items10);
}
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  closure_0 = categories;
  closure_1 = arg1;
  let items = [categories, arg2.length, arg1];
  return noop.useMemo(() => {
    if (length.length > 0) {
      let obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: null, items: null };
      obj = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj;
      obj.items = closure_1.map((sound, index) => ({
        type: categories(length[10]).SoundboardSoundItemType.SOUND,
        sound,
        index,
      }));
      const items = [obj];
      let tmp = items;
    } else {
      tmp = closure_0;
    }
    return tmp;
  }, items);
};
