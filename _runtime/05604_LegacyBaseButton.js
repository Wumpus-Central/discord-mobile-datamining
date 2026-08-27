// === Module 5604: LegacyBaseButton ===

// Module 5604 (LegacyBaseButton)
import _mod5610 from "module_5610" /* 5610 */;
import items1 from "items1" /* 5629 */;
import items12 from "items1" /* 5630 */;
import managePanProps from "managePanProps" /* 5640 */;
import items13 from "items1" /* 5641 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5642 */;
import items14 from "items1" /* 5644 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 5645 */;
import items from "items" /* 5646 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 5717 */;
import itemsDefault from "items" /* 5718 */;
import LegacyScrollView from "LegacyScrollView" /* 5719 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5720 */;
import hitSlopDefault from "hitSlop" /* 5722 */;
import _mod5724 from "module_5724" /* 5724 */;
import LegacyText from "LegacyText" /* 5734 */;
import TouchableHighlight from "TouchableHighlight" /* 5735 */;
import _mod5741 from "module_5741" /* 5741 */;
import pinchHandlerName from "pinchHandlerName" /* 5742 */;
import rotationHandlerName from "rotationHandlerName" /* 5743 */;
import _mod5744 from "module_5744" /* 5744 */;
import module_5605 from "module_5605" /* 5605 */;
import initialize from "initialize" /* 5606 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  let tmp4 = key10019;
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _isNativeReflectConstruct3.LegacyBaseButton;
export const LegacyBorderlessButton = _isNativeReflectConstruct3.LegacyBorderlessButton;
export const LegacyRawButton = _isNativeReflectConstruct3.LegacyRawButton;
export const LegacyRectButton = _isNativeReflectConstruct3.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = hitSlopDefault;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = _mod5741.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod5724.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod5744.PointerType;
export const State = _mod5610.State;