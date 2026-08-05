import { isEnabled } from "../00046_isEnabled.js";
import { _isNativeReflectConstruct } from "../00092__isNativeReflectConstruct.js";
import { _callTimer } from "../00183__callTimer.js";
import { _isNativeReflectConstruct } from "../00238__isNativeReflectConstruct.js";
import { 00237__ } from "00237__.js";
import { 00239__ } from "00239__.js";
import { 00240__ } from "00240__.js";
// _runtime/metro/00235__.js
const require = arg1;
require("MessageQueue")("Systrace", () => isEnabled /* isEnabled */);
if (true !== global.RN$Bridgeless) {
  require("MessageQueue")("JSTimers", () => _callTimer /* _callTimer */.default);
}
require("MessageQueue")("RCTLog", () => 00237__.default);
require("MessageQueue")("RCTDeviceEventEmitter", () => _isNativeReflectConstruct /* _isNativeReflectConstruct */.default);
require("MessageQueue")("RCTNativeAppEventEmitter", () => _isNativeReflectConstruct /* _isNativeReflectConstruct */.default);
require("MessageQueue")("GlobalPerformanceLogger", () => 00239__.default);
require("MessageQueue")("HMRClient", () => 00240__.default);