// === Module 6756: LegacyBaseButton ===

// Module 6756 (LegacyBaseButton)
import _mod6762 from "module_6762" /* 6762 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6781 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6782 */;
import managePanProps from "managePanProps" /* 6792 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6793 */;
import _mod6794 from "module_6794" /* 6794 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6796 */;
import _mod6797 from "module_6797" /* 6797 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6798 */;
import _mod6869 from "module_6869" /* 6869 */;
import _modDef6870 from "module_6870" /* 6870 */;
import LegacyScrollView from "LegacyScrollView" /* 6871 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6872 */;
import _modDef6874 from "module_6874" /* 6874 */;
import GestureObjects from "GestureObjects" /* 6876 */;
import LegacyText from "LegacyText" /* 6886 */;
import TouchableHighlight from "TouchableHighlight" /* 6887 */;
import Directions from "Directions" /* 6893 */;
import pinchHandlerName from "pinchHandlerName" /* 6894 */;
import rotationHandlerName from "rotationHandlerName" /* 6895 */;
import PointerType from "PointerType" /* 6896 */;
import module_6757 from "module_6757" /* 6757 */;
import initialize from "module_6758" /* 6758 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6869.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6869.LegacyBorderlessButton;
export const LegacyRawButton = _mod6869.LegacyRawButton;
export const LegacyRectButton = _mod6869.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6874;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6870;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6794.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6797.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6762.State;