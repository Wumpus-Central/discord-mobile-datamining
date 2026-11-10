// === Module 5422: LegacyBaseButton ===

// Module 5422 (LegacyBaseButton)
import _mod5427 from "module_5427" /* 5427 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5447 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5448 */;
import managePanProps from "managePanProps" /* 5459 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5460 */;
import _mod5461 from "module_5461" /* 5461 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5463 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5465 */;
import _mod5545 from "module_5545" /* 5545 */;
import _modDef5546 from "module_5546" /* 5546 */;
import LegacyScrollView from "LegacyScrollView" /* 5547 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5548 */;
import _modDef5550 from "module_5550" /* 5550 */;
import GestureObjects from "GestureObjects" /* 5552 */;
import LegacyText from "LegacyText" /* 5562 */;
import TouchableHighlight from "TouchableHighlight" /* 5563 */;
import Directions from "Directions" /* 5569 */;
import pinchHandlerName from "pinchHandlerName" /* 5570 */;
import rotationHandlerName from "rotationHandlerName" /* 5571 */;
import HoverEffect from "HoverEffect" /* 5572 */;
import PointerType from "PointerType" /* 5573 */;
import initialize_mod from "module_5423" /* 5423 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5545.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5545.LegacyBorderlessButton;
export const LegacyRawButton = _mod5545.LegacyRawButton;
export const LegacyRectButton = _mod5545.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5550;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5546;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5461.ForceTouchGestureHandler;
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
export const State = _mod5427.State;