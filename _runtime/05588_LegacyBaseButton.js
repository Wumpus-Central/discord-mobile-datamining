// _runtime/05588_LegacyBaseButton.js
import _mod5593 from "metro/05593__.js";
import baseGestureHandlerProps from "05613_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05614_tapGestureHandlerProps.js";
import managePanProps from "05625_managePanProps.js";
import longPressGestureHandlerProps from "05626_longPressGestureHandlerProps.js";
import _mod5627 from "metro/05627__.js";
import flingGestureHandlerProps from "05629_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05631_nativeViewGestureHandlerProps.js";
import _mod5711 from "metro/05711__.js";
import _modDef5712 from "metro/05712__.js";
import LegacyScrollView from "05713_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05714_GestureHandlerRootView.js";
import _modDef5716 from "metro/05716__.js";
import GestureObjects from "05718_GestureObjects.js";
import LegacyText from "05728_LegacyText.js";
import TouchableHighlight from "05729_TouchableHighlight.js";
import Directions from "05735_Directions.js";
import pinchHandlerName from "05736_pinchHandlerName.js";
import rotationHandlerName from "05737_rotationHandlerName.js";
import HoverEffect from "05738_HoverEffect.js";
import PointerType from "05739_PointerType.js";
import initialize_mod from "metro/05589__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5711.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5711.LegacyBorderlessButton;
export const LegacyRawButton = _mod5711.LegacyRawButton;
export const LegacyRectButton = _mod5711.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5716;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5712;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5627.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const HoverEffect = HoverEffect.HoverEffect;
export const PointerType = PointerType.PointerType;
export const State = _mod5593.State;
