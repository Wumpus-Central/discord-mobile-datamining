// _runtime/00892__lazyLoadIntegration.js
import ignoreNextOnError from "00893_ignoreNextOnError.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

let closure_4 = async function _lazyLoadIntegration(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp6;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          let Sentry = ignoreNextOnError.WINDOW.Sentry;
          if (!Sentry) {
            Sentry = {};
          }
          ignoreNextOnError.WINDOW.Sentry = Sentry;
          closure_130_1 = Sentry;
          if (React3[closure_0]) {
            if (typeof Sentry[closure_0] === "function") {
              if (!("_isShim" in tmp27)) {
                c5 = 3;
                const obj1 = { value: tmp27, done: true };
                return obj1;
              }
            }
            const _document = ignoreNextOnError.WINDOW.document;
            const element = <script />;
            closure_130_2 = element;
            element.src = (function getScriptURL(arg0) {
              const client = closure_1_0(dependencyMap[2]).getClient();
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
              const obj = closure_1_0(dependencyMap[2]);
              return new URL("/" + closure_1_0(dependencyMap[2]).SDK_VERSION + "/" + arg0 + ".min.js", str).toString();
            })(tmp52);
            element.crossOrigin = "anonymous";
            element.referrerPolicy = "strict-origin";
            if (dependencyMap) {
              const attr = element.setAttribute("nonce", dependencyMap);
            }
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              const listener = closure_1_2.addEventListener("load", () => closure_0());
              const listener1 = closure_1_2.addEventListener("error", arg1);
            });
            const currentScript = ignoreNextOnError.WINDOW.document.currentScript;
            let head = ignoreNextOnError.WINDOW.document.body;
            if (!head) {
              head = ignoreNextOnError.WINDOW.document.head;
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
              c4 = 1;
              c3 = 2;
              c5 = 1;
              const obj2 = { value: promise, done: false };
              return obj2;
            } else {
              const _Error4 = Error;
              const _HermesInternal4 = HermesInternal;
              const error = new Error("Could not find parent element to insert lazy-loaded " + closure_0 + " script");
              throw error;
            }
            const tmp28 = (function getScriptURL(arg0) {
              const client = closure_1_0(dependencyMap[2]).getClient();
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
              const obj = closure_1_0(dependencyMap[2]);
              return new URL("/" + closure_1_0(dependencyMap[2]).SDK_VERSION + "/" + arg0 + ".min.js", str).toString();
            })(tmp52);
          } else {
            const _Error3 = Error;
            const _HermesInternal3 = HermesInternal;
            const error1 = new Error("Cannot lazy load integration: " + closure_0);
            throw error1;
          }
        }
      } else if (1 === tmp6) {
        c4 = 0;
        const _Error2 = Error;
        const _HermesInternal2 = HermesInternal;
        const error2 = new Error("Error when loading integration: " + closure_130_0);
        throw error2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        closure_130_3 = closure_130_1[closure_130_0];
        if (typeof closure_130_3 !== "function") {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error3 = new Error("Could not load integration: " + closure_130_0);
          throw error3;
        } else {
          c5 = 3;
          obj = { value: closure_130_3, done: true };
          return obj;
        }
      }
    } catch (tmp40) {
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp40;
      } else {
        c3 = tmp;
      }
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = {
  replayIntegration: "replay",
  replayCanvasIntegration: "replay-canvas",
  feedbackIntegration: "feedback",
  feedbackModalIntegration: "feedback-modal",
  feedbackScreenshotIntegration: "feedback-screenshot",
  captureConsoleIntegration: "captureconsole",
  contextLinesIntegration: "contextlines",
  linkedErrorsIntegration: "linkederrors",
  dedupeIntegration: "dedupe",
  extraErrorDataIntegration: "extraerrordata",
  graphqlClientIntegration: "graphqlclient",
  httpClientIntegration: "httpclient",
  reportingObserverIntegration: "reportingobserver",
  rewriteFramesIntegration: "rewriteframes",
  browserProfilingIntegration: "browserprofiling",
  moduleMetadataIntegration: "modulemetadata",
  instrumentAnthropicAiClient: "instrumentanthropicaiclient",
  instrumentOpenAiClient: "instrumentopenaiclient",
  instrumentGoogleGenAIClient: "instrumentgooglegenaiclient",
  instrumentLangGraph: "instrumentlanggraph",
  createLangChainCallbackHandler: "createlangchaincallbackhandler",
};

export const lazyLoadIntegration = function lazyLoadIntegration(arg0, arg1) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
