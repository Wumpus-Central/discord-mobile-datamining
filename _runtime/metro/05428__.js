// === Module 5428: ? ===

// Module 5428
let closure_11, closure_12, version;

let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    let tmp = arg0;
    return fn(arg0);
  }
  fn = (arg0) => {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
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
    const self = this;
    const self2 = this;
    const error = new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
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
function loadStripe() {
  let num;
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  c15 = true;
  let closure_1 = Date.now();
  if (typeof loadScript === "function") {
    let closure_0 = closure_1;
    let catchPromise = c10;
    let tmp2 = null;
    if (null === c10) {
      let self = this;
      let self2 = this;
      const promise = new Promise((fn, fn2) => {
        let regex;
        let regex2;
        function findScript() {
          const elements = document.querySelectorAll("script[src^=\"".concat(closure_1_3, "\"]"));
          let num = 0;
          if (0 < elements.length) {
            const src = tmp.src;
            while (typeof closure_1_8 === "function") {
              let isMatch = regex.test(src) || regex2.test(src);
              if (isMatch) {
                return tmp;
              } else {
                num = num + 1;
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
          return null;
        }
        function onLoad(fn, fn2) {
          closure_0 = fn;
          closure_1 = fn2;
          return function() {
            if (window.Stripe) {
              const _window = window;
              fn(window.Stripe);
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Stripe.js not available");
              fn2(error);
            }
          };
        }
        function onError(fn2) {
          closure_0 = fn2;
          return (cause) => {
            const obj = { cause };
            const error = new Error("Failed to load Stripe.js", obj);
            fn2(error);
          };
        }
        if (typeof window !== "undefined") {
          const _document = document;
          if (typeof document !== "undefined") {
            let _window = window;
            const tmp2 = window.Stripe && closure_0;
            if (tmp2) {
              const _console = console;
              console.warn(closure_2_7);
            }
            const _window2 = window;
            if (window.Stripe) {
              const _window3 = window;
              fn(window.Stripe);
            } else {
              try {
                let num = 0;
                let obj = findScript();
                const tmp6 = findScript();
                if (obj) {
                  if (closure_0) {
                    const _console2 = console;
                    console.warn(closure_2_7);
                  }
                  closure_12 = onLoad(fn, fn2);
                  closure_11 = onError(fn2);
                  const listener = obj.addEventListener("load", closure_12);
                  const listener1 = obj.addEventListener("error", closure_11);
                }
                const tmp8 = obj;
                if (tmp8) {
                  const tmp11 = obj;
                  if (tmp11) {
                    if (null !== closure_12) {
                      if (null !== closure_11) {
                        const removed = obj.removeEventListener("load", closure_12);
                        const removed1 = obj.removeEventListener("error", closure_11);
                        const parentNode = obj.parentNode;
                        const tmp15 = null === parentNode || undefined === obj2;
                        if (!tmp15) {
                          parentNode.removeChild(obj);
                        }
                        obj = injectScript(closure_0);
                      }
                    }
                  }
                } else {
                  obj = injectScript(closure_0);
                }
              } catch (tmp28) {
                fn2(tmp28);
              }
            }
          }
        }
        const tmp = fn(null);
      });
      let tmp3 = promise;
      c10 = promise;
      catchPromise = promise.catch((error) => {
        c10 = null;
        return Promise.reject(error);
      });
    }
    return catchPromise.then((version) => {
      let tmp3 = null;
      if (null !== version) {
        const str7 = array[0];
        let match = str7.match(/^pk_test/);
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
          warn(combined1.concat(basil, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
        }
        const applyResult = version.apply(undefined, array);
        tmp3 = applyResult;
        const tmp8 = applyResult && applyResult._registerWrapper;
        if (tmp8) {
          const obj = { name: "stripe-js", version: "7.3.1", startTime: tmp2 };
          applyResult._registerWrapper(obj);
          tmp3 = applyResult;
        }
      }
      return tmp3;
    });
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
loadStripe.setLoadParameters = function(advancedFraudSignals) {
  if (c15) {
    const tmp2 = closure_1;
    if (tmp2) {
      if (typeof validateLoadParams === "function") {
        const concat = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat;
        let tmp4 = globalThis;
        const _JSON = JSON;
        const combined = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(advancedFraudSignals), "\n");
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
            const self = this;
            const self2 = this;
            let tmp7 = combined;
            const error = new Error(combined);
            throw error;
          }
        }
        const _Error5 = Error;
        const self9 = this;
        const self10 = this;
        const error1 = new Error(combined);
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  if (c15) {
    const _Error4 = Error;
    const self7 = this;
    const self8 = this;
    const error2 = new Error("You cannot change load parameters after calling loadStripe");
    throw error2;
  } else if (typeof validateLoadParams === "function") {
    const concat2 = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat;
    const _JSON2 = JSON;
    const combined1 = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(advancedFraudSignals), "\n");
    if (null !== advancedFraudSignals) {
      if ("object" === advancedFraudSignals(advancedFraudSignals)) {
        const _Object2 = Object;
        if (1 === Object.keys(advancedFraudSignals).length) {
          if (typeof advancedFraudSignals.advancedFraudSignals === "boolean") {
            closure_1 = advancedFraudSignals;
          }
        }
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error3 = new Error(combined1);
        throw error3;
      }
    }
    const _Error3 = Error;
    const self5 = this;
    const self6 = this;
    const error4 = new Error(combined1);
    throw error4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};

export { loadStripe };