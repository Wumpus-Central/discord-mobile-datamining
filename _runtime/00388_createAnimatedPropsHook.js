// === Module 388: createAnimatedPropsHook ===

// Module 388 (createAnimatedPropsHook)
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import flushValueDefault from "flushValue" /* 356 */;
import _modDef380 from "module_380" /* 380 */;
import _mod390 from "module_390" /* 390 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_0, closure_2, importAll;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function addListenersToPropsValue(propValue, arr) {
  function addAnimatedValuesListenersToProps(propValue, arr) {
    for (const key10005 in propValue) {
      let tmp3 = addListenersToPropsValue(propValue[key10005], arr);
      continue;
    }
  }
  if (propValue instanceof flushValueDefault) {
    const obj = {
      propValue,
      listenerId: propValue.addListener(() => {

        })
    };
    arr = arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(propValue)) {
      let tmp3 = propValue;
      const tmp4 = propValue[Symbol.iterator]();
      while (tmp4 !== undefined) {
        let tmp9 = addListenersToPropsValue(tmp6, arr);
        continue;
      }
    } else {
      const _Object = Object;
      if (propValue instanceof Object) {
        addAnimatedValuesListenersToProps(propValue, arr);
      }
    }
  }
}
({ useCallback: hasOwnProperty, useContext: metroRequire, useEffect: metroImportDefault, useInsertionEffect: metroImportAll, useReducer: c9, useRef: c10 } = react);

export default function createAnimatedPropsHook(arg0) {
  _require = arg0;
  let obj = require("module_389");
  let closure_1 = obj.createAnimatedPropsMemoHook(arg0);
  let obj2 = javaScriptFlagGetterAll;
  importAll = obj2.shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn2) {
    closure_0 = fn2;
    closure_1 = _slicedToArray(closure_1_9((arg0) => arg0 + 1, 0), 2)[1];
    closure_2 = closure_1_10(null);
    let closure_3 = closure_1_10(null);
    let closure_4 = closure_1_6(closure_0(dependencyMap[4]).RootTagContext);
    let obj = closure_1(() => {
      let ref;
      const tmp = new _modDef380(fn2, () => {
        const current = ref.current;
        let currentResult;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      }, fn2, closure_4);
      return tmp;
    }, fn2);
    let tmp = closure_1_7(() => {
      if (!closure_1(dependencyMap[6]).shouldSignalBatch) {
        const API = closure_1(dependencyMap[6]).API;
        API.flushQueue();
      }
      closure_0 = null;
      if (obj.__isNative) {
        const nativeEventEmitter = closure_1(dependencyMap[6]).nativeEventEmitter;
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
    let tmp2 = closure_1_8(() => {
      closure_1.current = true;
      obj.__attach();
      return () => {
        let ref;
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
    const tmp3 = closure_1_5((instance) => {
      let items;
      let tmp5;
      function getEventTarget(getScrollableNode) {
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
      }
      obj.setNativeView(instance);
      items.current = () => {
        const obj2 = _mod390;
        let isPublicInstanceResult = obj2.isPublicInstance(instance);
        if (!isPublicInstanceResult) {
          let nativeScrollRef;
          const isPublicInstance = _mod390.isPublicInstance;
          _mod390;
          if (instance != null) {
            const getNativeScrollRef = instance.getNativeScrollRef;
            if (getNativeScrollRef != null) {
              nativeScrollRef = getNativeScrollRef();
            }
          }
          isPublicInstanceResult = isPublicInstance(nativeScrollRef);
        }
        if (!isPublicInstanceResult) {
          let nativeScrollRef2;
          const isPublicInstance2 = _mod390.isPublicInstance;
          _mod390;
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
          isPublicInstanceResult = isPublicInstance2(nativeScrollRef2);
        }
        if (instance.__isNative) {
          const obj4 = javaScriptFlagGetterAll;
          if (isPublicInstanceResult) {
            isPublicInstanceResult = !obj4.cxxNativeAnimatedEnabled();
          }
          if (isPublicInstanceResult) {
            closure_1();
          }
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
      let tmp2 = getEventTarget(instance);
      closure_1 = tmp2;
      items = [];
      const result = obj.__getNativeAnimatedEventTuples();
      const ref = result;
      const tmp4 = result[Symbol.iterator]();
      while (tmp4 !== undefined) {
        let tmp7 = _slicedToArray(tmp5, 2);
        obj = tmp7[1];
        let __attachResult = obj.__attach(tmp2, tmp7[0]);
        let tmp10 = addListenersToPropsValue(obj, items);
        continue;
      }
      return () => {
        closure_2.current = null;
        const tmp2 = result[Symbol.iterator]();
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
      };
    }, items1);
    let obj2 = { collapsable: false };
    let tmp4 = closure_1(dependencyMap[7])(tmp3);
    const merged = Object.assign(obj.__getValueWithStaticProps(fn2));
    const items2 = [obj2, tmp4];
    return items2;
  };
};