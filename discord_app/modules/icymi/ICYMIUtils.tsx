// === Module 8028: ICYMIUtils ===

// Module 8028 (ICYMIUtils)
import util from "util" /* 1126 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7540 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 7813 */;
import ICYMITypes from "ICYMITypes" /* 8024 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import generateHydrationId from "generateHydrationId" /* 8034 */;
import ContentInventoryAuthorType from "ContentInventoryAuthorType" /* 8035 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 8025 */;

require = fn;
let closure_12 = async function _hydrateItems(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          dependencyMap = closure_3;
          const substr = dependencyMap.slice(closure_1, dependencyMap2);
          if (0 !== substr.length) {
            let obj2 = ICYMIActionCreatorsDefault;
            const hydratedAttempt = obj2.loadHydratedAttempt(generateHydrationId.generateHydrationId(closure_1, dependencyMap2));
            const found = substr.filter((item) => null == dependencyMap[item.id]);
            const found1 = found.filter((type) => type.type === dependencyMap(8024).ICYMIItemTypes.MESSAGE);
            const mapped = found1.map((channel_id) => ({ channel_id: channel_id.data.channel_id, message_id: channel_id.data.message_id }));
            const mapped1 = found.map((type) => {
              if (type.type === dependencyMap(8024).ICYMIItemTypes.MESSAGE) {
                const message_context = type.data.message_context;
                let reply_message_id;
                if (message_context != null) {
                  reply_message_id = message_context.reply_message_id;
                }
                const items = [];
                if (null != reply_message_id) {
                  const obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.reply_message_id };
                  items.push(obj);
                }
                const message_context2 = type.data.message_context;
                let before_message_id;
                if (message_context2 != null) {
                  before_message_id = message_context2.before_message_id;
                }
                if (null != before_message_id) {
                  const obj2 = { channel_id: type.data.channel_id, message_id: type.data.message_context.before_message_id };
                  items.push(obj2);
                }
                const message_context3 = type.data.message_context;
                let after_message_id;
                if (message_context3 != null) {
                  after_message_id = message_context3.after_message_id;
                }
                if (null != after_message_id) {
                  const obj3 = { channel_id: type.data.channel_id, message_id: type.data.message_context.after_message_id };
                  items.push(obj3);
                }
                return items;
              } else {
                return [];
              }
            });
            const _Boolean = Boolean;
            const found2 = mapped1.flat().filter(Boolean);
            const found3 = found.filter((type) => type.type === dependencyMap(8024).ICYMIItemTypes.ACTIVITY);
            const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
            const flatResult = mapped1.flat();
            const obj7 = { messageItems: null, activityItems: null };
            let items = [];
            HermesBuiltin.arraySpread(found2, HermesBuiltin.arraySpread(mapped, 0));
            obj7.messageItems = items;
            obj7.activityItems = mapped2;
            c5 = 1;
            c4 = 1;
            const obj8 = { value: ICYMIActionCreatorsDefault.fetchHydrated(closure_1, dependencyMap2, obj7), done: false };
            return obj8;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj = { value, done: true };
        return obj;
      }
      c4 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp17) {
      c4 = tmp;
      throw tmp17;
    }
  }
};
const ThreadChannelRecord = fn(2055).ThreadChannelRecord;
const Constants = fn(1085);
({ ChannelTypes: closure_9, GuildNSFWContentLevel: c10 } = Constants);
const ICYMICustomScore = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

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
    tmp2 = stateFromStores.type === constants.GUILD_ANNOUNCEMENT || stateFromStores.type === constants.GUILD_TEXT;
    const tmp3 = stateFromStores.type === constants.GUILD_ANNOUNCEMENT || stateFromStores.type === constants.GUILD_TEXT;
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
  } else if (obj.LESS === DEFAULT) {
    return -1;
  } else if (obj.MUTED === DEFAULT) {
    return -2;
  } else {
    return 0;
  }
};
export const hydrateItems = function hydrateItems() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.message = MessageRecordUtils.createMessageRecord(message.message);
  let fromServerResult;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj.threadChannel = fromServerResult;
  return obj;
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  const obj = { id: notificationItem.id, type: ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS, activity: null, score: null, score_components: null };
  const obj2 = { id: notificationItem.id, author_id: notificationItem.data.user_id, author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS, extra: null };
  let str = notificationItem.data.text;
  if (str == null) {
    str = "";
  }
  obj2.extra = { type: "custom_status_extra", status: str, emoji_id: notificationItem.data.emoji_id, emoji_name: notificationItem.data.emoji_name, emoji_animated: notificationItem.data.emoji_animated, attachments: notificationItem.data.attachments };
  obj.activity = obj2;
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return obj;
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
export const isItemNSFW = function isItemNSFW(data) {
  const kind = data.data.kind;
  if ("message" === kind) {
    let id = data.data.message.channel_id;
  } else if ("forumThread" === kind) {
    id = data.data.threadChannel.id;
  } else if ("guildEvent" === kind) {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      const guild_id = guildScheduledEvent.guild_id;
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
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    if (guild_id1 == null) {
      guild_id1 = guild_id;
    }
    guild = null;
    if (null != guild_id1) {
      guild = GuildStore.getGuild(guild_id1);
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
        ContentType = ICYMITypes.ContentType;
        let IMAGE = ContentType.IMAGE;
      } else {
        const result = ForumPostMediaUtils.isValidVideoAttachment(message.attachments[0]);
        const ContentType2 = ICYMITypes.ContentType;
        IMAGE = result ? ContentType2.VIDEO : ContentType2.FILE;
        const tmp6Result = ForumPostMediaUtils;
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
export const contentTypeToText = function contentTypeToText(ANNOUNCEMENT) {
  let flag = mentioned;
  if (mentioned === undefined) {
    flag = false;
  }
  if (ICYMITypes.ContentType.POPULAR_MESSAGE === ANNOUNCEMENT) {
    const intl10 = util.intl;
    return intl10.string(util.t["H/2+cl"]);
  } else if (ICYMITypes.ContentType.IMAGE === ANNOUNCEMENT) {
    const intl9 = util.intl;
    return intl9.string(util.t.gmOWAo);
  } else if (ICYMITypes.ContentType.VIDEO === ANNOUNCEMENT) {
    const intl8 = util.intl;
    return intl8.string(util.t.swhcPM);
  } else if (ICYMITypes.ContentType.LINK === ANNOUNCEMENT) {
    const intl7 = util.intl;
    return intl7.string(util.t.oj5yvD);
  } else if (ICYMITypes.ContentType.THREAD === ANNOUNCEMENT) {
    const intl6 = util.intl;
    return intl6.string(util.t.DwLrLK);
  } else if (ICYMITypes.ContentType.FORUM_POST === ANNOUNCEMENT) {
    const intl5 = util.intl;
    return intl5.string(util.t["Q9/6BS"]);
  } else if (ICYMITypes.ContentType.CHANGED_STATUS === ANNOUNCEMENT) {
    const intl4 = util.intl;
    return intl4.string(util.t.TGrUmi);
  } else if (ICYMITypes.ContentType.INTERESTING === ANNOUNCEMENT) {
    const intl3 = util.intl;
    return intl3.string(util.t["TahE/i"]);
  } else if (ICYMITypes.ContentType.ANNOUNCEMENT === ANNOUNCEMENT) {
    const intl2 = util.intl;
    const string = intl2.string;
    const t = util.t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (ICYMITypes.ContentType.FILE === ANNOUNCEMENT) {
    const intl = util.intl;
    return intl.string(util.t.pYrnTY);
  }
};