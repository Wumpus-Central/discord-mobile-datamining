// _runtime/15300_frozen.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import cancelAnimation from "cancelAnimation";

let noop = require;
let obj = dependencyMap;
let closure_4 = ["id", "horizontal", "style", "refView", "stickyScrollOffset", "stickyHeaderConfig", "children"];
let closure_5 = ["id", "horizontal", "style", "refView", "children", "recycleItems", "layoutTransition"];
let closure_6 = ["itemLayoutAnimation", "recycleItems", "refLegendList", "renderScrollComponent", "sharedValues"];
let closure_7 = ["ref"];
let closure_8 = ["refScrollView"];
obj = undefined;
if (!noop) {
  let _Object = Object;
  obj = Object.create(null);
  if (noop) {
    const _Object2 = Object;
    const keys = Object.keys(noop);
    const item = keys.forEach((arg0) => {
      let closure_0 = arg0;
      if ("default" !== arg0) {
        const _Object = Object;
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, arg0);
        if (!ownPropertyDescriptor.get) {
          const obj = { enumerable: true, get: null };
          obj[1] = function get() {
            return table[table];
          };
          ownPropertyDescriptor = obj;
        }
        Object.defineProperty(obj, arg0, ownPropertyDescriptor);
        const tmp4 = obj;
      }
    });
  }
  obj.default = noop;
  const _Object3 = Object;
  let frozen = Object.freeze(obj);
} else {
  frozen = noop;
}
if (!cancelAnimation) {
  obj = { default: null };
  obj[0] = cancelAnimation;
  let tmp7 = obj;
} else {
  tmp7 = cancelAnimation;
}
let closure_12 = tmp7;
const POSITION_OUT_OF_VIEW = require("toNativeHorizontalOffset").internal.POSITION_OUT_OF_VIEW;
const IsNewArchitecture = require("toNativeHorizontalOffset").internal.IsNewArchitecture;
const getStickyPushLimit = require("toNativeHorizontalOffset").internal.getStickyPushLimit;
const typedMemo = require("toNativeHorizontalOffset").internal.typedMemo;
const useArr$ = require("toNativeHorizontalOffset").internal.useArr$;
const useCombinedRef = require("toNativeHorizontalOffset").internal.useCombinedRef;
const useLatestRef = require("toNativeHorizontalOffset").internal.useLatestRef;
const useStableRenderComponent = require("toNativeHorizontalOffset").internal.useStableRenderComponent;
const getComponent = require("toNativeHorizontalOffset").internal.getComponent;
const peek$ = require("toNativeHorizontalOffset").internal.peek$;
const useStateContext = require("toNativeHorizontalOffset").internal.useStateContext;
function ReanimatedScrollOffsetTracker(arg0) {
  let animatedScrollRef;
  let scrollOffset;
  ({ animatedScrollRef, scrollOffset } = arg0);
  obj = noop(obj[4]);
  const scrollViewOffset = obj.useScrollViewOffset(animatedScrollRef, scrollOffset);
  return null;
}
let closure_24 = typedMemo(function ReanimatedScrollBridgeComponent(forwardedRef) {
  let renderScrollComponent;
  let scrollOffset;
  ({ scrollOffset, renderScrollComponent } = forwardedRef);
  let merged = Object.assign(forwardedRef, Object.create(null));
  obj = noop(obj[4]);
  const animatedRef = obj.useAnimatedRef();
  let ScrollView = useStableRenderComponent(renderScrollComponent, (arg0, ref) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ref = ref;
    obj.scrollEventThrottle = 1;
    return obj;
  });
  if (!renderScrollComponent) {
    ScrollView = tmp7.default.ScrollView;
  }
  let element = scrollOffset;
  if (scrollOffset) {
    obj = { animatedScrollRef: null, scrollOffset: null };
    obj[0] = animatedRef;
    obj[1] = scrollOffset;
    element = <ReanimatedScrollOffsetTracker animatedScrollRef={null} scrollOffset={null} />;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.ref = useCombinedRef(animatedRef, forwardedRef.forwardedRef);
  return <>{element}<ScrollView /></>;
});
let closure_25 = typedMemo(function StickyOverlayComponent(stickyHeaderConfig) {
  stickyHeaderConfig = stickyHeaderConfig.stickyHeaderConfig;
  let backdropComponent;
  if (null != stickyHeaderConfig) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  let element = null;
  if (backdropComponent) {
    const obj = { style: null };
    obj[0] = { inset: 0, pointerEvents: "none", position: "absolute" };
    let backdropComponent1;
    if (null != stickyHeaderConfig) {
      backdropComponent1 = stickyHeaderConfig.backdropComponent;
    }
    element = <get ActivityIndicator.View style={null}>{getComponent(backdropComponent1)}</get ActivityIndicator.View>;
    const tmp5 = getComponent;
  }
  return element;
});
let closure_26 = { code: "function pnpm_reanimatedJs1(){const{stickyScrollOffset,stickyStart,position,pushLimit,horizontal}=this.__closure;const delta=Math.max(0,stickyScrollOffset.value-stickyStart);const stickyPosition=position+delta;const resolvedPosition=pushLimit!==void 0?Math.min(stickyPosition,pushLimit):stickyPosition;return horizontal?{transform:[{translateX:resolvedPosition}]}:{transform:[{translateY:resolvedPosition}]};}" };
let closure_27 = typedMemo(function ReanimatedPositionViewStickyComponent(ref) {
  let children;
  let horizontal;
  let id;
  let stickyHeaderConfig;
  const tmp = useStateContext();
  const noop = tmp;
  ({ id, horizontal } = ref);
  const style = ref.style;
  const stickyScrollOffset = ref.stickyScrollOffset;
  ({ stickyHeaderConfig, children } = ref);
  let items = ["containerPosition" + id, "headerSize", "stylePaddingTop", "containerItemKey" + id, "containerItemIndex" + id, "totalSize"];
  const tmp3 = style(useArr$(items), 6);
  let first = tmp3[0];
  if (undefined === first) {
    first = POSITION_OUT_OF_VIEW;
  }
  let num = 0;
  if (undefined !== tmp3[1]) {
    num = tmp5;
  }
  let num2 = 0;
  if (undefined !== tmp3[2]) {
    num2 = tmp6;
  }
  let closure_5 = tmp7;
  let closure_6 = tmp8;
  let num3 = 0;
  if (undefined !== tmp3[5]) {
    num3 = tmp9;
  }
  let obj = frozen;
  let items1 = [tmp.state, tmp3[4], tmp3[3], num3];
  const memo = frozen.useMemo(() => outer1_15(tmp.state, closure_6, closure_5), items1);
  let offset;
  if (null != stickyHeaderConfig) {
    offset = stickyHeaderConfig.offset;
  }
  let num4 = 0;
  if (null != offset) {
    num4 = offset;
  }
  const diff = first + num + num2 - num4;
  let closure_8 = diff;
  const tmp2 = stickyScrollOffset(ref, first);
  const fn = function l() {
    const sum = first + Math.max(0, stickyScrollOffset.value - closure_8);
    let bound = sum;
    if (undefined !== memo) {
      const _Math = Math;
      bound = Math.min(sum, tmp2);
    }
    let obj = { transform: null };
    if (horizontal) {
      obj = { translateX: null };
      obj[0] = bound;
      const items = [obj];
      obj[0] = items;
      let tmp4 = obj;
    } else {
      obj = { translateY: null };
      obj[0] = bound;
      const items1 = [obj];
      obj[0] = items1;
      tmp4 = obj;
    }
    return tmp4;
  };
  fn.__closure = { stickyScrollOffset, stickyStart: diff, position: first, pushLimit: memo, horizontal };
  fn.__workletHash = 15276407844125;
  fn.__initData = closure_26;
  const items2 = [horizontal, first, memo, diff];
  const animatedStyle = noop(horizontal[4]).useAnimatedStyle(fn, items2);
  const items3 = [tmp3[4], animatedStyle, style];
  obj = {
    ref: ref.refView,
    style: obj.useMemo(() => {
      const items = [style, { zIndex: closure_6 + 1000 }, animatedStyle];
      return items;
    }, items3)
  };
  const merged = Object.assign(tmp2);
  return obj.createElement(tmp3[3].default.View, {
    ref: ref.refView,
    style: obj.useMemo(() => {
      const items = [style, { zIndex: closure_6 + 1000 }, animatedStyle];
      return items;
    }, items3)
  }, <closure_25 stickyHeaderConfig={stickyHeaderConfig} />, children);
});
let closure_28 = typedMemo(function ReanimatedPositionViewComponent(style) {
  let children;
  let horizontal;
  let id;
  let recycleItems;
  let refView;
  ({ id, horizontal } = style);
  style = style.style;
  const layoutTransition = style.layoutTransition;
  ({ refView, children, recycleItems } = style);
  const tmp2 = _objectWithoutProperties(style, closure_5);
  let items = ["containerPosition" + id];
  first = first(useArr$(items), 1)[0];
  if (undefined === first) {
    first = POSITION_OUT_OF_VIEW;
  }
  let obj = frozen;
  const ref = frozen.useRef(undefined);
  if (recycleItems) {
    if (layoutTransition) {
      const _HermesInternal = HermesInternal;
      const tmp6 = peek$(tmp, "containerItemKey" + id);
      let tmp8 = tmp7;
      if (undefined !== tmp6) {
        tmp8 = undefined !== ref.current;
      }
      if (tmp8) {
        tmp8 = ref.current !== tmp6;
      }
      let flag = tmp8;
      if (undefined !== tmp6) {
        ref.current = tmp6;
        flag = tmp8;
      }
    }
    const items1 = [horizontal, first, style];
    let tmp11;
    const memo = obj.useMemo(() => {
      const items = [style, ];
      if (horizontal) {
        let obj = { left: null };
        obj[0] = first;
      } else {
        obj = { top: null };
        obj[0] = first;
      }
      items[1] = obj;
      return items;
    }, items1);
    if (!flag) {
      tmp11 = layoutTransition;
    }
    obj = { layout: null, ref: null, style: null };
    obj[0] = tmp11;
    obj[1] = refView;
    obj[2] = memo;
    const merged = Object.assign(tmp2);
    return obj.createElement(tmp7.default.View, { layout: null, ref: null, style: null }, children);
  }
  ref.current = undefined;
  flag = false;
});
let closure_29 = tmp7.default.createAnimatedComponent(typedMemo(frozen.forwardRef(function LegendListForwardedRef2(refLegendList, refScrollView) {
  let itemLayoutAnimation;
  let recycleItems;
  ({ itemLayoutAnimation, recycleItems } = refLegendList);
  refLegendList = refLegendList.refLegendList;
  const renderScrollComponent = refLegendList.renderScrollComponent;
  const sharedValues = refLegendList.sharedValues;
  const tmp = sharedValue(refLegendList, closure_6);
  let obj = noop;
  const items = [refLegendList];
  const callback = noop.useCallback((arg0) => {
    refLegendList(arg0);
  }, items);
  let obj1 = recycleItems(refLegendList[4]);
  sharedValue = obj1.useSharedValue(0);
  let scrollOffset;
  if (null != sharedValues) {
    scrollOffset = sharedValues.scrollOffset;
  }
  if (null != scrollOffset) {
    sharedValue = scrollOffset;
  }
  let scrollOffset1;
  if (null != sharedValues) {
    scrollOffset1 = sharedValues.scrollOffset;
  }
  if (undefined === scrollOffset1) {
    const stickyHeaderIndices = tmp.stickyHeaderIndices;
    let length;
    if (null != stickyHeaderIndices) {
      length = stickyHeaderIndices.length;
    }
  }
  let closure_4 = tmp9;
  let obj2 = frozen;
  const items1 = [renderScrollComponent];
  const memo = frozen.useMemo(() => {
    let fn;
    if (renderScrollComponent) {
      fn = (arg0) => callback(arg0);
    }
    return fn;
  }, items1);
  const items2 = [memo, tmp9];
  const items3 = [sharedValue];
  const callback1 = obj.useCallback((ref) => {
    const obj = {};
    const merged = Object.assign(sharedValue(ref, closure_7));
    obj.forwardedRef = ref.ref;
    obj.renderScrollComponent = memo;
    obj.scrollOffset = closure_4;
    return <outer1_24 />;
  }, items2);
  const memo1 = frozen.useMemo(() => function StickyPositionComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.stickyScrollOffset = closure_3;
    return <outer1_27 />;
  }, items3);
  closure_6 = useLatestRef(itemLayoutAnimation);
  let closure_7 = tmp13;
  const items4 = [itemLayoutAnimation, recycleItems];
  obj = {};
  const memo2 = frozen.useMemo(() => closure_7 ? (function PositionComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.layoutTransition = ref.current;
    obj.recycleItems = closure_0;
    return <outer1_28 />;
  }) : undefined, items4);
  let merged = Object.assign(tmp);
  obj.positionComponentInternal = memo2;
  obj.recycleItems = recycleItems;
  obj = { renderScrollComponent: callback1 };
  if (IsNewArchitecture) {
    obj1 = { stickyPositionComponentInternal: null };
    obj1[0] = memo1;
    obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  const merged2 = Object.assign(obj);
  const merged3 = Object.assign(obj);
  return obj2.createElement(recycleItems(refLegendList[5]).LegendList, { ref: callback, refScrollView });
})));

export const AnimatedLegendList = typedMemo(frozen.forwardRef(function AnimatedLegendList2(sharedValues, forwardedRef) {
  let noop;
  let tmp3;
  sharedValues = sharedValues.sharedValues;
  let tmp = _objectWithoutProperties(sharedValues, closure_8);
  [tmp3, noop] = _slicedToArray(frozen.useState(null), 2);
  noop = tmp3;
  let items = [tmp3, sharedValues];
  const tmp2 = _slicedToArray(frozen.useState(null), 2);
  const effect = frozen.useEffect(() => {
    if (items) {
      if (sharedValues) {
        const state = items.getState();
        let activeStickyIndex = tmp.activeStickyIndex;
        const activeStickyIndex2 = state.activeStickyIndex;
        if (activeStickyIndex) {
          if (typeof activeStickyIndex.set === "function") {
            let result = activeStickyIndex.set(activeStickyIndex2);
          } else {
            activeStickyIndex.value = activeStickyIndex2;
          }
        }
        let isAtEnd = tmp.isAtEnd;
        const isAtEnd2 = state.isAtEnd;
        if (isAtEnd) {
          if (typeof isAtEnd.set === "function") {
            const result1 = isAtEnd.set(isAtEnd2);
          } else {
            isAtEnd.value = isAtEnd2;
          }
        }
        let isAtStart = tmp.isAtStart;
        const isAtStart2 = state.isAtStart;
        if (isAtStart) {
          if (typeof isAtStart.set === "function") {
            const result2 = isAtStart.set(isAtStart2);
          } else {
            isAtStart.value = isAtStart2;
          }
        }
        let isNearEnd = tmp.isNearEnd;
        const isNearEnd2 = state.isNearEnd;
        if (isNearEnd) {
          if (typeof isNearEnd.set === "function") {
            const result3 = isNearEnd.set(isNearEnd2);
          } else {
            isNearEnd.value = isNearEnd2;
          }
        }
        let isNearStart = tmp.isNearStart;
        const isNearStart2 = state.isNearStart;
        if (isNearStart) {
          if (typeof isNearStart.set === "function") {
            const result4 = isNearStart.set(isNearStart2);
          } else {
            isNearStart.value = isNearStart2;
          }
        }
        let isWithinMaintainScrollAtEndThreshold = tmp.isWithinMaintainScrollAtEndThreshold;
        const isWithinMaintainScrollAtEndThreshold2 = state.isWithinMaintainScrollAtEndThreshold;
        if (isWithinMaintainScrollAtEndThreshold) {
          if (typeof isWithinMaintainScrollAtEndThreshold.set === "function") {
            const result5 = isWithinMaintainScrollAtEndThreshold.set(isWithinMaintainScrollAtEndThreshold2);
          } else {
            isWithinMaintainScrollAtEndThreshold.value = isWithinMaintainScrollAtEndThreshold2;
          }
        }
        const scrollOffset = tmp.scrollOffset;
        const scroll = state.scroll;
        if (scrollOffset) {
          if (typeof scrollOffset.set === "function") {
            const result6 = scrollOffset.set(scroll);
          } else {
            scrollOffset.value = scroll;
          }
        }
        let listenResult;
        if (tmp.activeStickyIndex) {
          listenResult = state.listen("activeStickyIndex", (value) => {
            const activeStickyIndex = closure_1.activeStickyIndex;
            if (activeStickyIndex) {
              if (typeof activeStickyIndex.set === "function") {
                const result = activeStickyIndex.set(value);
              } else {
                activeStickyIndex.value = value;
              }
            }
          });
        }
        items = [listenResult, , , , , ];
        let listenResult1;
        if (tmp.isAtEnd) {
          listenResult1 = state.listen("isAtEnd", (value) => {
            const isAtEnd = closure_1.isAtEnd;
            if (isAtEnd) {
              if (typeof isAtEnd.set === "function") {
                const result = isAtEnd.set(value);
              } else {
                isAtEnd.value = value;
              }
            }
          });
        }
        items[1] = listenResult1;
        let listenResult2;
        if (tmp.isAtStart) {
          listenResult2 = state.listen("isAtStart", (value) => {
            const isAtStart = closure_1.isAtStart;
            if (isAtStart) {
              if (typeof isAtStart.set === "function") {
                const result = isAtStart.set(value);
              } else {
                isAtStart.value = value;
              }
            }
          });
        }
        items[2] = listenResult2;
        let listenResult3;
        if (tmp.isNearEnd) {
          listenResult3 = state.listen("isNearEnd", (value) => {
            const isNearEnd = closure_1.isNearEnd;
            if (isNearEnd) {
              if (typeof isNearEnd.set === "function") {
                const result = isNearEnd.set(value);
              } else {
                isNearEnd.value = value;
              }
            }
          });
        }
        items[3] = listenResult3;
        let listenResult4;
        if (tmp.isNearStart) {
          listenResult4 = state.listen("isNearStart", (value) => {
            const isNearStart = closure_1.isNearStart;
            if (isNearStart) {
              if (typeof isNearStart.set === "function") {
                const result = isNearStart.set(value);
              } else {
                isNearStart.value = value;
              }
            }
          });
        }
        items[4] = listenResult4;
        let listenResult5;
        if (tmp.isWithinMaintainScrollAtEndThreshold) {
          listenResult5 = state.listen("isWithinMaintainScrollAtEndThreshold", (value) => {
            const isWithinMaintainScrollAtEndThreshold = closure_1.isWithinMaintainScrollAtEndThreshold;
            if (isWithinMaintainScrollAtEndThreshold) {
              if (typeof isWithinMaintainScrollAtEndThreshold.set === "function") {
                const result = isWithinMaintainScrollAtEndThreshold.set(value);
              } else {
                isWithinMaintainScrollAtEndThreshold.value = value;
              }
            }
          });
        }
        items[5] = listenResult5;
        return () => {
          const iter = items[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            if (null != nextResult) {
              let tmp4 = nextResult;
              let tmp3Result = tmp3();
            }
            continue;
          }
        };
      }
    }
  }, items);
  let obj = {};
  const merged = Object.assign(tmp);
  obj.animatedPropsInternal = sharedValues.animatedProps;
  obj.refLegendList = useCombinedRef(frozen.useCallback((arg0) => {
    arg0((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []), forwardedRef);
  obj = {};
  const merged1 = Object.assign(obj);
  obj.ref = sharedValues.refScrollView;
  return <closure_29 />;
}));