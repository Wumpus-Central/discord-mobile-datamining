// === Module 5177: LegacyBaseButton ===

// Module 5177 (LegacyBaseButton)
import _mod5182 from "module_5182" /* 5182 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5202 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5203 */;
import managePanProps from "managePanProps" /* 5214 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5215 */;
import _mod5216 from "module_5216" /* 5216 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5218 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5220 */;
import _mod5300 from "module_5300" /* 5300 */;
import _modDef5301 from "module_5301" /* 5301 */;
import LegacyScrollView from "LegacyScrollView" /* 5302 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5303 */;
import _modDef5305 from "module_5305" /* 5305 */;
import GestureObjects from "GestureObjects" /* 5307 */;
import LegacyText from "LegacyText" /* 5317 */;
import TouchableHighlight from "TouchableHighlight" /* 5318 */;
import Directions from "Directions" /* 5324 */;
import pinchHandlerName from "pinchHandlerName" /* 5325 */;
import rotationHandlerName from "rotationHandlerName" /* 5326 */;
import HoverEffect from "HoverEffect" /* 5327 */;
import PointerType from "PointerType" /* 5328 */;
import initialize_mod from "module_5178" /* 5178 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5300.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5300.LegacyBorderlessButton;
export const LegacyRawButton = _mod5300.LegacyRawButton;
export const LegacyRectButton = _mod5300.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5305;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5301;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5216.ForceTouchGestureHandler;
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
export const State = _mod5182.State;