// === Module 4787: ExperimentManager ===

// Module 4787 (ExperimentManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ExperimentStore2 from "ExperimentStore" /* 4782 */;
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import size from "module_2" /* 2 */;

const ExperimentStore = ExperimentStore2;

let ExposureTypes;
let closure_4;
const registerExperiment = ExperimentStore2.registerExperiment;
({ ExperimentTypes: closure_4, ExposureTypes } = ExperimentConstants);
const ExperimentSystem = { LEGACY: "legacy", APEX: "apex" };
const result = size.fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

export const trackExposureToExperiment = function trackExposureToExperiment(id, descriptor, location) {
  let _location;
  let analyticsLocations;
  let excluded;
  let exposureType;
  let fingerprint;
  const obj = { experimentId: id, descriptor, location: _location, location_stack: analyticsLocations, fingerprint, excluded, exposureType };
  _location = undefined;
  const trackExposure = ExperimentStore.trackExposure;
  if (location != null) {
    _location = location.location;
  }
  analyticsLocations = undefined;
  if (location != null) {
    analyticsLocations = location.analyticsLocations;
  }
  fingerprint = undefined;
  if (location != null) {
    fingerprint = location.fingerprint;
  }
  excluded = undefined;
  if (location != null) {
    excluded = location.excluded;
  }
  exposureType = undefined;
  if (location != null) {
    exposureType = location.exposureType;
  }
  trackExposure(obj);
};
export const registerUserExperiment = function registerUserExperiment(id) {
  id = id.id;
  const obj = { experimentId: id, experimentType: constants.USER, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint };
  registerExperiment(obj);
  return { id };
};
export const registerGuildExperiment = function registerGuildExperiment(id) {
  id = id.id;
  const obj = { experimentId: id, experimentType: constants.GUILD, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint };
  registerExperiment(obj);
  return { id };
};
export { ExperimentSystem };
export const overrideBucket = function overrideBucket(system, map, id) {
  let obj;
  let tmp11;
  if (obj.LEGACY === system) {
    const obj2 = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: map, experimentBucket: tmp11 };
    tmp11 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (null != id) {
      tmp11 = id;
    }
    dispatch(obj2);
  } else if (tmp.APEX === system) {
    if (null == id) {
      const obj4 = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: map };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj4);
    } else {
      obj = DispatcherDefault;
      const obj5 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: map, variantId: id };
      obj.dispatch(obj5);
    }
  }
};