// discord_app/modules/frames/native/FramesNativeManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import NativeAppLifecycleModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import FramesStore from "../FramesStore.tsx";
import FramesManager from "../FramesManager.tsx";

require = fn;
const PlatformUtils = fn(1382);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class FramesNativeManager extends tmp5 {
  _initialize() {
    self = this;
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
        const allFrames = FramesStore.getAllFrames();
        for (const item10007 of allFrames) {
          let leaveFrameResult = self.leaveFrame(item10007.id);
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
  leaveFrame(arg0) {
    tmp = closure_2;
    obj = closure_0(closure_2[7]);
    if (obj.isNotNullish(global)) {
      tmp2 = closure_1;
      obj2 = closure_1(tmp[8]);
      obj1 = {
        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
        frameId: null,
        lockState: null,
        pictureInPictureLockState: null,
      };
      obj1.frameId = global;
      dispatchResult = obj2.dispatch(obj1);
    }
    leaveFrameResult = super.leaveFrame(global);
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
