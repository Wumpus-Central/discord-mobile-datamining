// _runtime/05297_LegacyBaseButton.js
import _mod5303 from "metro/05303__.js";
import baseGestureHandlerProps from "05322_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05323_tapGestureHandlerProps.js";
import managePanProps from "05333_managePanProps.js";
import longPressGestureHandlerProps from "05334_longPressGestureHandlerProps.js";
import _mod5335 from "metro/05335__.js";
import flingGestureHandlerProps from "05337_flingGestureHandlerProps.js";
import _mod5338 from "metro/05338__.js";
import nativeViewGestureHandlerProps from "05339_nativeViewGestureHandlerProps.js";
import _mod5410 from "metro/05410__.js";
import _modDef5411 from "metro/05411__.js";
import LegacyScrollView from "05412_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05413_GestureHandlerRootView.js";
import _modDef5415 from "metro/05415__.js";
import GestureObjects from "05417_GestureObjects.js";
import LegacyText from "05427_LegacyText.js";
import TouchableHighlight from "05428_TouchableHighlight.js";
import Directions from "05434_Directions.js";
import pinchHandlerName from "05435_pinchHandlerName.js";
import rotationHandlerName from "05436_rotationHandlerName.js";
import PointerType from "05437_PointerType.js";
import 05298__ from "metro/05298__.js";
import initialize_mod from "metro/05299__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5410.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5410.LegacyBorderlessButton;
export const LegacyRawButton = _mod5410.LegacyRawButton;
export const LegacyRectButton = _mod5410.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5415;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5411;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5335.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5338.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5303.State;