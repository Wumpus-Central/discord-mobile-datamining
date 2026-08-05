// discord_app/modules/experiments/native/MobileExperimentTriggerPointStore.tsx
import getHash from "getHash";
import initialize from "initialize";
import { Store } from "initialize";
import importDefaultResult from "dispatcher";

const require = arg1;
function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = require("../trigger_points/native/MobileConnectionOpenTriggerPoint.tsx") /* commonTriggerPointConfiguration */.MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
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
  this.waitFor(getHash, initialize);
};
MobileExperimentTriggerPointStore.displayName = "MobileExperimentTriggerPointStore";
const obj = { CONNECTION_OPEN: handleConnectionOpen };
// ThrowIfThisInitialized (0x7c)
const tmp3 = new "initialize"(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, prototype, MobileExperimentTriggerPointStore, "initialize", importDefaultResult, obj);
const result = require("commonTriggerPointConfiguration").fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp3;