// === Module 11304: MessageImpressionAnalyticsHelpers ===

// Module 11304 (MessageImpressionAnalyticsHelpers)
import InviteCodeUtils from "InviteCodeUtils" /* 4545 */;
import CodedLink from "CodedLink" /* 4548 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7735 */;
import MessageViewTrackingManager from "MessageViewTrackingManager" /* 11305 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 11306 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 11307 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 4544 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

require = fn;
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== constants3.RESOLVING) {
    if (state.state !== constants3.EXPIRED) {
      if (state.state !== constants3.BANNED) {
        if (state.state !== constants3.ERROR) {
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            let tmp7Result = InviteTypeUtils;
            const guildInviteExtendedType = tmp7Result.getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
              return null;
            } else {
              const guild = state.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let tmp4 = null;
              if (null != id) {
                tmp7Result = VoiceChannelListInviteExperiment;
                let obj = { guildId: id, location: "mobile_invite_embed_impression" };
                let enabled = tmp7Result.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  enabled = VoiceChannelListInviteEmbed.canShowVoiceChannelListInviteEmbed(state);
                  const tmp7Result1 = VoiceChannelListInviteEmbed;
                }
                obj = { treatmentRendered: enabled };
                tmp4 = obj;
              }
              return tmp4;
            }
          }
          obj5 = InviteTypeUtils;
        }
      }
    }
  }
  return null;
}
const Constants = fn(1074);
({ ChannelTypes: metroRequire, GuildFeatures: closure_7, InviteStates: closure_8, MessageFlags: closure_9 } = Constants);
const LinkType = fn(7689).LinkType;
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = function useShouldTrackAnnouncementMessageViews(messages) {
  ({ guild, channel } = messages);
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  let flag;
  if (guild != null) {
    const features = guild.features;
    if (features != null) {
      flag = features.has(constants2.COMMUNITY);
    }
  }
  if (flag == null) {
    flag = false;
  }
  const items = [, , , , ];
  ({ type: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag;
  items[3] = isMessagesReady;
  items[4] = messages;
  return flag.useMemo(() => {
    let tmp = channel.type === constants.GUILD_ANNOUNCEMENT && flag;
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((messageReference) => {
        let hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId;
        if (hasFlagResult) {
          hasFlagResult = messageReference.hasFlag(constants.IS_CROSSPOST);
        }
        if (hasFlagResult) {
          hasFlagResult = null != guild_id.guild_id;
        }
        return hasFlagResult;
      });
    }
    if (!tmp) {
      tmp = someResult;
    }
    return tmp;
  }, items);
};
export const useShouldTrackRichPresenceInviteEmbedViews = function useShouldTrackRichPresenceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return noop.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
    }
    return someResult;
  }, items);
};
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  if (shouldTrackAnnouncementMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id;
        if (messageReference != null) {
          guild_id = messageReference.guild_id;
        }
        let hasFlagResult = null != guild_id && null != message.webhookId;
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(constants4.IS_CROSSPOST);
        }
        if (!message.hasFlag(constants4.EPHEMERAL)) {
          let id = type;
          if (hasFlagResult) {
            if (null != message.messageReference) {
              let id2 = message.messageReference.channel_id;
            }
            if (hasFlagResult) {
              const messageReference2 = message.messageReference;
              let guild_id1;
              if (messageReference2 != null) {
                guild_id1 = messageReference2.guild_id;
              }
              if (null != guild_id1) {
                guild_id = message.messageReference.guild_id;
              }
              if (!hasFlagResult) {
                const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.ANNOUNCEMENT, messageId: message.id, channelId: null, guildId: null, sourceChannelId: null, sourceGuildId: null };
                id = id.id;
                obj.channelId = id;
                obj.guildId = guildId;
                obj.sourceChannelId = id2;
                obj.sourceGuildId = guild_id;
                message = items.push(obj);
              }
              const message_id = message.messageReference.message_id;
            }
            guild_id = guildId;
          }
          id2 = id.id;
        }
      });
      const result = require("MessageViewTrackingManager").handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.ANNOUNCEMENT);
      let obj = require("MessageViewTrackingManager");
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  if (shouldTrackRichPresenceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((message) => {
      message = message.message;
      let hasFlagResult = message.hasFlag(constants4.EPHEMERAL);
      if (!hasFlagResult) {
        hasFlagResult = null == message.activity;
      }
      if (!hasFlagResult) {
        hasFlagResult = null == message.activity.party_id;
      }
      if (!hasFlagResult) {
        hasFlagResult = null == message.application;
      }
      if (!hasFlagResult) {
        const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.APP_EMBED, messageId: message.id, channelId: id.id, guildId, applicationId: message.application.id, linkType: LinkType.RICH_PRESENCE_INVITE };
        items.push(obj);
      }
    });
    const result = require("MessageViewTrackingManager").handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.APP_EMBED);
    let obj = require("MessageViewTrackingManager");
  }
};
export const useShouldTrackOfficialMessageViews = function useShouldTrackOfficialMessageViews(isMessagesReady) {
  ({ guild, messages } = isMessagesReady);
  isMessagesReady = isMessagesReady.isMessagesReady;
  let isGuildOfficialMessagesEnabled;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  isGuildOfficialMessagesEnabled = messages(isGuildOfficialMessagesEnabled[7]).useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
  const items = [isGuildOfficialMessagesEnabled, isMessagesReady, messages];
  return noop.useMemo(() => {
    let someResult = isGuildOfficialMessagesEnabled;
    if (isGuildOfficialMessagesEnabled) {
      someResult = isMessagesReady;
    }
    if (someResult) {
      someResult = messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
    }
    return someResult;
  }, items);
};
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  if (shouldTrackOfficialMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const hasFlagResult = message.hasFlag(constants4.EPHEMERAL);
        let hasFlagResult1 = !hasFlagResult;
        if (!hasFlagResult) {
          hasFlagResult1 = message.hasFlag(constants4.IS_GUILD_OFFICIAL);
        }
        if (hasFlagResult1) {
          const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.OFFICIAL_MESSAGE, messageId: message.id, channelId: id.id, guildId };
          items.push(obj);
        }
      });
      const result = require("MessageViewTrackingManager").handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.OFFICIAL_MESSAGE);
      let obj = require("MessageViewTrackingManager");
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return noop.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((codedLinks) => {
        codedLinks = codedLinks.codedLinks;
        return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[8]).CodedLinkType.INVITE);
      });
    }
    return someResult;
  }, items);
};
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  if (shouldTrackVoiceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((message) => {
      message = message.message;
      if (!message.hasFlag(constants4.EPHEMERAL)) {
        const codedLinks = message.codedLinks;
        const iter = codedLinks[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if (nextResult.type === CodedLink.CodedLinkType.INVITE) {
            let invite = InviteStore.getInvite(tmp6.code);
            let tmp34 = invite;
            if (null != invite) {
              let tmp37 = getVoiceInviteEmbedRenderInfo(tmp34);
              if (null != tmp37) {
                let channel = tmp34.channel;
                id = undefined;
                if (channel != null) {
                  id = channel.id;
                }
                if (id == null) {
                  id = null;
                }
                let tmp10 = id;
                let guild = tmp34.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (id1 == null) {
                  id1 = null;
                }
                let tmp13 = id1;
                let someResult = null != tmp10;
                if (someResult) {
                  someResult = null != tmp13;
                }
                if (someResult) {
                  let voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(tmp10, tmp13);
                  someResult = voiceStatesForChannelAlt.some((voiceState) => voiceState.voiceState.selfStream);
                }
                let obj = { type: null, messageId: null, channelId: null, guildId: null, inviteCode: null, inviteGuildId: null, inviteChannelId: null, inviteInstanceId: null, treatmentRendered: null, hasActiveStream: null };
                let tmp20 = someResult;
                obj.type = MessageViewTrackingManager.MessageViewTrackingType.VOICE_INVITE_EMBED;
                obj.messageId = message.id;
                obj.channelId = id.id;
                obj.guildId = guildId;
                obj.inviteCode = tmp6.code;
                obj.inviteGuildId = tmp13;
                obj.inviteChannelId = tmp10;
                let tmp7Result = InviteCodeUtils;
                let inviteInstanceId = tmp7Result.getInviteInstanceId(tmp6.code, message.id);
                if (inviteInstanceId == null) {
                  inviteInstanceId = null;
                }
                obj.inviteInstanceId = inviteInstanceId;
                obj.treatmentRendered = tmp38.treatmentRendered;
                obj.hasActiveStream = tmp20;
                let arr = items.push(obj);
              }
            }
          }
          continue;
        }
      }
    });
    const result = require("MessageViewTrackingManager").handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.VOICE_INVITE_EMBED);
    let obj = require("MessageViewTrackingManager");
  }
};