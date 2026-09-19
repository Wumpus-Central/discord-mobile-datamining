// === Module 6892: LegacyBaseButton ===

// Module 6892 (LegacyBaseButton)
import _mod6898 from "module_6898" /* 6898 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6917 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6918 */;
import managePanProps from "managePanProps" /* 6928 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6929 */;
import _mod6930 from "module_6930" /* 6930 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6932 */;
import _mod6933 from "module_6933" /* 6933 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6934 */;
import _mod7005 from "module_7005" /* 7005 */;
import _modDef7006 from "module_7006" /* 7006 */;
import LegacyScrollView from "LegacyScrollView" /* 7007 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7008 */;
import _modDef7010 from "module_7010" /* 7010 */;
import GestureObjects from "GestureObjects" /* 7012 */;
import LegacyText from "LegacyText" /* 7022 */;
import TouchableHighlight from "TouchableHighlight" /* 7023 */;
import Directions from "Directions" /* 7029 */;
import pinchHandlerName from "pinchHandlerName" /* 7030 */;
import rotationHandlerName from "rotationHandlerName" /* 7031 */;
import PointerType from "PointerType" /* 7032 */;
import module_6893 from "module_6893" /* 6893 */;
import initialize_mod from "module_6894" /* 6894 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7005.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7005.LegacyBorderlessButton;
export const LegacyRawButton = _mod7005.LegacyRawButton;
export const LegacyRectButton = _mod7005.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7010;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7006;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6930.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6933.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6898.State;