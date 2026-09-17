// === Module 4863: MessageRecordUtils ===

// Module 4863 (MessageRecordUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef4231 from "module_4231" /* 4231 */;
import findCodedLinksDefault from "findCodedLinks" /* 4623 */;
import useMessageAuthor from "useMessageAuthor" /* 4873 */;
import isMessageMentioned from "isMessageMentioned" /* 4878 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4879 */;
import transformMessagPollDefault from "transformMessagPoll" /* 4976 */;
import EmbedUtils from "EmbedUtils" /* 4977 */;
import StickersUtils from "StickersUtils" /* 4979 */;
import InteractionRecord from "InteractionRecord" /* 4864 */;
import MessageRecord_mod from "MessageRecord" /* 4289 */;
import UserRecord from "UserRecord" /* 1386 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;
const isMessageMentionedDefault = isMessageMentioned;

require = fn;
function createMinimalMessageRecord(timestamp) {
  const obj = {};
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
  _require = timestamp;
  if (null == timestamp.embeds) {
    let items = [];
  } else {
    const embeds = timestamp.embeds;
    const mapped = embeds.map((item) => EmbedUtils.sanitizeEmbed(message2.channel_id, message2.id, item));
    items = require("EmbedUtils").mergeEmbedsOnURL(mapped);
    const obj2 = require("EmbedUtils");
  }
  obj.embeds = items;
  const date = new Date(timestamp.timestamp);
  let components = timestamp.components;
  if (components == null) {
    components = [];
  }
  obj.components = require("InteractionComponentUtils").transformComponents(components);
  const NON_PARSED = constants3.NON_PARSED;
  if (NON_PARSED.has(timestamp.type)) {
    let items1 = [];
  } else {
    items1 = findCodedLinksDefault(timestamp.content);
  }
  obj.codedLinks = items1;
  const obj3 = require("InteractionComponentUtils");
  return new closure_5(obj);
}
function createMessageRecord(message, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ reactions, interactionData } = obj);
  const mentions = message.mentions;
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((id) => id.id);
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
    let user = importDefaultResult1;
  } else if (null != message.webhook_id) {
    user = new UserRecord(message.author);
  } else {
    user = UserStore.getUser(message.author.id);
    if (user == null) {
      user = new UserRecord(message.author);
    }
  }
  let obj2 = createMinimalMessageRecord(message);
  const messageAuthor = useMessageAuthor.getMessageAuthor({ channel_id: message.channel_id, author: user });
  if (message != null) {
    const gift_info = message.gift_info;
  }
  let fromServer = null;
  if (null != message.interaction) {
    fromServer = InteractionRecord.createFromServer(message.interaction);
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
    obj5 = SnowflakeUtilsDefault;
  }
  let tmp20;
  if (message.type === constants2.PREMIUM_GROUP_INVITE) {
    let content1;
    if (obj6.isProbablyAValidSnowflake(message.content)) {
      content1 = message.content;
    }
    str = "";
    tmp20 = content1;
    obj6 = SnowflakeUtilsDefault;
  }
  const obj9 = {};
  const merged = Object.assign(message);
  const merged1 = Object.assign(messageAuthor);
  const merged2 = Object.assign(obj2.toJS());
  obj9.author = user;
  obj9.webhookId = message.webhook_id;
  let isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
  if (!isBlockedForMessageResult) {
    isBlockedForMessageResult = null != tmp15 && RelationshipStore.isBlocked(tmp15);
    const tmp28 = null != tmp15 && RelationshipStore.isBlocked(tmp15);
  }
  obj9.blocked = isBlockedForMessageResult;
  let isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(message);
  if (!isIgnoredForMessageResult) {
    isIgnoredForMessageResult = null != tmp15 && RelationshipStore.isIgnored(tmp15);
    const tmp30 = null != tmp15 && RelationshipStore.isIgnored(tmp15);
  }
  obj9.ignored = isIgnoredForMessageResult;
  obj9.mentionEveryone = message.mention_everyone;
  obj9.mentions = mapped;
  obj9.mentionRoles = mention_roles;
  obj9.mentionChannels = mention_channels;
  obj9.messageReference = message.message_reference;
  const obj4 = { channel_id: message.channel_id, author: user };
  const obj10 = { userId: AuthenticationStore.getId(), channelId: message.channel_id, mentionEveryone: null, mentionUsers: null, mentionRoles: null };
  let flag = message.mention_everyone;
  if (flag == null) {
    flag = false;
  }
  obj10.mentionEveryone = flag;
  obj10.mentionUsers = mapped;
  obj10.mentionRoles = mention_roles;
  obj9.mentioned = isMessageMentioned.isMentioned(obj10);
  const tmp9Result = isMessageMentioned;
  const tmp9Result3 = GiftCodeUtils;
  const isGiftCodeEmbedResult = GiftCodeUtils.isGiftCodeEmbed(message);
  const findGiftCodes = GiftCodeUtils.findGiftCodes;
  if (isGiftCodeEmbedResult) {
    let url;
    if (message != null) {
      url = message.embeds[0].url;
    }
    let findGiftCodesResult = findGiftCodes(url);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  obj9.giftCodes = findGiftCodesResult;
  obj9.content = str;
  obj9.referralTrialOfferId = tmp17;
  obj9.premiumGroupInviteId = tmp20;
  const call = message.call;
  let tmp36 = null;
  if (null != call) {
    let tmp39Result = null;
    if (null != call.ended_timestamp) {
      const _Date = Date;
      const date = new Date(call.ended_timestamp);
      tmp39Result = _modDef4231(date);
    }
    let durationResult = null;
    if (null != tmp39Result) {
      durationResult = _modDef4231.duration(tmp39Result.diff(tmp35));
    }
    const obj11 = { participants: call.participants, endedTimestamp: tmp39Result, duration: durationResult };
    tmp36 = obj11;
  }
  obj9.call = tmp36;
  if (null == message.message_snapshots) {
    let items = [];
  } else {
    const message_snapshots = message.message_snapshots;
    items = message_snapshots.map((message) => {
      const obj = { message: createMinimalMessageRecord(message.message), moderator_report: message.moderator_report };
      return new closure_1_4({ message: createMinimalMessageRecord(message.message), moderator_report: message.moderator_report });
    });
  }
  obj9.messageSnapshots = items;
  if (reactions == null) {
    reactions = message.reactions;
  }
  const poll = message.poll;
  if (null == reactions) {
    let results1;
    if (poll != null) {
      results1 = poll.results;
    }
    if (null == results1) {
      let items1 = [];
    }
    obj9.reactions = items1;
    obj9.interaction = fromServer;
    if (interactionData == null) {
      interactionData = message.interaction_data;
    }
    obj9.interactionData = interactionData;
    ({ interaction_metadata: obj7.interactionMetadata, role_subscription_data: obj7.roleSubscriptionData, purchase_notification: obj7.purchaseNotification } = message);
    let tmp50;
    if (null != message.poll) {
      tmp50 = transformMessagPollDefault(message.poll);
    }
    obj9.poll = tmp50;
    obj9.sharedClientTheme = message.shared_client_theme;
    let tmp52;
    if (null != gift_info) {
      tmp52 = gift_info;
    }
    obj9.giftInfo = tmp52;
    obj9.giftingPrompt = message.gifting_prompt;
    obj9.boostingPrompt = message.boosting_prompt;
    const tmp232 = new MessageRecord(obj9);
    return tmp232;
  }
  let mapped1;
  if (poll != null) {
    const results = poll.results;
    if (results != null) {
      const answer_counts = results.answer_counts;
      mapped1 = answer_counts.map((vote) => {
        const obj = { count_details: { vote: vote.count }, me_vote: vote.me_voted, emoji: null, me: false, me_burst: false, count: null, burst_count: 0 };
        const obj2 = { id: vote.id.toString(), name: "", animated: false };
        obj.emoji = obj2;
        obj.count = vote.count;
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
  items1 = items2.map((item) => {
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
  const tmp9Result4 = GiftCodeUtils;
}
let MessageRecord = fn(4289);
({ MessageSnapshotRecord: closure_4, MinimalMessageRecord: hasOwnProperty } = MessageRecord);
let MessageRecord = MessageRecord_mod;
const Constants = fn(1074);
({ MessageFlags: closure_11, MessageTypes: closure_12, MessageTypesSets: map1 } = Constants);
const importDefaultResult1 = new UserRecord({ id: "???", username: "???" });
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/MessageRecordUtils.tsx");

export { createMessageRecord };
export const updateServerMessage = function updateServerMessage(message, message2) {
  if (null != message2.edited_timestamp) {
    const obj3 = {};
    const merged = Object.assign(message2);
    ({ reactions: obj2.reactions, interaction_data: obj2.interaction_data } = message);
    let obj = obj3;
  } else {
    obj = {};
    const merged1 = Object.assign(message);
    const merged2 = Object.assign(message2);
  }
  return obj;
};
export const updateMessageRecord = function updateMessageRecord(message, message2) {
  if (null != message2.edited_timestamp) {
    ({ reactions: obj21.reactions, interactionData: obj21.interactionData } = message);
    return createMessageRecord(message2, { reactions: null, interactionData: null });
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
          tmp = _modDef4231(date);
        }
        let durationResult = null;
        if (null != tmp) {
          durationResult = _modDef4231.duration(tmp.diff(tmp46));
        }
        const obj3 = { participants: call.participants, endedTimestamp: tmp, duration: durationResult };
        tmp13 = obj3;
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
          const tmp25 = new UserRecord(message2.author);
          result6 = result5.set("author", tmp25);
        }
        let result7 = result6;
        if (tmp27) {
          result7 = result6.set("flags", message2.flags);
        }
        let result8 = result7;
        if (null != message2.components) {
          result8 = result7.set("components", require("InteractionComponentUtils").transformComponents(message2.components));
          const obj14 = require("InteractionComponentUtils");
        }
        let result9 = result8;
        if (null != message2.role_subscription_data) {
          result9 = result8.set("roleSubscriptionData", message2.role_subscription_data);
        }
        if (null == message2.reactions) {
          let result10 = result9;
          if (null != message2.poll) {
            result10 = result9.set("poll", transformMessagPollDefault(message2.poll));
          }
          let flag = false;
          let result11 = result10;
          if (null != message2.mentions) {
            const mentions = message2.mentions;
            result11 = result10.set("mentions", mentions.map((id) => id.id));
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
            const obj4 = { message: result13, userId: AuthenticationStore.getId() };
            result14 = result13.set("mentioned", isMessageMentionedDefault(obj4));
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
            const arraySpreadResult = HermesBuiltin.arraySpread(reactions, 0);
            HermesBuiltin.arraySpread([], arraySpreadResult);
            items = items1.map((item) => {
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
          items2 = message_snapshots.map((message) => {
            const obj = { message: createMinimalMessageRecord(message.message), moderator_report: message.moderator_report };
            return new closure_1_4({ message: createMinimalMessageRecord(message.message), moderator_report: message.moderator_report });
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
        const mapped = embeds.map((item) => EmbedUtils.sanitizeEmbed(message2.channel_id, message2.id, item));
        items3 = require("EmbedUtils").mergeEmbedsOnURL(mapped);
        const obj9 = require("EmbedUtils");
      }
      const result17 = result4.set("embeds", items3);
    }
  }
};
export const canEditMessageWithStickers = function canEditMessageWithStickers(content) {
  let tmp = 0 === StickersUtils.getMessageStickers(content).length;
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