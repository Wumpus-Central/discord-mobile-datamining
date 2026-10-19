// _runtime/05258_LegacyBaseButton.js
import _mod5264 from "metro/05264__.js";
import baseGestureHandlerProps from "05283_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05284_tapGestureHandlerProps.js";
import managePanProps from "05294_managePanProps.js";
import longPressGestureHandlerProps from "05295_longPressGestureHandlerProps.js";
import _mod5296 from "metro/05296__.js";
import flingGestureHandlerProps from "05298_flingGestureHandlerProps.js";
import _mod5299 from "metro/05299__.js";
import nativeViewGestureHandlerProps from "05300_nativeViewGestureHandlerProps.js";
import _mod5371 from "metro/05371__.js";
import _modDef5372 from "metro/05372__.js";
import LegacyScrollView from "05373_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05374_GestureHandlerRootView.js";
import _modDef5376 from "metro/05376__.js";
import GestureObjects from "05378_GestureObjects.js";
import LegacyText from "05388_LegacyText.js";
import TouchableHighlight from "05389_TouchableHighlight.js";
import Directions from "05395_Directions.js";
import pinchHandlerName from "05396_pinchHandlerName.js";
import rotationHandlerName from "05397_rotationHandlerName.js";
import PointerType from "05398_PointerType.js";
import 05259__ from "metro/05259__.js";
import initialize_mod from "metro/05260__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5371.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5371.LegacyBorderlessButton;
export const LegacyRawButton = _mod5371.LegacyRawButton;
export const LegacyRectButton = _mod5371.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5376;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5372;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5296.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5299.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5264.State;