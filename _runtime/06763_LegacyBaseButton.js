// === Module 6763: LegacyBaseButton ===

// Module 6763 (LegacyBaseButton)
import _mod6769 from "module_6769" /* 6769 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6788 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6789 */;
import managePanProps from "managePanProps" /* 6799 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6800 */;
import _mod6801 from "module_6801" /* 6801 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6803 */;
import _mod6804 from "module_6804" /* 6804 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6805 */;
import _mod6876 from "module_6876" /* 6876 */;
import _modDef6877 from "module_6877" /* 6877 */;
import LegacyScrollView from "LegacyScrollView" /* 6878 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6879 */;
import _modDef6881 from "module_6881" /* 6881 */;
import GestureObjects from "GestureObjects" /* 6883 */;
import LegacyText from "LegacyText" /* 6893 */;
import TouchableHighlight from "TouchableHighlight" /* 6894 */;
import Directions from "Directions" /* 6900 */;
import pinchHandlerName from "pinchHandlerName" /* 6901 */;
import rotationHandlerName from "rotationHandlerName" /* 6902 */;
import PointerType from "PointerType" /* 6903 */;
import module_6764 from "module_6764" /* 6764 */;
import initialize_mod from "module_6765" /* 6765 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6876.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6876.LegacyBorderlessButton;
export const LegacyRawButton = _mod6876.LegacyRawButton;
export const LegacyRectButton = _mod6876.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6881;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6877;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6801.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6804.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6769.State;