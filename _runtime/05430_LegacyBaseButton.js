// _runtime/05430_LegacyBaseButton.js
import _mod5435 from "metro/05435__.js";
import baseGestureHandlerProps from "05455_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05456_tapGestureHandlerProps.js";
import managePanProps from "05467_managePanProps.js";
import longPressGestureHandlerProps from "05468_longPressGestureHandlerProps.js";
import _mod5469 from "metro/05469__.js";
import flingGestureHandlerProps from "05471_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05473_nativeViewGestureHandlerProps.js";
import _mod5553 from "metro/05553__.js";
import _modDef5554 from "metro/05554__.js";
import LegacyScrollView from "05555_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05556_GestureHandlerRootView.js";
import _modDef5558 from "metro/05558__.js";
import GestureObjects from "05560_GestureObjects.js";
import LegacyText from "05570_LegacyText.js";
import TouchableHighlight from "05571_TouchableHighlight.js";
import Directions from "05577_Directions.js";
import pinchHandlerName from "05578_pinchHandlerName.js";
import rotationHandlerName from "05579_rotationHandlerName.js";
import HoverEffect from "05580_HoverEffect.js";
import PointerType from "05581_PointerType.js";
import initialize_mod from "metro/05431__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5553.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5553.LegacyBorderlessButton;
export const LegacyRawButton = _mod5553.LegacyRawButton;
export const LegacyRectButton = _mod5553.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5558;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5554;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5469.ForceTouchGestureHandler;
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
export const State = _mod5435.State;
