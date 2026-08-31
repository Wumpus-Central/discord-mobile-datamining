// === Module 5333: buildStageChannelUserRoles ===

// Module 5333 (buildStageChannelUserRoles)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import applyOverwritesAll from "applyOverwrites" /* 4096 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4636 */;
import useIsStageSpeakingDisabledForCurrentUser from "useIsStageSpeakingDisabledForCurrentUser" /* 5334 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_7 from "createGuildRecordFromRust" /* 1909 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "updateVoiceState" /* 4467 */;

require = arg1;
function buildStageChannelUserRoles(id, closure_0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null == dependencyMap[closure_0]) {
    dependencyMap[closure_0] = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  const channel = store.getChannel(closure_0);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  guild = guild.getGuild(guildId);
  if (null != guild) {
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        obj = {};
        voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(closure_0, id);
        const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(voiceStateForChannel);
        obj[obj.SPEAKER] = audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
        let canResult = null;
        if (flag) {
          obj = { permission: null, user: null, context: null, overwrites: null, roles: null };
          obj[0] = tmp8(1395).MODERATE_STAGE_CHANNEL_PERMISSIONS;
          obj[1] = id;
          obj[2] = guild;
          obj[3] = channel.permissionOverwrites;
          obj[4] = unsafeMutableRoles.getUnsafeMutableRoles(guild.id);
          canResult = applyOverwritesAll.can(obj);
          const obj4 = applyOverwritesAll;
        }
        obj[obj.MODERATOR] = canResult;
        let tmp4 = obj;
        const obj3 = useAudienceRequestToSpeakState;
        tmp8 = require;
      }
      dependencyMap[closure_0][id] = tmp4;
      return tmp4;
    }
  }
  tmp4 = obj;
}
function resetStageChannelRolesForGuild(guildId) {
  const values = Object.values(store.getMutableGuildChannelsForGuild(guildId));
  const found = values.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
  for (const item10015 of found) {
    let tmp3 = closure_11;
    let id = item10015.id;
    delete tmp2[tmp];
    continue;
  }
  return found.length > 0;
}
function handleGuildMemberUpdate(arg0) {
  ({ guildId, user } = arg0);
  let flag = null != user && null != guildId;
  if (flag) {
    const id = user.id;
    flag = true;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag = true;
      while (keys[tmp] !== undefined) {
        let tmp10 = tmp6;
        let tmp11 = store;
        let basicChannel = store.getBasicChannel(tmp6);
        let tmp7 = null != basicChannel && basicChannel.guild_id === guildId;
        if (!tmp7) {
          continue;
        } else {
          let tmp8 = dependencyMap;
          let tmp9 = dependencyMap[tmp6];
          delete tmp3[tmp2];
          continue;
        }
        continue;
      }
    }
  }
  return flag;
}
function handleGuildCreateOrDelete(arg0) {
  for (const key10005 in closure_11) {
    let tmp6 = key10005;
    let tmp7 = store;
    let basicChannel = store.getBasicChannel(key10005);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      tmp4 = basicChannel.guild_id !== tmp3.id;
    }
    if (tmp4) {
      continue;
    } else {
      let tmp5 = closure_11;
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
let obj = { SPEAKER: "speaker", MODERATOR: "moderator" };
let closure_11 = {};
obj = { [obj.SPEAKER]: false, [obj.MODERATOR]: false };
const Store = initializeDefault.Store;
class StageChannelRoleStore extends Store {
}
const prototype = StageChannelRoleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_4, closure_7, closure_8, closure_9, closure_6);
};
prototype["isSpeaker"] = function isSpeaker(id, channelId) {
  return this.getPermissionsForUser(id, channelId)[obj.SPEAKER];
};
prototype["isModerator"] = function isModerator(id, id2) {
  let flag = this.getPermissionsForUser(id, id2, true)[obj.MODERATOR];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isAudienceMember"] = function isAudienceMember(userId, voiceChannelId) {
  const permissionsForUser = this.getPermissionsForUser(userId, voiceChannelId);
  let tmp3 = !tmp2;
  if (!permissionsForUser[obj.SPEAKER]) {
    tmp3 = !permissionsForUser[obj.MODERATOR];
  }
  return tmp3;
};
prototype["getPermissionsForUser"] = function getPermissionsForUser(id, closure_0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != id) {
    if (null != closure_0) {
      currentUser = currentUser.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id === id) {
        obj = useIsStageSpeakingDisabledForCurrentUser;
        if (obj.isStageSpeakingDisabledForCurrentUser()) {
          return obj;
        }
      }
      let tmp6;
      if (dependencyMap[closure_0] != null) {
        tmp6 = tmp5[id];
      }
      if (null != tmp6) {
        let tmp9 = tmp6;
        if (flag) {
          tmp9 = tmp6;
          if (null == tmp6[obj.MODERATOR]) {
            tmp9 = buildStageChannelUserRoles(id, closure_0, true);
          }
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = buildStageChannelUserRoles(id, closure_0, flag);
      }
      return tmp8;
    }
  }
  return obj;
};
StageChannelRoleStore.displayName = "StageChannelRoleStore";
obj = {
  CHANNEL_UPDATES: function handleChannelUpdate(arg0) {
    for (const item10006 of tmp3) {
      let tmp4 = closure_11;
      let id = item10006.id;
      delete tmp2[tmp];
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11 = {};
  },
  GUILD_MEMBER_REMOVE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(guildId) {
    resetStageChannelRolesForGuild(guildId.guildId);
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return resetStageChannelRolesForGuild(guildId.guildId);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const isEmptyResult = applyDefault.isEmpty(closure_11);
    let reduced = !isEmptyResult;
    if (!isEmptyResult) {
      reduced = voiceStates.reduce((arg0, arg1) => {
        ({ userId, channelId } = arg1);
        let flag = false;
        if (null != channelId) {
          channel = channel.getChannel(channelId);
          let num = null == channel || !channel.isGuildStageVoice();
          if (!num) {
            num = 0;
            if (table[channelId] != null) {
              delete tmp[tmp2];
              num = 0;
            }
          }
          flag = !num;
        }
        if (!flag) {
          flag = arg0;
        }
        return flag;
      }, false);
    }
    return reduced;
  },
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete
};
const stageChannelRoleStore = new StageChannelRoleStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelRoleStore.tsx");

export default stageChannelRoleStore;
export const StagePermissionBuckets = obj;
export const NO_PERMISSIONS = obj;