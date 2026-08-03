import "initialize";

class CallKitLifecycleManager extends tmp2 {
}
const prototype = CallKitLifecycleManager.prototype;
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};
const callKitLifecycleManager = new CallKitLifecycleManager();
const result = require("set").fileFinishedImporting("modules/calls/mobile/CallKitManager.android.tsx");

export default callKitLifecycleManager;