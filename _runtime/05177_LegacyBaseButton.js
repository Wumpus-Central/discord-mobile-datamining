// _runtime/05177_LegacyBaseButton.js
import _mod5182 from "metro/05182__.js";
import baseGestureHandlerProps from "05202_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05203_tapGestureHandlerProps.js";
import managePanProps from "05214_managePanProps.js";
import longPressGestureHandlerProps from "05215_longPressGestureHandlerProps.js";
import _mod5216 from "metro/05216__.js";
import flingGestureHandlerProps from "05218_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05220_nativeViewGestureHandlerProps.js";
import _mod5300 from "metro/05300__.js";
import _modDef5301 from "metro/05301__.js";
import LegacyScrollView from "05302_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05303_GestureHandlerRootView.js";
import _modDef5305 from "metro/05305__.js";
import GestureObjects from "05307_GestureObjects.js";
import LegacyText from "05317_LegacyText.js";
import TouchableHighlight from "05318_TouchableHighlight.js";
import Directions from "05324_Directions.js";
import pinchHandlerName from "05325_pinchHandlerName.js";
import rotationHandlerName from "05326_rotationHandlerName.js";
import HoverEffect from "05327_HoverEffect.js";
import PointerType from "05328_PointerType.js";
import initialize_mod from "metro/05178__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5300.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5300.LegacyBorderlessButton;
export const LegacyRawButton = _mod5300.LegacyRawButton;
export const LegacyRectButton = _mod5300.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5305;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5301;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5216.ForceTouchGestureHandler;
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
export const State = _mod5182.State;
