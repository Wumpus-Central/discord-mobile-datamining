// === Module 10217: useStickerPackCategories ===

// Module 10217 (useStickerPackCategories)
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import useFrecencySettings from "useFrecencySettings" /* 10200 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "handleConnectionOpen" /* 4197 */;
import closure_8 from "insertUnsortedGuilds" /* 5078 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import closure_10 from "handleStickersStoreUpdate" /* 6768 */;
import closure_11 from "loadSavedGuildStickers" /* 6769 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
function useStickerPackCategories(channel) {
  let _require = channel;
  const favoriteStickers = _require(stateFromStoresArray1[19]).useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  _require = stickerIds;
  let tmpResult = tmp(tmp2[10]);
  let items = [closure_11];
  const items1 = [stickerIds];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items, () => {
    const mapped = channel.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((body) => {
      let tmp = null != body;
      if (tmp) {
        const isGuildStickerResult = callback(table[13]).isGuildSticker(body);
        let result = !isGuildStickerResult;
        if (isGuildStickerResult) {
          result = tmp2(tmp3[13]).isAvailableGuildSticker(body);
          const tmp2Result = tmp2(tmp3[13]);
        }
        tmp = result;
        const obj = callback(table[13]);
        tmp2 = callback;
        tmp3 = table;
      }
      return tmp;
    });
  }, items1);
  let stateFromStores1 = stateFromStoresArray;
  tmpResult = tmp(tmp2[10]);
  const items2 = [closure_11, closure_10];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items2, () => {
    obj = { packs: store.getPremiumPacks(), frequentlyUsedStickers: obj.stickerFrecencyWithoutFetchingLatest.frequently };
    return obj;
  }, []);
  const packs = stateFromStoresObject.packs;
  stateFromStoresArray1 = packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  let stateFromStores2 = frequentlyUsedStickers;
  let obj = _require(stateFromStoresArray1[19]);
  const items3 = [closure_9];
  const stateFromStores = _require(stateFromStoresArray1[10]).useStateFromStores(items3, () => authStore.getCurrentUser());
  _require = channel;
  stateFromStores1 = undefined;
  stateFromStoresArray1 = undefined;
  stateFromStores2 = undefined;
  const tmpResult1 = _require(stateFromStoresArray1[10]);
  const items4 = [closure_11];
  stateFromStores1 = _require(stateFromStoresArray1[10]).useStateFromStores(items4, () => store.getAllGuildStickers());
  const tmpResult2 = _require(stateFromStoresArray1[10]);
  const items5 = [closure_8, closure_6];
  stateFromStoresArray1 = _require(stateFromStoresArray1[10]).useStateFromStoresArray(items5, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((arg0) => {
      const guild = closure_1_6.getGuild(arg0);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  }, []);
  const tmpResult3 = _require(stateFromStoresArray1[10]);
  const items6 = [closure_9];
  stateFromStores2 = _require(stateFromStoresArray1[10]).useStateFromStores(items6, () => authStore.getCurrentUser());
  const items7 = [stateFromStores1, stateFromStoresArray1, stateFromStores2, channel];
  memo = memo.useMemo(() => {
    const items = [];
    const iter = stateFromStoresArray1[Symbol.iterator]();
    while (iter !== undefined) {
      ({ name, id } = nextResult);
      let tmp4 = stateFromStores1;
      let tmp3 = id;
      let value = stateFromStores1.get(id);
      let arr1 = value;
      let tmp6 = null != value;
      if (tmp6) {
        let tmp7 = value;
        tmp6 = 0 !== arr1.length;
      }
      if (tmp6) {
        let obj = { type: null, id: null, name: null, stickers: null };
        let tmp8 = channel;
        let tmp9 = stateFromStoresArray1;
        obj[0] = channel(stateFromStoresArray1[15]).StickerCategoryTypes.GUILD;
        let tmp10 = id;
        obj[1] = tmp3;
        let tmp11 = name;
        obj[2] = name;
        let tmp12 = value;
        obj[3] = arr1;
        let arr = items.push(obj);
      }
      continue;
    }
    let guildId;
    if (channel != null) {
      guildId = obj2.getGuildId();
    }
    if (null != guildId) {
      const guild = closure_1_6.getGuild(obj2.getGuildId());
      const findIndexResult = items.findIndex((id) => id.id === guildId.getGuildId());
      if (findIndexResult >= 1) {
        items.unshift(items.splice(findIndexResult, 1)[0]);
      } else {
        if (tmp15) {
          obj = { type: null, id: null, name: null, stickers: null };
          obj[0] = channel(stateFromStoresArray1[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
          ({ id: obj3[1], name: obj3[2] } = guild);
          obj[3] = [];
          arr1 = items.unshift(obj);
        }
        tmp15 = -1 === findIndexResult && null != guild && obj6.getManageResourcePermissions(guild).canManageAllExpressions;
      }
      if (null != stateFromStores2) {
        obj = { permission: null, user: null, context: null };
        obj[0] = closure_1_12.USE_EXTERNAL_EMOJIS;
        obj[1] = tmp20;
        obj[2] = obj2;
        stateFromStores1(stateFromStoresArray1[18]).can(obj);
        const obj4 = stateFromStores1(stateFromStoresArray1[18]);
      }
      obj6 = channel(stateFromStoresArray1[14]);
    }
    return items;
  }, items7);
  const items8 = [packs, stateFromStoresArray, frequentlyUsedStickers, memo, stateFromStores, channel];
  return memo.useMemo(() => {
    const mapped = stateFromStoresArray1.map(channel(stateFromStoresArray1[13]).createStickerPackCategory);
    let obj = { type: channel(stateFromStoresArray1[15]).StickerCategoryTypes.FAVORITE, id: channel(stateFromStoresArray1[15]).StickerCategoryTypes.FAVORITE, name: null, stickers: null };
    const intl = channel(stateFromStoresArray1[17]).intl;
    obj[2] = intl.string(channel(stateFromStoresArray1[17]).t.y3LQCG);
    obj[3] = stateFromStores1;
    const items = [obj, ];
    obj = { type: channel(stateFromStoresArray1[15]).StickerCategoryTypes.RECENT, id: channel(stateFromStoresArray1[15]).StickerCategoryTypes.RECENT, name: null, stickers: null };
    const intl2 = channel(stateFromStoresArray1[17]).intl;
    obj[2] = intl2.string(channel(stateFromStoresArray1[17]).t["6hjpXW"]);
    let found;
    if (stateFromStores2 != null) {
      found = stateFromStores2.filter((guild_id) => {
        closure_0 = guild_id;
        if (obj.isGuildSticker(guild_id)) {
          const stickersByGuildId = closure_1_11.getStickersByGuildId(guild_id.guild_id);
          let flag;
          if (stickersByGuildId != null) {
            flag = stickersByGuildId.some((id) => id.id === guild_id.id);
          }
          if (flag == null) {
            flag = false;
          }
          if (flag) {
            let tmpResult = tmp(tmp2[20]);
            const stickerSendability = tmpResult.getStickerSendability(guild_id, closure_4, closure_0);
            flag = stickerSendability !== tmp(tmp2[20]).StickerSendability.NONSENDABLE;
          }
          let someResult = flag;
        } else {
          tmpResult = tmp(tmp2[13]);
          if (tmpResult.isStandardSticker(guild_id)) {
            someResult = closure_2.some((id) => id.id === guild_id.pack_id);
          }
        }
        return someResult;
      });
    }
    if (found == null) {
      found = [];
    }
    obj[3] = found;
    items[1] = obj;
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(memo, 2));
    return items;
  }, items8);
}
let closure_13 = [];
let result = require("set").fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = function useFetchStickerPack(pack_id) {
  const _require = pack_id;
  const effect = React.useEffect(() => {
    const stickerPacks = pack_id(table[11]).fetchStickerPacks();
  }, []);
  const items = [closure_11];
  const stateFromStores = _require(589).useStateFromStores(items, () => obj.hasLoadedStickerPacks);
  const items1 = [pack_id, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = null == closure_1_11.getStickerPack(pack_id);
    }
    if (tmp) {
      const stickerPack = pack_id(closure_1_2[11]).fetchStickerPack(pack_id);
      const obj = pack_id(closure_1_2[11]);
    }
  }, items1);
};
export const useShouldAnimateSticker = function useShouldAnimateSticker(isFocused) {
  const AnimateStickers = explicitContentFromProto.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  return getStickerExtensionFromFormatType.shouldAnimateSticker(setting, isFocused);
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
    let rounded = Math.floor((items2 - items1 + closure_4) / (closure_5 + closure_4));
    const items = [];
    items1 = [];
    items2 = [];
    closure_4 = 0;
    closure_5 = 0;
    stickersCategories = 0;
    const rounded1 = Math.floor(Math.max(closure_4, (items2 - items1 - closure_5 * rounded) / (rounded - 1)));
    if (0 !== items2) {
      function addGridSection(sendable, SEARCH_RESULTS, arg2) {
        closure_0 = SEARCH_RESULTS;
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        let obj = collapsedStickersCategories(num[13]);
        let guild;
        if (obj.isGuildSticker(sendable[0])) {
          guild = stickersCategories.getGuild(sendable[0].guild_id);
        }
        let tmpResult = tmp(tmp2[14]);
        const guildId = closure_2_7.getGuildId();
        let canCreateExpressions = null != guild;
        const findIndexResult = c6.findIndex((type) => type.type === SEARCH_RESULTS(4964).StickerCategoryTypes.FAVORITE);
        if (canCreateExpressions) {
          canCreateExpressions = guildId === guild.id;
        }
        if (canCreateExpressions) {
          canCreateExpressions = tmpResult.getManageResourcePermissions(guild).canCreateExpressions;
        }
        if (canCreateExpressions) {
          tmpResult = tmp(tmp2[16]);
          canCreateExpressions = sendable.length < tmpResult.getTotalStickerCountForTier(guild.premiumTier);
        }
        let sum = length;
        if (canCreateExpressions) {
          sum = length + 1;
        }
        rounded = Math.ceil(sum / closure_0);
        num = 0;
        if (!flag) {
          num = rounded;
        }
        items1[closure_5] = num;
        for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
          let tmp12 = closure_0;
          let result = num2 * closure_0;
          let substr = sendable.slice(result, result + closure_0);
          let mapped = substr.map((pack_id) => {
            const obj = { type: collapsedStickersCategories(num[15]).StickerGridItemTypes.STICKER, sticker: pack_id, packId: null, gridSectionIndex: null, rowIndex: null, columnIndex: null, visibleRowIndex: null, category: null };
            let str = "TODO - fix";
            if (obj2.isStandardSticker(pack_id)) {
              str = pack_id.pack_id;
            }
            obj[2] = str;
            obj[3] = closure_5;
            obj[4] = closure_4;
            obj[5] = arg1;
            obj[6] = closure_6;
            obj[7] = closure_0;
            return obj;
          });
          let tmp14 = closure_5;
          let tmp15 = closure_5 > findIndexResult1;
          let tmp16 = num2;
          if (tmp15) {
            let tmp17 = closure_5;
            tmp15 = closure_5 > findIndexResult;
          }
          if (tmp15) {
            tmp15 = null != guild;
          }
          if (tmp15) {
            tmp15 = sum > sendable.length;
          }
          if (tmp15) {
            obj = { type: null, guild_id: null, name: null, gridSectionIndex: null, rowIndex: null, columnIndex: null, visibleRowIndex: null };
            let tmp18 = collapsedStickersCategories;
            let tmp19 = num;
            obj[0] = collapsedStickersCategories(num[15]).StickerGridItemTypes.CREATE_STICKER;
            obj[1] = guild.id;
            let intl = collapsedStickersCategories(num[17]).intl;
            obj[2] = intl.string(collapsedStickersCategories(num[17]).t["UwF+Cw"]);
            let tmp20 = closure_5;
            obj[3] = closure_5;
            let tmp21 = closure_4;
            obj[4] = closure_4;
            obj[5] = mapped.length;
            let tmp22 = closure_6;
            obj[6] = closure_6;
            let arr = mapped.push(obj);
          }
          if (!flag) {
            let tmp24 = closure_6;
            closure_6 = closure_6 + 1;
            let tmp25 = items2;
            arr = items2.push(mapped);
            let tmp27 = items;
            let arr1 = items.push(mapped.length);
          }
          let tmp29 = closure_4;
          closure_4 = closure_4 + 1;
        }
        closure_5 = closure_5 + 1;
      }
      if (null == items) {
        const iter = stickersCategories[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp11 = nextResult;
          if (nextResult.stickers.length > 0) {
            let tmp17 = closure_4;
            closure_4 = closure_4 + 1;
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
            let tmp13 = collapsedStickersCategories;
            let tmp14 = num;
            if (tmp11.type === collapsedStickersCategories(num[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
              let tmp15 = closure_5;
              items1[closure_5] = 0;
              let tmp16 = closure_5;
              closure_5 = closure_5 + 1;
            }
          }
          continue;
        }
        const tmp6 = stickersCategories;
      } else {
        if (tmp22.sendable.length > 0) {
          addGridSection(tmp22.sendable, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (tmp22.sendableWithPremium.length > 0) {
          addGridSection(tmp22.sendableWithPremium, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
      }
    }
    obj = { rowCount: closure_4, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
    return obj;
  }, items);
};
export function useHasSendableSticker() {
  return true;
}
export const useFetchStickerPacks = function useFetchStickerPacks() {
  const effect = React.useEffect(() => {
    const stickerPacks = pack_id(table[11]).fetchStickerPacks();
  }, []);
};
export const useFavoriteStickerIds = function useFavoriteStickerIds() {
  const favoriteStickers = useFrecencySettings.useFrecencySettings().favoriteStickers;
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
  const favoriteStickers = stickerIds(10200).useFrecencySettings().favoriteStickers;
  stickerIds = undefined;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  const obj = stickerIds(10200);
  const tmp = stickerIds;
  const items = [closure_11];
  const items1 = [stickerIds];
  return stickerIds(589).useStateFromStoresArray(items, () => {
    const mapped = channel.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((body) => {
      let tmp = null != body;
      if (tmp) {
        const isGuildStickerResult = callback(table[13]).isGuildSticker(body);
        let result = !isGuildStickerResult;
        if (isGuildStickerResult) {
          result = tmp2(tmp3[13]).isAvailableGuildSticker(body);
          const tmp2Result = tmp2(tmp3[13]);
        }
        tmp = result;
        const obj = callback(table[13]);
        tmp2 = callback;
        tmp3 = table;
      }
      return tmp;
    });
  }, items1);
};
export const useLatestFrecentStickerIds = function useLatestFrecentStickerIds() {
  const frecencySettings = useFrecencySettings.useFrecencySettings();
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
  const frecencySettings = keys(10200).useFrecencySettings();
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
  const obj = keys(10200);
  const tmp = keys;
  const items = [closure_11];
  const items1 = [keys];
  return keys(589).useStateFromStoresArray(items, () => {
    const mapped = keys.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((arg0) => undefined !== arg0);
  }, items1);
};
export { useStickerPackCategories };
export const useStickerForRenderableSticker = function useStickerForRenderableSticker(renderableSticker, arg1) {
  const _require = renderableSticker;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  c3 = undefined;
  let obj;
  let React;
  obj = _require(589);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getStickerById(id.id));
  const tmp4 = obj(React.useState(true), 2);
  dependencyMap = tmp4[1];
  [tmp6, c3] = obj(React.useState(false), 2);
  const tmp = _require;
  const tmp5 = obj(React.useState(false), 2);
  let isGuildStickerResult = _require(4823).isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    isGuildStickerResult = tmp(4823).isStandardSticker(renderableSticker);
    const tmpResult = tmp(4823);
  }
  obj = { hasFetched: tmp6, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: tmp4[0], stickersStoreDefinition: stateFromStores };
  React = obj2.useRef(obj);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj;
  });
  const items1 = [flag];
  const effect1 = obj2.useEffect(() => {
    _undefined(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              const current = closure_1_5.current;
              if (c1) {
                if (!current.isReturnable) {
                  if (null == current.stickersStoreDefinition) {
                    if (current.shouldFetch) {
                      if (!current.hasFetched) {
                        dependencyMap(false);
                        dependencyMap = 1;
                        obj1 = closure_1_0(10218);
                        c1 = 2;
                        v0 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = obj1.fetchSticker(tmp24.id);
                        return obj1;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = 0;
            }
            v0(true);
          }
          v0 = 3;
        } catch (tmp15) {
          if (tmp4 === dependencyMap) {
            v0 = tmp2;
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
  return React.useMemo(() => closure_0.filter((type) => {
    let tmp = type.type === callback(table[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
    if (!tmp) {
      tmp = type.stickers.length > 0;
    }
    return tmp;
  }, []), items);
};