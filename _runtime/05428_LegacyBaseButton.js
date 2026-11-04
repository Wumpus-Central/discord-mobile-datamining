// _runtime/05428_LegacyBaseButton.js
import _mod5433 from "metro/05433__.js";
import baseGestureHandlerProps from "05453_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05454_tapGestureHandlerProps.js";
import managePanProps from "05465_managePanProps.js";
import longPressGestureHandlerProps from "05466_longPressGestureHandlerProps.js";
import _mod5467 from "metro/05467__.js";
import flingGestureHandlerProps from "05469_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05471_nativeViewGestureHandlerProps.js";
import _mod5551 from "metro/05551__.js";
import _modDef5552 from "metro/05552__.js";
import LegacyScrollView from "05553_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05554_GestureHandlerRootView.js";
import _modDef5556 from "metro/05556__.js";
import GestureObjects from "05558_GestureObjects.js";
import LegacyText from "05568_LegacyText.js";
import TouchableHighlight from "05569_TouchableHighlight.js";
import Directions from "05575_Directions.js";
import pinchHandlerName from "05576_pinchHandlerName.js";
import rotationHandlerName from "05577_rotationHandlerName.js";
import HoverEffect from "05578_HoverEffect.js";
import PointerType from "05579_PointerType.js";
import initialize_mod from "metro/05429__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5551.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5551.LegacyBorderlessButton;
export const LegacyRawButton = _mod5551.LegacyRawButton;
export const LegacyRectButton = _mod5551.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5556;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5552;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5467.ForceTouchGestureHandler;
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
export const State = _mod5433.State;
