// === Module 11535: useEmbeddedAppShell ===

// Module 11535 (useEmbeddedAppShell)
import getEmbeddedAppShellUrl from "getEmbeddedAppShellUrl" /* 11536 */;
import createShellHtml from "createShellHtml" /* 11539 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedAppShell(embeddedAppUrl) {
  const cResult = embeddedAppUrl(iframeUri[3]).c(8);
  embeddedAppUrl = embeddedAppUrl.embeddedAppUrl;
  iframeUri = embeddedAppUrl.iframeUri;
  const iframeSandboxAttributes = embeddedAppUrl.iframeSandboxAttributes;
  const iframeCsp = embeddedAppUrl.iframeCsp;
  const referrerPolicy = embeddedAppUrl.referrerPolicy;
  const shimVersion = embeddedAppUrl.shimVersion;
  const shellBridgeSecret = embeddedAppUrl.shellBridgeSecret;
  if (cResult[0] === embeddedAppUrl) {
    if (cResult[1] === iframeCsp) {
      if (cResult[2] === iframeSandboxAttributes) {
        if (cResult[3] === iframeUri) {
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
  const fn = function p() {
    const obj = { url: getEmbeddedAppShellUrl.getEmbeddedAppShellUrl(embeddedAppUrl), html: null };
    obj.html = createShellHtml.createShellHtml({ iframeUri, iframeSandboxAttributes, iframeCsp, referrerPolicy, shimVersion, shellBridgeSecret });
    return obj;
  };
  cResult[0] = embeddedAppUrl;
  cResult[1] = iframeCsp;
  cResult[2] = iframeSandboxAttributes;
  cResult[3] = iframeUri;
  cResult[4] = referrerPolicy;
  cResult[5] = shellBridgeSecret;
  cResult[6] = shimVersion;
  cResult[7] = fn;
  tmp2 = fn;
}) : (function useEmbeddedAppShell(arg0) {
  ({ embeddedAppUrl: require, iframeUri: dependencyMap, iframeSandboxAttributes: _slicedToArray, iframeCsp: noop, referrerPolicy: closure_4, shimVersion: closure_5, shellBridgeSecret: closure_6 } = arg0);
  return _slicedToArray(noop.useState(() => {
    const obj = { url: getEmbeddedAppShellUrl.getEmbeddedAppShellUrl(closure_1_0), html: null };
    obj.html = createShellHtml.createShellHtml({ iframeUri, iframeSandboxAttributes, iframeCsp, referrerPolicy, shimVersion, shellBridgeSecret });
    return obj;
  }), 1)[0];
});