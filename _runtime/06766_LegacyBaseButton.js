// === Module 6766: LegacyBaseButton ===

// Module 6766 (LegacyBaseButton)
import _mod6772 from "module_6772" /* 6772 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6791 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6792 */;
import managePanProps from "managePanProps" /* 6802 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6803 */;
import _mod6804 from "module_6804" /* 6804 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6806 */;
import _mod6807 from "module_6807" /* 6807 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6808 */;
import _mod6879 from "module_6879" /* 6879 */;
import _modDef6880 from "module_6880" /* 6880 */;
import LegacyScrollView from "LegacyScrollView" /* 6881 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6882 */;
import _modDef6884 from "module_6884" /* 6884 */;
import GestureObjects from "GestureObjects" /* 6886 */;
import LegacyText from "LegacyText" /* 6896 */;
import TouchableHighlight from "TouchableHighlight" /* 6897 */;
import Directions from "Directions" /* 6903 */;
import pinchHandlerName from "pinchHandlerName" /* 6904 */;
import rotationHandlerName from "rotationHandlerName" /* 6905 */;
import PointerType from "PointerType" /* 6906 */;
import module_6767 from "module_6767" /* 6767 */;
import initialize_mod from "module_6768" /* 6768 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6879.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6879.LegacyBorderlessButton;
export const LegacyRawButton = _mod6879.LegacyRawButton;
export const LegacyRectButton = _mod6879.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6884;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6880;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6804.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6807.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6772.State;