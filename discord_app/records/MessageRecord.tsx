// === Module 4210: MessageRecord ===

// Module 4210 (MessageRecord)
import FlagUtils from "FlagUtils" /* 1384 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9245 */;
import Record from "Record" /* 1386 */;

require = fn;
const Constants = fn(1074);
({ MessageFlags: c3, MessageStates: closure_4, MessageTypes: hasOwnProperty } = Constants);
class MinimalMessageRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new MinimalMessageRecord(tmp, new.target);
    DEFAULT = global.type;
    if (DEFAULT == null) {
      tmp3 = MessageTypes;
      DEFAULT = MessageTypes.DEFAULT;
    }
    tmp2.type = DEFAULT;
    str = global.content;
    if (str == null) {
      str = "";
    }
    tmp2.content = str;
    attachments = global.attachments;
    if (attachments == null) {
      attachments = [];
    }
    tmp2.attachments = attachments;
    embeds = global.embeds;
    if (embeds == null) {
      embeds = [];
    }
    tmp2.embeds = embeds;
    timestamp = global.timestamp;
    if (timestamp == null) {
      tmp4 = globalThis;
      _Date = Date;
      tmp5 = new.target;
      tmp6 = new.target;
      timestamp = new Date();
    }
    tmp2.timestamp = timestamp;
    editedTimestamp = global.editedTimestamp;
    if (editedTimestamp == null) {
      editedTimestamp = null;
    }
    tmp2.editedTimestamp = editedTimestamp;
    num = global.flags;
    if (num == null) {
      num = 0;
    }
    tmp2.flags = num;
    components = global.components;
    if (components == null) {
      components = [];
    }
    tmp2.components = components;
    codedLinks = global.codedLinks;
    if (codedLinks == null) {
      codedLinks = [];
    }
    tmp2.codedLinks = codedLinks;
    stickers = global.stickers;
    if (stickers == null) {
      stickers = [];
    }
    tmp2.stickers = stickers;
    sticker_items = global.sticker_items;
    if (sticker_items == null) {
      sticker_items = global.stickerItems;
    }
    if (sticker_items == null) {
      sticker_items = [];
    }
    tmp2.stickerItems = sticker_items;
    soundboardSounds = global.soundboard_sounds;
    if (soundboardSounds == null) {
      soundboardSounds = global.soundboardSounds;
    }
    tmp2.soundboardSounds = soundboardSounds;
    return tmp2;
  }
}
MinimalMessageRecord.prototype["hasFlag"] = function hasFlag(arg0) {
  return FlagUtils.hasFlag(this.flags, arg0);
};
class MessageRecord extends MinimalMessageRecord {
  constructor(arg0) {
    tmp2 = new MessageRecord(global, new.target, tmp, global, new.target);
    ({ id: tmp2.id, channel_id: tmp2.channel_id, author: tmp2.author, customRenderedContent: tmp2.customRenderedContent } = global);
    tmp2.mentions = global.mentions || [];
    tmp2.mentionRoles = global.mentionRoles || [];
    tmp2.mentionChannels = global.mentionChannels || [];
    tmp2.mentioned = global.mentioned || false;
    tmp2.pinned = global.pinned || false;
    tmp2.mentionEveryone = global.mentionEveryone || false;
    tmp2.tts = global.tts || false;
    tmp2.giftCodes = global.giftCodes || [];
    SENT = global.state;
    if (!SENT) {
      tmp3 = MessageStates;
      SENT = MessageStates.SENT;
    }
    tmp2.state = SENT;
    nonce = global.nonce;
    tmp2.nonce = nonce;
    tmp2.blocked = global.blocked || false;
    tmp2.ignored = global.ignored || false;
    tmp2.call = global.call || null;
    tmp2.bot = global.bot || false;
    tmp2.webhookId = global.webhookId || null;
    tmp2.reactions = global.reactions || [];
    tmp2.applicationId = global.application_id || global.applicationId || null;
    tmp2.application = global.application || null;
    tmp2.activity = global.activity || null;
    tmp2.activityInstance = global.activity_instance || global.activityInstance || null;
    tmp2.messageReference = global.messageReference || null;
    tmp2.isSearchHit = global.hit || global.isSearchHit || false;
    tmp2.loggingName = global.loggingName || null;
    ({ colorString: tmp2.colorString, nick: tmp2.nick } = global);
    tmp2.interaction = global.interaction || null;
    tmp2.interactionData = global.interactionData || null;
    tmp2.interactionMetadata = global.interactionMetadata || null;
    tmp2.interactionError = global.interactionError || null;
    ({ roleSubscriptionData: tmp2.roleSubscriptionData, purchaseNotification: tmp2.purchaseNotification, poll: tmp2.poll } = global);
    tmp2.sharedClientTheme = global.shared_client_theme || global.sharedClientTheme;
    tmp2.referralTrialOfferId = global.referralTrialOfferId || null;
    tmp2.premiumGroupInviteId = global.premiumGroupInviteId || null;
    giftInfo = global.gift_info;
    if (giftInfo == null) {
      giftInfo = global.giftInfo;
    }
    tmp2.giftInfo = giftInfo;
    tmp2.giftingPrompt = global.giftingPrompt || null;
    tmp2.boostingPrompt = global.boostingPrompt || null;
    tmp2.messageSnapshots = global.messageSnapshots || [];
    tmp2.isUnsupported = global.isUnsupported || false;
    changelog_id = global.changelog_id;
    if (changelog_id == null) {
      tmp4 = global.changelogId || null;
      changelog_id = tmp4;
    }
    tmp2.changelogId = changelog_id;
    media_mention = global.media_mention;
    if (media_mention == null) {
      media_mention = global.mediaMention;
    }
    if (media_mention == null) {
      media_mention = null;
    }
    tmp2.mediaMention = media_mention;
    lobby_member = global.lobby_member;
    additional_name = undefined;
    if (lobby_member != null) {
      additional_name = lobby_member.additional_name;
    }
    if (additional_name == null) {
      additional_name = global.additionalName;
    }
    if (additional_name == null) {
      additional_name = null;
    }
    tmp2.additionalName = additional_name;
    return tmp2;
  }
}
const prototype = MessageRecord.prototype;
prototype["isEdited"] = function isEdited() {
  return null != this.editedTimestamp;
};
prototype["getChannelId"] = function getChannelId() {
  return this.channel_id;
};
prototype["getReaction"] = function getReaction(arg0) {
  closure_0 = arg0;
  const reactions = this.reactions;
  return reactions.find((emoji) => ReactionUtils.emojiEquals(emoji.emoji, closure_0));
};
prototype["getContentMessage"] = function getContentMessage() {
  let self = this;
  if (isForwardMessageDefault(this)) {
    self = this.messageSnapshots[0].message;
  }
  return self;
};
prototype["userHasReactedWithEmoji"] = function userHasReactedWithEmoji(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const reactions = this.reactions;
  return reactions.some((emoji) => {
    if (obj.emojiEquals(emoji.emoji, closure_0)) {
      let me = closure_1;
      if (closure_1) {
        me = emoji.me;
      }
      if (!me) {
        let me_burst = !tmp;
        if (!tmp) {
          me_burst = emoji.me_burst;
        }
        me = me_burst;
      }
      return me;
    }
    obj = ReactionUtils;
  });
};
prototype["addReaction"] = function addReaction(emoji) {
  _require = emoji;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let NORMAL;
  closure_4 = undefined;
  closure_5 = undefined;
  let colors = obj.colors;
  if (undefined === colors) {
    colors = [];
  }
  NORMAL = obj.reactionType;
  if (undefined === NORMAL) {
    NORMAL = require("MessageReactionsTypes").ReactionTypes.NORMAL;
  }
  const isDMChannel = obj.isDMChannel;
  const self = this;
  closure_4 = undefined !== isDMChannel && isDMChannel;
  closure_5 = -1;
  const reactions = this.reactions;
  const mapped = reactions.map((emoji, index) => {
    let obj = ReactionUtils;
    let tmp3 = emoji;
    if (obj.emojiEquals(emoji.emoji, closure_0)) {
      closure_5 = index;
      if (closure_4) {
        if (!flag) {
          let num = 0;
          if (emoji.me) {
            num = 1;
          }
          let num3 = 0;
          const diff = emoji.count - num;
          if (emoji.me_burst) {
            num3 = 1;
          }
          const count_details = emoji.count_details;
          let num4;
          const diff1 = emoji.burst_count - num3;
          if (count_details != null) {
            num4 = count_details.vote;
          }
          if (num4 == null) {
            num4 = 0;
          }
          let num5 = 0;
          if (emoji.me_vote) {
            num5 = 1;
          }
          const diff2 = num4 - num5;
          return emoji;
        }
      }
      if (NORMAL === tmp(7763).ReactionTypes.BURST) {
        if (flag) {
          if (emoji.me_burst) {
            return emoji;
          }
        }
        const sum = emoji.burst_count + 1;
        if (null != emoji.burst_colors) {
          if (emoji.burst_colors.length > 0) {
            let burst_colors = emoji.burst_colors;
          }
          obj = {};
          const merged = Object.assign(emoji);
          obj.me_burst = tmp28 || emoji.me_burst;
          obj.burst_count = sum;
          obj = {};
          const merged1 = Object.assign(emoji.count_details);
          obj.burst = sum;
          obj.count_details = obj;
          obj.burst_colors = burst_colors;
          tmp3 = obj;
        }
        burst_colors = colors;
        tmp28 = flag;
      } else if (tmp12 === tmp(7763).ReactionTypes.VOTE) {
        const count_details2 = emoji.count_details;
        let num7;
        if (count_details2 != null) {
          num7 = count_details2.vote;
        }
        if (num7 == null) {
          num7 = 0;
        }
        if (!flag) {
          let sum1 = num7 + 1;
        } else {
          sum1 = num7;
        }
        const obj1 = {};
        const merged2 = Object.assign(emoji);
        const obj2 = {};
        const merged3 = Object.assign(emoji.count_details);
        obj2.vote = sum1;
        obj1.count_details = obj2;
        obj1.me_vote = flag || emoji.me_vote;
        tmp3 = obj1;
      } else {
        if (flag) {
          if (emoji.me) {
            return emoji;
          }
        }
        const sum2 = emoji.count + 1;
        const obj3 = {};
        const merged4 = Object.assign(emoji);
        obj3.count = sum2;
        const obj4 = {};
        const merged5 = Object.assign(emoji.count_details);
        obj4.normal = sum2;
        obj3.count_details = obj4;
        obj3.me = flag || emoji.me;
        tmp3 = obj3;
      }
      tmp12 = NORMAL;
    }
    return tmp3;
  });
  if (-1 === closure_5) {
    if (NORMAL === require("MessageReactionsTypes").ReactionTypes.BURST) {
      obj = { emoji, me: false, me_burst: flag, count: 0, count_details: { burst: 1, normal: 0 }, burst_count: 1, burst_colors: colors };
      mapped.push(obj);
    } else if (NORMAL === tmp7(tmp8[5]).ReactionTypes.VOTE) {
      obj = { emoji, me: false, me_burst: false, me_vote: flag, count: 0, count_details: { burst: 0, normal: 0, vote: 1 }, burst_count: 0, burst_colors: [] };
      mapped.push(obj);
    } else {
      let obj1 = { emoji, me: flag, me_burst: false, count: 1, count_details: { burst: 0, normal: 1 }, burst_count: 0, burst_colors: [] };
      mapped.push(obj1);
    }
    tmp7 = _require;
    tmp8 = colors;
  }
  return self.set("reactions", mapped);
};
prototype["addReactionBatch"] = function addReactionBatch(reactions, id) {
  closure_0 = id;
  return reactions.reduce((acc, item) => {
    ({ users, emoji: closure_0, reactionType: closure_1 } = item);
    return users.reduce((addReaction, item) => addReaction.addReaction(id, item === closure_0, { reactionType }), acc);
  }, this);
};
prototype["removeReaction"] = function removeReaction(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let NORMAL = arg2;
  if (arg2 === undefined) {
    NORMAL = require("MessageReactionsTypes").ReactionTypes.NORMAL;
  }
  const self = this;
  closure_3 = -1;
  const reactions = this.reactions;
  const mapped = reactions.map((emoji, index) => {
    let merged1 = emoji;
    let obj = ReactionUtils;
    if (!obj.emojiEquals(emoji.emoji, closure_0)) {
      return merged1;
    } else {
      if (NORMAL === tmp2(7763).ReactionTypes.BURST) {
        if (flag) {
          if (!merged1.me_burst) {
            let burst_count = merged1.burst_count;
          }
          obj = {};
          const merged = Object.assign(merged1);
          obj.burst_count = burst_count;
          let me_burst = !tmp19;
          if (!tmp19) {
            me_burst = merged1.me_burst;
          }
          obj.me_burst = me_burst;
          obj = {};
          merged1 = Object.assign(merged1.count_details);
          obj.burst = burst_count;
          obj.count_details = obj;
          let obj1 = obj;
          closure_3 = index;
        }
        burst_count = merged1.burst_count - 1;
      } else if (tmp4 !== tmp2(7763).ReactionTypes.VOTE) {
        if (flag) {
          if (!merged1.me) {
            let count = merged1.count;
          }
          obj1 = {};
          const merged2 = Object.assign(merged1);
          obj1.count = count;
          let me = !tmp5;
          if (!tmp5) {
            me = merged1.me;
          }
          obj1.me = me;
          const obj2 = {};
          const merged3 = Object.assign(merged1.count_details);
          obj2.normal = count;
          obj1.count_details = obj2;
        }
        count = merged1.count - 1;
      }
      const count_details = merged1.count_details;
      let num2;
      if (count_details != null) {
        num2 = count_details.vote;
      }
      if (num2 == null) {
        num2 = 0;
      }
      if (!flag) {
        let diff = num2 - 1;
      } else {
        diff = num2;
      }
      const obj3 = {};
      const merged4 = Object.assign(merged1);
      const obj4 = {};
      const merged5 = Object.assign(merged1.count_details);
      obj4.vote = diff;
      obj3.count_details = obj4;
      let me_vote = !tmp12;
      if (!flag) {
        me_vote = merged1.me_vote;
      }
      obj3.me_vote = me_vote;
      obj1 = obj3;
      tmp4 = NORMAL;
    }
  });
  let obj = mapped[closure_3];
  if (obj == null) {
    obj = {};
  }
  let count_details = obj.count_details;
  let tmp4 = -1 !== closure_3;
  if (tmp4) {
    tmp4 = tmp3 <= 0;
  }
  if (tmp4) {
    tmp4 = obj.burst_count <= 0;
  }
  if (tmp4) {
    let num3;
    if (count_details != null) {
      num3 = count_details.normal;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp4 = num3 <= 0;
  }
  if (tmp4) {
    let num5;
    if (count_details != null) {
      num5 = count_details.burst;
    }
    if (num5 == null) {
      num5 = 0;
    }
    tmp4 = num5 <= 0;
  }
  if (tmp4) {
    let num7;
    if (count_details != null) {
      num7 = count_details.vote;
    }
    if (num7 == null) {
      num7 = 0;
    }
    tmp4 = num7 <= 0;
  }
  if (tmp4) {
    mapped.splice(closure_3, 1);
  }
  return self.set("reactions", mapped);
};
prototype["removeReactionsForEmoji"] = function removeReactionsForEmoji(emoji) {
  closure_0 = emoji;
  ({ reactions, set } = this);
  return set("reactions", reactions.filter((emoji) => !ReactionUtils.emojiEquals(emoji.emoji, closure_0)));
};
prototype["isSystemDM"] = function isSystemDM() {
  const author = this.author;
  return author.isSystemUser();
};
prototype["isCommandType"] = function isCommandType() {
  return this.type === constants2.CHAT_INPUT_COMMAND || this.type === tmp.CONTEXT_MENU_COMMAND;
};
prototype["isPoll"] = function isPoll() {
  return null != this.poll;
};
prototype["isInteractionPlaceholder"] = function isInteractionPlaceholder() {
  let isNonUserBotResult = null != this.interaction;
  if (isNonUserBotResult) {
    const author = this.author;
    isNonUserBotResult = author.isNonUserBot();
  }
  return isNonUserBotResult;
};
prototype["canDeleteOwnMessage"] = function canDeleteOwnMessage(id1) {
  const self = this;
  if (this.author.id === id1) {
    return true;
  } else {
    const interactionMetadata2 = self.interactionMetadata;
    let prop;
    if (interactionMetadata2 != null) {
      prop = interactionMetadata2.authorizing_integration_owners;
    }
    if (prop == null) {
      prop = {};
    }
    const interactionMetadata = self.interactionMetadata;
    let id;
    if (interactionMetadata != null) {
      id = interactionMetadata.user.id;
    }
    let tmp2 = id === id1;
    if (tmp2) {
      const _Object = Object;
      tmp2 = 1 === Object.keys(prop).length;
    }
    if (tmp2) {
      tmp2 = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL in prop;
    }
    return tmp2;
  }
};
prototype["toJS"] = function toJS() {
  const obj = {};
  const merged = Object.assign(this);
  ({ webhookId: obj.webkhook_id, editedTimestamp: obj.edited_timestamp, mentionEveryone: obj.mention_everyone } = this);
  return obj;
};
prototype["isFirstMessageInForumPost"] = function isFirstMessageInForumPost(channel1) {
  let isForumPostResult = this.id === this.channel_id;
  if (isForumPostResult) {
    isForumPostResult = channel1.isForumPost();
  }
  return isForumPostResult;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/MessageRecord.tsx");
const prototype2 = function MessageSnapshotRecord(message) {
  const tmp3 = new prototype2(tmp2, new.target, new.target, tmp);
  tmp3.message = new MinimalMessageRecord(message.message);
  let moderator_report = message.moderator_report;
  if (moderator_report == null) {
    moderator_report = null;
  }
  tmp3.moderatorReport = moderator_report;
  return tmp3;
}.prototype;
class prototype2 extends tmp2 {
}

export default MessageRecord;
export { MinimalMessageRecord };
export const ModeratorReport = function ModeratorReport(arg0) {
  ({ reporting_user_id: tmp.reporting_user_id, reported_user_id: tmp.reported_user_id, reporting_member: tmp.reporting_member, reported_member: tmp.reported_member } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
export const MessageSnapshotRecord = prototype2;
export const isMessageComponentsV2 = function isMessageComponentsV2(contentMessage) {
  return FlagUtils.hasFlag(contentMessage.flags, IS_COMPONENTS_V2.IS_COMPONENTS_V2);
};