// === Module 6259: LegacyBaseButton ===

// Module 6259 (LegacyBaseButton)
import _mod6265 from "module_6265" /* 6265 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6284 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6285 */;
import managePanProps from "managePanProps" /* 6295 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6296 */;
import _mod6297 from "module_6297" /* 6297 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6299 */;
import _mod6300 from "module_6300" /* 6300 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6301 */;
import _mod6372 from "module_6372" /* 6372 */;
import _modDef6373 from "module_6373" /* 6373 */;
import LegacyScrollView from "LegacyScrollView" /* 6374 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6375 */;
import _modDef6377 from "module_6377" /* 6377 */;
import GestureObjects from "GestureObjects" /* 6379 */;
import LegacyText from "LegacyText" /* 6389 */;
import TouchableHighlight from "TouchableHighlight" /* 6390 */;
import Directions from "Directions" /* 6396 */;
import pinchHandlerName from "pinchHandlerName" /* 6397 */;
import rotationHandlerName from "rotationHandlerName" /* 6398 */;
import PointerType from "PointerType" /* 6399 */;
import module_6260 from "module_6260" /* 6260 */;
import initialize_mod from "module_6261" /* 6261 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6372.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6372.LegacyBorderlessButton;
export const LegacyRawButton = _mod6372.LegacyRawButton;
export const LegacyRectButton = _mod6372.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6377;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6373;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6297.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6300.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6265.State;