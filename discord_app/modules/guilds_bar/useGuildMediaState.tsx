// discord_app/modules/guilds_bar/useGuildMediaState.tsx
import set from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import participantFromServer from "../activities/EmbeddedActivitiesStore.tsx";
import handleStageInstanceCreateOrUpdate from "../stage_channels/StageInstanceStore.tsx";
import { isVoiceChannel } from "../../records/ChannelRecord.tsx";
import reset from "../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import updateVoiceState from "../../stores/VoiceStateStore.tsx";
import { BasicPermissions } from "../../Constants.tsx";

require = fn;
function canConnectToChannel(type, afkChannelId, closure_2_10) {
  let obj = closure_2_10;
  if (closure_2_10 === undefined) {
    obj = closure_10;
  }
  let canBasicChannelResult = null != type;
  if (canBasicChannelResult) {
    canBasicChannelResult = type.type !== set.ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = afkChannelId !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

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
    return embeddedActivitiesForGuild.filter((item, index) => {
      const items = [...item.userIds];
      return !callback(table[17]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
    });
  });
  const obj4 = _require(isDontBadgeMutedVcsEnabled[14]);
  const tmp7 = guildActiveEvent;
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
          let channelId = result[tmp9].channelId;
          if (null == channelId) {
            continue;
          } else {
            let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            let tmp12 = afkChannelId;
            if (closure_1_10 !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                canBasicChannelResult = basicChannel.type !== guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
              }
              if (canBasicChannelResult) {
                canBasicChannelResult = tmp12 !== basicChannel.id;
              }
              if (canBasicChannelResult) {
                canBasicChannelResult = closure_1_10.canBasicChannel(BasicPermissions.VIEW_CHANNEL, basicChannel);
              }
              if (!canBasicChannelResult) {
                continue;
              } else {
                flag = true;
                if (!isDontBadgeMutedVcsEnabled) {
                  break;
                } else {
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
            let tmp8 = table[tmp5];
            let channelId;
            if (tmp8 != null) {
              channelId = tmp8.channelId;
            }
            let tmp10 = channelId;
            if (null != channelId) {
              let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(tmp10);
              if (canConnectToChannel(basicChannel, afkChannelId, closure_2_10)) {
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
    const someResult = keys.some((item, index) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = callback(table[21])(basicChannel, closure_10);
      }
      return tmp2;
    });
    let result = guild_id(isDontBadgeMutedVcsEnabled[17]).filterOutStreamsByBlockedOwner(guildHasVoice.getAllApplicationStreams());
    const obj5 = guild_id(isDontBadgeMutedVcsEnabled[17]);
    let tmp14 = (() => {
      if (closure_5) {
        return lib.length > 0;
      } else {
        const obj = lib[Symbol.iterator]();
        while (obj !== undefined) {
          let obj2 = guild_id(isDontBadgeMutedVcsEnabled[18]);
          let channel = selectedVoiceChannelHasVideo.getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
          if (null != channel) {
            if (isActivitiesInTextEnabled(tmp10.type)) {
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