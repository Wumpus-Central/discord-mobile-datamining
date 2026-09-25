// === Module 6068: LegacyBaseButton ===

// Module 6068 (LegacyBaseButton)
import _mod6074 from "module_6074" /* 6074 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6093 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6094 */;
import managePanProps from "managePanProps" /* 6104 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6105 */;
import _mod6106 from "module_6106" /* 6106 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6108 */;
import _mod6109 from "module_6109" /* 6109 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6110 */;
import _mod6181 from "module_6181" /* 6181 */;
import _modDef6182 from "module_6182" /* 6182 */;
import LegacyScrollView from "LegacyScrollView" /* 6183 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6184 */;
import _modDef6186 from "module_6186" /* 6186 */;
import GestureObjects from "GestureObjects" /* 6188 */;
import LegacyText from "LegacyText" /* 6198 */;
import TouchableHighlight from "TouchableHighlight" /* 6199 */;
import Directions from "Directions" /* 6205 */;
import pinchHandlerName from "pinchHandlerName" /* 6206 */;
import rotationHandlerName from "rotationHandlerName" /* 6207 */;
import PointerType from "PointerType" /* 6208 */;
import module_6069 from "module_6069" /* 6069 */;
import initialize_mod from "module_6070" /* 6070 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6181.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6181.LegacyBorderlessButton;
export const LegacyRawButton = _mod6181.LegacyRawButton;
export const LegacyRectButton = _mod6181.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6186;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6182;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6106.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6109.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6074.State;