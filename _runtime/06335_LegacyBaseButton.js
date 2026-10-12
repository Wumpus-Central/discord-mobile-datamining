// === Module 6335: LegacyBaseButton ===

// Module 6335 (LegacyBaseButton)
import _mod6341 from "module_6341" /* 6341 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6360 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6361 */;
import managePanProps from "managePanProps" /* 6371 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6372 */;
import _mod6373 from "module_6373" /* 6373 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6375 */;
import _mod6376 from "module_6376" /* 6376 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6377 */;
import _mod6448 from "module_6448" /* 6448 */;
import _modDef6449 from "module_6449" /* 6449 */;
import LegacyScrollView from "LegacyScrollView" /* 6450 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6451 */;
import _modDef6453 from "module_6453" /* 6453 */;
import GestureObjects from "GestureObjects" /* 6455 */;
import LegacyText from "LegacyText" /* 6465 */;
import TouchableHighlight from "TouchableHighlight" /* 6466 */;
import Directions from "Directions" /* 6472 */;
import pinchHandlerName from "pinchHandlerName" /* 6473 */;
import rotationHandlerName from "rotationHandlerName" /* 6474 */;
import PointerType from "PointerType" /* 6475 */;
import module_6336 from "module_6336" /* 6336 */;
import initialize_mod from "module_6337" /* 6337 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6448.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6448.LegacyBorderlessButton;
export const LegacyRawButton = _mod6448.LegacyRawButton;
export const LegacyRectButton = _mod6448.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6453;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6449;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6373.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6376.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6341.State;