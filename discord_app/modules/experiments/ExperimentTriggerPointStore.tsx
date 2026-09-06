// discord_app/modules/experiments/ExperimentTriggerPointStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Dispatcher2 from "../../Dispatcher.tsx";
import ConnectionOpenTriggerPoint2 from "trigger_points/ConnectionOpenTriggerPoint.tsx";
import ExperimentStore from "ExperimentStore.tsx";
import ApexExperimentStore from "apex/ApexExperimentStore.tsx";

const Dispatcher = Dispatcher2;

require = fn;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = ConnectionOpenTriggerPoint2.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const DebugExperiment = fn(13690);
const Store = initializeDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = closure_1(closure_2[5]);
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp = new tmp(tmp2, obj, closure_0(closure_2[5]).DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp;
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ExperimentStore, ApexExperimentStore);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default new "initialize"(
  Dispatcher,
  obj,
  fn(573).DispatchBand.Early,
  prototype,
  ExperimentTriggerPointStore,
  "initialize",
  Dispatcher,
  obj,
);
