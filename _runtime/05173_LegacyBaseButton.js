// _runtime/05173_LegacyBaseButton.js
import _mod5178 from "metro/05178__.js";
import baseGestureHandlerProps from "05198_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05199_tapGestureHandlerProps.js";
import managePanProps from "05210_managePanProps.js";
import longPressGestureHandlerProps from "05211_longPressGestureHandlerProps.js";
import _mod5212 from "metro/05212__.js";
import flingGestureHandlerProps from "05214_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05216_nativeViewGestureHandlerProps.js";
import _mod5296 from "metro/05296__.js";
import _modDef5297 from "metro/05297__.js";
import LegacyScrollView from "05298_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05299_GestureHandlerRootView.js";
import _modDef5301 from "metro/05301__.js";
import GestureObjects from "05303_GestureObjects.js";
import LegacyText from "05313_LegacyText.js";
import TouchableHighlight from "05314_TouchableHighlight.js";
import Directions from "05320_Directions.js";
import pinchHandlerName from "05321_pinchHandlerName.js";
import rotationHandlerName from "05322_rotationHandlerName.js";
import HoverEffect from "05323_HoverEffect.js";
import PointerType from "05324_PointerType.js";
import initialize_mod from "metro/05174__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5296.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5296.LegacyBorderlessButton;
export const LegacyRawButton = _mod5296.LegacyRawButton;
export const LegacyRectButton = _mod5296.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5301;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5297;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5212.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const HoverEffect = HoverEffect.HoverEffect;
export const PointerType = PointerType.PointerType;
export const State = _mod5178.State;
