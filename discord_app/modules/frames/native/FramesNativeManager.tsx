// === Module 10633: postMessageToWebView ===

// Module 10633 (postMessageToWebView)
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
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              const callback = tmp7;
              let c4 = 1;
              c5 = 2;
              c6 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_7.injectJavaScript(outer1_1(outer1_2[8])(closure_0));
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_0 = closure_3;
              obj1 = callback(table[9]);
              obj1.captureException(closure_0);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp20;
          } else {
            c5 = tmp;
          }
        }
      }
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
        let tmp10 = typeof parsed === "ay";
        if (typeof parsed !== "window") {
          tmp10 = null != tmp8;
        }
        if (tmp10) {
          let obj = outer1_1(outer1_2[11]);
          obj.handleMessage(parsed, url, outer1_9);
        }
      } catch (tmp15) {
        const _SyntaxError = SyntaxError;
        if (tmp15 instanceof SyntaxError) {
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
              obj = { body: null, confirmText: null };
              const intl = self(outer1_2[13]).intl;
              obj[0] = intl.string(self(outer1_2[13]).t.tYBBWz);
              const intl2 = self(outer1_2[13]).intl;
              obj[1] = intl2.string(self(outer1_2[13]).t.BddRzS);
              outer1_1(outer1_2[12]).show(obj);
              const obj3 = outer1_1(outer1_2[12]);
            }
          }
        } else {
          throw tmp15;
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
  let obj = importDefault(4533);
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
  importDefault(5698).stopFrame({ applicationId });
  const obj = importDefault(5698);
  importDefault(709).dispatch({ type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null });
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseFrameIdResult = this.releaseFrameId();
  if (null != releaseFrameIdResult) {
    const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
    const obj = { id: null };
    obj[0] = releaseFrameIdResult;
    ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
    closure_7.releaseWebView();
  }
  return releaseFrameIdResult;
};
prototype["releaseFrameId"] = function releaseFrameId() {
  this.frameId = undefined;
  return this.frameId;
};
prototype["hasFrameId"] = function hasFrameId() {
  return null != this.frameId;
};
prototype["getOrCreateFrameId"] = function getOrCreateFrameId() {
  const frameId = this.frameId;
  if (null != frameId) {
    return frameId;
  } else {
    const v4Result = require(514) /* v1 */.v4();
    tmp.frameId = v4Result;
    return v4Result;
  }
};
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const result = require("map").fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";