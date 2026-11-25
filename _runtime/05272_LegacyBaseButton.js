// _runtime/05272_LegacyBaseButton.js
import _mod5277 from "metro/05277__.js";
import baseGestureHandlerProps from "05297_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05298_tapGestureHandlerProps.js";
import managePanProps from "05309_managePanProps.js";
import longPressGestureHandlerProps from "05310_longPressGestureHandlerProps.js";
import _mod5311 from "metro/05311__.js";
import flingGestureHandlerProps from "05313_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05315_nativeViewGestureHandlerProps.js";
import _mod5395 from "metro/05395__.js";
import _modDef5396 from "metro/05396__.js";
import LegacyScrollView from "05397_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05398_GestureHandlerRootView.js";
import _modDef5400 from "metro/05400__.js";
import GestureObjects from "05402_GestureObjects.js";
import LegacyText from "05412_LegacyText.js";
import TouchableHighlight from "05413_TouchableHighlight.js";
import Directions from "05419_Directions.js";
import pinchHandlerName from "05420_pinchHandlerName.js";
import rotationHandlerName from "05421_rotationHandlerName.js";
import HoverEffect from "05422_HoverEffect.js";
import PointerType from "05423_PointerType.js";
import initialize_mod from "metro/05273__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5395.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5395.LegacyBorderlessButton;
export const LegacyRawButton = _mod5395.LegacyRawButton;
export const LegacyRectButton = _mod5395.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5400;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5396;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5311.ForceTouchGestureHandler;
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
export const State = _mod5277.State;
