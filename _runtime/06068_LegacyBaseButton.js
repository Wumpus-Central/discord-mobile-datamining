// _runtime/06068_LegacyBaseButton.js
import _mod6074 from "metro/06074__.js";
import baseGestureHandlerProps from "06093_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06094_tapGestureHandlerProps.js";
import managePanProps from "06104_managePanProps.js";
import longPressGestureHandlerProps from "06105_longPressGestureHandlerProps.js";
import _mod6106 from "metro/06106__.js";
import flingGestureHandlerProps from "06108_flingGestureHandlerProps.js";
import _mod6109 from "metro/06109__.js";
import nativeViewGestureHandlerProps from "06110_nativeViewGestureHandlerProps.js";
import _mod6181 from "metro/06181__.js";
import _modDef6182 from "metro/06182__.js";
import LegacyScrollView from "06183_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06184_GestureHandlerRootView.js";
import _modDef6186 from "metro/06186__.js";
import GestureObjects from "06188_GestureObjects.js";
import LegacyText from "06198_LegacyText.js";
import TouchableHighlight from "06199_TouchableHighlight.js";
import Directions from "06205_Directions.js";
import pinchHandlerName from "06206_pinchHandlerName.js";
import rotationHandlerName from "06207_rotationHandlerName.js";
import PointerType from "06208_PointerType.js";
import 06069__ from "metro/06069__.js";
import initialize_mod from "metro/06070__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6181.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6181.LegacyBorderlessButton;
export const LegacyRawButton = _mod6181.LegacyRawButton;
export const LegacyRectButton = _mod6181.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6186;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6182;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6106.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6109.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6074.State;