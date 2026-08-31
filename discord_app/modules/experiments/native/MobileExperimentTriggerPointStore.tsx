// === Module 13312: handleConnectionOpen ===

// Module 13312 (handleConnectionOpen)
import initializeDefault from "initialize" /* 589 */;
import dispatcher from "dispatcher" /* 709 */;
import commonTriggerPointConfiguration from "commonTriggerPointConfiguration" /* 13313 */;
import closure_3 from "getHash" /* 4361 */;
import closure_4 from "initialize" /* 1212 */;
import importDefaultResult from "dispatcher" /* 709 */;

require = arg1;
function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
const Store = initializeDefault.Store;
class MobileExperimentTriggerPointStore extends Store {
  constructor() {
    tmp2 = require("dispatcher");
    obj = { CONNECTION_OPEN: handleConnectionOpen };
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, handleConnectionOpen, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = MobileExperimentTriggerPointStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
MobileExperimentTriggerPointStore.displayName = "MobileExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
// ThrowIfThisInitialized (0x7c)
const tmp3 = new "initialize"(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, prototype, MobileExperimentTriggerPointStore, "initialize", importDefaultResult, obj);
const result = require("set").fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp3;