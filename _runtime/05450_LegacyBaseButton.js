// === Module 5450: LegacyBaseButton ===

// Module 5450 (LegacyBaseButton)
import _mod5455 from "module_5455" /* 5455 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5475 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5476 */;
import managePanProps from "managePanProps" /* 5487 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5488 */;
import _mod5489 from "module_5489" /* 5489 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5491 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5493 */;
import _mod5573 from "module_5573" /* 5573 */;
import _modDef5574 from "module_5574" /* 5574 */;
import LegacyScrollView from "LegacyScrollView" /* 5575 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5576 */;
import _modDef5578 from "module_5578" /* 5578 */;
import GestureObjects from "GestureObjects" /* 5580 */;
import LegacyText from "LegacyText" /* 5590 */;
import TouchableHighlight from "TouchableHighlight" /* 5591 */;
import Directions from "Directions" /* 5597 */;
import pinchHandlerName from "pinchHandlerName" /* 5598 */;
import rotationHandlerName from "rotationHandlerName" /* 5599 */;
import HoverEffect from "HoverEffect" /* 5600 */;
import PointerType from "PointerType" /* 5601 */;
import initialize_mod from "module_5451" /* 5451 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5573.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5573.LegacyBorderlessButton;
export const LegacyRawButton = _mod5573.LegacyRawButton;
export const LegacyRectButton = _mod5573.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5578;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5574;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5489.ForceTouchGestureHandler;
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
export const State = _mod5455.State;