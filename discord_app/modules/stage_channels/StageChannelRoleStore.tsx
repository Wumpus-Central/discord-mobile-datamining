// discord_app/modules/stage_channels/StageChannelRoleStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import StageChannelPermissions from "StageChannelPermissions.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

require = fn;
function buildStageChannelUserRoles(user, id2) {
  if (flag === undefined) {
    flag = false;
  }
  if (null == dependencyMap[id2]) {
    dependencyMap[id2] = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  const channel = ChannelStore.getChannel(id2);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const guild = GuildStore.getGuild(guildId);
  if (null != guild) {
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        obj = {};
        const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(id2, user);
        const audienceRequestToSpeakState =
          useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(voiceStateForChannel);
        obj[obj.SPEAKER] = audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
        let canResult = null;
        if (flag) {
          obj = {
            permission: StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
            user,
            context: guild,
            overwrites: channel.permissionOverwrites,
            roles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          };
          canResult = PermissionUtilsAll.can(obj);
        }
        obj[obj.MODERATOR] = canResult;
        let tmp4 = obj;
      }
      dependencyMap[id2][user] = tmp4;
      return tmp4;
    }
  }
  tmp4 = obj;
}
function resetStageChannelRolesForGuild(guildId) {
  const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(guildId));
  const found = values.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
  for (const item10015 of found) {
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
        let basicChannel = ChannelStore.getBasicChannel(tmp6);
        let tmp7 = null != basicChannel && basicChannel.guild_id === guildId;
        if (!tmp7) {
          continue;
        } else {
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
    let basicChannel = ChannelStore.getBasicChannel(key10005);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      tmp4 = basicChannel.guild_id !== tmp3.id;
    }
    if (tmp4) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
let obj = { SPEAKER: "speaker", MODERATOR: "moderator" };
const dependencyMap = {};
obj = { [obj.SPEAKER]: false, [obj.MODERATOR]: false };
const Store = initializeDefault.Store;
class StageChannelRoleStore extends Store {}
const prototype = StageChannelRoleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildMemberStore, ChannelStore, GuildStore, UserStore, VoiceStateStore, GuildRoleStore);
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
prototype["getPermissionsForUser"] = function getPermissionsForUser(id, id2) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != id) {
    if (null != id2) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id === id) {
        obj = useStageSpeakingForCurrentUser;
        if (obj.isStageSpeakingDisabledForCurrentUser()) {
          return obj;
        }
      }
      let tmp6;
      if (dependencyMap[id2] != null) {
        tmp6 = tmp5[id];
      }
      if (null != tmp6) {
        let tmp9 = tmp6;
        if (flag) {
          tmp9 = tmp6;
          if (null == tmp6[obj.MODERATOR]) {
            tmp9 = buildStageChannelUserRoles(id, id2, true);
          }
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = buildStageChannelUserRoles(id, id2, flag);
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
    const isEmptyResult = _modDef12.isEmpty(closure_11);
    let reduced = !isEmptyResult;
    if (!isEmptyResult) {
      reduced = voiceStates.reduce((acc, item) => {
        ({ userId, channelId } = item);
        let flag = false;
        if (null != channelId) {
          channel = channel.getChannel(channelId);
          let num = null == channel || !channel.isGuildStageVoice();
          if (!num) {
            num = 0;
            if (dependencyMap[channelId] != null) {
              delete tmp[tmp2];
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
  GUILD_DELETE: handleGuildCreateOrDelete,
};
const stageChannelRoleStore = new StageChannelRoleStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelRoleStore.tsx");

export default stageChannelRoleStore;
export const StagePermissionBuckets = obj;
export const NO_PERMISSIONS = obj;
