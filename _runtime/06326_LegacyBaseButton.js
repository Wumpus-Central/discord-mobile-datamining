// === Module 6326: LegacyBaseButton ===

// Module 6326 (LegacyBaseButton)
import _mod6332 from "module_6332" /* 6332 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6351 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6352 */;
import managePanProps from "managePanProps" /* 6362 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6363 */;
import _mod6364 from "module_6364" /* 6364 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6366 */;
import _mod6367 from "module_6367" /* 6367 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6368 */;
import _mod6439 from "module_6439" /* 6439 */;
import _modDef6440 from "module_6440" /* 6440 */;
import LegacyScrollView from "LegacyScrollView" /* 6441 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6442 */;
import _modDef6444 from "module_6444" /* 6444 */;
import GestureObjects from "GestureObjects" /* 6446 */;
import LegacyText from "LegacyText" /* 6456 */;
import TouchableHighlight from "TouchableHighlight" /* 6457 */;
import Directions from "Directions" /* 6463 */;
import pinchHandlerName from "pinchHandlerName" /* 6464 */;
import rotationHandlerName from "rotationHandlerName" /* 6465 */;
import PointerType from "PointerType" /* 6466 */;
import module_6327 from "module_6327" /* 6327 */;
import initialize_mod from "module_6328" /* 6328 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6439.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6439.LegacyBorderlessButton;
export const LegacyRawButton = _mod6439.LegacyRawButton;
export const LegacyRectButton = _mod6439.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6444;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6440;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6364.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6367.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6332.State;