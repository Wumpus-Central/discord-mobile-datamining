// === Module 5228: ? ===

// Module 5228
import get_synchronousScreenUpdatesEnabledDefault from "get synchronousScreenUpdatesEnabled" /* 5218 */;
import _mod5227 from "module_5227" /* 5227 */;
import _modDef5229 from "module_5229" /* 5229 */;
import animatedComponentDefault from "animatedComponent" /* 5230 */;
import _mod5231 from "module_5231" /* 5231 */;
import SHEET_FIT_TO_CONTENTS from "SHEET_FIT_TO_CONTENTS" /* 5232 */;
import DelayedFreezeDefault from "DelayedFreeze" /* 5233 */;
import _mod5235 from "module_5235" /* 5235 */;
import _modDef5236 from "module_5236" /* 5236 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["enabled", "freezeOnBlur", "shouldFreeze"];
let closure_4 = ["active", "activityState", "children", "isNativeStack", "fullScreenSwipeEnabled", "gestureResponseDistance", "scrollEdgeEffects", "onGestureCancel", "style"];
let closure_5 = ["active", "activityState", "style", "onComponentRef"];
get_ActivityIndicator = fn(17);
const Animated = get_ActivityIndicator.Animated;
const jsx = fn(21).jsx;
const __INTERNAL_VIEW_CONFIG = Animated.createAnimatedComponent(_modDef5229);
const animatedComponent = Animated.createAnimatedComponent(animatedComponentDefault);
const forwardRefResult = noop.forwardRef(function InnerScreen(activityState, arg1) {
  noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ref.current, []);
  const previous = _mod5231.usePrevious(activityState.activityState);
  function setRef(current) {
    closure_1.current = current;
    const onComponentRef = activityState.onComponentRef;
    if (onComponentRef != null) {
      onComponentRef(current);
    }
  }
  value = new Animated.Value(0);
  const current = noop.useRef(value).current;
  const value3 = new Animated.Value(0);
  const current2 = noop.useRef(value3).current;
  const value4 = new Animated.Value(0);
  const current3 = noop.useRef(value4).current;
  let enabled = activityState.enabled;
  if (undefined === enabled) {
    enabled = _mod5227.screensEnabled();
    const tmp2Result = _mod5227;
  }
  let freezeOnBlur = activityState.freezeOnBlur;
  if (undefined === freezeOnBlur) {
    freezeOnBlur = _mod5227.freezeEnabled();
    const tmp2Result6 = _mod5227;
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
  if (undefined !== sheetCornerRadius) {
    num = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = tmp9.sheetExpandsWhenScrolledToEdge;
  const sheetElevation = tmp9.sheetElevation;
  let num2 = 24;
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
  if (enabled) {
    if (_mod5227.isNativePlatformSupported) {
      const sheetAllowedDetents1 = SHEET_FIT_TO_CONTENTS.resolveSheetAllowedDetents(sheetAllowedDetents);
      const tmp2Result7 = SHEET_FIT_TO_CONTENTS;
      const sheetLargestUndimmedDetent = SHEET_FIT_TO_CONTENTS.resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, sheetAllowedDetents1.length - 1);
      const tmp2Result8 = SHEET_FIT_TO_CONTENTS;
      ({ active: active2, activityState: activityState2, children, isNativeStack, gestureResponseDistance, scrollEdgeEffects, onGestureCancel } = tmp9);
      const sheetInitialDetentIndex1 = SHEET_FIT_TO_CONTENTS.resolveSheetInitialDetentIndex(num3, sheetAllowedDetents1.length - 1);
      ({ fullScreenSwipeEnabled, style } = tmp9);
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
      let obj3 = { freeze: freezeOnBlur, children: null };
      const obj4 = {};
      tmp28 = undefined !== active2 && undefined === activityState2;
      const tmp2Result9 = SHEET_FIT_TO_CONTENTS;
      let merged = Object.assign(tmp8Result);
      obj4.onAppear = tmp15;
      obj4.onDisappear = tmp16;
      obj4.onWillAppear = tmp17;
      obj4.onWillDisappear = tmp18;
      if (onGestureCancel == null) {
        onGestureCancel = () => {

        };
      }
      obj4.onGestureCancel = onGestureCancel;
      const items = [style, { zIndex: "__initData" }];
      obj4.style = items;
      obj4.activityState = activityState2;
      obj4.screenId = tmp14;
      obj4.sheetAllowedDetents = sheetAllowedDetents1;
      obj4.sheetLargestUndimmedDetent = sheetLargestUndimmedDetent;
      obj4.sheetElevation = num2;
      obj4.sheetShouldOverflowTopInset = tmp12;
      obj4.sheetDefaultResizeAnimationEnabled = tmp13;
      obj4.sheetGrabberVisible = tmp10;
      obj4.sheetCornerRadius = num;
      obj4.sheetExpandsWhenScrolledToEdge = tmp11;
      obj4.sheetInitialDetent = sheetInitialDetentIndex1;
      obj4.fullScreenSwipeEnabled = _mod5235.parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled);
      let num7;
      if (gestureResponseDistance != null) {
        num7 = gestureResponseDistance.start;
      }
      if (num7 == null) {
        num7 = -1;
      }
      const rect = { start: num7, end: null, top: null, bottom: null };
      let num8;
      if (gestureResponseDistance != null) {
        num8 = gestureResponseDistance.end;
      }
      if (num8 == null) {
        num8 = -1;
      }
      rect.end = num8;
      let num9;
      if (gestureResponseDistance != null) {
        num9 = gestureResponseDistance.top;
      }
      if (num9 == null) {
        num9 = -1;
      }
      rect.top = num9;
      let num10;
      if (gestureResponseDistance != null) {
        num10 = gestureResponseDistance.bottom;
      }
      if (num10 == null) {
        num10 = -1;
      }
      rect.bottom = num10;
      obj4.gestureResponseDistance = rect;
      obj4.ref = function ref(viewConfig) {
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
          const obj2 = {};
          const merged = Object.assign(viewConfig.viewConfig.validAttributes.style);
          obj2.display = null;
          viewConfig.viewConfig.validAttributes.style = obj2;
        } else {
          let style1;
          if (viewConfig != null) {
            const _viewConfig = viewConfig._viewConfig;
            if (_viewConfig != null) {
              const validAttributes2 = _viewConfig.validAttributes;
              if (validAttributes2 != null) {
                style1 = validAttributes2.style;
              }
            }
          }
          if (style1) {
            const obj3 = {};
            const merged1 = Object.assign(viewConfig._viewConfig.validAttributes.style);
            obj3.display = null;
            viewConfig._viewConfig.validAttributes.style = obj3;
          } else {
            let style2;
            if (viewConfig != null) {
              const __viewConfig = viewConfig.__viewConfig;
              if (__viewConfig != null) {
                const validAttributes3 = __viewConfig.validAttributes;
                if (validAttributes3 != null) {
                  style2 = validAttributes3.style;
                }
              }
            }
            if (style2) {
              const obj = {};
              const merged2 = Object.assign(viewConfig.__viewConfig.validAttributes.style);
              obj.display = null;
              viewConfig.__viewConfig.validAttributes.style = obj;
            }
          }
        }
        if (typeof setRef === "function") {
          closure_1.current = viewConfig;
          const onComponentRef = activityState.onComponentRef;
          if (onComponentRef != null) {
            onComponentRef(viewConfig);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let eventResult;
      if (isNativeStack) {
        const obj5 = { nativeEvent: null };
        const obj6 = { progress: current2, closing: current, goingForward: current3 };
        obj5.nativeEvent = obj6;
        const items1 = [obj5];
        eventResult = Animated.event(items1, { useNativeDriver: true });
      }
      obj4.onTransitionProgress = eventResult;
      let bottom;
      if (scrollEdgeEffects != null) {
        bottom = scrollEdgeEffects.bottom;
      }
      obj4.bottomScrollEdgeEffect = bottom;
      let left;
      if (scrollEdgeEffects != null) {
        left = scrollEdgeEffects.left;
      }
      obj4.leftScrollEdgeEffect = left;
      let right;
      if (scrollEdgeEffects != null) {
        right = scrollEdgeEffects.right;
      }
      obj4.rightScrollEdgeEffect = right;
      let top;
      if (scrollEdgeEffects != null) {
        top = scrollEdgeEffects.top;
      }
      obj4.topScrollEdgeEffect = top;
      obj4.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousScreenUpdatesEnabled;
      obj4.androidResetScreenShadowStateOnOrientationChangeEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.androidResetScreenShadowStateOnOrientationChangeEnabled;
      obj4.iosOrientationInheritanceFixEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.iosOrientationInheritanceFixEnabled;
      let tmp31Result = children;
      if (isNativeStack) {
        const obj7 = { value: null, children: null };
        const obj8 = { progress: current2, closing: current, goingForward: current3 };
        obj7.value = obj8;
        obj7.children = children;
        tmp31Result = jsx(_modDef5236.Provider, { value: null, children: null });
      }
      obj4.children = tmp31Result;
      obj3.children = <__INTERNAL_VIEW_CONFIG />;
      return <tmp33 freeze={freezeOnBlur}>{null}</tmp33>;
    }
  }
  ({ active, activityState, onComponentRef } = tmp9);
  tmp10 = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  tmp11 = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  tmp12 = undefined !== sheetShouldOverflowTopInset && sheetShouldOverflowTopInset;
  tmp13 = undefined === sheetDefaultResizeAnimationEnabled || sheetDefaultResizeAnimationEnabled;
  if (tmp20) {
    let num4 = 0;
    if (0 !== active) {
      num4 = 2;
    }
    activityState = num4;
  }
  const items2 = [tmp9.style, ];
  let str = "none";
  if (0 !== activityState) {
    str = "flex";
  }
  items2[1] = { display: str };
  let merged1 = Object.assign(_objectWithoutProperties(tmp9, closure_5));
  return <Animated.View style={items2} ref={setRef} />;
});
const context = noop.createContext(forwardRefResult);
const forwardRefResult1 = noop.forwardRef((arg0, ref) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(noop.useContext(context) || forwardRefResult, {});
});
forwardRefResult1.displayName = "Screen";

export default forwardRefResult1;
export const InnerScreen = forwardRefResult;
export const ScreenContext = context;