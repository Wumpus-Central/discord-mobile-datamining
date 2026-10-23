// === Module 7746: IOSAnchoredChatScrollerExperiment ===

// Module 7746 (IOSAnchoredChatScrollerExperiment)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const obj = { name: "2026-09-ios-anchored-chat-scroller", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/native/IOSAnchoredChatScrollerExperiment.tsx");

export const shouldUseIOSAnchoredChatScroller = function shouldUseIOSAnchoredChatScroller(location) {
  return config.getConfig({ location: location.location }).enabled;
};
export const isIOSAnchoredChatScrollerEnabled = function isIOSAnchoredChatScrollerEnabled() {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    let prop;
    if (NSUserDefaultsBridge != null) {
      prop = NSUserDefaultsBridge.isAnchoredChatScrollerEnabled;
    }
    isIOSResult = true === prop;
  }
  return isIOSResult;
};