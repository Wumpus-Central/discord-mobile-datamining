// === Module 4798: _typeof ===

// Module 4798 (_typeof)
function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      let fn = (arg0) => typeof arg0;
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
}
const basil = "basil";
let c3 = "https://js.stripe.com";
let combined = "".concat("https://js.stripe.com", "/");
let closure_4 = combined.concat("basil", "/stripe.js");
const re5 = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
const re6 = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
let c7 = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
function isStripeJSURL(arg0) {

}
function injectScript(advancedFraudSignals) {
  let str = "";
  if (advancedFraudSignals) {
    str = "";
    if (!advancedFraudSignals.advancedFraudSignals) {
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
    error = new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    throw error;
  }
}
let c10 = null;
let c11 = null;
let c12 = null;
function loadScript(arg0) {

}
function validateLoadParams(arg0) {

}
let c15 = false;
function loadStripe(KEY) {
  const length = arguments.length;
  const array = new Array(length);
  closure_0 = array;
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  c15 = true;
  closure_1 = Date.now();
  if (typeof loadScript !== "function") {
    HermesBuiltin.throwTypeError();
  }
  closure_0 = closure_1;
  let catchPromise = promise;
  if (null === promise) {
    promise = new Promise((arg0, arg1) => {
      if (typeof window !== "undefined") {
        const _document = document;
        if (typeof document !== "undefined") {
          let _window = window;
          if (tmp4) {
            const _console = console;
            console.warn(closure_1_7);
          }
          const _window2 = window;
          if (window.Stripe) {
            const _window3 = window;
            arg0(window.Stripe);
          } else {
            try {
              const tmp8 = (function findScript() {
                const elements = document.querySelectorAll("script[src^=\"".concat(closure_3, "\"]"));
                let num = 0;
                if (0 < elements.length) {
                  while (true) {
                    let tmp2 = closure_8;
                    let src = elements[num].src;
                    let tmp3 = num;
                    if (typeof closure_8 !== "function") {
                      let str = "Trying to call a non-function";
                      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
                    }
                    let tmp4 = regex;
                    let isMatch = regex.test(src);
                    if (!isMatch) {
                      let tmp6 = regex2;
                      isMatch = regex2.test(src);
                    }
                    if (isMatch) {
                      break;
                    } else {
                      num = num + 1;
                    }
                  }
                  return tmp;
                }
                return null;
              })();
              let obj = tmp8;
              if (tmp8) {
                if (closure_0) {
                  const _console2 = console;
                  console.warn(closure_1_7);
                }
                closure_12 = (function onLoad(arg0, arg1) {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  return () => {
                    if (window.Stripe) {
                      const _window = window;
                      callback(window.Stripe);
                    } else {
                      const _Error = Error;
                      error = new Error("Stripe.js not available");
                      callback2(error);
                    }
                  };
                })(arg0, arg1);
                closure_11 = (function onError(arg0) {
                  closure_0 = arg0;
                  return (cause) => {
                    error = new Error("Failed to load Stripe.js", { cause });
                    callback(error);
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
                      obj = closure_1_9(closure_0);
                    }
                  }
                }
              } else {
                obj = closure_1_9(closure_0);
              }
            } catch (tmp30) {
              tmp2(tmp30);
            }
          }
          tmp4 = window.Stripe && closure_0;
        }
      }
      arg0(null);
    });
    catchPromise = promise.catch((arg0) => {
      c10 = null;
      return Promise.reject(arg0);
    });
  }
  return catchPromise.then((version) => {
    let tmp3 = null;
    if (null !== version) {
      let match = tmp[0].match(/^pk_test/);
      version = version.version;
      let str = "v3";
      if (3 !== version) {
        str = version;
      }
      if (match) {
        match = str !== tmp4;
      }
      if (match) {
        const _console = console;
        const concat = "Stripe.js@".concat;
        const combined = "Stripe.js@".concat(str, " was loaded on the page, but @stripe/stripe-js@");
        const combined1 = combined.concat("7.3.1", " expected Stripe.js@");
        console.warn(combined1.concat(tmp4, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
      }
      const applyResult = version.apply(undefined, tmp);
      let _registerWrapper = applyResult;
      if (applyResult) {
        _registerWrapper = applyResult._registerWrapper;
      }
      tmp3 = applyResult;
      if (_registerWrapper) {
        const obj = { name: "stripe-js", version: "7.3.1", startTime: null };
        obj[2] = tmp2;
        applyResult._registerWrapper(obj);
        tmp3 = applyResult;
      }
      const str7 = tmp[0];
    }
    return tmp3;
  });
}
loadStripe.setLoadParameters = (advancedFraudSignals) => {
  _typeof = advancedFraudSignals;
  if (c15) {
    if (closure_1) {
      if (typeof validateLoadParams !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const concat = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat;
      const _JSON = JSON;
      const combined = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(advancedFraudSignals), "\n");
      if (null !== advancedFraudSignals) {
        if ("object" === _typeof(advancedFraudSignals)) {
          const _Object3 = Object;
          if (1 === Object.keys(advancedFraudSignals).length) {
            if (typeof advancedFraudSignals.advancedFraudSignals === "boolean") {
              const _Object = Object;
              const keys = Object.keys(advancedFraudSignals);
            }
          }
          const _Error = Error;
          error = new Error(combined);
          throw error;
        }
      }
      const _Error5 = Error;
      const error1 = new Error(combined);
      throw error1;
    }
  }
  if (c15) {
    const _Error4 = Error;
    const error2 = new Error("You cannot change load parameters after calling loadStripe");
    throw error2;
  } else {
    if (typeof validateLoadParams !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const concat2 = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat;
    const _JSON2 = JSON;
    const combined1 = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(advancedFraudSignals), "\n");
    if (null !== advancedFraudSignals) {
      if ("object" === _typeof(advancedFraudSignals)) {
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
  }
};
arg5.loadStripe = loadStripe;