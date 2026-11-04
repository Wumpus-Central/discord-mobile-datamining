// === Module 5428: LegacyBaseButton ===

// Module 5428 (LegacyBaseButton)
import _mod5433 from "module_5433" /* 5433 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5453 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5454 */;
import managePanProps from "managePanProps" /* 5465 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5466 */;
import _mod5467 from "module_5467" /* 5467 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5469 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5471 */;
import _mod5551 from "module_5551" /* 5551 */;
import _modDef5552 from "module_5552" /* 5552 */;
import LegacyScrollView from "LegacyScrollView" /* 5553 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5554 */;
import _modDef5556 from "module_5556" /* 5556 */;
import GestureObjects from "GestureObjects" /* 5558 */;
import LegacyText from "LegacyText" /* 5568 */;
import TouchableHighlight from "TouchableHighlight" /* 5569 */;
import Directions from "Directions" /* 5575 */;
import pinchHandlerName from "pinchHandlerName" /* 5576 */;
import rotationHandlerName from "rotationHandlerName" /* 5577 */;
import HoverEffect from "HoverEffect" /* 5578 */;
import PointerType from "PointerType" /* 5579 */;
import initialize_mod from "module_5429" /* 5429 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5551.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5551.LegacyBorderlessButton;
export const LegacyRawButton = _mod5551.LegacyRawButton;
export const LegacyRectButton = _mod5551.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5556;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5552;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5467.ForceTouchGestureHandler;
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
export const State = _mod5433.State;