// === Module 5620: LegacyBaseButton ===

// Module 5620 (LegacyBaseButton)
import _mod5626 from "module_5626" /* 5626 */;
import items1 from "items1" /* 5645 */;
import items12 from "items1" /* 5646 */;
import managePanProps from "managePanProps" /* 5656 */;
import items13 from "items1" /* 5657 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5658 */;
import items14 from "items1" /* 5660 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 5661 */;
import items from "items" /* 5662 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 5733 */;
import itemsDefault from "items" /* 5734 */;
import LegacyScrollView from "LegacyScrollView" /* 5735 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5736 */;
import hitSlopDefault from "hitSlop" /* 5738 */;
import _mod5740 from "module_5740" /* 5740 */;
import LegacyText from "LegacyText" /* 5750 */;
import TouchableHighlight from "TouchableHighlight" /* 5751 */;
import _mod5757 from "module_5757" /* 5757 */;
import pinchHandlerName from "pinchHandlerName" /* 5758 */;
import rotationHandlerName from "rotationHandlerName" /* 5759 */;
import _mod5760 from "module_5760" /* 5760 */;
import module_5621 from "module_5621" /* 5621 */;
import initialize from "initialize" /* 5622 */;

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
export const Directions = _mod5757.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod5740.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod5760.PointerType;
export const State = _mod5626.State;