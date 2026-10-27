// discord_app/modules/embedded_apps/native/webview/useWebViewPlatformProps.android.tsx
import Constants from "../../../activities/Constants.tsx";
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
