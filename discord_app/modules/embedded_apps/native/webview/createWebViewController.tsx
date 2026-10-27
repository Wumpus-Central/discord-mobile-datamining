// === Module 11469: createWebViewController ===

// Module 11469 (createWebViewController)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11473 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
const ComponentActions = fn(1084).ComponentActions;
let closure_5 = fn(2023).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = fn(6379).TransportTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/createWebViewController.tsx");

export default function createWebViewController(id, contextSource) {
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap, shellBridgeSecret } = contextSource);
  function postMessageToWebView(arg0, arg1) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_5 = async function _postMessageToWebView(arg0) {
    closure_3 = tmp3;
    await webViewProxy.injectJavaScript(closure_1(10762)(closure_0, closure_1));
    if (1 === tmp7) {
      c5 = 0;
      closure_130_0 = closure_4;
      closure_1(1254).captureException(closure_130_0);
      c7 = 3;
      closure_1(1254);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  };
  const webViewProxy = require("WebView").getWebViewProxy(id);
  let obj = require("WebView");
  _require = webViewProxy(function*(arg0) {
    closure_2 = tmp3;
    yield tmp18.injectJavaScript(closure_0);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = tmp18;
      SentryUtilsDefault.captureException(closure_129_0);
      c6 = 3;
      SentryUtilsDefault;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c4 = 0;
    }
    return value;
  });
  closure_6 = require("createEmbeddedAppShimMessageHandler").createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
  closure_7 = webViewProxy.addOnMessageListener((data) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data.data);
      if (!closure_6.handleMessage(parsed)) {
        const tmp8 = closure_1_1();
        let tmp10 = typeof tmp5 === "object";
        if (typeof tmp5 === "object") {
          tmp10 = null != tmp8;
        }
        if (tmp10) {
          const obj2 = { type: TransportTypes.POST_MESSAGE, origin: tmp8, iframeId };
          WebViewPostMessageTransportDefault.handleMessage(tmp5, obj2, postMessageToWebView);
        }
      }
    } catch (tmp18) {
      const _SyntaxError = SyntaxError;
      if (tmp18 instanceof SyntaxError) {
        if (tmp2.data === closure_5) {
          dependencyMap();
        }
      } else {
        throw tmp18;
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  ComponentDispatch.dispatch(postMessageToWebView.IFRAME_MOUNT, { id, data: { contextSource: contextSource.contextSource } });
  return {
    iframeId: id,
    shellBridgeSecret,
    release() {
      closure_7.remove();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, { id });
      closure_6.close();
      webViewProxy.releaseWebView();
    }
  };
};