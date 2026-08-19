// === Module 9044: filterStaffGuild ===

// Module 9044 (filterStaffGuild)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7589 */;
import generateHydrationId from "generateHydrationId" /* 9056 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import map from "map" /* 9045 */;
import getHash from "getHash" /* 4288 */;
import scheduledEventSort from "scheduledEventSort" /* 4370 */;
import scheduledEventSort2 from "scheduledEventSort" /* 4370 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import initialize from "initialize" /* 9052 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import initialize2 from "initialize" /* 9054 */;
import initialize3 from "initialize" /* 9055 */;
import ME from "ME" /* 676 */;
import { ContentInventoryFeedKey } from "ContentInventoryFeedKey" /* 9064 */;

require = fn;
function filterStaffGuild(data) {
  if (closure_19.filterStaffContent()) {
    if (obj.isGuildItem(data)) {
      if (data.data.guild_id === MessageEmbedTypes.GAME_CONTENT_GUILD_ID) {
        return true;
      } else {
        const guild = store2.getGuild(data.data.guild_id);
        if (null != guild) {
          const features = guild.features;
        }
        return false;
      }
    }
    return true;
  } else {
    return true;
  }
}
function injectItemsIntoList(arr, arr2) {
  closure_0 = arg2;
  c1 = 7;
  const found = arr.filter((item, index) => item.type !== ACTIVITY);
  const item = arr2.forEach((item, index) => {
    let arr = found1;
    if ((index + 1) * c1 < found1.length) {
      arr.splice((index + 1) * tmp, 0, item);
    } else {
      arr = arr.push(item);
    }
  });
  return found;
}
function injectRecommendedGuildsRow() {
  items1 = items1.filter((item, index) => item.type !== callback(7589).ICYMIItemTypes.RECOMMENDED_GUILDS);
  items = items.filter((item, index) => item.type !== callback(7589).ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = store2.getGuildsArray();
    const tmp24 = guildsArray.filter((item, index) => {
      const features = item.features;
      return features.has(constants.COMMUNITY);
    }).length >= 5;
    const readTimestamp = store3.getReadTimestamp("recommendedGuilds");
    if (tmp24) {
      if (null != readTimestamp) {
        const _Date = Date;
        if (Date.now() - c49 > DAY) {
          const _Date2 = Date;
        }
      }
    }
    const obj = { id: "recommendedGuilds", type: null, score: 50 };
    obj[1] = MessageEmbedTypes.ICYMIItemTypes.RECOMMENDED_GUILDS;
    closure_34[obj.id] = obj;
    closure_33[obj.id] = obj;
    if (0 === items1.length) {
      items = [obj];
      HermesBuiltin.arraySpread(items, 1);
    } else {
      if (tmp24) {
        if (tmp24) {
          const _Math = Math;
          const _Math2 = Math;
          items1.splice(Math.round(2 * Math.random()) + 3 - 1, 0, obj);
        } else {
          items1.splice(5, 0, obj);
        }
      }
      items1 = [];
      items1[HermesBuiltin.arraySpread(items1, 0)] = obj;
    }
  }
}
function finalizeNewDehydratedItemsContent() {
  set = new Set();
  const item = items1.forEach((item, index) => {
    set.add(item.id);
  });
  if (null != _null2) {
    if (set.has(_null2.id)) {
      const id = tmp19.id;
      const type = _null2.type;
      const findIndexResult = items1.findIndex((item, index) => {
        let tmp = item.id === id;
        if (tmp) {
          tmp = item.type === type;
        }
        return tmp;
      });
      if (-1 !== findIndexResult) {
        _null2 = items1[findIndexResult];
        const found = items1.filter((item, index) => item.id !== id);
        const items = [_null2];
        HermesBuiltin.arraySpread(found, 1);
        items1 = items;
      }
    } else {
      items1 = [tmp19];
      HermesBuiltin.arraySpread(items1, 1);
      set.add(_null2.id);
    }
  }
  const item1 = items1.forEach((item, index) => {
    closure_33[item.id] = item;
    if (item.type === set(type[19]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(item.data.user_id)) {
        closure_35[item.id] = true;
      } else {
        closure_34[item.id] = set(type[18]).customStatusToContentInventoryEntry(item);
        const tmpResult = set(type[18]);
      }
    }
  });
}
function reload(arg0) {
  if (arr.length > 0) {
    closure_27 = arr;
    arr = [];
    closure_31 = [];
  }
  closure_38 = closure_38 + 1;
  if (null != arg0) {
    ({ newUnread: found, newRead: found1 } = arg0);
  } else {
    let items = [];
    let ACTIVITY = items;
    let items1 = [];
    c1 = items1;
    let items2 = [];
    found1 = items2;
    let item = closure_27.forEach((item, index) => {
      const tmp = null != closure_1_20.getReadTimestamp(item.id);
      let tmp4 = item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = item.data.message_context;
        let prop;
        if (message_context != null) {
          prop = message_context.external_content_application_id;
        }
        tmp4 = null == prop;
      }
      let tmp6 = tmp;
      if (tmp4) {
        let tmp7 = tmp;
        if (!tmp) {
          tmp7 = !set1(items3[18]).isItemUnreadInChannel(item.data.channel_id, item.data.message_id);
          const tmp2Result = set1(items3[18]);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(item);
      } else {
        if (item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
          if (item.data.has_mention) {
            items3.push(item);
          }
        }
        items2.push(item);
      }
    });
    const items3 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items2, 0));
    const items4 = [items3, items.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
    [found, found1] = items6(items4, 2);
    let tmp33 = items6(items4, 2);
  }
  (function injectGuildEvents() {
    guildIds = guildIds.getGuildIds();
    const items = [];
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == dependencyMap[nextResult]) {
        guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(tmp3);
        let num = 0;
        for (const item10031 of guildScheduledEventsForGuild) {
          if (!callback2(item10031)) {
            if (callback(item10031, 2 * items2(found1[17]).Seconds.DAY)) {
              if (null == table2[item10031.id]) {
                let obj = { id: null, type: null, score: 10, event_id: null };
                obj[0] = item10031.id;
                obj[1] = items1(found1[19]).ICYMIItemTypes.GUILD_EVENT;
                obj[3] = item10031.id;
                table2[item10031.id] = obj;
              }
              obj = { id: null, type: null, score: 10, data: null };
              obj[0] = item10031.id;
              obj[1] = items1(found1[19]).ICYMIItemTypes.GUILD_EVENT;
              obj1 = { guild_id: null, event_id: null, channel_id: null };
              ({ guild_id: obj4[0], id: obj4[1], channel_id } = item10031);
              obj1[2] = channel_id;
              obj[3] = obj1;
              let arr = items.push(obj);
              let sum = num + 1;
              num = sum;
              if (1 <= sum) {
                obj.return();
                break;
              }
              break;
            }
          }
          continue;
        }
      }
      continue;
    }
    const sorted = items.sort((data, data2) => {
      const guildAffinity = store.getGuildAffinity(data.data.guild_id);
      const guildAffinity1 = store.getGuildAffinity(data2.data.guild_id);
      let num = 0;
      if (null != guildAffinity1) {
        num = guildAffinity1.score;
      }
      let num2 = 0;
      if (null != guildAffinity) {
        num2 = guildAffinity.score;
      }
      return num - num2;
    });
    const items1 = [];
    const items2 = [];
    const item = items.forEach((item, index) => {
      closure_1_33[item.id] = item;
      if (null != closure_1_20.getReadTimestamp(item.id)) {
        items2.push(item);
      } else {
        items1.push(item);
      }
    });
    closure_45 = callback4(closure_45, items1, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_46 = callback4(closure_46, items2, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
  })();
  ACTIVITY = new Set();
  c1 = {};
  const items5 = [];
  found1 = items5;
  items6 = [];
  feed = feed.getFeed(ContentInventoryFeedKey.GLOBAL_FEED);
  let entries;
  if (feed != null) {
    entries = feed.entries;
  }
  if (entries == null) {
    entries = [];
  }
  let sorted = entries.sort((rank, rank2) => rank.rank - rank2.rank);
  const substr = sorted.slice(0, 5);
  const item1 = entries.forEach((item, index) => {
    let obj = ACTIVITY;
    if (!ACTIVITY.has(item.content.id)) {
      let tmpResult = ACTIVITY(found1[21]);
      if (!tmpResult.isEntryExpired(item.content)) {
        tmpResult = ACTIVITY(found1[22]);
        if (tmpResult.isGamingLikeEntry(item.content)) {
          if (null == table[item.content.author_id]) {
            const _Set = Set;
            set = new Set();
            table[item.content.author_id] = set;
          }
          if (!obj4.has(item.content.extra.application_id)) {
            table[item.content.author_id].add(item.content.extra.application_id);
          }
          obj4 = table[item.content.author_id];
        }
        if (null == closure_1_34[item.content.id]) {
          obj = { id: null, type: null, score: 15, activity: null };
          obj[0] = item.content.id;
          obj[1] = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
          obj[3] = item.content;
          closure_1_34[item.content.id] = obj;
        }
        obj = { id: null, type: null, score: 15, data: null };
        obj[0] = item.content.id;
        obj[1] = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
        obj1 = { user_id: null, content_id: null };
        obj1[0] = item.content.author_id;
        obj1[1] = item.content.id;
        obj[3] = obj1;
        obj.add(item.content.id);
        closure_1_33[obj.id] = obj;
        if (null != closure_1_20.getReadTimestamp(obj.id)) {
          items6.push(obj);
        } else {
          found1.push(obj);
        }
      }
    }
  });
  ACTIVITY = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
  found = found.filter((item, index) => item.type !== ACTIVITY);
  found1 = found;
  const item2 = items5.forEach((item, index) => {
    let arr = found1;
    if ((index + 1) * c1 < found1.length) {
      arr.splice((index + 1) * tmp, 0, item);
    } else {
      arr = arr.push(item);
    }
  });
  ACTIVITY = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
  c1 = 5;
  found1 = undefined;
  found1 = found1.filter((item, index) => item.type !== ACTIVITY);
  const item3 = items6.forEach((item, index) => {
    let arr = found1;
    if ((index + 1) * c1 < found1.length) {
      arr.splice((index + 1) * tmp, 0, item);
    } else {
      arr = arr.push(item);
    }
  });
  injectRecommendedGuildsRow();
  let tmp14 = null != closure_32.load_id;
  if (tmp14) {
    tmp14 = load_id !== closure_32.load_id;
  }
  if (tmp14) {
    const ICYMIAnalytics = tmp7(tmp8[23]).ICYMIAnalytics;
    let obj = { newTrackingProps: null, hasNewContent: null, unreadFeedItems: null, readFeedItems: null, homeSessionId: "gravity" };
    obj[0] = closure_32;
    obj[1] = c40;
    obj[2] = found;
    obj[3] = found1;
    ICYMIAnalytics.trackFeedLoaded(obj);
    load_id = closure_32.load_id;
    if (load_id == null) {
      load_id = null;
    }
    closure_32 = {};
  }
  c47 = 0;
  if (found.length + found1.length === 0) {
    c54 = true;
  }
  set = new Set();
  const items7 = [...found1];
  ACTIVITY(found1[18]).hydrateItems(items7, 0, ACTIVITY(found1[19]).ICYMI_PAGE_SIZE);
  c51 = false;
  const tmp7Result = ACTIVITY(found1[18]);
}
function getNewUnreadItems(arr9, channelId) {
  const items = [];
  const iter = arr9[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.type !== MessageEmbedTypes.ICYMIItemTypes.RECOMMENDED_GUILDS) {
      if (!set.has(tmp2.id)) {
        let tmp7 = null == store3.getReadTimestamp(tmp2.id);
        if (tmp7) {
          let tmp9 = tmp2.type !== MessageEmbedTypes.ICYMIItemTypes.MESSAGE;
          if (!tmp9) {
            let tmp3Result = generateHydrationId;
            let result = tmp3Result.isItemUnreadInChannel(tmp2.data.channel_id, tmp2.data.message_id);
            if (result) {
              result = tmp2.data.channel_id !== channelId;
            }
            tmp9 = result;
          }
          tmp7 = tmp9;
        }
        if (tmp7) {
          let arr = items.push(tmp2);
        }
      }
    }
    continue;
  }
  return items;
}
function maybeFilterChannelItems(channelId, stateFromStores1) {
  const obj = _require(9056);
  if (numberToCustomScoreResult === _require(9056).ICYMICustomScore.MUTED) {
    closure_27 = closure_27.filter((item, index) => {
      const isGuildItemResult = callback(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.channel_id !== callback;
      }
      return tmp2;
    });
    closure_45 = closure_45.filter((item, index) => {
      const isGuildItemResult = callback(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.channel_id !== callback;
      }
      return tmp2;
    });
    closure_46 = closure_46.filter((item, index) => {
      const isGuildItemResult = callback(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.channel_id !== callback;
      }
      return tmp2;
    });
    arr = arr.filter((item, index) => {
      const isGuildItemResult = callback(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.channel_id !== callback;
      }
      return tmp2;
    });
    _require = channelId;
    closure_31 = closure_31.filter((item, index) => {
      const isGuildItemResult = callback(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.channel_id !== callback;
      }
      return tmp2;
    });
  }
}
function maybeFilterGuildItems(guildId, guildScore) {
  const obj = _require(9056);
  if (numberToCustomScoreResult === _require(9056).ICYMICustomScore.MUTED) {
    closure_27 = closure_27.filter((item, index) => {
      const isGuildItemResult = guildId(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.guild_id !== guildId;
      }
      return tmp2;
    });
    closure_45 = closure_45.filter((item, index) => {
      const isGuildItemResult = guildId(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.guild_id !== guildId;
      }
      return tmp2;
    });
    closure_46 = closure_46.filter((item, index) => {
      const isGuildItemResult = guildId(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.guild_id !== guildId;
      }
      return tmp2;
    });
    arr = arr.filter((item, index) => {
      const isGuildItemResult = guildId(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.guild_id !== guildId;
      }
      return tmp2;
    });
    _require = guildId;
    closure_31 = closure_31.filter((item, index) => {
      const isGuildItemResult = guildId(dependencyMap[18]).isGuildItem(item);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = item.data.guild_id !== guildId;
      }
      return tmp2;
    });
  }
}
function handleReaction(colors) {
  ({ emoji, reactionType } = colors);
  if (null == dependencyMap[colors.messageId]) {
    return false;
  } else if (tmp3.type !== MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
    return false;
  } else {
    const tmp5 = store.getId() === tmp2;
    if ("MESSAGE_REACTION_ADD" === tmp) {
      const message2 = tmp3.message;
      const obj = { colors: null, reactionType: null };
      obj[0] = colors.colors;
      obj[1] = reactionType;
      let addReactionResult = message2.addReaction(emoji, tmp5, obj);
    } else {
      const message = tmp3.message;
      addReactionResult = message.removeReaction(emoji, tmp5, reactionType);
    }
    tmp3.message = addReactionResult;
  }
}
function handleAck(channelId) {
  channelId = channelId.channelId;
  const items = [];
  const items1 = [];
  const item = items1.forEach((item, index) => {
    if (index > closure_1_47) {
      if (item.type === set(items4[19]).ICYMIItemTypes.MESSAGE) {
        if (item.data.channel_id === set) {
          items3.push(item);
        }
      }
    }
    items4.push(item);
  });
  const items2 = [];
  set = items2;
  const items3 = [];
  const items4 = [];
  const item1 = arr.forEach((item, index) => {
    const tmp = null != closure_1_20.getReadTimestamp(item.id);
    let tmp4 = item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
    if (tmp4) {
      const message_context = item.data.message_context;
      let prop;
      if (message_context != null) {
        prop = message_context.external_content_application_id;
      }
      tmp4 = null == prop;
    }
    let tmp6 = tmp;
    if (tmp4) {
      let tmp7 = tmp;
      if (!tmp) {
        tmp7 = !set1(items3[18]).isItemUnreadInChannel(item.data.channel_id, item.data.message_id);
        const tmp2Result = set1(items3[18]);
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      set1.push(item);
    } else {
      if (item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
        if (item.data.has_mention) {
          items3.push(item);
        }
      }
      items2.push(item);
    }
  });
  const items5 = [...items3];
  const items6 = [items5, items2.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
  const tmp4 = callback(items6, 2);
  if (c41) {
    let tmp15 = tmp2;
    if (tmp2) {
      tmp15 = arr8.length >= set(items4[19]).MIN_ITEMS_FOR_NEW_PILL;
    }
    let tmp5 = tmp15;
  } else {
    tmp5 = tmp2;
    if (tmp2) {
      const _Date = Date;
      const diff = Date.now() - c29;
      let flag = false;
      if (diff > 6 * items3(items4[17]).Millis.HOUR) {
        const _Set = Set;
        set = new Set(items1.map((item, index) => item.id));
        const substr = arr.slice(0, 20);
        flag = substr.filter((item, index) => set1.has(item.id)).length >= 3;
      }
      tmp5 = flag;
    }
  }
  flag = tmp5;
  if (0 === items.length) {
    if (tmp2 === flag) {
      return false;
    }
  }
  if (0 !== items.length) {
    const items7 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items7, 0));
  }
  arr8 = getNewUnreadItems(callback(items6, 2)[0], channelId);
}
({ eventScheduledToStartWithin: closure_6, isGuildEventEnded: error, isGuildScheduledEventActive: closure_8 } = scheduledEventSort);
({ ChannelTypes: closure_21, GuildFeatures: closure_22, Permissions: closure_23 } = ME);
const DAY = obj132Default.Millis.DAY;
let closure_26 = 3 * obj132Default.Millis.DAY;
let closure_27 = [];
let c28 = null;
let c29 = 0;
let closure_30 = [];
let closure_31 = [];
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
let closure_36 = {};
let closure_37 = {};
let c38 = 0;
let c39 = false;
let c40 = false;
let c41 = false;
let c42 = null;
let c43 = null;
let c44 = 0;
let closure_45 = [];
let closure_46 = [];
let c47 = 0;
let closure_48 = [];
let c49 = 0;
let c50 = true;
let c51 = false;
let set = new Set();
let c53 = false;
let c54 = false;
let c55 = 0;
let c56 = 0;
const PersistedStore = initializeDefault.PersistedStore;
class ICYMIStore extends PersistedStore {
}
const prototype = ICYMIStore.prototype;
prototype["initialize"] = function initialize(dehydratedItems) {
  this.waitFor(closure_10, closure_11, closure_4, closure_5, closure_12, closure_9, closure_13, closure_19, closure_20, closure_14, closure_15, closure_16, closure_17, closure_18);
  if (null != dehydratedItems) {
    dehydratedItems = dehydratedItems.dehydratedItems;
    if (dehydratedItems == null) {
      dehydratedItems = [];
    }
    const item = dehydratedItems.forEach((item, index) => {
      closure_33[item.id] = item;
    });
    let customGuildScores = dehydratedItems.customGuildScores;
    if (customGuildScores == null) {
      customGuildScores = {};
    }
    let prop = dehydratedItems.customChannelScoresByGuild;
    if (prop == null) {
      prop = {};
    }
    let num = dehydratedItems.numOpens;
    if (num == null) {
      num = 0;
    }
    let num2 = dehydratedItems.lastOpened;
    if (num2 == null) {
      num2 = 0;
    }
    let num3 = dehydratedItems.lastJoinedRecommendedGuild;
    if (num3 == null) {
      num3 = 0;
    }
    let num4 = dehydratedItems.lastTakenICYMISurvey;
    if (num4 == null) {
      num4 = 0;
    }
  }
};
prototype["getVersion"] = function getVersion() {
  return c38;
};
prototype["getDehydratedItems"] = function getDehydratedItems() {
  return closure_27;
};
prototype["getNewDehydratedItems"] = function getNewDehydratedItems() {
  return closure_30;
};
prototype["getDehydratedItem"] = function getDehydratedItem(arg0) {
  let tmp = table[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getHydratedItem"] = function getHydratedItem(id) {
  let tmp = dependencyMap[id];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getMessage"] = function getMessage(arg0) {
  let message = null;
  if (null != dependencyMap[arg0]) {
    message = null;
    if (tmp.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
      message = tmp.message;
    }
  }
  return message;
};
prototype["getHydratedItems"] = function getHydratedItems() {
  return closure_34;
};
prototype["getUnreadDisplayItems"] = function getUnreadDisplayItems() {
  return closure_45;
};
prototype["getNewUnreadDehydratedItems"] = function getNewUnreadDehydratedItems() {
  return closure_31;
};
prototype["getReadDisplayItems"] = function getReadDisplayItems() {
  return closure_46;
};
prototype["getNextIndexToHydrate"] = function getNextIndexToHydrate() {
  return c47;
};
prototype["getMissingItems"] = function getMissingItems() {
  return closure_35;
};
prototype["customMuted"] = function customMuted(id, id) {
  const self = this;
  const customGuildScore = this.getCustomGuildScore(id);
  let tmp4 = customGuildScore === generateHydrationId.ICYMICustomScore.MUTED;
  if (!tmp4) {
    const customChannelScore = self.getCustomChannelScore(id, id);
    tmp4 = customChannelScore === generateHydrationId.ICYMICustomScore.MUTED;
  }
  return tmp4;
};
prototype["getCustomChannelScore"] = function getCustomChannelScore(guild_id, id) {
  if (null != dependencyMap2[guild_id]) {
    if (null != dependencyMap2[guild_id][id]) {
      let UNKNOWN = generateHydrationId.numberToCustomScore(dependencyMap2[guild_id][id]);
    }
    return UNKNOWN;
  }
  UNKNOWN = generateHydrationId.ICYMICustomScore.UNKNOWN;
};
prototype["getCustomGuildScore"] = function getCustomGuildScore(id) {
  let num = table2[id];
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getCustomGuildScores"] = function getCustomGuildScores() {
  return closure_36;
};
prototype["hasNewContent"] = function hasNewContent() {
  return c40;
};
prototype["getCurrentStatusAttachments"] = function getCurrentStatusAttachments(arg0) {
  if (null != _null) {
    return [];
  }
};
prototype["getLoadId"] = function getLoadId() {
  return c28;
};
prototype["hasOpenedEnoughTimes"] = function hasOpenedEnoughTimes() {
  return 5 === c44;
};
prototype["hasOpened"] = function hasOpened() {
  return c41;
};
prototype["getDiscoverableGuilds"] = function getDiscoverableGuilds() {
  return closure_48;
};
prototype["videosMuted"] = function videosMuted() {
  return c50;
};
prototype["isRefreshing"] = function isRefreshing() {
  return c51;
};
prototype["isHydrating"] = function isHydrating() {
  return set.size > 0;
};
prototype["notificationItem"] = function notificationItem(unreadItems) {
  return c43;
};
prototype["getIsTabFocused"] = function getIsTabFocused() {
  return c53;
};
prototype["isFirstPageHydrated"] = function isFirstPageHydrated() {
  return c54;
};
prototype["lastScrollEvent"] = function lastScrollEvent() {
  return c55;
};
prototype["lastTakenICYMISurvey"] = function lastTakenICYMISurvey() {
  return c56;
};
prototype["getIndexInHydratedFeed"] = function getIndexInHydratedFeed(id) {
  closure_0 = id;
  if ("recommended_guilds" !== id) {
    if ("recommendedGuilds" !== id) {
      const items = [];
      HermesBuiltin.arraySpread(closure_46, HermesBuiltin.arraySpread(closure_45, 0));
      const found = items.filter((item, index) => null != table2[item.id]);
      let findIndexResult = found.findIndex((item, index) => item.id === closure_0);
    }
    return findIndexResult;
  }
  const items1 = [...closure_46];
  findIndexResult = items1.findIndex((item, index) => item.type === id(table[19]).ICYMIItemTypes.RECOMMENDED_GUILDS);
};
prototype["getState"] = function getState() {
  return { dehydratedItems: closure_27, numOpens: c44, customGuildScores: closure_36, customChannelScoresByGuild: closure_37, lastOpened: c29, lastJoinedRecommendedGuild: c49, lastTakenICYMISurvey: c56 };
};
ICYMIStore.displayName = "ICYMIStore";
ICYMIStore.persistKey = "ICYMIStore";
const iCYMIStore = new ICYMIStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_27 = [];
    closure_30 = [];
    closure_31 = [];
    closure_33 = {};
    closure_32 = {};
    closure_34 = {};
    closure_35 = {};
    c28 = null;
    closure_36 = {};
    closure_37 = {};
    c38 = 0;
    c39 = false;
    c40 = false;
    c41 = false;
    closure_45 = [];
    closure_46 = [];
    c47 = 0;
    c29 = 0;
    c49 = 0;
    c50 = true;
    c51 = false;
    set = new Set();
    c43 = null;
    c53 = false;
    c54 = false;
    c42 = null;
    c55 = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      if (null == c28) {
        return true;
      } else {
        if (items7.length > 0) {
          let items = items7;
        } else {
          items = [];
          HermesBuiltin.arraySpread(items1, 0);
        }
        items7 = items;
        finalizeNewDehydratedItemsContent();
        reload();
      }
    } else if (null != messageItem) {
      let obj = { id: null, type: null, score: 50, data: null };
      obj[0] = messageItem.message.id;
      obj[1] = items2(items4[19]).ICYMIItemTypes.MESSAGE;
      obj = { channel_id: null, message_id: null, guild_id: null, channel_type: null };
      obj[0] = messageItem.channel_id;
      obj[1] = messageItem.message.id;
      obj[2] = messageItem.guild_id;
      obj[3] = constants.GUILD_TEXT;
      obj[3] = obj;
      closure_33[messageItem.message.id] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj.message = items2(items4[25]).createMessageRecord(messageItem.message);
      closure_34[messageItem.message.id] = obj;
      if (null == c28) {
        if (null == closure_32) {
          items1 = [obj];
          HermesBuiltin.arraySpread(items1, 1);
          items2 = [];
          const items3 = [];
          items4 = [];
          const item = items1.forEach((item, index) => {
            const tmp = null != closure_1_20.getReadTimestamp(item.id);
            let tmp4 = item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
            if (tmp4) {
              const message_context = item.data.message_context;
              let prop;
              if (message_context != null) {
                prop = message_context.external_content_application_id;
              }
              tmp4 = null == prop;
            }
            let tmp6 = tmp;
            if (tmp4) {
              let tmp7 = tmp;
              if (!tmp) {
                tmp7 = !set1(items3[18]).isItemUnreadInChannel(item.data.channel_id, item.data.message_id);
                const tmp2Result = set1(items3[18]);
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              set1.push(item);
            } else {
              if (item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
                if (item.data.has_mention) {
                  items3.push(item);
                }
              }
              items2.push(item);
            }
          });
          const items5 = [];
          HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items4, 0));
          const items6 = [items5, items2.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
          [closure_45, closure_46] = callback(items6, 2);
          const tmp26 = callback(items6, 2);
        }
        return true;
      }
      items7 = [obj];
      HermesBuiltin.arraySpread(items7, 1);
      reload();
      const obj4 = items2(items4[25]);
    } else {
      return false;
    }
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(items) {
    items = items.items;
    let set1;
    ({ loadId, startTime, isInitialLoad, isReloading } = items);
    new Set(set1(items3[19]).SUPPORTED_ITEM_TYPES);
    const found = items.filter((item, index) => set1.has(item.type));
    const found1 = found.filter(filterStaffGuild);
    const arr = found1.map((item, index) => {
      if (item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
        if (null != item.data.message_context) {
          let tmp2 = null != item.data.message_context.reply_message_id;
          if (tmp2) {
            const _parseInt = parseInt;
            tmp2 = 0 !== parseInt(item.data.message_context.reply_message_id);
          }
          obj = {};
          if (tmp2) {
            obj.reply_message_id = item.data.message_context.reply_message_id;
          }
          let tmp3 = null != item.data.message_context.before_message_id;
          if (tmp3) {
            const _parseInt2 = parseInt;
            tmp3 = 0 !== parseInt(item.data.message_context.before_message_id);
          }
          if (tmp3) {
            obj.before_message_id = item.data.message_context.before_message_id;
          }
          let tmp5 = null != item.data.message_context.after_message_id;
          if (tmp5) {
            const _parseInt3 = parseInt;
            tmp5 = 0 !== parseInt(item.data.message_context.after_message_id);
          }
          if (tmp5) {
            obj.after_message_id = item.data.message_context.after_message_id;
          }
          let tmp7 = null != item.data.message_context.external_content_application_id;
          if (tmp7) {
            const _parseInt4 = parseInt;
            tmp7 = 0 !== parseInt(item.data.message_context.external_content_application_id);
          }
          if (tmp7) {
            obj.external_content_application_id = item.data.message_context.external_content_application_id;
          }
          let tmp9 = null != item.data.message_context.reference_message_id;
          if (tmp9) {
            const _parseInt5 = parseInt;
            tmp9 = 0 !== parseInt(item.data.message_context.reference_message_id);
          }
          if (tmp9) {
            obj.reference_message_id = item.data.message_context.reference_message_id;
          }
          item.data.message_context = obj;
        }
      }
      return item;
    });
    finalizeNewDehydratedItemsContent();
    let obj = { load_id: loadId, load_time_millis: Date.now() - startTime, feed_item_ids: arr.map((item, index) => item.id) };
    const items1 = [];
    set1 = items1;
    const items2 = [];
    items3 = [];
    const item = arr.forEach((item, index) => {
      const tmp = null != closure_1_20.getReadTimestamp(item.id);
      let tmp4 = item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = item.data.message_context;
        let prop;
        if (message_context != null) {
          prop = message_context.external_content_application_id;
        }
        tmp4 = null == prop;
      }
      let tmp6 = tmp;
      if (tmp4) {
        let tmp7 = tmp;
        if (!tmp) {
          tmp7 = !set1(items3[18]).isItemUnreadInChannel(item.data.channel_id, item.data.message_id);
          const tmp2Result = set1(items3[18]);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(item);
      } else {
        if (item.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
          if (item.data.has_mention) {
            items3.push(item);
          }
        }
        items2.push(item);
      }
    });
    const items4 = [...items2];
    const items5 = [items4, items1.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
    set = new Set(set1(items3[19]).SUPPORTED_ITEM_TYPES);
    [arr9, arr10] = callback(items5, 2);
    let tmp6 = callback(items5, 2);
    if (c41) {
      if (0 !== c38) {
        if (!isInitialLoad) {
          if (c38 > 0) {
            c43 = null;
          }
          const tmp8 = arr11.length > tmp(tmp2[19]).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            c40 = tmp8;
          }
          if (tmp8) {
            const items6 = [];
            HermesBuiltin.arraySpread(arr10, HermesBuiltin.arraySpread(arr9, 0));
            tmp(tmp2[18]).hydrateItems(items6, 0, tmp(tmp2[19]).ICYMI_PAGE_SIZE);
            if (arr9.length + arr10.length === 0) {
              c54 = true;
            }
            const tmpResult = tmp(tmp2[18]);
          }
          const ICYMIAnalytics = tmp(tmp2[23]).ICYMIAnalytics;
          obj = { newTrackingProps: null, hasNewContent: null, unreadFeedItems: null, readFeedItems: null, homeSessionId: null };
          obj[0] = obj;
          obj[1] = c40;
          obj[2] = arr9;
          obj[3] = arr10;
          let str = "background_load";
          if (c53) {
            str = "foreground_load";
          }
          obj[4] = str;
          ICYMIAnalytics.trackFeedLoaded(obj);
        }
      }
    }
    c38 = 0;
    if (!c53) {
      const _Date = Date;
      const diff = Date.now() - c29;
      let flag = false;
      if (diff > 6 * items2(tmp2[17]).Millis.HOUR) {
        const _Set = Set;
        set1 = new Set(arr9.map((item, index) => item.id));
        const substr = arr13.slice(0, 20);
        flag = substr.filter((item, index) => set1.has(item.id)).length >= 3;
      }
      if (flag) {
        c40 = true;
        c39 = true;
      }
      obj = { newUnread: null, newRead: null };
      obj[0] = arr9;
      obj[1] = arr10;
      reload(obj);
      arr13 = arr;
    }
    c40 = false;
    arr11 = getNewUnreadItems(arr9);
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    c54 = true;
    let obj = {};
    let merged = Object.assign(obj);
    const _require = messageItems.reduce((acc, item, index) => {
      acc[item.message.id] = item;
      return acc;
    }, {});
    closure_1 = activityItems.reduce((acc, item, index) => {
      acc[item.id] = item;
      return acc;
    }, {});
    const item = requestMessageItems.forEach((item, index) => {
      if (null != dependencyMap[item.message_id]) {
        let tmp4 = closure_1_33[item.message_id];
        if (null == tmp4) {
          obj = { id: null, type: null, score: -1, data: null };
          obj[0] = item.message_id;
          obj[1] = dependencyMap(closure_1_2[19]).ICYMIItemTypes.MESSAGE;
          obj = { guild_id: null, channel_id: null, message_id: null, channel_type: null, has_mention: false };
          ({ guild_id: obj2[0], channel_id: obj2[1] } = tmp);
          obj[2] = tmp.message.id;
          obj[3] = closure_1_21.GUILD_TEXT;
          obj[3] = obj;
          tmp4 = obj;
        }
        const message = closure_1_14.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          obj = {};
          const merged = Object.assign(dependencyMap(closure_1_2[18]).createGravityMessageFromServer(tmp, tmp4));
          obj.message = message;
          obj[tmp.message.id] = obj;
          const obj4 = dependencyMap(closure_1_2[18]);
        } else {
          obj[tmp.message.id] = dependencyMap(closure_1_2[18]).createGravityMessageFromServer(tmp, tmp4);
          const obj3 = dependencyMap(closure_1_2[18]);
        }
      } else {
        closure_1_35[item.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((item, index) => {
      if (null != table[item.content_id]) {
        if (null != closure_1_33[item.content_id]) {
          obj = {};
          const merged = Object.assign(tmp4);
          obj.activity = tmp;
          obj[tmp.id] = obj;
        } else {
          closure_1_35[item.content_id] = true;
        }
      } else {
        closure_1_35[item.content_id] = true;
      }
    });
    set.delete(_require(9056).generateHydrationId(startingIndex, endingIndex));
  },
  LOAD_ICYMI_CUSTOM_SCORES: function handleLoadCustomScores(arg0) {
    const iter = arg0.scores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      obj[nextResult.guild_id] = nextResult.guild_score;
      let tmp5 = maybeFilterGuildItems(nextResult.guild_id, nextResult.guild_score);
      let _Object = Object;
      let keys = Object.keys(nextResult.custom_channel_scores);
      for (const item10028 of keys) {
        if (null == obj[tmp2.guild_id]) {
          obj[tmp2.guild_id] = {};
        }
        obj[tmp2.guild_id][item10028] = tmp2.custom_channel_scores[item10028];
        let tmp18 = maybeFilterChannelItems(item10028, tmp2.custom_channel_scores[item10028]);
        continue;
      }
      continue;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj);
  },
  LOAD_ICYMI_RECOMMENDED_GUILDS: function loadICYMIRecommendedGuilds(guilds) {
    guilds = guilds.guilds;
    closure_48 = guilds.map((item, index) => callback(table[24]).makeDiscoverableGuild(item.guild));
    injectRecommendedGuildsRow();
  },
  ICYMI_CUSTOM_SCORES_UPDATED: function handleCustomScoresUpdated(guildScore) {
    ({ channelScores, guildId } = guildScore);
    guildScore = guildScore.guildScore;
    if (null != guildScore) {
      obj[guildId] = guildScore;
      maybeFilterGuildItems(guildId, guildScore);
      obj = {};
      let merged = Object.assign(obj);
    }
    if (channelScores != null) {
      const item = channelScores.forEach((item, index) => {
        ({ channelId, score } = item);
        if (null == obj[guildId]) {
          obj[guildId] = {};
        }
        obj[guildId][channelId] = score;
        maybeFilterChannelItems(channelId, score);
        obj = {};
        const merged = Object.assign(obj);
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === arr.length) {
      return false;
    } else {
      reload();
      c40 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    c41 = true;
    closure_29 = Date.now();
    if (c39) {
      c39 = false;
      c40 = false;
    }
    if (closure_44 < 5) {
      closure_44 = closure_44 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    c44 = 6;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(arg0) {
    if (null == dependencyMap[arg0.messageId]) {
      return false;
    } else if (tmp2.type !== MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
      return false;
    } else {
      const message = tmp2.message;
      tmp2.message = message.addReactionBatch(tmp, store.getId());
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = tmp.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE;
      if (tmp5) {
        const message = tmp.message;
        tmp.message = message.set("reactions", []);
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(arg0) {
    let tmp3 = null != tmp2;
    if (tmp3) {
      const tmp6 = tmp2.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE;
      if (tmp6) {
        const message = tmp2.message;
        tmp2.message = message.removeReactionsForEmoji(tmp);
      }
      tmp3 = tmp6;
    }
    return tmp3;
  },
  CHANNEL_ACK: handleAck,
  MESSAGE_ACK: handleAck,
  ICYMI_JOINED_RECOMMENDED_GUILD: function handleJoinedRecommendedGuild() {
    closure_49 = Date.now();
  },
  ICYMI_SET_VIDEOS_MUTED: function handleSetVideosMuted(muted) {
    muted = muted.muted;
  },
  ICYMI_SET_REFRESHING: function handleSetRefreshing(refreshing) {
    refreshing = refreshing.refreshing;
  },
  LOAD_ICYMI_HYDRATED_ATTEMPT: function handleLoadHydratedAttempt(hydrationId) {
    set.add(hydrationId.hydrationId);
  },
  LOAD_ICYMI_HYDRATED_FAILED: function handleLoadHydratedFailed(hydrationId) {
    set.delete(hydrationId.hydrationId);
  },
  ICYMI_SET_FOCUSED_TAB: function handleSetFocusedTab(focused) {
    focused = focused.focused;
  },
  LOAD_ICYMI_CURRENT_STATUS_MEDIA: function handleLoadCurrentStatusMedia(attachments) {
    attachments = attachments.attachments;
    let tmp2 = null;
    if (null != attachments) {
      tmp2 = null;
      if (0 !== attachments.length) {
        let items = [tmp, ];
        const items1 = [];
        HermesBuiltin.arraySpread(attachments, 0);
        items[1] = items1;
        tmp2 = items;
      }
    }
    items = tmp2;
  },
  ICYMI_SCROLL_EVENT: function handleScrollEvent(timestamp) {
    timestamp = timestamp.timestamp;
  },
  ICYMI_TAKE_SURVEY: function handleTakeSurvey(takenAt) {
    takenAt = takenAt.takenAt;
  }
});
let result = require("obj132").fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default iCYMIStore;