// _runtime/06760_LegacyBaseButton.js
import _mod6766 from "metro/06766__.js";
import baseGestureHandlerProps from "06785_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06786_tapGestureHandlerProps.js";
import managePanProps from "06796_managePanProps.js";
import longPressGestureHandlerProps from "06797_longPressGestureHandlerProps.js";
import _mod6798 from "metro/06798__.js";
import flingGestureHandlerProps from "06800_flingGestureHandlerProps.js";
import _mod6801 from "metro/06801__.js";
import nativeViewGestureHandlerProps from "06802_nativeViewGestureHandlerProps.js";
import _mod6873 from "metro/06873__.js";
import _modDef6874 from "metro/06874__.js";
import LegacyScrollView from "06875_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06876_GestureHandlerRootView.js";
import _modDef6878 from "metro/06878__.js";
import GestureObjects from "06880_GestureObjects.js";
import LegacyText from "06890_LegacyText.js";
import TouchableHighlight from "06891_TouchableHighlight.js";
import Directions from "06897_Directions.js";
import pinchHandlerName from "06898_pinchHandlerName.js";
import rotationHandlerName from "06899_rotationHandlerName.js";
import PointerType from "06900_PointerType.js";
import 06761__ from "metro/06761__.js";
import initialize_mod from "metro/06762__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6873.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6873.LegacyBorderlessButton;
export const LegacyRawButton = _mod6873.LegacyRawButton;
export const LegacyRectButton = _mod6873.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6878;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6874;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6798.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6801.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6766.State;