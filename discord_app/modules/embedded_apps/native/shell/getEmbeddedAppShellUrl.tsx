// discord_app/modules/embedded_apps/native/shell/getEmbeddedAppShellUrl.tsx
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import getNativeShellOriginForEmbeddedApp from "getNativeShellOriginForEmbeddedApp.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getEmbeddedAppShellUrl.tsx");

export const getEmbeddedAppShellUrl = function getEmbeddedAppShellUrl(embeddedAppUrl) {
  const nativeShellOriginForEmbeddedApp =
    getNativeShellOriginForEmbeddedApp.getNativeShellOriginForEmbeddedApp(embeddedAppUrl);
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
