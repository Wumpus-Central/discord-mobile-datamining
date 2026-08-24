// _runtime/metro/00235__.js
import MessageQueueDefault from "../00236_MessageQueue.js";
import { isEnabled } from "../00046_isEnabled.js";
import { _isNativeReflectConstruct } from "../00092__isNativeReflectConstruct.js";
import { _callTimer } from "../00183__callTimer.js";
import { _isNativeReflectConstruct } from "../00238__isNativeReflectConstruct.js";

const require = arg1;
MessageQueueDefault("Systrace", () => isEnabled);
if (true !== global.RN$Bridgeless) {
  MessageQueueDefault("JSTimers", () => _callTimer /* _callTimer */.default);
}
MessageQueueDefault("RCTLog", () => require("00237__.js").default);
MessageQueueDefault("RCTDeviceEventEmitter", () => _isNativeReflectConstruct /* _isNativeReflectConstruct */.default);
MessageQueueDefault("RCTNativeAppEventEmitter", () => _isNativeReflectConstruct /* _isNativeReflectConstruct */.default);
MessageQueueDefault("GlobalPerformanceLogger", () => require("00239__.js").default);
MessageQueueDefault("HMRClient", () => require("00240__.js").default);