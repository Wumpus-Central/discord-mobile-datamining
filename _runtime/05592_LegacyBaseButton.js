// === Module 5592: LegacyBaseButton ===

// Module 5592 (LegacyBaseButton)
import _mod5597 from "module_5597" /* 5597 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5617 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5618 */;
import managePanProps from "managePanProps" /* 5629 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5630 */;
import _mod5631 from "module_5631" /* 5631 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5633 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5635 */;
import _mod5715 from "module_5715" /* 5715 */;
import _modDef5716 from "module_5716" /* 5716 */;
import LegacyScrollView from "LegacyScrollView" /* 5717 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5718 */;
import _modDef5720 from "module_5720" /* 5720 */;
import GestureObjects from "GestureObjects" /* 5722 */;
import LegacyText from "LegacyText" /* 5732 */;
import TouchableHighlight from "TouchableHighlight" /* 5733 */;
import Directions from "Directions" /* 5739 */;
import pinchHandlerName from "pinchHandlerName" /* 5740 */;
import rotationHandlerName from "rotationHandlerName" /* 5741 */;
import HoverEffect from "HoverEffect" /* 5742 */;
import PointerType from "PointerType" /* 5743 */;
import initialize_mod from "module_5593" /* 5593 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5715.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5715.LegacyBorderlessButton;
export const LegacyRawButton = _mod5715.LegacyRawButton;
export const LegacyRectButton = _mod5715.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5720;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5716;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5631.ForceTouchGestureHandler;
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
export const State = _mod5597.State;