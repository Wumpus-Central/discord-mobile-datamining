// === Module 10032: MessageImpressionAnalyticsHelpers ===

// Module 10032 (MessageImpressionAnalyticsHelpers)
import react2 from "react" /* 576 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4878 */;
import CodedLink from "CodedLink" /* 4881 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 6780 */;
import MessageEmbedConstants from "MessageEmbedConstants" /* 7186 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7238 */;
import Constants2 from "Constants" /* 7239 */;
import MessageViewTrackingManager from "MessageViewTrackingManager" /* 10033 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 10034 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 10035 */;
import react from "react" /* 19 */;
import InviteStore from "InviteStore" /* 4877 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, message;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== metroImportAll.RESOLVING) {
    if (state.state !== metroImportAll.EXPIRED) {
      if (state.state !== metroImportAll.BANNED) {
        if (state.state !== metroImportAll.ERROR) {
          const obj5 = InviteTypeUtils;
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            const tmp7Result = InviteTypeUtils;
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
                const obj = { guildId: id, location: "mobile_invite_embed_impression" };
                const tmp7Result3 = VoiceChannelListInviteExperiment;
                let enabled = tmp7Result3.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  const tmp7Result4 = VoiceChannelListInviteEmbed;
                  enabled = tmp7Result4.canShowVoiceChannelListInviteEmbed(state);
                }
                tmp4 = { treatmentRendered: enabled };
                const obj2 = { treatmentRendered: enabled };
              }
              return tmp4;
            }
          }
        }
      }
    }
  }
  return null;
}
({ ChannelTypes: metroRequire, GuildFeatures: metroImportDefault, InviteStates: metroImportAll, MessageFlags: c9 } = Constants);
const LinkType = MessageEmbedConstants.LinkType;
const InviteTypes = Constants2.InviteTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let guild;
  let isMessagesReady;
  let messages;
  let tmp4;
  const obj = channel(576);
  const cResult = obj.c(6);
  ({ guild, channel } = arg0);
  ({ messages, isMessagesReady } = arg0);
  let features1;
  const first = cResult[0];
  if (guild != null) {
    features1 = guild.features;
  }
  if (first !== features1) {
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
    tmp4 = flag;
  } else {
    tmp4 = cResult[1];
  }
  let tmp7 = channel.type === constants.GUILD_ANNOUNCEMENT && tmp4;
  if (cResult[2] === channel.guild_id) {
    if (cResult[3] === isMessagesReady) {
      let tmp8;
      if (cResult[4] === messages) {
        tmp8 = cResult[5];
      }
      if (!tmp7) {
        tmp7 = tmp8;
      }
      return tmp7;
    }
  }
  const tmp9 = isMessagesReady && messages.some((messageReference) => {
    const hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId && messageReference.hasFlag(constants.IS_CROSSPOST) && null != channel.guild_id;
    return hasFlagResult;
  });
  cResult[2] = channel.guild_id;
  cResult[3] = isMessagesReady;
  cResult[4] = messages;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((messages) => {
  let channel;
  let guild;
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
    let guild_id;
    let tmp = channel.type === metroRequire.GUILD_ANNOUNCEMENT && flag;
    const someResult = isMessagesReady && messages.some((messageReference) => {
      const hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId && messageReference.hasFlag(constants.IS_CROSSPOST) && null != guild_id.guild_id;
      return hasFlagResult;
    });
    if (!tmp) {
      tmp = someResult;
    }
    return tmp;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isMessagesReady;
  let messages;
  const obj = react2;
  const cResult = obj.c(3);
  ({ messages, isMessagesReady } = arg0);
  if (cResult[0] === isMessagesReady) {
    let tmp2;
    if (cResult[1] === messages) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = isMessagesReady && messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
  cResult[0] = isMessagesReady;
  cResult[1] = messages;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((messages) => {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return react.useMemo(() => {
    const someResult = isMessagesReady && messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
    return someResult;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let isMessagesReady;
  let messages;
  const obj = react2;
  const cResult = obj.c(4);
  ({ guild, messages, isMessagesReady } = arg0);
  let id;
  const useIsGuildOfficialMessagesEnabled = GuildOfficialMessageUtils.useIsGuildOfficialMessagesEnabled;
  GuildOfficialMessageUtils;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const isGuildOfficialMessagesEnabled = useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
  if (cResult[0] === isMessagesReady) {
    if (cResult[1] === isGuildOfficialMessagesEnabled) {
      let tmp5;
      if (cResult[2] === messages) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = isGuildOfficialMessagesEnabled && isMessagesReady && messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
  cResult[0] = isMessagesReady;
  cResult[1] = isGuildOfficialMessagesEnabled;
  cResult[2] = messages;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((isMessagesReady) => {
  let guild;
  let messages;
  ({ guild, messages } = isMessagesReady);
  isMessagesReady = isMessagesReady.isMessagesReady;
  let isGuildOfficialMessagesEnabled;
  let id;
  const useIsGuildOfficialMessagesEnabled = messages(isGuildOfficialMessagesEnabled[9]).useIsGuildOfficialMessagesEnabled;
  messages(isGuildOfficialMessagesEnabled[9]);
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  isGuildOfficialMessagesEnabled = useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
  const items = [isGuildOfficialMessagesEnabled, isMessagesReady, messages];
  return react.useMemo(() => {
    const someResult = isGuildOfficialMessagesEnabled && isMessagesReady && messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
    return someResult;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isMessagesReady;
  let messages;
  const obj = react2;
  const cResult = obj.c(3);
  ({ messages, isMessagesReady } = arg0);
  if (cResult[0] === isMessagesReady) {
    let tmp2;
    if (cResult[1] === messages) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = isMessagesReady && messages.some((codedLinks) => {
    codedLinks = codedLinks.codedLinks;
    return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[10]).CodedLinkType.INVITE);
  });
  cResult[0] = isMessagesReady;
  cResult[1] = messages;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((messages) => {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return react.useMemo(() => {
    const someResult = isMessagesReady && messages.some((codedLinks) => {
      codedLinks = codedLinks.codedLinks;
      return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[10]).CodedLinkType.INVITE);
    });
    return someResult;
  }, items);
});
let result = size.fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = tmp3;
export const useShouldTrackRichPresenceInviteEmbedViews = tmp4;
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackAnnouncementMessageViews;
  if (tmp) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id1;
        if (messageReference != null) {
          guild_id1 = messageReference.guild_id;
        }
        const hasFlagResult = null != guild_id1 && null != message.webhookId && message.hasFlag(constants.IS_CROSSPOST);
        if (!message.hasFlag(constants.EPHEMERAL)) {
          if (channel.type === metroRequire.GUILD_ANNOUNCEMENT) {
            if (hasFlagResult) {
              let id;
              if (null != message.messageReference) {
                id = message.messageReference.channel_id;
              }
              if (hasFlagResult) {
                let guild_id;
                const messageReference2 = message.messageReference;
                let guild_id2;
                if (messageReference2 != null) {
                  guild_id2 = messageReference2.guild_id;
                }
                if (null != guild_id2) {
                  guild_id = message.messageReference.guild_id;
                }
                if (hasFlagResult) {
                  let id2;
                  if (null != message.messageReference) {
                    id2 = message.messageReference.message_id;
                  }
                  const push = items.push;
                  const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.ANNOUNCEMENT, messageId: id2, channelId: channel.id, guildId, sourceChannelId: id, sourceGuildId: guild_id };
                  push(obj);
                }
                id2 = message.id;
              }
              guild_id = guildId;
            }
            id = channel.id;
          }
        }
      });
      let obj = require("MessageViewTrackingManager");
      const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.ANNOUNCEMENT);
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackRichPresenceInviteEmbedViews;
  if (tmp) {
    const items = [];
    const item = arr.forEach((message) => {
      message = message.message;
      const hasFlagResult = message.hasFlag(constants.EPHEMERAL) || null == message.activity || null == message.activity.party_id || null == message.application;
      if (!hasFlagResult) {
        const push = items.push;
        const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.APP_EMBED, messageId: message.id, channelId: channel.id, guildId, applicationId: message.application.id, linkType: LinkType.RICH_PRESENCE_INVITE };
        push(obj);
      }
    });
    let obj = require("MessageViewTrackingManager");
    const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.APP_EMBED);
  }
};
export const useShouldTrackOfficialMessageViews = tmp5;
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackOfficialMessageViews;
  if (tmp) {
    if (null != guildId) {
      let tmp3 = arr;
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const hasFlagResult = message.hasFlag(constants.EPHEMERAL);
        const tmp3 = !hasFlagResult && message.hasFlag(constants.IS_GUILD_OFFICIAL);
        if (tmp3) {
          const push = items.push;
          const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.OFFICIAL_MESSAGE, messageId: message.id, channelId: channel.id, guildId };
          push(obj);
        }
      });
      let obj = require("MessageViewTrackingManager");
      const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.OFFICIAL_MESSAGE);
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = tmp6;
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackVoiceInviteEmbedViews;
  if (tmp) {
    const items = [];
    const item = arr.forEach((message) => {
      let inviteInstanceId;
      let tmp20;
      message = message.message;
      if (!message.hasFlag(constants.EPHEMERAL)) {
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
                  let voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(tmp10, tmp13);
                  someResult = voiceStatesForChannelAlt.some((voiceState) => voiceState.voiceState.selfStream);
                }
                let obj = { type: MessageViewTrackingManager.MessageViewTrackingType.VOICE_INVITE_EMBED, messageId: message.id, channelId: channel.id, guildId, inviteCode: tmp6.code, inviteGuildId: tmp13, inviteChannelId: tmp10, inviteInstanceId, treatmentRendered: tmp38.treatmentRendered, hasActiveStream: tmp20 };
                tmp20 = someResult;
                let push = items.push;
                let tmp7Result = InviteCodeUtils;
                inviteInstanceId = tmp7Result.getInviteInstanceId(tmp6.code, message.id);
                if (inviteInstanceId == null) {
                  inviteInstanceId = null;
                }
                let arr = push(obj);
              }
            }
          }
          continue;
        }
      }
    });
    let obj = require("MessageViewTrackingManager");
    let tmp6 = _require;
    const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.VOICE_INVITE_EMBED);
  }
};