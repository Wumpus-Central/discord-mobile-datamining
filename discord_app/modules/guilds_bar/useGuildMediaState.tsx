// discord_app/modules/guilds_bar/useGuildMediaState.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import BlockedUserUtils from "../blocking/BlockedUserUtils.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

require = fn;
function canConnectToChannel(type, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = PermissionStore;
  }
  let canBasicChannelResult = null != type;
  if (canBasicChannelResult) {
    canBasicChannelResult = type.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = arg1 !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
const isVoiceChannel = fn(1961).isVoiceChannel;
const BasicPermissions = fn(1074).BasicPermissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default function useGuildMediaState(guild_id) {
  _require = guild_id;
  let items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    UserGuildSettingsStore.isMuted(closure_0),
  );
  let obj = require("initialize");
  isDontBadgeMutedVcsEnabled =
    require("DontBadgeMutedVcsExperiment").useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  let obj2 = require("DontBadgeMutedVcsExperiment");
  const guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(guild_id);
  const obj3 = require("useGuildScheduledEvents");
  const items1 = [guildActiveEvent, selectedVoiceChannelHasVideo, RelationshipStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((location) => {
      basicChannel = basicChannel.getBasicChannel(
        guild_id(isDontBadgeMutedVcsEnabled[17]).getEmbeddedActivityLocationChannelId(location.location),
      );
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      if (type === guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_SPACE) {
        return false;
      } else {
        blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
        const items = [];
        HermesBuiltin.arraySpread(location.userIds, 0);
        return !tmp(tmp2[18]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
      }
      const obj = guild_id(isDontBadgeMutedVcsEnabled[17]);
    });
  });
  const obj4 = require("initialize");
  const first = stateFromStoresArray[0];
  let _location;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId =
    require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(_location);
  let tmpResult = tmp(tmp2[19]);
  const isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  tmpResult = tmp(tmp2[14]);
  const items2 = [
    SelectedChannelStore,
    VoiceStateStore,
    id,
    PermissionStore,
    selectedVoiceChannelHasVideo,
    UserGuildSettingsStore,
  ];
  const items3 = [guild_id, stateFromStores, isDontBadgeMutedVcsEnabled];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(
    items2,
    () => {
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const guild = id.getGuild(afkChannelId);
      afkChannelId = undefined;
      if (guild != null) {
        afkChannelId = guild.afkChannelId;
      }
      dependencyMap = authStore.getUsersWithVideo(tmp3);
      let obj = guild_id(isDontBadgeMutedVcsEnabled[18]);
      const result = obj.filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
      isDontBadgeMutedVcsEnabled = result;
      let flag = false;
      if (!dependencyMap) {
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
              let obj2 = PermissionStore;
              if (PermissionStore !== undefined) {
                let canBasicChannelResult = null != basicChannel;
                if (canBasicChannelResult) {
                  canBasicChannelResult =
                    basicChannel.type !== guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
                }
                if (canBasicChannelResult) {
                  canBasicChannelResult = tmp12 !== basicChannel.id;
                }
                if (canBasicChannelResult) {
                  canBasicChannelResult = obj2.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
                }
                if (!canBasicChannelResult) {
                  continue;
                } else {
                  flag = true;
                  if (!isDontBadgeMutedVcsEnabled) {
                    break;
                  } else {
                    flag = true;
                    if (!UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(afkChannelId, channelId)) {
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
          if (stateFromStores) {
            return false;
          } else {
            const obj = dependencyMap[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp8 = result[tmp5];
              let channelId;
              if (tmp8 != null) {
                channelId = tmp8.channelId;
              }
              let tmp10 = channelId;
              if (null != channelId) {
                let tmp11 = canConnectToChannel;
                let tmp15 = afkChannelId;
                let basicChannel = ChannelStore.getBasicChannel(tmp10);
                if (tmp11(basicChannel, tmp15, PermissionStore)) {
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
        selectedVoiceChannelHasVideo: null,
      };
      let hasVideoResult = null != voiceChannelId;
      if (hasVideoResult) {
        hasVideoResult = authStore.hasVideo(voiceChannelId);
      }
      obj.selectedVoiceChannelHasVideo = hasVideoResult;
      return obj;
    },
    items3,
  );
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = guildHasVideo.getId();
  let obj5 = require("embeddedActivityLocationUtils");
  const items4 = [
    SelectedChannelStore,
    selectedVoiceChannelHasVideo,
    stateFromStoresArray,
    guildHasVoice,
    PermissionStore,
    UserGuildSettingsStore,
  ];
  const items5 = [
    guild_id,
    stateFromStores,
    selectedVoiceChannelHasVideo,
    id,
    isActivitiesInTextEnabled,
    stateFromStoresArray,
    guildActiveEvent,
    guildHasVoice,
    guildHasVideo,
    isDontBadgeMutedVcsEnabled,
  ];
  return require("initialize").useStateFromStoresObject(
    items4,
    () => {
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let obj = ChannelStore;
      let channel = ChannelStore.getChannel(voiceChannelId);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp5 = guild_id === closure_0;
      if (!tmp5) {
        if (stateFromStores) {
          return {
            audio: false,
            video: false,
            screenshare: false,
            liveStage: false,
            activeEvent: false,
            activity: false,
            isCurrentUserConnected: false,
          };
        }
      }
      const keys = SnowflakeUtilsDefault.keys(StageInstanceStore.getStageInstancesByGuild(tmp4));
      let tmp9 = tmp5;
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
        tmp10 = null != ApplicationStreamingStore.getActiveStreamForUser(id, tmp4);
      }
      const someResult = keys.some((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let tmp2 = null != basicChannel;
        if (tmp2) {
          tmp2 = stateFromStores(isDontBadgeMutedVcsEnabled[21])(basicChannel, closure_1_10);
        }
        return tmp2;
      });
      let result = BlockedUserUtils.filterOutStreamsByBlockedOwner(
        ApplicationStreamingStore.getAllApplicationStreams(),
      );
      let tmp14 = (() => {
        if (closure_1_5) {
          return arr.length > 0;
        } else {
          const obj = arr[Symbol.iterator]();
          while (obj !== undefined) {
            let obj2 = closure_0(isDontBadgeMutedVcsEnabled[17]);
            let channel = selectedVoiceChannelHasVideo.getChannel(
              obj2.getEmbeddedActivityLocationChannelId(tmp4.location),
            );
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
      obj = {
        audio: flag2,
        video: tmp18,
        screenshare: tmp19,
        liveStage: tmp20,
        activeEvent: tmp17,
        activity: tmp14,
        isCurrentUserConnected: null,
      };
      if (!tmp5) {
        tmp5 = tmp9;
      }
      obj.isCurrentUserConnected = tmp5;
      return obj;
    },
    items5,
  );
}
