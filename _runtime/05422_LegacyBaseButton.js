// _runtime/05422_LegacyBaseButton.js
import _mod5427 from "metro/05427__.js";
import baseGestureHandlerProps from "05447_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05448_tapGestureHandlerProps.js";
import managePanProps from "05459_managePanProps.js";
import longPressGestureHandlerProps from "05460_longPressGestureHandlerProps.js";
import _mod5461 from "metro/05461__.js";
import flingGestureHandlerProps from "05463_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05465_nativeViewGestureHandlerProps.js";
import _mod5545 from "metro/05545__.js";
import _modDef5546 from "metro/05546__.js";
import LegacyScrollView from "05547_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05548_GestureHandlerRootView.js";
import _modDef5550 from "metro/05550__.js";
import GestureObjects from "05552_GestureObjects.js";
import LegacyText from "05562_LegacyText.js";
import TouchableHighlight from "05563_TouchableHighlight.js";
import Directions from "05569_Directions.js";
import pinchHandlerName from "05570_pinchHandlerName.js";
import rotationHandlerName from "05571_rotationHandlerName.js";
import HoverEffect from "05572_HoverEffect.js";
import PointerType from "05573_PointerType.js";
import initialize_mod from "metro/05423__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5545.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5545.LegacyBorderlessButton;
export const LegacyRawButton = _mod5545.LegacyRawButton;
export const LegacyRectButton = _mod5545.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5550;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5546;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5461.ForceTouchGestureHandler;
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
export const State = _mod5427.State;
