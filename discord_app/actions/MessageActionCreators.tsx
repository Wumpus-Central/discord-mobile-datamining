// === Module 7210: trackInvite ===

// Module 7210 (trackInvite)
import timestampDefault from "timestamp" /* 3 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import hasFlag from "hasFlag" /* 1398 */;
import combinedDefault from "combined" /* 1994 */;
import getUncachedChannelPermissionsDefault from "getUncachedChannelPermissions" /* 4120 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import readSnowflake from "readSnowflake" /* 4463 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4700 */;
import t2 from "t" /* 4705 */;
import items2 from "items" /* 5082 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7354 */;
import createMessage from "createMessage" /* 7507 */;
import createMessageDefault from "createMessage" /* 7507 */;
import snowflakeSequence from "snowflakeSequence" /* 7508 */;
import getInviteURLDefault from "getInviteURL" /* 7513 */;
import fetchAndReconcileGiftIntentDismissals from "fetchAndReconcileGiftIntentDismissals" /* 10738 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "_handleConnectionOpen" /* 5229 */;
import closure_7 from "updateSubmittedGuildJoinRequestTotal" /* 7211 */;
import closure_8 from "handleGuildTemplateResolveSuccess" /* 7212 */;
import closure_9 from "trackRoundtrip" /* 7213 */;
import closure_10 from "initialize" /* 7432 */;
import closure_11 from "getState" /* 7434 */;
import closure_12 from "processMessage" /* 7349 */;
import { ReferencedMessageState } from "processMessage" /* 7349 */;
import closure_14 from "loadSavedGuildStickers" /* 5452 */;
import closure_15 from "reset" /* 4500 */;
import closure_16 from "fetchFingerprint" /* 1215 */;
import closure_17 from "ensureGuildLoaded" /* 1386 */;
import closure_18 from "initialize" /* 7435 */;
import closure_19 from "createGuildRecordFromRust" /* 1908 */;
import closure_20 from "updateInvite" /* 4462 */;
import closure_21 from "reinjectEphemerals" /* 4735 */;
import closure_22 from "sortActivity" /* 4569 */;
import closure_23 from "generateOldThreadCutoff" /* 4493 */;
import { SlowmodeType } from "setCooldown" /* 7441 */;
import closure_25 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import { LinkType } from "LinkType" /* 7443 */;
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD" /* 6179 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4471 */;

require = arg1;
function trackInvite(channelId) {
  ({ inviteKey, messageId, location: _location, inviteAnalyticsMetadata, overrideProperties } = channelId);
  if (overrideProperties === undefined) {
    overrideProperties = {};
  }
  id = id.getId();
  invite = invite.getInvite(inviteKey);
  let obj = readSnowflake;
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    let tmp3Result = tmp3(7490);
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
    tmp3Result = tmp3(7448);
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
              const streamerApplication = tmp3(7493).getStreamerApplication(lastActiveStream, closure_22);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj.application_id = id3;
              STREAM = constants3.STREAM;
              const tmp3Result1 = tmp3(7493);
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
    let inviteInstanceId = tmp3(4463).getInviteInstanceId(result.baseCode, messageId);
    if (inviteInstanceId == null) {
      inviteInstanceId = null;
    }
    obj.invite_instance_id = inviteInstanceId;
    const merged1 = Object.assign(overrideProperties);
    const tmp3Result2 = tmp3(4463);
    collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.INVITE_SENT, obj);
    const obj13 = collectGuildAnalyticsMetadataDefault;
  } else {
    let tmp12 = null != invite;
    if (tmp12) {
      tmp12 = invite.state === constants5.RESOLVED;
    }
    if (tmp12) {
      tmp12 = null != invite.inviter;
    }
    if (tmp12) {
      obj1 = { invite_inviter_id: invite.inviter.id };
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
      let inviteInstanceId1 = tmp3(4463).getInviteInstanceId(result.baseCode, messageId);
      if (inviteInstanceId1 == null) {
        inviteInstanceId1 = null;
      }
      obj2.invite_instance_id = inviteInstanceId1;
      const merged3 = Object.assign(overrideProperties);
      const tmp3Result3 = tmp3(4463);
      collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.INVITE_SENT, obj2);
      const obj8 = collectGuildAnalyticsMetadataDefault;
    }
  }
}
getUncachedChannelPermissionsDefault;
const AbortCodes = ME.AbortCodes;
({ AnalyticEvents: closure_27, Endpoints: closure_28, Permissions, ChannelTypes: closure_29, LoggingInviteTypes: closure_30, SendTypes: closure_31, InviteStates: closure_32, MessageFlags: closure_33, MAX_MESSAGES_FOR_JUMP: closure_34, MessageTypes: closure_35, AllowedMentionTypes: closure_36, HelpdeskArticles: closure_37, MarketingURLs: closure_38, MessageReferenceTypes: closure_39, LOCAL_BOT_ID: closure_40, NON_USER_BOT_DISCRIMINATOR: closure_41, MessageStates: closure_42, ActivityActionTypes: closure_43 } = ME);
({ FileUploadErrorTypes: closure_46, MessageSendLocation: closure_47 } = MESSAGE_GROUP_SPACING);
const MediaPlayerManager = require("get ActivityIndicator").NativeModules.MediaPlayerManager;
let closure_49 = new timestampDefault("MessageActionCreators");
const tmp5 = new timestampDefault("MessageActionCreators");
let closure_50 = new timestampDefault("MessageQueue");
let c51 = false;
class RemoteFetch {
}
RemoteFetch.prototype["markComplete"] = function markComplete() {
  this.completed = true;
};
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    let obj = combinedDefault;
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (rawRecipients == null) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = getSystemLocale.intl;
          obj = { helpUrl: null };
          obj[0] = articleURL;
          let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.SkGL7l, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = getSystemLocale.intl;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.llTkqr, { helpUrl: articleURL });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    const intl = getSystemLocale.intl;
    const obj = { helpUrl: combinedDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
    return intl.formatToPlainString(getSystemLocale.t.SkGL7l, obj);
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
          const intl = getSystemLocale.intl;
          let stringResult = intl.string(getSystemLocale.t["5EMPA7"]);
        }
        return stringResult;
      }
      const intl2 = getSystemLocale.intl;
      stringResult = intl2.string(getSystemLocale.t["/jUd2+"]);
    }
  },
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: {
    messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["aY+lLC"]);
    }
  },
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: {
    messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
    }
  },
  [AbortCodes.HARMFUL_URL_BLOCKED]: {
    messageName: "HARMFUL_URL_BLOCKED",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.WxX2Fd);
    }
  },
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.k1Cjqr);
    }
  },
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
    messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Z5SUuv);
    }
  },
  [AbortCodes.RATE_LIMIT_DM_OPEN]: {
    messageName: "BOT_DM_RATE_LIMITED",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.E8nbNb);
    }
  },
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.aRUbah);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["/meGhR"]);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Oc1Zjw);
    }
  },
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
    messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.DYFPg2, { maxSizeMb: items2.MAX_TOTAL_ATTACHMENT_SIZE_MB });
    }
  },
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: {
    messageName: "CLOUD_UPLOAD_NOT_FOUND",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.bQldfH);
    }
  },
  [AbortCodes.INVALID_PERMISSIONS]: {
    messageName: "INVALID_PERMISSIONS",
    messageGetter() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.zl4Weq);
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
    dispatcherDefault.dispatch(obj);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      let obj = collectGuildAnalyticsMetadataDefault;
      obj = { message_author: "Clyde", message_name: null };
      obj[1] = messageName;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj);
    }
    obj = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    obj14.receiveMessage(id, createMessage.createBotMessage(obj));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: closure_33.EPHEMERAL, author: obj };
    obj = { id: closure_40, username: "Nitro Notification", discriminator: closure_41, avatar: "nitro", bot: true };
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj.channel_id = channelId;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: closure_33.EPHEMERAL, author: obj, giftingPrompt };
    obj = { id: closure_40, username: "Gifting Prompt", discriminator: closure_41, avatar: "gifting_prompt", bot: true };
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: closure_33.EPHEMERAL, author: obj, boostingPrompt };
    obj = { id: closure_40, username: "Guild Boost Upsell", discriminator: closure_41, avatar: "guild_boost_upsell", bot: true };
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendClydeError(closure_0, code) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = store.getChannel(closure_0);
    if (null != channel) {
      let obj = table[num];
      if (null != obj) {
        obj14.sendBotMessage(closure_0, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = getSystemLocale.intl;
        obj = { helpUrl: null };
        obj[0] = combinedDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
        const _HermesInternal = HermesInternal;
        const obj3 = combinedDefault;
        obj14.sendBotMessage(closure_0, intl.formatToPlainString(getSystemLocale.t.SkGL7l, obj), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.SkGL7l, obj);
      }
    }
  },
  sendExplicitMediaClydeError(c0, attachments, EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED) {
    const channel = store.getChannel(c0);
    if (null != channel) {
      let obj = { isDM: null, isGDM: null };
      obj[0] = channel.isDM();
      obj[1] = channel.isGroupDM();
      const match = t2.match(obj);
      const str = t2;
      const withResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      });
      const withResult1 = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      });
      ({ message, messageName } = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t.i4AbAS);
        return obj;
      }));
      const otherwiseResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t.i4AbAS);
        return obj;
      });
      const nonce = snowflakeSequence.createNonce();
      obj14.sendBotMessage(c0, message, messageName, nonce);
      const obj8 = snowflakeSequence;
      obj = { action: null, messageId: null, channelId: null, context: null };
      obj[0] = redactionSettingToRenderedString.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
      obj[1] = nonce;
      obj[2] = c0;
      obj[3] = EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED;
      const result = redactionSettingToRenderedString.trackMediaRedactionAction(obj);
      let tmp = null != attachments;
      if (tmp) {
        tmp = attachments.length > 0;
      }
      if (tmp) {
        obj1 = dispatcherDefault;
        obj1 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: null, channelId: null, attachments: null };
        obj1[1] = nonce;
        obj1[2] = c0;
        obj1[3] = attachments;
        obj1.dispatch(obj1);
      }
      const obj9 = redactionSettingToRenderedString;
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    let obj = dispatcherDefault;
    obj = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj);
  },
  clearChannel(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "CLEAR_MESSAGES", channelId };
    obj.dispatch(obj);
  },
  jumpToPresent(channelId) {
    let obj = obj14;
    obj14.trackJump(channelId, null, "Present");
    obj = { present: true };
    if (closure_21.hasPresent(channelId)) {
      obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: null, channelId: null, limit: null };
      obj[1] = obj;
      obj[2] = channelId;
      obj[3] = arg1;
      dispatcherDefault.dispatch(obj);
      const obj4 = dispatcherDefault;
    } else {
      obj1 = { channelId: null, limit: null, jump: null };
      obj1[0] = channelId;
      obj1[1] = arg1;
      obj1[2] = obj;
      const messages = obj.fetchMessages(obj1);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { context: Present, channel_id: channelId, message_id: id };
    const merged = Object.assign(extraProperties);
    obj.trackWithMetadata(constants.JUMP, obj);
  },
  jumpToMessage(arg0) {
    ({ channelId, messageId, flash } = arg0);
    if (flash === undefined) {
      flash = false;
    }
    ({ context, extraProperties, offset } = arg0);
    if (extraProperties === undefined) {
      extraProperties = null;
    }
    ({ isPreload, returnMessageId, skipLocalFetch, jumpType, avoidInitialScroll, onJumpComplete } = arg0);
    if (typeof context === "string") {
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
              closure_1 = tmp2;
              closure_0 = 0;
              closure_0 = undefined;
              const HTTP = closure_1_0(527).HTTP;
              obj1 = { url: null, query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_28.MESSAGES(closure_1_0);
              const obj2 = { limit: 1, around: null };
              obj2[1] = closure_1_1;
              obj1[1] = obj2;
              obj1[4] = closure_1_0(527).rejectWithMigratedError();
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
              obj = closure_1_0(4737);
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
    channelId = channelId.channelId;
    const before = channelId.before;
    const after = channelId.after;
    const limit = channelId.limit;
    let jump = channelId.jump;
    ({ focus, truncate } = channelId);
    ({ forICYMI: closure_6, avoidInitialScroll: closure_7, fetchKey } = channelId);
    closure_9 = undefined;
    let timestamp;
    let messageId;
    obj1 = undefined;
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
      logger.log("Fetching messages for " + channelId + " between " + after + " and " + before + ". jump=" + JSON.stringify(jump));
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
        if (typeof RemoteFetch !== "function") {
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
          closure_0 = arg0;
          const fetchMessages = before(limit[54]).fetchMessages;
          fetchMessages.recordEnd();
          const dispatchMessages = before(limit[54]).dispatchMessages;
          dispatchMessages.measure(() => {
            body = body.body;
            let flag = null != closure_1_11;
            if (!flag) {
              let tmp7 = body.length === closure_1_3;
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
                tmp10 = body.length === closure_1_3;
              }
              flag2 = tmp10;
            }
            let flag3 = flag2;
            let tmp12 = flag;
            if (null != closure_1_11) {
              const _Math = Math;
              const rounded = Math.floor(closure_1_3 / 2);
              const items = [tmp5];
              HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
              const found = items.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
              const sorted = found.sort(before(limit[57]).compare);
              const index = sorted.indexOf(tmp5);
              if (index < rounded + closure_1_3 % 2 - 1) {
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
                  if (body[0].id === closure_2_23.lastMessageId(body)) {
                    flag3 = false;
                    tmp12 = flag;
                  }
                }
              }
            }
            closure_2_49.log("Fetched " + body.length + " messages for " + body + " isBefore:" + null != closure_1_1 + " isAfter:" + null != closure_1_2);
            closure_1_12.markComplete();
            let obj = before(limit[46]);
            obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: body, messages: body, isBefore: tmp2, isAfter: tmp4, hasMoreBefore: tmp12, hasMoreAfter: flag3, limit: closure_1_3, jump: closure_1_4, forICYMI: closure_1_6, isStale: null, truncate: null, avoidInitialScroll: null };
            let tmp19 = !closure_1_9;
            if (closure_1_9) {
              tmp19 = closure_2_6.lastTimeConnectedChanged() >= closure_1_10;
            }
            obj[10] = tmp19;
            obj[11] = closure_1_5;
            obj[12] = closure_1_7;
            obj.dispatch(obj);
            let tmp23 = closure_1_8;
            if (closure_1_8 == null) {
              tmp23 = closure_1_10;
            }
            const result = before(limit[55]).recordChannelFetchedNetwork(body, tmp23, tmp, tmp3, closure_1_3, body);
          });
          return true;
        }, () => {
          closure_1_49.log("Failed to fetch messages for " + channelId);
          let obj = before(limit[46]);
          obj = { type: "LOAD_MESSAGES_FAILURE", channelId };
          obj.dispatch(obj);
          return false;
        });
      }
    }
  },
  fetchLocalMessages(channelId, fetchKey, before, after, limit, arg5) {
    closure_0 = channelId;
    closure_1 = fetchKey;
    closure_2 = before;
    closure_3 = after;
    closure_4 = limit;
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
              c1 = tmp2;
              let basicChannel = num2;
              basicChannel = undefined;
              c1 = undefined;
              closure_2 = undefined;
              dependencyMap = undefined;
              basicChannel = closure_1_17.getBasicChannel(closure_1_0);
              const orCreate = closure_1_1(5224).getOrCreate(closure_1_0);
              const obj13 = closure_1_1(5224);
              const databaseResult = closure_1_1(1955).database();
              c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  if (null == c2) {
                    if (null == dependencyMap) {
                      if (orCreate.ready) {
                        if (!orCreate.cached) {
                          closure_1_1(9).addLocalMessages(closure_1_0, -2);
                          const obj8 = closure_1_1(9);
                        }
                      }
                      closure_2 = 1;
                      dependencyMap = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = closure_1_0(1975).tryLoadAsync(() => closure_2_1(tmp[60]).load(c1, basicChannel, closure_1_4));
                      return obj1;
                    }
                    dependencyMap = 3;
                  }
                }
              }
              obj14 = closure_1_1(1955);
              closure_1_1(9).addLocalMessages(closure_1_0, -1);
              const obj7 = closure_1_1(9);
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
              obj = closure_1_1(9);
              obj.addLocalMessages(basicChannel, -3);
            }
          }
          const _HermesInternal = HermesInternal;
          closure_1_49.log("fetched " + closure_2.messages.length + " messages from local database (channel_id: " + basicChannel + ", remote_fetch_completed: " + closure_5.completed + ")");
          obj1 = closure_1_1(9);
          obj1.addLocalMessages(basicChannel, closure_2.messages.length);
          if (!closure_5.completed) {
            if (closure_2.messages.length > num2) {
              let tmp30 = closure_2.messages.length >= closure_4;
              if (tmp30) {
                tmp30 = closure_2.connectionId === closure_1_6.lastTimeConnectedChanged();
              }
              dependencyMap = tmp30;
              obj2 = closure_1_1(7242);
              const result = obj2.recordChannelFetchedLocal(basicChannel, c1, closure_2, dependencyMap, closure_4, closure_2.messages);
              let obj3 = closure_1_1(706);
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
  fetchNewLocalMessages(channelId, closure_14) {
    closure_0 = channelId;
    closure_1 = closure_14;
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
              c1 = tmp2;
              let basicChannel = 0;
              basicChannel = undefined;
              c1 = undefined;
              orCreate = undefined;
              c3 = undefined;
              let id;
              let messages;
              basicChannel = closure_1_17.getBasicChannel(closure_1_0);
              const databaseResult = closure_1_1(c3[58]).database();
              c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  obj1 = closure_1_1(c3[56]);
                  orCreate = obj1.getOrCreate(closure_1_0);
                  if (!orCreate.hasMoreAfter) {
                    let obj2 = closure_1_0(c3[59]);
                    orCreate = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj2.tryLoadAsync(() => closure_2_1(7231).load(c1, basicChannel, c1));
                    return obj1;
                  }
                }
              }
              c3 = 3;
              const obj11 = closure_1_1(c3[58]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = arg1;
            if (null != c3) {
              orCreate = closure_1_1(c3[56]).getOrCreate(basicChannel);
              const lastResult = orCreate.last();
              id = undefined;
              if (lastResult != null) {
                id = lastResult.id;
              }
              if (null == id) {
                messages = c3.messages;
              } else {
                messages = c3.messages;
                messages = messages.filter((id) => closure_2_1(11).compare(id.id, id) > 0);
              }
              const _HermesInternal = HermesInternal;
              closure_1_49.log("Fetched " + c3.messages.length + " messages from the cache after foregrounding. " + messages.length + " are new");
              if (0 !== messages.length) {
                obj2 = { type: "LOCAL_MESSAGES_LOADED", guildId: null, channelId: null, users: null, members: null, messages: null, stale: true, isForegroundCacheLoad: null };
                obj2[1] = closure_1_0.guild_id;
                obj2[2] = basicChannel;
                obj2[3] = c3.users;
                obj2[4] = c3.members;
                obj2[5] = closure_1_5;
                const obj8 = closure_1_1(c3[46]);
                obj2[7] = closure_1_0(c3[61]).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj8.dispatch(obj2);
                const obj10 = closure_1_0(c3[61]);
              }
              const obj7 = closure_1_1(c3[56]);
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
    ({ channelId, before, after, limit, jump, focus, truncate } = arg0);
    const messages = closure_21.getMessages(channelId);
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
                let obj3 = dispatcherDefault;
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
              obj1 = dispatcherDefault;
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
            dispatcherDefault.dispatch(obj1);
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
            dispatcherDefault.dispatch(obj2);
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
          num = DISCORD_EPOCHDefault.extractTimestamp(messageId5);
          const obj7 = DISCORD_EPOCHDefault;
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        const hasMoreBefore = messages.hasMoreBefore;
        let flag4 = !hasMoreBefore;
        if (!hasMoreBefore) {
          flag4 = null != firstResult;
        }
        if (flag4) {
          flag4 = DISCORD_EPOCHDefault.extractTimestamp(firstResult.id) >= num;
          const obj8 = DISCORD_EPOCHDefault;
        }
        if (!flag4) {
          const hasMoreAfter = messages.hasMoreAfter;
          let tmp25 = !hasMoreAfter;
          if (!hasMoreAfter) {
            tmp25 = null != lastResult;
          }
          if (tmp25) {
            tmp25 = DISCORD_EPOCHDefault.extractTimestamp(lastResult.id) <= num;
            const obj9 = DISCORD_EPOCHDefault;
          }
          flag4 = tmp25;
        }
        if (!flag4) {
          let tmp28 = null != firstResult && null != lastResult;
          if (tmp28) {
            tmp28 = DISCORD_EPOCHDefault.extractTimestamp(firstResult.id) < num;
            const obj10 = DISCORD_EPOCHDefault;
          }
          if (tmp28) {
            tmp28 = DISCORD_EPOCHDefault.extractTimestamp(lastResult.id) > num;
            const obj11 = DISCORD_EPOCHDefault;
          }
          flag4 = tmp28;
        }
        if (flag4) {
          const obj4 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: null, jump: null, limit: null };
          obj4[1] = channelId;
          obj4[2] = tmp13;
          obj4[3] = closure_34;
          dispatcherDefault.dispatch(obj4);
          flag4 = true;
          const obj12 = dispatcherDefault;
        }
        return flag4;
      }
    }
    return false;
  },
  sendMessage(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    closure_3 = arg3;
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
          if (0 === obj5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_0 = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              if (closure_1_1.reaction) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = Promise.resolve();
                return obj1;
              } else {
                obj5 = 1;
                c4 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(obj5[62])(closure_1_0);
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
              obj4[0] = closure_1_55.sendMessage(closure_1_0, closure_1_1, closure_1_2, obj5);
              return obj4;
            } else {
              const nonce = obj5.nonce;
              closure_0 = nonce;
              if (nonce == null) {
                obj = closure_1_0(obj5[49]);
                closure_0 = obj.createNonce();
              }
              closure_1 = closure_0;
              obj5 = {};
              const merged = Object.assign(obj5);
              obj5.nonce = closure_1;
              obj2 = closure_1_1(obj5[63]);
              closure_2 = obj2.backgroundify(function _trySend() {
                return closure_1_55._sendMessage(closure_0, closure_1, c3);
              }, undefined);
              if (null == obj5.scheduledTimestamp) {
                const result = closure_1_9.recordMessageSendAttempt(closure_1_0, closure_1, obj5);
              }
              if (closure_1_21.isReady(closure_1_0)) {
                closure_1_2();
              } else {
                if (closure_1_2) {
                  if (closure_1_0 !== closure_1_0(obj5[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                    const _HermesInternal = HermesInternal;
                    closure_1_50.info("Waiting for channel " + closure_1_0 + " to be ready before sending.");
                    new Promise((arg0, arg1) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      closure_2_21.whenReady(closure_0, () => {
                        closure_3_50.info("Channel " + closure_0 + " is ready for sending now.");
                        closure_1_2().then(closure_0, closure_1);
                      });
                    });
                  }
                }
                closure_1_2();
              }
              c4 = 3;
            }
          }
        } catch (tmp61) {
          c4 = tmp;
          throw tmp61;
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
    const tmp = getInviteURLDefault(code);
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
    if (typeof str === "string") {
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
  sendGreetMessage(id, closure_1_14, sendMessageOptionsForReply) {
    const _require = id;
    closure_1 = closure_1_14;
    let obj = sendMessageOptionsForReply;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = _require(527).HTTP;
    obj = { url: closure_28.MESSAGES_GREET(id), body: { sticker_ids: items, allowed_mentions: allowedMentions, message_reference: messageReference }, oldFormErrors: true, rejectWithError: _require(527).rejectWithMigratedError(), context: null };
    items = [closure_1_14];
    obj = { location: constants10.GREET };
    obj[4] = obj;
    const obj3 = _require(527);
    return HTTP.post(obj).then((body) => {
      callback(closure_1_3[65]).donateSentMessage(body.body.content, closure_0);
      closure_1_55.receiveMessage(closure_0, body.body);
      const obj = callback(closure_1_3[65]);
      const items = [callback];
      callback(closure_1_3[46]).dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: items });
      return body;
    }, (messageId) => {
      closure_1_49.log("Failed to send greeting");
      if (429 !== messageId.status) {
        closure_1_55.sendClydeError(closure_0, messageId.body.code);
      }
      let obj = callback(closure_1_3[46]);
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
  validateMessage(invalidEmojis, currentUser, closure_1_0) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let obj = getPremiumPlanItemDefault;
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = getSystemLocale.intl;
        let stringResult = intl.string(getSystemLocale.t["V5/GgC"]);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      obj = { errorMessage: null, errorMessageName: null };
      obj[0] = stringResult;
      obj[1] = str;
      return obj;
    }
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return callback(function*() {
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
                let stickerIds = tmp3;
                let inviteAnalyticsMetadata = tmp5;
                closure_0 = undefined;
                closure_1 = undefined;
                c2 = undefined;
                inviteAnalyticsMetadata = undefined;
                stickerIds = undefined;
                let messageReference;
                c6 = undefined;
                c7 = undefined;
                c8 = undefined;
                let onAttachmentUploadError;
                let scheduledTimestamp;
                c11 = undefined;
                c12 = undefined;
                let DEFAULT;
                closure_14 = undefined;
                closure_15 = undefined;
                let uploader;
                let obj4;
                c18 = undefined;
                c19 = undefined;
                c20 = undefined;
                c21 = undefined;
                c22 = undefined;
                c23 = undefined;
                c24 = undefined;
                closure_25 = undefined;
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = closure_1_3;
                throwTypeErrorResult = closure_1_0;
                const promise = closure_1_1(closure_1_3[62])(closure_1_0);
                if (null != promise) {
                  throwTypeErrorResult = closure_1_50;
                  throwTypeErrorResult = closure_1_50.info("Converting channel to a private channel");
                  c8 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = promise.then((arg0) => {
                    closure_1_50.info("Finished converting channel to a private channel");
                    return closure_1_55._sendMessage(arg0, closure_1, c2);
                  });
                  return obj1;
                } else {
                  throwTypeErrorResult = closure_1_1;
                  const content = closure_1_1.content;
                  closure_0 = content;
                  ({ invalidEmojis, validNonShortcutEmojis: closure_1, tts } = closure_1_1);
                  let tmp75 = undefined !== tts;
                  if (tmp75) {
                    tmp75 = tts;
                  }
                  const activityAction = closure_1_2.activityAction;
                  const _location = closure_1_2.location;
                  c2 = _location;
                  inviteAnalyticsMetadata = closure_1_2.inviteAnalyticsMetadata;
                  stickerIds = closure_1_2.stickerIds;
                  messageReference = closure_1_2.messageReference;
                  const allowedMentions = closure_1_2.allowedMentions;
                  const poll = closure_1_2.poll;
                  c6 = poll;
                  const sharedCustomTheme = closure_1_2.sharedCustomTheme;
                  const contentInventoryEntry = closure_1_2.contentInventoryEntry;
                  c7 = contentInventoryEntry;
                  let attachments = closure_1_2.attachments;
                  const attachmentsToUpload = closure_1_2.attachmentsToUpload;
                  c8 = attachmentsToUpload;
                  onAttachmentUploadError = closure_1_2.onAttachmentUploadError;
                  const announcementSendOptions = closure_1_2.announcementSendOptions;
                  const withCheckpoint = closure_1_2.withCheckpoint;
                  const mediaMention = closure_1_2.mediaMention;
                  scheduledTimestamp = closure_1_2.scheduledTimestamp;
                  const flags = closure_1_2.flags;
                  closure_0 = flags;
                  if (flags == null) {
                    closure_0 = 0;
                  }
                  const tmp97 = closure_1_4(closure_1_1(closure_1_3[67])(content), 2);
                  let addFlagResult = closure_0;
                  throwTypeErrorResult = content;
                  if (tmp97[0]) {
                    closure_0 = tmp98;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    let obj12 = closure_1_0(closure_1_3[68]);
                    throwTypeErrorResult = closure_1_33;
                    addFlagResult = obj12.addFlag(tmp93, closure_1_33.SUPPRESS_NOTIFICATIONS);
                    throwTypeErrorResult = tmp98;
                  }
                  throwTypeErrorResult = closure_1_17;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_17.getChannel(closure_1_0);
                  throwTypeErrorResult = undefined;
                  throwTypeErrorResult = attachments;
                  if (throwTypeErrorResult != null) {
                    throwTypeErrorResult = throwTypeErrorResult.guild_id;
                  }
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_3;
                  throwTypeErrorResult = attachments.getGuild(throwTypeErrorResult);
                  let obj13 = closure_1_0(closure_1_3[69]);
                  throwTypeErrorResult = addFlagResult;
                  if (obj13.canSendGuildOfficialMessages(throwTypeErrorResult, throwTypeErrorResult, "_sendMessage")) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    obj14 = closure_1_0(closure_1_3[68]);
                    throwTypeErrorResult = closure_1_33;
                    throwTypeErrorResult = obj14.addFlag(addFlagResult, closure_1_33.IS_GUILD_OFFICIAL);
                  }
                  c11 = false;
                  throwTypeErrorResult = closure_1_2;
                  const messageReference2 = closure_1_2.messageReference;
                  throwTypeErrorResult = undefined;
                  if (messageReference2 != null) {
                    throwTypeErrorResult = messageReference2.type;
                  }
                  throwTypeErrorResult = closure_1_39;
                  throwTypeErrorResult = throwTypeErrorResult === closure_1_39.FORWARD;
                  c12 = throwTypeErrorResult;
                  if ("" === throwTypeErrorResult) {
                    if (null == activityAction) {
                      if (null == stickerIds) {
                        if (null == poll) {
                          if (null == sharedCustomTheme) {
                            if (null == contentInventoryEntry) {
                              if (!throwTypeErrorResult) {
                                if (null == attachments) {
                                  if (!withCheckpoint) {
                                    if (null == throwTypeErrorResult.components) {
                                      if (null != attachmentsToUpload) {
                                        if (attachmentsToUpload.length > 0) {
                                          c11 = true;
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
                    throwTypeErrorResult = closure_1_35;
                    DEFAULT = closure_1_35.REPLY;
                  } else {
                    throwTypeErrorResult = closure_1_35;
                    DEFAULT = closure_1_35.DEFAULT;
                  }
                  throwTypeErrorResult = closure_1_2;
                  const nonce = closure_1_2.nonce;
                  closure_1 = nonce;
                  if (nonce == null) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    let obj16 = closure_1_0(closure_1_3[49]);
                    closure_1 = obj16.createNonce();
                  }
                  throwTypeErrorResult = closure_1;
                  closure_14 = closure_1;
                  closure_15 = closure_1;
                  throwTypeErrorResult = closure_1_1;
                  throwTypeErrorResult = closure_1_3;
                  let obj3 = { channelId: null, content: null, tts: null, type: null, messageReference: null, allowedMentions: null, flags: null, nonce: null, poll: null, sharedCustomTheme: null, mediaMention: null };
                  throwTypeErrorResult = closure_1_0;
                  obj3[0] = closure_1_0;
                  obj3[1] = throwTypeErrorResult;
                  obj3[2] = tmp75;
                  obj3[3] = DEFAULT;
                  obj3[4] = messageReference;
                  obj3[5] = allowedMentions;
                  throwTypeErrorResult = undefined;
                  throwTypeErrorResult = closure_1_1(closure_1_3[47]);
                  obj3[6] = throwTypeErrorResult;
                  obj3[7] = throwTypeErrorResult;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_3;
                  let obj18 = closure_1_0(closure_1_3[70]);
                  obj3[8] = obj18.createPollServerDataFromCreateRequest(poll);
                  obj3[9] = sharedCustomTheme;
                  obj3[10] = mediaMention;
                  throwTypeErrorResult = throwTypeErrorResult(obj3);
                  throwTypeErrorResult = closure_1_2;
                  throwTypeErrorResult = false !== closure_1_2.eagerDispatch;
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = null == scheduledTimestamp;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_0(closure_1_3[71]).updateComboOnMessageSend(closure_1_0, throwTypeErrorResult.id);
                    if (null != stickerIds) {
                      const mapped = stickerIds.map((arg0) => stickerById.getStickerById(arg0));
                      throwTypeErrorResult.sticker_items = mapped.filter((arg0) => null != arg0);
                    }
                    throwTypeErrorResult = closure_1_55;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_2;
                    throwTypeErrorResult = closure_1_55;
                    throwTypeErrorResult = closure_1_55.receiveMessage(closure_1_0, throwTypeErrorResult, true, closure_1_2);
                    let obj20 = closure_1_0(closure_1_3[71]);
                  }
                  throwTypeErrorResult = c51;
                  if (!c51) {
                    if (null != invalidEmojis) {
                      if (invalidEmojis.length > 0) {
                        c51 = true;
                        throwTypeErrorResult = closure_1_25;
                        throwTypeErrorResult = closure_1_55;
                        throwTypeErrorResult = closure_1_0;
                        throwTypeErrorResult = closure_1_55.validateMessage(invalidEmojis, closure_1_25.getCurrentUser(), closure_1_0);
                        throwTypeErrorResult = closure_1_0;
                        throwTypeErrorResult = closure_1_55.sendBotMessage(closure_1_0, throwTypeErrorResult.errorMessage, throwTypeErrorResult.errorMessageName);
                      }
                    }
                  }
                  if (null != announcementSendOptions) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    let SEND = closure_1_0(closure_1_3[72]).MessageDataType.SEND_ANNOUNCEMENT;
                  } else {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    SEND = closure_1_0(closure_1_3[72]).MessageDataType.SEND;
                  }
                  obj4 = { type: null, message: null };
                  obj4[0] = SEND;
                  let obj5 = { channelId: null, content: null, nonce: null, tts: null, message_reference: null, allowed_mentions: null, flags: null, analyticsLocation: null };
                  throwTypeErrorResult = closure_1_0;
                  obj5[0] = closure_1_0;
                  obj5[1] = throwTypeErrorResult;
                  obj5[2] = throwTypeErrorResult;
                  obj5[3] = tmp75;
                  obj5[4] = messageReference;
                  obj5[5] = allowedMentions;
                  obj5[6] = throwTypeErrorResult;
                  obj5[7] = _location;
                  obj4[1] = obj5;
                  if (null != throwTypeErrorResult.components) {
                    obj4.message.components = throwTypeErrorResult.components;
                  }
                  if (null != announcementSendOptions) {
                    ({ createThread: obj21.message.create_thread, threadName: obj21.message.title, publish } = announcementSendOptions);
                    c2 = publish;
                    if (publish == null) {
                      c2 = false;
                    }
                    throwTypeErrorResult = c2;
                    obj4.message.publish = c2;
                  }
                  if (null != activityAction) {
                    throwTypeErrorResult = undefined;
                    if (activityAction != null) {
                      throwTypeErrorResult = activityAction.activity.session_id;
                    }
                    if (activityAction.type !== closure_1_43.JOIN_REQUEST) {
                      if (activityAction.type !== throwTypeErrorResult.STREAM_REQUEST) {
                        if (null == throwTypeErrorResult) {
                          throwTypeErrorResult = uploader;
                          throwTypeErrorResult = uploader.getSessionId();
                        }
                      }
                    }
                    if (null != throwTypeErrorResult) {
                      let obj6 = { type: null, session_id: null, target_user_id: null };
                      obj6[0] = activityAction.type;
                      obj6[1] = throwTypeErrorResult;
                      ({ targetUserId: obj23[2], activity } = activityAction);
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
                  throwTypeErrorResult = closure_1_10;
                  if (closure_1_10.isEnabled()) {
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
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = closure_1_3;
                      let obj7 = { channelId: null, nonce: null, items: null, message: null, shouldUploadFailureSendNotification: null };
                      throwTypeErrorResult = closure_1_0;
                      obj7[0] = closure_1_0;
                      obj7[1] = throwTypeErrorResult;
                      obj7[2] = attachmentsToUpload;
                      obj7[3] = throwTypeErrorResult;
                      throwTypeErrorResult = closure_1_2;
                      const doNotNotifyOnError = closure_1_2.doNotNotifyOnError;
                      throwTypeErrorResult = !doNotNotifyOnError;
                      obj7[4] = throwTypeErrorResult;
                      c7 = 2;
                      c8 = 1;
                      let obj8 = { value: null, done: false };
                      obj8[0] = closure_1_0(closure_1_3[73]).uploadMessageAttachments(obj7);
                      return obj8;
                    }
                  }
                  tmp93 = closure_0;
                }
              }
            } else if (1 === tmp8) {
              c6 = 0;
              closure_20 = messageReference;
              file = closure_20.file;
              code = closure_20.code;
              reason = closure_20.reason;
              responseBody = closure_20.responseBody;
              let obj9 = closure_1_0(closure_1_3[74]);
              obj9 = { fileItems: null, failureCode: null, errorMessage: null };
              obj9[0] = file.items;
              obj9[1] = code;
              let msg;
              if (reason != null) {
                msg = reason.msg;
              }
              obj9[2] = msg;
              let result = obj9.logMessageSendFailure(obj9);
              if (closure_2_9 != null) {
                tmp68(closure_1_21, closure_1_22, closure_1_23, closure_1_24);
              }
              c8 = 3;
              let obj10 = { value: null, done: true };
              obj10[0] = undefined;
              return obj10;
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                let obj11 = { value: null, done: true };
                obj11[0] = arg1;
                return obj11;
              } else {
                throwTypeErrorResult = inviteAnalyticsMetadata;
                closure_18 = arg1;
                throwTypeErrorResult = closure_18;
                if (null == closure_18) {
                  c6 = 0;
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  throwTypeErrorResult = inviteAnalyticsMetadata;
                  throwTypeErrorResult = closure_18;
                  attachments = closure_18.attachments;
                  throwTypeErrorResult = closure_18;
                  uploader = closure_18.uploader;
                  throwTypeErrorResult = closure_1_11;
                  if (closure_1_11) {
                    c6 = 0;
                    c8 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                  if (null != attachments) {
                    closure_1_17.message.attachments = attachments.map((closure_0, closure_1) => callback(inviteAnalyticsMetadata[45]).getAttachmentPayload(closure_0, closure_1));
                  }
                  c6 = 0;
                }
              }
            } else if (3 === tmp8) {
              c6 = 0;
              closure_26 = messageReference;
              if (null != uploader) {
                obj5 = closure_1_1(closure_1_3[46]);
                obj12 = { type: "UPLOAD_FAIL", channelId: null, file: null, messageId: null, noSendFailed: true };
                obj12[1] = closure_0;
                obj12[2] = uploader._file;
                obj12[3] = closure_15;
                obj5.dispatch(obj12);
              }
              if (true !== closure_1_2.doNotNotifyOnError) {
                obj7 = closure_1_0(closure_1_3[76]);
                let result1 = obj7.handleScheduleMessageError(closure_26);
              }
              throw closure_26;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj13 = { value: null, done: true };
              obj13[0] = arg1;
              return obj13;
            } else {
              throwTypeErrorResult = inviteAnalyticsMetadata;
              closure_25 = arg1;
              throwTypeErrorResult = uploader;
              if (null != uploader) {
                obj = closure_1_1(closure_1_3[46]);
                obj14 = { type: "UPLOAD_COMPLETE", channelId: null, file: null, aborted: false };
                obj14[1] = closure_0;
                obj14[2] = uploader._file;
                obj.dispatch(obj14);
              }
              obj2 = closure_1_0(closure_1_3[76]);
              let result2 = obj2.showScheduleMessageSuccessToast(closure_1_10);
              c6 = 0;
              c8 = 3;
              let obj15 = { value: null, done: true };
              obj15[0] = closure_1_25;
              return obj15;
            }
            throwTypeErrorResult = inviteAnalyticsMetadata;
            throwTypeErrorResult = closure_2_10;
            if (null != closure_2_10) {
              throwTypeErrorResult = inviteAnalyticsMetadata;
              throwTypeErrorResult = stickerIds;
              c6 = 2;
              throwTypeErrorResult = closure_1_0;
              throwTypeErrorResult = closure_1_3;
              obj16 = { channelId: null, scheduledTimestamp: null, messageSendData: null };
              throwTypeErrorResult = closure_0;
              obj16[0] = closure_0;
              throwTypeErrorResult = scheduledTimestamp;
              obj16[1] = scheduledTimestamp;
              throwTypeErrorResult = obj4;
              obj16[2] = obj4.message;
              c7 = 4;
              c8 = 1;
              let obj17 = { value: null, done: false };
              obj17[0] = closure_1_0(closure_1_3[75]).createScheduledMessage(obj16);
              return obj17;
            } else {
              throwTypeErrorResult = inviteAnalyticsMetadata;
              throwTypeErrorResult = new.target;
              throwTypeErrorResult = new.target;
              throwTypeErrorResult = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                closure_2 = Date.now();
                closure_2_1(closure_2_3[72]).length;
                const rounded = Math.floor(10000 * Math.random());
                closure_2_50.info("Queueing message to be sent LogId:" + rounded);
                closure_2_1(closure_2_3[72]).enqueue(obj4, (ok) => {
                  pendingReplyActionSource = ok;
                  if (ok.ok) {
                    obj14 = closure_3_1(closure_3_3[65]);
                    obj14.donateSentMessage(closure_0, closure_0);
                    let obj = { sendAnalytics: null, poll: null };
                    obj = { duration: null, queueSize: null };
                    obj[0] = pendingReplyActionSource;
                    obj[1] = pendingReplyActionSource;
                    obj[0] = obj;
                    obj[1] = closure_1_6;
                    closure_3_55.receiveMessage(closure_0, ok.body, true, obj);
                    if (null != c2.alsoForwardToChannelId) {
                      let obj17 = closure_3_1(closure_3_3[77]);
                      let obj19 = closure_3_0(closure_3_3[52]);
                      const sendForwardResult = obj17.sendForward(closure_3_0(closure_3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId);
                      obj17.sendForward(closure_3_0(closure_3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId).then(() => {
                        const body = pendingReplyActionSource.body;
                        id = undefined;
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
                        closure_4_1(closure_4_3[37]).track(closure_4_27.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                      }).catch((arg0) => {
                        const body = pendingReplyActionSource.body;
                        id = undefined;
                        const combined = "Failed to forward thread message to parent channel LogId:" + closure_4;
                        if (body != null) {
                          id = body.id;
                        }
                        closure_4_49.log(combined, { referencedMessageId: id, channelId: closure_0, destinationChannelId: attachments.alsoForwardToChannelId, error: arg0.toString() });
                      });
                      const nextPromise = obj17.sendForward(closure_3_0(closure_3_3[52]).createMessageRecord(ok.body), c2.alsoForwardToChannelId).then(() => {
                        const body = pendingReplyActionSource.body;
                        id = undefined;
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
                        closure_4_1(closure_4_3[37]).track(closure_4_27.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                      });
                    }
                    request = request.getRequest(closure_3_1(closure_3_3[57]).cast(closure_0));
                    if (null != request) {
                      ({ guildId, userId, applicationStatus } = request);
                      obj1 = { guildId: null, channelId: null, messageId: null, joinRequestStatus: null, joinRequestUserId: null };
                      obj1[0] = guildId;
                      obj1[1] = closure_0;
                      obj1[2] = ok.body.id;
                      obj1[3] = applicationStatus;
                      obj1[4] = userId;
                      let result = closure_3_0(closure_3_3[78]).trackMemberApplicationInterviewMessage(obj1);
                      const obj21 = closure_3_0(closure_3_3[78]);
                    }
                    let result1 = closure_3_9.recordMessageSendApiResponse(closure_1_14);
                    pendingReplyActionSource = closure_3_35;
                    if (closure_1_13 === closure_3_35.REPLY) {
                      id = ok.body.id;
                      pendingReplyActionSource = closure_0;
                      if (closure_1_5 != null) {
                        const message_id = closure_1_5.message_id;
                      }
                      pendingReplyActionSource = closure_3_11;
                      pendingReplyActionSource = closure_3_11.getPendingReplyActionSource(pendingReplyActionSource);
                      if ("message_swipe" === pendingReplyActionSource) {
                        pendingReplyActionSource = null;
                        if (null != message_id) {
                          pendingReplyActionSource = closure_3_21;
                          pendingReplyActionSource = closure_3_21.getMessage(pendingReplyActionSource, message_id);
                        }
                        pendingReplyActionSource = closure_3_17;
                        pendingReplyActionSource = closure_3_17.getChannel(pendingReplyActionSource);
                        pendingReplyActionSource = closure_3_25;
                        pendingReplyActionSource = closure_3_25.getCurrentUser();
                        pendingReplyActionSource = closure_3_1;
                        pendingReplyActionSource = closure_3_3;
                        pendingReplyActionSource = closure_3_27;
                        let obj2 = { message_id: null, channel_id: null, guild_id: null, swipe_action: "reply", is_own_message: null };
                        obj2[0] = id;
                        obj2[1] = pendingReplyActionSource;
                        pendingReplyActionSource = undefined;
                        if (pendingReplyActionSource != null) {
                          pendingReplyActionSource = pendingReplyActionSource.guild_id;
                        }
                        obj2[2] = pendingReplyActionSource;
                        pendingReplyActionSource = null != pendingReplyActionSource;
                        if (pendingReplyActionSource) {
                          pendingReplyActionSource = undefined;
                          if (pendingReplyActionSource != null) {
                            pendingReplyActionSource = pendingReplyActionSource.author.id;
                          }
                          pendingReplyActionSource = pendingReplyActionSource.id === pendingReplyActionSource;
                        }
                        obj2[4] = pendingReplyActionSource;
                        pendingReplyActionSource = closure_3_1(closure_3_3[37]).track(closure_3_27.MESSAGE_SWIPE_ACTION_SENT, obj2);
                        const obj25 = closure_3_1(closure_3_3[37]);
                      } else if ("message_shortcut" === pendingReplyActionSource) {
                        pendingReplyActionSource = closure_3_17;
                        pendingReplyActionSource = closure_3_17.getChannel(pendingReplyActionSource);
                        pendingReplyActionSource = closure_3_1;
                        pendingReplyActionSource = closure_3_3;
                        pendingReplyActionSource = closure_3_27;
                        let obj3 = { message_id: null, channel_id: null, guild_id: null, original_message_id: null, action: "reply" };
                        obj3[0] = id;
                        obj3[1] = pendingReplyActionSource;
                        pendingReplyActionSource = undefined;
                        if (pendingReplyActionSource != null) {
                          pendingReplyActionSource = pendingReplyActionSource.guild_id;
                        }
                        obj3[2] = pendingReplyActionSource;
                        obj3[3] = message_id;
                        pendingReplyActionSource = closure_3_0;
                        pendingReplyActionSource = closure_3_3;
                        const obj41 = closure_3_1(closure_3_3[37]);
                        pendingReplyActionSource = undefined;
                        if (pendingReplyActionSource != null) {
                          pendingReplyActionSource = pendingReplyActionSource.guild_id;
                        }
                        pendingReplyActionSource = obj3;
                        pendingReplyActionSource = Object.assign(closure_3_0(closure_3_3[33]).collectGuildAnalyticsMetadata(pendingReplyActionSource));
                        pendingReplyActionSource = closure_3_0;
                        pendingReplyActionSource = closure_3_3;
                        const obj23 = closure_3_0(closure_3_3[33]);
                        pendingReplyActionSource = obj3;
                        pendingReplyActionSource = Object.assign(closure_3_0(closure_3_3[33]).collectChannelAnalyticsMetadata(pendingReplyActionSource));
                        pendingReplyActionSource = obj41.track(closure_3_27.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
                        const obj24 = closure_3_0(closure_3_3[33]);
                      }
                    }
                    pendingReplyActionSource = closure_3_1;
                    pendingReplyActionSource = closure_3_3;
                    const obj20 = closure_3_1(closure_3_3[57]);
                    obj4 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: null, channelId: null };
                    pendingReplyActionSource = closure_3_24;
                    obj4[1] = closure_3_24.SendMessage;
                    pendingReplyActionSource = closure_0;
                    obj4[2] = closure_0;
                    pendingReplyActionSource = closure_3_1(closure_3_3[46]).dispatch(obj4);
                    pendingReplyActionSource = closure_3_1;
                    pendingReplyActionSource = closure_3_3;
                    const obj27 = closure_3_1(closure_3_3[46]);
                    let obj5 = { type: "EMOJI_TRACK_USAGE", emojiUsed: null };
                    pendingReplyActionSource = closure_1;
                    obj5[1] = closure_1;
                    pendingReplyActionSource = closure_3_1(closure_3_3[46]).dispatch(obj5);
                    pendingReplyActionSource = closure_3_1;
                    pendingReplyActionSource = closure_3_3;
                    const obj29 = closure_3_1(closure_3_3[46]);
                    const obj6 = { type: "STICKER_TRACK_USAGE", stickerIds: null };
                    pendingReplyActionSource = rounded;
                    obj6[1] = rounded;
                    pendingReplyActionSource = closure_3_1(closure_3_3[46]).dispatch(obj6);
                    pendingReplyActionSource = closure_3_1;
                    pendingReplyActionSource = closure_3_3;
                    const obj31 = closure_3_1(closure_3_3[46]);
                    let obj7 = { type: "LOCAL_MESSAGE_CREATE", message: null };
                    const obj8 = { channel_id: null, author: null };
                    pendingReplyActionSource = closure_0;
                    obj8[0] = closure_0;
                    pendingReplyActionSource = closure_3_25;
                    obj8[1] = closure_3_25.getCurrentUser();
                    obj7[1] = obj8;
                    pendingReplyActionSource = closure_3_1(closure_3_3[46]).dispatch(obj7);
                    let obj9 = { content: null, channelId: null, messageId: null, location: null, inviteAnalyticsMetadata: null };
                    obj9[0] = closure_0;
                    pendingReplyActionSource = closure_0;
                    obj9[1] = closure_0;
                    obj9[2] = ok.body.id;
                    let str4 = closure_2;
                    let str5 = closure_2;
                    if (closure_2 == null) {
                      str5 = "chat_input";
                    }
                    obj9[3] = str5;
                    pendingReplyActionSource = length;
                    obj9[4] = length;
                    ({ channelId: pendingReplyActionSource, messageId: id, location: attachments, inviteAnalyticsMetadata: pendingReplyActionSource, overrideProperties, content } = obj9);
                    if (overrideProperties === undefined) {
                      overrideProperties = {};
                    }
                    let messageByReference = overrideProperties;
                    let id2;
                    pendingReplyActionSource = uploader;
                    id2 = uploader.getId();
                    pendingReplyActionSource = closure_3_1;
                    pendingReplyActionSource = closure_3_3;
                    const obj33 = closure_3_1(closure_3_3[46]);
                    pendingReplyActionSource = closure_3_1(closure_3_3[28])(content).forEach((url) => {
                      ({ type, code } = url);
                      let obj = pendingReplyActionSource(pendingReplyActionSource[29]);
                      if (obj.isApplicationCodedLink(type)) {
                        let tmpResult = tmp(tmp2[29]);
                        const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url.url);
                        if (null != applicationCodedLinkData) {
                          ({ applicationId, type: type2 } = applicationCodedLinkData);
                          if (tmp(tmp2[30]).CodedLinkType.APP_DIRECTORY_PROFILE === type2) {
                            tmpResult = tmp(tmp2[31]);
                            const result = tmpResult.trackAppDirectoryProfileEmbed(applicationId);
                            const result1 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, closure_1_44.APP_DISCOVERY, closure_5);
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
                            const ACTIVITY = closure_1_44.ACTIVITY;
                            let referrerId = params.referrerId;
                            if (referrerId == null) {
                              referrerId = closure_5;
                            }
                            const result4 = tmpResult4.trackAppEmbedLinkSent(applicationId, ACTIVITY, referrerId, params.customId);
                          } else if (tmp(tmp2[30]).CodedLinkType.APP_OAUTH2_LINK === type2) {
                            const result5 = tmp(tmp2[32]).trackAppEmbedLinkSent(applicationId, closure_1_44.OAUTH, closure_5);
                            const tmpResult5 = tmp(tmp2[32]);
                            obj = { application_id: null };
                            obj[0] = applicationId;
                            id(tmp2[33]).trackWithMetadata(closure_1_27.APP_OAUTH2_LINK_EMBED_URL_SENT, obj);
                            const obj19 = id(tmp2[33]);
                          }
                        }
                      } else if (tmp(tmp2[30]).CodedLinkType.INVITE === type) {
                        obj = { inviteKey: null, channelId: null, messageId: null, location: null, inviteAnalyticsMetadata: null, overrideProperties: null };
                        obj[0] = code;
                        obj[1] = pendingReplyActionSource;
                        obj[2] = id;
                        obj[3] = attachments;
                        obj[4] = pendingReplyActionSource;
                        obj[5] = closure_4;
                        closure_1_53(obj);
                      } else if (tmp(tmp2[30]).CodedLinkType.TEMPLATE === type) {
                        const guildTemplate = closure_1_8.getGuildTemplate(code);
                        if (null != guildTemplate) {
                          if (guildTemplate.state !== closure_1_45.RESOLVING) {
                            obj1 = { guild_template_code: null, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
                            obj1[0] = code;
                            ({ name: obj10[1], description: obj10[2], sourceGuildId: obj10[3] } = guildTemplate);
                            id(tmp2[33]).trackWithMetadata(closure_1_27.GUILD_TEMPLATE_LINK_SENT, obj1);
                            const obj9 = id(tmp2[33]);
                          }
                        }
                      } else if (tmp(tmp2[30]).CodedLinkType.BUILD_OVERRIDE !== type) {
                        if (tmp(tmp2[30]).CodedLinkType.EXPERIMENT !== type) {
                          if (tmp(tmp2[30]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
                            if (tmp(tmp2[30]).CodedLinkType.EVENT !== type) {
                              if (tmp(tmp2[30]).CodedLinkType.CHANNEL_LINK !== type) {
                                if (tmp(tmp2[30]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                                  const result6 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, closure_1_44.ACTIVITY_INVITE, closure_5);
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
                                          obj2[1] = closure_1_27.QUEST_LINK_SHARED;
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
                                          obj4 = { game_id: null };
                                          obj4[0] = code;
                                          obj1.track(closure_1_27.GAME_PROFILE_LINK_EMBED_SENT, obj4);
                                        } else if (tmp(tmp2[30]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                          if (tmp(tmp2[30]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (tmp(tmp2[30]).CodedLinkType.USER_PROFILE !== type) {
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
                      }
                    });
                    let str6 = str4;
                    pendingReplyActionSource = closure_0;
                    if (str4 == null) {
                      str6 = "chat_input";
                    }
                    pendingReplyActionSource = c2;
                    id = ok.body.id;
                    attachments = str6;
                    pendingReplyActionSource = c2.isGiftLinkSentOnBehalfOfUser;
                    pendingReplyActionSource = closure_3_0;
                    pendingReplyActionSource = closure_3_3;
                    const arr2 = closure_3_1(closure_3_3[28])(content);
                    const obj37 = closure_3_0(closure_3_3[41]);
                    pendingReplyActionSource = closure_3_0(closure_3_3[41]).findGiftCodes(closure_0).forEach((arg0) => {
                      const channel = closure_1_17.getChannel(pendingReplyActionSource);
                      if (null != channel) {
                        const obj = { location: null, gift_code: null, guild_id: null, channel_id: null, channel_type: null, message_id: null, automatic_send: null };
                        obj[0] = attachments;
                        obj[1] = arg0;
                        obj[2] = channel.getGuildId();
                        ({ id: obj3[3], type: obj3[4] } = channel);
                        obj[5] = id;
                        obj[6] = pendingReplyActionSource;
                        id(pendingReplyActionSource[33]).trackWithMetadata(closure_1_27.GIFT_CODE_SENT, obj);
                        const obj2 = id(pendingReplyActionSource[33]);
                      }
                    });
                    pendingReplyActionSource = c2;
                    if (null != c2.gifMetadata) {
                      pendingReplyActionSource = c2;
                      pendingReplyActionSource = closure_0;
                      if (str4 == null) {
                        str4 = "chat_input";
                      }
                      pendingReplyActionSource = closure_3_17;
                      let channel = closure_3_17.getChannel(pendingReplyActionSource);
                      if (null != channel) {
                        pendingReplyActionSource = closure_3_1;
                        pendingReplyActionSource = closure_3_3;
                        pendingReplyActionSource = closure_3_27;
                        const obj10 = { location: null, message_id: null, gif_provider: null, load_id: null, source_object: null, gif_url: null, gif_id: null };
                        obj10[0] = str4;
                        obj10[1] = ok.body.id;
                        ({ gif_provider: obj44[2], load_id: obj44[3], source_object: obj44[4], gif_url: obj44[5], gif_id: obj44[6] } = c2.gifMetadata);
                        pendingReplyActionSource = closure_3_0;
                        pendingReplyActionSource = closure_3_3;
                        const obj43 = closure_3_1(closure_3_3[37]);
                        pendingReplyActionSource = obj10;
                        pendingReplyActionSource = Object.assign(closure_3_0(closure_3_3[33]).collectGuildAnalyticsMetadata(channel.getGuildId()));
                        pendingReplyActionSource = closure_3_0;
                        pendingReplyActionSource = closure_3_3;
                        const obj45 = closure_3_0(closure_3_3[33]);
                        pendingReplyActionSource = obj10;
                        pendingReplyActionSource = Object.assign(closure_3_0(closure_3_3[33]).collectChannelAnalyticsMetadata(channel));
                        pendingReplyActionSource = obj43.track(closure_3_27.MESSAGE_SENT_WITH_GIF, obj10);
                        const obj46 = closure_3_0(closure_3_3[33]);
                      }
                    }
                    pendingReplyActionSource = closure_0;
                    attachments = ok.body.attachments;
                    if (attachments == null) {
                      attachments = [];
                    }
                    let items = closure_1_8;
                    if (closure_1_8 == null) {
                      items = [];
                    }
                    id = ok.body.id;
                    if (attachments.length === items.length) {
                      pendingReplyActionSource = closure_3_17;
                      pendingReplyActionSource = closure_3_17.getChannel(pendingReplyActionSource);
                      if (null != pendingReplyActionSource) {
                        pendingReplyActionSource = closure_3_12;
                        messageByReference = closure_3_12.getMessageByReference(pendingReplyActionSource);
                        pendingReplyActionSource = items.forEach((clip) => {
                          clip = clip.clip;
                          if (null != clip) {
                            let someResult = closure_4.state === closure_1_13.LOADED;
                            if (someResult) {
                              attachments = closure_4.message.attachments;
                              someResult = attachments.some(() => { ... });
                            }
                            let obj = id(pendingReplyActionSource[37]);
                            obj = {};
                            const merged = Object.assign(attachments(pendingReplyActionSource[42]).getClipBaseProperties(clip));
                            const obj3 = attachments(pendingReplyActionSource[42]);
                            const merged1 = Object.assign(attachments(pendingReplyActionSource[42]).getClipContextProperties("trackClipsShared"));
                            obj.channel_id = clip;
                            obj.guild_id = pendingReplyActionSource.getGuildId();
                            obj.channel_type = pendingReplyActionSource.type;
                            ({ applicationId: obj2.application_id, id: obj2.clip_uuid, remoteClipId: obj2.remote_clip_id } = clip);
                            obj.message_id = id;
                            obj.attachment_id = attachments[arg1].id;
                            obj.is_distributed_clip_reply = someResult;
                            obj.track(closure_1_27.CLIP_SHARED, obj);
                            obj4 = attachments(pendingReplyActionSource[42]);
                          }
                        });
                      }
                    }
                    pendingReplyActionSource = closure_1_16;
                    if (null != closure_1_16) {
                      pendingReplyActionSource = closure_3_1;
                      pendingReplyActionSource = closure_3_3;
                      let obj11 = { type: "UPLOAD_COMPLETE", channelId: null, file: null, aborted: false };
                      pendingReplyActionSource = closure_0;
                      obj11[1] = closure_0;
                      pendingReplyActionSource = closure_1_16;
                      obj11[2] = closure_1_16._file;
                      pendingReplyActionSource = closure_3_1(closure_3_3[46]).dispatch(obj11);
                      const obj39 = closure_3_1(closure_3_3[46]);
                    }
                    pendingReplyActionSource = pendingReplyActionSource(ok);
                    const findGiftCodesResult = closure_3_0(closure_3_3[41]).findGiftCodes(closure_0);
                  } else {
                    obj = { hasErr: null, status: null, code: null, error: null };
                    ({ hasErr: obj[0], status: obj[1], body } = ok);
                    code = undefined;
                    if (body != null) {
                      code = body.code;
                    }
                    obj[2] = code;
                    obj[3] = ok.err;
                    closure_3_49.log("Failed to send message", obj);
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
                            if (ok.body.code === constants.SLOWMODE_RATE_LIMITED) {
                              const retry_after = ok.body.retry_after;
                              let tmp21 = null != retry_after;
                              if (tmp21) {
                                tmp21 = retry_after > 0;
                              }
                              flag = false;
                              if (tmp21) {
                                obj5 = closure_3_1(closure_3_3[46]);
                                const obj12 = { type: "SLOWMODE_SET_COOLDOWN", channelId: null, slowmodeType: null, cooldownMs: null };
                                obj12[1] = closure_0;
                                obj12[2] = closure_3_24.SendMessage;
                                obj12[3] = retry_after * closure_3_1(closure_3_3[79]).Millis.SECOND;
                                obj5.dispatch(obj12);
                                flag = false;
                              }
                            } else {
                              pendingReplyActionSource = closure_3_0;
                              pendingReplyActionSource = closure_3_3;
                              const AUTOMOD_ERROR_CODES = closure_3_0(closure_3_3[80]).AUTOMOD_ERROR_CODES;
                              if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                                obj2 = closure_3_1(closure_3_3[46]);
                                let obj13 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData: null, errorResponseBody: null };
                                obj13[1] = closure_1_17;
                                obj14 = { code: null, message: null };
                                obj14[0] = ok.body.code;
                                obj14[1] = ok.body.message;
                                obj13[2] = obj14;
                                obj2.dispatch(obj13);
                                flag = false;
                              } else if (ok.body.code === tmp6.POGGERMODE_TEMPORARILY_DISABLED) {
                                obj1 = closure_3_1(closure_3_3[46]);
                                obj1.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" });
                                flag = false;
                              } else if (ok.body.code === tmp6.EXPLICIT_CONTENT) {
                                const EXPLICIT_CONTENT = closure_3_46.EXPLICIT_CONTENT;
                                flag = false;
                              } else {
                                let tmp8 = null != closure_1_6 || closure_1_12;
                                if (!tmp8) {
                                  tmp8 = null != closure_1_7;
                                }
                                flag = false;
                                if (!tmp8) {
                                  closure_3_55.sendClydeError(closure_0, ok.body.code);
                                  flag = false;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (flag) {
                      if (null != closure_3_21.getMessage(closure_0, closure_1_15)) {
                        closure_3_55.deleteMessage(closure_0, closure_1_15, true);
                      }
                    } else {
                      if (null != closure_1_16) {
                        obj7 = closure_3_1(closure_3_3[46]);
                        const obj15 = { type: "UPLOAD_FAIL", channelId: null, file: null, messageId: null, reason: null, noSendFailed: true };
                        obj15[1] = closure_0;
                        obj15[2] = closure_1_16._file;
                        obj15[3] = closure_1_15;
                        obj15[4] = EXPLICIT_CONTENT;
                        obj7.dispatch(obj15);
                      }
                      let hasErr = ok.hasErr;
                      if (!hasErr) {
                        hasErr = EXPLICIT_CONTENT !== closure_3_46.EXPLICIT_CONTENT;
                      }
                      if (!hasErr) {
                        let body2 = ok.body;
                        let attachments1;
                        if (body2 != null) {
                          attachments1 = body2.attachments;
                        }
                        let result2 = closure_3_55.sendExplicitMediaClydeError(closure_0, attachments1, closure_3_0(closure_3_3[50]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                        const tmp38 = closure_0;
                      }
                      obj9 = closure_3_1(closure_3_3[46]);
                      const obj16 = { type: "MESSAGE_SEND_FAILED", messageId: null, channelId: null, shouldNotify: null, reason: null };
                      obj16[1] = closure_1_15;
                      obj16[2] = closure_0;
                      obj16[3] = !c2.doNotNotifyOnError;
                      obj16[4] = EXPLICIT_CONTENT;
                      obj9.dispatch(obj16);
                      obj11 = closure_3_0(closure_3_3[74]);
                      let status;
                      if (!ok.hasErr) {
                        status = ok.status;
                      }
                      obj17 = { failureCode: null, errorMessage: null };
                      obj17[0] = status;
                      let message;
                      if (ok.hasErr) {
                        message = ok.err.message;
                      }
                      obj17[1] = message;
                      let result3 = obj11.logMessageSendFailure(obj17);
                      obj13 = closure_3_1(closure_3_3[72]);
                      let result4 = obj13.cancelPendingSendRequests(closure_0);
                      const item = result4.forEach((messageId) => {
                        logger.log("Cancelling pending message", messageId.nonce);
                        let obj = id(pendingReplyActionSource[46]);
                        obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId };
                        obj.dispatch(obj);
                      });
                    }
                    id(ok);
                  }
                }, rounded);
              });
              c8 = 3;
              obj18 = { value: null, done: true };
              obj18[0] = throwTypeErrorResult;
              return obj18;
            }
          } catch (throwTypeErrorResult) {
            messageReference = throwTypeErrorResult;
            if (tmp4 === c6) {
              throwTypeErrorResult = tmp2;
              c8 = tmp2;
              throw throwTypeErrorResult;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c7 = throwTypeErrorResult;
            } else {
              c7 = tmp2;
            }
          }
        }
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    let obj = dispatcherDefault;
    obj = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj);
  },
  startEditMessageRecord(id, flags, source) {
    let obj = hasFlag;
    if (obj.hasFlag(flags.flags, closure_33.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === callback(table[81]).ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        obj = { type: "MESSAGE_START_EDIT", channelId: null, messageId: null, content: null, source: null };
        obj[1] = id;
        obj[2] = flags.id;
        obj[3] = joined;
        obj[4] = source;
        dispatcherDefault.dispatch(obj);
      }
    }
    obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    dispatcherDefault.dispatch(obj);
  },
  updateEditMessage(channelId, textValue, richValue) {
    let obj = dispatcherDefault;
    obj = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj);
  },
  endEditMessage(id, response) {
    let obj = dispatcherDefault;
    obj = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj);
  },
  editMessage(id, id2, parsed) {
    closure_0 = id;
    closure_1 = id2;
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
              closure_1 = tmp2;
              closure_0 = tmp3;
              closure_0 = undefined;
              closure_1 = undefined;
              obj2 = undefined;
              (function tryTrackEditMessageSwipeSend(closure_1_1, closure_1_0) {
                if ("message_swipe" === editActionSource.getEditActionSource(closure_1_0)) {
                  channel = channel.getChannel(closure_1_0);
                  let obj = callback(695);
                  obj = { message_id: null, channel_id: null, guild_id: null, swipe_action: "edit", is_own_message: true };
                  obj[0] = closure_1_1;
                  obj[1] = closure_1_0;
                  let guild_id;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  obj[2] = guild_id;
                  obj.track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj);
                }
              })(closure_1_1, closure_1_0);
              obj1 = closure_1_1(7519);
              obj2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0);
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
            obj3[0] = closure_1_0(7588).MessageDataType.EDIT;
            obj3[1] = obj2;
            closure_1_1(7588).enqueue(obj3, (hasErr) => {
              hasErr = hasErr.hasErr;
              let hasItem = !hasErr;
              if (!hasErr) {
                const AUTOMOD_ERROR_CODES = closure_2_0(7857).AUTOMOD_ERROR_CODES;
                hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
              }
              if (hasItem) {
                let obj = { type: null, message: null };
                obj[0] = closure_2_0(7588).MessageDataType.EDIT;
                obj[1] = obj2;
                obj1 = closure_2_1(706);
                obj = { type: "MESSAGE_EDIT_FAILED_AUTOMOD", messageData: null, errorResponseBody: null };
                obj[1] = obj;
                obj = { code: null, message: null };
                obj[0] = hasErr.body.code;
                obj[1] = hasErr.body.message;
                obj[2] = obj;
                obj1.dispatch(obj);
              }
              const AccessibilityAnnouncer = closure_2_0(1362).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_2_0(1233).intl;
              const string = intl.string;
              const t = closure_2_0(1233).t;
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
              closure_2_55.endEditMessage(closure_0, tmp14);
              obj1 = { channelId: tmp13, messageId: closure_1 };
              closure_2_55.focusMessage(obj1);
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
    closure_0 = id;
    closure_1 = id2;
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
              closure_1 = tmp5;
              let flags = tmp2;
              flags = undefined;
              obj1 = closure_1_1(7519);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0);
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
            flags = closure_1_21.getMessage(flags, closure_1);
            if (null != flags) {
              const HTTP = closure_1_0(527).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = closure_1_28.MESSAGE(flags, closure_1);
              const obj3 = { flags: null };
              obj3[0] = closure_1_0(1398).setFlag(flags.flags, closure_1_33.SUPPRESS_EMBEDS, true);
              obj2[1] = obj3;
              const obj8 = closure_1_0(1398);
              obj2[3] = closure_1_0(527).rejectWithMigratedError();
              HTTP.patch(obj2);
              const obj9 = closure_1_0(527);
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
    closure_0 = id;
    closure_1 = id2;
    closure_2 = arg2;
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
              closure_1 = tmp5;
              let flags = tmp2;
              flags = undefined;
              obj1 = closure_1_1(7519);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0);
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
            flags = closure_1_21.getMessage(flags, closure_1);
            if (null != flags) {
              const HTTP = closure_1_0(527).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = closure_1_28.MESSAGE(flags, closure_1);
              const obj3 = { flags: null };
              obj3[0] = closure_1_0(1398).setFlag(flags.flags, closure_1_33.IS_GUILD_OFFICIAL, c2);
              obj2[1] = obj3;
              const obj8 = closure_1_0(1398);
              obj2[3] = closure_1_0(527).rejectWithMigratedError();
              HTTP.patch(obj2);
              const obj9 = closure_1_0(527);
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
    closure_0 = id;
    closure_1 = id2;
    closure_2 = found;
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
              closure_0 = tmp4;
              obj1 = v0(closure_1_3[82]);
              v0 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0);
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
            const HTTP = closure_1_0(closure_1_3[51]).HTTP;
            const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = closure_1_28.MESSAGE(closure_0, v0);
            const obj3 = { attachments: null };
            obj3[0] = c2;
            obj2[1] = obj3;
            obj2[3] = closure_1_0(closure_1_3[51]).rejectWithMigratedError();
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
    closure_0 = arg0;
    closure_1 = arg1;
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
              closure_1 = tmp4;
              closure_0 = tmp4;
              if (c2) {
                (function dispatchDelete() {
                  let obj = callback(706);
                  obj = { type: "MESSAGE_DELETE", id: callback, channelId: closure_0 };
                  obj.dispatch(obj).then(() => {
                    const AccessibilityAnnouncer = callback(1362).AccessibilityAnnouncer;
                    const intl = callback(1233).intl;
                    AccessibilityAnnouncer.announce(intl.string(callback(1233).t.RYMs7s));
                  });
                })();
                dependencyMap = 3;
              } else {
                obj1 = closure_1_1(7519);
                c2 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const HTTP = closure_1_0(527).HTTP;
            const obj2 = { url: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = closure_1_28.MESSAGE(closure_0, closure_1);
            obj2[2] = closure_1_0(527).rejectWithMigratedError();
            const obj7 = closure_1_0(527);
            HTTP.del(obj2).then(() => {
              let obj = callback(706);
              obj = { type: "MESSAGE_DELETE", id: callback, channelId: closure_0 };
              obj.dispatch(obj).then(() => {
                const AccessibilityAnnouncer = callback(1362).AccessibilityAnnouncer;
                const intl = callback(1233).intl;
                AccessibilityAnnouncer.announce(intl.string(callback(1233).t.RYMs7s));
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
      let obj = collectGuildAnalyticsMetadataDefault;
      obj = { message_name: null, message_author: null };
      obj[0] = loggingName.loggingName;
      obj[1] = loggingName.author.username;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj);
    }
    const result = fetchAndReconcileGiftIntentDismissals.logGiftIntentMessageDismissed(loggingName.channel_id, loggingName.id);
    this.deleteMessage(loggingName.channel_id, loggingName.id, true);
  },
  revealMessage(id, messageId) {
    let obj = dispatcherDefault;
    obj = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj);
  },
  crosspostMessage(id, id2) {
    closure_0 = id;
    closure_1 = id2;
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
              closure_1 = tmp3;
              c0 = tmp7;
              c0 = undefined;
              dependencyMap = 1;
              const HTTP = closure_1_0(527).HTTP;
              obj1 = { url: null, oldFormErrors: true, failImmediatelyWhenRateLimited: true, rejectWithError: null };
              obj1[0] = closure_1_28.MESSAGE_CROSSPOST(closure_1_0, closure_1_1);
              obj1[3] = closure_1_0(527).rejectWithMigratedError();
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
              const intl2 = closure_1_0(1233).intl;
              let obj3 = { retryAfter: null };
              const _Math = Math;
              obj3[0] = Math.floor(closure_1.body.retry_after / 60);
              let formatToPlainStringResult = intl2.formatToPlainString(closure_1_0(1233).t["77cuqz"], obj3);
            } else {
              const intl = closure_1_0(1233).intl;
              formatToPlainStringResult = intl.string(closure_1_0(1233).t.z2gyNF);
            }
            c0 = formatToPlainStringResult;
            obj3 = closure_1_1(4857);
            const obj4 = { title: null, body: null, confirmText: null };
            const intl3 = closure_1_0(1233).intl;
            obj4[0] = intl3.string(closure_1_0(1233).t.Vd1hs6);
            obj4[1] = c0;
            const intl4 = closure_1_0(1233).intl;
            obj4[2] = intl4.string(closure_1_0(1233).t.BddRzS);
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
        const intl = getSystemLocale.intl;
        let stringResult = intl.string(getSystemLocale.t["5EMPA7"]);
      }
      return stringResult;
    }
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t["/jUd2+"]);
  }
};
let obj10 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Oc1Zjw);
  }
};
let obj11 = {
  messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.DYFPg2, { maxSizeMb: items2.MAX_TOTAL_ATTACHMENT_SIZE_MB });
  }
};
let obj12 = {
  messageName: "CLOUD_UPLOAD_NOT_FOUND",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.bQldfH);
  }
};
let obj13 = {
  messageName: "INVALID_PERMISSIONS",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zl4Weq);
  }
};
let obj2 = {
  messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["aY+lLC"]);
  }
};
let obj3 = {
  messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
  }
};
let obj4 = {
  messageName: "HARMFUL_URL_BLOCKED",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WxX2Fd);
  }
};
let obj5 = {
  messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.k1Cjqr);
  }
};
let obj6 = {
  messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Z5SUuv);
  }
};
let obj7 = {
  messageName: "BOT_DM_RATE_LIMITED",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E8nbNb);
  }
};
let obj8 = {
  messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aRUbah);
  }
};
let obj9 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
  messageGetter() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/meGhR"]);
  }
};
const tmp6 = new timestampDefault("MessageQueue");
let result = require("set").fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj14;