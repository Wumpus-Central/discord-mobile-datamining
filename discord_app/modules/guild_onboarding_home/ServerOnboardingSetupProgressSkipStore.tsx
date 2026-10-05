// === Module 16192: ServerOnboardingSetupProgressSkipStore ===

// Module 16192 (ServerOnboardingSetupProgressSkipStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let set = new Set();
let _Set1 = set;
const PersistedStore = get_initializedDefault.PersistedStore;
class ServerOnboardingSetupProgressSkipStore extends PersistedStore {
  initialize(skippedGuildIds) {
    skippedGuildIds = undefined;
    const _Set = Set;
    if (skippedGuildIds != null) {
      skippedGuildIds = skippedGuildIds.skippedGuildIds;
    }
    if (skippedGuildIds == null) {
      skippedGuildIds = [];
    }
    _Set1 = new _Set(skippedGuildIds);
  }
  getState() {
    const obj = { skippedGuildIds: Array.from(_Set1) };
    return obj;
  }
  isSkipped(arg0) {
    return _Set1.has(arg0);
  }
}
const prototype = ServerOnboardingSetupProgressSkipStore.prototype;
ServerOnboardingSetupProgressSkipStore.displayName = "ServerOnboardingSetupProgressSkipStore";
ServerOnboardingSetupProgressSkipStore.persistKey = "ServerOnboardingSetupProgressSkippedGuildIds";
let obj = {
  SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function handleSkip(guildId) {
    guildId = guildId.guildId;
    set = new Set(_Set1);
    _Set1 = set.add(guildId);
  }
};
const serverOnboardingSetupProgressSkipStore = new ServerOnboardingSetupProgressSkipStore(DispatcherDefault, obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [serverOnboardingSetupProgressSkipStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [serverOnboardingSetupProgressSkipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => serverOnboardingSetupProgressSkipStore.isSkipped(closure_0), items1);
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/ServerOnboardingSetupProgressSkipStore.tsx");

export default serverOnboardingSetupProgressSkipStore;
export const skipServerOnboardingSetupProgress = function skipServerOnboardingSetupProgress(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId };
  obj.dispatch(obj2);
};
export const useIsServerOnboardingSetupProgressSkipped = tmp4;