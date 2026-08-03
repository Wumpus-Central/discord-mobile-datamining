import { Store } from "initialize";

const require = arg1;
let obj = { NotResolved: 0, [0]: "NotResolved", Resolving: 1, [1]: "Resolving", Resolved: 2, [2]: "Resolved", Invalid: 3, [3]: "Invalid" };
const NotResolved = obj.NotResolved;
let c5 = null;
let closure_6 = {};
class BuildOverrideStore extends Store {
}
const prototype = BuildOverrideStore.prototype;
prototype["getCurrentBuildOverride"] = function getCurrentBuildOverride() {
  if (Resolving === obj.NotResolved) {
    Resolving = obj.Resolving;
    obj = require(4171) /* Version */;
    const buildOverride = obj.getBuildOverride();
    buildOverride.then((overrides) => {
      let obj = callback(table[1]);
      obj = { type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides };
      obj.dispatch(obj);
    });
  }
  obj = { state: Resolving, overrides: c5 };
  return obj;
};
prototype["getBuildOverride"] = function getBuildOverride(target) {
  const _require = target;
  if (!(target in obj1)) {
    let obj = _require(4171);
    const validateURLResult = obj.validateURL(target);
    if (null != validateURLResult) {
      obj = {};
      const merged = Object.assign(obj1);
      obj = { url: null, validatedURL: null, payload: null, state: null };
      obj[0] = target;
      obj[1] = validateURLResult.url;
      const _String = String;
      obj[2] = String(validateURLResult.payload);
      obj[3] = obj.Resolving;
      obj[target] = obj;
      obj1 = obj;
      const buildOverrideMeta = tmp(4171).getBuildOverrideMeta(validateURLResult.url);
      buildOverrideMeta.then((override) => {
        let obj = outer1_1(outer1_2[1]);
        obj = { type: "BUILD_OVERRIDE_RESOLVED", url: closure_0, override };
        obj.dispatch(obj);
      });
      const tmpResult = tmp(4171);
    } else {
      obj1 = {};
      const merged1 = Object.assign(obj1);
      const obj2 = { url: null, state: null };
      obj2[0] = target;
      obj2[1] = obj.Invalid;
      obj1[target] = obj2;
    }
    tmp = _require;
  }
  return obj1[target];
};
prototype["getBuildOverrides"] = function getBuildOverrides() {
  return closure_6;
};
BuildOverrideStore.displayName = "BuildOverrideStore";
obj = {
  BUILD_OVERRIDE_RESOLVED: function handleBuildOverrideResolved(arg0) {
    let override;
    let url;
    ({ url, override } = arg0);
    if (null == override) {
      let Resolved = obj.Invalid;
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
    const Resolved = obj.Resolved;
    overrides = overrides.overrides;
  }
};
const buildOverrideStore = new BuildOverrideStore(require("dispatcher"), obj);
const result = require("initialize").fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default buildOverrideStore;
export const State = obj;