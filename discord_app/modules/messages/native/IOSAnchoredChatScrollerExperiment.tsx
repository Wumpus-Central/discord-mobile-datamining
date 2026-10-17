// discord_app/modules/messages/native/IOSAnchoredChatScrollerExperiment.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const obj = {
  name: "2026-09-ios-anchored-chat-scroller",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
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
