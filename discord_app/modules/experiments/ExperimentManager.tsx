// === Module 4481: ExperimentManager ===

// Module 4481 (ExperimentManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;

const registerExperiment = fn(4476).registerExperiment;
const ExperimentConstants = fn(4477);
({ ExperimentTypes: closure_4, ExposureTypes } = ExperimentConstants);
const ExperimentSystem = { LEGACY: "legacy", APEX: "apex" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

export const trackExposureToExperiment = function trackExposureToExperiment(id, descriptor, location) {
  const obj = { experimentId: id, descriptor, location: null, location_stack: null, fingerprint: null, excluded: null, exposureType: null };
  let _location;
  if (location != null) {
    _location = location.location;
  }
  obj.location = _location;
  let analyticsLocations;
  if (location != null) {
    analyticsLocations = location.analyticsLocations;
  }
  obj.location_stack = analyticsLocations;
  let fingerprint;
  if (location != null) {
    fingerprint = location.fingerprint;
  }
  obj.fingerprint = fingerprint;
  let excluded;
  if (location != null) {
    excluded = location.excluded;
  }
  obj.excluded = excluded;
  let exposureType;
  if (location != null) {
    exposureType = location.exposureType;
  }
  obj.exposureType = exposureType;
  ExperimentStore.trackExposure(obj);
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
export { ExperimentSystem };
export const overrideBucket = function overrideBucket(system, map, id) {
  if (obj.LEGACY === system) {
    obj = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: map, experimentBucket: null };
    let tmp10 = null;
    if (null != id) {
      tmp10 = id;
    }
    obj.experimentBucket = tmp10;
    DispatcherDefault.dispatch(obj);
  } else if (tmp.APEX === system) {
    if (null == id) {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: map };
      DispatcherDefault.dispatch(obj);
    } else {
      obj = DispatcherDefault;
      const obj1 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: map, variantId: id };
      obj.dispatch(obj1);
    }
  }
};