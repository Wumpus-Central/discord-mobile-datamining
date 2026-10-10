// === Module 14778: FramesNativeManager ===

// Module 14778 (FramesNativeManager)
import util from "util" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import leaveFrame from "leaveFrame" /* 10821 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 14776 */;
import FramesStore from "FramesStore" /* 10807 */;
import FramesManager from "FramesManager" /* 14779 */;

require = fn;
const PlatformUtils = fn(1383);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class FramesNativeManager extends tmp5 {
  _initialize() {
    _initializeResult = super._initialize();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    obj = closure_4;
    addListenerResult = undefined;
    if (closure_4 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        allFrames = allFrames.getAllFrames();
        for (const item10007 of allFrames) {
          let obj = leaveFrame;
          let leaveFrameResult = obj.leaveFrame(item10007.id);
          continue;
        }
      });
    }
    this.lifecycleSubscription = addListenerResult;
    return;
  }
  _terminate() {
    _terminateResult = super._terminate();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    return;
  }
}
const prototype = FramesNativeManager.prototype;
prototype["showRPCDisconnectErrorUI"] = function showRPCDisconnectErrorUI(reason) {
  ({ code, message } = reason);
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.formatToPlainString(util.t.hbiAO6, { code });
  obj2.body = message;
  actions_AlertActionCreatorsDefault.show(obj2);
};
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;