// === Module 11095: BuildOverrideStore ===

// Module 11095 (BuildOverrideStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import BuildOverrideUtils from "BuildOverrideUtils" /* 1366 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { NotResolved: 0, [0]: "NotResolved", Resolving: 1, [1]: "Resolving", Resolved: 2, [2]: "Resolved", Invalid: 3, [3]: "Invalid" };
let Resolved = obj.NotResolved;
let overrides = null;
obj = {};
const Store = get_initializedDefault.Store;
class BuildOverrideStore extends Store {
  getCurrentBuildOverride() {
    if (Resolved === obj.NotResolved) {
      Resolved = obj.Resolving;
      obj = BuildOverrideUtils;
      const buildOverride = obj.getBuildOverride();
      buildOverride.then((overrides) => {
        obj = DispatcherDefault;
        const obj2 = { type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides };
        obj.dispatch(obj2);
      });
    }
    let obj2 = { state: Resolved, overrides };
    return obj2;
  }
  getBuildOverride(url) {
    let obj4;
    _require = url;
    if (!(url in obj4)) {
      obj = require("BuildOverrideUtils");
      const validateURLResult = obj.validateURL(url);
      const tmp = _require;
      if (null != validateURLResult) {
        let obj2 = {};
        const merged = Object.assign(obj4);
        const _String = String;
        obj2[url] = { url, validatedURL: validateURLResult.url, payload: String(validateURLResult.payload), state: obj.Resolving };
        obj4 = obj2;
        const obj3 = { url, validatedURL: validateURLResult.url, payload: String(validateURLResult.payload), state: obj.Resolving };
        const tmpResult = tmp(1366);
        const buildOverrideMeta = tmpResult.getBuildOverrideMeta(validateURLResult.url);
        buildOverrideMeta.then((override) => {
          obj = DispatcherDefault;
          const obj2 = { type: "BUILD_OVERRIDE_RESOLVED", url, override };
          obj.dispatch(obj2);
        });
      } else {
        obj4 = {};
        const merged1 = Object.assign(obj4);
        const obj5 = { url, state: obj.Invalid };
        obj4[url] = obj5;
      }
    }
    return obj4[url];
  }
  getBuildOverrides() {
    return obj;
  }
}
const prototype = BuildOverrideStore.prototype;
BuildOverrideStore.displayName = "BuildOverrideStore";
let obj2 = {
  BUILD_OVERRIDE_RESOLVED: function handleBuildOverrideResolved(arg0) {
    let override;
    let url;
    ({ url, override } = arg0);
    if (null == override) {
      Resolved = obj.Invalid;
    } else {
      Resolved = obj.Resolved;
    }
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = { state: Resolved, override };
    const merged1 = Object.assign(obj[url]);
    obj[url] = obj2;
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function handleCurrentBuildOverrideResolved(overrides) {
    Resolved = obj.Resolved;
    overrides = overrides.overrides;
  }
};
const buildOverrideStore = new BuildOverrideStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default buildOverrideStore;
export const State = obj;