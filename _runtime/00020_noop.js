class Component {
  constructor(arg0, arg1, arg2) {
    obj = { props: arg0, context: arg1, refs: Object };
    tmp = arg2;
    if (!arg2) {
      tmp = iterator;
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
    obj = { props: arg0, context: arg1, refs: Object };
    tmp = arg2;
    if (!arg2) {
      tmp = iterator;
    }
    obj.updater = tmp;
    return;
  }
}
function noop() {

}
function mapIntoArray(element, items, arg2, arg3, arg4) {
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
            if (closure_0 !== $$typeof) {
              flag = true;
              if (closure_1 !== $$typeof) {
                flag = false;
                if (closure_6 === $$typeof) {
                  return mapIntoArray(tmp2._init(tmp2._payload), items, arg2, arg3, arg4);
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
    element = arg4(tmp2);
    if ("" !== arg3) {
      if (isArray(element)) {
        mapIntoArray(element, items, `${arg3.replace(closure_15, "$&/")}/`, "", (arg0) => arg0);
      } else if (null != element) {
        let tmp50 = typeof element === "object";
        if (typeof element === "object") {
          tmp50 = null !== element;
        }
        if (tmp50) {
          tmp50 = element.$$typeof === closure_0;
        }
        let tmp51 = element;
        if (tmp50) {
          let str18 = "";
          if (null != element.key) {
            if (!tmp2) {
              const text = `${element.key}`;
              str18 = `${`${element.key}`.replace(closure_15, "$&/")}/`;
            } else {
              str18 = "";
            }
          }
          const _HermesInternal = HermesInternal;
          const props = element.props;
          const obj = { $$typeof: null, type: null, key: null, ref: null, props: null };
          obj[0] = closure_0;
          obj[1] = element.type;
          obj[2] = arg2 + str18 + arg3;
          let tmp56 = null;
          if (undefined !== props.ref) {
            tmp56 = ref;
          }
          obj[3] = tmp56;
          obj[4] = props;
          tmp51 = obj;
        }
        items.push(tmp51);
      }
      return 1;
    } else {
      if (typeof tmp2 === "object") {
        if (null !== tmp2) {
          const text1 = `.${tmp45}`;
        }
        const text2 = `${tmp2.key}`;
        closure_0 = { "=": "=0", ":": "=2" };
        let text3 = `$${`${tmp2.key}`.replace(/[=:]/g, (arg0) => tmp2[arg0])}`;
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
          let tmp35 = tmp2[num12];
          let tmp36 = num12;
          let tmp37 = num13;
          if (typeof tmp35 === "object") {
            if (null !== tmp35) {
              if (null != tmp35.key) {
                let text4 = `${tmp35.key}`;
                closure_0 = { "=": "=0", ":": "=2" };
                let text5 = `$${`${tmp35.key}`.replace(/[=:]/g, (arg0) => tmp2[arg0])}`;
                let num14 = 0;
                let tmp40 = tmp35;
                let tmp41 = items;
                let tmp42 = arg2;
                let tmp43 = arg4;
                num13 = num13 + tmp34(tmp35, items, arg2, str5 + `$${`${tmp35.key}`.replace(/[=:]/g, (arg0) => tmp2[arg0])}`, arg4);
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
          iterable = iterator;
          if (iterator) {
            iterable = tmp2[iterator];
          }
          if (!iterable) {
            iterable = tmp2[Symbol.iterator];
          }
          let tmp15 = null;
          if (typeof iterable === "function") {
            tmp15 = iterable;
          }
          tmp14 = tmp15;
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
            let value = iter2.value;
            let tmp26 = num5;
            let tmp27 = num6;
            if (typeof value === "object") {
              if (null !== value) {
                if (null != value.key) {
                  let text6 = `${value2.key}`;
                  closure_0 = { "=": "=0", ":": "=2" };
                  let text7 = `$${`${value2.key}`.replace(/[=:]/g, (arg0) => tmp2[arg0])}`;
                  num5 = num5 + 1;
                  let num8 = 0;
                  let tmp30 = value;
                  let tmp31 = items;
                  let tmp32 = arg2;
                  let tmp33 = arg4;
                  num6 = num6 + tmp25(value, items, arg2, str5 + `$${`${value2.key}`.replace(/[=:]/g, (arg0) => tmp2[arg0])}`, arg4);
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
            closure_0 = tmp2;
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
                  if ("pending" === tmp2.status) {
                    tmp.status = "fulfilled";
                    tmp.value = value;
                  }
                }, (reason) => {
                  if ("pending" === tmp2.status) {
                    tmp.status = "rejected";
                    tmp.reason = reason;
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
            return mapIntoArray(value, items, arg2, arg3, arg4);
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
  let closure_0 = _status;
  if (-1 === _status._status) {
    const _resultResult = _status._result();
    _resultResult.then((_result) => {
      let tmp2 = 0 !== _status._status;
      if (tmp2) {
        tmp2 = -1 !== tmp._status;
      }
      if (!tmp2) {
        tmp._status = 1;
        tmp._result = _result;
      }
    }, (_result) => {
      let tmp2 = 0 !== _status._status;
      if (tmp2) {
        tmp2 = -1 !== tmp._status;
      }
      if (!tmp2) {
        tmp._status = 2;
        tmp._result = _result;
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
let closure_0 = Symbol.for("react.transitional.element");
let closure_1 = Symbol.for("react.portal");
const forResult = Symbol.for("react.fragment");
const forResult1 = Symbol.for("react.strict_mode");
let closure_2 = Symbol.for("react.consumer");
let closure_3 = Symbol.for("react.context");
let closure_4 = Symbol.for("react.forward_ref");
const forResult2 = Symbol.for("react.profiler");
let closure_5 = Symbol.for("react.memo");
let closure_6 = Symbol.for("react.lazy");
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
let closure_10 = {};
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
let closure_18 = typeof reportError === "function" ? reportError : ((obj) => {
  if (typeof window === "object") {
    const _window3 = window;
    if (typeof window.ErrorEvent === "function") {
      const _window = window;
      if (typeof obj === "object") {
        if (null !== obj) {
          if (typeof obj.message === "string") {
            const _String2 = String;
            let StringResult = String(obj.message);
          }
          obj = { bubbles: true, cancelable: true, message: null, error: null };
          obj[2] = StringResult;
          obj[3] = obj;
          tmp = new tmp("error", obj);
          const _window2 = window;
        }
      }
      const _String = String;
      StringResult = String(obj);
    }
    const _console = console;
    console.error(obj);
  }
  if (typeof process === "object") {
    const _process = process;
    if (typeof process.emit === "function") {
      const _process2 = process;
      process.emit("uncaughtException", obj);
    }
  }
});
arg5.Activity = Symbol.for("react.activity");
arg5.Children = {
  map: function mapChildren(element) {
    let closure_0 = arg1;
    let closure_1 = arg2;
    if (null == element) {
      return element;
    } else {
      const items = [];
      let c2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        const call = f65450.call;
        let closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f65450(arg0, +closure_2) : call(closure_1, arg0, +closure_2);
      });
      return items;
    }
  },
  forEach(element) {
    const f65448 = function() {
      const self = this;
      const apply = f65448.apply;
      if (typeof apply === "unknown") {
        HermesBuiltin.applyArguments(self);
      } else {
        apply(self, arguments);
      }
    };
    let closure_1 = arg2;
    if (null != element) {
      let c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        const call = f65450.call;
        let closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f65450(arg0, +closure_2) : call(closure_1, arg0, +closure_2);
      });
    }
  },
  count(element) {
    const f65449 = () => {
      closure_0 = closure_0 + 1;
    };
    if (null != element) {
      let c2 = 0;
      mapIntoArray(element, [], "", "", (arg0) => {
        const call = f65450.call;
        let closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f65450(arg0, +closure_2) : call(closure_1, arg0, +closure_2);
      });
    }
    return f65449;
  },
  toArray(element) {
    const f65450 = (arg0) => arg0;
    let items1 = element;
    if (null != element) {
      const items = [];
      let c2 = 0;
      mapIntoArray(element, items, "", "", (arg0) => {
        const call = f65450.call;
        let closure_2 = tmp3 + 1;
        return typeof call === "unknown" ? f65450(arg0, +closure_2) : call(closure_1, arg0, +closure_2);
      });
      items1 = items;
    }
    if (!items1) {
      items1 = [];
    }
    return items1;
  },
  only(children, optional, forbidden, ignore) {
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
arg5.Component = Component;
arg5.Fragment = forResult;
arg5.Profiler = forResult2;
arg5.PureComponent = PureComponent;
arg5.StrictMode = forResult1;
arg5.Suspense = forResult3;
arg5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = obj;
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
const obj2 = Object.create(null);
obj2[0] = function c(arg0) {
  const H = obj.H;
  return H.useMemoCache(arg0);
};
arg5.__COMPILER_RUNTIME = obj2;
arg5.cache = (arg0) => {
  let closure_0 = arg0;
  return () => {
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  };
};
arg5.cacheSignal = () => null;
arg5.cloneElement = (props, key, children) => {
  if (null == props) {
    const _Error = Error;
    throw Error("The argument must be a React element, but you passed " + props + ".");
  } else {
    const tmp18 = assign({}, props.props);
    key = props.key;
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
          let tmp19 = tmp5;
          let tmp20 = hasOwnProperty;
          let call = hasOwnProperty.call;
          let tmp6 = typeof call === "unknown" ? tmp20(tmp5) : call(key, tmp5);
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
    const obj = { $$typeof: null, type: null, key: null, ref: null, props: null };
    obj[0] = closure_0;
    obj[1] = props.type;
    obj[2] = tmp3;
    let tmp14 = null;
    if (undefined !== tmp18.ref) {
      tmp14 = ref;
    }
    obj[3] = tmp14;
    obj[4] = tmp18;
    return obj;
  }
};
arg5.createContext = (_currentValue) => {
  let obj = { $$typeof: closure_3, _currentValue, _currentValue2: _currentValue, _threadCount: 0, Provider: null, Consumer: null };
  obj.Provider = obj;
  obj = { $$typeof: closure_2, _context: obj };
  obj.Consumer = obj;
  return obj;
};
arg5.createElement = (defaultProps, key, children) => {
  let obj = {};
  let tmp2 = null;
  if (null != key) {
    let text = null;
    if (undefined !== key.key) {
      text = `${key.key}`;
    }
    tmp2 = text;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = text;
      while (keys[tmp] !== undefined) {
        let tmp16 = tmp6;
        let tmp17 = hasOwnProperty;
        let call = hasOwnProperty.call;
        let tmp7 = (typeof call === "unknown" ? tmp17(tmp6) : call(key, tmp6)) && "key" !== tmp6 && "__self" !== tmp6 && "__source" !== tmp6;
        if (!tmp7) {
          continue;
        } else {
          obj[tmp6] = key[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  const diff = arguments.length - 2;
  if (1 === diff) {
    obj.children = children;
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
    obj.children = ArrayResult;
  }
  if (defaultProps) {
    if (defaultProps.defaultProps) {
      defaultProps = defaultProps.defaultProps;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[1] !== undefined) {
          let tmp18 = tmp14;
          if (undefined !== obj[tmp14]) {
            continue;
          } else {
            obj[tmp14] = defaultProps[tmp14];
            continue;
          }
          continue;
        }
      }
    }
  }
  obj = { $$typeof: closure_0, type: defaultProps, key: tmp2, ref: null, props: null };
  let tmp15 = null;
  if (undefined !== obj.ref) {
    tmp15 = ref;
  }
  obj[3] = tmp15;
  obj[4] = obj;
  return obj;
};
arg5.createRef = () => ({ current: null });
arg5.forwardRef = (render) => ({ $$typeof: closure_4, render });
arg5.isValidElement = isValidElement;
arg5.lazy = (_result) => {
  obj = { $$typeof: closure_6, _payload: obj, _init: lazyInitializer };
  obj = { _status: -1, _result };
  return obj;
};
arg5.memo = (type) => {
  const obj = { $$typeof: closure_5, type, compare: null };
  let tmp = null;
  if (undefined !== arg1) {
    tmp = arg1;
  }
  obj[2] = tmp;
  return obj;
};
arg5.startTransition = (arg0) => {
  const T = obj.T;
  obj = {};
  obj.T = obj;
  try {
    const promise = arg0();
    const S = tmp4.S;
    if (null !== S) {
      tmp6(obj, promise);
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
      tmp19 = null !== obj.types;
    }
    if (tmp19) {
      T.types = obj.types;
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
arg5.unstable_useCacheRefresh = () => {
  const H = obj.H;
  return H.useCacheRefresh();
};
arg5.use = (arg0) => {
  const H = obj.H;
  return H.use(arg0);
};
arg5.useActionState = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useActionState(arg0, arg1, arg2);
};
arg5.useCallback = (fn, items) => {
  const H = obj.H;
  return H.useCallback(fn, items);
};
arg5.useContext = (context) => {
  const H = obj.H;
  return H.useContext(context);
};
arg5.useDebugValue = () => {

};
arg5.useDeferredValue = (arg0, arg1) => {
  const H = obj.H;
  return H.useDeferredValue(arg0, arg1);
};
arg5.useEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useEffect(arg0, arg1);
};
arg5.useEffectEvent = (impl) => {
  const H = obj.H;
  return H.useEffectEvent(impl);
};
arg5.useId = () => {
  const H = obj.H;
  return H.useId();
};
arg5.useImperativeHandle = (ref, chatInputRefObjectCallback, items) => {
  const H = obj.H;
  return H.useImperativeHandle(ref, chatInputRefObjectCallback, items);
};
arg5.useInsertionEffect = (create, items) => {
  const H = obj.H;
  return H.useInsertionEffect(create, items);
};
arg5.useLayoutEffect = (create, items) => {
  const H = obj.H;
  return H.useLayoutEffect(create, items);
};
arg5.useMemo = (getNextRenewalDateLabel, items) => {
  const H = obj.H;
  return H.useMemo(getNextRenewalDateLabel, items);
};
arg5.useOptimistic = (arg0, arg1) => {
  const H = obj.H;
  return H.useOptimistic(arg0, arg1);
};
arg5.useReducer = (lastRenderedReducer) => {
  const H = obj.H;
  return H.useReducer(lastRenderedReducer, arg1, arg2);
};
arg5.useRef = (stateFromStores) => {
  const H = obj.H;
  return H.useRef(stateFromStores);
};
arg5.useState = (arg0) => {
  const H = obj.H;
  return H.useState(arg0);
};
arg5.useSyncExternalStore = (subscribe, get, get2) => {
  const H = obj.H;
  return H.useSyncExternalStore(subscribe, get, get2);
};
arg5.useTransition = () => {
  const H = obj.H;
  return H.useTransition();
};
arg5.version = "19.2.3";