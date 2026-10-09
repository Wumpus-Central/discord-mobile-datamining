// === Module 9575: MessageImpressionAnalyticsHelpers ===

// Module 9575 (MessageImpressionAnalyticsHelpers)
import c from "c" /* 576 */;
import InviteCodeUtils from "InviteCodeUtils" /* 5073 */;
import CodedLink from "CodedLink" /* 5076 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 6963 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7422 */;
import MessageViewTrackingManager from "MessageViewTrackingManager" /* 9576 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 9577 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 9578 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 5072 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5115 */;

const require = globalThis.__r;

require = fn;
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== constants3.RESOLVING) {
    if (state.state !== constants3.EXPIRED) {
      if (state.state !== constants3.BANNED) {
        if (state.state !== constants3.ERROR) {
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            const guildInviteExtendedType = InviteTypeUtils.getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
              return null;
            } else {
              guild = state.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let tmp4 = null;
              if (null != id) {
                const obj = { guildId: id, location: "mobile_invite_embed_impression" };
                let enabled = VoiceChannelListInviteExperiment.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  enabled = VoiceChannelListInviteEmbed.canShowVoiceChannelListInviteEmbed(state);
                  const tmp7Result4 = VoiceChannelListInviteEmbed;
                }
                const obj2 = { treatmentRendered: enabled };
                tmp4 = obj2;
                const tmp7Result3 = VoiceChannelListInviteExperiment;
              }
              return tmp4;
            }
            const tmp7Result = InviteTypeUtils;
          }
          obj5 = InviteTypeUtils;
        }
      }
    }
  }
  return null;
}
const Constants = fn(1085);
({ ChannelTypes: metroRequire, GuildFeatures: closure_7, InviteStates: closure_8, MessageFlags: closure_9 } = Constants);
const LinkType = fn(7370).LinkType;
const InviteTypes = fn(7423).InviteTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldTrackAnnouncementMessageViews(arg0) {
  const cResult = channel(576).c(6);
  ({ guild, channel } = arg0);
  ({ messages, isMessagesReady } = arg0);
  let features1;
  if (guild != null) {
    features1 = guild.features;
  }
  if (cResult[0] !== features1) {
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
    let features2;
    if (guild != null) {
      features2 = guild.features;
    }
    cResult[0] = features2;
    cResult[1] = flag;
    let tmp3 = flag;
  } else {
    tmp3 = cResult[1];
  }
  let tmp6 = channel.type === constants.GUILD_ANNOUNCEMENT && tmp3;
  if (cResult[2] === channel.guild_id) {
    if (cResult[3] === isMessagesReady) {
      if (cResult[4] === messages) {
        let tmp7 = cResult[5];
      }
      if (!tmp6) {
        tmp6 = tmp7;
      }
      return tmp6;
    }
  }
  let someResult = isMessagesReady;
  if (isMessagesReady) {
    someResult = messages.some((messageReference) => {
      let hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId;
      if (hasFlagResult) {
        hasFlagResult = messageReference.hasFlag(constants4.IS_CROSSPOST);
      }
      if (hasFlagResult) {
        hasFlagResult = null != channel.guild_id;
      }
      return hasFlagResult;
    });
  }
  cResult[2] = channel.guild_id;
  cResult[3] = isMessagesReady;
  cResult[4] = messages;
  cResult[5] = someResult;
  tmp7 = someResult;
  const obj = channel(576);
}) : (function useShouldTrackAnnouncementMessageViews(messages) {
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
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldTrackRichPresenceInviteEmbedViews(arg0) {
  const cResult = c.c(3);
  ({ messages, isMessagesReady } = arg0);
  if (cResult[0] === isMessagesReady) {
    if (cResult[1] === messages) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  let someResult = isMessagesReady;
  if (isMessagesReady) {
    someResult = messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
  }
  cResult[0] = isMessagesReady;
  cResult[1] = messages;
  cResult[2] = someResult;
  tmp2 = someResult;
}) : (function useShouldTrackRichPresenceInviteEmbedViews(messages) {
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
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldTrackOfficialMessageViews(arg0) {
  const cResult = c.c(4);
  ({ guild, messages, isMessagesReady } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const isGuildOfficialMessagesEnabled = GuildOfficialMessageUtils.useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
  if (cResult[0] === isMessagesReady) {
    if (cResult[1] === isGuildOfficialMessagesEnabled) {
      if (cResult[2] === messages) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  let someResult = isGuildOfficialMessagesEnabled;
  if (isGuildOfficialMessagesEnabled) {
    someResult = isMessagesReady;
  }
  if (someResult) {
    someResult = messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
  }
  cResult[0] = isMessagesReady;
  cResult[1] = isGuildOfficialMessagesEnabled;
  cResult[2] = messages;
  cResult[3] = someResult;
  tmp4 = someResult;
}) : (function useShouldTrackOfficialMessageViews(isMessagesReady) {
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
  isGuildOfficialMessagesEnabled = messages(isGuildOfficialMessagesEnabled[9]).useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = tmp3;
export const useShouldTrackRichPresenceInviteEmbedViews = tmp4;
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  if (shouldTrackAnnouncementMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id1;
        if (messageReference != null) {
          guild_id1 = messageReference.guild_id;
        }
        let hasFlagResult = null != guild_id1 && null != message.webhookId;
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
              let guild_id2;
              if (messageReference2 != null) {
                guild_id2 = messageReference2.guild_id;
              }
              if (null != guild_id2) {
                let guild_id = message.messageReference.guild_id;
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
export const useShouldTrackOfficialMessageViews = tmp5;
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
export const useShouldTrackVoiceInviteEmbedViews = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldTrackVoiceInviteEmbedViews(arg0) {
  const cResult = c.c(3);
  ({ messages, isMessagesReady } = arg0);
  if (cResult[0] === isMessagesReady) {
    if (cResult[1] === messages) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  let someResult = isMessagesReady;
  if (isMessagesReady) {
    someResult = messages.some((codedLinks) => {
      codedLinks = codedLinks.codedLinks;
      return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[10]).CodedLinkType.INVITE);
    });
  }
  cResult[0] = isMessagesReady;
  cResult[1] = messages;
  cResult[2] = someResult;
  tmp2 = someResult;
}) : (function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return noop.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((codedLinks) => {
        codedLinks = codedLinks.codedLinks;
        return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[10]).CodedLinkType.INVITE);
      });
    }
    return someResult;
  }, items);
});
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
                guild = tmp34.guild;
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