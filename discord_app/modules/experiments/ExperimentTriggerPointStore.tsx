// discord_app/modules/experiments/ExperimentTriggerPointStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Dispatcher2 from "../../Dispatcher.tsx";
import ConnectionOpenTriggerPoint2 from "trigger_points/ConnectionOpenTriggerPoint.tsx";
import ExperimentStore from "ExperimentStore.tsx";
import ApexExperimentStore from "apex/ApexExperimentStore.tsx";
import DebugExperiment from "apex/DebugExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Dispatcher = Dispatcher2;

function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = ConnectionOpenTriggerPoint2.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const Store = get_initializedDefault.Store;
class ExperimentTriggerPointStore extends Store {
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
const prototype = ExperimentTriggerPointStore.prototype;
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
let obj = { CONNECTION_OPEN: handleConnectionOpen };
const tmp4 = new "initialize"(
  Dispatcher,
  obj,
  Dispatcher2.DispatchBand.Early,
  prototype,
  ExperimentTriggerPointStore,
  "initialize",
  Dispatcher,
  obj,
);
const result = size.fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;
