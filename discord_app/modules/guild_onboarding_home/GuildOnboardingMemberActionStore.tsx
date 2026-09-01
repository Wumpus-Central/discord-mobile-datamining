// discord_app/modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import set from "../../../_runtime/00002_set.js";

let obj = {};
let closure_1 = {};
let set = new Set();
const Store = initializeDefault.Store;
class GuildOnboardingMemberActionStore extends Store {}
const prototype = GuildOnboardingMemberActionStore.prototype;
prototype["getCompletedActions"] = function getCompletedActions(closure_0) {
  let tmp = null;
  if (null != closure_0) {
    tmp = dependencyMap[closure_0];
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
    obj[0] = dependencyMap[arg0];
    obj[1] = set.has(arg0);
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
      closure_1[guildId] = memberActions;
      set.delete(guildId);
    } else {
      closure_1[guildId] = obj;
    }
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function handleMemberActionsFetchFail(guildId) {
    set.delete(guildId.guildId);
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function handleNewMemberActionsDelete(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
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
    if (null == dependencyMap[guild.id]) {
      return false;
    } else {
      const id = guild.id;
      delete tmp2[tmp];
    }
  },
};
const guildOnboardingMemberActionStore = new GuildOnboardingMemberActionStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx");

export default guildOnboardingMemberActionStore;
export const NO_ACTIONS = obj;
