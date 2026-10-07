// === Module 16231: ServerOnboardingSetupProgressCompletionStore ===

// Module 16231 (ServerOnboardingSetupProgressCompletionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const require = globalThis.__r;

const require = fn;
const set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class ServerOnboardingSetupProgressCompletionStore extends PersistedStore {
}
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
const serverOnboardingSetupProgressCompletionStore = new ServerOnboardingSetupProgressCompletionStore(DispatcherDefault, {
  SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function handleComplete(guildId) {
    closure_3 = new Set(closure_3).add(guildId.guildId);
  }
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/ServerOnboardingSetupProgressCompletionStore.tsx");

export default serverOnboardingSetupProgressCompletionStore;
export const markServerOnboardingSetupProgressComplete = function markServerOnboardingSetupProgressComplete(guildId) {
  if (!serverOnboardingSetupProgressCompletionStore.isComplete(guildId)) {
    const obj2 = { type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId };
    DispatcherDefault.dispatch(obj2);
  }
};
export const useIsServerOnboardingSetupProgressComplete = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [serverOnboardingSetupProgressCompletionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return serverOnboardingSetupProgressCompletionStore.isComplete(closure_0);
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
  const items = [serverOnboardingSetupProgressCompletionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => serverOnboardingSetupProgressCompletionStore.isComplete(closure_0), items1);
});