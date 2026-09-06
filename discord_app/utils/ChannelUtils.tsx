// === Module 4705: allowChannelAccess ===

// Module 4705 (allowChannelAccess)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import fromStringAll from "fromString" /* 1086 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1894 */;
import applyOverwritesAll from "applyOverwrites" /* 4204 */;
import hasStream from "hasStream" /* 4706 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4715 */;
import createChannelRecord from "createChannelRecord" /* 1961 */;
import closure_7 from "ensureGuildLoaded" /* 1957 */;
import closure_8 from "comparator" /* 2012 */;
import closure_9 from "getUncachedChannelPermissions" /* 4199 */;
import closure_10 from "handleConnectionOpen" /* 2011 */;
import closure_11 from "getVoiceStatesForGuild" /* 4584 */;
import ME from "ME" /* 1074 */;

function allowChannelAccess(id, channelType, MEMBER) {
  const NONE = applyOverwritesAll.NONE;
  let tmp3 = callback(channelType);
  if (!tmp3) {
    tmp3 = channelType === closure_22;
  }
  let addResult = NONE;
  if (tmp3) {
    let tmpResult = tmp(1086);
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
    tmpResult = tmp(1086);
    const addResult1 = tmpResult.add(addResult, constants.VIEW_CHANNEL);
    addResult2 = tmp(1086).add(addResult1, constants.CONNECT);
    const tmpResult1 = tmp(1086);
  }
  return { id, type: MEMBER, deny: applyOverwritesAll.NONE, allow: addResult2 };
}
({ isGuildSelectableChannelType: c4, TEXT_CHANNEL_TYPES: c5, THREAD_CHANNEL_TYPES: closure_6 } = createChannelRecord);
const ChannelTypes = ME.ChannelTypes;
({ Permissions: map1, GuildFeatures: closure_14, BoostedGuildTiers: closure_15, BITRATE_MAX: closure_16, BITRATE_DEFAULT: closure_17, Routes: closure_18, AnalyticsPages: closure_19 } = ME);
const BoostedGuildFeatures = GuildFeatures.BoostedGuildFeatures;
({ GUILD_VOICE: closure_21, GUILD_CATEGORY: closure_22, GUILD_STAGE_VOICE: closure_23 } = ChannelTypes);
let result = set.fileFinishedImporting("utils/ChannelUtils.tsx");

export const denyChannelAccessForNonPaidUsers = function denyChannelAccessForNonPaidUsers(arg0, arg1) {
  if (arg1 === ChannelTypes.GUILD_STAGE_VOICE) {
    let obj = fromStringAll;
    obj = { id: null, type: null, allow: null, deny: null };
    obj[0] = arg0;
    obj[1] = PermissionOverwriteType.PermissionOverwriteType.ROLE;
    obj[2] = applyOverwritesAll.NONE;
    obj[3] = obj.add(applyOverwritesAll.NONE, constants.CONNECT);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Premium channel feature not supported for channel type " + arg1);
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
    const NONE = applyOverwritesAll.NONE;
    let tmp6 = callback(channelType);
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
    const obj = { id: null, type: null, allow: null, deny: null };
    obj[0] = guildId;
    obj[1] = _require(1894).PermissionOverwriteType.ROLE;
    obj[2] = applyOverwritesAll.NONE;
    obj[3] = addResult2;
    items.push(obj);
  }
  const item = arr.forEach((arg0) => {
    items.push(closure_1_24(arg0, channelType, channelType(closure_1_3[10]).PermissionOverwriteType.ROLE));
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
  const items = [{ id, type: PermissionOverwriteType.PermissionOverwriteType.ROLE, deny: constants.SEND_MESSAGES, allow: applyOverwritesAll.NONE }];
  return items;
};
export const isChannelFull = function isChannelFull(channel, closure_1_11, closure_10) {
  const guildId = channel.getGuildId();
  const guild = closure_10.getGuild(guildId);
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
  const result = closure_11.countVoiceStatesForChannel(channel.id);
  const voiceStatesForChannel = closure_11.getVoiceStatesForChannel(channel);
  const tmp6 = closure_9.can(constants.MOVE_MEMBERS, channel) && closure_9.can(constants.CONNECT, channel);
  if (channel.type === closure_23) {
    let tmp8 = null != guildId;
    if (tmp8) {
      let hasVideoResult = closure_1_11.hasVideo(channel.id);
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
    tmp7 = null != guildId && closure_1_11.hasVideo(channel.id);
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
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  const item = channels.forEach((id) => {
    if (id.id !== closure_1) {
      if (id.id !== closure_0) {
        if (null != table[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = closure_1_0(closure_1_3[12]).getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === closure_1_0(closure_1_3[12]).RequestToSpeakStates.ON_STAGE) {
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
  ({ channels, selectedChannelId: require, selectedVoiceChannelId: importDefault, voiceStates: importAll } = arg0);
  const items = [];
  let item = channels.forEach((id) => {
    if (id.id !== closure_1) {
      if (id.id !== closure_0) {
        if (null != table[id.id]) {
          const forEach = arr.forEach;
          if (id.isGuildStageVoice()) {
            const item = forEach((voiceState) => {
              const audienceRequestToSpeakState = closure_1_0(closure_1_3[12]).getAudienceRequestToSpeakState(voiceState.voiceState);
              if (audienceRequestToSpeakState === closure_1_0(closure_1_3[12]).RequestToSpeakStates.ON_STAGE) {
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
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.jN2DfZ);
  } else if (tmp.GROUP_DM === type) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t["e5y+gm"]);
  } else if (tmp.GUILD_TEXT === type) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.Pnajj0);
  } else if (tmp.GUILD_FORUM === type) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.GbryDd);
  } else if (tmp.GUILD_MEDIA === type) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.seKITE);
  } else if (tmp.GUILD_VOICE === type) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.BVZqJl);
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.EErMzA);
  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.l1dkSD);
  } else if (tmp.GUILD_STORE === type) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["P1/Erq"]);
  } else if (tmp.GUILD_CATEGORY === type) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.vHCZwr);
  } else if (tmp.PRIVATE_THREAD === type) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.F1zyvU);
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_APP === type) {
            const intl = getSystemLocale.intl;
            return intl.string(getSystemLocale.t.ZkcrC2);
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
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["7Xm5QI"]);
  }
};
export const getPrivateChannelUserTagsString = function getPrivateChannelUserTagsString(recipients, closure_1_7) {
  if (null == recipients) {
    return null;
  } else {
    const currentUser = closure_1_7.getCurrentUser();
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
          let user = closure_1_7.getUser(tmp5);
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
      let str13 = "voice-locked";
      if (closure_9.can(constants.CONNECT, channel)) {
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
      if (closure_9.can(constants.CONNECT, channel)) {
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
        let str8 = str10;
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
      const result = DISCORD_EPOCHDefault.castChannelIdAsMessageId(channel.id);
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
      const obj2 = DISCORD_EPOCHDefault;
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