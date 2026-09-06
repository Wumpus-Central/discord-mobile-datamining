// === Module 9568: FramesNativeManager ===

// Module 9568 (FramesNativeManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import v1 from "v1" /* 1256 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 9516 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 9517 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9550 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FramesStore from "FramesStore" /* 9510 */;
import FramesManager from "FramesManager" /* 9569 */;

require = fn;
function postMessageToWebView() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _postMessageToWebView(arg0) {
  closure_2 = tmp3;
  await closure_2_9.injectJavaScript(getPostMessageJavaScriptDefault(closure_0));
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    closure_130_1(closure_130_2[11]).captureException(closure_129_0);
    c6 = 3;
    closure_130_1(closure_130_2[11]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
const isLaunched = fn(9511).isLaunched;
const ComponentActions = fn(1074).ComponentActions;
let closure_7 = fn(1920).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = fn(4465).TransportTypes;
const WebView = fn(8298);
const React7 = WebView.getWebViewProxy("FRAME_WEB_VIEW_KEY");
const PlatformUtils = fn(1116);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class FramesNativeManager extends tmp5 {
  _initialize() {
    self = this;
    self = this;
    _initializeResult = super._initialize();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    obj = closure_10;
    addListenerResult = undefined;
    if (closure_10 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        const managedFrame = self.getManagedFrame();
        if (null != managedFrame) {
          self.leaveFrame(managedFrame.id);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      removeResult1 = scriptMessageSubscription.remove();
    }
    self.scriptMessageSubscription = closure_9.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        const managedFrame = self.getManagedFrame();
        let tmp9 = typeof parsed === "object";
        if (typeof parsed === "object") {
          tmp9 = isLaunched(managedFrame);
        }
        if (tmp9) {
          tmp9 = null != managedFrame.data.iframeId;
        }
        if (tmp9) {
          let obj = WebViewPostMessageTransportDefault;
          obj = { type: TransportTypes.POST_MESSAGE, origin: managedFrame.data.url, iframeId: managedFrame.data.iframeId };
          obj.handleMessage(tmp5, obj, postMessageToWebView);
        }
        tmp5 = parsed;
      } catch (tmp18) {
        const _SyntaxError = SyntaxError;
        if (tmp18 instanceof SyntaxError) {
          if (tmp2.data === closure_7) {
            const managedFrame1 = self.getManagedFrame();
            if (null != managedFrame1) {
              self.leaveFrame(managedFrame1.id);
              obj = { body: null, confirmText: null };
              const intl = util.intl;
              obj.body = intl.string(util.t.tYBBWz);
              const intl2 = util.intl;
              obj.confirmText = intl2.string(util.t.BddRzS);
              actions_AlertActionCreatorsDefault.show(obj);
            }
          }
        } else {
          throw tmp18;
        }
      }
    });
    return;
  }
  _terminate() {
    _terminateResult = super._terminate();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    scriptMessageSubscription = this.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      removeResult1 = scriptMessageSubscription.remove();
    }
    return;
  }
  leaveFrame(arg0) {
    releaseWebViewResult = this.releaseWebView();
    tmp2 = closure_2;
    obj = closure_0(closure_2[16]);
    if (obj.isNotNullish(global)) {
      tmp3 = closure_1;
      obj2 = closure_1(tmp2[17]);
      obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null, pictureInPictureLockState: null };
      obj.frameId = global;
      dispatchResult = obj2.dispatch(obj);
    }
    leaveFrameResult = super.leaveFrame(global);
    return;
  }
}
const prototype = FramesNativeManager.prototype;
prototype["showRPCDisconnectErrorUI"] = function showRPCDisconnectErrorUI(reason) {
  ({ code, message } = reason);
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(util.t.hbiAO6, { code });
  obj.body = message;
  obj.show(obj);
};
prototype["getManagedFrame"] = function getManagedFrame() {
  let frameByIframeId;
  if (null != this.iframeId) {
    frameByIframeId = FramesStore.getFrameByIframeId(tmp.iframeId);
  }
  return frameByIframeId;
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj = { id: releaseIframeIdResult };
    ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
    closure_9.releaseWebView();
  }
  return releaseIframeIdResult;
};
prototype["releaseIframeId"] = function releaseIframeId() {
  this.iframeId = undefined;
  return this.iframeId;
};
prototype["hasIframeId"] = function hasIframeId() {
  return null != this.iframeId;
};
prototype["getOrCreateIframeId"] = function getOrCreateIframeId() {
  const iframeId = this.iframeId;
  if (null != iframeId) {
    return iframeId;
  } else {
    const v4Result = v1.v4();
    tmp.iframeId = v4Result;
    return v4Result;
  }
};
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";