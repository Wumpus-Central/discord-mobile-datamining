// _runtime/05592_LegacyBaseButton.js
import _mod5597 from "metro/05597__.js";
import baseGestureHandlerProps from "05617_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05618_tapGestureHandlerProps.js";
import managePanProps from "05629_managePanProps.js";
import longPressGestureHandlerProps from "05630_longPressGestureHandlerProps.js";
import _mod5631 from "metro/05631__.js";
import flingGestureHandlerProps from "05633_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05635_nativeViewGestureHandlerProps.js";
import _mod5715 from "metro/05715__.js";
import _modDef5716 from "metro/05716__.js";
import LegacyScrollView from "05717_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05718_GestureHandlerRootView.js";
import _modDef5720 from "metro/05720__.js";
import GestureObjects from "05722_GestureObjects.js";
import LegacyText from "05732_LegacyText.js";
import TouchableHighlight from "05733_TouchableHighlight.js";
import Directions from "05739_Directions.js";
import pinchHandlerName from "05740_pinchHandlerName.js";
import rotationHandlerName from "05741_rotationHandlerName.js";
import HoverEffect from "05742_HoverEffect.js";
import PointerType from "05743_PointerType.js";
import initialize_mod from "metro/05593__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5715.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5715.LegacyBorderlessButton;
export const LegacyRawButton = _mod5715.LegacyRawButton;
export const LegacyRectButton = _mod5715.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5720;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5716;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5631.ForceTouchGestureHandler;
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
export const State = _mod5597.State;
