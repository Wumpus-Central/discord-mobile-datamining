// _runtime/05420_LegacyBaseButton.js
import _mod5425 from "metro/05425__.js";
import baseGestureHandlerProps from "05445_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05446_tapGestureHandlerProps.js";
import managePanProps from "05457_managePanProps.js";
import longPressGestureHandlerProps from "05458_longPressGestureHandlerProps.js";
import _mod5459 from "metro/05459__.js";
import flingGestureHandlerProps from "05461_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05463_nativeViewGestureHandlerProps.js";
import _mod5543 from "metro/05543__.js";
import _modDef5544 from "metro/05544__.js";
import LegacyScrollView from "05545_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05546_GestureHandlerRootView.js";
import _modDef5548 from "metro/05548__.js";
import GestureObjects from "05550_GestureObjects.js";
import LegacyText from "05560_LegacyText.js";
import TouchableHighlight from "05561_TouchableHighlight.js";
import Directions from "05567_Directions.js";
import pinchHandlerName from "05568_pinchHandlerName.js";
import rotationHandlerName from "05569_rotationHandlerName.js";
import HoverEffect from "05570_HoverEffect.js";
import PointerType from "05571_PointerType.js";
import initialize_mod from "metro/05421__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5543.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5543.LegacyBorderlessButton;
export const LegacyRawButton = _mod5543.LegacyRawButton;
export const LegacyRectButton = _mod5543.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5548;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5544;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5459.ForceTouchGestureHandler;
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
export const State = _mod5425.State;
