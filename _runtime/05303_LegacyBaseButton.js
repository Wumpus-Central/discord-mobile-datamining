// _runtime/05303_LegacyBaseButton.js
import _mod5308 from "metro/05308__.js";
import baseGestureHandlerProps from "05328_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05329_tapGestureHandlerProps.js";
import managePanProps from "05340_managePanProps.js";
import longPressGestureHandlerProps from "05341_longPressGestureHandlerProps.js";
import _mod5342 from "metro/05342__.js";
import flingGestureHandlerProps from "05344_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05346_nativeViewGestureHandlerProps.js";
import _mod5426 from "metro/05426__.js";
import _modDef5427 from "metro/05427__.js";
import LegacyScrollView from "05428_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05429_GestureHandlerRootView.js";
import _modDef5431 from "metro/05431__.js";
import GestureObjects from "05433_GestureObjects.js";
import LegacyText from "05443_LegacyText.js";
import TouchableHighlight from "05444_TouchableHighlight.js";
import Directions from "05450_Directions.js";
import pinchHandlerName from "05451_pinchHandlerName.js";
import rotationHandlerName from "05452_rotationHandlerName.js";
import HoverEffect from "05453_HoverEffect.js";
import PointerType from "05454_PointerType.js";
import initialize_mod from "metro/05304__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5426.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5426.LegacyBorderlessButton;
export const LegacyRawButton = _mod5426.LegacyRawButton;
export const LegacyRectButton = _mod5426.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5431;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5427;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5342.ForceTouchGestureHandler;
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
export const State = _mod5308.State;
