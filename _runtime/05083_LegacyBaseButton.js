// _runtime/05083_LegacyBaseButton.js
import _mod5088 from "metro/05088__.js";
import baseGestureHandlerProps from "05108_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05109_tapGestureHandlerProps.js";
import managePanProps from "05120_managePanProps.js";
import longPressGestureHandlerProps from "05121_longPressGestureHandlerProps.js";
import _mod5122 from "metro/05122__.js";
import flingGestureHandlerProps from "05124_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05126_nativeViewGestureHandlerProps.js";
import _mod5206 from "metro/05206__.js";
import _modDef5207 from "metro/05207__.js";
import LegacyScrollView from "05208_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05209_GestureHandlerRootView.js";
import _modDef5211 from "metro/05211__.js";
import GestureObjects from "05213_GestureObjects.js";
import LegacyText from "05223_LegacyText.js";
import TouchableHighlight from "05224_TouchableHighlight.js";
import Directions from "05230_Directions.js";
import pinchHandlerName from "05231_pinchHandlerName.js";
import rotationHandlerName from "05232_rotationHandlerName.js";
import HoverEffect from "05233_HoverEffect.js";
import PointerType from "05234_PointerType.js";
import initialize_mod from "metro/05084__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5206.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5206.LegacyBorderlessButton;
export const LegacyRawButton = _mod5206.LegacyRawButton;
export const LegacyRectButton = _mod5206.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5211;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5207;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5122.ForceTouchGestureHandler;
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
export const State = _mod5088.State;
