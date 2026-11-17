// === Module 1247: BaseApexExperimentStore ===

// Module 1247 (BaseApexExperimentStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import ApexTypes from "ApexTypes" /* 1249 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1251 */;
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
function getHash(arg0) {
  let tmp2 = dependencyMap4[arg0];
  if (null == tmp2) {
    const v3Result = MurmurHashV3Default.v3(arg0);
    tmp[arg0] = v3Result;
    tmp2 = v3Result;
  }
  return tmp2;
}
const WebAnalyticsEvents = fn(1083).WebAnalyticsEvents;
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
  fn(1248);
}
let items = [fn(1249).UnitType.User, fn(1249).UnitType.Installation];
let closure_10 = {};
let clientOverrides = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let set = new Set();
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
    applyArgumentsResult.nextFetchRequestId = 0;
    map = new Map();
    applyArgumentsResult.fetchOwners = map;
    applyArgumentsResult.gatewayGenerations = { user: {}, guild: {}, installation: {} };
    return applyArgumentsResult;
  }
}
const prototype = BaseApexExperimentStore.prototype;
prototype["onAssignmentsIngested"] = function onAssignmentsIngested() {

};
prototype["resolveConfigAssignment"] = function resolveConfigAssignment() {

};
prototype["onConfigApplied"] = function onConfigApplied() {

};
prototype["createFetchRequest"] = function createFetchRequest() {
  obj = { id: null, gatewayGenerations: null };
  const sum = this.nextFetchRequestId + 1;
  this.nextFetchRequestId = sum;
  obj.id = sum;
  const obj2 = { user: null, guild: null, installation: null };
  const merged = Object.assign(this.gatewayGenerations.user);
  obj2.user = {};
  const merged1 = Object.assign(this.gatewayGenerations.guild);
  obj2.guild = {};
  const merged2 = Object.assign(this.gatewayGenerations.installation);
  obj2.installation = {};
  obj.gatewayGenerations = obj2;
  return obj;
};
prototype["setGatewayExperimentAssignments"] = function setGatewayExperimentAssignments(apexExperiments, arg1, id) {
  const self = this;
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp6 = ApexTypes.UnitTypeToKind[nextResult];
    obj = undefined;
    if (apexExperiments != null) {
      obj = apexExperiments.assignments[tmp3];
    }
    if (obj == null) {
      obj = {};
    }
    let keys = Object.keys(obj);
    for (const item10031 of keys) {
      let num = self.gatewayGenerations[tmp6][item10031];
      if (num == null) {
        num = 0;
      }
      self.gatewayGenerations[tmp6][item10031] = num + 1;
      continue;
    }
    continue;
  }
  return self.setExperimentAssignments(apexExperiments, arg1, id);
};
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
      let obj3 = { hashedName: tmp9, variantId: arg1[key10020], isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false, useAsEligibility: false };
      closure_13[key10020] = obj3;
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
prototype["setExperimentAssignments"] = function setExperimentAssignments(apexExperiments, arg1, id, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null == apexExperiments) {
    if (null == arg1) {
      return false;
    }
  }
  let tmp = null != id;
  if (tmp) {
    let tmp2;
    if (apexExperiments != null) {
      const tmp5 = apexExperiments.assignments[ApexTypes.UnitType.User];
      if (tmp5 != null) {
        tmp2 = tmp5[id];
      }
    }
    tmp = null != tmp2;
  }
  const self = this;
  if (tmp) {
    const result = self.clearSessionOverrides();
  }
  if (null != apexExperiments) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = ApexTypes.UnitTypeToKind[nextResult];
      let tmp13 = apexExperiments.assignments[nextResult];
      let tmp14 = tmp13;
      if (null != tmp13) {
        if (null != tmp12) {
          let tmp60 = obj[tmp12];
          for (const key10046 in tmp14) {
            if (flag) {
              let addResult = set1.add(key10046);
            }
            ({ evaluation_id, assignments } = tmp14[key10046]);
            obj = { evaluationId: evaluation_id, assignments: {} };
            tmp60[key10046] = obj;
            for (const item10065 of assignments) {
              let tmp26 = _slicedToArray(item10065, 6);
              [tmp27, tmp28, tmp29] = tmp26;
              let num = tmp29;
              let tmp30 = tmp26[3];
              let tmp31 = tmp26[4];
              let tmp32 = tmp26[5];
              if (tmp29 == null) {
                num = 0;
              }
              let obj2 = { hashedName: tmp27, variantId: tmp28, trackedVariantId: null, isOverride: null, isAppLaunch: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null, config: null };
              obj2.trackedVariantId = tmp31;
              obj2.isOverride = num & ApexTypes.ExperimentFlags.IsOverride;
              obj2.isAppLaunch = num & ApexTypes.ExperimentFlags.IsAppLaunch;
              obj2.revision = tmp30;
              obj2.exposureTrackingEnabled = num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled;
              obj2.useAsEligibility = num & ApexTypes.ExperimentFlags.UseAsEligibility;
              obj2.config = tmp32;
              tmp20.assignments[tmp27] = obj2;
              continue;
            }
          }
        }
      }
      continue;
    }
  }
  if (null != apexExperiments) {
    const iter2 = items[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp47 = ApexTypes.UnitTypeToKind[nextResult1];
      let obj3 = apexExperiments.assignments[nextResult1];
      if (obj3 == null) {
        obj3 = {};
      }
      let keys = Object.keys(obj3);
      for (const item10134 of keys) {
        let result1 = self.onAssignmentsIngested(tmp47, item10134, obj[tmp47][item10134]);
        continue;
      }
      continue;
    }
  }
  if (null != arg1) {
    const result2 = self.setGuildExperimentAssignments(arg1);
  }
  return true;
};
prototype["setGuildExperimentAssignments"] = function setGuildExperimentAssignments(arg0) {
  const self = this;
  obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    ({ evaluation_id, assignments } = tmp8);
    let obj2 = { evaluationId: evaluation_id, assignments: {} };
    let tmp9 = obj2;
    tmp[tmp7] = obj2;
    for (const item10040 of assignments) {
      let tmp14 = _slicedToArray(item10040, 5);
      [tmp15, tmp16, tmp17] = tmp14;
      let num = tmp17;
      let tmp18 = tmp14[3];
      let tmp19 = tmp14[4];
      if (tmp17 == null) {
        num = 0;
      }
      let obj3 = { hashedName: tmp15, variantId: tmp16, trackedVariantId: null, isOverride: null, isAppLaunch: null, revision: null, exposureTrackingEnabled: null, useAsEligibility: null };
      obj3.trackedVariantId = tmp19;
      obj3.isOverride = num & ApexTypes.ExperimentFlags.IsOverride;
      obj3.isAppLaunch = num & ApexTypes.ExperimentFlags.IsAppLaunch;
      obj3.revision = tmp18;
      obj3.exposureTrackingEnabled = num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled;
      obj3.useAsEligibility = num & ApexTypes.ExperimentFlags.UseAsEligibility;
      tmp9.assignments[tmp15] = obj3;
      continue;
    }
    let result = self.onAssignmentsIngested("guild", tmp7, tmp9);
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
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false };
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
  obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false };
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
  items = [ApexTypes.INSTALLATION_UNIT_ID, ...Object.keys(obj.installation)];
  set = new Set(items);
  const items1 = [set, set1];
  for (const item10031 of items1) {
    for (const item10037 of item10031) {
      if (!set.has(item10037)) {
        let deleteResult = item10031.delete(item10037);
        let fetchOwners = self.fetchOwners;
        let deleteResult1 = fetchOwners.delete(item10037);
      }
      continue;
    }
    continue;
  }
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
prototype["getAssignment"] = function getAssignment(installation, id, name) {
  const self = this;
  let override = this.getOverride(name);
  if (null == override) {
    override = self.getServerAssignment(installation, id, name);
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
prototype["getEvaluation"] = function getEvaluation(user, arg1) {
  let evaluationId;
  if (obj[user][arg1] != null) {
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
  [tmp3, tmp4] = this.getEvaluationAndAssignmentInner(user, id, logger);
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
prototype["getConfigEvaluationAndAssignment"] = function getConfigEvaluationAndAssignment(user, id, logger, tmpResult) {
  const self = this;
  const configAssignment = this.resolveConfigAssignment(user, id, logger);
  if (null != configAssignment) {
    items = [, ];
    ({ evaluationId: arr[0], assignment: arr[1] } = configAssignment);
    let evaluationAndAssignment = items;
  } else {
    evaluationAndAssignment = self.getEvaluationAndAssignment(user, id, logger, tmpResult);
  }
  return evaluationAndAssignment;
};
prototype["getOverrides"] = function getOverrides() {
  const merged = Object.assign(closure_13);
  const merged1 = Object.assign(closure_11);
  const merged2 = Object.assign(closure_12);
  return {};
};
prototype["trackExperimentExposure"] = function trackExperimentExposure(evaluationId, experimentName, location, unit_type, revision, trackedVariantId, arg6) {
  const self = this;
  importDefault = evaluationId;
  dependencyMap = experimentName;
  const exposure_location = location;
  const tracked_variation_id = trackedVariantId;
  closure_0 = arg6;
  const combined = "" + experimentName + "|" + revision + "|" + trackedVariantId + "|" + location + "|" + arg6 + "|1";
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
prototype["trackCommonTriggerPointExposures"] = function trackCommonTriggerPointExposures(exposure_location, arg1) {
  const self = this;
  const evaluation = this.getEvaluation("user", arg1);
  if (null != evaluation) {
    const _HermesInternal = HermesInternal;
    self.withExposureTracking(getHash("" + evaluation + "|" + exposure_location), () => self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: evaluation, exposure_location, unit_type: "user" }, { flush: true }));
  }
  function _loop(evaluationId, unitId) {
    const evaluation_id = evaluationId;
    exposure_location = unitId;
    const combined = "" + evaluationId + "|" + exposure_location;
    let tmp3 = dependencyMap4[combined];
    if (null == tmp3) {
      const v3Result = exposure_location(self[6]).v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
      obj = exposure_location(self[6]);
    }
    self.withExposureTracking(tmp3, () => self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id, exposure_location: unitId, unit_type: "installation", installation_id: unitId }, { flush: true }));
  }
  const result = self.evaluationsWithUnitIds("installation");
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let _loopResult = _loop(nextResult.evaluationId, nextResult.unitId);
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
prototype["trackExposureSuppression"] = function trackExposureSuppression(experiment, suppression_source) {
  if (null != closure_10[experiment]) {
    const self = this;
    if ("user" === tmp.kind) {
      const obj2 = { experiment, unit_type: tmp.kind, suppression_source };
      self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj2, { flush: true });
    } else if ("installation" === tmp.kind) {
      const _Object = Object;
      const first = Object.keys(obj.installation)[0];
      if (null != first) {
        obj = { experiment, unit_type: tmp.kind, suppression_source, installation_id: first };
        self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
      }
    } else if ("guild" === tmp.kind) {
      const _Object2 = Object;
      const first1 = Object.keys(obj.guild)[0];
      if (null != first1) {
        const obj3 = { experiment, unit_type: tmp.kind, suppression_source, guild_id: first1 };
        self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj3, { flush: true });
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
    const obj2 = { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" };
    this.track(WebAnalyticsEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, obj2, { flush: true });
  }
};
prototype["clearForTests"] = function clearForTests() {
  const result = this.clearAllServerAssignments();
  this.clearAllOverrides();
  const result1 = this.clearAllTrackedExposures();
  set.clear();
  set1.clear();
  const fetchOwners = this.fetchOwners;
  fetchOwners.clear();
  this.gatewayGenerations = { user: {}, guild: {}, installation: {} };
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
prototype["handleFetchStart"] = function handleFetchStart(arg0, id) {
  const self = this;
  set.add(arg0);
  if (null != id) {
    const fetchOwners2 = self.fetchOwners;
    const result = fetchOwners2.set(arg0, id.id);
  } else {
    const fetchOwners = self.fetchOwners;
    fetchOwners.delete(arg0);
  }
};
prototype["handleFetchSuccess"] = function handleFetchSuccess(arg0, apexExperiments, id) {
  closure_1 = id;
  const self = this;
  if (null != id) {
    const fetchOwners = self.fetchOwners;
    if (fetchOwners.get(arg0) !== id.id) {
      return false;
    }
  }
  self.handleFetchFailure(arg0, id);
  if (null != id) {
    if (null != apexExperiments) {
      const assignments = {};
      function _loop2() {
        apexExperiments = apexExperiments(self[5]).UnitTypeToKind[closure_4];
        if (null == apexExperiments.assignments[closure_4]) {
          return 1;
        } else {
          const _Object = Object;
          const _Object2 = Object;
          const entries = Object.entries(tmp2);
          obj[tmp] = Object.fromEntries(entries.filter((item) => {
            [tmp] = item;
            let num = gatewayGenerations.gatewayGenerations[closure_0][tmp];
            if (num == null) {
              num = 0;
            }
            let num2 = self.gatewayGenerations[closure_0][tmp];
            if (num2 == null) {
              num2 = 0;
            }
            return num === num2;
          }));
        }
      }
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        closure_4 = iter.next();
        let _loop2Result = _loop2();
        continue;
      }
      const obj2 = {};
      const merged = Object.assign(apexExperiments);
      obj2.assignments = assignments;
      const result = self.setExperimentAssignments(obj2, undefined, undefined, false);
    }
  }
  const result1 = self.setExperimentAssignments(apexExperiments);
};
prototype["handleFetchFailure"] = function handleFetchFailure(arg0, id) {
  const self = this;
  if (null != id) {
    const fetchOwners = self.fetchOwners;
    if (fetchOwners.get(arg0) !== id.id) {
      return false;
    }
  }
  const fetchOwners2 = self.fetchOwners;
  fetchOwners2.delete(arg0);
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