// _runtime/05298_LegacyBaseButton.js
import _mod5304 from "metro/05304__.js";
import baseGestureHandlerProps from "05323_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05324_tapGestureHandlerProps.js";
import managePanProps from "05334_managePanProps.js";
import longPressGestureHandlerProps from "05335_longPressGestureHandlerProps.js";
import _mod5336 from "metro/05336__.js";
import flingGestureHandlerProps from "05338_flingGestureHandlerProps.js";
import _mod5339 from "metro/05339__.js";
import nativeViewGestureHandlerProps from "05340_nativeViewGestureHandlerProps.js";
import _mod5411 from "metro/05411__.js";
import _modDef5412 from "metro/05412__.js";
import LegacyScrollView from "05413_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05414_GestureHandlerRootView.js";
import _modDef5416 from "metro/05416__.js";
import GestureObjects from "05418_GestureObjects.js";
import LegacyText from "05428_LegacyText.js";
import TouchableHighlight from "05429_TouchableHighlight.js";
import Directions from "05435_Directions.js";
import pinchHandlerName from "05436_pinchHandlerName.js";
import rotationHandlerName from "05437_rotationHandlerName.js";
import PointerType from "05438_PointerType.js";
import 05299__ from "metro/05299__.js";
import initialize_mod from "metro/05300__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5411.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5411.LegacyBorderlessButton;
export const LegacyRawButton = _mod5411.LegacyRawButton;
export const LegacyRectButton = _mod5411.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5416;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5412;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5336.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5339.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5304.State;