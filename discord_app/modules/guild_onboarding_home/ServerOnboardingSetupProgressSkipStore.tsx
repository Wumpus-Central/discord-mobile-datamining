// === Module 16095: ServerOnboardingSetupProgressSkipStore ===

// Module 16095 (ServerOnboardingSetupProgressSkipStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const require = globalThis.__r;

const require = fn;
const set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class ServerOnboardingSetupProgressSkipStore extends PersistedStore {
}
const prototype = ServerOnboardingSetupProgressSkipStore.prototype;
prototype["initialize"] = function initialize(skippedGuildIds) {
  skippedGuildIds = undefined;
  if (skippedGuildIds != null) {
    skippedGuildIds = skippedGuildIds.skippedGuildIds;
  }
  if (skippedGuildIds == null) {
    skippedGuildIds = [];
  }
  closure_3 = new Set(skippedGuildIds);
};
prototype["getState"] = function getState() {
  return { skippedGuildIds: Array.from(closure_3) };
};
prototype["isSkipped"] = function isSkipped(arg0) {
  return set.has(arg0);
};
ServerOnboardingSetupProgressSkipStore.displayName = "ServerOnboardingSetupProgressSkipStore";
ServerOnboardingSetupProgressSkipStore.persistKey = "ServerOnboardingSetupProgressSkippedGuildIds";
const serverOnboardingSetupProgressSkipStore = new ServerOnboardingSetupProgressSkipStore(DispatcherDefault, {
  SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function handleSkip(guildId) {
    closure_3 = new Set(closure_3).add(guildId.guildId);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/ServerOnboardingSetupProgressSkipStore.tsx");

export default serverOnboardingSetupProgressSkipStore;
export const skipServerOnboardingSetupProgress = function skipServerOnboardingSetupProgress(guildId) {
  DispatcherDefault.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId });
};
export const useIsServerOnboardingSetupProgressSkipped = function useIsServerOnboardingSetupProgressSkipped(arg0) {
  _require = arg0;
  const items = [serverOnboardingSetupProgressSkipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => serverOnboardingSetupProgressSkipStore.isSkipped(closure_0), items1);
};