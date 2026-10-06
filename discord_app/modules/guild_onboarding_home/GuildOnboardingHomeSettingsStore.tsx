// === Module 5083: GuildOnboardingHomeSettingsStore ===

// Module 5083 (GuildOnboardingHomeSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleSettingsLoadSuccess(arg0) {
  let guildId;
  let homeSettings;
  ({ homeSettings, guildId } = arg0);
  if (null != guildId) {
    if (null == homeSettings) {
      closure_2[guildId] = obj;
    }
    closure_2[guildId] = homeSettings;
    let newMemberActions;
    if (closure_2[guildId] != null) {
      newMemberActions = tmp4.newMemberActions;
    }
    if (null != newMemberActions) {
      closure_4[guildId] = newMemberActions;
    }
    set.delete(guildId);
  }
}
const NO_SETTINGS = { enabled: false };
let closure_1 = [];
const React2 = {};
const set = new Set();
const React3 = {};
const Store = get_initializedDefault.Store;
class GuildOnboardingHomeSettingsStore extends Store {
  getSettings(arg0) {
    let tmp = null;
    if (null != arg0) {
      let tmp3 = closure_2[arg0];
      if (tmp3 == null) {
        tmp3 = obj;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getNewMemberActions(id) {
    let tmp = null;
    if (null != id) {
      const self = this;
      const settings = this.getSettings(id);
      let newMemberActions;
      if (settings != null) {
        newMemberActions = settings.newMemberActions;
      }
      tmp = null;
      if (null != newMemberActions) {
        let tmp5;
        if (null == closure_4[id]) {
          let newMemberActions1;
          if (closure_2[id] != null) {
            newMemberActions1 = tmp7.newMemberActions;
          }
          let tmp9 = null;
          if (null != newMemberActions1) {
            closure_4[id] = newMemberActions1;
            tmp9 = closure_4[id];
          }
          tmp5 = tmp9;
        } else {
          tmp5 = closure_4[id];
        }
        tmp = tmp5;
      }
    }
    return tmp;
  }
  getActionForChannel(c0, c1) {
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
  }
  hasMemberAction(id, id2) {
    return null != this.getActionForChannel(id, id2);
  }
  getResourceChannels(guildId) {
    let resourceChannels;
    if (closure_2[guildId] != null) {
      resourceChannels = tmp.resourceChannels;
    }
    if (resourceChannels == null) {
      resourceChannels = closure_1;
    }
    return resourceChannels;
  }
  getResourceForChannel(guildId, channelId) {
    let closure_0 = channelId;
    if (null == guildId) {
      return null;
    } else {
      const self = this;
      const resourceChannels = this.getResourceChannels(guildId);
      let found = null;
      if (resourceChannels !== closure_1) {
        found = resourceChannels.find((channelId) => channelId.channelId === closure_0);
      }
      return found;
    }
  }
  getIsLoading(arg0) {
    const hasItem = null != arg0 && set.has(arg0);
    return hasItem;
  }
  getWelcomeMessage(guildId) {
    if (null != guildId) {
      let welcomeMessage;
      if (closure_2[guildId] != null) {
        welcomeMessage = tmp2.welcomeMessage;
      }
      return welcomeMessage;
    }
  }
  hasSettings(arg0) {
    return null != arg0 && null != closure_2[arg0];
  }
  getEnabled(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let flag;
      if (closure_2[arg0] != null) {
        flag = tmp3.enabled;
      }
      if (flag == null) {
        flag = false;
      }
      tmp = flag;
    }
    return tmp;
  }
  getNewMemberAction(arg0, arg1) {
    let closure_0 = arg1;
    let tmp = null;
    if (null != arg0) {
      tmp = null;
      if (null != arg1) {
        let found;
        if (closure_2[arg0] != null) {
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
  }
}
const prototype = GuildOnboardingHomeSettingsStore.prototype;
GuildOnboardingHomeSettingsStore.displayName = "GuildOnboardingHomeSettingsStore";
const obj2 = {
  GUILD_HOME_SETTINGS_FETCH_START: function handleSettingsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_FETCH_FAIL: function handleSettingsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: handleSettingsLoadSuccess,
  GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function handleSettingsToggleEnabled(arg0) {
    if (null == closure_2[arg0.guildId]) {
      return false;
    } else {
      closure_2[arg0.guildId].enabled = tmp;
    }
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function handleResourceChannelUpdate(resourceChannel) {
    resourceChannel = resourceChannel.resourceChannel;
    if (null == closure_2[resourceChannel.guildId]) {
      return false;
    } else {
      let resourceChannels1 = tmp.resourceChannels;
      if (resourceChannels1 == null) {
        resourceChannels1 = [];
      }
      closure_2[resourceChannel.guildId].resourceChannels = resourceChannels1;
      const resourceChannels = tmp.resourceChannels;
      const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === resourceChannel.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const resourceChannels2 = tmp.resourceChannels;
        const obj = {};
        const merged = Object.assign(resourceChannel);
        resourceChannels2[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function handleNewMemberActionUpdate(action) {
    action = action.action;
    if (null == closure_2[action.guildId]) {
      return false;
    } else {
      let newMemberActions1 = tmp.newMemberActions;
      if (newMemberActions1 == null) {
        newMemberActions1 = [];
      }
      closure_2[action.guildId].newMemberActions = newMemberActions1;
      const newMemberActions = tmp.newMemberActions;
      const findIndexResult = newMemberActions.findIndex((channelId) => channelId.channelId === action.channelId);
      let flag = -1 !== findIndexResult;
      if (flag) {
        const newMemberActions2 = tmp.newMemberActions;
        const obj = {};
        const merged = Object.assign(action);
        newMemberActions2[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == closure_2[guild.id]) {
      return false;
    } else {
      delete tmp[guild.id];
      delete closure_4[guild.id];
    }
  }
};
const guildOnboardingHomeSettingsStore = new GuildOnboardingHomeSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx");

export default guildOnboardingHomeSettingsStore;
export { NO_SETTINGS };