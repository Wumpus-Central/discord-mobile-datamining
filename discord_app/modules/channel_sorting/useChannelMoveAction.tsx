// === Module 12695: useChannelMoveAction ===

// Module 12695 (useChannelMoveAction)
import getChannelMoveBlockerDefault from "getChannelMoveBlocker" /* 12697 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 12699 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6800 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import UserStore from "UserStore" /* 1390 */;
import getChannelListRecord from "getChannelListRecord" /* 12696 */;

require = fn;
function areDestinationsEqual(arr, arg1) {
  dependencyMap = arg1;
  return arr.length === arg1.length && arr.every((id, index) => id.id === dependencyMap[index].id && id.label === dependencyMap[index].label && id.disabled === dependencyMap[index].disabled);
}
const NULL_STRING_CHANNEL_ID = fn(1085).NULL_STRING_CHANNEL_ID;
let closure_12 = [];
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListContext(getGuildId) {
  const _require = getGuildId;
  const cResult = require("c").c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function v() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const isFavoritesGuildIdResult = tmp(2090).isFavoritesGuildId(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isFavoritesGuildIdResult;
    let tmp8 = isFavoritesGuildIdResult;
    const tmpResult3 = tmp(2090);
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === getGuildId) {
    if (cResult[5] === tmp8) {
      if (cResult[6] === stateFromStores) {
        let tmp10 = cResult[7];
      }
      importDefault = tmp10;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildCategoryStore, GuildStore, , ];
        class I {
          constructor() {
            obj = { categories: closure_3.getCategories(closure_1), listChannel: null, isBlocked: null, guild: null };
            tmp = closure_1;
            tmp2 = closure_0;
            tmp3 = closure_10(closure_1, closure_0.id);
            if (tmp3 == null) {
              tmp3 = tmp2;
            }
            obj.listChannel = tmp3;
            obj.isBlocked = null != closure_1(closure_2[13])(tmp2, tmp);
            obj.guild = closure_4.getGuild(tmp);
            return obj;
          }
        }
        items1[3] = UserGuildSettingsStore;
        cResult[8] = items1;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] === getGuildId) {
        if (cResult[10] === tmp10) {
          let tmp17 = cResult[11];
          let tmp18 = cResult[12];
        }
        const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp12, tmp17, tmp18);
        ({ categories, listChannel, isBlocked } = stateFromStoresObject);
        class I {
          constructor() {
            obj = { categories: closure_3.getCategories(closure_1), listChannel: null, isBlocked: null, guild: null };
            tmp = closure_1;
            tmp2 = closure_0;
            tmp3 = closure_10(closure_1, closure_0.id);
            if (tmp3 == null) {
              tmp3 = tmp2;
            }
            obj.listChannel = tmp3;
            obj.isBlocked = null != closure_1(closure_2[13])(tmp2, tmp);
            obj.guild = closure_4.getGuild(tmp);
            return obj;
          }
        }
        if (cResult[13] === categories) {
          if (cResult[14] === tmp20) {
            if (cResult[15] === isBlocked) {
              if (cResult[16] === tmp8) {
                if (cResult[17] === listChannel) {
                  if (cResult[18] === tmp10) {
                    let tmp21 = cResult[19];
                  }
                  return tmp21;
                }
              }
            }
          }
        }
        const obj2 = { isFavorites: tmp8, listGuildId: tmp10, categories, listChannel, isBlocked, guild: tmp20 };
        cResult[13] = categories;
        cResult[14] = tmp20;
        cResult[15] = isBlocked;
        cResult[16] = tmp8;
        cResult[17] = listChannel;
        cResult[18] = tmp10;
        cResult[19] = obj2;
        tmp21 = obj2;
        const tmpResult4 = tmp(504);
      }
      class I {
        constructor() {
          obj = { categories: closure_3.getCategories(closure_1), listChannel: null, isBlocked: null, guild: null };
          tmp = closure_1;
          tmp2 = closure_0;
          tmp3 = closure_10(closure_1, closure_0.id);
          if (tmp3 == null) {
            tmp3 = tmp2;
          }
          obj.listChannel = tmp3;
          obj.isBlocked = null != closure_1(closure_2[13])(tmp2, tmp);
          obj.guild = closure_4.getGuild(tmp);
          return obj;
        }
      }
      const items2 = [tmp10, getGuildId];
      cResult[9] = getGuildId;
      cResult[10] = tmp10;
      cResult[11] = I;
      cResult[12] = items2;
      tmp18 = items2;
      tmp17 = I;
    }
  }
  let guildId = stateFromStores;
  if (!tmp8) {
    guildId = getGuildId.getGuildId();
  }
  cResult[4] = getGuildId;
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = guildId;
  tmp10 = guildId;
  const tmpResult = require("initialize");
}) : (function useChannelListContext(getGuildId) {
  const _require = getGuildId;
  const items = [SelectedGuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
  let obj = require("initialize");
  const tmp = _require;
  const isFavoritesGuildIdResult = require("FavoritesUtils").isFavoritesGuildId(stateFromStores);
  let guildId = stateFromStores;
  if (!isFavoritesGuildIdResult) {
    guildId = getGuildId.getGuildId();
  }
  const obj2 = require("FavoritesUtils");
  const items1 = [GuildCategoryStore, GuildStore, PermissionStore, UserGuildSettingsStore];
  const items2 = [guildId, getGuildId];
  const stateFromStoresObject = tmp(504).useStateFromStoresObject(items1, () => {
    const obj = { categories: GuildCategoryStore.getCategories(guildId), listChannel: null, isBlocked: null, guild: null };
    let tmp3 = getChannelListRecord(guildId, getGuildId.id);
    if (tmp3 == null) {
      tmp3 = getGuildId;
    }
    obj.listChannel = tmp3;
    obj.isBlocked = null != getChannelMoveBlockerDefault(getGuildId, guildId);
    obj.guild = GuildStore.getGuild(guildId);
    return obj;
  }, items2);
  return { isFavorites: isFavoritesGuildIdResult, listGuildId: guildId, categories: stateFromStoresObject.categories, listChannel: stateFromStoresObject.listChannel, isBlocked: stateFromStoresObject.isBlocked, guild: stateFromStoresObject.guild };
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/useChannelMoveAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelMoveAction(arg0) {
  const cResult = isFavorites(listChannel[10]).c(38);
  let tmp4 = closure_14(arg0);
  isFavorites = tmp4.isFavorites;
  ({ listGuildId, categories } = tmp4);
  listChannel = tmp4.listChannel;
  guild = tmp4.guild;
  if (cResult[0] !== listChannel) {
    const isCategoryResult = listChannel.isCategory();
    cResult[0] = listChannel;
    cResult[1] = isCategoryResult;
    let tmp5 = isCategoryResult;
  } else {
    tmp5 = cResult[1];
  }
  closure_4 = tmp5;
  if (cResult[2] === categories) {
    if (cResult[3] === listChannel.parent_id) {
      let tmp7 = cResult[4];
    }
    closure_5 = tmp7;
    if (cResult[5] === categories) {
      if (cResult[6] === listChannel) {
        if (cResult[8] !== cResult[7]) {
          let tmp12 = null;
          if (arr.length > 1) {
            const obj2 = { first: arr[0], last: arr[arr.length - 1] };
            tmp12 = obj2;
          }
          cResult[8] = arr;
          cResult[9] = tmp12;
          let tmp11 = tmp12;
        } else {
          tmp11 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [guild, closure_4, closure_5, UserStore, RelationshipStore];
          cResult[10] = items;
          let tmp14 = items;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] === categories) {
          if (cResult[12] === tmp7) {
            if (cResult[13] === guild) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === isFavorites) {
                  let tmp20 = cResult[16];
                  let tmp21 = cResult[17];
                }
                const tmpResult = tmp(tmp2[11]);
                const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp20, tmp21, areDestinationsEqual);
                if (!isFavorites) {
                  if (listChannel.isThread()) {
                    return null;
                  }
                }
                if (null != listGuildId) {
                  if (!tmp4.isBlocked) {
                    if (!stateFromStores.some((disabled) => !disabled.disabled)) {
                      if (null == tmp11) {
                        return null;
                      }
                    }
                    if (!tmp5) {
                      tmp5 = tmp7 === NULL_STRING_CHANNEL_ID;
                    }
                    if (cResult[18] === categories) {
                      if (cResult[19] === listChannel) {
                        let tmp30 = cResult[20];
                      }
                      if (cResult[21] === categories) {
                        if (cResult[22] === tmp7) {
                          if (cResult[23] === listChannel) {
                            let tmp31 = cResult[24];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl = tmp(tmp2[17]).intl;
                            const stringResult = intl.string(tmp(tmp2[17]).t.A95Fzm);
                            cResult[25] = stringResult;
                            let tmp32 = stringResult;
                          } else {
                            tmp32 = cResult[25];
                          }
                          if (cResult[26] === tmp5) {
                            if (cResult[27] === listChannel.id) {
                              if (cResult[28] === tmp11) {
                                let tmp34 = cResult[29];
                              }
                              if (cResult[30] === stateFromStores) {
                                if (cResult[31] === tmp30) {
                                  if (cResult[32] === tmp31) {
                                    if (cResult[33] === isFavorites) {
                                      if (cResult[34] === listChannel) {
                                        if (cResult[35] === listGuildId) {
                                          if (cResult[36] === tmp34) {
                                            let tmp37 = cResult[37];
                                          }
                                          return tmp37;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj3 = { label: tmp32, guildId: listGuildId, channel: listChannel, isFavorites, destinations: stateFromStores, placements: tmp34, getDestinationMove: tmp30, getPlacementMove: tmp31 };
                              cResult[30] = stateFromStores;
                              cResult[31] = tmp30;
                              cResult[32] = tmp31;
                              cResult[33] = isFavorites;
                              cResult[34] = listChannel;
                              cResult[35] = listGuildId;
                              cResult[36] = tmp34;
                              cResult[37] = obj3;
                              tmp37 = obj3;
                            }
                          }
                          if (null == tmp11) {
                            cResult[26] = tmp5;
                            cResult[27] = listChannel.id;
                            cResult[28] = tmp11;
                            cResult[29] = null;
                            tmp34 = null;
                          } else {
                            const intl2 = tmp(tmp2[17]).intl;
                            const t = tmp(tmp2[17]).t;
                            const obj4 = { firstLabel: intl2.string(tmp5 ? t.IMqgs9 : t.Q9TKt6), lastLabel: null, isFirst: null, isLast: null };
                            const intl3 = tmp(tmp2[17]).intl;
                            let id = intl3.string;
                            const t2 = tmp(tmp2[17]).t;
                            obj4.lastLabel = id(tmp5 ? t2["8fQe3x"] : t2["/Pkxmw"]);
                            obj4.isFirst = tmp11.first.channel.id === listChannel.id;
                            id = tmp11.last.channel.id;
                            obj4.isLast = id === listChannel.id;
                          }
                        }
                      }
                      function getPlacementMove(arg0) {
                        let parent_id = listChannel.parent_id;
                        if (parent_id == null) {
                          parent_id = null;
                        }
                        const obj = { targetParentId: parent_id, updates: ChannelSortingUtils.getChannelPlacementUpdates(listChannel, categories, closure_5, arg0) };
                        return obj;
                      }
                      cResult[21] = categories;
                      cResult[22] = tmp7;
                      cResult[23] = listChannel;
                      cResult[24] = getPlacementMove;
                      tmp31 = getPlacementMove;
                    }
                    function getDestinationMove(categoryKey) {
                      let tmp = null;
                      if (categoryKey !== NULL_STRING_CHANNEL_ID) {
                        tmp = categoryKey;
                      }
                      const obj = { targetParentId: tmp, updates: ChannelSortingUtils.getChannelPlacementUpdates(listChannel, categories, categoryKey, "last") };
                      return obj;
                    }
                    cResult[18] = categories;
                    cResult[19] = listChannel;
                    cResult[20] = getDestinationMove;
                    tmp30 = getDestinationMove;
                  }
                }
                return null;
              }
            }
          }
        }
        const fn = function x() {
          if (closure_4) {
            let mapped = closure_12;
          } else {
            const _categories = categories._categories;
            const found = _categories.filter((channel) => {
              channel = channel.channel;
              let canViewChannelListResult = closure_1_0;
              if (!closure_1_0) {
                let tmp5 = null;
                if (channel.id !== NULL_STRING_CHANNEL_ID) {
                  tmp5 = channel;
                }
                canViewChannelListResult = isFavorites(listChannel[15]).canViewChannelList(tmp5);
                const obj = isFavorites(listChannel[15]);
              }
              return canViewChannelListResult;
            });
            mapped = found.map((channel) => {
              channel = channel.channel;
              let tmp = null;
              if (channel.id !== NULL_STRING_CHANNEL_ID) {
                tmp = channel;
              }
              const obj = { id: channel.id, label: isFavorites(listChannel[16]).computeChannelName(channel, UserStore, RelationshipStore), disabled: null };
              let tmp3 = channel.id === closure_1_5;
              if (!tmp3) {
                let tmp4 = closure_1_0;
                if (!closure_1_0) {
                  let tmp6 = null != guild;
                  if (tmp6) {
                    tmp6 = categories(listChannel[15])(tmp, tmp5);
                  }
                  tmp4 = tmp6;
                }
                tmp3 = !tmp4;
              }
              obj.disabled = tmp3;
              return obj;
            });
          }
          return mapped;
        };
        const items1 = [categories, tmp5, tmp7, isFavorites, guild];
        cResult[11] = categories;
        cResult[12] = tmp7;
        cResult[13] = guild;
        cResult[14] = tmp5;
        cResult[15] = isFavorites;
        cResult[16] = fn;
        cResult[17] = items1;
        tmp21 = items1;
        tmp20 = fn;
      }
    }
    if (listChannel.isCategory()) {
      let _categories = categories._categories;
      let found = _categories.filter((channel) => channel.channel.id !== NULL_STRING_CHANNEL_ID);
    } else {
      found = tmp(tmp2[14]).getSectionSiblings(listChannel, categories);
      const tmpResult3 = tmp(tmp2[14]);
    }
    cResult[5] = categories;
    cResult[6] = listChannel;
    cResult[7] = found;
  }
  let obj = isFavorites(listChannel[10]);
  const categoryKey = isFavorites(listChannel[14]).getCategoryKey(listChannel.parent_id, categories);
  cResult[2] = categories;
  cResult[3] = listChannel.parent_id;
  cResult[4] = categoryKey;
  tmp7 = categoryKey;
  const tmpResult4 = isFavorites(listChannel[14]);
}) : (function useChannelMoveAction(arg0) {
  let tmp = closure_14(arg0);
  const isFavorites = tmp.isFavorites;
  ({ listGuildId, categories } = tmp);
  let id = tmp.listChannel;
  guild = tmp.guild;
  let isCategoryResult = id.isCategory();
  GuildStore = isCategoryResult;
  const categoryKey = isFavorites(id[14]).getCategoryKey(id.parent_id, categories);
  if (id.isCategory()) {
    let _categories = categories._categories;
    let found = _categories.filter((channel) => channel.channel.id !== NULL_STRING_CHANNEL_ID);
  } else {
    found = tmp3(tmp4[14]).getSectionSiblings(id, categories);
    const tmp3Result = tmp3(tmp4[14]);
  }
  let id1 = null;
  if (found.length > 1) {
    const obj2 = { first: found[0], last: found[found.length - 1] };
    id1 = obj2;
  }
  let obj = isFavorites(id[14]);
  const items = [guild, GuildStore, categoryKey, UserStore, RelationshipStore];
  const items1 = [categories, isCategoryResult, categoryKey, isFavorites, guild];
  const stateFromStores = isFavorites(id[11]).useStateFromStores(items, () => {
    if (isCategoryResult) {
      let mapped = closure_12;
    } else {
      const _categories = categories._categories;
      const found = _categories.filter((channel) => {
        channel = channel.channel;
        let canViewChannelListResult = closure_1_0;
        if (!closure_1_0) {
          let tmp5 = null;
          if (channel.id !== NULL_STRING_CHANNEL_ID) {
            tmp5 = channel;
          }
          canViewChannelListResult = isFavorites(id[15]).canViewChannelList(tmp5);
          const obj = isFavorites(id[15]);
        }
        return canViewChannelListResult;
      });
      mapped = found.map((channel) => {
        channel = channel.channel;
        let tmp = null;
        if (channel.id !== NULL_STRING_CHANNEL_ID) {
          tmp = channel;
        }
        const obj = { id: channel.id, label: isFavorites(id[16]).computeChannelName(channel, UserStore, RelationshipStore), disabled: null };
        let tmp3 = channel.id === categoryKey;
        if (!tmp3) {
          let tmp4 = closure_1_0;
          if (!closure_1_0) {
            let tmp6 = null != guild;
            if (tmp6) {
              tmp6 = categories(id[15])(tmp, tmp5);
            }
            tmp4 = tmp6;
          }
          tmp3 = !tmp4;
        }
        obj.disabled = tmp3;
        return obj;
      });
    }
    return mapped;
  }, items1, areDestinationsEqual);
  if (!isFavorites) {
    if (id.isThread()) {
      return null;
    }
  }
  if (null != listGuildId) {
    if (!tmp.isBlocked) {
      if (!stateFromStores.some((disabled) => !disabled.disabled)) {
        if (null == id1) {
          return null;
        }
      }
      if (!isCategoryResult) {
        isCategoryResult = categoryKey === NULL_STRING_CHANNEL_ID;
      }
      const obj3 = { label: null, guildId: null, channel: null, isFavorites: null, destinations: null, placements: null, getDestinationMove: null, getPlacementMove: null };
      const intl = tmp3(tmp4[17]).intl;
      obj3.label = intl.string(tmp3(tmp4[17]).t.A95Fzm);
      obj3.guildId = listGuildId;
      obj3.channel = id;
      obj3.isFavorites = isFavorites;
      obj3.destinations = stateFromStores;
      if (null == id1) {
        obj3.placements = null;
        obj3.getDestinationMove = function getDestinationMove(categoryKey) {
          let tmp = null;
          if (categoryKey !== NULL_STRING_CHANNEL_ID) {
            tmp = categoryKey;
          }
          const obj = { targetParentId: tmp, updates: ChannelSortingUtils.getChannelPlacementUpdates(id, categories, categoryKey, "last") };
          return obj;
        };
        obj3.getPlacementMove = function getPlacementMove(arg0) {
          let parent_id = id.parent_id;
          if (parent_id == null) {
            parent_id = null;
          }
          const obj = { targetParentId: parent_id, updates: ChannelSortingUtils.getChannelPlacementUpdates(id, categories, categoryKey, arg0) };
          return obj;
        };
        return obj3;
      } else {
        const intl2 = tmp3(tmp4[17]).intl;
        const t = tmp3(tmp4[17]).t;
        const obj4 = { firstLabel: intl2.string(isCategoryResult ? t.IMqgs9 : t.Q9TKt6), lastLabel: null, isFirst: null, isLast: null };
        const intl3 = tmp3(tmp4[17]).intl;
        let id2 = intl3.string;
        const t2 = tmp3(tmp4[17]).t;
        obj4.lastLabel = id2(isCategoryResult ? t2["8fQe3x"] : t2["/Pkxmw"]);
        id2 = id1.first.channel.id;
        obj4.isFirst = id2 === id.id;
        id1 = id1.last.channel.id;
        id = id.id;
        obj4.isLast = id1 === id;
      }
    }
  }
  return null;
});