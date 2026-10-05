// discord_app/modules/guild_onboarding/GuildOnboardingStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4, closure_5;

const ME = Constants.ME;
const GuildOnboardingStatus = {
  STARTED: "started",
  READY: "ready",
  COMPLETED: "completed",
  NOT_APPLICABLE: "not_applicable",
};
const React3 = {};
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class GuildOnboardingStore extends Store {
  shouldShowOnboarding(c0) {
    let obj;
    let tmp = c0 !== ME;
    if (tmp) {
      obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(c0);
    }
    if (tmp) {
      let hasItem = null != tmp5;
      if (hasItem) {
        const items = [,];
        ({ STARTED: arr[0], READY: arr[1] } = obj);
        hasItem = items.includes(tmp5);
      }
      tmp = hasItem;
    }
    return tmp;
  }
  getOnboardingStatus(guildId) {
    return closure_4[guildId];
  }
  resetOnboardingStatus(arg0) {
    closure_4[arg0] = obj.STARTED;
    closure_5[arg0] = "cover";
  }
  getCurrentOnboardingStep(arg0) {
    let str = closure_5[arg0];
    if (str == null) {
      str = "cover";
    }
    return str;
  }
}
const prototype = GuildOnboardingStore.prototype;
GuildOnboardingStore.displayName = "GuildOnboardingStore";
const obj2 = {
  LOGOUT: function handleReset() {
    closure_4 = {};
    closure_5 = {};
  },
  GUILD_DELETE: function handleDelete(guild) {
    guild = guild.guild;
    delete closure_4[guild.id];
    delete closure_5[guild.id];
  },
  GUILD_ONBOARDING_START: function handleOnboardingStart(guildId) {
    closure_4[guildId.guildId] = obj.STARTED;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function handlePromptsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (closure_4[guildId] !== obj.STARTED) {
      return false;
    } else {
      closure_4[guildId] = tmp ? obj.READY : obj.NOT_APPLICABLE;
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
  },
};
const guildOnboardingStore = new GuildOnboardingStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingStore.tsx");

export default guildOnboardingStore;
export { GuildOnboardingStatus };
export const isOnboarding = function isOnboarding(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [,];
    ({ STARTED: arr[0], READY: arr[1] } = obj);
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
