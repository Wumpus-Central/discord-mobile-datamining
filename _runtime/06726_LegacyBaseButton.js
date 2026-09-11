// === Module 6726: LegacyBaseButton ===

// Module 6726 (LegacyBaseButton)
import _mod6732 from "module_6732" /* 6732 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6751 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6752 */;
import managePanProps from "managePanProps" /* 6762 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6763 */;
import _mod6764 from "module_6764" /* 6764 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6766 */;
import _mod6767 from "module_6767" /* 6767 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6768 */;
import _mod6839 from "module_6839" /* 6839 */;
import _modDef6840 from "module_6840" /* 6840 */;
import LegacyScrollView from "LegacyScrollView" /* 6841 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6842 */;
import _modDef6844 from "module_6844" /* 6844 */;
import GestureObjects from "GestureObjects" /* 6846 */;
import LegacyText from "LegacyText" /* 6856 */;
import TouchableHighlight from "TouchableHighlight" /* 6857 */;
import Directions from "Directions" /* 6863 */;
import pinchHandlerName from "pinchHandlerName" /* 6864 */;
import rotationHandlerName from "rotationHandlerName" /* 6865 */;
import PointerType from "PointerType" /* 6866 */;
import module_6727 from "module_6727" /* 6727 */;
import initialize from "module_6728" /* 6728 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6839.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6839.LegacyBorderlessButton;
export const LegacyRawButton = _mod6839.LegacyRawButton;
export const LegacyRectButton = _mod6839.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6844;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6840;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6764.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6767.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6732.State;