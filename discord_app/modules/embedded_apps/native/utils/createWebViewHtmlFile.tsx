// discord_app/modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function webViewShellFileName(iframeId) {
  return "iframe--" + iframeId + ".html";
}
let closure_8 = async function _createWebViewHtmlFile(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
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
          let obj5 = { value, done: true };
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
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          let _HermesInternal = HermesInternal;
          closure_129_6 = "" + closure_130_5 + "/" + closure_130_6(closure_129_0);
          let obj7 = {
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
          })(obj7);
          c5 = 2;
          c6 = 1;
          let obj8 = {
            value: (function sweepStaleWebViewHtmlFilesOnce() {
              if (closure_7 == null) {
                closure_7 = closure_3(function* () {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
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
                          closure_0 = tmp7;
                          c3 = 1;
                          if (obj9.isAndroid()) {
                            const obj5 = tmp3(tmp22[3]);
                            let clearFolderResult;
                            if (obj5 != null) {
                              clearFolderResult = obj5.clearFolder("cache", c5);
                            }
                            DCDFileManager = 3;
                            c5 = 1;
                            const obj6 = { value: clearFolderResult, done: false };
                            return obj6;
                          } else {
                            DCDFileManager = DCDFileManager.DCDFileManager;
                            DCDFileManager = 2;
                            c5 = 1;
                            const obj7 = { value: DCDFileManager.clearFolder("cache", c5), done: false };
                            return obj7;
                          }
                          obj9 = closure_0(tmp22[2]);
                        }
                      } else {
                        if (1 === tmp7) {
                          c3 = 0;
                          closure_128_0 = tmp22;
                          tmp3(tmp22[4]).captureException(closure_128_0);
                          c5 = 3;
                          const obj3 = tmp3(tmp22[4]);
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c3 = 0;
                            c5 = 3;
                            const obj = { value, done: true };
                            return obj;
                          }
                          c3 = 0;
                        }
                        c3 = 0;
                        c5 = 3;
                        const obj8 = { value, done: true };
                        return obj8;
                      }
                    } catch (tmp22) {
                      if (tmp4 === c3) {
                        c5 = tmp2;
                        throw tmp22;
                      } else {
                        DCDFileManager = tmp;
                      }
                    }
                  }
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
          let obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 1;
          let obj4 = closure_130_1(closure_130_2[3]);
          c5 = 4;
          c6 = 1;
          const obj10 = { value: obj4.writeFile("cache", closure_129_6, closure_129_7, "utf8"), done: false };
          return obj10;
        }
      } else if (3 === tmp6) {
        c4 = 0;
        closure_129_8 = closure_3;
        closure_130_1(closure_130_2[4]).captureException(closure_129_8);
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
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp22) {
      closure_3 = tmp22;
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp22;
      } else {
        c5 = tmp;
      }
    }
  }
};
const NativeModules = fn(17).NativeModules;
const discord_activity_data = "discord_activity_data";
let c7 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  const self = this;
  const apply = closure_8.apply;
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
  closure_1 = async function _remove() {
    if (v3 === 2) {
      v3 = 3;
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
            if (obj8.isAndroid()) {
              const obj4 = v1(dependencyMap[3]);
              let removeFileResult;
              if (obj4 != null) {
                removeFileResult = obj4.removeFile("cache", require);
              }
              v1 = 2;
              v3 = 1;
              const obj5 = { value: removeFileResult, done: false };
              return obj5;
            } else {
              DCDFileManager = DCDFileManager.DCDFileManager;
              v1 = 1;
              v3 = 1;
              const obj6 = { value: DCDFileManager.removeFile("cache", require), done: false };
              return obj6;
            }
            obj8 = v3(dependencyMap[2]);
          }
        } else {
          if (1 === tmp4) {
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
            const obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        v3 = tmp;
        throw tmp11;
      }
    }
  };
  closure_0 = "" + discord_activity_data + "/" + "iframe--" + id + ".html";
  (function remove() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })().catch((error) => closure_1(dependencyMap[4]).captureException(error));
};
