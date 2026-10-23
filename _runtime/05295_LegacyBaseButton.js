// _runtime/05295_LegacyBaseButton.js
import _mod5301 from "metro/05301__.js";
import baseGestureHandlerProps from "05320_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05321_tapGestureHandlerProps.js";
import managePanProps from "05331_managePanProps.js";
import longPressGestureHandlerProps from "05332_longPressGestureHandlerProps.js";
import _mod5333 from "metro/05333__.js";
import flingGestureHandlerProps from "05335_flingGestureHandlerProps.js";
import _mod5336 from "metro/05336__.js";
import nativeViewGestureHandlerProps from "05337_nativeViewGestureHandlerProps.js";
import _mod5408 from "metro/05408__.js";
import _modDef5409 from "metro/05409__.js";
import LegacyScrollView from "05410_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05411_GestureHandlerRootView.js";
import _modDef5413 from "metro/05413__.js";
import GestureObjects from "05415_GestureObjects.js";
import LegacyText from "05425_LegacyText.js";
import TouchableHighlight from "05426_TouchableHighlight.js";
import Directions from "05432_Directions.js";
import pinchHandlerName from "05433_pinchHandlerName.js";
import rotationHandlerName from "05434_rotationHandlerName.js";
import PointerType from "05435_PointerType.js";
import 05296__ from "metro/05296__.js";
import initialize_mod from "metro/05297__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5408.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5408.LegacyBorderlessButton;
export const LegacyRawButton = _mod5408.LegacyRawButton;
export const LegacyRectButton = _mod5408.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5413;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5409;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5333.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5336.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5301.State;