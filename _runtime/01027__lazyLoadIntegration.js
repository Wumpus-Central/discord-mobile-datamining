// _runtime/01027__lazyLoadIntegration.js
import asyncGeneratorStep from "asyncGeneratorStep";

function _lazyLoadIntegration() {
  const self = this;
  let tmp = asyncGeneratorStep((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c5 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let element = tmp6;
              let Sentry;
              element = undefined;
              table = undefined;
              Sentry = callback(1028).WINDOW.Sentry;
              if (!Sentry) {
                Sentry = {};
              }
              callback(1028).WINDOW.Sentry = Sentry;
              if (table[callback]) {
                if (typeof Sentry[tmp50] === "function") {
                  if (!("_isShim" in tmp27)) {
                    c5 = 3;
                    const obj1 = { value: null, done: true };
                    obj1[0] = tmp27;
                    return obj1;
                  }
                }
                const _document = tmp54(1028).WINDOW.document;
                element = <script />;
                element.src = (function getScriptURL(arg0) {
                  const client = callback(Sentry[2]).getClient();
                  let str;
                  if (client != null) {
                    const options = client.getOptions();
                    if (options != null) {
                      str = options.cdnBaseUrl;
                    }
                  }
                  if (!str) {
                    str = "https://browser.sentry-cdn.com";
                  }
                  const obj = callback(Sentry[2]);
                  const tmp = callback;
                  const tmp2 = Sentry;
                  return new URL("/" + callback(Sentry[2]).SDK_VERSION + "/" + arg0 + ".min.js", str).toString();
                })(tmp53);
                element.crossOrigin = "anonymous";
                element.referrerPolicy = "strict-origin";
                if (tmp51) {
                  const attr = element.setAttribute("nonce", tmp51);
                }
                const promise = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  const listener = element.addEventListener("load", () => callback());
                  const listener1 = element.addEventListener("error", arg1);
                });
                const currentScript = tmp54(1028).WINDOW.document.currentScript;
                let head = tmp54(1028).WINDOW.document.body;
                if (!head) {
                  head = tmp54(1028).WINDOW.document.head;
                }
                if (!head) {
                  let parentElement;
                  if (currentScript != null) {
                    parentElement = currentScript.parentElement;
                  }
                  head = parentElement;
                }
                if (head) {
                  head.appendChild(element);
                  let c4 = 1;
                  table = 2;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = promise;
                  return obj2;
                } else {
                  const _Error4 = Error;
                  const _HermesInternal4 = HermesInternal;
                  const error = new Error("Could not find parent element to insert lazy-loaded " + tmp50 + " script");
                  throw error;
                }
                const tmp28 = (function getScriptURL(arg0) {
                  const client = callback(Sentry[2]).getClient();
                  let str;
                  if (client != null) {
                    const options = client.getOptions();
                    if (options != null) {
                      str = options.cdnBaseUrl;
                    }
                  }
                  if (!str) {
                    str = "https://browser.sentry-cdn.com";
                  }
                  const obj = callback(Sentry[2]);
                  const tmp = callback;
                  const tmp2 = Sentry;
                  return new URL("/" + callback(Sentry[2]).SDK_VERSION + "/" + arg0 + ".min.js", str).toString();
                })(tmp53);
              } else {
                const _Error3 = Error;
                const _HermesInternal3 = HermesInternal;
                const error1 = new Error("Cannot lazy load integration: " + tmp50);
                throw error1;
              }
            }
          } else if (1 === tmp6) {
            c4 = 0;
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const error2 = new Error("Error when loading integration: " + callback);
            throw error2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
            table = Sentry[callback];
            if (typeof table !== "function") {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error3 = new Error("Could not load integration: " + callback);
              throw error3;
            } else {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = table;
              return obj;
            }
          }
        } catch (tmp40) {
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp40;
          } else {
            table = tmp;
          }
        }
      }
    })();
  });
  const _lazyLoadIntegration = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { replayIntegration: "replay", replayCanvasIntegration: "replay-canvas", feedbackIntegration: "feedback", feedbackModalIntegration: "feedback-modal", feedbackScreenshotIntegration: "feedback-screenshot", captureConsoleIntegration: "captureconsole", contextLinesIntegration: "contextlines", linkedErrorsIntegration: "linkederrors", dedupeIntegration: "dedupe", extraErrorDataIntegration: "extraerrordata", graphqlClientIntegration: "graphqlclient", httpClientIntegration: "httpclient", reportingObserverIntegration: "reportingobserver", rewriteFramesIntegration: "rewriteframes", browserProfilingIntegration: "browserprofiling", moduleMetadataIntegration: "modulemetadata", instrumentAnthropicAiClient: "instrumentanthropicaiclient", instrumentOpenAiClient: "instrumentopenaiclient", instrumentGoogleGenAIClient: "instrumentgooglegenaiclient", instrumentLangGraph: "instrumentlanggraph", createLangChainCallbackHandler: "createlangchaincallbackhandler" };

export const lazyLoadIntegration = function lazyLoadIntegration(arg0, arg1) {
  const self = this;
  const apply = _lazyLoadIntegration.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};