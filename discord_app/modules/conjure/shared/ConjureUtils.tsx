// discord_app/modules/conjure/shared/ConjureUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ConjureGuildExperiment from "../experiments/ConjureGuildExperiment.tsx";
import useAppChannelApplication from "../../app_channels/useAppChannelApplication.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore_mod from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
function conjureChannelAppId(channel) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp2 = null;
  if (type === ChannelTypes.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp2 = application_id;
  }
  return tmp2;
}
let GuildChannelStore = fn(4934);
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1084);
({ Permissions: closure_9, ChannelTypes } = Constants);
let items = [,];
({ GUILD_DIRECTORY: arr[0], GUILD_STORE: arr[1] } = ChannelTypes);
const set = new Set(items);
fn(558);
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanAccessConjure(guildId, location) {
      const cResult = c.c(3);
      if (cResult[0] === guildId.id) {
        if (cResult[1] === location) {
          let tmp4 = cResult[2];
        }
        return ConjureGuildExperiment.useIsConjureGuildEnabled(tmp4);
      }
      const obj2 = { guildId: guildId.id, location };
      cResult[0] = guildId.id;
      cResult[1] = location;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : function useCanAccessConjure(guildId, location) {
      return ConjureGuildExperiment.useIsConjureGuildEnabled({ guildId: guildId.id, location });
    };
function isConjureGuildEligible(guildId, ConjureRemixSheet) {
  return ConjureGuildExperiment.isConjureGuildEnabled({ guildId: guildId.id, location: ConjureRemixSheet });
}
function eligibleConjureGuilds(arr, arg1) {
  closure_0 = arg1;
  const found = arr.filter((guildId) =>
    ConjureGuildExperiment.isConjureGuildEnabled({ guildId: guildId.id, location: _location }),
  );
  return found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureUtils.tsx");

export const conjureSettingsGuildId = function conjureSettingsGuildId(project, arg1) {
  let tmp = null;
  if (null != project) {
    tmp = null;
    if ("user" !== project.install_scope) {
      let preview_guild_id = null;
      if (arg1) {
        preview_guild_id = project.preview_guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = project.guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = null;
      }
      tmp = preview_guild_id;
    }
  }
  return tmp;
};
export const conjureSettingChannels = function conjureSettingChannels(channels, channel_filter) {
  if ("voice" === channel_filter) {
    let items = [];
  } else {
    items = channels[React3];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    let items2 = [];
  } else {
    items2 = channels[React4];
  }
  HermesBuiltin.arraySpread(items2, tmp2);
  const mapped = items1.map((channel) => channel.channel);
  return mapped.filter((type) => !set.has(type.type));
};
export const getConjureProjectAccessSettings = function getConjureProjectAccessSettings(flags) {
  return {
    isPublic: flags & ConjureProjectTypes.ConjureProjectFlags.PUBLIC,
    isGuildCollaboration: flags & ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION,
  };
};
export { conjureChannelAppId };
export const isConjureProjectInGuild = function isConjureProjectInGuild(item10020, guildId) {
  let tmp = null != item10020;
  if (tmp) {
    let tmp3 = item10020.guild_id === guildId || item10020.preview_guild_id === guildId;
    if (!tmp3) {
      tmp3 = null == item10020.guild_id && null == item10020.preview_guild_id;
      const tmp4 = null == item10020.guild_id && null == item10020.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const findConjureChannelId = function findConjureChannelId(guild_id, application_id) {
  for (const item10012 of tmp) {
    let channel = item10012.channel;
    if (conjureChannelAppId(channel) === arg1) {
      obj.return();
      return channel.id;
    }
  }
  return null;
};
export { isConjureGuildEligible };
export { eligibleConjureGuilds };
export const hasEligibleConjureGuild = function hasEligibleConjureGuild(guildsArray, useIsOwnedConjureApplication) {
  const _location = useIsOwnedConjureApplication;
  return guildsArray.some((guildId) =>
    ConjureGuildExperiment.isConjureGuildEnabled({ guildId: guildId.id, location: _location }),
  );
};
export const resolveConjureWorkspaceGuildId = function resolveConjureWorkspaceGuildId(ConjureChatStore) {
  const guildId = SelectedGuildStore.getGuildId();
  guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    const obj2 = { guildId: guild.id, location: ConjureChatStore };
    if (obj.isConjureGuildEnabled(obj2)) {
      let id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = ConjureChatStore;
  const found = guildsArray.filter((guildId) =>
    ConjureGuildExperiment.isConjureGuildEnabled({ guildId: guildId.id, location: _location }),
  );
  id = undefined;
  const first = found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  })[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
};
export const canAccessConjure = function canAccessConjure(guild, getChannelIdForGuildTransition) {
  return ConjureGuildExperiment.isConjureGuildEnabled({ guildId: guild.id, location: getChannelIdForGuildTransition });
};
export const canStartConjureProject = function canStartConjureProject(id, location) {
  let result = PermissionStore.can(constants.MANAGE_CHANNELS, id) && PermissionStore.can(constants.MANAGE_GUILD, id);
  if (result) {
    const obj3 = { guildId: id.id, location };
    result = ConjureGuildExperiment.isConjureGuildEnabled(obj3);
  }
  return result;
};
export const useCanAccessConjure = tmp5;
export const isConjureChannelCandidate = function isConjureChannelCandidate(channel, ActivitySounds) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp3 = null;
  if (type === ChannelTypes.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp3 = application_id;
  }
  let application = null;
  if (null != tmp3) {
    application = null;
    if (ApplicationStore.isHydrated(tmp3)) {
      application = ApplicationStore.getApplication(tmp3);
    }
  }
  let type1;
  if (channel != null) {
    type1 = channel.type;
  }
  let result = type1 === ChannelTypes.GUILD_APP;
  if (result) {
    let conjureProjectId;
    if (application != null) {
      conjureProjectId = application.conjureProjectId;
    }
    result = null != conjureProjectId;
  }
  if (result) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const obj3 = { guildId: guild_id, location: ActivitySounds };
    result = ConjureGuildExperiment.isConjureGuildEnabled(obj3);
  }
  return result;
};
export const useIsConjureChannelCandidate = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsConjureChannelCandidate(guild_id, location) {
      const cResult = c.c(7);
      const appChannelApplication = useAppChannelApplication.useAppChannelApplication(guild_id);
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (cResult[0] === location) {
        if (cResult[1] === guild_id) {
          let tmp6 = cResult[2];
        }
        const isConjureGuildEnabled = ConjureGuildExperiment.useIsConjureGuildEnabled(tmp6);
        if (cResult[3] === appChannelApplication) {
          if (cResult[4] === guild_id) {
            if (cResult[5] === isConjureGuildEnabled) {
              let tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
        let type;
        if (guild_id != null) {
          type = guild_id.type;
        }
        let tmp11 = type === ChannelTypes.GUILD_APP;
        if (tmp11) {
          let conjureProjectId;
          if (appChannelApplication != null) {
            conjureProjectId = appChannelApplication.conjureProjectId;
          }
          tmp11 = null != conjureProjectId;
        }
        if (tmp11) {
          tmp11 = isConjureGuildEnabled;
        }
        cResult[3] = appChannelApplication;
        cResult[4] = guild_id;
        cResult[5] = isConjureGuildEnabled;
        cResult[6] = tmp11;
        tmp8 = tmp11;
        const tmpResult = ConjureGuildExperiment;
      }
      const obj3 = { guildId: guild_id, location };
      cResult[0] = location;
      cResult[1] = guild_id;
      cResult[2] = obj3;
      tmp6 = obj3;
    }
  : function useIsConjureChannelCandidate(guild_id, location) {
      const appChannelApplication = useAppChannelApplication.useAppChannelApplication(guild_id);
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      let type;
      const isConjureGuildEnabled = ConjureGuildExperiment.useIsConjureGuildEnabled({ guildId: guild_id, location });
      if (guild_id != null) {
        type = guild_id.type;
      }
      let tmp5 = type === ChannelTypes.GUILD_APP;
      if (tmp5) {
        let conjureProjectId;
        if (appChannelApplication != null) {
          conjureProjectId = appChannelApplication.conjureProjectId;
        }
        tmp5 = null != conjureProjectId;
      }
      if (tmp5) {
        tmp5 = isConjureGuildEnabled;
      }
      return tmp5;
    };
