// discord_app/modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx
import getEmbeddedAppShellUrl from "getEmbeddedAppShellUrl.tsx";
import createShellHtml from "createShellHtml.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx");

export default function useEmbeddedAppShell(arg0) {
  ({
    embeddedAppUrl: require,
    iframeUrl: dependencyMap,
    iframeSandboxAttributes: _slicedToArray,
    iframeCsp: noop,
    referrerPolicy: closure_4,
    shimVersion: closure_5,
    shellBridgeSecret: closure_6,
  } = arg0);
  return _slicedToArray(
    noop.useState(() => {
      let tmp2 = null;
      if (null != dependencyMap) {
        const obj = { url: getEmbeddedAppShellUrl.getEmbeddedAppShellUrl(closure_1_0), html: null };
        const obj4 = {
          iframeUrl: tmp,
          iframeSandboxAttributes,
          iframeCsp,
          referrerPolicy,
          shimVersion,
          shellBridgeSecret,
        };
        obj.html = createShellHtml.createShellHtml(obj4);
        tmp2 = obj;
      }
      return tmp2;
    }),
    1,
  )[0];
}
