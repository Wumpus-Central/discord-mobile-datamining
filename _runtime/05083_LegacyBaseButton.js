// === Module 5083: LegacyBaseButton ===

// Module 5083 (LegacyBaseButton)
import _mod5088 from "module_5088" /* 5088 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5108 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5109 */;
import managePanProps from "managePanProps" /* 5120 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5121 */;
import _mod5122 from "module_5122" /* 5122 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5124 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5126 */;
import _mod5206 from "module_5206" /* 5206 */;
import _modDef5207 from "module_5207" /* 5207 */;
import LegacyScrollView from "LegacyScrollView" /* 5208 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5209 */;
import _modDef5211 from "module_5211" /* 5211 */;
import GestureObjects from "GestureObjects" /* 5213 */;
import LegacyText from "LegacyText" /* 5223 */;
import TouchableHighlight from "TouchableHighlight" /* 5224 */;
import Directions from "Directions" /* 5230 */;
import pinchHandlerName from "pinchHandlerName" /* 5231 */;
import rotationHandlerName from "rotationHandlerName" /* 5232 */;
import HoverEffect from "HoverEffect" /* 5233 */;
import PointerType from "PointerType" /* 5234 */;
import initialize_mod from "module_5084" /* 5084 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5206.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5206.LegacyBorderlessButton;
export const LegacyRawButton = _mod5206.LegacyRawButton;
export const LegacyRectButton = _mod5206.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5211;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5207;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5122.ForceTouchGestureHandler;
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
export const State = _mod5088.State;