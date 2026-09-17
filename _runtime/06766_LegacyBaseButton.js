// _runtime/06766_LegacyBaseButton.js
import _mod6772 from "metro/06772__.js";
import baseGestureHandlerProps from "06791_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06792_tapGestureHandlerProps.js";
import managePanProps from "06802_managePanProps.js";
import longPressGestureHandlerProps from "06803_longPressGestureHandlerProps.js";
import _mod6804 from "metro/06804__.js";
import flingGestureHandlerProps from "06806_flingGestureHandlerProps.js";
import _mod6807 from "metro/06807__.js";
import nativeViewGestureHandlerProps from "06808_nativeViewGestureHandlerProps.js";
import _mod6879 from "metro/06879__.js";
import _modDef6880 from "metro/06880__.js";
import LegacyScrollView from "06881_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06882_GestureHandlerRootView.js";
import _modDef6884 from "metro/06884__.js";
import GestureObjects from "06886_GestureObjects.js";
import LegacyText from "06896_LegacyText.js";
import TouchableHighlight from "06897_TouchableHighlight.js";
import Directions from "06903_Directions.js";
import pinchHandlerName from "06904_pinchHandlerName.js";
import rotationHandlerName from "06905_rotationHandlerName.js";
import PointerType from "06906_PointerType.js";
import 06767__ from "metro/06767__.js";
import initialize_mod from "metro/06768__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6879.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6879.LegacyBorderlessButton;
export const LegacyRawButton = _mod6879.LegacyRawButton;
export const LegacyRectButton = _mod6879.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6884;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6880;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6804.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6807.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6772.State;