// === Module 1004: spotlightIntegration ===

// Module 1004 (spotlightIntegration)
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;

function getDefaultSidecarUrl() {
  function getHostnameFromString(str) {
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
  }
  try {
    const Devtools = ReactNativeLibraries.ReactNativeLibraries.Devtools;
    let tmp3 = null;
    let devServer;
    if (null !== Devtools) {
      if (undefined !== Devtools) {
        devServer = obj.getDevServer();
      }
    }
    if (null !== devServer) {
      let obj2;
      let combined;
      if (undefined !== tmp7) {
        obj2 = devServer;
      }
      const url = obj2.url;
      if (url) {
        const _HermesInternal = HermesInternal;
        const str = ":8969/stream";
        combined = "http://" + getHostnameFromString(tmp9) + ":8969/stream";
      } else {
        combined = c2;
      }
      return combined;
    }
    obj2 = {};
  } catch (err) {
    return c2;
  }
}
let c2 = "http://localhost:8969/stream";

export const spotlightIntegration = function spotlightIntegration(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let sidecarUrl = obj.sidecarUrl;
  if (sidecarUrl === undefined) {
    sidecarUrl = getDefaultSidecarUrl();
  }
  let debug = sidecarUrl(693).debug;
  debug.log("[Spotlight] Using Sidecar URL", sidecarUrl);
  return {
    name: "Spotlight",
    setupOnce() {

    },
    setup(on) {
      if (on.on) {
        const str = "beforeEnvelope";
        on.on("beforeEnvelope", (arg0) => {
          const items = [...arg0];
          const items1 = [...arg0[1]];
          items[1] = items1.filter((item) => {
            let tmp = typeof item[0].content_type !== "string";
            if (!tmp) {
              const content_type = item[0].content_type;
              tmp = !content_type.startsWith("image");
            }
            return tmp;
          });
          const obj = sidecarUrl(closure_2_1[1]);
          const stealthXhr = obj.createStealthXhr();
          if (stealthXhr) {
            stealthXhr.open("POST", closure_0, true);
            stealthXhr.setRequestHeader("Content-Type", "application/x-sentry-envelope");
            stealthXhr.onreadystatechange = function() {
              if (stealthXhr.readyState === closure_2_0(closure_2_1[1]).XHR_READYSTATE_DONE) {
                const status = stealthXhr.status;
                let tmp4 = 0 === status;
                if (!tmp4) {
                  tmp4 = status >= 200 && status < 400;
                  const tmp5 = status >= 200 && status < 400;
                }
                if (!tmp4) {
                  const debug = closure_2_0(closure_2_1[0]).debug;
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = debug.error;
                  const error1 = new Error(stealthXhr.statusText);
                  error("[Spotlight] Sentry SDK can't connect to Spotlight is it running? See https://spotlightjs.com to download it.", error1);
                }
              }
            };
            const send = stealthXhr.send;
            const tmpResult = sidecarUrl(closure_2_1[0]);
            send(tmpResult.serializeEnvelope(items));
          } else {
            let debug = sidecarUrl(closure_2_1[0]).debug;
            debug.error("[Spotlight] Sentry SDK can not create XHR object");
          }
        });
      }
    }
  };
};
export { getDefaultSidecarUrl };