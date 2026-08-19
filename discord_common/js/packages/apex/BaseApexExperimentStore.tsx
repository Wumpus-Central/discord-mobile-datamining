// === Module 1213: _toPropertyKey ===

// Module 1213 (_toPropertyKey)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import UnitType from "UnitType" /* 1215 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { WebAnalyticsEvents } from "sum" /* 505 */;

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
const logger = new require("log").Logger("ApexExperimentStore");
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
  require("q");
}
let items = [require("UnitType").UnitType.User, require("UnitType").UnitType.Installation];
let closure_9 = { user: {}, guild: {}, installation: {} };
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
const set = new Set();
const set1 = new Set();
const apexTrackedExposures = "apexTrackedExposures";
let c18 = 604800000;
let closure_19 = {};
let closure_20 = {};
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
      ({ clientOverrides, evaluatedExperiments: obj } = version);
    }
    closure_13 = {};
    for (const key10020 in arg1) {
      let tmp9 = dependencyMap5[key10020];
      if (null == tmp9) {
        let obj2 = MurmurHashV3Default;
        let v3Result = obj2.v3(key10020);
        tmp12[key10020] = v3Result;
        tmp9 = v3Result;
      }
      obj = { hashedName: null, variantId: null, isOverride: true, exposureTrackingEnabled: false, useAsEligibility: false };
      obj[0] = tmp9;
      obj[1] = arg1[key10020];
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
  return { version: 3, evaluatedExperiments: closure_9, clientOverrides: closure_11 };
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
      let tmp7 = UnitType.UnitTypeToKind[nextResult];
      let tmp8 = apexExperiments.assignments[nextResult];
      let tmp9 = tmp8;
      if (null != tmp8) {
        if (null != tmp7) {
          let tmp38 = closure_9[tmp7];
          for (const key10031 in tmp9) {
            let addResult = set1.add(key10031);
            ({ evaluation_id, assignments } = tmp9[key10031]);
            let obj = { evaluationId: null, assignments: null };
            obj[0] = evaluation_id;
            obj[1] = {};
            tmp38[key10031] = obj;
            for (const item10042 of assignments) {
              let tmp16 = callback2(item10042, 6);
              [tmp17, tmp18, tmp19] = tmp16;
              let num = tmp19;
              let tmp20 = tmp16[3];
              let tmp21 = tmp16[4];
              let tmp22 = tmp16[5];
              if (tmp19 == null) {
                num = 0;
              }
              obj = { hashedName: null, variantId: null, trackedVariantId: null, isOverride: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null, config: null };
              obj[0] = tmp17;
              obj[1] = tmp18;
              obj[2] = tmp21;
              obj[3] = num & UnitType.ExperimentFlags.IsOverride;
              obj[4] = tmp20;
              obj[5] = num & UnitType.ExperimentFlags.ExposureTrackingEnabled;
              obj[6] = num & UnitType.ExperimentFlags.UseAsEligibility;
              obj[7] = tmp22;
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
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp3 !== undefined) {
    let tmp6 = callback2(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    ({ evaluation_id, assignments } = tmp8);
    obj = { evaluationId: null, assignments: null };
    obj[0] = evaluation_id;
    obj[1] = {};
    tmp[tmp7] = obj;
    for (const item10038 of assignments) {
      let tmp14 = callback2(item10038, 5);
      [tmp15, tmp16, tmp17] = tmp14;
      let num = tmp17;
      let tmp18 = tmp14[3];
      let tmp19 = tmp14[4];
      if (tmp17 == null) {
        num = 0;
      }
      obj = { hashedName: null, variantId: null, trackedVariantId: null, isOverride: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null };
      obj[0] = tmp15;
      obj[1] = tmp16;
      obj[2] = tmp19;
      obj[3] = num & UnitType.ExperimentFlags.IsOverride;
      obj[4] = tmp18;
      obj[5] = num & UnitType.ExperimentFlags.ExposureTrackingEnabled;
      obj[6] = num & UnitType.ExperimentFlags.UseAsEligibility;
      tmp9.assignments[tmp15] = obj;
      continue;
    }
    continue;
  }
  tmp3 = entries[Symbol.iterator]();
};
prototype["createOverride"] = function createOverride(experimentName, variantId) {
  const obj = {};
  const merged = Object.assign(obj);
  let tmp3 = dependencyMap5[experimentName];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(experimentName);
    tmp2[experimentName] = v3Result;
    tmp3 = v3Result;
  }
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
  const result = this.trackExposureSuppression(experimentName, "client_override");
};
prototype["deleteOverride"] = function deleteOverride(experimentName) {
  items = [experimentName];
  closure_11 = callback(closure_11, items.map(_toPropertyKey));
};
prototype["createSessionOverride"] = function createSessionOverride(experimentName, variantId) {
  const obj = {};
  const merged = Object.assign(obj);
  let tmp3 = dependencyMap5[experimentName];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(experimentName);
    tmp2[experimentName] = v3Result;
    tmp3 = v3Result;
  }
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
};
prototype["deleteSessionOverride"] = function deleteSessionOverride(experimentName) {
  items = [experimentName];
  closure_12 = callback(closure_12, items.map(_toPropertyKey));
};
prototype["setExperimentsMetadata"] = function setExperimentsMetadata(experiments) {
  const obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(Object.fromEntries(experiments.map((item, index) => {
    items = [item.name, item];
    return items;
  })));
};
prototype["getExperimentsMetadata"] = function getExperimentsMetadata() {
  return closure_14;
};
prototype["getClientOverrides"] = function getClientOverrides() {
  return closure_11;
};
prototype["getSessionOverrides"] = function getSessionOverrides() {
  return closure_12;
};
prototype["getExperimentClientOverride"] = function getExperimentClientOverride(arg0) {
  return dependencyMap2[arg0];
};
prototype["getExperimentSessionOverride"] = function getExperimentSessionOverride(arg0) {
  return dependencyMap3[arg0];
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
  if (null != dependencyMap4[name.name]) {
    const self = this;
    const result = this.trackExposureSuppression(name.name, "cookie_override");
  }
};
prototype["getRegisteredExperiments"] = function getRegisteredExperiments() {
  return closure_10;
};
prototype["getAssignment"] = function getAssignment(kind, closure_1, name) {
  const self = this;
  let override = this.getOverride(name);
  if (null == override) {
    override = self.getServerAssignment(kind, closure_1, name);
  }
  return override;
};
prototype["getServerAssignment"] = function getServerAssignment(kind, closure_1, name) {
  let tmp2 = dependencyMap5[name];
  if (null == tmp2) {
    const v3Result = MurmurHashV3Default.v3(name);
    tmp[name] = v3Result;
    tmp2 = v3Result;
  }
  return null != closure_9[kind][closure_1] ? closure_9[kind][closure_1].assignments[tmp2] : undefined;
};
prototype["getEvaluation"] = function getEvaluation(arg0, arg1) {
  let evaluationId;
  if (closure_9[arg0][arg1] != null) {
    evaluationId = tmp.evaluationId;
  }
  return evaluationId;
};
prototype["getEvaluationAndAssignmentInner"] = function getEvaluationAndAssignmentInner(user, LOGGED_OUT_USER_ID_SENTINEL, closure_4) {
  const override = this.getOverride(closure_4);
  if (null != override) {
    items = [undefined, override];
    return items;
  } else {
    if (null == closure_9[user][LOGGED_OUT_USER_ID_SENTINEL]) {
      const items1 = [undefined, undefined];
      let items2 = items1;
    } else {
      items2 = [tmp10.evaluationId, ];
      let tmp3 = dependencyMap5[closure_4];
      if (null == tmp3) {
        const v3Result = MurmurHashV3Default.v3(closure_4);
        tmp2[closure_4] = v3Result;
        tmp3 = v3Result;
      }
      items2[1] = tmp10.assignments[tmp3];
    }
    return items2;
  }
};
prototype["getEvaluationAndAssignment"] = function getEvaluationAndAssignment(closure_5, closure_1, closure_4, closure_2) {
  const self = this;
  [tmp3, tmp4] = callback2(this.getEvaluationAndAssignmentInner(closure_5, closure_1, closure_4), 2);
  if ("guild" !== closure_5) {
    items = [tmp3, tmp4];
    return items;
  } else {
    let LOGGED_OUT_USER_ID_SENTINEL = closure_2;
    if (closure_2 == null) {
      LOGGED_OUT_USER_ID_SENTINEL = UnitType.LOGGED_OUT_USER_ID_SENTINEL;
    }
    [r10021, tmp8] = callback2(self.getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, closure_4), 2);
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
  const tmp2 = callback2(this.getEvaluationAndAssignmentInner(closure_5, closure_1, closure_4), 2);
};
prototype["trackExperimentExposure"] = function trackExperimentExposure(closure_3, closure_4, location, closure_5, revision, trackedVariantId, closure_1) {
  const self = this;
  importDefault = closure_3;
  dependencyMap = closure_4;
  closure_3 = location;
  closure_4 = closure_5;
  closure_5 = revision;
  closure_6 = trackedVariantId;
  closure_0 = closure_1;
  const combined = "" + closure_4 + "|" + revision + "|" + trackedVariantId + "|" + location + "|" + closure_1 + "|1";
  let tmp3 = dependencyMap5[combined];
  if (null == tmp3) {
    const v3Result = MurmurHashV3Default.v3(combined);
    tmp2[combined] = v3Result;
    tmp3 = v3Result;
  }
  if ("user" === closure_5) {
    self.withExposureTracking(tmp3, () => self.track(constants.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: closure_1, experiment: closure_2, exposure_location: closure_3, unit_type: closure_4, tracked_variation_id: closure_6 }, { flush: true }));
  } else if ("installation" === closure_5) {
    self.withExposureTracking(tmp3, () => self.track(constants.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id: closure_1, installation_id: closure_0, experiment: closure_2, exposure_location: closure_3, unit_type: closure_4, tracked_variation_id: closure_6 }, { flush: true }));
  } else if ("guild" === closure_5) {
    self.withExposureTracking(tmp3, () => self.track(constants.EXPERIMENT_GUILD_EVALUATION_EXPOSED, { evaluation_id: closure_1, guild_id: closure_0, experiment: closure_2, exposure_location: closure_3, unit_type: closure_4, tracked_variation_id: closure_6, revision: constants }, { flush: true }));
  }
};
prototype["trackCommonTriggerPointExposures"] = function trackCommonTriggerPointExposures(location) {
  closure_0 = location;
  const self = this;
  function _loop(evaluationId) {
    closure_0 = evaluationId;
    const combined = "" + evaluationId + "|" + closure_0;
    let tmp3 = closure_1_20[combined];
    if (null == tmp3) {
      const v3Result = self(dependencyMap[6]).v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
      const obj = self(dependencyMap[6]);
    }
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: closure_0, exposure_location: closure_0, unit_type: "user" }, { flush: true }));
  }
  const result = this.evaluationsWithUnitIds("user");
  const iter = result[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next().evaluationId);
    continue;
  }
  function _loop2(evaluationId, unitId) {
    closure_0 = evaluationId;
    const _self = unitId;
    const combined = "" + evaluationId + "|" + closure_0;
    let tmp3 = closure_1_20[combined];
    if (null == tmp3) {
      const v3Result = self(dependencyMap[6]).v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
      const obj = self(dependencyMap[6]);
    }
    _self.withExposureTracking(tmp3, () => unitId.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id: closure_0, exposure_location: closure_0, unit_type: "installation", installation_id: unitId }, { flush: true }));
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
  if (null != table[name]) {
    const self = this;
    if ("user" === tmp.kind) {
      let obj = { experiment: null, unit_type: null, suppression_source: null };
      obj[0] = name;
      obj[1] = tmp.kind;
      obj[2] = client_override;
      self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj, { flush: true });
    } else if ("installation" === tmp.kind) {
      const _Object = Object;
      const first = Object.keys(closure_9.installation)[0];
      if (null != first) {
        obj = { experiment: null, unit_type: null, suppression_source: null, installation_id: null };
        obj[0] = name;
        obj[1] = tmp.kind;
        obj[2] = client_override;
        obj[3] = first;
        self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
      }
    } else if ("guild" === tmp.kind) {
      const _Object2 = Object;
      const first1 = Object.keys(closure_9.guild)[0];
      if (null != first1) {
        obj = { experiment: null, unit_type: null, suppression_source: null, guild_id: null };
        obj[0] = name;
        obj[1] = tmp.kind;
        obj[2] = client_override;
        obj[3] = first1;
        self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj, { flush: true });
      }
    }
  }
};
prototype["evaluationIds"] = function evaluationIds(arg0) {
  const values = Object.values(closure_9[arg0]);
  const mapped = values.map((item, index) => item.evaluationId);
  return mapped.filter((item, index) => null != item);
};
prototype["evaluationsWithUnitIds"] = function evaluationsWithUnitIds(installation) {
  const entries = Object.entries(closure_9[installation]);
  const found = entries.filter((item, index) => {
    [, tmp] = item;
    return null != tmp.evaluationId;
  });
  return found.map((item, index) => {
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
  const value = Storage.get(apexTrackedExposures);
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
prototype["saveTrackedExposures"] = function saveTrackedExposures(closure_19) {
  try {
    const Storage = Storage2.Storage;
    let obj = { version: 2, exposures: null };
    obj[1] = closure_19;
    const result = Storage.set(apexTrackedExposures, obj);
  } catch (tmp6) {
    const self = this;
    logger.error("Error saving tracked exposures", tmp6);
    obj = { module: null, call: "ApexExperimentStore.saveTrackedExposures" };
    obj[0] = this.surface;
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
  closure_9 = { user: {}, guild: {}, installation: {} };
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
  let tmp2 = dependencyMap5[arg0];
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
  let tmp = dependencyMap3[arg0];
  if (tmp == null) {
    tmp = dependencyMap2[arg0];
  }
  if (tmp == null) {
    tmp = dependencyMap4[arg0];
  }
  return tmp;
};
BaseApexExperimentStore.displayName = "ApexExperimentStore";
BaseApexExperimentStore.persistKey = "ApexExperimentStore";
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/apex/BaseApexExperimentStore.tsx");

export default BaseApexExperimentStore;