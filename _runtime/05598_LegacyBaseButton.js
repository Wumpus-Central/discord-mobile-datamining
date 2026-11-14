// === Module 5598: LegacyBaseButton ===

// Module 5598 (LegacyBaseButton)
import _mod5603 from "module_5603" /* 5603 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5623 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5624 */;
import managePanProps from "managePanProps" /* 5635 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5636 */;
import _mod5637 from "module_5637" /* 5637 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5639 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5641 */;
import _mod5721 from "module_5721" /* 5721 */;
import _modDef5722 from "module_5722" /* 5722 */;
import LegacyScrollView from "LegacyScrollView" /* 5723 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5724 */;
import _modDef5726 from "module_5726" /* 5726 */;
import GestureObjects from "GestureObjects" /* 5728 */;
import LegacyText from "LegacyText" /* 5738 */;
import TouchableHighlight from "TouchableHighlight" /* 5739 */;
import Directions from "Directions" /* 5745 */;
import pinchHandlerName from "pinchHandlerName" /* 5746 */;
import rotationHandlerName from "rotationHandlerName" /* 5747 */;
import HoverEffect from "HoverEffect" /* 5748 */;
import PointerType from "PointerType" /* 5749 */;
import initialize_mod from "module_5599" /* 5599 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5721.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5721.LegacyBorderlessButton;
export const LegacyRawButton = _mod5721.LegacyRawButton;
export const LegacyRectButton = _mod5721.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5726;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5722;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5637.ForceTouchGestureHandler;
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
export const State = _mod5603.State;