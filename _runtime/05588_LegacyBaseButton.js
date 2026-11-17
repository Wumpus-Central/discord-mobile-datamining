// === Module 5588: LegacyBaseButton ===

// Module 5588 (LegacyBaseButton)
import _mod5593 from "module_5593" /* 5593 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5613 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5614 */;
import managePanProps from "managePanProps" /* 5625 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5626 */;
import _mod5627 from "module_5627" /* 5627 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5629 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5631 */;
import _mod5711 from "module_5711" /* 5711 */;
import _modDef5712 from "module_5712" /* 5712 */;
import LegacyScrollView from "LegacyScrollView" /* 5713 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5714 */;
import _modDef5716 from "module_5716" /* 5716 */;
import GestureObjects from "GestureObjects" /* 5718 */;
import LegacyText from "LegacyText" /* 5728 */;
import TouchableHighlight from "TouchableHighlight" /* 5729 */;
import Directions from "Directions" /* 5735 */;
import pinchHandlerName from "pinchHandlerName" /* 5736 */;
import rotationHandlerName from "rotationHandlerName" /* 5737 */;
import HoverEffect from "HoverEffect" /* 5738 */;
import PointerType from "PointerType" /* 5739 */;
import initialize_mod from "module_5589" /* 5589 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5711.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5711.LegacyBorderlessButton;
export const LegacyRawButton = _mod5711.LegacyRawButton;
export const LegacyRectButton = _mod5711.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5716;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5712;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5627.ForceTouchGestureHandler;
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
export const State = _mod5593.State;