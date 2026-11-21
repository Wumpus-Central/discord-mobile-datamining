// === Module 5173: LegacyBaseButton ===

// Module 5173 (LegacyBaseButton)
import _mod5178 from "module_5178" /* 5178 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5198 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5199 */;
import managePanProps from "managePanProps" /* 5210 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5211 */;
import _mod5212 from "module_5212" /* 5212 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5214 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5216 */;
import _mod5296 from "module_5296" /* 5296 */;
import _modDef5297 from "module_5297" /* 5297 */;
import LegacyScrollView from "LegacyScrollView" /* 5298 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5299 */;
import _modDef5301 from "module_5301" /* 5301 */;
import GestureObjects from "GestureObjects" /* 5303 */;
import LegacyText from "LegacyText" /* 5313 */;
import TouchableHighlight from "TouchableHighlight" /* 5314 */;
import Directions from "Directions" /* 5320 */;
import pinchHandlerName from "pinchHandlerName" /* 5321 */;
import rotationHandlerName from "rotationHandlerName" /* 5322 */;
import HoverEffect from "HoverEffect" /* 5323 */;
import PointerType from "PointerType" /* 5324 */;
import initialize_mod from "module_5174" /* 5174 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5296.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5296.LegacyBorderlessButton;
export const LegacyRawButton = _mod5296.LegacyRawButton;
export const LegacyRectButton = _mod5296.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5301;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5297;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5212.ForceTouchGestureHandler;
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
export const State = _mod5178.State;