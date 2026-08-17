// _runtime/04674_Animated.js
import __INTERNAL_VIEW_CONFIGDefault from "metro/04675___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIGDefault2 from "metro/04676___INTERNAL_VIEW_CONFIG.js";
import closure_6 from "metro/00109__objectWithoutProperties.js";
import importDefaultResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["enabled", "freezeOnBlur", "shouldFreeze"];
let closure_4 = ["active", "activityState", "children", "isNativeStack", "fullScreenSwipeEnabled", "gestureResponseDistance", "scrollEdgeEffects", "onGestureCancel", "style"];
let closure_5 = ["active", "activityState", "style", "onComponentRef"];
let error = importDefaultResult;
const Animated = get_ActivityIndicator.Animated;
let closure_10 = Animated.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
const animatedComponent = Animated.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault2);
const forwardRefResult = importDefaultResult.forwardRef(function InnerScreen(activityState, ref) {
  const _require = activityState;
  importDefault = importDefaultResult.useRef(null);
  const imperativeHandle = importDefaultResult.useImperativeHandle(ref, () => ref.current, []);
  let obj = _require(setRef[6]);
  const previous = obj.usePrevious(activityState.activityState);
  setRef = function setRef(current) {
    closure_1.current = current;
    const onComponentRef = activityState.onComponentRef;
    if (onComponentRef != null) {
      onComponentRef(current);
    }
  };
  obj1 = Animated;
  let value = new Animated.Value(0);
  const current = importDefaultResult.useRef(value).current;
  value = new Animated.Value(0);
  const current2 = importDefaultResult.useRef(value).current;
  const value1 = new Animated.Value(0);
  const current3 = importDefaultResult.useRef(value1).current;
  let enabled = activityState.enabled;
  if (undefined === enabled) {
    let tmp2Result = tmp2(tmp3[7]);
    enabled = tmp2Result.screensEnabled();
  }
  let freezeOnBlur = activityState.freezeOnBlur;
  if (undefined === freezeOnBlur) {
    tmp2Result = tmp2(tmp3[7]);
    freezeOnBlur = tmp2Result.freezeEnabled();
  }
  let shouldFreeze = activityState.shouldFreeze;
  const tmp9 = callback(activityState, closure_3);
  let sheetAllowedDetents = tmp9.sheetAllowedDetents;
  if (undefined === sheetAllowedDetents) {
    sheetAllowedDetents = [1];
  }
  let SHEET_DIMMED_ALWAYS = tmp9.sheetLargestUndimmedDetentIndex;
  if (undefined === SHEET_DIMMED_ALWAYS) {
    SHEET_DIMMED_ALWAYS = tmp2(tmp3[8]).SHEET_DIMMED_ALWAYS;
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
  let sheetInitialDetentIndex = tmp9.sheetInitialDetentIndex;
  let num3 = 0;
  if (undefined !== sheetInitialDetentIndex) {
    num3 = sheetInitialDetentIndex;
  }
  const sheetShouldOverflowTopInset = tmp9.sheetShouldOverflowTopInset;
  const sheetDefaultResizeAnimationEnabled = tmp9.sheetDefaultResizeAnimationEnabled;
  if (enabled) {
    if (tmp2(tmp3[7]).isNativePlatformSupported) {
      const sheetAllowedDetents1 = tmp2(tmp3[8]).resolveSheetAllowedDetents(sheetAllowedDetents);
      const tmp2Result1 = tmp2(tmp3[8]);
      const sheetLargestUndimmedDetent = tmp2(tmp3[8]).resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, sheetAllowedDetents1.length - 1);
      const tmp2Result2 = tmp2(tmp3[8]);
      ({ active: active2, activityState: activityState2, children, isNativeStack, gestureResponseDistance, scrollEdgeEffects, onGestureCancel } = tmp9);
      sheetInitialDetentIndex = tmp2(tmp3[8]).resolveSheetInitialDetentIndex(num3, sheetAllowedDetents1.length - 1);
      ({ fullScreenSwipeEnabled, style } = tmp9);
      let tmp8Result = tmp8(tmp9, closure_4);
      if (tmp28) {
        const _console = console;
        console.warn("It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens");
        let num6 = 0;
        if (0 !== active2) {
          num6 = 2;
        }
        activityState2 = num6;
      }
      importDefault(tmp3[9])(false, "[RNScreens] Using featureFlags `ios26AllowInteractionsDuringTransition` with `iosPreventReattachmentOfDismissedScreens` disabled is discouraged and will result in visual bugs on screen transitions. See flags description for details.");
      if (isNativeStack) {
        if (undefined !== previous) {
          if (undefined !== activityState2) {
            if (previous > activityState2) {
              const _Error = Error;
              error = new Error("[RNScreens] activityState cannot be decreased in NativeStack");
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
      obj = { freeze: null, children: null };
      obj[0] = freezeOnBlur;
      obj = {};
      const tmp25 = closure_10;
      tmp28 = undefined !== active2 && undefined === activityState2;
      const tmp2Result3 = tmp2(tmp3[8]);
      let merged = Object.assign(tmp8Result);
      obj.onAppear = tmp15;
      obj.onDisappear = tmp16;
      obj.onWillAppear = tmp17;
      obj.onWillDisappear = tmp18;
      if (onGestureCancel == null) {
        onGestureCancel = () => {

        };
      }
      obj.onGestureCancel = onGestureCancel;
      const items = [style, { zIndex: "r" }];
      obj.style = items;
      obj.activityState = activityState2;
      obj.screenId = tmp14;
      obj.sheetAllowedDetents = sheetAllowedDetents1;
      obj.sheetLargestUndimmedDetent = sheetLargestUndimmedDetent;
      obj.sheetElevation = num2;
      obj.sheetShouldOverflowTopInset = tmp12;
      obj.sheetDefaultResizeAnimationEnabled = tmp13;
      obj.sheetGrabberVisible = tmp10;
      obj.sheetCornerRadius = num;
      obj.sheetExpandsWhenScrolledToEdge = tmp11;
      obj.sheetInitialDetent = sheetInitialDetentIndex;
      const tmp31Result = importDefault(tmp3[10]);
      obj.fullScreenSwipeEnabled = tmp2(tmp3[11]).parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled);
      let num7;
      if (gestureResponseDistance != null) {
        num7 = gestureResponseDistance.start;
      }
      if (num7 == null) {
        num7 = -1;
      }
      obj1 = { start: null, end: null, top: null, bottom: null };
      obj1[0] = num7;
      let num8;
      if (gestureResponseDistance != null) {
        num8 = gestureResponseDistance.end;
      }
      if (num8 == null) {
        num8 = -1;
      }
      obj1[1] = num8;
      let num9;
      if (gestureResponseDistance != null) {
        num9 = gestureResponseDistance.top;
      }
      if (num9 == null) {
        num9 = -1;
      }
      obj1[2] = num9;
      let num10;
      if (gestureResponseDistance != null) {
        num10 = gestureResponseDistance.bottom;
      }
      if (num10 == null) {
        num10 = -1;
      }
      obj1[3] = num10;
      obj.gestureResponseDistance = obj1;
      obj.ref = function ref(viewConfig) {
        let style;
        if (viewConfig != null) {
          viewConfig = viewConfig.viewConfig;
          if (viewConfig != null) {
            let validAttributes = viewConfig.validAttributes;
            if (validAttributes != null) {
              style = validAttributes.style;
            }
          }
        }
        if (style) {
          let obj = {};
          const merged = Object.assign(viewConfig.viewConfig.validAttributes.style);
          obj.display = null;
          viewConfig.viewConfig.validAttributes.style = obj;
        } else {
          let style1;
          if (viewConfig != null) {
            const _viewConfig = viewConfig._viewConfig;
            if (_viewConfig != null) {
              validAttributes = _viewConfig.validAttributes;
              if (validAttributes != null) {
                style1 = validAttributes.style;
              }
            }
          }
          if (style1) {
            obj = {};
            const merged1 = Object.assign(viewConfig._viewConfig.validAttributes.style);
            obj.display = null;
            viewConfig._viewConfig.validAttributes.style = obj;
          } else {
            let style2;
            if (viewConfig != null) {
              const __viewConfig = viewConfig.__viewConfig;
              if (__viewConfig != null) {
                validAttributes = __viewConfig.validAttributes;
                if (validAttributes != null) {
                  style2 = validAttributes.style;
                }
              }
            }
            if (style2) {
              obj = {};
              const merged2 = Object.assign(viewConfig.__viewConfig.validAttributes.style);
              obj.display = null;
              viewConfig.__viewConfig.validAttributes.style = obj;
            }
          }
        }
        if (typeof setRef !== "function") {
          HermesBuiltin.throwTypeError();
        }
        closure_1.current = viewConfig;
        const onComponentRef = activityState.onComponentRef;
        if (onComponentRef != null) {
          onComponentRef(viewConfig);
        }
      };
      let eventResult;
      if (isNativeStack) {
        const obj2 = { nativeEvent: null };
        const obj3 = { progress: null, closing: null, goingForward: null };
        obj3[0] = current2;
        obj3[1] = current;
        obj3[2] = current3;
        obj2[0] = obj3;
        const items1 = [obj2];
        eventResult = obj1.event(items1, { useNativeDriver: true });
      }
      obj.onTransitionProgress = eventResult;
      let bottom;
      if (scrollEdgeEffects != null) {
        bottom = scrollEdgeEffects.bottom;
      }
      obj.bottomScrollEdgeEffect = bottom;
      let left;
      if (scrollEdgeEffects != null) {
        left = scrollEdgeEffects.left;
      }
      obj.leftScrollEdgeEffect = left;
      let right;
      if (scrollEdgeEffects != null) {
        right = scrollEdgeEffects.right;
      }
      obj.rightScrollEdgeEffect = right;
      let top;
      if (scrollEdgeEffects != null) {
        top = scrollEdgeEffects.top;
      }
      obj.topScrollEdgeEffect = top;
      obj.synchronousShadowStateUpdatesEnabled = importDefault(tmp3[12]).experiment.synchronousScreenUpdatesEnabled;
      obj.androidResetScreenShadowStateOnOrientationChangeEnabled = importDefault(tmp3[12]).experiment.androidResetScreenShadowStateOnOrientationChangeEnabled;
      obj.ios26AllowInteractionsDuringTransition = importDefault(tmp3[12]).experiment.ios26AllowInteractionsDuringTransition;
      let tmp33Result = children;
      if (isNativeStack) {
        const obj4 = { value: null, children: null };
        const obj5 = { progress: null, closing: null, goingForward: null };
        obj5[0] = current2;
        obj5[1] = current;
        obj5[2] = current3;
        obj4[0] = obj5;
        obj4[1] = children;
        tmp33Result = tmp33(tmp31(tmp3[13]).Provider, obj4);
      }
      obj.children = tmp33Result;
      obj[1] = <tmp25 />;
      return <tmp31Result />;
    }
  }
  ({ active, activityState, onComponentRef } = tmp9);
  tmp8Result = tmp8(tmp9, closure_5);
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
  let merged1 = Object.assign(tmp8Result);
  return <obj1.View style={items2} ref={setRef} />;
});
const unpackModuleId = forwardRefResult;
const context = importDefaultResult.createContext(forwardRefResult);
const forwardRefResult1 = importDefaultResult.forwardRef((arg0, ref) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(importDefaultResult.useContext(context) || closure_11, {});
});
forwardRefResult1.displayName = "Screen";

export default forwardRefResult1;
export const InnerScreen = forwardRefResult;
export const ScreenContext = context;