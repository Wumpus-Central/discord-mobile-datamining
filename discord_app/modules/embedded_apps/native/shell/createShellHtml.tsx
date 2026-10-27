// === Module 11501: createShellHtml ===

// Module 11501 (createShellHtml)
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10763 */;
import bridgeProtocol from "bridgeProtocol" /* 11472 */;
import _modDef11502 from "module_11502" /* 11502 */;
import size from "module_2" /* 2 */;

let closure_3 = EmbeddedAppConstants.EMBEDDED_APP_FRAME_ELEMENT_ID;
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/createShellHtml.tsx");

export const createShellHtml = function createShellHtml(shimVersion) {
  ({ iframeUri, iframeSandboxAttributes, iframeCsp, referrerPolicy } = shimVersion);
  let shellBridgeSecret = null;
  if (2 === shimVersion.shimVersion) {
    shellBridgeSecret = shimVersion.shellBridgeSecret;
  }
  let str = "";
  let str2 = "";
  if (null != iframeCsp) {
    const _HermesInternal = HermesInternal;
    str2 = " csp=\"" + iframeCsp + "\"";
  }
  if (null != shellBridgeSecret) {
    const tmp5 = _modDef11502;
    const _JSON = JSON;
    const _JSON2 = JSON;
    const json = JSON.stringify(shellBridgeSecret);
    const _HermesInternal2 = HermesInternal;
    str = "<script type=\"text/javascript\">" + tmp5 + "</script>\n      <script type=\"text/javascript\">" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".start(" + json + ", " + JSON.stringify(closure_3) + ");</script>";
  }
  return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      " + str + "\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"" + closure_3 + "\" width=\"100%\" height=\"100%\" src=\"" + iframeUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\"" + str2 + ">\n      </iframe>\n  </body>\n  </html>\n";
};