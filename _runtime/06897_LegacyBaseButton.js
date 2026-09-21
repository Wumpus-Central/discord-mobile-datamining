// _runtime/06897_LegacyBaseButton.js
import _mod6903 from "metro/06903__.js";
import baseGestureHandlerProps from "06922_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06923_tapGestureHandlerProps.js";
import managePanProps from "06933_managePanProps.js";
import longPressGestureHandlerProps from "06934_longPressGestureHandlerProps.js";
import _mod6935 from "metro/06935__.js";
import flingGestureHandlerProps from "06937_flingGestureHandlerProps.js";
import _mod6938 from "metro/06938__.js";
import nativeViewGestureHandlerProps from "06939_nativeViewGestureHandlerProps.js";
import _mod7010 from "metro/07010__.js";
import _modDef7011 from "metro/07011__.js";
import LegacyScrollView from "07012_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "07013_GestureHandlerRootView.js";
import _modDef7015 from "metro/07015__.js";
import GestureObjects from "07017_GestureObjects.js";
import LegacyText from "07027_LegacyText.js";
import TouchableHighlight from "07028_TouchableHighlight.js";
import Directions from "07034_Directions.js";
import pinchHandlerName from "07035_pinchHandlerName.js";
import rotationHandlerName from "07036_rotationHandlerName.js";
import PointerType from "07037_PointerType.js";
import 06898__ from "metro/06898__.js";
import initialize_mod from "metro/06899__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7010.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7010.LegacyBorderlessButton;
export const LegacyRawButton = _mod7010.LegacyRawButton;
export const LegacyRectButton = _mod7010.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7015;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7011;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6935.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6938.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6903.State;