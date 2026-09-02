// === Module 8615: nativeEventEmitter ===

// Module 8615 (nativeEventEmitter)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(undefined);
class WebViewProxy {
  constructor(arg0) {
    this.webViewKey = global;
    return;
  }
  injectJavaScript(arg0) {
    RNCWebView = NativeModules.RNCWebView;
    return RNCWebView.injectJavaScriptWithWebViewKey(this.webViewKey, global);
  }
  addOnMessageListener(arg0) {
    closure_0 = global;
    self = this;
    return self.addListener("ReactNativeWebViewOnMessageWithWebViewKey", (webViewKey) => {
      if (webViewKey.webViewKey === self.webViewKey) {
        callback(webViewKey);
      }
    });
  }
  releaseWebView() {
    RNCWebView = NativeModules.RNCWebView;
    releaseWebViewResult = RNCWebView.releaseWebView(this.webViewKey);
    return;
  }
}

export default WebViewProxy;