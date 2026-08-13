// discord_app/modules/icymi/ICYMIStore.tsx
import _slicedToArray from "_slicedToArray";
import map from "map";
import getHash from "getHash";
import scheduledEventSort from "scheduledEventSort";
import closure_9 from "scheduledEventSort";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import initialize from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import reinjectEphemerals from "reinjectEphemerals";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import closure_19 from "initialize";
import closure_20 from "initialize";
import ME from "ME";
import { ContentInventoryFeedKey } from "ContentInventoryFeedKey";
import { PersistedStore } from "initialize";
import set from "getHash";
import { MessageEmbedTypes } from "ICYMITypes.tsx";
import { generateHydrationId } from "ICYMIUtils.tsx";

let closure_21;
let closure_22;
let closure_23;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
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
  let closure_0 = arg2;
  let c1 = 7;
  const found = arr.filter((type) => type.type !== ACTIVITY);
  const item = arr2.forEach((arg0, arg1) => {
    let arr = found1;
    if ((arg1 + 1) * c1 < found1.length) {
      arr.splice((arg1 + 1) * tmp, 0, arg0);
    } else {
      arr = arr.push(arg0);
    }
  });
  return found;
}
function injectRecommendedGuildsRow() {
  items1 = items1.filter((type) => type.type !== callback(7349).ICYMIItemTypes.RECOMMENDED_GUILDS);
  items = items.filter((type) => type.type !== callback(7349).ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = store2.getGuildsArray();
    const tmp24 = guildsArray.filter((features) => {
      features = features.features;
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
  const set = new Set();
  const item = items1.forEach((id) => {
    set.add(id.id);
  });
  if (null != _null2) {
    if (set.has(_null2.id)) {
      const id = tmp19.id;
      const type = _null2.type;
      const findIndexResult = items1.findIndex((id) => {
        let tmp = id.id === id;
        if (tmp) {
          tmp = id.type === type;
        }
        return tmp;
      });
      if (-1 !== findIndexResult) {
        _null2 = items1[findIndexResult];
        const found = items1.filter((id) => id.id !== id);
        items1 = found;
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
  const item1 = items1.forEach((id) => {
    closure_33[id.id] = id;
    if (id.type === set(type[19]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(id.data.user_id)) {
        closure_35[id.id] = true;
      } else {
        closure_34[id.id] = set(type[18]).customStatusToContentInventoryEntry(id);
        const tmpResult = set(type[18]);
      }
    }
  });
}
function reload(arg0) {
  let found;
  let found1;
  if (closure_30.length > 0) {
    let closure_27 = closure_30;
    closure_30 = [];
    let closure_31 = [];
  }
  closure_38 = closure_38 + 1;
  if (null != arg0) {
    ({ newUnread: found, newRead: found1 } = arg0);
  } else {
    let items = [];
    let ACTIVITY = items;
    let items1 = [];
    let c1 = items1;
    let items2 = [];
    found1 = items2;
    let item = closure_27.forEach((id) => {
      const tmp = null != outer1_20.getReadTimestamp(id.id);
      let tmp4 = id.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = id.data.message_context;
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
          tmp7 = !tmp2(tmp3[18]).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = tmp2(tmp3[18]);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === tmp2(tmp3[19]).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            items3.push(id);
          }
        }
        items2.push(id);
      }
    });
    const items3 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items2, 0));
    const items4 = [items3, items.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
    [found, found1] = items6(items4, 2);
    let tmp33 = items6(items4, 2);
  }
  (function injectGuildEvents() {
    let channel_id;
    guildIds = guildIds.getGuildIds();
    const items = [];
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = dependencyMap;
      if (null == dependencyMap[nextResult]) {
        let tmp7 = guildScheduledEventsForGuild;
        let tmp8 = nextResult;
        guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(tmp3);
        let num = 0;
        let tmp10 = guildScheduledEventsForGuild;
        let tmp11 = guildScheduledEventsForGuild;
        for (const item10031 of guildScheduledEventsForGuild) {
          let tmp12 = item10031;
          let tmp13 = callback2;
          if (!callback2(item10031)) {
            let tmp14 = item10031;
            if (null != tmp12.channel_id) {
              let tmp15 = channel;
              let tmp16 = item10031;
              let tmp17 = getUncachedChannelPermissions;
              let tmp18 = constants;
              continue;
            }
            let tmp19 = callback;
            let tmp20 = item10031;
            let tmp21 = items2;
            let tmp22 = found1;
            let tmp23 = found1;
            if (callback(tmp12, 2 * items2(found1[17]).Seconds.DAY)) {
              let tmp26 = table2;
              let tmp27 = item10031;
              if (null == table2[tmp12.id]) {
                let tmp28 = table2;
                let tmp29 = item10031;
                let obj = { id: null, type: null, score: 10, event_id: null };
                obj[0] = tmp12.id;
                let tmp30 = items1;
                let tmp31 = tmp22;
                obj[1] = items1(tmp23[19]).ICYMIItemTypes.GUILD_EVENT;
                obj[3] = tmp12.id;
                table2[tmp12.id] = obj;
              }
              obj = { id: null, type: null, score: 10, data: null };
              let tmp32 = item10031;
              obj[0] = tmp12.id;
              let tmp33 = items1;
              let tmp34 = tmp22;
              obj[1] = items1(tmp23[19]).ICYMIItemTypes.GUILD_EVENT;
              let obj1 = { guild_id: null, event_id: null, channel_id: null };
              ({ guild_id: obj4[0], id: obj4[1], channel_id } = tmp12);
              obj1[2] = channel_id;
              obj[3] = obj1;
              let arr = items.push(obj);
              let tmp36 = num;
              let sum = num + 1;
              num = sum;
              if (1 <= sum) {
                let tmp38 = obj;
                obj.return();
                break;
              }
              break;
            } else {
              let tmp24 = callback3;
              let tmp25 = item10031;
            }
          }
          continue;
        }
      } else {
        let tmp5 = dependencyMap;
        let tmp6 = nextResult;
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
    const item = items.forEach((id) => {
      outer1_33[id.id] = id;
      if (null != outer1_20.getReadTimestamp(id.id)) {
        items2.push(id);
      } else {
        items1.push(id);
      }
    });
    closure_45 = callback4(closure_45, items1, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_46 = callback4(closure_46, items2, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
  })();
  ACTIVITY = undefined;
  c1 = undefined;
  found1 = undefined;
  items6 = undefined;
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
  const item1 = entries.forEach((content) => {
    let obj = ACTIVITY;
    if (!ACTIVITY.has(content.content.id)) {
      let tmpResult = tmp(tmp2[21]);
      if (!tmpResult.isEntryExpired(content.content)) {
        tmpResult = tmp(tmp2[22]);
        if (tmpResult.isGamingLikeEntry(content.content)) {
          if (null == table[content.content.author_id]) {
            const _Set = Set;
            const set = new Set();
            tmp3[content.content.author_id] = set;
          }
          if (!obj4.has(content.content.extra.application_id)) {
            tmp3[content.content.author_id].add(content.content.extra.application_id);
            const obj5 = tmp3[content.content.author_id];
          }
          obj4 = table[content.content.author_id];
        }
        if (null == outer1_34[content.content.id]) {
          obj = { id: null, type: null, score: 15, activity: null };
          obj[0] = content.content.id;
          obj[1] = tmp(tmp2[19]).ICYMIItemTypes.ACTIVITY;
          obj[3] = content.content;
          outer1_34[content.content.id] = obj;
        }
        obj = { id: null, type: null, score: 15, data: null };
        obj[0] = content.content.id;
        obj[1] = tmp(tmp2[19]).ICYMIItemTypes.ACTIVITY;
        const obj1 = { user_id: null, content_id: null };
        obj1[0] = content.content.author_id;
        obj1[1] = content.content.id;
        obj[3] = obj1;
        obj.add(content.content.id);
        outer1_33[obj.id] = obj;
        if (null != outer1_20.getReadTimestamp(obj.id)) {
          items6.push(obj);
        } else {
          found1.push(obj);
        }
      }
    }
  });
  ACTIVITY = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
  c1 = 5;
  found1 = undefined;
  found = found.filter((type) => type.type !== ACTIVITY);
  found1 = found;
  const item2 = items5.forEach((arg0, arg1) => {
    let arr = found1;
    if ((arg1 + 1) * c1 < found1.length) {
      arr.splice((arg1 + 1) * tmp, 0, arg0);
    } else {
      arr = arr.push(arg0);
    }
  });
  ACTIVITY = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
  c1 = 5;
  found1 = undefined;
  found1 = found1.filter((type) => type.type !== ACTIVITY);
  const item3 = items6.forEach((arg0, arg1) => {
    let arr = found1;
    if ((arg1 + 1) * c1 < found1.length) {
      arr.splice((arg1 + 1) * tmp, 0, arg0);
    } else {
      arr = arr.push(arg0);
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
  let c47 = 0;
  if (found.length + found1.length === 0) {
    let c54 = true;
  }
  let set = new Set();
  const items7 = [...found1];
  ACTIVITY(found1[18]).hydrateItems(items7, 0, ACTIVITY(found1[19]).ICYMI_PAGE_SIZE);
  let c51 = false;
}
function getNewUnreadItems(arr9, channelId) {
  const items = [];
  const iter = arr9[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    if (nextResult.type !== MessageEmbedTypes.ICYMIItemTypes.RECOMMENDED_GUILDS) {
      let tmp15 = nextResult;
      if (!set.has(tmp2.id)) {
        let tmp5 = store3;
        let tmp6 = nextResult;
        let tmp7 = null == store3.getReadTimestamp(tmp2.id);
        if (tmp7) {
          let tmp8 = nextResult;
          let tmp9 = tmp2.type !== tmp3(7349).ICYMIItemTypes.MESSAGE;
          if (!tmp9) {
            let tmp3Result = tmp3(8961);
            let tmp10 = nextResult;
            let result = tmp3Result.isItemUnreadInChannel(tmp2.data.channel_id, tmp2.data.message_id);
            if (result) {
              let tmp12 = nextResult;
              result = tmp2.data.channel_id !== channelId;
            }
            tmp9 = result;
          }
          tmp7 = tmp9;
        }
        if (tmp7) {
          let tmp13 = nextResult;
          let arr = items.push(tmp2);
        }
      }
    }
    continue;
  }
  return items;
}
function maybeFilterChannelItems(arg0, stateFromStores1) {
  const obj = _generateHydrationId;
  if (numberToCustomScoreResult === _generateHydrationId.ICYMICustomScore.MUTED) {
    _require = arg0;
    closure_27 = closure_27.filter((data) => {
      const isGuildItemResult = callback(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== callback;
      }
      return tmp2;
    });
    _require = arg0;
    closure_45 = closure_45.filter((data) => {
      const isGuildItemResult = callback(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== callback;
      }
      return tmp2;
    });
    _require = arg0;
    closure_46 = closure_46.filter((data) => {
      const isGuildItemResult = callback(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== callback;
      }
      return tmp2;
    });
    _require = arg0;
    closure_30 = closure_30.filter((data) => {
      const isGuildItemResult = callback(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== callback;
      }
      return tmp2;
    });
    _require = arg0;
    closure_31 = closure_31.filter((data) => {
      const isGuildItemResult = callback(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== callback;
      }
      return tmp2;
    });
  }
}
function maybeFilterGuildItems(guildId, guildScore) {
  const obj = _generateHydrationId;
  if (numberToCustomScoreResult === _generateHydrationId.ICYMICustomScore.MUTED) {
    _require = guildId;
    closure_27 = closure_27.filter((data) => {
      const isGuildItemResult = guildId(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== guildId;
      }
      return tmp2;
    });
    _require = guildId;
    closure_45 = closure_45.filter((data) => {
      const isGuildItemResult = guildId(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== guildId;
      }
      return tmp2;
    });
    _require = guildId;
    closure_46 = closure_46.filter((data) => {
      const isGuildItemResult = guildId(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== guildId;
      }
      return tmp2;
    });
    _require = guildId;
    closure_30 = closure_30.filter((data) => {
      const isGuildItemResult = guildId(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== guildId;
      }
      return tmp2;
    });
    _require = guildId;
    closure_31 = closure_31.filter((data) => {
      const isGuildItemResult = guildId(outer1_2[18]).isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== guildId;
      }
      return tmp2;
    });
  }
}
function handleReaction(colors) {
  let emoji;
  let reactionType;
  ({ emoji, reactionType } = colors);
  if (null == dependencyMap[colors.messageId]) {
    return false;
  } else if (tmp3.type !== MessageEmbedTypes.ICYMIItemTypes.MESSAGE) {
    return false;
  } else {
    const tmp5 = store.getId() === tmp2;
    if ("MESSAGE_REACTION_ADD" === tmp) {
      const message2 = tmp3.message;
      let addReactionResult = message2.addReaction(emoji, tmp5, colors.colors, reactionType);
    } else {
      const message = tmp3.message;
      addReactionResult = message.removeReaction(emoji, tmp5, reactionType);
    }
    tmp3.message = addReactionResult;
  }
}
function handleAck(channelId) {
  channelId = channelId.channelId;
  let set = channelId;
  const items = [];
  let items3 = items;
  const items1 = [];
  let items4 = items1;
  const item = items1.forEach((type) => {
    if (arg1 > outer1_47) {
      if (type.type === set(items4[19]).ICYMIItemTypes.MESSAGE) {
        if (type.data.channel_id === set) {
          items3.push(type);
        }
      }
    }
    items4.push(type);
  });
  const items2 = [];
  set = items2;
  items3 = [];
  items4 = [];
  const item1 = closure_30.forEach((id) => {
    const tmp = null != outer1_20.getReadTimestamp(id.id);
    let tmp4 = id.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
    if (tmp4) {
      const message_context = id.data.message_context;
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
        tmp7 = !tmp2(tmp3[18]).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
        const tmp2Result = tmp2(tmp3[18]);
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      set1.push(id);
    } else {
      if (id.type === tmp2(tmp3[19]).ICYMIItemTypes.MESSAGE) {
        if (id.data.has_mention) {
          items3.push(id);
        }
      }
      items2.push(id);
    }
  });
  const items5 = [...items3];
  const items6 = [items5, items2.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
  const arr8 = getNewUnreadItems(callback(items6, 2)[0], channelId);
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
        set = new Set(items1.map((id) => id.id));
        const substr = arr9.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      tmp5 = flag;
      arr9 = closure_30;
    }
  }
  let c40 = tmp5;
  if (0 === items.length) {
    if (tmp2 === c40) {
      return false;
    }
  }
  if (0 !== items.length) {
    const items7 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items7, 0));
  }
}
({ eventScheduledToStartWithin: closure_6, isGuildEventEnded: error, isGuildScheduledEventActive: metroImportAll } = scheduledEventSort);
({ ChannelTypes: closure_21, GuildFeatures: closure_22, Permissions: closure_23 } = ME);
const DAY = require("set").Millis.DAY;
let closure_26 = 3 * require("set").Millis.DAY;
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
class ICYMIStore extends PersistedStore {
}
const prototype = ICYMIStore.prototype;
prototype["initialize"] = function initialize(dehydratedItems) {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, map, getHash, initialize, closure_9, createGuildRecordFromRust, closure_19, closure_20, reinjectEphemerals, getUncachedChannelPermissions, generateOldThreadCutoff, markAllUserIdListsStale, updateUserGuildSettingsInternal);
  if (null != dehydratedItems) {
    dehydratedItems = dehydratedItems.dehydratedItems;
    if (dehydratedItems == null) {
      dehydratedItems = [];
    }
    const item = dehydratedItems.forEach((id) => {
      closure_33[id.id] = id;
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
      const obj = generateHydrationId;
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
prototype["notificationItem"] = function notificationItem(arg0) {
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
  let closure_0 = id;
  if ("recommended_guilds" !== id) {
    if ("recommendedGuilds" !== id) {
      const items = [];
      HermesBuiltin.arraySpread(closure_46, HermesBuiltin.arraySpread(closure_45, 0));
      const found = items.filter((arg0) => null != table2[arg0.id]);
      let findIndexResult = found.findIndex((id) => id.id === closure_0);
    }
    return findIndexResult;
  }
  const items1 = [...closure_46];
  findIndexResult = items1.findIndex((type) => type.type === id(table[19]).ICYMIItemTypes.RECOMMENDED_GUILDS);
};
prototype["getState"] = function getState() {
  return { dehydratedItems: closure_27, numOpens: c44, customGuildScores: closure_36, customChannelScoresByGuild: closure_37, lastOpened: c29, lastJoinedRecommendedGuild: c49, lastTakenICYMISurvey: c56 };
};
ICYMIStore.displayName = "ICYMIStore";
ICYMIStore.persistKey = "ICYMIStore";
const iCYMIStore = new ICYMIStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_27 = [];
    let closure_30 = [];
    let closure_31 = [];
    let closure_33 = {};
    let closure_32 = {};
    let closure_34 = {};
    let closure_35 = {};
    let c28 = null;
    let closure_36 = {};
    let closure_37 = {};
    let c38 = 0;
    let c39 = false;
    let c40 = false;
    let c41 = false;
    let closure_45 = [];
    let closure_46 = [];
    let c47 = 0;
    let c29 = 0;
    let c49 = 0;
    let c50 = true;
    let c51 = false;
    const set = new Set();
    let c43 = null;
    let c53 = false;
    let c54 = false;
    let c42 = null;
    let c55 = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    let closure_45;
    let closure_46;
    let customStatusItem;
    let messageItem;
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
          const item = items1.forEach((id) => {
            const tmp = null != outer1_20.getReadTimestamp(id.id);
            let tmp4 = id.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
            if (tmp4) {
              const message_context = id.data.message_context;
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
                tmp7 = !tmp2(tmp3[18]).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
                const tmp2Result = tmp2(tmp3[18]);
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              set1.push(id);
            } else {
              if (id.type === tmp2(tmp3[19]).ICYMIItemTypes.MESSAGE) {
                if (id.data.has_mention) {
                  items3.push(id);
                }
              }
              items2.push(id);
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
    let arr10;
    let arr9;
    let isInitialLoad;
    let isReloading;
    let loadId;
    let startTime;
    items = items.items;
    let set1;
    ({ loadId, startTime, isInitialLoad, isReloading } = items);
    set1 = new Set(set1(items3[19]).SUPPORTED_ITEM_TYPES);
    const found = items.filter((type) => set1.has(type.type));
    const found1 = found.filter(filterStaffGuild);
    let closure_30 = found1.map((type) => {
      if (type.type === set1(items3[19]).ICYMIItemTypes.MESSAGE) {
        if (null != type.data.message_context) {
          let tmp2 = null != type.data.message_context.reply_message_id;
          if (tmp2) {
            const _parseInt = parseInt;
            tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
          }
          const obj = {};
          if (tmp2) {
            obj.reply_message_id = type.data.message_context.reply_message_id;
          }
          let tmp3 = null != type.data.message_context.before_message_id;
          if (tmp3) {
            const _parseInt2 = parseInt;
            tmp3 = 0 !== parseInt(type.data.message_context.before_message_id);
          }
          if (tmp3) {
            obj.before_message_id = type.data.message_context.before_message_id;
          }
          let tmp5 = null != type.data.message_context.after_message_id;
          if (tmp5) {
            const _parseInt3 = parseInt;
            tmp5 = 0 !== parseInt(type.data.message_context.after_message_id);
          }
          if (tmp5) {
            obj.after_message_id = type.data.message_context.after_message_id;
          }
          let tmp7 = null != type.data.message_context.external_content_application_id;
          if (tmp7) {
            const _parseInt4 = parseInt;
            tmp7 = 0 !== parseInt(type.data.message_context.external_content_application_id);
          }
          if (tmp7) {
            obj.external_content_application_id = type.data.message_context.external_content_application_id;
          }
          let tmp9 = null != type.data.message_context.reference_message_id;
          if (tmp9) {
            const _parseInt5 = parseInt;
            tmp9 = 0 !== parseInt(type.data.message_context.reference_message_id);
          }
          if (tmp9) {
            obj.reference_message_id = type.data.message_context.reference_message_id;
          }
          type.data.message_context = obj;
        }
      }
      return type;
    });
    finalizeNewDehydratedItemsContent();
    let obj = { load_id: loadId, load_time_millis: Date.now() - startTime, feed_item_ids: closure_30.map((id) => id.id) };
    const items1 = [];
    set1 = items1;
    const items2 = [];
    items3 = [];
    const item = closure_30.forEach((id) => {
      const tmp = null != outer1_20.getReadTimestamp(id.id);
      let tmp4 = id.type === set1(items3[19]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = id.data.message_context;
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
          tmp7 = !tmp2(tmp3[18]).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = tmp2(tmp3[18]);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === tmp2(tmp3[19]).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            items3.push(id);
          }
        }
        items2.push(id);
      }
    });
    const items4 = [...items2];
    const items5 = [items4, items1.sort((id, id2) => set1(items3[18]).compareGravityUnreadIds(id.id, id2.id))];
    const set = new Set(set1(items3[19]).SUPPORTED_ITEM_TYPES);
    [arr9, arr10] = callback(items5, 2);
    const arr11 = getNewUnreadItems(arr9);
    if (c41) {
      if (0 !== c38) {
        if (!isInitialLoad) {
          if (c38 > 0) {
            let c43 = null;
          }
          const tmp8 = arr11.length > tmp(tmp2[19]).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            let c40 = tmp8;
          }
          if (tmp8) {
            const items6 = [];
            HermesBuiltin.arraySpread(arr10, HermesBuiltin.arraySpread(arr9, 0));
            tmp(tmp2[18]).hydrateItems(items6, 0, tmp(tmp2[19]).ICYMI_PAGE_SIZE);
            if (arr9.length + arr10.length === 0) {
              let c54 = true;
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
        set1 = new Set(arr9.map((id) => id.id));
        const substr = arr13.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      if (flag) {
        c40 = true;
        let c39 = true;
      }
      obj = { newUnread: null, newRead: null };
      obj[0] = arr9;
      obj[1] = arr10;
      reload(obj);
      arr13 = closure_30;
    }
    c40 = false;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    let activityItems;
    let endingIndex;
    let messageItems;
    let requestActivityItems;
    let requestMessageItems;
    let startingIndex;
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    let _require;
    let closure_1;
    let c54 = true;
    let obj = {};
    let merged = Object.assign(obj);
    _require = messageItems.reduce((arg0, message) => {
      arg0[message.message.id] = message;
      return arg0;
    }, {});
    closure_1 = activityItems.reduce((arg0, id) => {
      arg0[id.id] = id;
      return arg0;
    }, {});
    const item = requestMessageItems.forEach((message_id) => {
      if (null != dependencyMap[message_id.message_id]) {
        let tmp4 = outer1_33[message_id.message_id];
        if (null == tmp4) {
          let obj = { id: null, type: null, score: -1, data: null };
          obj[0] = message_id.message_id;
          obj[1] = dependencyMap(outer1_2[19]).ICYMIItemTypes.MESSAGE;
          obj = { guild_id: null, channel_id: null, message_id: null, channel_type: null, has_mention: false };
          ({ guild_id: obj2[0], channel_id: obj2[1] } = tmp);
          obj[2] = tmp.message.id;
          obj[3] = outer1_21.GUILD_TEXT;
          obj[3] = obj;
          tmp4 = obj;
        }
        const message = outer1_14.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          obj = {};
          const merged = Object.assign(dependencyMap(outer1_2[18]).createGravityMessageFromServer(tmp, tmp4));
          obj.message = message;
          obj[tmp.message.id] = obj;
          const obj4 = dependencyMap(outer1_2[18]);
        } else {
          obj[tmp.message.id] = dependencyMap(outer1_2[18]).createGravityMessageFromServer(tmp, tmp4);
          const obj3 = dependencyMap(outer1_2[18]);
        }
      } else {
        outer1_35[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != table[content_id.content_id]) {
        if (null != outer1_33[content_id.content_id]) {
          const obj = {};
          const merged = Object.assign(tmp4);
          obj.activity = tmp;
          obj[tmp.id] = obj;
        } else {
          outer1_35[content_id.content_id] = true;
        }
      } else {
        outer1_35[content_id.content_id] = true;
      }
    });
    set.delete(_generateHydrationId.generateHydrationId(startingIndex, endingIndex));
  },
  LOAD_ICYMI_CUSTOM_SCORES: function handleLoadCustomScores(arg0) {
    const iter = arg0.scores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = obj;
      obj[nextResult.guild_id] = nextResult.guild_score;
      let tmp4 = maybeFilterGuildItems;
      let tmp5 = maybeFilterGuildItems(nextResult.guild_id, nextResult.guild_score);
      let _Object = Object;
      let keys = Object.keys(nextResult.custom_channel_scores);
      let tmp7 = keys;
      let tmp8 = keys;
      for (const item10028 of keys) {
        let tmp9 = item10028;
        let tmp10 = obj;
        let tmp11 = nextResult;
        if (null == obj[tmp2.guild_id]) {
          let tmp12 = obj;
          let tmp13 = nextResult;
          obj[tmp2.guild_id] = {};
        }
        let tmp14 = obj;
        let tmp15 = nextResult;
        let tmp16 = item10028;
        obj[tmp2.guild_id][tmp9] = tmp2.custom_channel_scores[tmp9];
        let tmp17 = maybeFilterChannelItems;
        let tmp18 = maybeFilterChannelItems(tmp9, tmp2.custom_channel_scores[tmp9]);
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
    let closure_48 = guilds.map((guild) => callback(table[24]).makeDiscoverableGuild(guild.guild));
    injectRecommendedGuildsRow();
  },
  ICYMI_CUSTOM_SCORES_UPDATED: function handleCustomScoresUpdated(guildScore) {
    let channelScores;
    let guildId;
    ({ channelScores, guildId } = guildScore);
    guildScore = guildScore.guildScore;
    if (null != guildScore) {
      obj[guildId] = guildScore;
      maybeFilterGuildItems(guildId, guildScore);
      obj = {};
      let merged = Object.assign(obj);
    }
    if (channelScores != null) {
      const item = channelScores.forEach((arg0) => {
        let channelId;
        let score;
        ({ channelId, score } = arg0);
        if (null == outer1_37[guildId]) {
          outer1_37[tmp] = {};
        }
        outer1_37[guildId][channelId] = score;
        outer1_63(channelId, score);
        const merged = Object.assign(outer1_37);
        outer1_37 = {};
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === closure_30.length) {
      return false;
    } else {
      reload();
      let c40 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    let c41 = true;
    let closure_29 = Date.now();
    if (c39) {
      c39 = false;
      let c40 = false;
    }
    if (closure_44 < 5) {
      closure_44 = closure_44 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    let c44 = 6;
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
    let closure_49 = Date.now();
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
        const items = [tmp, ];
        const items1 = [];
        HermesBuiltin.arraySpread(attachments, 0);
        items[1] = items1;
        tmp2 = items;
      }
    }
    let c42 = tmp2;
  },
  ICYMI_SCROLL_EVENT: function handleScrollEvent(timestamp) {
    timestamp = timestamp.timestamp;
  },
  ICYMI_TAKE_SURVEY: function handleTakeSurvey(takenAt) {
    takenAt = takenAt.takenAt;
  }
});
let result = set.fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default iCYMIStore;