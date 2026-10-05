// === Module 7981: react-native ===

// Module 7981 (react-native)
import react_native from "react-native" /* 17 */;

const NativeModules = react_native.NativeModules;
const nativeEventEmitter = new react_native.NativeEventEmitter(undefined);
class WebViewProxy {
  constructor(webViewKey) {
    this.webViewKey = webViewKey;
  }
  injectJavaScript(arg0) {
    const RNCWebView = NativeModules.RNCWebView;
    return RNCWebView.injectJavaScriptWithWebViewKey(this.webViewKey, arg0);
  }
  addOnMessageListener(arg0) {
    let closure_0 = arg0;
    const self = this;
    return nativeEventEmitter.addListener("ReactNativeWebViewOnMessageWithWebViewKey", (webViewKey) => {
      if (webViewKey.webViewKey === self.webViewKey) {
        closure_0(webViewKey);
      }
    });
  }
  releaseWebView() {
    const RNCWebView = NativeModules.RNCWebView;
    RNCWebView.releaseWebView(this.webViewKey);
  }
}

export default WebViewProxy;