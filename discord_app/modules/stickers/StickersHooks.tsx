// === Module 10387: StickersHooks ===

// Module 10387 (StickersHooks)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9671 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10371 */;
import StickersActionCreators from "StickersActionCreators" /* 10388 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserStore from "UserStore" /* 1371 */;
import StickersPersistedStore from "StickersPersistedStore" /* 5501 */;
import StickersStore from "StickersStore" /* 5502 */;

require = fn;
function useStickerPackCategories(channel) {
  _require = channel;
  const favoriteStickers = require("FrecencyUserSettingsHooks").useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  closure_129_0 = stickerIds;
  let tmpResult = tmp(tmp2[10]);
  let items = [StickersStore];
  const items1 = [stickerIds];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items, () => {
    const mapped = channel.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        const isGuildStickerResult = channel(packs[13]).isGuildSticker(item);
        let result = !isGuildStickerResult;
        if (isGuildStickerResult) {
          result = channel(packs[13]).isAvailableGuildSticker(item);
          const tmp2Result = channel(packs[13]);
        }
        tmp = result;
        const obj = channel(packs[13]);
      }
      return tmp;
    });
  }, items1);
  tmpResult = tmp(tmp2[10]);
  const items2 = [StickersStore, StickersPersistedStore];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items2, () => ({ packs: StickersStore.getPremiumPacks(), frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently }), []);
  packs = stateFromStoresObject.packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  let obj = require("FrecencyUserSettingsHooks");
  const items3 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items3, () => authStore.getCurrentUser());
  closure_130_0 = channel;
  const tmpResult1 = require("initialize");
  const items4 = [StickersStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => StickersStore.getAllGuildStickers());
  closure_130_1 = stateFromStores1;
  const tmpResult2 = require("initialize");
  const items5 = [SortedGuildStore, GuildStore];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items5, () => {
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
  closure_130_2 = stateFromStoresArray1;
  const tmpResult3 = require("initialize");
  const items6 = [UserStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => authStore.getCurrentUser());
  closure_130_3 = stateFromStores2;
  const items7 = [stateFromStores1, stateFromStoresArray1, stateFromStores2, channel];
  memo = memo.useMemo(() => {
    const items = [];
    const iter = packs[Symbol.iterator]();
    while (iter !== undefined) {
      ({ name, id } = nextResult);
      value = stateFromStoresArray.get(id);
      let arr1 = value;
      let tmp6 = null != value;
      if (tmp6) {
        tmp6 = 0 !== arr1.length;
      }
      if (tmp6) {
        let obj = { type: StickersTypes.StickerCategoryTypes.GUILD, id, name, stickers: null };
        obj.stickers = arr1;
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
          obj = { type: StickersTypes.StickerCategoryTypes.EMPTY_GUILD_UPSELL, id: null, name: null, stickers: null };
          ({ id: obj3.id, name: obj3.name } = guild);
          obj.stickers = [];
          arr1 = items.unshift(obj);
        }
        tmp15 = -1 === findIndexResult && null != guild && obj6.getManageResourcePermissions(guild).canManageAllExpressions;
      }
      if (null != frequentlyUsedStickers) {
        obj = { permission: Permissions.USE_EXTERNAL_EMOJIS, user: tmp20, context: obj2 };
        PermissionUtilsAll.can(obj);
      }
      obj6 = useManageResourcePermissions;
    }
    return items;
  }, items7);
  const items8 = [packs, stateFromStoresArray, frequentlyUsedStickers, memo, stateFromStores, channel];
  return memo.useMemo(() => {
    const mapped = packs.map(StickersUtils.createStickerPackCategory);
    let obj = { type: StickersTypes.StickerCategoryTypes.FAVORITE, id: StickersTypes.StickerCategoryTypes.FAVORITE, name: null, stickers: null };
    const intl = util.intl;
    obj.name = intl.string(util.t.y3LQCG);
    obj.stickers = stateFromStoresArray;
    const items = [obj, ];
    obj = { type: StickersTypes.StickerCategoryTypes.RECENT, id: StickersTypes.StickerCategoryTypes.RECENT, name: null, stickers: null };
    const intl2 = util.intl;
    obj.name = intl2.string(util.t["6hjpXW"]);
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
            let tmpResult = tmp(packs[20]);
            const stickerSendability = tmpResult.getStickerSendability(guild_id, stateFromStores, channel);
            flag = stickerSendability !== tmp(packs[20]).StickerSendability.NONSENDABLE;
          }
          let someResult = flag;
        } else {
          tmpResult = tmp(packs[13]);
          if (tmpResult.isStandardSticker(guild_id)) {
            someResult = closure_1_2.some((id) => id.id === guild_id.pack_id);
          }
        }
        return someResult;
      });
    }
    if (found == null) {
      found = [];
    }
    obj.stickers = found;
    items[1] = obj;
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(memo, 2));
    return items;
  }, items8);
}
const Permissions = fn(1074).Permissions;
let closure_13 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = function useFetchStickerPack(pack_id) {
  _require = pack_id;
  const effect = noop.useEffect(() => {
    const stickerPacks = pack_id(dependencyMap[11]).fetchStickerPacks();
  }, []);
  const items = [StickersStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const items1 = [pack_id, stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = null == StickersStore.getStickerPack(closure_0);
    }
    if (tmp) {
      const stickerPack = StickersActionCreators.fetchStickerPack(closure_0);
    }
  }, items1);
};
export const useShouldAnimateSticker = function useShouldAnimateSticker(isFocused) {
  const AnimateStickers = UserSettings.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  return StickersUtils.shouldAnimateSticker(setting, isFocused);
};
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
  let items = [collapsedStickersCategories, filteredStickers, num, num2, num3, stickerNodeWidth, stickersCategories];
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
      function addGridSection(sendable, SEARCH_RESULTS, arg2) {
        const category = SEARCH_RESULTS;
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        let obj = collapsedStickersCategories(num[13]);
        let guild;
        if (obj.isGuildSticker(sendable[0])) {
          guild = stickersCategories.getGuild(sendable[0].guild_id);
        }
        let tmpResult = collapsedStickersCategories(tmp2[14]);
        guildId = guildId.getGuildId();
        let canCreateExpressions = null != guild;
        const findIndexResult = visibleRowIndex.findIndex((type) => type.type === category(5268).StickerCategoryTypes.FAVORITE);
        if (canCreateExpressions) {
          canCreateExpressions = guildId === guild.id;
        }
        if (canCreateExpressions) {
          canCreateExpressions = tmpResult.getManageResourcePermissions(guild).canCreateExpressions;
        }
        if (canCreateExpressions) {
          tmpResult = collapsedStickersCategories(tmp2[16]);
          canCreateExpressions = sendable.length < tmpResult.getTotalStickerCountForTier(guild.premiumTier);
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
            const obj = { type: StickersTypes.StickerGridItemTypes.STICKER, sticker, packId: null, gridSectionIndex: null, rowIndex: null, columnIndex: null, visibleRowIndex: null, category: null };
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
            obj = { type: null, guild_id: null, name: null, gridSectionIndex: null, rowIndex: null, columnIndex: null, visibleRowIndex: null };
            obj.type = collapsedStickersCategories(num[15]).StickerGridItemTypes.CREATE_STICKER;
            obj.guild_id = guild.id;
            let intl = collapsedStickersCategories(num[17]).intl;
            obj.name = intl.string(collapsedStickersCategories(num[17]).t["UwF+Cw"]);
            obj.gridSectionIndex = gridSectionIndex;
            obj.rowIndex = rowIndex;
            obj.columnIndex = mapped.length;
            obj.visibleRowIndex = visibleRowIndex;
            let arr = mapped.push(obj);
          }
          if (!flag) {
            visibleRowIndex = visibleRowIndex + 1;
            arr = items2.push(mapped);
            let arr1 = items.push(mapped.length);
          }
          rowIndex = rowIndex + 1;
        }
        gridSectionIndex = gridSectionIndex + 1;
        findIndexResult1 = visibleRowIndex.findIndex((type) => type.type === category(5268).StickerCategoryTypes.RECENT);
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
          } else if (tmp11.type === collapsedStickersCategories(num[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
            items1[gridSectionIndex] = 0;
            gridSectionIndex = gridSectionIndex + 1;
          }
          continue;
        }
      } else {
        if (tmp22.sendable.length > 0) {
          addGridSection(tmp22.sendable, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (tmp22.sendableWithPremium.length > 0) {
          addGridSection(tmp22.sendableWithPremium, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
      }
    }
    obj = { rowCount, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
    return obj;
  }, items);
};
export function useHasSendableSticker() {
  return true;
}
export const useFetchStickerPacks = function useFetchStickerPacks() {
  const effect = noop.useEffect(() => {
    const stickerPacks = pack_id(dependencyMap[11]).fetchStickerPacks();
  }, []);
};
export const useFavoriteStickerIds = function useFavoriteStickerIds() {
  const favoriteStickers = FrecencyUserSettingsHooks.useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  return stickerIds;
};
export const useFavoriteStickers = function useFavoriteStickers() {
  const favoriteStickers = stickerIds(10371).useFrecencySettings().favoriteStickers;
  stickerIds = undefined;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  const obj = stickerIds(10371);
  const items = [StickersStore];
  const items1 = [stickerIds];
  return stickerIds(504).useStateFromStoresArray(items, () => {
    const mapped = channel.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        const isGuildStickerResult = channel(packs[13]).isGuildSticker(item);
        let result = !isGuildStickerResult;
        if (isGuildStickerResult) {
          result = channel(packs[13]).isAvailableGuildSticker(item);
          const tmp2Result = channel(packs[13]);
        }
        tmp = result;
        const obj = channel(packs[13]);
      }
      return tmp;
    });
  }, items1);
};
export const useLatestFrecentStickerIds = function useLatestFrecentStickerIds() {
  const frecencySettings = FrecencyUserSettingsHooks.useFrecencySettings();
  let keys = closure_13;
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
export const useLatestFrecentStickers = function useLatestFrecentStickers() {
  const frecencySettings = keys(10371).useFrecencySettings();
  keys = closure_13;
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
  const obj = keys(10371);
  const items = [StickersStore];
  const items1 = [keys];
  return keys(504).useStateFromStoresArray(items, () => {
    const mapped = keys.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => undefined !== item);
  }, items1);
};
export { useStickerPackCategories };
export const useStickerForRenderableSticker = function useStickerForRenderableSticker(renderableSticker, arg1) {
  _require = renderableSticker;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c3 = undefined;
  noop = undefined;
  let current = require("initialize");
  const items = [StickersStore];
  const stateFromStores = current.useStateFromStores(items, () => StickersStore.getStickerById(id.id));
  const tmp4 = current(noop.useState(true), 2);
  dependencyMap = tmp4[1];
  [tmp6, c3] = current(noop.useState(false), 2);
  const tmp = _require;
  const tmp5 = current(noop.useState(false), 2);
  let isGuildStickerResult = require("StickersUtils").isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    isGuildStickerResult = tmp(4899).isStandardSticker(renderableSticker);
    const tmpResult = tmp(4899);
  }
  current = { hasFetched: tmp6, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: tmp4[0], stickersStoreDefinition: stateFromStores };
  noop = obj2.useRef(current);
  const effect = obj2.useEffect(() => {
    closure_5.current = current;
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
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              current = ref.current;
              if (flag) {
                if (!current.isReturnable) {
                  if (null == current.stickersStoreDefinition) {
                    if (current.shouldFetch) {
                      if (!current.hasFetched) {
                        closure_2_2(false);
                        c2 = 1;
                        let obj1 = tmp3(c2[11]);
                        c1 = 2;
                        c3 = 1;
                        obj1 = { value: null, done: false };
                        obj1.value = obj1.fetchSticker(tmp23.id);
                        return obj1;
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
              obj = { value, done: true };
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
export const useFilteredStickerPackCategories = function useFilteredStickerPackCategories(channel) {
  let tmp = useStickerPackCategories(channel);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => closure_0.filter((type) => {
    let tmp = type.type === closure_1_0(closure_1_2[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
    if (!tmp) {
      tmp = type.stickers.length > 0;
    }
    return tmp;
  }, []), items);
};