// === Module 6312: ? ===

// Module 6312
import PlatformConfig from "PlatformConfig" /* 6285 */;
import asyncGeneratorStep from "module_6313" /* 6313 */;
import _slicedToArray from "module_6270" /* 6270 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useImperativeHandle: hasOwnProperty, useMemo: metroRequire, useRef: closure_7, useState: closure_8 } = noop);
const I18nManager = fn(17).I18nManager;

export const useRecyclerViewController = function useRecyclerViewController(recyclerViewManager, arg1, arg2, arg3) {
  _require = recyclerViewManager;
  dependencyMap = arg2;
  const unmountFlag = require("module_6314").useUnmountFlag();
  let obj = require("module_6314");
  [r10016, closure_4] = unmountFlag(ref5(0), 2);
  let tmp2 = unmountFlag(ref5(0), 2);
  const ref3 = _setTimeout(false);
  const ref4 = _setTimeout(recyclerViewManager.getDataLength());
  _setTimeout = require("module_6315").useUnmountAwareTimeout().setTimeout;
  let obj2 = require("module_6315");
  _setTimeout(undefined);
  _setTimeout([]);
  const items = [recyclerViewManager];
  let tmp3 = closure_4((arg0, fn) => {
    if (undefined !== closure_0.updateScrollOffset(arg0)) {
      const current = ref7.current;
      current.push(fn);
      closure_1_4((arg0) => arg0 + 1);
    } else {
      fn();
    }
  }, items);
  closure_11 = tmp3;
  const items1 = [recyclerViewManager];
  const computeFirstVisibleIndexForOffsetCorrection = closure_4(() => {
    if (closure_0.getIsFirstLayoutComplete()) {
      if (closure_0.hasStableDataKeys()) {
        if (closure_0.getDataLength() > 0) {
          if (closure_0.shouldMaintainVisibleContentPosition()) {
            const _Math = Math;
            const bound = Math.max(0, closure_0.computeVisibleIndices().startIndex);
            if (tmp3) {
              closure_8.current = closure_0.getDataKey(bound);
              const obj2 = {};
              const merged = Object.assign(closure_0.getLayout(bound));
              closure_9.current = obj2;
            }
            tmp3 = undefined !== bound && bound >= 0;
          }
        }
      }
    }
  }, items1);
  const items2 = [recyclerViewManager, arg3, arg2, _setTimeout, tmp3, computeFirstVisibleIndexForOffsetCorrection];
  const items3 = [recyclerViewManager, arg2, _setTimeout, unmountFlag, tmp3];
  const applyOffsetCorrection = closure_4(() => {
    ({ horizontal, data } = closure_0.props);
    const current1 = ref7.current;
    ref7.current = [];
    const item = current1.forEach((fn) => fn());
    const dataLength = closure_0.getDataLength();
    if (closure_0.getIsFirstLayoutComplete()) {
      if (closure_0.hasStableDataKeys()) {
        if (dataLength > 0) {
          if (closure_0.shouldMaintainVisibleContentPosition()) {
            if (ref5.current) {
              const engagedIndices = closure_0.getEngagedIndices();
              let findValueResult = engagedIndices.findValue((bound) => recyclerViewManager.getDataKey(bound) === ref.current);
              if (findValueResult == null) {
                if (tmp5) {
                  let findIndexResult;
                  if (data != null) {
                    findIndexResult = data.findIndex((item, index) => recyclerViewManager.getDataKey(index) === ref.current);
                  }
                  const tmp8 = findIndexResult;
                }
                findValueResult = tmp8;
              }
              if (undefined !== findValueResult) {
                if (findValueResult >= 0) {
                  const point = closure_0.getLayout(findValueResult);
                  if (horizontal) {
                    let diff = point.x - ref6.current.x;
                    let tmp10 = ref6;
                  } else {
                    tmp10 = ref6;
                    diff = point.y - ref6.current.y;
                  }
                  const obj2 = {};
                  const merged = Object.assign(closure_0.getLayout(findValueResult));
                  tmp10.current = obj2;
                  if (0 !== diff) {
                    if (!ref3.current) {
                      if (!closure_0.animationOptimizationsEnabled) {
                        if (PlatformConfig.PlatformConfig.supportsOffsetCorrection) {
                          const current2 = ref2.current;
                          if (current2 != null) {
                            current2.scrollBy(diff);
                          }
                        } else {
                          if (horizontal) {
                            const obj3 = { x: closure_0.getAbsoluteLastScrollOffset() + diff, animated: false };
                            let obj4 = obj3;
                          } else {
                            obj4 = { y: closure_0.getAbsoluteLastScrollOffset() + diff, animated: false };
                          }
                          const current = ref.current;
                          if (current != null) {
                            current.scrollTo(obj4);
                          }
                        }
                        if (tmp5) {
                          closure_11(closure_0.getAbsoluteLastScrollOffset() + diff, () => {

                          });
                          closure_0.ignoreScrollEvents = true;
                          _setTimeout(() => {
                            recyclerViewManager.ignoreScrollEvents = false;
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
    ref4.current = closure_0.getDataLength();
  }, items2);
  const handlerMethods = ref4(() => {
    let obj = {};
    Object.defineProperty(obj, "props", { get: () => closure_0.props, set: undefined });
    obj.scrollToOffset = function scrollToOffset(animated) {
      ({ offset, skipFirstItemOffset } = animated);
      if (skipFirstItemOffset === undefined) {
        skipFirstItemOffset = true;
      }
      const horizontal = closure_0.props.horizontal;
      let scrollToResult = ref;
      if (ref.current) {
        if (!tmp3) {
          let num = 0;
          if (!skipFirstItemOffset) {
            num = closure_0.firstItemOffset;
          }
          let current = offset + num;
          if (horizontal) {
            const point = { x: current, y: 0 };
            let point1 = point;
          } else {
            point1 = { x: 0, y: current };
          }
          current = scrollToResult.current;
          const obj3 = {};
          const merged = Object.assign(point1);
          obj3.animated = animated.animated;
          scrollToResult = current.scrollTo(obj3);
        } else {
          const firstItemOffset = closure_0.firstItemOffset;
          const sum = closure_0(dependencyMap[7]).adjustOffsetForRTL(offset, closure_0.getChildContainerDimensions().width, closure_0.getWindowSize().width) + (skipFirstItemOffset ? firstItemOffset : -firstItemOffset);
          const obj2 = closure_0(dependencyMap[7]);
        }
        tmp3 = isRTL.isRTL && horizontal;
      }
    };
    obj.clearLayoutCacheOnUpdate = function clearLayoutCacheOnUpdate() {
      const result = closure_0.markLayoutManagerDirty();
    };
    obj.flashScrollIndicators = function flashScrollIndicators() {
      const current = ref.current;
      const result = current.flashScrollIndicators();
    };
    obj.getNativeScrollRef = function getNativeScrollRef() {
      return ref.current;
    };
    obj.getScrollResponder = function getScrollResponder() {
      const current = ref.current;
      return current.getScrollResponder();
    };
    obj.getScrollableNode = function getScrollableNode() {
      const current = ref.current;
      return current.getScrollableNode();
    };
    closure_0 = ref2(() => {
      let engagedIndices = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            const data = engagedIndices.props.data;
            if (data) {
              if (data.length > 0) {
                closure_129_2 = data.length - 1;
                engagedIndices = engagedIndices.getEngagedIndices();
                if (!engagedIndices.includes(closure_129_2)) {
                  c3 = 2;
                  c4 = 1;
                  return { value: closure_1_13.scrollToIndex({ index: closure_129_2, animated }), done: false };
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        }
        closure_1_7(() => {
          const current = ref.current;
          if (current != null) {
            const obj = { animated };
            current.scrollToEnd(obj);
          }
        }, 0);
        yield "HermesInternal";
        let obj4 = engagedIndices;
        if (engagedIndices === undefined) {
          obj4 = {};
        }
        animated = obj4.animated;
        return "flex";
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
      handlerMethods.scrollToOffset({ offset: 0, animated: obj.animated });
    };
    obj.scrollToIndex = function scrollToIndex(arg0) {
      ({ index: closure_0, animated: closure_1, viewPosition: closure_2, viewOffset: closure_3 } = arg0);
      return new Promise((fn) => {
        let layout = fn;
        const horizontal = closure_1_0.props.horizontal;
        if (animated.current) {
          if (layout >= 0) {
            if (tmp < closure_1_0.getDataLength()) {
              closure_1_5.current = true;
              let result = closure_1_0.setOffsetProjectionEnabled(false);
              function getFinalOffset() {
                const size = layout.getLayout(closure_2_0);
                const tmp2 = horizontal ? size.x : size.y;
                if (undefined !== closure_2_2) {
                  const size2 = layout.getWindowSize();
                  let diff = tmp2;
                  if (undefined !== closure_2_2) {
                    diff = tmp2 - ((horizontal ? size2.width : size2.height) - (horizontal ? size.width : size.height)) * closure_2_2;
                  }
                  let sum = diff;
                  if (undefined !== ref) {
                    sum = diff + ref;
                  }
                } else {
                  sum = tmp2;
                }
                return sum + layout.firstItemOffset;
              }
              let setScrollDirection = closure_1_0.getAbsoluteLastScrollOffset();
              let size = closure_1_0.getWindowSize();
              let result1 = 2 * (horizontal ? size.width : size.height);
              function getStartScrollOffset() {

              }
              closure_6 = getFinalOffset();
              const finalOffset = getFinalOffset();
              if (finalOffset > setScrollDirection) {
                let _Math2 = Math;
                result1 = finalOffset - result1;
                let bound = Math.max(result1, setScrollDirection);
                setScrollDirection = closure_1_0.setScrollDirection;
                setScrollDirection("forward");
              } else {
                let _Math = Math;
                bound = Math.min(finalOffset + result1, setScrollDirection);
                closure_1_0.setScrollDirection("backward");
              }
              closure_8 = closure_6;
              function performScrollStep(arg0) {
                layout = arg0;
                if (ref.current) {
                  layout();
                } else if (5 <= arg0) {
                  if (typeof finishScrollToIndex === "function") {
                    getFinalOffset();
                    const maxScrollOffset = closure_2_0.getMaxScrollOffset();
                    if (horizontal) {
                      let obj = { offset: bound, animated: false, skipFirstItemOffset: true };
                      closure_2_13.scrollToOffset(obj);
                    }
                    const obj2 = { offset: maxScrollOffset, animated: horizontal, skipFirstItemOffset: true };
                    closure_2_13.scrollToOffset(obj2);
                    let num5 = 200;
                    if (horizontal) {
                      num5 = 300;
                    }
                    closure_2_7(() => { ... }, num5);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  if (horizontal) {
                    let sum = maxScrollOffset + arg0 / 4 * (bound - maxScrollOffset);
                  } else {
                    sum = bound + arg0 / 4 * (maxScrollOffset - bound);
                  }
                  closure_2_11(sum, () => { ... });
                }
              }
              function finishScrollToIndex() {

              }
              performScrollStep(0);
            }
          }
        }
        fn();
      });
    };
    obj.scrollToItem = function scrollToItem(item) {
      item = item.item;
      const data = closure_0.props.data;
      if (ref.current) {
        if (data) {
          const findIndexResult = data.findIndex((item) => item === item);
          if (findIndexResult >= 0) {
            const obj = { index: findIndexResult, animated: tmp, viewPosition: tmp2, viewOffset: tmp3 };
            handlerMethods.scrollToIndex(obj);
          }
        }
      }
    };
    obj.getFirstItemOffset = function getFirstItemOffset() {
      return closure_0.firstItemOffset;
    };
    obj.getWindowSize = function getWindowSize() {
      return closure_0.getWindowSize();
    };
    obj.getLayout = function getLayout(currentStickyIndex) {
      return closure_0.tryGetLayout(currentStickyIndex);
    };
    obj.getAbsoluteLastScrollOffset = function getAbsoluteLastScrollOffset() {
      return closure_0.getAbsoluteLastScrollOffset();
    };
    obj.getChildContainerDimensions = function getChildContainerDimensions() {
      return closure_0.getChildContainerDimensions();
    };
    obj.recordInteraction = function recordInteraction() {
      closure_0.recordInteraction();
    };
    obj.computeVisibleIndices = function computeVisibleIndices() {
      return closure_0.computeVisibleIndices();
    };
    obj.getFirstVisibleIndex = function getFirstVisibleIndex() {
      return closure_0.computeVisibleIndices().startIndex;
    };
    obj.recomputeViewableItems = function recomputeViewableItems() {
      const result = closure_0.recomputeViewableItems();
    };
    obj.updateViewableItems = function updateViewableItems() {
      const itemViewability = closure_0.computeItemViewability();
    };
    obj.prepareForLayoutAnimationRender = function prepareForLayoutAnimationRender() {
      if (!closure_0.props.keyExtractor) {
        const _console = console;
        console.warn(closure_0(dependencyMap[8]).WarningMessages.keyExtractorNotDefinedForAnimation);
      }
      closure_0.animationOptimizationsEnabled = true;
    };
    return obj;
  }, items3);
  const items4 = [handlerMethods, recyclerViewManager, _setTimeout];
  const items5 = [handlerMethods, arg2, recyclerViewManager];
  const applyInitialScrollIndex = closure_4(() => {
    ({ data, initialScrollIndexParams, horizontal } = closure_0.props);
    let num = closure_0.getInitialScrollIndex();
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
              sum.isInitialScrollComplete = true;
              ref3.current = false;
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
            closure_0 = sum;
            num4 = handlerMethods.scrollToOffset;
            const obj2 = { offset: sum, animated: false, skipFirstItemOffset: false };
            num4(obj2);
            point = _setTimeout(() => {
              handlerMethods.scrollToOffset({ offset: sum, animated: false, skipFirstItemOffset: false });
            }, 0);
          }
        }
      }
    }
  }, items4);
  ref3(arg1, () => {
    const obj = {};
    const merged = Object.assign(ref.current);
    const merged1 = Object.assign(handlerMethods);
    Object.defineProperty(obj, "props", {
      get() {
        return props.props;
      },
      enumerable: true,
      configurable: true
    });
    return obj;
  }, items5);
  return { applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection, applyInitialScrollIndex, handlerMethods };
};