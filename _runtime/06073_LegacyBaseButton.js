// === Module 6073: LegacyBaseButton ===

// Module 6073 (LegacyBaseButton)
import _mod6079 from "module_6079" /* 6079 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6098 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6099 */;
import managePanProps from "managePanProps" /* 6109 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6110 */;
import _mod6111 from "module_6111" /* 6111 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6113 */;
import _mod6114 from "module_6114" /* 6114 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6115 */;
import _mod6186 from "module_6186" /* 6186 */;
import _modDef6187 from "module_6187" /* 6187 */;
import LegacyScrollView from "LegacyScrollView" /* 6188 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6189 */;
import _modDef6191 from "module_6191" /* 6191 */;
import GestureObjects from "GestureObjects" /* 6193 */;
import LegacyText from "LegacyText" /* 6203 */;
import TouchableHighlight from "TouchableHighlight" /* 6204 */;
import Directions from "Directions" /* 6210 */;
import pinchHandlerName from "pinchHandlerName" /* 6211 */;
import rotationHandlerName from "rotationHandlerName" /* 6212 */;
import PointerType from "PointerType" /* 6213 */;
import module_6074 from "module_6074" /* 6074 */;
import initialize_mod from "module_6075" /* 6075 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6186.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6186.LegacyBorderlessButton;
export const LegacyRawButton = _mod6186.LegacyRawButton;
export const LegacyRectButton = _mod6186.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6191;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6187;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6111.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6114.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6079.State;