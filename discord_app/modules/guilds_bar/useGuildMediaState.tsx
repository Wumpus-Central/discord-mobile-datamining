// === Module 16271: useGuildMediaState ===

// Module 16271 (useGuildMediaState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import BlockedUserUtils from "BlockedUserUtils" /* 13522 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const require = globalThis.__r;

require = fn;
function canConnectToChannel(type, afkChannelId) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  let canBasicChannelResult = null != type;
  if (canBasicChannelResult) {
    canBasicChannelResult = type.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = afkChannelId !== type.id;
  }
  if (canBasicChannelResult) {
    canBasicChannelResult = obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
}
const isVoiceChannel = fn(2055).isVoiceChannel;
const BasicPermissions = fn(1085).BasicPermissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(27);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, V);
  const tmpResult = require("initialize");
  isDontBadgeMutedVcsEnabled = require("DontBadgeMutedVcsExperiment").useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  const tmpResult5 = require("DontBadgeMutedVcsExperiment");
  const guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(arg0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_13.isMuted(closure_0);
      }
    }
    const items1 = [guildActiveEvent, ChannelStore, RelationshipStore];
    cResult[3] = items1;
    let tmp10 = items1;
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
  const tmpResult6 = require("useGuildScheduledEvents");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp10, tmp14);
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
    cResult[6] = tmp16;
    cResult[7] = embeddedActivityLocationChannelId;
    let tmp17 = embeddedActivityLocationChannelId;
  } else {
    class V {
      constructor() {
        return closure_13.isMuted(closure_0);
      }
    }
  }
  const tmpResult7 = require("initialize");
  const isActivitiesInTextEnabled = require("ActivitiesInTextUtils").useIsActivitiesInTextEnabled(tmp17);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_13.isMuted(closure_0);
      }
    }
    const items2 = [SelectedChannelStore, VoiceStateStore, GuildStore, PermissionStore, ChannelStore, UserGuildSettingsStore];
    cResult[8] = items2;
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
                  canBasicChannelResult = basicChannel.type !== closure_0(closure_2[13]).ChannelTypes.GUILD_STAGE_VOICE;
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
      obj1 = { guildHasVoice: flag, guildHasVideo: (() => { ... })(), selectedVoiceChannelHasVideo: null };
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
  const tmpResult8 = require("ActivitiesInTextUtils");
}) : ((arg0) => {
  _require = arg0;
  let items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserGuildSettingsStore.isMuted(closure_0));
  let obj = require("initialize");
  isDontBadgeMutedVcsEnabled = require("DontBadgeMutedVcsExperiment").useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  let obj2 = require("DontBadgeMutedVcsExperiment");
  const guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(arg0);
  let obj3 = require("useGuildScheduledEvents");
  const items1 = [guildActiveEvent, selectedVoiceChannelHasVideo, RelationshipStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((location) => {
      basicChannel = basicChannel.getBasicChannel(closure_1_0(isDontBadgeMutedVcsEnabled[19]).getEmbeddedActivityLocationChannelId(location.location));
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      if (type === closure_1_0(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_SPACE) {
        return false;
      } else {
        blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
        const items = [];
        HermesBuiltin.arraySpread(location.userIds, 0);
        return !closure_1_0(isDontBadgeMutedVcsEnabled[20]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
      }
      const obj = closure_1_0(isDontBadgeMutedVcsEnabled[19]);
    });
  });
  const obj4 = require("initialize");
  const first = stateFromStoresArray[0];
  let _location;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(_location);
  let obj5 = require("embeddedActivityLocationUtils");
  const isActivitiesInTextEnabled = require("ActivitiesInTextUtils").useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  const tmpResult = require("ActivitiesInTextUtils");
  const items2 = [SelectedChannelStore, VoiceStateStore, id, PermissionStore, selectedVoiceChannelHasVideo, UserGuildSettingsStore];
  const items3 = [arg0, stateFromStores, isDontBadgeMutedVcsEnabled];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    guild = id.getGuild(afkChannelId);
    afkChannelId = undefined;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    dependencyMap = authStore.getUsersWithVideo(tmp3);
    const result = closure_0(isDontBadgeMutedVcsEnabled[20]).filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
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
            if (PermissionStore !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                canBasicChannelResult = basicChannel.type !== closure_0(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
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
          const obj = dependencyMap[Symbol.iterator]();
          while (obj !== undefined) {
            let tmp8 = result[tmp5];
            let channelId;
            if (tmp8 != null) {
              channelId = tmp8.channelId;
            }
            let tmp10 = channelId;
            if (null != channelId) {
              let basicChannel = ChannelStore.getBasicChannel(tmp10);
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
      selectedVoiceChannelHasVideo: null
    };
    let hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      hasVideoResult = authStore.hasVideo(voiceChannelId);
    }
    obj3.selectedVoiceChannelHasVideo = hasVideoResult;
    return obj3;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = guildHasVideo.getId();
  const tmpResult3 = require("initialize");
  const items4 = [SelectedChannelStore, selectedVoiceChannelHasVideo, stateFromStoresArray, guildHasVoice, PermissionStore, UserGuildSettingsStore];
  const items5 = [arg0, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo, isDontBadgeMutedVcsEnabled];
  return require("initialize").useStateFromStoresObject(items4, () => {
    voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let channel = ChannelStore.getChannel(voiceChannelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp5 = guild_id === closure_0;
    if (!tmp5) {
      if (stateFromStores) {
        return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
      }
    }
    const keys = SnowflakeUtilsDefault.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
    let tmp9 = tmp5;
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
    let tmp10 = tmp5;
    if (tmp10) {
      tmp10 = null != ApplicationStreamingStore.getActiveStreamForUser(id, closure_0);
    }
    const someResult = keys.some((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = stateFromStores(isDontBadgeMutedVcsEnabled[23])(basicChannel, closure_1_10);
      }
      return tmp2;
    });
    let result = BlockedUserUtils.filterOutStreamsByBlockedOwner(ApplicationStreamingStore.getAllApplicationStreams());
    let tmp14 = (() => {
      if (closure_1_5) {
        return stateFromStoresArray.length > 0;
      } else {
        const obj = stateFromStoresArray[Symbol.iterator]();
        while (obj !== undefined) {
          let obj2 = closure_0(isDontBadgeMutedVcsEnabled[19]);
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
    const obj3 = { audio: flag2, video: tmp18, screenshare: tmp19, liveStage: tmp20, activeEvent: tmp17, activity: tmp14, isCurrentUserConnected: null };
    if (!tmp5) {
      tmp5 = tmp9;
    }
    obj3.isCurrentUserConnected = tmp5;
    return obj3;
  }, items5);
});