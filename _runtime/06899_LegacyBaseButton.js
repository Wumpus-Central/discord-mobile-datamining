// _runtime/06899_LegacyBaseButton.js
import _mod6905 from "metro/06905__.js";
import baseGestureHandlerProps from "06924_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06925_tapGestureHandlerProps.js";
import managePanProps from "06935_managePanProps.js";
import longPressGestureHandlerProps from "06936_longPressGestureHandlerProps.js";
import _mod6937 from "metro/06937__.js";
import flingGestureHandlerProps from "06939_flingGestureHandlerProps.js";
import _mod6940 from "metro/06940__.js";
import nativeViewGestureHandlerProps from "06941_nativeViewGestureHandlerProps.js";
import _mod7012 from "metro/07012__.js";
import _modDef7013 from "metro/07013__.js";
import LegacyScrollView from "07014_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "07015_GestureHandlerRootView.js";
import _modDef7017 from "metro/07017__.js";
import GestureObjects from "07019_GestureObjects.js";
import LegacyText from "07029_LegacyText.js";
import TouchableHighlight from "07030_TouchableHighlight.js";
import Directions from "07036_Directions.js";
import pinchHandlerName from "07037_pinchHandlerName.js";
import rotationHandlerName from "07038_rotationHandlerName.js";
import PointerType from "07039_PointerType.js";
import 06900__ from "metro/06900__.js";
import initialize_mod from "metro/06901__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7012.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7012.LegacyBorderlessButton;
export const LegacyRawButton = _mod7012.LegacyRawButton;
export const LegacyRectButton = _mod7012.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7017;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7013;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6937.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6940.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6905.State;