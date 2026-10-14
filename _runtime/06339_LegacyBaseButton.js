// === Module 6339: LegacyBaseButton ===

// Module 6339 (LegacyBaseButton)
import _mod6345 from "module_6345" /* 6345 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6364 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6365 */;
import managePanProps from "managePanProps" /* 6375 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6376 */;
import _mod6377 from "module_6377" /* 6377 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6379 */;
import _mod6380 from "module_6380" /* 6380 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6381 */;
import _mod6452 from "module_6452" /* 6452 */;
import _modDef6453 from "module_6453" /* 6453 */;
import LegacyScrollView from "LegacyScrollView" /* 6454 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6455 */;
import _modDef6457 from "module_6457" /* 6457 */;
import GestureObjects from "GestureObjects" /* 6459 */;
import LegacyText from "LegacyText" /* 6469 */;
import TouchableHighlight from "TouchableHighlight" /* 6470 */;
import Directions from "Directions" /* 6476 */;
import pinchHandlerName from "pinchHandlerName" /* 6477 */;
import rotationHandlerName from "rotationHandlerName" /* 6478 */;
import PointerType from "PointerType" /* 6479 */;
import module_6340 from "module_6340" /* 6340 */;
import initialize_mod from "module_6341" /* 6341 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6452.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6452.LegacyBorderlessButton;
export const LegacyRawButton = _mod6452.LegacyRawButton;
export const LegacyRectButton = _mod6452.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6457;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6453;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6377.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6380.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6345.State;