// === Module 5732: InnerScreen ===

// Module 5732 (InnerScreen)
import Fragment from "Fragment" /* 21 */;
import get_synchronousScreenUpdatesEnabledDefault from "get synchronousScreenUpdatesEnabled" /* 5722 */;
import react_native from "react-native" /* 5731 */;
import _modDef5733 from "module_5733" /* 5733 */;
import animatedComponentDefault from "animatedComponent" /* 5734 */;
import react2 from "react" /* 5735 */;
import SHEET_FIT_TO_CONTENTS from "SHEET_FIT_TO_CONTENTS" /* 5736 */;
import DelayedFreezeDefault from "DelayedFreeze" /* 5737 */;
import react_native2 from "react-native" /* 5739 */;
import reactDefault from "react" /* 5740 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native3 from "react-native" /* 17 */;

let closure_3 = ["enabled", "freezeOnBlur", "shouldFreeze"];
let closure_4 = ["active", "activityState", "children", "isNativeStack", "fullScreenSwipeEnabled", "gestureResponseDistance", "scrollEdgeEffects", "onGestureCancel", "style"];
let closure_5 = ["active", "activityState", "style", "onComponentRef"];
const Animated = react_native3.Animated;
const jsx = Fragment.jsx;
const __INTERNAL_VIEW_CONFIG = Animated.createAnimatedComponent(_modDef5733);
const animatedComponent = Animated.createAnimatedComponent(animatedComponentDefault);
const forwardRefResult = react.forwardRef(function InnerScreen(activityState, arg1) {
  let active;
  let active2;
  let activityState2;
  let bottom;
  let children;
  let eventResult;
  let fullScreenSwipeEnabled;
  let gestureResponseDistance;
  let isNativeStack;
  let items;
  let left;
  let num10;
  let num8;
  let num9;
  let obj6;
  let onComponentRef;
  let onGestureCancel;
  let rect;
  let right;
  let scrollEdgeEffects;
  let style2;
  let tmp2Result10;
  let tmp31Result;
  let top;
  let closure_0 = activityState;
  let closure_1 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ref.current, []);
  let obj = react2;
  const previous = obj.usePrevious(activityState.activityState);
  function setRef(current) {
    ref.current = current;
    const onComponentRef = closure_0.onComponentRef;
    if (onComponentRef != null) {
      onComponentRef(current);
    }
  }
  const useRef = react.useRef;
  const value = new Animated.Value(0);
  const current = useRef(value).current;
  const useRef2 = react.useRef;
  const value3 = new Animated.Value(0);
  const current2 = useRef2(value3).current;
  const useRef3 = react.useRef;
  const value4 = new Animated.Value(0);
  const current3 = useRef3(value4).current;
  let enabled = activityState.enabled;
  if (undefined === enabled) {
    const tmp2Result = react_native;
    enabled = tmp2Result.screensEnabled();
  }
  let freezeOnBlur = activityState.freezeOnBlur;
  if (undefined === freezeOnBlur) {
    const tmp2Result6 = react_native;
    freezeOnBlur = tmp2Result6.freezeEnabled();
  }
  let shouldFreeze = activityState.shouldFreeze;
  const tmp9 = _objectWithoutProperties(activityState, closure_3);
  let sheetAllowedDetents = tmp9.sheetAllowedDetents;
  if (undefined === sheetAllowedDetents) {
    sheetAllowedDetents = [1];
  }
  let SHEET_DIMMED_ALWAYS = tmp9.sheetLargestUndimmedDetentIndex;
  if (undefined === SHEET_DIMMED_ALWAYS) {
    SHEET_DIMMED_ALWAYS = SHEET_FIT_TO_CONTENTS.SHEET_DIMMED_ALWAYS;
  }
  const sheetGrabberVisible = tmp9.sheetGrabberVisible;
  const sheetCornerRadius = tmp9.sheetCornerRadius;
  let num = -1;
  const tmp10 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  if (undefined !== sheetCornerRadius) {
    num = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = tmp9.sheetExpandsWhenScrolledToEdge;
  const sheetElevation = tmp9.sheetElevation;
  let num2 = 24;
  const tmp11 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  if (undefined !== sheetElevation) {
    num2 = sheetElevation;
  }
  const sheetInitialDetentIndex = tmp9.sheetInitialDetentIndex;
  let num3 = 0;
  if (undefined !== sheetInitialDetentIndex) {
    num3 = sheetInitialDetentIndex;
  }
  const sheetShouldOverflowTopInset = tmp9.sheetShouldOverflowTopInset;
  const sheetDefaultResizeAnimationEnabled = tmp9.sheetDefaultResizeAnimationEnabled;
  const tmp12 = undefined !== sheetShouldOverflowTopInset && sheetShouldOverflowTopInset;
  const tmp13 = undefined === sheetDefaultResizeAnimationEnabled || sheetDefaultResizeAnimationEnabled;
  if (enabled) {
    if (react_native.isNativePlatformSupported) {
      const tmp2Result7 = SHEET_FIT_TO_CONTENTS;
      const sheetAllowedDetents1 = tmp2Result7.resolveSheetAllowedDetents(sheetAllowedDetents);
      const tmp2Result8 = SHEET_FIT_TO_CONTENTS;
      const sheetLargestUndimmedDetent = tmp2Result8.resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, sheetAllowedDetents1.length - 1);
      ({ active: active2, activityState: activityState2, children, isNativeStack, gestureResponseDistance, scrollEdgeEffects, onGestureCancel } = tmp9);
      const tmp2Result9 = SHEET_FIT_TO_CONTENTS;
      const sheetInitialDetentIndex1 = tmp2Result9.resolveSheetInitialDetentIndex(num3, sheetAllowedDetents1.length - 1);
      ({ fullScreenSwipeEnabled, style: style2 } = tmp9);
      const tmp28 = undefined !== active2 && undefined === activityState2;
      const tmp8Result = _objectWithoutProperties(tmp9, closure_4);
      if (tmp28) {
        const _console = console;
        console.warn("It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens");
        let num6 = 0;
        if (0 !== active2) {
          num6 = 2;
        }
        activityState2 = num6;
      }
      if (isNativeStack) {
        if (undefined !== previous) {
          if (undefined !== activityState2) {
            if (previous > activityState2) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("[RNScreens] activityState cannot be decreased in NativeStack");
              throw error;
            }
          }
        }
      }
      if (freezeOnBlur) {
        if (undefined === shouldFreeze) {
          shouldFreeze = 0 === activityState2;
        }
        freezeOnBlur = shouldFreeze;
      }
      ({
        onAppear: tmp15,
        onDisappear: tmp16,
        onWillAppear: tmp17,
        onWillDisappear: tmp18,
        onGestureCancel,
        style: items,
        activityState: activityState2,
        screenId: tmp14,
        sheetAllowedDetents: sheetAllowedDetents1,
        sheetLargestUndimmedDetent,
        sheetElevation: num2,
        sheetShouldOverflowTopInset: tmp12,
        sheetDefaultResizeAnimationEnabled: tmp13,
        sheetGrabberVisible: tmp10,
        sheetCornerRadius: num,
        sheetExpandsWhenScrolledToEdge: tmp11,
        sheetInitialDetent: sheetInitialDetentIndex1,
        fullScreenSwipeEnabled: tmp2Result10.parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled),
        gestureResponseDistance: rect,
        ref(viewConfig) {
              let style;
              if (viewConfig != null) {
                viewConfig = viewConfig.viewConfig;
                if (viewConfig != null) {
                  const validAttributes = viewConfig.validAttributes;
                  if (validAttributes != null) {
                    style = validAttributes.style;
                  }
                }
              }
              if (style) {
                const validAttributes2 = viewConfig.viewConfig.validAttributes;
                const obj2 = { display: null };
                const merged = Object.assign(viewConfig.viewConfig.validAttributes.style);
                validAttributes2.style = obj2;
              } else {
                let style1;
                if (viewConfig != null) {
                  const _viewConfig = viewConfig._viewConfig;
                  if (_viewConfig != null) {
                    const validAttributes3 = _viewConfig.validAttributes;
                    if (validAttributes3 != null) {
                      style1 = validAttributes3.style;
                    }
                  }
                }
                if (style1) {
                  const validAttributes4 = viewConfig._viewConfig.validAttributes;
                  const obj3 = { display: null };
                  const merged1 = Object.assign(viewConfig._viewConfig.validAttributes.style);
                  validAttributes4.style = obj3;
                } else {
                  let style2;
                  if (viewConfig != null) {
                    const __viewConfig = viewConfig.__viewConfig;
                    if (__viewConfig != null) {
                      const validAttributes5 = __viewConfig.validAttributes;
                      if (validAttributes5 != null) {
                        style2 = validAttributes5.style;
                      }
                    }
                  }
                  if (style2) {
                    const validAttributes6 = viewConfig.__viewConfig.validAttributes;
                    const obj = { display: null };
                    const merged2 = Object.assign(viewConfig.__viewConfig.validAttributes.style);
                    validAttributes6.style = obj;
                  }
                }
              }
              if (typeof setRef === "function") {
                ref.current = viewConfig;
                const onComponentRef = closure_0.onComponentRef;
                if (onComponentRef != null) {
                  onComponentRef(viewConfig);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            },
        onTransitionProgress: eventResult,
        bottomScrollEdgeEffect: bottom,
        leftScrollEdgeEffect: left,
        rightScrollEdgeEffect: right,
        topScrollEdgeEffect: top,
        synchronousShadowStateUpdatesEnabled: get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousScreenUpdatesEnabled,
        androidResetScreenShadowStateOnOrientationChangeEnabled: get_synchronousScreenUpdatesEnabledDefault.experiment.androidResetScreenShadowStateOnOrientationChangeEnabled,
        iosOrientationInheritanceFixEnabled: get_synchronousScreenUpdatesEnabledDefault.experiment.iosOrientationInheritanceFixEnabled,
        children: tmp31Result
      });
      DelayedFreezeDefault;
      let merged = Object.assign(tmp8Result);
      if (onGestureCancel == null) {
        onGestureCancel = () => {

        };
      }
      items = [style2, { zIndex: "r" }];
      let num7;
      tmp2Result10 = react_native2;
      if (gestureResponseDistance != null) {
        num7 = gestureResponseDistance.start;
      }
      if (num7 == null) {
        num7 = -1;
      }
      rect = { start: num7, end: num8, top: num9, bottom: num10 };
      num8 = undefined;
      if (gestureResponseDistance != null) {
        num8 = gestureResponseDistance.end;
      }
      if (num8 == null) {
        num8 = -1;
      }
      num9 = undefined;
      if (gestureResponseDistance != null) {
        num9 = gestureResponseDistance.top;
      }
      if (num9 == null) {
        num9 = -1;
      }
      num10 = undefined;
      if (gestureResponseDistance != null) {
        num10 = gestureResponseDistance.bottom;
      }
      if (num10 == null) {
        num10 = -1;
      }
      eventResult = undefined;
      if (isNativeStack) {
        const obj5 = { nativeEvent: obj6 };
        const items1 = [obj5];
        obj6 = { progress: current2, closing: current, goingForward: current3 };
        eventResult = Animated.event(items1, { useNativeDriver: true });
      }
      bottom = undefined;
      if (scrollEdgeEffects != null) {
        bottom = scrollEdgeEffects.bottom;
      }
      left = undefined;
      if (scrollEdgeEffects != null) {
        left = scrollEdgeEffects.left;
      }
      right = undefined;
      if (scrollEdgeEffects != null) {
        right = scrollEdgeEffects.right;
      }
      top = undefined;
      if (scrollEdgeEffects != null) {
        top = scrollEdgeEffects.top;
      }
      tmp31Result = children;
      if (isNativeStack) {
        const obj8 = { progress: current2, closing: current, goingForward: current3 };
        tmp31Result = jsx(reactDefault.Provider, { value: obj8, children });
      }
      return <tmp33 freeze={freezeOnBlur}>{null}</tmp33>;
    }
  }
  ({ active, activityState, onComponentRef } = tmp9);
  let style = tmp9.style;
  const tmp20 = undefined !== active && undefined === activityState;
  const tmp8Result2 = _objectWithoutProperties(tmp9, closure_5);
  if (tmp20) {
    let num4 = 0;
    if (0 !== active) {
      num4 = 2;
    }
    activityState = num4;
  }
  const items2 = [style, ];
  let str = "none";
  const View = Animated.View;
  if (0 !== activityState) {
    str = "flex";
  }
  items2[1] = { display: str };
  let merged1 = Object.assign(tmp8Result2);
  return <View style={items2} ref={setRef} />;
});
const unpackModuleId = forwardRefResult;
const context = react.createContext(forwardRefResult);
const forwardRefResult1 = react.forwardRef((arg0, ref) => {
  react.useContext(context) || unpackModuleId;
  const merged = Object.assign(arg0);
  return <tmp ref={ref} />;
});
forwardRefResult1.displayName = "Screen";

export default forwardRefResult1;
export const InnerScreen = forwardRefResult;
export const ScreenContext = context;