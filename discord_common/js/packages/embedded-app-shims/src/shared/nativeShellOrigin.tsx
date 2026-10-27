// discord_common/js/packages/embedded-app-shims/src/shared/nativeShellOrigin.tsx
import size from "../../../../../../_runtime/metro/00002__.js";

const shell = "shell";
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/embedded-app-shims/src/shared/nativeShellOrigin.tsx",
);

export const getNativeShellOrigin = function getNativeShellOrigin(applicationRouterOrigin) {
  const url = new URL(applicationRouterOrigin);
  return "" + url.protocol + "//" + shell + "." + url.host;
};
export const isNativeShellHostname = function isNativeShellHostname(str) {
  return str.startsWith("" + shell + ".");
};
