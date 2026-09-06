// === Module 4705: ChannelUtils ===

// Module 4705 (ChannelUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import util from "util" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import Server from "Server" /* 1894 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ChannelListUtils from "ChannelListUtils" /* 4706 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4715 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function allowChannelAccess(id, channelType, ROLE) {
  const NONE = PermissionUtilsAll.NONE;
  let tmp3 = React4(channelType);
  if (!tmp3) {
    tmp3 = channelType === __initData2;
  }
  let addResult = NONE;
  if (tmp3) {
    let tmpResult = tmp(1086);
    addResult = tmpResult.add(NONE, constants.VIEW_CHANNEL);
  }
  let tmp7 = channelType === __initData;
  if (!tmp7) {
    tmp7 = channelType === __initData2;
  }
  if (!tmp7) {
    let tmp10 = channelType === __initData3;
    if (!tmp10) {
      tmp10 = channelType === __initData2;
    }
    tmp7 = tmp10;
  }
  let addResult2 = addResult;
  if (tmp7) {
    tmpResult = tmp(1086);
    const addResult1 = tmpResult.add(addResult, constants.VIEW_CHANNEL);
    addResult2 = tmp(1086).add(addResult1, constants.CONNECT);
    const tmpResult1 = tmp(1086);
  }
  return { id, type: ROLE, deny: PermissionUtilsAll.NONE, allow: addResult2 };
}
({ isGuildSelectableChannelType: closure_4, TEXT_CHANNEL_TYPES: hasOwnProperty, THREAD_CHANNEL_TYPES: metroRequire } = ChannelRecord);
const ChannelTypes = Constants.ChannelTypes;
({ Permissions: map1, GuildFeatures: closure_14, BoostedGuildTiers: closure_15, BITRATE_MAX: closure_16, BITRATE_DEFAULT: closure_17, Routes: closure_18, AnalyticsPages: closure_19 } = Constants);
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
({ GUILD_VOICE: closure_21, GUILD_CATEGORY: closure_22, GUILD_STAGE_VOICE: closure_23 } = ChannelTypes);
let result = size.fileFinishedImporting("utils/ChannelUtils.tsx");

export const denyChannelAccessForNonPaidUsers = function denyChannelAccessForNonPaidUsers(id, arg1) {
  if (arg1 === ChannelTypes.GUILD_STAGE_VOICE) {
    const obj = { id, type: Server.PermissionOverwriteType.ROLE, allow: PermissionUtilsAll.NONE, deny: null };
    obj.deny = obj.add(PermissionUtilsAll.NONE, constants.CONNECT);
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
  _require = channelType;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const items = [];
  if (tmp) {
    const NONE = PermissionUtilsAll.NONE;
    let tmp6 = closure_4(channelType);
    if (!tmp6) {
      tmp6 = channelType === closure_22;
    }
    let addResult = NONE;
    if (tmp6) {
      let tmp4Result = tmp4(1086);
      addResult = tmp4Result.add(NONE, constants.VIEW_CHANNEL);
    }
    let tmp11 = channelType === closure_21;
    if (!tmp11) {
      tmp11 = channelType === closure_22;
    }
    let addResult2 = addResult;
    if (tmp11) {
      tmp4Result = tmp4(1086);
      const addResult1 = tmp4Result.add(addResult, constants.VIEW_CHANNEL);
      addResult2 = tmp4(1086).add(addResult1, constants.CONNECT);
      const tmp4Result1 = tmp4(1086);
    }
    const obj = { id: guildId, type: require("Server").PermissionOverwriteType.ROLE, allow: PermissionUtilsAll.NONE, deny: addResult2 };
    items.push(obj);
  }
  const item = arr.forEach((item) => {
    items.push(allowChannelAccess(item, closure_0, Server.PermissionOverwriteType.ROLE));
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
  const items = [{ id, type: Server.PermissionOverwriteType.ROLE, deny: constants.SEND_MESSAGES, allow: PermissionUtilsAll.NONE }];
  return items;
};
export const isChannelFull = function isChannelFull(channel, VoiceStateStore, GuildStore) {
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
  const tmp6 = PermissionStore.can(constants.MOVE_MEMBERS, channel) && PermissionStore.can(constants.CONNECT, channel);
  if (channel.type === __initData3) {
    let tmp8 = null != guildId;
    if (tmp8) {
      let hasVideoResult = VoiceStateStore.hasVideo(channel.id);
      if (!hasVideoResult) {
        hasVideoResult = ChannelListUtils.hasStream(voiceStatesForChannel);
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
    tmp7 = null != guildId && VoiceStateStore.hasVideo(channel.id);
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
export const sanitizeGuildTextChannelName = sanitizeGuildTextChannelNameDefault;
export const getBitrateLimit = function getBitrateLimit(guild, channel) {
  if (channel.isGuildStageVoice()) {
    let bound = closure_1_17;
  } else if (null == guild) {
    bound = value2;
  } else {
    const features = guild.features;
    if (features.has(constants2.VIP_REGIONS)) {
      let bitrate = BoostedGuildFeatures[TIER_3.TIER_3].limits.bitrate;
    } else {
      bitrate = value2;
    }
    bound = Math.max(bitrate, BoostedGuildFeatures[guild.premiumTier].limits.bitrate);
  }
  return bound;
};
export const computeSummarizedVoiceStates = function computeSummarizedVoiceStates(arg0) {
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  const item = channels.forEach((id) => {
    if (id.id !== importDefault) {
      if (id.id !== _require) {
        if (null != importAll[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = require("useAudienceRequestToSpeakState").getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === require("useAudienceRequestToSpeakState").RequestToSpeakStates.ON_STAGE) {
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
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  let item = channels.forEach((id) => {
    if (id.id !== importDefault) {
      if (id.id !== _require) {
        if (null != importAll[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = require("useAudienceRequestToSpeakState").getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === require("useAudienceRequestToSpeakState").RequestToSpeakStates.ON_STAGE) {
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
    const intl13 = util.intl;
    return intl13.string(util.t.jN2DfZ);
  } else if (tmp.GROUP_DM === type) {
    const intl12 = util.intl;
    return intl12.string(util.t["e5y+gm"]);
  } else if (tmp.GUILD_TEXT === type) {
    const intl11 = util.intl;
    return intl11.string(util.t.Pnajj0);
  } else if (tmp.GUILD_FORUM === type) {
    const intl10 = util.intl;
    return intl10.string(util.t.GbryDd);
  } else if (tmp.GUILD_MEDIA === type) {
    const intl9 = util.intl;
    return intl9.string(util.t.seKITE);
  } else if (tmp.GUILD_VOICE === type) {
    const intl8 = util.intl;
    return intl8.string(util.t.BVZqJl);
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    const intl7 = util.intl;
    return intl7.string(util.t.EErMzA);
  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
    const intl6 = util.intl;
    return intl6.string(util.t.l1dkSD);
  } else if (tmp.GUILD_STORE === type) {
    const intl5 = util.intl;
    return intl5.string(util.t["P1/Erq"]);
  } else if (tmp.GUILD_CATEGORY === type) {
    const intl4 = util.intl;
    return intl4.string(util.t.vHCZwr);
  } else if (tmp.PRIVATE_THREAD === type) {
    const intl3 = util.intl;
    return intl3.string(util.t.F1zyvU);
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_APP === type) {
            const intl = util.intl;
            return intl.string(util.t.ZkcrC2);
          } else {
            if (tmp.GUILD_DIRECTORY !== type) {
              if (tmp.LOBBY !== type) {
                if (tmp.DM_SDK !== type) {
                  if (tmp.GUILD_SPACE !== type) {
                    const UNKNOWN = tmp.UNKNOWN;
                  }
                }
              }
            }
            return null;
          }
        }
      }
    }
    const intl2 = util.intl;
    return intl2.string(util.t["7Xm5QI"]);
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
          const obj = UserUtilsDefault;
          if (isProvisional.isProvisional) {
            let name = obj.getName(isProvisional);
          } else {
            name = obj.getUserTag(isProvisional);
          }
          return name;
        });
        const intl = util.intl;
        let obj = { users: items.length, user1: null, user2: null, extras: null };
        [obj.user1, obj.user2] = mapped;
        obj.extras = items.length - mapped.length;
        return intl.formatToPlainString(util.t.BXG0Eh, obj);
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
      let str13 = "voice-locked";
      if (PermissionStore.can(constants.CONNECT, channel)) {
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
      let tmp2 = str13;
    } else if (channel.type === tmp11.GUILD_STAGE_VOICE) {
      let str12 = "stage-locked";
      if (PermissionStore.can(constants.CONNECT, channel)) {
        str12 = "stage";
      }
      tmp2 = str12;
    } else if (set2.has(channel.type)) {
      let str11 = "thread";
      if (channel.isForumPost()) {
        str11 = "post";
      }
      tmp2 = str11;
    } else if (channel.type === tmp11.GUILD_FORUM) {
      if (tmp10) {
        let str10 = "media";
        if (isNSFWResult) {
          str10 = "media-nsfw";
        }
      } else {
        const str8 = "forum-nsfw";
        if (!isNSFWResult) {
          let str9 = "forum";
          if (isSpoilerChannelResult) {
            str9 = "forum-spoiler";
          }
        }
      }
    } else if (channel.type === tmp11.GUILD_MEDIA) {
      let str7 = "media";
      if (isNSFWResult) {
        str7 = "media-nsfw";
      }
      tmp2 = str7;
    } else if (channel.type === tmp11.GUILD_ANNOUNCEMENT) {
      let str5 = "announcement-nsfw";
      if (!isNSFWResult) {
        let str6 = "announcement";
        if (isSpoilerChannelResult) {
          str6 = "announcement-spoiler";
        }
        str5 = str6;
      }
      tmp2 = str5;
    } else if (channel.type === tmp11.GUILD_APP) {
      let str3 = "app-nsfw";
      if (!isNSFWResult) {
        let str4 = "app";
        if (isSpoilerChannelResult) {
          str4 = "app-spoiler";
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
  const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
  if (null != channel) {
    if (channel.getGuildId() === id) {
      if (channel.type === ChannelTypes.GUILD_TEXT) {
        id = channel.id;
      }
      return collapsedCategories.CHANNEL(id, id);
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
  return "" + location.protocol + "//" + location.host + collapsedCategories.CHANNEL(guild_id, id, id2) + str;
};
export const getChannelThreadPermalink = function getChannelThreadPermalink(guildId, id, id2, result) {
  if (null != guildId) {
    if (null != id) {
      if (null != id2) {
        const _location = location;
        const _location2 = location;
        const _HermesInternal = HermesInternal;
        let combined = "" + protocol + "//" + host + collapsedCategories.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
      }
      return combined;
    }
  }
  combined = "" + location.protocol + "//" + location.host + collapsedCategories.CHANNEL(guildId, id, result) + "";
};
export const getChannelLinkToCopy = function getChannelLinkToCopy(channel, channel1, arg2, arg3) {
  const guildId = channel.getGuildId();
  if (null != channel1) {
    if (obj.canUseMediaPostEmbed(guildId, channel1)) {
      const id = channel1.id;
      const id2 = channel.id;
      const result = SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id);
      if (null != guildId) {
        if (null != id) {
          if (null != id2) {
            const _location3 = location;
            const _location4 = location;
            const _HermesInternal2 = HermesInternal;
            let combined = "" + protocol2 + "//" + host2 + collapsedCategories.CHANNEL_THREAD_VIEW(guildId, id, id2, result);
          }
        }
      }
      const _location5 = location;
      const _location6 = location;
      const _HermesInternal3 = HermesInternal;
      combined = "" + protocol3 + "//" + host3 + collapsedCategories.CHANNEL(guildId, id, result) + "";
    }
  }
  let combined1 = arg3;
  if (arg3 == null) {
    const _location = location;
    const _location2 = location;
    const _HermesInternal = HermesInternal;
    combined1 = "" + protocol + "//" + host + collapsedCategories.CHANNEL(guildId, channel.id, arg2) + "";
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
            if (tmp.GUILD_APP !== type) {
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
    }
    return constants3.GUILD_CHANNEL;
  }
};