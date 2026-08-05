// discord_app/modules/frames/native/FramesNativeManager.tsx
import closure_3 from "WebView";
import map from "map";
import { ComponentActions } from "ME";
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_6 } from "items3";
import WebView from "WebView";
import PlatformTypes from "PlatformTypes";
import "prototype";

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
      yield outer1_7.injectJavaScript(outer1_1(outer1_2[8])(closure_0));
      if (1 === tmp7) {
        c4 = 0;
        closure_0 = closure_3;
        const obj1 = callback(table[9]);
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
  nativeEventEmitter = new require("ComponentDispatcher").NativeEventEmitter(require("enforcing"));
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
    obj = c8;
    addListenerResult = undefined;
    if (c8 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        const connectedFrame = outer1_4.getConnectedFrame();
        if (null != connectedFrame) {
          const obj = { applicationId: null };
          obj[0] = connectedFrame.applicationId;
          self.leaveFrame(obj);
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
        const connectedFrame = outer1_4.getConnectedFrame();
        if (connectedFrame != null) {
          const url = connectedFrame.url;
        }
        const iframeId = self.iframeId;
        let tmp11 = typeof parsed === "object";
        if (typeof parsed === "object") {
          tmp11 = null != tmp8;
        }
        if (tmp11) {
          tmp11 = null != iframeId;
        }
        if (tmp11) {
          let obj = outer1_1(outer1_2[11]);
          obj = { origin: null, iframeId: null };
          obj[0] = url;
          obj[1] = iframeId;
          obj.handleMessage(parsed, obj, outer1_9);
        }
      } catch (tmp18) {
        const _SyntaxError = SyntaxError;
        if (tmp18 instanceof SyntaxError) {
          if (tmp2.data === outer1_6) {
            const connectedFrame1 = outer1_4.getConnectedFrame();
            let applicationId;
            if (connectedFrame1 != null) {
              applicationId = connectedFrame1.applicationId;
            }
            if (null != applicationId) {
              obj = { applicationId: null };
              obj[0] = applicationId;
              self.leaveFrame(obj);
              const obj1 = { body: null, confirmText: null };
              const intl = self(outer1_2[13]).intl;
              obj1[0] = intl.string(self(outer1_2[13]).t.tYBBWz);
              const intl2 = self(outer1_2[13]).intl;
              obj1[1] = intl2.string(self(outer1_2[13]).t.BddRzS);
              outer1_1(outer1_2[12]).show(obj1);
              const obj4 = outer1_1(outer1_2[12]);
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
}
const prototype = FramesNativeManager.prototype;
prototype["showRPCDisconnectErrorUI"] = function showRPCDisconnectErrorUI(reason) {
  let code;
  let message;
  ({ code, message } = reason);
  let obj = importDefault(4624);
  obj = { title: null, body: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.hbiAO6, { code });
  obj[1] = message;
  obj.show(obj);
};
prototype["leaveFrame"] = function leaveFrame(applicationId) {
  const self = this;
  applicationId = applicationId.applicationId;
  this.releaseWebView();
  let obj = require(1351) /* isDiscordFrontendDevelopment */;
  if (obj.isNotNullish(applicationId)) {
    obj = { applicationId: null };
    obj[0] = applicationId;
    self.clearFrameState(obj);
  }
};
prototype["clearFrameState"] = function clearFrameState(applicationId) {
  applicationId = applicationId.applicationId;
  importDefault(10510).stopFrame({ applicationId });
  const obj = importDefault(10510);
  importDefault(709).dispatch({ type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null });
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
    const obj = { id: null };
    obj[0] = releaseIframeIdResult;
    ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
    closure_7.releaseWebView();
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
    const v4Result = require(514) /* v1 */.v4();
    tmp.iframeId = v4Result;
    return v4Result;
  }
};
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const result = require("map").fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";