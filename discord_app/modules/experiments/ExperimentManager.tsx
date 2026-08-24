// === Module 4300: trackExposureToExperiment ===

// Module 4300 (trackExposureToExperiment)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "getHash" /* 4292 */;
import { registerExperiment } from "getHash" /* 4292 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4293 */;

({ ExperimentTypes: c4, ExposureTypes } = ExperimentBuckets);
let obj = { LEGACY: "legacy", APEX: "apex" };
const result = require("set").fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

export const trackExposureToExperiment = function trackExposureToExperiment(id, descriptor, location) {
  obj = { experimentId: id, descriptor, location: null, location_stack: null, fingerprint: null, excluded: null, exposureType: null };
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
  closure_2.trackExposure(obj);
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
    dispatcherDefault.dispatch(obj);
    const obj5 = dispatcherDefault;
  } else if (tmp.APEX === system) {
    if (null == id) {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: null };
      obj[1] = closure_0;
      dispatcherDefault.dispatch(obj);
      const obj3 = dispatcherDefault;
    } else {
      obj = dispatcherDefault;
      obj1 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: null, variantId: null };
      obj1[1] = closure_0;
      obj1[2] = id;
      obj.dispatch(obj1);
    }
  }
};