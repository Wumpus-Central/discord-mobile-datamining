// === Module 5054: LegacyBaseButton ===

// Module 5054 (LegacyBaseButton)
import _mod5059 from "module_5059" /* 5059 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5079 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5080 */;
import managePanProps from "managePanProps" /* 5091 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5092 */;
import _mod5093 from "module_5093" /* 5093 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5095 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5097 */;
import _mod5177 from "module_5177" /* 5177 */;
import _modDef5178 from "module_5178" /* 5178 */;
import LegacyScrollView from "LegacyScrollView" /* 5179 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5180 */;
import _modDef5182 from "module_5182" /* 5182 */;
import GestureObjects from "GestureObjects" /* 5184 */;
import LegacyText from "LegacyText" /* 5194 */;
import TouchableHighlight from "TouchableHighlight" /* 5195 */;
import Directions from "Directions" /* 5201 */;
import pinchHandlerName from "pinchHandlerName" /* 5202 */;
import rotationHandlerName from "rotationHandlerName" /* 5203 */;
import HoverEffect from "HoverEffect" /* 5204 */;
import PointerType from "PointerType" /* 5205 */;
import initialize_mod from "module_5055" /* 5055 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5177.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5177.LegacyBorderlessButton;
export const LegacyRawButton = _mod5177.LegacyRawButton;
export const LegacyRectButton = _mod5177.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5182;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5178;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5093.ForceTouchGestureHandler;
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
export const State = _mod5059.State;