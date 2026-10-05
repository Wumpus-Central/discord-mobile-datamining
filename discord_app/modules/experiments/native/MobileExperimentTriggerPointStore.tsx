// discord_app/modules/experiments/native/MobileExperimentTriggerPointStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Dispatcher2 from "../../../Dispatcher.tsx";
import MobileConnectionOpenTriggerPoint2 from "../trigger_points/native/MobileConnectionOpenTriggerPoint.tsx";
import ExperimentStore from "../ExperimentStore.tsx";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Dispatcher = Dispatcher2;

function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = MobileConnectionOpenTriggerPoint2.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
const Store = get_initializedDefault.Store;
class MobileExperimentTriggerPointStore extends Store {
  constructor() {
    const obj = { CONNECTION_OPEN: handleConnectionOpen };
    const tmp2 = Dispatcher;
    const tmp3 = new tmp(tmp2, obj, Dispatcher2.DispatchBand.Early, handleConnectionOpen, new.target);
    return tmp3;
  }
  initialize() {
    this.waitFor(ExperimentStore, ApexExperimentStore);
  }
}
const prototype = MobileExperimentTriggerPointStore.prototype;
MobileExperimentTriggerPointStore.displayName = "MobileExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
let tmp3 = new "initialize"(
  Dispatcher,
  obj,
  Dispatcher2.DispatchBand.Early,
  prototype,
  MobileExperimentTriggerPointStore,
  "initialize",
  Dispatcher,
  obj,
);
const result = size.fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp3;
