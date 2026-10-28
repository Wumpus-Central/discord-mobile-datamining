// === Module 11537: getNativeShellOriginForEmbeddedApp ===

// Module 11537 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5659 */;
import nativeShellOrigin2 from "nativeShellOrigin" /* 11538 */;
import size from "module_2" /* 2 */;

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