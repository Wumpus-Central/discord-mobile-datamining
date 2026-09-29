// discord_app/modules/guild_onboarding_home/ServerOnboardingSetupProgressCompletionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const require = globalThis.__r;

const require = fn;
const set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class ServerOnboardingSetupProgressCompletionStore extends PersistedStore {}
const prototype = ServerOnboardingSetupProgressCompletionStore.prototype;
prototype["initialize"] = function initialize(completedGuildIds) {
  completedGuildIds = undefined;
  if (completedGuildIds != null) {
    completedGuildIds = completedGuildIds.completedGuildIds;
  }
  if (completedGuildIds == null) {
    completedGuildIds = [];
  }
  closure_3 = new Set(completedGuildIds);
};
prototype["getState"] = function getState() {
  return { completedGuildIds: Array.from(closure_3) };
};
prototype["isComplete"] = function isComplete(arg0) {
  return set.has(arg0);
};
ServerOnboardingSetupProgressCompletionStore.displayName = "ServerOnboardingSetupProgressCompletionStore";
ServerOnboardingSetupProgressCompletionStore.persistKey = "ServerOnboardingSetupProgressCompletedGuildIds";
const serverOnboardingSetupProgressCompletionStore = new ServerOnboardingSetupProgressCompletionStore(
  DispatcherDefault,
  {
    SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function handleComplete(guildId) {
      closure_3 = new Set(closure_3).add(guildId.guildId);
    },
  },
);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/ServerOnboardingSetupProgressCompletionStore.tsx",
);

export default serverOnboardingSetupProgressCompletionStore;
export const markServerOnboardingSetupProgressComplete = function markServerOnboardingSetupProgressComplete(guildId) {
  if (!serverOnboardingSetupProgressCompletionStore.isComplete(guildId)) {
    const obj2 = { type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId };
    DispatcherDefault.dispatch(obj2);
  }
};
export const useIsServerOnboardingSetupProgressComplete = function useIsServerOnboardingSetupProgressComplete(arg0) {
  _require = arg0;
  const items = [serverOnboardingSetupProgressCompletionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => serverOnboardingSetupProgressCompletionStore.isComplete(closure_0),
    items1,
  );
};
