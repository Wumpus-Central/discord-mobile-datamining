// === Module 11538: nativeShellOrigin ===

// Module 11538 (nativeShellOrigin)
import size from "module_2" /* 2 */;

const shell = "shell";
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/nativeShellOrigin.tsx");

export const getNativeShellOrigin = function getNativeShellOrigin(applicationRouterOrigin) {
  const url = new URL(applicationRouterOrigin);
  return "" + url.protocol + "//" + shell + "." + url.host;
};
export const isNativeShellHostname = function isNativeShellHostname(str) {
  return str.startsWith("" + shell + ".");
};