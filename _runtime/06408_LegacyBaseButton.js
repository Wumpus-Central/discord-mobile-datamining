// === Module 6408: LegacyBaseButton ===

// Module 6408 (LegacyBaseButton)
import _mod6414 from "module_6414" /* 6414 */;
import items1 from "items1" /* 6433 */;
import items12 from "items1" /* 6434 */;
import managePanProps from "managePanProps" /* 6444 */;
import items13 from "items1" /* 6445 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6446 */;
import items14 from "items1" /* 6448 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 6449 */;
import items from "items" /* 6450 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 6521 */;
import itemsDefault from "items" /* 6522 */;
import LegacyScrollView from "LegacyScrollView" /* 6523 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6524 */;
import hitSlopDefault from "hitSlop" /* 6526 */;
import _mod6528 from "module_6528" /* 6528 */;
import LegacyText from "LegacyText" /* 6538 */;
import TouchableHighlight from "TouchableHighlight" /* 6539 */;
import _mod6545 from "module_6545" /* 6545 */;
import pinchHandlerName from "pinchHandlerName" /* 6546 */;
import rotationHandlerName from "rotationHandlerName" /* 6547 */;
import _mod6548 from "module_6548" /* 6548 */;
import module_6409 from "module_6409" /* 6409 */;
import initialize from "initialize" /* 6410 */;

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
export const Directions = _mod6545.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod6528.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod6548.PointerType;
export const State = _mod6414.State;