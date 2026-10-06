// === Module 4526: MessageRecord ===

// Module 4526 (MessageRecord)
import FlagUtils from "FlagUtils" /* 1390 */;
import ReactionUtils from "ReactionUtils" /* 4527 */;
import isForwardMessageDefault from "isForwardMessage" /* 6815 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7272 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8740 */;
import Record from "Record" /* 1392 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
({ MessageFlags: c3, MessageStates: closure_4, MessageTypes: hasOwnProperty } = Constants);
class MinimalMessageRecord extends Record {
  constructor(message) {
    const tmp2 = new MinimalMessageRecord(tmp, this);
    let DEFAULT = message.type;
    if (DEFAULT == null) {
      DEFAULT = hasOwnProperty.DEFAULT;
    }
    tmp2.type = DEFAULT;
    let str = message.content;
    if (str == null) {
      str = "";
    }
    tmp2.content = str;
    let attachments = message.attachments;
    if (attachments == null) {
      attachments = [];
    }
    tmp2.attachments = attachments;
    let embeds = message.embeds;
    if (embeds == null) {
      embeds = [];
    }
    tmp2.embeds = embeds;
    let timestamp = message.timestamp;
    if (timestamp == null) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      timestamp = new Date();
    }
    tmp2.timestamp = timestamp;
    let editedTimestamp = message.editedTimestamp;
    if (editedTimestamp == null) {
      editedTimestamp = null;
    }
    tmp2.editedTimestamp = editedTimestamp;
    let num = message.flags;
    if (num == null) {
      num = 0;
    }
    tmp2.flags = num;
    let components = message.components;
    if (components == null) {
      components = [];
    }
    tmp2.components = components;
    let codedLinks = message.codedLinks;
    if (codedLinks == null) {
      codedLinks = [];
    }
    tmp2.codedLinks = codedLinks;
    let stickers = message.stickers;
    if (stickers == null) {
      stickers = [];
    }
    tmp2.stickers = stickers;
    let sticker_items = message.sticker_items;
    if (sticker_items == null) {
      sticker_items = message.stickerItems;
    }
    if (sticker_items == null) {
      sticker_items = [];
    }
    tmp2.stickerItems = sticker_items;
    let soundboardSounds = message.soundboard_sounds;
    if (soundboardSounds == null) {
      soundboardSounds = message.soundboardSounds;
    }
    tmp2.soundboardSounds = soundboardSounds;
    return tmp2;
  }
  hasFlag(FIND_BY_EMAIL) {
    const obj = FlagUtils;
    return obj.hasFlag(this.flags, FIND_BY_EMAIL);
  }
}
const prototype = MinimalMessageRecord.prototype;
class MessageRecord extends MinimalMessageRecord {
  constructor(message) {
    const tmp2 = new MessageRecord(message, new.target, tmp, message, this);
    ({ id: tmp2.id, channel_id: tmp2.channel_id, author: tmp2.author, customRenderedContent: tmp2.customRenderedContent } = message);
    tmp2.mentions = message.mentions || [];
    tmp2.mentionRoles = message.mentionRoles || [];
    tmp2.mentionChannels = message.mentionChannels || [];
    tmp2.mentioned = message.mentioned || false;
    tmp2.pinned = message.pinned || false;
    tmp2.mentionEveryone = message.mentionEveryone || false;
    tmp2.tts = message.tts || false;
    tmp2.giftCodes = message.giftCodes || [];
    const SENT = message.state || constants.SENT;
    tmp2.state = SENT;
    const nonce = message.nonce;
    tmp2.nonce = nonce;
    tmp2.blocked = message.blocked || false;
    tmp2.ignored = message.ignored || false;
    tmp2.call = message.call || null;
    tmp2.bot = message.bot || false;
    tmp2.webhookId = message.webhookId || null;
    tmp2.reactions = message.reactions || [];
    tmp2.applicationId = message.application_id || message.applicationId || null;
    tmp2.application = message.application || null;
    tmp2.activity = message.activity || null;
    tmp2.activityInstance = message.activity_instance || message.activityInstance || null;
    tmp2.messageReference = message.messageReference || null;
    tmp2.isSearchHit = message.hit || message.isSearchHit || false;
    tmp2.loggingName = message.loggingName || null;
    ({ colorString: tmp2.colorString, nick: tmp2.nick } = message);
    tmp2.interaction = message.interaction || null;
    tmp2.interactionData = message.interactionData || null;
    tmp2.interactionMetadata = message.interactionMetadata || null;
    tmp2.interactionError = message.interactionError || null;
    ({ roleSubscriptionData: tmp2.roleSubscriptionData, purchaseNotification: tmp2.purchaseNotification, poll: tmp2.poll } = message);
    tmp2.sharedClientTheme = message.shared_client_theme || message.sharedClientTheme;
    tmp2.referralTrialOfferId = message.referralTrialOfferId || null;
    tmp2.premiumGroupInviteId = message.premiumGroupInviteId || null;
    let giftInfo = message.gift_info;
    if (giftInfo == null) {
      giftInfo = message.giftInfo;
    }
    tmp2.giftInfo = giftInfo;
    tmp2.giftingPrompt = message.giftingPrompt || null;
    tmp2.boostingPrompt = message.boostingPrompt || null;
    tmp2.messageSnapshots = message.messageSnapshots || [];
    tmp2.isUnsupported = message.isUnsupported || false;
    let changelog_id = message.changelog_id;
    if (changelog_id == null) {
      changelog_id = message.changelogId || null;
    }
    tmp2.changelogId = changelog_id;
    let media_mention = message.media_mention;
    if (media_mention == null) {
      media_mention = message.mediaMention;
    }
    if (media_mention == null) {
      media_mention = null;
    }
    tmp2.mediaMention = media_mention;
    const lobby_member = message.lobby_member;
    let additional_name;
    if (lobby_member != null) {
      additional_name = lobby_member.additional_name;
    }
    if (additional_name == null) {
      additional_name = message.additionalName;
    }
    if (additional_name == null) {
      additional_name = null;
    }
    tmp2.additionalName = additional_name;
    let guild_space_data = message.guild_space_data;
    if (guild_space_data == null) {
      guild_space_data = message.guildSpaceData;
    }
    if (guild_space_data == null) {
      guild_space_data = null;
    }
    tmp2.guildSpaceData = guild_space_data;
    return tmp2;
  }
  isEdited() {
    return null != this.editedTimestamp;
  }
  getChannelId() {
    return this.channel_id;
  }
  getReaction(arg0) {
    let closure_0 = arg0;
    const reactions = this.reactions;
    return reactions.find((emoji) => {
      const obj = ReactionUtils;
      return obj.emojiEquals(emoji.emoji, closure_0);
    });
  }
  getContentMessage() {
    let self = this;
    if (isForwardMessageDefault(this)) {
      self = this.messageSnapshots[0].message;
    }
    return self;
  }
  userHasReactedWithEmoji(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const reactions = this.reactions;
    return reactions.some((emoji) => {
      const obj = ReactionUtils;
      if (obj.emojiEquals(emoji.emoji, closure_0)) {
        let tmp2 = closure_1 && emoji.me;
        if (!tmp2) {
          tmp2 = !closure_1 && emoji.me_burst;
        }
        return tmp2;
      }
    });
  }
  addReaction(emoji) {
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
    let closure_4;
    let c5;
    let colors = obj.colors;
    if (undefined === colors) {
      colors = [];
    }
    NORMAL = obj.reactionType;
    if (undefined === NORMAL) {
      NORMAL = require("MessageReactionsTypes").ReactionTypes.NORMAL;
    }
    const isDMChannel = obj.isDMChannel;
    let tmp3 = undefined !== isDMChannel && isDMChannel;
    const self = this;
    closure_4 = tmp3;
    c5 = -1;
    const reactions = this.reactions;
    const mapped = reactions.map((emoji, index) => {
      let obj3;
      let obj5;
      let obj7;
      let tmp3 = emoji;
      const obj = ReactionUtils;
      if (obj.emojiEquals(emoji.emoji, emoji)) {
        c5 = index;
        if (closure_4) {
          if (!flag) {
            let num = 0;
            const count = emoji.count;
            if (emoji.me) {
              num = 1;
            }
            let num3 = 0;
            const diff = count - num;
            const burst_count = emoji.burst_count;
            if (emoji.me_burst) {
              num3 = 1;
            }
            const count_details = emoji.count_details;
            let num4;
            const diff1 = burst_count - num3;
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
        if (NORMAL === MessageReactionsTypes.ReactionTypes.BURST) {
          if (flag) {
            if (emoji.me_burst) {
              return emoji;
            }
          }
          const sum = emoji.burst_count + 1;
          if (null != emoji.burst_colors) {
            let burst_colors;
            if (emoji.burst_colors.length > 0) {
              burst_colors = emoji.burst_colors;
            }
            const obj2 = { me_burst: flag || emoji.me_burst, burst_count: sum, count_details: obj3, burst_colors };
            const merged = Object.assign(emoji);
            obj3 = { burst: sum };
            const merged1 = Object.assign(emoji.count_details);
            tmp3 = obj2;
          }
          burst_colors = colors;
        } else if (NORMAL === MessageReactionsTypes.ReactionTypes.VOTE) {
          let sum1;
          const count_details2 = emoji.count_details;
          let num7;
          if (count_details2 != null) {
            num7 = count_details2.vote;
          }
          if (num7 == null) {
            num7 = 0;
          }
          if (!flag) {
            sum1 = num7 + 1;
          } else {
            sum1 = num7;
          }
          const obj4 = { count_details: obj5, me_vote: flag || emoji.me_vote };
          const merged2 = Object.assign(emoji);
          obj5 = { vote: sum1 };
          const merged3 = Object.assign(emoji.count_details);
          tmp3 = obj4;
        } else {
          if (flag) {
            if (emoji.me) {
              return emoji;
            }
          }
          const sum2 = emoji.count + 1;
          const obj6 = { count: sum2, count_details: obj7, me: flag || emoji.me };
          const merged4 = Object.assign(emoji);
          obj7 = { normal: sum2 };
          const merged5 = Object.assign(emoji.count_details);
          tmp3 = obj6;
        }
      }
      return tmp3;
    });
    if (-1 === c5) {
      const tmp7 = _require;
      const tmp8 = colors;
      if (NORMAL === require("MessageReactionsTypes").ReactionTypes.BURST) {
        let obj2 = { emoji, me: false, me_burst: flag, count: 0, count_details: { burst: 1, normal: 0 }, burst_count: 1, burst_colors: colors };
        mapped.push(obj2);
      } else if (NORMAL === tmp7(tmp8[5]).ReactionTypes.VOTE) {
        let obj3 = { emoji, me: false, me_burst: false, me_vote: flag, count: 0, count_details: { burst: 0, normal: 0, vote: 1 }, burst_count: 0, burst_colors: [] };
        mapped.push(obj3);
      } else {
        let obj4 = { emoji, me: flag, me_burst: false, count: 1, count_details: { burst: 0, normal: 1 }, burst_count: 0, burst_colors: [] };
        mapped.push(obj4);
      }
    }
    return self.set("reactions", mapped);
  }
  addReactionBatch(reactions, id) {
    let closure_0 = id;
    return reactions.reduce((acc, item) => {
      let closure_0;
      let closure_1;
      let reactionType;
      let users;
      ({ users, emoji: closure_0, reactionType: closure_1 } = item);
      return users.reduce((addReaction, item) => {
        const obj = { reactionType };
        return addReaction.addReaction(id, item === id, obj);
      }, acc);
    }, this);
  }
  removeReaction(arg0) {
    let closure_0;
    let tmp3;
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
    let c3 = -1;
    const reactions = this.reactions;
    const mapped = reactions.map((emoji, index) => {
      let obj3;
      let obj5;
      let obj7;
      let tmp3 = emoji;
      const obj = ReactionUtils;
      if (obj.emojiEquals(emoji.emoji, closure_0)) {
        let obj6;
        if (NORMAL === MessageReactionsTypes.ReactionTypes.BURST) {
          if (flag) {
            let burst_count;
            if (!emoji.me_burst) {
              burst_count = emoji.burst_count;
            }
            const obj2 = { burst_count, me_burst: !flag && emoji.me_burst, count_details: obj3 };
            const merged = Object.assign(emoji);
            obj3 = { burst: burst_count };
            const merged1 = Object.assign(emoji.count_details);
            obj6 = obj2;
          }
          burst_count = emoji.burst_count - 1;
        } else if (NORMAL === MessageReactionsTypes.ReactionTypes.VOTE) {
          let diff;
          const count_details = emoji.count_details;
          let num2;
          if (count_details != null) {
            num2 = count_details.vote;
          }
          if (num2 == null) {
            num2 = 0;
          }
          if (!flag) {
            diff = num2 - 1;
          } else {
            diff = num2;
          }
          const obj4 = { count_details: obj5, me_vote: !flag && emoji.me_vote };
          const merged2 = Object.assign(emoji);
          obj5 = { vote: diff };
          const merged3 = Object.assign(emoji.count_details);
          obj6 = obj4;
        } else {
          if (flag) {
            let count;
            if (!emoji.me) {
              count = emoji.count;
            }
            obj6 = { count, me: !flag && emoji.me, count_details: obj7 };
            const merged4 = Object.assign(emoji);
            obj7 = { normal: count };
            const merged5 = Object.assign(emoji.count_details);
          }
          count = emoji.count - 1;
        }
        c3 = index;
        tmp3 = obj6;
      }
      return tmp3;
    });
    let obj = mapped[c3];
    if (obj == null) {
      obj = {};
    }
    let count_details = obj.count_details;
    let tmp4 = -1 !== c3;
    let burst_count = obj.burst_count;
    if (tmp4) {
      tmp4 = tmp3 <= 0;
    }
    if (tmp4) {
      let num2 = 0;
      tmp4 = burst_count <= 0;
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
  }
  removeReactionsForEmoji(emoji) {
    let reactions;
    let closure_0 = emoji;
    ({ reactions, set } = this);
    return set("reactions", reactions.filter((emoji) => {
      const obj = ReactionUtils;
      return !obj.emojiEquals(emoji.emoji, closure_0);
    }));
  }
  isSystemDM() {
    const author = this.author;
    return author.isSystemUser();
  }
  isCommandType() {
    return this.type === hasOwnProperty.CHAT_INPUT_COMMAND || this.type === tmp.CONTEXT_MENU_COMMAND;
  }
  isPoll() {
    return null != this.poll;
  }
  isInteractionPlaceholder() {
    let isNonUserBotResult = null != this.interaction;
    if (isNonUserBotResult) {
      const author = this.author;
      isNonUserBotResult = author.isNonUserBot();
    }
    return isNonUserBotResult;
  }
  canDeleteOwnMessage(id3) {
    const self = this;
    if (this.author.id === id3) {
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
      let tmp2 = id === id3;
      if (tmp2) {
        const _Object = Object;
        tmp2 = 1 === Object.keys(prop).length;
      }
      if (tmp2) {
        tmp2 = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL in prop;
      }
      return tmp2;
    }
  }
  toJS() {
    const obj = {};
    const merged = Object.assign(this);
    ({ webhookId: obj.webkhook_id, editedTimestamp: obj.edited_timestamp, mentionEveryone: obj.mention_everyone } = this);
    return obj;
  }
  isFirstMessageInForumPost(channel1) {
    const isForumPostResult = this.id === this.channel_id && channel1.isForumPost();
    return isForumPostResult;
  }
}
const prototype2 = MessageRecord.prototype;
const result = size.fileFinishedImporting("records/MessageRecord.tsx");
class MessageSnapshotRecord extends Record {
  constructor(message) {
    const tmp3 = new MessageSnapshotRecord(tmp2, new.target, this, tmp);
    tmp3.message = new MinimalMessageRecord(message.message);
    let moderator_report = message.moderator_report;
    if (moderator_report == null) {
      moderator_report = null;
    }
    tmp3.moderatorReport = moderator_report;
    return tmp3;
  }
}

export default MessageRecord;
export { MinimalMessageRecord };
export function ModeratorReport(arg0) {
  ({ reporting_user_id: tmp.reporting_user_id, reported_user_id: tmp.reported_user_id, reporting_member: tmp.reporting_member, reported_member: tmp.reported_member } = arg0);
  const obj = Object.create(new.target.prototype);
  return obj;
}
export { MessageSnapshotRecord };
export const isMessageComponentsV2 = function isMessageComponentsV2(contentMessage) {
  const obj = FlagUtils;
  return obj.hasFlag(contentMessage.flags, IS_COMPONENTS_V2.IS_COMPONENTS_V2);
};