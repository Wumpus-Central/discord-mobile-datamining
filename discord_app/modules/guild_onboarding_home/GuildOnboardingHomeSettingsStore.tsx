// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx
import { Store } from "initialize";
import set from "set";

function handleSettingsLoadSuccess(arg0) {
  let guildId;
  let homeSettings;
  ({ homeSettings, guildId } = arg0);
  if (null != guildId) {
    if (null == homeSettings) {
      dependencyMap[guildId] = obj;
    }
    dependencyMap[guildId] = homeSettings;
    let newMemberActions;
    if (dependencyMap[guildId] != null) {
      newMemberActions = tmp4.newMemberActions;
    }
    if (null != newMemberActions) {
      dependencyMap2[guildId] = newMemberActions;
    }
    set.delete(guildId);
  }
}
let obj = { enabled: false };
let closure_1 = [];
let closure_2 = {};
let set = new Set();
let closure_4 = {};
class GuildOnboardingHomeSettingsStore extends Store {
}
const prototype = GuildOnboardingHomeSettingsStore.prototype;
prototype["getSettings"] = function getSettings(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = dependencyMap[arg0];
    if (tmp3 == null) {
      tmp3 = obj;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getNewMemberActions"] = function getNewMemberActions(closure_0) {
  let tmp = null;
  let tmp2 = null;
  if (null != closure_0) {
    const self = this;
    const settings = this.getSettings(closure_0);
    let newMemberActions;
    if (settings != tmp) {
      newMemberActions = settings.newMemberActions;
    }
    tmp2 = null;
    if (tmp != newMemberActions) {
      if (tmp == dependencyMap2[closure_0]) {
        let newMemberActions1;
        if (dependencyMap[closure_0] != tmp) {
          newMemberActions1 = tmp8.newMemberActions;
        }
        tmp = null;
        if (!tmp10) {
          tmp5[closure_0] = newMemberActions1;
          tmp = tmp5[closure_0];
        }
        let tmp6 = tmp;
        tmp10 = tmp == newMemberActions1;
      } else {
        tmp6 = tmp5[closure_0];
      }
    }
  }
  return tmp2;
};
prototype["getActionForChannel"] = function getActionForChannel(c0, c1) {
  let closure_0 = c1;
  const settings = this.getSettings(c0);
  let found = null;
  if (null != settings) {
    let newMemberActions = settings.newMemberActions;
    if (newMemberActions == null) {
      newMemberActions = [];
    }
    found = newMemberActions.find((channelId) => channelId.channelId === closure_0);
  }
  return found;
};
prototype["hasMemberAction"] = function hasMemberAction(id, id2) {
  return null != this.getActionForChannel(id, id2);
};
prototype["getResourceChannels"] = function getResourceChannels(closure_0) {
  let resourceChannels;
  if (dependencyMap[closure_0] != null) {
    resourceChannels = tmp.resourceChannels;
  }
  if (resourceChannels == null) {
    resourceChannels = closure_1;
  }
  return resourceChannels;
};
prototype["getResourceForChannel"] = function getResourceForChannel(closure_0, channelId) {
  closure_0 = channelId;
  if (null == closure_0) {
    return null;
  } else {
    const self = this;
    const resourceChannels = this.getResourceChannels(closure_0);
    let found = null;
    if (resourceChannels !== closure_1) {
      found = resourceChannels.find((channelId) => channelId.channelId === closure_0);
    }
    return found;
  }
};
prototype["getIsLoading"] = function getIsLoading(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
prototype["getWelcomeMessage"] = function getWelcomeMessage(guildId) {
  if (null != guildId) {
    let welcomeMessage;
    if (dependencyMap[guildId] != null) {
      welcomeMessage = tmp2.welcomeMessage;
    }
    return welcomeMessage;
  }
};
prototype["hasSettings"] = function hasSettings(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = null != dependencyMap[arg0];
  }
  return tmp;
};
prototype["getEnabled"] = function getEnabled(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let flag;
    if (dependencyMap[arg0] != null) {
      flag = tmp3.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
prototype["getNewMemberAction"] = function getNewMemberAction(arg0, arg1) {
  let closure_0 = arg1;
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (null != arg1) {
      let found;
      if (dependencyMap[arg0] != null) {
        const newMemberActions = tmp3.newMemberActions;
        if (newMemberActions != null) {
          found = newMemberActions.find((channelId) => channelId.channelId === closure_0);
        }
      }
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
  }
  return tmp;
};
GuildOnboardingHomeSettingsStore.displayName = "GuildOnboardingHomeSettingsStore";
obj = {
  GUILD_HOME_SETTINGS_FETCH_START: function handleSettingsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_FETCH_FAIL: function handleSettingsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function handleSettingsToggleEnabled(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      tmp2.enabled = tmp;
    }
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function handleResourceChannelUpdate(resourceChannel) {
    resourceChannel = resourceChannel.resourceChannel;
    if (null == dependencyMap[resourceChannel.guildId]) {
      return false;
    } else {
      let resourceChannels = tmp.resourceChannels;
      if (resourceChannels == null) {
        resourceChannels = [];
      }
      tmp.resourceChannels = resourceChannels;
      resourceChannels = tmp.resourceChannels;
      const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === resourceChannel.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const obj = {};
        const merged = Object.assign(resourceChannel);
        tmp.resourceChannels[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function handleNewMemberActionUpdate(action) {
    action = action.action;
    if (null == dependencyMap[action.guildId]) {
      return false;
    } else {
      let newMemberActions = tmp.newMemberActions;
      if (newMemberActions == null) {
        newMemberActions = [];
      }
      tmp.newMemberActions = newMemberActions;
      newMemberActions = tmp.newMemberActions;
      const findIndexResult = newMemberActions.findIndex((channelId) => channelId.channelId === action.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const obj = {};
        const merged = Object.assign(action);
        tmp.newMemberActions[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete tmp4[tmp3];
      const id2 = guild.id;
      delete tmp2[tmp];
    }
  }
};
const guildOnboardingHomeSettingsStore = new GuildOnboardingHomeSettingsStore(require("dispatcher"), obj);
const result = set.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx");

export default guildOnboardingHomeSettingsStore;
export const NO_SETTINGS = obj;