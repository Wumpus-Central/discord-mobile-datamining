// discord_app/modules/experiments/ExperimentTriggerPointStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcher from "../../Dispatcher.tsx";
import commonTriggerPointConfiguration from "trigger_points/ConnectionOpenTriggerPoint.tsx";
import closure_3 from "ExperimentStore.tsx";
import closure_4 from "apex/ApexExperimentStore.tsx";
import apexExperiment from "apex/DebugExperiment.tsx";
import importDefaultResult from "../../Dispatcher.tsx";

require = arg1;
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration.ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
const Store = initializeDefault.Store;
class ExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = require("dispatcher");
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, handleConnectionOpen, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = ExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
ExperimentTriggerPointStore.displayName = "ExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
// ThrowIfThisInitialized (0x7c)
const tmp4 = new "initialize"(
  importDefaultResult,
  obj,
  require("dispatcher").DispatchBand.Early,
  prototype,
  ExperimentTriggerPointStore,
  "initialize",
  importDefaultResult,
  obj,
);
const result = require("set").fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;
