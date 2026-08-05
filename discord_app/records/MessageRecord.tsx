import { ApplicationIntegrationType } from "../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import { hasFlag } from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import { isForwardMessage } from "../modules/forwarding/isForwardMessage.tsx";
// discord_app/records/MessageRecord.tsx
import "toJS";
import ME from "ME";

let c3;
let c4;
let c5;
const require = arg1;
({ MessageFlags: c3, MessageStates: c4, MessageTypes: c5 } = ME);
class MinimalMessageRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new MinimalMessageRecord(tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  return hasFlag /* hasFlag */.hasFlag(this.flags, arg0);
};
class MessageRecord extends MinimalMessageRecord {
  constructor(arg0) {
    tmp4 = new MessageRecord(global, tmp3, tmp2, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp4.id, channel_id: tmp4.channel_id, author: tmp4.author, customRenderedContent: tmp4.customRenderedContent } = global);
    tmp4.mentions = global.mentions || [];
    tmp4.mentionRoles = global.mentionRoles || [];
    tmp4.mentionChannels = global.mentionChannels || [];
    if (global.mentionGames instanceof Map) {
      mentionGames = global.mentionGames;
    } else {
      mentionGames = global.mentionGames;
      tmp5 = null;
      if (mentionGames == null) {
        mentionGames = [];
      }
      tmp6 = new.target;
      tmp7 = new.target;
      mentionGames = new Map(mentionGames.map((id) => {
        const items = [id.id, id];
        return items;
      }));
    }
    tmp4.mentionGames = mentionGames;
    tmp4.mentioned = global.mentioned || false;
    tmp4.pinned = global.pinned || false;
    tmp4.mentionEveryone = global.mentionEveryone || false;
    tmp4.tts = global.tts || false;
    tmp4.giftCodes = global.giftCodes || [];
    SENT = global.state;
    if (!SENT) {
      tmp8 = MessageStates;
      SENT = MessageStates.SENT;
    }
    tmp4.state = SENT;
    nonce = global.nonce;
    tmp4.nonce = nonce;
    tmp4.blocked = global.blocked || false;
    tmp4.ignored = global.ignored || false;
    tmp4.call = global.call || null;
    tmp4.bot = global.bot || false;
    tmp4.webhookId = global.webhookId || null;
    tmp4.reactions = global.reactions || [];
    tmp4.applicationId = global.application_id || global.applicationId || null;
    tmp4.application = global.application || null;
    tmp4.activity = global.activity || null;
    tmp4.activityInstance = global.activity_instance || global.activityInstance || null;
    tmp4.messageReference = global.messageReference || null;
    tmp4.isSearchHit = global.hit || global.isSearchHit || false;
    tmp4.loggingName = global.loggingName || null;
    ({ colorString: tmp4.colorString, nick: tmp4.nick } = global);
    tmp4.interaction = global.interaction || null;
    tmp4.interactionData = global.interactionData || null;
    tmp4.interactionMetadata = global.interactionMetadata || null;
    tmp4.interactionError = global.interactionError || null;
    ({ roleSubscriptionData: tmp4.roleSubscriptionData, purchaseNotification: tmp4.purchaseNotification, poll: tmp4.poll } = global);
    tmp4.sharedClientTheme = global.shared_client_theme || global.sharedClientTheme;
    tmp4.referralTrialOfferId = global.referralTrialOfferId || null;
    tmp4.premiumGroupInviteId = global.premiumGroupInviteId || null;
    giftInfo = global.gift_info;
    if (giftInfo == null) {
      giftInfo = global.giftInfo;
    }
    tmp4.giftInfo = giftInfo;
    tmp4.giftingPrompt = global.giftingPrompt || null;
    tmp4.boostingPrompt = global.boostingPrompt || null;
    tmp4.messageSnapshots = global.messageSnapshots || [];
    tmp4.isUnsupported = global.isUnsupported || false;
    changelog_id = global.changelog_id;
    if (changelog_id == null) {
      tmp9 = global.changelogId || null;
      changelog_id = tmp9;
    }
    tmp4.changelogId = changelog_id;
    media_mention = global.media_mention;
    if (media_mention == null) {
      media_mention = global.mediaMention;
    }
    if (media_mention == null) {
      media_mention = null;
    }
    tmp4.mediaMention = media_mention;
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
    tmp4.additionalName = additional_name;
    return tmp4;
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
  let closure_0 = arg0;
  const reactions = this.reactions;
  return reactions.find((emoji) => callback(outer1_2[3]).emojiEquals(emoji.emoji, callback));
};
prototype["getContentMessage"] = function getContentMessage() {
  let self = this;
  if (isForwardMessage(this)) {
    self = this.messageSnapshots[0].message;
  }
  return self;
};
prototype["userHasReactedWithEmoji"] = function userHasReactedWithEmoji(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const reactions = this.reactions;
  return reactions.some((emoji) => {
    if (obj.emojiEquals(emoji.emoji, callback)) {
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
    obj = callback(outer1_2[3]);
  });
};
prototype["addReaction"] = function addReaction(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let NORMAL = arg3;
  if (arg3 === undefined) {
    NORMAL = _require(items[5]).ReactionTypes.NORMAL;
  }
  const self = this;
  let c4 = -1;
  const reactions = this.reactions;
  const mapped = reactions.map((emoji) => {
    let obj = callback(items[3]);
    let tmp3 = emoji;
    if (obj.emojiEquals(emoji.emoji, callback)) {
      let closure_4 = arg1;
      if (NORMAL === tmp(tmp2[5]).ReactionTypes.BURST) {
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
          obj.me_burst = tmp21 || emoji.me_burst;
          obj.burst_count = sum;
          obj = {};
          const merged1 = Object.assign(emoji.count_details);
          obj.burst = sum;
          obj.count_details = obj;
          obj.burst_colors = burst_colors;
          tmp3 = obj;
        }
        burst_colors = items;
        tmp21 = flag;
      } else if (tmp5 === tmp(tmp2[5]).ReactionTypes.VOTE) {
        const count_details = emoji.count_details;
        let num2;
        if (count_details != null) {
          num2 = count_details.vote;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (!flag) {
          let sum1 = num2 + 1;
        } else {
          sum1 = num2;
        }
        const obj1 = {};
        const merged2 = Object.assign(emoji);
        const obj2 = {};
        const merged3 = Object.assign(emoji.count_details);
        obj2.vote = sum1;
        obj1.count_details = obj2;
        obj1.me_vote = flag || emoji.me_vote;
        tmp3 = obj1;
        const tmp14 = flag;
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
        const tmp6 = flag;
      }
      tmp5 = NORMAL;
    }
    return tmp3;
  });
  if (-1 === c4) {
    if (NORMAL === _require(items[5]).ReactionTypes.BURST) {
      let obj = { emoji: null, me: false, me_burst: null, count: 0, count_details: null, burst_count: 1, burst_colors: null };
      obj[0] = arg0;
      obj[2] = flag;
      obj[4] = { burst: 1, normal: 0 };
      obj[6] = items;
      mapped.push(obj);
    } else if (NORMAL === tmp6(tmp7[5]).ReactionTypes.VOTE) {
      obj = { emoji: null, me: false, me_burst: false, me_vote: null, count: 0, count_details: null, burst_count: 0, burst_colors: null };
      obj[0] = arg0;
      obj[3] = flag;
      obj[5] = { burst: 0, normal: 0, vote: 1 };
      obj[7] = [];
      mapped.push(obj);
    } else {
      obj = { emoji: null, me: null, me_burst: false, count: 1, count_details: null, burst_count: 0, burst_colors: null };
      obj[0] = arg0;
      obj[1] = flag;
      obj[4] = { burst: 0, normal: 1 };
      obj[6] = [];
      mapped.push(obj);
    }
    tmp6 = _require;
    tmp7 = items;
  }
  return self.set("reactions", mapped);
};
prototype["addReactionBatch"] = function addReactionBatch(reactions, id) {
  let closure_0 = id;
  return reactions.reduce((arg0, arg1) => {
    let closure_0;
    let closure_1;
    let users;
    ({ users, emoji: closure_0, reactionType: closure_1 } = arg1);
    return users.reduce((addReaction) => addReaction.addReaction(closure_0, arg1 === outer1_0, [], closure_1), arg0);
  }, this);
};
prototype["removeReaction"] = function removeReaction(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let NORMAL = arg2;
  if (arg2 === undefined) {
    NORMAL = _require(NORMAL[5]).ReactionTypes.NORMAL;
  }
  const self = this;
  let c3 = -1;
  const reactions = this.reactions;
  const mapped = reactions.map((emoji) => {
    let merged1 = emoji;
    let obj = callback(NORMAL[3]);
    if (!obj.emojiEquals(emoji.emoji, callback)) {
      return merged1;
    } else {
      if (NORMAL === tmp2(tmp3[5]).ReactionTypes.BURST) {
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
          let closure_3 = arg1;
        }
        burst_count = merged1.burst_count - 1;
      } else if (tmp4 !== tmp2(tmp3[5]).ReactionTypes.VOTE) {
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
  let obj = mapped[c3];
  if (obj == null) {
    obj = {};
  }
  let count_details = obj.count_details;
  let tmp4 = -1 !== c3;
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
    mapped.splice(c3, 1);
  }
  return self.set("reactions", mapped);
};
prototype["removeReactionsForEmoji"] = function removeReactionsForEmoji(emoji) {
  let reactions;
  let set;
  let closure_0 = emoji;
  ({ reactions, set } = this);
  return set("reactions", reactions.filter((emoji) => !emoji(outer1_2[3]).emojiEquals(emoji.emoji, emoji)));
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
      tmp2 = ApplicationIntegrationType /* ApplicationIntegrationType */.ApplicationIntegrationType.USER_INSTALL in prop;
    }
    return tmp2;
  }
};
prototype["toJS"] = function toJS() {
  const obj = {};
  const merged = Object.assign(this);
  const mentionGames = this.mentionGames;
  const items = [...mentionGames.values()];
  obj.mentionGames = items;
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
const result = require("hasFlag").fileFinishedImporting("records/MessageRecord.tsx");
const prototype2 = function MessageSnapshotRecord(message) {
  const tmp3 = new prototype2(tmp2, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
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
  return hasFlag /* hasFlag */.hasFlag(contentMessage.flags, IS_COMPONENTS_V2.IS_COMPONENTS_V2);
};