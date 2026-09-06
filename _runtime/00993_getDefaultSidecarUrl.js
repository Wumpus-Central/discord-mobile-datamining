// _runtime/00993_getDefaultSidecarUrl.js
import TurboModuleRegistry from "00862_TurboModuleRegistry.js";

require = arg1;
const dependencyMap = arg6;
function getDefaultSidecarUrl() {
  try {
    const Devtools = TurboModuleRegistry.ReactNativeLibraries.Devtools;
    let obj = Devtools;
    let devServer;
    if (null !== Devtools) {
      if (undefined !== obj) {
        devServer = obj.getDevServer();
      }
    }
    if (null !== devServer) {
      if (undefined !== tmp7) {
        obj = devServer;
      }
      const url = obj.url;
      if (url) {
        const _HermesInternal = HermesInternal;
        let combined =
          "http://" +
          (function getHostnameFromString(str) {
            const match = str.match(/^(?:\w+:)?\/\/([^/:]+)(:\d+)?(.*)$/);
            let tmp2;
            if (null != match) {
              tmp2 = match[1];
            }
            let tmp3 = null;
            if (tmp2) {
              tmp3 = match[1];
            }
            return tmp3;
          })(tmp9) +
          ":8969/stream";
      } else {
        combined = c2;
      }
      return combined;
    }
    obj = {};
  } catch (err) {
    return c2;
  }
}
let c2 = "http://localhost:8969/stream";
arg5.spotlightIntegration = function spotlightIntegration(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let sidecarUrl = obj.sidecarUrl;
  if (sidecarUrl === undefined) {
    sidecarUrl = getDefaultSidecarUrl();
  }
  let debug = sidecarUrl(682).debug;
  debug.log("[Spotlight] Using Sidecar URL", sidecarUrl);
  obj = {
    name: "Spotlight",
    setupOnce() {},
    setup(on) {
      if (on.on) {
        on.on("beforeEnvelope", (arg0) => {
          const items = [...arg0];
          const items1 = [...arg0[1]];
          items[1] = items1.filter((arg0) => {
            const content_type = arg0[0].content_type;
            let tmp = typeof content_type !== "string";
            if (typeof content_type === "string") {
              const content_type2 = arg0[0].content_type;
              tmp = !content_type2.startsWith("image");
            }
            return tmp;
          });
          const stealthXhr = callback(closure_1_1[1]).createStealthXhr();
          if (stealthXhr) {
            stealthXhr.open("POST", stealthXhr, true);
            stealthXhr.setRequestHeader("Content-Type", "application/x-sentry-envelope");
            stealthXhr.onreadystatechange = () => {
              if (stealthXhr.readyState === stealthXhr(closure_1_1[1]).XHR_READYSTATE_DONE) {
                const status = tmp.status;
                let tmp4 = 0 === status;
                if (!tmp4) {
                  let tmp5 = status >= 200;
                  if (tmp5) {
                    tmp5 = status < 400;
                  }
                  tmp4 = tmp5;
                }
                if (!tmp4) {
                  const debug = stealthXhr(closure_1_1[0]).debug;
                  const _Error = Error;
                  error = new Error(tmp.statusText);
                  debug.error(
                    "[Spotlight] Sentry SDK can't connect to Spotlight is it running? See https://spotlightjs.com to download it.",
                    error,
                  );
                }
              }
            };
            stealthXhr.send(tmp(tmp2[0]).serializeEnvelope(items));
            const tmpResult = tmp(tmp2[0]);
          } else {
            let debug = tmp(tmp2[0]).debug;
            debug.error("[Spotlight] Sentry SDK can not create XHR object");
          }
        });
      }
    },
  };
  return obj;
};
arg5.getDefaultSidecarUrl = getDefaultSidecarUrl;
