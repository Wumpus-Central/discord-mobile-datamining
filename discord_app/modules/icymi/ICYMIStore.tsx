// discord_app/modules/icymi/ICYMIStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ICYMITypes from "ICYMITypes.tsx";
import ICYMIUtils from "ICYMIUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ContentInventoryStore from "../content_inventory/ContentInventoryStore.tsx";
import ExperimentStore from "../experiments/ExperimentStore.tsx";
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildAffinitiesStore from "../../stores/GuildAffinitiesStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import ICYMIFiltersStore from "ICYMIFiltersStore.tsx";
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore.tsx";

require = fn;
function filterStaffGuild(data) {
  if (ICYMIFiltersStore.filterStaffContent()) {
    if (obj.isGuildItem(data)) {
      if (data.data.guild_id === ICYMITypes.GAME_CONTENT_GUILD_ID) {
        return true;
      } else {
        const guild = GuildStore.getGuild(data.data.guild_id);
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
  closure_45 = closure_45.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  closure_46 = closure_46.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = GuildStore.getGuildsArray();
    const tmp24 =
      guildsArray.filter((features) => {
        features = features.features;
        return features.has(constants.COMMUNITY);
      }).length >= 5;
    const readTimestamp = ICYMIUnreadStateStore.getReadTimestamp("recommendedGuilds");
    if (tmp24) {
      if (null != readTimestamp) {
        const _Date = Date;
        if (Date.now() - closure_49 > DAY) {
          const _Date2 = Date;
        }
      }
    }
    obj = { id: "recommendedGuilds", type: ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS, score: 50 };
    closure_34[obj.id] = obj;
    closure_33[obj.id] = obj;
    if (0 === closure_45.length) {
      items = [obj];
      HermesBuiltin.arraySpread(closure_46, 1);
      closure_46 = items;
    } else {
      if (tmp24) {
        if (tmp24) {
          const _Math = Math;
          const _Math2 = Math;
          closure_45.splice(Math.round(2 * Math.random()) + 3 - 1, 0, obj);
        } else {
          closure_45.splice(5, 0, obj);
        }
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(closure_45, 0)] = obj;
      closure_45 = items1;
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
    closure_1_33[id.id] = id;
    if (id.type === set(type[19]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(id.data.user_id)) {
        closure_1_35[id.id] = true;
      } else {
        dependencyMap[id.id] = set(type[18]).customStatusToContentInventoryEntry(id);
        const tmpResult = set(type[18]);
      }
    }
  });
}
function reload(arg0) {
  if (closure_30.length > 0) {
    dehydratedItems = closure_30;
    closure_30 = [];
    closure_31 = [];
  }
  closure_38 = closure_38 + 1;
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
          tmp7 = !tmp2(8350).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = tmp2(8350);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === tmp2(8348).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            dependencyMap.push(id);
          }
        }
        importDefault.push(id);
      }
    });
    const items3 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items2, 0));
    const items4 = [items3, items.sort((id, id2) => set1(dependencyMap[18]).compareGravityUnreadIds(id.id, id2.id))];
    [found, found1] = _slicedToArray(items4, 2);
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
          let tmp12 = item10031;
          if (!closure_7(item10031)) {
            let tmp23 = found1;
            if (closure_6(tmp12, 2 * items2(found1[17]).Seconds.DAY)) {
              if (null == dependencyMap[tmp12.id]) {
                obj = { id: tmp12.id, type: null, score: 10, event_id: null };
                obj.type = items1(tmp23[19]).ICYMIItemTypes.GUILD_EVENT;
                obj.event_id = tmp12.id;
                dependencyMap[tmp12.id] = obj;
              }
              obj = { id: null, type: null, score: 10, data: null };
              obj.id = tmp12.id;
              obj.type = items1(tmp23[19]).ICYMIItemTypes.GUILD_EVENT;
              let obj1 = { guild_id: null, event_id: null, channel_id: null };
              ({ guild_id: obj4.guild_id, id: obj4.event_id, channel_id } = tmp12);
              obj1.channel_id = channel_id;
              obj.data = obj1;
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
      const guildAffinity = closure_1_12.getGuildAffinity(data.data.guild_id);
      const guildAffinity1 = closure_1_12.getGuildAffinity(data2.data.guild_id);
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
      closure_2_33[id.id] = id;
      if (null != readTimestamp.getReadTimestamp(id.id)) {
        items2.push(id);
      } else {
        items1.push(id);
      }
    });
    closure_45 = closure_58(closure_45, items1, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_46 = closure_58(closure_46, items2, items1(found1[19]).ICYMIItemTypes.GUILD_EVENT, 7);
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
    obj = ACTIVITY;
    if (!ACTIVITY.has(content.content.id)) {
      let tmpResult = tmp(8135);
      if (!tmpResult.isEntryExpired(content.content)) {
        tmpResult = tmp(8341);
        if (tmpResult.isGamingLikeEntry(content.content)) {
          if (null == dependencyMap[content.content.author_id]) {
            const _Set = Set;
            set = new Set();
            tmp3[content.content.author_id] = set;
          }
          if (!obj4.has(content.content.extra.application_id)) {
            tmp3[content.content.author_id].add(content.content.extra.application_id);
          }
          obj4 = dependencyMap[content.content.author_id];
        }
        if (null == dependencyMap[content.content.id]) {
          obj = {
            id: content.content.id,
            type: tmp(8348).ICYMIItemTypes.ACTIVITY,
            score: 15,
            activity: content.content,
          };
          dependencyMap[content.content.id] = obj;
        }
        obj = { id: content.content.id, type: tmp(8348).ICYMIItemTypes.ACTIVITY, score: 15, data: null };
        const obj1 = { user_id: content.content.author_id, content_id: content.content.id };
        obj.data = obj1;
        obj.add(content.content.id);
        closure_33[obj.id] = obj;
        if (null != ICYMIUnreadStateStore.getReadTimestamp(obj.id)) {
          _slicedToArray.push(obj);
        } else {
          found1.push(obj);
        }
      }
    }
  });
  ACTIVITY = ACTIVITY(found1[19]).ICYMIItemTypes.ACTIVITY;
  found = found.filter((type) => type.type !== ACTIVITY);
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
  found1 = found1.filter((type) => type.type !== ACTIVITY);
  const item3 = items6.forEach((item, index) => {
    let arr = found1;
    if ((index + 1) * c1 < found1.length) {
      arr.splice((index + 1) * tmp, 0, item);
    } else {
      arr = arr.push(item);
    }
  });
  injectRecommendedGuildsRow();
  let tmp14 = null != newTrackingProps.load_id;
  if (tmp14) {
    tmp14 = load_id !== newTrackingProps.load_id;
  }
  if (tmp14) {
    const ICYMIAnalytics = tmp7(tmp8[23]).ICYMIAnalytics;
    obj = { newTrackingProps, hasNewContent, unreadFeedItems: found, readFeedItems: found1, homeSessionId: "gravity" };
    ICYMIAnalytics.trackFeedLoaded(obj);
    load_id = newTrackingProps.load_id;
    if (load_id == null) {
      load_id = null;
    }
    newTrackingProps = {};
  }
  c47 = 0;
  if (found.length + found1.length === 0) {
    c54 = true;
  }
  set = new Set();
  const items7 = [...found1];
  ACTIVITY(found1[18]).hydrateItems(items7, 0, ACTIVITY(found1[19]).ICYMI_PAGE_SIZE);
  c51 = false;
}
function getNewUnreadItems(arr9, channelId) {
  items = [];
  const iter = arr9[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    if (nextResult.type !== ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS) {
      if (!set.has(tmp2.id)) {
        let tmp7 = null == ICYMIUnreadStateStore.getReadTimestamp(tmp2.id);
        if (tmp7) {
          let tmp9 = tmp2.type !== tmp3(8348).ICYMIItemTypes.MESSAGE;
          if (!tmp9) {
            let tmp3Result = tmp3(8350);
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
    closure_45 = closure_45.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_130_0 = channelId;
    closure_46 = closure_46.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_131_0 = channelId;
    closure_30 = closure_30.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.channel_id !== closure_0;
      }
      return tmp2;
    });
    closure_132_0 = channelId;
    closure_31 = closure_31.filter((data) => {
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
    closure_45 = closure_45.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_130_0 = guildId;
    closure_46 = closure_46.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_131_0 = guildId;
    closure_30 = closure_30.filter((data) => {
      const isGuildItemResult = ICYMIUtils.isGuildItem(data);
      let tmp2 = !isGuildItemResult;
      if (isGuildItemResult) {
        tmp2 = data.data.guild_id !== closure_0;
      }
      return tmp2;
    });
    closure_132_0 = guildId;
    closure_31 = closure_31.filter((data) => {
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
    if (index > c47) {
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
  const item1 = closure_30.forEach((id) => {
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
        tmp7 = !tmp2(8350).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
        const tmp2Result = tmp2(8350);
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      set1.push(id);
    } else {
      if (id.type === tmp2(8348).ICYMIItemTypes.MESSAGE) {
        if (id.data.has_mention) {
          dependencyMap.push(id);
        }
      }
      importDefault.push(id);
    }
  });
  const items5 = [...items3];
  const items6 = [items5, items2.sort((id, id2) => set1(dependencyMap[18]).compareGravityUnreadIds(id.id, id2.id))];
  const arr8 = getNewUnreadItems(_slicedToArray(items6, 2)[0], channelId);
  if (c41) {
    let tmp15 = tmp2;
    if (tmp2) {
      tmp15 = arr8.length >= set(items1[19]).MIN_ITEMS_FOR_NEW_PILL;
    }
    let tmp5 = tmp15;
  } else {
    tmp5 = tmp2;
    if (tmp2) {
      const _Date = Date;
      const diff = Date.now() - closure_29;
      let flag = false;
      if (diff > 6 * items(items1[17]).Millis.HOUR) {
        const _Set = Set;
        set = new Set(items1.map((id) => id.id));
        const substr = arr9.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      tmp5 = flag;
      arr9 = closure_30;
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
}
let GuildScheduledEventStore = fn(7526);
({
  eventScheduledToStartWithin: metroRequire,
  isGuildEventEnded: closure_7,
  isGuildScheduledEventActive: closure_8,
} = GuildScheduledEventStore);
const Constants = fn(1074);
({ ChannelTypes: closure_21, GuildFeatures: closure_22, Permissions: closure_23 } = Constants);
const ContentInventoryFeedKey = fn(8358).ContentInventoryFeedKey;
const DAY = DurationsDefault.Millis.DAY;
let closure_26 = 3 * DurationsDefault.Millis.DAY;
let dehydratedItems = [];
let c28 = null;
const lastOpened = 0;
let closure_30 = [];
let closure_31 = [];
let newTrackingProps = {};
let closure_33 = {};
const dependencyMap = {};
let closure_35 = {};
let obj = {};
obj = {};
let c38 = 0;
let c39 = false;
let c40 = false;
let c41 = false;
let items = null;
let c43 = null;
let c44 = 0;
let closure_45 = [];
let closure_46 = [];
let c47 = 0;
const lastJoinedRecommendedGuild = 0;
let muted = true;
let refreshing = false;
let set = new Set();
let focused = false;
let c54 = false;
let timestamp = 0;
let takenAt = 0;
const PersistedStore = initializeDefault.PersistedStore;
class ICYMIStore extends PersistedStore {}
const prototype = ICYMIStore.prototype;
prototype["initialize"] = function initialize(dehydratedItems) {
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    ContentInventoryStore,
    ExperimentStore,
    GuildAffinitiesStore,
    GuildScheduledEventStore,
    GuildStore,
    ICYMIFiltersStore,
    ICYMIUnreadStateStore,
    MessageStore,
    PermissionStore,
    ReadStateStore,
    RelationshipStore,
    UserGuildSettingsStore,
  );
  if (null != dehydratedItems) {
    dehydratedItems = dehydratedItems.dehydratedItems;
    if (dehydratedItems == null) {
      dehydratedItems = [];
    }
    closure_27 = dehydratedItems;
    const item = dehydratedItems.forEach((id) => {
      closure_1_33[id.id] = id;
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
    c44 = num;
    let num2 = dehydratedItems.lastOpened;
    if (num2 == null) {
      num2 = 0;
    }
    closure_29 = num2;
    let num3 = dehydratedItems.lastJoinedRecommendedGuild;
    if (num3 == null) {
      num3 = 0;
    }
    closure_49 = num3;
    let num4 = dehydratedItems.lastTakenICYMISurvey;
    if (num4 == null) {
      num4 = 0;
    }
    takenAt = num4;
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
  let tmp = closure_33[arg0];
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
  return c40;
};
prototype["getCurrentStatusAttachments"] = function getCurrentStatusAttachments(arg0) {
  if (null != items) {
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
  return muted;
};
prototype["isRefreshing"] = function isRefreshing() {
  return refreshing;
};
prototype["isHydrating"] = function isHydrating() {
  return set.size > 0;
};
prototype["notificationItem"] = function notificationItem() {
  return c43;
};
prototype["getIsTabFocused"] = function getIsTabFocused() {
  return focused;
};
prototype["isFirstPageHydrated"] = function isFirstPageHydrated() {
  return c54;
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
      HermesBuiltin.arraySpread(closure_46, HermesBuiltin.arraySpread(closure_45, 0));
      const found = items.filter((item) => null != dependencyMap[item.id]);
      let findIndexResult = found.findIndex((id) => id.id === closure_0);
    }
    return findIndexResult;
  }
  const items1 = [...closure_46];
  findIndexResult = items1.findIndex((type) => type.type === id(dependencyMap[19]).ICYMIItemTypes.RECOMMENDED_GUILDS);
};
prototype["getState"] = function getState() {
  obj = {
    dehydratedItems,
    numOpens,
    customGuildScores: obj,
    customChannelScoresByGuild: obj,
    lastOpened,
    lastJoinedRecommendedGuild,
    lastTakenICYMISurvey: takenAt,
  };
  return obj;
};
ICYMIStore.displayName = "ICYMIStore";
ICYMIStore.persistKey = "ICYMIStore";
obj = {
  LOGOUT: function handleLogout() {
    closure_27 = [];
    closure_30 = [];
    closure_31 = [];
    closure_33 = {};
    closure_32 = {};
    closure_34 = {};
    closure_35 = {};
    c28 = null;
    c38 = 0;
    c39 = false;
    c40 = false;
    c41 = false;
    closure_45 = [];
    closure_46 = [];
    c47 = 0;
    closure_29 = 0;
    closure_49 = 0;
    muted = true;
    refreshing = false;
    set = new Set();
    c43 = null;
    focused = false;
    c54 = false;
    items = null;
    timestamp = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      if (null == c28) {
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
      obj = { id: messageItem.message.id, type: items2(items4[19]).ICYMIItemTypes.MESSAGE, score: 50, data: null };
      obj = {
        channel_id: messageItem.channel_id,
        message_id: messageItem.message.id,
        guild_id: messageItem.guild_id,
        channel_type: constants.GUILD_TEXT,
      };
      obj.data = obj;
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
                tmp7 = !tmp2(8350).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
                const tmp2Result = tmp2(8350);
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              set1.push(id);
            } else {
              if (id.type === tmp2(8348).ICYMIItemTypes.MESSAGE) {
                if (id.data.has_mention) {
                  dependencyMap.push(id);
                }
              }
              importDefault.push(id);
            }
          });
          const items5 = [];
          HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items4, 0));
          const items6 = [
            items5,
            items2.sort((id, id2) => set1(dependencyMap[18]).compareGravityUnreadIds(id.id, id2.id)),
          ];
          [closure_45, closure_46] = _slicedToArray(items6, 2);
          const tmp26 = _slicedToArray(items6, 2);
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
    set1 = new Set(set1(8348).SUPPORTED_ITEM_TYPES);
    const found = items.filter((type) => set1.has(type.type));
    const found1 = found.filter(filterStaffGuild);
    closure_30 = found1.map((type) => {
      if (type.type === set1(dependencyMap[19]).ICYMIItemTypes.MESSAGE) {
        if (null != type.data.message_context) {
          let tmp2 = null != type.data.message_context.reply_message_id;
          if (tmp2) {
            const _parseInt = parseInt;
            tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
          }
          const message_context = {};
          if (tmp2) {
            message_context.reply_message_id = type.data.message_context.reply_message_id;
          }
          let tmp3 = null != type.data.message_context.before_message_id;
          if (tmp3) {
            const _parseInt2 = parseInt;
            tmp3 = 0 !== parseInt(type.data.message_context.before_message_id);
          }
          if (tmp3) {
            message_context.before_message_id = type.data.message_context.before_message_id;
          }
          let tmp5 = null != type.data.message_context.after_message_id;
          if (tmp5) {
            const _parseInt3 = parseInt;
            tmp5 = 0 !== parseInt(type.data.message_context.after_message_id);
          }
          if (tmp5) {
            message_context.after_message_id = type.data.message_context.after_message_id;
          }
          let tmp7 = null != type.data.message_context.external_content_application_id;
          if (tmp7) {
            const _parseInt4 = parseInt;
            tmp7 = 0 !== parseInt(type.data.message_context.external_content_application_id);
          }
          if (tmp7) {
            message_context.external_content_application_id = type.data.message_context.external_content_application_id;
          }
          let tmp9 = null != type.data.message_context.reference_message_id;
          if (tmp9) {
            const _parseInt5 = parseInt;
            tmp9 = 0 !== parseInt(type.data.message_context.reference_message_id);
          }
          if (tmp9) {
            message_context.reference_message_id = type.data.message_context.reference_message_id;
          }
          type.data.message_context = message_context;
        }
      }
      return type;
    });
    finalizeNewDehydratedItemsContent();
    newTrackingProps = {
      load_id: loadId,
      load_time_millis: Date.now() - startTime,
      feed_item_ids: closure_30.map((id) => id.id),
    };
    const items1 = [];
    closure_129_0 = items1;
    const items2 = [];
    closure_129_1 = items2;
    const items3 = [];
    closure_129_2 = items3;
    const item = closure_30.forEach((id) => {
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
          tmp7 = !tmp2(8350).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const tmp2Result = tmp2(8350);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        set1.push(id);
      } else {
        if (id.type === tmp2(8348).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            dependencyMap.push(id);
          }
        }
        importDefault.push(id);
      }
    });
    const items4 = [...items2];
    const items5 = [items4, items1.sort((id, id2) => set1(dependencyMap[18]).compareGravityUnreadIds(id.id, id2.id))];
    set = new Set(set1(8348).SUPPORTED_ITEM_TYPES);
    [arr9, arr10] = _slicedToArray(items5, 2);
    const arr11 = getNewUnreadItems(arr9);
    if (c41) {
      if (0 !== c38) {
        if (!isInitialLoad) {
          if (c38 > 0) {
            c43 = null;
          }
          const tmp8 = arr11.length > tmp(8348).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            hasNewContent = tmp8;
          }
          if (tmp8) {
            const items6 = [];
            HermesBuiltin.arraySpread(arr10, HermesBuiltin.arraySpread(arr9, 0));
            tmp(8350).hydrateItems(items6, 0, tmp(8348).ICYMI_PAGE_SIZE);
            if (arr9.length + arr10.length === 0) {
              c54 = true;
            }
            const tmpResult = tmp(8350);
          }
          const ICYMIAnalytics = tmp(8359).ICYMIAnalytics;
          newTrackingProps = {
            newTrackingProps: null,
            hasNewContent: null,
            unreadFeedItems: null,
            readFeedItems: null,
            homeSessionId: null,
          };
          newTrackingProps.newTrackingProps = newTrackingProps;
          newTrackingProps.hasNewContent = hasNewContent;
          newTrackingProps.unreadFeedItems = arr9;
          newTrackingProps.readFeedItems = arr10;
          let str = "background_load";
          if (focused) {
            str = "foreground_load";
          }
          newTrackingProps.homeSessionId = str;
          ICYMIAnalytics.trackFeedLoaded(newTrackingProps);
        }
      }
    }
    c38 = 0;
    if (!focused) {
      const _Date = Date;
      const diff = Date.now() - closure_29;
      let flag = false;
      if (diff > 6 * DurationsDefault.Millis.HOUR) {
        const _Set = Set;
        set1 = new Set(arr9.map((id) => id.id));
        const substr = arr13.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      if (flag) {
        hasNewContent = true;
        c39 = true;
      }
      newTrackingProps = { newUnread: arr9, newRead: arr10 };
      reload(newTrackingProps);
      arr13 = closure_30;
    }
    hasNewContent = false;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    c54 = true;
    let data = {};
    let merged = Object.assign(data);
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
          data = { id: message_id.message_id, type: ICYMITypes.ICYMIItemTypes.MESSAGE, score: -1, data: null };
          data = { guild_id: null, channel_id: null, message_id: null, channel_type: null, has_mention: false };
          ({ guild_id: obj2.guild_id, channel_id: obj2.channel_id } = tmp);
          data.message_id = tmp.message.id;
          data.channel_type = constants.GUILD_TEXT;
          data.data = data;
          tmp4 = data;
        }
        const message = MessageStore.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          data = {};
          const merged = Object.assign(ICYMIUtils.createGravityMessageFromServer(tmp, tmp4));
          data.message = message;
          closure_34[tmp.message.id] = data;
        } else {
          closure_34[tmp.message.id] = ICYMIUtils.createGravityMessageFromServer(tmp, tmp4);
        }
      } else {
        closure_35[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != closure_1[content_id.content_id]) {
        if (null != dependencyMap[content_id.content_id]) {
          obj = {};
          const merged = Object.assign(tmp4);
          obj.activity = tmp;
          closure_34[tmp.id] = obj;
        } else {
          closure_35[content_id.content_id] = true;
        }
      } else {
        closure_35[content_id.content_id] = true;
      }
    });
    set.delete(require("ICYMIUtils").generateHydrationId(startingIndex, endingIndex));
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
        let tmp9 = item10028;
        if (null == obj[tmp2.guild_id]) {
          obj[tmp2.guild_id] = {};
        }
        obj[tmp2.guild_id][tmp9] = tmp2.custom_channel_scores[tmp9];
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
    closure_48 = guilds.map((guild) => require("GuildDiscoveryUtils").makeDiscoverableGuild(guild.guild));
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
          obj[tmp] = {};
        }
        obj[guildId][channelId] = score;
        maybeFilterChannelItems(channelId, score);
        obj = {};
        const merged = Object.assign(obj);
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === closure_30.length) {
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
    if (c44 < 5) {
      c44 = c44 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    c44 = 6;
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
        items = [tmp];
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
  },
};
const iCYMIStore = new ICYMIStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default iCYMIStore;
