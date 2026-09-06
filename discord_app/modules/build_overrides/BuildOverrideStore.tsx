// discord_app/modules/build_overrides/BuildOverrideStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import BuildOverrideUtils from "BuildOverrideUtils.tsx";

require = fn;
let obj = {
  NotResolved: 0,
  [0]: "NotResolved",
  Resolving: 1,
  [1]: "Resolving",
  Resolved: 2,
  [2]: "Resolved",
  Invalid: 3,
  [3]: "Invalid",
};
let Resolved = obj.NotResolved;
let overrides = null;
obj = {};
const Store = initializeDefault.Store;
class BuildOverrideStore extends Store {}
const prototype = BuildOverrideStore.prototype;
prototype["getCurrentBuildOverride"] = function getCurrentBuildOverride() {
  if (Resolved === obj.NotResolved) {
    Resolved = obj.Resolving;
    obj = BuildOverrideUtils;
    const buildOverride = obj.getBuildOverride();
    buildOverride.then((overrides) => {
      obj = { type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides };
      obj.dispatch(obj);
    });
  }
  obj = { state: Resolved, overrides };
  return obj;
};
prototype["getBuildOverride"] = function getBuildOverride(url) {
  _require = url;
  if (!(url in obj1)) {
    obj = require("BuildOverrideUtils");
    const validateURLResult = obj.validateURL(url);
    if (null != validateURLResult) {
      obj = {};
      const merged = Object.assign(obj1);
      obj = { url, validatedURL: validateURLResult.url, payload: null, state: null };
      const _String = String;
      obj.payload = String(validateURLResult.payload);
      obj.state = obj.Resolving;
      obj[url] = obj;
      obj1 = obj;
      const buildOverrideMeta = tmp(1362).getBuildOverrideMeta(validateURLResult.url);
      buildOverrideMeta.then((override) => {
        obj = { type: "BUILD_OVERRIDE_RESOLVED", url, override };
        obj.dispatch(obj);
      });
      const tmpResult = tmp(1362);
    } else {
      obj1 = {};
      const merged1 = Object.assign(obj1);
      const obj2 = { url, state: obj.Invalid };
      obj1[url] = obj2;
    }
    tmp = _require;
  }
  return obj1[url];
};
prototype["getBuildOverrides"] = function getBuildOverrides() {
  return obj;
};
BuildOverrideStore.displayName = "BuildOverrideStore";
obj = {
  BUILD_OVERRIDE_RESOLVED: function handleBuildOverrideResolved(arg0) {
    ({ url, override } = arg0);
    if (null == override) {
      Resolved = obj.Invalid;
    } else {
      Resolved = obj.Resolved;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[url]);
    obj.state = Resolved;
    obj.override = override;
    obj[url] = obj;
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function handleCurrentBuildOverrideResolved(overrides) {
    Resolved = obj.Resolved;
    overrides = overrides.overrides;
  },
};
const buildOverrideStore = new BuildOverrideStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default buildOverrideStore;
export const State = obj;
