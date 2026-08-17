// discord_app/modules/guilds_bar/useGuildMediaState.tsx
import set from "set" /* 692 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import { isVoiceChannel } from "createChannelRecord" /* 1395 */;
import closure_6 from "reset" /* 4652 */;
import closure_7 from "fetchFingerprint" /* 1218 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "getUncachedChannelPermissions" /* 4021 */;
import closure_11 from "markAllUserIdListsStale" /* 4030 */;
import closure_12 from "handleConnectionOpen" /* 1979 */;
import closure_13 from "updateUserGuildSettingsInternal" /* 5043 */;
import closure_14 from "updateVoiceState" /* 4542 */;
import { BasicPermissions } from "ME" /* 676 */;

require = arg1;
function canConnectToChannel(type) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = closure_10;
  }
  let canBasicChannelResult = null != type;
  if (canBasicChannelResult) {
    canBasicChannelResult = type.type !== set.ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = arg1 !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
let result = require("set").fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default function useGuildMediaState(guild_id) {
  const _require = guild_id;
  let items = [closure_13];
  const stateFromStores = _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStores(items, () => closure_1_13.isMuted(closure_0));
  let obj = _require(isDontBadgeMutedVcsEnabled[14]);
  isDontBadgeMutedVcsEnabled = _require(isDontBadgeMutedVcsEnabled[15]).useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  let obj2 = _require(isDontBadgeMutedVcsEnabled[15]);
  const guildActiveEvent = _require(isDontBadgeMutedVcsEnabled[16]).useGuildActiveEvent(guild_id);
  const obj3 = _require(isDontBadgeMutedVcsEnabled[16]);
  const items1 = [guildActiveEvent, closure_11];
  const stateFromStoresArray = _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = guildActiveEvent.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((userIds) => {
      const items = [...userIds.userIds];
      return !callback(table[17]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
    });
  });
  const obj4 = _require(isDontBadgeMutedVcsEnabled[14]);
  let tmp7 = guildActiveEvent;
  const first = stateFromStoresArray[0];
  let _location;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = _require(isDontBadgeMutedVcsEnabled[18]).getEmbeddedActivityLocationChannelId(_location);
  let tmpResult = tmp(tmp2[19]);
  const isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  tmpResult = tmp(tmp2[14]);
  const items2 = [closure_12, closure_14, id, closure_10, selectedVoiceChannelHasVideo, closure_13];
  const items3 = [guild_id, stateFromStores, isDontBadgeMutedVcsEnabled];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items2, () => {
    const voiceChannelId = closure_1_12.getVoiceChannelId();
    const guild = id.getGuild(afkChannelId);
    afkChannelId = undefined;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    const usersWithVideo = closure_1_14.getUsersWithVideo(tmp3);
    let obj = guild_id(isDontBadgeMutedVcsEnabled[17]);
    const result = obj.filterBlockedUsersFromVoiceStates(closure_1_14.getVoiceStates(tmp3));
    isDontBadgeMutedVcsEnabled = result;
    let flag = false;
    if (!usersWithVideo) {
      flag = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag = false;
        while (keys[tmp] !== undefined) {
          let tmp22 = tmp9;
          let channelId = result[tmp9].channelId;
          if (null == channelId) {
            continue;
          } else {
            let tmp10 = selectedVoiceChannelHasVideo;
            let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            let tmp12 = afkChannelId;
            let obj2 = closure_1_10;
            if (closure_1_10 !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                let tmp14 = guild_id;
                let tmp15 = isDontBadgeMutedVcsEnabled;
                canBasicChannelResult = basicChannel.type !== guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
              }
              if (canBasicChannelResult) {
                canBasicChannelResult = tmp12 !== basicChannel.id;
              }
              if (canBasicChannelResult) {
                let tmp16 = closure_1_15;
                canBasicChannelResult = obj2.canBasicChannel(closure_1_15.VIEW_CHANNEL, basicChannel);
              }
              if (!canBasicChannelResult) {
                continue;
              } else {
                let tmp17 = isDontBadgeMutedVcsEnabled;
                flag = true;
                if (!isDontBadgeMutedVcsEnabled) {
                  break;
                } else {
                  let tmp18 = closure_1_13;
                  let tmp19 = afkChannelId;
                  flag = true;
                  if (!closure_1_13.isGuildOrCategoryOrChannelMuted(afkChannelId, channelId)) {
                    break;
                  }
                }
              }
              break;
            }
          }
          continue;
        }
      }
    }
    obj = {
      guildHasVoice: flag,
      guildHasVideo: (() => {
        if (dependencyMap) {
          return false;
        } else {
          const obj = dependencyMap[Symbol.iterator]();
          while (obj !== undefined) {
            let tmp7 = table;
            let tmp8 = table[tmp5];
            let channelId;
            if (tmp8 != null) {
              channelId = tmp8.channelId;
            }
            let tmp10 = channelId;
            if (null != channelId) {
              let tmp12 = selectedVoiceChannelHasVideo;
              let tmp13 = channelId;
              let tmp11 = closure_2_16;
              let tmp15 = afkChannelId;
              let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(tmp10);
              let tmp16 = closure_2_10;
              if (tmp11(basicChannel, tmp15, closure_2_10)) {
                let tmp17 = result;
                if (result) {
                  let tmp18 = closure_2_13;
                  let tmp19 = afkChannelId;
                  let tmp20 = channelId;
                }
                let tmp21 = obj;
                obj.return();
                let flag = true;
                return true;
              }
            }
            continue;
          }
          return false;
        }
      })(),
      selectedVoiceChannelHasVideo: null
    };
    let hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
    }
    obj[2] = hasVideoResult;
    return obj;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = guildHasVideo.getId();
  let obj5 = _require(isDontBadgeMutedVcsEnabled[18]);
  const items4 = [closure_12, selectedVoiceChannelHasVideo, tmp7, stateFromStoresArray, guildHasVoice, closure_10, closure_13];
  const items5 = [guild_id, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo, isDontBadgeMutedVcsEnabled];
  return _require(isDontBadgeMutedVcsEnabled[14]).useStateFromStoresObject(items4, () => {
    const voiceChannelId = closure_1_12.getVoiceChannelId();
    let obj = selectedVoiceChannelHasVideo;
    let channel = selectedVoiceChannelHasVideo.getChannel(voiceChannelId);
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp5 = guild_id === guild_id;
    if (!tmp5) {
      if (stateFromStores) {
        return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
      }
    }
    const keys = stateFromStores(isDontBadgeMutedVcsEnabled[20]).keys(stateFromStoresArray.getStageInstancesByGuild(tmp4));
    let tmp9 = tmp5;
    let obj2 = stateFromStores(isDontBadgeMutedVcsEnabled[20]);
    let tmp7 = isDontBadgeMutedVcsEnabled;
    if (tmp5) {
      const channel1 = obj.getChannel(voiceChannelId);
      let flag;
      if (channel1 != null) {
        flag = channel1.isGuildStageVoice();
      }
      if (flag == null) {
        flag = false;
      }
      tmp9 = flag;
    }
    let tmp10 = tmp5;
    if (tmp10) {
      tmp10 = null != guildHasVoice.getActiveStreamForUser(id, tmp4);
    }
    const someResult = keys.some((arg0) => {
      basicChannel = basicChannel.getBasicChannel(arg0);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = callback(table[21])(basicChannel, closure_10);
      }
      return tmp2;
    });
    let result = guild_id(tmp7[17]).filterOutStreamsByBlockedOwner(guildHasVoice.getAllApplicationStreams());
    const obj5 = guild_id(tmp7[17]);
    let tmp14 = (() => {
      if (closure_5) {
        return arr.length > 0;
      } else {
        const obj = arr[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp6 = closure_1_8;
          let tmp7 = closure_1_0;
          let tmp8 = closure_1_2;
          let obj2 = closure_1_0(closure_1_2[18]);
          let channel = closure_1_8.getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
          if (null != channel) {
            let tmp11 = closure_1_5;
            let tmp12 = channel;
            if (closure_1_5(tmp10.type)) {
              let tmp13 = obj;
              obj.return();
              let flag = true;
              return true;
            }
          }
          continue;
        }
        return false;
      }
    })();
    if (tmp5) {
      let channel_id;
      if (guildActiveEvent != null) {
        channel_id = guildActiveEvent.channel_id;
      }
      let tmp22 = tmp5;
      if (tmp5) {
        tmp22 = selectedVoiceChannelHasVideo;
      }
      let tmp17 = channel_id === voiceChannelId;
      let flag2 = true;
      let tmp18 = tmp22;
      tmp14 = tmp15;
      let tmp19 = tmp10;
      let tmp20 = tmp9;
    } else {
      flag2 = guildHasVoice;
      tmp17 = null != guildActiveEvent;
      tmp18 = guildHasVideo;
      tmp19 = someResult1;
      tmp20 = someResult;
    }
    obj = { audio: flag2, video: tmp18, screenshare: tmp19, liveStage: tmp20, activeEvent: tmp17, activity: tmp14, isCurrentUserConnected: null };
    if (!tmp5) {
      tmp5 = tmp9;
    }
    obj[6] = tmp5;
    return obj;
  }, items5);
};