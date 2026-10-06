// discord_app/modules/guilds_bar/useGuildMediaState.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
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
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, blockedOrIgnoredIDs, closure_2, getBasicChannel, obj1, tmp15, tmp16, tmp21, tmp3, voiceChannelId;

function canConnectToChannel(type, afkChannelId) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const canBasicChannelResult =
    null != type &&
    type.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE &&
    afkChannelId !== type.id &&
    obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
}
const isVoiceChannel = ChannelRecord.isVoiceChannel;
const BasicPermissions = Constants.BasicPermissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let isDontBadgeMutedVcsEnabled;
      let tmp10;
      let tmp14;
      let tmp17;
      _require = arg0;
      const tmp = _require;
      let tmp2 = isDontBadgeMutedVcsEnabled;
      let obj = require("react");
      const cResult = obj.c(27);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
        cResult[1] = arg0;
        cResult[2] = V;
      } else {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      const tmpResult = tmp(tmp2[16]);
      const stateFromStores = tmpResult.useStateFromStores(first, V);
      const tmpResult5 = tmp(tmp2[17]);
      isDontBadgeMutedVcsEnabled = tmpResult5.useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
      const tmpResult6 = tmp(tmp2[18]);
      const guildActiveEvent = tmpResult6.useGuildActiveEvent(arg0);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
        const items1 = [guildActiveEvent, ChannelStore, RelationshipStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      if (cResult[4] !== arg0) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
        cResult[4] = arg0;
        cResult[5] = tmp14;
      } else {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      const tmpResult7 = tmp(tmp2[16]);
      const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp10, tmp14);
      if (stateFromStoresArray[0] != null) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      if (cResult[6] !== undefined) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
        const embeddedActivityLocationChannelId = obj6.getEmbeddedActivityLocationChannelId(tmp16);
        cResult[6] = undefined;
        cResult[7] = embeddedActivityLocationChannelId;
        tmp17 = embeddedActivityLocationChannelId;
      } else {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      const tmpResult8 = tmp(tmp2[21]);
      const isActivitiesInTextEnabled = tmpResult8.useIsActivitiesInTextEnabled(tmp17);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
        const items2 = [
          SelectedChannelStore,
          VoiceStateStore,
          GuildStore,
          PermissionStore,
          ChannelStore,
          UserGuildSettingsStore,
        ];
        cResult[8] = items2;
        let tmp20 = items2;
      } else {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      if (cResult[9] === arg0) {
        class V {
          constructor() {
            return closure_13.isMuted(closure_0);
          }
        }
      }
      class M {
        constructor() {
          voiceChannelId = closure_1_12.getVoiceChannelId();
          tmp3 = afkChannelId;
          guild = closure_9.getGuild(afkChannelId);
          afkChannelId = undefined;
          if (guild != null) {
            afkChannelId = guild.afkChannelId;
          }
          closure_1 = closure_1_14.getUsersWithVideo(tmp3);
          obj = closure_0(closure_2[20]);
          result = obj.filterBlockedUsersFromVoiceStates(closure_1_14.getVoiceStates(tmp3));
          closure_2 = result;
          flag = false;
          if (!closure_1) {
            tmp7 = result;
            flag = false;
            keys = Object.keys();
            if (keys !== undefined) {
              flag = false;
              tmp9 = keys[tmp];
              while (tmp9 !== undefined) {
                tmp22 = tmp9;
                channelId = result[tmp9].channelId;
                if (null == channelId) {
                  continue;
                } else {
                  tmp10 = closure_8;
                  basicChannel = closure_8.getBasicChannel(channelId);
                  tmp12 = afkChannelId;
                  obj2 = closure_1_10;
                  if (closure_1_10 !== undefined) {
                    canBasicChannelResult = null != basicChannel;
                    if (canBasicChannelResult) {
                      tmp14 = closure_0;
                      tmp15 = closure_2;
                      canBasicChannelResult =
                        basicChannel.type !== closure_0(closure_2[13]).ChannelTypes.GUILD_STAGE_VOICE;
                    }
                    if (canBasicChannelResult) {
                      canBasicChannelResult = tmp12 !== basicChannel.id;
                    }
                    if (canBasicChannelResult) {
                      tmp16 = closure_1_15;
                      canBasicChannelResult = obj2.canBasicChannel(closure_1_15.VIEW_CHANNEL, basicChannel);
                    }
                    if (!canBasicChannelResult) {
                      continue;
                    } else {
                      tmp17 = closure_2;
                      flag = true;
                      if (!closure_2) {
                        break;
                      } else {
                        tmp18 = closure_1_13;
                        tmp19 = afkChannelId;
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
          obj1 = {
            guildHasVoice: flag,
            guildHasVideo: (() => {
              /* body not rendered: F145965 */
            })(),
            selectedVoiceChannelHasVideo: null,
          };
          hasVideoResult = null != voiceChannelId;
          if (hasVideoResult) {
            tmp21 = closure_1_14;
            hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
          }
          obj1.selectedVoiceChannelHasVideo = hasVideoResult;
          return obj1;
        }
      }
      const items3 = [arg0, stateFromStores, isDontBadgeMutedVcsEnabled];
      cResult[9] = arg0;
      cResult[10] = stateFromStores;
      cResult[11] = isDontBadgeMutedVcsEnabled;
      cResult[12] = M;
      cResult[13] = items3;
    }
  : (arg0) => {
      let closure_0;
      let id;
      let isDontBadgeMutedVcsEnabled;
      let selectedVoiceChannelHasVideo;
      _require = arg0;
      const tmp = _require;
      let tmp2 = isDontBadgeMutedVcsEnabled;
      let obj = require("get initialized");
      let items = [UserGuildSettingsStore];
      const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isMuted(closure_0));
      let obj2 = require("DontBadgeMutedVcsExperiment");
      isDontBadgeMutedVcsEnabled = obj2.useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
      let obj3 = require("useGuildScheduledEvents");
      const guildActiveEvent = obj3.useGuildActiveEvent(arg0);
      const items1 = [guildActiveEvent, ,];
      const tmp7 = selectedVoiceChannelHasVideo;
      items1[1] = selectedVoiceChannelHasVideo;
      items1[2] = RelationshipStore;
      const obj4 = require("get initialized");
      const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => {
        const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(isDontBadgeMutedVcsEnabled[19]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(isDontBadgeMutedVcsEnabled[20]).hasBlockedOrIgnoredUserIds;
            closure_1_0(isDontBadgeMutedVcsEnabled[20]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      });
      let tmp9 = require("embeddedActivityLocationUtils");
      const first = stateFromStoresArray[0];
      let _location;
      const getEmbeddedActivityLocationChannelId = tmp9.getEmbeddedActivityLocationChannelId;
      if (first != null) {
        _location = first.location;
      }
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
      const tmpResult = tmp(tmp2[21]);
      const isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
      const items2 = [SelectedChannelStore, VoiceStateStore, id, PermissionStore, tmp7, UserGuildSettingsStore];
      const items3 = [arg0, stateFromStores, isDontBadgeMutedVcsEnabled];
      const tmpResult3 = tmp(tmp2[16]);
      const stateFromStoresObject = tmpResult3.useStateFromStoresObject(
        items2,
        () => {
          let afkChannelId;
          let closure_1;
          let hasVideoResult;
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          const guild = id.getGuild(afkChannelId);
          afkChannelId = undefined;
          if (guild != null) {
            afkChannelId = guild.afkChannelId;
          }
          const usersWithVideo = authStore.getUsersWithVideo(tmp3);
          let obj = closure_0(isDontBadgeMutedVcsEnabled[20]);
          const result = obj.filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
          isDontBadgeMutedVcsEnabled = result;
          let flag = false;
          if (!usersWithVideo) {
            flag = false;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag = false;
              let tmp9 = keys[tmp];
              while (tmp9 !== undefined) {
                let tmp22 = tmp9;
                let channelId = result[tmp9].channelId;
                if (null == channelId) {
                  continue;
                } else {
                  let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
                  let tmp12 = afkChannelId;
                  if (PermissionStore !== undefined) {
                    let canBasicChannelResult = null != basicChannel;
                    if (canBasicChannelResult) {
                      canBasicChannelResult =
                        basicChannel.type !== closure_0(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
                    }
                    if (canBasicChannelResult) {
                      canBasicChannelResult = tmp12 !== basicChannel.id;
                    }
                    if (canBasicChannelResult) {
                      canBasicChannelResult = PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
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
          const obj3 = {
            guildHasVoice: flag,
            guildHasVideo: (() => {
              if (stateFromStores) {
                return false;
              } else {
                const obj = closure_1[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp9 = result[tmp6];
                  let channelId;
                  if (tmp9 != null) {
                    channelId = tmp9.channelId;
                  }
                  let tmp11 = channelId;
                  if (null != channelId) {
                    let basicChannel = ChannelStore.getBasicChannel(tmp11);
                    if (canConnectToChannel(basicChannel, afkChannelId, PermissionStore)) {
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
            selectedVoiceChannelHasVideo: hasVideoResult,
          };
          hasVideoResult = null != voiceChannelId && authStore.hasVideo(voiceChannelId);
          return obj3;
        },
        items3,
      );
      const guildHasVoice = stateFromStoresObject.guildHasVoice;
      const guildHasVideo = stateFromStoresObject.guildHasVideo;
      selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
      id = guildHasVideo.getId();
      const items4 = [
        SelectedChannelStore,
        tmp7,
        stateFromStoresArray,
        guildHasVoice,
        PermissionStore,
        UserGuildSettingsStore,
      ];
      const items5 = [
        arg0,
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
      const tmpResult4 = tmp(tmp2[16]);
      return tmpResult4.useStateFromStoresObject(
        items4,
        () => {
          let flag2;
          let tmp17;
          let tmp18;
          let tmp19;
          let tmp20;
          voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          let channel = ChannelStore.getChannel(voiceChannelId);
          let guild_id;
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
          let obj2 = SnowflakeUtilsDefault;
          const keys = obj2.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
          let tmp9 = tmp5;
          const someResult = keys.some((item) => {
            basicChannel = basicChannel.getBasicChannel(item);
            const tmp2 =
              null != basicChannel && stateFromStores(isDontBadgeMutedVcsEnabled[23])(basicChannel, closure_1_10);
            return tmp2;
          });
          if (tmp5) {
            const channel1 = ChannelStore.getChannel(voiceChannelId);
            let flag;
            if (channel1 != null) {
              flag = channel1.isGuildStageVoice();
            }
            if (flag == null) {
              flag = false;
            }
            tmp9 = flag;
          }
          const tmp10 = tmp5 && null != ApplicationStreamingStore.getActiveStreamForUser(id, closure_0);
          const obj5 = BlockedUserUtils;
          let result = obj5.filterOutStreamsByBlockedOwner(ApplicationStreamingStore.getAllApplicationStreams());
          const someResult1 = result.some((guildId) => {
            let tmp2 = guildId.guildId !== closure_1_0;
            if (!tmp2) {
              const result =
                isDontBadgeMutedVcsEnabled &&
                UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(tmp, guildId.channelId);
              tmp2 = result;
            }
            return !tmp2;
          });
          let tmp14 = (() => {
            if (closure_1_5) {
              return stateFromStoresArray.length > 0;
            } else {
              const obj = stateFromStoresArray[Symbol.iterator]();
              while (obj !== undefined) {
                let getChannel = selectedVoiceChannelHasVideo.getChannel;
                let obj2 = closure_0(isDontBadgeMutedVcsEnabled[19]);
                let channel = getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
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
            tmp17 = channel_id === voiceChannelId;
            flag2 = true;
            tmp18 = tmp5 && selectedVoiceChannelHasVideo;
            tmp14 = tmp15;
            tmp19 = tmp10;
            tmp20 = tmp9;
          } else {
            flag2 = guildHasVoice;
            tmp17 = null != guildActiveEvent;
            tmp18 = guildHasVideo;
            tmp19 = someResult1;
            tmp20 = someResult;
          }
          const obj3 = {
            audio: flag2,
            video: tmp18,
            screenshare: tmp19,
            liveStage: tmp20,
            activeEvent: tmp17,
            activity: tmp14,
            isCurrentUserConnected: tmp5,
          };
          if (!tmp5) {
            tmp5 = tmp9;
          }
          return obj3;
        },
        items5,
      );
    };
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default tmp2;
