// === Module 6612: LegacyBaseButton ===

// Module 6612 (LegacyBaseButton)
import _mod6618 from "module_6618" /* 6618 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6637 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6638 */;
import managePanProps from "managePanProps" /* 6648 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6649 */;
import _mod6650 from "module_6650" /* 6650 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6652 */;
import _mod6653 from "module_6653" /* 6653 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6654 */;
import _mod6725 from "module_6725" /* 6725 */;
import _modDef6726 from "module_6726" /* 6726 */;
import LegacyScrollView from "LegacyScrollView" /* 6727 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6728 */;
import _modDef6730 from "module_6730" /* 6730 */;
import GestureObjects from "GestureObjects" /* 6732 */;
import LegacyText from "LegacyText" /* 6742 */;
import TouchableHighlight from "TouchableHighlight" /* 6743 */;
import Directions from "Directions" /* 6749 */;
import pinchHandlerName from "pinchHandlerName" /* 6750 */;
import rotationHandlerName from "rotationHandlerName" /* 6751 */;
import PointerType from "PointerType" /* 6752 */;
import module_6613 from "module_6613" /* 6613 */;
import initialize_mod from "module_6614" /* 6614 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6725.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6725.LegacyBorderlessButton;
export const LegacyRawButton = _mod6725.LegacyRawButton;
export const LegacyRectButton = _mod6725.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6730;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6726;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6650.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6653.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6618.State;