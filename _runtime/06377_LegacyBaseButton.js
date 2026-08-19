// === Module 6377: LegacyBaseButton ===

// Module 6377 (LegacyBaseButton)
import _mod6383 from "module_6383" /* 6383 */;
import items1 from "items1" /* 6402 */;
import items12 from "items1" /* 6403 */;
import managePanProps from "managePanProps" /* 6413 */;
import items13 from "items1" /* 6414 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6415 */;
import items14 from "items1" /* 6417 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 6418 */;
import items from "items" /* 6419 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 6490 */;
import itemsDefault from "items" /* 6491 */;
import LegacyScrollView from "LegacyScrollView" /* 6492 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6493 */;
import hitSlopDefault from "hitSlop" /* 6495 */;
import _mod6497 from "module_6497" /* 6497 */;
import LegacyText from "LegacyText" /* 6507 */;
import TouchableHighlight from "TouchableHighlight" /* 6508 */;
import _mod6514 from "module_6514" /* 6514 */;
import pinchHandlerName from "pinchHandlerName" /* 6515 */;
import rotationHandlerName from "rotationHandlerName" /* 6516 */;
import _mod6517 from "module_6517" /* 6517 */;
import module_6378 from "module_6378" /* 6378 */;
import initialize from "initialize" /* 6379 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
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
export const Directions = _mod6514.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod6497.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod6517.PointerType;
export const State = _mod6383.State;