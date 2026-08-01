// === Module 10680: _createWebviewHtmlFile ===

// Module 10680 (_createWebviewHtmlFile)
import set from "set";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
function _createWebviewHtmlFile() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp3;
              let callback2 = tmp7;
              c0 = undefined;
              callback2 = undefined;
              table = undefined;
              c3 = undefined;
              let DCDFileManager;
              ({ iFrameUri: c0, iFrameSandboxAttributes: c1, referrerPolicy: c2, insets: c3, messageForDisallowedNavigationError: c4 } = c0);
              c5 = undefined;
              c6 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c5 = "discord_activity_data/activity.html";
              const obj2 = { iFrameUri: null, iFrameSandboxAttributes: null, referrerPolicy: null, insets: null, messageForDisallowedNavigationError: null };
              obj2[0] = c0;
              obj2[1] = callback2;
              obj2[2] = table;
              obj2[3] = c3;
              obj2[4] = DCDFileManager;
              c6 = (function generateWebviewHtml(arg0) {
                let iFrameSandboxAttributes;
                let iFrameUri;
                let insets;
                let messageForDisallowedNavigationError;
                let referrerPolicy;
                ({ iFrameUri, iFrameSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } = arg0);
                let str = "";
                let str2 = "";
                if (obj.isAndroid()) {
                  if (insets == null) {
                    insets = { top: 0, bottom: 0, left: 0, right: 0 };
                  }
                  const _HermesInternal = HermesInternal;
                  const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + insets.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + insets.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + insets.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + insets.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
                  const _HermesInternal2 = HermesInternal;
                  const _HermesInternal3 = HermesInternal;
                  str2 = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        " + combined + "\n        " + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n      </script>\n      ";
                }
                if (null != messageForDisallowedNavigationError) {
                  const _HermesInternal4 = HermesInternal;
                  const _HermesInternal5 = HermesInternal;
                  str = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        " + "\n  " + "iframeWindow" + ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('" + messageForDisallowedNavigationError + "');\n    e.preventDefault();\n  });\n" + "\n      </script>\n      ";
                }
                return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iFrameUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen sandbox=\"" + iFrameSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\">\n      </iframe>\n      " + str2 + "\n      " + str + "\n  </body>\n  </html>\n";
              })(obj2);
              DCDFileManager = 1;
              if (obj12.isAndroid()) {
                let obj5 = outer1_1(outer1_2[3]);
                let writeFileResult;
                if (obj5 != null) {
                  writeFileResult = obj5.writeFile("cache", c5, c6, "utf8");
                }
                c5 = 4;
                c6 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = writeFileResult;
                return obj3;
              } else {
                DCDFileManager = DCDFileManager.DCDFileManager;
                c5 = 3;
                c6 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = DCDFileManager.writeFile("cache", c5, c6, "utf8");
                return obj4;
              }
              obj12 = callback(outer1_2[2]);
            }
          } else if (2 === tmp7) {
            DCDFileManager = 0;
            let closure_7 = c3;
            obj3 = callback2(table[4]);
            obj3.captureException(closure_7);
            c6 = 3;
            return { value: null, done: true };
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                DCDFileManager = 0;
                c6 = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              DCDFileManager = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            DCDFileManager = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp31) {
          c3 = tmp31;
          if (tmp4 === DCDFileManager) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _createWebviewHtmlFile = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/activities/native/createWebviewHtmlFile.tsx");

export default function createWebviewHtmlFile() {
  const self = this;
  const apply = _createWebviewHtmlFile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(arg0) {
  let rect = arg0;
  if (arg0 == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + rect.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + rect.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + rect.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + rect.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + combined + "\n" + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n";
};