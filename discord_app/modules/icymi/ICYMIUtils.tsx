// === Module 8350: ICYMIUtils ===

// Module 8350 (ICYMIUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7897 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8130 */;
import ICYMITypes from "ICYMITypes" /* 8348 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8352 */;
import ContentInventoryAuthorType from "ContentInventoryAuthorType" /* 8356 */;
import ICYMIItemTypes from "ICYMIItemTypes" /* 8357 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import MessageStore from "MessageStore" /* 4781 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 8349 */;

require = fn;
function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
function hydrateItems() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _hydrateItems(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = hydratedItems.getHydratedItems();
          const substr = dependencyMap.slice(closure_1, dependencyMap2);
          if (0 !== substr.length) {
            let obj1 = ICYMIActionCreatorsDefault;
            const hydratedAttempt = obj1.loadHydratedAttempt(generateHydrationId(tmp23, tmp24));
            const found = substr.filter((item) => null == dependencyMap[item.id]);
            const found1 = found.filter((type) => type.type === dependencyMap(8348).ICYMIItemTypes.MESSAGE);
            const mapped = found1.map((channel_id) => ({ channel_id: channel_id.data.channel_id, message_id: channel_id.data.message_id }));
            const mapped1 = found.map((type) => {
              if (type.type === dependencyMap(8348).ICYMIItemTypes.MESSAGE) {
                const message_context = type.data.message_context;
                let reply_message_id;
                if (message_context != null) {
                  reply_message_id = message_context.reply_message_id;
                }
                const items = [];
                if (null != reply_message_id) {
                  obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.reply_message_id };
                  items.push(obj);
                }
                const message_context2 = type.data.message_context;
                let before_message_id;
                if (message_context2 != null) {
                  before_message_id = message_context2.before_message_id;
                }
                if (null != before_message_id) {
                  obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.before_message_id };
                  items.push(obj);
                }
                const message_context3 = type.data.message_context;
                let after_message_id;
                if (message_context3 != null) {
                  after_message_id = message_context3.after_message_id;
                }
                if (null != after_message_id) {
                  obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.after_message_id };
                  items.push(obj);
                }
                return items;
              } else {
                return [];
              }
            });
            const _Boolean = Boolean;
            const found2 = mapped1.flat().filter(Boolean);
            const found3 = found.filter((type) => type.type === dependencyMap(8348).ICYMIItemTypes.ACTIVITY);
            const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
            const flatResult = mapped1.flat();
            obj1 = { messageItems: null, activityItems: null };
            let items = [];
            HermesBuiltin.arraySpread(found2, HermesBuiltin.arraySpread(mapped, 0));
            obj1.messageItems = items;
            obj1.activityItems = mapped2;
            c4 = 1;
            c3 = 1;
            const obj2 = { value: ICYMIActionCreatorsDefault.fetchHydrated(tmp23, tmp24, obj1), done: false };
            return obj2;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
let closure_18 = async function _hydrateNextPage(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const unreadDisplayItems = ICYMIStore.getUnreadDisplayItems();
          const readDisplayItems = ICYMIStore.getReadDisplayItems();
          const nextIndexToHydrate = ICYMIStore.getNextIndexToHydrate();
          const items = [];
          HermesBuiltin.arraySpread(readDisplayItems, HermesBuiltin.arraySpread(unreadDisplayItems, 0));
          c1 = 1;
          c0 = 1;
          const obj1 = { value: hydrateItems(items, nextIndexToHydrate, nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
let closure_19 = async function _regenerateFeedAndClearReadStates(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          constants = tmp2;
          closure_1 = tmp5;
          closure_129_0 = object;
          let ack;
          let AnalyticsObjectTypes;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[21], paths.paths), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          ack = value.ack;
          c3 = 2;
          c4 = 1;
          let obj3 = { value: closure_130_0(closure_130_2[22])(closure_130_2[23], closure_130_2.paths), done: false };
          return obj3;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          AnalyticsObjectTypes = value.AnalyticsObjectTypes;
          const dehydratedItems = closure_130_10.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp2 = type.type === object(constants[10]).ICYMIItemTypes.MESSAGE;
            if (tmp2) {
              tmp2 = type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
            }
            if (tmp2) {
              obj = closure_1(tmp[13]);
              tmp2 = obj.compare(closure_2_9.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
            }
            if (tmp2) {
              const channel_id = type.data.channel_id;
              obj = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
              closure_1_1(channel_id, obj, true, true, closure_1(tmp[13]).atPreviousMillisecond(type.data.message_id));
              const obj3 = closure_1(tmp[13]);
            }
          });
          let obj11 = closure_130_1(closure_130_2[11]);
          c3 = 3;
          c4 = 1;
          let obj5 = { value: obj11.clearReadStates(), done: false };
          return obj5;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let obj8 = closure_130_1(closure_130_2[11]);
          c3 = 4;
          c4 = 1;
          const obj7 = { value: obj8.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
          return obj7;
        }
      } else if (4 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj8 = { value, done: true };
          return obj8;
        } else {
          obj5 = closure_130_1(closure_130_2[11]);
          c3 = 5;
          c4 = 1;
          const obj9 = { value: obj5.reloadICYMITab(), done: false };
          return obj9;
        }
      } else if (5 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          obj2 = closure_130_1(closure_130_2[11]);
          c3 = 6;
          c4 = 1;
          obj11 = { value: obj2.getGuildChannelScores(), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        obj = closure_130_1(closure_130_2[11]);
        const recommendedGuilds = obj.getRecommendedGuilds();
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp36) {
      c4 = tmp;
      throw tmp36;
    }
  }
};
const ThreadChannelRecord = fn(1961).ThreadChannelRecord;
const Constants = fn(1074);
({ ChannelTypes: closure_12, GuildNSFWContentLevel: map1 } = Constants);
const ICYMICustomScore = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export { ICYMICustomScore };
export const isGuildItem = function isGuildItem(type) {
  let tmp3 = type.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
  if (!tmp3) {
    tmp3 = type.type === ICYMITypes.ICYMIItemTypes.GUILD_EVENT;
  }
  return tmp3;
};
export const isChannelCustomScoreEligible = function isChannelCustomScoreEligible(stateFromStores) {
  let tmp2 = stateFromStores.type === constants.GUILD_FORUM;
  if (!tmp2) {
    tmp2 = stateFromStores.type === tmp.GUILD_ANNOUNCEMENT || stateFromStores.type === tmp.GUILD_TEXT;
    const tmp3 = stateFromStores.type === tmp.GUILD_ANNOUNCEMENT || stateFromStores.type === tmp.GUILD_TEXT;
  }
  return tmp2;
};
export const numberToCustomScore = function numberToCustomScore(stateFromStores1) {
  if (stateFromStores1 < -1.5) {
    let DEFAULT = obj.MUTED;
  } else if (stateFromStores1 < 0) {
    DEFAULT = obj.LESS;
  } else if (stateFromStores1 > 0) {
    DEFAULT = obj.MORE;
  } else {
    DEFAULT = obj.DEFAULT;
  }
  return DEFAULT;
};
export const customScoreToNumber = function customScoreToNumber(DEFAULT) {
  if (obj.MORE === DEFAULT) {
    return 1;
  } else if (tmp.LESS === DEFAULT) {
    return -1;
  } else if (tmp.MUTED === DEFAULT) {
    return -2;
  } else {
    return 0;
  }
};
export { hydrateItems };
export const hydrateNextPage = function hydrateNextPage() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  obj = {};
  const merged = Object.assign(arg1);
  obj.message = MessageRecordUtils.createMessageRecord(message.message);
  let fromServerResult;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj.threadChannel = fromServerResult;
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message_id);
    tmp2 = extractTimestampResult > SnowflakeUtilsDefault.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
};
export const useGravityMessage = function useGravityMessage(message) {
  _require = message;
  const items = [MessageStore, ICYMIStore];
  const items1 = [message];
  return require("initialize").useStateFromStores(items, () => {
    message = MessageStore.getMessage(message.getChannelId(), message.id);
    if (message == null) {
      const hydratedItem = ICYMIStore.getHydratedItem(tmp.id);
      let message1;
      if (hydratedItem != null) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    if (message == null) {
      message = tmp;
    }
    return message;
  }, items1);
};
export const useGravityMessageItem = function useGravityMessageItem(id) {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  return require("initialize").useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
};
export const useICYMIMessage = function useICYMIMessage(id, before_message_id) {
  _require = id;
  closure_1 = before_message_id;
  const items = [MessageStore, ICYMIStore];
  const items1 = [id, before_message_id];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let message = MessageStore.getMessage(closure_0, tmp);
      if (message == null) {
        const hydratedItem = ICYMIStore.getHydratedItem(tmp);
        let message1;
        if (hydratedItem != null) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      tmp2 = message;
    }
    return tmp2;
  }, items1);
};
export const icymiEnabled = function icymiEnabled(customScores) {
  return ICYMIExperiment.getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  let activity = { id: notificationItem.id, type: ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS, activity: null, score: null, score_components: null };
  activity = { id: notificationItem.id, author_id: notificationItem.data.user_id, author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS, extra: null };
  let str = notificationItem.data.text;
  if (str == null) {
    str = "";
  }
  activity.extra = { type: "custom_status_extra", status: str, emoji_id: notificationItem.data.emoji_id, emoji_name: notificationItem.data.emoji_name, emoji_animated: notificationItem.data.emoji_animated, attachments: notificationItem.data.attachments };
  activity.activity = activity;
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return activity;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2, arg2) {
  let readTimestamp = ICYMIUnreadStateStore.getReadTimestamp(id);
  if (null == readTimestamp) {
    let tmp2;
    if (arg2 != null) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = ICYMIUnreadStateStore.getReadTimestamp(id2);
  if (null == readTimestamp1) {
    let tmp4;
    if (arg2 != null) {
      tmp4 = arg2[id2];
    }
    readTimestamp1 = tmp4;
  }
  if (null != readTimestamp) {
    let num2 = -1;
    if (null != readTimestamp) {
      let num3 = 1;
      if (null != readTimestamp1) {
        num3 = readTimestamp1 - readTimestamp;
      }
      num2 = num3;
    }
    let num = num2;
  } else {
    num = 0;
  }
  return num;
};
export const getViewableFeedItemsArray = function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  const items = [...ICYMIStore.getUnreadDisplayItems(), ...ICYMIStore.getReadDisplayItems()];
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let NON_ELIGIBLE_SCROLL_ITEMS = ICYMIItemTypes.NON_ELIGIBLE_SCROLL_ITEMS;
        if (!NON_ELIGIBLE_SCROLL_ITEMS.has(tmp3.item.data.kind)) {
          break;
        }
      }
      diff = diff - 1;
      tmp2 = null;
    }
    id = tmp3.item.id;
    tmp2 = id;
  }
  if (null == tmp2) {
    return [];
  } else {
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      let items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
};
export const isItemNSFW = function isItemNSFW(data) {
  const kind = data.data.kind;
  if ("message" === kind) {
    let id = data.data.message.channel_id;
  } else if ("forumThread" === kind) {
    id = data.data.threadChannel.id;
  } else if ("guildEvent" === kind) {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      let guild_id = guildScheduledEvent.guild_id;
    }
  } else {
    return false;
  }
  const channel = ChannelStore.getChannel(id);
  let nsfw;
  if (channel != null) {
    nsfw = channel.nsfw;
  }
  if (nsfw) {
    return true;
  } else {
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(guild_id);
    }
    let nsfwLevel;
    if (guild != null) {
      nsfwLevel = guild.nsfwLevel;
    }
    let tmp11 = nsfwLevel === constants2.EXPLICIT;
    if (!tmp11) {
      let nsfwLevel1;
      if (guild != null) {
        nsfwLevel1 = guild.nsfwLevel;
      }
      tmp11 = nsfwLevel1 === tmp10.AGE_RESTRICTED;
    }
    return tmp11;
  }
};
export const itemToType = function itemToType(data) {
  const kind = data.data.kind;
  if ("end" === kind) {
    return "end";
  } else if ("loading" === kind) {
    return "loading";
  } else if ("bottomLoading" === kind) {
    return "bottomLoading";
  } else {
    let str11 = "message";
    if ("message" === kind) {
      let str10 = "announcement";
      if (data.channelType !== constants.GUILD_ANNOUNCEMENT) {
        const messageContext = data.data.messageContext;
        let prop;
        if (messageContext != null) {
          prop = messageContext.external_content_application_id;
        }
        if (null != prop) {
          str11 = "game_message";
        }
        str10 = str11;
      }
      return str10;
    } else if ("guildEvent" === kind) {
      return "guild_event";
    } else if ("contentInventory" === kind) {
      let str8 = "hotwheels_gaming_activity";
      if (data.data.content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS) {
        str8 = "hotwheels_custom_status";
      }
      return str8;
    } else if ("recommendedGuilds" === kind) {
      return "recommended_guilds";
    } else if ("forumThread" === kind) {
      return "forum_thread";
    } else if ("icymiHeader" === kind) {
      return "icymi_header";
    } else {
      return "unknown";
    }
  }
};
export const determineContentType = function determineContentType(channel, message) {
  if (channel.type === constants.GUILD_ANNOUNCEMENT) {
    return ICYMITypes.ContentType.ANNOUNCEMENT;
  } else if (channel.type === tmp.GUILD_FORUM) {
    return ICYMITypes.ContentType.FORUM_POST;
  } else {
    if (null != message.reactions) {
      const reactions = message.reactions;
      const mapped = reactions.map((count_details) => {
        let num = 0;
        if (null != count_details.count_details) {
          let num2 = count_details.count_details.burst;
          if (num2 == null) {
            num2 = 0;
          }
          let num3 = count_details.count_details.normal;
          if (num3 == null) {
            num3 = 0;
          }
          num = num2 + num3;
        }
        return num;
      });
      if (0 !== mapped.length) {
        if (mapped.reduce((acc, item) => acc + item) > 10) {
          return ICYMITypes.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    if (message.attachments.length > 0) {
      let ContentType = dependencyMap;
      if (obj.isValidImageAttachment(message.attachments[0])) {
        ContentType = tmp6(8348).ContentType;
        let IMAGE = ContentType.IMAGE;
      } else {
        const result = tmp6(7897).isValidVideoAttachment(message.attachments[0]);
        const ContentType2 = tmp6(8348).ContentType;
        IMAGE = result ? ContentType2.VIDEO : ContentType2.FILE;
        const tmp6Result = tmp6(7897);
      }
      obj = ForumPostMediaUtils;
    } else {
      if (message.embeds.length > 0) {
        let INTERESTING = ICYMITypes.ContentType.LINK;
      } else {
        INTERESTING = ICYMITypes.ContentType.INTERESTING;
      }
      return INTERESTING;
    }
  }
};
export const contentTypeToText = function contentTypeToText(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (ICYMITypes.ContentType.POPULAR_MESSAGE === arg0) {
    const intl10 = tmp(1114).intl;
    return intl10.string(tmp(1114).t["H/2+cl"]);
  } else if (tmp(8348).ContentType.IMAGE === arg0) {
    const intl9 = tmp(1114).intl;
    return intl9.string(tmp(1114).t.gmOWAo);
  } else if (tmp(8348).ContentType.VIDEO === arg0) {
    const intl8 = tmp(1114).intl;
    return intl8.string(tmp(1114).t.swhcPM);
  } else if (tmp(8348).ContentType.LINK === arg0) {
    const intl7 = tmp(1114).intl;
    return intl7.string(tmp(1114).t.oj5yvD);
  } else if (tmp(8348).ContentType.THREAD === arg0) {
    const intl6 = tmp(1114).intl;
    return intl6.string(tmp(1114).t.DwLrLK);
  } else if (tmp(8348).ContentType.FORUM_POST === arg0) {
    const intl5 = tmp(1114).intl;
    return intl5.string(tmp(1114).t["Q9/6BS"]);
  } else if (tmp(8348).ContentType.CHANGED_STATUS === arg0) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.TGrUmi);
  } else if (tmp(8348).ContentType.INTERESTING === arg0) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t["TahE/i"]);
  } else if (tmp(8348).ContentType.ANNOUNCEMENT === arg0) {
    const intl2 = tmp(1114).intl;
    const string = intl2.string;
    const t = tmp(1114).t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (tmp(8348).ContentType.FILE === arg0) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};