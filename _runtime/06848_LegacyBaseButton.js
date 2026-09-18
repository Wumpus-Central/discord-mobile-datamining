// _runtime/06848_LegacyBaseButton.js
import _mod6854 from "metro/06854__.js";
import baseGestureHandlerProps from "06873_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06874_tapGestureHandlerProps.js";
import managePanProps from "06884_managePanProps.js";
import longPressGestureHandlerProps from "06885_longPressGestureHandlerProps.js";
import _mod6886 from "metro/06886__.js";
import flingGestureHandlerProps from "06888_flingGestureHandlerProps.js";
import _mod6889 from "metro/06889__.js";
import nativeViewGestureHandlerProps from "06890_nativeViewGestureHandlerProps.js";
import _mod6961 from "metro/06961__.js";
import _modDef6962 from "metro/06962__.js";
import LegacyScrollView from "06963_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06964_GestureHandlerRootView.js";
import _modDef6966 from "metro/06966__.js";
import GestureObjects from "06968_GestureObjects.js";
import LegacyText from "06978_LegacyText.js";
import TouchableHighlight from "06979_TouchableHighlight.js";
import Directions from "06985_Directions.js";
import pinchHandlerName from "06986_pinchHandlerName.js";
import rotationHandlerName from "06987_rotationHandlerName.js";
import PointerType from "06988_PointerType.js";
import 06849__ from "metro/06849__.js";
import initialize_mod from "metro/06850__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6961.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6961.LegacyBorderlessButton;
export const LegacyRawButton = _mod6961.LegacyRawButton;
export const LegacyRectButton = _mod6961.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6966;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6962;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6886.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6889.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6854.State;