// === Module 6655: LegacyBaseButton ===

// Module 6655 (LegacyBaseButton)
import _mod6661 from "module_6661" /* 6661 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6680 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6681 */;
import managePanProps from "managePanProps" /* 6691 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6692 */;
import _mod6693 from "module_6693" /* 6693 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6695 */;
import _mod6696 from "module_6696" /* 6696 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6697 */;
import _mod6768 from "module_6768" /* 6768 */;
import _modDef6769 from "module_6769" /* 6769 */;
import LegacyScrollView from "LegacyScrollView" /* 6770 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6771 */;
import _modDef6773 from "module_6773" /* 6773 */;
import GestureObjects from "GestureObjects" /* 6775 */;
import LegacyText from "LegacyText" /* 6785 */;
import TouchableHighlight from "TouchableHighlight" /* 6786 */;
import Directions from "Directions" /* 6792 */;
import pinchHandlerName from "pinchHandlerName" /* 6793 */;
import rotationHandlerName from "rotationHandlerName" /* 6794 */;
import PointerType from "PointerType" /* 6795 */;
import module_6656 from "module_6656" /* 6656 */;
import initialize from "module_6657" /* 6657 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6768.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6768.LegacyBorderlessButton;
export const LegacyRawButton = _mod6768.LegacyRawButton;
export const LegacyRectButton = _mod6768.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6773;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6769;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6693.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6696.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6661.State;