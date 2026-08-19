// discord_app/modules/experiments/native/MobileExperimentTriggerPointStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcher from "../../../Dispatcher.tsx";
import commonTriggerPointConfiguration from "../trigger_points/native/MobileConnectionOpenTriggerPoint.tsx";
import getHash from "../ExperimentStore.tsx";
import initialize from "../apex/ApexExperimentStore.tsx";
import importDefaultResult from "../../../Dispatcher.tsx";

require = fn;
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
const result = require("obj132").fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp3;