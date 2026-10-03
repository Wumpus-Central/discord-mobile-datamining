// _runtime/06140_LegacyBaseButton.js
import _mod6146 from "metro/06146__.js";
import baseGestureHandlerProps from "06165_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06166_tapGestureHandlerProps.js";
import managePanProps from "06176_managePanProps.js";
import longPressGestureHandlerProps from "06177_longPressGestureHandlerProps.js";
import _mod6178 from "metro/06178__.js";
import flingGestureHandlerProps from "06180_flingGestureHandlerProps.js";
import _mod6181 from "metro/06181__.js";
import nativeViewGestureHandlerProps from "06182_nativeViewGestureHandlerProps.js";
import _mod6253 from "metro/06253__.js";
import _modDef6254 from "metro/06254__.js";
import LegacyScrollView from "06255_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06256_GestureHandlerRootView.js";
import _modDef6258 from "metro/06258__.js";
import GestureObjects from "06260_GestureObjects.js";
import LegacyText from "06270_LegacyText.js";
import TouchableHighlight from "06271_TouchableHighlight.js";
import Directions from "06277_Directions.js";
import pinchHandlerName from "06278_pinchHandlerName.js";
import rotationHandlerName from "06279_rotationHandlerName.js";
import PointerType from "06280_PointerType.js";
import 06141__ from "metro/06141__.js";
import initialize_mod from "metro/06142__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6253.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6253.LegacyBorderlessButton;
export const LegacyRawButton = _mod6253.LegacyRawButton;
export const LegacyRectButton = _mod6253.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6258;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6254;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6178.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6181.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6146.State;