// === Module 7121: useRecyclerViewController ===

// Module 7121 (useRecyclerViewController)
import closure_2 from "asyncGeneratorStep" /* 7122 */;
import closure_3 from "_slicedToArray" /* 7079 */;
import noop from "noop" /* 19 */;
import { I18nManager } from "get ActivityIndicator" /* 17 */;

const require = arg1;
({ useCallback: c4, useImperativeHandle: c5, useMemo: closure_6, useRef: error, useState: closure_8 } = noop);

export const useRecyclerViewController = function useRecyclerViewController(recyclerViewManager, arg1, arg2, arg3) {
  const _require = recyclerViewManager;
  dependencyMap = arg2;
  closure_2 = arg3;
  const unmountFlag = _require(7123).useUnmountFlag();
  let obj = _require(7123);
  [r10016, closure_4] = unmountFlag(callback4(0), 2);
  const callback2 = _setTimeout(false);
  const callback3 = _setTimeout(recyclerViewManager.getDataLength());
  let tmp2 = unmountFlag(callback4(0), 2);
  _setTimeout = _require(7124).useUnmountAwareTimeout().setTimeout;
  callback4 = _setTimeout(undefined);
  closure_9 = _setTimeout(undefined);
  closure_10 = _setTimeout([]);
  const items = [recyclerViewManager];
  let tmp3 = callback((arg0, arg1) => {
    if (undefined !== store.updateScrollOffset(arg0)) {
      const current = ref7.current;
      current.push(arg1);
      callback((arg0) => arg0 + 1);
    } else {
      arg1();
    }
  }, items);
  closure_11 = tmp3;
  const items1 = [recyclerViewManager];
  const computeFirstVisibleIndexForOffsetCorrection = callback(() => {
    let obj = store;
    if (store.getIsFirstLayoutComplete()) {
      if (obj.hasStableDataKeys()) {
        if (obj.getDataLength() > 0) {
          if (obj.shouldMaintainVisibleContentPosition()) {
            const _Math = Math;
            const bound = Math.max(0, obj.computeVisibleIndices().startIndex);
            if (tmp3) {
              closure_8.current = obj.getDataKey(bound);
              obj = {};
              const merged = Object.assign(obj.getLayout(bound));
              closure_9.current = obj;
            }
            tmp3 = undefined !== bound && bound >= 0;
          }
        }
      }
    }
  }, items1);
  const items2 = [recyclerViewManager, arg3, arg2, _setTimeout, tmp3, computeFirstVisibleIndexForOffsetCorrection];
  const items3 = [recyclerViewManager, arg2, _setTimeout, unmountFlag, tmp3];
  const applyOffsetCorrection = callback(() => {
    let obj = store;
    ({ horizontal, data } = store.props);
    let current = ref7.current;
    ref7.current = [];
    const item = current.forEach((arg0) => arg0());
    const dataLength = store.getDataLength();
    if (store.getIsFirstLayoutComplete()) {
      if (obj.hasStableDataKeys()) {
        if (dataLength > 0) {
          if (obj.shouldMaintainVisibleContentPosition()) {
            if (ref5.current) {
              const engagedIndices = obj.getEngagedIndices();
              let findValueResult = engagedIndices.findValue((bound) => store.getDataKey(bound) === ref.current);
              if (findValueResult == null) {
                if (tmp5) {
                  let findIndexResult;
                  if (data != null) {
                    findIndexResult = data.findIndex((arg0, bound) => store.getDataKey(bound) === ref.current);
                  }
                  const tmp8 = findIndexResult;
                }
                findValueResult = tmp8;
              }
              if (undefined !== findValueResult) {
                if (findValueResult >= 0) {
                  const point = obj.getLayout(findValueResult);
                  if (horizontal) {
                    let diff = point.x - ref6.current.x;
                    let tmp10 = ref6;
                  } else {
                    tmp10 = ref6;
                    diff = point.y - ref6.current.y;
                  }
                  obj = {};
                  const merged = Object.assign(obj.getLayout(findValueResult));
                  tmp10.current = obj;
                  if (0 !== diff) {
                    if (!ref3.current) {
                      if (!obj.animationOptimizationsEnabled) {
                        if (store(ref[6]).PlatformConfig.supportsOffsetCorrection) {
                          const current2 = ref2.current;
                          if (current2 != null) {
                            current2.scrollBy(diff);
                          }
                        } else {
                          if (horizontal) {
                            obj = { x: null, animated: false };
                            obj[0] = obj.getAbsoluteLastScrollOffset() + diff;
                            obj1 = obj;
                          } else {
                            obj1 = { y: null, animated: false };
                            obj1[0] = obj.getAbsoluteLastScrollOffset() + diff;
                          }
                          current = ref.current;
                          if (current != null) {
                            current.scrollTo(obj1);
                          }
                        }
                        if (tmp5) {
                          callback2(obj.getAbsoluteLastScrollOffset() + diff, () => {

                          });
                          obj.ignoreScrollEvents = true;
                          _setTimeout(() => {
                            closure_0.ignoreScrollEvents = false;
                          }, 100);
                        }
                      }
                    }
                  }
                }
              }
            }
            computeFirstVisibleIndexForOffsetCorrection();
          }
        }
      }
    }
    ref4.current = obj.getDataLength();
  }, items2);
  const handlerMethods = callback3(() => {
    let obj = {};
    Object.defineProperty(obj, "props", { get: () => store.props, set: undefined });
    obj.scrollToOffset = function scrollToOffset(animated) {
      ({ offset, skipFirstItemOffset } = animated);
      if (skipFirstItemOffset === undefined) {
        skipFirstItemOffset = true;
      }
      let obj = store;
      const horizontal = store.props.horizontal;
      let scrollToResult = closure_1;
      if (closure_1.current) {
        if (!tmp3) {
          let num = 0;
          if (!skipFirstItemOffset) {
            num = obj.firstItemOffset;
          }
          let current = offset + num;
          if (horizontal) {
            obj = { x: null, y: 0 };
            obj[0] = current;
          } else {
            obj = { x: 0, y: null };
            obj[1] = current;
          }
          current = scrollToResult.current;
          obj1 = {};
          const merged = Object.assign(obj);
          obj1.animated = animated.animated;
          scrollToResult = current.scrollTo(obj1);
        } else {
          obj1 = store(closure_1_1[7]);
          const firstItemOffset = obj.firstItemOffset;
          const sum = obj1.adjustOffsetForRTL(offset, obj.getChildContainerDimensions().width, obj.getWindowSize().width) + (skipFirstItemOffset ? firstItemOffset : -firstItemOffset);
        }
        tmp3 = closure_1_9.isRTL && horizontal;
      }
    };
    obj.clearLayoutCacheOnUpdate = function clearLayoutCacheOnUpdate() {
      const result = store.markLayoutManagerDirty();
    };
    obj.flashScrollIndicators = function flashScrollIndicators() {
      const current = closure_1.current;
      const result = current.flashScrollIndicators();
    };
    obj.getNativeScrollRef = function getNativeScrollRef() {
      return closure_1.current;
    };
    obj.getScrollResponder = function getScrollResponder() {
      const current = closure_1.current;
      return current.getScrollResponder();
    };
    obj.getScrollableNode = function getScrollableNode() {
      const current = closure_1.current;
      return current.getScrollableNode();
    };
    closure_0 = ref2(() => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp5;
                let data = tmp2;
                let animated;
                obj1 = animated;
                if (animated === undefined) {
                  obj1 = {};
                }
                animated = obj1.animated;
                data = undefined;
                closure_2 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  data = engagedIndices.props.data;
                  if (data) {
                    if (data.length > 0) {
                      closure_2 = data.length - 1;
                      engagedIndices = engagedIndices.getEngagedIndices();
                      if (!engagedIndices.includes(closure_2)) {
                        const obj3 = { index: null, animated: null };
                        obj3[0] = closure_2;
                        obj3[1] = animated;
                        c3 = 2;
                        c4 = 1;
                        const obj4 = { value: null, done: false };
                        obj4[0] = closure_1_13.scrollToIndex(obj3);
                        return obj4;
                      }
                    }
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              closure_1_7(() => {
                const current = data.current;
                if (current != null) {
                  const obj = { animated: null };
                  obj[0] = animated;
                  current.scrollToEnd(obj);
                }
              }, 0);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c4 = tmp;
            throw tmp17;
          }
        }
      })();
      iter.next();
      return iter;
    });
    obj.scrollToEnd = function scrollToEnd() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.scrollToTop = function scrollToTop() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      obj = { offset: 0, animated: obj.animated };
      closure_13.scrollToOffset(obj);
    };
    obj.scrollToIndex = function scrollToIndex(arg0) {
      ({ index: closure_0, animated: closure_1, viewPosition: closure_2, viewOffset: closure_3 } = arg0);
      return new Promise((arg0) => {
        closure_0 = arg0;
        const horizontal = closure_1_0.props.horizontal;
        if (closure_1_1.current) {
          if (closure_0 >= 0) {
            if (tmp < obj.getDataLength()) {
              closure_1_5.current = true;
              let result = obj.setOffsetProjectionEnabled(false);
              function getFinalOffset() {
                const size = closure_2_0.getLayout(closure_0);
                const tmp2 = horizontal ? size.x : size.y;
                if (undefined !== getFinalOffset) {
                  const size2 = obj.getWindowSize();
                  let diff = tmp2;
                  if (undefined !== tmp3) {
                    diff = tmp2 - ((tmp ? size2.width : size2.height) - (tmp ? size.width : size.height)) * tmp3;
                  }
                  let sum = diff;
                  if (undefined !== setScrollDirection) {
                    sum = diff + setScrollDirection;
                  }
                } else {
                  sum = tmp2;
                }
                return sum + closure_2_0.firstItemOffset;
              }
              let setScrollDirection = obj.getAbsoluteLastScrollOffset();
              let size = obj.getWindowSize();
              let result1 = 2 * (horizontal ? size.width : size.height);
              function getStartScrollOffset() {

              }
              closure_6 = getFinalOffset();
              const finalOffset = getFinalOffset();
              if (finalOffset > setScrollDirection) {
                let _Math2 = Math;
                result1 = finalOffset - result1;
                let bound = Math.max(result1, setScrollDirection);
                setScrollDirection = obj.setScrollDirection;
                setScrollDirection("forward");
              } else {
                let _Math = Math;
                bound = Math.min(finalOffset + result1, setScrollDirection);
                obj.setScrollDirection("backward");
              }
              closure_8 = closure_6;
              function performScrollStep(arg0) {
                const callback = arg0;
                if (closure_2_3.current) {
                  callback();
                } else if (5 <= arg0) {
                  if (typeof finishScrollToIndex !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  closure_8 = getFinalOffset();
                  const maxScrollOffset = closure_2_0.getMaxScrollOffset();
                  if (closure_8 > maxScrollOffset) {
                    closure_8 = maxScrollOffset;
                  }
                  if (horizontal) {
                    let obj = { offset: null, animated: false, skipFirstItemOffset: true };
                    obj[0] = bound;
                    closure_2_13.scrollToOffset(obj);
                  }
                  obj = { offset: null, animated: null, skipFirstItemOffset: true };
                  obj[0] = closure_8;
                  obj[1] = horizontal;
                  closure_2_13.scrollToOffset(obj);
                  let num5 = 200;
                  if (horizontal) {
                    num5 = 300;
                  }
                  closure_2_7(() => { ... }, num5);
                  const tmp22 = closure_2_7;
                } else {
                  if (horizontal) {
                    let sum = closure_8 + arg0 / 4 * (bound - closure_8);
                  } else {
                    sum = bound + arg0 / 4 * (closure_8 - bound);
                  }
                  closure_2_11(sum, () => { ... });
                  const tmp = closure_2_11;
                }
              }
              function finishScrollToIndex() {

              }
              performScrollStep(0);
            }
          }
        }
        arg0();
      });
    };
    obj.scrollToItem = function scrollToItem(item) {
      item = item.item;
      const data = item.props.data;
      if (closure_1.current) {
        if (data) {
          const findIndexResult = data.findIndex((arg0) => arg0 === item);
          if (findIndexResult >= 0) {
            const obj = { index: null, animated: null, viewPosition: null, viewOffset: null };
            obj[0] = findIndexResult;
            obj[1] = tmp;
            obj[2] = tmp2;
            obj[3] = tmp3;
            closure_13.scrollToIndex(obj);
          }
        }
      }
    };
    obj.getFirstItemOffset = function getFirstItemOffset() {
      return store.firstItemOffset;
    };
    obj.getWindowSize = function getWindowSize() {
      return store.getWindowSize();
    };
    obj.getLayout = function getLayout(currentStickyIndex) {
      return store.tryGetLayout(currentStickyIndex);
    };
    obj.getAbsoluteLastScrollOffset = function getAbsoluteLastScrollOffset() {
      return store.getAbsoluteLastScrollOffset();
    };
    obj.getChildContainerDimensions = function getChildContainerDimensions() {
      return store.getChildContainerDimensions();
    };
    obj.recordInteraction = function recordInteraction() {
      store.recordInteraction();
    };
    obj.computeVisibleIndices = function computeVisibleIndices() {
      return store.computeVisibleIndices();
    };
    obj.getFirstVisibleIndex = function getFirstVisibleIndex() {
      return store.computeVisibleIndices().startIndex;
    };
    obj.recomputeViewableItems = function recomputeViewableItems() {
      const result = store.recomputeViewableItems();
    };
    obj.updateViewableItems = function updateViewableItems() {
      const itemViewability = store.computeItemViewability();
    };
    obj.prepareForLayoutAnimationRender = function prepareForLayoutAnimationRender() {
      if (!store.props.keyExtractor) {
        const _console = console;
        console.warn(store(closure_1_1[8]).WarningMessages.keyExtractorNotDefinedForAnimation);
      }
      store.animationOptimizationsEnabled = true;
    };
    return obj;
  }, items3);
  const items4 = [handlerMethods, recyclerViewManager, _setTimeout];
  const items5 = [handlerMethods, arg2, recyclerViewManager];
  const applyInitialScrollIndex = callback(() => {
    let obj = store;
    ({ data, initialScrollIndexParams, horizontal } = store.props);
    let num = store.getInitialScrollIndex();
    if (num == null) {
      num = -1;
    }
    if (num >= 0) {
      let num2;
      if (data != null) {
        num2 = data.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      if (num < num2) {
        if (!obj.isInitialScrollComplete) {
          if (obj.getIsFirstLayoutComplete()) {
            _setTimeout(() => {
              closure_0.isInitialScrollComplete = true;
              closure_5.current = false;
            }, 100);
            closure_5.current = true;
            let num4;
            if (initialScrollIndexParams != null) {
              num4 = initialScrollIndexParams.viewOffset;
            }
            if (num4 == null) {
              num4 = 0;
            }
            let point = obj.getLayout(num);
            if (horizontal) {
              let sum = point.x + num4;
            } else {
              sum = point.y + num4;
            }
            store = sum;
            num4 = handlerMethods.scrollToOffset;
            obj = { offset: null, animated: false, skipFirstItemOffset: false };
            obj[0] = sum;
            num4(obj);
            point = _setTimeout(() => {
              closure_1_13.scrollToOffset({ offset: closure_0, animated: false, skipFirstItemOffset: false });
            }, 0);
            const tmp = _setTimeout;
          }
        }
      }
    }
  }, items4);
  callback2(arg1, () => {
    let obj = {};
    const merged = Object.assign(ref.current);
    const merged1 = Object.assign(handlerMethods);
    obj = {
      get() {
        return props.props;
      },
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, "props", obj);
    return obj;
  }, items5);
  return { applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection, applyInitialScrollIndex, handlerMethods };
};