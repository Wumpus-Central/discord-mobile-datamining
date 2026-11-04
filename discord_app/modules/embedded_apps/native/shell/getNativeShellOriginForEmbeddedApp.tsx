// === Module 12027: getNativeShellOriginForEmbeddedApp ===

// Module 12027 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5806 */;
import nativeShellOrigin2 from "nativeShellOrigin" /* 12028 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx");

export function getNativeShellOriginForEmbeddedApp(assetURL) {
  const applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(assetURL);
  let nativeShellOrigin = null;
  if (null != applicationRouterOrigin) {
    nativeShellOrigin = null;
    if (applicationRouterOrigin.startsWith("https://")) {
      nativeShellOrigin = nativeShellOrigin2.getNativeShellOrigin(applicationRouterOrigin);
      const tmpResult = nativeShellOrigin2;
    }
  }
  return nativeShellOrigin;
}