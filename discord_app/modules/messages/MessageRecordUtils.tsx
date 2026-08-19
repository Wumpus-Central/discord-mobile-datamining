// discord_app/modules/messages/MessageRecordUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import trimTrailingPunctuationDefault from "../coded_links/findCodedLinks.tsx";
import _resolveGiftCode from "../../utils/GiftCodeUtils.tsx";
import useNullableMessageAuthor from "useMessageAuthor.tsx";
import isMentioned from "isMessageMentioned.tsx";
import isMentionedDefault from "isMessageMentioned.tsx";
import transformMessagePollDefault from "../polls/transformMessagPoll.tsx";
import getStickerExtensionFromFormatType from "../stickers/StickersUtils.tsx";
import createFromServer from "../../records/InteractionRecord.tsx";
import hasFlag from "../../records/MessageRecord.tsx";
import hasFlag2 from "../../records/MessageRecord.tsx";
import importDefaultResult from "../../records/UserRecord.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { getEffectiveVideoProvider } from "../../utils/EmbedUtils.tsx";
import { flattenComponents } from "../interaction_components/InteractionComponentUtils.tsx";

require = fn;
function createMinimalMessageRecord(timestamp) {
  const obj = {};
  let tmp = closure_5;
  const merged = Object.assign(timestamp);
  obj.timestamp = new Date(timestamp.timestamp);
  let date1 = null;
  if (null != timestamp.edited_timestamp) {
    const _Date = Date;
    date1 = new Date(timestamp.edited_timestamp);
  }
  obj.editedTimestamp = date1;
  let attachments = timestamp.attachments;
  if (attachments == null) {
    attachments = [];
  }
  obj.attachments = attachments;
  const _require = timestamp;
  if (null == timestamp.embeds) {
    let items = [];
  } else {
    const embeds = timestamp.embeds;
    const mapped = embeds.map((item, index) => message2(dependencyMap[15]).sanitizeEmbed(message2.channel_id, message2.id, item));
    items = require("../../utils/EmbedUtils.tsx").mergeEmbedsOnURL(mapped);
    const obj2 = getEffectiveVideoProvider;
  }
  obj.embeds = items;
  const date = new Date(timestamp.timestamp);
  let components = timestamp.components;
  if (components == null) {
    components = [];
  }
  obj.components = require("../interaction_components/InteractionComponentUtils.tsx").transformComponents(components);
  const NON_PARSED = constants3.NON_PARSED;
  if (NON_PARSED.has(timestamp.type)) {
    let items1 = [];
  } else {
    items1 = trimTrailingPunctuationDefault(timestamp.content);
  }
  obj.codedLinks = items1;
  tmp = new tmp(obj);
  return tmp;
}
function createMessageRecord(message, message) {
  let obj = message;
  if (message === undefined) {
    obj = {};
  }
  ({ reactions, interactionData } = obj);
  obj1 = createMinimalMessageRecord(message);
  const mentions = message.mentions;
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((item, index) => item.id);
  }
  if (mapped == null) {
    mapped = [];
  }
  let mention_roles = message.mention_roles;
  if (mention_roles == null) {
    mention_roles = [];
  }
  let mention_channels = message.mention_channels;
  if (mention_channels == null) {
    mention_channels = [];
  }
  if (null == message.author) {
    let user = closure_14;
  } else if (null != message.webhook_id) {
    user = new closure_7(message.author);
  } else {
    user = user.getUser(message.author.id);
    if (user == null) {
      user = new closure_7(message.author);
    }
  }
  let obj2 = useNullableMessageAuthor;
  obj = { channel_id: message.channel_id, author: user };
  const messageAuthor = obj2.getMessageAuthor(obj);
  if (message != null) {
    const gift_info = message.gift_info;
  }
  let fromServer = null;
  if (null != message.interaction) {
    fromServer = closure_3.createFromServer(message.interaction);
  }
  if (message.type === constants2.THREAD_STARTER_MESSAGE) {
    const referenced_message = message.referenced_message;
    let id;
    if (referenced_message != null) {
      const author = referenced_message.author;
      if (author != null) {
        id = author.id;
      }
    }
  }
  let str = message.content;
  let tmp17;
  if (message.type === constants2.PREMIUM_REFERRAL) {
    let content;
    if (obj5.isProbablyAValidSnowflake(message.content)) {
      content = message.content;
    }
    str = "";
    tmp17 = content;
    obj5 = DISCORD_EPOCHDefault;
  }
  let tmp20;
  if (message.type === constants2.PREMIUM_GROUP_INVITE) {
    let content1;
    if (obj6.isProbablyAValidSnowflake(message.content)) {
      content1 = message.content;
    }
    str = "";
    tmp20 = content1;
    obj6 = DISCORD_EPOCHDefault;
  }
  obj = {};
  let tmp23 = closure_6;
  const merged = Object.assign(message);
  const merged1 = Object.assign(messageAuthor);
  const merged2 = Object.assign(obj1.toJS());
  obj.author = user;
  obj.webhookId = message.webhook_id;
  let isBlockedForMessageResult = blockedForMessage.isBlockedForMessage(message);
  if (!isBlockedForMessageResult) {
    isBlockedForMessageResult = null != tmp15 && blockedForMessage.isBlocked(tmp15);
    const tmp28 = null != tmp15 && blockedForMessage.isBlocked(tmp15);
  }
  obj.blocked = isBlockedForMessageResult;
  let isIgnoredForMessageResult = blockedForMessage.isIgnoredForMessage(message);
  if (!isIgnoredForMessageResult) {
    isIgnoredForMessageResult = null != tmp15 && blockedForMessage.isIgnored(tmp15);
    const tmp30 = null != tmp15 && blockedForMessage.isIgnored(tmp15);
  }
  obj.ignored = isIgnoredForMessageResult;
  obj.mentionEveryone = message.mention_everyone;
  obj.mentions = mapped;
  obj.mentionRoles = mention_roles;
  obj.mentionChannels = mention_channels;
  obj.messageReference = message.message_reference;
  let tmp9Result = isMentioned;
  obj1 = { userId: store.getId(), channelId: message.channel_id, mentionEveryone: null, mentionUsers: null, mentionRoles: null };
  let flag = message.mention_everyone;
  if (flag == null) {
    flag = false;
  }
  obj1[2] = flag;
  obj1[3] = mapped;
  obj1[4] = mention_roles;
  obj.mentioned = tmp9Result.isMentioned(obj1);
  tmp9Result = _resolveGiftCode;
  const isGiftCodeEmbedResult = tmp9Result.isGiftCodeEmbed(message);
  const findGiftCodes = _resolveGiftCode.findGiftCodes;
  if (isGiftCodeEmbedResult) {
    let url;
    if (message != null) {
      url = message.embeds[0].url;
    }
    let findGiftCodesResult = findGiftCodes(url);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  obj.giftCodes = findGiftCodesResult;
  obj.content = str;
  obj.referralTrialOfferId = tmp17;
  obj.premiumGroupInviteId = tmp20;
  const call = message.call;
  let tmp36 = null;
  if (null != call) {
    let tmp39Result = null;
    if (null != call.ended_timestamp) {
      const _Date = Date;
      const date = new Date(call.ended_timestamp);
      tmp39Result = tDefault(date);
    }
    let durationResult = null;
    if (null != tmp39Result) {
      durationResult = tDefault.duration(tmp39Result.diff(tmp35));
    }
    obj2 = { participants: null, endedTimestamp: null, duration: null };
    obj2[0] = call.participants;
    obj2[1] = tmp39Result;
    obj2[2] = durationResult;
    tmp36 = obj2;
  }
  obj.call = tmp36;
  if (null == message.message_snapshots) {
    let items = [];
  } else {
    const message_snapshots = message.message_snapshots;
    items = message_snapshots.map((item, index) => {
      const obj = { message: callback(item.message), moderator_report: item.moderator_report };
      return new closure_4({ message: callback(item.message), moderator_report: item.moderator_report });
    });
  }
  obj.messageSnapshots = items;
  if (reactions == null) {
    reactions = message.reactions;
  }
  const poll = message.poll;
  if (null == reactions) {
    let results;
    if (poll != null) {
      results = poll.results;
    }
    if (null == results) {
      let items1 = [];
    }
    obj.reactions = items1;
    obj.interaction = fromServer;
    if (interactionData == null) {
      interactionData = message.interaction_data;
    }
    obj.interactionData = interactionData;
    ({ interaction_metadata: obj7.interactionMetadata, role_subscription_data: obj7.roleSubscriptionData, purchase_notification: obj7.purchaseNotification } = message);
    let tmp50;
    if (null != message.poll) {
      tmp50 = transformMessagePollDefault(message.poll);
    }
    obj.poll = tmp50;
    obj.sharedClientTheme = message.shared_client_theme;
    let tmp52;
    if (null != gift_info) {
      tmp52 = gift_info;
    }
    obj.giftInfo = tmp52;
    obj.giftingPrompt = message.gifting_prompt;
    obj.boostingPrompt = message.boosting_prompt;
    tmp23 = new tmp23(obj);
    return tmp23;
  }
  let mapped1;
  if (poll != null) {
    results = poll.results;
    if (results != null) {
      const answer_counts = results.answer_counts;
      mapped1 = answer_counts.map((item, index) => {
        const obj = { id: str.toString(), name: "", animated: false };
        obj[2] = obj;
        obj[5] = item.count;
        return obj;
      });
    }
  }
  if (reactions == null) {
    reactions = [];
  }
  const items2 = [...reactions];
  if (mapped1 == null) {
    mapped1 = [];
  }
  HermesBuiltin.arraySpread(mapped1, tmp48);
  items1 = items2.map((item, index) => {
    const obj = {};
    const merged = Object.assign(item);
    if (null != obj.count_details) {
      let num = obj.count_details.burst;
      if (num == null) {
        num = 0;
      }
      obj.burst_count = num;
      let num2 = obj.count_details.normal;
      if (num2 == null) {
        num2 = 0;
      }
      obj.count = num2;
    }
    if (obj.count < 0) {
      obj.count = 0;
    }
    if (obj.burst_count < 0) {
      obj.burst_count = 0;
    }
    return obj;
  });
  const tmp9Result1 = _resolveGiftCode;
}
({ MessageSnapshotRecord: c4, MinimalMessageRecord: c5 } = hasFlag);
const error = importDefaultResult;
({ MessageFlags: unpackModuleId, MessageTypes: closure_12, MessageTypesSets: map1 } = ME);
importDefaultResult = new importDefaultResult({ id: "???", username: "???" });
let result = require("obj132").fileFinishedImporting("modules/messages/MessageRecordUtils.tsx");

export { createMessageRecord };
export const updateServerMessage = function updateServerMessage(message, message2) {
  if (null != message2.edited_timestamp) {
    let obj = {};
    const merged = Object.assign(message2);
    ({ reactions: obj2.reactions, interaction_data: obj2.interaction_data } = message);
  } else {
    obj = {};
    const merged1 = Object.assign(message);
    const merged2 = Object.assign(message2);
  }
  return obj;
};
export const updateMessageRecord = function updateMessageRecord(message, message2) {
  if (null != message2.edited_timestamp) {
    let obj = { reactions: null, interactionData: null };
    ({ reactions: obj21[0], interactionData: obj21[1] } = message);
    return createMessageRecord(message2, obj);
  } else {
    let result = message;
    if (null != message2.call) {
      const call = message2.call;
      let tmp13 = null;
      if (null != call) {
        let tmp = null;
        if (null != call.ended_timestamp) {
          const _Date = Date;
          const date = new Date(call.ended_timestamp);
          tmp = tDefault(date);
        }
        let durationResult = null;
        if (null != tmp) {
          obj = tDefault;
          durationResult = obj.duration(tmp.diff(tmp46));
        }
        obj = { participants: null, endedTimestamp: null, duration: null };
        obj[0] = call.participants;
        obj[1] = tmp;
        obj[2] = durationResult;
        tmp13 = obj;
      }
      result = message.set("call", tmp13);
    }
    let result1 = result;
    if (null != message2.attachments) {
      result1 = result.set("attachments", message2.attachments);
    }
    let result2 = result1;
    if (null != message2.application) {
      result2 = result1.set("application", message2.application);
    }
    let result3 = result2;
    if (null != message2.activity) {
      result3 = result2.set("activity", message2.activity);
    }
    let tmp14 = null != message2.content;
    if (tmp14) {
      tmp14 = "" !== message2.content;
    }
    let result4 = result3;
    if (tmp14) {
      result4 = result3.set("content", message2.content);
    }
    if (null == message2.embeds) {
      if (null == message2.message_snapshots) {
        let result5 = obj8;
        if (message2.pinned !== obj8.pinned) {
          result5 = obj8.set("pinned", message2.pinned);
        }
        let result6 = result5;
        if (tmp21) {
          const tmp25 = new closure_7(message2.author);
          result6 = result5.set("author", tmp25);
        }
        let result7 = result6;
        if (tmp27) {
          result7 = result6.set("flags", message2.flags);
        }
        let result8 = result7;
        if (null != message2.components) {
          result8 = result7.set("components", require("../interaction_components/InteractionComponentUtils.tsx").transformComponents(message2.components));
          const obj14 = flattenComponents;
        }
        let result9 = result8;
        if (null != message2.role_subscription_data) {
          result9 = result8.set("roleSubscriptionData", message2.role_subscription_data);
        }
        if (null == message2.reactions) {
          let result10 = result9;
          if (null != message2.poll) {
            result10 = result9.set("poll", transformMessagePollDefault(message2.poll));
          }
          let flag = false;
          let result11 = result10;
          if (null != message2.mentions) {
            const mentions = message2.mentions;
            result11 = result10.set("mentions", mentions.map((item, index) => item.id));
            flag = true;
          }
          let result12 = result11;
          if (null != message2.mention_everyone) {
            result12 = result11.set("mentionEveryone", message2.mention_everyone);
            flag = true;
          }
          let result13 = result12;
          if (null != message2.mention_roles) {
            result13 = result12.set("mentionRoles", message2.mention_roles);
            flag = true;
          }
          let result14 = result13;
          if (flag) {
            obj1 = { message: null, userId: null };
            obj1[0] = result13;
            obj1[1] = store.getId();
            result14 = result13.set("mentioned", isMentionedDefault(obj1));
          }
          return result14;
        } else {
          let reactions = message.reactions;
          if (reactions == null) {
            reactions = message2.reactions;
          }
          if (null == reactions) {
            let items = [];
          } else {
            if (reactions == null) {
              reactions = [];
            }
            const items1 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(reactions, 0);
            arraySpreadResult = HermesBuiltin.arraySpread([], arraySpreadResult);
            items = items1.map((item, index) => {
              const obj = {};
              const merged = Object.assign(item);
              if (null != obj.count_details) {
                let num = obj.count_details.burst;
                if (num == null) {
                  num = 0;
                }
                obj.burst_count = num;
                let num2 = obj.count_details.normal;
                if (num2 == null) {
                  num2 = 0;
                }
                obj.count = num2;
              }
              if (obj.count < 0) {
                obj.count = 0;
              }
              if (obj.burst_count < 0) {
                obj.burst_count = 0;
              }
              return obj;
            });
          }
          const result15 = result9.set("reactions", items);
        }
        tmp21 = null != result5.webhookId && null != message2.author;
        tmp27 = null != message2.flags && message2.flags !== result6.flags;
      } else {
        if (null == message2.message_snapshots) {
          let items2 = [];
        } else {
          const message_snapshots = message2.message_snapshots;
          items2 = message_snapshots.map((item, index) => {
            const obj = { message: callback(item.message), moderator_report: item.moderator_report };
            return new closure_4({ message: callback(item.message), moderator_report: item.moderator_report });
          });
        }
        const result16 = result4.set("messageSnapshots", items2);
      }
    } else {
      _require = message2;
      if (null == message2.embeds) {
        let items3 = [];
      } else {
        const embeds = message2.embeds;
        const mapped = embeds.map((item, index) => message2(dependencyMap[15]).sanitizeEmbed(message2.channel_id, message2.id, item));
        items3 = require("../../utils/EmbedUtils.tsx").mergeEmbedsOnURL(mapped);
        const obj9 = getEffectiveVideoProvider;
      }
      const result17 = result4.set("embeds", items3);
    }
  }
};
export const canEditMessageWithStickers = function canEditMessageWithStickers(content) {
  let tmp = 0 === getStickerExtensionFromFormatType.getMessageStickers(content).length;
  if (!tmp) {
    tmp = "" !== content.content;
  }
  return tmp;
};
export const hasEphemeralAppearance = function hasEphemeralAppearance(message) {
  let hasFlagResult = message.hasFlag(constants.EPHEMERAL);
  if (hasFlagResult) {
    hasFlagResult = message.type !== constants2.IN_GAME_MESSAGE_NUX;
  }
  return hasFlagResult;
};