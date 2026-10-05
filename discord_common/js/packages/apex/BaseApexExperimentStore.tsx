// === Module 1247: BaseApexExperimentStore ===

// Module 1247 (BaseApexExperimentStore)
import logger_Logger from "logger/Logger" /* 4 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1096 */;
import _mod1248 from "module_1248" /* 1248 */;
import ApexTypes from "ApexTypes" /* 1249 */;
import _modDef1251 from "module_1251" /* 1251 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let _self, clientOverrides, closure_13, dependencyMap, importDefault;

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
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
const WebAnalyticsEvents = Constants.WebAnalyticsEvents;
const logger = new logger_Logger.Logger("ApexExperimentStore");
let tmp3 = typeof window === "undefined";
if (!tmp3) {
  const _window2 = window;
  let tmp9 = null;
  let tmp4 = null != window.TextEncoder;
  if (tmp4) {
    const _window = window;
    tmp4 = null != window.TextDecoder;
  }
  tmp3 = tmp4;
}
if (!tmp3) {
  const _module = _mod1248;
}
let items = [ApexTypes.UnitType.User, ApexTypes.UnitType.Installation];
let obj = { user: {}, guild: {}, installation: {} };
const authStore = {};
const unpackModuleId = {};
let closure_12 = {};
obj = {};
const set = new Set();
const set1 = new Set();
const apexTrackedExposures = "apexTrackedExposures";
let c18 = 604800000;
let closure_19 = {};
let closure_20 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class BaseApexExperimentStore extends PersistedStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.track = function track() {
      return Promise.resolve();
    };
    applyArgumentsResult.surface = "unset";
    return applyArgumentsResult;
  }
  loadStoredState(version, buildOverrideExperiments) {
    let closure_11;
    if (null != version) {
      if (3 === version.version) {
        ({ clientOverrides: closure_11, evaluatedExperiments: obj } = version);
      }
      closure_13 = {};
      for (const key10020 in buildOverrideExperiments) {
        let tmp9 = closure_20[key10020];
        if (null == tmp9) {
          let obj2 = _modDef1251;
          let v3Result = obj2.v3(key10020);
          tmp12[key10020] = v3Result;
          tmp9 = v3Result;
        }
        let obj3 = { hashedName: tmp9, variantId: buildOverrideExperiments[key10020], isOverride: true, exposureTrackingEnabled: false, useAsEligibility: false };
        closure_13[key10020] = obj3;
        continue;
      }
      const self = this;
      closure_19 = this.loadTrackedExposures();
    }
    const tmp = null != version && 2 === version.version;
    if (tmp) {
      clientOverrides = version.clientOverrides;
      const merged = Object.assign(version.evaluatedExperiments);
    }
  }
  getState() {
    obj = { version: 3, evaluatedExperiments: obj, clientOverrides };
    return obj;
  }
  setExperimentAssignments(apexExperiments, arg1) {
    let assignments2;
    let evaluation_id;
    let tmp17;
    let tmp18;
    let tmp19;
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
              ({ evaluation_id, assignments: assignments2 } = tmp9[key10031]);
              obj = { evaluationId: evaluation_id, assignments: {} };
              tmp38[key10031] = obj;
              for (const item10042 of assignments2) {
                let tmp16 = _slicedToArray(item10042, 6);
                [tmp17, tmp18, tmp19] = tmp16;
                let num = tmp19;
                let tmp20 = tmp16[3];
                let tmp21 = tmp16[4];
                let tmp22 = tmp16[5];
                if (tmp19 == null) {
                  num = 0;
                }
                let obj2 = { hashedName: tmp17, variantId: tmp18, trackedVariantId: tmp21, isOverride: num & ApexTypes.ExperimentFlags.IsOverride, revision: tmp20, exposureTrackingEnabled: num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled, useAsEligibility: num & ApexTypes.ExperimentFlags.UseAsEligibility, config: tmp22 };
                let assignments = tmp10.assignments;
                assignments[tmp17] = obj2;
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
  }
  setGuildExperimentAssignments(arg0) {
    let assignments;
    let evaluation_id;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp6;
    let tmp7;
    obj = arg0;
    const guild = obj.guild;
    const _Object = Object;
    if (arg0 == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    const tmp2 = entries1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      ({ evaluation_id, assignments } = tmp7);
      let obj2 = { evaluationId: evaluation_id, assignments: {} };
      guild[tmp6] = obj2;
      for (const item10038 of assignments) {
        let tmp13 = _slicedToArray(item10038, 5);
        [tmp14, tmp15, tmp16] = tmp13;
        let num = tmp16;
        let tmp17 = tmp13[3];
        let tmp18 = tmp13[4];
        if (tmp16 == null) {
          num = 0;
        }
        let obj3 = { hashedName: tmp14, variantId: tmp15, trackedVariantId: tmp18, isOverride: num & ApexTypes.ExperimentFlags.IsOverride, revision: tmp17, exposureTrackingEnabled: num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled, useAsEligibility: num & ApexTypes.ExperimentFlags.UseAsEligibility };
        tmp8.assignments[tmp14] = obj3;
        continue;
      }
      continue;
    }
  }
  createOverride(experimentName, variantId) {
    obj = {};
    const merged = Object.assign(closure_11);
    let tmp3 = closure_20[experimentName];
    if (null == tmp3) {
      const obj2 = _modDef1251;
      const v3Result = obj2.v3(experimentName);
      tmp2[experimentName] = v3Result;
      tmp3 = v3Result;
    }
    obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
    closure_11 = obj;
    const result = this.trackExposureSuppression(experimentName, "client_override");
  }
  deleteOverride(experimentName) {
    items = [experimentName];
    closure_11 = _objectWithoutProperties(closure_11, items.map(_toPropertyKey));
  }
  createSessionOverride(experimentName, variantId) {
    obj = {};
    const merged = Object.assign(closure_12);
    let tmp3 = closure_20[experimentName];
    if (null == tmp3) {
      const obj2 = _modDef1251;
      const v3Result = obj2.v3(experimentName);
      tmp2[experimentName] = v3Result;
      tmp3 = v3Result;
    }
    obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, exposureTrackingEnabled: false };
    closure_12 = obj;
  }
  deleteSessionOverride(experimentName) {
    items = [experimentName];
    closure_12 = _objectWithoutProperties(closure_12, items.map(_toPropertyKey));
  }
  setExperimentsMetadata(experiments) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(Object.fromEntries(experiments.map((name) => {
      items = [name.name, name];
      return items;
    })));
  }
  getExperimentsMetadata() {
    return obj;
  }
  getClientOverrides() {
    return clientOverrides;
  }
  getSessionOverrides() {
    return closure_12;
  }
  getExperimentClientOverride(arg0) {
    return clientOverrides[arg0];
  }
  getExperimentSessionOverride(arg0) {
    return closure_12[arg0];
  }
  handleLogout(arg0) {
    const self = this;
    const tmp = arg0;
    if (!tmp) {
      const result = self.clearUserServerAssignments();
      const result1 = self.clearSessionOverrides();
    }
    const Storage = Storage2.Storage;
    Storage.remove(apexTrackedExposures);
    const result2 = self.clearAllTrackedExposures();
  }
  registerExperiment(name) {
    closure_10[name.name] = name;
    if (null != closure_13[name.name]) {
      const self = this;
      const result = this.trackExposureSuppression(name.name, "cookie_override");
    }
  }
  getRegisteredExperiments() {
    return closure_10;
  }
  getAssignment(kind, id, name) {
    const self = this;
    let override = this.getOverride(name);
    if (null == override) {
      override = self.getServerAssignment(kind, id, name);
    }
    return override;
  }
  getServerAssignment(kind, id, name) {
    let tmp2 = closure_20[name];
    if (null == tmp2) {
      obj = _modDef1251;
      const v3Result = obj.v3(name);
      tmp[name] = v3Result;
      tmp2 = v3Result;
    }
    return null != obj[kind][id] ? obj[kind][id].assignments[tmp2] : undefined;
  }
  getEvaluation(arg0, arg1) {
    let evaluationId;
    if (obj[arg0][arg1] != null) {
      evaluationId = tmp.evaluationId;
    }
    return evaluationId;
  }
  getEvaluationAndAssignmentInner(user, LOGGED_OUT_USER_ID_SENTINEL, trackedVariantId1) {
    const override = this.getOverride(trackedVariantId1);
    if (null != override) {
      items = [undefined, override];
      return items;
    } else {
      let items2;
      if (null == obj[user][LOGGED_OUT_USER_ID_SENTINEL]) {
        const items1 = [undefined, undefined];
        items2 = items1;
      } else {
        items2 = [obj[user][LOGGED_OUT_USER_ID_SENTINEL].evaluationId, ];
        let tmp3 = closure_20[trackedVariantId1];
        const assignments = tmp10.assignments;
        if (null == tmp3) {
          obj = _modDef1251;
          const v3Result = obj.v3(trackedVariantId1);
          tmp2[trackedVariantId1] = v3Result;
          tmp3 = v3Result;
        }
        items2[1] = assignments[tmp3];
      }
      return items2;
    }
  }
  getEvaluationAndAssignment(revision1, id, trackedVariantId1, tmpResult) {
    let tmp3;
    let tmp4;
    let tmp8;
    const self = this;
    [tmp3, tmp4] = this.getEvaluationAndAssignmentInner(revision1, id, trackedVariantId1);
    _slicedToArray(this.getEvaluationAndAssignmentInner(revision1, id, trackedVariantId1), 2);
    if ("guild" !== revision1) {
      items = [tmp3, tmp4];
      return items;
    } else {
      let items6;
      let LOGGED_OUT_USER_ID_SENTINEL = tmpResult;
      const getEvaluationAndAssignmentInner = self.getEvaluationAndAssignmentInner;
      if (tmpResult == null) {
        LOGGED_OUT_USER_ID_SENTINEL = ApexTypes.LOGGED_OUT_USER_ID_SENTINEL;
      }
      tmpResult = _slicedToArray(getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, trackedVariantId1), 2);
      [r10021, tmp8] = tmpResult;
      if (null == tmp8) {
        const items1 = [undefined, undefined];
        items6 = items1;
      } else if (tmp8.isOverride) {
        const items2 = [tmp3, tmp8];
        items6 = items2;
      } else if (tmp8.useAsEligibility) {
        let items5;
        if (null == tmp4) {
          const items3 = [undefined, undefined];
          items5 = items3;
        } else if (null != tmp4.variantId) {
          const items4 = [tmp3, tmp4];
          items5 = items4;
        } else {
          items5 = [undefined, undefined];
        }
        items6 = items5;
      } else {
        items6 = [undefined, undefined];
      }
      return items6;
    }
  }
  trackExperimentExposure(first1, trackedVariantId1, location, revision1, revision, trackedVariantId, arg6) {
    let evaluation_id;
    let experiment;
    const self = this;
    importDefault = first1;
    dependencyMap = trackedVariantId1;
    const exposure_location = location;
    const unit_type = revision1;
    const tracked_variation_id = trackedVariantId;
    let closure_0 = arg6;
    const combined = "" + trackedVariantId1 + "|" + revision + "|" + trackedVariantId + "|" + location + "|" + arg6 + "|1";
    let tmp3 = closure_20[combined];
    if (null == tmp3) {
      obj = _modDef1251;
      const v3Result = obj.v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
    }
    if ("user" === revision1) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, experiment, exposure_location, unit_type, tracked_variation_id };
        return self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, obj, { flush: true });
      });
    } else if ("installation" === revision1) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, installation_id, experiment, exposure_location, unit_type, tracked_variation_id };
        return self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, obj, { flush: true });
      });
    } else if ("guild" === revision1) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, guild_id, experiment, exposure_location, unit_type, tracked_variation_id, revision };
        return self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
  }
  trackCommonTriggerPointExposures(location) {
    let closure_0 = location;
    const self = this;
    function _loop(evaluationId) {
      const combined = "" + evaluationId + "|" + evaluationId;
      let tmp3 = closure_1_20[combined];
      if (null == tmp3) {
        obj = self(dependencyMap[6]);
        const v3Result = obj.v3(combined);
        tmp2[combined] = v3Result;
        tmp3 = v3Result;
      }
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id: evaluationId, exposure_location: evaluationId, unit_type: "user" };
        return self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
    const result = this.evaluationsWithUnitIds("user");
    const iter = result[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next().evaluationId);
      continue;
    }
    function _loop2(evaluationId, unitId) {
      let installation_id;
      _self = unitId;
      const combined = "" + evaluationId + "|" + evaluationId;
      let tmp3 = closure_1_20[combined];
      if (null == tmp3) {
        obj = self(dependencyMap[6]);
        const v3Result = obj.v3(combined);
        tmp2[combined] = v3Result;
        tmp3 = v3Result;
      }
      _self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id: evaluationId, exposure_location: evaluationId, unit_type: "installation", installation_id };
        return self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
    const result1 = self.evaluationsWithUnitIds("installation");
    for (const item10023 of result1) {
      let _loop2Result = _loop2(item10023.evaluationId, item10023.unitId);
      continue;
    }
  }
  withExposureTracking(v3Result, fn) {
    const self = this;
    if (this.shouldTrackExposure(v3Result)) {
      fn();
      const _Date = Date;
      closure_19[v3Result] = Date.now();
      self.saveTrackedExposures(closure_19);
    }
  }
  trackExposureSuppression(name, client_override) {
    if (null != closure_10[name]) {
      const self = this;
      if ("user" === closure_10[name].kind) {
        obj = { experiment: name, unit_type: closure_10[name].kind, suppression_source: client_override };
        self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj, { flush: true });
      } else if ("installation" === closure_10[name].kind) {
        const _Object = Object;
        const first = Object.keys(obj.installation)[0];
        if (null != first) {
          const obj2 = { experiment: name, unit_type: closure_10[name].kind, suppression_source: client_override, installation_id: first };
          self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj2, { flush: true });
        }
      } else if ("guild" === closure_10[name].kind) {
        const _Object2 = Object;
        const first1 = Object.keys(obj.guild)[0];
        if (null != first1) {
          const obj3 = { experiment: name, unit_type: closure_10[name].kind, suppression_source: client_override, guild_id: first1 };
          self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj3, { flush: true });
        }
      }
    }
  }
  evaluationIds(arg0) {
    const values = Object.values(obj[arg0]);
    const mapped = values.map((evaluationId) => evaluationId.evaluationId);
    return mapped.filter((item) => null != item);
  }
  evaluationsWithUnitIds(installation) {
    const entries = Object.entries(obj[installation]);
    const found = entries.filter((item) => {
      let tmp;
      [, tmp] = item;
      return null != tmp.evaluationId;
    });
    return found.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      return { evaluationId: tmp2.evaluationId, unitId: tmp };
    });
  }
  shouldTrackExposure(v3Result) {
    let tmp2 = null == tmp;
    if (!tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp > c18;
    }
    return tmp2;
  }
  loadTrackedExposures() {
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
            if (timestamp - exposures[tmp8] <= c18) {
              continue;
            } else {
              delete exposures[tmp10];
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
  }
  saveTrackedExposures(exposures) {
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
  }
  clearForTests() {
    const result = this.clearAllServerAssignments();
    this.clearAllOverrides();
    const result1 = this.clearAllTrackedExposures();
    set.clear();
    set1.clear();
  }
  clearAllServerAssignments() {

  }
  clearUserServerAssignments() {
    obj = { user: {}, guild: {}, installation: obj.installation };
  }
  clearAllOverrides() {
    let closure_11 = {};
    closure_12 = {};
    closure_13 = {};
  }
  clearSessionOverrides() {
    closure_12 = {};
  }
  clearAllTrackedExposures() {
    closure_19 = {};
  }
  getHash(arg0) {
    let tmp2 = closure_20[arg0];
    if (null == tmp2) {
      obj = _modDef1251;
      const v3Result = obj.v3(arg0);
      tmp[arg0] = v3Result;
      tmp2 = v3Result;
    }
    return tmp2;
  }
  handleFetchStart(arg0) {
    set.add(arg0);
  }
  handleFetchSuccess(arg0, apexExperiments) {
    set.delete(arg0);
    set1.add(arg0);
    const result = this.setExperimentAssignments(apexExperiments);
  }
  handleFetchFailure(arg0) {
    set.delete(arg0);
    set1.add(arg0);
  }
  isFetching(arg0) {
    return set.has(arg0);
  }
  hasLoaded(arg0) {
    return set1.has(arg0);
  }
  getOverride(arg0) {
    let tmp = closure_12[arg0];
    if (tmp == null) {
      tmp = clientOverrides[arg0];
    }
    if (tmp == null) {
      tmp = closure_13[arg0];
    }
    return tmp;
  }
}
const prototype = BaseApexExperimentStore.prototype;
BaseApexExperimentStore.displayName = "ApexExperimentStore";
BaseApexExperimentStore.persistKey = "ApexExperimentStore";
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/BaseApexExperimentStore.tsx");

export default BaseApexExperimentStore;