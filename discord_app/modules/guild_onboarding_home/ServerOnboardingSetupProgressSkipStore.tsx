// === Module 16192: ServerOnboardingSetupProgressSkipStore ===

// Module 16192 (ServerOnboardingSetupProgressSkipStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/ServerOnboardingSetupProgressSkipStore.tsx");

export default serverOnboardingSetupProgressSkipStore;
export const skipServerOnboardingSetupProgress = function skipServerOnboardingSetupProgress(guildId) {
  DispatcherDefault.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId });
};
export const useIsServerOnboardingSetupProgressSkipped = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [serverOnboardingSetupProgressSkipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return serverOnboardingSetupProgressSkipStore.isSkipped(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [serverOnboardingSetupProgressSkipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => serverOnboardingSetupProgressSkipStore.isSkipped(closure_0), items1);
});