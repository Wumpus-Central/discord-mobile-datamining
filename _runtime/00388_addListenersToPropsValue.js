// === Module 388: addListenersToPropsValue ===

// Module 388 (addListenersToPropsValue)
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 356 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
function addListenersToPropsValue(addListener, arr) {
  if (addListener instanceof _isNativeReflectConstructDefault) {
    const obj = { propValue: null, listenerId: null };
    obj[0] = addListener;
    obj[1] = addListener.addListener(() => {

    });
    arr = arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(addListener)) {
      const tmp4 = addListener[Symbol.iterator]();
      while (tmp4 !== undefined) {
        let tmp9 = addListenersToPropsValue(tmp6, arr);
        continue;
      }
    } else {
      const _Object = Object;
      if (addListener instanceof Object) {
        (function addAnimatedValuesListenersToProps(addListener, arr) {
          for (const key10005 in arg0) {
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
  closure_1 = _require(389).createAnimatedPropsMemoHook(arg0);
  let obj = _require(389);
  importAll = javaScriptFlagGetterAll.shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn, items) {
    let callback2 = closure_1_4(closure_1_9((arg0) => arg0 + 1, 0), 2)[1];
    closure_2 = closure_1_10(null);
    closure_3 = closure_1_10(null);
    closure_4 = closure_1_6(callback(dependencyMap[4]).RootTagContext);
    let obj = callback2(() => new callback(dependencyMap[5])(obj, () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }, obj, closure_4), fn);
    closure_1_7(() => {
      if (!callback(dependencyMap[6]).shouldSignalBatch) {
        const API = callback(dependencyMap[6]).API;
        API.flushQueue();
      }
      closure_0 = null;
      if (obj.__isNative) {
        const nativeEventEmitter = callback(dependencyMap[6]).nativeEventEmitter;
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
    const tmp3 = closure_1_5((getScrollableNode) => {
      closure_0 = getScrollableNode;
      obj.setNativeView(getScrollableNode);
      items.current = () => {
        let isPublicInstanceResult = getScrollableNode(dependencyMap[9]).isPublicInstance(getScrollableNode);
        if (!isPublicInstanceResult) {
          let tmpResult = getScrollableNode(dependencyMap[9]);
          let nativeScrollRef;
          if (getScrollableNode != null) {
            const getNativeScrollRef = getScrollableNode.getNativeScrollRef;
            if (getNativeScrollRef != null) {
              nativeScrollRef = getNativeScrollRef();
            }
          }
          isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
        }
        if (!isPublicInstanceResult) {
          tmpResult = getScrollableNode(dependencyMap[9]);
          let nativeScrollRef2;
          if (getScrollableNode != null) {
            const getScrollResponder = getScrollableNode.getScrollResponder;
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
        if (obj.__isNative) {
          if (isPublicInstanceResult) {
            isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
          }
          if (isPublicInstanceResult) {
            callback();
          }
          obj6 = items(dependencyMap[3]);
        } else {
          if (typeof getScrollableNode === "object") {
            let setNativeProps;
            if (getScrollableNode != null) {
              setNativeProps = getScrollableNode.setNativeProps;
            }
            if (typeof setNativeProps === "function") {
              if (isPublicInstanceResult) {
                if (items) {
                  getScrollableNode.setNativeProps(obj.__getAnimatedValue());
                  if (null != result.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(result.current);
                  }
                  const _setTimeout = setTimeout;
                  result.current = setTimeout(() => {
                    closure_3.current = null;
                    callback();
                  }, 48);
                } else {
                  return callback();
                }
              } else {
                return getScrollableNode.setNativeProps(obj.__getAnimatedValue());
              }
            }
          }
          return callback();
        }
        const obj2 = getScrollableNode(dependencyMap[9]);
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
      })(getScrollableNode);
      closure_1 = tmp2;
      items = [];
      const result = obj.__getNativeAnimatedEventTuples();
      closure_3 = result;
      while (tmp4 !== undefined) {
        let tmp7 = closure_2_4(tmp5, 2);
        obj = tmp7[1];
        let __attachResult = obj.__attach(tmp2, tmp7[0]);
        let tmp10 = addListenersToPropsValue(obj, items);
        continue;
      }
      return () => {
        items.current = null;
        while (tmp2 !== undefined) {
          let tmp5 = closure_3_4(tmp3, 2);
          obj = tmp5[1];
          let __detachResult = obj.__detach(closure_1, tmp5[0]);
          continue;
        }
        for (const item10022 of items) {
          let propValue = item10022.propValue;
          let removeListenerResult = propValue.removeListener(item10022.listenerId);
          continue;
        }
        tmp2 = dependencyMap[Symbol.iterator]();
      };
    }, items1);
    const merged = Object.assign(obj.__getValueWithStaticProps(fn));
    obj.collapsable = false;
    const items2 = [
      obj,
      callback2(dependencyMap[7])(closure_1_5((getScrollableNode) => {
        closure_0 = getScrollableNode;
        obj.setNativeView(getScrollableNode);
        items.current = () => {
          let isPublicInstanceResult = getScrollableNode(dependencyMap[9]).isPublicInstance(getScrollableNode);
          if (!isPublicInstanceResult) {
            let tmpResult = getScrollableNode(dependencyMap[9]);
            let nativeScrollRef;
            if (getScrollableNode != null) {
              const getNativeScrollRef = getScrollableNode.getNativeScrollRef;
              if (getNativeScrollRef != null) {
                nativeScrollRef = getNativeScrollRef();
              }
            }
            isPublicInstanceResult = tmpResult.isPublicInstance(nativeScrollRef);
          }
          if (!isPublicInstanceResult) {
            tmpResult = getScrollableNode(dependencyMap[9]);
            let nativeScrollRef2;
            if (getScrollableNode != null) {
              const getScrollResponder = getScrollableNode.getScrollResponder;
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
          if (obj.__isNative) {
            if (isPublicInstanceResult) {
              isPublicInstanceResult = !obj6.cxxNativeAnimatedEnabled();
            }
            if (isPublicInstanceResult) {
              callback();
            }
            obj6 = items(dependencyMap[3]);
          } else {
            if (typeof getScrollableNode === "object") {
              let setNativeProps;
              if (getScrollableNode != null) {
                setNativeProps = getScrollableNode.setNativeProps;
              }
              if (typeof setNativeProps === "function") {
                if (isPublicInstanceResult) {
                  if (items) {
                    getScrollableNode.setNativeProps(obj.__getAnimatedValue());
                    if (null != result.current) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(result.current);
                    }
                    const _setTimeout = setTimeout;
                    result.current = setTimeout(() => {
                      closure_3.current = null;
                      callback();
                    }, 48);
                  } else {
                    return callback();
                  }
                } else {
                  return getScrollableNode.setNativeProps(obj.__getAnimatedValue());
                }
              }
            }
            return callback();
          }
          const obj2 = getScrollableNode(dependencyMap[9]);
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
        })(getScrollableNode);
        closure_1 = tmp2;
        items = [];
        const result = obj.__getNativeAnimatedEventTuples();
        closure_3 = result;
        while (tmp4 !== undefined) {
          let tmp7 = closure_2_4(tmp5, 2);
          obj = tmp7[1];
          let __attachResult = obj.__attach(tmp2, tmp7[0]);
          let tmp10 = addListenersToPropsValue(obj, items);
          continue;
        }
        return () => {
          items.current = null;
          while (tmp2 !== undefined) {
            let tmp5 = closure_3_4(tmp3, 2);
            obj = tmp5[1];
            let __detachResult = obj.__detach(closure_1, tmp5[0]);
            continue;
          }
          for (const item10022 of items) {
            let propValue = item10022.propValue;
            let removeListenerResult = propValue.removeListener(item10022.listenerId);
            continue;
          }
          tmp2 = dependencyMap[Symbol.iterator]();
        };
      }, items1))
    ];
    return items2;
  };
};