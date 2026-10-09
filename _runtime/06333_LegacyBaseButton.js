// _runtime/06333_LegacyBaseButton.js
import _mod6339 from "metro/06339__.js";
import baseGestureHandlerProps from "06358_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06359_tapGestureHandlerProps.js";
import managePanProps from "06369_managePanProps.js";
import longPressGestureHandlerProps from "06370_longPressGestureHandlerProps.js";
import _mod6371 from "metro/06371__.js";
import flingGestureHandlerProps from "06373_flingGestureHandlerProps.js";
import _mod6374 from "metro/06374__.js";
import nativeViewGestureHandlerProps from "06375_nativeViewGestureHandlerProps.js";
import _mod6446 from "metro/06446__.js";
import _modDef6447 from "metro/06447__.js";
import LegacyScrollView from "06448_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06449_GestureHandlerRootView.js";
import _modDef6451 from "metro/06451__.js";
import GestureObjects from "06453_GestureObjects.js";
import LegacyText from "06463_LegacyText.js";
import TouchableHighlight from "06464_TouchableHighlight.js";
import Directions from "06470_Directions.js";
import pinchHandlerName from "06471_pinchHandlerName.js";
import rotationHandlerName from "06472_rotationHandlerName.js";
import PointerType from "06473_PointerType.js";
import 06334__ from "metro/06334__.js";
import initialize_mod from "metro/06335__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6446.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6446.LegacyBorderlessButton;
export const LegacyRawButton = _mod6446.LegacyRawButton;
export const LegacyRectButton = _mod6446.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6451;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6447;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6371.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6374.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6339.State;