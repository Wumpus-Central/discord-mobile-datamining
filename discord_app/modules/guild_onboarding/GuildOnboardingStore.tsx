// === Module 7096: shouldShowOnboarding ===

// Module 7096 (shouldShowOnboarding)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import ME2 from "ME" /* 1074 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1982 */;

const ME = ME2.ME;
let obj = { STARTED: "started", READY: "ready", COMPLETED: "completed", NOT_APPLICABLE: "not_applicable" };
let closure_4 = {};
let closure_5 = {};
const Store = initializeDefault.Store;
class GuildOnboardingStore extends Store {
}
const prototype = GuildOnboardingStore.prototype;
prototype["shouldShowOnboarding"] = function shouldShowOnboarding(c0) {
  let tmp = c0 !== ME;
  if (tmp) {
    obj = getFavoritesAwareGuildName;
    tmp = !obj.isFavoritesGuildId(c0);
  }
  if (tmp) {
    let hasItem = null != tmp5;
    if (hasItem) {
      const items = [, ];
      ({ STARTED: arr[0], READY: arr[1] } = obj);
      hasItem = items.includes(tmp5);
    }
    tmp = hasItem;
  }
  return tmp;
};
prototype["getOnboardingStatus"] = function getOnboardingStatus(guildId) {
  return dependencyMap[guildId];
};
prototype["resetOnboardingStatus"] = function resetOnboardingStatus(arg0) {
  closure_4[arg0] = obj.STARTED;
  closure_5[arg0] = "cover";
};
prototype["getCurrentOnboardingStep"] = function getCurrentOnboardingStep(arg0) {
  let str = table[arg0];
  if (str == null) {
    str = "cover";
  }
  return str;
};
GuildOnboardingStore.displayName = "GuildOnboardingStore";
obj = {
  LOGOUT: function handleReset() {
    closure_4 = {};
    closure_5 = {};
  },
  GUILD_DELETE: function handleDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_ONBOARDING_START: function handleOnboardingStart(guildId) {
    closure_4[guildId.guildId] = obj.STARTED;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handlePromptsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (dependencyMap[guildId] !== obj.STARTED) {
      return false;
    } else {
      dependencyMap[guildId] = tmp ? tmp2.READY : tmp2.NOT_APPLICABLE;
    }
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function handlePromptsFetchFailure(guildId) {
    closure_4[guildId.guildId] = obj.NOT_APPLICABLE;
  },
  GUILD_ONBOARDING_COMPLETE: function handleCompleteOnboarding(guildId) {
    closure_4[guildId.guildId] = obj.COMPLETED;
  },
  GUILD_ONBOARDING_SET_STEP: function handleOnboardingStep(guildId) {
    closure_5[guildId.guildId] = guildId.step;
  },
  CONNECTION_OPEN: function handleResetOnboardingStep() {
    closure_5 = {};
  }
};
const guildOnboardingStore = new GuildOnboardingStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingStore.tsx");

export default guildOnboardingStore;
export const GuildOnboardingStatus = obj;
export const isOnboarding = function isOnboarding(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [, ];
    ({ STARTED: arr[0], READY: arr[1] } = obj);
    hasItem = items.includes(arg0);
  }
  return hasItem;
};