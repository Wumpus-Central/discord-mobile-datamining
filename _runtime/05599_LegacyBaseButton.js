// === Module 5599: LegacyBaseButton ===

// Module 5599 (LegacyBaseButton)
import _mod5605 from "module_5605" /* 5605 */;
import items1 from "items1" /* 5624 */;
import items12 from "items1" /* 5625 */;
import managePanProps from "managePanProps" /* 5635 */;
import items13 from "items1" /* 5636 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5637 */;
import items14 from "items1" /* 5639 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 5640 */;
import items from "items" /* 5641 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 5712 */;
import itemsDefault from "items" /* 5713 */;
import LegacyScrollView from "LegacyScrollView" /* 5714 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5715 */;
import hitSlopDefault from "hitSlop" /* 5717 */;
import _mod5719 from "module_5719" /* 5719 */;
import LegacyText from "LegacyText" /* 5729 */;
import TouchableHighlight from "TouchableHighlight" /* 5730 */;
import _mod5736 from "module_5736" /* 5736 */;
import pinchHandlerName from "pinchHandlerName" /* 5737 */;
import rotationHandlerName from "rotationHandlerName" /* 5738 */;
import _mod5739 from "module_5739" /* 5739 */;
import module_5600 from "module_5600" /* 5600 */;
import initialize from "initialize" /* 5601 */;

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
export const Directions = _mod5736.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod5719.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod5739.PointerType;
export const State = _mod5605.State;