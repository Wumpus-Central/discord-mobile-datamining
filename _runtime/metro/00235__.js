// _runtime/metro/00235__.js
const require = arg1;
require("MessageQueue")("Systrace", () => require("../00046_isEnabled.js") /* isEnabled */);
if (true !== global.RN$Bridgeless) {
  require("MessageQueue")("JSTimers", () => require("../00183__callTimer.js") /* _callTimer */.default);
}
require("MessageQueue")("RCTLog", () => require("00237__.js").default);
require("MessageQueue")("RCTDeviceEventEmitter", () => require("../00092__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.default);
require("MessageQueue")("RCTNativeAppEventEmitter", () => require("../00238__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.default);
require("MessageQueue")("GlobalPerformanceLogger", () => require("00239__.js").default);
require("MessageQueue")("HMRClient", () => require("00240__.js").default);