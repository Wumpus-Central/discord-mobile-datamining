// === Module 11498: getEmbeddedAppShellUrl ===

// Module 11498 (getEmbeddedAppShellUrl)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import getNativeShellOriginForEmbeddedApp from "getNativeShellOriginForEmbeddedApp" /* 11499 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getEmbeddedAppShellUrl.tsx");

export const getEmbeddedAppShellUrl = function getEmbeddedAppShellUrl(embeddedAppUrl) {
  const nativeShellOriginForEmbeddedApp = getNativeShellOriginForEmbeddedApp.getNativeShellOriginForEmbeddedApp(embeddedAppUrl);
  if (null != nativeShellOriginForEmbeddedApp) {
    const _HermesInternal = HermesInternal;
    return "" + nativeShellOriginForEmbeddedApp + "/";
  } else {
    const toURLSafeResult = URLUtilsDefault.toURLSafe(embeddedAppUrl);
    let protocol;
    if (toURLSafeResult != null) {
      protocol = toURLSafeResult.protocol;
    }
    let str = "https://discord.com/__discord-embedded-app-shell/";
    if ("http:" === protocol) {
      let str3 = "http://localhost:3333/__discord-embedded-app-shell/";
      if ("http://localhost:3333" === toURLSafeResult.origin) {
        str3 = "about:blank";
      }
      str = str3;
    }
    return str;
  }
};