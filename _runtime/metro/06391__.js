// === Module 6391: ? ===

// Module 6391
import react_native from "react-native" /* 17 */;
import PlatformConfig from "PlatformConfig" /* 6364 */;
import _asyncToGenerator from "_asyncToGenerator" /* 6392 */;
import _slicedToArray from "_slicedToArray" /* 6349 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap, size;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ useCallback: closure_4, useImperativeHandle: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault, useState: metroImportAll } = react);
const I18nManager = react_native.I18nManager;

export const useRecyclerViewController = function useRecyclerViewController(recyclerViewManager, arg1, arg2, arg3) {
  let _setTimeout;
  let closure_4;
  let ref;
  let ref5;
  _require = recyclerViewManager;
  dependencyMap = arg2;
  const ref2 = arg3;
  let obj = require("react");
  const unmountFlag = obj.useUnmountFlag();
  let tmp2 = unmountFlag(ref5(0), 2);
  [r10016, closure_4] = tmp2;
  const ref3 = _setTimeout(false);
  const ref4 = _setTimeout(recyclerViewManager.getDataLength());
  let obj2 = require("_slicedToArray");
  _setTimeout = obj2.useUnmountAwareTimeout().setTimeout;
  ref5 = _setTimeout(undefined);
  const ref6 = _setTimeout(undefined);
  const ref7 = _setTimeout([]);
  const items = [recyclerViewManager];
  let tmp3 = closure_4((arg0, fn) => {
    if (undefined !== recyclerViewManager.updateScrollOffset(arg0)) {
      const current = ref7.current;
      current.push(fn);
      closure_4((arg0) => arg0 + 1);
    } else {
      fn();
    }
  }, items);
  let closure_11 = tmp3;
  const items1 = [recyclerViewManager];
  const computeFirstVisibleIndexForOffsetCorrection = closure_4(() => {
    if (recyclerViewManager.getIsFirstLayoutComplete()) {
      if (recyclerViewManager.hasStableDataKeys()) {
        if (recyclerViewManager.getDataLength() > 0) {
          if (recyclerViewManager.shouldMaintainVisibleContentPosition()) {
            const _Math = Math;
            const bound = Math.max(0, recyclerViewManager.computeVisibleIndices().startIndex);
            const tmp3 = undefined !== bound && bound >= 0;
            if (tmp3) {
              ref5.current = recyclerViewManager.getDataKey(bound);
              const obj2 = {};
              const merged = Object.assign(recyclerViewManager.getLayout(bound));
              ref6.current = obj2;
            }
          }
        }
      }
    }
  }, items1);
  const items2 = [recyclerViewManager, arg3, arg2, _setTimeout, tmp3, computeFirstVisibleIndexForOffsetCorrection];
  const items3 = [recyclerViewManager, arg2, _setTimeout, unmountFlag, tmp3];
  const applyOffsetCorrection = closure_4(() => {
    let data;
    let horizontal;
    ({ horizontal, data } = recyclerViewManager.props);
    const current1 = ref7.current;
    ref7.current = [];
    const item = current1.forEach((fn) => fn());
    const dataLength = recyclerViewManager.getDataLength();
    if (recyclerViewManager.getIsFirstLayoutComplete()) {
      if (recyclerViewManager.hasStableDataKeys()) {
        if (dataLength > 0) {
          if (recyclerViewManager.shouldMaintainVisibleContentPosition()) {
            if (ref5.current) {
              const engagedIndices = recyclerViewManager.getEngagedIndices();
              let findValueResult = engagedIndices.findValue((bound) => recyclerViewManager.getDataKey(bound) === ref.current);
              if (findValueResult == null) {
                let tmp8;
                if (dataLength !== ref4.current) {
                  let findIndexResult;
                  if (data != null) {
                    findIndexResult = data.findIndex((item, index) => recyclerViewManager.getDataKey(index) === ref.current);
                  }
                  tmp8 = findIndexResult;
                }
                findValueResult = tmp8;
              }
              if (undefined !== findValueResult) {
                if (findValueResult >= 0) {
                  let diff;
                  let tmp10;
                  const point = recyclerViewManager.getLayout(findValueResult);
                  if (horizontal) {
                    diff = point.x - ref6.current.x;
                    tmp10 = ref6;
                  } else {
                    tmp10 = ref6;
                    diff = point.y - ref6.current.y;
                  }
                  const obj2 = {};
                  const merged = Object.assign(recyclerViewManager.getLayout(findValueResult));
                  tmp10.current = obj2;
                  if (0 !== diff) {
                    if (!ref3.current) {
                      if (!recyclerViewManager.animationOptimizationsEnabled) {
                        if (PlatformConfig.PlatformConfig.supportsOffsetCorrection) {
                          const current2 = ref2.current;
                          if (current2 != null) {
                            current2.scrollBy(diff);
                          }
                        } else {
                          let obj4;
                          if (horizontal) {
                            obj4 = { x: recyclerViewManager.getAbsoluteLastScrollOffset() + diff, animated: false };
                            const obj3 = { x: recyclerViewManager.getAbsoluteLastScrollOffset() + diff, animated: false };
                          } else {
                            obj4 = { y: recyclerViewManager.getAbsoluteLastScrollOffset() + diff, animated: false };
                          }
                          const current = ref.current;
                          if (current != null) {
                            current.scrollTo(obj4);
                          }
                        }
                        if (dataLength !== ref4.current) {
                          closure_11(recyclerViewManager.getAbsoluteLastScrollOffset() + diff, () => {

                          });
                          recyclerViewManager.ignoreScrollEvents = true;
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
    ref4.current = recyclerViewManager.getDataLength();
  }, items2);
  const handlerMethods = ref4(() => {
    let isRTL;
    let obj = {
      scrollToOffset(animated) {
        let offset;
        let skipFirstItemOffset;
        ({ offset, skipFirstItemOffset } = animated);
        animated = animated.animated;
        if (skipFirstItemOffset === undefined) {
          skipFirstItemOffset = true;
        }
        const horizontal = closure_0.props.horizontal;
        if (ref.current) {
          let point1;
          let sum = offset;
          const tmp3 = isRTL.isRTL && horizontal;
          if (tmp3) {
            const adjustOffsetForRTL = closure_0(ref[7]).adjustOffsetForRTL;
            const firstItemOffset = closure_0.firstItemOffset;
            closure_0(ref[7]);
            sum = adjustOffsetForRTL(offset, closure_0.getChildContainerDimensions().width, closure_0.getWindowSize().width) + (skipFirstItemOffset ? firstItemOffset : -firstItemOffset);
          }
          let num = 0;
          if (!skipFirstItemOffset) {
            num = closure_0.firstItemOffset;
          }
          const sum1 = sum + num;
          if (horizontal) {
            const point = { x: sum1, y: 0 };
            point1 = point;
          } else {
            point1 = { x: 0, y: sum1 };
          }
          const current = tmp.current;
          const scrollTo = current.scrollTo;
          const obj2 = { animated };
          const merged = Object.assign(point1);
          scrollTo(obj2);
        }
      },
      clearLayoutCacheOnUpdate() {
        const result = closure_0.markLayoutManagerDirty();
      },
      flashScrollIndicators() {
        const current = ref.current;
        const result = current.flashScrollIndicators();
      },
      getNativeScrollRef() {
        return ref.current;
      },
      getScrollResponder() {
        const current = ref.current;
        return current.getScrollResponder();
      },
      getScrollableNode() {
        const current = ref.current;
        return current.getScrollableNode();
      },
      scrollToEnd() {
        return closure_0(...arguments);
      },
      scrollToTop() {
        let obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        const obj2 = { offset: 0, animated: obj.animated };
        handlerMethods.scrollToOffset(obj2);
      },
      scrollToIndex(arg0) {
        let animated;
        let closure_1;
        let closure_2;
        let closure_3;
        ({ index: closure_0, animated: closure_1, viewPosition: closure_2, viewOffset: closure_3 } = arg0);
        const promise = new Promise((fn) => {
          let layout = fn;
          const horizontal = layout.props.horizontal;
          if (animated.current) {
            if (layout >= 0) {
              if (tmp < layout.getDataLength()) {
                closure_1_5.current = true;
                let result = layout.setOffsetProjectionEnabled(false);
                function getFinalOffset() {
                  let sum;
                  size = layout.getLayout(closure_0);
                  const tmp2 = horizontal ? size.x : size.y;
                  if (undefined !== closure_2) {
                    const size2 = layout.getWindowSize();
                    let diff = tmp2;
                    if (undefined !== closure_2) {
                      diff = tmp2 - ((horizontal ? size2.width : size2.height) - (horizontal ? size.width : size.height)) * closure_2;
                    }
                    sum = diff;
                    if (undefined !== closure_3) {
                      sum = diff + closure_3;
                    }
                  } else {
                    sum = tmp2;
                  }
                  return sum + layout.firstItemOffset;
                }
                const absoluteLastScrollOffset = layout.getAbsoluteLastScrollOffset();
                size = layout.getWindowSize();
                const result1 = 2 * (horizontal ? size.width : size.height);
                function getStartScrollOffset() {

                }
                let closure_6 = getFinalOffset();
                const finalOffset = getFinalOffset();
                if (finalOffset > absoluteLastScrollOffset) {
                  let _Math2 = Math;
                  let bound = Math.max(finalOffset - result1, absoluteLastScrollOffset);
                  layout.setScrollDirection("forward");
                } else {
                  let _Math = Math;
                  bound = Math.min(finalOffset + result1, absoluteLastScrollOffset);
                  const str = "backward";
                  layout.setScrollDirection("backward");
                }
                let closure_8 = closure_6;
                function performScrollStep(arg0) {
                  layout = arg0;
                  if (absoluteLastScrollOffset.current) {
                    layout();
                  } else {
                    let maxScrollOffset;
                    if (5 <= arg0) {
                      if (typeof finishScrollToIndex === "function") {
                        getFinalOffset();
                        maxScrollOffset = layout.getMaxScrollOffset();
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
                        closure_2_7(() => {
                          closure_3_5.current = false;
                          const result = closure_0.setOffsetProjectionEnabled(true);
                          closure_0();
                        }, num5);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let sum;
                      if (horizontal) {
                        sum = maxScrollOffset + arg0 / 4 * (bound - maxScrollOffset);
                      } else {
                        sum = bound + arg0 / 4 * (maxScrollOffset - bound);
                      }
                      closure_2_11(sum, () => {
                        if (closure_0 >= closure_0.getDataLength()) {
                          const obj = { animated };
                          handlerMethods.scrollToEnd(obj);
                          closure_0();
                        } else {
                          const tmp27 = getFinalOffset();
                          if (tmp27 >= closure_6) {
                            performScrollStep(closure_0 + 1);
                          }
                          closure_8 = tmp27;
                          if (typeof getStartScrollOffset === "function") {
                            const tmp26Result = getFinalOffset();
                            if (tmp26Result > absoluteLastScrollOffset) {
                              const _Math2 = Math;
                              bound = Math.max(tmp26Result - result1, absoluteLastScrollOffset);
                              closure_0.setScrollDirection("forward");
                            } else {
                              const _Math = Math;
                              bound = Math.min(tmp26Result + result1, absoluteLastScrollOffset);
                              closure_0.setScrollDirection("backward");
                            }
                            closure_6 = tmp27;
                            performScrollStep(0);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      });
                    }
                  }
                }
                function finishScrollToIndex() {

                }
                performScrollStep(0);
              }
            }
          }
          let tmp2 = fn();
        });
        return promise;
      },
      scrollToItem(item) {
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
      },
      getFirstItemOffset() {
        return closure_0.firstItemOffset;
      },
      getWindowSize() {
        return closure_0.getWindowSize();
      },
      getLayout(currentStickyIndex) {
        return closure_0.tryGetLayout(currentStickyIndex);
      },
      getAbsoluteLastScrollOffset() {
        return closure_0.getAbsoluteLastScrollOffset();
      },
      getChildContainerDimensions() {
        return closure_0.getChildContainerDimensions();
      },
      recordInteraction() {
        closure_0.recordInteraction();
      },
      computeVisibleIndices() {
        return closure_0.computeVisibleIndices();
      },
      getFirstVisibleIndex() {
        return closure_0.computeVisibleIndices().startIndex;
      },
      recomputeViewableItems() {
        const result = closure_0.recomputeViewableItems();
      },
      updateViewableItems() {
        const itemViewability = closure_0.computeItemViewability();
      },
      prepareForLayoutAnimationRender() {
        if (!closure_0.props.keyExtractor) {
          const _console = console;
          console.warn(closure_0(ref[8]).WarningMessages.keyExtractorNotDefinedForAnimation);
        }
        closure_0.animationOptimizationsEnabled = true;
      }
    };
    Object.defineProperty(obj, "props", { get: () => closure_0.props, set: undefined });
    let closure_0 = ref2(() => {
      let closure_1;
      let engagedIndices = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        let animated;
        if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            const data = engagedIndices.props.data;
            const tmp23 = data;
            if (tmp23) {
              if (data.length > 0) {
                index = data.length - 1;
                engagedIndices = engagedIndices.getEngagedIndices();
                if (!engagedIndices.includes(index)) {
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { index, animated };
                  const obj7 = { value: closure_1_13.scrollToIndex(obj6), done: false };
                  return obj7;
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        }
        closure_1_7(() => {
          const current = ref.current;
          if (current != null) {
            const obj = { animated };
            current.scrollToEnd(obj);
          }
        }, 0);
        yield "IconComponent";
        index = tmp4;
        let obj4 = engagedIndices;
        if (engagedIndices === undefined) {
          obj4 = {};
        }
        animated = obj4.animated;
        return "Reflect";
      })();
      iter.next();
      return iter;
    });
    return obj;
  }, items3);
  const items4 = [handlerMethods, recyclerViewManager, _setTimeout];
  const items5 = [handlerMethods, arg2, recyclerViewManager];
  const applyInitialScrollIndex = closure_4(() => {
    let data;
    let horizontal;
    let initialScrollIndexParams;
    let obj = recyclerViewManager;
    ({ data, initialScrollIndexParams, horizontal } = recyclerViewManager.props);
    let num = recyclerViewManager.getInitialScrollIndex();
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
            let sum;
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
            const point = obj.getLayout(num);
            if (horizontal) {
              sum = point.x + num4;
            } else {
              sum = point.y + num4;
            }
            recyclerViewManager = sum;
            const obj2 = { offset: sum, animated: false, skipFirstItemOffset: false };
            handlerMethods.scrollToOffset(obj2);
            _setTimeout(() => {
              const obj = { offset: sum, animated: false, skipFirstItemOffset: false };
              handlerMethods.scrollToOffset(obj);
            }, 0);
          }
        }
      }
    }
  }, items4);
  let tmp8 = ref3(arg1, () => {
    let props;
    const obj = {};
    const merged = Object.assign(ref.current);
    const merged1 = Object.assign(handlerMethods);
    const obj2 = {
      get() {
        return props.props;
      },
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, "props", obj2);
    return obj;
  }, items5);
  return { applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection, applyInitialScrollIndex, handlerMethods };
};