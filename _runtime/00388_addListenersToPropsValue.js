// _runtime/00388_addListenersToPropsValue.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import _isNativeReflectConstructDefault from "00356__isNativeReflectConstruct.js";
import closure_4 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { createCompositeKeyForProps } from "00389_createCompositeKeyForProps.js";

const require = arg1;
function addListenersToPropsValue(addListener, arr) {
  if (addListener instanceof _isNativeReflectConstructDefault) {
    const obj = { propValue: null, listenerId: null };
    obj[0] = addListener;
    obj[1] = addListener.addListener(() => {

    });
    arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(addListener)) {
      const tmp4 = addListener[Symbol.iterator]();
      while (tmp4 !== undefined) {
        let tmp8 = addListenersToPropsValue;
        let tmp9 = addListenersToPropsValue(tmp6, arr);
        continue;
      }
    } else {
      const _Object = Object;
      if (addListener instanceof Object) {
        (function addAnimatedValuesListenersToProps(addListener, arr) {
          for (const key10005 in arg0) {
            let tmp = key10005;
            let tmp2 = callback;
            let tmp3 = callback(arg0[key10005], arg1);
            continue;
          }
        })(addListener, arr);
      }
    }
  }
}
({ useCallback: c5, useContext: closure_6, useEffect: error, useInsertionEffect: closure_8, useReducer: c9, useRef: c10 } = noop);

export default function createAnimatedPropsHook(arg0) {
  const _require = arg0;
  closure_1 = _createCompositeKeyForProps.createAnimatedPropsMemoHook(arg0);
  let obj = _createCompositeKeyForProps;
  importAll = javaScriptFlagGetterAll.shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn, items) {
    let obj = fn;
    let callback2 = closure_1_4(closure_1_9((arg0) => arg0 + 1, 0), 2)[1];
    closure_2 = closure_1_10(null);
    closure_3 = closure_1_10(null);
    closure_4 = closure_1_6(callback(closure_1_3[4]).RootTagContext);
    obj = callback2(() => new callback(closure_2_3[5])(obj, () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }, obj, closure_4), fn);
    closure_1_7(() => {
      if (!callback(closure_2_3[6]).shouldSignalBatch) {
        const API = tmp(tmp2[6]).API;
        API.flushQueue();
      }
      closure_0 = null;
      if (obj.__isNative) {
        const nativeEventEmitter = tmp(tmp2[6]).nativeEventEmitter;
        closure_0 = nativeEventEmitter.addListener("onUserDrivenAnimationEnded", (arg0) => {
          closure_5.update();
        });
      }
      return () => {
        if (closure_0 != null) {
          closure_0.remove();
        }
      };
    });
    callback2 = undefined;
    callback2 = closure_1_10(false);
    items = [obj];
    closure_1_8(() => {
      closure_1.current = true;
      obj.__attach();
      return () => {
        closure_1.current = false;
        queueMicrotask(() => {
          if (ref.current) {
            const result = closure_0.__restoreDefaultValues();
          }
          closure_0.__detach();
        });
      };
    }, items);
    const items1 = [obj];
    obj = {};
    const tmp3 = closure_1_5((arg0) => {
      closure_0 = arg0;
      obj.setNativeView(arg0);
      items.current = () => {
        let isPublicInstanceResult = callback(closure_3_3[9]).isPublicInstance(callback);
        if (!isPublicInstanceResult) {
          let tmpResult = tmp(tmp2[9]);
          let nativeScrollRef;
          if (obj != null) {
            const getNativeScrollRef = obj.getNativeScrollRef;
            if (getNativeScrollRef != null) {
              nativeScrollRef = getNativeScrollRef();
            }
          }
          isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
        }
        if (!isPublicInstanceResult) {
          tmpResult = tmp(tmp2[9]);
          let nativeScrollRef2;
          if (obj != null) {
            const getScrollResponder = obj.getScrollResponder;
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
        if (closure_1_5.__isNative) {
          if (isPublicInstanceResult) {
            isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
          }
          if (isPublicInstanceResult) {
            callback2();
          }
          obj6 = items(tmp2[3]);
        } else {
          if (typeof obj === "object") {
            let setNativeProps;
            if (obj != null) {
              setNativeProps = obj.setNativeProps;
            }
            if (typeof setNativeProps === "function") {
              if (isPublicInstanceResult) {
                if (items) {
                  obj.setNativeProps(obj5.__getAnimatedValue());
                  if (null != result.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(tmp13.current);
                  }
                  const _setTimeout = setTimeout;
                  result.current = setTimeout(() => {
                    closure_3.current = null;
                    callback();
                  }, 48);
                } else {
                  return callback2();
                }
              } else {
                return obj.setNativeProps(obj5.__getAnimatedValue());
              }
            }
          }
          return callback2();
        }
      };
      const tmp2 = (function getEventTarget(obj) {
        let scrollableNode = obj;
        if (typeof obj === "object") {
          let getScrollableNode;
          if (obj != null) {
            getScrollableNode = obj.getScrollableNode;
          }
          scrollableNode = obj;
          if (typeof getScrollableNode === "function") {
            scrollableNode = obj.getScrollableNode();
          }
        }
        return scrollableNode;
      })(arg0);
      closure_1 = tmp2;
      items = [];
      const result = obj.__getNativeAnimatedEventTuples();
      closure_3 = result;
      while (tmp4 !== undefined) {
        let tmp6 = closure_2_4;
        let tmp7 = closure_2_4(tmp5, 2);
        obj = tmp7[1];
        let __attachResult = obj.__attach(tmp2, tmp7[0]);
        let tmp9 = closure_2_11;
        let tmp10 = closure_2_11(obj, items);
        continue;
      }
      return () => {
        items.current = null;
        while (tmp2 !== undefined) {
          let tmp4 = closure_3_4;
          let tmp5 = closure_3_4(tmp3, 2);
          obj = tmp5[1];
          let tmp6 = closure_1;
          let __detachResult = obj.__detach(closure_1, tmp5[0]);
          continue;
        }
        for (const item10022 of items) {
          let propValue = item10022.propValue;
          let removeListenerResult = propValue.removeListener(item10022.listenerId);
          continue;
        }
      };
    }, items1);
    const merged = Object.assign(obj.__getValueWithStaticProps(fn));
    obj.collapsable = false;
    const items2 = [
      obj,
      callback2(closure_1_3[7])(closure_1_5((arg0) => {
        closure_0 = arg0;
        obj.setNativeView(arg0);
        items.current = () => {
          let isPublicInstanceResult = callback(closure_3_3[9]).isPublicInstance(callback);
          if (!isPublicInstanceResult) {
            let tmpResult = tmp(tmp2[9]);
            let nativeScrollRef;
            if (obj != null) {
              const getNativeScrollRef = obj.getNativeScrollRef;
              if (getNativeScrollRef != null) {
                nativeScrollRef = getNativeScrollRef();
              }
            }
            isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
          }
          if (!isPublicInstanceResult) {
            tmpResult = tmp(tmp2[9]);
            let nativeScrollRef2;
            if (obj != null) {
              const getScrollResponder = obj.getScrollResponder;
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
          if (closure_1_5.__isNative) {
            if (isPublicInstanceResult) {
              isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
            }
            if (isPublicInstanceResult) {
              callback2();
            }
            obj6 = items(tmp2[3]);
          } else {
            if (typeof obj === "object") {
              let setNativeProps;
              if (obj != null) {
                setNativeProps = obj.setNativeProps;
              }
              if (typeof setNativeProps === "function") {
                if (isPublicInstanceResult) {
                  if (items) {
                    obj.setNativeProps(obj5.__getAnimatedValue());
                    if (null != result.current) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(tmp13.current);
                    }
                    const _setTimeout = setTimeout;
                    result.current = setTimeout(() => {
                      closure_3.current = null;
                      callback();
                    }, 48);
                  } else {
                    return callback2();
                  }
                } else {
                  return obj.setNativeProps(obj5.__getAnimatedValue());
                }
              }
            }
            return callback2();
          }
        };
        const tmp2 = (function getEventTarget(obj) {
          let scrollableNode = obj;
          if (typeof obj === "object") {
            let getScrollableNode;
            if (obj != null) {
              getScrollableNode = obj.getScrollableNode;
            }
            scrollableNode = obj;
            if (typeof getScrollableNode === "function") {
              scrollableNode = obj.getScrollableNode();
            }
          }
          return scrollableNode;
        })(arg0);
        closure_1 = tmp2;
        items = [];
        const result = obj.__getNativeAnimatedEventTuples();
        closure_3 = result;
        while (tmp4 !== undefined) {
          let tmp6 = closure_2_4;
          let tmp7 = closure_2_4(tmp5, 2);
          obj = tmp7[1];
          let __attachResult = obj.__attach(tmp2, tmp7[0]);
          let tmp9 = closure_2_11;
          let tmp10 = closure_2_11(obj, items);
          continue;
        }
        return () => {
          items.current = null;
          while (tmp2 !== undefined) {
            let tmp4 = closure_3_4;
            let tmp5 = closure_3_4(tmp3, 2);
            obj = tmp5[1];
            let tmp6 = closure_1;
            let __detachResult = obj.__detach(closure_1, tmp5[0]);
            continue;
          }
          for (const item10022 of items) {
            let propValue = item10022.propValue;
            let removeListenerResult = propValue.removeListener(item10022.listenerId);
            continue;
          }
        };
      }, items1))
    ];
    return items2;
  };
};