// discord_app/actions/MessageActionCreators.tsx
import ClickArea from "ClickArea";
import trackRoundtrip from "trackRoundtrip";
import _handleConnectionOpen from "_handleConnectionOpen";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess";
import closure_9 from "trackRoundtrip";
import initialize from "initialize";
import getState from "getState";
import processMessage from "processMessage";
import { ReferencedMessageState } from "processMessage";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_18 from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateInvite from "updateInvite";
import reinjectEphemerals from "reinjectEphemerals";
import "getUncachedChannelPermissions";
import sortActivity from "sortActivity";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { SlowmodeType } from "setCooldown";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { LinkType } from "LinkType";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";

let Permissions;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_46;
let closure_47;
const require = arg1;
function trackInvite(channelId) {
  let _location;
  let inviteAnalyticsMetadata;
  let inviteKey;
  let messageId;
  let overrideProperties;
  ({ inviteKey, messageId, location: _location, inviteAnalyticsMetadata, overrideProperties } = channelId);
  if (overrideProperties === undefined) {
    overrideProperties = {};
  }
  id = id.getId();
  invite = invite.getInvite(inviteKey);
  let obj = require(4179) /* readSnowflake */;
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    let tmp3Result = tmp3(6024);
    result1 = tmp3Result.isEmbeddedApplicationInvite(invite);
  }
  let id1;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id1 = target_application.id;
    }
  }
  if (tmp8) {
    tmp3Result = tmp3(5982);
    const result2 = tmp3Result.trackAppEmbedLinkSent(id1, LinkType.ACTIVITY_INVITE, id);
  }
  let channel = store.getChannel(channelId.channelId);
  if (null != channel) {
    if (channel.isMultiUserDM()) {
      let GDM_INVITE = constants3.GDM_INVITE;
    } else {
      GDM_INVITE = null;
      if (!channel.isPrivate()) {
        GDM_INVITE = constants3.SERVER_INVITE;
      }
    }
    obj = {};
    let STREAM = GDM_INVITE;
    if (null != invite) {
      STREAM = GDM_INVITE;
      if (invite.state === constants5.RESOLVED) {
        STREAM = GDM_INVITE;
        if (null != invite.channel) {
          channel = invite.channel;
          obj.invite_channel_id = channel.id;
          const guild = invite.guild;
          let id2;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.invite_guild_id = id2;
          obj.invite_channel_type = channel.type;
          if (null != invite.inviter) {
            obj.invite_inviter_id = invite.inviter.id;
          }
          if (null != invite.target_application) {
            obj.application_id = invite.target_application.id;
          }
          lastActiveStream = lastActiveStream.getLastActiveStream();
          STREAM = GDM_INVITE;
          if (null != lastActiveStream) {
            STREAM = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj.destination_user_id = lastActiveStream.ownerId;
              const streamerApplication = tmp3(6027).getStreamerApplication(lastActiveStream, sortActivity);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj.application_id = id3;
              STREAM = constants3.STREAM;
              const tmp3Result1 = tmp3(6027);
            }
          }
        }
      }
    }
    if (null != inviteAnalyticsMetadata) {
      if (null != inviteAnalyticsMetadata.suggestionData) {
        obj.is_suggested = inviteAnalyticsMetadata.suggestionData.isAffinitySuggestion;
        obj.row_num = inviteAnalyticsMetadata.suggestionData.rowNum;
        obj.num_total = inviteAnalyticsMetadata.suggestionData.numTotal;
        obj.num_affinity_connections = inviteAnalyticsMetadata.suggestionData.numAffinityConnections;
        obj.is_filtered = inviteAnalyticsMetadata.suggestionData.isFiltered;
      }
      obj.source = inviteAnalyticsMetadata.source;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.location = _location;
    obj.invite_type = STREAM;
    obj.invite_code = result.baseCode;
    obj.guild_id = channel.getGuildId();
    obj.channel_id = channel.id;
    obj.message_id = messageId;
    obj.send_type = constants4.DIRECT_MESSAGE;
    obj.invite_guild_scheduled_event_id = result.guildScheduledEventId;
    let inviteInstanceId = tmp3(4179).getInviteInstanceId(result.baseCode, messageId);
    if (inviteInstanceId == null) {
      inviteInstanceId = null;
    }
    obj.invite_instance_id = inviteInstanceId;
    const merged1 = Object.assign(overrideProperties);
    const tmp3Result2 = tmp3(4179);
    importDefault(4388).trackWithMetadata(constants.INVITE_SENT, obj);
    const obj13 = importDefault(4388);
  } else {
    let tmp12 = null != invite;
    if (tmp12) {
      tmp12 = invite.state === constants5.RESOLVED;
    }
    if (tmp12) {
      tmp12 = null != invite.inviter;
    }
    if (tmp12) {
      const obj1 = { invite_inviter_id: invite.inviter.id };
      if (null != invite.target_application) {
        obj1.application_id = invite.target_application.id;
      }
      const obj2 = {};
      const merged2 = Object.assign(obj1);
      obj2.location = _location;
      obj2.invite_type = constants3.FRIEND_INVITE;
      obj2.invite_code = result.baseCode;
      obj2.message_id = messageId;
      obj2.send_type = constants4.DIRECT_MESSAGE;
      obj2.invite_guild_scheduled_event_id = result.guildScheduledEventId;
      let inviteInstanceId1 = tmp3(4179).getInviteInstanceId(result.baseCode, messageId);
      if (inviteInstanceId1 == null) {
        inviteInstanceId1 = null;
      }
      obj2.invite_instance_id = inviteInstanceId1;
      const merged3 = Object.assign(overrideProperties);
      const tmp3Result3 = tmp3(4179);
      importDefault(4388).trackWithMetadata(constants.INVITE_SENT, obj2);
      const obj8 = importDefault(4388);
    }
  }
}
const AbortCodes = ME.AbortCodes;
({ AnalyticEvents: closure_27, Endpoints: closure_28, Permissions, ChannelTypes: closure_29, LoggingInviteTypes: closure_30, SendTypes: closure_31, InviteStates: closure_32, MessageFlags: closure_33, MAX_MESSAGES_FOR_JUMP: closure_34, MessageTypes: closure_35, AllowedMentionTypes: closure_36, HelpdeskArticles: closure_37, MarketingURLs: closure_38, MessageReferenceTypes: closure_39, LOCAL_BOT_ID: closure_40, NON_USER_BOT_DISCRIMINATOR: closure_41, MessageStates: closure_42, ActivityActionTypes: closure_43 } = ME);
({ FileUploadErrorTypes: closure_46, MessageSendLocation: closure_47 } = MESSAGE_GROUP_SPACING);
const MediaPlayerManager = require("getUncachedChannelPermissions").NativeModules.MediaPlayerManager;
let closure_49 = new require("updateSubmittedGuildJoinRequestTotal")("MessageActionCreators");
const tmp5 = new require("updateSubmittedGuildJoinRequestTotal")("MessageActionCreators");
let closure_50 = new require("updateSubmittedGuildJoinRequestTotal")("MessageQueue");
let c51 = false;
class RemoteFetch {
}
RemoteFetch.prototype["markComplete"] = function markComplete() {
  this.completed = true;
};
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    let obj = importDefault(1945);
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (rawRecipients == null) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = require(1236) /* getSystemLocale */.intl;
          obj = { helpUrl: null };
          obj[0] = articleURL;
          let formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.SkGL7l, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.llTkqr, { helpUrl: articleURL });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { helpUrl: null };
    obj[0] = importDefault(1945).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.SkGL7l, obj);
  }
};
let closure_54 = {
  [AbortCodes.SLOWMODE_RATE_LIMITED]: obj,
  [AbortCodes.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: obj,
  [AbortCodes.INVALID_MESSAGE_SEND_USER]: obj,
  [AbortCodes.TOO_MANY_THREADS]: {
    messageName: "TOO_MANY_THREADS",
    messageGetter(isForumLikeChannel) {
      if (!isForumLikeChannel.isForumLikeChannel()) {
        if (!isForumLikeChannel.isForumPost()) {
          const intl = require(1236) /* getSystemLocale */.intl;
          let stringResult = intl.string(require(1236) /* getSystemLocale */.t["5EMPA7"]);
        }
        return stringResult;
      }
      const intl2 = require(1236) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1236) /* getSystemLocale */.t["/jUd2+"]);
    }
  },
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: {
    messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["aY+lLC"]);
    }
  },
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: {
    messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
    }
  },
  [AbortCodes.HARMFUL_URL_BLOCKED]: {
    messageName: "HARMFUL_URL_BLOCKED",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.WxX2Fd);
    }
  },
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.k1Cjqr);
    }
  },
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
    messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.Z5SUuv);
    }
  },
  [AbortCodes.RATE_LIMIT_DM_OPEN]: {
    messageName: "BOT_DM_RATE_LIMITED",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.E8nbNb);
    }
  },
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.aRUbah);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["/meGhR"]);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.Oc1Zjw);
    }
  },
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
    messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      const obj = { maxSizeMb: null };
      obj[0] = require(4727) /* items */.MAX_TOTAL_ATTACHMENT_SIZE_MB;
      return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.DYFPg2, obj);
    }
  },
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: {
    messageName: "CLOUD_UPLOAD_NOT_FOUND",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.bQldfH);
    }
  },
  [AbortCodes.INVALID_PERMISSIONS]: {
    messageName: "INVALID_PERMISSIONS",
    messageGetter() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.zl4Weq);
    }
  }
};
let obj14 = {
  receiveMessage(channelId, message) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    obj = { type: "MESSAGE_CREATE", channelId, message, optimistic: flag, sendMessageOptions: obj, isPushNotification: false };
    importDefault(709).dispatch(obj);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      let obj = importDefault(4388);
      obj = { message_author: "Clyde", message_name: null };
      obj[1] = messageName;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj);
    }
    obj = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    obj14.receiveMessage(id, require(6042) /* createMessage */.createBotMessage(obj));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: closure_33.EPHEMERAL, author: obj };
    obj = { id: closure_40, username: "Nitro Notification", discriminator: closure_41, avatar: "nitro", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6042)(obj));
    obj.state = constants9.SENT;
    obj.channel_id = channelId;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: closure_33.EPHEMERAL, author: obj, giftingPrompt };
    obj = { id: closure_40, username: "Gifting Prompt", discriminator: closure_41, avatar: "gifting_prompt", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6042)(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: closure_33.EPHEMERAL, author: obj, boostingPrompt };
    obj = { id: closure_40, username: "Guild Boost Upsell", discriminator: closure_41, avatar: "guild_boost_upsell", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6042)(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendClydeError(c0, code) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = store.getChannel(c0);
    if (null != channel) {
      let obj = table[num];
      if (null != obj) {
        obj14.sendBotMessage(c0, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = require(1236) /* getSystemLocale */.intl;
        obj = { helpUrl: null };
        obj[0] = importDefault(1945).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
        const _HermesInternal = HermesInternal;
        const obj3 = importDefault(1945);
        obj14.sendBotMessage(c0, intl.formatToPlainString(require(1236) /* getSystemLocale */.t.SkGL7l, obj), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.SkGL7l, obj);
      }
    }
  },
  sendExplicitMediaClydeError(c0, attachments, EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED) {
    let message;
    let messageName;
    const channel = store.getChannel(c0);
    if (null != channel) {
      let obj = { isDM: null, isGDM: null };
      obj[0] = channel.isDM();
      obj[1] = channel.isGroupDM();
      const match = require(4393) /* t */.match(obj);
      const str = require(4393) /* t */;
      const withResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      });
      const withResult1 = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      });
      ({ message, messageName } = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.i4AbAS);
        return obj;
      }));
      const otherwiseResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.i4AbAS);
        return obj;
      });
      const nonce = require(6043) /* snowflakeSequence */.createNonce();
      obj14.sendBotMessage(c0, message, messageName, nonce);
      const obj8 = require(6043) /* snowflakeSequence */;
      obj = { action: null, messageId: null, channelId: null, context: null };
      obj[0] = require(5865) /* redactionSettingToRenderedString */.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
      obj[1] = nonce;
      obj[2] = c0;
      obj[3] = EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED;
      const result = require(5865) /* redactionSettingToRenderedString */.trackMediaRedactionAction(obj);
      let tmp = null != attachments;
      if (tmp) {
        tmp = attachments.length > 0;
      }
      if (tmp) {
        let obj1 = importDefault(709);
        obj1 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: null, channelId: null, attachments: null };
        obj1[1] = nonce;
        obj1[2] = c0;
        obj1[3] = attachments;
        obj1.dispatch(obj1);
      }
      const obj9 = require(5865) /* redactionSettingToRenderedString */;
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    let obj = importDefault(709);
    obj = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj);
  },
  clearChannel(channelId) {
    let obj = importDefault(709);
    obj = { type: "CLEAR_MESSAGES", channelId };
    obj.dispatch(obj);
  },
  jumpToPresent(channelId) {
    let obj = obj14;
    obj14.trackJump(channelId, null, "Present");
    obj = { present: true };
    if (reinjectEphemerals.hasPresent(channelId)) {
      obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: null, channelId: null, limit: null };
      obj[1] = obj;
      obj[2] = channelId;
      obj[3] = arg1;
      importDefault(709).dispatch(obj);
      const obj4 = importDefault(709);
    } else {
      const obj1 = { channelId: null, limit: null, jump: null };
      obj1[0] = channelId;
      obj1[1] = arg1;
      obj1[2] = obj;
      const messages = obj.fetchMessages(obj1);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    let obj = importDefault(4388);
    obj = { context: Present, channel_id: channelId, message_id: id };
    const merged = Object.assign(extraProperties);
    obj.trackWithMetadata(constants.JUMP, obj);
  },
  jumpToMessage(arg0) {
    let avoidInitialScroll;
    let channelId;
    let context;
    let extraProperties;
    let flash;
    let isPreload;
    let jumpType;
    let messageId;
    let offset;
    let onJumpComplete;
    let returnMessageId;
    let skipLocalFetch;
    ({ channelId, messageId, flash } = arg0);
    if (flash === undefined) {
      flash = false;
    }
    ({ context, extraProperties, offset } = arg0);
    if (extraProperties === undefined) {
      extraProperties = null;
    }
    ({ isPreload, returnMessageId, skipLocalFetch, jumpType, avoidInitialScroll, onJumpComplete } = arg0);
    if (typeof context !== "__FORMATJS_LISTFORMAT_DATA__") {
      obj14.trackJump(channelId, messageId, context, extraProperties);
    }
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
    return obj14.fetchMessages({ channelId, limit: closure_34, jump: { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete }, isPreload, skipLocalFetch, avoidInitialScroll });
  },
  focusMessage(channelId) {
    obj = { channelId: channelId.channelId, limit: closure_34, focus: obj };
    obj = { messageId: channelId.messageId };
    const messages = obj14.fetchMessages(obj);
  },
  fetchMessage(arg0) {
    let importDefault;
    let require;
    ({ channelId: require, messageId: importDefault } = arg0);
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let closure_0 = 0;
              closure_0 = undefined;
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
              obj1[0] = outer1_28.MESSAGES(outer1_0);
              const obj2 = { limit: 1, around: null };
              obj2[1] = outer1_1;
              obj1[1] = obj2;
              obj1[4] = outer1_0(530).rejectWithMigratedError();
              c2 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_0 = arg1;
            if (closure_0.body.length > 0) {
              obj = outer1_0(4413);
              dependencyMap = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = obj.createMessageRecord(closure_0.body[0]);
              return obj5;
            } else {
              dependencyMap = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp11) {
          dependencyMap = tmp;
          throw tmp11;
        }
      }
    })();
  },
  fetchMessages(channelId) {
    let _handleConnectionOpen;
    let updateSubmittedGuildJoinRequestTotal;
    let feature;
    let fetchKey;
    let focus;
    let isPreload;
    let skipLocalFetch;
    let truncate;
    channelId = channelId.channelId;
    const before = channelId.before;
    const after = channelId.after;
    const limit = channelId.limit;
    let jump = channelId.jump;
    ({ focus, truncate } = channelId);
    ({ forICYMI: _handleConnectionOpen, avoidInitialScroll: updateSubmittedGuildJoinRequestTotal, fetchKey } = channelId);
    let closure_9;
    let timestamp;
    let messageId;
    let obj1;
    ({ isPreload, skipLocalFetch, feature } = channelId);
    const channel = store.getChannel(channelId);
    closure_9 = connectedOrOverlay.isConnectedOrOverlay();
    timestamp = Date.now();
    if (null != channel) {
      if (channel.type === constants2.GUILD_STORE) {
        return false;
      }
    }
    if (channelId !== channelId(limit[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      tmp5.log("Fetching messages for " + channelId + " between " + after + " and " + before + ". jump=" + JSON.stringify(jump));
      let obj = { channelId: null, before: null, after: null, limit: null, jump: null, focus: null, truncate: null };
      obj[0] = channelId;
      obj[1] = before;
      obj[2] = after;
      obj[3] = limit;
      obj[4] = jump;
      obj[5] = focus;
      obj[6] = truncate;
      if (!obj14._tryFetchMessagesCached(obj)) {
        let fetchMessages = before(tmp5[54]).fetchMessages;
        fetchMessages.recordStart();
        obj = before(tmp5[55]);
        let tmp8 = fetchKey;
        if (fetchKey == null) {
          tmp8 = timestamp;
        }
        let result = obj.recordChannelFetchStart(channelId, tmp8, before, after, limit);
        if (tmp16) {
          obj = {};
          const merged = Object.assign(focus);
          jump = obj;
        }
        let tmp6Result = tmp6(tmp5[56]);
        const orCreate = tmp6Result.getOrCreate(channelId);
        const start = orCreate.loadStart(jump);
        tmp6Result = tmp6(tmp5[56]);
        tmp6Result.commit(start);
        before(tmp5[46]).dispatch({ type: "LOAD_MESSAGES" });
        messageId = undefined;
        if (jump != null) {
          messageId = jump.messageId;
        }
        if (typeof RemoteFetch !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        obj1 = Object.create(RemoteFetch.prototype);
        if (!skipLocalFetch) {
          const self = this;
          if (fetchKey == null) {
            fetchKey = timestamp;
          }
          const localMessages = this.fetchLocalMessages(channelId, fetchKey, before, after, limit, obj1);
        }
        const HTTP = tmp4(tmp5[51]).HTTP;
        const obj2 = { url: null, query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
        obj2[0] = closure_28.MESSAGES(channelId);
        const obj3 = { before: null, after: null, limit: null, around: null, preload: null, feature: null };
        obj3[0] = before;
        obj3[1] = after;
        obj3[2] = limit;
        obj3[3] = messageId;
        obj3[4] = isPreload;
        obj3[5] = feature;
        obj2[1] = obj3;
        tmp16 = null == jump && null != focus;
        const tmp24 = RemoteFetch;
        const tmp6Result1 = before(tmp5[46]);
        obj2[4] = tmp4(tmp5[51]).rejectWithMigratedError();
        const value = HTTP.get(obj2);
        return value.then((arg0) => {
          let closure_0 = arg0;
          const fetchMessages = before(limit[54]).fetchMessages;
          fetchMessages.recordEnd();
          const dispatchMessages = before(limit[54]).dispatchMessages;
          dispatchMessages.measure(() => {
            body = body.body;
            let flag = null != outer1_11;
            if (!flag) {
              let tmp7 = body.length === outer1_3;
              if (tmp7) {
                let tmp8 = tmp2;
                if (!tmp2) {
                  tmp8 = null == tmp && null == tmp3;
                  const tmp9 = null == tmp && null == tmp3;
                }
                tmp7 = tmp8;
              }
              flag = tmp7;
            }
            let flag2 = null != tmp5;
            if (!flag2) {
              let tmp10 = tmp4;
              if (tmp4) {
                tmp10 = body.length === outer1_3;
              }
              flag2 = tmp10;
            }
            let flag3 = flag2;
            let tmp12 = flag;
            if (null != outer1_11) {
              const _Math = Math;
              const rounded = Math.floor(outer1_3 / 2);
              const items = [tmp5];
              HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
              const found = items.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
              const sorted = found.sort(before(limit[57]).compare);
              const index = sorted.indexOf(tmp5);
              if (index < rounded + outer1_3 % 2 - 1) {
                flag = false;
              }
              if (body.length - index < rounded) {
                flag2 = false;
              }
              flag3 = flag2;
              tmp12 = flag;
              if (flag2) {
                flag3 = flag2;
                tmp12 = flag;
                if (body.length > 0) {
                  flag3 = flag2;
                  tmp12 = flag;
                  if (body[0].id === outer2_23.lastMessageId(body)) {
                    flag3 = false;
                    tmp12 = flag;
                  }
                }
              }
            }
            outer2_49.log("Fetched " + body.length + " messages for " + body + " isBefore:" + null != outer1_1 + " isAfter:" + null != outer1_2);
            outer1_12.markComplete();
            let obj = before(limit[46]);
            obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: body, messages: body, isBefore: tmp2, isAfter: tmp4, hasMoreBefore: tmp12, hasMoreAfter: flag3, limit: outer1_3, jump: outer1_4, forICYMI: outer1_6, isStale: null, truncate: null, avoidInitialScroll: null };
            let tmp19 = !outer1_9;
            if (outer1_9) {
              tmp19 = outer2_6.lastTimeConnectedChanged() >= outer1_10;
            }
            obj[10] = tmp19;
            obj[11] = outer1_5;
            obj[12] = outer1_7;
            obj.dispatch(obj);
            let tmp23 = outer1_8;
            if (outer1_8 == null) {
              tmp23 = outer1_10;
            }
            const result = before(limit[55]).recordChannelFetchedNetwork(body, tmp23, tmp, tmp3, outer1_3, body);
          });
          return true;
        }, () => {
          outer1_49.log("Failed to fetch messages for " + channelId);
          let obj = before(limit[46]);
          obj = { type: "LOAD_MESSAGES_FAILURE", channelId };
          obj.dispatch(obj);
          return false;
        });
      }
    }
  },
  fetchLocalMessages(channelId, fetchKey, before, after, limit, arg5) {
    let closure_0 = channelId;
    let closure_1 = fetchKey;
    let closure_2 = before;
    let closure_3 = after;
    let ClickArea = limit;
    const callback = arg5;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === closure_2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c1 = tmp2;
              let basicChannel = num2;
              basicChannel = undefined;
              c1 = undefined;
              closure_2 = undefined;
              dependencyMap = undefined;
              basicChannel = outer1_17.getBasicChannel(outer1_0);
              const orCreate = outer1_1(4864).getOrCreate(outer1_0);
              const obj13 = outer1_1(4864);
              const databaseResult = outer1_1(1907).database();
              c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  if (null == c2) {
                    if (null == dependencyMap) {
                      if (orCreate.ready) {
                        if (!orCreate.cached) {
                          outer1_1(9).addLocalMessages(outer1_0, -2);
                          const obj8 = outer1_1(9);
                        }
                      }
                      closure_2 = 1;
                      dependencyMap = 1;
                      let obj1 = { value: null, done: false };
                      obj1[0] = outer1_0(1926).tryLoadAsync(() => outer2_1(table[60]).load(c1, basicChannel, outer1_4));
                      return obj1;
                    }
                    dependencyMap = 3;
                  }
                }
              }
              const obj14 = outer1_1(1907);
              outer1_1(9).addLocalMessages(outer1_0, -1);
              const obj7 = outer1_1(9);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            if (null == closure_2) {
              obj = outer1_1(9);
              obj.addLocalMessages(basicChannel, -3);
            }
          }
          const _HermesInternal = HermesInternal;
          outer1_49.log("fetched " + closure_2.messages.length + " messages from local database (channel_id: " + basicChannel + ", remote_fetch_completed: " + trackRoundtrip.completed + ")");
          obj1 = outer1_1(9);
          obj1.addLocalMessages(basicChannel, closure_2.messages.length);
          if (!trackRoundtrip.completed) {
            if (closure_2.messages.length > num2) {
              let tmp30 = closure_2.messages.length >= ClickArea;
              if (tmp30) {
                tmp30 = closure_2.connectionId === outer1_6.lastTimeConnectedChanged();
              }
              dependencyMap = tmp30;
              obj2 = outer1_1(5749);
              const result = obj2.recordChannelFetchedLocal(basicChannel, c1, closure_2, dependencyMap, ClickArea, closure_2.messages);
              let obj3 = outer1_1(709);
              obj3 = { type: "LOCAL_MESSAGES_LOADED", guildId: null, channelId: null, users: null, members: null, messages: null, stale: null };
              obj3[1] = basicChannel.guild_id;
              obj3[2] = basicChannel;
              obj3[3] = closure_2.users;
              obj3[4] = closure_2.members;
              obj3[5] = closure_2.messages;
              obj3[6] = !dependencyMap;
              obj3.dispatch(obj3);
            }
          }
        } catch (tmp64) {
          dependencyMap = tmp;
          throw tmp64;
        }
      }
    })();
  },
  fetchNewLocalMessages(channelId, closure_13) {
    let closure_0 = channelId;
    let closure_1 = closure_13;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === orCreate) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c1 = tmp2;
              let basicChannel = 0;
              basicChannel = undefined;
              c1 = undefined;
              orCreate = undefined;
              c3 = undefined;
              let id;
              let messages;
              basicChannel = outer1_17.getBasicChannel(outer1_0);
              const databaseResult = outer1_1(c3[58]).database();
              c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  let obj1 = outer1_1(c3[56]);
                  orCreate = obj1.getOrCreate(outer1_0);
                  if (!orCreate.hasMoreAfter) {
                    let obj2 = outer1_0(c3[59]);
                    orCreate = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj2.tryLoadAsync(() => outer2_1(5738).load(c1, basicChannel, c1));
                    return obj1;
                  }
                }
              }
              c3 = 3;
              const obj11 = outer1_1(c3[58]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = arg1;
            if (null != c3) {
              orCreate = outer1_1(c3[56]).getOrCreate(basicChannel);
              const lastResult = orCreate.last();
              id = undefined;
              if (lastResult != null) {
                id = lastResult.id;
              }
              if (null == id) {
                messages = c3.messages;
              } else {
                messages = c3.messages;
                messages = messages.filter((id) => outer2_1(11).compare(id.id, id) > 0);
              }
              const _HermesInternal = HermesInternal;
              outer1_49.log("Fetched " + c3.messages.length + " messages from the cache after foregrounding. " + messages.length + " are new");
              if (0 !== messages.length) {
                obj2 = { type: "LOCAL_MESSAGES_LOADED", guildId: null, channelId: null, users: null, members: null, messages: null, stale: true, isForegroundCacheLoad: null };
                obj2[1] = outer1_0.guild_id;
                obj2[2] = basicChannel;
                obj2[3] = c3.users;
                obj2[4] = c3.members;
                obj2[5] = outer1_5;
                const obj8 = outer1_1(c3[46]);
                obj2[7] = outer1_0(c3[61]).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj8.dispatch(obj2);
                const obj10 = outer1_0(c3[61]);
              }
              const obj7 = outer1_1(c3[56]);
            }
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp27) {
          c3 = tmp;
          throw tmp27;
        }
      }
    })();
  },
  _tryFetchMessagesCached(arg0) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    let truncate;
    ({ channelId, before, after, limit, jump, focus, truncate } = arg0);
    const messages = reinjectEphemerals.getMessages(channelId);
    if (!messages.cached) {
      if (messages.ready) {
        let messageId;
        if (jump != null) {
          messageId = jump.messageId;
        }
        if (null == messageId) {
          let messageId1;
          if (focus != null) {
            messageId1 = focus.messageId;
          }
          if (null == messageId1) {
            if (null != before) {
              if (messages.hasBeforeCached(before)) {
                let obj3 = importDefault(709);
                let obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, before: null, limit: null, truncate: null };
                obj[1] = channelId;
                obj[2] = before;
                obj[3] = limit;
                obj[4] = truncate;
                obj3.dispatch(obj);
                let flag = true;
              }
              return flag;
            }
            const tmp4 = null == after || !messages.hasAfterCached(after);
            flag = !tmp4;
            if (!tmp4) {
              let obj1 = importDefault(709);
              obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, after: null, limit: null, truncate: null };
              obj[1] = channelId;
              obj[2] = after;
              obj[3] = limit;
              obj[4] = truncate;
              obj1.dispatch(obj);
              flag = true;
            }
          }
        }
        let messageId2;
        if (jump != null) {
          messageId2 = jump.messageId;
        }
        if (null != messageId2) {
          if (messages.has(jump.messageId, false)) {
            obj1 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, jump: null, limit: null, truncate: null };
            obj1[1] = channelId;
            obj1[2] = jump;
            obj1[3] = limit;
            obj1[4] = truncate;
            importDefault(709).dispatch(obj1);
            return true;
          }
        }
        let messageId3;
        if (focus != null) {
          messageId3 = focus.messageId;
        }
        let tmp13 = jump;
        if (null != messageId3) {
          if (messages.has(focus.messageId, false)) {
            const obj2 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, focus: null, limit: null, truncate: null };
            obj2[1] = channelId;
            obj2[2] = focus;
            obj2[3] = limit;
            obj2[4] = truncate;
            importDefault(709).dispatch(obj2);
            return true;
          } else {
            obj3 = {};
            const merged = Object.assign(focus);
            tmp13 = obj3;
          }
        }
        let messageId4;
        if (tmp13 != null) {
          messageId4 = tmp13.messageId;
        }
        let num = 0;
        if (null != messageId4) {
          let messageId5;
          if (tmp13 != null) {
            messageId5 = tmp13.messageId;
          }
          num = importDefault(11).extractTimestamp(messageId5);
          const obj7 = importDefault(11);
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        const hasMoreBefore = messages.hasMoreBefore;
        let flag4 = !hasMoreBefore;
        if (!hasMoreBefore) {
          flag4 = null != firstResult;
        }
        if (flag4) {
          flag4 = importDefault(11).extractTimestamp(firstResult.id) >= num;
          const obj8 = importDefault(11);
        }
        if (!flag4) {
          const hasMoreAfter = messages.hasMoreAfter;
          let tmp25 = !hasMoreAfter;
          if (!hasMoreAfter) {
            tmp25 = null != lastResult;
          }
          if (tmp25) {
            tmp25 = importDefault(11).extractTimestamp(lastResult.id) <= num;
            const obj9 = importDefault(11);
          }
          flag4 = tmp25;
        }
        if (!flag4) {
          let tmp28 = null != firstResult && null != lastResult;
          if (tmp28) {
            tmp28 = importDefault(11).extractTimestamp(firstResult.id) < num;
            const obj10 = importDefault(11);
          }
          if (tmp28) {
            tmp28 = importDefault(11).extractTimestamp(lastResult.id) > num;
            const obj11 = importDefault(11);
          }
          flag4 = tmp28;
        }
        if (flag4) {
          const obj4 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, jump: null, limit: null };
          obj4[1] = channelId;
          obj4[2] = tmp13;
          obj4[3] = closure_34;
          importDefault(709).dispatch(obj4);
          flag4 = true;
          const obj12 = importDefault(709);
        }
        return flag4;
      }
    }
    return false;
  },
  sendMessage(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let closure_3 = arg3;
    return callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === nonce) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let closure_1 = tmp2;
              let closure_0;
              closure_1 = undefined;
              closure_2 = undefined;
              if (outer1_1.reaction) {
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = Promise.resolve();
                return obj1;
              } else {
                nonce = 1;
                c4 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = outer1_1(nonce[62])(outer1_0);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_0 = arg1;
            if (null != closure_0) {
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = outer1_55.sendMessage(outer1_0, outer1_1, outer1_2, nonce);
              return obj4;
            } else {
              nonce = nonce.nonce;
              closure_0 = nonce;
              if (nonce == null) {
                obj = outer1_0(nonce[49]);
                closure_0 = obj.createNonce();
              }
              closure_1 = closure_0;
              const obj5 = {};
              const merged = Object.assign(nonce);
              obj5.nonce = closure_1;
              nonce = obj5;
              obj2 = outer1_1(nonce[63]);
              closure_2 = obj2.backgroundify(function _trySend() {
                return outer1_55._sendMessage(closure_0, closure_1, c3);
              }, undefined);
              const result = outer1_9.recordMessageSendAttempt(outer1_0, closure_1, nonce);
              if (outer1_21.isReady(outer1_0)) {
                outer1_2();
              } else {
                if (outer1_2) {
                  if (outer1_0 !== outer1_0(nonce[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                    const _HermesInternal = HermesInternal;
                    outer1_50.info("Waiting for channel " + closure_0 + " to be ready before sending.");
                    new Promise((arg0, arg1) => {
                      let closure_0 = arg0;
                      let closure_1 = arg1;
                      outer2_21.whenReady(closure_0, () => {
                        outer3_50.info("Channel " + closure_0 + " is ready for sending now.");
                        outer1_2().then(closure_0, closure_1);
                      });
                    });
                  }
                }
                outer1_2();
              }
              c4 = 3;
            }
          }
        } catch (tmp57) {
          c4 = tmp;
          throw tmp57;
        }
      }
    })();
  },
  getSendMessageOptionsForReply(pendingReply) {
    if (null == pendingReply) {
      let obj = {};
    } else {
      const channel = pendingReply.channel;
      const guildId = channel.getGuildId();
      obj = { messageReference: null, allowedMentions: null, mediaMention: null };
      obj = { guild_id: null, channel_id: null, message_id: null };
      obj[0] = guildId;
      obj[1] = pendingReply.channel.id;
      obj[2] = pendingReply.message.id;
      obj[0] = obj;
      let tmp2;
      if (!pendingReply.shouldMention) {
        obj = { parse: null, replied_user: false };
        const _Object = Object;
        obj[0] = Object.values(closure_36);
        tmp2 = obj;
      }
      obj[1] = tmp2;
      obj[2] = pendingReply.mediaMention;
    }
    return obj;
  },
  getSendMessageOptionsForStickers(stickers) {
    stickers = stickers.stickers;
    if (null != stickers) {
      if (0 !== stickers.length) {
        if (!tmp) {
          let obj = { stickerIds: null };
          obj[0] = stickers;
        }
        return obj;
      }
    }
    obj = {};
  },
  getSendMessageOptionsForScheduledMessage(scheduledTimestamp) {
    scheduledTimestamp = scheduledTimestamp.scheduledTimestamp;
    if (null == scheduledTimestamp) {
      let obj = {};
    } else {
      obj = { scheduledTimestamp: null };
      obj[0] = scheduledTimestamp;
    }
    return obj;
  },
  getSendMessageOptionsForAlsoForwardToChannel(alsoForwardToChannelId) {
    return { alsoForwardToChannelId: alsoForwardToChannelId.alsoForwardToChannelId };
  },
  getSendMessageOptions(pendingReply) {
    let obj = {};
    const merged = Object.assign(obj14.getSendMessageOptionsForReply(pendingReply.pendingReply));
    obj = {};
    const merged1 = Object.assign(pendingReply);
    const merged2 = Object.assign(obj14.getSendMessageOptionsForStickers(obj));
    obj = {};
    const merged3 = Object.assign(pendingReply);
    const merged4 = Object.assign(obj14.getSendMessageOptionsForScheduledMessage(obj));
    const merged5 = Object.assign(pendingReply);
    const merged6 = Object.assign(obj14.getSendMessageOptionsForAlsoForwardToChannel({}));
    return obj;
  },
  sendInvite(c1, code, c3, c4, content) {
    const tmp = importDefault(6048)(code);
    content = tmp;
    if (null != content) {
      const _HermesInternal = HermesInternal;
      content = "" + content + "\n" + tmp;
    }
    return obj14._sendMessage(c1, { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, { location: c3, inviteAnalyticsMetadata: c4 });
  },
  sendActivityBookmark(arg0, content, location, inviteAnalyticsMetadata) {
    let obj = { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] };
    obj = { location, inviteAnalyticsMetadata };
    return obj14._sendMessage(arg0, obj, obj);
  },
  sendStickers(id, items1, result, arg3) {
    let str = result;
    if (result === undefined) {
      str = "";
    }
    let flag = arg4;
    if (arg4 === undefined) {
      flag = false;
    }
    if (typeof str === "y") {
      let obj = { content: null, invalidEmojis: null, validNonShortcutEmojis: null, tts: null };
      obj[0] = str;
      obj[1] = [];
      obj[2] = [];
      obj[3] = flag;
      let tmp = obj;
    } else {
      obj = {};
      const merged = Object.assign(str);
      let tts = str.tts;
      if (tts == null) {
        tts = flag;
      }
      obj.tts = tts;
      tmp = obj;
    }
    obj = {};
    const merged1 = Object.assign(arg3);
    obj.stickerIds = items1;
    return obj14._sendMessage(id, tmp, obj);
  },
  sendGreetMessage(id, outer1_14, sendMessageOptionsForReply) {
    let allowedMentions;
    let messageReference;
    const _require = id;
    let closure_1 = outer1_14;
    let obj = sendMessageOptionsForReply;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = _require(530).HTTP;
    obj = { url: closure_28.MESSAGES_GREET(id), body: { sticker_ids: items, allowed_mentions: allowedMentions, message_reference: messageReference }, oldFormErrors: true, rejectWithError: null, context: null };
    items = [outer1_14];
    obj[3] = _require(530).rejectWithMigratedError();
    obj = { location: constants10.GREET };
    obj[4] = obj;
    const obj3 = _require(530);
    return HTTP.post(obj).then((body) => {
      outer1_14(outer1_3[65]).donateSentMessage(body.body.content, closure_0);
      outer1_55.receiveMessage(closure_0, body.body);
      const obj = outer1_14(outer1_3[65]);
      const items = [outer1_14];
      outer1_14(outer1_3[46]).dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: items });
      return body;
    }, (messageId) => {
      outer1_49.log("Failed to send greeting");
      if (429 !== messageId.status) {
        outer1_55.sendClydeError(closure_0, messageId.body.code);
      }
      let obj = outer1_14(outer1_3[46]);
      obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId: closure_0 };
      obj.dispatch(obj);
      throw messageId;
    });
  },
  sendPollMessage(id, poll, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.poll = poll;
    obj.location = constants10.POLL_CREATION;
    return obj14._sendMessage(id, { content: "", tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, obj);
  },
  validateMessage(invalidEmojis, currentUser, throwTypeErrorResult) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let obj = importDefault(3839);
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = require(1236) /* getSystemLocale */.intl;
        let stringResult = intl.string(require(1236) /* getSystemLocale */.t["V5/GgC"]);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      obj = { errorMessage: null, errorMessageName: null };
      obj[0] = stringResult;
      obj[1] = str;
      return obj;
    }
    const intl2 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1236) /* getSystemLocale */.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(function*() {
      let _location;
      let activity;
      let activityAction;
      let allowedMentions;
      let announcementSendOptions;
      let attachments;
      let attachmentsToUpload;
      let c3;
      let c9;
      let closure_1;
      let contentInventoryEntry;
      let flags;
      let invalidEmojis;
      let mediaMention;
      let poll;
      let publish;
      let sharedCustomTheme;
      let stickerIds;
      let tts;
      let withCheckpoint;
      if (c8 === 2) {
        c8 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                stickerIds = tmp3;
                c3 = tmp5;
                let c0;
                closure_1 = undefined;
                let c2;
                c3 = undefined;
                stickerIds = undefined;
                let messageReference;
                let c6;
                c7 = undefined;
                c8 = undefined;
                c9 = undefined;
                let c10;
                let c11;
                let DEFAULT;
                let closure_13;
                let loadSavedGuildStickers;
                let uploader;
                let obj4;
                let ensureGuildLoaded;
                attachments = undefined;
                let c19;
                let c20;
                let c21;
                let c22;
                let c23;
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = outer1_3;
                throwTypeErrorResult = outer1_0;
                const promise = outer1_1(outer1_3[62])(outer1_0);
                if (null != promise) {
                  throwTypeErrorResult = outer1_50;
                  throwTypeErrorResult = outer1_50.info("Converting channel to a private channel");
                  c8 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = promise.then((arg0) => {
                    outer1_50.info("Finished converting channel to a private channel");
                    return outer1_55._sendMessage(arg0, closure_1, c2);
                  });
                  return obj1;
                } else {
                  throwTypeErrorResult = outer1_1;
                  const content = outer1_1.content;
                  c0 = content;
                  ({ invalidEmojis, validNonShortcutEmojis: closure_1, tts } = outer1_1);
                  let tmp40 = undefined !== tts;
                  if (tmp40) {
                    tmp40 = tts;
                  }
                  ({ activityAction, location: _location } = outer1_2);
                  c2 = _location;
                  ({ inviteAnalyticsMetadata: c3, stickerIds } = outer1_2);
                  messageReference = outer1_2.messageReference;
                  ({ allowedMentions, poll } = outer1_2);
                  c6 = poll;
                  ({ sharedCustomTheme, contentInventoryEntry } = outer1_2);
                  c7 = contentInventoryEntry;
                  ({ attachments, attachmentsToUpload } = outer1_2);
                  c8 = attachmentsToUpload;
                  ({ onAttachmentUploadError: c9, announcementSendOptions, withCheckpoint, mediaMention, flags } = outer1_2);
                  c0 = flags;
                  if (flags == null) {
                    c0 = 0;
                  }
                  const tmp45 = outer1_4(throwTypeErrorResult(outer1_3[67])(content), 2);
                  let addFlagResult = c0;
                  let tmp48 = content;
                  if (tmp45[0]) {
                    c0 = tmp46;
                    obj4 = outer1_0(outer1_3[68]);
                    addFlagResult = obj4.addFlag(tmp42, outer1_33.SUPPRESS_NOTIFICATIONS);
                    tmp48 = tmp46;
                  }
                  let channel = outer1_17.getChannel(throwTypeErrorResult);
                  let guild_id;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  const guild = outer1_19.getGuild(guild_id);
                  let obj5 = outer1_0(outer1_3[69]);
                  let addFlagResult1 = addFlagResult;
                  if (obj5.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
                    let obj6 = outer1_0(outer1_3[68]);
                    addFlagResult1 = obj6.addFlag(addFlagResult, outer1_33.IS_GUILD_OFFICIAL);
                  }
                  c10 = false;
                  const messageReference2 = tmp41.messageReference;
                  let type;
                  if (messageReference2 != null) {
                    type = messageReference2.type;
                  }
                  c11 = tmp65;
                  if ("" === tmp48) {
                    if (null == activityAction) {
                      if (null == stickerIds) {
                        if (null == poll) {
                          if (null == sharedCustomTheme) {
                            if (null == contentInventoryEntry) {
                              if (!tmp65) {
                                if (null == attachments) {
                                  if (!withCheckpoint) {
                                    if (null == throwTypeErrorResult.components) {
                                      if (null != attachmentsToUpload) {
                                        if (attachmentsToUpload.length > 0) {
                                          c10 = true;
                                        }
                                      }
                                      c8 = 3;
                                      let obj2 = { value: null, done: true };
                                      obj2[0] = Promise.resolve();
                                      return obj2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (null != messageReference) {
                    DEFAULT = outer1_35.REPLY;
                  } else {
                    DEFAULT = outer1_35.DEFAULT;
                  }
                  const nonce = tmp41.nonce;
                  closure_1 = nonce;
                  if (nonce == null) {
                    let obj8 = outer1_0(outer1_3[49]);
                    closure_1 = obj8.createNonce();
                  }
                  closure_13 = closure_1;
                  loadSavedGuildStickers = closure_1;
                  let obj3 = { channelId: null, content: null, tts: null, type: null, messageReference: null, allowedMentions: null, flags: null, nonce: null, poll: null, sharedCustomTheme: null, mediaMention: null, mentionGames: null };
                  obj3[0] = throwTypeErrorResult;
                  obj3[1] = tmp48;
                  obj3[2] = tmp40;
                  obj3[3] = DEFAULT;
                  obj3[4] = messageReference;
                  obj3[5] = allowedMentions;
                  let tmp73;
                  if (0 !== addFlagResult1) {
                    tmp73 = addFlagResult1;
                  }
                  obj3[6] = tmp73;
                  obj3[7] = closure_1;
                  let obj10 = outer1_0(outer1_3[70]);
                  obj3[8] = obj10.createPollServerDataFromCreateRequest(poll);
                  obj3[9] = sharedCustomTheme;
                  obj3[10] = mediaMention;
                  obj3[11] = throwTypeErrorResult.mentionGames;
                  const tmpResultResult = throwTypeErrorResult(outer1_3[47])(obj3);
                  if (false !== outer1_2.eagerDispatch) {
                    let result = outer1_0(outer1_3[71]).updateComboOnMessageSend(throwTypeErrorResult, tmpResultResult.id);
                    if (null != stickerIds) {
                      const mapped = stickerIds.map((arg0) => stickerById.getStickerById(arg0));
                      tmpResultResult.sticker_items = mapped.filter((arg0) => null != arg0);
                    }
                    outer1_55.receiveMessage(throwTypeErrorResult, tmpResultResult, true, tmp41);
                    let obj12 = outer1_0(outer1_3[71]);
                  }
                  if (!outer1_51) {
                    if (null != invalidEmojis) {
                      if (invalidEmojis.length > 0) {
                        outer1_51 = true;
                        const validateMessageResult = outer1_55.validateMessage(invalidEmojis, outer1_25.getCurrentUser(), throwTypeErrorResult);
                        outer1_55.sendBotMessage(throwTypeErrorResult, validateMessageResult.errorMessage, validateMessageResult.errorMessageName);
                      }
                    }
                  }
                  if (null != announcementSendOptions) {
                    let SEND = outer1_0(outer1_3[72]).MessageDataType.SEND_ANNOUNCEMENT;
                  } else {
                    SEND = outer1_0(outer1_3[72]).MessageDataType.SEND;
                  }
                  obj4 = { type: null, message: null };
                  obj4[0] = SEND;
                  obj5 = { channelId: null, content: null, nonce: null, tts: null, message_reference: null, allowed_mentions: null, flags: null, analyticsLocation: null };
                  obj5[0] = throwTypeErrorResult;
                  obj5[1] = tmp48;
                  obj5[2] = closure_1;
                  obj5[3] = tmp40;
                  obj5[4] = messageReference;
                  obj5[5] = allowedMentions;
                  obj5[6] = addFlagResult1;
                  obj5[7] = _location;
                  obj4[1] = obj5;
                  if (null != throwTypeErrorResult.components) {
                    obj4.message.components = throwTypeErrorResult.components;
                  }
                  if (null != announcementSendOptions) {
                    ({ createThread: obj13.message.create_thread, threadName: obj13.message.title, publish } = announcementSendOptions);
                    c2 = publish;
                    if (publish == null) {
                      c2 = false;
                    }
                    obj4.message.publish = c2;
                  }
                  if (null != activityAction) {
                    let session_id;
                    if (activityAction != null) {
                      session_id = activityAction.activity.session_id;
                    }
                    let sessionId = session_id;
                    if (activityAction.type !== outer1_43.JOIN_REQUEST) {
                      sessionId = session_id;
                      if (activityAction.type !== tmp97.STREAM_REQUEST) {
                        sessionId = session_id;
                        if (null == session_id) {
                          sessionId = outer1_16.getSessionId();
                        }
                      }
                    }
                    if (null != sessionId) {
                      obj6 = { type: null, session_id: null, target_user_id: null };
                      obj6[0] = activityAction.type;
                      obj6[1] = sessionId;
                      ({ targetUserId: obj15[2], activity } = activityAction);
                      throwTypeErrorResult = null != activity.party;
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = null != activity.party.id;
                      }
                      if (throwTypeErrorResult) {
                        obj6.party_id = activity.party.id;
                      }
                      obj4.message.application_id = activity.application_id;
                      obj4.message.activity = obj6;
                    }
                  }
                  if (null != poll) {
                    obj4.message.poll = poll;
                  }
                  if (null != sharedCustomTheme) {
                    obj4.message.shared_client_theme = sharedCustomTheme;
                  }
                  if (null != stickerIds) {
                    obj4.message.sticker_ids = stickerIds;
                  }
                  throwTypeErrorResult = outer1_10;
                  if (outer1_10.isEnabled()) {
                    obj4.message.has_poggermode_enabled = true;
                  }
                  if (withCheckpoint) {
                    obj4.message.with_checkpoint = true;
                  }
                  if (null != contentInventoryEntry) {
                    obj4.message.content_inventory_entry = contentInventoryEntry;
                  }
                  if (null != mediaMention) {
                    obj4.message.media_mention = mediaMention;
                  }
                  throwTypeErrorResult = null != attachments;
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = attachments.length > 0;
                  }
                  if (throwTypeErrorResult) {
                    obj4.message.attachments = attachments;
                  }
                  if (null != attachmentsToUpload) {
                    if (attachmentsToUpload.length > 0) {
                      c6 = 1;
                      throwTypeErrorResult = outer1_0;
                      throwTypeErrorResult = outer1_3;
                      let obj7 = { channelId: null, nonce: null, items: null, message: null, shouldUploadFailureSendNotification: null };
                      obj7[0] = throwTypeErrorResult;
                      obj7[1] = tmp70;
                      obj7[2] = attachmentsToUpload;
                      obj7[3] = tmpResultResult;
                      const doNotNotifyOnError = tmp41.doNotNotifyOnError;
                      throwTypeErrorResult = !doNotNotifyOnError;
                      obj7[4] = throwTypeErrorResult;
                      c7 = 2;
                      c8 = 1;
                      obj8 = { value: null, done: false };
                      obj8[0] = outer1_0(outer1_3[73]).uploadMessageAttachments(obj7);
                      return obj8;
                    }
                  }
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new Promise((arg0, arg1) => {
                    let closure_0 = arg0;
                    let closure_1 = arg1;
                    let closure_2 = Date.now();
                    outer2_1(outer2_3[72]).length;
                    const rounded = Math.floor(10000 * Math.random());
                    outer2_50.info("Queueing message to be sent LogId:" + rounded);
                    outer2_1(outer2_3[72]).enqueue(obj4, (ok) => {
                      let applicationStatus;
                      let attachments;
                      let body;
                      let content;
                      let guildId;
                      let id;
                      let message;
                      let overrideProperties;
                      let userId;
                      message = ok;
                      if (ok.ok) {
                        let obj14 = outer3_1(outer3_3[65]);
                        obj14.donateSentMessage(closure_0, c0);
                        let obj = { sendAnalytics: null, poll: null };
                        obj = { duration: null, queueSize: null };
                        obj[0] = message;
                        obj[1] = message;
                        obj[0] = obj;
                        obj[1] = outer1_6;
                        outer3_55.receiveMessage(c0, ok.body, true, obj);
                        if (null != c2.alsoForwardToChannelId) {
                          let obj17 = outer3_1(outer3_3[75]);
                          let obj19 = outer3_0(outer3_3[52]);
                          const sendForwardResult = obj17.sendForward(outer3_0(outer3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId);
                          obj17.sendForward(outer3_0(outer3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId).then(() => {
                            const body = message.body;
                            let id;
                            if (body != null) {
                              id = body.id;
                            }
                            const body2 = tmp.body;
                            let guild_id;
                            if (body2 != null) {
                              guild_id = body2.guild_id;
                            }
                            const body3 = tmp.body;
                            let channel_id;
                            if (body3 != null) {
                              channel_id = body3.channel_id;
                            }
                            outer4_1(outer4_3[37]).track(outer4_27.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                          }).catch((arg0) => {
                            const body = message.body;
                            let id;
                            const combined = "Failed to forward thread message to parent channel LogId:" + ClickArea;
                            if (body != null) {
                              id = body.id;
                            }
                            outer4_49.log(combined, { referencedMessageId: id, channelId: c0, destinationChannelId: attachments.alsoForwardToChannelId, error: arg0.toString() });
                          });
                          const nextPromise = obj17.sendForward(outer3_0(outer3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId).then(() => {
                            const body = message.body;
                            let id;
                            if (body != null) {
                              id = body.id;
                            }
                            const body2 = tmp.body;
                            let guild_id;
                            if (body2 != null) {
                              guild_id = body2.guild_id;
                            }
                            const body3 = tmp.body;
                            let channel_id;
                            if (body3 != null) {
                              channel_id = body3.channel_id;
                            }
                            outer4_1(outer4_3[37]).track(outer4_27.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                          });
                        }
                        request = request.getRequest(outer3_1(outer3_3[57]).cast(c0));
                        if (null != request) {
                          ({ guildId, userId, applicationStatus } = request);
                          let obj1 = { guildId: null, channelId: null, messageId: null, joinRequestStatus: null, joinRequestUserId: null };
                          obj1[0] = guildId;
                          obj1[1] = c0;
                          obj1[2] = ok.body.id;
                          obj1[3] = applicationStatus;
                          obj1[4] = userId;
                          let result = outer3_0(outer3_3[76]).trackMemberApplicationInterviewMessage(obj1);
                          const obj21 = outer3_0(outer3_3[76]);
                        }
                        let result1 = outer3_9.recordMessageSendApiResponse(outer1_13);
                        if (outer1_12 === outer3_35.REPLY) {
                          id = ok.body.id;
                          message = c0;
                          if (outer1_5 != null) {
                            const message_id = outer1_5.message_id;
                          }
                          const pendingReplyActionSource = outer3_11.getPendingReplyActionSource(message);
                          if ("message_swipe" === pendingReplyActionSource) {
                            message = null;
                            if (null != message_id) {
                              message = outer3_21;
                              message = outer3_21.getMessage(message, message_id);
                            }
                            message = outer3_17;
                            message = outer3_17.getChannel(message);
                            message = outer3_25;
                            message = outer3_25.getCurrentUser();
                            message = outer3_1;
                            message = outer3_3;
                            message = outer3_27;
                            let obj2 = { message_id: null, channel_id: null, guild_id: null, swipe_action: "reply", is_own_message: null };
                            obj2[0] = id;
                            obj2[1] = message;
                            message = undefined;
                            if (message != null) {
                              message = message.guild_id;
                            }
                            obj2[2] = message;
                            message = null != message;
                            if (message) {
                              message = undefined;
                              if (message != null) {
                                message = message.author.id;
                              }
                              message = message.id === message;
                            }
                            obj2[4] = message;
                            message = outer3_1(outer3_3[37]).track(outer3_27.MESSAGE_SWIPE_ACTION_SENT, obj2);
                            const obj25 = outer3_1(outer3_3[37]);
                          } else if ("message_shortcut" === pendingReplyActionSource) {
                            message = outer3_17;
                            message = outer3_17.getChannel(message);
                            message = outer3_1;
                            message = outer3_3;
                            message = outer3_27;
                            let obj3 = { message_id: null, channel_id: null, guild_id: null, original_message_id: null, action: "reply" };
                            obj3[0] = id;
                            obj3[1] = message;
                            message = undefined;
                            if (message != null) {
                              message = message.guild_id;
                            }
                            obj3[2] = message;
                            obj3[3] = message_id;
                            message = outer3_0;
                            message = outer3_3;
                            const obj41 = outer3_1(outer3_3[37]);
                            message = undefined;
                            if (message != null) {
                              message = message.guild_id;
                            }
                            message = obj3;
                            message = Object.assign(outer3_0(outer3_3[33]).collectGuildAnalyticsMetadata(message));
                            message = outer3_0;
                            message = outer3_3;
                            const obj23 = outer3_0(outer3_3[33]);
                            message = obj3;
                            message = Object.assign(outer3_0(outer3_3[33]).collectChannelAnalyticsMetadata(message));
                            message = obj41.track(outer3_27.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
                            const obj24 = outer3_0(outer3_3[33]);
                          }
                        }
                        message = outer3_1;
                        message = outer3_3;
                        const obj20 = outer3_1(outer3_3[57]);
                        let obj4 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: null, channelId: null };
                        message = outer3_24;
                        obj4[1] = outer3_24.SendMessage;
                        message = c0;
                        obj4[2] = c0;
                        message = outer3_1(outer3_3[46]).dispatch(obj4);
                        message = outer3_1;
                        message = outer3_3;
                        const obj27 = outer3_1(outer3_3[46]);
                        let obj5 = { type: "EMOJI_TRACK_USAGE", emojiUsed: null };
                        message = closure_1;
                        obj5[1] = closure_1;
                        message = outer3_1(outer3_3[46]).dispatch(obj5);
                        message = outer3_1;
                        message = outer3_3;
                        const obj29 = outer3_1(outer3_3[46]);
                        const obj6 = { type: "STICKER_TRACK_USAGE", stickerIds: null };
                        message = rounded;
                        obj6[1] = rounded;
                        message = outer3_1(outer3_3[46]).dispatch(obj6);
                        message = outer3_1;
                        message = outer3_3;
                        const obj31 = outer3_1(outer3_3[46]);
                        let obj7 = { type: "LOCAL_MESSAGE_CREATE", message: null };
                        const obj8 = { channel_id: null, author: null };
                        message = c0;
                        obj8[0] = c0;
                        message = outer3_25;
                        obj8[1] = outer3_25.getCurrentUser();
                        obj7[1] = obj8;
                        message = outer3_1(outer3_3[46]).dispatch(obj7);
                        let obj9 = { content: null, channelId: null, messageId: null, location: null, inviteAnalyticsMetadata: null };
                        obj9[0] = closure_0;
                        message = c0;
                        obj9[1] = c0;
                        obj9[2] = ok.body.id;
                        let str4 = closure_2;
                        let str5 = closure_2;
                        if (closure_2 == null) {
                          str5 = "chat_input";
                        }
                        obj9[3] = str5;
                        message = length;
                        obj9[4] = length;
                        ({ channelId: message, messageId: id, location: attachments, inviteAnalyticsMetadata: message, overrideProperties, content } = obj9);
                        if (overrideProperties === undefined) {
                          overrideProperties = {};
                        }
                        let messageByReference = overrideProperties;
                        let id2;
                        message = outer3_16;
                        id2 = outer3_16.getId();
                        message = outer3_1;
                        message = outer3_3;
                        const obj33 = outer3_1(outer3_3[46]);
                        message = outer3_1(outer3_3[28])(content).forEach((url) => {
                          let applicationId;
                          let code;
                          let type;
                          let type2;
                          ({ type, code } = url);
                          let obj = message(message[29]);
                          if (obj.isApplicationCodedLink(type)) {
                            let tmpResult = tmp(tmp2[29]);
                            const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url.url);
                            if (null != applicationCodedLinkData) {
                              ({ applicationId, type: type2 } = applicationCodedLinkData);
                              if (tmp(tmp2[30]).CodedLinkType.APP_DIRECTORY_PROFILE === type2) {
                                tmpResult = tmp(tmp2[31]);
                                const result = tmpResult.trackAppDirectoryProfileEmbed(applicationId);
                                const result1 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, outer1_44.APP_DISCOVERY, trackRoundtrip);
                                const tmpResult1 = tmp(tmp2[32]);
                              } else if (tmp(tmp2[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT === type2) {
                                const result2 = tmp(tmp2[31]).trackAppDirectoryProfileEmbed(applicationId, "storefront");
                                const tmpResult2 = tmp(tmp2[31]);
                              } else if (tmp(tmp2[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type2) {
                                const result3 = tmp(tmp2[31]).trackAppDirectoryProfileEmbed(applicationId, "storefront_sku");
                                const tmpResult3 = tmp(tmp2[31]);
                              } else if (tmp(tmp2[30]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                                const params = applicationCodedLinkData.params;
                                const tmpResult4 = tmp(tmp2[32]);
                                const ACTIVITY = outer1_44.ACTIVITY;
                                let referrerId = params.referrerId;
                                if (referrerId == null) {
                                  referrerId = trackRoundtrip;
                                }
                                const result4 = tmpResult4.trackAppEmbedLinkSent(applicationId, ACTIVITY, referrerId, params.customId);
                              } else if (tmp(tmp2[30]).CodedLinkType.APP_OAUTH2_LINK === type2) {
                                const result5 = tmp(tmp2[32]).trackAppEmbedLinkSent(applicationId, outer1_44.OAUTH, trackRoundtrip);
                                const tmpResult5 = tmp(tmp2[32]);
                                obj = { application_id: null };
                                obj[0] = applicationId;
                                id(tmp2[33]).trackWithMetadata(outer1_27.APP_OAUTH2_LINK_EMBED_URL_SENT, obj);
                                const obj19 = id(tmp2[33]);
                              }
                            }
                          } else if (tmp(tmp2[30]).CodedLinkType.INVITE === type) {
                            obj = { inviteKey: null, channelId: null, messageId: null, location: null, inviteAnalyticsMetadata: null, overrideProperties: null };
                            obj[0] = code;
                            obj[1] = message;
                            obj[2] = id;
                            obj[3] = attachments;
                            obj[4] = message;
                            obj[5] = ClickArea;
                            outer1_53(obj);
                          } else if (tmp(tmp2[30]).CodedLinkType.TEMPLATE === type) {
                            const guildTemplate = outer1_8.getGuildTemplate(code);
                            if (null != guildTemplate) {
                              if (guildTemplate.state !== outer1_45.RESOLVING) {
                                let obj1 = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
                                obj1[0] = code;
                                ({ name: obj10[1], description: obj10[2], sourceGuildId: obj10[3] } = guildTemplate);
                                id(tmp2[33]).trackWithMetadata(outer1_27.GUILD_TEMPLATE_LINK_SENT, obj1);
                                const obj9 = id(tmp2[33]);
                              }
                            }
                          } else if (tmp(tmp2[30]).CodedLinkType.BUILD_OVERRIDE !== type) {
                            if (tmp(tmp2[30]).CodedLinkType.EXPERIMENT !== type) {
                              if (tmp(tmp2[30]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
                                if (tmp(tmp2[30]).CodedLinkType.EVENT !== type) {
                                  if (tmp(tmp2[30]).CodedLinkType.CHANNEL_LINK !== type) {
                                    if (tmp(tmp2[30]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                                      const result6 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, outer1_44.ACTIVITY_INVITE, trackRoundtrip);
                                      const tmpResult6 = tmp(tmp2[32]);
                                    } else if (tmp(tmp2[30]).CodedLinkType.GUILD_PRODUCT !== type) {
                                      if (tmp(tmp2[30]).CodedLinkType.SERVER_SHOP !== type) {
                                        if (tmp(tmp2[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                          if (tmp(tmp2[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                            if (tmp(tmp2[30]).CodedLinkType.QUESTS_EMBED === type) {
                                              const adMetadataSealed = tmp(tmp2[34]).getAdMetadataSealed(tmp(tmp2[35]).QuestContent.QUESTS_EMBED);
                                              const tmpResult7 = tmp(tmp2[34]);
                                              const obj2 = { questId: null, event: null, properties: null, trackGuildAndChannelMetadata: true, sourceQuestContent: null };
                                              obj2[0] = code;
                                              obj2[1] = outer1_27.QUEST_LINK_SHARED;
                                              let tmp8 = null;
                                              if (null != adMetadataSealed) {
                                                tmp8 = adMetadataSealed;
                                              }
                                              const obj3 = { metadata_sealed: null };
                                              obj3[0] = tmp8;
                                              obj2[2] = obj3;
                                              obj2[4] = tmp(tmp2[35]).QuestContent.QUESTS_EMBED;
                                              tmp(tmp2[36]).trackQuestEvent(obj2);
                                              const tmpResult8 = tmp(tmp2[36]);
                                            } else if (tmp(tmp2[30]).CodedLinkType.GAME_PROFILE === type) {
                                              obj1 = id(tmp2[37]);
                                              const obj4 = { game_id: null };
                                              obj4[0] = code;
                                              obj1.track(outer1_27.GAME_PROFILE_LINK_EMBED_SENT, obj4);
                                            } else if (tmp(tmp2[30]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                              if (tmp(tmp2[30]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        });
                        let str6 = str4;
                        message = c0;
                        if (str4 == null) {
                          str6 = "chat_input";
                        }
                        message = c2;
                        id = ok.body.id;
                        attachments = str6;
                        message = c2.isGiftLinkSentOnBehalfOfUser;
                        message = outer3_0;
                        message = outer3_3;
                        const arr2 = outer3_1(outer3_3[28])(content);
                        const obj37 = outer3_0(outer3_3[41]);
                        message = outer3_0(outer3_3[41]).findGiftCodes(closure_0).forEach((arg0) => {
                          const channel = outer1_17.getChannel(message);
                          if (null != channel) {
                            const obj = { location: null, gift_code: null, guild_id: null, channel_id: null, channel_type: null, message_id: null, automatic_send: null };
                            obj[0] = attachments;
                            obj[1] = arg0;
                            obj[2] = channel.getGuildId();
                            ({ id: obj3[3], type: obj3[4] } = channel);
                            obj[5] = id;
                            obj[6] = message;
                            id(message[33]).trackWithMetadata(outer1_27.GIFT_CODE_SENT, obj);
                            const obj2 = id(message[33]);
                          }
                        });
                        message = c2;
                        if (null != c2.gifMetadata) {
                          message = c2;
                          message = c0;
                          if (str4 == null) {
                            str4 = "chat_input";
                          }
                          message = outer3_17;
                          let channel = outer3_17.getChannel(message);
                          if (null != channel) {
                            message = outer3_1;
                            message = outer3_3;
                            message = outer3_27;
                            const obj10 = { location: null, message_id: null, gif_provider: null, load_id: null, source_object: null, gif_url: null, gif_id: null };
                            obj10[0] = str4;
                            obj10[1] = ok.body.id;
                            ({ gif_provider: obj44[2], load_id: obj44[3], source_object: obj44[4], gif_url: obj44[5], gif_id: obj44[6] } = c2.gifMetadata);
                            message = outer3_0;
                            message = outer3_3;
                            const obj43 = outer3_1(outer3_3[37]);
                            message = obj10;
                            message = Object.assign(outer3_0(outer3_3[33]).collectGuildAnalyticsMetadata(channel.getGuildId()));
                            message = outer3_0;
                            message = outer3_3;
                            const obj45 = outer3_0(outer3_3[33]);
                            message = obj10;
                            message = Object.assign(outer3_0(outer3_3[33]).collectChannelAnalyticsMetadata(channel));
                            message = obj43.track(outer3_27.MESSAGE_SENT_WITH_GIF, obj10);
                            const obj46 = outer3_0(outer3_3[33]);
                          }
                        }
                        message = c0;
                        attachments = ok.body.attachments;
                        if (attachments == null) {
                          attachments = [];
                        }
                        let items = outer1_8;
                        if (outer1_8 == null) {
                          items = [];
                        }
                        id = ok.body.id;
                        if (attachments.length === items.length) {
                          message = outer3_17;
                          message = outer3_17.getChannel(message);
                          if (null != message) {
                            message = outer3_12;
                            messageByReference = outer3_12.getMessageByReference(message);
                            message = items.forEach((clip) => {
                              clip = clip.clip;
                              if (null != clip) {
                                let someResult = ClickArea.state === outer1_13.LOADED;
                                if (someResult) {
                                  const attachments = ClickArea.message.attachments;
                                  someResult = attachments.some(() => { ... });
                                }
                                let obj = id(message[37]);
                                obj = {};
                                const merged = Object.assign(attachments(message[42]).getClipBaseProperties(clip));
                                const obj3 = attachments(message[42]);
                                const merged1 = Object.assign(attachments(message[42]).getClipContextProperties("trackClipsShared"));
                                obj.channel_id = clip;
                                obj.guild_id = message.getGuildId();
                                obj.channel_type = message.type;
                                ({ applicationId: obj2.application_id, id: obj2.clip_uuid, remoteClipId: obj2.remote_clip_id } = clip);
                                obj.message_id = id;
                                obj.attachment_id = attachments[arg1].id;
                                obj.is_distributed_clip_reply = someResult;
                                obj.track(outer1_27.CLIP_SHARED, obj);
                                const obj4 = attachments(message[42]);
                              }
                            });
                          }
                        }
                        message = outer1_15;
                        if (null != outer1_15) {
                          message = outer3_1;
                          message = outer3_3;
                          let obj11 = { type: "UPLOAD_COMPLETE", channelId: null, file: null, aborted: false };
                          message = c0;
                          obj11[1] = c0;
                          message = outer1_15;
                          obj11[2] = outer1_15._file;
                          message = outer3_1(outer3_3[46]).dispatch(obj11);
                          const obj39 = outer3_1(outer3_3[46]);
                        }
                        message = message(ok);
                        const findGiftCodesResult = outer3_0(outer3_3[41]).findGiftCodes(closure_0);
                      } else {
                        obj = { hasErr: null, status: null, code: null, error: null };
                        ({ hasErr: obj[0], status: obj[1], body } = ok);
                        let code;
                        if (body != null) {
                          code = body.code;
                        }
                        obj[2] = code;
                        obj[3] = ok.err;
                        outer3_49.log("Failed to send message", obj);
                        if (ok.hasErr) {
                          let flag = false;
                          if ("ABORTED" === ok.err.code) {
                            flag = true;
                          }
                        } else {
                          flag = false;
                          if (ok.status >= 400) {
                            flag = false;
                            if (ok.status < 500) {
                              flag = false;
                              if (ok.body) {
                                if (ok.body.code === outer3_26.SLOWMODE_RATE_LIMITED) {
                                  const retry_after = ok.body.retry_after;
                                  let tmp21 = null != retry_after;
                                  if (tmp21) {
                                    tmp21 = retry_after > 0;
                                  }
                                  flag = false;
                                  if (tmp21) {
                                    obj5 = outer3_1(outer3_3[46]);
                                    const obj12 = { type: "SLOWMODE_SET_COOLDOWN", channelId: null, slowmodeType: null, cooldownMs: null };
                                    obj12[1] = c0;
                                    obj12[2] = outer3_24.SendMessage;
                                    obj12[3] = retry_after * outer3_1(outer3_3[77]).Millis.SECOND;
                                    obj5.dispatch(obj12);
                                    flag = false;
                                  }
                                } else {
                                  message = outer3_0;
                                  message = outer3_3;
                                  const AUTOMOD_ERROR_CODES = outer3_0(outer3_3[78]).AUTOMOD_ERROR_CODES;
                                  if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                                    obj2 = outer3_1(outer3_3[46]);
                                    let obj13 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData: null, errorResponseBody: null };
                                    obj13[1] = outer1_16;
                                    obj14 = { code: null, message: null };
                                    obj14[0] = ok.body.code;
                                    obj14[1] = ok.body.message;
                                    obj13[2] = obj14;
                                    obj2.dispatch(obj13);
                                    flag = false;
                                  } else if (ok.body.code === tmp6.POGGERMODE_TEMPORARILY_DISABLED) {
                                    obj1 = outer3_1(outer3_3[46]);
                                    obj1.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" });
                                    flag = false;
                                  } else if (ok.body.code === tmp6.EXPLICIT_CONTENT) {
                                    const EXPLICIT_CONTENT = outer3_46.EXPLICIT_CONTENT;
                                    flag = false;
                                  } else {
                                    let tmp8 = null != outer1_6 || outer1_11;
                                    if (!tmp8) {
                                      tmp8 = null != outer1_7;
                                    }
                                    flag = false;
                                    if (!tmp8) {
                                      outer3_55.sendClydeError(c0, ok.body.code);
                                      flag = false;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (flag) {
                          outer3_55.deleteMessage(c0, outer1_14, true);
                        } else {
                          if (null != outer1_15) {
                            obj7 = outer3_1(outer3_3[46]);
                            const obj15 = { type: "UPLOAD_FAIL", channelId: null, file: null, messageId: null, reason: null, noSendFailed: true };
                            obj15[1] = c0;
                            obj15[2] = outer1_15._file;
                            obj15[3] = outer1_14;
                            obj15[4] = EXPLICIT_CONTENT;
                            obj7.dispatch(obj15);
                          }
                          let hasErr = ok.hasErr;
                          if (!hasErr) {
                            hasErr = EXPLICIT_CONTENT !== outer3_46.EXPLICIT_CONTENT;
                          }
                          if (!hasErr) {
                            let body2 = ok.body;
                            let attachments1;
                            if (body2 != null) {
                              attachments1 = body2.attachments;
                            }
                            let result2 = outer3_55.sendExplicitMediaClydeError(c0, attachments1, outer3_0(outer3_3[50]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                            const tmp38 = c0;
                          }
                          obj9 = outer3_1(outer3_3[46]);
                          const obj16 = { type: "MESSAGE_SEND_FAILED", messageId: null, channelId: null, shouldNotify: null, reason: null };
                          obj16[1] = outer1_14;
                          obj16[2] = c0;
                          obj16[3] = !c2.doNotNotifyOnError;
                          obj16[4] = EXPLICIT_CONTENT;
                          obj9.dispatch(obj16);
                          obj11 = outer3_0(outer3_3[74]);
                          let status;
                          if (!ok.hasErr) {
                            status = ok.status;
                          }
                          obj17 = { failureCode: null, errorMessage: null };
                          obj17[0] = status;
                          let message1;
                          if (ok.hasErr) {
                            message1 = ok.err.message;
                          }
                          obj17[1] = message1;
                          let result3 = obj11.logMessageSendFailure(obj17);
                          obj13 = outer3_1(outer3_3[72]);
                          let result4 = obj13.cancelPendingSendRequests(c0);
                          const item = result4.forEach((messageId) => {
                            logger.log("Cancelling pending message", messageId.nonce);
                            let obj = id(message[46]);
                            obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId };
                            obj.dispatch(obj);
                          });
                        }
                        id(ok);
                      }
                    }, rounded);
                  });
                  c8 = 3;
                  const throwTypeErrorResultResult = throwTypeErrorResult(outer1_3[47]);
                  tmp42 = c0;
                }
              }
            } else if (1 === tmp8) {
              c6 = 0;
              const outer2_19 = messageReference;
              const outer2_20 = outer2_19.file;
              const outer2_21 = outer2_19.code;
              const outer2_22 = outer2_19.reason;
              const outer2_23 = outer2_19.responseBody;
              obj1 = outer1_0(outer1_3[74]);
              let obj9 = { fileItems: null, failureCode: null, errorMessage: null };
              obj9[0] = outer2_20.items;
              obj9[1] = outer2_21;
              let msg;
              if (outer2_22 != null) {
                msg = outer2_22.msg;
              }
              obj9[2] = msg;
              let result1 = obj1.logMessageSendFailure(obj9);
              if (outer2_9 != null) {
                tmp33(outer1_20, outer1_21, outer1_22, outer1_23);
              }
              c8 = 3;
              obj10 = { value: null, done: true };
              obj10[0] = undefined;
              return obj10;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              throwTypeErrorResult = c3;
              ensureGuildLoaded = arg1;
              throwTypeErrorResult = ensureGuildLoaded;
              if (null == ensureGuildLoaded) {
                c6 = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = ensureGuildLoaded;
                attachments = ensureGuildLoaded.attachments;
                throwTypeErrorResult = ensureGuildLoaded;
                uploader = ensureGuildLoaded.uploader;
                throwTypeErrorResult = c10;
                if (!c10) {
                  if (null != attachments) {
                    obj4.message.attachments = attachments.map((closure_0, closure_1) => v0(_undefined[45]).getAttachmentPayload(closure_0, closure_1));
                  }
                  c6 = 0;
                }
              }
            }
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } catch (throwTypeErrorResult) {
            messageReference = throwTypeErrorResult;
            throwTypeErrorResult = c6;
            if (tmp4 === c6) {
              throwTypeErrorResult = tmp2;
              c8 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c7 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    let obj = importDefault(709);
    obj = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj);
  },
  startEditMessageRecord(id, flags, source) {
    let obj = require(1384) /* hasFlag */;
    if (obj.hasFlag(flags.flags, closure_33.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === callback(table[79]).ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        obj = { type: "MESSAGE_START_EDIT", channelId: null, messageId: null, content: null, source: null };
        obj[1] = id;
        obj[2] = flags.id;
        obj[3] = joined;
        obj[4] = source;
        importDefault(709).dispatch(obj);
      }
    }
    obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    importDefault(709).dispatch(obj);
  },
  updateEditMessage(channelId, textValue, richValue) {
    let obj = importDefault(709);
    obj = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj);
  },
  endEditMessage(id, response) {
    let obj = importDefault(709);
    obj = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj);
  },
  editMessage(id, id2, parsed) {
    let dependencyMap;
    let importAll;
    let closure_0 = id;
    let closure_1 = id2;
    ({ content: importAll, components: dependencyMap } = parsed);
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === obj2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let closure_0 = tmp3;
              closure_0 = undefined;
              closure_1 = undefined;
              obj2 = undefined;
              (function tryTrackEditMessageSwipeSend(outer1_1, outer1_0) {
                if ("message_swipe" === editActionSource.getEditActionSource(outer1_0)) {
                  channel = channel.getChannel(outer1_0);
                  let obj = callback(698);
                  obj = { message_id: null, channel_id: null, guild_id: null, swipe_action: "edit", is_own_message: true };
                  obj[0] = outer1_1;
                  obj[1] = outer1_0;
                  let guild_id;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  obj[2] = guild_id;
                  obj.track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj);
                }
              })(outer1_1, outer1_0);
              let obj1 = outer1_1(6080);
              obj2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(outer1_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = (function getAllowedMentionsForMessageEdit(closure_0, closure_1) {
              const message = store.getMessage(closure_0, closure_1);
              if (null != message) {
                if (message.type === constants4.REPLY) {
                  messageByReference = messageByReference.getMessageByReference(message.messageReference);
                  if (messageByReference.state === constants.LOADED) {
                    const mentions = message.mentions;
                    if (!mentions.includes(messageByReference.message.author.id)) {
                      const obj = { parse: null, replied_user: false };
                      const _Object = Object;
                      obj[0] = Object.values(closure_36);
                      return obj;
                    }
                  }
                }
              }
            })(closure_0, closure_1);
            closure_1 = (function getIsCrosspostedForMessageEdit(closure_0, closure_1) {
              const message = store.getMessage(closure_0, closure_1);
              let hasFlagResult = null != message;
              if (hasFlagResult) {
                hasFlagResult = message.hasFlag(constants3.CROSSPOSTED);
              }
              return hasFlagResult;
            })(closure_0, closure_1);
            obj2 = { channelId: null, messageId: null, content: null, isCrossposted: null, allowed_mentions: null, components: null };
            obj2[0] = closure_0;
            obj2[1] = closure_1;
            obj2[2] = obj2;
            obj2[3] = closure_1;
            obj2[4] = closure_0;
            obj2[5] = dependencyMap;
            const obj3 = { type: null, message: null };
            obj3[0] = outer1_0(6149).MessageDataType.EDIT;
            obj3[1] = obj2;
            outer1_1(6149).enqueue(obj3, (hasErr) => {
              hasErr = hasErr.hasErr;
              let hasItem = !hasErr;
              if (!hasErr) {
                const AUTOMOD_ERROR_CODES = outer2_0(6181).AUTOMOD_ERROR_CODES;
                hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
              }
              if (hasItem) {
                let obj = { type: null, message: null };
                obj[0] = outer2_0(6149).MessageDataType.EDIT;
                obj[1] = obj2;
                let obj1 = outer2_1(709);
                obj = { type: "MESSAGE_EDIT_FAILED_AUTOMOD", messageData: null, errorResponseBody: null };
                obj[1] = obj;
                obj = { code: null, message: null };
                obj[0] = hasErr.body.code;
                obj[1] = hasErr.body.message;
                obj[2] = obj;
                obj1.dispatch(obj);
              }
              const AccessibilityAnnouncer = outer2_0(4039).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = outer2_0(1236).intl;
              const string = intl.string;
              const t = outer2_0(1236).t;
              if (hasErr.hasErr) {
                announce(string(t.Atp7FP));
              } else if (hasItem) {
                announce(string(t.Hym4ix));
              } else {
                announce(string(t["0x1HBD"]));
              }
              let tmp14;
              if (!hasErr.hasErr) {
                tmp14 = hasErr;
              }
              outer2_55.endEditMessage(closure_0, tmp14);
              obj1 = { channelId: tmp13, messageId: closure_1 };
              outer2_55.focusMessage(obj1);
            });
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          dependencyMap = tmp;
          throw tmp13;
        }
      }
    })();
  },
  suppressEmbeds(id, id2) {
    let closure_0 = id;
    let closure_1 = id2;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let flags = tmp2;
              flags = undefined;
              let obj1 = outer1_1(6080);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(outer1_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            flags = outer1_21.getMessage(flags, closure_1);
            if (null != flags) {
              const HTTP = outer1_0(530).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = outer1_28.MESSAGE(flags, closure_1);
              const obj3 = { flags: null };
              obj3[0] = outer1_0(1384).setFlag(flags.flags, outer1_33.SUPPRESS_EMBEDS, true);
              obj2[1] = obj3;
              const obj8 = outer1_0(1384);
              obj2[3] = outer1_0(530).rejectWithMigratedError();
              HTTP.patch(obj2);
              const obj9 = outer1_0(530);
            }
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    })();
  },
  patchMessageGuildOfficial(id, id2, arg2) {
    let closure_0 = id;
    let closure_1 = id2;
    let closure_2 = arg2;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let flags = tmp2;
              flags = undefined;
              let obj1 = outer1_1(6080);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(outer1_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            flags = outer1_21.getMessage(flags, closure_1);
            if (null != flags) {
              const HTTP = outer1_0(530).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = outer1_28.MESSAGE(flags, closure_1);
              const obj3 = { flags: null };
              obj3[0] = outer1_0(1384).setFlag(flags.flags, outer1_33.IS_GUILD_OFFICIAL, c2);
              obj2[1] = obj3;
              const obj8 = outer1_0(1384);
              obj2[3] = outer1_0(530).rejectWithMigratedError();
              HTTP.patch(obj2);
              const obj9 = outer1_0(530);
            }
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    })();
  },
  patchMessageAttachments(id, id2, found) {
    let closure_0 = id;
    let closure_1 = id2;
    let closure_2 = found;
    return callback(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              let obj1 = v0(outer1_3[80]);
              v0 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(outer1_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = outer1_0(outer1_3[51]).HTTP;
            const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = outer1_28.MESSAGE(closure_0, v0);
            const obj3 = { attachments: null };
            obj3[0] = c2;
            obj2[1] = obj3;
            obj2[3] = outer1_0(outer1_3[51]).rejectWithMigratedError();
            HTTP.patch(obj2);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    })();
  },
  deleteMessage(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp4;
              let closure_0 = tmp4;
              if (c2) {
                (function dispatchDelete() {
                  let obj = tmp4(709);
                  obj = { type: "MESSAGE_DELETE", id: tmp4, channelId: closure_0 };
                  obj.dispatch(obj).then(() => {
                    const AccessibilityAnnouncer = callback(4039).AccessibilityAnnouncer;
                    const intl = callback(1236).intl;
                    AccessibilityAnnouncer.announce(intl.string(callback(1236).t.RYMs7s));
                  });
                })();
                dependencyMap = 3;
              } else {
                let obj1 = outer1_1(6080);
                c2 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.unarchiveThreadIfNecessary(outer1_0);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const HTTP = outer1_0(530).HTTP;
            const obj2 = { url: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = outer1_28.MESSAGE(closure_0, closure_1);
            obj2[2] = outer1_0(530).rejectWithMigratedError();
            const obj7 = outer1_0(530);
            HTTP.del(obj2).then(() => {
              let obj = tmp4(709);
              obj = { type: "MESSAGE_DELETE", id: tmp4, channelId: closure_0 };
              obj.dispatch(obj).then(() => {
                const AccessibilityAnnouncer = callback(4039).AccessibilityAnnouncer;
                const intl = callback(1236).intl;
                AccessibilityAnnouncer.announce(intl.string(callback(1236).t.RYMs7s));
              });
            });
            const delResult = HTTP.del(obj2);
          }
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp10) {
          dependencyMap = tmp;
          throw tmp10;
        }
      }
    })();
  },
  dismissAutomatedMessage(loggingName) {
    if (null != loggingName.loggingName) {
      let obj = importDefault(4388);
      obj = { message_name: null, message_author: null };
      obj[0] = loggingName.loggingName;
      obj[1] = loggingName.author.username;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj);
    }
    const result = require(6182) /* fetchAndReconcileGiftIntentDismissals */.logGiftIntentMessageDismissed(loggingName.channel_id, loggingName.id);
    this.deleteMessage(loggingName.channel_id, loggingName.id, true);
  },
  revealMessage(id, messageId) {
    let obj = importDefault(709);
    obj = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj);
  },
  crosspostMessage(id, id2) {
    let closure_0 = id;
    let closure_1 = id2;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let c0 = tmp7;
              c0 = undefined;
              let dependencyMap = 1;
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, oldFormErrors: true, failImmediatelyWhenRateLimited: true, rejectWithError: null };
              obj1[0] = outer1_28.MESSAGE_CROSSPOST(outer1_0, outer1_1);
              obj1[3] = outer1_0(530).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_1 = closure_2;
            if (429 === closure_1.status) {
              const intl2 = outer1_0(1236).intl;
              let obj3 = { retryAfter: null };
              const _Math = Math;
              obj3[0] = Math.floor(closure_1.body.retry_after / 60);
              let formatToPlainStringResult = intl2.formatToPlainString(outer1_0(1236).t["77cuqz"], obj3);
            } else {
              const intl = outer1_0(1236).intl;
              formatToPlainStringResult = intl.string(outer1_0(1236).t.z2gyNF);
            }
            c0 = formatToPlainStringResult;
            obj3 = outer1_1(4532);
            const obj4 = { title: null, body: null, confirmText: null };
            const intl3 = outer1_0(1236).intl;
            obj4[0] = intl3.string(outer1_0(1236).t.Vd1hs6);
            obj4[1] = c0;
            const intl4 = outer1_0(1236).intl;
            obj4[2] = intl4.string(outer1_0(1236).t.BddRzS);
            obj3.show(obj4);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            dependencyMap = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp39) {
          closure_2 = tmp39;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp39;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  trackInvite
};
let obj1 = {
  messageName: "TOO_MANY_THREADS",
  messageGetter(isForumLikeChannel) {
    if (!isForumLikeChannel.isForumLikeChannel()) {
      if (!isForumLikeChannel.isForumPost()) {
        const intl = require(1236) /* getSystemLocale */.intl;
        let stringResult = intl.string(require(1236) /* getSystemLocale */.t["5EMPA7"]);
      }
      return stringResult;
    }
    const intl2 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1236) /* getSystemLocale */.t["/jUd2+"]);
  }
};
let obj10 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Oc1Zjw);
  }
};
let obj11 = {
  messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { maxSizeMb: null };
    obj[0] = require(4727) /* items */.MAX_TOTAL_ATTACHMENT_SIZE_MB;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.DYFPg2, obj);
  }
};
let obj12 = {
  messageName: "CLOUD_UPLOAD_NOT_FOUND",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.bQldfH);
  }
};
let obj13 = {
  messageName: "INVALID_PERMISSIONS",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zl4Weq);
  }
};
let obj2 = {
  messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["aY+lLC"]);
  }
};
let obj3 = {
  messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
  }
};
let obj4 = {
  messageName: "HARMFUL_URL_BLOCKED",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.WxX2Fd);
  }
};
let obj5 = {
  messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.k1Cjqr);
  }
};
let obj6 = {
  messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Z5SUuv);
  }
};
let obj7 = {
  messageName: "BOT_DM_RATE_LIMITED",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.E8nbNb);
  }
};
let obj8 = {
  messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aRUbah);
  }
};
let obj9 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
  messageGetter() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/meGhR"]);
  }
};
const tmp6 = new require("updateSubmittedGuildJoinRequestTotal")("MessageQueue");
let result = require("_handleConnectionOpen").fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj14;