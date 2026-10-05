// === Module 5078: GuildOnboardingMemberActionStore ===

// Module 5078 (GuildOnboardingMemberActionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {};
obj = {};
const set = new Set();
const Store = get_initializedDefault.Store;
class GuildOnboardingMemberActionStore extends Store {
  getCompletedActions(guildId) {
    let tmp = null;
    if (null != guildId) {
      tmp = obj[guildId];
    }
    return tmp;
  }
  hasCompletedActionForChannel(id, id2) {
    const completedActions = this.getCompletedActions(id);
    return null != completedActions && null != completedActions[id2];
  }
  getState(arg0) {
    if (null == arg0) {
      obj = {};
    } else {
      obj = { completedActions: obj[arg0], loading: set.has(arg0) };
    }
    return obj;
  }
}
const prototype = GuildOnboardingMemberActionStore.prototype;
GuildOnboardingMemberActionStore.displayName = "GuildOnboardingMemberActionStore";
let obj2 = {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function handleMemberActionsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function handleMemberActionsFetchSuccess(arg0) {
    let guildId;
    let memberActions;
    ({ memberActions, guildId } = arg0);
    if (null != memberActions) {
      obj[guildId] = memberActions;
      set.delete(guildId);
    } else {
      obj[guildId] = obj;
    }
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function handleMemberActionsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function handleNewMemberActionsDelete(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      return false;
    } else {
      delete obj[guildId];
    }
  },
  COMPLETE_NEW_MEMBER_ACTION: function handleCompleteNewMemberAction(guildId) {
    guildId = guildId.guildId;
    obj = {};
    const channelId = guildId.channelId;
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(obj[guildId]);
    obj2[channelId] = true;
    obj[guildId] = obj2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == obj[guild.id]) {
      return false;
    } else {
      delete obj[guild.id];
    }
  }
};
const guildOnboardingMemberActionStore = new GuildOnboardingMemberActionStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx");

export default guildOnboardingMemberActionStore;
export const NO_ACTIONS = obj;