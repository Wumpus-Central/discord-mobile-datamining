// === Module 5424: react ===

// Module 5424 (react)
import react from "react" /* 19 */;

let closure_3, closure_8, current3, element, first1, hasOwnProperty, obj1, obj4, tmp20;

let fn = function t(exports, React) {
  let obj2;
  function o() {
    let obj;
    function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
      if (arg5 !== shim) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        error.name = "Invariant Violation";
        throw error;
      }
    }
    function getShim() {
      return shim;
    }
    shim.isRequired = shim;
    obj = { array: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction, PropTypes: obj };
    return obj;
  }
  function _objectSpread2(prototype) {
    let num;
    let closure_0 = prototype;
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp2 = null != arguments[num] ? arguments[num] : {};
      let closure_1 = tmp2;
      let _Object = Object;
      if (num % 2) {
        let _ObjectResult = _Object(tmp2);
        let _Object7 = Object;
        let keys = Object.keys(_ObjectResult);
        let _Object8 = Object;
        if (Object.getOwnPropertySymbols) {
          let _Object9 = Object;
          let ownPropertySymbols = Object.getOwnPropertySymbols(_ObjectResult);
          let push2 = keys.push;
          let applyResult = push2.apply(keys, ownPropertySymbols.filter((item) => Object.getOwnPropertyDescriptor(_ObjectResult, item).enumerable));
        }
        let item = keys.forEach((item) => {
          if (item in prototype) {
            const _Object = Object;
            const obj = { value: closure_1[item], enumerable: true, configurable: true, writable: true };
            Object.defineProperty(prototype, item, obj);
          } else {
            prototype[item] = closure_1[item];
          }
        });
      } else {
        let _Object2 = Object;
        if (_Object.getOwnPropertyDescriptors) {
          let _Object6 = Object;
          let definePropertiesResult = _Object2.defineProperties(prototype, Object.getOwnPropertyDescriptors(tmp2));
        } else {
          let _Object2Result = _Object2(tmp2);
          let _Object3 = Object;
          let keys1 = Object.keys(_Object2Result);
          let _Object4 = Object;
          if (Object.getOwnPropertySymbols) {
            let _Object5 = Object;
            let push = keys1.push;
            let applyResult1 = push.apply(keys1, Object.getOwnPropertySymbols(_Object2Result));
          }
          let item1 = keys1.forEach((item) => {
            Object.defineProperty(prototype, item, Object.getOwnPropertyDescriptor(closure_1, item));
          });
        }
      }
    }
    return prototype;
  }
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
  function _objectWithoutProperties(arg0, arr) {
    if (null == arg0) {
      return {};
    } else {
      let obj2;
      if (null == arg0) {
        obj2 = {};
      } else {
        const obj = {};
        const _Object = Object;
        const keys = Object.keys(arg0);
        let num3 = 0;
        obj2 = obj;
        if (0 < keys.length) {
          do {
            let tmp2 = keys[num3];
            if (arr.indexOf(tmp2) < 0) {
              obj[tmp2] = arg0[tmp2];
            }
            num3 = num3 + 1;
            obj2 = obj;
          } while (num3 < keys.length);
        }
      }
      const _Object2 = Object;
      if (Object.getOwnPropertySymbols) {
        let num6;
        const _Object3 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
        for (let num6 = 0; num6 < ownPropertySymbols.length; num6 = num6 + 1) {
          let tmp5 = ownPropertySymbols[num6];
          if (arr.indexOf(tmp5) < 0) {
            let _Object4 = Object;
            if (propertyIsEnumerable.call(arg0, tmp5)) {
              obj2[tmp5] = arg0[tmp5];
            }
          }
        }
      }
      return obj2;
    }
  }
  function _slicedToArray(iterable, arg1) {
    function _iterableToArrayLimit(iterable, arg1) {
      let tmp2 = iterable;
      if (tmp2) {
        const _Symbol = Symbol;
        let prop = typeof Symbol !== "undefined";
        if (typeof Symbol !== "undefined") {
          const _Symbol2 = Symbol;
          prop = iterable[Symbol.iterator];
        }
        if (!prop) {
          prop = iterable[Symbol.iterator];
        }
        tmp2 = prop;
      }
      let iter = tmp2;
      if (null != tmp2) {
        let flag = true;
        let flag2 = false;
        try {
          const items = [];
          try {
            const iter2 = iter.call(iterable);
            iter = iter2;
            flag = iter2.next().done;
            const iter3 = iter2.next();
            if (!flag) {
              items.push(iter4.value);
              if (!arg1) {
                const iter5 = iter.next();
                const done = iter5.done;
                flag = done;
                while (!done) {
                  let arr3 = items.push(iter6.value);
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
              const tmp12 = flag || null == iter.return;
              if (!tmp12) {
                iter.return();
              }
              const tmp16 = flag2;
              if (tmp16) {
                throw tmp;
              } else {
                return items;
              }
            } catch (tmp18) {
              const tmp19 = flag2;
              if (tmp19) {
                throw tmp;
              } else {
                throw tmp18;
              }
            }
          } catch (tmp) {
            flag2 = true;
          }
        } catch (tmp21) {
          try {
            if (!flag) {
              flag = null == iter.return;
            }
            if (!flag) {
              iter.return();
            }
            const tmp25 = flag2;
            if (tmp25) {
              throw tmp;
            } else {
              throw tmp21;
            }
          } catch (tmp27) {
            if (flag2) {
              throw tmp;
            } else {
              throw tmp27;
            }
          }
        }
      }
    }
    let tmp;
    if (Array.isArray(iterable)) {
      tmp = iterable;
    }
    if (!tmp) {
      tmp = _iterableToArrayLimit(iterable, 2);
    }
    if (!tmp) {
      let tmp2;
      if (iterable) {
        if (typeof iterable === "string") {
          let num8 = 2;
          if (2 > iterable.length) {
            num8 = iterable.length;
          }
          const _Array3 = Array;
          const self3 = this;
          const self4 = this;
          const array = new Array(num8);
          let num9 = 0;
          tmp2 = array;
          if (0 < num8) {
            do {
              array[num9] = iterable[num9];
              num9 = num9 + 1;
              tmp2 = array;
            } while (num9 < num8);
          }
        } else {
          const _Object = Object;
          const callResult = toString.call(iterable);
          const substr = callResult.slice(8, -1);
          let name = substr;
          const tmp4 = "Object" === substr && iterable.constructor;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            let arr;
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let num5 = 2;
                if (2 > iterable.length) {
                  num5 = iterable.length;
                }
                const _Array = Array;
                const self = this;
                const self2 = this;
                const array2 = new Array(num5);
                let num6 = 0;
                arr = array2;
                if (0 < num5) {
                  do {
                    array2[num6] = iterable[num6];
                    num6 = num6 + 1;
                    arr = array2;
                  } while (num6 < num5);
                }
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
        }
      }
      tmp = tmp2;
    }
    if (tmp) {
      return tmp;
    } else {
      const _TypeError = TypeError;
      const self5 = this;
      const self6 = this;
      const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      throw typeError;
    }
  }
  function emptyFunction() {

  }
  function emptyFunctionWithReset() {

  }
  const SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  let tmp = o();
  let _default = tmp;
  if (_default) {
    _default = tmp;
    if (tmp.__esModule) {
      let tmp2 = globalThis;
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let str = "default";
      _default = tmp;
      if (hasOwnProperty.call(tmp, "default")) {
        _default = tmp.default;
      }
    }
  }
  function useAttachEvent(arg0, arg1, arg2) {

  }
  function usePrevious(arg0) {

  }
  function isUnknownObject(arg0) {

  }
  let c9 = "[object Object]";
  function isEqual(arg0, arg1) {
    let length;
    let length2;
    if (typeof isUnknownObject === "function") {
      const tmp4 = null !== arg0 && "object" === fn(arg0);
      if (tmp4) {
        if (typeof tmp === "function") {
          const tmp7 = null !== arg1 && "object" === fn(arg1);
          if (tmp7) {
            const _Array = Array;
            const isArray = Array.isArray(arg0);
            const _Array2 = Array;
            if (isArray !== Array.isArray(arg1)) {
              return false;
            } else {
              const _Object5 = Object;
              const toString2 = Object.prototype.toString;
              const _Object = Object;
              const tmp13 = toString2.call(arg0) === c9;
              if (tmp13 !== (toString.call(arg1) === c9)) {
                return false;
              } else {
                if (!tmp13) {
                  if (!isArray) {
                    return arg0 === arg1;
                  }
                }
                const _Object2 = Object;
                const keys = Object.keys(arg0);
                const _Object3 = Object;
                const keys1 = Object.keys(arg1);
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
                    let closure_0 = arg0;
                    let closure_1 = arg1;
                    return keys2.every(function pred(item) {
                      return isEqual(closure_0[item], closure_1[item]);
                    });
                  }
                }
              }
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return arg0 === arg1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function extractAllowedOptionsUpdates(arg0, arg1, arg2) {

  }
  let c12 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
  function validateStripe(elements) {
    if (arguments.length > 1) {
      let tmp;
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
      if (null !== elements) {
        if (typeof isUnknownObject === "function") {
          const tmp4 = null !== elements && "object" === fn(elements) && typeof elements.elements === "function" && typeof elements.createToken === "function" && typeof elements.createPaymentMethod === "function" && typeof elements.confirmCardPayment === "function";
          if (!tmp4) {
            const _Error = Error;
            const self = this;
            const self2 = this;
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
  function parseStripeProp(stripe) {
    let resolved;
    if (arguments.length > 1) {
      let tmp;
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
      let closure_0 = tmp;
      if (typeof isUnknownObject === "function") {
        const tmp5 = null !== stripe && "object" === fn(stripe) && typeof stripe.then === "function";
        if (tmp5) {
          const obj2 = {
            tag: "async",
            stripePromise: resolved.then((result) => {
                    validateStripe(result, closure_0);
                    return result;
                  })
          };
          resolved = Promise.resolve(stripe);
          return obj2;
        } else {
          let obj;
          validateStripe(stripe, tmp);
          if (null === stripe) {
            obj = { tag: "empty" };
          } else {
            obj = { tag: "sync", stripe };
          }
          return obj;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    tmp = c12;
  }
  function registerWithStripeJs(arg0) {

  }
  let context = React.createContext(null);
  context.displayName = "ElementsContext";
  function parseElementsContext(arg0, arg1) {

  }
  class Elements {
    constructor(stripe) {
      let closure_4;
      let value;
      stripe = stripe.stripe;
      const options = stripe.options;
      let obj = stripe;
      const items = [stripe];
      const children = stripe.children;
      const memo = stripe.useMemo(() => parseStripeProp(stripe), items);
      [value, _slicedToArray] = stripe.useState(() => {
        let elementsResult;
        let stripe1 = null;
        if ("sync" === memo.tag) {
          stripe1 = memo.stripe;
        }
        const obj = { stripe: stripe1, elements: elementsResult };
        elementsResult = null;
        if ("sync" === memo.tag) {
          stripe = memo.stripe;
          elementsResult = stripe.elements(options);
        }
        return obj;
      });
      const items1 = [memo, value, options];
      const effect = stripe.useEffect(() => {
        const f154627 = (stripe) => {
          let tmp = stripe;
          if (!stripe.stripe) {
            tmp = { stripe, elements: stripe.elements(closure_2_1) };
            const obj = { stripe, elements: stripe.elements(closure_2_1) };
          }
          return tmp;
        };
        let c0 = true;
        if ("async" === memo.tag) {
          if (!first.stripe) {
            const stripePromise = memo.stripePromise;
            stripePromise.then((result) => {
              let tmp = result && c0;
              if (tmp) {
                let closure_0 = result;
                closure_4(f154627);
              }
            });
          }
          return () => {
            c0 = false;
          };
        }
        stripe = "sync" !== memo.tag || first.stripe;
        if (!stripe) {
          const stripe2 = memo.stripe;
          closure_4(f154627);
        }
      }, items1);
      if (typeof usePrevious === "function") {
        const items2 = [stripe];
        const ref = obj.useRef(stripe);
        const effect1 = obj.useEffect(() => {
          ref14.current = options;
        }, items2);
        const current = ref.current;
        const items3 = [current, stripe];
        const effect2 = obj.useEffect(() => {
          const tmp2 = null !== current && tmp !== stripe;
          if (tmp2) {
            const _console = console;
            console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
          }
        }, items3);
        if (typeof tmp5 === "function") {
          const items4 = [options];
          const ref1 = obj.useRef(options);
          const effect3 = obj.useEffect(() => {
            ref14.current = options;
          }, items4);
          const current2 = ref1.current;
          const items5 = [options, current2, value.elements];
          const effect4 = obj.useEffect(() => {
            if (first.elements) {
              if (typeof extractAllowedOptionsUpdates === "function") {
                let closure_0 = options;
                let closure_1 = tmp4;
                let closure_2 = ["clientSecret", "fonts"];
                if (typeof isUnknownObject === "function") {
                  let reduced = null;
                  const tmp7 = null !== options && "object" === fn(options);
                  if (tmp7) {
                    const _Object = Object;
                    const keys = Object.keys(options);
                    reduced = keys.reduce((acc, item) => {
                      if (typeof current === "function") {
                        let tmp11;
                        const tmp3 = null !== closure_1 && "object" === elements(closure_1);
                        let tmp6 = !tmp3;
                        if (tmp3) {
                          tmp6 = !closure_2_10(closure_0[item], closure_1[item]);
                        }
                        if (closure_2.includes(item)) {
                          tmp11 = acc;
                          if (tmp6) {
                            const _console = console;
                            const concat = "Unsupported prop change: options.".concat;
                            console.warn("Unsupported prop change: options.".concat(item, " is not a mutable property."));
                            tmp11 = acc;
                          }
                        } else {
                          tmp11 = acc;
                          if (tmp6) {
                            const obj = {};
                            const tmp13 = acc || {};
                            onReady(obj, tmp13);
                            const obj2 = {};
                            if (item in obj2) {
                              const _Object = Object;
                              const obj3 = { value: closure_0[item], enumerable: true, configurable: true, writable: true };
                              Object.defineProperty(obj2, item, obj3);
                            } else {
                              obj2[item] = closure_0[item];
                            }
                            onReady(obj, {}, obj2);
                            tmp11 = obj;
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
          const items6 = [value.stripe];
          const effect5 = obj.useEffect(() => {
            stripe = first.stripe;
            if (typeof registerWithStripeJs === "function") {
              const tmp = stripe && stripe._registerWrapper && stripe.registerAppInfo;
              if (tmp) {
                stripe._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
                stripe.registerAppInfo({ name: "react-stripe-js", version: "3.7.0", url: "https://stripe.com/docs/stripe-js/react" });
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, items6);
          return <context.Provider value={value}>{children}</context.Provider>;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  Elements.propTypes = { stripe: _default.any, options: _default.object };
  function useElementsContextWithUseCase(arg0) {

  }
  class ElementsConsumer {
    constructor(arg0) {
      if (typeof useElementsContextWithUseCase === "function") {
        context = React.useContext(context);
        if (typeof parseElementsContext === "function") {
          if (context) {
            return tmp(context);
          } else {
            const _Error = Error;
            const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
            const self = this;
            const self2 = this;
            const error = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat("mounts <ElementsConsumer>", " in an <Elements> provider."));
            throw error;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  ElementsConsumer.propTypes = { children: _default.func.isRequired };
  let closure_19 = ["on", "session"];
  let context1 = React.createContext(null);
  context1.displayName = "CheckoutSdkContext";
  function parseCheckoutSdkContext(arg0, arg1) {

  }
  const context2 = React.createContext(null);
  context2.displayName = "CheckoutContext";
  class CheckoutProvider {
    constructor(arg0) {
      stripe = exports.stripe;
      options = exports.options;
      obj = stripe;
      items = [];
      items[0] = stripe;
      children = exports.children;
      memo = stripe.useMemo(() => parseStripeProp(stripe, "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."), items);
      closure_2 = memo;
      tmp2 = closure_4(stripe.useState(null), 2);
      first = tmp2[0];
      closure_3 = first;
      tmp4 = tmp2[1];
      closure_4 = tmp4;
      tmp5 = closure_4(stripe.useState(() => {
        stripe = null;
        if ("sync" === memo.tag) {
          stripe = memo.stripe;
        }
        return { stripe, checkoutSdk: null };
      }), 2);
      first1 = tmp5[0];
      closure_5 = first1;
      closure_6 = tmp5[1];
      safeSetContext = function safeSetContext(arg0, arg1) {

      };
      closure_8 = stripe.useRef(false);
      items1 = [, , , ];
      items1[0] = memo;
      items1[1] = first1;
      items1[2] = options;
      items1[3] = tmp4;
      effect = stripe.useEffect(() => {
        let c0 = true;
        if ("async" === memo.tag) {
          if (!first1.stripe) {
            const stripePromise = memo.stripePromise;
            stripePromise.then((initCheckout) => {
              let closure_0 = initCheckout;
              let tmp = initCheckout && c0 && !ref.current;
              if (tmp) {
                ref.current = true;
                const checkout = initCheckout.initCheckout(options);
                checkout.then((on) => {
                  let tmp = on;
                  if (tmp) {
                    if (typeof closure_2_7 === "function") {
                      let closure_1 = on;
                      closure_2_6((stripe) => {
                        let tmp = stripe;
                        if (!stripe.stripe) {
                          tmp = { stripe, checkoutSdk };
                          const obj = { stripe, checkoutSdk };
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
          }
          return () => {
            c0 = false;
          };
        }
        const tmp4 = "sync" === memo.tag && memo.stripe && !ref.current;
        if (tmp4) {
          ref.current = true;
          stripe = memo.stripe;
          let checkout = stripe.initCheckout(options);
          checkout.then((on) => {
            const tmp = on;
            if (tmp) {
              if (typeof safeSetContext === "function") {
                stripe = stripe.stripe;
                let closure_1 = on;
                closure_1_6((stripe) => {
                  let tmp = stripe;
                  if (!stripe.stripe) {
                    tmp = { stripe, checkoutSdk };
                    const obj = { stripe, checkoutSdk };
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
        ref = obj.useRef(stripe);
        closure_1 = ref;
        items2 = [];
        items2[0] = stripe;
        effect1 = obj.useEffect(() => {
          ref14.current = options;
        }, items2);
        current = ref.current;
        items3 = [, ];
        items3[0] = current;
        items3[1] = stripe;
        effect2 = obj.useEffect(() => {
          const tmp2 = null !== current && tmp !== stripe;
          if (tmp2) {
            const _console = console;
            console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.");
          }
        }, items3);
        if (typeof tmp8 === "function") {
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
            items6 = [, , , ];
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
                if (null != options) {
                  const elementsOptions2 = options.elementsOptions;
                  if (null !== elementsOptions2) {
                    if (undefined !== elementsOptions2) {
                      appearance1 = elementsOptions2.appearance;
                    }
                  }
                }
                const tmp6 = isEqual(appearance1, appearance);
                let tmp7 = !tmp6;
                let tmp10 = appearance1;
                const tmp9 = !current3 && first1.checkoutSdk;
                if (tmp10) {
                  if (tmp6) {
                    tmp7 = tmp9;
                  }
                  tmp10 = tmp7;
                }
                if (tmp10) {
                  const checkoutSdk = first1.checkoutSdk;
                  checkoutSdk.changeAppearance(appearance1);
                }
              }
            }, items6);
            items7 = [];
            items7[0] = first1.stripe;
            effect6 = obj.useEffect(() => {
              stripe = first1.stripe;
              if (typeof registerWithStripeJs === "function") {
                const tmp = stripe && stripe._registerWrapper && stripe.registerAppInfo;
                if (tmp) {
                  stripe._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
                  stripe.registerAppInfo({ name: "react-stripe-js", version: "3.7.0", url: "https://stripe.com/docs/stripe-js/react" });
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }, items7);
            items8 = [, ];
            items8[0] = first1.checkoutSdk;
            items8[1] = first;
            element = null;
            if (first1.checkoutSdk) {
              tmp20 = closure_20;
              obj1 = { value: null };
              obj1.value = first1;
              tmp21 = closure_22;
              obj4 = { value: null };
              obj4.value = tmp18;
              element = obj.createElement(closure_20.Provider, obj1, obj.createElement(closure_22.Provider, obj4, children));
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
  let obj = { stripe: _default.any, options: _default.shape(obj2).isRequired };
  obj2 = { fetchClientSecret: _default.func.isRequired, elementsOptions: _default.object };
  CheckoutProvider.propTypes = obj;
  function useElementsOrCheckoutSdkContextWithUseCase(arg0) {

  }
  let closure_24 = ["mode"];
  const _window = window;
  const context3 = React.createContext(null);
  context3.displayName = "EmbeddedCheckoutProviderContext";
  function useEmbeddedCheckoutContext() {

  }
  function createElementComponent(address, arg1) {
    let str = address.charAt(0);
    const formatted = str.toUpperCase();
    let combined = "".concat(formatted + address.slice(1), "Element");
    let tmp3 = arg1 ? (function ServerElement(arg0) {
      combined = "mounts <".concat(combined, ">");
      if (typeof useElementsOrCheckoutSdkContextWithUseCase === "function") {
        context = address.useContext(context1);
        context1 = address.useContext(context);
        if (context) {
          if (context1) {
            const _Error3 = Error;
            const concat3 = "You cannot wrap the part of your app that ".concat;
            const self5 = this;
            const self6 = this;
            const error = new Error("You cannot wrap the part of your app that ".concat(combined, " in both <CheckoutProvider> and <Elements> providers."));
            throw error;
          }
        }
        if (context) {
          if (typeof parseCheckoutSdkContext === "function") {
            if (!context) {
              const _Error2 = Error;
              const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
              const self3 = this;
              const self4 = this;
              const error1 = new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(combined, " in an <CheckoutProvider> provider."));
              throw error1;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof parseElementsContext === "function") {
          if (!context1) {
            const _Error = Error;
            const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
            const self = this;
            const self2 = this;
            const error2 = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(combined, " in an <Elements> provider."));
            throw error2;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        ({ id: obj2.id, className: obj2.className } = arg0);
        return <div id={null} className={null} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }) : (function ClientElement(options) {
      let className;
      let closure_5;
      let first;
      let id;
      let onBlur;
      let onCancel;
      let onChange;
      let onClick;
      let onConfirm;
      let onEscape;
      let onFocus;
      let onLoadError;
      let onLoaderStart;
      let onNetworksChange;
      let onReady;
      let onShippingAddressChange;
      let onShippingRateChange;
      const f136980 = () => {
        ref13.current = onReady;
      };
      const f136981 = () => {
        let decoratedCb;
        if (onReady) {
          if (decoratedCb) {
            decoratedCb = function decoratedCb() {
              if (ref.current) {
                current = ref.current;
                current(...arguments);
              }
            };
            decoratedCb.on(ready, decoratedCb);
            return () => {
              first.off(ready, decoratedCb);
            };
          }
        }
        return () => {

        };
      };
      options = options.options;
      ({ id, className } = options);
      if (undefined === options) {
        options = {};
      }
      ({ onBlur, onFocus, onReady } = options);
      ({ onChange, onEscape, onClick, onLoadError, onLoaderStart, onNetworksChange, onConfirm, onCancel, onShippingAddressChange, onShippingRateChange } = options);
      combined = "mounts <".concat(onReady, ">");
      if (typeof useElementsOrCheckoutSdkContextWithUseCase === "function") {
        context = address.useContext(closure_1_20);
        context1 = address.useContext(closure_1_16);
        if (context) {
          if (context1) {
            let _Error3 = Error;
            const concat3 = "You cannot wrap the part of your app that ".concat;
            let self5 = this;
            let self6 = this;
            let error = new Error("You cannot wrap the part of your app that ".concat(combined, " in both <CheckoutProvider> and <Elements> providers."));
            throw error;
          }
        }
        if (context) {
          if (typeof parseCheckoutSdkContext === "function") {
            context1 = context;
            if (!context1) {
              let tmp11 = globalThis;
              let _Error2 = Error;
              const str3 = "Could not find CheckoutProvider context; You need to wrap the part of your app that ";
              const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
              const str4 = " in an <CheckoutProvider> provider.";
              let self3 = this;
              let self4 = this;
              let error1 = new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(combined, " in an <CheckoutProvider> provider."));
              let tmp13 = error1;
              throw error1;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof parseElementsContext === "function") {
          if (!context1) {
            let tmp7 = globalThis;
            let _Error = Error;
            const str = "Could not find Elements context; You need to wrap the part of your app that ";
            let concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
            const str2 = " in an <Elements> provider.";
            let self = this;
            let self2 = this;
            let error2 = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(combined, " in an <Elements> provider."));
            throw error2;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        let elements = null;
        if ("elements" in context1) {
          elements = context1.elements;
        }
        let checkoutSdk = null;
        if ("checkoutSdk" in context1) {
          checkoutSdk = context1.checkoutSdk;
        }
        [first, closure_5] = address.useState(null);
        address.useRef(null);
        const ref = address.useRef(null);
        if (typeof useAttachEvent === "function") {
          const blur_str = "blur";
          onBlur = tmp22;
          const items = [onBlur];
          const ref1 = address.useRef(onBlur);
          const effect = address.useEffect(f136980, items);
          const items1 = [onBlur, "blur", first, ref1];
          const effect1 = address.useEffect(f136981, items1);
          if (typeof useAttachEvent === "function") {
            const focus_str = "focus";
            onFocus = tmp26;
            const items2 = [onFocus];
            const ref2 = address.useRef(onFocus);
            const effect2 = address.useEffect(f136980, items2);
            const items3 = [onFocus, "focus", first, ref2];
            const effect3 = address.useEffect(f136981, items3);
            if (typeof useAttachEvent === "function") {
              const escape_str = "escape";
              onEscape = tmp30;
              const items4 = [onEscape];
              const ref3 = address.useRef(onEscape);
              const effect4 = address.useEffect(f136980, items4);
              const items5 = [onEscape, "escape", first, ref3];
              const effect5 = address.useEffect(f136981, items5);
              if (typeof useAttachEvent === "function") {
                const click = "click";
                onClick = tmp34;
                const items6 = [onClick];
                const ref4 = address.useRef(onClick);
                const effect6 = address.useEffect(f136980, items6);
                const items7 = [onClick, "click", first, ref4];
                const effect7 = address.useEffect(f136981, items7);
                if (typeof useAttachEvent === "function") {
                  const loaderror = "loaderror";
                  onLoadError = tmp38;
                  const items8 = [onLoadError];
                  const ref5 = address.useRef(onLoadError);
                  const effect8 = address.useEffect(f136980, items8);
                  const items9 = [onLoadError, "loaderror", first, ref5];
                  const effect9 = address.useEffect(f136981, items9);
                  if (typeof useAttachEvent === "function") {
                    const loaderstart = "loaderstart";
                    onLoaderStart = tmp42;
                    const items10 = [onLoaderStart];
                    const ref6 = address.useRef(onLoaderStart);
                    const effect10 = address.useEffect(f136980, items10);
                    const items11 = [onLoaderStart, "loaderstart", first, ref6];
                    const effect11 = address.useEffect(f136981, items11);
                    if (typeof useAttachEvent === "function") {
                      const networkschange = "networkschange";
                      onNetworksChange = tmp46;
                      const items12 = [onNetworksChange];
                      const ref7 = address.useRef(onNetworksChange);
                      const effect12 = address.useEffect(f136980, items12);
                      const items13 = [onNetworksChange, "networkschange", first, ref7];
                      const effect13 = address.useEffect(f136981, items13);
                      if (typeof useAttachEvent === "function") {
                        const confirm_str = "confirm";
                        onConfirm = tmp50;
                        const items14 = [onConfirm];
                        const ref8 = address.useRef(onConfirm);
                        const effect14 = address.useEffect(f136980, items14);
                        const items15 = [onConfirm, "confirm", first, ref8];
                        const effect15 = address.useEffect(f136981, items15);
                        if (typeof useAttachEvent === "function") {
                          const cancel_str = "cancel";
                          onCancel = tmp54;
                          const items16 = [onCancel];
                          const ref9 = address.useRef(onCancel);
                          const effect16 = address.useEffect(f136980, items16);
                          const items17 = [onCancel, "cancel", first, ref9];
                          const effect17 = address.useEffect(f136981, items17);
                          if (typeof useAttachEvent === "function") {
                            const shippingaddresschange = "shippingaddresschange";
                            onShippingAddressChange = tmp58;
                            const items18 = [onShippingAddressChange];
                            const ref10 = address.useRef(onShippingAddressChange);
                            const effect18 = address.useEffect(f136980, items18);
                            const items19 = [onShippingAddressChange, "shippingaddresschange", first, ref10];
                            const effect19 = address.useEffect(f136981, items19);
                            if (typeof useAttachEvent === "function") {
                              const shippingratechange = "shippingratechange";
                              onShippingRateChange = tmp62;
                              const items20 = [onShippingRateChange];
                              const ref11 = address.useRef(onShippingRateChange);
                              const effect20 = address.useEffect(f136980, items20);
                              const items21 = [onShippingRateChange, "shippingratechange", first, ref11];
                              const effect21 = address.useEffect(f136981, items21);
                              if (typeof useAttachEvent === "function") {
                                const change = "change";
                                onChange = tmp66;
                                const items22 = [onChange];
                                const ref12 = address.useRef(onChange);
                                const effect22 = address.useEffect(f136980, items22);
                                const items23 = [onChange, "change", first, ref12];
                                const effect23 = address.useEffect(f136981, items23);
                                if (onReady) {
                                  if ("expressCheckout" !== options) {
                                    onReady = function readyCallback() {
                                      onReady(first);
                                    };
                                  }
                                }
                                if (typeof useAttachEvent === "function") {
                                  const ready = "ready";
                                  onReady = tmp72;
                                  const ref13 = address.useRef(tmp70);
                                  const items24 = [tmp70];
                                  const effect24 = address.useEffect(f136980, items24);
                                  const items25 = [tmp70, "ready", first, ref13];
                                  const effect25 = address.useEffect(f136981, items25);
                                  const items26 = [elements, checkoutSdk, options];
                                  const layoutEffect = address.useLayoutEffect(function() {
                                    if (null === ref.current) {
                                      if (null !== ref.current) {
                                        if (elements) {
                                          let paymentElement;
                                          if (checkoutSdk) {
                                            if ("payment" === address) {
                                              paymentElement = checkoutSdk.createPaymentElement(options);
                                            } else if ("address" === address) {
                                              if ("mode" in options) {
                                                const mode = options.mode;
                                                const tmp18 = _objectWithoutProperties(options, closure_24);
                                                if ("shipping" === mode) {
                                                  paymentElement = checkoutSdk.createShippingAddressElement(tmp18);
                                                } else if ("billing" !== mode) {
                                                  const _Error3 = Error;
                                                  const self5 = this;
                                                  const self6 = this;
                                                  const error = new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                                                  throw error;
                                                } else {
                                                  paymentElement = checkoutSdk.createBillingAddressElement(tmp18);
                                                }
                                              } else {
                                                const _Error2 = Error;
                                                const self3 = this;
                                                const self4 = this;
                                                const error1 = new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                                                throw error1;
                                              }
                                            } else if ("expressCheckout" === address) {
                                              paymentElement = checkoutSdk.createExpressCheckoutElement(options);
                                            } else if ("currencySelector" === address) {
                                              paymentElement = checkoutSdk.createCurrencySelectorElement();
                                            } else {
                                              const _Error = Error;
                                              const concat = "Invalid Element type ".concat;
                                              const self = this;
                                              const self2 = this;
                                              const error2 = new Error("Invalid Element type ".concat(combined, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                                              throw error2;
                                            }
                                          } else {
                                            paymentElement = null;
                                            if (elements) {
                                              paymentElement = elements.create(address, options);
                                            }
                                          }
                                          tmp.current = paymentElement;
                                          closure_5(paymentElement);
                                          const tmp25 = paymentElement;
                                          if (tmp25) {
                                            paymentElement.mount(tmp27.current);
                                          }
                                        }
                                      }
                                    }
                                  }, items26);
                                  if (typeof usePrevious === "function") {
                                    const ref14 = address.useRef(options);
                                    const items27 = [options];
                                    const effect26 = address.useEffect(() => {
                                      ref14.current = options;
                                    }, items27);
                                    let current = ref14.current;
                                    const items28 = [options, current];
                                    const effect27 = address.useEffect(() => {
                                      if (ref.current) {
                                        if (typeof extractAllowedOptionsUpdates === "function") {
                                          let closure_0 = options;
                                          let closure_1 = tmp4;
                                          let closure_2 = ["paymentRequest"];
                                          if (typeof isUnknownObject === "function") {
                                            let tmp6 = null;
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
                                                  let tmp11;
                                                  const tmp3 = null !== closure_1 && "object" === elements(closure_1);
                                                  let tmp6 = !tmp3;
                                                  if (tmp3) {
                                                    tmp6 = !closure_2_10(closure_0[item], closure_1[item]);
                                                  }
                                                  if (closure_2.includes(item)) {
                                                    tmp11 = acc;
                                                    if (tmp6) {
                                                      const _console = console;
                                                      const concat = "Unsupported prop change: options.".concat;
                                                      console.warn("Unsupported prop change: options.".concat(item, " is not a mutable property."));
                                                      tmp11 = acc;
                                                    }
                                                  } else {
                                                    tmp11 = acc;
                                                    if (tmp6) {
                                                      const obj = {};
                                                      const tmp13 = acc || {};
                                                      onReady(obj, tmp13);
                                                      const obj2 = {};
                                                      if (item in obj2) {
                                                        const _Object = Object;
                                                        const obj3 = { value: closure_0[item], enumerable: true, configurable: true, writable: true };
                                                        Object.defineProperty(obj2, item, obj3);
                                                      } else {
                                                        obj2[item] = closure_0[item];
                                                      }
                                                      onReady(obj, {}, obj2);
                                                      tmp11 = obj;
                                                    }
                                                  }
                                                  return tmp11;
                                                } else {
                                                  throw new TypeError("Trying to call a non-function");
                                                }
                                              }, null);
                                            }
                                            let tmp11 = reduced;
                                            if (tmp11) {
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
                                    const layoutEffect1 = address.useLayoutEffect(() => () => {
                                      if (ref.current) {
                                        if (typeof ref.current.destroy === "function") {
                                          try {
                                            current = ref.current;
                                            current.destroy();
                                            ref.current = null;
                                          } catch (err) {
                                          }
                                        }
                                      }
                                    }, []);
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
    });
    let obj = { id: _default.string, className: _default.string, onChange: _default.func, onBlur: _default.func, onFocus: _default.func, onReady: _default.func, onEscape: _default.func, onClick: _default.func, onLoadError: _default.func, onLoaderStart: _default.func, onNetworksChange: _default.func, onConfirm: _default.func, onCancel: _default.func, onShippingAddressChange: _default.func, onShippingRateChange: _default.func, options: _default.object };
    tmp3.propTypes = obj;
    tmp3.displayName = combined;
    tmp3.__elementType = address;
    return tmp3;
  }
  const tmp8 = typeof _window === "undefined";
  let tmp7 = typeof window === "undefined" ? (function EmbeddedCheckoutServerElement(arg0) {
    if (typeof useEmbeddedCheckoutContext === "function") {
      if (React.useContext(context3)) {
        return <div id={tmp} className={tmp2} />;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }) : (function EmbeddedCheckoutClientElement(arg0) {
    let tmp2;
    if (typeof useEmbeddedCheckoutContext === "function") {
      context = React.useContext(context3);
      if (context) {
        const embeddedCheckout = context.embeddedCheckout;
        const flag = false;
        let closure_1 = React.useRef(false);
        const ref = React.useRef(null);
        const items = [embeddedCheckout];
        const layoutEffect = React.useLayoutEffect(() => {
          const current = ref.current;
          const tmp2 = !current && embeddedCheckout && null !== ref.current;
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
                } catch (err) {
                }
              }
            }
          };
        }, items);
        return <div ref={ref} id={tmp} className={tmp2} />;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const elementComponent = createElementComponent("auBankAccount", tmp8);
  const elementComponent1 = createElementComponent("card", tmp8);
  const elementComponent2 = createElementComponent("cardNumber", tmp8);
  const elementComponent3 = createElementComponent("cardExpiry", tmp8);
  const elementComponent4 = createElementComponent("cardCvc", tmp8);
  const elementComponent5 = createElementComponent("fpxBank", tmp8);
  const elementComponent6 = createElementComponent("iban", tmp8);
  const elementComponent7 = createElementComponent("idealBank", tmp8);
  const elementComponent8 = createElementComponent("p24Bank", tmp8);
  const elementComponent9 = createElementComponent("epsBank", tmp8);
  const elementComponent10 = createElementComponent("payment", tmp8);
  const elementComponent11 = createElementComponent("expressCheckout", tmp8);
  const elementComponent12 = createElementComponent("currencySelector", tmp8);
  const elementComponent13 = createElementComponent("paymentRequestButton", tmp8);
  const elementComponent14 = createElementComponent("linkAuthentication", tmp8);
  const elementComponent15 = createElementComponent("address", tmp8);
  const elementComponent16 = createElementComponent("shippingAddress", tmp8);
  const elementComponent17 = createElementComponent("paymentMethodMessaging", tmp8);
  const elementComponent18 = createElementComponent("affirmMessage", tmp8);
  exports.AddressElement = elementComponent15;
  exports.AffirmMessageElement = elementComponent18;
  exports.AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", tmp8);
  exports.AuBankAccountElement = elementComponent;
  exports.CardCvcElement = elementComponent4;
  exports.CardElement = elementComponent1;
  exports.CardExpiryElement = elementComponent3;
  exports.CardNumberElement = elementComponent2;
  exports.CheckoutProvider = CheckoutProvider;
  exports.CurrencySelectorElement = elementComponent12;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.EmbeddedCheckout = tmp7;
  exports.EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider(stripe) {
    let current;
    stripe = stripe.stripe;
    const options = stripe.options;
    let obj = stripe;
    const items = [stripe];
    const children = stripe.children;
    const memo = stripe.useMemo(() => parseStripeProp(stripe, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."), items);
    stripe.useRef(null);
    const ref = stripe.useRef(null);
    const tmp3 = ref(stripe.useState({ embeddedCheckout: null }), 2);
    const value = tmp3[0];
    let closure_6 = tmp3[1];
    const items1 = [memo, options, value, ref];
    const effect = stripe.useEffect(() => {
      if (!ref.current) {
        if (!ref.current) {
          function setStripeAndInitEmbeddedCheckout(arg0) {

          }
          if ("async" === memo.tag) {
            if (!ref.current) {
              const stripePromise = memo.stripePromise;
              stripePromise.then((current) => {
                const tmp = current;
                if (tmp) {
                  if (typeof setStripeAndInitEmbeddedCheckout === "function") {
                    current = ref.current || ref.current;
                    if (!current) {
                      ref.current = current;
                      current2 = ref.current;
                      const embeddedCheckout = current2.initEmbeddedCheckout(options);
                      ref.current = embeddedCheckout.then((embeddedCheckout) => {
                        const obj = { embeddedCheckout };
                        closure_1_6(obj);
                      });
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              });
            }
          }
          let tmp5 = "sync" !== memo.tag || ref.current;
          if (!tmp5) {
            tmp5 = !options.clientSecret && !options.fetchClientSecret;
          }
          if (!tmp5) {
            current = ref.current;
            stripe = memo.stripe;
            if (!current) {
              current = ref.current;
            }
            if (!current) {
              ref.current = stripe;
              current2 = ref.current;
              let embeddedCheckout = current2.initEmbeddedCheckout(options);
              ref.current = embeddedCheckout.then((embeddedCheckout) => {
                const obj = { embeddedCheckout };
                closure_1_6(obj);
              });
            }
          }
        }
      }
    }, items1);
    const items2 = [value.embeddedCheckout];
    const effect1 = stripe.useEffect(() => () => {
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
    }, items2);
    const items3 = [ref];
    const effect2 = stripe.useEffect(() => {
      if (typeof registerWithStripeJs === "function") {
        const tmp = ref && ref._registerWrapper && ref.registerAppInfo;
        if (tmp) {
          ref._registerWrapper({ name: "react-stripe-js", version: "3.7.0" });
          ref.registerAppInfo({ name: "react-stripe-js", version: "3.7.0", url: "https://stripe.com/docs/stripe-js/react" });
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, items3);
    if (typeof current === "function") {
      const items4 = [stripe];
      const ref1 = obj.useRef(stripe);
      const effect3 = obj.useEffect(() => {
        ref14.current = options;
      }, items4);
      current = ref1.current;
      const items5 = [current, stripe];
      const effect4 = obj.useEffect(() => {
        const tmp2 = null !== current && tmp !== stripe;
        if (tmp2) {
          const _console = console;
          console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
        }
      }, items5);
      if (typeof tmp8 === "function") {
        const items6 = [options];
        const ref2 = obj.useRef(options);
        const effect5 = obj.useEffect(() => {
          ref14.current = options;
        }, items6);
        let current2 = ref2.current;
        const items7 = [current2, options];
        const effect6 = obj.useEffect(() => {
          if (null != current2) {
            if (null != options) {
              const tmp4 = undefined === options.clientSecret && undefined === options.fetchClientSecret;
              if (tmp4) {
                const _console2 = console;
                console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.");
              }
              const tmp7 = null != current2.clientSecret && options.clientSecret !== current2.clientSecret;
              if (tmp7) {
                const _console3 = console;
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
              }
              const tmp10 = null != current2.fetchClientSecret && options.fetchClientSecret !== current2.fetchClientSecret;
              if (tmp10) {
                const _console4 = console;
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
              }
              const tmp13 = null != current2.onComplete && options.onComplete !== current2.onComplete;
              if (tmp13) {
                const _console5 = console;
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
              }
              const tmp16 = null != current2.onShippingDetailsChange && options.onShippingDetailsChange !== current2.onShippingDetailsChange;
              if (tmp16) {
                const _console6 = console;
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.");
              }
              const tmp19 = null != current2.onLineItemsChange && options.onLineItemsChange !== current2.onLineItemsChange;
              if (tmp19) {
                const _console7 = console;
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.");
              }
            } else {
              const _console = console;
              console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
            }
          }
        }, items7);
        return <context3.Provider value={value}>{children}</context3.Provider>;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const str = "Trying to call a non-function";
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
          const self3 = this;
          const self4 = this;
          const error = new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
          throw error;
        }
      } else {
        const _Error = Error;
        const concat = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
        const self = this;
        const self2 = this;
        const error1 = new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat("calls useCheckout()", " in an <CheckoutProvider> provider."));
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
          const self = this;
          const self2 = this;
          const error = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat("calls useElements()", " in an <Elements> provider."));
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
          const self5 = this;
          const self6 = this;
          const error = new Error("You cannot wrap the part of your app that ".concat("calls useStripe()", " in both <CheckoutProvider> and <Elements> providers."));
          throw error;
        }
      }
      if (context) {
        if (typeof parseCheckoutSdkContext === "function") {
          context1 = context;
          if (!context1) {
            const _Error2 = Error;
            const concat2 = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
            const self3 = this;
            const self4 = this;
            const error1 = new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat("calls useStripe()", " in an <CheckoutProvider> provider."));
            throw error1;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof parseElementsContext === "function") {
        if (!context1) {
          const _Error = Error;
          const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
          const self = this;
          const self2 = this;
          const error2 = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat("calls useStripe()", " in an <Elements> provider."));
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
    fn(exports, react);
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
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