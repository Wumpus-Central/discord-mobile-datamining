// === Module 9011: FramesNativeManager ===

// Module 9011 (FramesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import react_nativeDefault from "react-native" /* 9012 */;
import FramesStore from "FramesStore" /* 9000 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import FramesManager from "FramesManager" /* 9013 */;
import size from "module_2" /* 2 */;

const NativeEventEmitter = react_native.NativeEventEmitter;
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class FramesNativeManager extends FramesManager {
  _initialize() {
    const self = this;
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = nativeEventEmitter.addListener("onHostDestroy", () => {
        const allFrames = FramesStore.getAllFrames();
        for (const item10007 of allFrames) {
          let leaveFrameResult = self.leaveFrame(item10007.id);
          continue;
        }
      });
    }
    this.lifecycleSubscription = addListenerResult;
  }
  _terminate() {
    super._terminate();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
  }
  showRPCDisconnectErrorUI(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    const obj = { title: intl.formatToPlainString(intl2.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl2.intl;
    show(obj);
  }
  leaveFrame(frameId) {
    const obj = GlobalUtils;
    if (obj.isNotNullish(frameId)) {
      const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: null, pictureInPictureLockState: null };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
    super.leaveFrame(frameId);
  }
}
let closure_5 = FramesNativeManager.prototype;
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const result = size.fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;