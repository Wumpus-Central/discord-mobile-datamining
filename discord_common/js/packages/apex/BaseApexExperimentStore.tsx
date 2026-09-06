// === Module 1237: BaseApexExperimentStore ===

// Module 1237 (BaseApexExperimentStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import ApexTypes from "ApexTypes" /* 1239 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1241 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
const WebAnalyticsEvents = fn(1085).WebAnalyticsEvents;
const logger = new fn(4).Logger("ApexExperimentStore");
let tmp3 = typeof window === "undefined";
if (typeof window !== "undefined") {
  const _window2 = window;
  let tmp4 = null != window.TextEncoder;
  if (tmp4) {
    const _window = window;
    tmp4 = null != window.TextDecoder;
  }
  tmp3 = tmp4;
}
if (!tmp3) {
  fn(1238);
}
let items = [fn(1239).UnitType.User, fn(1239).UnitType.Installation];
let closure_10 = {};
let clientOverrides = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
const set = new Set();
const set1 = new Set();
const apexTrackedExposures = "apexTrackedExposures";
let c18 = 604800000;
let closure_19 = {};
const dependencyMap4 = {};
const PersistedStore = initializeDefault.PersistedStore;
class BaseApexExperimentStore extends PersistedStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.track = function track() {
      return Promise.resolve();
    };
    applyArgumentsResult.surface = "unset";
    return applyArgumentsResult;
  }
}
const prototype = BaseApexExperimentStore.prototype;
prototype["loadStoredState"] = function loadStoredState(version, buildOverrideExperiments) {
  if (null != version) {
    if (3 === version.version) {
      ({ clientOverrides: closure_11, evaluatedExperiments: obj } = version);
    }
    closure_13 = {};
    for (const key10020 in arg1) {
      let tmp9 = dependencyMap4[key10020];
      if (null == tmp9) {
        let obj2 = MurmurHashV3Default;
        let v3Result = obj2.v3(key10020);
        tmp12[key10020] = v3Result;
        tmp9 = v3Result;
      }
      obj = { hashedName: tmp9, variantId: arg1[key10020], isOverride: true, exposureTrackingEnabled: false, useAsEligibility: false };
      closure_13[key10020] = obj;
      continue;
    }
    const self = this;
    closure_19 = this.loadTrackedExposures();
  }
  let tmp = null != version;
  if (tmp) {
    tmp = 2 === version.version;
  }
  if (tmp) {
    clientOverrides = version.clientOverrides;
    obj = {};
    const merged = Object.assign(version.evaluatedExperiments);
    obj.installation = {};
  }
};
prototype["getState"] = function getState() {
  obj = { version: 3, evaluatedExperiments: obj, clientOverrides };
  return obj;
};
prototype["setExperimentAssignments"] = function setExperimentAssignments(apexExperiments, arg1) {
  if (null == apexExperiments) {
    if (null == arg1) {
      return false;
    }
  }
  const self = this;
  const result = this.clearSessionOverrides();
  if (null != apexExperiments) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = ApexTypes.UnitTypeToKind[nextResult];
      let tmp8 = apexExperiments.assignments[nextResult];
      let tmp9 = tmp8;
      if (null != tmp8) {
        if (null != tmp7) {
          let tmp38 = obj[tmp7];
          for (const key10031 in tmp9) {
            let addResult = set1.add(key10031);
            ({ evaluation_id, assignments } = tmp9[key10031]);
            obj = { evaluationId: evaluation_id, assignments: {} };
            tmp38[key10031] = obj;
            for (const item10042 of assignments) {
              let tmp16 = _slicedToArray(item10042, 6);
              [tmp17, tmp18, tmp19] = tmp16;
              let num = tmp19;
              let tmp20 = tmp16[3];
              let tmp21 = tmp16[4];
              let tmp22 = tmp16[5];
              if (tmp19 == null) {
                num = 0;
              }
              obj = { hashedName: tmp17, variantId: tmp18, trackedVariantId: null, isOverride: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null, config: null };
              obj.trackedVariantId = tmp21;
              obj.isOverride = num & ApexTypes.ExperimentFlags.IsOverride;
              obj.revision = tmp20;
              obj.exposureTrackingEnabled = num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled;
              obj.useAsEligibility = num & ApexTypes.ExperimentFlags.UseAsEligibility;
              obj.config = tmp22;
              tmp10.assignments[tmp17] = obj;
              continue;
            }
          }
        }
      }
      continue;
    }
  }
  if (null != arg1) {
    const result1 = self.setGuildExperimentAssignments(arg1);
  }
  return true;
};
prototype["setGuildExperimentAssignments"] = function setGuildExperimentAssignments(arg0) {
  obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    ({ evaluation_id, assignments } = tmp8);
    obj = { evaluationId: evaluation_id, assignments: {} };
    tmp[tmp7] = obj;
    for (const item10038 of assignments) {
      let tmp14 = _slicedToArray(item10038, 5);
      [tmp15, tmp16, tmp17] = tmp14;
      let num = tmp17;
      let tmp18 = tmp14[3];
      let tmp19 = tmp14[4];
      if (tmp17 == null) {
        num = 0;
      }
      obj = { hashedName: tmp15, variantId: tmp16, trackedVariantId: null, isOverride: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null };
      obj.trackedVariantId = tmp19;
      obj.isOverride = num & ApexTypes.ExperimentFlags.IsOverride;
      obj.revision = tmp18;
      obj.exposureTrackingEnabled = num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled;
      obj.useAsEligibility = num & ApexTypes.ExperimentFlags.UseAsEligibility;
      tmp9.assignments[tmp15] = obj;
      continue;
    }
    continue;
  }
  tmp3 = entries[Symbol.iterator]();
};
prototype["createOverride"] = function createOverride(experimentName, variantId) {
  obj = {};
  const merged = Object.assign(closure_11);
  let tmp3 = dependencyMap4[experimentName];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(experimentName);
    tmp2[experimentName] = v3Result;
    tmp3 = v3Result;
  }
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
  closure_11 = obj;
  const result = this.trackExposureSuppression(experimentName, "client_override");
};
prototype["deleteOverride"] = function deleteOverride(experimentName) {
  items = [experimentName];
  closure_11 = _objectWithoutProperties(closure_11, items.map(_toPropertyKey));
};
prototype["createSessionOverride"] = function createSessionOverride(experimentName, variantId) {
  obj = {};
  const merged = Object.assign(closure_12);
  let tmp3 = dependencyMap4[experimentName];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(experimentName);
    tmp2[experimentName] = v3Result;
    tmp3 = v3Result;
  }
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
  closure_12 = obj;
};
prototype["deleteSessionOverride"] = function deleteSessionOverride(experimentName) {
  items = [experimentName];
  closure_12 = _objectWithoutProperties(closure_12, items.map(_toPropertyKey));
};
prototype["setExperimentsMetadata"] = function setExperimentsMetadata(experiments) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(Object.fromEntries(experiments.map((name) => {
    items = [name.name, name];
    return items;
  })));
};
prototype["getExperimentsMetadata"] = function getExperimentsMetadata() {
  return obj;
};
prototype["getClientOverrides"] = function getClientOverrides() {
  return closure_11;
};
prototype["getSessionOverrides"] = function getSessionOverrides() {
  return closure_12;
};
prototype["getExperimentClientOverride"] = function getExperimentClientOverride(arg0) {
  return clientOverrides[arg0];
};
prototype["getExperimentSessionOverride"] = function getExperimentSessionOverride(arg0) {
  return dependencyMap2[arg0];
};
prototype["handleLogout"] = function handleLogout(arg0) {
  const self = this;
  if (!arg0) {
    const result = self.clearUserServerAssignments();
    const result1 = self.clearSessionOverrides();
  }
  const Storage = Storage2.Storage;
  Storage.remove(apexTrackedExposures);
  const result2 = self.clearAllTrackedExposures();
};
prototype["registerExperiment"] = function registerExperiment(name) {
  closure_10[name.name] = name;
  if (null != dependencyMap3[name.name]) {
    const self = this;
    const result = this.trackExposureSuppression(name.name, "cookie_override");
  }
};
prototype["getRegisteredExperiments"] = function getRegisteredExperiments() {
  return closure_10;
};
prototype["getAssignment"] = function getAssignment(kind, id, name) {
  const self = this;
  let override = this.getOverride(name);
  if (null == override) {
    override = self.getServerAssignment(kind, id, name);
  }
  return override;
};
prototype["getServerAssignment"] = function getServerAssignment(kind, id, name) {
  let tmp2 = dependencyMap4[name];
  if (null == tmp2) {
    obj = MurmurHashV3Default;
    const v3Result = obj.v3(name);
    tmp[name] = v3Result;
    tmp2 = v3Result;
  }
  return null != obj[kind][id] ? obj[kind][id].assignments[tmp2] : undefined;
};
prototype["getEvaluation"] = function getEvaluation(arg0, arg1) {
  let evaluationId;
  if (obj[arg0][arg1] != null) {
    evaluationId = tmp.evaluationId;
  }
  return evaluationId;
};
prototype["getEvaluationAndAssignmentInner"] = function getEvaluationAndAssignmentInner(user, LOGGED_OUT_USER_ID_SENTINEL, logger) {
  const override = this.getOverride(logger);
  if (null != override) {
    items = [undefined, override];
    return items;
  } else {
    if (null == obj[user][LOGGED_OUT_USER_ID_SENTINEL]) {
      const items1 = [undefined, undefined];
      let items2 = items1;
    } else {
      items2 = [tmp10.evaluationId, ];
      let tmp3 = dependencyMap4[logger];
      if (null == tmp3) {
        obj = MurmurHashV3Default;
        const v3Result = obj.v3(logger);
        tmp2[logger] = v3Result;
        tmp3 = v3Result;
      }
      items2[1] = tmp10.assignments[tmp3];
    }
    return items2;
  }
};
prototype["getEvaluationAndAssignment"] = function getEvaluationAndAssignment(user, id, logger, tmpResult) {
  const self = this;
  [tmp3, tmp4] = _slicedToArray(this.getEvaluationAndAssignmentInner(user, id, logger), 2);
  if ("guild" !== user) {
    items = [tmp3, tmp4];
    return items;
  } else {
    let LOGGED_OUT_USER_ID_SENTINEL = tmpResult;
    if (tmpResult == null) {
      LOGGED_OUT_USER_ID_SENTINEL = ApexTypes.LOGGED_OUT_USER_ID_SENTINEL;
    }
    tmpResult = _slicedToArray(self.getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, logger), 2);
    [r10021, tmp8] = tmpResult;
    if (null == tmp8) {
      const items1 = [undefined, undefined];
      let items6 = items1;
    } else if (tmp8.isOverride) {
      const items2 = [tmp3, tmp8];
      items6 = items2;
    } else if (tmp8.useAsEligibility) {
      if (null == tmp4) {
        const items3 = [undefined, undefined];
        let items5 = items3;
      } else if (null != tmp4.variantId) {
        const items4 = [tmp3, tmp4];
        items5 = items4;
      } else {
        items5 = [undefined, undefined];
      }
    } else {
      items6 = [undefined, undefined];
    }
    return items6;
  }
  const tmp2 = _slicedToArray(this.getEvaluationAndAssignmentInner(user, id, logger), 2);
};
prototype["trackExperimentExposure"] = function trackExperimentExposure(evaluation_id, experiment, location, unit_type, revision, trackedVariantId, arg6) {
  const self = this;
  importDefault = evaluation_id;
  dependencyMap = experiment;
  const exposure_location = location;
  const tracked_variation_id = trackedVariantId;
  closure_0 = arg6;
  const combined = "" + experiment + "|" + revision + "|" + trackedVariantId + "|" + location + "|" + arg6 + "|1";
  let tmp3 = dependencyMap4[combined];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(combined);
    tmp2[combined] = v3Result;
    tmp3 = v3Result;
  }
  if ("user" === unit_type) {
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id, experiment, exposure_location, unit_type, tracked_variation_id }, { flush: true }));
  } else if ("installation" === unit_type) {
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id, installation_id, experiment, exposure_location, unit_type, tracked_variation_id }, { flush: true }));
  } else if ("guild" === unit_type) {
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EVALUATION_EXPOSED, { evaluation_id, guild_id, experiment, exposure_location, unit_type, tracked_variation_id, revision }, { flush: true }));
  }
};
prototype["trackCommonTriggerPointExposures"] = function trackCommonTriggerPointExposures(location) {
  closure_0 = location;
  const self = this;
  function _loop(evaluationId) {
    const combined = "" + evaluationId + "|" + evaluationId;
    let tmp3 = dependencyMap2[combined];
    if (null == tmp3) {
      const v3Result = self(1241).v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
      obj = self(1241);
    }
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: evaluationId, exposure_location: evaluationId, unit_type: "user" }, { flush: true }));
  }
  const result = this.evaluationsWithUnitIds("user");
  const iter = result[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next().evaluationId);
    continue;
  }
  function _loop2(evaluationId, unitId) {
    _self = unitId;
    const combined = "" + evaluationId + "|" + evaluationId;
    let tmp3 = dependencyMap2[combined];
    if (null == tmp3) {
      const v3Result = self(1241).v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
      obj = self(1241);
    }
    _self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id: evaluationId, exposure_location: evaluationId, unit_type: "installation", installation_id }, { flush: true }));
  }
  const result1 = self.evaluationsWithUnitIds("installation");
  for (const item10023 of result1) {
    let _loop2Result = _loop2(item10023.evaluationId, item10023.unitId);
    continue;
  }
};
prototype["withExposureTracking"] = function withExposureTracking(v3Result, fn) {
  const self = this;
  if (this.shouldTrackExposure(v3Result)) {
    fn();
    const _Date = Date;
    closure_19[v3Result] = Date.now();
    self.saveTrackedExposures(closure_19);
  }
};
prototype["trackExposureSuppression"] = function trackExposureSuppression(name, client_override) {
  if (null != closure_10[name]) {
    const self = this;
    if ("user" === tmp.kind) {
      obj = { experiment: name, unit_type: tmp.kind, suppression_source: client_override };
      self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj, { flush: true });
    } else if ("installation" === tmp.kind) {
      const _Object = Object;
      const first = Object.keys(obj.installation)[0];
      if (null != first) {
        obj = { experiment: name, unit_type: tmp.kind, suppression_source: client_override, installation_id: first };
        self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
      }
    } else if ("guild" === tmp.kind) {
      const _Object2 = Object;
      const first1 = Object.keys(obj.guild)[0];
      if (null != first1) {
        obj = { experiment: name, unit_type: tmp.kind, suppression_source: client_override, guild_id: first1 };
        self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj, { flush: true });
      }
    }
  }
};
prototype["evaluationIds"] = function evaluationIds(arg0) {
  const values = Object.values(obj[arg0]);
  const mapped = values.map((evaluationId) => evaluationId.evaluationId);
  return mapped.filter((item) => null != item);
};
prototype["evaluationsWithUnitIds"] = function evaluationsWithUnitIds(installation) {
  const entries = Object.entries(obj[installation]);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return null != tmp.evaluationId;
  });
  return found.map((item) => {
    [tmp, tmp2] = item;
    return { evaluationId: tmp2.evaluationId, unitId: tmp };
  });
};
prototype["shouldTrackExposure"] = function shouldTrackExposure(v3Result) {
  let tmp2 = null == tmp;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = Date.now() - tmp > c18;
  }
  return tmp2;
};
prototype["loadTrackedExposures"] = function loadTrackedExposures() {
  const Storage = Storage2.Storage;
  value = Storage.get(apexTrackedExposures);
  if (null != value) {
    if (2 === value.version) {
      const exposures = value.exposures;
      const _Date = Date;
      let flag = false;
      let flag2 = false;
      const timestamp = Date.now();
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          if (timestamp - exposures[tmp10] <= c18) {
            continue;
          } else {
            delete tmp2[tmp3];
            flag = true;
            continue;
          }
          continue;
        }
      }
      if (flag2) {
        const self = this;
        this.saveTrackedExposures(exposures);
      }
      return exposures;
    }
  }
  return {};
};
prototype["saveTrackedExposures"] = function saveTrackedExposures(exposures) {
  try {
    const Storage = Storage2.Storage;
    obj = { version: 2, exposures };
    const result = Storage.set(apexTrackedExposures, obj);
  } catch (tmp6) {
    const self = this;
    logger.error("Error saving tracked exposures", tmp6);
    obj = { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" };
    this.track(WebAnalyticsEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, obj, { flush: true });
  }
};
prototype["clearForTests"] = function clearForTests() {
  const result = this.clearAllServerAssignments();
  this.clearAllOverrides();
  const result1 = this.clearAllTrackedExposures();
  set.clear();
  set1.clear();
};
prototype["clearAllServerAssignments"] = function clearAllServerAssignments() {

};
prototype["clearUserServerAssignments"] = function clearUserServerAssignments() {
  obj = { user: {}, guild: {}, installation: obj.installation };
};
prototype["clearAllOverrides"] = function clearAllOverrides() {
  closure_11 = {};
  closure_12 = {};
  closure_13 = {};
};
prototype["clearSessionOverrides"] = function clearSessionOverrides() {
  closure_12 = {};
};
prototype["clearAllTrackedExposures"] = function clearAllTrackedExposures() {
  closure_19 = {};
};
prototype["getHash"] = function getHash(arg0) {
  let tmp2 = dependencyMap4[arg0];
  if (null == tmp2) {
    const v3Result = MurmurHashV3Default.v3(arg0);
    tmp[arg0] = v3Result;
    tmp2 = v3Result;
  }
  return tmp2;
};
prototype["handleFetchStart"] = function handleFetchStart(arg0) {
  set.add(arg0);
};
prototype["handleFetchSuccess"] = function handleFetchSuccess(arg0, apexExperiments) {
  set.delete(arg0);
  set1.add(arg0);
  const result = this.setExperimentAssignments(apexExperiments);
};
prototype["handleFetchFailure"] = function handleFetchFailure(arg0) {
  set.delete(arg0);
  set1.add(arg0);
};
prototype["isFetching"] = function isFetching(arg0) {
  return set.has(arg0);
};
prototype["hasLoaded"] = function hasLoaded(arg0) {
  return set1.has(arg0);
};
prototype["getOverride"] = function getOverride(arg0) {
  let tmp = dependencyMap2[arg0];
  if (tmp == null) {
    tmp = clientOverrides[arg0];
  }
  if (tmp == null) {
    tmp = dependencyMap3[arg0];
  }
  return tmp;
};
BaseApexExperimentStore.displayName = "ApexExperimentStore";
BaseApexExperimentStore.persistKey = "ApexExperimentStore";
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/BaseApexExperimentStore.tsx");

export default BaseApexExperimentStore;