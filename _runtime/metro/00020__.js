// _runtime/metro/00020__.js
class Component {
  constructor(arg0, arg1, arg2) {
    obj = { props: arg0, context: arg1, refs: closure_10 };
    tmp = arg2;
    if (!arg2) {
      tmp = closure_8;
    }
    obj.updater = tmp;
    return;
  }
  setState(arg0, arg1) {
    if (typeof arg0 !== "object") {
      if (typeof arg0 !== "function") {
        tmp3 = null;
        if (null != arg0) {
          tmp2 = globalThis;
          _Error = Error;
          str = "takes an object of state variables to update or a function which returns an object of state variables.";
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }
    }
    updater = this.updater;
    enqueueSetStateResult = updater.enqueueSetState(this, arg0, arg1, "setState");
    return;
  }
  forceUpdate(arg0) {
    updater = this.updater;
    enqueueForceUpdateResult = updater.enqueueForceUpdate(this, arg0, "forceUpdate");
    return;
  }
}
class ComponentDummy {
  constructor() {
    return;
  }
}
class PureComponent {
  constructor(arg0, arg1, arg2) {
    obj = { props: arg0, context: arg1, refs: closure_10 };
    tmp = arg2;
    if (!arg2) {
      tmp = closure_8;
    }
    obj.updater = tmp;
    return;
  }
}
function noop() {

}
function mapIntoArray(element, items, arg2, arg3, fn) {
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
      if ("string" !== tmp4) {
        if ("number" !== tmp4) {
          flag = false;
          if ("object" === tmp4) {
            const $$typeof = tmp2.$$typeof;
            flag = true;
            if (_typeof !== $$typeof) {
              flag = true;
              if (closure_1 !== $$typeof) {
                flag = false;
                if (closure_6 === $$typeof) {
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
    if ("" !== arg3) {
      if (isArray(element)) {
        mapIntoArray(element, items, `${arg3.replace(re15, "$&/")}/`, "", (arg0) => arg0);
      } else if (null != element) {
        let tmp51 = typeof element === "object";
        if (typeof element === "object") {
          tmp51 = null !== element;
        }
        if (tmp51) {
          tmp51 = element.$$typeof === _typeof;
        }
        let tmp52 = element;
        if (tmp51) {
          let str18 = "";
          if (null != element.key) {
            if (!tmp2) {
              const text = `${element.key}`;
              str18 = `${`${element.key}`.replace(re15, "$&/")}/`;
            } else {
              str18 = "";
            }
          }
          const _HermesInternal = HermesInternal;
          const props = element.props;
          element = { $$typeof: _typeof, type: null, key: null, ref: null, props: null };
          element.type = element.type;
          element.key = arg2 + str18 + arg3;
          let tmp57 = null;
          if (undefined !== props.ref) {
            tmp57 = ref;
          }
          element.ref = tmp57;
          element.props = props;
          tmp52 = element;
        }
        items.push(tmp52);
      }
      return 1;
    } else {
      if (typeof tmp2 === "object") {
        if (null !== tmp2) {
          const text1 = `.${tmp46}`;
        }
        const text2 = `${tmp2.key}`;
        c0 = { "=": "=0", ":": "=2" };
        let text3 = `$${`${tmp2.key}`.replace(/[=:]/g, (arg0) => _null[arg0])}`;
      }
      text3 = 0.toString(36);
    }
  } else {
    let str5 = ".";
    if ("" !== arg3) {
      str5 = `${arg3}:`;
    }
    if (isArray(tmp2)) {
      let num12 = 0;
      let num13 = 0;
      let num7 = 0;
      if (0 < tmp2.length) {
        while (true) {
          let tmp36 = tmp2[num12];
          if (typeof tmp36 === "object") {
            if (null !== tmp36) {
              if (null != tmp36.key) {
                let text4 = `${tmp36.key}`;
                c0 = { "=": "=0", ":": "=2" };
                let text5 = `$${`${tmp36.key}`.replace(/[=:]/g, (arg0) => _null[arg0])}`;
                num13 = num13 + tmp35(tmp36, items, arg2, str5 + `$${`${tmp36.key}`.replace(/[=:]/g, (arg0) => _null[arg0])}`, fn);
                num12 = num12 + 1;
                num7 = num13;
                if (num12 >= tmp2.length) {
                  break;
                }
              }
            }
          }
          text5 = num12.toString(36);
        }
      }
    } else {
      let tmp14 = null;
      if (!tmp3) {
        tmp14 = null;
        if (typeof tmp2 === "object") {
          let prop = iterator;
          if (iterator) {
            prop = tmp2[iterator];
          }
          if (!prop) {
            prop = tmp2[Symbol.iterator];
          }
          let tmp16 = null;
          if (typeof prop === "function") {
            tmp16 = prop;
          }
          tmp14 = tmp16;
        }
      }
      if (typeof tmp14 === "function") {
        const call = tmp14.call;
        const iter = typeof call === "unknown" ? tmp14() : call(tmp2);
        let iter2 = iter.next();
        let num5 = 0;
        let num6 = 0;
        num7 = 0;
        if (!iter2.done) {
          while (true) {
            value = iter2.value;
            if (typeof value === "object") {
              if (null !== value) {
                if (null != value.key) {
                  let text6 = `${value2.key}`;
                  c0 = { "=": "=0", ":": "=2" };
                  let text7 = `$${`${value2.key}`.replace(/[=:]/g, (arg0) => _null[arg0])}`;
                  num5 = num5 + 1;
                  num6 = num6 + tmp26(value, items, arg2, str5 + `$${`${value2.key}`.replace(/[=:]/g, (arg0) => _null[arg0])}`, fn);
                  let iter3 = iter.next();
                  iter2 = iter3;
                  num7 = num6;
                  if (iter3.done) {
                    break;
                  }
                }
              }
            }
            text7 = num5.toString(36);
          }
        }
      } else {
        num7 = 0;
        if (typeof element === "object") {
          if (typeof tmp2.then === "function") {
            c0 = tmp2;
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
                tmp2.then((value) => {
                  if ("pending" === _null.status) {
                    _null.status = "fulfilled";
                    _null.value = value;
                  }
                }, (reason) => {
                  if ("pending" === _null.status) {
                    _null.status = "rejected";
                    _null.reason = reason;
                  }
                });
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
            if ("[object Object]" === StringResult) {
              const _Object = Object;
              const keys = Object.keys(tmp2);
              StringResult = `${"object with keys {" + obj.join(", ")}}`;
            }
            throw Error("Objects are not valid as a React child (found: " + StringResult + "). If you meant to render a collection of children, use an array instead.");
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
    _resultResult.then((_result) => {
      let tmp2 = 0 !== _status._status;
      if (tmp2) {
        tmp2 = -1 !== _status._status;
      }
      if (!tmp2) {
        _status._status = 1;
        _status._result = _result;
      }
    }, (_result) => {
      let tmp2 = 0 !== _status._status;
      if (tmp2) {
        tmp2 = -1 !== _status._status;
      }
      if (!tmp2) {
        _status._status = 2;
        _status._result = _result;
      }
    });
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
const _typeof = Symbol.for("react.transitional.element");
let closure_1 = Symbol.for("react.portal");
const forResult = Symbol.for("react.fragment");
const forResult1 = Symbol.for("react.strict_mode");
const _typeof2 = Symbol.for("react.consumer");
const _typeof3 = Symbol.for("react.context");
const _typeof4 = Symbol.for("react.forward_ref");
const forResult2 = Symbol.for("react.profiler");
const _typeof5 = Symbol.for("react.memo");
const _typeof6 = Symbol.for("react.lazy");
let closure_8 = {
  isMounted() {
    return false;
  },
  enqueueForceUpdate() {

  },
  enqueueReplaceState() {

  },
  enqueueSetState() {

  }
};
const refs = {};
Component.prototype.isReactComponent = {};
ComponentDummy.prototype = Component.prototype;
const forResult3 = Symbol.for("react.suspense");
let obj = Object.create(ComponentDummy.prototype);
PureComponent.prototype = obj;
obj.constructor = PureComponent;
obj = assign(obj, Component.prototype);
obj.isPureReactComponent = true;
obj = { H: null, A: null, T: null, S: null };
const re15 = /\/+/g;
let closure_18 = typeof reportError === "function" ? reportError : ((message) => {
  if (typeof window === "object") {
    const _window3 = window;
    if (typeof window.ErrorEvent === "function") {
      const _window = window;
      if (typeof message === "object") {
        if (null !== message) {
          if (typeof message.message === "string") {
            const _String2 = String;
            let StringResult = String(message.message);
          }
          obj = { bubbles: true, cancelable: true, message: StringResult, error: message };
          tmp = new tmp("error", obj);
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
});
function isValidElement(icon) {
  let tmp = typeof icon === "object";
  if (typeof icon === "object") {
    tmp = null !== icon;
  }
  if (tmp) {
    tmp = icon.$$typeof === closure_0;
  }
  return tmp;
}
const merged = Object.assign({ c: null });
merged[0] = function c(arg0) {
  const H = obj.H;
  return H.useMemoCache(arg0);
};

export const Activity = Symbol.for("react.activity");
export const Children = {
  map: function mapChildren(element, arg1, arg2) {
    closure_0 = arg1;
    closure_1 = arg2;
    if (null == element) {
      return element;
    } else {
      const items = [];
      c2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        const call = f68991.call;
        closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f68991(arg0, +closure_2) : call(closure_1_1, arg0, +closure_2);
      });
      return items;
    }
  },
  forEach(element, arg1, arg2) {
    const f68989 = function() {
      const self = this;
      const apply = f68989.apply;
      if (typeof apply === "unknown") {
        HermesBuiltin.applyArguments(self);
      } else {
        apply(self, arguments);
      }
    };
    closure_1 = arg2;
    if (null != element) {
      c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        const call = f68991.call;
        closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f68991(arg0, +closure_2) : call(closure_1_1, arg0, +closure_2);
      });
    }
  },
  count(element) {
    closure_0 = () => {
      closure_0 = closure_0 + 1;
    };
    if (null != element) {
      c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        const call = f68991.call;
        closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f68991(arg0, +closure_2) : call(closure_1_1, arg0, +closure_2);
      });
    }
    return closure_0;
  },
  toArray(element) {
    const f68991 = (arg0) => arg0;
    let items1 = element;
    if (null != element) {
      const items = [];
      closure_2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        const call = f68991.call;
        closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f68991(arg0, +closure_2) : call(closure_1_1, arg0, +closure_2);
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
      tmp = children.$$typeof === closure_0;
    }
    if (tmp) {
      return children;
    } else {
      const _Error = Error;
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }
};
export { Component };
export const Fragment = forResult;
export const Profiler = forResult2;
export { PureComponent };
export const StrictMode = forResult1;
export const Suspense = forResult3;
export const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = obj;
export const __COMPILER_RUNTIME = merged;
export (arg0) => {
  closure_0 = arg0;
  return () => {
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  };
}
export () => null
export const cloneElement = (onlyResult, key, children) => {
  if (null == onlyResult) {
    const _Error = Error;
    throw Error("The argument must be a React element, but you passed " + onlyResult + ".");
  } else {
    const tmp18 = assign({}, onlyResult.props);
    key = onlyResult.key;
    let tmp3 = key;
    if (null != key) {
      if (undefined !== key.key) {
        key = `${key.key}`;
      }
      tmp3 = key;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = key;
        while (keys[tmp] !== undefined) {
          let call = hasOwnProperty.call;
          let tmp6 = typeof call === "unknown" ? hasOwnProperty(tmp5) : call(key, tmp5);
          let tmp7 = !tmp6;
          if (tmp6) {
            tmp7 = "key" === tmp5;
          }
          if (!tmp7) {
            tmp7 = "__self" === tmp5;
          }
          if (!tmp7) {
            tmp7 = "__source" === tmp5;
          }
          if (!tmp7) {
            let tmp8 = "ref" === tmp5 && undefined === key.ref;
            tmp7 = tmp8;
          }
          if (tmp7) {
            continue;
          } else {
            tmp18[tmp5] = key[tmp5];
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
    const element = { $$typeof: _typeof, type: onlyResult.type, key: tmp3, ref: null, props: null };
    let tmp14 = null;
    if (undefined !== tmp18.ref) {
      tmp14 = ref;
    }
    element.ref = tmp14;
    element.props = tmp18;
    return element;
  }
};
export const createContext = (fakeSharedValue) => {
  Consumer = { $$typeof: _typeof3, _currentValue: fakeSharedValue, _currentValue2: fakeSharedValue, _threadCount: 0, Provider: Consumer, Consumer: null };
  Consumer = { $$typeof: _typeof2, _context: Consumer };
  Consumer.Consumer = Consumer;
  return Consumer;
};
export const createElement = (div, merged, element) => {
  const props = {};
  let tmp2 = null;
  if (null != merged) {
    let text = null;
    if (undefined !== merged.key) {
      text = `${merged.key}`;
    }
    tmp2 = text;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = text;
      while (keys[tmp] !== undefined) {
        let call = hasOwnProperty.call;
        let tmp7 = (typeof call === "unknown" ? hasOwnProperty(tmp6) : call(merged, tmp6)) && "key" !== tmp6 && "__self" !== tmp6 && "__source" !== tmp6;
        if (!tmp7) {
          continue;
        } else {
          props[tmp6] = merged[tmp6];
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
  if (div) {
    if (div.defaultProps) {
      const defaultProps = div.defaultProps;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[1] !== undefined) {
          if (undefined !== props[tmp14]) {
            continue;
          } else {
            props[tmp14] = defaultProps[tmp14];
            continue;
          }
          continue;
        }
      }
    }
  }
  element = { $$typeof: _typeof, type: div, key: tmp2, ref: null, props: null };
  let tmp15 = null;
  if (undefined !== props.ref) {
    tmp15 = ref;
  }
  element.ref = tmp15;
  element.props = props;
  return element;
};
export () => ({ current: null })
export (render) => ({ $$typeof: _typeof4, render })
export { isValidElement };
export (_result) => {
  let _payload = { $$typeof: _typeof6, _payload: null, _init: lazyInitializer };
  _payload = { _status: -1, _result };
  _payload._payload = _payload;
  return _payload;
}
export (noop, arg1) => {
  obj = { $$typeof: _typeof5, type: noop, compare: null };
  let tmp = null;
  if (undefined !== arg1) {
    tmp = arg1;
  }
  obj.compare = tmp;
  return obj;
}
export const startTransition = (fn) => {
  const T = {};
  T.T = T;
  try {
    const promise = fn();
    const S = tmp4.S;
    if (null !== S) {
      tmp6(T, promise);
    }
    let tmp12 = typeof promise === "object";
    if (typeof promise === "object") {
      tmp12 = null !== promise;
    }
    if (tmp12) {
      tmp12 = typeof promise.then === "function";
    }
    if (tmp12) {
      promise.then(noop, closure_18);
    }
    let tmp19 = null !== T;
    if (tmp19) {
      tmp19 = null !== T.types;
    }
    if (tmp19) {
      T.types = T.types;
    }
    tmp4.T = T;
  } catch (tmp20) {
    let tmp22 = null !== tmp;
    if (tmp22) {
      tmp22 = null !== tmp3.types;
    }
    if (tmp22) {
      tmp.types = tmp3.types;
    }
    tmp2.T = tmp;
    throw tmp20;
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
export const useContext = (arg0) => {
  const H = obj.H;
  return H.useContext(arg0);
};
export () => {

}
export const useDeferredValue = (arg0, arg1) => {
  const H = obj.H;
  return H.useDeferredValue(arg0, arg1);
};
export const useEffect = (arg0, items) => {
  const H = obj.H;
  return H.useEffect(arg0, items);
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