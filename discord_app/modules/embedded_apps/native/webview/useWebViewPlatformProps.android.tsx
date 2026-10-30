// === Module 11796: useWebViewPlatformProps ===

// Module 11796 (useWebViewPlatformProps)
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript" /* 11797 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/useWebViewPlatformProps.android.tsx");

export default function useWebViewPlatformProps(iframeUrl) {
  iframeUrl = iframeUrl.iframeUrl;
  let tmp2 = null;
  if (null != iframeUrl) {
    const obj = { androidInjectedJavaScriptForOrigins: null };
    const obj2 = { script: null, allowedOriginRules: null };
    const obj4 = { embeddedAppOrigin: iframeUrl.origin, insets: tmp };
    obj2.script = createEmbeddedAppFrameScript.createEmbeddedAppFrameScript(obj4);
    const items = [iframeUrl.origin];
    obj2.allowedOriginRules = items;
    obj.androidInjectedJavaScriptForOrigins = obj2;
    tmp2 = obj;
  }
  return tmp2;
};