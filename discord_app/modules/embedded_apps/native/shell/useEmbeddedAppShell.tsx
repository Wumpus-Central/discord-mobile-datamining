// discord_app/modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx
import getEmbeddedAppShellUrl from "getEmbeddedAppShellUrl.tsx";
import createShellHtml from "createShellHtml.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmbeddedAppShell(embeddedAppUrl) {
      const cResult = embeddedAppUrl(iframeUrl[3]).c(8);
      embeddedAppUrl = embeddedAppUrl.embeddedAppUrl;
      iframeUrl = embeddedAppUrl.iframeUrl;
      const iframeSandboxAttributes = embeddedAppUrl.iframeSandboxAttributes;
      const iframeCsp = embeddedAppUrl.iframeCsp;
      const referrerPolicy = embeddedAppUrl.referrerPolicy;
      const shimVersion = embeddedAppUrl.shimVersion;
      const shellBridgeSecret = embeddedAppUrl.shellBridgeSecret;
      if (cResult[0] === embeddedAppUrl) {
        if (cResult[1] === iframeCsp) {
          if (cResult[2] === iframeSandboxAttributes) {
            if (cResult[3] === iframeUrl) {
              if (cResult[4] === referrerPolicy) {
                if (cResult[5] === shellBridgeSecret) {
                  if (cResult[6] === shimVersion) {
                    let tmp2 = cResult[7];
                  }
                  return iframeSandboxAttributes(iframeCsp.useState(tmp2), 1)[0];
                }
              }
            }
          }
        }
      }
      const fn = function n() {
        let tmp2 = null;
        if (null != iframeUrl) {
          const obj = { url: getEmbeddedAppShellUrl.getEmbeddedAppShellUrl(embeddedAppUrl), html: null };
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
      };
      cResult[0] = embeddedAppUrl;
      cResult[1] = iframeCsp;
      cResult[2] = iframeSandboxAttributes;
      cResult[3] = iframeUrl;
      cResult[4] = referrerPolicy;
      cResult[5] = shellBridgeSecret;
      cResult[6] = shimVersion;
      cResult[7] = fn;
      tmp2 = fn;
    }
  : function useEmbeddedAppShell(arg0) {
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
    };
