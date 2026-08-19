// === Module 235: ? ===

// Module 235
import MessageQueueDefault from "MessageQueue" /* 236 */;

const require = arg1;
MessageQueueDefault("Systrace", () => require(46) /* isEnabled */);
if (true !== global.RN$Bridgeless) {
  MessageQueueDefault("JSTimers", () => require(183) /* _callTimer */.default);
}
MessageQueueDefault("RCTLog", () => require(237).default);
MessageQueueDefault("RCTDeviceEventEmitter", () => require(92) /* _isNativeReflectConstruct */.default);
MessageQueueDefault("RCTNativeAppEventEmitter", () => require(238) /* _isNativeReflectConstruct */.default);
MessageQueueDefault("GlobalPerformanceLogger", () => require(239).default);
MessageQueueDefault("HMRClient", () => require(240).default);