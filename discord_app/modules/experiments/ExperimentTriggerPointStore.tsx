// === Module 13565: handleConnectionOpen ===

// Module 13565 (handleConnectionOpen)
import initializeDefault from "initialize" /* 586 */;
import dispatcher from "dispatcher" /* 706 */;
import commonTriggerPointConfiguration from "commonTriggerPointConfiguration" /* 13567 */;
import closure_3 from "getHash" /* 4391 */;
import closure_4 from "initialize" /* 1209 */;
import apexExperiment from "apexExperiment" /* 13566 */;
import importDefaultResult from "dispatcher" /* 706 */;

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
const tmp4 = new "initialize"(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, prototype, ExperimentTriggerPointStore, "initialize", importDefaultResult, obj);
const result = require("set").fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp4;