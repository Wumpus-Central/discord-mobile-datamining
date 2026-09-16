// === Module 11571: BuildOverrideStore ===

// Module 11571 (BuildOverrideStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import BuildOverrideUtils from "BuildOverrideUtils" /* 1361 */;

require = fn;
let obj = { NotResolved: 0, [0]: "NotResolved", Resolving: 1, [1]: "Resolving", Resolved: 2, [2]: "Resolved", Invalid: 3, [3]: "Invalid" };
let Resolved = obj.NotResolved;
let overrides = null;
obj = {};
const Store = initializeDefault.Store;
class BuildOverrideStore extends Store {
}
const prototype = BuildOverrideStore.prototype;
prototype["getCurrentBuildOverride"] = function getCurrentBuildOverride() {
  if (Resolved === obj.NotResolved) {
    Resolved = obj.Resolving;
    obj = BuildOverrideUtils;
    const buildOverride = obj.getBuildOverride();
    buildOverride.then((overrides) => {
      DispatcherDefault.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides });
    });
  }
  return { state: Resolved, overrides };
};
prototype["getBuildOverride"] = function getBuildOverride(url) {
  _require = url;
  if (!(url in obj4)) {
    obj = require("BuildOverrideUtils");
    const validateURLResult = obj.validateURL(url);
    if (null != validateURLResult) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      const obj3 = { url, validatedURL: validateURLResult.url, payload: null, state: null };
      const _String = String;
      obj3.payload = String(validateURLResult.payload);
      obj3.state = obj.Resolving;
      obj2[url] = obj3;
      obj4 = obj2;
      const buildOverrideMeta = tmp(1361).getBuildOverrideMeta(validateURLResult.url);
      buildOverrideMeta.then((override) => {
        DispatcherDefault.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url, override });
      });
      const tmpResult = tmp(1361);
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const obj5 = { url, state: obj.Invalid };
      obj4[url] = obj5;
    }
    tmp = _require;
  }
  return obj4[url];
};
prototype["getBuildOverrides"] = function getBuildOverrides() {
  return obj;
};
BuildOverrideStore.displayName = "BuildOverrideStore";
const buildOverrideStore = new BuildOverrideStore(DispatcherDefault, {
  BUILD_OVERRIDE_RESOLVED: function handleBuildOverrideResolved(arg0) {
    ({ url, override } = arg0);
    if (null == override) {
      Resolved = obj.Invalid;
    } else {
      Resolved = obj.Resolved;
    }
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(obj[url]);
    obj2.state = Resolved;
    obj2.override = override;
    obj[url] = obj2;
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function handleCurrentBuildOverrideResolved(overrides) {
    Resolved = obj.Resolved;
    overrides = overrides.overrides;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default buildOverrideStore;
export const State = obj;