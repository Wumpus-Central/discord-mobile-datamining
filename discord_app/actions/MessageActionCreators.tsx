// discord_app/actions/MessageActionCreators.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import HelpdeskUtilsDefault from "../utils/HelpdeskUtils.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import _mod4823 from "module_4823" /* 4823 */;
import UploadUtils from "../utils/UploadUtils.tsx";
import MessageCacheStatsDefault from "../modules/local_message_caching/MessageCacheStats.tsx";
import ExplicitMediaRedactionUtils from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import appMessageEmbedTracking from "../modules/applications/message_embed/web/appMessageEmbedTracking.tsx";
import InviteTypeUtils from "../modules/instant_invite/InviteTypeUtils.tsx";
import StreamerApplicationSelectors from "../modules/go_live/utils/StreamerApplicationSelectors.tsx";
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
  const result = InviteCodeUtils.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    result1 = InviteTypeUtils.isEmbeddedApplicationInvite(invite);
    const tmp3Result = InviteTypeUtils;
  }
  let id1;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id1 = target_application.id;
    }
  }
  if (tmp8) {
    const result2 = appMessageEmbedTracking.trackAppEmbedLinkSent(id1, LinkType.ACTIVITY_INVITE, id);
    const tmp3Result5 = appMessageEmbedTracking;
  }
  const channel1 = ChannelStore.getChannel(channelId.channelId);
  if (null != channel1) {
    if (channel1.isMultiUserDM()) {
      let GDM_INVITE = constants3.GDM_INVITE;
    } else {
      GDM_INVITE = null;
      if (!channel1.isPrivate()) {
        GDM_INVITE = constants3.SERVER_INVITE;
      }
    }
    const obj2 = {};
    let STREAM = GDM_INVITE;
    if (null != invite) {
      STREAM = GDM_INVITE;
      if (invite.state === constants5.RESOLVED) {
        STREAM = GDM_INVITE;
        if (null != invite.channel) {
          const channel = invite.channel;
          obj2.invite_channel_id = channel.id;
          const guild = invite.guild;
          let id2;
          if (guild != null) {
            id2 = guild.id;
          }
          obj2.invite_guild_id = id2;
          obj2.invite_channel_type = channel.type;
          if (null != invite.inviter) {
            obj2.invite_inviter_id = invite.inviter.id;
          }
          if (null != invite.target_application) {
            obj2.application_id = invite.target_application.id;
          }
          const lastActiveStream = ApplicationStreamingStore.getLastActiveStream();
          STREAM = GDM_INVITE;
          if (null != lastActiveStream) {
            STREAM = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj2.destination_user_id = lastActiveStream.ownerId;
              const streamerApplication = StreamerApplicationSelectors.getStreamerApplication(lastActiveStream, PresenceStore);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj2.application_id = id3;
              STREAM = constants3.STREAM;
              const tmp3Result6 = StreamerApplicationSelectors;
            }
          }
        }
      }
    }
    if (null != inviteAnalyticsMetadata) {
      if (null != inviteAnalyticsMetadata.suggestionData) {
        obj2.is_suggested = inviteAnalyticsMetadata.suggestionData.isAffinitySuggestion;
        obj2.row_num = inviteAnalyticsMetadata.suggestionData.rowNum;
        obj2.num_total = inviteAnalyticsMetadata.suggestionData.numTotal;
        obj2.num_affinity_connections = inviteAnalyticsMetadata.suggestionData.numAffinityConnections;
        obj2.is_filtered = inviteAnalyticsMetadata.suggestionData.isFiltered;
      }
      obj2.source = inviteAnalyticsMetadata.source;
    }
    const obj3 = {};
    const merged = Object.assign(obj2);
    obj3.location = _location;
    obj3.invite_type = STREAM;
    obj3.invite_code = result.baseCode;
    obj3.guild_id = channel1.getGuildId();
    obj3.channel_id = channel1.id;
    obj3.message_id = messageId;
    obj3.send_type = constants4.DIRECT_MESSAGE;
    obj3.invite_guild_scheduled_event_id = result.guildScheduledEventId;
    let inviteInstanceId = InviteCodeUtils.getInviteInstanceId(result.baseCode, messageId);
    if (inviteInstanceId == null) {
      inviteInstanceId = null;
    }
    obj3.invite_instance_id = inviteInstanceId;
    const merged1 = Object.assign(overrideProperties);
    const tmp3Result7 = InviteCodeUtils;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.INVITE_SENT, obj3);
  } else {
    let tmp12 = null != invite;
    if (tmp12) {
      tmp12 = invite.state === constants5.RESOLVED;
    }
    if (tmp12) {
      tmp12 = null != invite.inviter;
    }
    if (tmp12) {
      const obj4 = { invite_inviter_id: invite.inviter.id };
      if (null != invite.target_application) {
        obj4.application_id = invite.target_application.id;
      }
      const obj5 = {};
      const merged2 = Object.assign(obj4);
      obj5.location = _location;
      obj5.invite_type = constants3.FRIEND_INVITE;
      obj5.invite_code = result.baseCode;
      obj5.message_id = messageId;
      obj5.send_type = constants4.DIRECT_MESSAGE;
      obj5.invite_guild_scheduled_event_id = result.guildScheduledEventId;
      let inviteInstanceId1 = InviteCodeUtils.getInviteInstanceId(result.baseCode, messageId);
      if (inviteInstanceId1 == null) {
        inviteInstanceId1 = null;
      }
      obj5.invite_instance_id = inviteInstanceId1;
      const merged3 = Object.assign(overrideProperties);
      const tmp3Result8 = InviteCodeUtils;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.INVITE_SENT, obj5);
    }
  }
  tmp8 = null != id1 && result1;
}
const ReferencedMessageState = fn(7703).ReferencedMessageState;
const SlowmodeType = fn(7795).SlowmodeType;
const Constants = fn(1074);
const AbortCodes = Constants.AbortCodes;
({ AnalyticEvents: closure_27, Endpoints: closure_28, Permissions, ChannelTypes: closure_29, LoggingInviteTypes: closure_30, SendTypes: items, InviteStates: closure_32, MessageFlags: closure_33, MAX_MESSAGES_FOR_JUMP: closure_34, MessageTypes: closure_35, AllowedMentionTypes: closure_36, HelpdeskArticles: closure_37, MarketingURLs: closure_38, MessageReferenceTypes: closure_39, LOCAL_BOT_ID: closure_40, NON_USER_BOT_DISCRIMINATOR: closure_41, MessageStates: closure_42, ActivityActionTypes: closure_43 } = Constants);
const LinkType = fn(7797).LinkType;
const GuildTemplateStates = fn(7436).GuildTemplateStates;
const MessageConstants = fn(4631);
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
let closure_54 = {
  [AbortCodes.SLOWMODE_RATE_LIMITED]: {
    messageName: "SLOWMODE_RATE_LIMITED",
    messageGetter(rateLimitPerUser) {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
    messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
    messageGetter(rawRecipients) {
      const articleURL = HelpdeskUtilsDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
      rawRecipients = rawRecipients.rawRecipients;
      if (rawRecipients == null) {
        rawRecipients = [];
      }
      if (rawRecipients.isDM()) {
        if (1 === rawRecipients.length) {
          if (rawRecipients.some((bot) => bot.bot)) {
            const intl2 = util.intl;
            const obj2 = { helpUrl: articleURL };
            let formatToPlainStringResult = intl2.formatToPlainString(util.t.SkGL7l, obj2);
          }
          return formatToPlainStringResult;
        }
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.formatToPlainString(util.t.llTkqr, { helpUrl: articleURL });
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_USER]: {
    messageName: "INVALID_MESSAGE_SEND_USER",
    messageGetter() {
      const intl = util.intl;
      const obj = { helpUrl: HelpdeskUtilsDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
      return intl.formatToPlainString(util.t.SkGL7l, obj);
    }
  },
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
let obj17 = {
  receiveMessage(channelId, message) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    DispatcherDefault.dispatch({ type: "MESSAGE_CREATE", channelId, message, optimistic: flag, sendMessageOptions: obj, isPushNotification: false });
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      const obj2 = { message_author: "Clyde", message_name: messageName };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj2);
    }
    obj17.receiveMessage(id, createMessage.createBotMessage({ messageId: nonce, channelId: id, content: intl, loggingName: messageName }));
    const obj4 = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    const obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: __initData11.EPHEMERAL, author: { id, username: "Nitro Notification", discriminator, avatar: "nitro", bot: true } };
    const obj3 = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj3.state = constants9.SENT;
    obj3.channel_id = channelId;
    obj17.receiveMessage(channelId, obj3, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    const obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: __initData11.EPHEMERAL, author: { id, username: "Gifting Prompt", discriminator, avatar: "gifting_prompt", bot: true }, giftingPrompt };
    const obj3 = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj3.state = constants9.SENT;
    obj17.receiveMessage(channelId, obj3, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    const obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: __initData11.EPHEMERAL, author: { id, username: "Guild Boost Upsell", discriminator, avatar: "guild_boost_upsell", bot: true }, boostingPrompt };
    const obj3 = {};
    const merged = Object.assign(createMessageDefault(obj));
    obj3.state = constants9.SENT;
    obj17.receiveMessage(channelId, obj3, true);
  },
  sendClydeError(c0) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = ChannelStore.getChannel(c0);
    if (null != channel) {
      if (null != closure_54[num]) {
        obj17.sendBotMessage(c0, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = util.intl;
        const obj2 = { helpUrl: HelpdeskUtilsDefault.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
        const _HermesInternal = HermesInternal;
        obj17.sendBotMessage(c0, intl.formatToPlainString(util.t.SkGL7l, obj2), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(util.t.SkGL7l, obj2);
      }
    }
  },
  sendExplicitMediaClydeError(c0, attachments, EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      let obj = { isDM: channel.isDM(), isGDM: channel.isGroupDM() };
      const match = _mod4823.match(obj);
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
      obj17.sendBotMessage(channelId, message, messageName, nonce);
      const obj3 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT, messageId: nonce, channelId, context: EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED };
      const result = ExplicitMediaRedactionUtils.trackMediaRedactionAction(obj3);
      let tmp = null != attachments;
      if (tmp) {
        tmp = attachments.length > 0;
      }
      if (tmp) {
        const obj4 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: nonce, channelId, attachments };
        DispatcherDefault.dispatch(obj4);
      }
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    DispatcherDefault.dispatch({ type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop });
  },
  clearChannel(channelId) {
    DispatcherDefault.dispatch({ type: "CLEAR_MESSAGES", channelId });
  },
  jumpToPresent(channelId, limit) {
    obj17.trackJump(channelId, null, "Present");
    const obj2 = { present: true };
    if (MessageStore.hasPresent(channelId)) {
      const obj3 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: obj2, channelId, limit };
      DispatcherDefault.dispatch(obj3);
    } else {
      const obj5 = { channelId, limit, jump: obj2 };
      const messages = obj17.fetchMessages(obj5);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    const merged = Object.assign(extraProperties);
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.JUMP, { context: Present, channel_id: channelId, message_id: id });
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
      obj17.trackJump(channelId, messageId, context, extraProperties);
    }
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
    return obj17.fetchMessages({ channelId, limit, jump: { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete }, isPreload, skipLocalFetch, avoidInitialScroll });
  },
  focusMessage(channelId) {
    const messages = obj17.fetchMessages({ channelId: channelId.channelId, limit, focus: { messageId: channelId.messageId } });
  },
  fetchMessage(arg0) {
    ({ channelId: require, messageId: importDefault } = arg0);
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              const v0 = 0;
              closure_128_0 = undefined;
              const HTTP = v0(1271).HTTP;
              const request = { url: closure_1_28.MESSAGES(_require), query: null, retries: 2, oldFormErrors: true, rejectWithError: null };
              const obj4 = { limit: 1, around };
              request.query = obj4;
              request.rejectWithError = v0(1271).rejectWithMigratedError();
              c2 = 1;
              dependencyMap = 1;
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            if (closure_128_0.body.length > 0) {
              dependencyMap = 3;
              const obj7 = { value: v0(4861).createMessageRecord(closure_128_0.body[0]), done: true };
              return obj7;
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
      let obj2 = { channelId, before, after, limit, jump, focus, truncate };
      if (!obj17._tryFetchMessagesCached(obj2)) {
        let fetchMessages = before(tmp5[54]).fetchMessages;
        fetchMessages.recordStart();
        let obj = before(tmp5[55]);
        let tmp8 = fetchKey;
        if (fetchKey == null) {
          tmp8 = timestamp;
        }
        let result = obj.recordChannelFetchStart(channelId, tmp8, before, after, limit);
        if (tmp16) {
          let obj3 = {};
          const merged = Object.assign(focus);
          jump = obj3;
        }
        const orCreate = before(tmp5[56]).getOrCreate(channelId);
        const start = orCreate.loadStart(jump);
        tmp16 = null == jump && null != focus;
        const tmp6Result = before(tmp5[56]);
        before(tmp5[56]).commit(start);
        const tmp6Result3 = before(tmp5[56]);
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
          const obj4 = { before, after, limit, around: messageId, preload: isPreload, feature };
          request.query = obj4;
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
                    tmp8 = null == before && null == after;
                    const tmp9 = null == before && null == after;
                  }
                  tmp7 = tmp8;
                }
                flag = tmp7;
              }
              let flag2 = null != messageId;
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
                const items = [messageId];
                HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
                const found = items.filter((item, index, arr) => arr.indexOf(item) === index);
                const sorted = found.sort(SnowflakeUtilsDefault.compare);
                const index = sorted.indexOf(messageId);
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
              const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId, messages: body, isBefore: null != before, isAfter: null != after, hasMoreBefore: tmp12, hasMoreAfter: flag3, limit, jump, forICYMI, isStale: null, truncate: null, avoidInitialScroll: null, requestStartTime: null };
              let tmp19 = !closure_9;
              if (closure_9) {
                tmp19 = GatewayConnectionStore.lastTimeConnectedChanged() >= timestamp;
              }
              obj2.isStale = tmp19;
              obj2.truncate = truncate;
              obj2.avoidInitialScroll = avoidInitialScroll;
              obj2.requestStartTime = timestamp;
              DispatcherDefault.dispatch(obj2);
              let tmp24 = fetchKey;
              if (fetchKey == null) {
                tmp24 = timestamp;
              }
              const result = MessageCacheStatsDefault.recordChannelFetchedNetwork(channelId, tmp24, before, after, limit, body);
            });
            return true;
          }, () => {
            logger.log("Failed to fetch messages for " + channelId);
            DispatcherDefault.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId });
            return false;
          });
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp6Result4 = before(tmp5[46]);
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
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              basicChannel = basicChannel.getBasicChannel(closure_0);
              closure_128_0 = basicChannel;
              const orCreate = tmp2(5358).getOrCreate(closure_0);
              const obj13 = tmp2(5358);
              const databaseResult = tmp2(1987).database();
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
                      const obj10 = { value: num2(2007).tryLoadAsync(async () => closure_1(closure_3[60]).load(closure_1_1, num2, limit)), done: false };
                      return obj10;
                    }
                    dependencyMap = 3;
                  }
                }
              }
              const obj14 = tmp2(1987);
              tmp2(9).addLocalMessages(closure_0, -1);
              const obj7 = tmp2(9);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_128_2 = value;
            if (null == closure_128_2) {
              tmp2(9).addLocalMessages(closure_129_0, -3);
              const obj = tmp2(9);
            }
          }
          const _HermesInternal = HermesInternal;
          logger.log("fetched " + closure_128_2.messages.length + " messages from local database (channel_id: " + closure_129_0 + ", remote_fetch_completed: " + closure_129_5.completed + ")");
          tmp2(9).addLocalMessages(closure_129_0, closure_128_2.messages.length);
          if (!closure_129_5.completed) {
            if (closure_128_2.messages.length > num2) {
              let tmp30 = closure_128_2.messages.length >= closure_129_4;
              if (tmp30) {
                tmp30 = closure_128_2.connectionId === GatewayConnectionStore.lastTimeConnectedChanged();
              }
              closure_128_3 = tmp30;
              const obj3 = tmp2(7598);
              const result = obj3.recordChannelFetchedLocal(closure_129_0, closure_129_1, closure_129_2, closure_129_3, closure_129_4, closure_128_2.messages);
              const obj12 = { type: "LOCAL_MESSAGES_LOADED", guildId: closure_128_0.guild_id, channelId: closure_129_0, users: closure_128_2.users, members: closure_128_2.members, messages: closure_128_2.messages, stale: !closure_128_3 };
              tmp2(573).dispatch(obj12);
              const obj4 = tmp2(573);
            }
          }
          const obj2 = tmp2(9);
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
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
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
              const obj5 = { value, done: true };
              return obj5;
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
              const databaseResult = tmp2(1987).database();
              closure_128_1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  orCreate = tmp2(5358).getOrCreate(closure_0);
                  if (!orCreate.hasMoreAfter) {
                    c2 = 1;
                    dependencyMap = 1;
                    const obj6 = { value: v0(2007).tryLoadAsync(async () => closure_1(7587).load(closure_1_1, c0, closure_1)), done: false };
                    return obj6;
                  }
                  const obj2 = tmp2(5358);
                }
              }
              dependencyMap = 3;
              const obj11 = tmp2(1987);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_3 = value;
            if (null != closure_128_3) {
              orCreate = tmp2(5358).getOrCreate(closure_129_0);
              const lastResult = orCreate.last();
              id = undefined;
              if (lastResult != null) {
                id = lastResult.id;
              }
              closure_128_4 = id;
              if (null == closure_128_4) {
                let messages = closure_128_3.messages;
              } else {
                const messages1 = closure_128_3.messages;
                messages = messages1.filter((id) => closure_1(11).compare(id.id, closure_1_4) > 0);
              }
              closure_128_5 = messages;
              const _HermesInternal = HermesInternal;
              logger.log("Fetched " + closure_128_3.messages.length + " messages from the cache after foregrounding. " + closure_128_5.length + " are new");
              if (0 !== closure_128_5.length) {
                const obj9 = { type: "LOCAL_MESSAGES_LOADED", guildId: closure_128_0.guild_id, channelId: closure_129_0, users: closure_128_3.users, members: closure_128_3.members, messages: closure_128_5, stale: true, isForegroundCacheLoad: null };
                const obj8 = tmp2(573);
                obj9.isForegroundCacheLoad = v0(5361).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj8.dispatch(obj9);
                const obj10 = v0(5361);
              }
              const obj7 = tmp2(5358);
            }
          }
          dependencyMap = 3;
          const obj = { value, done: true };
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
                const obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, before, limit, truncate };
                DispatcherDefault.dispatch(obj);
                let flag = true;
              }
              return flag;
            }
            const tmp4 = null == after || !messages.hasAfterCached(after);
            flag = !tmp4;
            if (!tmp4) {
              const obj3 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, after, limit, truncate };
              DispatcherDefault.dispatch(obj3);
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
            const obj5 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump, limit, truncate };
            DispatcherDefault.dispatch(obj5);
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
            const obj6 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, focus, limit, truncate };
            DispatcherDefault.dispatch(obj6);
            return true;
          } else {
            const obj13 = {};
            const merged = Object.assign(focus);
            tmp13 = obj13;
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
          const obj15 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump: tmp13, limit };
          DispatcherDefault.dispatch(obj15);
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
    return (async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp5;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              if (tmp2.reaction) {
                c4 = 3;
                const obj5 = { value: Promise.resolve(), done: true };
                return obj5;
              } else {
                dependencyMap = 1;
                c4 = 1;
                const obj6 = { value: tmp2(7868)(closure_0), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_129_0 = value;
            if (null != closure_129_0) {
              c4 = 3;
              const obj8 = { value: obj17.sendMessage(closure_129_0, closure_130_1, closure_130_2, closure_130_3), done: true };
              return obj8;
            } else {
              const nonce = closure_130_3.nonce;
              closure_0 = nonce;
              if (nonce == null) {
                closure_0 = closure_0(7867).createNonce();
                const obj = closure_0(7867);
              }
              closure_129_1 = closure_0;
              const obj9 = {};
              const merged = Object.assign(closure_130_3);
              obj9.nonce = closure_129_1;
              closure_130_3 = obj9;
              closure_129_2 = tmp2(7869).backgroundify(function _trySend() {
                return closure_2_55._sendMessage(closure_1_0, closure_1_1, dependencyMap);
              }, undefined);
              if (null == closure_130_3.scheduledTimestamp) {
                const result = MessageRoundtripTrackerStore.recordMessageSendAttempt(closure_130_0, closure_129_1, closure_130_3);
              }
              if (ready.isReady(closure_130_0)) {
                closure_129_2();
              } else {
                if (closure_130_2) {
                  if (closure_130_0 !== closure_0(7331).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
              const obj3 = tmp2(7869);
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
      const obj2 = { guild_id: guildId, channel_id: pendingReply.channel.id, message_id: pendingReply.message.id };
      obj.messageReference = obj2;
      let tmp2;
      if (!pendingReply.shouldMention) {
        const obj3 = { parse: null, replied_user: false };
        const _Object = Object;
        obj3.parse = Object.values(__initData14);
        tmp2 = obj3;
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
  getSendMessageOptions(pendingReply) {
    const merged = Object.assign(obj17.getSendMessageOptionsForReply(pendingReply.pendingReply));
    const merged1 = Object.assign(pendingReply);
    const merged2 = Object.assign(obj17.getSendMessageOptionsForStickers({}));
    const merged3 = Object.assign(pendingReply);
    const merged4 = Object.assign(obj17.getSendMessageOptionsForScheduledMessage({}));
    return {};
  },
  sendInvite(id, code, location, inviteAnalyticsMetadata, content) {
    const tmp = getInviteURLDefault(code);
    content = tmp;
    if (null != content) {
      const _HermesInternal = HermesInternal;
      content = "" + content + "\n" + tmp;
    }
    return obj17._sendMessage(id, { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, { location, inviteAnalyticsMetadata });
  },
  sendActivityBookmark(arg0, content, location, inviteAnalyticsMetadata) {
    return obj17._sendMessage(arg0, { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, { location, inviteAnalyticsMetadata });
  },
  sendStickers(id, items1) {
    let str = result;
    if (result === undefined) {
      str = "";
    }
    let flag = arg4;
    if (arg4 === undefined) {
      flag = false;
    }
    if (typeof str === "string") {
      const obj = { content: str, invalidEmojis: [], validNonShortcutEmojis: [], tts: flag };
      let tmp = obj;
    } else {
      const obj2 = {};
      const merged = Object.assign(str);
      let tts = str.tts;
      if (tts == null) {
        tts = flag;
      }
      obj2.tts = tts;
      tmp = obj2;
    }
    const obj3 = {};
    const merged1 = Object.assign(arg3);
    obj3.stickerIds = items1;
    return obj17._sendMessage(id, tmp, obj3);
  },
  sendGreetMessage(id, stickerId) {
    const _require = id;
    closure_1 = stickerId;
    let obj = sendMessageOptionsForReply;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_28.MESSAGES_GREET(id), body: null, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError(), context: { location: constants10.GREET } };
    const obj2 = { sticker_ids: null, allowed_mentions: allowedMentions, message_reference: messageReference };
    let items = [stickerId];
    obj2.sticker_ids = items;
    request.body = obj2;
    let obj3 = { location: constants10.GREET };
    const obj4 = require("HTTPUtils");
    return HTTP.post(request).then((body) => {
      SentMessageIntentsHandlerDefault.donateSentMessage(body.body.content, closure_0);
      obj17.receiveMessage(closure_0, body.body);
      const obj3 = { type: "STICKER_TRACK_USAGE", stickerIds: null };
      const items = [closure_1];
      obj3.stickerIds = items;
      DispatcherDefault.dispatch(obj3);
      return body;
    }, (messageId) => {
      logger.log("Failed to send greeting");
      if (429 !== messageId.status) {
        obj17.sendClydeError(channelId, messageId.body.code);
      }
      DispatcherDefault.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId });
      throw messageId;
    });
  },
  sendPollMessage(id, poll, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2.poll = poll;
    obj2.location = constants10.POLL_CREATION;
    return obj17._sendMessage(id, { content: "", tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, obj2);
  },
  validateMessage(invalidEmojis, currentUser, channelId) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = util.intl;
        let stringResult = intl.string(util.t["V5/GgC"]);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      const obj2 = { errorMessage: stringResult, errorMessageName: str };
      return obj2;
    }
    const intl2 = util.intl;
    stringResult = intl2.string(util.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
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
              let obj4 = { value, done: true };
              return obj4;
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
              const promise = emojiUsed(tmp5[62])(channelId);
              if (null != promise) {
                logger.info("Converting channel to a private channel");
                c8 = 3;
                let obj5 = {
                  value: promise.then((result) => {
                              logger.info("Finished converting channel to a private channel");
                              return closure_2_55._sendMessage(result, emojiUsed, publish);
                            }),
                  done: true
                };
                return obj5;
              } else {
                const content = emojiUsed.content;
                closure_131_0 = content;
                ({ invalidEmojis, validNonShortcutEmojis: closure_131_1, tts } = emojiUsed);
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
                const tmp97 = tmp3(emojiUsed(tmp5[67])(content), 2);
                let addFlagResult = channelId;
                let tmp100 = content;
                if (tmp97[0]) {
                  closure_131_0 = tmp98;
                  addFlagResult = channelId(tmp5[68]).addFlag(tmp93, constants.SUPPRESS_NOTIFICATIONS);
                  tmp100 = tmp98;
                  let obj13 = channelId(tmp5[68]);
                }
                channel = channel.getChannel(channelId);
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                guild = guild.getGuild(guild_id);
                let addFlagResult1 = addFlagResult;
                if (obj14.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
                  addFlagResult1 = channelId(tmp5[68]).addFlag(addFlagResult, constants.IS_GUILD_OFFICIAL);
                  let obj15 = channelId(tmp5[68]);
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
                                    let obj7 = { value: Promise.resolve(), done: true };
                                    return obj7;
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
                  let DEFAULT = constants2.REPLY;
                } else {
                  DEFAULT = constants2.DEFAULT;
                }
                closure_131_13 = DEFAULT;
                const nonce = publish.nonce;
                emojiUsed = nonce;
                if (nonce == null) {
                  emojiUsed = channelId(tmp5[49]).createNonce();
                  obj17 = channelId(tmp5[49]);
                }
                closure_131_14 = emojiUsed;
                closure_131_15 = emojiUsed;
                let obj9 = { channelId, content: tmp100, tts: tmp75, type: DEFAULT, messageReference, allowedMentions, flags: null, nonce: null, poll: null, sharedCustomTheme: null, mediaMention: null };
                let tmp130;
                obj14 = channelId(tmp5[69]);
                tmp93 = channelId;
                if (0 !== addFlagResult1) {
                  tmp130 = addFlagResult1;
                }
                obj9.flags = tmp130;
                obj9.nonce = emojiUsed;
                const tmp128 = emojiUsed(tmp5[47]);
                obj9.poll = channelId(tmp5[70]).createPollServerDataFromCreateRequest(poll);
                obj9.sharedCustomTheme = sharedCustomTheme;
                obj9.mediaMention = mediaMention;
                const tmp128Result = tmp128(obj9);
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
                  obj17.receiveMessage(channelId, tmp128Result, true, publish);
                  let obj20 = channelId(tmp5[71]);
                }
                if (!c51) {
                  if (null != invalidEmojis) {
                    if (invalidEmojis.length > 0) {
                      c51 = true;
                      const validateMessageResult = obj17.validateMessage(invalidEmojis, currentUser.getCurrentUser(), channelId);
                      obj17.sendBotMessage(channelId, validateMessageResult.errorMessage, validateMessageResult.errorMessageName);
                    }
                  }
                }
                if (null != announcementSendOptions) {
                  let SEND = channelId(tmp5[72]).MessageDataType.SEND_ANNOUNCEMENT;
                } else {
                  SEND = channelId(tmp5[72]).MessageDataType.SEND;
                }
                let obj11 = { type: SEND, message: null };
                let obj12 = { channelId, content: tmp100, nonce: emojiUsed, tts: tmp75, message_reference: messageReference, allowed_mentions: allowedMentions, flags: addFlagResult1, analyticsLocation: _location };
                obj11.message = obj12;
                closure_131_17 = obj11;
                if (null != emojiUsed.components) {
                  obj11.message.components = tmp207.components;
                }
                if (null != announcementSendOptions) {
                  ({ createThread: obj21.message.create_thread, threadName: obj21.message.title, publish } = announcementSendOptions);
                  if (publish == null) {
                    publish = false;
                  }
                  obj11.message.publish = publish;
                }
                if (null != activityAction) {
                  let session_id;
                  if (activityAction != null) {
                    session_id = activityAction.activity.session_id;
                  }
                  let sessionId = session_id;
                  if (activityAction.type !== constants4.JOIN_REQUEST) {
                    sessionId = session_id;
                    if (activityAction.type !== tmp160.STREAM_REQUEST) {
                      sessionId = session_id;
                      if (null == session_id) {
                        sessionId = sessionId.getSessionId();
                      }
                    }
                  }
                  if (null != sessionId) {
                    let obj16 = { type: activityAction.type, session_id: sessionId, target_user_id: null };
                    ({ targetUserId: obj23.target_user_id, activity } = activityAction);
                    let tmp163 = null != activity.party;
                    if (tmp163) {
                      tmp163 = null != activity.party.id;
                    }
                    if (tmp163) {
                      obj16.party_id = activity.party.id;
                    }
                    obj11.message.application_id = activity.application_id;
                    obj11.message.activity = obj16;
                  }
                }
                if (null != poll) {
                  obj11.message.poll = poll;
                }
                if (null != sharedCustomTheme) {
                  obj11.message.shared_client_theme = sharedCustomTheme;
                }
                if (null != stickerIds) {
                  obj11.message.sticker_ids = stickerIds;
                }
                if (enabled.isEnabled()) {
                  obj11.message.has_poggermode_enabled = true;
                }
                if (withCheckpoint) {
                  obj11.message.with_checkpoint = true;
                }
                if (null != contentInventoryEntry) {
                  obj11.message.content_inventory_entry = contentInventoryEntry;
                }
                if (null != mediaMention) {
                  obj11.message.media_mention = mediaMention;
                }
                let tmp165 = null != attachments;
                if (tmp165) {
                  tmp165 = attachments.length > 0;
                }
                if (tmp165) {
                  obj11.message.attachments = attachments;
                }
                if (null != attachmentsToUpload) {
                  if (attachmentsToUpload.length > 0) {
                    c6 = 1;
                    let obj18 = { channelId, nonce: tmp125, items: attachmentsToUpload, message: tmp128Result, shouldUploadFailureSendNotification: null };
                    const doNotNotifyOnError = publish.doNotNotifyOnError;
                    obj18.shouldUploadFailureSendNotification = !doNotNotifyOnError;
                    c7 = 2;
                    c8 = 1;
                    let obj22 = { value: channelId(tmp5[73]).uploadMessageAttachments(obj18), done: false };
                    return obj22;
                  }
                }
                let obj19 = channelId(tmp5[70]);
              }
            }
          } else if (1 === tmp8) {
            c6 = 0;
            closure_131_20 = message_id;
            file = closure_131_20.file;
            code = closure_131_20.code;
            reason = closure_131_20.reason;
            responseBody = closure_131_20.responseBody;
            let obj24 = { fileItems: file.items, failureCode: code, errorMessage: null };
            let msg;
            if (reason != null) {
              msg = reason.msg;
            }
            obj24.errorMessage = msg;
            let result1 = channelId(tmp5[74]).logMessageSendFailure(obj24);
            if (closure_131_9 != null) {
              tmp68(file, code, reason, responseBody);
            }
            c8 = 3;
            let obj26 = { value: undefined, done: true };
            return obj26;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              let obj27 = { value, done: true };
              return obj27;
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
                  closure_131_17.message.attachments = attachments2.map((item, index) => channelId(inviteAnalyticsMetadata[45]).getAttachmentPayload(item, index));
                }
                c6 = 0;
              }
            }
          } else if (3 === tmp8) {
            c6 = 0;
            closure_131_26 = message_id;
            if (null != uploader) {
              let obj29 = { type: "UPLOAD_FAIL", channelId: closure_132_0, file: uploader._file, messageId: closure_131_15, noSendFailed: true };
              emojiUsed(tmp5[46]).dispatch(obj29);
              let obj6 = emojiUsed(tmp5[46]);
            }
            if (true !== closure_132_2.doNotNotifyOnError) {
              let result2 = channelId(tmp5[76]).handleScheduleMessageError(closure_131_26);
              let obj8 = channelId(tmp5[76]);
            }
            throw closure_131_26;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            let obj30 = { value, done: true };
            return obj30;
          } else {
            closure_131_25 = value;
            if (null != uploader) {
              let obj31 = { type: "UPLOAD_COMPLETE", channelId: closure_132_0, file: uploader._file, aborted: false };
              emojiUsed(tmp5[46]).dispatch(obj31);
              let obj = emojiUsed(tmp5[46]);
            }
            let result3 = channelId(tmp5[76]).showScheduleMessageSuccessToast(closure_131_10);
            c6 = 0;
            c8 = 3;
            let obj32 = { value: closure_131_25, done: true };
            return obj32;
          }
          if (null != closure_131_10) {
            c6 = 2;
            let obj33 = { channelId: closure_132_0, scheduledTimestamp: closure_131_10, messageSendData: closure_131_17.message };
            c7 = 4;
            c8 = 1;
            const obj53 = { value: channelId(tmp5[75]).createScheduledMessage(obj33), done: false };
            return obj53;
          } else {
            const promise2 = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              emojiUsed = arg1;
              closure_2 = Date.now();
              emojiUsed(inviteAnalyticsMetadata[72]).length;
              const rounded = Math.floor(10000 * Math.random());
              logger.info("Queueing message to be sent LogId:" + rounded);
              emojiUsed(inviteAnalyticsMetadata[72]).enqueue(channel, (ok) => {
                if (ok.ok) {
                  id(7874).donateSentMessage(content, channelId);
                  let obj4 = { sendAnalytics: null, poll: null };
                  let obj5 = { duration: tmp, queueSize: length };
                  obj4.sendAnalytics = obj5;
                  obj4.poll = poll;
                  closure_4_55.receiveMessage(channelId, ok.body, true, obj4);
                  const obj15 = id(7874);
                  request = request.getRequest(id(11).cast(channelId));
                  if (null != request) {
                    ({ guildId, userId, applicationStatus } = request);
                    let obj7 = { guildId, channelId, messageId: ok.body.id, joinRequestStatus: applicationStatus, joinRequestUserId: userId };
                    let result = closure_0(5629).trackMemberApplicationInterviewMessage(obj7);
                    let obj19 = closure_0(5629);
                  }
                  let result1 = MessageRoundtripTrackerStore.recordMessageSendApiResponse(stickerById);
                  if (closure_2_13 === constants3.REPLY) {
                    id = ok.body.id;
                    if (message_id != null) {
                      message_id = message_id.message_id;
                    }
                    pendingReplyActionSource = pendingReplyActionSource.getPendingReplyActionSource(channelId);
                    if ("message_swipe" === pendingReplyActionSource) {
                      let message = null;
                      if (null != message_id) {
                        message = MessageStore.getMessage(channelId, message_id);
                      }
                      channel = ChannelStore.getChannel(channelId);
                      currentUser = authStore.getCurrentUser();
                      let obj9 = { message_id: id, channel_id: channelId, guild_id: null, swipe_action: "reply", is_own_message: null };
                      let guild_id;
                      if (channel != null) {
                        guild_id = channel.guild_id;
                      }
                      obj9.guild_id = guild_id;
                      let tmp117 = null != currentUser;
                      if (tmp117) {
                        let id1;
                        if (message != null) {
                          id1 = message.author.id;
                        }
                        tmp117 = currentUser.id === id1;
                      }
                      obj9.is_own_message = tmp117;
                      id(1241).track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj9);
                      const obj23 = id(1241);
                    } else if ("message_shortcut" === pendingReplyActionSource) {
                      const channel1 = ChannelStore.getChannel(channelId);
                      const obj11 = { message_id: id, channel_id: channelId, guild_id: null, original_message_id: null, action: "reply" };
                      let guild_id1;
                      if (channel1 != null) {
                        guild_id1 = channel1.guild_id;
                      }
                      obj11.guild_id = guild_id1;
                      obj11.original_message_id = message_id;
                      const obj39 = id(1241);
                      let guild_id2;
                      if (channel1 != null) {
                        guild_id2 = channel1.guild_id;
                      }
                      let merged = Object.assign(closure_0(4818).collectGuildAnalyticsMetadata(guild_id2));
                      const obj21 = closure_0(4818);
                      let merged1 = Object.assign(closure_0(4818).collectChannelAnalyticsMetadata(channel1));
                      obj39.track(constants2.MESSAGE_SHORTCUT_ACTION_SENT, obj11);
                      const obj22 = closure_0(4818);
                    }
                  }
                  const obj18 = id(11);
                  const obj13 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: SlowmodeType.SendMessage, channelId };
                  id(573).dispatch(obj13);
                  const obj25 = id(573);
                  const obj16 = { type: "EMOJI_TRACK_USAGE", emojiUsed };
                  id(573).dispatch(obj16);
                  const obj27 = id(573);
                  obj17 = { type: "STICKER_TRACK_USAGE", stickerIds };
                  id(573).dispatch(obj17);
                  const obj29 = id(573);
                  const obj20 = { type: "LOCAL_MESSAGE_CREATE", message: null };
                  const obj24 = { channel_id: channelId, author: authStore.getCurrentUser() };
                  obj20.message = obj24;
                  id(573).dispatch(obj20);
                  const obj26 = { content, channelId, messageId: ok.body.id, location: null, inviteAnalyticsMetadata: null };
                  let str4 = publish;
                  let str5 = publish;
                  if (publish == null) {
                    str5 = "chat_input";
                  }
                  obj26.location = str5;
                  obj26.inviteAnalyticsMetadata = inviteAnalyticsMetadata;
                  ({ channelId: closure_0, messageId: id, location: attachments, inviteAnalyticsMetadata: channel3, overrideProperties, content } = obj26);
                  if (overrideProperties === undefined) {
                    overrideProperties = {};
                  }
                  const id2 = id.getId();
                  const obj31 = id(573);
                  const item = id(4621)(content).forEach((url) => {
                    ({ type, code } = url);
                    if (obj.isApplicationCodedLink(type)) {
                      const applicationCodedLinkData = channelId(length[29]).getApplicationCodedLinkData(type, code, url.url);
                      if (null != applicationCodedLinkData) {
                        ({ applicationId, type: type2 } = applicationCodedLinkData);
                        if (channelId(length[30]).CodedLinkType.APP_DIRECTORY_PROFILE === type2) {
                          const result = channelId(length[31]).trackAppDirectoryProfileEmbed(applicationId);
                          const tmpResult10 = channelId(length[31]);
                          const result1 = channelId(length[32]).trackAppEmbedLinkSent(code, constants2.APP_DISCOVERY, closure_5);
                          const tmpResult11 = channelId(length[32]);
                        } else if (channelId(length[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT === type2) {
                          const result2 = channelId(length[31]).trackAppDirectoryProfileEmbed(applicationId, "storefront");
                          const tmpResult12 = channelId(length[31]);
                        } else if (channelId(length[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type2) {
                          const result3 = channelId(length[31]).trackAppDirectoryProfileEmbed(applicationId, "storefront_sku");
                          const tmpResult13 = channelId(length[31]);
                        } else if (channelId(length[30]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                          const params = applicationCodedLinkData.params;
                          const tmpResult14 = channelId(length[32]);
                          const ACTIVITY = constants2.ACTIVITY;
                          let referrerId = params.referrerId;
                          if (referrerId == null) {
                            referrerId = closure_5;
                          }
                          const result4 = tmpResult14.trackAppEmbedLinkSent(applicationId, ACTIVITY, referrerId, params.customId);
                        } else if (channelId(length[30]).CodedLinkType.APP_OAUTH2_LINK === type2) {
                          const result5 = channelId(length[32]).trackAppEmbedLinkSent(applicationId, constants2.OAUTH, closure_5);
                          const tmpResult15 = channelId(length[32]);
                          const obj3 = { application_id: applicationId };
                          id(length[33]).trackWithMetadata(closure_2_27.APP_OAUTH2_LINK_EMBED_URL_SENT, obj3);
                          const obj19 = id(length[33]);
                        }
                      }
                      const tmpResult = channelId(length[29]);
                    } else if (channelId(length[30]).CodedLinkType.INVITE === type) {
                      const obj4 = { inviteKey: code, channelId, messageId: id, location: attachments, inviteAnalyticsMetadata: channel3, overrideProperties };
                      closure_2_53(obj4);
                    } else if (channelId(length[30]).CodedLinkType.TEMPLATE === type) {
                      guildTemplate = guildTemplate.getGuildTemplate(code);
                      if (null != guildTemplate) {
                        if (guildTemplate.state !== constants3.RESOLVING) {
                          const obj5 = { guild_template_code: code, guild_template_name: null, guild_template_description: null, guild_template_guild_id: null };
                          ({ name: obj10.guild_template_name, description: obj10.guild_template_description, sourceGuildId: obj10.guild_template_guild_id } = guildTemplate);
                          id(length[33]).trackWithMetadata(closure_2_27.GUILD_TEMPLATE_LINK_SENT, obj5);
                          const obj9 = id(length[33]);
                        }
                      }
                    } else if (channelId(length[30]).CodedLinkType.BUILD_OVERRIDE !== type) {
                      if (channelId(length[30]).CodedLinkType.EXPERIMENT !== type) {
                        if (channelId(length[30]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
                          if (channelId(length[30]).CodedLinkType.EVENT !== type) {
                            if (channelId(length[30]).CodedLinkType.CHANNEL_LINK !== type) {
                              if (channelId(length[30]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                                const result6 = channelId(length[32]).trackAppEmbedLinkSent(code, constants2.ACTIVITY_INVITE, closure_5);
                                const tmpResult16 = channelId(length[32]);
                              } else if (channelId(length[30]).CodedLinkType.GUILD_PRODUCT !== type) {
                                if (channelId(length[30]).CodedLinkType.SERVER_SHOP !== type) {
                                  if (channelId(length[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                    if (channelId(length[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                      if (channelId(length[30]).CodedLinkType.QUESTS_EMBED === type) {
                                        const adMetadataSealed = channelId(length[34]).getAdMetadataSealed(channelId(length[35]).QuestContent.QUESTS_EMBED);
                                        const tmpResult17 = channelId(length[34]);
                                        const obj6 = { questId: code, event: closure_2_27.QUEST_LINK_SHARED, properties: null, trackGuildAndChannelMetadata: true, sourceQuestContent: null };
                                        let tmp8 = null;
                                        if (null != adMetadataSealed) {
                                          tmp8 = adMetadataSealed;
                                        }
                                        const obj7 = { metadata_sealed: tmp8 };
                                        obj6.properties = obj7;
                                        obj6.sourceQuestContent = channelId(length[35]).QuestContent.QUESTS_EMBED;
                                        channelId(length[36]).trackQuestEvent(obj6);
                                        const tmpResult18 = channelId(length[36]);
                                      } else if (channelId(length[30]).CodedLinkType.GAME_PROFILE === type) {
                                        const obj8 = { game_id: code };
                                        id(length[37]).track(closure_2_27.GAME_PROFILE_LINK_EMBED_SENT, obj8);
                                        const obj2 = id(length[37]);
                                      } else if (channelId(length[30]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (channelId(length[30]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (channelId(length[30]).CodedLinkType.USER_PROFILE !== type) {
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
                    obj = channelId(length[29]);
                  });
                  let str6 = str4;
                  if (str4 == null) {
                    str6 = "chat_input";
                  }
                  closure_0 = channelId;
                  id = ok.body.id;
                  attachments = str6;
                  channel3 = c2.isGiftLinkSentOnBehalfOfUser;
                  const arr2 = id(4621)(content);
                  const obj35 = closure_0(4877);
                  const item1 = closure_0(4877).findGiftCodes(content).forEach((gift_code) => {
                    channel = channel.getChannel(closure_0);
                    if (null != channel) {
                      const obj = { location: attachments, gift_code, guild_id: channel.getGuildId(), channel_id: null, channel_type: null, message_id: null, automatic_send: null };
                      ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
                      obj.message_id = id;
                      obj.automatic_send = channel3;
                      id(length[33]).trackWithMetadata(closure_2_27.GIFT_CODE_SENT, obj);
                      const obj2 = id(length[33]);
                    }
                  });
                  if (null != c2.gifMetadata) {
                    if (str4 == null) {
                      str4 = "chat_input";
                    }
                    const channel2 = ChannelStore.getChannel(channelId);
                    if (null != channel2) {
                      const obj28 = { location: str4, message_id: ok.body.id, gif_provider: null, load_id: null, source_object: null, gif_url: null, gif_id: null };
                      ({ gif_provider: obj42.gif_provider, load_id: obj42.load_id, source_object: obj42.source_object, gif_url: obj42.gif_url, gif_id: obj42.gif_id } = c2.gifMetadata);
                      const obj41 = id(1241);
                      const merged2 = Object.assign(closure_0(4818).collectGuildAnalyticsMetadata(channel2.getGuildId()));
                      const obj43 = closure_0(4818);
                      const merged3 = Object.assign(closure_0(4818).collectChannelAnalyticsMetadata(channel2));
                      obj41.track(constants2.MESSAGE_SENT_WITH_GIF, obj28);
                      const obj44 = closure_0(4818);
                    }
                  }
                  attachments = ok.body.attachments;
                  if (attachments == null) {
                    attachments = [];
                  }
                  let items = closure_2_8;
                  if (closure_2_8 == null) {
                    items = [];
                  }
                  closure_0 = channelId;
                  id = ok.body.id;
                  if (attachments.length === items.length) {
                    channel3 = ChannelStore.getChannel(channelId);
                    if (null != channel3) {
                      overrideProperties = messageByReference.getMessageByReference(tmp152);
                      const item2 = items.forEach((clip, index) => {
                        clip = clip.clip;
                        if (null != clip) {
                          let someResult = overrideProperties.state === constants.LOADED;
                          if (someResult) {
                            attachments = overrideProperties.message.attachments;
                            someResult = attachments.some(() => { ... });
                          }
                          const obj5 = {};
                          const obj = id(length[37]);
                          const merged = Object.assign(attachments(length[42]).getClipBaseProperties(clip));
                          const obj3 = attachments(length[42]);
                          const merged1 = Object.assign(attachments(length[42]).getClipContextProperties());
                          obj5.channel_id = channel_id;
                          obj5.guild_id = channel3.getGuildId();
                          obj5.channel_type = channel3.type;
                          ({ applicationId: obj2.application_id, id: obj2.clip_uuid, remoteClipId: obj2.remote_clip_id } = clip);
                          obj5.message_id = id;
                          obj5.attachment_id = attachments[index].id;
                          obj5.is_distributed_clip_reply = someResult;
                          obj.track(closure_2_27.CLIP_SHARED, obj5);
                          const obj4 = attachments(length[42]);
                        }
                      });
                    }
                  }
                  if (null != sessionId) {
                    const obj30 = { type: "UPLOAD_COMPLETE", channelId, file: sessionId._file, aborted: false };
                    id(573).dispatch(obj30);
                    const obj37 = id(573);
                  }
                  closure_0(ok);
                  const findGiftCodesResult = closure_0(4877).findGiftCodes(content);
                } else {
                  let obj = { hasErr: null, status: null, code: null, error: null };
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
                              const obj32 = { type: "SLOWMODE_SET_COOLDOWN", channelId, slowmodeType: SlowmodeType.SendMessage, cooldownMs: retry_after * id(1091).Millis.SECOND };
                              id(573).dispatch(obj32);
                              flag = false;
                              let obj6 = id(573);
                            }
                          } else {
                            const AUTOMOD_ERROR_CODES = closure_0(8055).AUTOMOD_ERROR_CODES;
                            if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                              const obj33 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData, errorResponseBody: null };
                              const obj34 = { code: ok.body.code, message: ok.body.message };
                              obj33.errorResponseBody = obj34;
                              id(573).dispatch(obj33);
                              flag = false;
                              let obj3 = id(573);
                            } else if (ok.body.code === constants.POGGERMODE_TEMPORARILY_DISABLED) {
                              id(573).dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" });
                              flag = false;
                              let obj2 = id(573);
                            } else if (ok.body.code === constants.EXPLICIT_CONTENT) {
                              const EXPLICIT_CONTENT = constants4.EXPLICIT_CONTENT;
                              flag = false;
                            } else {
                              let tmp8 = null != poll || closure_2_12;
                              if (!tmp8) {
                                tmp8 = null != closure_2_7;
                              }
                              flag = false;
                              if (!tmp8) {
                                closure_4_55.sendClydeError(channelId, ok.body.code);
                                flag = false;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (flag) {
                    if (null != MessageStore.getMessage(channelId, messageId)) {
                      closure_4_55.deleteMessage(channelId, messageId, true);
                    }
                  } else {
                    if (null != sessionId) {
                      const obj36 = { type: "UPLOAD_FAIL", channelId, file: sessionId._file, messageId, reason: EXPLICIT_CONTENT, noSendFailed: true };
                      id(573).dispatch(obj36);
                      let obj8 = id(573);
                    }
                    let hasErr = ok.hasErr;
                    if (!hasErr) {
                      hasErr = EXPLICIT_CONTENT !== constants4.EXPLICIT_CONTENT;
                    }
                    if (!hasErr) {
                      const body2 = ok.body;
                      let attachments1;
                      if (body2 != null) {
                        attachments1 = body2.attachments;
                      }
                      let result2 = closure_4_55.sendExplicitMediaClydeError(channelId, attachments1, closure_0(7708).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    }
                    const obj38 = { type: "MESSAGE_SEND_FAILED", messageId, channelId, shouldNotify: !c2.doNotNotifyOnError, reason: EXPLICIT_CONTENT };
                    id(573).dispatch(obj38);
                    const obj10 = id(573);
                    let status;
                    if (!ok.hasErr) {
                      status = ok.status;
                    }
                    const obj40 = { failureCode: status, errorMessage: null };
                    let message1;
                    if (ok.hasErr) {
                      message1 = ok.err.message;
                    }
                    obj40.errorMessage = message1;
                    let result3 = closure_0(7957).logMessageSendFailure(obj40);
                    const obj12 = closure_0(7957);
                    let result4 = id(7948).cancelPendingSendRequests(channelId);
                    const item3 = result4.forEach((messageId) => {
                      logger.log("Cancelling pending message", messageId.nonce);
                      id(channel3[46]).dispatch({ type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId });
                    });
                    const obj14 = id(7948);
                  }
                  id(ok);
                }
              }, rounded);
            });
            c8 = 3;
            const obj54 = { value: promise2, done: true };
            return obj54;
          }
        } catch (tmp187) {
          message_id = tmp187;
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
    DispatcherDefault.dispatch({ type: "MESSAGE_START_EDIT", channelId, messageId, content, source });
  },
  startEditMessageRecord(id, flags, source) {
    if (obj.hasFlag(flags.flags, __initData11.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === require("Server").ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        const obj3 = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: joined, source };
        DispatcherDefault.dispatch(obj3);
      }
    }
    obj = FlagUtils;
    DispatcherDefault.dispatch({ type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source });
    const obj4 = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
  },
  updateEditMessage(channelId, textValue, richValue) {
    DispatcherDefault.dispatch({ type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue });
  },
  endEditMessage(id, response) {
    DispatcherDefault.dispatch({ type: "MESSAGE_END_EDIT", channelId: id, response });
  },
  editMessage(id, id2, parsed) {
    closure_0 = id;
    closure_1 = id2;
    ({ content: importAll, components: dependencyMap } = parsed);
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
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
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              (function tryTrackEditMessageSwipeSend(message_id, channel_id) {
                if ("message_swipe" === editActionSource.getEditActionSource(channel_id)) {
                  channel = channel.getChannel(channel_id);
                  const obj2 = { message_id, channel_id, guild_id: null, swipe_action: "edit", is_own_message: true };
                  let guild_id;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  obj2.guild_id = guild_id;
                  messageId(dependencyMap[37]).track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj2);
                  const obj = messageId(dependencyMap[37]);
                }
              })(tmp2, tmp3);
              c2 = 1;
              dependencyMap = 1;
              const obj5 = { value: tmp2(7879).unarchiveThreadIfNecessary(tmp3), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            let obj = { value, done: true };
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
            let obj6 = { channelId: closure_129_0, messageId: closure_129_1, content: closure_129_2, isCrossposted: closure_128_1, allowed_mentions: closure_128_0, components: closure_129_3 };
            closure_128_2 = obj6;
            const obj8 = { type: tmp3(7948).MessageDataType.EDIT, message: closure_128_2 };
            tmp2(7948).enqueue(obj8, (hasErr) => {
              hasErr = hasErr.hasErr;
              let hasItem = !hasErr;
              if (!hasErr) {
                const AUTOMOD_ERROR_CODES = channelId(8055).AUTOMOD_ERROR_CODES;
                hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
              }
              if (hasItem) {
                const obj = { type: channelId(7948).MessageDataType.EDIT, message };
                const obj3 = { type: "MESSAGE_EDIT_FAILED_AUTOMOD", messageData: obj, errorResponseBody: null };
                const obj4 = { code: hasErr.body.code, message: hasErr.body.message };
                obj3.errorResponseBody = obj4;
                messageId(573).dispatch(obj3);
                const obj2 = messageId(573);
              }
              const AccessibilityAnnouncer = channelId(4489).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = channelId(1115).intl;
              const string = intl.string;
              const t = channelId(1115).t;
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
              obj17.endEditMessage(channelId, tmp14);
              obj17.focusMessage({ channelId, messageId });
              const obj6 = { channelId, messageId };
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
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let message2;
              c2 = 1;
              dependencyMap = 1;
              const obj5 = { value: tmp5(7879).unarchiveThreadIfNecessary(tmp2), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            message2 = message.getMessage(closure_129_0, closure_129_1);
            if (null != message2) {
              const HTTP = tmp2(1271).HTTP;
              const request = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: null };
              const obj6 = { flags: tmp2(1385).setFlag(message2.flags, constants.SUPPRESS_EMBEDS, true) };
              request.body = obj6;
              const obj8 = tmp2(1385);
              request.rejectWithError = tmp2(1271).rejectWithMigratedError();
              HTTP.patch(request);
              const obj9 = tmp2(1271);
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
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let message2;
              c2 = 1;
              dependencyMap = 1;
              const obj5 = { value: tmp5(7879).unarchiveThreadIfNecessary(tmp2), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            message2 = message.getMessage(closure_129_0, closure_129_1);
            if (null != message2) {
              const HTTP = tmp2(1271).HTTP;
              const request = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: null };
              const obj6 = { flags: tmp2(1385).setFlag(message2.flags, constants.IS_GUILD_OFFICIAL, closure_129_2) };
              request.body = obj6;
              const obj8 = tmp2(1385);
              request.rejectWithError = tmp2(1271).rejectWithMigratedError();
              HTTP.patch(request);
              const obj9 = tmp2(1271);
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
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v1 = 1;
              c2 = 1;
              const obj5 = { value: v1(7879).unarchiveThreadIfNecessary(tmp4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const HTTP = tmp4(1271).HTTP;
            const request = { url: closure_1_28.MESSAGE(closure_128_0, closure_128_1), body: null, oldFormErrors: true, rejectWithError: null };
            const obj6 = { attachments: closure_128_2 };
            request.body = obj6;
            request.rejectWithError = tmp4(1271).rejectWithMigratedError();
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
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp4;
              channelId = tmp4;
              if (flag) {
                (function dispatchDelete() {
                  const obj = id(573);
                  const obj2 = { type: "MESSAGE_DELETE", id, channelId };
                  id(573).dispatch({ type: "MESSAGE_DELETE", id, channelId }).then(() => {
                    const AccessibilityAnnouncer = channelId(4489).AccessibilityAnnouncer;
                    const intl = channelId(1115).intl;
                    AccessibilityAnnouncer.announce(intl.string(channelId(1115).t.RYMs7s));
                  });
                })();
                dependencyMap = 3;
              } else {
                c2 = 1;
                dependencyMap = 1;
                const obj5 = { value: id(7879).unarchiveThreadIfNecessary(channelId), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const HTTP = channelId(1271).HTTP;
            const obj6 = { url: closure_1_28.MESSAGE(closure_129_0, closure_129_1), oldFormErrors: true, rejectWithError: channelId(1271).rejectWithMigratedError() };
            const obj7 = channelId(1271);
            HTTP.del(obj6).then(() => {
              const obj = id(573);
              const obj2 = { type: "MESSAGE_DELETE", id, channelId };
              id(573).dispatch({ type: "MESSAGE_DELETE", id, channelId }).then(() => {
                const AccessibilityAnnouncer = channelId(4489).AccessibilityAnnouncer;
                const intl = channelId(1115).intl;
                AccessibilityAnnouncer.announce(intl.string(channelId(1115).t.RYMs7s));
              });
            });
            const delResult = HTTP.del(obj6);
          }
          dependencyMap = 3;
          let obj = { value, done: true };
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
      const obj2 = { message_name: message.loggingName, message_author: message.author.username };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj2);
    }
    const result = PremiumGiftingIntentActionCreators.logGiftIntentMessageDismissed(message.channel_id, message.id);
    this.deleteMessage(message.channel_id, message.id, true);
  },
  revealMessage(id, messageId) {
    DispatcherDefault.dispatch({ type: "MESSAGE_REVEAL", channelId: id, messageId });
  },
  crosspostMessage(channel, id) {
    closure_1 = id;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              channel = tmp7;
              closure_128_0 = undefined;
              dependencyMap = 1;
              const HTTP = channel(1271).HTTP;
              const obj5 = { url: closure_1_28.MESSAGE_CROSSPOST(channel, tmp3), oldFormErrors: true, failImmediatelyWhenRateLimited: true, rejectWithError: channel(1271).rejectWithMigratedError() };
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = closure_2;
            if (429 === closure_128_1.status) {
              const intl2 = channel(1115).intl;
              const obj7 = { retryAfter: null };
              const _Math = Math;
              obj7.retryAfter = Math.floor(closure_128_1.body.retry_after / 60);
              let formatToPlainStringResult = intl2.formatToPlainString(channel(1115).t["77cuqz"], obj7);
            } else {
              const intl = channel(1115).intl;
              formatToPlainStringResult = intl.string(channel(1115).t.z2gyNF);
            }
            closure_128_0 = formatToPlainStringResult;
            const obj8 = { title: null, body: null, confirmText: null };
            const intl3 = channel(1115).intl;
            obj8.title = intl3.string(channel(1115).t.Vd1hs6);
            obj8.body = closure_128_0;
            const intl4 = channel(1115).intl;
            obj8.confirmText = intl4.string(channel(1115).t.BddRzS);
            tmp3(4982).show(obj8);
            c5 = 3;
            const obj4 = tmp3(4982);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            dependencyMap = 0;
            c5 = 3;
            const obj = { value, done: true };
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

export default obj17;