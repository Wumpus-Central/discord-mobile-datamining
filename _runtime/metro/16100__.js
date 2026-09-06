// _runtime/metro/16100__.js
import _mod16041 from "16041__.js";
import _slicedToArray from "00032__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";
import get_ActivityIndicator from "00017__.js";
import cancelAnimation from "../01636_cancelAnimation.js";

let closure_4 = ["id", "horizontal", "style", "refView", "stickyScrollOffset", "stickyHeaderConfig", "children"];
let closure_5 = ["id", "horizontal", "style", "refView", "children", "recycleItems", "layoutTransition"];
let closure_6 = ["itemLayoutAnimation", "recycleItems", "refLegendList", "renderScrollComponent", "sharedValues"];
let closure_7 = ["ref"];
let closure_8 = ["refScrollView"];
let closure_129_0 = noop;
let closure_129_1;
if (!noop) {
  let _Object = Object;
  let obj = Object.create(null);
  closure_129_1 = obj;
  if (noop) {
    const _Object2 = Object;
    const keys = Object.keys(noop);
    const item = keys.forEach((item) => {
      closure_0 = item;
      if ("default" !== item) {
        const _Object = Object;
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, item);
        if (!ownPropertyDescriptor.get) {
          const obj = {
            enumerable: true,
            get() {
                  return require[closure_0];
                }
          };
          ownPropertyDescriptor = obj;
        }
        Object.defineProperty(dependencyMap, item, ownPropertyDescriptor);
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
  obj = { default: cancelAnimation };
  let tmp7 = obj;
} else {
  tmp7 = cancelAnimation;
}
cancelAnimation = tmp7;
const POSITION_OUT_OF_VIEW = _mod16041.internal.POSITION_OUT_OF_VIEW;
const IsNewArchitecture = _mod16041.internal.IsNewArchitecture;
const getStickyPushLimit = _mod16041.internal.getStickyPushLimit;
const typedMemo = _mod16041.internal.typedMemo;
const useArr$ = _mod16041.internal.useArr$;
const useCombinedRef = _mod16041.internal.useCombinedRef;
const useLatestRef = _mod16041.internal.useLatestRef;
const useStableRenderComponent = _mod16041.internal.useStableRenderComponent;
const getComponent = _mod16041.internal.getComponent;
const peek$ = _mod16041.internal.peek$;
const useStateContext = _mod16041.internal.useStateContext;
function ReanimatedScrollOffsetTracker(arg0) {
  ({ animatedScrollRef, scrollOffset } = arg0);
  const scrollViewOffset = cancelAnimation.useScrollViewOffset(animatedScrollRef, scrollOffset);
  return null;
}
let closure_24 = typedMemo(function ReanimatedScrollBridgeComponent(forwardedRef) {
  ({ scrollOffset, renderScrollComponent } = forwardedRef);
  let merged = Object.assign(forwardedRef, Object.assign({ forwardedRef: 0, scrollOffset: 0, renderScrollComponent: 0 }));
  let obj = cancelAnimation;
  const animatedRef = obj.useAnimatedRef();
  let ScrollView = useStableRenderComponent(renderScrollComponent, (arg0, ref) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ref = ref;
    obj.scrollEventThrottle = 1;
    return obj;
  });
  if (!renderScrollComponent) {
    ScrollView = cancelAnimation.default.ScrollView;
  }
  let element = scrollOffset;
  if (scrollOffset) {
    obj = { animatedScrollRef: animatedRef, scrollOffset };
    element = <ReanimatedScrollOffsetTracker animatedScrollRef={animatedRef} scrollOffset={scrollOffset} />;
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
    const obj = { style: { inset: 0, pointerEvents: "none", position: "absolute" } };
    let backdropComponent1;
    if (null != stickyHeaderConfig) {
      backdropComponent1 = stickyHeaderConfig.backdropComponent;
    }
    element = <get ActivityIndicator.View style={{ inset: 0, pointerEvents: "none", position: "absolute" }}>{getComponent(backdropComponent1)}</get ActivityIndicator.View>;
  }
  return element;
});
const __initData = { code: "function pnpm_reanimatedJs1(){const{stickyScrollOffset,stickyStart,position,pushLimit,horizontal}=this.__closure;const delta=Math.max(0,stickyScrollOffset.value-stickyStart);const stickyPosition=position+delta;const resolvedPosition=pushLimit!==void 0?Math.min(stickyPosition,pushLimit):stickyPosition;return horizontal?{transform:[{translateX:resolvedPosition}]}:{transform:[{translateY:resolvedPosition}]};}" };
let closure_27 = typedMemo(function ReanimatedPositionViewStickyComponent(ref) {
  const tmp = useStateContext();
  _require = tmp;
  ({ id, horizontal } = ref);
  const style = ref.style;
  const stickyScrollOffset = ref.stickyScrollOffset;
  ({ stickyHeaderConfig, children } = ref);
  let items = ["containerPosition" + id, "headerSize", "stylePaddingTop", "containerItemKey" + id, "containerItemIndex" + id, "totalSize"];
  const tmp3 = style(useArr$(items), 6);
  let position = tmp3[0];
  if (undefined === position) {
    position = POSITION_OUT_OF_VIEW;
  }
  let num = 0;
  if (undefined !== tmp3[1]) {
    num = tmp5;
  }
  let num2 = 0;
  if (undefined !== tmp3[2]) {
    num2 = tmp6;
  }
  closure_5 = tmp7;
  closure_6 = tmp8;
  let num3 = 0;
  if (undefined !== tmp3[5]) {
    num3 = tmp9;
  }
  let obj = frozen;
  let items1 = [tmp.state, tmp3[4], tmp3[3], num3];
  const memo = frozen.useMemo(() => getStickyPushLimit(state.state, closure_6, closure_5), items1);
  let offset;
  if (null != stickyHeaderConfig) {
    offset = stickyHeaderConfig.offset;
  }
  let num4 = 0;
  if (null != offset) {
    num4 = offset;
  }
  const diff = position + num + num2 - num4;
  const tmp2 = stickyScrollOffset(ref, position);
  const fn = function l() {
    const sum = first + Math.max(0, stickyScrollOffset.value - diff);
    let bound = sum;
    if (undefined !== memo) {
      const _Math = Math;
      bound = Math.min(sum, tmp2);
    }
    let obj = { transform: null };
    if (horizontal) {
      obj = { translateX: bound };
      const items = [obj];
      obj.transform = items;
      let tmp4 = obj;
    } else {
      obj = { translateY: bound };
      const items1 = [obj];
      obj.transform = items1;
      tmp4 = obj;
    }
    return tmp4;
  };
  fn.__closure = { stickyScrollOffset, stickyStart: diff, position, pushLimit: memo, horizontal };
  fn.__workletHash = 15276407844125;
  fn.__initData = __initData;
  const items2 = [horizontal, position, memo, diff];
  const animatedStyle = require("cancelAnimation").useAnimatedStyle(fn, items2);
  const items3 = [tmp3[4], animatedStyle, style];
  obj = {
    ref: ref.refView,
    style: obj.useMemo(() => {
      const items = [style, { zIndex: closure_6 + 1000 }, animatedStyle];
      return items;
    }, items3)
  };
  const merged = Object.assign(tmp2);
  return obj.createElement(cancelAnimation.default.View, {
    ref: ref.refView,
    style: obj.useMemo(() => {
      const items = [style, { zIndex: closure_6 + 1000 }, animatedStyle];
      return items;
    }, items3)
  }, <closure_25 stickyHeaderConfig={stickyHeaderConfig} />, children);
});
let closure_28 = typedMemo(function ReanimatedPositionViewComponent(style) {
  ({ id, horizontal } = style);
  style = style.style;
  const layoutTransition = style.layoutTransition;
  ({ refView, children, recycleItems } = style);
  const tmp2 = _objectWithoutProperties(style, closure_5);
  let items = ["containerPosition" + id];
  let first = _slicedToArray(useArr$(items), 1)[0];
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
        let obj = { left: top };
      } else {
        obj = { top };
      }
      items[1] = obj;
      return items;
    }, items1);
    if (!flag) {
      tmp11 = layoutTransition;
    }
    obj = { layout: tmp11, ref: refView, style: memo };
    const merged = Object.assign(tmp2);
    return obj.createElement(cancelAnimation.default.View, { layout: tmp11, ref: refView, style: memo }, children);
  }
  ref.current = undefined;
  flag = false;
  tmp = useStateContext();
});
let closure_29 = tmp7.default.createAnimatedComponent(typedMemo(frozen.forwardRef(function LegendListForwardedRef2(refLegendList, refScrollView) {
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
  sharedValue = tmp9;
  let obj2 = frozen;
  const items1 = [renderScrollComponent];
  const memo = frozen.useMemo(() => {
    let fn;
    if (renderScrollComponent) {
      fn = (arg0) => renderScrollComponent(arg0);
    }
    return fn;
  }, items1);
  const items2 = [memo, tmp9];
  const items3 = [sharedValue];
  const callback1 = obj.useCallback((ref) => {
    const obj = {};
    const merged = Object.assign(_objectWithoutProperties(ref, closure_7));
    obj.forwardedRef = ref.ref;
    obj.renderScrollComponent = memo;
    obj.scrollOffset = sharedValue;
    return <closure_24 />;
  }, items2);
  const memo1 = frozen.useMemo(() => function StickyPositionComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.stickyScrollOffset = stickyScrollOffset;
    return <closure_2_27 />;
  }, items3);
  closure_6 = useLatestRef(itemLayoutAnimation);
  itemLayoutAnimation = tmp13;
  const items4 = [itemLayoutAnimation, recycleItems];
  obj = {};
  const memo2 = frozen.useMemo(() => itemLayoutAnimation ? (function PositionComponent(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.layoutTransition = ref.current;
    obj.recycleItems = recycleItems;
    return <closure_2_28 />;
  }) : undefined, items4);
  let merged = Object.assign(tmp);
  obj.positionComponentInternal = memo2;
  obj.recycleItems = recycleItems;
  obj = { renderScrollComponent: callback1 };
  if (IsNewArchitecture) {
    obj1 = { stickyPositionComponentInternal: memo1 };
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
  sharedValues = sharedValues.sharedValues;
  let tmp = _objectWithoutProperties(sharedValues, closure_8);
  [tmp3, require] = _slicedToArray(frozen.useState(null), 2);
  require = tmp3;
  let items = [tmp3, sharedValues];
  const tmp2 = _slicedToArray(frozen.useState(null), 2);
  const effect = frozen.useEffect(() => {
    if (items) {
      if (sharedValues) {
        const state = obj.getState();
        let activeStickyIndex = sharedValues.activeStickyIndex;
        const activeStickyIndex2 = state.activeStickyIndex;
        if (activeStickyIndex) {
          if (typeof activeStickyIndex.set === "function") {
            let result = activeStickyIndex.set(activeStickyIndex2);
          } else {
            activeStickyIndex.value = activeStickyIndex2;
          }
        }
        let isAtEnd = sharedValues.isAtEnd;
        const isAtEnd2 = state.isAtEnd;
        if (isAtEnd) {
          if (typeof isAtEnd.set === "function") {
            const result1 = isAtEnd.set(isAtEnd2);
          } else {
            isAtEnd.value = isAtEnd2;
          }
        }
        let isAtStart = sharedValues.isAtStart;
        const isAtStart2 = state.isAtStart;
        if (isAtStart) {
          if (typeof isAtStart.set === "function") {
            const result2 = isAtStart.set(isAtStart2);
          } else {
            isAtStart.value = isAtStart2;
          }
        }
        let isNearEnd = sharedValues.isNearEnd;
        const isNearEnd2 = state.isNearEnd;
        if (isNearEnd) {
          if (typeof isNearEnd.set === "function") {
            const result3 = isNearEnd.set(isNearEnd2);
          } else {
            isNearEnd.value = isNearEnd2;
          }
        }
        let isNearStart = sharedValues.isNearStart;
        const isNearStart2 = state.isNearStart;
        if (isNearStart) {
          if (typeof isNearStart.set === "function") {
            const result4 = isNearStart.set(isNearStart2);
          } else {
            isNearStart.value = isNearStart2;
          }
        }
        let isWithinMaintainScrollAtEndThreshold = sharedValues.isWithinMaintainScrollAtEndThreshold;
        const isWithinMaintainScrollAtEndThreshold2 = state.isWithinMaintainScrollAtEndThreshold;
        if (isWithinMaintainScrollAtEndThreshold) {
          if (typeof isWithinMaintainScrollAtEndThreshold.set === "function") {
            const result5 = isWithinMaintainScrollAtEndThreshold.set(isWithinMaintainScrollAtEndThreshold2);
          } else {
            isWithinMaintainScrollAtEndThreshold.value = isWithinMaintainScrollAtEndThreshold2;
          }
        }
        const scrollOffset = sharedValues.scrollOffset;
        const scroll = state.scroll;
        if (scrollOffset) {
          if (typeof scrollOffset.set === "function") {
            const result6 = scrollOffset.set(scroll);
          } else {
            scrollOffset.value = scroll;
          }
        }
        let listenResult;
        if (sharedValues.activeStickyIndex) {
          listenResult = state.listen("activeStickyIndex", (value) => {
            const activeStickyIndex = sharedValues.activeStickyIndex;
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
        if (sharedValues.isAtEnd) {
          listenResult1 = state.listen("isAtEnd", (value) => {
            const isAtEnd = sharedValues.isAtEnd;
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
        if (sharedValues.isAtStart) {
          listenResult2 = state.listen("isAtStart", (value) => {
            const isAtStart = sharedValues.isAtStart;
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
        if (sharedValues.isNearEnd) {
          listenResult3 = state.listen("isNearEnd", (value) => {
            const isNearEnd = sharedValues.isNearEnd;
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
        if (sharedValues.isNearStart) {
          listenResult4 = state.listen("isNearStart", (value) => {
            const isNearStart = sharedValues.isNearStart;
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
        if (sharedValues.isWithinMaintainScrollAtEndThreshold) {
          listenResult5 = state.listen("isWithinMaintainScrollAtEndThreshold", (value) => {
            const isWithinMaintainScrollAtEndThreshold = sharedValues.isWithinMaintainScrollAtEndThreshold;
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
              let tmp3Result = tmp3();
            }
            continue;
          }
        };
      }
    }
    obj = items;
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