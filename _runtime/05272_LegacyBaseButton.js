// === Module 5272: LegacyBaseButton ===

// Module 5272 (LegacyBaseButton)
import _mod5277 from "module_5277" /* 5277 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5297 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5298 */;
import managePanProps from "managePanProps" /* 5309 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5310 */;
import _mod5311 from "module_5311" /* 5311 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5313 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5315 */;
import _mod5395 from "module_5395" /* 5395 */;
import _modDef5396 from "module_5396" /* 5396 */;
import LegacyScrollView from "LegacyScrollView" /* 5397 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5398 */;
import _modDef5400 from "module_5400" /* 5400 */;
import GestureObjects from "GestureObjects" /* 5402 */;
import LegacyText from "LegacyText" /* 5412 */;
import TouchableHighlight from "TouchableHighlight" /* 5413 */;
import Directions from "Directions" /* 5419 */;
import pinchHandlerName from "pinchHandlerName" /* 5420 */;
import rotationHandlerName from "rotationHandlerName" /* 5421 */;
import HoverEffect from "HoverEffect" /* 5422 */;
import PointerType from "PointerType" /* 5423 */;
import initialize_mod from "module_5273" /* 5273 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5395.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5395.LegacyBorderlessButton;
export const LegacyRawButton = _mod5395.LegacyRawButton;
export const LegacyRectButton = _mod5395.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5400;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5396;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5311.ForceTouchGestureHandler;
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
export const State = _mod5277.State;