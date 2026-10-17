// === Module 11324: createWebViewHtmlFile ===

// Module 11324 (createWebViewHtmlFile)
import NativeFileModuleDefault from "NativeFileModule" /* 1164 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function webViewShellFileName(arg0) {
  return "iframe--" + arg0 + ".html";
}
let closure_6 = async function _createWebViewHtmlFile(arg0) {
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
      if (0 === closure_5) {
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
          ({ iframeId: closure_129_0, iframeUri: closure_129_1, iframeSandboxAttributes: closure_129_2, referrerPolicy: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_5 = 1;
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
          closure_129_4 = "" + closure_130_3 + "/" + closure_130_4(closure_129_0);
          const obj7 = { iframeUri: closure_129_1, iframeSandboxAttributes: closure_129_2, referrerPolicy: closure_129_3 };
          closure_129_5 = (function generateWebViewHtml(iframeUri) {
            return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iframeUri.iframeUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeUri.iframeSandboxAttributes + "\" referrerPolicy=\"" + iframeUri.referrerPolicy + "\">\n      </iframe>\n  </body>\n  </html>\n";
          })(obj7);
          closure_5 = 2;
          c6 = 1;
          const obj8 = {
            value: (function sweepStaleWebViewHtmlFilesOnce() {
                      if (closure_5 == null) {
                        closure_5 = closure_2(function*() {
                          c3 = 1;
                          yield closure_0(tmp3[1]).clearFolder("cache", c3);
                          if (1 === tmp7) {
                            c3 = 0;
                            closure_128_0 = closure_2;
                            closure_0(tmp3[2]).captureException(closure_128_0);
                            c5 = 3;
                            closure_0(tmp3[2]);
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 !== 2) {
                            c3 = 0;
                          }
                          c3 = 0;
                          return value;
                        })();
                      }
                      return closure_5;
                    })(),
            done: false
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
          const obj4 = closure_130_0(closure_130_1[1]);
          closure_5 = 4;
          c6 = 1;
          const obj10 = { value: obj4.writeFile("cache", closure_129_4, closure_129_5, "utf8"), done: false };
          return obj10;
        }
      } else if (3 === tmp6) {
        c4 = 0;
        closure_129_6 = closure_3;
        closure_130_0(closure_130_1[2]).captureException(closure_129_6);
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
    } catch (tmp23) {
      closure_3 = tmp23;
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp23;
      } else {
        closure_5 = tmp;
      }
    }
  }
};
const discord_activity_data = "discord_activity_data";
let c5 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createActivityFrameInjectedJavaScript = function createActivityFrameInjectedJavaScript(arg0) {
  ({ insets, messageForDisallowedNavigationError } = arg0);
  if (insets == null) {
    insets = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const rect = { top: insets.top, bottom: insets.bottom, left: insets.left, right: insets.right };
  const combined = "\n  var insets = " + JSON.stringify(rect) + ";\n  function writeSafeAreaVars() {\n    var root = document.documentElement;\n    if (root == null) return false;\n    root.style.setProperty('--discord-safe-area-inset-left', insets.left + 'px');\n    root.style.setProperty('--discord-safe-area-inset-right', insets.right + 'px');\n    root.style.setProperty('--discord-safe-area-inset-top', insets.top + 'px');\n    root.style.setProperty('--discord-safe-area-inset-bottom', insets.bottom + 'px');\n    return true;\n  }\n\n  if (!writeSafeAreaVars()) {\n    var observer = new MutationObserver(function () {\n      if (writeSafeAreaVars()) observer.disconnect();\n    });\n    observer.observe(document, {childList: true});\n  }\n  window.addEventListener('load', writeSafeAreaVars);\n\n  window.addEventListener('message', function (e) {\n    var message = e.data;\n    if (e.source !== window.parent || message == null || message.type !== 'safeAreaUpdateEvent') return;\n    insets = message.data.insets;\n    if (writeSafeAreaVars()) {\n      window.dispatchEvent(new Event('resize'));\n      document.documentElement.offsetHeight;\n    }\n  });\n";
  let str = "";
  if (null != messageForDisallowedNavigationError) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    str = "\n  var bridge = window.ReactNativeWebView;\n  if (window !== window.top && window.parent === window.top && bridge != null) {\n    var notifyNative = bridge.postMessage.bind(bridge, " + JSON.stringify(messageForDisallowedNavigationError) + ");\n    window.addEventListener(\n      'beforeunload',\n      function (e) {\n        notifyNative();\n        e.preventDefault();\n      },\n      true,\n    );\n  }\n";
  }
  return "\n(function () {\n" + combined + "\n" + str + "\n})();\n";
};
export const deleteWebViewHtmlFile = function deleteWebViewHtmlFile(id) {
  const combined = "" + discord_activity_data + "/" + "iframe--" + id + ".html";
  NativeFileModuleDefault.removeFile("cache", combined).catch((error) => SentryUtilsDefault.captureException(error));
};