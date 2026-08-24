// === Module 9093: generateHydrationId ===

// Module 9093 (generateHydrationId)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4808 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7627 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8383 */;
import isMediaAttachment from "isMediaAttachment" /* 8554 */;
import apexExperiment from "apexExperiment" /* 9095 */;
import ContentInventoryAuthorType from "ContentInventoryAuthorType" /* 9099 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "scheduledEventSort" /* 4374 */;
import { ThreadChannelRecord } from "createChannelRecord" /* 1395 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "reinjectEphemerals" /* 4999 */;
import closure_9 from "generateOldThreadCutoff" /* 4777 */;
import closure_10 from "filterStaffGuild" /* 9081 */;
import closure_11 from "initialize" /* 9092 */;
import ME from "ME" /* 676 */;

require = arg1;
function generateHydrationId(messageItems, activityItems) {
  return "hydration-" + messageItems + "-" + activityItems;
}
function hydrateItems(items6, arg1, ICYMI_PAGE_SIZE) {
  const self = this;
  const apply = _hydrateItems.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _hydrateItems() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const arr = closure_1_10.getHydratedItems();
              const substr = arr.slice(callback, dependencyMap);
              if (0 !== substr.length) {
                obj1 = callback(9094);
                const hydratedAttempt = obj1.loadHydratedAttempt(closure_1_14(tmp24, tmp25));
                const found = substr.filter((arg0) => null == dependencyMap[arg0.id]);
                const found1 = found.filter((type) => type.type === dependencyMap(7627).ICYMIItemTypes.MESSAGE);
                const mapped = found1.map((channel_id) => ({ channel_id: channel_id.data.channel_id, message_id: channel_id.data.message_id }));
                const mapped1 = found.map((type) => {
                  if (type.type === dependencyMap(7627).ICYMIItemTypes.MESSAGE) {
                    const message_context = type.data.message_context;
                    let reply_message_id;
                    if (message_context != null) {
                      reply_message_id = message_context.reply_message_id;
                    }
                    const items = [];
                    if (null != reply_message_id) {
                      obj = { channel_id: null, message_id: null };
                      obj[0] = type.data.channel_id;
                      obj[1] = type.data.message_context.reply_message_id;
                      items.push(obj);
                    }
                    const message_context2 = type.data.message_context;
                    let before_message_id;
                    if (message_context2 != null) {
                      before_message_id = message_context2.before_message_id;
                    }
                    if (null != before_message_id) {
                      obj = { channel_id: null, message_id: null };
                      obj[0] = type.data.channel_id;
                      obj[1] = type.data.message_context.before_message_id;
                      items.push(obj);
                    }
                    const message_context3 = type.data.message_context;
                    let after_message_id;
                    if (message_context3 != null) {
                      after_message_id = message_context3.after_message_id;
                    }
                    if (null != after_message_id) {
                      obj = { channel_id: null, message_id: null };
                      obj[0] = type.data.channel_id;
                      obj[1] = type.data.message_context.after_message_id;
                      items.push(obj);
                    }
                    return items;
                  } else {
                    return [];
                  }
                });
                const _Boolean = Boolean;
                const found2 = mapped1.flat().filter(Boolean);
                const found3 = found.filter((type) => type.type === dependencyMap(7627).ICYMIItemTypes.ACTIVITY);
                const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
                const flatResult = mapped1.flat();
                obj1 = { messageItems: null, activityItems: null };
                let items = [];
                HermesBuiltin.arraySpread(found2, HermesBuiltin.arraySpread(mapped, 0));
                obj1[0] = items;
                obj1[1] = mapped2;
                c4 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(9094).fetchHydrated(tmp24, tmp25, obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _hydrateNextPage() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            const unreadDisplayItems = closure_1_10.getUnreadDisplayItems();
            const readDisplayItems = closure_1_10.getReadDisplayItems();
            const nextIndexToHydrate = closure_1_10.getNextIndexToHydrate();
            const items = [];
            HermesBuiltin.arraySpread(readDisplayItems, HermesBuiltin.arraySpread(unreadDisplayItems, 0));
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_16(items, nextIndexToHydrate, nextIndexToHydrate + v0(closure_1_2[10]).ICYMI_PAGE_SIZE);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _regenerateFeedAndClearReadStates() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, ack) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw ack;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = ack;
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
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = ack;
              return obj;
            } else {
              let AnalyticsObjectTypes = tmp2;
              ack = tmp5;
              ack = undefined;
              AnalyticsObjectTypes = undefined;
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_2[22])(closure_1_2[21], closure_1_2.paths);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = ack;
              return obj2;
            } else {
              ack = ack.ack;
              c3 = 2;
              c4 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback(AnalyticsObjectTypes[22])(AnalyticsObjectTypes[23], AnalyticsObjectTypes.paths);
              return obj3;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = ack;
              return obj4;
            } else {
              AnalyticsObjectTypes = ack.AnalyticsObjectTypes;
              dehydratedItems = dehydratedItems.getDehydratedItems();
              const item = dehydratedItems.forEach((type) => {
                let tmp2 = type.type === callback(AnalyticsObjectTypes[10]).ICYMIItemTypes.MESSAGE;
                if (tmp2) {
                  tmp2 = type.data.channel_type === closure_1_12.GUILD_ANNOUNCEMENT;
                }
                if (tmp2) {
                  obj = ack(tmp[13]);
                  tmp2 = obj.compare(closure_1_9.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
                }
                if (tmp2) {
                  const channel_id = type.data.channel_id;
                  obj = { object: null, objectType: null };
                  obj[0] = callback;
                  obj[1] = AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC;
                  ack(channel_id, obj, true, true, ack(tmp[13]).atPreviousMillisecond(type.data.message_id));
                  const obj3 = ack(tmp[13]);
                }
              });
              let obj11 = ack(AnalyticsObjectTypes[11]);
              c3 = 3;
              c4 = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = obj11.clearReadStates();
              return obj5;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = ack;
              return obj6;
            } else {
              let obj8 = ack(AnalyticsObjectTypes[11]);
              c3 = 4;
              c4 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj8.fetchDehydrated({ isReloading: true, forceRefresh: true });
              return obj7;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              obj8 = { value: null, done: true };
              obj8[0] = ack;
              return obj8;
            } else {
              obj5 = ack(AnalyticsObjectTypes[11]);
              c3 = 5;
              c4 = 1;
              const obj9 = { value: null, done: false };
              obj9[0] = obj5.reloadICYMITab();
              return obj9;
            }
          } else if (5 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw ack;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = ack;
              return obj10;
            } else {
              obj2 = ack(AnalyticsObjectTypes[11]);
              c3 = 6;
              c4 = 1;
              obj11 = { value: null, done: false };
              obj11[0] = obj2.getGuildChannelScores();
              return obj11;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw ack;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj12 = { value: null, done: true };
            obj12[0] = ack;
            return obj12;
          } else {
            obj = ack(AnalyticsObjectTypes[11]);
            const recommendedGuilds = obj.getRecommendedGuilds();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp36) {
          c4 = tmp;
          throw tmp36;
        }
      }
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: closure_12, GuildNSFWContentLevel: map1 } = ME);
let obj = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
let result = require("set").fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export const ICYMICustomScore = obj;
export const isGuildItem = function isGuildItem(type) {
  let tmp3 = type.type === MessageEmbedTypes.ICYMIItemTypes.MESSAGE;
  if (!tmp3) {
    tmp3 = type.type === MessageEmbedTypes.ICYMIItemTypes.GUILD_EVENT;
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
  const apply = _hydrateNextPage.apply;
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
  obj.message = createMinimalMessageRecord.createMessageRecord(message.message);
  let fromServerResult;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj.threadChannel = fromServerResult;
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  trackedAckMessageId = trackedAckMessageId.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    obj = DISCORD_EPOCHDefault;
    const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message_id);
    tmp2 = extractTimestampResult > DISCORD_EPOCHDefault.extractTimestamp(trackedAckMessageId);
    const obj2 = DISCORD_EPOCHDefault;
  }
  return tmp2;
};
export const useGravityMessage = function useGravityMessage(message) {
  const _require = message;
  const items = [closure_8, closure_10];
  const items1 = [message];
  return _require(589).useStateFromStores(items, () => {
    message = closure_1_8.getMessage(message.getChannelId(), message.id);
    if (message == null) {
      const hydratedItem = closure_1_10.getHydratedItem(tmp.id);
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
  const _require = id;
  const items = [closure_10];
  const items1 = [id.id];
  return _require(589).useStateFromStores(items, () => closure_1_10.getHydratedItem(id.id), items1);
};
export const useICYMIMessage = function useICYMIMessage(id, before_message_id) {
  const _require = id;
  closure_1 = before_message_id;
  const items = [closure_8, closure_10];
  const items1 = [id, before_message_id];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let message = closure_1_8.getMessage(closure_0, tmp);
      if (message == null) {
        const hydratedItem = closure_1_10.getHydratedItem(tmp);
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
  return apexExperiment.getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(data) {
  obj = { id: data.id, type: MessageEmbedTypes.ICYMIItemTypes.CUSTOM_STATUS, activity: null, score: null, score_components: null };
  obj = { id: data.id, author_id: data.data.user_id, author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS, extra: null };
  let str = data.data.text;
  if (str == null) {
    str = "";
  }
  obj[6] = { type: "custom_status_extra", status: str, emoji_id: data.data.emoji_id, emoji_name: data.data.emoji_name, emoji_animated: data.data.emoji_animated, attachments: data.data.attachments };
  obj[2] = obj;
  ({ score: obj[3], score_components: obj[4] } = data);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2) {
  readTimestamp = readTimestamp.getReadTimestamp(id);
  if (null == readTimestamp) {
    let tmp2;
    if (arg2 != null) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = readTimestamp.getReadTimestamp(id2);
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
  const items = [...closure_10.getUnreadDisplayItems(), ...closure_10.getReadDisplayItems()];
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      tmp3 = viewableItems[diff];
      let tmp4 = diff;
      if (null != tmp3) {
        let tmp5 = id;
        let tmp6 = dependencyMap;
        let NON_ELIGIBLE_SCROLL_ITEMS = id(9100).NON_ELIGIBLE_SCROLL_ITEMS;
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
    guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      let guild_id = guildScheduledEvent.guild_id;
    }
  } else {
    return false;
  }
  channel = channel.getChannel(id);
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
      guild = guild.getGuild(guild_id);
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
export const itemToType = function itemToType(item) {
  const kind = item.data.kind;
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
      if (item.channelType !== constants.GUILD_ANNOUNCEMENT) {
        const messageContext = item.data.messageContext;
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
      if (item.data.content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS) {
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
    return MessageEmbedTypes.ContentType.ANNOUNCEMENT;
  } else if (channel.type === tmp.GUILD_FORUM) {
    return MessageEmbedTypes.ContentType.FORUM_POST;
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
        if (mapped.reduce((arg0, arg1) => arg0 + arg1) > 10) {
          return MessageEmbedTypes.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    if (message.attachments.length > 0) {
      let ContentType = dependencyMap;
      if (obj.isValidImageAttachment(message.attachments[0])) {
        ContentType = tmp6(7627).ContentType;
        let IMAGE = ContentType.IMAGE;
      } else {
        const result = tmp6(8554).isValidVideoAttachment(message.attachments[0]);
        const ContentType2 = tmp6(7627).ContentType;
        IMAGE = result ? ContentType2.VIDEO : ContentType2.FILE;
        const tmp6Result = tmp6(8554);
      }
      obj = isMediaAttachment;
    } else {
      if (message.embeds.length > 0) {
        let INTERESTING = MessageEmbedTypes.ContentType.LINK;
      } else {
        INTERESTING = MessageEmbedTypes.ContentType.INTERESTING;
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
  if (MessageEmbedTypes.ContentType.POPULAR_MESSAGE === arg0) {
    const intl10 = tmp(1236).intl;
    return intl10.string(tmp(1236).t["H/2+cl"]);
  } else if (tmp(7627).ContentType.IMAGE === arg0) {
    const intl9 = tmp(1236).intl;
    return intl9.string(tmp(1236).t.gmOWAo);
  } else if (tmp(7627).ContentType.VIDEO === arg0) {
    const intl8 = tmp(1236).intl;
    return intl8.string(tmp(1236).t.swhcPM);
  } else if (tmp(7627).ContentType.LINK === arg0) {
    const intl7 = tmp(1236).intl;
    return intl7.string(tmp(1236).t.oj5yvD);
  } else if (tmp(7627).ContentType.THREAD === arg0) {
    const intl6 = tmp(1236).intl;
    return intl6.string(tmp(1236).t.DwLrLK);
  } else if (tmp(7627).ContentType.FORUM_POST === arg0) {
    const intl5 = tmp(1236).intl;
    return intl5.string(tmp(1236).t["Q9/6BS"]);
  } else if (tmp(7627).ContentType.CHANGED_STATUS === arg0) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t.TGrUmi);
  } else if (tmp(7627).ContentType.INTERESTING === arg0) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t["TahE/i"]);
  } else if (tmp(7627).ContentType.ANNOUNCEMENT === arg0) {
    const intl2 = tmp(1236).intl;
    const string = intl2.string;
    const t = tmp(1236).t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (tmp(7627).ContentType.FILE === arg0) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates(ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) {
  const self = this;
  const apply = _regenerateFeedAndClearReadStates.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};