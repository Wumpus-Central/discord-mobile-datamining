// discord_app/modules/messages/MessageRecordUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import findCodedLinksDefault from "../coded_links/findCodedLinks.tsx";
import useMessageAuthor from "useMessageAuthor.tsx";
import isMessageMentioned from "isMessageMentioned.tsx";
import GiftCodeUtils from "../../utils/GiftCodeUtils.tsx";
import transformMessagPollDefault from "../polls/transformMessagPoll.tsx";
import EmbedUtils from "../../utils/EmbedUtils.tsx";
import StickersUtils from "../stickers/StickersUtils.tsx";
import InteractionRecord from "../../records/InteractionRecord.tsx";
import MessageRecord_mod from "../../records/MessageRecord.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const isMessageMentionedDefault = isMessageMentioned;
let _require, set, set2, set3, set4, set5;

let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let unpackModuleId;
const f90321 = (item) => {
  const obj = EmbedUtils;
  return obj.sanitizeEmbed(message2.channel_id, message2.id, item);
};
const f90323 = (item) => {
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
};
const f90324 = (message) => {
  const obj = { message: createMinimalMessageRecord(message.message), moderator_report: message.moderator_report };
  const tmp = new closure_1_4(obj);
  return tmp;
};
function createMinimalMessageRecord(timestamp) {
  let attachments;
  let components;
  let date1;
  let items;
  let items1;
  let transformComponents;
  const obj = {
    timestamp: new Date(timestamp.timestamp),
    editedTimestamp: date1,
    attachments,
    embeds: items,
    components: transformComponents(components),
    codedLinks: items1,
  };
  const merged = Object.assign(timestamp);
  date1 = null;
  new Date(timestamp.timestamp);
  if (null != timestamp.edited_timestamp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(timestamp.edited_timestamp);
  }
  attachments = timestamp.attachments;
  if (attachments == null) {
    attachments = [];
  }
  _require = timestamp;
  if (null == timestamp.embeds) {
    items = [];
  } else {
    const embeds = timestamp.embeds;
    const mapped = embeds.map(f90321);
    const obj2 = require("EmbedUtils");
    items = obj2.mergeEmbedsOnURL(mapped);
  }
  components = timestamp.components;
  transformComponents = require("InteractionComponentUtils").transformComponents;
  require("InteractionComponentUtils");
  if (components == null) {
    components = [];
  }
  const NON_PARSED = constants3.NON_PARSED;
  if (NON_PARSED.has(timestamp.type)) {
    items1 = [];
  } else {
    items1 = findCodedLinksDefault(timestamp.content);
  }
  const tmp2 = new closure_5(obj);
  return tmp2;
}
function createMessageRecord(message, arg1) {
  let findGiftCodesResult;
  let flag;
  let gift_info;
  let interactionData;
  let isBlockedForMessageResult;
  let isIgnoredForMessageResult;
  let isMentioned;
  let items;
  let obj10;
  let reactions;
  let tmp33;
  let user;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ reactions, interactionData } = obj);
  let obj2 = createMinimalMessageRecord(message);
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
  const message_reference = message.message_reference;
  if (null == message.author) {
    user = importDefaultResult1;
  } else if (null != message.webhook_id) {
    const self3 = this;
    let self2 = this;
    user = new UserRecord(message.author);
  } else {
    user = UserStore.getUser(message.author.id);
    if (user == null) {
      const self = this;
      self2 = this;
      user = new UserRecord(message.author);
    }
  }
  const obj3 = useMessageAuthor;
  const obj4 = { channel_id: message.channel_id, author: user };
  const messageAuthor = obj3.getMessageAuthor(obj4);
  if (message != null) {
    gift_info = message.gift_info;
  }
  let fromServer = null;
  const gifting_prompt = message.gifting_prompt;
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
  let tmp13;
  if (message.type === constants2.PREMIUM_REFERRAL) {
    let content;
    const obj5 = SnowflakeUtilsDefault;
    if (obj5.isProbablyAValidSnowflake(message.content)) {
      content = message.content;
    }
    str = "";
    tmp13 = content;
  }
  let tmp16;
  if (message.type === constants2.PREMIUM_GROUP_INVITE) {
    let content1;
    const obj6 = SnowflakeUtilsDefault;
    if (obj6.isProbablyAValidSnowflake(message.content)) {
      content1 = message.content;
    }
    str = "";
    tmp16 = content1;
  }
  const obj9 = {
    author: user,
    webhookId: message.webhook_id,
    blocked: isBlockedForMessageResult,
    ignored: isIgnoredForMessageResult,
    mentionEveryone: message.mention_everyone,
    mentions: mapped,
    mentionRoles: mention_roles,
    mentionChannels: mention_channels,
    messageReference: message_reference,
    mentioned: isMentioned(obj10),
    giftCodes: findGiftCodesResult,
    content: str,
    referralTrialOfferId: tmp13,
    premiumGroupInviteId: tmp16,
    call: tmp33,
    messageSnapshots: items,
  };
  const merged = Object.assign(message);
  const merged1 = Object.assign(messageAuthor);
  const merged2 = Object.assign(obj2.toJS());
  isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
  if (!isBlockedForMessageResult) {
    isBlockedForMessageResult = null != tmp11 && RelationshipStore.isBlocked(tmp11);
    null != tmp11 && RelationshipStore.isBlocked(tmp11);
  }
  isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(message);
  if (!isIgnoredForMessageResult) {
    isIgnoredForMessageResult = null != tmp11 && RelationshipStore.isIgnored(tmp11);
    null != tmp11 && RelationshipStore.isIgnored(tmp11);
  }
  const tmp5Result = isMessageMentioned;
  isMentioned = tmp5Result.isMentioned;
  obj10 = {
    userId: AuthenticationStore.getId(),
    channelId: message.channel_id,
    mentionEveryone: flag,
    mentionUsers: mapped,
    mentionRoles: mention_roles,
  };
  flag = message.mention_everyone;
  if (flag == null) {
    flag = false;
  }
  const tmp5Result3 = GiftCodeUtils;
  const isGiftCodeEmbedResult = tmp5Result3.isGiftCodeEmbed(message);
  const findGiftCodes = GiftCodeUtils.findGiftCodes;
  GiftCodeUtils;
  if (isGiftCodeEmbedResult) {
    let url;
    if (message != null) {
      url = message.embeds[0].url;
    }
    findGiftCodesResult = findGiftCodes(url);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  const call = message.call;
  tmp33 = null;
  if (null != call) {
    let tmp36Result = null;
    if (null != call.ended_timestamp) {
      const _Date = Date;
      const self4 = this;
      self2 = this;
      const tmp36 = _modDef4467;
      const date = new Date(call.ended_timestamp);
      tmp36Result = tmp36(date);
    }
    let durationResult = null;
    if (null != tmp36Result) {
      const obj11 = _modDef4467;
      durationResult = obj11.duration(tmp36Result.diff(tmp32));
    }
    tmp33 = { participants: call.participants, endedTimestamp: tmp36Result, duration: durationResult };
    const obj12 = { participants: call.participants, endedTimestamp: tmp36Result, duration: durationResult };
  }
  if (null == message.message_snapshots) {
    items = [];
  } else {
    const message_snapshots = message.message_snapshots;
    items = message_snapshots.map(f90324);
  }
  if (reactions == null) {
    reactions = message.reactions;
  }
  const poll = message.poll;
  if (null == reactions) {
    let items1;
    let results1;
    if (poll != null) {
      results1 = poll.results;
    }
    if (null == results1) {
      items1 = [];
    }
    obj9.reactions = items1;
    obj9.interaction = fromServer;
    if (interactionData == null) {
      interactionData = message.interaction_data;
    }
    obj9.interactionData = interactionData;
    ({
      interaction_metadata: obj7.interactionMetadata,
      role_subscription_data: obj7.roleSubscriptionData,
      purchase_notification: obj7.purchaseNotification,
    } = message);
    let tmp45;
    if (null != message.poll) {
      tmp45 = transformMessagPollDefault(message.poll);
    }
    obj9.poll = tmp45;
    obj9.sharedClientTheme = message.shared_client_theme;
    let tmp47;
    if (null != gift_info) {
      tmp47 = gift_info;
    }
    obj9.giftInfo = tmp47;
    obj9.giftingPrompt = gifting_prompt;
    ({ boosting_prompt: obj7.boostingPrompt, guild_space_data: obj7.guildSpaceData } = message);
    const self5 = this;
    const self6 = this;
    const tmp192 = new MessageRecord(obj9);
    return tmp192;
  }
  let mapped1;
  if (poll != null) {
    const results = poll.results;
    if (results != null) {
      const answer_counts = results.answer_counts;
      mapped1 = answer_counts.map((vote) => {
        let obj2;
        const obj = {
          count_details: { vote: vote.count },
          me_vote: vote.me_voted,
          emoji: obj2,
          me: false,
          me_burst: false,
          count: vote.count,
          burst_count: 0,
        };
        obj2 = { id: str.toString(), name: "", animated: false };
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
  HermesBuiltin.arraySpread(items2, mapped1, tmp43);
  items1 = items2.map(f90323);
}
let MessageRecord = MessageRecord_mod;
({ MessageSnapshotRecord: closure_4, MinimalMessageRecord: hasOwnProperty } = MessageRecord);
MessageRecord = MessageRecord_mod;
({ MessageFlags: unpackModuleId, MessageTypes: closure_12, MessageTypesSets: map1 } = Constants);
const importDefaultResult1 = new UserRecord({ id: "???", username: "???" });
let result = size.fileFinishedImporting("modules/messages/MessageRecordUtils.tsx");

export { createMessageRecord };
export const updateServerMessage = function updateServerMessage(message, message2) {
  let obj;
  if (null != message2.edited_timestamp) {
    const obj3 = {};
    const merged = Object.assign(message2);
    ({ reactions: obj2.reactions, interaction_data: obj2.interaction_data } = message);
    obj = obj3;
  } else {
    obj = {};
    const merged1 = Object.assign(message);
    const merged2 = Object.assign(message2);
  }
  return obj;
};
export const updateMessageRecord = function updateMessageRecord(message, message2) {
  if (null != message2.edited_timestamp) {
    const obj2 = { reactions: null, interactionData: null };
    ({ reactions: obj17.reactions, interactionData: obj17.interactionData } = message);
    return createMessageRecord(message2, obj2);
  } else {
    let set7Result = message;
    if (null != message2.call) {
      const call = message2.call;
      let tmp11 = null;
      const set7 = message.set;
      if (null != call) {
        let tmp = null;
        if (null != call.ended_timestamp) {
          const _Date = Date;
          const self = this;
          let self2 = this;
          const tmp4 = _modDef4467;
          const date = new Date(call.ended_timestamp);
          tmp = tmp4(date);
        }
        let durationResult = null;
        if (null != tmp) {
          let obj = _modDef4467;
          durationResult = obj.duration(tmp.diff(tmp43));
        }
        tmp11 = { participants: call.participants, endedTimestamp: tmp, duration: durationResult };
        const obj3 = { participants: call.participants, endedTimestamp: tmp, duration: durationResult };
      }
      set7Result = set7("call", tmp11);
    }
    let result = set7Result;
    if (null != message2.attachments) {
      result = set7Result.set("attachments", message2.attachments);
    }
    let result1 = result;
    if (null != message2.application) {
      result1 = result.set("application", message2.application);
    }
    let result2 = result1;
    if (null != message2.activity) {
      result2 = result1.set("activity", message2.activity);
    }
    let result3 = result2;
    const tmp12 = null != message2.content && "" !== message2.content;
    if (tmp12) {
      result3 = result2.set("content", message2.content);
    }
    let result4 = result3;
    if (null != message2.embeds) {
      let items;
      _require = message2;
      set = result3.set;
      if (null == message2.embeds) {
        items = [];
      } else {
        const embeds = message2.embeds;
        const mapped = embeds.map(f90321);
        const obj7 = require("EmbedUtils");
        items = obj7.mergeEmbedsOnURL(mapped);
      }
      result4 = set("embeds", items);
    }
    let set2Result = result4;
    if (null != message2.message_snapshots) {
      let items1;
      set2 = result4.set;
      if (null == message2.message_snapshots) {
        items1 = [];
      } else {
        const message_snapshots = message2.message_snapshots;
        items1 = message_snapshots.map(f90324);
      }
      set2Result = set2("messageSnapshots", items1);
    }
    let result5 = set2Result;
    if (message2.pinned !== set2Result.pinned) {
      result5 = set2Result.set("pinned", message2.pinned);
    }
    let set3Result = result5;
    const tmp19 = null != result5.webhookId && null != message2.author;
    if (tmp19) {
      const self3 = this;
      self2 = this;
      set3 = result5.set;
      const tmp21 = new UserRecord(message2.author);
      set3Result = set3("author", tmp21);
    }
    let result6 = set3Result;
    const tmp23 = null != message2.flags && message2.flags !== set3Result.flags;
    if (tmp23) {
      result6 = set3Result.set("flags", message2.flags);
    }
    let set4Result = result6;
    if (null != message2.components) {
      set4 = result6.set;
      const obj11 = require("InteractionComponentUtils");
      set4Result = set4("components", obj11.transformComponents(message2.components));
    }
    let result7 = set4Result;
    if (null != message2.role_subscription_data) {
      result7 = set4Result.set("roleSubscriptionData", message2.role_subscription_data);
    }
    let set5Result = result7;
    if (null != message2.reactions) {
      let items2;
      let reactions = message.reactions;
      set5 = result7.set;
      if (reactions == null) {
        reactions = message2.reactions;
      }
      if (null == reactions) {
        items2 = [];
      } else {
        if (reactions == null) {
          reactions = [];
        }
        const items3 = [];
        let num = 0;
        const arraySpreadResult = HermesBuiltin.arraySpread(items3, reactions, 0);
        HermesBuiltin.arraySpread(items3, [], arraySpreadResult);
        items2 = items3.map(f90323);
      }
      set5Result = set5("reactions", items2);
    }
    let result8 = set5Result;
    if (null != message2.poll) {
      result8 = set5Result.set("poll", transformMessagPollDefault(message2.poll));
    }
    let flag = false;
    let result9 = result8;
    if (null != message2.mentions) {
      const mentions = message2.mentions;
      result9 = result8.set(
        "mentions",
        mentions.map((id) => id.id),
      );
      flag = true;
    }
    let result10 = result9;
    if (null != message2.mention_everyone) {
      result10 = result9.set("mentionEveryone", message2.mention_everyone);
      flag = true;
    }
    let result11 = result10;
    if (null != message2.mention_roles) {
      result11 = result10.set("mentionRoles", message2.mention_roles);
      flag = true;
    }
    let set6Result = result11;
    if (flag) {
      const obj4 = { message: result11, userId: AuthenticationStore.getId() };
      const set6 = result11.set;
      const tmp40 = isMessageMentionedDefault;
      set6Result = set6("mentioned", tmp40(obj4));
    }
    return set6Result;
  }
};
export const canEditMessageWithStickers = function canEditMessageWithStickers(content) {
  const obj = StickersUtils;
  const tmp = 0 === obj.getMessageStickers(content).length || "" !== content.content;
  return tmp;
};
export const hasEphemeralAppearance = function hasEphemeralAppearance(message) {
  const hasFlagResult = message.hasFlag(unpackModuleId.EPHEMERAL) && message.type !== constants2.IN_GAME_MESSAGE_NUX;
  return hasFlagResult;
};
