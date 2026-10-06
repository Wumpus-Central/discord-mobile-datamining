// _runtime/00020_react.js
class Component {
  constructor(props, context, arg2) {}
  setState(obj, arg1) {
    if (typeof obj !== "object") {
      if (typeof obj !== "function") {
        if (null != obj) {
          const _Error = Error;
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        }
      }
    }
    const updater = this.updater;
    updater.enqueueSetState(this, obj, arg1, "setState");
  }
  forceUpdate(arg0) {
    const updater = this.updater;
    updater.enqueueForceUpdate(this, arg0, "forceUpdate");
  }
}
class ComponentDummy {
  constructor() {}
}
class PureComponent {
  constructor(props, context, arg2) {}
}
function noop() {}
function mapIntoArray(element, items, arg2, arg3, fn) {
  let tmp55;
  const f133859 = (arg0) => closure_0[arg0];
  let tmp = typeof element !== "undefined";
  if (typeof element !== "undefined") {
    tmp = typeof element !== "boolean";
  }
  let tmp2 = element;
  if (!tmp) {
    tmp2 = null;
  }
  let flag = true;
  if (null !== tmp2) {
    if ("bigint" !== typeof element) {
      if ("string" !== typeof element) {
        if ("number" !== typeof element) {
          flag = false;
          if ("object" === typeof element) {
            const $$typeof = tmp2.$$typeof;
            flag = true;
            if (_typeof !== $$typeof) {
              flag = true;
              if (closure_1 !== $$typeof) {
                flag = false;
                if (_typeof6 === $$typeof) {
                  return mapIntoArray(tmp2._init(tmp2._payload), items, arg2, arg3, fn);
                }
              }
            }
          }
        }
      }
    }
    flag = true;
  }
  if (flag) {
    element = fn(tmp2);
    let str16 = arg3;
    if ("" === arg3) {
      if (typeof tmp2 === "object") {
        if (null !== tmp2) {
          if (null != tmp2.key) {
            const text = `${tmp2.key}`;
            _typeof = { "=": "=0", ":": "=2" };
            let text1 = `$${`${tmp2.key}`.replace(/[=:]/g, f133859)}`;
          }
          str16 = `.${tmp45}`;
        }
      }
      text1 = (0).toString(36);
    }
    if (isArray(element)) {
      mapIntoArray(element, items, `${str16.replace(re15, "$&/")}/`, "", (arg0) => arg0);
    } else if (null != element) {
      let tmp49 = typeof element === "object";
      if (typeof element === "object") {
        tmp49 = null !== element;
      }
      if (tmp49) {
        tmp49 = element.$$typeof === _typeof;
      }
      let tmp50 = element;
      if (tmp49) {
        let str19 = "";
        if (null != element.key) {
          if (!tmp2) {
            const text2 = `${element.key}`;
            str19 = `${`${element.key}`.replace(re15, "$&/")}/`;
          } else {
            str19 = "";
          }
        }
        const _HermesInternal = HermesInternal;
        const props = element.props;
        const element1 = { $$typeof: _typeof, type: element.type, key: arg2 + str19 + str16, ref: tmp55, props };
        tmp55 = null;
        if (undefined !== props.ref) {
          tmp55 = ref;
        }
        tmp50 = element1;
      }
      items.push(tmp50);
    }
    return 1;
  } else {
    let num7;
    let str5 = ".";
    if ("" !== arg3) {
      str5 = `${arg3}:`;
    }
    if (isArray(tmp2)) {
      let num12 = 0;
      let num13 = 0;
      num7 = 0;
      if (0 < tmp2.length) {
        while (true) {
          let tmp36 = tmp2[num12];
          if (typeof tmp36 === "object") {
            if (null !== tmp36) {
              if (null != tmp36.key) {
                let text3 = `${tmp36.key}`;
                _typeof = { "=": "=0", ":": "=2" };
                let text4 = `$${`${tmp36.key}`.replace(/[=:]/g, f133859)}`;
                num13 = num13 + tmp35(tmp36, items, arg2, str5 + `$${`${tmp36.key}`.replace(/[=:]/g, f133859)}`, fn);
                num12 = num12 + 1;
                num7 = num13;
                if (num12 >= tmp2.length) {
                  break;
                }
              }
            }
          }
          text4 = num12.toString(36);
        }
      }
    } else {
      let tmp14 = null;
      if (null !== tmp2) {
        tmp14 = null;
        if (typeof tmp2 === "object") {
          let tmp16 = null;
          if ((typeof iterator && tmp2[iterator]) || tmp2[Symbol.iterator] === "function") {
            tmp16 = tmp15;
          }
          tmp14 = tmp16;
        }
      }
      if (typeof tmp14 === "function") {
        const iter = tmp14.call(tmp2);
        let iter2 = iter.next();
        let num5 = 0;
        let num6 = 0;
        num7 = 0;
        if (!iter2.done) {
          while (true) {
            let value3 = iter2.value;
            if (typeof value3 === "object") {
              if (null !== value3) {
                if (null != value3.key) {
                  let text5 = `${value2.key}`;
                  _typeof = { "=": "=0", ":": "=2" };
                  let text6 = `$${`${value2.key}`.replace(/[=:]/g, f133859)}`;
                  num5 = num5 + 1;
                  num6 = num6 + tmp26(value3, items, arg2, str5 + `$${`${value2.key}`.replace(/[=:]/g, f133859)}`, fn);
                  let iter3 = iter.next();
                  iter2 = iter3;
                  num7 = num6;
                  if (iter3.done) {
                    break;
                  }
                }
              }
            }
            text6 = num5.toString(36);
          }
        }
      } else {
        num7 = 0;
        if (typeof element === "object") {
          if (typeof tmp2.then === "function") {
            let value;
            let c0 = tmp2;
            const status = tmp2.status;
            if ("fulfilled" === status) {
              value = tmp2.value;
            } else if ("rejected" === status) {
              throw tmp2.reason;
            } else {
              if (typeof tmp2.status === "string") {
                tmp2.then(noop, noop);
              } else {
                tmp2.status = "pending";
                tmp2.then(
                  (value) => {
                    if ("pending" === _null.status) {
                      _null.status = "fulfilled";
                      _null.value = value;
                    }
                  },
                  (reason) => {
                    if ("pending" === _null.status) {
                      _null.status = "rejected";
                      _null.reason = reason;
                    }
                  },
                );
              }
              const status2 = tmp2.status;
              if ("fulfilled" === status2) {
                value = tmp2.value;
              } else if ("rejected" === status2) {
                throw tmp2.reason;
              } else {
                throw tmp2;
              }
            }
            return mapIntoArray(value, items, arg2, arg3, fn);
          } else {
            const _String = String;
            let StringResult = String(tmp2);
            const _Error = Error;
            if ("[object Object]" === StringResult) {
              const _Object = Object;
              const keys = Object.keys(tmp2);
              StringResult = `${"object with keys {" + obj.join(", ")}}`;
            }
            throw _Error(
              "Objects are not valid as a React child (found: " +
                StringResult +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
        }
      }
    }
    return num7;
  }
}
function lazyInitializer(_status) {
  if (-1 === _status._status) {
    const _resultResult = _status._result();
    _resultResult.then(
      (_result) => {
        const tmp2 = 0 !== _status._status && -1 !== _status._status;
        if (!tmp2) {
          _status._status = 1;
          _status._result = _result;
        }
      },
      (_result) => {
        const tmp2 = 0 !== _status._status && -1 !== _status._status;
        if (!tmp2) {
          _status._status = 2;
          _status._result = _result;
        }
      },
    );
    if (-1 === _status._status) {
      _status._status = 0;
      _status._result = _resultResult;
    }
  }
  if (1 === _status._status) {
    return _status._result.default;
  } else {
    throw _status._result;
  }
}
let _typeof = Symbol.for("react.transitional.element");
let closure_1 = Symbol.for("react.portal");
const forResult = Symbol.for("react.fragment");
const forResult1 = Symbol.for("react.strict_mode");
const forResult2 = Symbol.for("react.profiler");
const _typeof2 = Symbol.for("react.consumer");
const _typeof3 = Symbol.for("react.context");
const _typeof4 = Symbol.for("react.forward_ref");
const forResult3 = Symbol.for("react.suspense");
const _typeof5 = Symbol.for("react.memo");
const _typeof6 = Symbol.for("react.lazy");
let closure_8 = {
  isMounted() {
    return false;
  },
  enqueueForceUpdate() {},
  enqueueReplaceState() {},
  enqueueSetState() {},
};
const authStore = {};
Component.prototype.isReactComponent = {};
ComponentDummy.prototype = Component.prototype;
const forResult4 = Symbol.for("react.activity");
const obj2 = Object.create(ComponentDummy.prototype);
PureComponent.prototype = obj2;
obj2.constructor = PureComponent;
assign(obj2, Component.prototype);
obj2.isPureReactComponent = true;
let obj = { H: null, A: null, T: null, S: null };
const re15 = /\/+/g;
let closure_18 =
  typeof reportError === "function"
    ? reportError
    : function (message) {
        if (typeof window === "object") {
          const _window3 = window;
          if (typeof window.ErrorEvent === "function") {
            const _window = window;
            if (typeof message === "object") {
              if (null !== message) {
                let StringResult;
                if (typeof message.message === "string") {
                  const _String2 = String;
                  StringResult = String(message.message);
                }
                const self = this;
                const self2 = this;
                obj = { bubbles: true, cancelable: true, message: StringResult, error: message };
                new tmp("error", obj);
                const _window2 = window;
              }
            }
            const _String = String;
            StringResult = String(message);
          }
          const _console = console;
          console.error(message);
        }
        if (typeof process === "object") {
          const _process = process;
          if (typeof process.emit === "function") {
            const _process2 = process;
            process.emit("uncaughtException", message);
          }
        }
      };
const obj6 = {
  map: function mapChildren(element, arg1, arg2) {
    let closure_0 = arg1;
    closure_1 = arg2;
    if (null == element) {
      return element;
    } else {
      const items = [];
      let c2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        closure_2 = tmp + 1;
        return f80035.call(closure_1_1, arg0, +closure_2);
      });
      return items;
    }
  },
  forEach(element, arg1, arg2) {
    let closure_0 = arg1;
    const f80033 = function () {
      f80033(...arguments);
    };
    closure_1 = arg2;
    if (null != element) {
      let c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        closure_2 = tmp + 1;
        return f80035.call(closure_1_1, arg0, +closure_2);
      });
    }
  },
  count(element) {
    let c0 = 0;
    let closure_0 = () => {
      closure_0 = closure_0 + 1;
    };
    if (null != element) {
      let c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        closure_2 = tmp + 1;
        return f80035.call(closure_1_1, arg0, +closure_2);
      });
    }
    return c0;
  },
  toArray(element) {
    const f80035 = (arg0) => arg0;
    let items1 = element;
    if (null != element) {
      const items = [];
      let closure_2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        closure_2 = tmp + 1;
        return f80035.call(closure_1_1, arg0, +closure_2);
      });
      items1 = items;
    }
    if (!items1) {
      items1 = [];
    }
    return items1;
  },
  only(children) {
    let tmp = typeof children === "object";
    if (typeof children === "object") {
      tmp = null !== children;
    }
    if (tmp) {
      tmp = children.$$typeof === _typeof;
    }
    if (tmp) {
      return children;
    } else {
      const _Error = Error;
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  },
};
function isValidElement(label) {
  let tmp = typeof label === "object";
  if (typeof label === "object") {
    tmp = null !== label;
  }
  if (tmp) {
    tmp = label.$$typeof === _typeof;
  }
  return tmp;
}
const merged = Object.assign({ c: null });
merged[0] = function c(arg0) {
  const H = obj.H;
  return H.useMemoCache(arg0);
};

export const Activity = forResult4;
export const Children = obj6;
export { Component };
export const Fragment = forResult;
export const Profiler = forResult2;
export { PureComponent };
export const StrictMode = forResult1;
export const Suspense = forResult3;
export const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = obj;
export const __COMPILER_RUNTIME = merged;
export const cache = (arg0) => {
  let closure_0 = arg0;
  return function () {
    return closure_0(...arguments);
  };
};
export const cacheSignal = () => null;
export const cloneElement = function (onlyResult, cResult, children) {
  let tmp14;
  if (null == onlyResult) {
    const _Error = Error;
    throw Error("The argument must be a React element, but you passed " + onlyResult + ".");
  } else {
    const tmp18 = assign({}, onlyResult.props);
    let key = onlyResult.key;
    let tmp3 = key;
    if (null != cResult) {
      if (undefined !== cResult.key) {
        key = `${cResult.key}`;
      }
      tmp3 = key;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = key;
        while (keys[tmp] !== undefined) {
          let callResult = hasOwnProperty.call(cResult, tmp5);
          let tmp7 = !callResult;
          if (callResult) {
            tmp7 = "key" === tmp5;
          }
          if (!tmp7) {
            tmp7 = "__self" === tmp5;
          }
          if (!tmp7) {
            tmp7 = "__source" === tmp5;
          }
          if (!tmp7) {
            let tmp8 = "ref" === tmp5 && undefined === cResult.ref;
            tmp7 = tmp8;
          }
          if (tmp7) {
            continue;
          } else {
            tmp18[tmp5] = cResult[tmp5];
            continue;
          }
          continue;
        }
      }
    }
    const diff = arguments.length - 2;
    if (1 === diff) {
      tmp18.children = children;
    } else if (1 < diff) {
      const _Array = Array;
      const ArrayResult = Array(diff);
      let num3 = 0;
      if (0 < diff) {
        do {
          ArrayResult[num3] = arguments[num3 + 2];
          num3 = num3 + 1;
        } while (num3 < diff);
      }
      tmp18.children = ArrayResult;
    }
    const element = { $$typeof: _typeof, type: onlyResult.type, key: tmp3, ref: tmp14, props: tmp18 };
    tmp14 = null;
    if (undefined !== tmp18.ref) {
      tmp14 = ref;
    }
    return element;
  }
};
export const createContext = (fakeSharedValue) => {
  let _context;
  _context = {
    $$typeof: _typeof3,
    _currentValue: fakeSharedValue,
    _currentValue2: fakeSharedValue,
    _threadCount: 0,
    Provider: _context,
    Consumer: obj2,
  };
  return _context;
};
export const createElement = function (div, is, element) {
  let tmp16;
  const props = {};
  let tmp2 = null;
  if (null != is) {
    let text = null;
    if (undefined !== is.key) {
      text = `${is.key}`;
    }
    tmp2 = text;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = text;
      while (keys[tmp] !== undefined) {
        let tmp7 = hasOwnProperty.call(is, tmp6) && "key" !== tmp6 && "__self" !== tmp6 && "__source" !== tmp6;
        if (!tmp7) {
          continue;
        } else {
          props[tmp6] = is[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  const diff = arguments.length - 2;
  if (1 === diff) {
    props.children = element;
  } else if (1 < diff) {
    const _Array = Array;
    const ArrayResult = Array(diff);
    let num = 0;
    if (0 < diff) {
      do {
        ArrayResult[num] = arguments[num + 2];
        num = num + 1;
      } while (num < diff);
    }
    props.children = ArrayResult;
  }
  const tmp12 = div;
  if (tmp12) {
    if (div.defaultProps) {
      const defaultProps = div.defaultProps;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[1] !== undefined) {
          if (undefined !== props[tmp15]) {
            continue;
          } else {
            props[tmp15] = defaultProps[tmp15];
            continue;
          }
          continue;
        }
      }
    }
  }
  element = { $$typeof: _typeof, type: div, key: tmp2, ref: tmp16, props };
  tmp16 = null;
  if (undefined !== props.ref) {
    tmp16 = ref;
  }
  return element;
};
export const createRef = () => ({ current: null });
export const forwardRef = (render) => ({ $$typeof: _typeof4, render });
export { isValidElement };
export const lazy = (_result) => {
  obj = { $$typeof: _typeof6, _payload: obj2, _init: lazyInitializer };
  return obj;
};
export const memo = (react, memo3) => {
  let tmp;
  obj = { $$typeof: _typeof5, type: react, compare: tmp };
  tmp = null;
  if (undefined !== memo3) {
    tmp = memo3;
  }
  return obj;
};
export const startTransition = (fn) => {
  let T;
  T = T.T;
  T = { T };
  try {
    const promise = fn();
    const S = tmp.S;
    if (null !== S) {
      tmp3(T, promise);
    }
    const tmp9 = typeof promise === "object" && null !== promise && typeof promise.then === "function";
    if (tmp9) {
      promise.then(noop, closure_18);
    }
    const tmp16 = null !== T && null !== T.types;
    if (tmp16) {
      T.types = T.types;
    }
    T.T = T;
  } catch (tmp17) {
    const tmp19 = null !== T && null !== T.types;
    if (tmp19) {
      T.types = T.types;
    }
    T.T = T;
    throw tmp17;
  }
};
export const unstable_useCacheRefresh = () => {
  const H = obj.H;
  return H.useCacheRefresh();
};
export const use = (arg0) => {
  const H = obj.H;
  return H.use(arg0);
};
export const useActionState = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useActionState(arg0, arg1, arg2);
};
export const useCallback = (arg0, arg1) => {
  const H = obj.H;
  return H.useCallback(arg0, arg1);
};
export const useContext = (context) => {
  const H = obj.H;
  return H.useContext(context);
};
export const useDebugValue = () => {};
export const useDeferredValue = (arg0, arg1) => {
  const H = obj.H;
  return H.useDeferredValue(arg0, arg1);
};
export const useEffect = (cResult, items) => {
  const H = obj.H;
  return H.useEffect(cResult, items);
};
export const useEffectEvent = (arg0) => {
  const H = obj.H;
  return H.useEffectEvent(arg0);
};
export const useId = () => {
  const H = obj.H;
  return H.useId();
};
export const useImperativeHandle = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useImperativeHandle(arg0, arg1, arg2);
};
export const useInsertionEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useInsertionEffect(arg0, arg1);
};
export const useLayoutEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useLayoutEffect(arg0, arg1);
};
export const useMemo = (arg0, arg1) => {
  const H = obj.H;
  return H.useMemo(arg0, arg1);
};
export const useOptimistic = (arg0, arg1) => {
  const H = obj.H;
  return H.useOptimistic(arg0, arg1);
};
export const useReducer = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useReducer(arg0, arg1, arg2);
};
export const useRef = (arg0) => {
  const H = obj.H;
  return H.useRef(arg0);
};
export const useState = (arg0) => {
  const H = obj.H;
  return H.useState(arg0);
};
export const useSyncExternalStore = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useSyncExternalStore(arg0, arg1, arg2);
};
export const useTransition = () => {
  const H = obj.H;
  return H.useTransition();
};
export const version = "19.2.3";
