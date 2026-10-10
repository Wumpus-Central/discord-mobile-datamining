// _runtime/06334_LegacyBaseButton.js
import _mod6340 from "metro/06340__.js";
import baseGestureHandlerProps from "06359_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06360_tapGestureHandlerProps.js";
import managePanProps from "06370_managePanProps.js";
import longPressGestureHandlerProps from "06371_longPressGestureHandlerProps.js";
import _mod6372 from "metro/06372__.js";
import flingGestureHandlerProps from "06374_flingGestureHandlerProps.js";
import _mod6375 from "metro/06375__.js";
import nativeViewGestureHandlerProps from "06376_nativeViewGestureHandlerProps.js";
import _mod6447 from "metro/06447__.js";
import _modDef6448 from "metro/06448__.js";
import LegacyScrollView from "06449_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06450_GestureHandlerRootView.js";
import _modDef6452 from "metro/06452__.js";
import GestureObjects from "06454_GestureObjects.js";
import LegacyText from "06464_LegacyText.js";
import TouchableHighlight from "06465_TouchableHighlight.js";
import Directions from "06471_Directions.js";
import pinchHandlerName from "06472_pinchHandlerName.js";
import rotationHandlerName from "06473_rotationHandlerName.js";
import PointerType from "06474_PointerType.js";
import 06335__ from "metro/06335__.js";
import initialize_mod from "metro/06336__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6447.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6447.LegacyBorderlessButton;
export const LegacyRawButton = _mod6447.LegacyRawButton;
export const LegacyRectButton = _mod6447.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6452;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6448;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6372.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6375.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6340.State;