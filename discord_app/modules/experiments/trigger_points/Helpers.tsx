// discord_app/modules/experiments/trigger_points/Helpers.tsx
import initialize from "../apex/ApexExperimentStore.tsx";
import { CommonTriggerPoints } from "../ExperimentConstants.tsx";

let result = require("obj132").fileFinishedImporting("modules/experiments/trigger_points/Helpers.tsx");
class CommonTriggerPointConfiguration {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.experiments = global;
    obj.triggerPoint = fn;
    obj.params = importDefault;
    return obj;
  }
}
const prototype = CommonTriggerPointConfiguration.prototype;
prototype["registeredExperimentIds"] = function registeredExperimentIds() {
  const experiments = this.experiments;
  return experiments.map((item, index) => item.definition.id);
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
  const item = experiments.forEach((item, index) => {
    item.trackExposure(obj);
  });
};
prototype["getExperiments"] = function getExperiments() {
  return this.experiments;
};

export { CommonTriggerPointConfiguration };