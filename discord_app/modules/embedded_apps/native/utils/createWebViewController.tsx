// === Module 9054: createWebViewController ===

// Module 9054 (createWebViewController)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import Constants2 from "Constants" /* 2011 */;
import Constants3 from "Constants" /* 5323 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9055 */;
import createWebViewHtmlFile from "createWebViewHtmlFile" /* 9070 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_3;

const ComponentActions = Constants.ComponentActions;
let closure_5 = Constants2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = Constants3.TransportTypes;
let result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewController.tsx");

export default function createWebViewController(id, arg1) {
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap } = arg1);
  function postMessageToWebView(arg0) {
    return obj(...arguments);
  }
  let obj = function _postMessageToWebView() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let closure_1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: webViewProxy.injectJavaScript(closure_1(closure_2[5])(closure_0)), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_0 = closure_3;
              const obj2 = closure_1(closure_2[6]);
              obj2.captureException(closure_0);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          closure_3 = tmp17;
          if (0 === c4) {
            c6 = 3;
            throw tmp17;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = require("WebView");
  const webViewProxy = obj.getWebViewProxy(id);
  let closure_6 = webViewProxy.addOnMessageListener((data) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data.data);
      const tmp5 = importDefault();
      let tmp6 = typeof parsed === "object";
      const tmp3 = parsed;
      if (tmp6) {
        tmp6 = null != tmp5;
      }
      if (tmp6) {
        const obj2 = { type: TransportTypes.POST_MESSAGE, origin: tmp5, iframeId: id };
        obj = WebViewPostMessageTransportDefault;
        obj.handleMessage(tmp3, obj2, postMessageToWebView);
      }
    } catch (tmp14) {
      const _SyntaxError = SyntaxError;
      if (tmp14 instanceof SyntaxError) {
        if (data.data === closure_5) {
          dependencyMap();
        }
      } else {
        throw tmp14;
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  let obj2 = { id };
  ComponentDispatch.dispatch(postMessageToWebView.IFRAME_MOUNT, obj2);
  let obj3 = {
    iframeId: id,
    release() {
      closure_6.remove();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
      webViewProxy.releaseWebView();
      const obj2 = createWebViewHtmlFile;
      const result = obj2.deleteWebViewHtmlFile(id);
    }
  };
  return obj3;
};