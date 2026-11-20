// _runtime/05054_LegacyBaseButton.js
import _mod5059 from "metro/05059__.js";
import baseGestureHandlerProps from "05079_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05080_tapGestureHandlerProps.js";
import managePanProps from "05091_managePanProps.js";
import longPressGestureHandlerProps from "05092_longPressGestureHandlerProps.js";
import _mod5093 from "metro/05093__.js";
import flingGestureHandlerProps from "05095_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05097_nativeViewGestureHandlerProps.js";
import _mod5177 from "metro/05177__.js";
import _modDef5178 from "metro/05178__.js";
import LegacyScrollView from "05179_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05180_GestureHandlerRootView.js";
import _modDef5182 from "metro/05182__.js";
import GestureObjects from "05184_GestureObjects.js";
import LegacyText from "05194_LegacyText.js";
import TouchableHighlight from "05195_TouchableHighlight.js";
import Directions from "05201_Directions.js";
import pinchHandlerName from "05202_pinchHandlerName.js";
import rotationHandlerName from "05203_rotationHandlerName.js";
import HoverEffect from "05204_HoverEffect.js";
import PointerType from "05205_PointerType.js";
import initialize_mod from "metro/05055__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5177.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5177.LegacyBorderlessButton;
export const LegacyRawButton = _mod5177.LegacyRawButton;
export const LegacyRectButton = _mod5177.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5182;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5178;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5093.ForceTouchGestureHandler;
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
export const State = _mod5059.State;
