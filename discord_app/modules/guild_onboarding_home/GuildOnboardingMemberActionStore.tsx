// === Module 4748: GuildOnboardingMemberActionStore ===

// Module 4748 (GuildOnboardingMemberActionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let obj = {};
obj = {};
const set = new Set();
const Store = initializeDefault.Store;
class GuildOnboardingMemberActionStore extends Store {
}
const prototype = GuildOnboardingMemberActionStore.prototype;
prototype["getCompletedActions"] = function getCompletedActions(guildId) {
  let tmp = null;
  if (null != guildId) {
    tmp = obj[guildId];
  }
  return tmp;
};
prototype["hasCompletedActionForChannel"] = function hasCompletedActionForChannel(id, id2) {
  const completedActions = this.getCompletedActions(id);
  let tmp2 = null != completedActions;
  if (tmp2) {
    tmp2 = null != completedActions[id2];
  }
  return tmp2;
};
prototype["getState"] = function getState(arg0) {
  if (null == arg0) {
    obj = {};
  } else {
    obj = { completedActions: null, loading: null };
    obj.completedActions = obj[arg0];
    obj.loading = set.has(arg0);
  }
  return obj;
};
GuildOnboardingMemberActionStore.displayName = "GuildOnboardingMemberActionStore";
obj = {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function handleMemberActionsFetchStart(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function handleMemberActionsFetchSuccess(arg0) {
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
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function handleNewMemberActionsDelete(arg0) {
    if (null == obj[arg0.guildId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  COMPLETE_NEW_MEMBER_ACTION: function handleCompleteNewMemberAction(guildId) {
    guildId = guildId.guildId;
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj[guildId.channelId] = true;
    obj[guildId] = obj;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == obj[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete tmp2[tmp];
    }
  }
};
const guildOnboardingMemberActionStore = new GuildOnboardingMemberActionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx");

export default guildOnboardingMemberActionStore;
export const NO_ACTIONS = obj;