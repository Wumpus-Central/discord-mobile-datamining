// _runtime/metro/04892__.js
let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    return fn(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
};
const basil = "basil";
let c3 = "https://js.stripe.com";
let combined = "".concat("https://js.stripe.com", "/");
let closure_4 = combined.concat("basil", "/stripe.js");
const re5 = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
const re6 = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
let c7 =
  "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
function isStripeJSURL(arg0) {}
function injectScript(array) {
  let str = "";
  if (array) {
    str = "";
    if (!array.advancedFraudSignals) {
      str = "?advancedFraudSignals=false";
    }
  }
  const element = <script />;
  const combined = "".concat(closure_4);
  element.src = combined.concat(str);
  let body = document.head;
  if (!body) {
    const _document = document;
    body = document.body;
  }
  if (body) {
    body.appendChild(element);
    return element;
  } else {
    const _Error = Error;
    const error = new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    throw error;
  }
}
let c10 = null;
let closure_11 = null;
let closure_12 = null;
function loadScript(arg0) {}
function validateLoadParams(arg0) {}
let c15 = false;
function loadStripe() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  c15 = true;
  closure_1 = Date.now();
  if (typeof loadScript === "function") {
    closure_129_0 = closure_1;
    let catchPromise = c10;
    if (null === c10) {
      const promise = new Promise((fn, arg1) => {
        if (typeof window !== "undefined") {
          const _document = document;
          if (typeof document !== "undefined") {
            let _window = window;
            if (tmp4) {
              const _console = console;
              console.warn(c7);
            }
            const _window2 = window;
            if (window.Stripe) {
              const _window3 = window;
              fn(window.Stripe);
            } else {
              try {
                const tmp8 = (function findScript() {
                  const elements = document.querySelectorAll('script[src^="'.concat(closure_1_3, '"]'));
                  let num = 0;
                  if (0 < elements.length) {
                    const src = tmp.src;
                    while (typeof closure_1_8 === "function") {
                      let isMatch = regex.test(src);
                      if (!isMatch) {
                        isMatch = regex2.test(src);
                      }
                      if (isMatch) {
                        return tmp;
                      } else {
                        num = num + 1;
                      }
                    }
                    throw new TypeError("Trying to call a non-function");
                  }
                  return null;
                })();
                let obj = tmp8;
                if (tmp8) {
                  if (array) {
                    const _console2 = console;
                    console.warn(c7);
                  }
                  closure_12 = (function onLoad(fn, arg1) {
                    closure_0 = fn;
                    closure_1 = arg1;
                    return () => {
                      if (window.Stripe) {
                        const _window = window;
                        closure_0(window.Stripe);
                      } else {
                        const _Error = Error;
                        const error = new Error("Stripe.js not available");
                        closure_1(error);
                      }
                    };
                  })(fn, arg1);
                  closure_11 = (function onError(arg0) {
                    closure_0 = arg0;
                    return (cause) => {
                      const error = new Error("Failed to load Stripe.js", { cause });
                      closure_0(error);
                    };
                  })(arg1);
                  const listener = obj.addEventListener("load", closure_12);
                  const listener1 = obj.addEventListener("error", closure_11);
                }
                if (obj) {
                  if (obj) {
                    if (null !== closure_12) {
                      if (null !== closure_11) {
                        const removed = obj.removeEventListener("load", closure_12);
                        const removed1 = obj.removeEventListener("error", closure_11);
                        const parentNode = obj.parentNode;
                        let tmp17 = null === parentNode;
                        if (!tmp17) {
                          tmp17 = undefined === obj2;
                        }
                        if (!tmp17) {
                          obj2.removeChild(obj);
                        }
                        obj = injectScript(array);
                      }
                    }
                  }
                } else {
                  obj = injectScript(array);
                }
              } catch (tmp30) {
                tmp2(tmp30);
              }
            }
            tmp4 = window.Stripe && array;
          }
        }
        fn(null);
      });
      c10 = promise;
      catchPromise = promise.catch((error) => {
        c10 = null;
        return Promise.reject(error);
      });
    }
    return catchPromise.then((version) => {
      let tmp3 = null;
      if (null !== version) {
        let match = array[0].match(/^pk_test/);
        version = version.version;
        let str = "v3";
        if (3 !== version) {
          str = version;
        }
        if (match) {
          match = str !== basil;
        }
        if (match) {
          const _console = console;
          const concat = "Stripe.js@".concat;
          const combined = "Stripe.js@".concat(str, " was loaded on the page, but @stripe/stripe-js@");
          const combined1 = combined.concat("7.3.1", " expected Stripe.js@");
          console.warn(
            combined1.concat(
              basil,
              ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
            ),
          );
        }
        const applyResult = version.apply(undefined, array);
        let _registerWrapper = applyResult;
        if (applyResult) {
          _registerWrapper = applyResult._registerWrapper;
        }
        tmp3 = applyResult;
        if (_registerWrapper) {
          const obj = { name: "stripe-js", version: "7.3.1", startTime: tmp2 };
          applyResult._registerWrapper(obj);
          tmp3 = applyResult;
        }
      }
      return tmp3;
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
loadStripe.setLoadParameters = (advancedFraudSignals) => {
  if (c15) {
    if (closure_1) {
      if (typeof validateLoadParams === "function") {
        const concat =
          "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    "
            .concat;
        const _JSON = JSON;
        const combined =
          "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
            JSON.stringify(advancedFraudSignals),
            "\n",
          );
        if (null !== advancedFraudSignals) {
          if ("object" === advancedFraudSignals(advancedFraudSignals)) {
            const _Object3 = Object;
            if (1 === Object.keys(advancedFraudSignals).length) {
              if (typeof advancedFraudSignals.advancedFraudSignals === "boolean") {
                const _Object = Object;
                const keys = Object.keys(advancedFraudSignals);
              }
            }
            const _Error = Error;
            const error = new Error(combined);
            throw error;
          }
        }
        const _Error5 = Error;
        const error1 = new Error(combined);
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  if (c15) {
    const _Error4 = Error;
    const error2 = new Error("You cannot change load parameters after calling loadStripe");
    throw error2;
  } else if (typeof validateLoadParams === "function") {
    const concat2 =
      "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    "
        .concat;
    const _JSON2 = JSON;
    const combined1 =
      "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
        JSON.stringify(advancedFraudSignals),
        "\n",
      );
    if (null !== advancedFraudSignals) {
      if ("object" === advancedFraudSignals(advancedFraudSignals)) {
        const _Object2 = Object;
        if (1 === Object.keys(advancedFraudSignals).length) {
          if (typeof advancedFraudSignals.advancedFraudSignals === "boolean") {
            closure_1 = advancedFraudSignals;
          }
        }
        const _Error2 = Error;
        const error3 = new Error(combined1);
        throw error3;
      }
    }
    const _Error3 = Error;
    const error4 = new Error(combined1);
    throw error4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};

export { loadStripe };
