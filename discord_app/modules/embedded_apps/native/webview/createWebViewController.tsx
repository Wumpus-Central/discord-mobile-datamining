// === Module 10206: createWebViewController ===

// Module 10206 (createWebViewController)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10212 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(10207).EMBEDDED_APP_DISALLOWED_NAVIGATION_MESSAGE;
let ComponentActions = fn(1071).ComponentActions;
const Constants = fn(5797);
({ MAX_POST_MESSAGE_STRING_LENGTH: closure_6, TransportTypes: metroImportDefault } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/native/webview/createWebViewController.tsx");

export default function createWebViewController(id, contextSource) {
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap, shellBridgeSecret } = contextSource);
  function postMessageToWebView() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ComponentActions = async function _postMessageToWebView(arg0) {
    closure_3 = tmp3;
    await webViewProxy.injectJavaScript(closure_1(10208)(closure_0, closure_1));
    if (1 === tmp7) {
      c5 = 0;
      closure_130_0 = closure_4;
      closure_1(1242).captureException(closure_130_0);
      c7 = 3;
      closure_1(1242);
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
  closure_6 = require("createEmbeddedAppShimMessageHandler").createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, function() {
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
    const tmp3 = closure_1_1();
    if (null != tmp3) {
      const obj2 = { type: constants.POST_MESSAGE, origin: tmp3, iframeId };
      if (typeof data.data === "string") {
        if (data.data.length > timestampProducer) {
          const result = WebViewPostMessageTransportDefault.rejectOversizedMessage(obj2, postMessageToWebView);
        }
      }
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        if (!closure_6.handleMessage(parsed)) {
          if (typeof tmp6 === "object") {
            WebViewPostMessageTransportDefault.handleMessage(tmp6, obj2, postMessageToWebView);
          }
        }
      } catch (tmp9) {
        const _SyntaxError = SyntaxError;
        if (tmp9 instanceof SyntaxError) {
          if (tmp2.data === closure_4) {
            dependencyMap();
          }
        } else {
          throw tmp9;
        }
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, { id, data: { contextSource: contextSource.contextSource } });
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