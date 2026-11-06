// _runtime/05450_LegacyBaseButton.js
import _mod5455 from "metro/05455__.js";
import baseGestureHandlerProps from "05475_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05476_tapGestureHandlerProps.js";
import managePanProps from "05487_managePanProps.js";
import longPressGestureHandlerProps from "05488_longPressGestureHandlerProps.js";
import _mod5489 from "metro/05489__.js";
import flingGestureHandlerProps from "05491_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05493_nativeViewGestureHandlerProps.js";
import _mod5573 from "metro/05573__.js";
import _modDef5574 from "metro/05574__.js";
import LegacyScrollView from "05575_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05576_GestureHandlerRootView.js";
import _modDef5578 from "metro/05578__.js";
import GestureObjects from "05580_GestureObjects.js";
import LegacyText from "05590_LegacyText.js";
import TouchableHighlight from "05591_TouchableHighlight.js";
import Directions from "05597_Directions.js";
import pinchHandlerName from "05598_pinchHandlerName.js";
import rotationHandlerName from "05599_rotationHandlerName.js";
import HoverEffect from "05600_HoverEffect.js";
import PointerType from "05601_PointerType.js";
import initialize_mod from "metro/05451__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5573.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5573.LegacyBorderlessButton;
export const LegacyRawButton = _mod5573.LegacyRawButton;
export const LegacyRectButton = _mod5573.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5578;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5574;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5489.ForceTouchGestureHandler;
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
export const State = _mod5455.State;
