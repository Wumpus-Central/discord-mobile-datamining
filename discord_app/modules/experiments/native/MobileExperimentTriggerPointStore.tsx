// === Module 13693: MobileExperimentTriggerPointStore ===

// Module 13693 (MobileExperimentTriggerPointStore)
import initializeDefault from "initialize" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 573 */;
import MobileConnectionOpenTriggerPoint2 from "MobileConnectionOpenTriggerPoint" /* 13694 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

const Dispatcher = Dispatcher2;

require = fn;
function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = MobileConnectionOpenTriggerPoint2.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
const Store = initializeDefault.Store;
class MobileExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = closure_1(closure_2[4]);
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp = new tmp(tmp2, obj, closure_0(closure_2[4]).DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp;
  }
}
const prototype = MobileExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ExperimentStore, ApexExperimentStore);
};
MobileExperimentTriggerPointStore.displayName = "MobileExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default new "initialize"(Dispatcher, obj, fn(573).DispatchBand.Early, prototype, MobileExperimentTriggerPointStore, "initialize", Dispatcher, obj);