// === Module 6705: LegacyBaseButton ===

// Module 6705 (LegacyBaseButton)
import _mod6711 from "module_6711" /* 6711 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6730 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6731 */;
import managePanProps from "managePanProps" /* 6741 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6742 */;
import _mod6743 from "module_6743" /* 6743 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6745 */;
import _mod6746 from "module_6746" /* 6746 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6747 */;
import _mod6818 from "module_6818" /* 6818 */;
import _modDef6819 from "module_6819" /* 6819 */;
import LegacyScrollView from "LegacyScrollView" /* 6820 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6821 */;
import _modDef6823 from "module_6823" /* 6823 */;
import GestureObjects from "GestureObjects" /* 6825 */;
import LegacyText from "LegacyText" /* 6835 */;
import TouchableHighlight from "TouchableHighlight" /* 6836 */;
import Directions from "Directions" /* 6842 */;
import pinchHandlerName from "pinchHandlerName" /* 6843 */;
import rotationHandlerName from "rotationHandlerName" /* 6844 */;
import PointerType from "PointerType" /* 6845 */;
import module_6706 from "module_6706" /* 6706 */;
import initialize from "module_6707" /* 6707 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6818.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6818.LegacyBorderlessButton;
export const LegacyRawButton = _mod6818.LegacyRawButton;
export const LegacyRectButton = _mod6818.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6823;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6819;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6743.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6746.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6711.State;