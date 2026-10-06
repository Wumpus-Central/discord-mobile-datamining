// discord_app/modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c6, closure_3;

function webViewShellFileName(iframeId) {
  return "iframe--" + iframeId + ".html";
}
let obj = function _createWebViewHtmlFile() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let messageForDisallowedNavigationError;
    function generateWebViewHtml(arg0) {
      ({ iframeUri, iframeSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } = arg0);
      let str = "";
      let str2 = "";
      obj = closure_1_0(closure_1_2[2]);
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
        '" frameborder="0" allow="autoplay; encrypted-media; accelerometer; gyroscope" allowfullscreen sandbox="' +
        iframeSandboxAttributes +
        '" referrerPolicy="' +
        referrerPolicy +
        '">\n      </iframe>\n      ' +
        str2 +
        "\n      " +
        str +
        "\n  </body>\n  </html>\n"
      );
    }
    function sweepStaleWebViewHtmlFilesOnce() {
      if (closure_7 == null) {
        closure_7 = referrerPolicy(function* () {
          let DCDFileManager;
          let closure_1;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              if (0 === DCDFileManager) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = tmp4;
                  c3 = 1;
                  const obj9 = closure_0(closure_2[2]);
                  if (obj9.isAndroid()) {
                    const obj5 = tmp(closure_2[3]);
                    let clearFolderResult;
                    if (obj5 != null) {
                      clearFolderResult = obj5.clearFolder("cache", c5);
                    }
                    DCDFileManager = 3;
                    c5 = 1;
                    const obj6 = { value: clearFolderResult, done: false };
                    return obj6;
                  } else {
                    DCDFileManager = 2;
                    c5 = 1;
                    const obj7 = { value: DCDFileManager.clearFolder("cache", c5), done: false };
                    return obj7;
                  }
                }
              } else {
                if (1 === DCDFileManager) {
                  c3 = 0;
                  closure_0 = closure_2;
                  const obj3 = tmp(closure_2[4]);
                  obj3.captureException(closure_0);
                } else {
                  if (2 === DCDFileManager) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      c5 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    }
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c3 = 0;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              closure_2 = tmp19;
              if (0 === c3) {
                c5 = 3;
                throw tmp19;
              } else {
                DCDFileManager = 1;
              }
            }
          }
        })();
      }
      return closure_7;
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      const str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp26 = globalThis;
      const str4 = "/";
      const str5 = "";
      const str6 = "utf8";
      const str7 = "cache";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let insets;
        try {
          let iframeUri;
          let iframeSandboxAttributes;
          let referrerPolicy;
          let closure_6;
          let closure_7;
          c6 = 2;
          const tmp4 = messageForDisallowedNavigationError;
          if (0 === messageForDisallowedNavigationError) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              c0 = undefined;
              iframeUri = undefined;
              iframeSandboxAttributes = undefined;
              referrerPolicy = undefined;
              insets = undefined;
              ({
                iframeId: c0,
                iframeUri: c1,
                iframeSandboxAttributes: c2,
                referrerPolicy: c3,
                insets: c4,
                messageForDisallowedNavigationError: c5,
              } = closure_0);
              closure_6 = undefined;
              closure_7 = undefined;
              messageForDisallowedNavigationError = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else {
              let _HermesInternal = HermesInternal;
              closure_6 = "" + closure_130_5 + "/" + closure_130_6(c0);
              let obj7 = {
                iframeUri,
                iframeSandboxAttributes,
                referrerPolicy,
                insets,
                messageForDisallowedNavigationError,
              };
              closure_7 = generateWebViewHtml(obj7);
              messageForDisallowedNavigationError = 2;
              c6 = 1;
              let obj8 = { value: sweepStaleWebViewHtmlFilesOnce(), done: false };
              return obj8;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj9 = { value, done: true };
              return obj9;
            } else {
              insets = 1;
              let obj4 = closure_130_1(closure_130_2[3]);
              const tmp19 = obj4;
              let str = "cache";
              let str2 = "utf8";
              messageForDisallowedNavigationError = 4;
              c6 = 1;
              const obj10 = { value: obj4.writeFile("cache", closure_6, closure_7, "utf8"), done: false };
              return obj10;
            }
          } else if (3 === tmp4) {
            insets = 0;
            let closure_8 = closure_3;
            let obj3 = closure_130_1(closure_130_2[4]);
            const captureExceptionResult = obj3.captureException(closure_8);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            insets = 0;
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            insets = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === insets) {
            c6 = 3;
            throw tmp20;
          } else {
            messageForDisallowedNavigationError = 3;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const discord_activity_data = "discord_activity_data";
let c7 = null;
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  return obj(...arguments);
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
  function remove() {
    return obj(...arguments);
  }
  obj = function _remove() {
    obj = _asyncToGenerator(async () => {
      let DCDFileManager;
      let v1;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj8 = v3(closure_1_2[2]);
              if (obj8.isAndroid()) {
                const obj4 = v1(closure_1_2[3]);
                let removeFileResult;
                if (obj4 != null) {
                  removeFileResult = obj4.removeFile("cache", closure_2_0);
                }
                v1 = 2;
                v3 = 1;
                const obj5 = { value: removeFileResult, done: false };
                return obj5;
              } else {
                DCDFileManager = DCDFileManager.DCDFileManager;
                v1 = 1;
                v3 = 1;
                const obj6 = { value: DCDFileManager.removeFile("cache", closure_2_0), done: false };
                return obj6;
              }
            }
          } else {
            if (1 === tmp3) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          v3 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  let closure_0 = "" + discord_activity_data + "/" + "iframe--" + id + ".html";
  const promise = remove();
  promise.catch((error) => {
    obj = obj(dependencyMap[4]);
    return obj.captureException(error);
  });
};
