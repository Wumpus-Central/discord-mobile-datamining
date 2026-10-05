// discord_app/modules/frames/native/FramesNativeManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import intl2 from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import FramesStore from "../FramesStore.tsx";
import PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FramesManager from "../FramesManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      const obj3 = {
        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
        frameId,
        lockState: null,
        pictureInPictureLockState: null,
      };
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
