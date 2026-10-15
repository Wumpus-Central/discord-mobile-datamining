// _runtime/06555_LegacyBaseButton.js
import _mod6561 from "metro/06561__.js";
import baseGestureHandlerProps from "06580_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06581_tapGestureHandlerProps.js";
import managePanProps from "06591_managePanProps.js";
import longPressGestureHandlerProps from "06592_longPressGestureHandlerProps.js";
import _mod6593 from "metro/06593__.js";
import flingGestureHandlerProps from "06595_flingGestureHandlerProps.js";
import _mod6596 from "metro/06596__.js";
import nativeViewGestureHandlerProps from "06597_nativeViewGestureHandlerProps.js";
import _mod6668 from "metro/06668__.js";
import _modDef6669 from "metro/06669__.js";
import LegacyScrollView from "06670_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06671_GestureHandlerRootView.js";
import _modDef6673 from "metro/06673__.js";
import GestureObjects from "06675_GestureObjects.js";
import LegacyText from "06685_LegacyText.js";
import TouchableHighlight from "06686_TouchableHighlight.js";
import Directions from "06692_Directions.js";
import pinchHandlerName from "06693_pinchHandlerName.js";
import rotationHandlerName from "06694_rotationHandlerName.js";
import PointerType from "06695_PointerType.js";
import 06556__ from "metro/06556__.js";
import initialize_mod from "metro/06557__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6668.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6668.LegacyBorderlessButton;
export const LegacyRawButton = _mod6668.LegacyRawButton;
export const LegacyRectButton = _mod6668.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6673;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6669;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6593.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6596.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6561.State;