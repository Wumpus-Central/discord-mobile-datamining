// discord_app/modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx
import getURLForApplication from "../../../activities/getURLForApplication.tsx";
import nativeShellOrigin2 from "../../../../../discord_common/js/packages/embedded-app-shims/src/shared/nativeShellOrigin.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx");

export const getNativeShellOriginForEmbeddedApp = function getNativeShellOriginForEmbeddedApp(embeddedAppUrl) {
  const applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(embeddedAppUrl);
  let nativeShellOrigin = null;
  if (null != applicationRouterOrigin) {
    nativeShellOrigin = null;
    if (applicationRouterOrigin.startsWith("https://")) {
      nativeShellOrigin = nativeShellOrigin2.getNativeShellOrigin(applicationRouterOrigin);
      const tmpResult = nativeShellOrigin2;
    }
  }
  return nativeShellOrigin;
};
