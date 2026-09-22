// === Module 4677: ExperimentManager ===

// Module 4677 (ExperimentManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ExperimentStore from "ExperimentStore" /* 4672 */;

const registerExperiment = fn(4672).registerExperiment;
const ExperimentConstants = fn(4673);
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
    const obj2 = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: map, experimentBucket: null };
    let tmp10 = null;
    if (null != id) {
      tmp10 = id;
    }
    obj2.experimentBucket = tmp10;
    DispatcherDefault.dispatch(obj2);
  } else if (tmp.APEX === system) {
    if (null == id) {
      const obj4 = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: map };
      DispatcherDefault.dispatch(obj4);
    } else {
      obj = DispatcherDefault;
      const obj6 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: map, variantId: id };
      obj.dispatch(obj6);
    }
  }
};