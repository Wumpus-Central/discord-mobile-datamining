// discord_app/modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx
import NativeFileModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function webViewShellFileName(iframeId) {
  return "iframe--" + iframeId + ".html";
}
let closure_7 = async function _createWebViewHtmlFile(arg0) {
  if (closure_6 === 2) {
    closure_6 = 3;
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
      closure_6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          closure_6 = 3;
          throw value;
        } else if (arg0 === 2) {
          closure_6 = 3;
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
          ({
            iframeId: closure_129_0,
            iframeUri: closure_129_1,
            iframeSandboxAttributes: closure_129_2,
            referrerPolicy: closure_129_3,
            insets: closure_129_4,
            messageForDisallowedNavigationError: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          c5 = 1;
          closure_6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          closure_6 = 3;
          throw value;
        } else if (arg0 === 2) {
          closure_6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let _HermesInternal = HermesInternal;
          closure_129_6 = "" + closure_130_4 + "/" + closure_130_5(closure_129_0);
          const obj7 = {
            iframeUri: closure_129_1,
            iframeSandboxAttributes: closure_129_2,
            referrerPolicy: closure_129_3,
            insets: closure_129_4,
            messageForDisallowedNavigationError: closure_129_5,
          };
          closure_129_7 = (function generateWebViewHtml(arg0) {
            ({ iframeUri, iframeSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } =
              arg0);
            let str = "";
            let str2 = "";
            if (obj.isAndroid()) {
              if (insets == null) {
                insets = { top: 0, bottom: 0, left: 0, right: 0 };
              }
              const _HermesInternal = HermesInternal;
              const combined =
                "\n  " +
                "iframeWindow" +
                '.addEventListener("load", () => {\n    var iframeDoc = ' +
                "iframeWindow" +
                ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" +
                insets.left +
                "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" +
                insets.right +
                "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" +
                insets.top +
                "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" +
                insets.bottom +
                "px');\n    " +
                "isIframeLoaded" +
                " = true;\n  });\n";
              const _HermesInternal2 = HermesInternal;
              const _HermesInternal3 = HermesInternal;
              str2 =
                '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        ' +
                combined +
                "\n        " +
                "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " +
                "iframeWindow" +
                ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " +
                "iframeWindow" +
                ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " +
                "iframeWindow" +
                ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" +
                "isIframeLoaded" +
                ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " +
                "iframeWindow" +
                '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n' +
                "\n      </script>\n      ";
            }
            if (null != messageForDisallowedNavigationError) {
              const _HermesInternal4 = HermesInternal;
              const _HermesInternal5 = HermesInternal;
              str =
                '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        ' +
                "\n  " +
                "iframeWindow" +
                ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('" +
                messageForDisallowedNavigationError +
                "');\n    e.preventDefault();\n  });\n" +
                "\n      </script>\n      ";
            }
            return (
              '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="activityFrame" width="100%" height="100%" src="' +
              iframeUri +
              "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" +
              iframeSandboxAttributes +
              '" referrerPolicy="' +
              referrerPolicy +
              '">\n      </iframe>\n      ' +
              str2 +
              "\n      " +
              str +
              "\n  </body>\n  </html>\n"
            );
          })(obj7);
          c5 = 2;
          closure_6 = 1;
          const obj8 = {
            value: (function sweepStaleWebViewHtmlFilesOnce() {
              if (closure_6 == null) {
                closure_6 = closure_3(function* () {
                  yield tmp3(tmp19[1]).clearFolder("cache", c4);
                  if (1 === tmp7) {
                    c3 = 0;
                    closure_128_0 = tmp19;
                    tmp3(tmp19[2]).captureException(closure_128_0);
                    c5 = 3;
                    tmp3(tmp19[2]);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c3 = 0;
                  }
                  return value;
                })();
              }
              return closure_6;
            })(),
            done: false,
          };
          return obj8;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          closure_6 = 3;
          throw value;
        } else if (arg0 === 2) {
          closure_6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 1;
          const obj4 = closure_130_1(closure_130_2[1]);
          c5 = 4;
          closure_6 = 1;
          const obj10 = { value: obj4.writeFile("cache", closure_129_6, closure_129_7, "utf8"), done: false };
          return obj10;
        }
      } else if (3 === tmp6) {
        c4 = 0;
        closure_129_8 = closure_3;
        closure_130_1(closure_130_2[2]).captureException(closure_129_8);
        closure_6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        closure_6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        c4 = 0;
        closure_6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp22) {
      closure_3 = tmp22;
      if (tmp3 === c4) {
        closure_6 = tmp;
        throw tmp22;
      } else {
        c5 = tmp;
      }
    }
  }
};
const discord_activity_data = "discord_activity_data";
let c6 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { webViewShellFileName };
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(rect1) {
  let rect = rect1;
  if (rect1 == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const combined =
    "\n  " +
    "iframeWindow" +
    '.addEventListener("load", () => {\n    var iframeDoc = ' +
    "iframeWindow" +
    ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" +
    rect.left +
    "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" +
    rect.right +
    "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" +
    rect.top +
    "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" +
    rect.bottom +
    "px');\n    " +
    "isIframeLoaded" +
    " = true;\n  });\n";
  return (
    "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" +
    combined +
    "\n" +
    "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " +
    "iframeWindow" +
    ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " +
    "iframeWindow" +
    ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " +
    "iframeWindow" +
    ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" +
    "isIframeLoaded" +
    ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " +
    "iframeWindow" +
    '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n' +
    "\n"
  );
};
export const deleteWebViewHtmlFile = function deleteWebViewHtmlFile(id) {
  const combined = "" + discord_activity_data + "/" + "iframe--" + id + ".html";
  NativeFileModuleDefault.removeFile("cache", combined).catch((error) => SentryUtilsDefault.captureException(error));
};
