// discord_app/utils/ChannelUtils.tsx
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import intl14 from "../intl/index.native.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import Server from "../flow/Server.tsx";
import PermissionUtilsAll from "PermissionUtils.tsx";
import UserUtilsDefault from "UserUtils.tsx";
import ChannelListUtils from "../modules/guild_sidebar/ChannelListUtils.tsx";
import useAudienceRequestToSpeakState from "../modules/stage_channels/useAudienceRequestToSpeakState.tsx";
import MediaPostEmbedUtils from "../modules/media_channel/MediaPostEmbedUtils.tsx";
import sanitizeGuildTextChannelNameDefault from "../modules/channel/sanitizeGuildTextChannelName.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildChannelStore from "../stores/GuildChannelStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../stores/views/SortedVoiceStateStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, isProvisional;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
function allowChannelAccess(id, channelType, ROLE) {
  const NONE = PermissionUtilsAll.NONE;
  let addResult = NONE;
  const tmp3 = React3(channelType) || channelType === afk;
  if (tmp3) {
    const tmpResult = BigFlagUtilsAll;
    addResult = tmpResult.add(NONE, map1.VIEW_CHANNEL);
  }
  let tmp7 = channelType === closure_21 || channelType === afk;
  if (!tmp7) {
    tmp7 = channelType === closure_23 || channelType === afk;
    const tmp10 = channelType === closure_23 || channelType === afk;
  }
  let addResult2 = addResult;
  if (tmp7) {
    const tmpResult3 = BigFlagUtilsAll;
    const addResult1 = tmpResult3.add(addResult, map1.VIEW_CHANNEL);
    const tmpResult4 = BigFlagUtilsAll;
    addResult2 = tmpResult4.add(addResult1, map1.CONNECT);
  }
  const obj = { id, type: ROLE, deny: PermissionUtilsAll.NONE, allow: addResult2 };
  return obj;
}
({
  isGuildSelectableChannelType: closure_4,
  TEXT_CHANNEL_TYPES: hasOwnProperty,
  THREAD_CHANNEL_TYPES: metroRequire,
} = ChannelRecord);
const ChannelTypes = Constants.ChannelTypes;
({
  Permissions: map1,
  GuildFeatures: closure_14,
  BoostedGuildTiers: closure_15,
  BITRATE_MAX: closure_16,
  BITRATE_DEFAULT: closure_17,
  Routes: closure_18,
  AnalyticsPages: closure_19,
} = Constants);
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
({ GUILD_VOICE: closure_21, GUILD_CATEGORY: closure_22, GUILD_STAGE_VOICE: closure_23 } = ChannelTypes);
let result = size.fileFinishedImporting("utils/ChannelUtils.tsx");

export const denyChannelAccessForNonPaidUsers = function denyChannelAccessForNonPaidUsers(id, arg1) {
  let addResult;
  if (arg1 === ChannelTypes.GUILD_STAGE_VOICE) {
    const NONE = PermissionUtilsAll.NONE;
    const obj2 = { id, type: Server.PermissionOverwriteType.ROLE, allow: PermissionUtilsAll.NONE, deny: addResult };
    const obj = BigFlagUtilsAll;
    addResult = obj.add(NONE, map1.CONNECT);
    return obj2;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Premium channel feature not supported for channel type " + arg1);
    throw error;
  }
};
export { allowChannelAccess };
export const permissionOverwritesForRoles = function permissionOverwritesForRoles(guildId, channelType, arr, arg3) {
  _require = channelType;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const items = [];
  const tmp = arr.length > 0 || flag;
  if (tmp) {
    const push = items.push;
    const ROLE = require("Server").PermissionOverwriteType.ROLE;
    const NONE = PermissionUtilsAll.NONE;
    let addResult = NONE;
    const tmp6 = closure_4(channelType) || channelType === closure_22;
    if (tmp6) {
      const tmp4Result = BigFlagUtilsAll;
      addResult = tmp4Result.add(NONE, constants.VIEW_CHANNEL);
    }
    let addResult2 = addResult;
    const tmp11 = channelType === closure_21 || channelType === closure_22;
    if (tmp11) {
      const tmp4Result3 = BigFlagUtilsAll;
      const addResult1 = tmp4Result3.add(addResult, constants.VIEW_CHANNEL);
      const tmp4Result4 = BigFlagUtilsAll;
      addResult2 = tmp4Result4.add(addResult1, constants.CONNECT);
    }
    const obj = { id: guildId, type: ROLE, allow: PermissionUtilsAll.NONE, deny: addResult2 };
    arr = push(obj);
  }
  const item = arr.forEach((item) => {
    items.push(allowChannelAccess(item, channelType, Server.PermissionOverwriteType.ROLE));
  });
  return items;
};
export const permissionOverwriteForUser = function permissionOverwriteForUser(id, channelType) {
  return allowChannelAccess(id, channelType, Server.PermissionOverwriteType.MEMBER);
};
export const permissionOverwriteForRole = function permissionOverwriteForRole(id, channelType) {
  return allowChannelAccess(id, channelType, Server.PermissionOverwriteType.ROLE);
};
export const permissionOverwritesForAnnouncement = function permissionOverwritesForAnnouncement(id) {
  const items = [
    { id, type: Server.PermissionOverwriteType.ROLE, deny: map1.SEND_MESSAGES, allow: PermissionUtilsAll.NONE },
  ];
  ({ id, type: Server.PermissionOverwriteType.ROLE, deny: map1.SEND_MESSAGES, allow: PermissionUtilsAll.NONE });
  return items;
};
export const isChannelFull = function isChannelFull(channel, VoiceStateStore, GuildStore) {
  let tmp7;
  const guildId = channel.getGuildId();
  const guild = GuildStore.getGuild(guildId);
  let num;
  if (guild != null) {
    num = guild.maxVideoChannelUsers;
  }
  if (num == null) {
    num = -1;
  }
  let num2;
  if (guild != null) {
    num2 = guild.maxStageVideoChannelUsers;
  }
  if (num2 == null) {
    num2 = -1;
  }
  const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
  const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
  const tmp6 = PermissionStore.can(map1.MOVE_MEMBERS, channel) && PermissionStore.can(map1.CONNECT, channel);
  if (channel.type === closure_23) {
    let tmp8 = null != guildId;
    if (tmp8) {
      let hasVideoResult = VoiceStateStore.hasVideo(channel.id);
      if (!hasVideoResult) {
        const obj2 = ChannelListUtils;
        hasVideoResult = obj2.hasStream(voiceStatesForChannel);
      }
      tmp8 = hasVideoResult;
    }
    if (tmp8) {
      tmp8 = num2 > 0;
    }
    if (tmp8) {
      tmp8 = result >= num2;
    }
    tmp7 = tmp8;
  } else {
    tmp7 = null != guildId && VoiceStateStore.hasVideo(channel.id) && num > 0;
    if (tmp7) {
      let num4 = 0;
      if (tmp6) {
        num4 = 1;
      }
      tmp7 = result >= num + num4;
    }
  }
  let tmp12 = channel.userLimit > 0 && result >= channel.userLimit;
  if (!tmp7) {
    if (tmp12) {
      tmp12 = !tmp6;
    }
    tmp7 = tmp12;
  }
  return tmp7;
};
export const sanitizeGuildTextChannelName = sanitizeGuildTextChannelNameDefault;
export const getBitrateLimit = function getBitrateLimit(guild, channel) {
  let maxResult;
  if (channel.isGuildStageVoice()) {
    maxResult = closure_17;
  } else if (null == guild) {
    maxResult = authStore3;
  } else {
    let bitrate;
    const features = guild.features;
    const _Math = Math;
    if (features.has(constants2.VIP_REGIONS)) {
      bitrate = BoostedGuildFeatures[TIER_3.TIER_3].limits.bitrate;
    } else {
      bitrate = authStore3;
    }
    maxResult = max(bitrate, BoostedGuildFeatures[guild.premiumTier].limits.bitrate);
  }
  return maxResult;
};
export const computeSummarizedVoiceStates = function computeSummarizedVoiceStates(arg0) {
  let channels;
  let require;
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  const item = channels.forEach((id) => {
    if (id.id !== importDefault) {
      if (id.id !== _require) {
        if (null != importAll[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const obj = require("useAudienceRequestToSpeakState");
              const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceState.voiceState);
              if (
                audienceRequestToSpeakState === require("useAudienceRequestToSpeakState").RequestToSpeakStates.ON_STAGE
              ) {
                closure_1_3.push(voiceState);
              }
            });
          } else {
            const item1 = forEach((arg0) => items.push(arg0));
          }
        }
      }
    }
  });
  return items;
};
export const computeSummarizedVoiceUsers = function computeSummarizedVoiceUsers(arg0) {
  let channels;
  let require;
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  let item = channels.forEach((id) => {
    if (id.id !== importDefault) {
      if (id.id !== _require) {
        if (null != importAll[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const obj = require("useAudienceRequestToSpeakState");
              const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceState.voiceState);
              if (
                audienceRequestToSpeakState === require("useAudienceRequestToSpeakState").RequestToSpeakStates.ON_STAGE
              ) {
                closure_1_3.push(voiceState);
              }
            });
          } else {
            const item1 = forEach((arg0) => items.push(arg0));
          }
        }
      }
    }
  });
  return items.map((user) => user.user);
};
export const isAnyVoiceStateStage = function isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores) {
  const iter = channels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    if (nextResult.id !== stateFromStores1) {
      let tmp10 = stateFromStores[obj.id];
      if (null != tmp10) {
        if (obj.isGuildStageVoice()) {
          for (const item10017 of tmp10) {
            let obj3 = useAudienceRequestToSpeakState;
            let audienceRequestToSpeakState = obj3.getAudienceRequestToSpeakState(item10017.voiceState);
            if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE) {
              obj2.return();
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      }
    }
    continue;
  }
  return false;
};
export const channelTypeString = function channelTypeString(channel) {
  const type = channel.type;
  if (ChannelTypes.DM === type) {
    const intl13 = intl14.intl;
    return intl13.string(intl14.t.jN2DfZ);
  } else if (ChannelTypes.GROUP_DM === type) {
    const intl12 = intl14.intl;
    return intl12.string(intl14.t["e5y+gm"]);
  } else if (ChannelTypes.GUILD_TEXT === type) {
    const intl11 = intl14.intl;
    return intl11.string(intl14.t.Pnajj0);
  } else if (ChannelTypes.GUILD_FORUM === type) {
    const intl10 = intl14.intl;
    return intl10.string(intl14.t.GbryDd);
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    const intl9 = intl14.intl;
    return intl9.string(intl14.t.seKITE);
  } else if (ChannelTypes.GUILD_VOICE === type) {
    const intl8 = intl14.intl;
    return intl8.string(intl14.t.BVZqJl);
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    const intl7 = intl14.intl;
    return intl7.string(intl14.t.EErMzA);
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    const intl6 = intl14.intl;
    return intl6.string(intl14.t.l1dkSD);
  } else if (ChannelTypes.GUILD_STORE === type) {
    const intl5 = intl14.intl;
    return intl5.string(intl14.t["P1/Erq"]);
  } else if (ChannelTypes.GUILD_CATEGORY === type) {
    const intl4 = intl14.intl;
    return intl4.string(intl14.t.vHCZwr);
  } else if (ChannelTypes.PRIVATE_THREAD === type) {
    const intl3 = intl14.intl;
    return intl3.string(intl14.t.F1zyvU);
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_APP === type) {
            const intl = intl14.intl;
            return intl.string(intl14.t.ZkcrC2);
          } else {
            if (ChannelTypes.GUILD_DIRECTORY !== type) {
              if (ChannelTypes.LOBBY !== type) {
                if (ChannelTypes.DM_SDK !== type) {
                  if (ChannelTypes.GUILD_SPACE !== type) {
                    const UNKNOWN = ChannelTypes.UNKNOWN;
                  }
                }
              }
            }
            return null;
          }
        }
      }
    }
    const intl2 = intl14.intl;
    return intl2.string(intl14.t["7Xm5QI"]);
  }
};
export const getPrivateChannelUserTagsString = function getPrivateChannelUserTagsString(recipients, UserStore) {
  if (null == recipients) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return null;
    } else {
      const items = [];
      const iter = recipients[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (id !== nextResult) {
          let user = UserStore.getUser(tmp5);
          if (null != user) {
            let arr = items.push(tmp8);
          }
        }
        continue;
      }
      if (0 === items.length) {
        return null;
      } else {
        const substr = items.slice(0, 2);
        const mapped = substr.map((isProvisional) => {
          let name;
          isProvisional = isProvisional.isProvisional;
          const obj = UserUtilsDefault;
          if (isProvisional) {
            name = obj.getName(isProvisional);
          } else {
            name = obj.getUserTag(isProvisional);
          }
          return name;
        });
        const intl = intl14.intl;
        let obj = { users: items.length, user1: null, user2: null, extras: items.length - mapped.length };
        [obj.user1, obj.user2] = mapped;
        return intl.formatToPlainString(intl14.t.BXG0Eh, obj);
      }
    }
  }
};
export const getMentionIconType = function getMentionIconType(channel) {
  if (null == channel) {
    return "text";
  } else {
    let tmp2;
    const isNSFWResult = channel.isNSFW();
    const isSpoilerChannelResult = channel.isSpoilerChannel();
    if (channel.type === ChannelTypes.GUILD_VOICE) {
      let str13 = "voice-locked";
      if (PermissionStore.can(map1.CONNECT, channel)) {
        let str14 = "voice-nsfw";
        if (!isNSFWResult) {
          let str15 = "voice";
          if (isSpoilerChannelResult) {
            str15 = "voice-spoiler";
          }
          str14 = str15;
        }
        str13 = str14;
      }
      tmp2 = str13;
    } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
      let str12 = "stage-locked";
      if (PermissionStore.can(map1.CONNECT, channel)) {
        str12 = "stage";
      }
      tmp2 = str12;
    } else if (metroRequire.has(channel.type)) {
      let str11 = "thread";
      if (channel.isForumPost()) {
        str11 = "post";
      }
      tmp2 = str11;
    } else if (channel.type === ChannelTypes.GUILD_FORUM) {
      let str8;
      if (tmp9) {
        let str10 = "media";
        if (isNSFWResult) {
          str10 = "media-nsfw";
        }
        str8 = str10;
      } else {
        str8 = "forum-nsfw";
        if (!isNSFWResult) {
          let str9 = "forum";
          if (isSpoilerChannelResult) {
            str9 = "forum-spoiler";
          }
          str8 = str9;
        }
      }
      tmp2 = str8;
    } else if (channel.type === ChannelTypes.GUILD_MEDIA) {
      let str7 = "media";
      if (isNSFWResult) {
        str7 = "media-nsfw";
      }
      tmp2 = str7;
    } else if (channel.type === ChannelTypes.GUILD_ANNOUNCEMENT) {
      let str5 = "announcement-nsfw";
      if (!isNSFWResult) {
        let str6 = "announcement";
        if (isSpoilerChannelResult) {
          str6 = "announcement-spoiler";
        }
        str5 = str6;
      }
      tmp2 = str5;
    } else if (channel.type === ChannelTypes.GUILD_APP) {
      let str3 = "app-nsfw";
      if (!isNSFWResult) {
        let str4 = "app";
        if (isSpoilerChannelResult) {
          str4 = "app-spoiler";
        }
        str3 = str4;
      }
      tmp2 = str3;
    } else if (hasOwnProperty.has(channel.type)) {
      let str = "text-nsfw";
      if (!isNSFWResult) {
        let str2 = "text";
        if (isSpoilerChannelResult) {
          str2 = "text-spoiler";
        }
        str = str2;
      }
      tmp2 = str;
    }
    return tmp2;
  }
};
export const previousTextChannelRouteForGuild = function previousTextChannelRouteForGuild(id) {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
  if (null != channel) {
    if (channel.getGuildId() === id) {
      if (channel.type === ChannelTypes.GUILD_TEXT) {
        id = channel.id;
      }
      return authStore4.CHANNEL(id, id);
    }
  }
  const defaultChannel = GuildChannelStore.getDefaultChannel(id);
  id = null;
  if (null != defaultChannel) {
    id = defaultChannel.id;
  }
};
export const getChannelPermalink = function getChannelPermalink(guild_id, id, id2, id3) {
  let str = "";
  if (null != id3) {
    const _HermesInternal = HermesInternal;
    str = "?summaryId=" + id3;
  }
  return "" + location.protocol + "//" + location.host + authStore4.CHANNEL(guild_id, id, id2) + str;
};
export const getChannelThreadPermalink = function getChannelThreadPermalink(guildId, id, id2, result) {
  if (null != guildId) {
    if (null != id) {
      let combined;
      if (null != id2) {
        const _location = location;
        const _location2 = location;
        const _HermesInternal = HermesInternal;
        combined = "" + protocol + "//" + host + authStore4.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
      }
      return combined;
    }
  }
  combined = "" + location.protocol + "//" + location.host + authStore4.CHANNEL(guildId, id, result) + "";
};
export const getChannelLinkToCopy = function getChannelLinkToCopy(channel, channel1, arg2, arg3) {
  let combined1;
  const guildId = channel.getGuildId();
  const obj = MediaPostEmbedUtils;
  if (null != channel1) {
    if (obj.canUseMediaPostEmbed(guildId, channel1)) {
      const id = channel1.id;
      const id2 = channel.id;
      const obj2 = SnowflakeUtilsDefault;
      const result = obj2.castChannelIdAsMessageId(channel.id);
      if (null != guildId) {
        if (null != id) {
          let combined;
          if (null != id2) {
            const _location3 = location;
            const protocol2 = location.protocol;
            const _location4 = location;
            const host2 = location.host;
            const _HermesInternal2 = HermesInternal;
            combined = "" + protocol2 + "//" + host2 + authStore4.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
          }
          combined1 = combined;
        }
      }
      const _location5 = location;
      const protocol3 = location.protocol;
      const _location6 = location;
      const host3 = location.host;
      const _HermesInternal3 = HermesInternal;
      combined = "" + protocol3 + "//" + host3 + authStore4.CHANNEL(guildId, id, result) + "";
    }
    return combined1;
  }
  combined1 = arg3;
  if (arg3 == null) {
    const _location = location;
    const _location2 = location;
    const _HermesInternal = HermesInternal;
    combined1 = "" + protocol + "//" + host + authStore4.CHANNEL(guildId, channel.id, arg2) + "";
  }
};
export const getChannelAnalyticsPage = function getChannelAnalyticsPage(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
      if (ChannelTypes.GUILD_TEXT !== type) {
        if (ChannelTypes.GUILD_FORUM !== type) {
          if (ChannelTypes.GUILD_MEDIA !== type) {
            if (ChannelTypes.GUILD_APP !== type) {
              if (ChannelTypes.GROUP_DM !== type) {
                if (ChannelTypes.DM !== type) {
                  return null;
                }
              }
              return constants3.DM_CHANNEL;
            }
          }
        }
      }
    }
    return constants3.GUILD_CHANNEL;
  }
};
