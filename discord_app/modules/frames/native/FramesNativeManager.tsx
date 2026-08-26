// === Module 11137: postMessageToWebView ===

// Module 11137 (postMessageToWebView)
import v1 from "v1" /* 514 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import _modDef4809 from "module_4809" /* 4809 */;
import enforcingDefault from "enforcing" /* 10759 */;
import leaveFrameDefault from "leaveFrame" /* 11138 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "map" /* 10749 */;
import { isLaunched } from "FrameLayoutModes" /* 10750 */;
import { ComponentActions } from "ME" /* 676 */;
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_7 } from "items3" /* 4472 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4346 */;
import WebView from "WebView" /* 8022 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

require = arg1;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      c4 = 1;
      yield closure_1_9.injectJavaScript(closure_1_1(closure_1_2[10])(closure_0));
      if (1 === tmp7) {
        c4 = 0;
        closure_0 = closure_3;
        obj1 = callback(table[11]);
        obj1.captureException(closure_0);
        c6 = 3;
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
  closure_12 = tmp;
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
  nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(enforcingDefault);
}
leaveFrameDefault;
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
          tmp9 = closure_1_5(managedFrame);
        }
        if (tmp9) {
          tmp9 = null != managedFrame.data.iframeId;
        }
        if (tmp9) {
          let obj = closure_1_1(closure_1_2[13]);
          obj = { type: null, origin: null, iframeId: null };
          obj[0] = closure_1_8.POST_MESSAGE;
          obj[1] = managedFrame.data.url;
          obj[2] = managedFrame.data.iframeId;
          obj.handleMessage(parsed, obj, closure_1_11);
        }
      } catch (tmp18) {
        const _SyntaxError = SyntaxError;
        if (tmp18 instanceof SyntaxError) {
          if (tmp2.data === closure_1_7) {
            const managedFrame1 = self.getManagedFrame();
            if (null != managedFrame1) {
              obj3.leaveFrame(managedFrame1.id);
              obj = { body: null, confirmText: null };
              const intl = self(closure_1_2[15]).intl;
              obj[0] = intl.string(self(closure_1_2[15]).t.tYBBWz);
              const intl2 = self(closure_1_2[15]).intl;
              obj[1] = intl2.string(self(closure_1_2[15]).t.BddRzS);
              closure_1_1(closure_1_2[14]).show(obj);
              const obj4 = closure_1_1(closure_1_2[14]);
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
  leaveFrame(arg0) {
    releaseWebViewResult = this.releaseWebView();
    tmp2 = closure_2;
    obj = require("isDiscordFrontendDevelopment");
    if (obj.isNotNullish(global)) {
      tmp3 = closure_1;
      obj2 = require("dispatcher");
      obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null, pictureInPictureLockState: null };
      obj[1] = global;
      dispatchResult = obj2.dispatch(obj);
    }
    leaveFrameResult = super.leaveFrame(global);
    return;
  }
}
const prototype = FramesNativeManager.prototype;
prototype["showRPCDisconnectErrorUI"] = function showRPCDisconnectErrorUI(reason) {
  ({ code, message } = reason);
  let obj = _modDef4809;
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
const result = require("set").fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";