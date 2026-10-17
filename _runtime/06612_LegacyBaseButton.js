// _runtime/06612_LegacyBaseButton.js
import _mod6618 from "metro/06618__.js";
import baseGestureHandlerProps from "06637_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06638_tapGestureHandlerProps.js";
import managePanProps from "06648_managePanProps.js";
import longPressGestureHandlerProps from "06649_longPressGestureHandlerProps.js";
import _mod6650 from "metro/06650__.js";
import flingGestureHandlerProps from "06652_flingGestureHandlerProps.js";
import _mod6653 from "metro/06653__.js";
import nativeViewGestureHandlerProps from "06654_nativeViewGestureHandlerProps.js";
import _mod6725 from "metro/06725__.js";
import _modDef6726 from "metro/06726__.js";
import LegacyScrollView from "06727_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06728_GestureHandlerRootView.js";
import _modDef6730 from "metro/06730__.js";
import GestureObjects from "06732_GestureObjects.js";
import LegacyText from "06742_LegacyText.js";
import TouchableHighlight from "06743_TouchableHighlight.js";
import Directions from "06749_Directions.js";
import pinchHandlerName from "06750_pinchHandlerName.js";
import rotationHandlerName from "06751_rotationHandlerName.js";
import PointerType from "06752_PointerType.js";
import 06613__ from "metro/06613__.js";
import initialize_mod from "metro/06614__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6725.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6725.LegacyBorderlessButton;
export const LegacyRawButton = _mod6725.LegacyRawButton;
export const LegacyRectButton = _mod6725.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6730;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6726;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6650.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6653.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6618.State;