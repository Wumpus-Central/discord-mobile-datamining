// === Module 10137: ICYMIStore ===

// Module 10137 (ICYMIStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import utils from "utils" /* 8353 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 9410 */;
import ICYMITypes from "ICYMITypes" /* 10142 */;
import isItemUnreadInChannel from "isItemUnreadInChannel" /* 10144 */;
import DiscoverRequestState from "DiscoverRequestState" /* 10146 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10147 */;
import ICYMIUtils from "ICYMIUtils" /* 10149 */;
import _slicedToArray from "module_32" /* 32 */;
import ContentInventoryStore from "ContentInventoryStore" /* 10138 */;
import ExperimentStore from "ExperimentStore" /* 5469 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6966 */;
import LabFeatureStore from "LabFeatureStore" /* 9280 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildAffinitiesStore from "GuildAffinitiesStore" /* 10139 */;
import GuildStore from "GuildStore" /* 5114 */;
import MessageStore from "MessageStore" /* 6309 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import ReadStateStore from "ReadStateStore" /* 6952 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6895 */;
import UserStore from "UserStore" /* 1385 */;
import ICYMIFiltersStore from "ICYMIFiltersStore" /* 10141 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 10143 */;

require = fn;
function handleDiscoverSessionReset() {
  const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
  discoverRequestGuard.resetSession();
  closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
  identity = null;
}
function handleDiscoverGateChange() {
  const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
  const observeGateResult = discoverRequestGuard.observeGate(WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(icymi_store));
  if (null != identity) {
    let isAuthenticatedResult = null != identity.userId;
    if (isAuthenticatedResult) {
      isAuthenticatedResult = AuthenticationStore.isAuthenticated();
    }
    if (isAuthenticatedResult) {
      isAuthenticatedResult = AuthenticationStore.getId() === tmp17.userId;
    }
    if (isAuthenticatedResult) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      isAuthenticatedResult = id === tmp17.userId;
    }
    if (isAuthenticatedResult) {
      let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (authSessionIdHash == null) {
        authSessionIdHash = null;
      }
      isAuthenticatedResult = authSessionIdHash === tmp17.authSessionIdHash;
    }
    if (!isAuthenticatedResult) {
      const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard2.resetSession();
      closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
      identity = null;
      let flag = true;
    }
    return flag;
  }
  let tmp13 = !observeGateResult;
  if (!observeGateResult) {
    let matchesResult = null == identity;
    if (!matchesResult) {
      const discoverRequestGuard3 = DiscoverRequestState.discoverRequestGuard;
      matchesResult = discoverRequestGuard3.matches(identity);
    }
    tmp13 = matchesResult;
  }
  let flag2 = !tmp13;
  if (!tmp13) {
    closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
    identity = null;
    flag2 = true;
  }
  flag = flag2;
}
function canApplyDiscover(identity) {
  let isAuthenticatedResult = null != identity.userId;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.getId() === identity.userId;
  }
  if (isAuthenticatedResult) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    isAuthenticatedResult = id === identity.userId;
  }
  if (isAuthenticatedResult) {
    let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
    if (authSessionIdHash == null) {
      authSessionIdHash = null;
    }
    isAuthenticatedResult = authSessionIdHash === identity.authSessionIdHash;
  }
  if (isAuthenticatedResult) {
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    isAuthenticatedResult = discoverRequestGuard.canApply(identity, WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(icymi_store));
  }
  return isAuthenticatedResult;
}
function filterStaffGuild(data) {
  if (ICYMIFiltersStore.filterStaffContent()) {
    if (obj.isGuildItem(data)) {
      if (data.data.guild_id === ICYMITypes.GAME_CONTENT_GUILD_ID) {
        return true;
      } else {
        guild = GuildStore.getGuild(data.data.guild_id);
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
function injectItemsIntoList(arr, arr2, arg2, arg3) {
  closure_0 = arg2;
  c1 = 7;
  const found = arr.filter((type) => type.type !== ACTIVITY);
  const item = arr2.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  return found;
}
function injectRecommendedGuildsRow() {
  closure_49 = closure_49.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  closure_50 = closure_50.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = GuildStore.getGuildsArray();
    const tmp24 = guildsArray.filter((features) => {
      features = features.features;
      return features.has(constants.COMMUNITY);
    }).length >= 5;
    const readTimestamp = ICYMIUnreadStateStore.getReadTimestamp("recommendedGuilds");
    if (tmp24) {
      if (null != readTimestamp) {
        const _Date = Date;
        if (Date.now() - closure_53 > DAY) {
          const _Date2 = Date;
        }
      }
    }
    obj = { id: "recommendedGuilds", type: ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS, score: 50 };
    closure_38[obj.id] = obj;
    closure_37[obj.id] = obj;
    if (0 === closure_49.length) {
      items = [obj];
      HermesBuiltin.arraySpread(closure_50, 1);
      closure_50 = items;
    } else {
      if (tmp24) {
        if (tmp24) {
          const _Math = Math;
          const _Math2 = Math;
          closure_49.splice(Math.round(2 * Math.random()) + 3 - 1, 0, obj);
        } else {
          closure_49.splice(5, 0, obj);
        }
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(closure_49, 0)] = obj;
      closure_49 = items1;
    }
  }
}
function finalizeNewDehydratedItemsContent() {
  set = new Set();
  const item = items1.forEach((id) => {
    set.add(id.id);
  });
  if (null != _null) {
    if (set.has(_null.id)) {
      const id = tmp19.id;
      const type = _null.type;
      const findIndexResult = items1.findIndex((id) => {
        let tmp = id.id === id;
        if (tmp) {
          tmp = id.type === type;
        }
        return tmp;
      });
      if (-1 !== findIndexResult) {
        _null = items1[findIndexResult];
        const found = items1.filter((id) => id.id !== id);
        items = [_null];
        HermesBuiltin.arraySpread(found, 1);
        items1 = items;
      }
    } else {
      items1 = [tmp19];
      HermesBuiltin.arraySpread(items1, 1);
      set.add(_null.id);
    }
  }
  const item1 = items1.forEach((id) => {
    closure_1_37[id.id] = id;
    if (id.type === set(type[24]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(id.data.user_id)) {
        closure_1_39[id.id] = true;
      } else {
        dependencyMap[id.id] = set(type[23]).customStatusToContentInventoryEntry(id);
        const tmpResult = set(type[23]);
      }
    }
  });
}
function reload(arg0) {
  if (closure_34.length > 0) {
    dehydratedItems = closure_34;
    closure_34 = [];
    closure_35 = [];
  }
  closure_42 = closure_42 + 1;
  if (null != arg0) {
    ({ newUnread: found, newRead: found1 } = arg0);
  } else {
    items = [];
    let ACTIVITY = items;
    let items1 = [];
    c1 = items1;
    let items2 = [];
    found1 = items2;
    let item = dehydratedItems.forEach((id) => {
      const tmp = null != ICYMIUnreadStateStore.getReadTimestamp(id.id);
      let tmp4 = id.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
          tmp7 = !isItemUnreadInChannel.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = isItemUnreadInChannel;
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            dependencyMap.push(id);
          }
        }
        map.push(id);
      }
    });
    const items3 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items2, 0));
    const items4 = [items3, items.sort((id, id2) => set1(dependencyMap[23]).compareGravityUnreadIds(id.id, id2.id))];
    [found, found1] = items4;
    let tmp33 = _slicedToArray(items4, 2);
  }
  (function injectGuildEvents() {
    guildIds = guildIds.getGuildIds();
    items = [];
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == dependencyMap2[nextResult]) {
        guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(tmp3);
        let num = 0;
        for (const item10031 of guildScheduledEventsForGuild) {
          if (!closure_8(item10031)) {
            if (closure_7(item10031, 2 * items2(found1[20]).Seconds.DAY)) {
              if (null == dependencyMap[item10031.id]) {
                let obj2 = { id: item10031.id, type: null, score: 10, event_id: null };
                obj2.type = items1(found1[24]).ICYMIItemTypes.GUILD_EVENT;
                obj2.event_id = item10031.id;
                dependencyMap[item10031.id] = obj2;
              }
              let obj3 = { id: item10031.id, type: null, score: 10, data: null };
              obj3.type = items1(found1[24]).ICYMIItemTypes.GUILD_EVENT;
              let obj7 = { guild_id: null, event_id: null, channel_id: null };
              ({ guild_id: obj4.guild_id, id: obj4.event_id, channel_id } = item10031);
              obj7.channel_id = channel_id;
              obj3.data = obj7;
              let arr = items.push(obj3);
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
      const guildAffinity = closure_1_14.getGuildAffinity(data.data.guild_id);
      const guildAffinity1 = closure_1_14.getGuildAffinity(data2.data.guild_id);
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
      closure_2_37[id.id] = id;
      if (null != readTimestamp.getReadTimestamp(id.id)) {
        items2.push(id);
      } else {
        items1.push(id);
      }
    });
    closure_49 = closure_66(closure_49, items1, items1(found1[24]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_50 = closure_66(closure_50, items2, items1(found1[24]).ICYMIItemTypes.GUILD_EVENT, 7);
  })();
  closure_129_0 = new Set();
  closure_129_1 = {};
  const items5 = [];
  closure_129_2 = items5;
  const items6 = [];
  closure_129_3 = items6;
  const feed = ContentInventoryStore.getFeed(ContentInventoryFeedKey.GLOBAL_FEED);
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
    if (!ACTIVITY.has(content.content.id)) {
      if (!tmpResult.isEntryExpired(content.content)) {
        if (tmpResult2.isGamingLikeEntry(content.content)) {
          if (null == dependencyMap[content.content.author_id]) {
            const _Set = Set;
            set = new Set();
            dependencyMap[content.content.author_id] = set;
          }
          if (!obj4.has(content.content.extra.application_id)) {
            dependencyMap[content.content.author_id].add(content.content.extra.application_id);
          }
          obj4 = dependencyMap[content.content.author_id];
        }
        if (null == dependencyMap[content.content.id]) {
          const obj2 = { id: content.content.id, type: ICYMITypes.ICYMIItemTypes.ACTIVITY, score: 15, activity: content.content };
          dependencyMap[content.content.id] = obj2;
        }
        const obj3 = { id: content.content.id, type: ICYMITypes.ICYMIItemTypes.ACTIVITY, score: 15, data: null };
        const obj6 = { user_id: content.content.author_id, content_id: content.content.id };
        obj3.data = obj6;
        ACTIVITY.add(content.content.id);
        closure_37[obj3.id] = obj3;
        if (null != ICYMIUnreadStateStore.getReadTimestamp(obj3.id)) {
          _slicedToArray.push(obj3);
        } else {
          found1.push(obj3);
        }
        tmpResult2 = ContentInventoryTypes;
      }
      tmpResult = utils;
    }
  });
  ACTIVITY = ACTIVITY(found1[24]).ICYMIItemTypes.ACTIVITY;
  found = found.filter((type) => type.type !== ACTIVITY);
  found1 = found;
  const item2 = items5.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  ACTIVITY = ACTIVITY(found1[24]).ICYMIItemTypes.ACTIVITY;
  c1 = 5;
  found1 = undefined;
  found1 = found1.filter((type) => type.type !== ACTIVITY);
  const item3 = items6.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  injectRecommendedGuildsRow();
  let tmp14 = null != newTrackingProps.load_id;
  if (tmp14) {
    tmp14 = load_id !== newTrackingProps.load_id;
  }
  if (tmp14) {
    obj = { newTrackingProps, hasNewContent, unreadFeedItems: found, readFeedItems: found1, homeSessionId: "gravity" };
    tmp7(tmp8[30]).trackFeedLoaded(obj);
    load_id = newTrackingProps.load_id;
    if (load_id == null) {
      load_id = null;
    }
    newTrackingProps = {};
    const tmp7Result = tmp7(tmp8[30]);
  }
  c51 = 0;
  if (found.length + found1.length === 0) {
    c58 = true;
  }
  set = new Set();
  const items7 = [...found1];
  ACTIVITY(found1[23]).hydrateItems(items7, 0, ACTIVITY(found1[24]).ICYMI_PAGE_SIZE, dependencyMap);
  c55 = false;
  const tmp7Result2 = ACTIVITY(found1[23]);
}
function getNewUnreadItems(arr10, channelId) {
  items = [];
  const iter = arr10[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.type !== ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS) {
      if (!set.has(tmp2.id)) {
        let tmp7 = null == ICYMIUnreadStateStore.getReadTimestamp(tmp2.id);
        if (tmp7) {
          let tmp9 = tmp2.type !== ICYMITypes.ICYMIItemTypes.MESSAGE;
          if (!tmp9) {
            let tmp3Result = isItemUnreadInChannel;
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
function maybeFilterChannelItems(channelId, score) {
  obj = require("ICYMIUtils");
  if (numberToCustomScoreResult === require("ICYMIUtils").ICYMICustomScore.MUTED) {
    _require = channelId;
    dehydratedItems = dehydratedItems.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_129_0 = channelId;
    closure_49 = closure_49.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_130_0 = channelId;
    closure_50 = closure_50.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_131_0 = channelId;
    closure_34 = closure_34.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_132_0 = channelId;
    closure_35 = closure_35.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
  }
}
function maybeFilterGuildItems(guildId, guildScore) {
  obj = require("ICYMIUtils");
  if (numberToCustomScoreResult === require("ICYMIUtils").ICYMICustomScore.MUTED) {
    _require = guildId;
    dehydratedItems = dehydratedItems.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_129_0 = guildId;
    closure_49 = closure_49.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_130_0 = guildId;
    closure_50 = closure_50.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_131_0 = guildId;
    closure_34 = closure_34.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_132_0 = guildId;
    closure_35 = closure_35.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
  }
}
function handleReaction(colors) {
  ({ emoji, reactionType } = colors);
  if (null == dependencyMap[colors.messageId]) {
    return false;
  } else if (tmp3.type !== ICYMITypes.ICYMIItemTypes.MESSAGE) {
    return false;
  } else {
    const tmp5 = AuthenticationStore.getId() === tmp2;
    if ("MESSAGE_REACTION_ADD" === tmp) {
      const message2 = tmp3.message;
      obj = { colors: colors.colors, reactionType };
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
  set = channelId;
  items = [];
  const items1 = [];
  const item = items1.forEach((type, index) => {
    if (index > c51) {
      if (type.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
        if (type.data.channel_id === set) {
          items.push(type);
        }
      }
    }
    items1.push(type);
  });
  const items2 = [];
  closure_129_0 = items2;
  const items3 = [];
  closure_129_1 = items3;
  const items4 = [];
  closure_129_2 = items4;
  const item1 = closure_34.forEach((id) => {
    const tmp = null != ICYMIUnreadStateStore.getReadTimestamp(id.id);
    let tmp4 = id.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
        tmp7 = !isItemUnreadInChannel.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
        const tmp2Result = isItemUnreadInChannel;
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      set1.push(id);
    } else {
      if (id.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
        if (id.data.has_mention) {
          dependencyMap.push(id);
        }
      }
      map.push(id);
    }
  });
  const items5 = [...items3];
  const items6 = [items5, items2.sort((id, id2) => set1(dependencyMap[23]).compareGravityUnreadIds(id.id, id2.id))];
  const tmp4 = _slicedToArray(items6, 2);
  if (c45) {
    let tmp15 = tmp2;
    if (tmp2) {
      tmp15 = arr8.length >= set(items1[24]).MIN_ITEMS_FOR_NEW_PILL;
    }
    let tmp5 = tmp15;
  } else {
    tmp5 = tmp2;
    if (tmp2) {
      const _Date = Date;
      const diff = Date.now() - closure_33;
      let flag = false;
      if (diff > 6 * items(items1[20]).Millis.HOUR) {
        const _Set = Set;
        set = new Set(items1.map((id) => id.id));
        const substr = closure_34.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
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
  arr8 = getNewUnreadItems(_slicedToArray(items6, 2)[0], channelId);
}
let GuildScheduledEventStore = fn(6966);
({ eventScheduledToStartWithin: metroImportDefault, isGuildEventEnded: closure_8, isGuildScheduledEventActive: closure_9 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const Constants = fn(1072);
({ ChannelTypes: closure_24, GuildFeatures: closure_25, Permissions: closure_26 } = Constants);
const ContentInventoryFeedKey = fn(10145).ContentInventoryFeedKey;
const DAY = DurationsDefault.Millis.DAY;
const icymi_store = "icymi_store";
let closure_30 = 3 * DurationsDefault.Millis.DAY;
let dehydratedItems = [];
let c32 = null;
const lastOpened = 0;
let closure_34 = [];
let closure_35 = [];
let newTrackingProps = {};
let closure_37 = {};
const dependencyMap = {};
let closure_39 = {};
let obj = {};
obj = {};
let c42 = 0;
let c43 = false;
let c44 = false;
let c45 = false;
let items = null;
let c47 = null;
let c48 = 0;
let closure_49 = [];
let closure_50 = [];
let c51 = 0;
const lastJoinedRecommendedGuild = 0;
let muted = true;
let refreshing = false;
let set = new Set();
let focused = false;
let c58 = false;
let timestamp = 0;
let takenAt = 0;
let closure_61 = fn(10146).EMPTY_DISCOVER_SNAPSHOT;
let identity = null;
const PersistedStore = initializeDefault.PersistedStore;
class ICYMIStore extends PersistedStore {
}
const prototype = ICYMIStore.prototype;
prototype["initialize"] = function initialize(dehydratedItems) {
  this.waitFor(ApexExperimentStore, AuthenticationStore, ChannelStore, ContentInventoryStore, ExperimentStore, GuildAffinitiesStore, GuildScheduledEventStore, GuildStore, ICYMIFiltersStore, LabFeatureStore, ICYMIUnreadStateStore, MessageStore, PermissionStore, ReadStateStore, RelationshipStore, UserGuildSettingsStore, UserStore);
  items = [ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  this.syncWith(items, handleDiscoverGateChange);
  if (null != dehydratedItems) {
    dehydratedItems = dehydratedItems.dehydratedItems;
    if (dehydratedItems == null) {
      dehydratedItems = [];
    }
    closure_31 = dehydratedItems;
    const item = dehydratedItems.forEach((id) => {
      closure_1_37[id.id] = id;
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
    c48 = num;
    let num2 = dehydratedItems.lastOpened;
    if (num2 == null) {
      num2 = 0;
    }
    closure_33 = num2;
    let num3 = dehydratedItems.lastJoinedRecommendedGuild;
    if (num3 == null) {
      num3 = 0;
    }
    closure_53 = num3;
    let num4 = dehydratedItems.lastTakenICYMISurvey;
    if (num4 == null) {
      num4 = 0;
    }
    takenAt = num4;
  }
};
prototype["getDiscoverSnapshot"] = function getDiscoverSnapshot() {
  if (null != identity) {
    if (canApplyDiscover(identity)) {
      let EMPTY_DISCOVER_SNAPSHOT = closure_61;
    }
    return EMPTY_DISCOVER_SNAPSHOT;
  }
  EMPTY_DISCOVER_SNAPSHOT = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
};
prototype["getVersion"] = function getVersion() {
  return c42;
};
prototype["getDehydratedItems"] = function getDehydratedItems() {
  return closure_31;
};
prototype["getNewDehydratedItems"] = function getNewDehydratedItems() {
  return closure_34;
};
prototype["getDehydratedItem"] = function getDehydratedItem(arg0) {
  let tmp = closure_37[arg0];
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
    if (tmp.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
      message = tmp.message;
    }
  }
  return message;
};
prototype["getHydratedItems"] = function getHydratedItems() {
  return closure_38;
};
prototype["getUnreadDisplayItems"] = function getUnreadDisplayItems() {
  return closure_49;
};
prototype["getNewUnreadDehydratedItems"] = function getNewUnreadDehydratedItems() {
  return closure_35;
};
prototype["getReadDisplayItems"] = function getReadDisplayItems() {
  return closure_50;
};
prototype["getNextIndexToHydrate"] = function getNextIndexToHydrate() {
  return c51;
};
prototype["getMissingItems"] = function getMissingItems() {
  return closure_39;
};
prototype["customMuted"] = function customMuted(id, id) {
  const self = this;
  const customGuildScore = this.getCustomGuildScore(id);
  let tmp4 = customGuildScore === ICYMIUtils.ICYMICustomScore.MUTED;
  if (!tmp4) {
    const customChannelScore = self.getCustomChannelScore(id, id);
    tmp4 = customChannelScore === ICYMIUtils.ICYMICustomScore.MUTED;
  }
  return tmp4;
};
prototype["getCustomChannelScore"] = function getCustomChannelScore(guild_id, id) {
  if (null != obj[guild_id]) {
    if (null != obj[guild_id][id]) {
      obj = ICYMIUtils;
      let UNKNOWN = obj.numberToCustomScore(obj[guild_id][id]);
    }
    return UNKNOWN;
  }
  UNKNOWN = ICYMIUtils.ICYMICustomScore.UNKNOWN;
};
prototype["getCustomGuildScore"] = function getCustomGuildScore(id) {
  let num = obj[id];
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getCustomGuildScores"] = function getCustomGuildScores() {
  return obj;
};
prototype["hasNewContent"] = function hasNewContent() {
  return c44;
};
prototype["getCurrentStatusAttachments"] = function getCurrentStatusAttachments(arg0) {
  if (null != items) {
    return [];
  }
};
prototype["getLoadId"] = function getLoadId() {
  return c32;
};
prototype["hasOpenedEnoughTimes"] = function hasOpenedEnoughTimes() {
  return 5 === c48;
};
prototype["hasOpened"] = function hasOpened() {
  return c45;
};
prototype["getDiscoverableGuilds"] = function getDiscoverableGuilds() {
  return closure_52;
};
prototype["videosMuted"] = function videosMuted() {
  return muted;
};
prototype["isRefreshing"] = function isRefreshing() {
  return refreshing;
};
prototype["isHydrating"] = function isHydrating() {
  return set.size > 0;
};
prototype["notificationItem"] = function notificationItem() {
  return c47;
};
prototype["getIsTabFocused"] = function getIsTabFocused() {
  return focused;
};
prototype["isFirstPageHydrated"] = function isFirstPageHydrated() {
  return c58;
};
prototype["lastScrollEvent"] = function lastScrollEvent() {
  return timestamp;
};
prototype["lastTakenICYMISurvey"] = function lastTakenICYMISurvey() {
  return takenAt;
};
prototype["getIndexInHydratedFeed"] = function getIndexInHydratedFeed(id) {
  if ("recommended_guilds" !== id) {
    if ("recommendedGuilds" !== id) {
      items = [];
      HermesBuiltin.arraySpread(closure_50, HermesBuiltin.arraySpread(closure_49, 0));
      const found = items.filter((item) => null != dependencyMap[item.id]);
      let findIndexResult = found.findIndex((id) => id.id === closure_0);
    }
    return findIndexResult;
  }
  const items1 = [...closure_50];
  findIndexResult = items1.findIndex((type) => type.type === id(dependencyMap[24]).ICYMIItemTypes.RECOMMENDED_GUILDS);
};
prototype["getState"] = function getState() {
  obj = { dehydratedItems, numOpens, customGuildScores: obj, customChannelScoresByGuild: obj, lastOpened, lastJoinedRecommendedGuild, lastTakenICYMISurvey: takenAt };
  return obj;
};
ICYMIStore.displayName = "ICYMIStore";
ICYMIStore.persistKey = "ICYMIStore";
obj = {
  LOGOUT: function handleLogout() {
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
    identity = null;
    closure_31 = [];
    closure_34 = [];
    closure_35 = [];
    closure_37 = {};
    closure_36 = {};
    closure_38 = {};
    closure_39 = {};
    c32 = null;
    c42 = 0;
    c43 = false;
    c44 = false;
    c45 = false;
    closure_49 = [];
    closure_50 = [];
    c51 = 0;
    closure_33 = 0;
    closure_53 = 0;
    muted = true;
    refreshing = false;
    set = new Set();
    c47 = null;
    focused = false;
    c58 = false;
    items = null;
    timestamp = 0;
  },
  LOGIN_SUCCESS: handleDiscoverSessionReset,
  LOGIN_RESET: function handleDiscoverLoginReset(isMultiAccount) {
    if (isMultiAccount.isMultiAccount) {
      return false;
    } else {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
      closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
      identity = null;
    }
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: handleDiscoverSessionReset,
  CLOSE_SUSPENDED_USER: handleDiscoverSessionReset,
  CONNECTION_CLOSED: function handleDiscoverConnectionClosed(code) {
    if (4004 !== code.code) {
      return false;
    } else {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
      closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
      identity = null;
    }
  },
  CONNECTION_OPEN: handleDiscoverGateChange,
  AUTH_SESSION_CHANGE: handleDiscoverGateChange,
  LAB_FEATURE_TOGGLE: handleDiscoverGateChange,
  CURRENT_USER_UPDATE: handleDiscoverGateChange,
  USER_UPDATE: handleDiscoverGateChange,
  CONNECTION_OPEN_STATE_UPDATE: handleDiscoverGateChange,
  APEX_EXPERIMENT_OVERRIDE_CREATE: handleDiscoverGateChange,
  APEX_EXPERIMENT_OVERRIDE_DELETE: handleDiscoverGateChange,
  APEX_EXPERIMENT_OVERRIDE_CLEAR: handleDiscoverGateChange,
  APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: handleDiscoverGateChange,
  APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: handleDiscoverGateChange,
  APEX_EXPERIMENT_CLEAR_FOR_TESTS: handleDiscoverGateChange,
  APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: handleDiscoverGateChange,
  APEX_EXPERIMENTS_FETCH_START: handleDiscoverGateChange,
  APEX_EXPERIMENTS_FETCH_SUCCESS: handleDiscoverGateChange,
  APEX_EXPERIMENTS_FETCH_FAILURE: handleDiscoverGateChange,
  DISCOVER_PICKER_COMMIT: function handleDiscoverPickerCommit(identity) {
    identity = identity.identity;
    const waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled(icymi_store);
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.observeGate(waterwheelsDiscoverEnabled);
    const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
    if (discoverRequestGuard2.matches(identity)) {
      let isAuthenticatedResult = null != identity.userId;
      if (isAuthenticatedResult) {
        isAuthenticatedResult = AuthenticationStore.isAuthenticated();
      }
      if (isAuthenticatedResult) {
        isAuthenticatedResult = AuthenticationStore.getId() === identity.userId;
      }
      if (isAuthenticatedResult) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        isAuthenticatedResult = id === identity.userId;
      }
      if (isAuthenticatedResult) {
        let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
        if (authSessionIdHash == null) {
          authSessionIdHash = null;
        }
        isAuthenticatedResult = authSessionIdHash === identity.authSessionIdHash;
      }
      if (isAuthenticatedResult) {
        const obj2 = { type: "commit", enabled: waterwheelsDiscoverEnabled };
        closure_61 = DiscoverRequestState.reduceDiscoverSnapshot(closure_61, obj2);
        const tmpResult = DiscoverRequestState;
      }
    }
    return false;
  },
  DISCOVER_REQUEST_STARTED: function handleDiscoverRequestStarted(identity) {
    identity = identity.identity;
    if (canApplyDiscover(identity)) {
      let matchesResult = null != identity;
      if (matchesResult) {
        const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
        matchesResult = discoverRequestGuard.matches(identity);
      }
      if (!matchesResult) {
        closure_61 = DiscoverRequestState.EMPTY_DISCOVER_SNAPSHOT;
        identity = null;
      }
      closure_61 = DiscoverRequestState.reduceDiscoverSnapshot(closure_61, { type: "start" });
    } else {
      return false;
    }
  },
  DISCOVER_REQUEST_FAILED: function handleDiscoverRequestFailed(identity) {
    identity = identity.identity;
    if (canApplyDiscover(identity)) {
      closure_61 = DiscoverRequestState.reduceDiscoverSnapshot(closure_61, { type: "error" });
    } else {
      return false;
    }
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      if (null == c32) {
        return true;
      } else {
        if (items7.length > 0) {
          items = items7;
        } else {
          items = [];
          HermesBuiltin.arraySpread(items1, 0);
        }
        items7 = items;
        finalizeNewDehydratedItemsContent();
        reload();
      }
    } else if (null != messageItem) {
      obj = { id: messageItem.message.id, type: items2(items4[24]).ICYMIItemTypes.MESSAGE, score: 50, data: null };
      const obj2 = { channel_id: messageItem.channel_id, message_id: messageItem.message.id, guild_id: messageItem.guild_id, channel_type: constants.GUILD_TEXT };
      obj.data = obj2;
      closure_37[messageItem.message.id] = obj;
      const obj3 = {};
      const merged = Object.assign(obj);
      obj3.message = items2(items4[34]).createMessageRecord(messageItem.message);
      closure_38[messageItem.message.id] = obj3;
      if (null == c32) {
        if (null == closure_36) {
          items1 = [obj];
          HermesBuiltin.arraySpread(items1, 1);
          items2 = [];
          const items3 = [];
          items4 = [];
          const item = items1.forEach((id) => {
            const tmp = null != ICYMIUnreadStateStore.getReadTimestamp(id.id);
            let tmp4 = id.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
                tmp7 = !isItemUnreadInChannel.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
                const tmp2Result = isItemUnreadInChannel;
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              set1.push(id);
            } else {
              if (id.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
                if (id.data.has_mention) {
                  dependencyMap.push(id);
                }
              }
              map.push(id);
            }
          });
          const items5 = [];
          HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items4, 0));
          const items6 = [items5, items2.sort((id, id2) => set1(dependencyMap[23]).compareGravityUnreadIds(id.id, id2.id))];
          [closure_49, closure_50] = items6;
          const tmp26 = _slicedToArray(items6, 2);
        }
        return true;
      }
      items7 = [obj];
      HermesBuiltin.arraySpread(items7, 1);
      reload();
      const obj4 = items2(items4[34]);
    } else {
      return false;
    }
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(arg0) {
    ({ items, loadId, discoverRequest } = arg0);
    ({ startTime, isInitialLoad, isReloading } = arg0);
    if (null != discoverRequest) {
      if (!canApplyDiscover(discoverRequest)) {
        return false;
      }
    }
    set1 = new Set(set1(10142).SUPPORTED_ITEM_TYPES);
    const map = new Map();
    set = new Set(set1(10142).SUPPORTED_ITEM_TYPES);
    if (obj.getWaterwheelsDiscoverEnabled(icymi_store)) {
      let discoverSnapshot = tmp2(10156).selectDiscoverSnapshot(items, (arg0, arg1) => map.set(arg0, arg1));
      let tmp2Result = tmp2(10156);
    } else {
      discoverSnapshot = [];
    }
    const found = items.filter((type) => set1.has(type.type));
    const found1 = found.filter((type) => {
      if (type.type !== ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
        return true;
      } else {
        value = map.get(type);
        let flag = null != value;
        if (flag) {
          closure_38[type.id] = value;
          flag = true;
        }
        return flag;
      }
    });
    const found2 = found1.filter(filterStaffGuild);
    closure_34 = found2.map((type) => {
      if (type.type === set1(dependencyMap[24]).ICYMIItemTypes.MESSAGE) {
        if (null != type.data.message_context) {
          let tmp2 = null != type.data.message_context.reply_message_id;
          if (tmp2) {
            const _parseInt = parseInt;
            tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
          }
          obj = {};
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
    if (null != discoverRequest) {
      const obj2 = { type: "success", items: discoverSnapshot, loadId };
      closure_61 = tmp2(10146).reduceDiscoverSnapshot(closure_61, obj2);
      const tmp2Result4 = tmp2(10146);
    }
    finalizeNewDehydratedItemsContent();
    const obj3 = {
      load_id: loadId,
      load_time_millis: Date.now() - startTime,
      feed_item_ids: closure_34.flatMap((item) => {
        const dehydratedAnalyticsItemId = set1(dependencyMap[29]).getDehydratedAnalyticsItemId(item);
        if (null == dehydratedAnalyticsItemId) {
          items = [];
        } else {
          items = [dehydratedAnalyticsItemId];
        }
        return items;
      })
    };
    const items1 = [];
    closure_129_0 = items1;
    const items2 = [];
    closure_129_1 = items2;
    const items3 = [];
    closure_129_2 = items3;
    const item = closure_34.forEach((id) => {
      const tmp = null != ICYMIUnreadStateStore.getReadTimestamp(id.id);
      let tmp4 = id.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
          tmp7 = !isItemUnreadInChannel.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = isItemUnreadInChannel;
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            dependencyMap.push(id);
          }
        }
        map.push(id);
      }
    });
    const items4 = [...items2];
    const items5 = [items4, items1.sort((id, id2) => set1(dependencyMap[23]).compareGravityUnreadIds(id.id, id2.id))];
    obj = set1(10147);
    [arr10, arr11] = items5;
    let tmp9 = _slicedToArray(items5, 2);
    if (c45) {
      if (0 !== c42) {
        if (!isInitialLoad) {
          if (c42 > 0) {
            c47 = null;
          }
          const tmp10 = arr12.length > tmp2(10142).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            hasNewContent = tmp10;
          }
          if (tmp10) {
            const tmp2Result5 = tmp2(10149);
            const items6 = [];
            HermesBuiltin.arraySpread(arr11, HermesBuiltin.arraySpread(arr10, 0));
            tmp2Result5.hydrateItems(items6, 0, tmp2(10142).ICYMI_PAGE_SIZE, closure_38);
            if (arr10.length + arr11.length === 0) {
              c58 = true;
            }
          }
          const obj4 = { newTrackingProps: obj3, hasNewContent, unreadFeedItems: arr10, readFeedItems: arr11, homeSessionId: null };
          let str = "background_load";
          if (focused) {
            str = "foreground_load";
          }
          obj4.homeSessionId = str;
          tmp2(10160).trackFeedLoaded(obj4);
          const tmp2Result6 = tmp2(10160);
        }
      }
    }
    c42 = 0;
    if (!focused) {
      const _Date = Date;
      const diff = Date.now() - closure_33;
      let flag2 = false;
      if (diff > 6 * map(1089).Millis.HOUR) {
        const _Set = Set;
        set1 = new Set(arr10.map((id) => id.id));
        const substr = arr14.slice(0, 20);
        flag2 = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      if (flag2) {
        hasNewContent = true;
        c43 = true;
      }
      const obj5 = { newUnread: arr10, newRead: arr11 };
      reload(obj5);
      arr14 = closure_34;
    }
    hasNewContent = false;
    arr12 = getNewUnreadItems(arr10);
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    c58 = true;
    obj = {};
    let merged = Object.assign(obj);
    _require = messageItems.reduce((acc, message) => {
      acc[message.message.id] = message;
      return acc;
    }, {});
    closure_1 = activityItems.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    const item = requestMessageItems.forEach((message_id) => {
      if (null != closure_0[message_id.message_id]) {
        let tmp4 = dependencyMap[message_id.message_id];
        if (null == tmp4) {
          obj = { id: message_id.message_id, type: ICYMITypes.ICYMIItemTypes.MESSAGE, score: -1, data: null };
          const obj5 = { guild_id: null, channel_id: null, message_id: null, channel_type: null, has_mention: false };
          ({ guild_id: obj2.guild_id, channel_id: obj2.channel_id } = tmp);
          obj5.message_id = tmp.message.id;
          obj5.channel_type = constants.GUILD_TEXT;
          obj.data = obj5;
          tmp4 = obj;
        }
        const message = MessageStore.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          const obj7 = {};
          const merged = Object.assign(ICYMIUtils.createGravityMessageFromServer(tmp, tmp4));
          obj7.message = message;
          closure_38[tmp.message.id] = obj7;
        } else {
          closure_38[tmp.message.id] = ICYMIUtils.createGravityMessageFromServer(tmp, tmp4);
        }
      } else {
        closure_39[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != closure_1[content_id.content_id]) {
        if (null != dependencyMap[content_id.content_id]) {
          obj = {};
          const merged = Object.assign(tmp4);
          obj.activity = tmp;
          closure_38[tmp.id] = obj;
        } else {
          closure_39[content_id.content_id] = true;
        }
      } else {
        closure_39[content_id.content_id] = true;
      }
    });
    set.delete(require("generateHydrationId").generateHydrationId(startingIndex, endingIndex));
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
    const merged1 = Object.assign(obj);
    obj = {};
    const obj2 = {};
  },
  LOAD_ICYMI_RECOMMENDED_GUILDS: function loadICYMIRecommendedGuilds(guilds) {
    guilds = guilds.guilds;
    closure_52 = guilds.map((guild) => require("GuildDiscoveryUtils").makeDiscoverableGuild(guild.guild));
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
      const item = channelScores.forEach((item) => {
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
    if (0 === closure_34.length) {
      return false;
    } else {
      reload();
      c44 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    c45 = true;
    closure_33 = Date.now();
    if (c43) {
      c43 = false;
      c44 = false;
    }
    if (c48 < 5) {
      c48 = c48 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    c48 = 6;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(arg0) {
    if (null == dependencyMap[arg0.messageId]) {
      return false;
    } else if (tmp2.type !== ICYMITypes.ICYMIItemTypes.MESSAGE) {
      return false;
    } else {
      const message = tmp2.message;
      tmp2.message = message.addReactionBatch(tmp, AuthenticationStore.getId());
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = tmp.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
      const tmp6 = tmp2.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
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
    closure_53 = Date.now();
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
        items = [tmp, ];
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
};
const iCYMIStore = new ICYMIStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default iCYMIStore;