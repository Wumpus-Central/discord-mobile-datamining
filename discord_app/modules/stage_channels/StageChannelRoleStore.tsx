// === Module 5578: StageChannelRoleStore ===

// Module 5578 (StageChannelRoleStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5037 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5579 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import size from "module_2" /* 2 */;

let closure_11;

function buildStageChannelUserRoles(user, id1) {
  let flag;
  if (flag === undefined) {
    flag = false;
  }
  if (null == closure_11[id1]) {
    closure_11[id1] = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  const channel = ChannelStore.getChannel(id1);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const guild = GuildStore.getGuild(guildId);
  if (null != guild) {
    if (null != channel) {
      let tmp4;
      if (channel.isGuildStageVoice()) {
        const obj = {};
        const SPEAKER = obj.SPEAKER;
        const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(id1, user);
        const obj3 = useAudienceRequestToSpeakState;
        const audienceRequestToSpeakState = obj3.getAudienceRequestToSpeakState(voiceStateForChannel);
        obj[SPEAKER] = audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
        let canResult = null;
        const MODERATOR = obj.MODERATOR;
        if (flag) {
          obj2 = { permission: StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, user, context: guild, overwrites: channel.permissionOverwrites, roles: GuildRoleStore.getUnsafeMutableRoles(guild.id) };
          const can = PermissionUtilsAll.can;
          PermissionUtilsAll;
          canResult = can(obj2);
        }
        obj[MODERATOR] = canResult;
        tmp4 = obj;
      }
      closure_11[id1][user] = tmp4;
      return tmp4;
    }
  }
  tmp4 = obj2;
}
function resetStageChannelRolesForGuild(guildId) {
  const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(guildId));
  const found = values.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
  for (const item10015 of found) {
    delete closure_11[item10015.id];
    continue;
  }
  return found.length > 0;
}
function handleGuildMemberUpdate(arg0) {
  let guildId;
  let user;
  ({ guildId, user } = arg0);
  let flag = null != user && null != guildId;
  if (flag) {
    flag = true;
    const id = user.id;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag = true;
      while (keys[tmp] !== undefined) {
        let basicChannel = ChannelStore.getBasicChannel(tmp4);
        let tmp5 = null != basicChannel && basicChannel.guild_id === guildId;
        if (!tmp5) {
          continue;
        } else {
          delete closure_11[tmp4][id];
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
    let basicChannel = ChannelStore.getBasicChannel(key10005);
    let tmp2 = null != basicChannel && basicChannel.guild_id !== tmp.id;
    if (tmp2) {
      continue;
    } else {
      delete closure_11[key10005];
      continue;
    }
    continue;
  }
}
const StagePermissionBuckets = { SPEAKER: "speaker", MODERATOR: "moderator" };
const unpackModuleId = {};
let obj2 = { [StagePermissionBuckets.SPEAKER]: false, [StagePermissionBuckets.MODERATOR]: false };
const Store = get_initializedDefault.Store;
class StageChannelRoleStore extends Store {
  initialize() {
    this.waitFor(GuildMemberStore, ChannelStore, GuildStore, UserStore, VoiceStateStore, GuildRoleStore);
  }
  isSpeaker(id, channelId) {
    return this.getPermissionsForUser(id, channelId)[obj.SPEAKER];
  }
  isModerator(id, channelId) {
    let flag = this.getPermissionsForUser(id, channelId, true)[obj.MODERATOR];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isAudienceMember(id, id1) {
    const permissionsForUser = this.getPermissionsForUser(id, id1);
    return !permissionsForUser[obj.SPEAKER] && !permissionsForUser[obj.MODERATOR];
  }
  getPermissionsForUser(id, id1) {
    if (null != id) {
      if (null != id1) {
        let obj;
        let tmp8;
        const currentUser = UserStore.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (id === id) {
          obj = useStageSpeakingForCurrentUser;
          if (obj.isStageSpeakingDisabledForCurrentUser()) {
            return obj2;
          }
        }
        let tmp6;
        if (closure_11[id1] != null) {
          tmp6 = tmp5[id];
        }
        if (null != tmp6) {
          let tmp9 = tmp6;
          if (flag) {
            tmp9 = tmp6;
            if (null == tmp6[obj.MODERATOR]) {
              tmp9 = buildStageChannelUserRoles(id, id1, true);
            }
          }
          tmp8 = tmp9;
        } else {
          tmp8 = buildStageChannelUserRoles(id, id1, flag);
        }
        return tmp8;
      }
    }
    return obj2;
  }
}
const prototype = StageChannelRoleStore.prototype;
StageChannelRoleStore.displayName = "StageChannelRoleStore";
let obj3 = {
  CHANNEL_UPDATES: function handleChannelUpdate(channels) {
    channels = channels.channels;
    for (const item10006 of channels) {
      delete closure_11[item10006.id];
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
    const obj = _modDef12;
    let reduced = !obj.isEmpty(closure_11);
    obj.isEmpty(closure_11);
    if (reduced) {
      let flag = false;
      reduced = voiceStates.reduce((acc, channelId) => {
        channelId = channelId.channelId;
        let flag = false;
        if (null != channelId) {
          channel = channel.getChannel(channelId);
          let num = null == channel || !channel.isGuildStageVoice();
          if (!num) {
            num = 0;
            if (closure_1_11[channelId] != null) {
              delete closure_1_11[channelId][tmp];
              num = 0;
            }
          }
          flag = !num;
        }
        if (!flag) {
          flag = acc;
        }
        return flag;
      }, false);
    }
    return reduced;
  },
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete
};
const stageChannelRoleStore = new StageChannelRoleStore(DispatcherDefault, obj3);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelRoleStore.tsx");

export default stageChannelRoleStore;
export { StagePermissionBuckets };
export const NO_PERMISSIONS = obj2;