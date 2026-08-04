// discord_app/modules/experiments/ExperimentManager.tsx
import getHash from "getHash";
import { registerExperiment } from "getHash";
import ExperimentBuckets from "ExperimentBuckets";

let ExposureTypes;
let c4;
({ ExperimentTypes: c4, ExposureTypes } = ExperimentBuckets);
let obj = { LEGACY: "legacy", APEX: "apex" };
const result = require("dispatcher").fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

export const trackExposureToExperiment = function trackExposureToExperiment(id, descriptor, location) {
  const obj = { experimentId: id, descriptor, location: null, location_stack: null, fingerprint: null, excluded: null, exposureType: null };
  let _location;
  if (location != null) {
    _location = location.location;
  }
  obj[2] = _location;
  let analyticsLocations;
  if (location != null) {
    analyticsLocations = location.analyticsLocations;
  }
  obj[3] = analyticsLocations;
  let fingerprint;
  if (location != null) {
    fingerprint = location.fingerprint;
  }
  obj[4] = fingerprint;
  let excluded;
  if (location != null) {
    excluded = location.excluded;
  }
  obj[5] = excluded;
  let exposureType;
  if (location != null) {
    exposureType = location.exposureType;
  }
  obj[6] = exposureType;
  getHash.trackExposure(obj);
};
export const registerUserExperiment = function registerUserExperiment(id) {
  id = id.id;
  registerExperiment({ experimentId: id, experimentType: constants.USER, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint });
  return { id };
};
export const registerGuildExperiment = function registerGuildExperiment(id) {
  id = id.id;
  registerExperiment({ experimentId: id, experimentType: constants.GUILD, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint });
  return { id };
};
export const ExperimentSystem = obj;
export const overrideBucket = function overrideBucket(system, closure_0, id) {
  if (obj.LEGACY === system) {
    obj = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: null, experimentBucket: null };
    obj[1] = closure_0;
    let tmp10 = null;
    if (null != id) {
      tmp10 = id;
    }
    obj[2] = tmp10;
    importDefault(709).dispatch(obj);
    const obj5 = importDefault(709);
  } else if (tmp.APEX === system) {
    if (null == id) {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: null };
      obj[1] = closure_0;
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    } else {
      obj = importDefault(709);
      const obj1 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: null, variantId: null };
      obj1[1] = closure_0;
      obj1[2] = id;
      obj.dispatch(obj1);
    }
  }
};