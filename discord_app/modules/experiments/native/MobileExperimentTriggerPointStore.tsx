// discord_app/modules/experiments/native/MobileExperimentTriggerPointStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Dispatcher2 from "../../../Dispatcher.tsx";
import MobileConnectionOpenTriggerPoint2 from "../trigger_points/native/MobileConnectionOpenTriggerPoint.tsx";
import ExperimentStore from "../ExperimentStore.tsx";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";

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

export default new "initialize"(
  Dispatcher,
  obj,
  fn(573).DispatchBand.Early,
  prototype,
  MobileExperimentTriggerPointStore,
  "initialize",
  Dispatcher,
  obj,
);
