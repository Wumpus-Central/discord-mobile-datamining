// === Module 15039: ExperimentTriggerPointStore ===

// Module 15039 (ExperimentTriggerPointStore)
import initializeDefault from "initialize" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 584 */;
import ConnectionOpenTriggerPoint2 from "ConnectionOpenTriggerPoint" /* 15041 */;
import ExperimentStore from "ExperimentStore" /* 5191 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;

const Dispatcher = Dispatcher2;

require = fn;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = ConnectionOpenTriggerPoint2.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const DebugExperiment = fn(15040);
const Store = initializeDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = closure_1(closure_2[5]);
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp1 = new tmp(tmp2, obj, closure_0(closure_2[5]).DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp1;
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ExperimentStore, ApexExperimentStore);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default new "initialize"(Dispatcher, obj, fn(584).DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", Dispatcher, obj);