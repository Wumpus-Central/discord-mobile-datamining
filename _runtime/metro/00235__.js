// _runtime/metro/00235__.js
import MessageQueueDefault from "MessageQueue" /* 236 */;
import { isEnabled } from "../00046_isEnabled.js";
import { _isNativeReflectConstruct } from "../00092__isNativeReflectConstruct.js";
import { _callTimer } from "../00183__callTimer.js";
import { _isNativeReflectConstruct } from "../00238__isNativeReflectConstruct.js";
import { 00237__ } from "00237__.js";
import { 00239__ } from "00239__.js";
import { 00240__ } from "00240__.js";

const require = arg1;
MessageQueueDefault("Systrace", () => isEnabled);
if (true !== global.RN$Bridgeless) {
  MessageQueueDefault("JSTimers", () => _callTimer.default);
}
MessageQueueDefault("RCTLog", () => 00237__.default);
MessageQueueDefault("RCTDeviceEventEmitter", () => _isNativeReflectConstruct.default);
MessageQueueDefault("RCTNativeAppEventEmitter", () => _isNativeReflectConstruct.default);
MessageQueueDefault("GlobalPerformanceLogger", () => 00239__.default);
MessageQueueDefault("HMRClient", () => 00240__.default);