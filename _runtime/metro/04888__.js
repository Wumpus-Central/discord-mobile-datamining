// _runtime/metro/04888__.js
import _mod19 from "00019__.js";

let fn = function t(exports, React) {
  function _objectSpread2(prototype) {
    closure_0 = prototype;
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp2 = null != arguments[num] ? arguments[num] : {};
      closure_1 = tmp2;
      let _Object = Object;
      if (num % 2) {
        let _ObjectResult = _Object(tmp2);
        closure_130_0 = _ObjectResult;
        let _Object7 = Object;
        let keys = Object.keys(_ObjectResult);
        let _Object8 = Object;
        if (Object.getOwnPropertySymbols) {
          let _Object9 = Object;
          let ownPropertySymbols = Object.getOwnPropertySymbols(_ObjectResult);
          let push2 = keys.push;
          let applyResult = push2.apply(
            keys,
            ownPropertySymbols.filter((item) => Object.getOwnPropertyDescriptor(closure_0, item).enumerable),
          );
        }
        let item = keys.forEach((item) => {
          if (item in closure_0) {
            const _Object = Object;
            const obj = { value: tmp2, enumerable: true, configurable: true, writable: true };
            Object.defineProperty(closure_0, item, obj);
          } else {
            closure_0[item] = tmp2;
          }
        });
      } else {
        let _Object2 = Object;
        if (_Object.getOwnPropertyDescriptors) {
          let _Object6 = Object;
          let definePropertiesResult = _Object2.defineProperties(prototype, Object.getOwnPropertyDescriptors(tmp2));
        } else {
          let _Object2Result = _Object2(tmp2);
          closure_129_0 = _Object2Result;
          let _Object3 = Object;
          let keys1 = Object.keys(_Object2Result);
          let _Object4 = Object;
          if (Object.getOwnPropertySymbols) {
            let _Object5 = Object;
            let push = keys1.push;
            let applyResult1 = push.apply(keys1, Object.getOwnPropertySymbols(_Object2Result));
          }
          let item1 = keys1.forEach((item) => {
            Object.defineProperty(closure_0, item, Object.getOwnPropertyDescriptor(closure_1, item));
          });
        }
      }
    }
    return prototype;
  }
  const checkPropTypes = function _typeof(arg0) {
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
  };
  function _objectWithoutProperties(arg0, arr) {
    if (null == arg0) {
      return {};
    } else {
      if (null == arg0) {
        let obj = {};
      } else {
        obj = {};
        const _Object = Object;
        const keys = Object.keys(arg0);
        for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
          let tmp2 = keys[num3];
          if (arr.indexOf(tmp2) < 0) {
            obj[tmp2] = arg0[tmp2];
          }
        }
      }
      const _Object2 = Object;
      if (Object.getOwnPropertySymbols) {
        const _Object3 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
        for (let num6 = 0; num6 < ownPropertySymbols.length; num6 = num6 + 1) {
          let tmp5 = ownPropertySymbols[num6];
          if (arr.indexOf(tmp5) < 0) {
            let _Object4 = Object;
            let call = propertyIsEnumerable.call;
            if (typeof call === "unknown" ? propertyIsEnumerable(tmp5) : call(arg0, tmp5)) {
              obj[tmp5] = arg0[tmp5];
            }
          }
        }
      }
      return obj;
    }
  }
  function _slicedToArray(iterable, arg1) {
    let tmp;
    if (Array.isArray(iterable)) {
      tmp = iterable;
    }
    if (!tmp) {
      tmp = (function _iterableToArrayLimit(iterable, arg1) {
        let tmp6 = iterable;
        if (iterable) {
          const _Symbol = Symbol;
          let prop = typeof Symbol !== "undefined";
          if (typeof Symbol !== "undefined") {
            const _Symbol2 = Symbol;
            prop = iterable[Symbol.iterator];
          }
          if (!prop) {
            prop = iterable[Symbol.iterator];
          }
          tmp6 = prop;
        }
        if (null != tmp6) {
          let flag2 = false;
          try {
            const items = [];
            try {
              const call = tmp9.call;
              if (typeof call === "unknown") {
                let iter = tmp9();
              } else {
                iter = call(iterable);
              }
              const iter3 = iter.next();
              const done = iter3.done;
              let tmp11 = done;
              if (!done) {
                items.push(iter4.value);
                if (!arg1) {
                  const iter5 = iter2.next();
                  const done2 = iter5.done;
                  tmp11 = done2;
                  while (!done2) {
                    let arr = items.push(iter6.value);
                    if (!arg1) {
                      continue;
                    } else if (items.length === arg1) {
                      break;
                    }
                    continue;
                  }
                }
              }
              try {
                let tmp18 = tmp11;
                if (!tmp11) {
                  tmp18 = null == iter2.return;
                }
                if (!tmp18) {
                  iter2.return();
                }
                if (flag2) {
                  throw tmp5;
                } else {
                  return items;
                }
              } catch (tmp24) {
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp24;
                }
              }
            } catch (tmp5) {
              flag2 = true;
            }
          } catch (tmp27) {
            try {
              if (!tmp3) {
                const tmp29 = tmp4 == obj.return;
              }
              if (!tmp29) {
                obj.return();
              }
              if (tmp2) {
                throw tmp;
              } else {
                throw tmp27;
              }
            } catch (tmp34) {
              if (tmp2) {
                throw tmp;
              } else {
                throw tmp34;
              }
            }
          }
        }
      })(iterable, 2);
    }
    if (tmp) {
      if (tmp) {
        return tmp;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
        throw typeError;
      }
    } else {
      if (iterable) {
        if (typeof iterable !== "string") {
          const _Object = Object;
          let call = toString.call;
          let arr = typeof call === "unknown" ? toString() : call(iterable);
          const substr = arr.slice(8, -1);
          let name = substr;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let num5 = 2;
                if (2 > iterable.length) {
                  num5 = iterable.length;
                }
                const _Array = Array;
                let array = new Array(num5);
                let num6 = 0;
                arr = array;
                if (0 < num5) {
                  do {
                    array[num6] = iterable[num6];
                    num6 = num6 + 1;
                    arr = array;
                  } while (num6 < num5);
                }
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          tmp4 = "Object" === substr && iterable.constructor;
        }
      }
      let num8 = 2;
      if (2 > iterable.length) {
        num8 = iterable.length;
      }
      const _Array3 = Array;
      array = new Array(num8);
      let num9 = 0;
      if (0 < num8) {
        do {
          array[num9] = iterable[num9];
          num9 = num9 + 1;
        } while (num9 < num8);
      }
    }
  }
  function emptyFunction() {}
  closure_129_1 = emptyFunction;
  function emptyFunctionWithReset() {}
  closure_129_2 = emptyFunctionWithReset;
  closure_129_0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  let tmp = (function o() {
    function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
      if (arg5 !== shim) {
        const _Error = Error;
        const error = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        error.name = "Invariant Violation";
        throw error;
      }
    }
    function getShim() {
      return shim;
    }
    shim.isRequired = shim;
    const obj = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes,
      resetWarningCache: _objectSpread2,
    };
    obj.PropTypes = obj;
    return obj;
  })();
  let _default = tmp;
  if (tmp) {
    _default = tmp;
    if (tmp.__esModule) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("default");
      } else {
        hasOwnPropertyResult = call(tmp, "default");
      }
      _default = tmp;
      if (hasOwnPropertyResult) {
        _default = tmp.default;
      }
    }
  }
  function useAttachEvent(arg0, arg1, arg2) {}
  function usePrevious(arg0) {}
  function isUnknownObject(arg0) {}
  c9 = "[object Object]";
  function isEqual(D, D) {
    let length;
    let length2;
    if (typeof isUnknownObject === "function") {
      let tmp4 = null !== D;
      if (tmp4) {
        tmp4 = "object" === fn(D);
      }
      if (tmp4) {
        if (typeof tmp === "function") {
          let tmp7 = null !== D;
          if (tmp7) {
            tmp7 = "object" === fn(D);
          }
          if (tmp7) {
            const _Array = Array;
            const isArray = Array.isArray(D);
            const _Array2 = Array;
            if (isArray !== Array.isArray(D)) {
              return false;
            } else {
              const _Object5 = Object;
              const call2 = toString2.call;
              const _Object = Object;
              const call = toString.call;
              const tmp13 = (typeof call2 === "unknown" ? toString2() : call2(D)) === c9;
              if (tmp13 !== ((typeof call === "unknown" ? toString() : call(D)) === c9)) {
                return false;
              } else {
                if (!tmp13) {
                  if (!isArray) {
                    return D === D;
                  }
                }
                const _Object2 = Object;
                const keys = Object.keys(D);
                const _Object3 = Object;
                const keys1 = Object.keys(D);
                if (keys.length !== keys1.length) {
                  return false;
                } else {
                  const obj = {};
                  let num = 0;
                  if (0 < keys.length) {
                    do {
                      obj[keys[num]] = true;
                      num = num + 1;
                      length = keys.length;
                    } while (num < length);
                  }
                  let num2 = 0;
                  if (0 < keys1.length) {
                    do {
                      obj[keys1[num2]] = true;
                      num2 = num2 + 1;
                      length2 = keys1.length;
                    } while (num2 < length2);
                  }
                  const _Object4 = Object;
                  const keys2 = Object.keys(obj);
                  if (keys2.length !== keys.length) {
                    return false;
                  } else {
                    closure_0 = D;
                    closure_1 = D;
                    return keys2.every(function pred(item) {
                      return isEqual(closure_0[item], closure_1[item]);
                    });
                  }
                }
              }
              const tmp11 = typeof call2 === "unknown" ? toString2() : call2(D);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return D === D;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function extractAllowedOptionsUpdates(arg0, arg1, arg2) {}
  c12 =
    "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
  function validateStripe(elements) {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let tmp = arguments[1];
      }
      if (null !== elements) {
        if (typeof isUnknownObject === "function") {
          let tmp4 = null !== elements;
          if (tmp4) {
            tmp4 = "object" === fn(elements);
          }
          if (tmp4) {
            tmp4 = typeof elements.elements === "function";
          }
          if (tmp4) {
            tmp4 = typeof elements.createToken === "function";
          }
          if (tmp4) {
            tmp4 = typeof elements.createPaymentMethod === "function";
          }
          if (tmp4) {
            tmp4 = typeof elements.confirmCardPayment === "function";
          }
          if (!tmp4) {
            const _Error = Error;
            const error = new Error(tmp);
            throw error;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return elements;
    }
    tmp = c12;
  }
  function parseStripeProp(options) {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let tmp = arguments[1];
      }
      closure_0 = tmp;
      if (typeof isUnknownObject === "function") {
        let tmp5 = null !== options;
        if (tmp5) {
          tmp5 = "object" === fn(options);
        }
        if (tmp5) {
          tmp5 = typeof options.then === "function";
        }
        if (tmp5) {
          let obj = { tag: "async", stripePromise: null };
          const resolved = Promise.resolve(options);
          obj.stripePromise = resolved.then((result) => {
            validateStripe(result, closure_0);
            return result;
          });
          return obj;
        } else {
          validateStripe(options, tmp);
          if (null === options) {
            obj = { tag: "empty" };
          } else {
            obj = { tag: "sync", stripe: options };
          }
          return obj;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    tmp = c12;
  }
  function registerWithStripeJs(arg0) {}
  let context = React.createContext(null);
  context.displayName = "ElementsContext";
  function parseElementsContext(arg0, arg1) {}
  class Elements {
    constructor(arg0) {
      stripe = exports.stripe;
      options = stripe;
      options = exports.options;
      closure_1 = options;
      obj = options;
      items = [];
      items[0] = stripe;
      memo = options.useMemo(() => parseStripeProp(options), items);
      closure_2 = memo;
      tmp2 = closure_4(
        options.useState(() => {
          let stripe = null;
          if ("sync" === memo.tag) {
            stripe = memo.stripe;
          }
          const obj = { stripe, elements: null };
          let elementsResult = null;
          if ("sync" === memo.tag) {
            stripe = memo.stripe;
            elementsResult = stripe.elements(ref1);
          }
          obj.elements = elementsResult;
          return obj;
        }),
        2,
      );
      first = tmp2[0];
      closure_3 = first;
      closure_4 = tmp2[1];
      items1 = [, ,];
      items1[0] = memo;
      items1[1] = first;
      items1[2] = options;
      effect = options.useEffect(() => {
        c0 = true;
        if ("async" === memo.tag) {
          if (!first.stripe) {
            memo.stripePromise.then((result) => {
              let tmp = result;
              if (result) {
                tmp = c0;
              }
              if (tmp) {
                const stripe = result;
                closure_4((stripe) => {
                  let tmp = stripe;
                  if (!stripe.stripe) {
                    const obj = { stripe, elements: stripe.elements(ref1) };
                    tmp = obj;
                  }
                  return tmp;
                });
              }
            });
            const stripePromise = memo.stripePromise;
          }
          return () => {
            c0 = false;
          };
        }
        let stripe = "sync" !== memo.tag;
        if (!stripe) {
          stripe = first.stripe;
        }
        if (!stripe) {
          const stripe2 = memo.stripe;
          closure_4((stripe) => {
            let tmp = stripe;
            if (!stripe.stripe) {
              const obj = { stripe, elements: stripe.elements(ref1) };
              tmp = obj;
            }
            return tmp;
          });
        }
      }, items1);
      if (typeof usePrevious === "function") {
        options = stripe;
        ref = obj.useRef(stripe);
        closure_1 = ref;
        items2 = [];
        items2[0] = stripe;
        effect1 = obj.useEffect(() => {
          ref14.current = options;
        }, items2);
        current = ref.current;
        items3 = [,];
        items3[0] = current;
        items3[1] = stripe;
        effect2 = obj.useEffect(() => {
          let tmp2 = null !== current;
          if (tmp2) {
            tmp2 = tmp !== options;
          }
          if (tmp2) {
            const _console = console;
            console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
          }
        }, items3);
        if (typeof tmp5 === "function") {
          ref1 = obj.useRef(options);
          closure_1 = ref1;
          items4 = [];
          items4[0] = options;
          effect3 = obj.useEffect(() => {
            ref14.current = options;
          }, items4);
          current2 = ref1.current;
          current = current2;
          items5 = [, ,];
          items5[0] = options;
          items5[1] = current2;
          items5[2] = first.elements;
          effect4 = obj.useEffect(() => {
            if (first.elements) {
              if (typeof extractAllowedOptionsUpdates === "function") {
                closure_0 = tmp4;
                closure_2 = ["clientSecret", "fonts"];
                if (typeof isUnknownObject === "function") {
                  let tmp7 = null !== tmp4;
                  if (tmp7) {
                    tmp7 = "object" === fn(tmp4);
                  }
                  let reduced = null;
                  if (tmp7) {
                    const _Object = Object;
                    const keys = Object.keys(tmp4);
                    reduced = keys.reduce((acc, item) => {
                      if (typeof current === "function") {
                        let tmp3 = null !== tmp4;
                        if (tmp3) {
                          tmp3 = "object" === onReady(tmp4);
                        }
                        let tmp6 = !tmp3;
                        if (tmp3) {
                          tmp6 = !closure_2_10(dependencyMap[item], tmp4[item]);
                        }
                        if (closure_2.includes(item)) {
                          let tmp11 = acc;
                          if (tmp6) {
                            const _console = console;
                            const concat = "Unsupported prop change: options.".concat;
                            console.warn(
                              "Unsupported prop change: options.".concat(item, " is not a mutable property."),
                            );
                            tmp11 = acc;
                          }
                        } else {
                          tmp11 = acc;
                          if (tmp6) {
                            let obj = acc;
                            if (!acc) {
                              obj = {};
                            }
                            obj = {};
                            ref14(obj, obj);
                            obj = {};
                            if (item in obj) {
                              const _Object = Object;
                              const obj1 = { value: tmp15, enumerable: true, configurable: true, writable: true };
                              Object.defineProperty(obj, item, obj1);
                            } else {
                              obj[item] = tmp15;
                            }
                            ref14(obj, {}, obj);
                          }
                        }
                        return tmp11;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }, null);
                  }
                  if (reduced) {
                    const elements = tmp.elements;
                    elements.update(reduced);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }, items5);
          items6 = [];
          items6[0] = first.stripe;
          effect5 = obj.useEffect(() => {
            const stripe = first.stripe;
            if (typeof registerWithStripeJs === "function") {
              let registerAppInfo = stripe;
              if (stripe) {
                registerAppInfo = stripe._registerWrapper;
              }
              if (registerAppInfo) {
                registerAppInfo = stripe.registerAppInfo;
              }
              if (registerAppInfo) {
                stripe._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
                stripe.registerAppInfo({
                  name: "react-stripe-js",
                  version: "3.7.0",
                  url: "https://stripe.com/docs/stripe-js/react",
                });
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, items6);
          tmp13 = closure_16;
          obj = { value: null };
          obj.value = first;
          return obj.createElement(closure_16.Provider, obj, exports.children);
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  Elements.propTypes = { stripe: _default.any, options: _default.object };
  function useElementsContextWithUseCase(arg0) {}
  class ElementsConsumer {
    constructor(arg0) {
      if (typeof useElementsContextWithUseCase === "function") {
        tmp2 = closure_0;
        tmp3 = closure_16;
        context = closure_0.useContext(closure_16);
        tmp5 = parseElementsContext;
        if (typeof parseElementsContext === "function") {
          if (context) {
            return tmp(context);
          } else {
            tmp6 = globalThis;
            _Error = Error;
            str = "Could not find Elements context; You need to wrap the part of your app that ";
            concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
            str2 = " in an <Elements> provider.";
            str3 = "mounts <ElementsConsumer>";
            tmp7 = new.target;
            tmp8 = new.target;
            error = new Error(
              "Could not find Elements context; You need to wrap the part of your app that ".concat(
                "mounts <ElementsConsumer>",
                " in an <Elements> provider.",
              ),
            );
            tmp10 = error;
            throw error;
          }
        } else {
          str5 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str4 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  ElementsConsumer.propTypes = { children: _default.func.isRequired };
  closure_19 = ["on", "session"];
  let context1 = React.createContext(null);
  context1.displayName = "CheckoutSdkContext";
  function parseCheckoutSdkContext(arg0, arg1) {}
  const context2 = React.createContext(null);
  context2.displayName = "CheckoutContext";
  class CheckoutProvider {
    constructor(arg0) {
      stripe = exports.stripe;
      checkoutSdk = stripe;
      options = exports.options;
      closure_1 = options;
      obj = checkoutSdk;
      items = [];
      items[0] = stripe;
      memo = checkoutSdk.useMemo(
        () =>
          parseStripeProp(
            checkoutSdk,
            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
          ),
        items,
      );
      closure_2 = memo;
      tmp2 = closure_4(checkoutSdk.useState(null), 2);
      first = tmp2[0];
      closure_3 = first;
      tmp4 = tmp2[1];
      closure_4 = tmp4;
      tmp5 = closure_4(
        checkoutSdk.useState(() => {
          let stripe = null;
          if ("sync" === memo.tag) {
            stripe = memo.stripe;
          }
          return { stripe, checkoutSdk: null };
        }),
        2,
      );
      first1 = tmp5[0];
      closure_5 = first1;
      closure_6 = tmp5[1];
      safeSetContext = function safeSetContext(arg0, arg1) {};
      closure_8 = checkoutSdk.useRef(false);
      items1 = [, , ,];
      items1[0] = memo;
      items1[1] = first1;
      items1[2] = options;
      items1[3] = tmp4;
      effect = checkoutSdk.useEffect(() => {
        c0 = true;
        if ("async" === memo.tag) {
          if (!first1.stripe) {
            memo.stripePromise.then((initCheckout) => {
              closure_0 = initCheckout;
              let tmp = initCheckout;
              if (initCheckout) {
                tmp = c0;
              }
              if (tmp) {
                tmp = !ref.current;
              }
              if (tmp) {
                ref.current = true;
                const checkout = initCheckout.initCheckout(ref2);
                checkout.then((on) => {
                  if (on) {
                    if (typeof safeSetContext === "function") {
                      checkoutSdk = on;
                      closure_2_6((stripe) => {
                        let tmp = stripe;
                        if (!stripe.stripe) {
                          const obj = { stripe, checkoutSdk };
                          tmp = obj;
                        }
                        return tmp;
                      });
                      on.on("change", closure_2_4);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                });
              }
            });
            const stripePromise = memo.stripePromise;
          }
          return () => {
            c0 = false;
          };
        }
        let tmp4 = "sync" === memo.tag && memo.stripe;
        if (tmp4) {
          tmp4 = !ref.current;
        }
        if (tmp4) {
          ref.current = true;
          let stripe = memo.stripe;
          let checkout = stripe.initCheckout(ref2);
          checkout.then((on) => {
            if (on) {
              if (typeof safeSetContext === "function") {
                stripe = stripe.stripe;
                closure_1 = on;
                closure_1_6((stripe) => {
                  let tmp = stripe;
                  if (!stripe.stripe) {
                    const obj = { stripe, checkoutSdk };
                    tmp = obj;
                  }
                  return tmp;
                });
                on.on("change", closure_1_4);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          });
        }
      }, items1);
      tmp8 = safeSetContext;
      if (typeof safeSetContext === "function") {
        checkoutSdk = stripe;
        ref = obj.useRef(stripe);
        closure_1 = ref;
        items2 = [];
        items2[0] = stripe;
        effect1 = obj.useEffect(() => {
          ref14.current = options;
        }, items2);
        current = ref.current;
        items3 = [,];
        items3[0] = current;
        items3[1] = stripe;
        effect2 = obj.useEffect(() => {
          let tmp2 = null !== current;
          if (tmp2) {
            tmp2 = tmp !== checkoutSdk;
          }
          if (tmp2) {
            const _console = console;
            console.warn(
              "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
            );
          }
        }, items3);
        if (typeof tmp8 === "function") {
          checkoutSdk = options;
          ref1 = obj.useRef(options);
          closure_1 = ref1;
          items4 = [];
          items4[0] = options;
          effect3 = obj.useEffect(() => {
            ref14.current = options;
          }, items4);
          current2 = ref1.current;
          current = current2;
          checkoutSdk = first1.checkoutSdk;
          if (typeof tmp8 === "function") {
            ref2 = obj.useRef(checkoutSdk);
            closure_1 = ref2;
            items5 = [];
            items5[0] = checkoutSdk;
            effect4 = obj.useEffect(() => {
              ref14.current = options;
            }, items5);
            current3 = ref2.current;
            current = current3;
            items6 = [, , ,];
            items6[0] = options;
            items6[1] = current2;
            items6[2] = first1.checkoutSdk;
            items6[3] = current3;
            effect5 = obj.useEffect(() => {
              if (first1.checkoutSdk) {
                let appearance;
                if (null != current2) {
                  const elementsOptions = current2.elementsOptions;
                  if (null !== elementsOptions) {
                    if (undefined !== elementsOptions) {
                      appearance = elementsOptions.appearance;
                    }
                  }
                }
                let appearance1;
                if (null != ref2) {
                  const elementsOptions2 = ref2.elementsOptions;
                  if (null !== elementsOptions2) {
                    if (undefined !== elementsOptions2) {
                      appearance1 = elementsOptions2.appearance;
                    }
                  }
                }
                const tmp6 = isEqual(appearance1, appearance);
                let tmp7 = !tmp6;
                checkoutSdk = !current3;
                if (!current3) {
                  checkoutSdk = first1.checkoutSdk;
                }
                let tmp9 = appearance1;
                if (appearance1) {
                  if (tmp6) {
                    tmp7 = checkoutSdk;
                  }
                  tmp9 = tmp7;
                }
                if (tmp9) {
                  const checkoutSdk2 = first1.checkoutSdk;
                  checkoutSdk2.changeAppearance(appearance1);
                }
              }
            }, items6);
            items7 = [];
            items7[0] = first1.stripe;
            effect6 = obj.useEffect(() => {
              const stripe = first1.stripe;
              if (typeof registerWithStripeJs === "function") {
                let registerAppInfo = stripe;
                if (stripe) {
                  registerAppInfo = stripe._registerWrapper;
                }
                if (registerAppInfo) {
                  registerAppInfo = stripe.registerAppInfo;
                }
                if (registerAppInfo) {
                  stripe._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
                  stripe.registerAppInfo({
                    name: "react-stripe-js",
                    version: "3.7.0",
                    url: "https://stripe.com/docs/stripe-js/react",
                  });
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }, items7);
            items8 = [,];
            items8[0] = first1.checkoutSdk;
            items8[1] = first;
            element = null;
            if (first1.checkoutSdk) {
              tmp20 = closure_20;
              obj = { value: null };
              obj.value = first1;
              tmp21 = closure_22;
              obj1 = { value: null };
              obj1.value = tmp18;
              element = obj.createElement(
                closure_20.Provider,
                obj,
                obj.createElement(closure_22.Provider, obj1, exports.children),
              );
            }
            return element;
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let obj = { stripe: _default.any, options: null };
  obj = { fetchClientSecret: _default.func.isRequired, elementsOptions: _default.object };
  obj.options = _default.shape(obj).isRequired;
  CheckoutProvider.propTypes = obj;
  function useElementsOrCheckoutSdkContextWithUseCase(arg0) {}
  closure_24 = ["mode"];
  const context3 = React.createContext(null);
  context3.displayName = "EmbeddedCheckoutProviderContext";
  function useEmbeddedCheckoutContext() {}
  function createElementComponent(address, arg1) {
    const formatted = address.charAt(0).toUpperCase();
    let combined = "".concat(formatted + address.slice(1), "Element");
    let tmp3 = arg1
      ? function ServerElement(arg0) {
          combined = "mounts <".concat(combined, ">");
          if (typeof useElementsOrCheckoutSdkContextWithUseCase === "function") {
            context = address.useContext(context1);
            context1 = address.useContext(context);
            if (context) {
              if (context1) {
                const _Error3 = Error;
                const concat3 = "You cannot wrap the part of your app that ".concat;
                const error = new Error(
                  "You cannot wrap the part of your app that ".concat(
                    combined,
                    " in both <CheckoutProvider> and <Elements> providers.",
                  ),
                );
                throw error;
              }
            }
            if (context) {
              if (typeof parseCheckoutSdkContext === "function") {
                if (!context) {
                  const _Error2 = Error;
                  const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that "
                    .concat;
                  const error1 = new Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                      combined,
                      " in an <CheckoutProvider> provider.",
                    ),
                  );
                  throw error1;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else if (typeof parseElementsContext === "function") {
              if (!context1) {
                const _Error = Error;
                const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
                const error2 = new Error(
                  "Could not find Elements context; You need to wrap the part of your app that ".concat(
                    combined,
                    " in an <Elements> provider.",
                  ),
                );
                throw error2;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            const obj = { id: null, className: null };
            ({ id: obj2.id, className: obj2.className } = arg0);
            return <div id={null} className={null} />;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      : function ClientElement(options) {
          options = options.options;
          ({ id, className } = options);
          if (undefined === options) {
            options = {};
          }
          ({ onBlur, onFocus, onReady } = options);
          let ref14 = onReady;
          ({
            onChange,
            onEscape,
            onClick,
            onLoadError,
            onLoaderStart,
            onNetworksChange,
            onConfirm,
            onCancel,
            onShippingAddressChange,
            onShippingRateChange,
          } = options);
          combined = "mounts <".concat(ref14, ">");
          if (typeof useElementsOrCheckoutSdkContextWithUseCase === "function") {
            context = address.useContext(closure_1_20);
            context1 = address.useContext(closure_1_16);
            if (context) {
              if (context1) {
                let _Error3 = Error;
                const concat3 = "You cannot wrap the part of your app that ".concat;
                let error = new Error(
                  "You cannot wrap the part of your app that ".concat(
                    combined,
                    " in both <CheckoutProvider> and <Elements> providers.",
                  ),
                );
                throw error;
              }
            }
            if (context) {
              if (typeof parseCheckoutSdkContext === "function") {
                context1 = context;
                if (!context) {
                  let _Error2 = Error;
                  const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that "
                    .concat;
                  let error1 = new Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                      combined,
                      " in an <CheckoutProvider> provider.",
                    ),
                  );
                  throw error1;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else if (typeof parseElementsContext === "function") {
              if (!context1) {
                let _Error = Error;
                let concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
                let error2 = new Error(
                  "Could not find Elements context; You need to wrap the part of your app that ".concat(
                    combined,
                    " in an <Elements> provider.",
                  ),
                );
                throw error2;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            let elements = null;
            if ("elements" in context1) {
              elements = context1.elements;
            }
            onReady = elements;
            let checkoutSdk = null;
            if ("checkoutSdk" in context1) {
              checkoutSdk = context1.checkoutSdk;
            }
            onReady = checkoutSdk;
            let tmp22 = _slicedToArray(address.useState(null), 2);
            const first = tmp22[0];
            let ref13 = first;
            closure_5 = tmp22[1];
            address.useRef(null);
            const ref = address.useRef(null);
            if (typeof useAttachEvent === "function") {
              options = first;
              ref14 = "blur";
              onReady = onBlur;
              const ref1 = address.useRef(onBlur);
              ref13 = ref1;
              const items = [onBlur];
              const effect = address.useEffect(() => {
                ref13.current = onReady;
              }, items);
              const items1 = [onBlur, "blur", first, ref1];
              const effect1 = address.useEffect(() => {
                if (onReady) {
                  if (decoratedCb) {
                    decoratedCb = function decoratedCb() {
                      if (ref.current) {
                        current = ref.current;
                        const apply = current.apply;
                        if (typeof apply === "unknown") {
                          HermesBuiltin.applyArguments(ref);
                        } else {
                          apply(ref, arguments);
                        }
                      }
                    };
                    obj.on(ref14, decoratedCb);
                    return () => {
                      options.off(ref14, decoratedCb);
                    };
                  }
                  obj = decoratedCb;
                }
                return () => {};
              }, items1);
              if (typeof useAttachEvent === "function") {
                options = first;
                ref14 = "focus";
                onReady = onFocus;
                const ref2 = address.useRef(onFocus);
                ref13 = ref2;
                const items2 = [onFocus];
                const effect2 = address.useEffect(() => {
                  ref13.current = onReady;
                }, items2);
                const items3 = [onFocus, "focus", first, ref2];
                const effect3 = address.useEffect(() => {
                  if (onReady) {
                    if (decoratedCb) {
                      decoratedCb = function decoratedCb() {
                        if (ref.current) {
                          current = ref.current;
                          const apply = current.apply;
                          if (typeof apply === "unknown") {
                            HermesBuiltin.applyArguments(ref);
                          } else {
                            apply(ref, arguments);
                          }
                        }
                      };
                      obj.on(ref14, decoratedCb);
                      return () => {
                        options.off(ref14, decoratedCb);
                      };
                    }
                    obj = decoratedCb;
                  }
                  return () => {};
                }, items3);
                if (typeof useAttachEvent === "function") {
                  options = first;
                  ref14 = "escape";
                  onReady = onEscape;
                  const ref3 = address.useRef(onEscape);
                  ref13 = ref3;
                  const items4 = [onEscape];
                  const effect4 = address.useEffect(() => {
                    ref13.current = onReady;
                  }, items4);
                  const items5 = [onEscape, "escape", first, ref3];
                  const effect5 = address.useEffect(() => {
                    if (onReady) {
                      if (decoratedCb) {
                        decoratedCb = function decoratedCb() {
                          if (ref.current) {
                            current = ref.current;
                            const apply = current.apply;
                            if (typeof apply === "unknown") {
                              HermesBuiltin.applyArguments(ref);
                            } else {
                              apply(ref, arguments);
                            }
                          }
                        };
                        obj.on(ref14, decoratedCb);
                        return () => {
                          options.off(ref14, decoratedCb);
                        };
                      }
                      obj = decoratedCb;
                    }
                    return () => {};
                  }, items5);
                  if (typeof useAttachEvent === "function") {
                    options = first;
                    ref14 = "click";
                    onReady = onClick;
                    const ref4 = address.useRef(onClick);
                    ref13 = ref4;
                    const items6 = [onClick];
                    const effect6 = address.useEffect(() => {
                      ref13.current = onReady;
                    }, items6);
                    const items7 = [onClick, "click", first, ref4];
                    const effect7 = address.useEffect(() => {
                      if (onReady) {
                        if (decoratedCb) {
                          decoratedCb = function decoratedCb() {
                            if (ref.current) {
                              current = ref.current;
                              const apply = current.apply;
                              if (typeof apply === "unknown") {
                                HermesBuiltin.applyArguments(ref);
                              } else {
                                apply(ref, arguments);
                              }
                            }
                          };
                          obj.on(ref14, decoratedCb);
                          return () => {
                            options.off(ref14, decoratedCb);
                          };
                        }
                        obj = decoratedCb;
                      }
                      return () => {};
                    }, items7);
                    if (typeof useAttachEvent === "function") {
                      options = first;
                      ref14 = "loaderror";
                      onReady = onLoadError;
                      const ref5 = address.useRef(onLoadError);
                      ref13 = ref5;
                      const items8 = [onLoadError];
                      const effect8 = address.useEffect(() => {
                        ref13.current = onReady;
                      }, items8);
                      const items9 = [onLoadError, "loaderror", first, ref5];
                      const effect9 = address.useEffect(() => {
                        if (onReady) {
                          if (decoratedCb) {
                            decoratedCb = function decoratedCb() {
                              if (ref.current) {
                                current = ref.current;
                                const apply = current.apply;
                                if (typeof apply === "unknown") {
                                  HermesBuiltin.applyArguments(ref);
                                } else {
                                  apply(ref, arguments);
                                }
                              }
                            };
                            obj.on(ref14, decoratedCb);
                            return () => {
                              options.off(ref14, decoratedCb);
                            };
                          }
                          obj = decoratedCb;
                        }
                        return () => {};
                      }, items9);
                      if (typeof useAttachEvent === "function") {
                        options = first;
                        ref14 = "loaderstart";
                        onReady = onLoaderStart;
                        const ref6 = address.useRef(onLoaderStart);
                        ref13 = ref6;
                        const items10 = [onLoaderStart];
                        const effect10 = address.useEffect(() => {
                          ref13.current = onReady;
                        }, items10);
                        const items11 = [onLoaderStart, "loaderstart", first, ref6];
                        const effect11 = address.useEffect(() => {
                          if (onReady) {
                            if (decoratedCb) {
                              decoratedCb = function decoratedCb() {
                                if (ref.current) {
                                  current = ref.current;
                                  const apply = current.apply;
                                  if (typeof apply === "unknown") {
                                    HermesBuiltin.applyArguments(ref);
                                  } else {
                                    apply(ref, arguments);
                                  }
                                }
                              };
                              obj.on(ref14, decoratedCb);
                              return () => {
                                options.off(ref14, decoratedCb);
                              };
                            }
                            obj = decoratedCb;
                          }
                          return () => {};
                        }, items11);
                        if (typeof useAttachEvent === "function") {
                          options = first;
                          ref14 = "networkschange";
                          onReady = onNetworksChange;
                          const ref7 = address.useRef(onNetworksChange);
                          ref13 = ref7;
                          const items12 = [onNetworksChange];
                          const effect12 = address.useEffect(() => {
                            ref13.current = onReady;
                          }, items12);
                          const items13 = [onNetworksChange, "networkschange", first, ref7];
                          const effect13 = address.useEffect(() => {
                            if (onReady) {
                              if (decoratedCb) {
                                decoratedCb = function decoratedCb() {
                                  if (ref.current) {
                                    current = ref.current;
                                    const apply = current.apply;
                                    if (typeof apply === "unknown") {
                                      HermesBuiltin.applyArguments(ref);
                                    } else {
                                      apply(ref, arguments);
                                    }
                                  }
                                };
                                obj.on(ref14, decoratedCb);
                                return () => {
                                  options.off(ref14, decoratedCb);
                                };
                              }
                              obj = decoratedCb;
                            }
                            return () => {};
                          }, items13);
                          if (typeof useAttachEvent === "function") {
                            options = first;
                            ref14 = "confirm";
                            onReady = onConfirm;
                            const ref8 = address.useRef(onConfirm);
                            ref13 = ref8;
                            const items14 = [onConfirm];
                            const effect14 = address.useEffect(() => {
                              ref13.current = onReady;
                            }, items14);
                            const items15 = [onConfirm, "confirm", first, ref8];
                            const effect15 = address.useEffect(() => {
                              if (onReady) {
                                if (decoratedCb) {
                                  decoratedCb = function decoratedCb() {
                                    if (ref.current) {
                                      current = ref.current;
                                      const apply = current.apply;
                                      if (typeof apply === "unknown") {
                                        HermesBuiltin.applyArguments(ref);
                                      } else {
                                        apply(ref, arguments);
                                      }
                                    }
                                  };
                                  obj.on(ref14, decoratedCb);
                                  return () => {
                                    options.off(ref14, decoratedCb);
                                  };
                                }
                                obj = decoratedCb;
                              }
                              return () => {};
                            }, items15);
                            if (typeof useAttachEvent === "function") {
                              options = first;
                              ref14 = "cancel";
                              onReady = onCancel;
                              const ref9 = address.useRef(onCancel);
                              ref13 = ref9;
                              const items16 = [onCancel];
                              const effect16 = address.useEffect(() => {
                                ref13.current = onReady;
                              }, items16);
                              const items17 = [onCancel, "cancel", first, ref9];
                              const effect17 = address.useEffect(() => {
                                if (onReady) {
                                  if (decoratedCb) {
                                    decoratedCb = function decoratedCb() {
                                      if (ref.current) {
                                        current = ref.current;
                                        const apply = current.apply;
                                        if (typeof apply === "unknown") {
                                          HermesBuiltin.applyArguments(ref);
                                        } else {
                                          apply(ref, arguments);
                                        }
                                      }
                                    };
                                    obj.on(ref14, decoratedCb);
                                    return () => {
                                      options.off(ref14, decoratedCb);
                                    };
                                  }
                                  obj = decoratedCb;
                                }
                                return () => {};
                              }, items17);
                              if (typeof useAttachEvent === "function") {
                                options = first;
                                ref14 = "shippingaddresschange";
                                onReady = onShippingAddressChange;
                                const ref10 = address.useRef(onShippingAddressChange);
                                ref13 = ref10;
                                const items18 = [onShippingAddressChange];
                                const effect18 = address.useEffect(() => {
                                  ref13.current = onReady;
                                }, items18);
                                const items19 = [onShippingAddressChange, "shippingaddresschange", first, ref10];
                                const effect19 = address.useEffect(() => {
                                  if (onReady) {
                                    if (decoratedCb) {
                                      decoratedCb = function decoratedCb() {
                                        if (ref.current) {
                                          current = ref.current;
                                          const apply = current.apply;
                                          if (typeof apply === "unknown") {
                                            HermesBuiltin.applyArguments(ref);
                                          } else {
                                            apply(ref, arguments);
                                          }
                                        }
                                      };
                                      obj.on(ref14, decoratedCb);
                                      return () => {
                                        options.off(ref14, decoratedCb);
                                      };
                                    }
                                    obj = decoratedCb;
                                  }
                                  return () => {};
                                }, items19);
                                if (typeof useAttachEvent === "function") {
                                  options = first;
                                  ref14 = "shippingratechange";
                                  onReady = onShippingRateChange;
                                  const ref11 = address.useRef(onShippingRateChange);
                                  ref13 = ref11;
                                  const items20 = [onShippingRateChange];
                                  const effect20 = address.useEffect(() => {
                                    ref13.current = onReady;
                                  }, items20);
                                  const items21 = [onShippingRateChange, "shippingratechange", first, ref11];
                                  const effect21 = address.useEffect(() => {
                                    if (onReady) {
                                      if (decoratedCb) {
                                        decoratedCb = function decoratedCb() {
                                          if (ref.current) {
                                            current = ref.current;
                                            const apply = current.apply;
                                            if (typeof apply === "unknown") {
                                              HermesBuiltin.applyArguments(ref);
                                            } else {
                                              apply(ref, arguments);
                                            }
                                          }
                                        };
                                        obj.on(ref14, decoratedCb);
                                        return () => {
                                          options.off(ref14, decoratedCb);
                                        };
                                      }
                                      obj = decoratedCb;
                                    }
                                    return () => {};
                                  }, items21);
                                  if (typeof useAttachEvent === "function") {
                                    options = first;
                                    ref14 = "change";
                                    onReady = onChange;
                                    const ref12 = address.useRef(onChange);
                                    ref13 = ref12;
                                    const items22 = [onChange];
                                    const effect22 = address.useEffect(() => {
                                      ref13.current = onReady;
                                    }, items22);
                                    const items23 = [onChange, "change", first, ref12];
                                    const effect23 = address.useEffect(() => {
                                      if (onReady) {
                                        if (decoratedCb) {
                                          decoratedCb = function decoratedCb() {
                                            if (ref.current) {
                                              current = ref.current;
                                              const apply = current.apply;
                                              if (typeof apply === "unknown") {
                                                HermesBuiltin.applyArguments(ref);
                                              } else {
                                                apply(ref, arguments);
                                              }
                                            }
                                          };
                                          obj.on(ref14, decoratedCb);
                                          return () => {
                                            options.off(ref14, decoratedCb);
                                          };
                                        }
                                        obj = decoratedCb;
                                      }
                                      return () => {};
                                    }, items23);
                                    if (onReady) {
                                      if ("expressCheckout" !== options) {
                                        onReady = function readyCallback() {
                                          ref14(ref13);
                                        };
                                      }
                                    }
                                    if (typeof useAttachEvent === "function") {
                                      options = first;
                                      ref14 = "ready";
                                      onReady = tmp76;
                                      ref13 = address.useRef(tmp74);
                                      const items24 = [tmp74];
                                      const effect24 = address.useEffect(() => {
                                        ref13.current = onReady;
                                      }, items24);
                                      const items25 = [tmp74, "ready", first, ref13];
                                      const effect25 = address.useEffect(() => {
                                        if (onReady) {
                                          if (decoratedCb) {
                                            decoratedCb = function decoratedCb() {
                                              if (ref.current) {
                                                current = ref.current;
                                                const apply = current.apply;
                                                if (typeof apply === "unknown") {
                                                  HermesBuiltin.applyArguments(ref);
                                                } else {
                                                  apply(ref, arguments);
                                                }
                                              }
                                            };
                                            obj.on(ref14, decoratedCb);
                                            return () => {
                                              options.off(ref14, decoratedCb);
                                            };
                                          }
                                          obj = decoratedCb;
                                        }
                                        return () => {};
                                      }, items25);
                                      const items26 = [elements, checkoutSdk, options];
                                      const layoutEffect = address.useLayoutEffect(() => {
                                        if (null === ref.current) {
                                          if (null !== ref.current) {
                                            if (onReady) {
                                              if (onReady) {
                                                if ("payment" === closure_0) {
                                                  let paymentElement = onReady.createPaymentElement(options);
                                                } else if ("address" === closure_0) {
                                                  if ("mode" in options) {
                                                    const mode = options.mode;
                                                    const tmp22 = _objectWithoutProperties(options, closure_24);
                                                    if ("shipping" === mode) {
                                                      paymentElement = onReady.createShippingAddressElement(tmp22);
                                                    } else if ("billing" !== mode) {
                                                      const _Error3 = Error;
                                                      const error = new Error(
                                                        "Invalid options.mode. mode must be 'billing' or 'shipping'.",
                                                      );
                                                      throw error;
                                                    } else {
                                                      paymentElement = onReady.createBillingAddressElement(tmp22);
                                                    }
                                                  } else {
                                                    const _Error2 = Error;
                                                    const error1 = new Error(
                                                      "You must supply options.mode. mode must be 'billing' or 'shipping'.",
                                                    );
                                                    throw error1;
                                                  }
                                                } else if ("expressCheckout" === closure_0) {
                                                  paymentElement = onReady.createExpressCheckoutElement(options);
                                                } else if ("currencySelector" === closure_0) {
                                                  paymentElement = onReady.createCurrencySelectorElement();
                                                } else {
                                                  const _Error = Error;
                                                  const concat = "Invalid Element type ".concat;
                                                  const error2 = new Error(
                                                    "Invalid Element type ".concat(
                                                      combined,
                                                      ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                    ),
                                                  );
                                                  throw error2;
                                                }
                                              } else {
                                                paymentElement = null;
                                                if (onReady) {
                                                  paymentElement = onReady.create(closure_0, options);
                                                }
                                              }
                                              tmp.current = paymentElement;
                                              closure_5(paymentElement);
                                              if (paymentElement) {
                                                paymentElement.mount(tmp33.current);
                                              }
                                            }
                                          }
                                        }
                                      }, items26);
                                      if (typeof usePrevious === "function") {
                                        ref14 = address.useRef(options);
                                        const items27 = [options];
                                        const effect26 = address.useEffect(() => {
                                          ref14.current = options;
                                        }, items27);
                                        let current = ref14.current;
                                        const items28 = [options, current];
                                        const effect27 = address.useEffect(() => {
                                          if (ref.current) {
                                            if (typeof extractAllowedOptionsUpdates === "function") {
                                              dependencyMap = options;
                                              closure_2 = ["paymentRequest"];
                                              if (typeof isUnknownObject === "function") {
                                                let tmp7 = null !== options;
                                                if (tmp7) {
                                                  tmp7 = "object" === fn(options);
                                                }
                                                let reduced = null;
                                                if (tmp7) {
                                                  let _Object = Object;
                                                  const keys = Object.keys(options);
                                                  reduced = keys.reduce((acc, item) => {
                                                    if (typeof current === "function") {
                                                      let tmp3 = null !== tmp4;
                                                      if (tmp3) {
                                                        tmp3 = "object" === onReady(tmp4);
                                                      }
                                                      let tmp6 = !tmp3;
                                                      if (tmp3) {
                                                        tmp6 = !closure_2_10(dependencyMap[item], tmp4[item]);
                                                      }
                                                      if (closure_2.includes(item)) {
                                                        let tmp11 = acc;
                                                        if (tmp6) {
                                                          const _console = console;
                                                          const concat = "Unsupported prop change: options.".concat;
                                                          console.warn(
                                                            "Unsupported prop change: options.".concat(
                                                              item,
                                                              " is not a mutable property.",
                                                            ),
                                                          );
                                                          tmp11 = acc;
                                                        }
                                                      } else {
                                                        tmp11 = acc;
                                                        if (tmp6) {
                                                          let obj = acc;
                                                          if (!acc) {
                                                            obj = {};
                                                          }
                                                          obj = {};
                                                          ref14(obj, obj);
                                                          obj = {};
                                                          if (item in obj) {
                                                            const _Object = Object;
                                                            const obj1 = {
                                                              value: tmp15,
                                                              enumerable: true,
                                                              configurable: true,
                                                              writable: true,
                                                            };
                                                            Object.defineProperty(obj, item, obj1);
                                                          } else {
                                                            obj[item] = tmp15;
                                                          }
                                                          ref14(obj, {}, obj);
                                                        }
                                                      }
                                                      return tmp11;
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  }, null);
                                                }
                                                let tmp11 = reduced;
                                                if (reduced) {
                                                  tmp11 = "update" in ref.current;
                                                }
                                                if (tmp11) {
                                                  current = ref.current;
                                                  current.update(reduced);
                                                }
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          }
                                        }, items28);
                                        const layoutEffect1 = address.useLayoutEffect(
                                          () => () => {
                                            if (ref.current) {
                                              if (typeof ref.current.destroy === "function") {
                                                try {
                                                  current = ref.current;
                                                  current.destroy();
                                                  ref.current = null;
                                                } catch (err) {}
                                              }
                                            }
                                          },
                                          [],
                                        );
                                        let obj = { id, className, ref };
                                        return <div id={id} className={className} ref={ref} />;
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
    tmp3.propTypes = {
      id: _default.string,
      className: _default.string,
      onChange: _default.func,
      onBlur: _default.func,
      onFocus: _default.func,
      onReady: _default.func,
      onEscape: _default.func,
      onClick: _default.func,
      onLoadError: _default.func,
      onLoaderStart: _default.func,
      onNetworksChange: _default.func,
      onConfirm: _default.func,
      onCancel: _default.func,
      onShippingAddressChange: _default.func,
      onShippingRateChange: _default.func,
      options: _default.object,
    };
    tmp3.displayName = combined;
    tmp3.__elementType = address;
    return tmp3;
  }
  const elementComponent = createElementComponent("auBankAccount", tmp9);
  const elementComponent1 = createElementComponent("card", tmp9);
  const elementComponent2 = createElementComponent("cardNumber", tmp9);
  const elementComponent3 = createElementComponent("cardExpiry", tmp9);
  const elementComponent4 = createElementComponent("cardCvc", tmp9);
  const elementComponent5 = createElementComponent("fpxBank", tmp9);
  const elementComponent6 = createElementComponent("iban", tmp9);
  const elementComponent7 = createElementComponent("idealBank", tmp9);
  const elementComponent8 = createElementComponent("p24Bank", tmp9);
  const elementComponent9 = createElementComponent("epsBank", tmp9);
  const elementComponent10 = createElementComponent("payment", tmp9);
  const elementComponent11 = createElementComponent("expressCheckout", tmp9);
  const elementComponent12 = createElementComponent("currencySelector", tmp9);
  const elementComponent13 = createElementComponent("paymentRequestButton", tmp9);
  const elementComponent14 = createElementComponent("linkAuthentication", tmp9);
  const elementComponent15 = createElementComponent("address", tmp9);
  const elementComponent16 = createElementComponent("shippingAddress", tmp9);
  const elementComponent17 = createElementComponent("paymentMethodMessaging", tmp9);
  const elementComponent18 = createElementComponent("affirmMessage", tmp9);
  exports.AddressElement = elementComponent15;
  exports.AffirmMessageElement = elementComponent18;
  exports.AfterpayClearpayMessageElement = createElementComponent(
    "afterpayClearpayMessage",
    typeof window === "undefined",
  );
  exports.AuBankAccountElement = elementComponent;
  exports.CardCvcElement = elementComponent4;
  exports.CardElement = elementComponent1;
  exports.CardExpiryElement = elementComponent3;
  exports.CardNumberElement = elementComponent2;
  exports.CheckoutProvider = CheckoutProvider;
  exports.CurrencySelectorElement = elementComponent12;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.EmbeddedCheckout =
    typeof window === "undefined"
      ? function EmbeddedCheckoutServerElement(arg0) {
          if (typeof useEmbeddedCheckoutContext === "function") {
            if (React.useContext(context3)) {
              const obj = { id: tmp, className: tmp2 };
              return <div id={tmp} className={tmp2} />;
            } else {
              const _Error = Error;
              const error = new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
              throw error;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      : function EmbeddedCheckoutClientElement(arg0) {
          if (typeof useEmbeddedCheckoutContext === "function") {
            let obj = React;
            context = React.useContext(context3);
            if (context) {
              const embeddedCheckout = context.embeddedCheckout;
              obj.useRef(false);
              const ref = obj.useRef(null);
              const items = [embeddedCheckout];
              const layoutEffect = obj.useLayoutEffect(() => {
                const current = ref.current;
                let tmp2 = !current;
                if (!current) {
                  tmp2 = embeddedCheckout;
                }
                if (tmp2) {
                  tmp2 = null !== ref.current;
                }
                if (tmp2) {
                  embeddedCheckout.mount(ref.current);
                  ref.current = true;
                }
                return () => {
                  if (ref.current) {
                    if (embeddedCheckout) {
                      try {
                        embeddedCheckout.unmount();
                        tmp.current = false;
                      } catch (err) {}
                    }
                  }
                };
              }, items);
              obj = { ref, id: tmp, className: tmp2 };
              return <div ref={ref} id={tmp} className={tmp2} />;
            } else {
              const _Error = Error;
              const error = new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
              throw error;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
  exports.EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider(stripe) {
    stripe = stripe.stripe;
    let options = stripe.options;
    let ref2 = options;
    let obj = options;
    const items = [stripe];
    const memo = options.useMemo(
      () =>
        parseStripeProp(
          options,
          "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        ),
      items,
    );
    options.useRef(null);
    const ref = options.useRef(null);
    const tmp3 = ref(options.useState({ embeddedCheckout: null }), 2);
    value = tmp3[0];
    closure_6 = tmp3[1];
    const items1 = [memo, options, value, ref];
    const effect = options.useEffect(() => {
      if (!ref.current) {
        if (!ref.current) {
          function setStripeAndInitEmbeddedCheckout(arg0) {}
          if ("async" === memo.tag) {
            if (!ref.current) {
              memo.stripePromise.then((current) => {
                if (current) {
                  if (typeof setStripeAndInitEmbeddedCheckout === "function") {
                    current = ref.current;
                    if (!current) {
                      current = ref.current;
                    }
                    if (!current) {
                      ref.current = current;
                      current2 = ref.current;
                      const embeddedCheckout = current2.initEmbeddedCheckout(ref2);
                      ref.current = embeddedCheckout.then((embeddedCheckout) => {
                        closure_1_6({ embeddedCheckout });
                      });
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              });
              const stripePromise = memo.stripePromise;
            }
          }
          let tmp5 = "sync" !== memo.tag || ref.current;
          if (!tmp5) {
            const clientSecret = ref2.clientSecret;
            let tmp6 = !clientSecret;
            if (!clientSecret) {
              tmp6 = !ref2.fetchClientSecret;
            }
            tmp5 = tmp6;
          }
          if (!tmp5) {
            current = ref.current;
            if (!current) {
              current = ref.current;
            }
            if (!current) {
              ref.current = memo.stripe;
              current2 = ref.current;
              let embeddedCheckout = current2.initEmbeddedCheckout(ref2);
              ref.current = embeddedCheckout.then((embeddedCheckout) => {
                closure_1_6({ embeddedCheckout });
              });
            }
          }
        }
      }
    }, items1);
    const items2 = [value.embeddedCheckout];
    const effect1 = options.useEffect(
      () => () => {
        if (embeddedCheckout.embeddedCheckout) {
          ref.current = null;
          embeddedCheckout = tmp.embeddedCheckout;
          embeddedCheckout.destroy();
        } else if (ref.current) {
          current = ref.current;
          current.then(() => {
            closure_1_3.current = null;
            if (closure_1_5.embeddedCheckout) {
              embeddedCheckout = closure_1_5.embeddedCheckout;
              embeddedCheckout.destroy();
            }
          });
        }
      },
      items2,
    );
    const items3 = [ref];
    const effect2 = options.useEffect(() => {
      if (typeof registerWithStripeJs === "function") {
        let registerAppInfo = ref;
        if (ref) {
          registerAppInfo = ref._registerWrapper;
        }
        if (registerAppInfo) {
          registerAppInfo = ref.registerAppInfo;
        }
        if (registerAppInfo) {
          ref._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
          ref.registerAppInfo({
            name: "react-stripe-js",
            version: "3.7.0",
            url: "https://stripe.com/docs/stripe-js/react",
          });
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, items3);
    if (typeof current === "function") {
      options = stripe;
      const ref1 = obj.useRef(stripe);
      ref2 = ref1;
      const items4 = [stripe];
      const effect3 = obj.useEffect(() => {
        ref14.current = options;
      }, items4);
      current = ref1.current;
      const items5 = [current, stripe];
      const effect4 = obj.useEffect(() => {
        let tmp2 = null !== current;
        if (tmp2) {
          tmp2 = tmp !== options;
        }
        if (tmp2) {
          const _console = console;
          console.warn(
            "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.",
          );
        }
      }, items5);
      if (typeof tmp8 === "function") {
        ref2 = obj.useRef(options);
        const items6 = [options];
        const effect5 = obj.useEffect(() => {
          ref14.current = options;
        }, items6);
        let current2 = ref2.current;
        const items7 = [current2, options];
        const effect6 = obj.useEffect(() => {
          if (null != current2) {
            if (null != ref2) {
              if (tmp4) {
                const _console2 = console;
                console.warn(
                  "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                );
              }
              if (tmp7) {
                const _console3 = console;
                console.warn(
                  "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                );
              }
              if (tmp10) {
                const _console4 = console;
                console.warn(
                  "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                );
              }
              if (tmp13) {
                const _console5 = console;
                console.warn(
                  "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.",
                );
              }
              if (tmp16) {
                const _console6 = console;
                console.warn(
                  "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.",
                );
              }
              if (tmp19) {
                const _console7 = console;
                console.warn(
                  "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.",
                );
              }
              tmp10 = null != current2.fetchClientSecret && ref2.fetchClientSecret !== current2.fetchClientSecret;
              tmp13 = null != current2.onComplete && ref2.onComplete !== current2.onComplete;
              tmp16 =
                null != current2.onShippingDetailsChange &&
                ref2.onShippingDetailsChange !== current2.onShippingDetailsChange;
              tmp19 = null != current2.onLineItemsChange && ref2.onLineItemsChange !== current2.onLineItemsChange;
              tmp4 = undefined === ref2.clientSecret && undefined === ref2.fetchClientSecret;
              tmp7 = null != current2.clientSecret && ref2.clientSecret !== current2.clientSecret;
            } else {
              const _console = console;
              console.warn(
                "Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.",
              );
            }
          }
        }, items7);
        obj = { value };
        return <context3.Provider value={value}>{stripe.children}</context3.Provider>;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  exports.EpsBankElement = elementComponent9;
  exports.ExpressCheckoutElement = elementComponent11;
  exports.FpxBankElement = elementComponent5;
  exports.IbanElement = elementComponent6;
  exports.IdealBankElement = elementComponent7;
  exports.LinkAuthenticationElement = elementComponent14;
  exports.P24BankElement = elementComponent8;
  exports.PaymentElement = elementComponent10;
  exports.PaymentMethodMessagingElement = elementComponent17;
  exports.PaymentRequestButtonElement = elementComponent13;
  exports.ShippingAddressElement = elementComponent16;
  exports.useCheckout = function useCheckout() {
    if (typeof parseCheckoutSdkContext === "function") {
      if (React.useContext(context1)) {
        context = React.useContext(context2);
        if (context) {
          return context;
        } else {
          const _Error2 = Error;
          const error = new Error(
            "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
          );
          throw error;
        }
      } else {
        const _Error = Error;
        const concat = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
        const error1 = new Error(
          "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
            "calls useCheckout()",
            " in an <CheckoutProvider> provider.",
          ),
        );
        throw error1;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  exports.useElements = function useElements() {
    if (typeof useElementsContextWithUseCase === "function") {
      context = React.useContext(context);
      if (typeof parseElementsContext === "function") {
        if (context) {
          return context.elements;
        } else {
          const _Error = Error;
          const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
          const error = new Error(
            "Could not find Elements context; You need to wrap the part of your app that ".concat(
              "calls useElements()",
              " in an <Elements> provider.",
            ),
          );
          throw error;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  exports.useStripe = function useStripe() {
    if (typeof useElementsOrCheckoutSdkContextWithUseCase === "function") {
      context = React.useContext(context1);
      context1 = React.useContext(context);
      if (context) {
        if (context1) {
          const _Error3 = Error;
          const concat3 = "You cannot wrap the part of your app that ".concat;
          const error = new Error(
            "You cannot wrap the part of your app that ".concat(
              "calls useStripe()",
              " in both <CheckoutProvider> and <Elements> providers.",
            ),
          );
          throw error;
        }
      }
      if (context) {
        if (typeof parseCheckoutSdkContext === "function") {
          context1 = context;
          if (!context) {
            const _Error2 = Error;
            const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that "
              .concat;
            const error1 = new Error(
              "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                "calls useStripe()",
                " in an <CheckoutProvider> provider.",
              ),
            );
            throw error1;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof parseElementsContext === "function") {
        if (!context1) {
          const _Error = Error;
          const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
          const error2 = new Error(
            "Could not find Elements context; You need to wrap the part of your app that ".concat(
              "calls useStripe()",
              " in an <Elements> provider.",
            ),
          );
          throw error2;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return context1.stripe;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
};
if (typeof exports === "object") {
  if (undefined !== module) {
    fn(exports, _mod19);
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["exports", "react"], fn);
  }
}
let self = this;
if (typeof globalThis !== "undefined") {
  self = globalThis;
}
let obj = {};
self.ReactStripe = obj;
fn(obj, self.React);
