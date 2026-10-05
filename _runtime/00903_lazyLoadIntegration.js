// _runtime/00903_lazyLoadIntegration.js
import _mod904 from "metro/00904__.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c3, c5;

let obj = function _lazyLoadIntegration() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let value;
    function getScriptURL(arg0) {
      obj = closure_1_0(closure_1_1[2]);
      const client = obj.getClient();
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
      const str2 = new URL("/" + closure_1_0(closure_1_1[2]).SDK_VERSION + "/" + arg0 + ".min.js", str);
      return str2.toString();
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let str2 = " script";
      if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let Sentry;
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp3;
              let element;
              value = undefined;
              const WINDOW = _mod904.WINDOW;
              Sentry = _mod904.WINDOW.Sentry || {};
              WINDOW.Sentry = Sentry;
              if (closure_2_3[closure_0]) {
                if (typeof Sentry[closure_0] === "function") {
                  if (!("_isShim" in Sentry[closure_0])) {
                    c5 = 3;
                    const obj4 = { value: Sentry[closure_0], done: true };
                    return obj4;
                  }
                }
                const tmp19 = getScriptURL(closure_2_3[closure_0]);
                const _document = _mod904.WINDOW.document;
                element = <script />;
                element.src = tmp19;
                element.crossOrigin = "anonymous";
                element.referrerPolicy = "strict-origin";
                if (closure_1) {
                  const attr = element.setAttribute("nonce", closure_1);
                }
                const self7 = this;
                const self8 = this;
                const promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  const listener = closure_1_2.addEventListener("load", () => closure_0());
                  const listener1 = closure_1_2.addEventListener("error", arg1);
                });
                const currentScript = _mod904.WINDOW.document.currentScript;
                let head = _mod904.WINDOW.document.body || _mod904.WINDOW.document.head;
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
                  const obj5 = { value: promise, done: false };
                  return obj5;
                } else {
                  const _Error4 = Error;
                  const _HermesInternal4 = HermesInternal;
                  const self9 = this;
                  const self10 = this;
                  const error = new Error(
                    "Could not find parent element to insert lazy-loaded " + closure_0 + " script",
                  );
                  throw error;
                }
              } else {
                const _Error3 = Error;
                const _HermesInternal3 = HermesInternal;
                const self5 = this;
                const self6 = this;
                const error1 = new Error("Cannot lazy load integration: " + closure_0);
                throw error1;
              }
            }
          } else if (1 === c3) {
            c4 = 0;
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const error2 = new Error("Error when loading integration: " + closure_0);
            throw error2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 0;
            value = Sentry[closure_0];
            if (typeof value !== "function") {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error3 = new Error("Could not load integration: " + closure_0);
              throw error3;
            } else {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
        } catch (tmp27) {
          if (0 === c4) {
            c5 = 3;
            throw tmp27;
          } else {
            c3 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
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
  return obj(...arguments);
};
