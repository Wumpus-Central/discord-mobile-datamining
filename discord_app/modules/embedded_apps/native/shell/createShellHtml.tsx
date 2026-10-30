// === Module 11794: createShellHtml ===

// Module 11794 (createShellHtml)
import bridgeProtocol from "bridgeProtocol" /* 11765 */;
import _modDef11795 from "module_11795" /* 11795 */;
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10896 */;
import size from "module_2" /* 2 */;

({ EMBEDDED_APP_DISALLOWED_NAVIGATION_MESSAGE: c3, EMBEDDED_APP_FRAME_ELEMENT_ID: closure_4 } = EmbeddedAppConstants);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/createShellHtml.tsx");

export function createShellHtml(shimVersion) {
  ({ iframeUrl, iframeSandboxAttributes, iframeCsp, referrerPolicy } = shimVersion);
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
  const combined = "<meta http-equiv=\"Content-Security-Policy\" content=\"frame-src " + iframeUrl.origin + "\" />";
  let combined1 = str;
  if (obj.isAndroid()) {
    const _JSON = JSON;
    const _HermesInternal2 = HermesInternal;
    combined1 = "<script type=\"text/javascript\">\n          document.addEventListener('securitypolicyviolation', e => {\n            if (e.effectiveDirective === 'frame-src') {\n              window.ReactNativeWebView.postMessage(" + JSON.stringify(React3) + ");\n            }\n          });\n      </script>";
  }
  if (null != shellBridgeSecret) {
    const tmp9 = _modDef11795;
    const _JSON2 = JSON;
    const _JSON3 = JSON;
    const json = JSON.stringify(shellBridgeSecret);
    const _HermesInternal3 = HermesInternal;
    str = "<script type=\"text/javascript\">" + tmp9 + "</script>\n      <script type=\"text/javascript\">" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".start(" + json + ", " + JSON.stringify(React4) + ");</script>";
  }
  return "\n  <html>\n  <head>\n      " + combined + "\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      " + combined1 + "\n      " + str + "\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"" + React4 + "\" width=\"100%\" height=\"100%\" src=\"" + iframeUrl.href + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\"" + str2 + ">\n      </iframe>\n  </body>\n  </html>\n";
}