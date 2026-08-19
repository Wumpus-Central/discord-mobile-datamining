// discord_app/modules/messages/native/MessageImpressionAnalyticsHelpers.tsx
import InviteTypes2 from "../../instant_invite/InviteTypeUtils.tsx";
import getVoiceChannelListInviteExperiment from "../VoiceChannelListInviteExperiment.tsx";
import canShowVoiceChannelListInviteEmbed from "renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import updateInvite from "../../../stores/InviteStore.tsx";
import getVoiceStatesForGuild from "../../../stores/views/SortedVoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import { LinkType } from "../../applications/message_embed/MessageEmbedConstants.tsx";
import { InviteTypes } from "../../instant_invite/Constants.tsx";

require = fn;
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== constants2.RESOLVING) {
    if (state.state !== constants2.EXPIRED) {
      if (state.state !== constants2.BANNED) {
        if (state.state !== constants2.ERROR) {
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            let tmp7Result = InviteTypes2;
            const guildInviteExtendedType = tmp7Result.getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== InviteTypes2.GuildInviteExtendedType.VOICE_CHANNEL) {
              return null;
            } else {
              const guild = state.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let tmp4 = null;
              if (null != id) {
                tmp7Result = getVoiceChannelListInviteExperiment;
                let obj = { guildId: null, location: "mobile_invite_embed_impression" };
                obj[0] = id;
                let enabled = tmp7Result.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  enabled = canShowVoiceChannelListInviteEmbed.canShowVoiceChannelListInviteEmbed(state);
                  const tmp7Result1 = canShowVoiceChannelListInviteEmbed;
                }
                obj = { treatmentRendered: null };
                obj[0] = enabled;
                tmp4 = obj;
              }
              return tmp4;
            }
          }
          obj5 = InviteTypes2;
        }
      }
    }
  }
  return null;
}
({ ChannelTypes: closure_6, GuildFeatures: error, InviteStates: closure_8, MessageFlags: c9 } = ME);
let result = require("obj132").fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = function useShouldTrackAnnouncementMessageViews(messages) {
  ({ guild, channel } = messages);
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  let flag;
  if (guild != null) {
    const features = guild.features;
    if (features != null) {
      flag = features.has(constants.COMMUNITY);
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
    let tmp = channel.type === closure_1_6.GUILD_ANNOUNCEMENT && flag;
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((item, index) => {
        let hasFlagResult = null != item.messageReference && null != item.webhookId;
        if (hasFlagResult) {
          hasFlagResult = item.hasFlag(closure_1_9.IS_CROSSPOST);
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
  return React.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((item, index) => null != item.activity && null != item.activity.party_id && null != item.application);
    }
    return someResult;
  }, items);
};
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  const _require = guildId;
  importDefault = channel;
  if (shouldTrackAnnouncementMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((item, index) => {
        let message = item.message;
        const messageReference = message.messageReference;
        let guild_id;
        if (messageReference != null) {
          guild_id = messageReference.guild_id;
        }
        let hasFlagResult = null != guild_id && null != message.webhookId;
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(closure_1_9.IS_CROSSPOST);
        }
        if (!message.hasFlag(closure_1_9.EPHEMERAL)) {
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
                const obj = { type: null, messageId: null, channelId: null, guildId: null, sourceChannelId: null, sourceGuildId: null };
                obj[0] = guildId(items[6]).MessageViewTrackingType.ANNOUNCEMENT;
                obj[1] = message.id;
                id = id.id;
                obj[2] = id;
                obj[3] = guildId;
                obj[4] = id2;
                obj[5] = guild_id;
                message = items.push(obj);
              }
              const message_id = message.messageReference.message_id;
            }
            guild_id = guildId;
          }
          id2 = id.id;
        }
      });
      const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.ANNOUNCEMENT);
      let obj = importDefault(items[6]);
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  const _require = guildId;
  importDefault = channel;
  if (shouldTrackRichPresenceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((item, index) => {
      const message = item.message;
      let hasFlagResult = message.hasFlag(closure_1_9.EPHEMERAL);
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
        const obj = { type: null, messageId: null, channelId: null, guildId: null, applicationId: null, linkType: null };
        obj[0] = guildId(items[6]).MessageViewTrackingType.APP_EMBED;
        obj[1] = message.id;
        obj[2] = id.id;
        obj[3] = guildId;
        obj[4] = message.application.id;
        obj[5] = LinkType.RICH_PRESENCE_INVITE;
        items.push(obj);
      }
    });
    const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.APP_EMBED);
    let obj = importDefault(items[6]);
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
  return React.useMemo(() => {
    let someResult = isGuildOfficialMessagesEnabled;
    if (isGuildOfficialMessagesEnabled) {
      someResult = isMessagesReady;
    }
    if (someResult) {
      someResult = messages.some((item, index) => item.hasFlag(constants.IS_GUILD_OFFICIAL));
    }
    return someResult;
  }, items);
};
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  const _require = guildId;
  importDefault = channel;
  if (shouldTrackOfficialMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((item, index) => {
        const message = item.message;
        const hasFlagResult = message.hasFlag(closure_1_9.EPHEMERAL);
        let hasFlagResult1 = !hasFlagResult;
        if (!hasFlagResult) {
          hasFlagResult1 = message.hasFlag(closure_1_9.IS_GUILD_OFFICIAL);
        }
        if (hasFlagResult1) {
          const obj = { type: null, messageId: null, channelId: null, guildId: null };
          obj[0] = guildId(items[6]).MessageViewTrackingType.OFFICIAL_MESSAGE;
          obj[1] = message.id;
          obj[2] = id.id;
          obj[3] = guildId;
          items.push(obj);
        }
      });
      const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.OFFICIAL_MESSAGE);
      let obj = importDefault(items[6]);
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return React.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((item, index) => {
        const codedLinks = item.codedLinks;
        return codedLinks.some((item, index) => item.type === callback(table[8]).CodedLinkType.INVITE);
      });
    }
    return someResult;
  }, items);
};
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  const _require = guildId;
  importDefault = channel;
  if (shouldTrackVoiceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((item, index) => {
      const message = item.message;
      if (!message.hasFlag(closure_1_9.EPHEMERAL)) {
        const codedLinks = message.codedLinks;
        const iter = codedLinks[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if (nextResult.type === guildId(items[8]).CodedLinkType.INVITE) {
            let invite = closure_1_4.getInvite(tmp6.code);
            let tmp34 = invite;
            if (null != invite) {
              let tmp37 = getVoiceInviteEmbedRenderInfo(tmp34);
              if (null != tmp37) {
                channel = tmp34.channel;
                let id;
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
                  let voiceStatesForChannelAlt = closure_1_5.getVoiceStatesForChannelAlt(tmp10, tmp13);
                  someResult = voiceStatesForChannelAlt.some((item, index) => item.voiceState.selfStream);
                }
                let obj = { type: null, messageId: null, channelId: null, guildId: null, inviteCode: null, inviteGuildId: null, inviteChannelId: null, inviteInstanceId: null, treatmentRendered: null, hasActiveStream: null };
                let tmp20 = someResult;
                obj[0] = guildId(items[6]).MessageViewTrackingType.VOICE_INVITE_EMBED;
                obj[1] = message.id;
                obj[2] = id.id;
                obj[3] = guildId;
                obj[4] = tmp6.code;
                obj[5] = tmp13;
                obj[6] = tmp10;
                let tmp7Result = guildId(items[12]);
                let inviteInstanceId = tmp7Result.getInviteInstanceId(tmp6.code, message.id);
                if (inviteInstanceId == null) {
                  inviteInstanceId = null;
                }
                obj[7] = inviteInstanceId;
                obj[8] = tmp38.treatmentRendered;
                obj[9] = tmp20;
                let arr = items.push(obj);
              }
            }
          }
          continue;
        }
      }
    });
    const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.VOICE_INVITE_EMBED);
    let obj = importDefault(items[6]);
  }
};