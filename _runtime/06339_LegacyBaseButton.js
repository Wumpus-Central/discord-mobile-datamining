// _runtime/06339_LegacyBaseButton.js
import _mod6345 from "metro/06345__.js";
import baseGestureHandlerProps from "06364_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06365_tapGestureHandlerProps.js";
import managePanProps from "06375_managePanProps.js";
import longPressGestureHandlerProps from "06376_longPressGestureHandlerProps.js";
import _mod6377 from "metro/06377__.js";
import flingGestureHandlerProps from "06379_flingGestureHandlerProps.js";
import _mod6380 from "metro/06380__.js";
import nativeViewGestureHandlerProps from "06381_nativeViewGestureHandlerProps.js";
import _mod6452 from "metro/06452__.js";
import _modDef6453 from "metro/06453__.js";
import LegacyScrollView from "06454_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06455_GestureHandlerRootView.js";
import _modDef6457 from "metro/06457__.js";
import GestureObjects from "06459_GestureObjects.js";
import LegacyText from "06469_LegacyText.js";
import TouchableHighlight from "06470_TouchableHighlight.js";
import Directions from "06476_Directions.js";
import pinchHandlerName from "06477_pinchHandlerName.js";
import rotationHandlerName from "06478_rotationHandlerName.js";
import PointerType from "06479_PointerType.js";
import 06340__ from "metro/06340__.js";
import initialize_mod from "metro/06341__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6452.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6452.LegacyBorderlessButton;
export const LegacyRawButton = _mod6452.LegacyRawButton;
export const LegacyRectButton = _mod6452.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6457;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6453;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6377.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6380.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6345.State;