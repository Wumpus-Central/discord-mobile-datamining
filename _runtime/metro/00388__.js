// === Module 388: ? ===

// Module 388
import _modAll27 from "module_27" /* 27 */;
import _modDef356 from "module_356" /* 356 */;
import _modDef380 from "module_380" /* 380 */;
import _mod390 from "module_390" /* 390 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function addListenersToPropsValue(propValue, arr) {
  if (propValue instanceof _modDef356) {
    const obj = {
      propValue,
      listenerId: propValue.addListener(() => {

        })
    };
    arr = arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(propValue)) {
      const tmp4 = propValue[Symbol.iterator]();
      while (tmp4 !== undefined) {
        let tmp9 = addListenersToPropsValue(tmp6, arr);
        continue;
      }
    } else {
      const _Object = Object;
      if (propValue instanceof Object) {
        (function addAnimatedValuesListenersToProps(propValue, arr) {
          for (const key10005 in arg0) {
            let tmp3 = addListenersToPropsValue(arg0[key10005], arg1);
            continue;
          }
        })(propValue, arr);
      }
    }
  }
}
const noop = fn(19);
({ useCallback: hasOwnProperty, useContext: metroRequire, useEffect: closure_7, useInsertionEffect: closure_8, useReducer: closure_9, useRef: c10 } = noop);

export default function createAnimatedPropsHook(arg0) {
  _require = arg0;
  closure_1 = require("module_389").createAnimatedPropsMemoHook(arg0);
  let obj = require("module_389");
  importAll = _modAll27.shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn) {
    closure_1 = _slicedToArray(closure_1_9((arg0) => arg0 + 1, 0), 2)[1];
    closure_2 = closure_1_10(null);
    closure_3 = closure_1_10(null);
    closure_4 = closure_1_6(closure_0(253).RootTagContext);
    let obj = closure_1(() => new _modDef380(obj, () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }, closure_0, closure_4), fn);
    closure_1_7(() => {
      if (!closure_1(357).shouldSignalBatch) {
        const API = closure_1(357).API;
        API.flushQueue();
      }
      closure_0 = null;
      if (obj.__isNative) {
        const nativeEventEmitter = closure_1(357).nativeEventEmitter;
        closure_0 = nativeEventEmitter.addListener("onUserDrivenAnimationEnded", (arg0) => {
          obj.update();
        });
      }
      return () => {
        if (closure_0 != null) {
          closure_0.remove();
        }
      };
    });
    closure_1 = closure_1_10(false);
    let items = [obj];
    closure_1_8(() => {
      closure_1.current = true;
      obj.__attach();
      return () => {
        closure_1_1.current = false;
        queueMicrotask(() => {
          if (ref.current) {
            const result = closure_1_0.__restoreDefaultValues();
          }
          closure_1_0.__detach();
        });
      };
    }, items);
    const items1 = [obj];
    obj = {};
    const tmp3 = closure_1_5((instance) => {
      obj.setNativeView(instance);
      items.current = () => {
        let isPublicInstanceResult = _mod390.isPublicInstance(instance);
        if (!isPublicInstanceResult) {
          let tmpResult = _mod390;
          let nativeScrollRef;
          if (instance != null) {
            const getNativeScrollRef = instance.getNativeScrollRef;
            if (getNativeScrollRef != null) {
              nativeScrollRef = getNativeScrollRef();
            }
          }
          isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
        }
        if (!isPublicInstanceResult) {
          tmpResult = _mod390;
          let nativeScrollRef2;
          if (instance != null) {
            const getScrollResponder = instance.getScrollResponder;
            if (getScrollResponder != null) {
              const scrollResponder = getScrollResponder();
              if (scrollResponder != null) {
                const getNativeScrollRef2 = scrollResponder.getNativeScrollRef;
                if (getNativeScrollRef2 != null) {
                  nativeScrollRef2 = getNativeScrollRef2();
                }
              }
            }
          }
          isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef2);
        }
        if (instance.__isNative) {
          if (isPublicInstanceResult) {
            isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
          }
          if (isPublicInstanceResult) {
            closure_1();
          }
          obj6 = _modAll27;
        } else {
          if (typeof instance === "object") {
            let setNativeProps;
            if (instance != null) {
              setNativeProps = instance.setNativeProps;
            }
            if (typeof setNativeProps === "function") {
              if (isPublicInstanceResult) {
                if (closure_2) {
                  instance.setNativeProps(instance.__getAnimatedValue());
                  if (null != ref.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(ref.current);
                  }
                  const _setTimeout = setTimeout;
                  ref.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_1();
                  }, 48);
                } else {
                  return closure_1();
                }
              } else {
                return instance.setNativeProps(instance.__getAnimatedValue());
              }
            }
          }
          return closure_1();
        }
      };
      let tmp2 = (function getEventTarget(getScrollableNode) {
        let scrollableNode = getScrollableNode;
        if (typeof getScrollableNode === "object") {
          getScrollableNode = undefined;
          if (getScrollableNode != null) {
            getScrollableNode = getScrollableNode.getScrollableNode;
          }
          scrollableNode = getScrollableNode;
          if (typeof getScrollableNode === "function") {
            scrollableNode = getScrollableNode.getScrollableNode();
          }
        }
        return scrollableNode;
      })(instance);
      closure_1 = tmp2;
      items = [];
      const result = obj.__getNativeAnimatedEventTuples();
      while (tmp4 !== undefined) {
        let tmp7 = _slicedToArray(tmp5, 2);
        obj = tmp7[1];
        let __attachResult = obj.__attach(tmp2, tmp7[0]);
        let tmp10 = addListenersToPropsValue(obj, items);
        continue;
      }
      return () => {
        closure_2.current = null;
        while (tmp2 !== undefined) {
          let tmp5 = _slicedToArray(tmp3, 2);
          obj = tmp5[1];
          let __detachResult = obj.__detach(closure_1, tmp5[0]);
          continue;
        }
        for (const item10022 of items) {
          let propValue = item10022.propValue;
          let removeListenerResult = propValue.removeListener(item10022.listenerId);
          continue;
        }
        tmp2 = result[Symbol.iterator]();
      };
    }, items1);
    const merged = Object.assign(obj.__getValueWithStaticProps(fn));
    obj.collapsable = false;
    const items2 = [
      obj,
      closure_1(335)(closure_1_5((instance) => {
        obj.setNativeView(instance);
        items.current = () => {
          let isPublicInstanceResult = _mod390.isPublicInstance(instance);
          if (!isPublicInstanceResult) {
            let tmpResult = _mod390;
            let nativeScrollRef;
            if (instance != null) {
              const getNativeScrollRef = instance.getNativeScrollRef;
              if (getNativeScrollRef != null) {
                nativeScrollRef = getNativeScrollRef();
              }
            }
            isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
          }
          if (!isPublicInstanceResult) {
            tmpResult = _mod390;
            let nativeScrollRef2;
            if (instance != null) {
              const getScrollResponder = instance.getScrollResponder;
              if (getScrollResponder != null) {
                const scrollResponder = getScrollResponder();
                if (scrollResponder != null) {
                  const getNativeScrollRef2 = scrollResponder.getNativeScrollRef;
                  if (getNativeScrollRef2 != null) {
                    nativeScrollRef2 = getNativeScrollRef2();
                  }
                }
              }
            }
            isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef2);
          }
          if (instance.__isNative) {
            if (isPublicInstanceResult) {
              isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
            }
            if (isPublicInstanceResult) {
              closure_1();
            }
            obj6 = _modAll27;
          } else {
            if (typeof instance === "object") {
              let setNativeProps;
              if (instance != null) {
                setNativeProps = instance.setNativeProps;
              }
              if (typeof setNativeProps === "function") {
                if (isPublicInstanceResult) {
                  if (closure_2) {
                    instance.setNativeProps(instance.__getAnimatedValue());
                    if (null != ref.current) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(ref.current);
                    }
                    const _setTimeout = setTimeout;
                    ref.current = setTimeout(() => {
                      ref.current = null;
                      closure_1_1();
                    }, 48);
                  } else {
                    return closure_1();
                  }
                } else {
                  return instance.setNativeProps(instance.__getAnimatedValue());
                }
              }
            }
            return closure_1();
          }
        };
        let tmp2 = (function getEventTarget(getScrollableNode) {
          let scrollableNode = getScrollableNode;
          if (typeof getScrollableNode === "object") {
            getScrollableNode = undefined;
            if (getScrollableNode != null) {
              getScrollableNode = getScrollableNode.getScrollableNode;
            }
            scrollableNode = getScrollableNode;
            if (typeof getScrollableNode === "function") {
              scrollableNode = getScrollableNode.getScrollableNode();
            }
          }
          return scrollableNode;
        })(instance);
        closure_1 = tmp2;
        items = [];
        const result = obj.__getNativeAnimatedEventTuples();
        while (tmp4 !== undefined) {
          let tmp7 = _slicedToArray(tmp5, 2);
          obj = tmp7[1];
          let __attachResult = obj.__attach(tmp2, tmp7[0]);
          let tmp10 = addListenersToPropsValue(obj, items);
          continue;
        }
        return () => {
          closure_2.current = null;
          while (tmp2 !== undefined) {
            let tmp5 = _slicedToArray(tmp3, 2);
            obj = tmp5[1];
            let __detachResult = obj.__detach(closure_1, tmp5[0]);
            continue;
          }
          for (const item10022 of items) {
            let propValue = item10022.propValue;
            let removeListenerResult = propValue.removeListener(item10022.listenerId);
            continue;
          }
          tmp2 = result[Symbol.iterator]();
        };
      }, items1))
    ];
    return items2;
  };
};