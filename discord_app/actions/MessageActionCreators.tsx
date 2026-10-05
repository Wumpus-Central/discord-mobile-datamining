// discord_app/actions/MessageActionCreators.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import react_native from "../../_runtime/00017_react-native.js";
import DispatcherDefault from "../Dispatcher.tsx";
import intl5 from "../intl/index.native.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import HelpdeskUtilsDefault from "../utils/HelpdeskUtils.tsx";
import PremiumUtilsDefault from "../utils/PremiumUtils.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import merged5 from "../../_runtime/05075_merged5.js";
import GuildTemplatesConstants from "../modules/guild_templates/GuildTemplatesConstants.tsx";
import MessageCacheStatsDefault from "../modules/local_message_caching/MessageCacheStats.tsx";
import ReferencedMessageStore2 from "../modules/replies/ReferencedMessageStore.tsx";
import ExplicitMediaRedactionUtils from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SlowmodeStore from "../stores/SlowmodeStore.tsx";
import MessageEmbedConstants from "../modules/applications/message_embed/MessageEmbedConstants.tsx";
import appMessageEmbedTracking from "../modules/applications/message_embed/web/appMessageEmbedTracking.tsx";
import InviteTypeUtils from "../modules/instant_invite/InviteTypeUtils.tsx";
import StreamerApplicationSelectors from "../modules/go_live/utils/StreamerApplicationSelectors.tsx";
import UploadUtils from "../utils/UploadUtils.tsx";
import createMessage from "../modules/messages/createMessage.tsx";
import createNonce from "../modules/messages/createNonce.tsx";
import getInviteURLDefault from "../modules/instant_invite/getInviteURL.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import PremiumGiftingIntentActionCreators from "../modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator_mod from "../../_runtime/metro/00005__asyncToGenerator.js";
import GatewayConnectionStore from "../modules/gateway/GatewayConnectionStore.tsx";
import GuildJoinRequestStore from "../modules/guild_member_verification/GuildJoinRequestStore.tsx";
import GuildTemplateStore from "../modules/guild_templates/GuildTemplateStore.tsx";
import MessageRoundtripTrackerStore from "../modules/messages/MessageRoundtripTrackerStore.tsx";
import PoggermodeSettingsStore from "../modules/poggermode/PoggermodeSettingsStore.tsx";
import PendingReplyStore from "../modules/replies/PendingReplyStore.tsx";
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
import Constants from "../Constants.tsx";
import MessageConstants from "../modules/messages/MessageConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const createMessageDefault = createMessage;
let c7, c8, clip, closure_12, endEditMessage, guildTemplate, log, pendingReplyActionSource, url;

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
function trackInvite(channelId) {
  let _location;
  let inviteInstanceId;
  let inviteInstanceId1;
  let inviteKey;
  let messageId;
  let overrideProperties;
  ({ inviteKey, messageId, location: _location, inviteAnalyticsMetadata, overrideProperties } = channelId);
  channelId = channelId.channelId;
  if (overrideProperties === undefined) {
    overrideProperties = {};
  }
  id = AuthenticationStore.getId();
  const invite = InviteStore.getInvite(inviteKey);
  const obj = InviteCodeUtils;
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    const tmp3Result = InviteTypeUtils;
    result1 = tmp3Result.isEmbeddedApplicationInvite(invite);
  }
  let id1;
  if (invite != null) {
    const target_application = invite.target_application;
    if (target_application != null) {
      id1 = target_application.id;
    }
  }
  const tmp8 = null != id1 && result1;
  if (tmp8) {
    const tmp3Result5 = appMessageEmbedTracking;
    const result2 = tmp3Result5.trackAppEmbedLinkSent(id1, LinkType.ACTIVITY_INVITE, id);
  }
  const channel1 = ChannelStore.getChannel(channelId);
  if (null != channel1) {
    let GDM_INVITE;
    if (channel1.isMultiUserDM()) {
      GDM_INVITE = constants3.GDM_INVITE;
    } else {
      GDM_INVITE = null;
      if (!channel1.isPrivate()) {
        GDM_INVITE = constants3.SERVER_INVITE;
      }
    }
    const obj2 = {};
    let tmp28 = GDM_INVITE;
    if (null != invite) {
      tmp28 = GDM_INVITE;
      if (invite.state === constants5.RESOLVED) {
        tmp28 = GDM_INVITE;
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
          tmp28 = GDM_INVITE;
          if (null != lastActiveStream) {
            tmp28 = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj2.destination_user_id = lastActiveStream.ownerId;
              const STREAM = constants3.STREAM;
              const tmp3Result6 = StreamerApplicationSelectors;
              const streamerApplication = tmp3Result6.getStreamerApplication(lastActiveStream, PresenceStore);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj2.application_id = id3;
              tmp28 = STREAM;
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
    const obj3 = {
      location: _location,
      invite_type: tmp28,
      invite_code: result.baseCode,
      guild_id: channel1.getGuildId(),
      channel_id: channel1.id,
      message_id: messageId,
      send_type: constants4.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: result.guildScheduledEventId,
      invite_instance_id: inviteInstanceId,
    };
    const merged = Object.assign(obj2);
    const tmp3Result7 = InviteCodeUtils;
    inviteInstanceId = tmp3Result7.getInviteInstanceId(result.baseCode, messageId);
    if (inviteInstanceId == null) {
      inviteInstanceId = null;
    }
    const merged1 = Object.assign(overrideProperties);
    const obj13 = AppAnalyticsUtilsDefault;
    obj13.trackWithMetadata(constants.INVITE_SENT, obj3);
  } else {
    const tmp12 = null != invite && invite.state === constants5.RESOLVED && null != invite.inviter;
    if (tmp12) {
      const obj4 = { invite_inviter_id: invite.inviter.id };
      if (null != invite.target_application) {
        obj4.application_id = invite.target_application.id;
      }
      const obj5 = {
        location: _location,
        invite_type: constants3.FRIEND_INVITE,
        invite_code: result.baseCode,
        message_id: messageId,
        send_type: constants4.DIRECT_MESSAGE,
        invite_guild_scheduled_event_id: result.guildScheduledEventId,
        invite_instance_id: inviteInstanceId1,
      };
      const merged2 = Object.assign(obj4);
      const tmp3Result8 = InviteCodeUtils;
      inviteInstanceId1 = tmp3Result8.getInviteInstanceId(result.baseCode, messageId);
      if (inviteInstanceId1 == null) {
        inviteInstanceId1 = null;
      }
      const merged3 = Object.assign(overrideProperties);
      const obj8 = AppAnalyticsUtilsDefault;
      obj8.trackWithMetadata(constants.INVITE_SENT, obj5);
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const SlowmodeType = SlowmodeStore.SlowmodeType;
const AbortCodes = Constants.AbortCodes;
({
  AnalyticEvents: closure_27,
  Endpoints: closure_28,
  Permissions,
  ChannelTypes: closure_29,
  LoggingInviteTypes: closure_30,
  SendTypes: closure_31,
  InviteStates: closure_32,
  MessageFlags: closure_33,
  MAX_MESSAGES_FOR_JUMP: closure_34,
  MessageTypes: closure_35,
  AllowedMentionTypes: closure_36,
  HelpdeskArticles: closure_37,
  MarketingURLs: closure_38,
  MessageReferenceTypes: closure_39,
  LOCAL_BOT_ID: closure_40,
  NON_USER_BOT_DISCRIMINATOR: closure_41,
  MessageStates: closure_42,
  ActivityActionTypes: closure_43,
} = Constants);
const LinkType = MessageEmbedConstants.LinkType;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
({ FileUploadErrorTypes: closure_46, MessageSendLocation: closure_47 } = MessageConstants);
const MediaPlayerManager = react_native.NativeModules.MediaPlayerManager;
let tmp5 = new LoggerDefault("MessageActionCreators");
const logger = tmp5;
let tmp6 = new LoggerDefault("MessageQueue");
let closure_50 = tmp6;
let c51 = false;
class RemoteFetch {
  constructor() {
    return Object.assign({ completed: false });
  }
  markComplete() {
    this.completed = true;
  }
}
const prototype = RemoteFetch.prototype;
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = intl5.intl;
    const obj = { seconds: rateLimitPerUser.rateLimitPerUser };
    return intl.formatToPlainString(intl5.t.IWntYg, obj);
  },
};
let obj2 = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    const obj = HelpdeskUtilsDefault;
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (rawRecipients == null) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        let formatToPlainStringResult;
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = intl5.intl;
          const obj2 = { helpUrl: articleURL };
          formatToPlainStringResult = intl2.formatToPlainString(intl5.t.SkGL7l, obj2);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = intl5.intl;
    formatToPlainStringResult = intl.formatToPlainString(intl5.t.llTkqr, { helpUrl: articleURL });
  },
};
let obj3 = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    let obj2;
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { helpUrl: obj2.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
    const SkGL7l = intl5.t.SkGL7l;
    obj2 = HelpdeskUtilsDefault;
    return formatToPlainString(SkGL7l, obj);
  },
};
let obj4 = {
  messageName: "TOO_MANY_THREADS",
  messageGetter(isForumLikeChannel) {
    if (!isForumLikeChannel.isForumLikeChannel()) {
      let stringResult;
      if (!isForumLikeChannel.isForumPost()) {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t["5EMPA7"]);
      }
      return stringResult;
    }
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["/jUd2+"]);
  },
};
let obj5 = {
  messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t["aY+lLC"]);
  },
};
let obj6 = {
  messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
  messageGetter() {
    const intl = intl5.intl;
    const obj = { helpUrl: constants8.HARMFUL_LINKS };
    return intl.formatToPlainString(intl5.t.zSG3Qy, obj);
  },
};
let obj7 = {
  messageName: "HARMFUL_URL_BLOCKED",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.WxX2Fd);
  },
};
let obj8 = {
  messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.k1Cjqr);
  },
};
let obj9 = {
  messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.Z5SUuv);
  },
};
let obj10 = {
  messageName: "BOT_DM_RATE_LIMITED",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.E8nbNb);
  },
};
let obj11 = {
  messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.aRUbah);
  },
};
let obj12 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t["/meGhR"]);
  },
};
let obj13 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.Oc1Zjw);
  },
};
let obj14 = {
  messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
  messageGetter() {
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { maxSizeMb: UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE_MB };
    const DYFPg2 = intl5.t.DYFPg2;
    return formatToPlainString(DYFPg2, obj);
  },
};
let obj15 = {
  messageName: "CLOUD_UPLOAD_NOT_FOUND",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.bQldfH);
  },
};
let obj16 = {
  messageName: "INVALID_PERMISSIONS",
  messageGetter() {
    const intl = intl5.intl;
    return intl.string(intl5.t.zl4Weq);
  },
};
let closure_54 = {
  [AbortCodes.SLOWMODE_RATE_LIMITED]: obj,
  [AbortCodes.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: obj2,
  [AbortCodes.INVALID_MESSAGE_SEND_USER]: obj3,
  [AbortCodes.TOO_MANY_THREADS]: obj4,
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: obj5,
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: obj6,
  [AbortCodes.HARMFUL_URL_BLOCKED]: obj7,
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: obj8,
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: obj9,
  [AbortCodes.RATE_LIMIT_DM_OPEN]: obj10,
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: obj11,
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: obj12,
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: obj13,
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: obj14,
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: obj15,
  [AbortCodes.INVALID_PERMISSIONS]: obj16,
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
    const obj2 = DispatcherDefault;
    const obj3 = {
      type: "MESSAGE_CREATE",
      channelId,
      message,
      optimistic: flag,
      sendMessageOptions: obj,
      isPushNotification: false,
    };
    obj2.dispatch(obj3);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      const obj2 = { message_author: "Clyde", message_name: messageName };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj2);
    }
    const receiveMessage = obj17.receiveMessage;
    const obj3 = createMessage;
    const obj4 = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    receiveMessage(id, obj3.createBotMessage(obj4));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    let obj2;
    const obj = {
      channelId,
      nonce,
      type: constants6.NITRO_NOTIFICATION,
      content,
      flags: closure_33.EPHEMERAL,
      author: obj2,
    };
    const receiveMessage = obj17.receiveMessage;
    obj2 = { id, username: "Nitro Notification", discriminator, avatar: "nitro", bot: true };
    const obj3 = { state: constants9.SENT, channel_id: channelId };
    const merged = Object.assign(createMessageDefault(obj));
    receiveMessage(channelId, obj3, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    let obj2;
    const obj = {
      channelId,
      type: constants6.GIFTING_PROMPT,
      content: "",
      flags: closure_33.EPHEMERAL,
      author: obj2,
      giftingPrompt,
    };
    const receiveMessage = obj17.receiveMessage;
    obj2 = { id, username: "Gifting Prompt", discriminator, avatar: "gifting_prompt", bot: true };
    const obj3 = { state: constants9.SENT };
    const merged = Object.assign(createMessageDefault(obj));
    receiveMessage(channelId, obj3, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    let obj2;
    const obj = {
      channelId,
      type: constants6.GUILD_BOOST_UPSELL,
      content: "",
      flags: closure_33.EPHEMERAL,
      author: obj2,
      boostingPrompt,
    };
    const receiveMessage = obj17.receiveMessage;
    obj2 = { id, username: "Guild Boost Upsell", discriminator, avatar: "guild_boost_upsell", bot: true };
    const obj3 = { state: constants9.SENT };
    const merged = Object.assign(createMessageDefault(obj));
    receiveMessage(channelId, obj3, true);
  },
  sendClydeError(c0) {
    let obj3;
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = ChannelStore.getChannel(c0);
    if (null != channel) {
      if (null != closure_54[num]) {
        obj17.sendBotMessage(c0, closure_54[num].messageGetter(channel), closure_54[num].messageName);
      } else {
        const sendBotMessage = obj17.sendBotMessage;
        const intl = intl5.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj2 = { helpUrl: obj3.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
        const SkGL7l = intl5.t.SkGL7l;
        const _HermesInternal = HermesInternal;
        obj3 = HelpdeskUtilsDefault;
        const formatToPlainStringResult = formatToPlainString(SkGL7l, obj2);
        sendBotMessage(c0, formatToPlainStringResult, "SEND_FAILED (" + num + ")");
      }
    }
  },
  sendExplicitMediaClydeError(c0, attachments, EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED) {
    let message;
    let messageName;
    const f93771 = () => {
      let intl;
      const obj = { message: intl.string(require("intl").t.i4AbAS), messageName: "BOT_GUILD_EXPLICIT_CONTENT" };
      intl = require("intl").intl;
      return obj;
    };
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      let obj = { isDM: channel.isDM(), isGDM: channel.isGroupDM() };
      const match = merged5.match;
      merged5;
      const match1 = match(obj);
      const withResult = match1.with({ isDM: true }, () => {
        let intl;
        const obj = { message: intl.string(require("intl").t["mktny/"]), messageName: "BOT_DM_EXPLICIT_CONTENT" };
        intl = require("intl").intl;
        return obj;
      });
      const withResult1 = withResult.with({ isDM: false, isGDM: true }, () => {
        let intl;
        const obj = { message: intl.string(require("intl").t["mktny/"]), messageName: "BOT_GDM_EXPLICIT_CONTENT" };
        intl = require("intl").intl;
        return obj;
      });
      ({ message, messageName } = withResult1.otherwise(f93771));
      withResult1.otherwise(f93771);
      const obj8 = createNonce;
      const nonce = obj8.createNonce();
      obj17.sendBotMessage(channelId, message, messageName, nonce);
      const obj3 = {
        action:
          ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: nonce,
        channelId,
        context: EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
      };
      const trackMediaRedactionAction = ExplicitMediaRedactionUtils.trackMediaRedactionAction;
      ExplicitMediaRedactionUtils;
      const result = trackMediaRedactionAction(obj3);
      const tmp = null != attachments && attachments.length > 0;
      if (tmp) {
        const obj4 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: nonce, channelId, attachments };
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj4);
      }
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj2);
  },
  clearChannel(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CLEAR_MESSAGES", channelId };
    obj.dispatch(obj2);
  },
  jumpToPresent(channelId, limit) {
    obj17.trackJump(channelId, null, "Present");
    const obj2 = { present: true };
    if (MessageStore.hasPresent(channelId)) {
      const obj3 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: obj2, channelId, limit };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj3);
    } else {
      const obj5 = { channelId, limit, jump: obj2 };
      const messages = obj17.fetchMessages(obj5);
    }
  },
  trackJump(channel_id, id, Present, extraProperties) {
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const JUMP = constants.JUMP;
    const obj = { context: Present, channel_id, message_id: id };
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(extraProperties);
    trackWithMetadata(JUMP, obj);
  },
  jumpToMessage(arg0) {
    let avoidInitialScroll;
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
    if (typeof context === "string") {
      obj17.trackJump(channelId, messageId, context, extraProperties);
    }
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
    const obj = {
      channelId,
      limit,
      jump: { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete },
      isPreload,
      skipLocalFetch,
      avoidInitialScroll,
    };
    return obj17.fetchMessages(obj);
  },
  focusMessage(channelId) {
    const obj = { channelId: channelId.channelId, limit, focus: { messageId: channelId.messageId } };
    const messages = obj17.fetchMessages(obj);
  },
  fetchMessage(arg0) {
    let around;
    let require;
    ({ channelId: require, messageId: importDefault } = arg0);
    return (async () => {
      let obj4;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let v0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              v0 = undefined;
              const HTTP = v0(c3[51]).HTTP;
              const request = {
                url: closure_1_28.MESSAGES(_require),
                query: obj4,
                retries: 2,
                oldFormErrors: true,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              const get = HTTP.get;
              obj4 = { limit: 1, around: importDefault };
              obj9 = v0(c3[51]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            v0 = value;
            if (v0.body.length > 0) {
              const obj = v0(c3[52]);
              c3 = 3;
              const obj7 = { value: obj.createMessageRecord(v0.body[0]), done: true };
              return obj7;
            } else {
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    })();
  },
  fetchMessages(channelId) {
    let avoidInitialScroll;
    let feature;
    let fetchKey;
    let focus;
    let forICYMI;
    let isPreload;
    let obj3;
    let skipLocalFetch;
    let tmp4Result;
    let truncate;
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
    let closure_9 = GatewayConnectionStore.isConnectedOrOverlay();
    const timestamp = Date.now();
    if (null != channel) {
      if (channel.type === constants2.GUILD_STORE) {
        let flag = false;
        return false;
      }
    }
    const tmp5 = limit;
    if (channelId !== channelId(limit[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      logger.log(
        "Fetching messages for " +
          channelId +
          " between " +
          after +
          " and " +
          before +
          ". jump=" +
          JSON.stringify(jump),
      );
      let obj2 = { channelId, before, after, limit, jump, focus, truncate };
      if (!obj17._tryFetchMessagesCached(obj2)) {
        let fetchMessages = before(tmp5[54]).fetchMessages;
        fetchMessages.recordStart();
        let tmp8 = before(tmp5[55]);
        let tmp9 = fetchKey;
        const recordChannelFetchStart = tmp8.recordChannelFetchStart;
        if (fetchKey == null) {
          tmp9 = timestamp;
        }
        let tmp11 = channelId;
        let tmp13 = before;
        let result = recordChannelFetchStart(channelId, tmp9, before, after, limit);
        const tmp17 = null == jump && null != focus;
        if (tmp17) {
          let obj = {};
          const merged = Object.assign(focus);
          jump = obj;
        }
        const tmp6Result = before(tmp5[56]);
        const orCreate = tmp6Result.getOrCreate(channelId);
        const start = orCreate.loadStart(jump);
        const tmp6Result3 = before(tmp5[56]);
        tmp6Result3.commit(start);
        const tmp6Result4 = before(tmp5[46]);
        tmp6Result4.dispatch({ type: "LOAD_MESSAGES" });
        messageId = undefined;
        if (jump != null) {
          messageId = jump.messageId;
        }
        const self = this;
        if (typeof RemoteFetch === "function") {
          merged1 = Object.assign({ completed: false });
          if (!skipLocalFetch) {
            const self2 = this;
            const fetchLocalMessages = this.fetchLocalMessages;
            if (fetchKey == null) {
              fetchKey = timestamp;
            }
            let tmp27 = channelId;
            const localMessages = fetchLocalMessages(channelId, fetchKey, before, after, limit, merged1);
          }
          const HTTP = tmp4(tmp5[51]).HTTP;
          const request = {
            url: closure_28.MESSAGES(channelId),
            query: obj3,
            retries: 2,
            oldFormErrors: true,
            rejectWithError: tmp4Result.rejectWithMigratedError(),
          };
          const get = HTTP.get;
          obj3 = { before, after, limit, around: messageId, preload: isPreload, feature };
          tmp4Result = channelId(tmp5[51]);
          const value = get(request);
          return value.then(
            (result) => {
              let body = result;
              const fetchMessages = before(limit[54]).fetchMessages;
              fetchMessages.recordEnd();
              const dispatchMessages = before(limit[54]).dispatchMessages;
              dispatchMessages.measure(() => {
                let tmp21;
                body = body.body;
                let flag = null != messageId;
                if (!flag) {
                  let tmp8 = body.length === limit;
                  if (tmp8) {
                    let tmp9 = tmp3;
                    if (!tmp9) {
                      tmp9 = null == before && null == after;
                    }
                    tmp8 = tmp9;
                  }
                  flag = tmp8;
                }
                let flag2 = null != messageId;
                if (!flag2) {
                  flag2 = tmp5 && body.length === limit;
                  const tmp11 = tmp5 && body.length === limit;
                }
                let flag3 = flag2;
                let tmp13 = flag;
                if (null != messageId) {
                  const _Math = Math;
                  const rounded = Math.floor(limit / 2);
                  const items = [messageId];
                  HermesBuiltin.arraySpread(
                    items,
                    body.map((id) => id.id),
                    1,
                  );
                  const found = items.filter((item, index, arr) => arr.indexOf(item) === index);
                  const sorted = found.sort(SnowflakeUtilsDefault.compare);
                  const index = sorted.indexOf(messageId);
                  if (index < rounded + (limit % 2) - 1) {
                    flag = false;
                  }
                  if (body.length - index < rounded) {
                    flag2 = false;
                  }
                  flag3 = flag2;
                  tmp13 = flag;
                  if (flag2) {
                    flag3 = flag2;
                    tmp13 = flag;
                    if (body.length > 0) {
                      flag3 = flag2;
                      tmp13 = flag;
                      if (body[0].id === ReadStateStore.lastMessageId(channelId)) {
                        flag3 = false;
                        tmp13 = flag;
                      }
                    }
                  }
                }
                logger.log(
                  ("Fetched " + body.length + " messages for " + channelId + " isBefore:" + null !=
                    before + " isAfter:" + null) !=
                    after,
                );
                merged1.markComplete();
                const obj = {
                  type: "LOAD_MESSAGES_SUCCESS",
                  channelId,
                  messages: body,
                  isBefore: null != before,
                  isAfter: null != after,
                  hasMoreBefore: tmp13,
                  hasMoreAfter: flag3,
                  limit,
                  jump,
                  forICYMI: GatewayConnectionStore,
                  isStale: tmp21,
                  truncate,
                  avoidInitialScroll: GuildJoinRequestStore,
                  requestStartTime: timestamp,
                };
                tmp21 = !closure_9;
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (closure_9) {
                  tmp21 = GatewayConnectionStore.lastTimeConnectedChanged() >= timestamp;
                }
                dispatch(obj);
                let tmp27 = fetchKey;
                const recordChannelFetchedNetwork = MessageCacheStatsDefault.recordChannelFetchedNetwork;
                MessageCacheStatsDefault;
                if (fetchKey == null) {
                  tmp27 = timestamp;
                }
                const result = recordChannelFetchedNetwork(channelId, tmp27, before, after, limit, body);
              });
              return true;
            },
            () => {
              logger.log("Failed to fetch messages for " + channelId);
              const obj = DispatcherDefault;
              const obj2 = { type: "LOAD_MESSAGES_FAILURE", channelId };
              obj.dispatch(obj2);
              return false;
            },
          );
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  },
  fetchLocalMessages(channelId, fetchKey, before, after, limit, merged1) {
    let closure_0 = channelId;
    let closure_1 = fetchKey;
    let closure_4 = limit;
    _asyncToGenerator = merged1;
    return (async () => {
      let c3;
      let closure_1;
      if (after === 2) {
        after = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let basicChannel;
          let closure_3;
          after = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              after = 3;
              throw value;
            } else if (arg0 === 2) {
              after = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const v0 = 0;
              basicChannel = undefined;
              before = undefined;
              closure_3 = undefined;
              basicChannel = basicChannel.getBasicChannel(closure_0);
              const obj13 = tmp(after[56]);
              const orCreate = obj13.getOrCreate(closure_0);
              const obj14 = tmp(after[58]);
              const databaseResult = obj14.database();
              let c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  if (null == before) {
                    if (null == closure_3) {
                      if (orCreate.ready) {
                        if (!orCreate.cached) {
                          const obj8 = tmp(after[54]);
                          obj8.addLocalMessages(closure_0, -2);
                        }
                      }
                      c2 = 1;
                      const obj9 = v0(after[59]);
                      after = 1;
                      const obj10 = {
                        value: obj9.tryLoadAsync(async () => {
                          const obj = fetchKey(c3[60]);
                          return obj.load(closure_1_1, v0, closure_2_4);
                        }),
                        done: false,
                      };
                      return obj10;
                    }
                  }
                }
              }
              const obj7 = tmp(after[54]);
              obj7.addLocalMessages(closure_0, -1);
            }
          } else if (arg0 === 1) {
            after = 3;
            throw value;
          } else if (arg0 === 2) {
            after = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            before = value;
            if (null != before) {
              const _HermesInternal = HermesInternal;
              logger.log(
                "fetched " +
                  before.messages.length +
                  " messages from local database (channel_id: " +
                  channelId +
                  ", remote_fetch_completed: " +
                  closure_129_5.completed +
                  ")",
              );
              const obj2 = tmp(after[54]);
              obj2.addLocalMessages(channelId, before.messages.length);
              if (!closure_129_5.completed) {
                if (before.messages.length > 0) {
                  const tmp29 =
                    before.messages.length >= closure_129_4 &&
                    before.connectionId === GatewayConnectionStore.lastTimeConnectedChanged();
                  closure_3 = tmp29;
                  const obj3 = tmp(after[55]);
                  const result = obj3.recordChannelFetchedLocal(
                    channelId,
                    closure_129_1,
                    closure_129_2,
                    closure_129_3,
                    closure_129_4,
                    before.messages,
                  );
                  const obj12 = {
                    type: "LOCAL_MESSAGES_LOADED",
                    guildId: basicChannel.guild_id,
                    channelId,
                    users: before.users,
                    members: before.members,
                    messages: before.messages,
                    stale: !closure_3,
                  };
                  const obj4 = tmp(after[46]);
                  obj4.dispatch(obj12);
                }
              }
            } else {
              let obj = tmp(after[54]);
              obj.addLocalMessages(channelId, -3);
            }
          }
          after = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp63) {
          after = 3;
          throw tmp63;
        }
      }
    })();
  },
  fetchNewLocalMessages(channelId, authStore2) {
    let closure_0 = channelId;
    let closure_1 = authStore2;
    return (async () => {
      let closure_1;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let v0;
          let basicChannel;
          let orCreate;
          let closure_3;
          let messages;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              v0 = 0;
              basicChannel = undefined;
              orCreate = undefined;
              closure_3 = undefined;
              id = undefined;
              messages = undefined;
              basicChannel = basicChannel.getBasicChannel(closure_0);
              const obj10 = tmp(c3[58]);
              const databaseResult = obj10.database();
              let c1 = databaseResult;
              if (null != databaseResult) {
                if (null != basicChannel) {
                  const obj2 = tmp(c3[56]);
                  orCreate = obj2.getOrCreate(closure_0);
                  if (!orCreate.hasMoreAfter) {
                    c2 = 1;
                    const obj3 = v0(c3[59]);
                    c3 = 1;
                    const obj6 = {
                      value: obj3.tryLoadAsync(async () => {
                        const obj = authStore2(c3[60]);
                        return obj.load(closure_1_1, v0, closure_2_1);
                      }),
                      done: false,
                    };
                    return obj6;
                  }
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_3 = value;
            if (null != closure_3) {
              const obj7 = tmp(c3[56]);
              orCreate = obj7.getOrCreate(channelId);
              const lastResult = orCreate.last();
              id = undefined;
              if (lastResult != null) {
                id = lastResult.id;
              }
              if (null == id) {
                messages = closure_3.messages;
              } else {
                const messages1 = closure_3.messages;
                messages = messages1.filter((id) => {
                  const obj = authStore2(dependencyMap[57]);
                  return obj.compare(id.id, closure_1_4) > 0;
                });
              }
              const _HermesInternal = HermesInternal;
              logger.log(
                "Fetched " +
                  closure_3.messages.length +
                  " messages from the cache after foregrounding. " +
                  messages.length +
                  " are new",
              );
              if (0 !== messages.length) {
                const obj8 = {
                  type: "LOCAL_MESSAGES_LOADED",
                  guildId: basicChannel.guild_id,
                  channelId,
                  users: closure_3.users,
                  members: closure_3.members,
                  messages,
                  stale: true,
                  isForegroundCacheLoad: obj9.isIOSPushNotificationRawPayloadFixExperimentEnabled(),
                };
                const dispatch = tmp(c3[46]).dispatch;
                const tmp44 = tmp(c3[46]);
                obj9 = v0(c3[61]);
                dispatch(obj8);
              }
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp26) {
          c3 = 3;
          throw tmp26;
        }
      }
    })();
  },
  _tryFetchMessagesCached(arg0) {
    let after;
    let before;
    let focus;
    let jump;
    let truncate;
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
            let flag;
            if (null != before) {
              if (messages.hasBeforeCached(before)) {
                const obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, before, limit, truncate };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj);
                flag = true;
              }
              return flag;
            }
            flag = !(null == after || !messages.hasAfterCached(after));
            null == after || !messages.hasAfterCached(after);
            if (flag) {
              const obj3 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, after, limit, truncate };
              const obj2 = DispatcherDefault;
              obj2.dispatch(obj3);
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
            const obj15 = DispatcherDefault;
            obj15.dispatch(obj5);
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
            const obj13 = DispatcherDefault;
            obj13.dispatch(obj6);
            return true;
          } else {
            const obj12 = {};
            const merged = Object.assign(focus);
            tmp13 = obj12;
          }
        }
        let messageId4;
        if (tmp13 != null) {
          messageId4 = tmp13.messageId;
        }
        let num = 0;
        if (null != messageId4) {
          let messageId5;
          const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
          SnowflakeUtilsDefault;
          if (tmp13 != null) {
            messageId5 = tmp13.messageId;
          }
          num = extractTimestamp(messageId5);
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        let flag4 = !messages.hasMoreBefore && null != firstResult;
        if (flag4) {
          const obj7 = SnowflakeUtilsDefault;
          flag4 = obj7.extractTimestamp(firstResult.id) >= num;
        }
        if (!flag4) {
          let tmp26 = !messages.hasMoreAfter && null != lastResult;
          if (tmp26) {
            const obj8 = SnowflakeUtilsDefault;
            tmp26 = obj8.extractTimestamp(lastResult.id) <= num;
          }
          flag4 = tmp26;
        }
        if (!flag4) {
          let tmp29 = null != firstResult && null != lastResult;
          if (tmp29) {
            const obj9 = SnowflakeUtilsDefault;
            tmp29 = obj9.extractTimestamp(firstResult.id) < num;
          }
          if (tmp29) {
            const obj10 = SnowflakeUtilsDefault;
            tmp29 = obj10.extractTimestamp(lastResult.id) > num;
          }
          flag4 = tmp29;
        }
        if (flag4) {
          const obj14 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump: tmp13, limit };
          const obj11 = DispatcherDefault;
          obj11.dispatch(obj14);
          flag4 = true;
        }
        return flag4;
      }
    }
    return false;
  },
  sendMessage(arg0, arg1) {
    let ready;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let closure_3 = arg3;
    return (async function () {
      let c4;
      let closure_2;
      let obj9;
      let promise;
      let nonce = tmp;
      if (nonce.reaction) {
        return Promise.resolve();
      }
      await nonce(c3[62])(closure_0);
      closure_0 = value;
      if (null != closure_0) {
        return obj17.sendMessage(closure_0, closure_130_1, closure_130_2, obj9);
      }
      nonce = obj9.nonce;
      closure_0 = nonce;
      if (nonce == null) {
        const obj = closure_0(c3[49]);
        closure_0 = obj.createNonce();
      }
      nonce = closure_0;
      obj9 = { nonce };
      const merged = Object.assign(obj9);
      const obj3 = nonce(c3[63]);
      const tmp4 = obj3.backgroundify(function _trySend() {
        return closure_2_55._sendMessage(closure_1_0, nonce, closure_1_3);
      }, undefined);
      if (null == obj9.scheduledTimestamp) {
        const result = MessageRoundtripTrackerStore.recordMessageSendAttempt(closure_130_0, nonce, obj9);
      }
      if (ready.isReady(closure_130_0)) {
        promise = tmp4();
      } else {
        if (closure_130_2) {
          if (closure_130_0 !== closure_0(c3[53]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const _HermesInternal = HermesInternal;
            const infoResult = logger.info("Waiting for channel " + closure_130_0 + " to be ready before sending.");
            const self = this;
            const self2 = this;
            promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              ready.whenReady(closure_1_0, () => {
                logger.info("Channel " + closure_0 + " is ready for sending now.");
                const promise = closure_2_2();
                promise.then(closure_0, closure_1);
              });
            });
          }
        }
        promise = tmp4();
      }
      return promise;
    })();
  },
  getSendMessageOptionsForReply(pendingReply) {
    let obj;
    let obj2;
    let tmp2;
    if (null == pendingReply) {
      obj = {};
    } else {
      const channel = pendingReply.channel;
      const guildId = channel.getGuildId();
      obj = { messageReference: obj2, allowedMentions: tmp2, mediaMention: pendingReply.mediaMention };
      tmp2 = undefined;
      obj2 = { guild_id: guildId, channel_id: pendingReply.channel.id, message_id: pendingReply.message.id };
      if (!pendingReply.shouldMention) {
        const _Object = Object;
        tmp2 = { parse: Object.values(closure_36), replied_user: false };
        const obj3 = { parse: Object.values(closure_36), replied_user: false };
      }
    }
    return obj;
  },
  getSendMessageOptionsForStickers(stickers) {
    stickers = stickers.stickers;
    if (null != stickers) {
      if (0 !== stickers.length) {
        let obj;
        if (!tmp) {
          obj = { stickerIds: stickers };
        }
        return obj;
      }
    }
    obj = {};
  },
  getSendMessageOptionsForScheduledMessage(scheduledTimestamp) {
    let obj;
    scheduledTimestamp = scheduledTimestamp.scheduledTimestamp;
    if (null == scheduledTimestamp) {
      obj = {};
    } else {
      obj = { scheduledTimestamp };
    }
    return obj;
  },
  getSendMessageOptions(pendingReply) {
    const obj = {};
    const merged = Object.assign(obj17.getSendMessageOptionsForReply(pendingReply.pendingReply));
    const getSendMessageOptionsForStickers = obj17.getSendMessageOptionsForStickers;
    const obj2 = {};
    const merged1 = Object.assign(pendingReply);
    const merged2 = Object.assign(getSendMessageOptionsForStickers(obj2));
    const getSendMessageOptionsForScheduledMessage = obj17.getSendMessageOptionsForScheduledMessage;
    const obj3 = {};
    const merged3 = Object.assign(pendingReply);
    const merged4 = Object.assign(getSendMessageOptionsForScheduledMessage(obj3));
    return obj;
  },
  sendInvite(c1, code, c3, c4, content) {
    const tmp = getInviteURLDefault(code);
    content = tmp;
    if (null != content) {
      const _HermesInternal = HermesInternal;
      content = "" + content + "\n" + tmp;
    }
    const obj = { location: dependencyMap, inviteAnalyticsMetadata };
    return obj17._sendMessage(c1, { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, obj);
  },
  sendActivityBookmark(arg0, content, location, inviteAnalyticsMetadata) {
    const obj = { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] };
    const obj2 = { location, inviteAnalyticsMetadata };
    return obj17._sendMessage(arg0, obj, obj2);
  },
  sendStickers(id, items) {
    let tmp;
    let tts;
    let str = result;
    if (result === undefined) {
      str = "";
    }
    let flag = arg4;
    if (arg4 === undefined) {
      flag = false;
    }
    if (typeof str === "string") {
      tmp = { content: str, invalidEmojis: [], validNonShortcutEmojis: [], tts: flag };
      const obj = { content: str, invalidEmojis: [], validNonShortcutEmojis: [], tts: flag };
    } else {
      const obj2 = { tts };
      const merged = Object.assign(str);
      tts = str.tts;
      if (tts == null) {
        tts = flag;
      }
      tmp = obj2;
    }
    const _sendMessage = obj17._sendMessage;
    const obj3 = { stickerIds: items };
    const merged1 = Object.assign(arg3);
    return _sendMessage(id, tmp, obj3);
  },
  sendGreetMessage(id, stickerId) {
    let allowedMentions;
    let items;
    let messageReference;
    let obj2;
    let obj3;
    let obj4;
    const _require = id;
    let closure_1 = stickerId;
    let obj = sendMessageOptionsForReply;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: closure_28.MESSAGES_GREET(id),
      body: obj2,
      oldFormErrors: true,
      rejectWithError: obj4.rejectWithMigratedError(),
      context: obj3,
    };
    const post = HTTP.post;
    obj2 = { sticker_ids: items, allowed_mentions: allowedMentions, message_reference: messageReference };
    items = [stickerId];
    obj3 = { location: constants10.GREET };
    obj4 = require("HTTPUtils");
    const postResult = post(request);
    return postResult.then(
      (body) => {
        let items;
        const obj = SentMessageIntentsHandlerDefault;
        obj.donateSentMessage(body.body.content, channelId);
        obj17.receiveMessage(channelId, body.body);
        const obj3 = { type: "STICKER_TRACK_USAGE", stickerIds: items };
        items = [stickerId];
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj3);
        return body;
      },
      (messageId) => {
        logger.log("Failed to send greeting");
        if (429 !== messageId.status) {
          obj17.sendClydeError(channelId, messageId.body.code);
        }
        const obj = DispatcherDefault;
        const obj2 = { type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId };
        obj.dispatch(obj2);
        throw messageId;
      },
    );
  },
  sendPollMessage(id, poll, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    const _sendMessage = obj17._sendMessage;
    const obj2 = { poll, location: constants10.POLL_CREATION };
    const merged = Object.assign(obj);
    return _sendMessage(id, { content: "", tts: false, validNonShortcutEmojis: [], invalidEmojis: [] }, obj2);
  },
  validateMessage(invalidEmojis, currentUser, channelId) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let stringResult;
      let str;
      const obj = PremiumUtilsDefault;
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t["V5/GgC"]);
        str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      return { errorMessage: stringResult, errorMessageName: str };
    }
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    let messageByReference;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async function () {
      let activity;
      let c1;
      let channel;
      let closure_4;
      let closure_5;
      let emojiUsed;
      let getGuild;
      let invalidEmojis;
      let message_id;
      let msg;
      let obj11;
      let obj18;
      let publish;
      let tmp127;
      let tmp178;
      let tts;
      let type;
      let value;
      if (c8 === 2) {
        c8 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const str2 = "Converting channel to a private channel";
        const tmp187 = globalThis;
        const flag2 = true;
        const flag3 = false;
        const str3 = "";
        let str4 = "_sendMessage";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c6;
          try {
            let onAttachmentUploadError;
            let scheduledTimestamp;
            let c11;
            let messageId;
            let uploader;
            let obj10;
            let closure_18;
            let attachments2;
            let closure_20;
            let file;
            let code;
            let reason;
            let responseBody;
            c8 = 2;
            const tmp4 = c7;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                channelId = undefined;
                c1 = undefined;
                let _location;
                inviteAnalyticsMetadata = undefined;
                let stickerIds;
                let messageReference;
                let poll;
                let contentInventoryEntry;
                let attachmentsToUpload;
                onAttachmentUploadError = undefined;
                scheduledTimestamp = undefined;
                c11 = undefined;
                closure_12 = undefined;
                let DEFAULT;
                let stickerById;
                messageId = undefined;
                uploader = undefined;
                obj10 = undefined;
                closure_18 = undefined;
                attachments2 = undefined;
                closure_20 = undefined;
                file = undefined;
                code = undefined;
                reason = undefined;
                responseBody = undefined;
                value = undefined;
                const promise = emojiUsed(type[62])(channelId);
                if (null != promise) {
                  const infoResult = logger.info("Converting channel to a private channel");
                  c8 = 3;
                  let obj5 = {
                    value: promise.then((result) => {
                      logger.info("Finished converting channel to a private channel");
                      return closure_2_55._sendMessage(result, emojiUsed, publish);
                    }),
                    done: true,
                  };
                  return obj5;
                } else {
                  let SEND;
                  const content = emojiUsed.content;
                  ({ invalidEmojis, validNonShortcutEmojis: c1, tts } = emojiUsed);
                  const tmp72 = undefined !== tts && tts;
                  const activityAction = publish.activityAction;
                  _location = publish.location;
                  inviteAnalyticsMetadata = publish.inviteAnalyticsMetadata;
                  stickerIds = publish.stickerIds;
                  messageReference = publish.messageReference;
                  const allowedMentions = publish.allowedMentions;
                  poll = publish.poll;
                  const sharedCustomTheme = publish.sharedCustomTheme;
                  contentInventoryEntry = publish.contentInventoryEntry;
                  let attachments = publish.attachments;
                  attachmentsToUpload = publish.attachmentsToUpload;
                  onAttachmentUploadError = publish.onAttachmentUploadError;
                  const announcementSendOptions = publish.announcementSendOptions;
                  const withCheckpoint = publish.withCheckpoint;
                  const mediaMention = publish.mediaMention;
                  scheduledTimestamp = publish.scheduledTimestamp;
                  const flags = publish.flags;
                  channelId = flags;
                  if (flags == null) {
                    channelId = 0;
                  }
                  const tmp94 = tmp(emojiUsed(type[67])(content), 2);
                  let addFlagResult = channelId;
                  let tmp97 = content;
                  const tmp90 = channelId;
                  if (tmp94[0]) {
                    channelId = tmp95;
                    let obj12 = channelId(type[68]);
                    addFlagResult = obj12.addFlag(tmp90, constants.SUPPRESS_NOTIFICATIONS);
                    tmp97 = tmp95;
                  }
                  channel = channel.getChannel(channelId);
                  let guild_id;
                  getGuild = getGuild.getGuild;
                  if (channel != null) {
                    guild_id = channel.guild_id;
                  }
                  const guild = getGuild(guild_id);
                  let obj13 = channelId(type[69]);
                  let addFlagResult1 = addFlagResult;
                  if (obj13.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
                    let obj14 = channelId(type[68]);
                    addFlagResult1 = obj14.addFlag(addFlagResult, constants.IS_GUILD_OFFICIAL);
                  }
                  c11 = false;
                  const messageReference2 = publish.messageReference;
                  let type1;
                  if (messageReference2 != null) {
                    type1 = messageReference2.type;
                  }
                  closure_12 = tmp116;
                  if ("" === tmp97) {
                    if (null == activityAction) {
                      if (null == stickerIds) {
                        if (null == poll) {
                          if (null == sharedCustomTheme) {
                            if (null == contentInventoryEntry) {
                              if (type1 !== constants3.FORWARD) {
                                if (null == attachments) {
                                  if (!withCheckpoint) {
                                    if (null == emojiUsed.components) {
                                      if (null != attachmentsToUpload) {
                                        if (attachmentsToUpload.length > 0) {
                                          c11 = true;
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
                    DEFAULT = constants2.REPLY;
                  } else {
                    DEFAULT = constants2.DEFAULT;
                  }
                  const nonce = publish.nonce;
                  emojiUsed = nonce;
                  if (nonce == null) {
                    let tmp121 = type;
                    let obj16 = channelId(type[49]);
                    emojiUsed = obj16.createNonce();
                  }
                  stickerById = emojiUsed;
                  messageId = emojiUsed;
                  let obj9 = {
                    channelId,
                    content: tmp97,
                    tts: tmp72,
                    type: DEFAULT,
                    messageReference,
                    allowedMentions,
                    flags: tmp127,
                    nonce: emojiUsed,
                    poll: obj18.createPollServerDataFromCreateRequest(poll),
                    sharedCustomTheme,
                    mediaMention,
                  };
                  tmp127 = undefined;
                  const tmp125 = emojiUsed(type[47]);
                  if (0 !== addFlagResult1) {
                    tmp127 = addFlagResult1;
                  }
                  obj18 = channelId(type[70]);
                  const tmp125Result = tmp125(obj9);
                  const tmp132 = false !== publish.eagerDispatch && null == scheduledTimestamp;
                  if (tmp132) {
                    let obj19 = channelId(type[71]);
                    let result = obj19.updateComboOnMessageSend(channelId, tmp125Result.id);
                    if (null != stickerIds) {
                      const mapped = stickerIds.map((item) => stickerById.getStickerById(item));
                      tmp125Result.sticker_items = mapped.filter((item) => null != item);
                    }
                    let flag = true;
                    const receiveMessageResult = closure_1_55.receiveMessage(channelId, tmp125Result, true, publish);
                  }
                  const tmp143 = c51;
                  if (!tmp143) {
                    if (null != invalidEmojis) {
                      if (invalidEmojis.length > 0) {
                        c51 = true;
                        const validateMessageResult = closure_1_55.validateMessage(
                          invalidEmojis,
                          value.getCurrentUser(),
                          channelId,
                        );
                        closure_1_55.sendBotMessage(
                          channelId,
                          validateMessageResult.errorMessage,
                          validateMessageResult.errorMessageName,
                        );
                      }
                    }
                  }
                  if (null != announcementSendOptions) {
                    SEND = channelId(type[72]).MessageDataType.SEND_ANNOUNCEMENT;
                  } else {
                    SEND = channelId(type[72]).MessageDataType.SEND;
                  }
                  obj10 = { type: SEND, message: obj11 };
                  obj11 = {
                    channelId,
                    content: tmp97,
                    nonce: emojiUsed,
                    tts: tmp72,
                    message_reference: messageReference,
                    allowed_mentions: allowedMentions,
                    flags: addFlagResult1,
                    analyticsLocation: _location,
                  };
                  type = tmp200.components;
                  if (null != type) {
                    obj10.message.components = emojiUsed.components;
                  }
                  if (null != announcementSendOptions) {
                    obj10.message.create_thread = announcementSendOptions.createThread;
                    type = obj10.message;
                    ({ threadName: type.title, publish } = announcementSendOptions);
                    let message = obj10.message;
                    if (publish == null) {
                      publish = false;
                    }
                    message.publish = publish;
                  }
                  if (null != activityAction) {
                    let session_id;
                    if (activityAction != null) {
                      session_id = activityAction.activity.session_id;
                    }
                    type = constants4;
                    let sessionId = session_id;
                    if (activityAction.type !== constants4.JOIN_REQUEST) {
                      type = type.STREAM_REQUEST;
                      sessionId = session_id;
                      if (activityAction.type !== type) {
                        sessionId = session_id;
                        if (null == session_id) {
                          type = sessionId;
                          sessionId = sessionId.getSessionId();
                        }
                      }
                    }
                    if (null != sessionId) {
                      let obj15 = { type, session_id: sessionId, target_user_id: null };
                      type = activityAction.type;
                      ({ targetUserId: obj22.target_user_id, activity } = activityAction);
                      const tmp158 = null != activity.party && null != activity.party.id;
                      if (tmp158) {
                        obj15.party_id = activity.party.id;
                      }
                      obj10.message.application_id = activity.application_id;
                      obj10.message.activity = obj15;
                    }
                  }
                  if (null != poll) {
                    obj10.message.poll = poll;
                  }
                  if (null != sharedCustomTheme) {
                    obj10.message.shared_client_theme = sharedCustomTheme;
                  }
                  if (null != stickerIds) {
                    obj10.message.sticker_ids = stickerIds;
                  }
                  if (enabled.isEnabled()) {
                    obj10.message.has_poggermode_enabled = true;
                  }
                  if (withCheckpoint) {
                    obj10.message.with_checkpoint = true;
                  }
                  if (null != contentInventoryEntry) {
                    obj10.message.content_inventory_entry = contentInventoryEntry;
                  }
                  if (null != mediaMention) {
                    obj10.message.media_mention = mediaMention;
                  }
                  const tmp160 = null != attachments && attachments.length > 0;
                  if (tmp160) {
                    obj10.message.attachments = attachments;
                  }
                  if (null != attachmentsToUpload) {
                    if (attachmentsToUpload.length > 0) {
                      c6 = 1;
                      obj17 = {
                        channelId,
                        nonce: emojiUsed,
                        items: attachmentsToUpload,
                        message: tmp125Result,
                        shouldUploadFailureSendNotification: tmp178,
                      };
                      const doNotNotifyOnError = publish.doNotNotifyOnError;
                      const uploadMessageAttachments = channelId(type[73]).uploadMessageAttachments;
                      tmp178 = !doNotNotifyOnError;
                      c7 = 2;
                      c8 = 1;
                      let obj20 = { value: uploadMessageAttachments(obj17), done: false };
                      const tmp175 = channelId(type[73]);
                      return obj20;
                    }
                  }
                }
              }
            } else if (1 === tmp4) {
              c6 = 0;
              closure_20 = message_id;
              file = closure_20.file;
              code = closure_20.code;
              reason = closure_20.reason;
              responseBody = closure_20.responseBody;
              let obj21 = { fileItems: file.items, failureCode: code, errorMessage: msg };
              msg = undefined;
              let logMessageSendFailure = channelId(type[74]).logMessageSendFailure;
              const tmp59 = channelId(type[74]);
              if (reason != null) {
                msg = reason.msg;
              }
              let result1 = logMessageSendFailure(obj21);
              if (onAttachmentUploadError != null) {
                tmp65(file, code, reason, responseBody);
              }
              c8 = 3;
              let obj23 = { value: undefined, done: true };
              return obj23;
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                let obj25 = { value, done: true };
                return obj25;
              } else {
                closure_18 = value;
                if (null == closure_18) {
                  c6 = 0;
                  c8 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  attachments2 = closure_18.attachments;
                  uploader = closure_18.uploader;
                  const tmp196 = c11;
                  if (tmp196) {
                    c6 = 0;
                    c8 = 3;
                    return { value: "IconComponent", done: null };
                  }
                  if (null != attachments2) {
                    obj10.message.attachments = attachments2.map((item, index) => {
                      const obj = channelId(inviteAnalyticsMetadata[45]);
                      return obj.getAttachmentPayload(item, index);
                    });
                  }
                  c6 = 0;
                }
              }
            } else if (3 === tmp4) {
              c6 = 0;
              let closure_26 = message_id;
              let tmp21 = uploader;
              if (null != uploader) {
                let obj6 = emojiUsed(type[46]);
                let obj26 = {
                  type: "UPLOAD_FAIL",
                  channelId: closure_132_0,
                  file: uploader._file,
                  messageId,
                  noSendFailed: true,
                };
                const dispatchResult = obj6.dispatch(obj26);
              }
              if (true !== closure_132_2.doNotNotifyOnError) {
                let obj8 = channelId(type[76]);
                let result2 = obj8.handleScheduleMessageError(closure_26);
              }
              throw closure_26;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              let obj27 = { value, done: true };
              return obj27;
            } else {
              if (null != uploader) {
                let tmp8 = type;
                let obj = emojiUsed(type[46]);
                let obj28 = { type: "UPLOAD_COMPLETE", channelId: closure_132_0, file: uploader._file, aborted: false };
                const dispatchResult1 = obj.dispatch(obj28);
              }
              let obj3 = channelId(type[76]);
              let tmp16 = scheduledTimestamp;
              let result3 = obj3.showScheduleMessageSuccessToast(scheduledTimestamp);
              c6 = 0;
              c8 = 3;
              let obj29 = { value, done: true };
              return obj29;
            }
            if (null != scheduledTimestamp) {
              c6 = 2;
              let obj24 = channelId(type[75]);
              let obj30 = { channelId: closure_132_0, scheduledTimestamp, messageSendData: obj10.message };
              c7 = 4;
              c8 = 1;
              let obj31 = { value: obj24.createScheduledMessage(obj30), done: false };
              return obj31;
            } else {
              const self = this;
              const self2 = this;
              const promise2 = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                emojiUsed = arg1;
                closure_2 = Date.now();
                const length = emojiUsed(type[72]).length;
                const rounded = Math.floor(10000 * Math.random());
                logger.info("Queueing message to be sent LogId:" + rounded);
                let obj = emojiUsed(type[72]);
                obj.enqueue(
                  closure_17,
                  (ok) => {
                    let applicationStatus;
                    let body;
                    let closure_129_0;
                    let closure_129_1;
                    let closure_129_2;
                    let closure_129_3;
                    let code;
                    let guildId;
                    let guild_id;
                    let guild_id1;
                    let message1;
                    let obj20;
                    let obj29;
                    let obj5;
                    let overrideProperties;
                    let str5;
                    let tmp121;
                    let userId;
                    if (ok.ok) {
                      const obj13 = closure_1(dependencyMap[65]);
                      obj13.donateSentMessage(content, channelId);
                      let obj4 = { sendAnalytics: obj5, poll };
                      obj5 = { duration: tmp, queueSize: length };
                      closure_4_55.receiveMessage(channelId, ok.body, true, obj4);
                      const obj16 = closure_1(dependencyMap[57]);
                      request = request.getRequest(obj16.cast(channelId));
                      if (null != request) {
                        ({ guildId, userId, applicationStatus } = request);
                        let obj6 = {
                          guildId,
                          channelId,
                          messageId: ok.body.id,
                          joinRequestStatus: applicationStatus,
                          joinRequestUserId: userId,
                        };
                        obj17 = closure_0(dependencyMap[77]);
                        let result = obj17.trackMemberApplicationInterviewMessage(obj6);
                      }
                      let result1 = MessageRoundtripTrackerStore.recordMessageSendApiResponse(stickerById);
                      if (closure_2_13 === constants3.REPLY) {
                        const id4 = ok.body.id;
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
                          const currentUser = authStore.getCurrentUser();
                          let obj8 = {
                            message_id: id4,
                            channel_id: channelId,
                            guild_id,
                            swipe_action: "reply",
                            is_own_message: tmp121,
                          };
                          guild_id = undefined;
                          let track = closure_1(dependencyMap[37]).track;
                          const MESSAGE_SWIPE_ACTION_SENT = constants2.MESSAGE_SWIPE_ACTION_SENT;
                          closure_1(dependencyMap[37]);
                          if (channel != null) {
                            guild_id = channel.guild_id;
                          }
                          tmp121 = null != currentUser;
                          if (tmp121) {
                            let id1;
                            id = currentUser.id;
                            if (message != null) {
                              id1 = message.author.id;
                            }
                            tmp121 = id === id1;
                          }
                          track(MESSAGE_SWIPE_ACTION_SENT, obj8);
                        } else if ("message_shortcut" === pendingReplyActionSource) {
                          const channel1 = ChannelStore.getChannel(channelId);
                          let obj10 = {
                            message_id: id4,
                            channel_id: channelId,
                            guild_id: guild_id1,
                            original_message_id: message_id,
                            action: "reply",
                          };
                          guild_id1 = undefined;
                          const track2 = closure_1(dependencyMap[37]).track;
                          const MESSAGE_SHORTCUT_ACTION_SENT = constants2.MESSAGE_SHORTCUT_ACTION_SENT;
                          closure_1(dependencyMap[37]);
                          if (channel1 != null) {
                            guild_id1 = channel1.guild_id;
                          }
                          let guild_id2;
                          const collectGuildAnalyticsMetadata = closure_0(
                            dependencyMap[33],
                          ).collectGuildAnalyticsMetadata;
                          closure_0(dependencyMap[33]);
                          if (channel1 != null) {
                            guild_id2 = channel1.guild_id;
                          }
                          let merged = Object.assign(collectGuildAnalyticsMetadata(guild_id2));
                          let obj19 = closure_0(dependencyMap[33]);
                          let merged1 = Object.assign(obj19.collectChannelAnalyticsMetadata(channel1));
                          track2(MESSAGE_SHORTCUT_ACTION_SENT, obj10);
                        }
                      }
                      const obj11 = {
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: SlowmodeType.SendMessage,
                        channelId,
                      };
                      const obj21 = closure_1(dependencyMap[46]);
                      obj21.dispatch(obj11);
                      const obj14 = { type: "EMOJI_TRACK_USAGE", emojiUsed };
                      const obj23 = closure_1(dependencyMap[46]);
                      obj23.dispatch(obj14);
                      const obj15 = { type: "STICKER_TRACK_USAGE", stickerIds };
                      const obj25 = closure_1(dependencyMap[46]);
                      obj25.dispatch(obj15);
                      const obj18 = { type: "LOCAL_MESSAGE_CREATE", message: obj20 };
                      obj20 = { channel_id: channelId, author: authStore.getCurrentUser() };
                      const dispatch2 = closure_1(dependencyMap[46]).dispatch;
                      closure_1(dependencyMap[46]);
                      dispatch2(obj18);
                      let str4 = publish;
                      const obj22 = {
                        content,
                        channelId,
                        messageId: ok.body.id,
                        location: str5,
                        inviteAnalyticsMetadata,
                      };
                      str5 = publish;
                      if (publish == null) {
                        str5 = "chat_input";
                      }
                      ({
                        channelId: closure_129_0,
                        messageId: closure_129_1,
                        location: closure_129_2,
                        inviteAnalyticsMetadata: closure_129_3,
                        overrideProperties,
                        content,
                      } = obj22);
                      if (overrideProperties === undefined) {
                        overrideProperties = {};
                      }
                      const id6 = id.getId();
                      const arr2 = closure_1(dependencyMap[28])(content);
                      const item = arr2.forEach((url) => {
                        let applicationId;
                        let code;
                        let obj8;
                        let type2;
                        ({ type, code } = url);
                        url = url.url;
                        const obj = closure_2_0(length[29]);
                        if (obj.isApplicationCodedLink(type)) {
                          const tmpResult = closure_2_0(length[29]);
                          const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url);
                          if (null != applicationCodedLinkData) {
                            ({ applicationId, type: type2 } = applicationCodedLinkData);
                            if (closure_2_0(length[30]).CodedLinkType.APP_DIRECTORY_PROFILE === type2) {
                              const tmpResult10 = closure_2_0(length[31]);
                              const result = tmpResult10.trackAppDirectoryProfileEmbed(applicationId);
                              const tmpResult11 = closure_2_0(length[32]);
                              const result1 = tmpResult11.trackAppEmbedLinkSent(
                                code,
                                constants2.APP_DISCOVERY,
                                closure_5,
                              );
                            } else if (closure_2_0(length[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT === type2) {
                              const tmpResult12 = closure_2_0(length[31]);
                              const result2 = tmpResult12.trackAppDirectoryProfileEmbed(applicationId, "storefront");
                            } else if (closure_2_0(length[30]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type2) {
                              const tmpResult13 = closure_2_0(length[31]);
                              const result3 = tmpResult13.trackAppDirectoryProfileEmbed(
                                applicationId,
                                "storefront_sku",
                              );
                            } else if (closure_2_0(length[30]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                              const params = applicationCodedLinkData.params;
                              const ACTIVITY = constants2.ACTIVITY;
                              let referrerId = params.referrerId;
                              const trackAppEmbedLinkSent = closure_2_0(length[32]).trackAppEmbedLinkSent;
                              const tmpResult14 = closure_2_0(length[32]);
                              if (referrerId == null) {
                                referrerId = closure_5;
                              }
                              const result4 = trackAppEmbedLinkSent(
                                applicationId,
                                ACTIVITY,
                                referrerId,
                                params.customId,
                              );
                            } else if (closure_2_0(length[30]).CodedLinkType.APP_OAUTH2_LINK === type2) {
                              const tmpResult15 = closure_2_0(length[32]);
                              const result5 = tmpResult15.trackAppEmbedLinkSent(
                                applicationId,
                                constants2.OAUTH,
                                closure_5,
                              );
                              const obj3 = { application_id: applicationId };
                              const obj19 = closure_2_1(length[33]);
                              obj19.trackWithMetadata(closure_2_27.APP_OAUTH2_LINK_EMBED_URL_SENT, obj3);
                            }
                          }
                        } else if (closure_2_0(length[30]).CodedLinkType.INVITE === type) {
                          const obj5 = {
                            inviteKey: code,
                            channelId: channel_id,
                            messageId: message_id,
                            location: _location,
                            inviteAnalyticsMetadata,
                            overrideProperties,
                          };
                          closure_2_53(obj5);
                        } else if (closure_2_0(length[30]).CodedLinkType.TEMPLATE === type) {
                          guildTemplate = guildTemplate.getGuildTemplate(code);
                          if (null != guildTemplate) {
                            if (guildTemplate.state !== constants3.RESOLVING) {
                              const obj6 = {
                                guild_template_code: code,
                                guild_template_name: null,
                                guild_template_description: null,
                                guild_template_guild_id: null,
                              };
                              ({
                                name: obj11.guild_template_name,
                                description: obj11.guild_template_description,
                                sourceGuildId: obj11.guild_template_guild_id,
                              } = guildTemplate);
                              const obj10 = closure_2_1(length[33]);
                              obj10.trackWithMetadata(closure_2_27.GUILD_TEMPLATE_LINK_SENT, obj6);
                            }
                          }
                        } else if (closure_2_0(length[30]).CodedLinkType.BUILD_OVERRIDE !== type) {
                          if (closure_2_0(length[30]).CodedLinkType.EXPERIMENT !== type) {
                            if (closure_2_0(length[30]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
                              if (closure_2_0(length[30]).CodedLinkType.EVENT !== type) {
                                if (closure_2_0(length[30]).CodedLinkType.CHANNEL_LINK !== type) {
                                  if (closure_2_0(length[30]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                                    const tmpResult16 = closure_2_0(length[32]);
                                    const result6 = tmpResult16.trackAppEmbedLinkSent(
                                      code,
                                      constants2.ACTIVITY_INVITE,
                                      closure_5,
                                    );
                                  } else if (closure_2_0(length[30]).CodedLinkType.GUILD_PRODUCT !== type) {
                                    if (closure_2_0(length[30]).CodedLinkType.SERVER_SHOP !== type) {
                                      if (closure_2_0(length[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                        if (
                                          closure_2_0(length[30]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type
                                        ) {
                                          if (closure_2_0(length[30]).CodedLinkType.QUESTS_EMBED === type) {
                                            const tmpResult17 = closure_2_0(length[34]);
                                            const adMetadataSealed = tmpResult17.getAdMetadataSealed(
                                              closure_2_0(length[35]).QuestContent.QUESTS_EMBED,
                                            );
                                            let tmp16 = null;
                                            const obj7 = {
                                              questId: code,
                                              event: closure_2_27.QUEST_LINK_SHARED,
                                              properties: obj8,
                                              trackGuildAndChannelMetadata: true,
                                              sourceQuestContent: closure_2_0(length[35]).QuestContent.QUESTS_EMBED,
                                            };
                                            const trackQuestEvent = closure_2_0(length[36]).trackQuestEvent;
                                            closure_2_0(length[36]);
                                            if (null != adMetadataSealed) {
                                              tmp16 = adMetadataSealed;
                                            }
                                            obj8 = { metadata_sealed: tmp16 };
                                            trackQuestEvent(obj7);
                                          } else if (closure_2_0(length[30]).CodedLinkType.GAME_PROFILE === type) {
                                            const obj9 = { game_id: code };
                                            const obj4 = closure_2_1(length[37]);
                                            obj4.track(closure_2_27.GAME_PROFILE_LINK_EMBED_SENT, obj9);
                                          } else if (closure_2_0(length[30]).CodedLinkType.USER_PROFILE === type) {
                                            const obj12 = {
                                              linked_user_id: code,
                                              channel_id,
                                              message_id,
                                              location: _location,
                                              is_own_profile: code === closure_5,
                                            };
                                            const obj2 = closure_2_1(length[33]);
                                            obj2.trackWithMetadata(closure_2_27.USER_PROFILE_LINK_EMBED_SENT, obj12);
                                          } else if (closure_2_0(length[30]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                            if (closure_2_0(length[30]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                              if (
                                                closure_2_0(length[30]).CodedLinkType.GAME_ORGANIZATION_INVITE !== type
                                              ) {
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
                      const id2 = ok.body.id;
                      if (str4 == null) {
                        str6 = "chat_input";
                      }
                      closure_0 = channelId;
                      let closure_3 = c2.isGiftLinkSentOnBehalfOfUser;
                      const obj30 = closure_0(dependencyMap[41]);
                      const findGiftCodesResult = obj30.findGiftCodes(content);
                      const item1 = findGiftCodesResult.forEach((gift_code) => {
                        channel = channel.getChannel(closure_0);
                        if (null != channel) {
                          const obj = {
                            location: str6,
                            gift_code,
                            guild_id: channel.getGuildId(),
                            channel_id: null,
                            channel_type: null,
                            message_id: id2,
                            automatic_send,
                          };
                          const trackWithMetadata = closure_2_1(length[33]).trackWithMetadata;
                          const GIFT_CODE_SENT = closure_2_27.GIFT_CODE_SENT;
                          closure_2_1(length[33]);
                          ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
                          trackWithMetadata(GIFT_CODE_SENT, obj);
                        }
                      });
                      if (null != c2.gifMetadata) {
                        const gifMetadata = c2.gifMetadata;
                        const id5 = ok.body.id;
                        if (str4 == null) {
                          str4 = "chat_input";
                        }
                        const channel2 = ChannelStore.getChannel(channelId);
                        if (null != channel2) {
                          const obj24 = {
                            location: str4,
                            message_id: id5,
                            gif_provider: null,
                            load_id: null,
                            source_object: null,
                            gif_url: null,
                            gif_id: null,
                          };
                          ({
                            gif_provider: obj35.gif_provider,
                            load_id: obj35.load_id,
                            source_object: obj35.source_object,
                            gif_url: obj35.gif_url,
                            gif_id: obj35.gif_id,
                          } = gifMetadata);
                          const track3 = closure_1(dependencyMap[37]).track;
                          const MESSAGE_SENT_WITH_GIF = constants2.MESSAGE_SENT_WITH_GIF;
                          closure_1(dependencyMap[37]);
                          const obj36 = closure_0(dependencyMap[33]);
                          const merged2 = Object.assign(obj36.collectGuildAnalyticsMetadata(channel2.getGuildId()));
                          const obj37 = closure_0(dependencyMap[33]);
                          const merged3 = Object.assign(obj37.collectChannelAnalyticsMetadata(channel2));
                          track3(MESSAGE_SENT_WITH_GIF, obj24);
                        }
                      }
                      let attachments = ok.body.attachments;
                      const id3 = ok.body.id;
                      if (attachments == null) {
                        attachments = [];
                      }
                      let items = closure_2_8;
                      if (closure_2_8 == null) {
                        items = [];
                      }
                      closure_0 = channelId;
                      if (attachments.length === items.length) {
                        const channel3 = ChannelStore.getChannel(channelId);
                        if (null != channel3) {
                          const messageByReference2 = messageByReference.getMessageByReference(tmp157);
                          const item2 = items.forEach((clip, index) => {
                            clip = clip.clip;
                            if (null != clip) {
                              let someResult = closure_4.state === constants.LOADED;
                              if (someResult) {
                                attachments = closure_4.message.attachments;
                                someResult = attachments.some(
                                  (clip_remote_id) => clip_remote_id.clip_remote_id === clip.remoteClipId,
                                );
                              }
                              const obj = {
                                channel_id,
                                guild_id: channel3.getGuildId(),
                                channel_type: channel3.type,
                                message_id: id3,
                                attachment_id: attachments[index].id,
                                is_distributed_clip_reply: someResult,
                              };
                              const track = closure_2_1(length[37]).track;
                              const CLIP_SHARED = closure_2_27.CLIP_SHARED;
                              closure_2_1(length[37]);
                              const obj2 = closure_2_2(length[42]);
                              const merged = Object.assign(obj2.getClipBaseProperties(clip));
                              const obj3 = closure_2_2(length[42]);
                              const merged1 = Object.assign(obj3.getClipContextProperties());
                              ({
                                applicationId: obj.application_id,
                                id: obj.clip_uuid,
                                remoteClipId: obj.remote_clip_id,
                              } = clip);
                              track(CLIP_SHARED, obj);
                            }
                          });
                        }
                      }
                      if (null != sessionId) {
                        const obj26 = { type: "UPLOAD_COMPLETE", channelId, file: sessionId._file, aborted: false };
                        const obj32 = closure_1(dependencyMap[46]);
                        obj32.dispatch(obj26);
                      }
                      closure_0(ok);
                    } else {
                      let flag;
                      let EXPLICIT_CONTENT;
                      let obj = { hasErr: null, status: null, code, error: ok.err };
                      ({ hasErr: obj.hasErr, status: obj.status, body } = ok);
                      code = undefined;
                      log = log.log;
                      if (body != null) {
                        code = body.code;
                      }
                      log("Failed to send message", obj);
                      if (ok.hasErr) {
                        flag = false;
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
                                flag = false;
                                const tmp21 = null != retry_after && retry_after > 0;
                                if (tmp21) {
                                  const obj27 = {
                                    type: "SLOWMODE_SET_COOLDOWN",
                                    channelId,
                                    slowmodeType: SlowmodeType.SendMessage,
                                    cooldownMs: retry_after * closure_1(dependencyMap[78]).Millis.SECOND,
                                  };
                                  const dispatch = closure_1(dependencyMap[46]).dispatch;
                                  closure_1(dependencyMap[46]);
                                  dispatch(obj27);
                                  flag = false;
                                }
                              } else {
                                const AUTOMOD_ERROR_CODES = closure_0(dependencyMap[79]).AUTOMOD_ERROR_CODES;
                                if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                                  let obj3 = closure_1(dependencyMap[46]);
                                  const obj28 = {
                                    type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                    messageData,
                                    errorResponseBody: obj29,
                                  };
                                  obj29 = { code: ok.body.code, message: ok.body.message };
                                  obj3.dispatch(obj28);
                                  flag = false;
                                } else if (ok.body.code === constants.POGGERMODE_TEMPORARILY_DISABLED) {
                                  let obj2 = closure_1(dependencyMap[46]);
                                  obj2.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" });
                                  flag = false;
                                } else if (ok.body.code === constants.EXPLICIT_CONTENT) {
                                  EXPLICIT_CONTENT = constants4.EXPLICIT_CONTENT;
                                  flag = false;
                                } else {
                                  flag = false;
                                  const tmp8 = null != poll || closure_2_12 || null != closure_2_7;
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
                          let obj7 = closure_1(dependencyMap[46]);
                          const obj31 = {
                            type: "UPLOAD_FAIL",
                            channelId,
                            file: sessionId._file,
                            messageId,
                            reason: EXPLICIT_CONTENT,
                            noSendFailed: true,
                          };
                          obj7.dispatch(obj31);
                        }
                        const hasErr = ok.hasErr || EXPLICIT_CONTENT !== constants4.EXPLICIT_CONTENT;
                        if (!hasErr) {
                          const body2 = ok.body;
                          let attachments1;
                          const sendExplicitMediaClydeError = closure_4_55.sendExplicitMediaClydeError;
                          if (body2 != null) {
                            attachments1 = body2.attachments;
                          }
                          let result2 = sendExplicitMediaClydeError(
                            channelId,
                            attachments1,
                            closure_0(dependencyMap[50]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                          );
                        }
                        let obj9 = closure_1(dependencyMap[46]);
                        const obj33 = {
                          type: "MESSAGE_SEND_FAILED",
                          messageId,
                          channelId,
                          shouldNotify: !c2.doNotNotifyOnError,
                          reason: EXPLICIT_CONTENT,
                        };
                        obj9.dispatch(obj33);
                        let status;
                        const logMessageSendFailure = closure_0(dependencyMap[74]).logMessageSendFailure;
                        closure_0(dependencyMap[74]);
                        if (!ok.hasErr) {
                          status = ok.status;
                        }
                        const obj34 = { failureCode: status, errorMessage: message1 };
                        message1 = undefined;
                        if (ok.hasErr) {
                          message1 = ok.err.message;
                        }
                        let result3 = logMessageSendFailure(obj34);
                        let obj12 = closure_1(dependencyMap[72]);
                        let result4 = obj12.cancelPendingSendRequests(channelId);
                        const item3 = result4.forEach((messageId) => {
                          logger.log("Cancelling pending message", messageId.nonce);
                          const obj = closure_1_1(length[46]);
                          const obj2 = {
                            type: "MESSAGE_SEND_FAILED",
                            messageId: messageId.nonce,
                            channelId: messageId.channelId,
                          };
                          obj.dispatch(obj2);
                        });
                      }
                      closure_1(ok);
                    }
                  },
                  rounded,
                );
              });
              c8 = 3;
              const obj51 = { value: promise2, done: true };
              return obj51;
            }
          } catch (tmp181) {
            message_id = tmp181;
            if (0 === c6) {
              c8 = 3;
              throw tmp181;
            } else if (1 === tmp183) {
              c7 = 1;
            } else {
              c7 = 3;
            }
          }
        }
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    const obj = DispatcherDefault;
    const obj2 = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj2);
  },
  startEditMessageRecord(id, flags, source) {
    const obj = FlagUtils;
    if (obj.hasFlag(flags.flags, closure_33.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === require("Server").ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        const obj3 = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: joined, source };
        const obj5 = DispatcherDefault;
        obj5.dispatch(obj3);
      }
    }
    const obj2 = DispatcherDefault;
    const obj4 = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    obj2.dispatch(obj4);
  },
  updateEditMessage(channelId, textValue, richValue) {
    const obj = DispatcherDefault;
    const obj2 = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj2);
  },
  endEditMessage(id, response) {
    const obj = DispatcherDefault;
    const obj2 = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj2);
  },
  editMessage(id, id2, parsed) {
    let closure_0 = id;
    let closure_1 = id2;
    ({ content: importAll, components: dependencyMap } = parsed);
    return (async () => {
      function tryTrackEditMessageSwipeSend(message_id, channel_id) {
        let guild_id;
        if ("message_swipe" === editActionSource.getEditActionSource(channel_id)) {
          channel = channel.getChannel(channel_id);
          const obj = { message_id, channel_id, guild_id, swipe_action: "edit", is_own_message: true };
          guild_id = undefined;
          const track = messageId(closure_1_3[37]).track;
          const MESSAGE_SWIPE_ACTION_SENT = constants2.MESSAGE_SWIPE_ACTION_SENT;
          messageId(closure_1_3[37]);
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          track(MESSAGE_SWIPE_ACTION_SENT, obj);
        }
      }
      function getAllowedMentionsForMessageEdit(arg0, arg1) {
        message = closure_1_21.getMessage(arg0, arg1);
        if (null != message) {
          if (message.type === constants4.REPLY) {
            messageByReference = messageByReference.getMessageByReference(message.messageReference);
            if (messageByReference.state === constants.LOADED) {
              const mentions = message.mentions;
              if (!mentions.includes(messageByReference.message.author.id)) {
                const _Object = Object;
                const obj = { parse: Object.values(closure_1_36), replied_user: false };
                return obj;
              }
            }
          }
        }
      }
      function getIsCrosspostedForMessageEdit(arg0, arg1) {
        message = closure_1_21.getMessage(arg0, arg1);
        const hasFlagResult = null != message && message.hasFlag(constants3.CROSSPOSTED);
        return hasFlagResult;
      }
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let tmp14 = arg0;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let allowed_mentions;
            let isCrossposted;
            let obj6;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                allowed_mentions = undefined;
                isCrossposted = undefined;
                obj6 = undefined;
                const tmp8 = tryTrackEditMessageSwipeSend(isCrossposted, allowed_mentions);
                let obj2 = isCrossposted(c3[81]);
                c2 = 1;
                c3 = 1;
                let obj5 = { value: obj2.unarchiveThreadIfNecessary(allowed_mentions), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              allowed_mentions = getAllowedMentionsForMessageEdit(closure_129_0, closure_129_1);
              isCrossposted = getIsCrosspostedForMessageEdit(closure_129_0, closure_129_1);
              obj6 = {
                channelId: closure_129_0,
                messageId: closure_129_1,
                content: closure_129_2,
                isCrossposted,
                allowed_mentions,
                components: closure_129_3,
              };
              const obj7 = { type: allowed_mentions(c3[72]).MessageDataType.EDIT, message: obj6 };
              const enqueue = isCrossposted(c3[72]).enqueue;
              const tmp30 = isCrossposted(c3[72]);
              enqueue(obj7, (hasErr) => {
                let obj4;
                let hasItem = !hasErr.hasErr;
                if (hasItem) {
                  const AUTOMOD_ERROR_CODES = channelId(dependencyMap[79]).AUTOMOD_ERROR_CODES;
                  hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
                }
                if (hasItem) {
                  const obj3 = {
                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                    messageData: { type: channelId(dependencyMap[72]).MessageDataType.EDIT, message },
                    errorResponseBody: obj4,
                  };
                  obj4 = { code: hasErr.body.code, message: hasErr.body.message };
                  const obj2 = messageId(dependencyMap[46]);
                  obj2.dispatch(obj3);
                }
                hasErr = hasErr.hasErr;
                const AccessibilityAnnouncer = channelId(dependencyMap[82]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = channelId(dependencyMap[43]).intl;
                const string = intl.string;
                const t = channelId(dependencyMap[43]).t;
                if (hasErr) {
                  announce(string(t.Atp7FP));
                } else if (hasItem) {
                  announce(string(t.Hym4ix));
                } else {
                  announce(string(t["0x1HBD"]));
                }
                let tmp14;
                const obj5 = endEditMessage;
                endEditMessage = endEditMessage.endEditMessage;
                if (!hasErr.hasErr) {
                  tmp14 = hasErr;
                }
                endEditMessage(channelId, tmp14);
                const obj6 = { channelId, messageId };
                obj5.focusMessage(obj6);
              });
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      }
    })();
  },
  suppressEmbeds(id, id2) {
    let closure_0 = id;
    let closure_1 = id2;
    return (async () => {
      let closure_0;
      let closure_1;
      let obj6;
      let obj8;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              c2 = 1;
              const obj2 = tmp4(c3[81]);
              c3 = 1;
              const obj5 = { value: obj2.unarchiveThreadIfNecessary(tmp), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp = message.getMessage(closure_129_0, closure_129_1);
            if (null != tmp) {
              const HTTP = tmp(c3[51]).HTTP;
              const request = {
                url: closure_1_28.MESSAGE(closure_129_0, closure_129_1),
                body: obj6,
                oldFormErrors: true,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              const patch = HTTP.patch;
              obj6 = { flags: obj8.setFlag(tmp.flags, constants.SUPPRESS_EMBEDS, true) };
              obj8 = tmp(c3[68]);
              obj9 = tmp(c3[51]);
              patch(request);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  patchMessageGuildOfficial(id, id2, arg2) {
    let closure_0 = id;
    let closure_1 = id2;
    let closure_2 = arg2;
    return (async () => {
      let closure_0;
      let closure_1;
      let obj6;
      let obj8;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              c2 = 1;
              const obj2 = tmp4(c3[81]);
              c3 = 1;
              const obj5 = { value: obj2.unarchiveThreadIfNecessary(tmp), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp = message.getMessage(closure_129_0, closure_129_1);
            if (null != tmp) {
              const HTTP = tmp(c3[51]).HTTP;
              const request = {
                url: closure_1_28.MESSAGE(closure_129_0, closure_129_1),
                body: obj6,
                oldFormErrors: true,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              const patch = HTTP.patch;
              obj6 = { flags: obj8.setFlag(tmp.flags, constants.IS_GUILD_OFFICIAL, closure_129_2) };
              obj8 = tmp(c3[68]);
              obj9 = tmp(c3[51]);
              patch(request);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  patchMessageAttachments(channel_id, id, mapped) {
    let closure_0 = channel_id;
    let closure_1 = id;
    let closure_2 = mapped;
    return (async () => {
      let c2;
      let closure_0;
      let obj7;
      let obj9;
      const obj3 = v1(dependencyMap[81]);
      await obj3.unarchiveThreadIfNecessary(tmp3);
      const HTTP = tmp3(dependencyMap[51]).HTTP;
      const request = {
        url: closure_1_28.MESSAGE(closure_128_0, closure_128_1),
        body: obj7,
        oldFormErrors: true,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const patch = HTTP.patch;
      obj7 = { attachments: closure_128_2 };
      obj9 = tmp3(dependencyMap[51]);
      return patch(request);
    })();
  },
  deleteMessage(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    return (async () => {
      let obj7;
      function dispatchDelete() {
        const obj = id(c3[46]);
        const obj2 = { type: "MESSAGE_DELETE", id, channelId, local };
        const dispatchResult = obj.dispatch(obj2);
        dispatchResult.then(f154444);
      }
      const f154444 = () => {
        const AccessibilityAnnouncer = channelId(closure_1_3[82]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = channelId(closure_1_3[43]).intl;
        announce(intl.string(channelId(closure_1_3[43]).t.RYMs7s));
      };
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp3;
              channelId = tmp3;
              if (flag) {
                dispatchDelete();
              } else {
                let obj2 = id(c3[81]);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj2.unarchiveThreadIfNecessary(channelId), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const HTTP = channelId(c3[51]).HTTP;
            const obj6 = {
              url: closure_1_28.MESSAGE(closure_129_0, closure_129_1),
              oldFormErrors: true,
              rejectWithError: obj7.rejectWithMigratedError(),
            };
            const del = HTTP.del;
            obj7 = channelId(c3[51]);
            const delResult = del(obj6);
            const nextPromise = delResult.then(() => {
              const obj = id(c3[46]);
              const obj2 = { type: "MESSAGE_DELETE", id, channelId, local };
              const dispatchResult = obj.dispatch(obj2);
              dispatchResult.then(f154444);
            });
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    })();
  },
  dismissAutomatedMessage(message) {
    if (null != message.loggingName) {
      const obj2 = { message_name: message.loggingName, message_author: message.author.username };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj2);
    }
    const obj3 = PremiumGiftingIntentActionCreators;
    const result = obj3.logGiftIntentMessageDismissed(message.channel_id, message.id);
    this.deleteMessage(message.channel_id, message.id, true);
  },
  revealMessage(id, messageId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj2);
  },
  crosspostMessage(id, id2) {
    let closure_0 = id;
    let closure_1 = id2;
    return (async () => {
      let c4;
      let c5;
      let closure_1;
      let formatToPlainStringResult;
      let intl3;
      let intl4;
      let obj9;
      let body = tmp4;
      const HTTP = body(c3[51]).HTTP;
      const obj4 = {
        url: closure_1_28.MESSAGE_CROSSPOST(body, tmp),
        oldFormErrors: true,
        failImmediatelyWhenRateLimited: true,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj9 = body(c3[51]);
      await post(obj4);
      if (429 === closure_2.status) {
        const intl2 = body(c3[43]).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const obj6 = { retryAfter: Math.floor(closure_2.body.retry_after / 60) };
        const _Math = Math;
        const v77cuqz = body(c3[43]).t["77cuqz"];
        formatToPlainStringResult = formatToPlainString(v77cuqz, obj6);
      } else {
        const intl = body(c3[43]).intl;
        formatToPlainStringResult = intl.string(body(c3[43]).t.z2gyNF);
      }
      body = formatToPlainStringResult;
      const obj7 = {
        title: intl3.string(body(c3[43]).t.Vd1hs6),
        body,
        confirmText: intl4.string(body(c3[43]).t.BddRzS),
      };
      const show = closure_2(c3[84]).show;
      const tmp27 = closure_2(c3[84]);
      intl3 = body(c3[43]).intl;
      intl4 = body(c3[43]).intl;
      show(obj7);
      await "IconComponent";
      return value;
    })();
  },
  trackInvite,
};
let result = size.fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj17;
