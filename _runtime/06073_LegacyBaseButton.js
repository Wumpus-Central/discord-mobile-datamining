// _runtime/06073_LegacyBaseButton.js
import _mod6079 from "metro/06079__.js";
import baseGestureHandlerProps from "06098_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06099_tapGestureHandlerProps.js";
import managePanProps from "06109_managePanProps.js";
import longPressGestureHandlerProps from "06110_longPressGestureHandlerProps.js";
import _mod6111 from "metro/06111__.js";
import flingGestureHandlerProps from "06113_flingGestureHandlerProps.js";
import _mod6114 from "metro/06114__.js";
import nativeViewGestureHandlerProps from "06115_nativeViewGestureHandlerProps.js";
import _mod6186 from "metro/06186__.js";
import _modDef6187 from "metro/06187__.js";
import LegacyScrollView from "06188_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06189_GestureHandlerRootView.js";
import _modDef6191 from "metro/06191__.js";
import GestureObjects from "06193_GestureObjects.js";
import LegacyText from "06203_LegacyText.js";
import TouchableHighlight from "06204_TouchableHighlight.js";
import Directions from "06210_Directions.js";
import pinchHandlerName from "06211_pinchHandlerName.js";
import rotationHandlerName from "06212_rotationHandlerName.js";
import PointerType from "06213_PointerType.js";
import 06074__ from "metro/06074__.js";
import initialize_mod from "metro/06075__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6186.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6186.LegacyBorderlessButton;
export const LegacyRawButton = _mod6186.LegacyRawButton;
export const LegacyRectButton = _mod6186.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6191;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6187;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6111.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6114.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6079.State;