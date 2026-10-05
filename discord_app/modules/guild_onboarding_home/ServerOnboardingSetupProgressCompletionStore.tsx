// discord_app/modules/guild_onboarding_home/ServerOnboardingSetupProgressCompletionStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let set = new Set();
let _Set1 = set;
const PersistedStore = get_initializedDefault.PersistedStore;
class ServerOnboardingSetupProgressCompletionStore extends PersistedStore {
  initialize(completedGuildIds) {
    completedGuildIds = undefined;
    const _Set = Set;
    if (completedGuildIds != null) {
      completedGuildIds = completedGuildIds.completedGuildIds;
    }
    if (completedGuildIds == null) {
      completedGuildIds = [];
    }
    _Set1 = new _Set(completedGuildIds);
  }
  getState() {
    const obj = { completedGuildIds: Array.from(_Set1) };
    return obj;
  }
  isComplete(arg0) {
    return _Set1.has(arg0);
  }
}
const prototype = ServerOnboardingSetupProgressCompletionStore.prototype;
ServerOnboardingSetupProgressCompletionStore.displayName = "ServerOnboardingSetupProgressCompletionStore";
ServerOnboardingSetupProgressCompletionStore.persistKey = "ServerOnboardingSetupProgressCompletedGuildIds";
let obj = {
  SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function handleComplete(guildId) {
    guildId = guildId.guildId;
    set = new Set(_Set1);
    _Set1 = set.add(guildId);
  },
};
const serverOnboardingSetupProgressCompletionStore = new ServerOnboardingSetupProgressCompletionStore(
  DispatcherDefault,
  obj,
);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [serverOnboardingSetupProgressCompletionStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [serverOnboardingSetupProgressCompletionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => serverOnboardingSetupProgressCompletionStore.isComplete(closure_0),
        items1,
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_onboarding_home/ServerOnboardingSetupProgressCompletionStore.tsx",
);

export default serverOnboardingSetupProgressCompletionStore;
export const markServerOnboardingSetupProgressComplete = function markServerOnboardingSetupProgressComplete(guildId) {
  if (!serverOnboardingSetupProgressCompletionStore.isComplete(guildId)) {
    const obj2 = { type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const useIsServerOnboardingSetupProgressComplete = tmp4;
