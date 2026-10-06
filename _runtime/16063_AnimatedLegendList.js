// === Module 16063: AnimatedLegendList ===

// Module 16063 (AnimatedLegendList)
import LegendList2 from "LegendList" /* 16007 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import cancelAnimation_mod from "module_1643" /* 1643 */;

const require = globalThis.__r;
let _require;

let frozen;
let tmp7;
let closure_4 = ["id", "horizontal", "style", "refView", "stickyScrollOffset", "stickyHeaderConfig", "children"];
let closure_5 = ["id", "horizontal", "style", "refView", "children", "recycleItems", "layoutTransition"];
let closure_6 = ["itemLayoutAnimation", "recycleItems", "refLegendList", "renderScrollComponent", "sharedValues"];
let closure_7 = ["ref"];
let closure_8 = ["refScrollView"];
let obj;
if (!react) {
  let tmp2 = globalThis;
  let _Object = Object;
  let tmp3 = null;
  obj = Object.create(null);
  if (react) {
    let _Object2 = Object;
    const keys = Object.keys(react);
    const item = keys.forEach((item) => {
      let closure_0 = item;
      if ("default" !== item) {
        const _Object = Object;
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(closure_0, item);
        const _Object2 = Object;
        const tmp4 = obj;
        if (!ownPropertyDescriptor.get) {
          obj = {
            enumerable: true,
            get() {
                  return react[item];
                }
          };
          ownPropertyDescriptor = obj;
        }
        defineProperty(tmp4, item, ownPropertyDescriptor);
      }
    });
  }
  obj.default = react;
  const _Object3 = Object;
  frozen = Object.freeze(obj);
} else {
  frozen = react;
}
let cancelAnimation = cancelAnimation_mod;
if (!cancelAnimation) {
  let obj2 = { default: cancelAnimation };
  tmp7 = obj2;
} else {
  tmp7 = cancelAnimation;
}
cancelAnimation = tmp7;
const POSITION_OUT_OF_VIEW = LegendList2.internal.POSITION_OUT_OF_VIEW;
const IsNewArchitecture = LegendList2.internal.IsNewArchitecture;
const getStickyPushLimit = LegendList2.internal.getStickyPushLimit;
const typedMemo = LegendList2.internal.typedMemo;
const useArr$ = LegendList2.internal.useArr$;
const useCombinedRef = LegendList2.internal.useCombinedRef;
const useLatestRef = LegendList2.internal.useLatestRef;
const useStableRenderComponent = LegendList2.internal.useStableRenderComponent;
const getComponent = LegendList2.internal.getComponent;
const peek$ = LegendList2.internal.peek$;
const useStateContext = LegendList2.internal.useStateContext;
function ReanimatedScrollOffsetTracker(arg0) {
  let animatedScrollRef;
  let scrollOffset;
  ({ animatedScrollRef, scrollOffset } = arg0);
  const obj = cancelAnimation;
  const scrollViewOffset = obj.useScrollViewOffset(animatedScrollRef, scrollOffset);
  return null;
}
let closure_24 = typedMemo(function ReanimatedScrollBridgeComponent(forwardedRef) {
  let renderScrollComponent;
  let scrollOffset;
  ({ scrollOffset, renderScrollComponent } = forwardedRef);
  forwardedRef = forwardedRef.forwardedRef;
  let merged = Object.assign(forwardedRef, Object.assign({ forwardedRef: 0, scrollOffset: 0, renderScrollComponent: 0 }));
  let obj = cancelAnimation;
  const animatedRef = obj.useAnimatedRef();
  const tmp3 = useCombinedRef(animatedRef, forwardedRef);
  let ScrollView = useStableRenderComponent(renderScrollComponent, (arg0, ref) => {
    const obj = { ref, scrollEventThrottle: 1 };
    const merged = Object.assign(arg0);
    return obj;
  });
  if (!renderScrollComponent) {
    ScrollView = cancelAnimation.default.ScrollView;
  }
  const Fragment = frozen.Fragment;
  let element = scrollOffset;
  const createElement = frozen.createElement;
  if (scrollOffset) {
    element = <ReanimatedScrollOffsetTracker animatedScrollRef={animatedRef} scrollOffset={scrollOffset} />;
  }
  const createElement2 = frozen.createElement;
  const obj4 = { ref: tmp3 };
  const merged1 = Object.assign(merged);
  return <>{element}{createElement2(ScrollView, obj4)}</>;
});
let closure_25 = typedMemo(function StickyOverlayComponent(stickyHeaderConfig) {
  stickyHeaderConfig = stickyHeaderConfig.stickyHeaderConfig;
  let backdropComponent;
  if (null != stickyHeaderConfig) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  let element = null;
  if (backdropComponent) {
    let backdropComponent1;
    const createElement = frozen.createElement;
    const View = react_native.View;
    if (null != stickyHeaderConfig) {
      backdropComponent1 = stickyHeaderConfig.backdropComponent;
    }
    element = <View style={{ inset: 0, pointerEvents: "none", position: "absolute" }}>{getComponent(backdropComponent1)}</View>;
  }
  return element;
});
const __initData = { code: "function pnpm_reanimatedJs1(){const{stickyScrollOffset,stickyStart,position,pushLimit,horizontal}=this.__closure;const delta=Math.max(0,stickyScrollOffset.value-stickyStart);const stickyPosition=position+delta;const resolvedPosition=pushLimit!==void 0?Math.min(stickyPosition,pushLimit):stickyPosition;return horizontal?{transform:[{translateX:resolvedPosition}]}:{transform:[{translateY:resolvedPosition}]};}" };
let closure_27 = typedMemo(function ReanimatedPositionViewStickyComponent(style) {
  let children;
  let horizontal;
  let id;
  let position;
  let state;
  let stickyHeaderConfig;
  const tmp = useStateContext();
  _require = tmp;
  ({ id, horizontal } = style);
  style = style.style;
  const stickyScrollOffset = style.stickyScrollOffset;
  ({ stickyHeaderConfig, children } = style);
  const refView = style.refView;
  const tmp2 = stickyScrollOffset(style, position);
  let items = ["containerPosition" + id, "headerSize", "stylePaddingTop", "containerItemKey" + id, "containerItemIndex" + id, "totalSize"];
  const tmp3 = style(useArr$(items), 6);
  position = tmp3[0];
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
  closure_8 = diff;
  let obj2 = require("module_1643");
  const fn = function l() {
    let tmp4;
    const sum = first + Math.max(0, stickyScrollOffset.value - closure_8);
    let bound = sum;
    if (undefined !== memo) {
      const _Math = Math;
      bound = Math.min(sum, tmp2);
    }
    const obj = { transform: null };
    if (horizontal) {
      const items = [{ translateX: bound }];
      const obj2 = { translateX: bound };
      obj.transform = items;
      tmp4 = obj;
    } else {
      const items1 = [{ translateY: bound }];
      const obj3 = { translateY: bound };
      obj.transform = items1;
      tmp4 = obj;
    }
    return tmp4;
  };
  fn.__closure = { stickyScrollOffset, stickyStart: diff, position, pushLimit: memo, horizontal };
  fn.__workletHash = 15276407844125;
  fn.__initData = __initData;
  const items2 = [horizontal, position, memo, diff];
  const animatedStyle = obj2.useAnimatedStyle(fn, items2);
  const items3 = [tmp3[4], animatedStyle, style];
  const View = cancelAnimation.default.View;
  const createElement = frozen.createElement;
  const merged = Object.assign(tmp2);
  return <View ref={refView} style={frozen.useMemo(() => {
    const items = [style, , ];
    const obj = { zIndex: closure_6 + 1000 };
    items[1] = obj;
    items[2] = animatedStyle;
    return items;
  }, items3)}><closure_25 stickyHeaderConfig={stickyHeaderConfig} />{children}</View>;
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
  const tmp = useStateContext();
  const tmp2 = _objectWithoutProperties(style, closure_5);
  let items = ["containerPosition" + id];
  let first = _slicedToArray(useArr$(items), 1)[0];
  if (undefined === first) {
    first = POSITION_OUT_OF_VIEW;
  }
  const ref = frozen.useRef(undefined);
  if (recycleItems) {
    let flag;
    if (layoutTransition) {
      const _HermesInternal = HermesInternal;
      const tmp6 = peek$(tmp, "containerItemKey" + id);
      flag = tmp8;
      if (undefined !== tmp6) {
        ref.current = tmp6;
        flag = tmp8;
      }
    }
    const items1 = [horizontal, first, style];
    let tmp11;
    const memo = frozen.useMemo(() => {
      let obj;
      const items = [style, ];
      if (horizontal) {
        obj = { left: top };
        const obj2 = { left: top };
      } else {
        obj = { top };
      }
      items[1] = obj;
      return items;
    }, items1);
    const createElement = frozen.createElement;
    const View = cancelAnimation.default.View;
    if (!flag) {
      tmp11 = layoutTransition;
    }
    const merged = Object.assign(tmp2);
    return <View layout={tmp11} ref={refView} style={memo}>{children}</View>;
  }
  ref.current = undefined;
  flag = false;
});
const _default = tmp7.default;
let closure_29 = _default.createAnimatedComponent(typedMemo(frozen.forwardRef(function LegendListForwardedRef2(refLegendList, refScrollView) {
  let itemLayoutAnimation;
  let memo2;
  let obj6;
  let recycleItems;
  let sharedValue;
  ({ itemLayoutAnimation, recycleItems } = refLegendList);
  refLegendList = refLegendList.refLegendList;
  const renderScrollComponent = refLegendList.renderScrollComponent;
  const sharedValues = refLegendList.sharedValues;
  const tmp = sharedValue(refLegendList, closure_6);
  const items = [refLegendList];
  const callback = react.useCallback((arg0) => {
    refLegendList(arg0);
  }, items);
  const obj2 = recycleItems(refLegendList[4]);
  sharedValue = obj2.useSharedValue(0);
  let scrollOffset;
  const tmp4 = refLegendList;
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
  }
  sharedValue = tmp9;
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
  const callback1 = react.useCallback((ref) => {
    const createElement = frozen.createElement;
    const merged = Object.assign(_objectWithoutProperties(ref, closure_7));
    return <closure_24 forwardedRef={ref.ref} renderScrollComponent={memo} scrollOffset={sharedValue} />;
  }, items2);
  const memo1 = frozen.useMemo(() => {
    let stickyScrollOffset;
    return function StickyPositionComponent(arg0) {
      const createElement = React.createElement;
      const merged = Object.assign(arg0);
      return <closure_2_27 stickyScrollOffset={stickyScrollOffset} />;
    };
  }, items3);
  closure_6 = useLatestRef(itemLayoutAnimation);
  itemLayoutAnimation = tmp14;
  const items4 = [itemLayoutAnimation, recycleItems];
  const obj3 = { positionComponentInternal: memo2, recycleItems };
  memo2 = frozen.useMemo(() => {
    let ref;
    return itemLayoutAnimation ? (function PositionComponent(arg0) {
      const createElement = React.createElement;
      const merged = Object.assign(arg0);
      return <closure_2_28 layoutTransition={ref.current} recycleItems={recycleItems} />;
    }) : undefined;
  }, items4);
  let merged = Object.assign(tmp);
  const obj4 = { renderScrollComponent: callback1 };
  if (IsNewArchitecture) {
    obj6 = { stickyPositionComponentInternal: memo1 };
    const obj5 = { stickyPositionComponentInternal: memo1 };
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  const merged2 = Object.assign(obj4);
  let createElement = frozen.createElement;
  const LegendList = recycleItems(tmp4[5]).LegendList;
  const merged3 = Object.assign(obj3);
  return <LegendList ref={callback} refScrollView={refScrollView} />;
})));

export const AnimatedLegendList = typedMemo(frozen.forwardRef(function AnimatedLegendList2(refScrollView, forwardedRef) {
  let closure_129_0;
  let tmp3;
  refScrollView = refScrollView.refScrollView;
  let tmp = _objectWithoutProperties(refScrollView, closure_8);
  const sharedValues = refScrollView.sharedValues;
  const animatedProps = refScrollView.animatedProps;
  [tmp3, closure_129_0] = frozen.useState(null);
  let closure_0 = tmp3;
  let items = [tmp3, sharedValues];
  _slicedToArray(frozen.useState(null), 2);
  let tmp4 = useCombinedRef(frozen.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_1_0((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []), forwardedRef);
  const effect = frozen.useEffect(() => {
    let items;
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
  }, items);
  const obj = { animatedPropsInternal: animatedProps, refLegendList: tmp4 };
  const merged = Object.assign(tmp);
  const createElement = frozen.createElement;
  const merged1 = Object.assign(obj);
  return <closure_29 ref={refScrollView} />;
}));