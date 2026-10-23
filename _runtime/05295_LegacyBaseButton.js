// === Module 5295: LegacyBaseButton ===

// Module 5295 (LegacyBaseButton)
import _mod5301 from "module_5301" /* 5301 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5320 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5321 */;
import managePanProps from "managePanProps" /* 5331 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5335 */;
import _mod5336 from "module_5336" /* 5336 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5337 */;
import _mod5408 from "module_5408" /* 5408 */;
import _modDef5409 from "module_5409" /* 5409 */;
import LegacyScrollView from "LegacyScrollView" /* 5410 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5411 */;
import _modDef5413 from "module_5413" /* 5413 */;
import GestureObjects from "GestureObjects" /* 5415 */;
import LegacyText from "LegacyText" /* 5425 */;
import TouchableHighlight from "TouchableHighlight" /* 5426 */;
import Directions from "Directions" /* 5432 */;
import pinchHandlerName from "pinchHandlerName" /* 5433 */;
import rotationHandlerName from "rotationHandlerName" /* 5434 */;
import PointerType from "PointerType" /* 5435 */;
import module_5296 from "module_5296" /* 5296 */;
import initialize_mod from "module_5297" /* 5297 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5408.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5408.LegacyBorderlessButton;
export const LegacyRawButton = _mod5408.LegacyRawButton;
export const LegacyRectButton = _mod5408.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5413;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5409;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5333.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5336.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5301.State;