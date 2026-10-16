// _runtime/06559_LegacyBaseButton.js
import _mod6565 from "metro/06565__.js";
import baseGestureHandlerProps from "06584_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06585_tapGestureHandlerProps.js";
import managePanProps from "06595_managePanProps.js";
import longPressGestureHandlerProps from "06596_longPressGestureHandlerProps.js";
import _mod6597 from "metro/06597__.js";
import flingGestureHandlerProps from "06599_flingGestureHandlerProps.js";
import _mod6600 from "metro/06600__.js";
import nativeViewGestureHandlerProps from "06601_nativeViewGestureHandlerProps.js";
import _mod6672 from "metro/06672__.js";
import _modDef6673 from "metro/06673__.js";
import LegacyScrollView from "06674_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06675_GestureHandlerRootView.js";
import _modDef6677 from "metro/06677__.js";
import GestureObjects from "06679_GestureObjects.js";
import LegacyText from "06689_LegacyText.js";
import TouchableHighlight from "06690_TouchableHighlight.js";
import Directions from "06696_Directions.js";
import pinchHandlerName from "06697_pinchHandlerName.js";
import rotationHandlerName from "06698_rotationHandlerName.js";
import PointerType from "06699_PointerType.js";
import 06560__ from "metro/06560__.js";
import initialize_mod from "metro/06561__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6672.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6672.LegacyBorderlessButton;
export const LegacyRawButton = _mod6672.LegacyRawButton;
export const LegacyRectButton = _mod6672.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6677;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6673;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6597.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6600.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6565.State;