// discord_app/utils/ChannelUtils.tsx
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import ME from "ME";
import { BoostedGuildFeatures } from "GuildFeatures";
import { PermissionOverwriteType } from "../flow/Server.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { hasStream } from "../modules/guild_sidebar/ChannelListUtils.tsx";
import { useAudienceRequestToSpeakState } from "../modules/stage_channels/useAudienceRequestToSpeakState.tsx";
import { DISCORD_EPOCH } from "SnowflakeUtils.tsx";

let c4;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let closure_6;
let map1;
function allowChannelAccess(id, channelType, MEMBER) {
  const NONE = importAll(3994).NONE;
  let tmp3 = callback(channelType);
  if (!tmp3) {
    tmp3 = channelType === closure_22;
  }
  let addResult = NONE;
  if (tmp3) {
    let tmpResult = tmp(506);
    addResult = tmpResult.add(NONE, constants.VIEW_CHANNEL);
  }
  let tmp7 = channelType === closure_21;
  if (!tmp7) {
    tmp7 = channelType === closure_22;
  }
  if (!tmp7) {
    let tmp10 = channelType === closure_23;
    if (!tmp10) {
      tmp10 = channelType === closure_22;
    }
    tmp7 = tmp10;
  }
  let addResult2 = addResult;
  if (tmp7) {
    tmpResult = tmp(506);
    const addResult1 = tmpResult.add(addResult, constants.VIEW_CHANNEL);
    addResult2 = tmp(506).add(addResult1, constants.CONNECT);
    const tmpResult1 = tmp(506);
  }
  return { id, type: MEMBER, deny: importAll(3994).NONE, allow: addResult2 };
}
({ isGuildSelectableChannelType: c4, TEXT_CHANNEL_TYPES: c5, THREAD_CHANNEL_TYPES: closure_6 } = createChannelRecord);
const ChannelTypes = ME.ChannelTypes;
({ Permissions: map1, GuildFeatures: closure_14, BoostedGuildTiers: closure_15, BITRATE_MAX: closure_16, BITRATE_DEFAULT: closure_17, Routes: closure_18, AnalyticsPages: closure_19 } = ME);
({ GUILD_VOICE: closure_21, GUILD_CATEGORY: closure_22, GUILD_STAGE_VOICE: closure_23 } = ChannelTypes);
let result = require("comparator").fileFinishedImporting("utils/ChannelUtils.tsx");

export const denyChannelAccessForNonPaidUsers = function denyChannelAccessForNonPaidUsers(arg0, arg1) {
  if (arg1 === ChannelTypes.GUILD_STAGE_VOICE) {
    let obj = importAll(506);
    obj = { id: null, type: null, allow: null, deny: null };
    obj[0] = arg0;
    obj[1] = PermissionOverwriteType.PermissionOverwriteType.ROLE;
    obj[2] = importAll(3994).NONE;
    obj[3] = obj.add(importAll(3994).NONE, constants.CONNECT);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Premium channel feature not supported for channel type " + arg1);
    throw error;
  }
};
export { allowChannelAccess };
export const permissionOverwritesForRoles = function permissionOverwritesForRoles(guildId, channelType, arr, arg3) {
  const _require = channelType;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const items = [];
  if (tmp) {
    const NONE = importAll(3994).NONE;
    let tmp6 = callback(channelType);
    if (!tmp6) {
      tmp6 = channelType === closure_22;
    }
    let addResult = NONE;
    if (tmp6) {
      let tmp4Result = tmp4(506);
      addResult = tmp4Result.add(NONE, constants.VIEW_CHANNEL);
    }
    let tmp11 = channelType === closure_21;
    if (!tmp11) {
      tmp11 = channelType === closure_22;
    }
    let addResult2 = addResult;
    if (tmp11) {
      tmp4Result = tmp4(506);
      const addResult1 = tmp4Result.add(addResult, constants.VIEW_CHANNEL);
      addResult2 = tmp4(506).add(addResult1, constants.CONNECT);
      const tmp4Result1 = tmp4(506);
    }
    const obj = { id: null, type: null, allow: null, deny: null };
    obj[0] = guildId;
    obj[1] = _PermissionOverwriteType.PermissionOverwriteType.ROLE;
    obj[2] = importAll(3994).NONE;
    obj[3] = addResult2;
    items.push(obj);
  }
  const item = arr.forEach((arg0) => {
    items.push(outer1_24(arg0, channelType, channelType(outer1_3[10]).PermissionOverwriteType.ROLE));
  });
  return items;
};
export const permissionOverwriteForUser = function permissionOverwriteForUser(id, channelType) {
  return allowChannelAccess(id, channelType, PermissionOverwriteType.PermissionOverwriteType.MEMBER);
};
export const permissionOverwriteForRole = function permissionOverwriteForRole(id, channelType) {
  return allowChannelAccess(id, channelType, PermissionOverwriteType.PermissionOverwriteType.ROLE);
};
export const permissionOverwritesForAnnouncement = function permissionOverwritesForAnnouncement(id) {
  const items = [{ id, type: PermissionOverwriteType.PermissionOverwriteType.ROLE, deny: constants.SEND_MESSAGES, allow: importAll(3994).NONE }];
  return items;
};
export const isChannelFull = function isChannelFull(channel, outer1_11, handleConnectionOpen) {
  const guildId = channel.getGuildId();
  const guild = handleConnectionOpen.getGuild(guildId);
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
  const result = getVoiceStatesForGuild.countVoiceStatesForChannel(channel.id);
  const voiceStatesForChannel = getVoiceStatesForGuild.getVoiceStatesForChannel(channel);
  const tmp6 = getUncachedChannelPermissions.can(constants.MOVE_MEMBERS, channel) && getUncachedChannelPermissions.can(constants.CONNECT, channel);
  if (channel.type === closure_23) {
    let tmp8 = null != guildId;
    if (tmp8) {
      let hasVideoResult = outer1_11.hasVideo(channel.id);
      if (!hasVideoResult) {
        hasVideoResult = hasStream.hasStream(voiceStatesForChannel);
        const obj2 = hasStream;
      }
      tmp8 = hasVideoResult;
    }
    if (tmp8) {
      tmp8 = num2 > 0;
    }
    if (tmp8) {
      tmp8 = result >= num2;
    }
    let tmp7 = tmp8;
  } else {
    tmp7 = null != guildId && outer1_11.hasVideo(channel.id);
    if (tmp7) {
      tmp7 = num > 0;
    }
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
export const sanitizeGuildTextChannelName = require("sanitizeGuildTextChannelName");
export const getBitrateLimit = function getBitrateLimit(guild, channel) {
  if (channel.isGuildStageVoice()) {
    let bound = closure_17;
  } else if (null == guild) {
    bound = closure_16;
  } else {
    const features = guild.features;
    if (features.has(constants2.VIP_REGIONS)) {
      let bitrate = BoostedGuildFeatures[TIER_3.TIER_3].limits.bitrate;
    } else {
      bitrate = closure_16;
    }
    bound = Math.max(bitrate, BoostedGuildFeatures[guild.premiumTier].limits.bitrate);
  }
  return bound;
};
export const computeSummarizedVoiceStates = function computeSummarizedVoiceStates(arg0) {
  let channels;
  let importAll;
  let importDefault;
  let require;
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  const item = channels.forEach((id) => {
    if (id.id !== closure_1) {
      if (id.id !== closure_0) {
        if (null != table[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = outer1_0(outer1_3[12]).getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === outer1_0(outer1_3[12]).RequestToSpeakStates.ON_STAGE) {
                arr = arr.push(voiceState);
              }
            });
          } else {
            const item1 = forEach((arg0) => arr.push(arg0));
          }
        }
      }
    }
  });
  return items;
};
export const computeSummarizedVoiceUsers = function computeSummarizedVoiceUsers(arg0) {
  let channels;
  let importAll;
  let importDefault;
  let require;
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  let item = channels.forEach((id) => {
    if (id.id !== closure_1) {
      if (id.id !== closure_0) {
        if (null != table[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = outer1_0(outer1_3[12]).getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === outer1_0(outer1_3[12]).RequestToSpeakStates.ON_STAGE) {
                arr = arr.push(voiceState);
              }
            });
          } else {
            const item1 = forEach((arg0) => arr.push(arg0));
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
      let tmp9 = nextResult;
      let tmp10 = stateFromStores[obj.id];
      if (null != tmp10) {
        let tmp12 = nextResult;
        if (obj.isGuildStageVoice()) {
          let tmp2 = tmp11;
          let tmp3 = tmp10;
          for (const item10017 of tmp10) {
            let tmp4 = require;
            let tmp5 = dependencyMap;
            let obj3 = useAudienceRequestToSpeakState;
            let audienceRequestToSpeakState = obj3.getAudienceRequestToSpeakState(item10017.voiceState);
            if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE) {
              let tmp7 = obj2;
              obj2.return();
              let tmp8 = iter;
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
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.jN2DfZ);
  } else if (tmp.GROUP_DM === type) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t["e5y+gm"]);
  } else if (tmp.GUILD_TEXT === type) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.Pnajj0);
  } else if (tmp.GUILD_FORUM === type) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.GbryDd);
  } else if (tmp.GUILD_MEDIA === type) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.seKITE);
  } else if (tmp.GUILD_VOICE === type) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.BVZqJl);
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.EErMzA);
  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.l1dkSD);
  } else if (tmp.GUILD_STORE === type) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["P1/Erq"]);
  } else if (tmp.GUILD_CATEGORY === type) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vHCZwr);
  } else {
    return null;
  }
};
export const getPrivateChannelUserTagsString = function getPrivateChannelUserTagsString(recipients, outer1_7) {
  if (null == recipients) {
    return null;
  } else {
    const currentUser = outer1_7.getCurrentUser();
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
          let tmp6 = nextResult;
          let user = outer1_7.getUser(tmp5);
          if (null != user) {
            let tmp9 = user;
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
          const obj = callback(table[14]);
          if (isProvisional.isProvisional) {
            let name = obj.getName(isProvisional);
          } else {
            name = obj.getUserTag(isProvisional);
          }
          return name;
        });
        const intl = getSystemLocale.intl;
        let obj = { users: null, user1: null, user2: null, extras: null };
        obj[0] = items.length;
        [obj[1], obj[2]] = mapped;
        obj[3] = items.length - mapped.length;
        return intl.formatToPlainString(getSystemLocale.t.BXG0Eh, obj);
      }
    }
  }
};
export const getMentionIconType = function getMentionIconType(channel) {
  if (null == channel) {
    return "text";
  } else {
    const isNSFWResult = channel.isNSFW();
    const isSpoilerChannelResult = channel.isSpoilerChannel();
    if (channel.type === ChannelTypes.GUILD_VOICE) {
      let str11 = "voice-locked";
      if (getUncachedChannelPermissions.can(constants.CONNECT, channel)) {
        let str12 = "voice-nsfw";
        if (!isNSFWResult) {
          let str13 = "voice";
          if (isSpoilerChannelResult) {
            str13 = "voice-spoiler";
          }
          str12 = str13;
        }
        str11 = str12;
      }
      let tmp2 = str11;
    } else if (channel.type === tmp11.GUILD_STAGE_VOICE) {
      let str10 = "stage-locked";
      if (getUncachedChannelPermissions.can(constants.CONNECT, channel)) {
        str10 = "stage";
      }
      tmp2 = str10;
    } else if (set2.has(channel.type)) {
      let str9 = "thread";
      if (channel.isForumPost()) {
        str9 = "post";
      }
      tmp2 = str9;
    } else if (channel.type === tmp11.GUILD_FORUM) {
      if (tmp10) {
        let str8 = "media";
        if (isNSFWResult) {
          str8 = "media-nsfw";
        }
        let str6 = str8;
      } else {
        str6 = "forum-nsfw";
        if (!isNSFWResult) {
          let str7 = "forum";
          if (isSpoilerChannelResult) {
            str7 = "forum-spoiler";
          }
          str6 = str7;
        }
      }
    } else if (channel.type === tmp11.GUILD_MEDIA) {
      let str5 = "media";
      if (isNSFWResult) {
        str5 = "media-nsfw";
      }
      tmp2 = str5;
    } else if (channel.type === tmp11.GUILD_ANNOUNCEMENT) {
      let str3 = "announcement-nsfw";
      if (!isNSFWResult) {
        let str4 = "announcement";
        if (isSpoilerChannelResult) {
          str4 = "announcement-spoiler";
        }
        str3 = str4;
      }
      tmp2 = str3;
    } else if (set.has(channel.type)) {
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
  channel = channel.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
  if (null != channel) {
    if (channel.getGuildId() === id) {
      if (channel.type === ChannelTypes.GUILD_TEXT) {
        id = channel.id;
      }
      return closure_18.CHANNEL(id, id);
    }
  }
  defaultChannel = defaultChannel.getDefaultChannel(id);
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
  return "" + location.protocol + "//" + location.host + closure_18.CHANNEL(guild_id, id, id2) + str;
};
export const getChannelThreadPermalink = function getChannelThreadPermalink(guildId, id, id2, result) {
  if (null != guildId) {
    if (null != id) {
      if (null != id2) {
        const _location = location;
        const _location2 = location;
        const _HermesInternal = HermesInternal;
        let combined = "" + protocol + "//" + host + closure_18.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
      }
      return combined;
    }
  }
  combined = "" + location.protocol + "//" + location.host + closure_18.CHANNEL(guildId, id, result) + "";
};
export const getChannelLinkToCopy = function getChannelLinkToCopy(channel, channel1) {
  const guildId = channel.getGuildId();
  if (null != channel1) {
    if (obj.canUseMediaPostEmbed(guildId, channel1)) {
      const id = channel1.id;
      const id2 = channel.id;
      const result = DISCORD_EPOCH.castChannelIdAsMessageId(channel.id);
      if (null != guildId) {
        if (null != id) {
          if (null != id2) {
            const _location3 = location;
            const _location4 = location;
            const _HermesInternal2 = HermesInternal;
            let combined = "" + protocol2 + "//" + host2 + closure_18.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
          }
        }
      }
      const _location5 = location;
      const _location6 = location;
      const _HermesInternal3 = HermesInternal;
      combined = "" + protocol3 + "//" + host3 + closure_18.CHANNEL(guildId, id, result) + "";
      const obj2 = DISCORD_EPOCH;
    }
  }
  let combined1 = arg3;
  if (arg3 == null) {
    const _location = location;
    const _location2 = location;
    const _HermesInternal = HermesInternal;
    combined1 = "" + protocol + "//" + host + closure_18.CHANNEL(guildId, channel.id, arg2) + "";
  }
  return combined1;
};
export const getChannelAnalyticsPage = function getChannelAnalyticsPage(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
      if (tmp.GUILD_TEXT !== type) {
        if (tmp.GUILD_FORUM !== type) {
          if (tmp.GUILD_MEDIA !== type) {
            if (tmp.GROUP_DM !== type) {
              if (tmp.DM !== type) {
                return null;
              }
            }
            return constants3.DM_CHANNEL;
          }
        }
      }
    }
    return constants3.GUILD_CHANNEL;
  }
};