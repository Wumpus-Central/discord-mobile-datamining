// === Module 11503: useWebViewPlatformProps ===

// Module 11503 (useWebViewPlatformProps)
import Constants from "Constants" /* 2023 */;
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript" /* 11504 */;
import size from "module_2" /* 2 */;

const messageForDisallowedNavigationError = Constants.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/useWebViewPlatformProps.android.tsx");

export default function useWebViewPlatformProps(iframeUrl) {
  iframeUrl = iframeUrl.iframeUrl;
  let tmp2 = null;
  if (null != iframeUrl) {
    const obj = { androidInjectedJavaScriptForOrigins: null };
    const obj2 = { script: null, allowedOriginRules: null };
    const obj4 = { embeddedAppOrigin: iframeUrl.origin, insets: tmp, messageForDisallowedNavigationError };
    obj2.script = createEmbeddedAppFrameScript.createEmbeddedAppFrameScript(obj4);
    const items = [iframeUrl.origin];
    obj2.allowedOriginRules = items;
    obj.androidInjectedJavaScriptForOrigins = obj2;
    tmp2 = obj;
  }
  return tmp2;
};