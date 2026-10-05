// discord_app/modules/icymi/ICYMIUtils.tsx
import intl11 from "../../intl/index.native.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ForumPostMediaUtils from "../forums/ForumPostMediaUtils.tsx";
import ContentInventoryEntryType from "../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import ICYMITypes from "ICYMITypes.tsx";
import ICYMIActionCreatorsDefault from "ICYMIActionCreators.tsx";
import generateHydrationId from "generateHydrationId.tsx";
import ContentInventoryAuthorType from "../../../discord_common/js/shared/shared-constants/ContentInventoryAuthorType.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let c10;
let c9;
let obj = function _hydrateItems() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let items;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = closure_3;
            const substr = closure_0.slice(closure_1, closure_2);
            if (0 !== substr.length) {
              const loadHydratedAttempt = ICYMIActionCreatorsDefault.loadHydratedAttempt;
              let obj2 = generateHydrationId;
              const hydratedAttempt = loadHydratedAttempt(obj2.generateHydrationId(closure_1, closure_2));
              const found = substr.filter((item) => null == closure_0[item.id]);
              const found1 = found.filter((type) => type.type === closure_1_0(closure_1_2[7]).ICYMIItemTypes.MESSAGE);
              const mapped = found1.map((channel_id) => ({
                channel_id: channel_id.data.channel_id,
                message_id: channel_id.data.message_id,
              }));
              const mapped1 = found.map((type) => {
                if (type.type === closure_1_0(closure_1_2[7]).ICYMIItemTypes.MESSAGE) {
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
                    const obj2 = {
                      channel_id: type.data.channel_id,
                      message_id: type.data.message_context.before_message_id,
                    };
                    items.push(obj2);
                  }
                  const message_context3 = type.data.message_context;
                  let after_message_id;
                  if (message_context3 != null) {
                    after_message_id = message_context3.after_message_id;
                  }
                  if (null != after_message_id) {
                    const obj3 = {
                      channel_id: type.data.channel_id,
                      message_id: type.data.message_context.after_message_id,
                    };
                    items.push(obj3);
                  }
                  return items;
                } else {
                  return [];
                }
              });
              const _Boolean = Boolean;
              const flatResult = mapped1.flat();
              const found2 = flatResult.filter(Boolean);
              const found3 = found.filter((type) => type.type === closure_1_0(closure_1_2[7]).ICYMIItemTypes.ACTIVITY);
              const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
              const obj5 = { messageItems: items, activityItems: mapped2 };
              items = [];
              const fetchHydrated = ICYMIActionCreatorsDefault.fetchHydrated;
              HermesBuiltin.arraySpread(items, found2, HermesBuiltin.arraySpread(items, mapped, 0));
              c5 = 1;
              c4 = 1;
              const obj6 = { value: fetchHydrated(closure_1, closure_2, obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
const ThreadChannelRecord = ChannelRecord.ThreadChannelRecord;
({ ChannelTypes: c9, GuildNSFWContentLevel: c10 } = Constants);
obj = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  DEFAULT: 1,
  [1]: "DEFAULT",
  MORE: 2,
  [2]: "MORE",
  LESS: 3,
  [3]: "LESS",
  MUTED: 4,
  [4]: "MUTED",
};
let result = size.fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export const ICYMICustomScore = obj;
export const isGuildItem = function isGuildItem(type) {
  const tmp3 = type.type === ICYMITypes.ICYMIItemTypes.MESSAGE || type.type === ICYMITypes.ICYMIItemTypes.GUILD_EVENT;
  return tmp3;
};
export const isChannelCustomScoreEligible = function isChannelCustomScoreEligible(stateFromStores) {
  let tmp2 = stateFromStores.type === constants.GUILD_FORUM;
  if (!tmp2) {
    tmp2 = stateFromStores.type === constants.GUILD_ANNOUNCEMENT || stateFromStores.type === constants.GUILD_TEXT;
  }
  return tmp2;
};
export const numberToCustomScore = function numberToCustomScore(stateFromStores1) {
  let DEFAULT;
  if (stateFromStores1 < -1.5) {
    DEFAULT = obj.MUTED;
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
  return obj(...arguments);
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  let fromServerResult;
  let obj2;
  obj = { message: obj2.createMessageRecord(message.message), threadChannel: fromServerResult };
  const merged = Object.assign(arg1);
  fromServerResult = undefined;
  obj2 = MessageRecordUtils;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  return obj;
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  let obj2;
  let str;
  obj = {
    id: notificationItem.id,
    type: ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS,
    activity: obj2,
    score: null,
    score_components: null,
  };
  obj2 = {
    id: notificationItem.id,
    author_id: notificationItem.data.user_id,
    author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER,
    traits: [],
    participants: [],
    content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS,
    extra: {
      type: "custom_status_extra",
      status: str,
      emoji_id: notificationItem.data.emoji_id,
      emoji_name: notificationItem.data.emoji_name,
      emoji_animated: notificationItem.data.emoji_animated,
      attachments: notificationItem.data.attachments,
    },
  };
  str = notificationItem.data.text;
  if (str == null) {
    str = "";
  }
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2, arg2) {
  let num;
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
    num = num2;
  } else {
    num = 0;
  }
  return num;
};
export const isItemNSFW = function isItemNSFW(data) {
  let guild_id;
  let id;
  const kind = data.data.kind;
  if ("message" === kind) {
    id = data.data.message.channel_id;
  } else if ("forumThread" === kind) {
    id = data.data.threadChannel.id;
  } else if ("guildEvent" === kind) {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
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
    let guild = null;
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
    let INTERESTING;
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
      let num = 0;
      if (0 !== mapped.length) {
        let num2 = 10;
        if (mapped.reduce((acc, item) => acc + item) > 10) {
          return ICYMITypes.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    let num3 = 0;
    if (message.attachments.length > 0) {
      let IMAGE;
      obj = ForumPostMediaUtils;
      if (obj.isValidImageAttachment(message.attachments[0])) {
        IMAGE = ICYMITypes.ContentType.IMAGE;
      } else {
        const tmp6Result = ForumPostMediaUtils;
        const result = tmp6Result.isValidVideoAttachment(message.attachments[0]);
        const ContentType = ICYMITypes.ContentType;
        IMAGE = result ? ContentType.VIDEO : ContentType.FILE;
      }
      INTERESTING = IMAGE;
    } else if (message.embeds.length > 0) {
      INTERESTING = ICYMITypes.ContentType.LINK;
    } else {
      INTERESTING = ICYMITypes.ContentType.INTERESTING;
    }
    return INTERESTING;
  }
};
export const contentTypeToText = function contentTypeToText(ANNOUNCEMENT) {
  let flag = mentioned;
  if (mentioned === undefined) {
    flag = false;
  }
  if (ICYMITypes.ContentType.POPULAR_MESSAGE === ANNOUNCEMENT) {
    const intl10 = intl11.intl;
    return intl10.string(intl11.t["H/2+cl"]);
  } else if (ICYMITypes.ContentType.IMAGE === ANNOUNCEMENT) {
    const intl9 = intl11.intl;
    return intl9.string(intl11.t.gmOWAo);
  } else if (ICYMITypes.ContentType.VIDEO === ANNOUNCEMENT) {
    const intl8 = intl11.intl;
    return intl8.string(intl11.t.swhcPM);
  } else if (ICYMITypes.ContentType.LINK === ANNOUNCEMENT) {
    const intl7 = intl11.intl;
    return intl7.string(intl11.t.oj5yvD);
  } else if (ICYMITypes.ContentType.THREAD === ANNOUNCEMENT) {
    const intl6 = intl11.intl;
    return intl6.string(intl11.t.DwLrLK);
  } else if (ICYMITypes.ContentType.FORUM_POST === ANNOUNCEMENT) {
    const intl5 = intl11.intl;
    return intl5.string(intl11.t["Q9/6BS"]);
  } else if (ICYMITypes.ContentType.CHANGED_STATUS === ANNOUNCEMENT) {
    const intl4 = intl11.intl;
    return intl4.string(intl11.t.TGrUmi);
  } else if (ICYMITypes.ContentType.INTERESTING === ANNOUNCEMENT) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t["TahE/i"]);
  } else if (ICYMITypes.ContentType.ANNOUNCEMENT === ANNOUNCEMENT) {
    let stringResult;
    const intl2 = intl11.intl;
    const string = intl2.string;
    const t = intl11.t;
    if (flag) {
      stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (ICYMITypes.ContentType.FILE === ANNOUNCEMENT) {
    const intl = intl11.intl;
    return intl.string(intl11.t.pYrnTY);
  }
};
