// discord_app/modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx
import NativeFileModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import bridgeProtocol from "../../../../../discord_common/js/packages/embedded-app-shims/src/native-shell/bridgeProtocol.tsx";
import _modDef11487 from "../../../../../_runtime/metro/11487__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function webViewShellFileName(arg0) {
  return "iframe--" + arg0 + ".html";
}
function generateWebViewHtml(arg0) {
  ({ iframeUri, iframeSandboxAttributes, referrerPolicy, shimBridgeSecret, iframeCsp } = arg0);
  let str = "";
  let str2 = "";
  if (null != iframeCsp) {
    const _HermesInternal = HermesInternal;
    str2 = ' csp="' + iframeCsp + '"';
  }
  if (null != shimBridgeSecret) {
    const tmp4 = _modDef11487;
    const _JSON = JSON;
    const _JSON2 = JSON;
    const json = JSON.stringify(shimBridgeSecret);
    const _HermesInternal2 = HermesInternal;
    str =
      '<script type="text/javascript">' +
      tmp4 +
      '</script>\n      <script type="text/javascript">' +
      bridgeProtocol.SHELL_BRIDGE_GLOBAL +
      ".start(" +
      json +
      ", " +
      JSON.stringify(closure_4) +
      ");</script>";
  }
  return (
    '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      ' +
    str +
    '\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="' +
    closure_4 +
    '" width="100%" height="100%" src="' +
    iframeUri +
    "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" +
    iframeSandboxAttributes +
    '" referrerPolicy="' +
    referrerPolicy +
    '"' +
    str2 +
    ">\n      </iframe>\n  </body>\n  </html>\n"
  );
}
let closure_9 = async function _createWebViewHtmlFile(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp6;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          ({
            iframeId: closure_129_0,
            iframeUri: closure_129_1,
            iframeSandboxAttributes: closure_129_2,
            referrerPolicy: closure_129_3,
            shimVersion: closure_129_4,
            shellBridgeSecret: closure_129_5,
            iframeCsp: closure_129_6,
          } = closure_0);
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const _HermesInternal = HermesInternal;
          closure_129_7 = "" + closure_130_5 + "/" + closure_130_6(closure_129_0);
          const obj7 = {
            iframeUri: closure_129_1,
            iframeSandboxAttributes: closure_129_2,
            referrerPolicy: closure_129_3,
            shimBridgeSecret: null,
            iframeCsp: null,
          };
          let tmp23 = null;
          if (2 === closure_129_4) {
            tmp23 = closure_129_5;
          }
          obj7.shimBridgeSecret = tmp23;
          obj7.iframeCsp = closure_129_6;
          closure_129_8 = closure_130_8(obj7);
          c5 = 2;
          c6 = 1;
          const obj8 = {
            value: (function sweepStaleWebViewHtmlFilesOnce() {
              if (closure_7 == null) {
                closure_7 = closure_3(function* () {
                  yield tmp3(tmp19[2]).clearFolder("cache", c5);
                  if (1 === tmp7) {
                    c3 = 0;
                    closure_128_0 = tmp19;
                    tmp3(tmp19[3]).captureException(closure_128_0);
                    c5 = 3;
                    tmp3(tmp19[3]);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c3 = 0;
                  }
                  return value;
                })();
              }
              return closure_7;
            })(),
            done: false,
          };
          return obj8;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 1;
          const obj4 = closure_130_1(closure_130_2[2]);
          c5 = 4;
          c6 = 1;
          const obj10 = { value: obj4.writeFile("cache", closure_129_7, closure_129_8, "utf8"), done: false };
          return obj10;
        }
      } else if (3 === tmp6) {
        c4 = 0;
        closure_129_9 = closure_3;
        closure_130_1(closure_130_2[3]).captureException(closure_129_9);
        c6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp26) {
      closure_3 = tmp26;
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp26;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_4 = fn(10760).EMBEDDED_APP_FRAME_ELEMENT_ID;
const discord_activity_data = "discord_activity_data";
let c7 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export const createActivityFrameInjectedJavaScript = function createActivityFrameInjectedJavaScript(arg0) {
  ({ insets, messageForDisallowedNavigationError } = arg0);
  if (insets == null) {
    insets = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const rect = { top: insets.top, bottom: insets.bottom, left: insets.left, right: insets.right };
  const combined =
    "\n  var insets = " +
    JSON.stringify(rect) +
    ";\n  function writeSafeAreaVars() {\n    var root = document.documentElement;\n    if (root == null) return false;\n    root.style.setProperty('--discord-safe-area-inset-left', insets.left + 'px');\n    root.style.setProperty('--discord-safe-area-inset-right', insets.right + 'px');\n    root.style.setProperty('--discord-safe-area-inset-top', insets.top + 'px');\n    root.style.setProperty('--discord-safe-area-inset-bottom', insets.bottom + 'px');\n    return true;\n  }\n\n  if (!writeSafeAreaVars()) {\n    var observer = new MutationObserver(function () {\n      if (writeSafeAreaVars()) observer.disconnect();\n    });\n    observer.observe(document, {childList: true});\n  }\n  window.addEventListener('load', writeSafeAreaVars);\n\n  window.addEventListener('message', function (e) {\n    var message = e.data;\n    if (e.source !== window.parent || message == null || message.type !== 'safeAreaUpdateEvent') return;\n    insets = message.data.insets;\n    if (writeSafeAreaVars()) {\n      window.dispatchEvent(new Event('resize'));\n      document.documentElement.offsetHeight;\n    }\n  });\n";
  let str = "";
  if (null != messageForDisallowedNavigationError) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    str =
      "\n  var bridge = window.ReactNativeWebView;\n  if (window !== window.top && window.parent === window.top && bridge != null) {\n    var notifyNative = bridge.postMessage.bind(bridge, " +
      JSON.stringify(messageForDisallowedNavigationError) +
      ");\n    window.addEventListener(\n      'beforeunload',\n      function (e) {\n        notifyNative();\n        e.preventDefault();\n      },\n      true,\n    );\n  }\n";
  }
  return "\n(function () {\n" + combined + "\n" + str + "\n})();\n";
};
export const deleteWebViewHtmlFile = function deleteWebViewHtmlFile(id) {
  const combined = "" + discord_activity_data + "/" + "iframe--" + id + ".html";
  NativeFileModuleDefault.removeFile("cache", combined).catch((error) => SentryUtilsDefault.captureException(error));
};
