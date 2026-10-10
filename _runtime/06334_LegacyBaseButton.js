// === Module 6334: LegacyBaseButton ===

// Module 6334 (LegacyBaseButton)
import _mod6340 from "module_6340" /* 6340 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6359 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6360 */;
import managePanProps from "managePanProps" /* 6370 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6371 */;
import _mod6372 from "module_6372" /* 6372 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6374 */;
import _mod6375 from "module_6375" /* 6375 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6376 */;
import _mod6447 from "module_6447" /* 6447 */;
import _modDef6448 from "module_6448" /* 6448 */;
import LegacyScrollView from "LegacyScrollView" /* 6449 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6450 */;
import _modDef6452 from "module_6452" /* 6452 */;
import GestureObjects from "GestureObjects" /* 6454 */;
import LegacyText from "LegacyText" /* 6464 */;
import TouchableHighlight from "TouchableHighlight" /* 6465 */;
import Directions from "Directions" /* 6471 */;
import pinchHandlerName from "pinchHandlerName" /* 6472 */;
import rotationHandlerName from "rotationHandlerName" /* 6473 */;
import PointerType from "PointerType" /* 6474 */;
import module_6335 from "module_6335" /* 6335 */;
import initialize_mod from "module_6336" /* 6336 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6447.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6447.LegacyBorderlessButton;
export const LegacyRawButton = _mod6447.LegacyRawButton;
export const LegacyRectButton = _mod6447.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6452;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6448;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6372.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6375.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6340.State;