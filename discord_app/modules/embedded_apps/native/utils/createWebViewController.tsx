// === Module 11242: createWebViewController ===

// Module 11242 (createWebViewController)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11243 */;
import createWebViewHtmlFile from "createWebViewHtmlFile" /* 11265 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
const ComponentActions = fn(1087).ComponentActions;
let closure_5 = fn(2026).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = fn(5858).TransportTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewController.tsx");

export default function createWebViewController(id, contextSource) {
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap } = contextSource);
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
    await webViewProxy.injectJavaScript(closure_1(10953)(closure_0, closure_1));
    if (1 === tmp7) {
      c5 = 0;
      closure_130_0 = closure_4;
      closure_1(1257).captureException(closure_130_0);
      c7 = 3;
      closure_1(1257);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  };
  const webViewProxy = require("WebView").getWebViewProxy(id);
  closure_6 = webViewProxy.addOnMessageListener((data) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data.data);
      const tmp7 = closure_1_1();
      let tmp8 = typeof parsed === "object";
      if (typeof parsed === "object") {
        tmp8 = null != tmp7;
      }
      if (tmp8) {
        const obj2 = { type: TransportTypes.POST_MESSAGE, origin: tmp7, iframeId: id };
        WebViewPostMessageTransportDefault.handleMessage(tmp5, obj2, postMessageToWebView);
      }
      tmp5 = parsed;
    } catch (tmp16) {
      const _SyntaxError = SyntaxError;
      if (tmp16 instanceof SyntaxError) {
        if (tmp2.data === closure_5) {
          dependencyMap();
        }
      } else {
        throw tmp16;
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  ComponentDispatch.dispatch(postMessageToWebView.IFRAME_MOUNT, { id, data: { contextSource: contextSource.contextSource } });
  return {
    iframeId: id,
    release() {
      closure_6.remove();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, { id });
      webViewProxy.releaseWebView();
      const result = createWebViewHtmlFile.deleteWebViewHtmlFile(id);
    }
  };
};