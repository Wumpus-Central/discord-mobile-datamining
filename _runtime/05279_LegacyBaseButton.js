// _runtime/05279_LegacyBaseButton.js
import _mod5285 from "metro/05285__.js";
import baseGestureHandlerProps from "05304_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05305_tapGestureHandlerProps.js";
import managePanProps from "05315_managePanProps.js";
import longPressGestureHandlerProps from "05316_longPressGestureHandlerProps.js";
import _mod5317 from "metro/05317__.js";
import flingGestureHandlerProps from "05319_flingGestureHandlerProps.js";
import _mod5320 from "metro/05320__.js";
import nativeViewGestureHandlerProps from "05321_nativeViewGestureHandlerProps.js";
import _mod5392 from "metro/05392__.js";
import _modDef5393 from "metro/05393__.js";
import LegacyScrollView from "05394_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05395_GestureHandlerRootView.js";
import _modDef5397 from "metro/05397__.js";
import GestureObjects from "05399_GestureObjects.js";
import LegacyText from "05409_LegacyText.js";
import TouchableHighlight from "05410_TouchableHighlight.js";
import Directions from "05416_Directions.js";
import pinchHandlerName from "05417_pinchHandlerName.js";
import rotationHandlerName from "05418_rotationHandlerName.js";
import PointerType from "05419_PointerType.js";
import 05280__ from "metro/05280__.js";
import initialize_mod from "metro/05281__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5392.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5392.LegacyBorderlessButton;
export const LegacyRawButton = _mod5392.LegacyRawButton;
export const LegacyRectButton = _mod5392.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5397;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5393;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5317.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5320.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5285.State;