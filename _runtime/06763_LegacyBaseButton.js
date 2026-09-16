// _runtime/06763_LegacyBaseButton.js
import _mod6769 from "metro/06769__.js";
import baseGestureHandlerProps from "06788_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06789_tapGestureHandlerProps.js";
import managePanProps from "06799_managePanProps.js";
import longPressGestureHandlerProps from "06800_longPressGestureHandlerProps.js";
import _mod6801 from "metro/06801__.js";
import flingGestureHandlerProps from "06803_flingGestureHandlerProps.js";
import _mod6804 from "metro/06804__.js";
import nativeViewGestureHandlerProps from "06805_nativeViewGestureHandlerProps.js";
import _mod6876 from "metro/06876__.js";
import _modDef6877 from "metro/06877__.js";
import LegacyScrollView from "06878_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06879_GestureHandlerRootView.js";
import _modDef6881 from "metro/06881__.js";
import GestureObjects from "06883_GestureObjects.js";
import LegacyText from "06893_LegacyText.js";
import TouchableHighlight from "06894_TouchableHighlight.js";
import Directions from "06900_Directions.js";
import pinchHandlerName from "06901_pinchHandlerName.js";
import rotationHandlerName from "06902_rotationHandlerName.js";
import PointerType from "06903_PointerType.js";
import 06764__ from "metro/06764__.js";
import initialize_mod from "metro/06765__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6876.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6876.LegacyBorderlessButton;
export const LegacyRawButton = _mod6876.LegacyRawButton;
export const LegacyRectButton = _mod6876.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6881;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6877;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6801.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6804.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6769.State;