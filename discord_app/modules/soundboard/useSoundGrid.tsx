// discord_app/modules/soundboard/useSoundGrid.tsx
import SoundboardTypes from "SoundboardTypes.tsx";
import GuildBoostingUtils from "../../utils/GuildBoostingUtils.tsx";
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

const require = globalThis.__r;

require = fn;
function createSoundItems(value, fn) {
  let arr = value;
  if (null != fn) {
    arr = fn(value);
  }
  return arr.map((sound, index) => ({ type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index }));
}
const SoundboardConstants = fn(6060);
({ DEFAULT_SOUND_GUILD_ID: closure_11, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = fn(1385).PremiumTypes;
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
  flag(flag2[17])(() => {
    let id;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    const result = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild(id);
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
      let obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
      const obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      obj2.categoryInfo = obj4;
      const sortSoundsOldestToNewestCreationDate3 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      let result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      obj2.items = result.map((sound, index) => ({
        type: categories(length[10]).SoundboardSoundItemType.SOUND,
        sound,
        index,
      }));
      items.push(obj2);
      const obj5 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      let value5 = allSounds.get(closure_2_11);
      if (value5 == null) {
        value5 = closure_2_12;
      }
      obj5.availableSounds = value5;
      obj5.isFetching = isFetching;
      obj5.soundCounts = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj15 = obj5;
    } else {
      if (null != stateFromStores3) {
        let obj = { allSounds, topSoundIds: memo1 };
        (function addTopSoundsSection(items, id, arg2) {
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
            const obj2 = {
              key: closure_0(7518).SoundboardSoundGridSectionType.TOP_SOUNDS,
              categoryInfo: null,
              items: null,
            };
            const obj3 = { type: closure_0(7518).SoundboardSoundGridSectionType.TOP_SOUNDS, guild: id };
            obj2.categoryInfo = obj3;
            obj2.items = stateFromStores3(items);
            items.push(obj2);
          }
        })(items, tmp, obj);
      }
      const obj6 = {
        sections: items,
        guildIds: sortedGuildIdsForSoundboard,
        allSounds,
        potentialSoundIdsForSection: null,
        sectionType: null,
        sortSoundsFn: null,
      };
      const _Array = Array;
      obj6.potentialSoundIdsForSection = Array.from(size);
      obj6.sectionType = SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES;
      obj6.sortSoundsFn = useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate;
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
      if (undefined !== stateFromStores1) {
        let tmp17 = flag;
        let value6 = allSounds.get(stateFromStores1.id);
        if (value6 == null) {
          value6 = [];
        }
        let tmp44Result = value6;
        if (null != soundOrganizer) {
          tmp44Result = soundOrganizer(value6);
        }
        const mapped = tmp44Result.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        const tmp13 = value6.length < GuildBoostingUtils.getMaxSoundboardSlots(stateFromStores1) && stateFromStores2;
        let tmp15 = !tmp13;
        if (!tmp13) {
          tmp15 = !tmp14;
        }
        if (!tmp15) {
          tmp15 = tmp17;
        }
        if (!tmp15) {
          const obj7 = { type: SoundboardTypes.SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
          mapped.push(obj7);
        }
        if (tmp17) {
          tmp17 = tmp14;
        }
        if (!tmp17) {
          const obj8 = { categoryInfo: null, key: null, items: null };
          const obj9 = {
            type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD,
            guild: stateFromStores1,
            isNitroLocked: false,
          };
          obj8.categoryInfo = obj9;
          obj8.key = stateFromStores1.id;
          obj8.items = mapped;
          items.push(obj8);
        }
        let tmp9Result = GuildBoostingUtils;
      }
      if (!c11) {
        let value7 = allSounds.get(closure_2_11);
        if (value7 == null) {
          value7 = closure_2_12;
        }
        const obj10 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj11 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        obj10.categoryInfo = obj11;
        const sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
        let result1 = value7;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value7);
        }
        obj10.items = result1.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        items.push(obj10);
      }
      const obj12 = {
        sections: items,
        guilds: stateFromStoresArray,
        currentGuildId: null,
        allSounds: null,
        hasNitro: null,
        sortSoundsFn: null,
      };
      let id;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      obj12.currentGuildId = id;
      obj12.allSounds = allSounds;
      obj12.hasNitro = hasNitro;
      obj12.sortSoundsFn = soundOrganizer;
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
              let obj2 = {
                type: closure_0(7518).SoundboardSoundGridSectionType.GUILD,
                guild: null,
                isNitroLocked: null,
              };
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
      })(obj12);
      if (c11) {
        let value8 = allSounds.get(closure_2_11);
        if (value8 == null) {
          value8 = closure_2_12;
        }
        const obj13 = { key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS, categoryInfo: null, items: null };
        const obj14 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        obj13.categoryInfo = obj14;
        const sortSoundsOldestToNewestCreationDate2 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
        let result2 = value8;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value8);
        }
        obj13.items = result2.map((sound, index) => ({
          type: categories(length[10]).SoundboardSoundItemType.SOUND,
          sound,
          index,
        }));
        items.push(obj13);
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
      obj15 = { categories: items, availableSounds: null, isFetching: null, soundCounts: null };
      const _Array2 = Array;
      obj15.availableSounds = Array.from(allSounds.values()).flat();
      obj15.isFetching = isFetching;
      const obj17 = { favoriteSoundCount: size.size, unlockedCustomSoundCount, lockedCustomSoundCount };
      obj15.soundCounts = obj17;
      const arr6 = Array.from(allSounds.values());
    }
    return obj15;
  }, items10);
}
export function useSearchCategories(categories, arg1, arg2) {
  closure_0 = categories;
  closure_1 = arg1;
  let items = [categories, arg2.length, arg1];
  return noop.useMemo(() => {
    if (length.length > 0) {
      const obj = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: null, items: null };
      const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj2;
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
}
