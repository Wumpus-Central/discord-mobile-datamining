// _runtime/06335_LegacyBaseButton.js
import _mod6341 from "metro/06341__.js";
import baseGestureHandlerProps from "06360_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06361_tapGestureHandlerProps.js";
import managePanProps from "06371_managePanProps.js";
import longPressGestureHandlerProps from "06372_longPressGestureHandlerProps.js";
import _mod6373 from "metro/06373__.js";
import flingGestureHandlerProps from "06375_flingGestureHandlerProps.js";
import _mod6376 from "metro/06376__.js";
import nativeViewGestureHandlerProps from "06377_nativeViewGestureHandlerProps.js";
import _mod6448 from "metro/06448__.js";
import _modDef6449 from "metro/06449__.js";
import LegacyScrollView from "06450_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06451_GestureHandlerRootView.js";
import _modDef6453 from "metro/06453__.js";
import GestureObjects from "06455_GestureObjects.js";
import LegacyText from "06465_LegacyText.js";
import TouchableHighlight from "06466_TouchableHighlight.js";
import Directions from "06472_Directions.js";
import pinchHandlerName from "06473_pinchHandlerName.js";
import rotationHandlerName from "06474_rotationHandlerName.js";
import PointerType from "06475_PointerType.js";
import 06336__ from "metro/06336__.js";
import initialize_mod from "metro/06337__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6448.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6448.LegacyBorderlessButton;
export const LegacyRawButton = _mod6448.LegacyRawButton;
export const LegacyRectButton = _mod6448.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6453;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6449;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6373.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6376.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6341.State;