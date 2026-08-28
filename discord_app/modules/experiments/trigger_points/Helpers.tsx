// === Module 10521: registeredExperimentIds ===

// Module 10521 (registeredExperimentIds)
import closure_0 from "initialize" /* 1212 */;
import { CommonTriggerPoints } from "ExperimentBuckets" /* 4360 */;

let result = require("set").fileFinishedImporting("modules/experiments/trigger_points/Helpers.tsx");
class CommonTriggerPointConfiguration {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.experiments = global;
    obj.triggerPoint = arg1;
    obj.params = importDefault;
    return obj;
  }
}
const prototype = CommonTriggerPointConfiguration.prototype;
prototype["registeredExperimentIds"] = function registeredExperimentIds() {
  const experiments = this.experiments;
  return experiments.map((definition) => definition.definition.id);
};
prototype["trigger"] = function trigger() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const result = obj.trackCommonTriggerPointExposures(this.params.location);
  ({ triggerPoint, experiments } = this);
  obj = {};
  const merged = Object.assign(this.params);
  const merged1 = Object.assign(obj);
  const item = experiments.forEach((trackExposure) => {
    trackExposure.trackExposure(obj);
  });
};
prototype["getExperiments"] = function getExperiments() {
  return this.experiments;
};

export { CommonTriggerPointConfiguration };