// discord_app/modules/frames/native/FramesNativeManager.tsx
import items3 from "items3";
import map from "map";
import { isLaunched } from "FrameLayoutModes";
import { ComponentActions } from "ME";
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_7 } from "items3";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import WebView from "WebView";
import PlatformTypes from "PlatformTypes";
import "prototype";
import { v1 } from "../../../../_runtime/00514_v1.js";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ComponentDispatcher } from "../../../utils/ComponentDispatchUtils.tsx";
import { _launchFrameOnNative } from "../FramesActionCreators.native.tsx";

const require = arg1;
function postMessageToWebView() {
  const self = this;
  const apply = _postMessageToWebView.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _postMessageToWebView() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      let c4 = 1;
      yield outer1_9.injectJavaScript(outer1_1(outer1_2[10])(closure_0));
      if (1 === tmp7) {
        c4 = 0;
        closure_0 = items3;
        const obj1 = callback(table[11]);
        obj1.captureException(closure_0);
        let c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  const _postMessageToWebView = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const webViewProxy = WebView.getWebViewProxy("FRAME_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (PlatformTypes.isAndroid()) {
  nativeEventEmitter = new require("dispatcher").NativeEventEmitter(require("enforcing"));
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
    obj = c10;
    addListenerResult = undefined;
    if (c10 != null) {
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
    self.scriptMessageSubscription = getWebViewProxy.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        const managedFrame = self.getManagedFrame();
        let tmp9 = typeof parsed === "object";
        if (typeof parsed === "object") {
          tmp9 = outer1_5(managedFrame);
        }
        if (tmp9) {
          tmp9 = null != managedFrame.data.iframeId;
        }
        if (tmp9) {
          let obj = outer1_1(outer1_2[13]);
          obj = { type: null, origin: null, iframeId: null };
          obj[0] = outer1_8.POST_MESSAGE;
          obj[1] = managedFrame.data.url;
          obj[2] = managedFrame.data.iframeId;
          obj.handleMessage(parsed, obj, outer1_11);
        }
      } catch (tmp18) {
        const _SyntaxError = SyntaxError;
        if (tmp18 instanceof SyntaxError) {
          if (tmp2.data === outer1_7) {
            const managedFrame1 = self.getManagedFrame();
            if (null != managedFrame1) {
              obj3.leaveFrame(managedFrame1.id);
              obj = { body: null, confirmText: null };
              const intl = self(outer1_2[15]).intl;
              obj[0] = intl.string(self(outer1_2[15]).t.tYBBWz);
              const intl2 = self(outer1_2[15]).intl;
              obj[1] = intl2.string(self(outer1_2[15]).t.BddRzS);
              outer1_1(outer1_2[14]).show(obj);
              const obj4 = outer1_1(outer1_2[14]);
            }
            obj3 = self;
            const tmp23 = self;
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
}
const prototype = FramesNativeManager.prototype;
prototype["showRPCDisconnectErrorUI"] = function showRPCDisconnectErrorUI(reason) {
  let code;
  let message;
  ({ code, message } = reason);
  let obj = AlertActionCreators;
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(getSystemLocale.t.hbiAO6, { code });
  obj[1] = message;
  obj.show(obj);
};
prototype["getManagedFrame"] = function getManagedFrame() {
  let frameByIframeId;
  if (null != this.iframeId) {
    frameByIframeId = frameByIframeId.getFrameByIframeId(tmp.iframeId);
  }
  return frameByIframeId;
};
prototype["leaveFrame"] = function leaveFrame(id) {
  const self = this;
  this.releaseWebView();
  if (obj.isNotNullish(id)) {
    self.clearFrameState(id);
  }
};
prototype["clearFrameState"] = function clearFrameState(frameId) {
  let obj = dispatcher;
  obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: null, pictureInPictureLockState: null };
  obj.dispatch(obj);
  _launchFrameOnNative.stopFrame(frameId);
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
    const obj = { id: null };
    obj[0] = releaseIframeIdResult;
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
const result = require("map").fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";