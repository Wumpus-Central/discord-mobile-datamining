// discord_app/actions/MessageActionCreators.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import HelpdeskUtilsDefault from "../utils/HelpdeskUtils.tsx";
import PremiumUtilsDefault from "../utils/PremiumUtils.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import UploadUtils from "../utils/UploadUtils.tsx";
import MessageCacheStatsDefault from "../modules/local_message_caching/MessageCacheStats.tsx";
import ExplicitMediaRedactionUtils from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import createMessage from "../modules/messages/createMessage.tsx";
import createNonce from "../modules/messages/createNonce.tsx";
import getInviteURLDefault from "../modules/instant_invite/getInviteURL.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import PremiumGiftingIntentActionCreators from "../modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../modules/gateway/GatewayConnectionStore.tsx";
import GuildJoinRequestStore from "../modules/guild_member_verification/GuildJoinRequestStore.tsx";
import GuildTemplateStore from "../modules/guild_templates/GuildTemplateStore.tsx";
import MessageRoundtripTrackerStore from "../modules/messages/MessageRoundtripTrackerStore.tsx";
import PoggermodeSettingsStore from "../modules/poggermode/PoggermodeSettingsStore.tsx";
import PendingReplyStore from "../modules/replies/PendingReplyStore.tsx";
import ReferencedMessageStore from "../modules/replies/ReferencedMessageStore.tsx";
import StickersStore from "../modules/stickers/StickersStore.tsx";
import ApplicationStreamingStore from "../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import EditMessageStore from "../stores/EditMessageStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import InviteStore from "../stores/InviteStore.tsx";
import MessageStore from "../stores/MessageStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import PresenceStore from "../stores/PresenceStore.tsx";
import ReadStateStore from "../stores/ReadStateStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const createMessageDefault = createMessage;

require = fn;
function trackInvite(channelId) {
  ({ inviteKey, messageId, location: _location, inviteAnalyticsMetadata, overrideProperties } = channelId);
  if (overrideProperties === undefined) {
    overrideProperties = {};
  }
  id = AuthenticationStore.getId();
  const invite = InviteStore.getInvite(inviteKey);
  let obj = InviteCodeUtils;
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    let tmp3Result = tmp3(7735);
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
    tmp3Result = tmp3(7694);
    const result2 = tmp3Result.trackAppEmbedLinkSent(id1, LinkType.ACTIVITY_INVITE, id);
  }
  let channel = ChannelStore.getChannel(channelId.channelId);
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
          const lastActiveStream = ApplicationStreamingStore.getLastActiveStream();
          STREAM = GDM_INVITE;
          if (null != lastActiveStream) {
            STREAM = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj.destination_user_id = lastActiveStream.ownerId;
              const streamerApplication = tmp3(7738).getStreamerApplication(lastActiveStream, PresenceStore);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj.application_id = id3;
              STREAM = constants3.STREAM;
              const tmp3Result1 = tmp3(7738);
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
    let inviteInstanceId = tmp3(4545).getInviteInstanceId(result.baseCode, messageId);
    if (inviteInstanceId == null) {
      inviteInstanceId = null;
    }
    obj.invite_instance_id = inviteInstanceId;
    const merged1 = Object.assign(overrideProperties);
    const tmp3Result2 = tmp3(4545);
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.INVITE_SENT, obj);
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
      let inviteInstanceId1 = tmp3(4545).getInviteInstanceId(result.baseCode, messageId);
      if (inviteInstanceId1 == null) {
        inviteInstanceId1 = null;
      }
      obj2.invite_instance_id = inviteInstanceId1;
      const merged3 = Object.assign(overrideProperties);
      const tmp3Result3 = tmp3(4545);
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.INVITE_SENT, obj2);
    }
  }
}
const ReferencedMessageState = fn(7595).ReferencedMessageState;
const SlowmodeType = fn(7687).SlowmodeType;
const Constants = fn(1074);
const AbortCodes = Constants.AbortCodes;
({ AnalyticEvents: closure_27, Endpoints: closure_28, Permissions, ChannelTypes: closure_29, LoggingInviteTypes: closure_30, SendTypes: items, InviteStates: closure_32, MessageFlags: closure_33, MAX_MESSAGES_FOR_JUMP: closure_34, MessageTypes: closure_35, AllowedMentionTypes: closure_36, HelpdeskArticles: closure_37, MarketingURLs: closure_38, MessageReferenceTypes: closure_39, LOCAL_BOT_ID: closure_40, NON_USER_BOT_DISCRIMINATOR: closure_41, MessageStates: closure_42, ActivityActionTypes: closure_43 } = Constants);
const LinkType = fn(7689).LinkType;
const GuildTemplateStates = fn(7326).GuildTemplateStates;
const MessageConstants = fn(4553);
({ FileUploadErrorTypes: closure_46, MessageSendLocation: closure_47 } = MessageConstants);
const MediaPlayerManager = fn(17).NativeModules.MediaPlayerManager;
const logger = new LoggerDefault("MessageActionCreators");
const tmp5 = new LoggerDefault("MessageActionCreators");
let closure_50 = new LoggerDefault("MessageQueue");
let c51 = false;
class RemoteFetch {
  constructor() {
    return Object.assign({ completed: false });
  }
}
RemoteFetch.prototype["markComplete"] = function markComplete() {
  this.completed = true;
};
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    let obj = HelpdeskUtilsDefault;
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (rawRecipients == null) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = util.intl;
          obj = { helpUrl: articleURL };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.SkGL7l, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = util.intl;
    formatToPlainStringResult = intl.formatToPlainString(util.t.llTkqr, { helpUrl: articleURL });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    const intl = util.intl;
    const obj = { helpUrl: HelpdeskUtilsDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
    return intl.formatToPlainString(util.t.SkGL7l, obj);
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
          const intl = util.intl;
          let stringResult = intl.string(util.t["5EMPA7"]);
        }
        return stringResult;
      }
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["/jUd2+"]);
    }
  },
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: {
    messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t["aY+lLC"]);
    }
  },
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: {
    messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
    messageGetter() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
    }
  },
  [AbortCodes.HARMFUL_URL_BLOCKED]: {
    messageName: "HARMFUL_URL_BLOCKED",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.WxX2Fd);
    }
  },
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.k1Cjqr);
    }
  },
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
    messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.Z5SUuv);
    }
  },
  [AbortCodes.RATE_LIMIT_DM_OPEN]: {
    messageName: "BOT_DM_RATE_LIMITED",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.E8nbNb);
    }
  },
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.aRUbah);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t["/meGhR"]);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.Oc1Zjw);
    }
  },
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
    messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
    messageGetter() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.DYFPg2, { maxSizeMb: UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE_MB });
    }
  },
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: {
    messageName: "CLOUD_UPLOAD_NOT_FOUND",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.bQldfH);
    }
  },
  [AbortCodes.INVALID_PERMISSIONS]: {
    messageName: "INVALID_PERMISSIONS",
    messageGetter() {
      const intl = util.intl;
      return intl.string(util.t.zl4Weq);
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
    DispatcherDefault.dispatch(obj);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      let obj = { message_author: "Clyde", message_name: messageName };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj);
    }
    obj = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    obj14.receiveMessage(id, createMessage.createBotMessage(obj));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    let obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: __initData11.EPHEMERAL, author: null };
    obj = { id, username: "Nitro Notification", discriminator, avatar: "nitro", bot: true };
    obj.author = obj;
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj.channel_id = channelId;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    let obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: __initData11.EPHEMERAL, author: null, giftingPrompt };
    obj = { id, username: "Gifting Prompt", discriminator, avatar: "gifting_prompt", bot: true };
    obj.author = obj;
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    let obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: __initData11.EPHEMERAL, author: null, boostingPrompt };
    obj = { id, username: "Guild Boost Upsell", discriminator, avatar: "guild_boost_upsell", bot: true };
    obj.author = obj;
    obj = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendClydeError(id, code) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = ChannelStore.getChannel(id);
    if (null != channel) {
      let obj = closure_54[num];
      if (null != obj) {
        obj14.sendBotMessage(id, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = util.intl;
        obj = { helpUrl: HelpdeskUtilsDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
        const _HermesInternal = HermesInternal;
        obj14.sendBotMessage(id, intl.formatToPlainString(util.t.SkGL7l, obj), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(util.t.SkGL7l, obj);
      }
    }
  },
  sendExplicitMediaClydeError(channelId, attachments, EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      let obj = { isDM: channel.isDM(), isGDM: channel.isGroupDM() };
      const match = _mod4745.match(obj);
      const withResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      });
      const withResult1 = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      });
      ({ message, messageName } = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t.i4AbAS);
        return obj;
      }));
      const otherwiseResult = match.with({ isDM: true }, () => {
        const obj = { message: null, messageName: "BOT_DM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = { message: null, messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t["mktny/"]);
        return obj;
      }).otherwise(() => {
        const obj = { message: null, messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
        const intl = require("util").intl;
        obj.message = intl.string(require("util").t.i4AbAS);
        return obj;
      });
      const nonce = createNonce.createNonce();
      obj14.sendBotMessage(channelId, message, messageName, nonce);
      obj = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT, messageId: nonce, channelId, context: EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED };
      const result = ExplicitMediaRedactionUtils.trackMediaRedactionAction(obj);
      let tmp = null != attachments;
      if (tmp) {
        tmp = attachments.length > 0;
      }
      if (tmp) {
        const obj1 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: nonce, channelId, attachments };
        obj1.dispatch(obj1);
      }
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    const obj = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj);
  },
  clearChannel(channelId) {
    const obj = { type: "CLEAR_MESSAGES", channelId };
    obj.dispatch(obj);
  },
  jumpToPresent(channelId, limit) {
    obj14.trackJump(channelId, null, "Present");
    let obj = { present: true };
    if (MessageStore.hasPresent(channelId)) {
      obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: null, channelId: null, limit: null };
      obj.jump = obj;
      obj.channelId = channelId;
      obj.limit = limit;
      DispatcherDefault.dispatch(obj);
    } else {
      const obj1 = { channelId, limit, jump: obj };
      const messages = obj.fetchMessages(obj1);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    const obj = { context: Present, channel_id: channelId, message_id: id };
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
    return obj14.fetchMessages({ channelId, limit, jump: { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete }, isPreload, skipLocalFetch, avoidInitialScroll });
  },
  focusMessage(channelId) {
    const messages = obj14.fetchMessages({ channelId: channelId.channelId, limit, focus: { messageId: channelId.messageId } });
  },
  fetchMessage(arg0) {
    ({ channelId: require, messageId: importDefault } = arg0);
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              const v0 = 0;
              closure_128_0 = undefined;
              const HTTP = v0(1272).HTTP;
              const request = { url: closure_1_28.MESSAGES(_require), query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
              const obj1 = { limit: 1, around };
              request.query = obj1;
              request.rejectWithError = v0(1272).rejectWithMigratedError();
              c2 = 1;
              dependencyMap = 1;
              const obj2 = { value: HTTP.get(request), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = value;
            if (closure_128_0.body.length > 0) {
              obj = v0(4783);
              dependencyMap = 3;
              const obj4 = { value: obj.createMessageRecord(closure_128_0.body[0]), done: true };
              return obj4;
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
    limit = channelId.limit;
    let jump = channelId.jump;
    ({ focus, truncate } = channelId);
    ({ forICYMI: GatewayConnectionStore, avoidInitialScroll: GuildJoinRequestStore, fetchKey } = channelId);
    let messageId;
    let merged1;
    ({ isPreload, skipLocalFetch, feature } = channelId);
    const channel = ChannelStore.getChannel(channelId);
    closure_9 = GatewayConnectionStore.isConnectedOrOverlay();
    const timestamp = Date.now();
    if (null != channel) {
      if (channel.type === constants2.GUILD_STORE) {
        return false;
      }
    }
    if (channelId !== channelId(limit[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      logger.log("Fetching messages for " + channelId + " between " + after + " and " + before + ". jump=" + JSON.stringify(jump));
      let obj = { channelId, before, after, limit, jump, focus, truncate };
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
        if (typeof RemoteFetch === "function") {
          merged1 = Object.assign({ completed: false });
          if (!skipLocalFetch) {
            const self = this;
            if (fetchKey == null) {
              fetchKey = timestamp;
            }
            const localMessages = this.fetchLocalMessages(channelId, fetchKey, before, after, limit, merged1);
          }
          const HTTP = tmp4(tmp5[51]).HTTP;
          const request = { url: closure_28.MESSAGES(channelId), query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
          const obj1 = { before, after, limit, around: messageId, preload: isPreload, feature };
          request.query = obj1;
          request.rejectWithError = tmp4(tmp5[51]).rejectWithMigratedError();
          value = HTTP.get(request);
          return value.then((result) => {
            let body = result;
            const fetchMessages = before(limit[54]).fetchMessages;
            fetchMessages.recordEnd();
            const dispatchMessages = before(limit[54]).dispatchMessages;
            dispatchMessages.measure(() => {
              body = body.body;
              let flag = null != messageId;
              if (!flag) {
                let tmp7 = body.length === limit;
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
                  tmp10 = body.length === limit;
                }
                flag2 = tmp10;
              }
              let flag3 = flag2;
              let tmp12 = flag;
              if (null != messageId) {
                const _Math = Math;
                const rounded = Math.floor(limit / 2);
                const items = [tmp5];
                HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
                const found = items.filter((item, index, arr) => arr.indexOf(item) === index);
                const sorted = found.sort(SnowflakeUtilsDefault.compare);
                const index = sorted.indexOf(tmp5);
                if (index < rounded + limit % 2 - 1) {
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
                    if (body[0].id === ReadStateStore.lastMessageId(channelId)) {
                      flag3 = false;
                      tmp12 = flag;
                    }
                  }
                }
              }
              logger.log("Fetched " + body.length + " messages for " + channelId + " isBefore:" + null != before + " isAfter:" + null != after);
              merged1.markComplete();
              const obj = { type: "LOAD_MESSAGES_SUCCESS", channelId, messages: body, isBefore: tmp2, isAfter: tmp4, hasMoreBefore: tmp12, hasMoreAfter: flag3, limit, jump, forICYMI, isStale: null, truncate: null, avoidInitialScroll: null };
              let tmp19 = !closure_9;
              if (closure_9) {
                tmp19 = GatewayConnectionStore.lastTimeConnectedChanged() >= timestamp;
              }
              obj.isStale = tmp19;
              obj.truncate = truncate;
              obj.avoidInitialScroll = avoidInitialScroll;
              obj.dispatch(obj);
              let tmp23 = fetchKey;
              if (fetchKey == null) {
                tmp23 = timestamp;
              }
              const result = MessageCacheStatsDefault.recordChannelFetchedNetwork(channelId, tmp23, tmp, tmp3, limit, body);
            });
            return true;
          }, () => {
            logger.log("Failed to fetch messages for " + channelId);
            const obj = { type: "LOAD_MESSAGES_FAILURE", channelId };
            obj.dispatch(obj);
            return false;
          });
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        tmp16 = null == jump && null != focus;
        const tmp6Result1 = before(tmp5[46]);
      }
    }
  },
  fetchLocalMessages(channelId, fetchKey, before, after, limit, merged1) {
    closure_0 = channelId;
    closure_1 = fetchKey;
    closure_2 = before;
    closure_3 = after;
    closure_4 = limit;
    asyncGeneratorStep = merged1;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          const num2 = 0;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              basicChannel = basicChannel.getBasicChannel(closure_0);
              closure_128_0 = basicChannel;
              const orCreate = tmp2(5272).getOrCreate(closure_0);
              const obj13 = tmp2(5272);
              const databaseResult = tmp2(1986).database();
              closure_128_1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  if (null == closure_2) {
                    if (null == closure_3) {
                      if (orCreate.ready) {
                        if (!orCreate.cached) {
                          tmp2(9).addLocalMessages(closure_0, -2);
                          const obj8 = tmp2(9);
                        }
                      }
                      c2 = 1;
                      dependencyMap = 1;
                      let obj1 = { value: num2(2006).tryLoadAsync(async () => closure_1(closure_3[60]).load(closure_1_1, num2, limit)), done: false };
                      return obj1;
                    }
                    dependencyMap = 3;
                  }
                }
              }
              obj14 = tmp2(1986);
              tmp2(9).addLocalMessages(closure_0, -1);
              const obj7 = tmp2(9);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_2 = value;
            if (null == closure_128_2) {
              obj = tmp2(9);
              obj.addLocalMessages(closure_129_0, -3);
            }
          }
          const _HermesInternal = HermesInternal;
          logger.log("fetched " + closure_128_2.messages.length + " messages from local database (channel_id: " + closure_129_0 + ", remote_fetch_completed: " + closure_129_5.completed + ")");
          obj1 = tmp2(9);
          obj1.addLocalMessages(closure_129_0, closure_128_2.messages.length);
          if (!closure_129_5.completed) {
            if (closure_128_2.messages.length > num2) {
              let tmp30 = closure_128_2.messages.length >= closure_129_4;
              if (tmp30) {
                tmp30 = closure_128_2.connectionId === GatewayConnectionStore.lastTimeConnectedChanged();
              }
              closure_128_3 = tmp30;
              obj2 = tmp2(7488);
              const result = obj2.recordChannelFetchedLocal(closure_129_0, closure_129_1, closure_129_2, closure_129_3, closure_129_4, closure_128_2.messages);
              let obj3 = tmp2(573);
              obj3 = { type: "LOCAL_MESSAGES_LOADED", guildId: closure_128_0.guild_id, channelId: closure_129_0, users: closure_128_2.users, members: closure_128_2.members, messages: closure_128_2.messages, stale: !closure_128_3 };
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
  fetchNewLocalMessages(channelId, arg1) {
    closure_0 = channelId;
    closure_1 = arg1;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const v0 = 0;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let orCreate;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_5 = undefined;
              basicChannel = basicChannel.getBasicChannel(closure_0);
              closure_128_0 = basicChannel;
              const databaseResult = tmp2(1986).database();
              closure_128_1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  let obj1 = tmp2(5272);
                  orCreate = obj1.getOrCreate(closure_0);
                  if (!orCreate.hasMoreAfter) {
                    let obj2 = v0(2006);
                    c2 = 1;
                    dependencyMap = 1;
                    obj1 = { value: obj2.tryLoadAsync(async () => closure_1(7477).load(closure_1_1, c0, closure_1)), done: false };
                    return obj1;
                  }
                }
              }
              dependencyMap = 3;
              const obj11 = tmp2(1986);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_3 = value;
            if (null != closure_128_3) {
              orCreate = tmp2(5272).getOrCreate(closure_129_0);
              const lastResult = orCreate.last();
              id = undefined;
              if (lastResult != null) {
                id = lastResult.id;
              }
              closure_128_4 = id;
              if (null == closure_128_4) {
                let messages = closure_128_3.messages;
              } else {
                messages = closure_128_3.messages;
                messages = messages.filter((id) => closure_1(11).compare(id.id, closure_1_4) > 0);
              }
              closure_128_5 = messages;
              const _HermesInternal = HermesInternal;
              logger.log("Fetched " + closure_128_3.messages.length + " messages from the cache after foregrounding. " + closure_128_5.length + " are new");
              if (0 !== closure_128_5.length) {
                obj2 = { type: "LOCAL_MESSAGES_LOADED", guildId: closure_128_0.guild_id, channelId: closure_129_0, users: closure_128_3.users, members: closure_128_3.members, messages: closure_128_5, stale: true, isForegroundCacheLoad: null };
                const obj8 = tmp2(573);
                obj2.isForegroundCacheLoad = v0(5275).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj8.dispatch(obj2);
                const obj10 = v0(5275);
              }
              const obj7 = tmp2(5272);
            }
          }
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp27) {
          dependencyMap = tmp;
          throw tmp27;
        }
      }
    })();
  },
  _tryFetchMessagesCached(arg0) {
    ({ channelId, before, after, limit, jump, focus, truncate } = arg0);
    const messages = MessageStore.getMessages(channelId);
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
                let obj3 = DispatcherDefault;
                let obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, before, limit, truncate };
                obj3.dispatch(obj);
                let flag = true;
              }
              return flag;
            }
            const tmp4 = null == after || !messages.hasAfterCached(after);
            flag = !tmp4;
            if (!tmp4) {
              let obj1 = DispatcherDefault;
              obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, after, limit, truncate };
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
            obj1 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump, limit, truncate };
            DispatcherDefault.dispatch(obj1);
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
            const obj2 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, focus, limit, truncate };
            DispatcherDefault.dispatch(obj2);
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
          num = SnowflakeUtilsDefault.extractTimestamp(messageId5);
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        const hasMoreBefore = messages.hasMoreBefore;
        let flag4 = !hasMoreBefore;
        if (!hasMoreBefore) {
          flag4 = null != firstResult;
        }
        if (flag4) {
          flag4 = SnowflakeUtilsDefault.extractTimestamp(firstResult.id) >= num;
        }
        if (!flag4) {
          const hasMoreAfter = messages.hasMoreAfter;
          let tmp25 = !hasMoreAfter;
          if (!hasMoreAfter) {
            tmp25 = null != lastResult;
          }
          if (tmp25) {
            tmp25 = SnowflakeUtilsDefault.extractTimestamp(lastResult.id) <= num;
          }
          flag4 = tmp25;
        }
        if (!flag4) {
          let tmp28 = null != firstResult && null != lastResult;
          if (tmp28) {
            tmp28 = SnowflakeUtilsDefault.extractTimestamp(firstResult.id) < num;
          }
          if (tmp28) {
            tmp28 = SnowflakeUtilsDefault.extractTimestamp(lastResult.id) > num;
          }
          flag4 = tmp28;
        }
        if (flag4) {
          const obj4 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump: tmp13, limit };
          DispatcherDefault.dispatch(obj4);
          flag4 = true;
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
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp5;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              if (tmp2.reaction) {
                c4 = 3;
                const obj1 = { value: Promise.resolve(), done: true };
                return obj1;
              } else {
                dependencyMap = 1;
                c4 = 1;
                let obj2 = { value: tmp2(7754)(closure_0), done: false };
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = value;
            if (null != closure_129_0) {
              c4 = 3;
              const obj4 = { value: obj14.sendMessage(closure_129_0, closure_130_1, closure_130_2, closure_130_3), done: true };
              return obj4;
            } else {
              const nonce = closure_130_3.nonce;
              closure_0 = nonce;
              if (nonce == null) {
                obj = closure_0(7753);
                closure_0 = obj.createNonce();
              }
              closure_129_1 = closure_0;
              const obj5 = {};
              const merged = Object.assign(closure_130_3);
              obj5.nonce = closure_129_1;
              closure_130_3 = obj5;
              obj2 = tmp2(7755);
              closure_129_2 = obj2.backgroundify(function _trySend() {
                return closure_2_55._sendMessage(closure_1_0, closure_1_1, dependencyMap);
              }, undefined);
              if (null == closure_130_3.scheduledTimestamp) {
                const result = MessageRoundtripTrackerStore.recordMessageSendAttempt(closure_130_0, closure_129_1, closure_130_3);
              }
              if (ready.isReady(closure_130_0)) {
                closure_129_2();
              } else {
                if (closure_130_2) {
                  if (closure_130_0 !== closure_0(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                    const _HermesInternal = HermesInternal;
                    logger.info("Waiting for channel " + closure_130_0 + " to be ready before sending.");
                    new Promise((arg0, arg1) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      ready.whenReady(closure_1_0, () => {
                        logger.info("Channel " + closure_0 + " is ready for sending now.");
                        closure_2_2().then(closure_0, closure_1);
                      });
                    });
                  }
                }
                closure_129_2();
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
      obj = { guild_id: guildId, channel_id: pendingReply.channel.id, message_id: pendingReply.message.id };
      obj.messageReference = obj;
      let tmp2;
      if (!pendingReply.shouldMention) {
        obj = { parse: null, replied_user: false };
        const _Object = Object;
        obj.parse = Object.values(__initData14);
        tmp2 = obj;
      }
      obj.allowedMentions = tmp2;
      obj.mediaMention = pendingReply.mediaMention;
    }
    return obj;
  },
  getSendMessageOptionsForStickers(stickers) {
    stickers = stickers.stickers;
    if (null != stickers) {
      if (0 !== stickers.length) {
        if (!tmp) {
          let obj = { stickerIds: stickers };
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
      obj = { scheduledTimestamp };
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
  sendInvite(id, code, location, inviteAnalyticsMetadata, content) {
    const tmp = getInviteURLDefault(code);
    content = tmp;
    if (null != content) {
      const _HermesInternal = HermesInternal;
      content = "" + content + "\n" + tmp;
    }
    return obj14._sendMessage(id, { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, { location, inviteAnalyticsMetadata });
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
      let obj = { content: str, invalidEmojis: [], validNonShortcutEmojis: [], tts: flag };
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
  sendGreetMessage(id, stickerId, sendMessageOptionsForReply) {
    _require = id;
    closure_1 = stickerId;
    let obj = sendMessageOptionsForReply;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_28.MESSAGES_GREET(id), body: null, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError(), context: null };
    obj = { sticker_ids: null, allowed_mentions: allowedMentions, message_reference: messageReference };
    let items = [stickerId];
    obj.sticker_ids = items;
    request.body = obj;
    obj = { location: constants10.GREET };
    request.context = obj;
    const obj4 = require("HTTPUtils");
    return HTTP.post(request).then((body) => {
      let obj = SentMessageIntentsHandlerDefault;
      obj.donateSentMessage(body.body.content, closure_0);
      obj14.receiveMessage(closure_0, body.body);
      obj = { type: "STICKER_TRACK_USAGE", stickerIds: null };
      const items = [closure_1];
      obj.stickerIds = items;
      DispatcherDefault.dispatch(obj);
      return body;
    }, (messageId) => {
      logger.log("Failed to send greeting");
      if (429 !== messageId.status) {
        obj14.sendClydeError(channelId, messageId.body.code);
      }
      const obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId };
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
  validateMessage(invalidEmojis, currentUser, arg2) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let obj = PremiumUtilsDefault;
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = util.intl;
        let stringResult = intl.string(util.t["V5/GgC"]);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      obj = { errorMessage: stringResult, errorMessageName: str };
      return obj;
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, nonce, arg2) {
    closure_0 = arg0;
    closure_2 = arg2;
    return (async (arg0, value) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_131_0 = undefined;
              closure_131_1 = undefined;
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              closure_131_5 = undefined;
              closure_131_6 = undefined;
              closure_131_7 = undefined;
              closure_131_8 = undefined;
              closure_131_9 = undefined;
              closure_131_10 = undefined;
              closure_131_11 = undefined;
              closure_131_12 = undefined;
              closure_131_13 = undefined;
              closure_131_14 = undefined;
              closure_131_15 = undefined;
              let uploader;
              closure_131_17 = undefined;
              closure_131_18 = undefined;
              let attachments2;
              closure_131_20 = undefined;
              let file;
              let code;
              let reason;
              let responseBody;
              closure_131_25 = undefined;
              let promise = nonce(tmp5[62])(channelId);
              if (null != promise) {
                logger2.info("Converting channel to a private channel");
                c8 = 3;
                let obj1 = {
                  value: promise.then((result) => {
                              logger2.info("Finished converting channel to a private channel");
                              return closure_2_55._sendMessage(result, closure_1_1, publish);
                            }),
                  done: true
                };
                return obj1;
              } else {
                let content = nonce.content;
                closure_131_0 = content;
                ({ invalidEmojis, validNonShortcutEmojis: closure_131_1, tts } = nonce);
                let tmp75 = undefined !== tts;
                if (tmp75) {
                  tmp75 = tts;
                }
                const activityAction = publish.activityAction;
                const _location = publish.location;
                closure_131_2 = _location;
                closure_131_3 = publish.inviteAnalyticsMetadata;
                const stickerIds = publish.stickerIds;
                closure_131_4 = stickerIds;
                const messageReference = publish.messageReference;
                closure_131_5 = messageReference;
                const allowedMentions = publish.allowedMentions;
                const poll = publish.poll;
                closure_131_6 = poll;
                const sharedCustomTheme = publish.sharedCustomTheme;
                const contentInventoryEntry = publish.contentInventoryEntry;
                closure_131_7 = contentInventoryEntry;
                let attachments = publish.attachments;
                const attachmentsToUpload = publish.attachmentsToUpload;
                closure_131_8 = attachmentsToUpload;
                closure_131_9 = publish.onAttachmentUploadError;
                const announcementSendOptions = publish.announcementSendOptions;
                const withCheckpoint = publish.withCheckpoint;
                const mediaMention = publish.mediaMention;
                const scheduledTimestamp = publish.scheduledTimestamp;
                closure_131_10 = scheduledTimestamp;
                const flags = publish.flags;
                channelId = flags;
                if (flags == null) {
                  channelId = 0;
                }
                const tmp97 = tmp3(nonce(tmp5[67])(content), 2);
                let addFlagResult = channelId;
                let tmp100 = content;
                if (tmp97[0]) {
                  closure_131_0 = tmp98;
                  let obj12 = channelId(tmp5[68]);
                  addFlagResult = obj12.addFlag(tmp93, constants3.SUPPRESS_NOTIFICATIONS);
                  tmp100 = tmp98;
                }
                channel = channel.getChannel(channelId);
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                guild = guild.getGuild(guild_id);
                let obj13 = channelId(tmp5[69]);
                let addFlagResult1 = addFlagResult;
                if (obj13.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
                  obj14 = channelId(tmp5[68]);
                  addFlagResult1 = obj14.addFlag(addFlagResult, constants3.IS_GUILD_OFFICIAL);
                }
                closure_131_11 = false;
                const messageReference2 = publish.messageReference;
                let type;
                if (messageReference2 != null) {
                  type = messageReference2.type;
                }
                closure_131_12 = tmp119;
                if ("" === tmp100) {
                  if (null == activityAction) {
                    if (null == stickerIds) {
                      if (null == poll) {
                        if (null == sharedCustomTheme) {
                          if (null == contentInventoryEntry) {
                            if (!tmp119) {
                              if (null == attachments) {
                                if (!withCheckpoint) {
                                  if (null == tmp207.components) {
                                    if (null != attachmentsToUpload) {
                                      if (attachmentsToUpload.length > 0) {
                                        closure_131_11 = true;
                                      }
                                    }
                                    c8 = 3;
                                    let obj2 = { value: Promise.resolve(), done: true };
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
                  let DEFAULT = constants4.REPLY;
                } else {
                  DEFAULT = constants4.DEFAULT;
                }
                closure_131_13 = DEFAULT;
                nonce = publish.nonce;
                if (nonce == null) {
                  let obj16 = channelId(tmp5[49]);
                  nonce = obj16.createNonce();
                }
                closure_131_14 = nonce;
                closure_131_15 = nonce;
                let obj3 = { channelId, content: tmp100, tts: tmp75, type: DEFAULT, messageReference, allowedMentions, flags: null, nonce: null, poll: null, sharedCustomTheme: null, mediaMention: null };
                let tmp130;
                if (0 !== addFlagResult1) {
                  tmp130 = addFlagResult1;
                }
                obj3.flags = tmp130;
                obj3.nonce = nonce;
                let obj18 = channelId(tmp5[70]);
                obj3.poll = obj18.createPollServerDataFromCreateRequest(poll);
                obj3.sharedCustomTheme = sharedCustomTheme;
                obj3.mediaMention = mediaMention;
                const tmp128Result = nonce(tmp5[47])(obj3);
                let tmp135 = false !== publish.eagerDispatch;
                if (tmp135) {
                  tmp135 = null == scheduledTimestamp;
                }
                if (tmp135) {
                  let result = channelId(tmp5[71]).updateComboOnMessageSend(channelId, tmp128Result.id);
                  if (null != stickerIds) {
                    const mapped = stickerIds.map((item) => stickerById.getStickerById(item));
                    tmp128Result.sticker_items = mapped.filter((item) => null != item);
                  }
                  closure_1_55.receiveMessage(channelId, tmp128Result, true, publish);
                  let obj20 = channelId(tmp5[71]);
                }
                if (!c51) {
                  if (null != invalidEmojis) {
                    if (invalidEmojis.length > 0) {
                      c51 = true;
                      const validateMessageResult = closure_1_55.validateMessage(invalidEmojis, authStore.getCurrentUser(), channelId);
                      closure_1_55.sendBotMessage(channelId, validateMessageResult.errorMessage, validateMessageResult.errorMessageName);
                    }
                  }
                }
                if (null != announcementSendOptions) {
                  let SEND = channelId(tmp5[72]).MessageDataType.SEND_ANNOUNCEMENT;
                } else {
                  SEND = channelId(tmp5[72]).MessageDataType.SEND;
                }
                let obj4 = { type: SEND, message: null };
                let obj5 = { channelId, content: tmp100, nonce, tts: tmp75, message_reference: messageReference, allowed_mentions: allowedMentions, flags: addFlagResult1, analyticsLocation: _location };
                obj4.message = obj5;
                closure_131_17 = obj4;
                if (null != nonce.components) {
                  obj4.message.components = tmp207.components;
                }
                if (null != announcementSendOptions) {
                  ({ createThread: obj21.message.create_thread, threadName: obj21.message.title, publish } = announcementSendOptions);
                  if (publish == null) {
                    publish = false;
                  }
                  obj4.message.publish = publish;
                }
                if (null != activityAction) {
                  let session_id;
                  if (activityAction != null) {
                    session_id = activityAction.activity.session_id;
                  }
                  sessionId = session_id;
                  if (activityAction.type !== constants6.JOIN_REQUEST) {
                    sessionId = session_id;
                    if (activityAction.type !== tmp160.STREAM_REQUEST) {
                      sessionId = session_id;
                      if (null == session_id) {
                        sessionId = sessionId.getSessionId();
                      }
                    }
                  }
                  if (null != sessionId) {
                    let obj6 = { type: activityAction.type, session_id: sessionId, target_user_id: null };
                    ({ targetUserId: obj23.target_user_id, activity } = activityAction);
                    let tmp163 = null != activity.party;
                    if (tmp163) {
                      tmp163 = null != activity.party.id;
                    }
                    if (tmp163) {
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
                if (enabled.isEnabled()) {
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
                let tmp165 = null != attachments;
                if (tmp165) {
                  tmp165 = attachments.length > 0;
                }
                if (tmp165) {
                  obj4.message.attachments = attachments;
                }
                if (null != attachmentsToUpload) {
                  if (attachmentsToUpload.length > 0) {
                    c6 = 1;
                    let obj7 = { channelId, nonce: tmp125, items: attachmentsToUpload, message: tmp128Result, shouldUploadFailureSendNotification: null };
                    const doNotNotifyOnError = publish.doNotNotifyOnError;
                    obj7.shouldUploadFailureSendNotification = !doNotNotifyOnError;
                    c7 = 2;
                    c8 = 1;
                    let obj8 = { value: channelId(tmp5[73]).uploadMessageAttachments(obj7), done: false };
                    return obj8;
                  }
                }
                const tmp128 = nonce(tmp5[47]);
                tmp93 = channelId;
              }
            }
          } else if (1 === tmp8) {
            c6 = 0;
            closure_131_20 = closure_5;
            file = closure_131_20.file;
            code = closure_131_20.code;
            reason = closure_131_20.reason;
            responseBody = closure_131_20.responseBody;
            let obj9 = channelId(tmp5[74]);
            obj9 = { fileItems: file.items, failureCode: code, errorMessage: null };
            let msg;
            if (reason != null) {
              msg = reason.msg;
            }
            obj9.errorMessage = msg;
            let result1 = obj9.logMessageSendFailure(obj9);
            if (closure_131_9 != null) {
              tmp68(file, code, reason, responseBody);
            }
            c8 = 3;
            let obj10 = { value: undefined, done: true };
            return obj10;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              let obj11 = { value, done: true };
              return obj11;
            } else {
              closure_131_18 = value;
              if (null == closure_131_18) {
                c6 = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                attachments2 = closure_131_18.attachments;
                uploader = closure_131_18.uploader;
                if (closure_131_11) {
                  c6 = 0;
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                }
                if (null != attachments2) {
                  closure_131_17.message.attachments = attachments2.map((item, index) => channelId(5129).getAttachmentPayload(item, index));
                }
                c6 = 0;
              }
            }
          } else if (3 === tmp8) {
            c6 = 0;
            closure_131_26 = closure_5;
            if (null != uploader) {
              obj5 = nonce(tmp5[46]);
              obj12 = { type: "UPLOAD_FAIL", channelId: closure_132_0, file: uploader._file, messageId: closure_131_15, noSendFailed: true };
              obj5.dispatch(obj12);
            }
            if (true !== closure_132_2.doNotNotifyOnError) {
              obj7 = channelId(tmp5[76]);
              let result2 = obj7.handleScheduleMessageError(closure_131_26);
            }
            throw closure_131_26;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj13 = { value, done: true };
            return obj13;
          } else {
            closure_131_25 = value;
            if (null != uploader) {
              obj = nonce(tmp5[46]);
              obj14 = { type: "UPLOAD_COMPLETE", channelId: closure_132_0, file: uploader._file, aborted: false };
              obj.dispatch(obj14);
            }
            obj2 = channelId(tmp5[76]);
            let result3 = obj2.showScheduleMessageSuccessToast(closure_131_10);
            c6 = 0;
            c8 = 3;
            let obj15 = { value: closure_131_25, done: true };
            return obj15;
          }
          if (null != closure_131_10) {
            c6 = 2;
            obj16 = { channelId: closure_132_0, scheduledTimestamp: closure_131_10, messageSendData: closure_131_17.message };
            c7 = 4;
            c8 = 1;
            let obj17 = { value: channelId(tmp5[75]).createScheduledMessage(obj16), done: false };
            return obj17;
          } else {
            promise = new Promise((content, emojiUsed) => {
              closure_2 = Date.now();
              emojiUsed(7834).length;
              const rounded = Math.floor(10000 * Math.random());
              logger2.info("Queueing message to be sent LogId:" + rounded);
              emojiUsed(7834).enqueue(messageData, (ok) => {
                content = ok;
                if (ok.ok) {
                  obj14 = emojiUsed(length[65]);
                  obj14.donateSentMessage(content, channelId);
                  let obj = { sendAnalytics: null, poll: null };
                  obj = { duration: tmp, queueSize: channel3 };
                  obj.sendAnalytics = obj;
                  obj.poll = poll;
                  closure_3_55.receiveMessage(channelId, ok.body, true, obj);
                  if (null != publish.alsoForwardToChannelId) {
                    let obj17 = emojiUsed(length[77]);
                    let obj19 = content(length[52]);
                    const sendForwardResult = obj17.sendForward(content(length[52]).createMessageRecord(ok.body), publish.alsoForwardToChannelId);
                    obj17.sendForward(content(length[52]).createMessageRecord(ok.body), publish.alsoForwardToChannelId).then(() => {
                      const body = closure_0.body;
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
                      id(dependencyMap[37]).track(constants.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                    }).catch((error) => {
                      const body = closure_0.body;
                      id = undefined;
                      const combined = "Failed to forward thread message to parent channel LogId:" + rounded;
                      if (body != null) {
                        id = body.id;
                      }
                      logger.log(combined, { referencedMessageId: id, channelId, destinationChannelId: attachments.alsoForwardToChannelId, error: error.toString() });
                    });
                    const nextPromise = obj17.sendForward(content(length[52]).createMessageRecord(ok.body), publish.alsoForwardToChannelId).then(() => {
                      const body = closure_0.body;
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
                      id(dependencyMap[37]).track(constants.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: id, guild_id, channel_id, destination_channel_id: attachments.alsoForwardToChannelId });
                    });
                  }
                  request = request.getRequest(emojiUsed(length[57]).cast(channelId));
                  if (null != request) {
                    ({ guildId, userId, applicationStatus } = request);
                    let obj1 = { guildId, channelId, messageId: ok.body.id, joinRequestStatus: applicationStatus, joinRequestUserId: userId };
                    let result = content(length[78]).trackMemberApplicationInterviewMessage(obj1);
                    const obj21 = content(length[78]);
                  }
                  let result1 = closure_3_9.recordMessageSendApiResponse(stickerById);
                  if (closure_1_13 === constants4.REPLY) {
                    id = ok.body.id;
                    if (message_id != null) {
                      message_id = message_id.message_id;
                    }
                    pendingReplyActionSource = pendingReplyActionSource.getPendingReplyActionSource(tmp174);
                    if ("message_swipe" === pendingReplyActionSource) {
                      let message = null;
                      if (null != message_id) {
                        message = closure_3_21.getMessage(tmp174, message_id);
                      }
                      channel = closure_3_17.getChannel(tmp174);
                      const currentUser = authStore.getCurrentUser();
                      let obj2 = { message_id: id, channel_id: tmp174, guild_id: null, swipe_action: "reply", is_own_message: null };
                      let guild_id;
                      if (channel != null) {
                        guild_id = channel.guild_id;
                      }
                      obj2.guild_id = guild_id;
                      let tmp124 = null != currentUser;
                      if (tmp124) {
                        id = undefined;
                        if (message != null) {
                          id = message.author.id;
                        }
                        tmp124 = currentUser.id === id;
                      }
                      obj2.is_own_message = tmp124;
                      emojiUsed(length[37]).track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj2);
                      const obj25 = emojiUsed(length[37]);
                    } else if ("message_shortcut" === pendingReplyActionSource) {
                      const channel1 = closure_3_17.getChannel(tmp174);
                      let obj3 = { message_id: id, channel_id: tmp174, guild_id: null, original_message_id: null, action: "reply" };
                      let guild_id1;
                      if (channel1 != null) {
                        guild_id1 = channel1.guild_id;
                      }
                      obj3.guild_id = guild_id1;
                      obj3.original_message_id = message_id;
                      const obj41 = emojiUsed(length[37]);
                      let guild_id2;
                      if (channel1 != null) {
                        guild_id2 = channel1.guild_id;
                      }
                      let merged = Object.assign(content(length[33]).collectGuildAnalyticsMetadata(guild_id2));
                      const obj23 = content(length[33]);
                      let merged1 = Object.assign(content(length[33]).collectChannelAnalyticsMetadata(channel1));
                      obj41.track(constants2.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
                      const obj24 = content(length[33]);
                    }
                  }
                  const obj20 = emojiUsed(length[57]);
                  let obj4 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: closure_3_24.SendMessage, channelId };
                  emojiUsed(length[46]).dispatch(obj4);
                  const obj27 = emojiUsed(length[46]);
                  let obj5 = { type: "EMOJI_TRACK_USAGE", emojiUsed };
                  emojiUsed(length[46]).dispatch(obj5);
                  const obj29 = emojiUsed(length[46]);
                  const obj6 = { type: "STICKER_TRACK_USAGE", stickerIds: rounded };
                  emojiUsed(length[46]).dispatch(obj6);
                  const obj31 = emojiUsed(length[46]);
                  let obj7 = { type: "LOCAL_MESSAGE_CREATE", message: null };
                  const obj8 = { channel_id: channelId, author: authStore.getCurrentUser() };
                  obj7.message = obj8;
                  emojiUsed(length[46]).dispatch(obj7);
                  let obj9 = { content, channelId, messageId: ok.body.id, location: null, inviteAnalyticsMetadata: null };
                  let str4 = attachments;
                  let str5 = attachments;
                  if (attachments == null) {
                    str5 = "chat_input";
                  }
                  obj9.location = str5;
                  obj9.inviteAnalyticsMetadata = length;
                  ({ channelId: closure_0, messageId: id, location: attachments, inviteAnalyticsMetadata: channel3, overrideProperties, content } = obj9);
                  if (overrideProperties === undefined) {
                    overrideProperties = {};
                  }
                  const id2 = id.getId();
                  const obj33 = emojiUsed(length[46]);
                  const item = emojiUsed(length[28])(content).forEach((url) => {
                    ({ type, code } = url);
                    let obj = channelId(length[29]);
                    if (obj.isApplicationCodedLink(type)) {
                      let tmpResult = tmp(tmp2[29]);
                      const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url.url);
                      if (null != applicationCodedLinkData) {
                        ({ applicationId, type: type2 } = applicationCodedLinkData);
                        if (tmp(tmp2[30]).CodedLinkType.APP_DIRECTORY_PROFILE === type2) {
                          tmpResult = tmp(tmp2[31]);
                          const result = tmpResult.trackAppDirectoryProfileEmbed(applicationId);
                          const result1 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, constants2.APP_DISCOVERY, closure_5);
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
                          const ACTIVITY = constants2.ACTIVITY;
                          let referrerId = params.referrerId;
                          if (referrerId == null) {
                            referrerId = closure_5;
                          }
                          const result4 = tmpResult4.trackAppEmbedLinkSent(applicationId, ACTIVITY, referrerId, params.customId);
                        } else if (tmp(tmp2[30]).CodedLinkType.APP_OAUTH2_LINK === type2) {
                          const result5 = tmp(tmp2[32]).trackAppEmbedLinkSent(applicationId, constants2.OAUTH, closure_5);
                          const tmpResult5 = tmp(tmp2[32]);
                          obj = { application_id: applicationId };
                          id(tmp2[33]).trackWithMetadata(closure_2_27.APP_OAUTH2_LINK_EMBED_URL_SENT, obj);
                          const obj19 = id(tmp2[33]);
                        }
                      }
                    } else if (tmp(tmp2[30]).CodedLinkType.INVITE === type) {
                      obj = { inviteKey: code, channelId, messageId: id, location: attachments, inviteAnalyticsMetadata: channel3, overrideProperties };
                      closure_2_53(obj);
                    } else if (tmp(tmp2[30]).CodedLinkType.TEMPLATE === type) {
                      guildTemplate = guildTemplate.getGuildTemplate(code);
                      if (null != guildTemplate) {
                        if (guildTemplate.state !== constants3.RESOLVING) {
                          let obj1 = { guild_template_code: code, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
                          ({ name: obj10.guild_template_name, description: obj10.guild_template_description, sourceGuildId: obj10.guild_template_guild_id } = guildTemplate);
                          id(tmp2[33]).trackWithMetadata(closure_2_27.GUILD_TEMPLATE_LINK_SENT, obj1);
                          const obj9 = id(tmp2[33]);
                        }
                      }
                    } else if (tmp(tmp2[30]).CodedLinkType.BUILD_OVERRIDE !== type) {
                      if (tmp(tmp2[30]).CodedLinkType.EXPERIMENT !== type) {
                        if (tmp(tmp2[30]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
                          if (tmp(tmp2[30]).CodedLinkType.EVENT !== type) {
                            if (tmp(tmp2[30]).CodedLinkType.CHANNEL_LINK !== type) {
                              if (tmp(tmp2[30]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                                const result6 = tmp(tmp2[32]).trackAppEmbedLinkSent(code, constants2.ACTIVITY_INVITE, closure_5);
                                const tmpResult6 = tmp(tmp2[32]);
                              } else if (tmp(tmp2[30]).CodedLinkType.GUILD_PRODUCT !== type) {
                                if (tmp(tmp2[30]).CodedLinkType.SERVER_SHOP !== type) {
                                  if (tmp(tmp2[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                    if (tmp(tmp2[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                      if (tmp(tmp2[30]).CodedLinkType.QUESTS_EMBED === type) {
                                        const adMetadataSealed = tmp(tmp2[34]).getAdMetadataSealed(tmp(tmp2[35]).QuestContent.QUESTS_EMBED);
                                        const tmpResult7 = tmp(tmp2[34]);
                                        const obj2 = { questId: code, event: closure_2_27.QUEST_LINK_SHARED, properties: null, trackGuildAndChannelMetadata: true, sourceQuestContent: null };
                                        let tmp8 = null;
                                        if (null != adMetadataSealed) {
                                          tmp8 = adMetadataSealed;
                                        }
                                        const obj3 = { metadata_sealed: tmp8 };
                                        obj2.properties = obj3;
                                        obj2.sourceQuestContent = tmp(tmp2[35]).QuestContent.QUESTS_EMBED;
                                        tmp(tmp2[36]).trackQuestEvent(obj2);
                                        const tmpResult8 = tmp(tmp2[36]);
                                      } else if (tmp(tmp2[30]).CodedLinkType.GAME_PROFILE === type) {
                                        obj1 = id(tmp2[37]);
                                        const obj4 = { game_id: code };
                                        obj1.track(closure_2_27.GAME_PROFILE_LINK_EMBED_SENT, obj4);
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
                  if (str4 == null) {
                    str6 = "chat_input";
                  }
                  content = channelId;
                  id = ok.body.id;
                  attachments = str6;
                  channel3 = publish.isGiftLinkSentOnBehalfOfUser;
                  const arr2 = emojiUsed(length[28])(content);
                  const obj37 = content(length[41]);
                  const item1 = content(length[41]).findGiftCodes(content).forEach((gift_code) => {
                    channel = messageData.getChannel(closure_0);
                    if (null != channel) {
                      const obj = { location: attachments, gift_code, guild_id: channel.getGuildId(), channel_id: null, channel_type: null, message_id: null, automatic_send: null };
                      ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
                      obj.message_id = id;
                      obj.automatic_send = channel3;
                      id(length[33]).trackWithMetadata(closure_2_27.GIFT_CODE_SENT, obj);
                      const obj2 = id(length[33]);
                    }
                  });
                  if (null != publish.gifMetadata) {
                    if (str4 == null) {
                      str4 = "chat_input";
                    }
                    const channel2 = closure_3_17.getChannel(channelId);
                    if (null != channel2) {
                      const obj10 = { location: str4, message_id: ok.body.id, gif_provider: null, load_id: null, source_object: null, gif_url: null, gif_id: null };
                      ({ gif_provider: obj44.gif_provider, load_id: obj44.load_id, source_object: obj44.source_object, gif_url: obj44.gif_url, gif_id: obj44.gif_id } = publish.gifMetadata);
                      const obj43 = emojiUsed(length[37]);
                      const merged2 = Object.assign(content(length[33]).collectGuildAnalyticsMetadata(channel2.getGuildId()));
                      const obj45 = content(length[33]);
                      const merged3 = Object.assign(content(length[33]).collectChannelAnalyticsMetadata(channel2));
                      obj43.track(constants2.MESSAGE_SENT_WITH_GIF, obj10);
                      const obj46 = content(length[33]);
                    }
                  }
                  attachments = ok.body.attachments;
                  if (attachments == null) {
                    attachments = [];
                  }
                  let items = guildTemplate;
                  if (guildTemplate == null) {
                    items = [];
                  }
                  content = tmp158;
                  id = ok.body.id;
                  if (attachments.length === items.length) {
                    channel3 = closure_3_17.getChannel(tmp158);
                    if (null != channel3) {
                      overrideProperties = messageByReference.getMessageByReference(tmp159);
                      const item2 = items.forEach((clip, index) => {
                        clip = clip.clip;
                        if (null != clip) {
                          let someResult = overrideProperties.state === constants.LOADED;
                          if (someResult) {
                            attachments = overrideProperties.message.attachments;
                            someResult = attachments.some(() => { ... });
                          }
                          id(length[37]);
                          const obj = {};
                          const merged = Object.assign(attachments(length[42]).getClipBaseProperties(clip));
                          const obj3 = attachments(length[42]);
                          const merged1 = Object.assign(attachments(length[42]).getClipContextProperties());
                          obj.channel_id = channel_id;
                          obj.guild_id = channel3.getGuildId();
                          obj.channel_type = channel3.type;
                          ({ applicationId: obj2.application_id, id: obj2.clip_uuid, remoteClipId: obj2.remote_clip_id } = clip);
                          obj.message_id = id;
                          obj.attachment_id = attachments[index].id;
                          obj.is_distributed_clip_reply = someResult;
                          obj.track(closure_2_27.CLIP_SHARED, obj);
                          const obj4 = attachments(length[42]);
                        }
                      });
                    }
                  }
                  if (null != closure_1_16) {
                    let obj11 = { type: "UPLOAD_COMPLETE", channelId, file: closure_1_16._file, aborted: false };
                    emojiUsed(length[46]).dispatch(obj11);
                    const obj39 = emojiUsed(length[46]);
                  }
                  content(ok);
                  const findGiftCodesResult = content(length[41]).findGiftCodes(content);
                } else {
                  obj = { hasErr: null, status: null, code: null, error: null };
                  ({ hasErr: obj.hasErr, status: obj.status, body } = ok);
                  let code;
                  if (body != null) {
                    code = body.code;
                  }
                  obj.code = code;
                  obj.error = ok.err;
                  logger.log("Failed to send message", obj);
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
                              obj5 = emojiUsed(length[46]);
                              const obj12 = { type: "SLOWMODE_SET_COOLDOWN", channelId, slowmodeType: closure_3_24.SendMessage, cooldownMs: retry_after * emojiUsed(length[79]).Millis.SECOND };
                              obj5.dispatch(obj12);
                              flag = false;
                            }
                          } else {
                            const AUTOMOD_ERROR_CODES = content(length[80]).AUTOMOD_ERROR_CODES;
                            if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                              obj2 = emojiUsed(length[46]);
                              let obj13 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData, errorResponseBody: null };
                              obj14 = { code: ok.body.code, message: ok.body.message };
                              obj13.errorResponseBody = obj14;
                              obj2.dispatch(obj13);
                              flag = false;
                            } else if (ok.body.code === tmp6.POGGERMODE_TEMPORARILY_DISABLED) {
                              obj1 = emojiUsed(length[46]);
                              obj1.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" });
                              flag = false;
                            } else if (ok.body.code === tmp6.EXPLICIT_CONTENT) {
                              const EXPLICIT_CONTENT = constants7.EXPLICIT_CONTENT;
                              flag = false;
                            } else {
                              let tmp8 = null != poll || closure_1_12;
                              if (!tmp8) {
                                tmp8 = null != closure_1_7;
                              }
                              flag = false;
                              if (!tmp8) {
                                closure_3_55.sendClydeError(channelId, ok.body.code);
                                flag = false;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (flag) {
                    if (null != closure_3_21.getMessage(channelId, messageId)) {
                      closure_3_55.deleteMessage(channelId, messageId, true);
                    }
                  } else {
                    if (null != closure_1_16) {
                      obj7 = emojiUsed(length[46]);
                      const obj15 = { type: "UPLOAD_FAIL", channelId, file: closure_1_16._file, messageId, reason: EXPLICIT_CONTENT, noSendFailed: true };
                      obj7.dispatch(obj15);
                    }
                    let hasErr = ok.hasErr;
                    if (!hasErr) {
                      hasErr = EXPLICIT_CONTENT !== constants7.EXPLICIT_CONTENT;
                    }
                    if (!hasErr) {
                      let body2 = ok.body;
                      let attachments1;
                      if (body2 != null) {
                        attachments1 = body2.attachments;
                      }
                      let result2 = closure_3_55.sendExplicitMediaClydeError(channelId, attachments1, content(length[50]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    }
                    obj9 = emojiUsed(length[46]);
                    const obj16 = { type: "MESSAGE_SEND_FAILED", messageId, channelId, shouldNotify: !publish.doNotNotifyOnError, reason: EXPLICIT_CONTENT };
                    obj9.dispatch(obj16);
                    obj11 = content(length[74]);
                    let status;
                    if (!ok.hasErr) {
                      status = ok.status;
                    }
                    obj17 = { failureCode: status, errorMessage: null };
                    let message1;
                    if (ok.hasErr) {
                      message1 = ok.err.message;
                    }
                    obj17.errorMessage = message1;
                    let result3 = obj11.logMessageSendFailure(obj17);
                    obj13 = emojiUsed(length[72]);
                    let result4 = obj13.cancelPendingSendRequests(channelId);
                    const item3 = result4.forEach((messageId) => {
                      logger.log("Cancelling pending message", messageId.nonce);
                      id(channel3[46]);
                      const obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId };
                      obj.dispatch(obj);
                    });
                  }
                  id(ok);
                }
              }, rounded);
            });
            c8 = 3;
            obj18 = { value: promise, done: true };
            return obj18;
          }
        } catch (tmp187) {
          closure_5 = tmp187;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp187;
          } else if (tmp === tmp189) {
            c7 = tmp;
          } else {
            c7 = tmp2;
          }
        }
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    const obj = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj);
  },
  startEditMessageRecord(id, flags, source) {
    let obj = FlagUtils;
    if (obj.hasFlag(flags.flags, __initData11.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === require("Server").ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: joined, source };
        DispatcherDefault.dispatch(obj);
      }
    }
    obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    DispatcherDefault.dispatch(obj);
  },
  updateEditMessage(channelId, textValue, richValue) {
    const obj = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj);
  },
  endEditMessage(id, response) {
    const obj = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj);
  },
  editMessage(id, id2, parsed) {
    closure_0 = id;
    closure_1 = id2;
    ({ content: importAll, components: dependencyMap } = parsed);
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              (function tryTrackEditMessageSwipeSend(message_id, channel_id) {
                if ("message_swipe" === editActionSource.getEditActionSource(channel_id)) {
                  channel = channel.getChannel(channel_id);
                  messageId(dependencyMap[37]);
                  const obj = { message_id, channel_id, guild_id: null, swipe_action: "edit", is_own_message: true };
                  let guild_id;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  obj.guild_id = guild_id;
                  obj.track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj);
                }
              })(tmp2, tmp3);
              let obj1 = tmp2(7765);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(tmp3);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = (function getAllowedMentionsForMessageEdit(arg0, arg1) {
              message = closure_1_21.getMessage(arg0, arg1);
              if (null != message) {
                if (message.type === constants4.REPLY) {
                  messageByReference = messageByReference.getMessageByReference(message.messageReference);
                  if (messageByReference.state === constants.LOADED) {
                    const mentions = message.mentions;
                    if (!mentions.includes(messageByReference.message.author.id)) {
                      const obj = { parse: null, replied_user: false };
                      const _Object = Object;
                      obj.parse = Object.values(closure_1_36);
                      return obj;
                    }
                  }
                }
              }
            })(closure_129_0, closure_129_1);
            closure_128_1 = (function getIsCrosspostedForMessageEdit(arg0, arg1) {
              message = closure_1_21.getMessage(arg0, arg1);
              let hasFlagResult = null != message;
              if (hasFlagResult) {
                hasFlagResult = message.hasFlag(constants3.CROSSPOSTED);
              }
              return hasFlagResult;
            })(closure_129_0, closure_129_1);
            const obj2 = { channelId: closure_129_0, messageId: closure_129_1, content: closure_129_2, isCrossposted: closure_128_1, allowed_mentions: closure_128_0, components: closure_129_3 };
            closure_128_2 = obj2;
            const obj3 = { type: tmp3(7834).MessageDataType.EDIT, message: closure_128_2 };
            tmp2(7834).enqueue(obj3, (hasErr) => {
              hasErr = hasErr.hasErr;
              let hasItem = !hasErr;
              if (!hasErr) {
                const AUTOMOD_ERROR_CODES = closure_0(7939).AUTOMOD_ERROR_CODES;
                hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
              }
              if (hasItem) {
                let obj = { type: closure_0(7834).MessageDataType.EDIT, message };
                let obj1 = messageId(573);
                obj = { type: "MESSAGE_EDIT_FAILED_AUTOMOD", messageData: null, errorResponseBody: null };
                obj.messageData = obj;
                obj = { code: hasErr.body.code, message: hasErr.body.message };
                obj.errorResponseBody = obj;
                obj1.dispatch(obj);
              }
              const AccessibilityAnnouncer = closure_0(4411).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_0(1114).intl;
              const string = intl.string;
              const t = closure_0(1114).t;
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
              obj14.endEditMessage(closure_0, tmp14);
              obj1 = { channelId: tmp13, messageId };
              obj14.focusMessage(obj1);
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
  suppressEmbeds(channel, id) {
    closure_0 = channel;
    closure_1 = id;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let message2;
              let obj1 = tmp5(7765);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(tmp2);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            message2 = message.getMessage(closure_129_0, closure_129_1);
            if (null != message2) {
              const HTTP = tmp2(1272).HTTP;
              const request = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: null };
              const obj2 = { flags: tmp2(1384).setFlag(message2.flags, constants.SUPPRESS_EMBEDS, true) };
              request.body = obj2;
              const obj8 = tmp2(1384);
              request.rejectWithError = tmp2(1272).rejectWithMigratedError();
              HTTP.patch(request);
              const obj9 = tmp2(1272);
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
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let message2;
              let obj1 = tmp5(7765);
              c2 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(tmp2);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            message2 = message.getMessage(closure_129_0, closure_129_1);
            if (null != message2) {
              const HTTP = tmp2(1272).HTTP;
              const request = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: null };
              const obj2 = { flags: tmp2(1384).setFlag(message2.flags, constants.IS_GUILD_OFFICIAL, closure_129_2) };
              request.body = obj2;
              const obj8 = tmp2(1384);
              request.rejectWithError = tmp2(1272).rejectWithMigratedError();
              HTTP.patch(request);
              const obj9 = tmp2(1272);
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
  patchMessageAttachments(channel, id, found) {
    closure_0 = channel;
    closure_1 = id;
    closure_2 = found;
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = v1(7765);
              v1 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(tmp4);
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = tmp4(1272).HTTP;
            const request = { url: closure_1_28.MESSAGE(closure_128_0, closure_128_1), body: null, oldFormErrors: true, rejectWithError: null };
            const obj2 = { attachments: closure_128_2 };
            request.body = obj2;
            request.rejectWithError = tmp4(1272).rejectWithMigratedError();
            HTTP.patch(request);
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
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              id = tmp4;
              const channelId = tmp4;
              if (flag) {
                (function dispatchDelete() {
                  id(573);
                  const obj = { type: "MESSAGE_DELETE", id, channelId };
                  obj.dispatch(obj).then(() => {
                    const AccessibilityAnnouncer = channelId(4411).AccessibilityAnnouncer;
                    const intl = channelId(1114).intl;
                    AccessibilityAnnouncer.announce(intl.string(channelId(1114).t.RYMs7s));
                  });
                })();
                dependencyMap = 3;
              } else {
                let obj1 = id(7765);
                c2 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.unarchiveThreadIfNecessary(channelId);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const HTTP = channelId(1272).HTTP;
            const obj2 = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), oldFormErrors: true, rejectWithError: channelId(1272).rejectWithMigratedError() };
            const obj7 = channelId(1272);
            HTTP.del(obj2).then(() => {
              id(573);
              const obj = { type: "MESSAGE_DELETE", id, channelId };
              obj.dispatch(obj).then(() => {
                const AccessibilityAnnouncer = channelId(4411).AccessibilityAnnouncer;
                const intl = channelId(1114).intl;
                AccessibilityAnnouncer.announce(intl.string(channelId(1114).t.RYMs7s));
              });
            });
            const delResult = HTTP.del(obj2);
          }
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp10) {
          dependencyMap = tmp;
          throw tmp10;
        }
      }
    })();
  },
  dismissAutomatedMessage(message) {
    if (null != message.loggingName) {
      const obj = { message_name: message.loggingName, message_author: message.author.username };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj);
    }
    const result = PremiumGiftingIntentActionCreators.logGiftIntentMessageDismissed(message.channel_id, message.id);
    this.deleteMessage(message.channel_id, message.id, true);
  },
  revealMessage(id, messageId) {
    const obj = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj);
  },
  crosspostMessage(channel, id) {
    closure_1 = id;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              channel = tmp7;
              closure_128_0 = undefined;
              dependencyMap = 1;
              const HTTP = channel(1272).HTTP;
              const obj1 = { url: closure_1_28.MESSAGE_CROSSPOST(channel, tmp3), oldFormErrors: true, failImmediatelyWhenRateLimited: true, rejectWithError: channel(1272).rejectWithMigratedError() };
              c4 = 2;
              c5 = 1;
              const obj2 = { value: HTTP.post(obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = closure_2;
            if (429 === closure_128_1.status) {
              const intl2 = channel(1114).intl;
              let obj3 = { retryAfter: null };
              const _Math = Math;
              obj3.retryAfter = Math.floor(closure_128_1.body.retry_after / 60);
              let formatToPlainStringResult = intl2.formatToPlainString(channel(1114).t["77cuqz"], obj3);
            } else {
              const intl = channel(1114).intl;
              formatToPlainStringResult = intl.string(channel(1114).t.z2gyNF);
            }
            closure_128_0 = formatToPlainStringResult;
            obj3 = tmp3(4904);
            const obj4 = { title: null, body: null, confirmText: null };
            const intl3 = channel(1114).intl;
            obj4.title = intl3.string(channel(1114).t.Vd1hs6);
            obj4.body = closure_128_0;
            const intl4 = channel(1114).intl;
            obj4.confirmText = intl4.string(channel(1114).t.BddRzS);
            obj3.show(obj4);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            dependencyMap = 0;
            c5 = 3;
            obj = { value, done: true };
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
const size = fn(2);
let result = size.fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj14;