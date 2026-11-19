// _runtime/05052_LegacyBaseButton.js
import _mod5057 from "metro/05057__.js";
import baseGestureHandlerProps from "05077_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05078_tapGestureHandlerProps.js";
import managePanProps from "05089_managePanProps.js";
import longPressGestureHandlerProps from "05090_longPressGestureHandlerProps.js";
import _mod5091 from "metro/05091__.js";
import flingGestureHandlerProps from "05093_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05095_nativeViewGestureHandlerProps.js";
import _mod5175 from "metro/05175__.js";
import _modDef5176 from "metro/05176__.js";
import LegacyScrollView from "05177_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05178_GestureHandlerRootView.js";
import _modDef5180 from "metro/05180__.js";
import GestureObjects from "05182_GestureObjects.js";
import LegacyText from "05192_LegacyText.js";
import TouchableHighlight from "05193_TouchableHighlight.js";
import Directions from "05199_Directions.js";
import pinchHandlerName from "05200_pinchHandlerName.js";
import rotationHandlerName from "05201_rotationHandlerName.js";
import HoverEffect from "05202_HoverEffect.js";
import PointerType from "05203_PointerType.js";
import initialize_mod from "metro/05053__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5175.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5175.LegacyBorderlessButton;
export const LegacyRawButton = _mod5175.LegacyRawButton;
export const LegacyRectButton = _mod5175.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5180;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5176;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5091.ForceTouchGestureHandler;
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
export const State = _mod5057.State;
