// === Module 16764: useGuildMediaState ===

// Module 16764 (useGuildMediaState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import BlockedUserUtils from "BlockedUserUtils" /* 13981 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import StageInstanceStore from "StageInstanceStore" /* 2070 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

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
const isVoiceChannel = fn(2069).isVoiceChannel;
const BasicPermissions = fn(1085).BasicPermissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMediaState(arg0) {
  _require = arg0;
  const cResult = require("c").c(25);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function y() {
      return UserGuildSettingsStore.isMuted(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmpResult = require("initialize");
  guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(arg0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStoresArray, id, RelationshipStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
    cResult[4] = arg0;
    cResult[5] = E;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
  }
  const tmpResult5 = require("useGuildScheduledEvents");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp9, E);
  if (stateFromStoresArray[0] != null) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
  }
  if (cResult[6] !== undefined) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
    const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(tmp15);
    cResult[6] = tmp15;
    cResult[7] = embeddedActivityLocationChannelId;
    const tmp16 = embeddedActivityLocationChannelId;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
  }
  const tmpResult6 = require("initialize");
  const isActivitiesInTextEnabled = require("ActivitiesInTextUtils").useIsActivitiesInTextEnabled(tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
    const items2 = [SelectedChannelStore, VoiceStateStore, GuildStore, PermissionStore, id, UserGuildSettingsStore];
    cResult[8] = items2;
    let tmp19 = items2;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
  }
  if (cResult[9] === arg0) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            HermesBuiltin.arraySpread(location.userIds, 0);
            return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
          const obj = closure_1_0(guildActiveEvent[18]);
        });
      }
    }
    const stateFromStoresObject = tmp(tmp2[16]).useStateFromStoresObject(tmp19, O, items5);
    const guildHasVoice = stateFromStoresObject.guildHasVoice;
    const guildHasVideo = stateFromStoresObject.guildHasVideo;
    const selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              HermesBuiltin.arraySpread(location.userIds, 0);
              return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
            const obj = closure_1_0(guildActiveEvent[18]);
          });
        }
      }
      id = selectedVoiceChannelHasVideo.getId();
      cResult[13] = id;
    } else {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              HermesBuiltin.arraySpread(location.userIds, 0);
              return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
            const obj = closure_1_0(guildActiveEvent[18]);
          });
        }
      }
    }
    id = tmp26;
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              HermesBuiltin.arraySpread(location.userIds, 0);
              return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
            const obj = closure_1_0(guildActiveEvent[18]);
          });
        }
      }
      const items3 = [SelectedChannelStore, id, isActivitiesInTextEnabled, guildHasVideo, PermissionStore, UserGuildSettingsStore];
      cResult[14] = items3;
    } else {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              HermesBuiltin.arraySpread(location.userIds, 0);
              return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
            const obj = closure_1_0(guildActiveEvent[18]);
          });
        }
      }
    }
    if (cResult[15] === stateFromStoresArray) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              HermesBuiltin.arraySpread(location.userIds, 0);
              return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
            const obj = closure_1_0(guildActiveEvent[18]);
          });
        }
      }
    }
    class W {
      constructor() {
        voiceChannelId = closure_12.getVoiceChannelId();
        obj = closure_8;
        channel = closure_8.getChannel(voiceChannelId);
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        tmp4 = closure_0;
        tmp5 = guild_id === closure_0;
        if (!tmp5) {
          tmp6 = closure_1;
          if (closure_1) {
            return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
          }
        }
        tmp7 = closure_2;
        obj2 = closure_1(closure_2[21]);
        keys = obj2.keys(closure_4.getStageInstancesByGuild(tmp4));
        tmp9 = tmp5;
        someResult = keys.some((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let tmp2 = null != basicChannel;
          if (tmp2) {
            tmp2 = stateFromStores(guildActiveEvent[22])(basicChannel, closure_1_10);
          }
          return tmp2;
        });
        if (tmp5) {
          channel1 = obj.getChannel(voiceChannelId);
          flag = undefined;
          if (channel1 != null) {
            flag = channel1.isGuildStageVoice();
          }
          if (flag == null) {
            flag = false;
          }
          tmp9 = flag;
        }
        tmp10 = tmp5;
        if (tmp10) {
          tmp11 = closure_6;
          tmp12 = closure_8;
          tmp10 = null != closure_6.getActiveStreamForUser(closure_8, tmp4);
        }
        obj5 = closure_0(tmp7[19]);
        result = obj5.filterOutStreamsByBlockedOwner(closure_6.getAllApplicationStreams());
        someResult1 = result.some((guildId) => {
          let tmp2 = guildId.guildId === closure_1_0;
          if (tmp2) {
            tmp2 = !UserGuildSettingsStore.isChannelMuted(tmp, guildId.channelId);
          }
          return tmp2;
        });
        tmp14 = (() => {
          if (isActivitiesInTextEnabled) {
            return stateFromStoresArray.length > 0;
          } else {
            const obj = stateFromStoresArray[Symbol.iterator]();
            while (obj !== undefined) {
              let obj2 = closure_0(guildActiveEvent[18]);
              let channel = id.getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
              if (null != channel) {
                if (guildHasVoice(tmp10.type)) {
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
          channel_id = undefined;
          if (closure_2 != null) {
            channel_id = closure_2.channel_id;
          }
          tmp22 = tmp5;
          if (tmp5) {
            tmp22 = closure_7;
          }
          tmp17 = channel_id === voiceChannelId;
          flag2 = true;
          tmp18 = tmp22;
          tmp14 = tmp15;
          tmp19 = tmp10;
          tmp20 = tmp9;
        } else {
          flag2 = guildHasVoice;
          tmp16 = closure_2;
          tmp17 = null != closure_2;
          tmp18 = guildHasVideo;
          tmp19 = someResult1;
          tmp20 = someResult;
        }
        obj1 = { audio: flag2, video: tmp18, screenshare: tmp19, liveStage: tmp20, activeEvent: tmp17, activity: tmp14, isCurrentUserConnected: null };
        if (!tmp5) {
          tmp5 = tmp9;
        }
        obj1.isCurrentUserConnected = tmp5;
        return obj1;
      }
    }
    const items4 = [arg0, stateFromStores, selectedVoiceChannelHasVideo, tmp26, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo];
    cResult[15] = stateFromStoresArray;
    cResult[16] = guildActiveEvent;
    cResult[17] = guildHasVideo;
    cResult[18] = guildHasVoice;
    cResult[19] = arg0;
    class O {
      constructor() {
        voiceChannelId = closure_1_12.getVoiceChannelId();
        tmp3 = afkChannelId;
        guild = closure_1_9.getGuild(afkChannelId);
        afkChannelId = undefined;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        closure_1 = closure_1_14.getUsersWithVideo(tmp3);
        obj = closure_0(closure_2[19]);
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
              tmp21 = tmp9;
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
                    tmp17 = closure_1_13;
                    tmp18 = afkChannelId;
                    flag = true;
                    if (!closure_1_13.isChannelMuted(afkChannelId, channelId)) {
                      break;
                    }
                  }
                  continue;
                }
              }
              continue;
            }
          }
        }
        obj1 = {
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
                          if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp10)) {
                            obj.return();
                            let flag = true;
                            return true;
                          }
                        }
                      }
                      continue;
                    }
                    return false;
                  }
                })(),
          selectedVoiceChannelHasVideo: null
        };
        hasVideoResult = null != voiceChannelId;
        if (hasVideoResult) {
          tmp20 = closure_1_14;
          hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
        }
        obj1.selectedVoiceChannelHasVideo = hasVideoResult;
        return obj1;
      }
    }
    cResult[21] = stateFromStores;
    cResult[22] = selectedVoiceChannelHasVideo;
    cResult[23] = W;
    cResult[24] = items4;
    const tmpResult8 = tmp(tmp2[16]);
  }
  class O {
    constructor() {
      voiceChannelId = closure_1_12.getVoiceChannelId();
      tmp3 = afkChannelId;
      guild = closure_1_9.getGuild(afkChannelId);
      afkChannelId = undefined;
      if (guild != null) {
        afkChannelId = guild.afkChannelId;
      }
      closure_1 = closure_1_14.getUsersWithVideo(tmp3);
      obj = closure_0(closure_2[19]);
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
            tmp21 = tmp9;
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
                  tmp17 = closure_1_13;
                  tmp18 = afkChannelId;
                  flag = true;
                  if (!closure_1_13.isChannelMuted(afkChannelId, channelId)) {
                    break;
                  }
                }
                continue;
              }
            }
            continue;
          }
        }
      }
      obj1 = {
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
                      if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp10)) {
                        obj.return();
                        let flag = true;
                        return true;
                      }
                    }
                  }
                  continue;
                }
                return false;
              }
            })(),
        selectedVoiceChannelHasVideo: null
      };
      hasVideoResult = null != voiceChannelId;
      if (hasVideoResult) {
        tmp20 = closure_1_14;
        hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
      }
      obj1.selectedVoiceChannelHasVideo = hasVideoResult;
      return obj1;
    }
  }
  items5 = [arg0, stateFromStores];
  cResult[9] = arg0;
  cResult[10] = stateFromStores;
  cResult[11] = O;
  cResult[12] = items5;
  const tmpResult7 = require("ActivitiesInTextUtils");
}) : (function useGuildMediaState(arg0) {
  _require = arg0;
  let items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserGuildSettingsStore.isMuted(closure_0));
  let obj = require("initialize");
  guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(arg0);
  let obj2 = require("useGuildScheduledEvents");
  const items1 = [stateFromStoresArray, id, RelationshipStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((location) => {
      basicChannel = basicChannel.getBasicChannel(closure_1_0(guildActiveEvent[18]).getEmbeddedActivityLocationChannelId(location.location));
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
        return false;
      } else {
        blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
        const items = [];
        HermesBuiltin.arraySpread(location.userIds, 0);
        return !closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
      }
      const obj = closure_1_0(guildActiveEvent[18]);
    });
  });
  let obj3 = require("initialize");
  const first = stateFromStoresArray[0];
  let _location;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(_location);
  const obj4 = require("embeddedActivityLocationUtils");
  const isActivitiesInTextEnabled = require("ActivitiesInTextUtils").useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  const tmpResult = require("ActivitiesInTextUtils");
  const items2 = [SelectedChannelStore, VoiceStateStore, GuildStore, PermissionStore, id, UserGuildSettingsStore];
  const items3 = [arg0, stateFromStores];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    guild = guild.getGuild(afkChannelId);
    afkChannelId = undefined;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    dependencyMap = authStore.getUsersWithVideo(tmp3);
    const result = closure_0(guildActiveEvent[19]).filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
    guildActiveEvent = result;
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
            let basicChannel = id.getBasicChannel(channelId);
            let tmp12 = afkChannelId;
            if (PermissionStore !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                canBasicChannelResult = basicChannel.type !== closure_0(guildActiveEvent[13]).ChannelTypes.GUILD_STAGE_VOICE;
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
                if (!UserGuildSettingsStore.isChannelMuted(afkChannelId, channelId)) {
                  break;
                }
              }
              continue;
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
                if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp10)) {
                  obj.return();
                  let flag = true;
                  return true;
                }
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
  const selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = selectedVoiceChannelHasVideo.getId();
  const tmpResult3 = require("initialize");
  const items4 = [SelectedChannelStore, id, isActivitiesInTextEnabled, guildHasVideo, PermissionStore, UserGuildSettingsStore];
  const items5 = [arg0, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo];
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
        tmp2 = stateFromStores(guildActiveEvent[22])(basicChannel, closure_1_10);
      }
      return tmp2;
    });
    const result = BlockedUserUtils.filterOutStreamsByBlockedOwner(ApplicationStreamingStore.getAllApplicationStreams());
    let tmp14 = (() => {
      if (isActivitiesInTextEnabled) {
        return stateFromStoresArray.length > 0;
      } else {
        const obj = stateFromStoresArray[Symbol.iterator]();
        while (obj !== undefined) {
          let obj2 = closure_0(guildActiveEvent[18]);
          let channel = id.getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
          if (null != channel) {
            if (guildHasVoice(tmp10.type)) {
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