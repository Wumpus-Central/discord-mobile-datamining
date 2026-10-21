// === Module 5279: LegacyBaseButton ===

// Module 5279 (LegacyBaseButton)
import _mod5285 from "module_5285" /* 5285 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5304 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5305 */;
import managePanProps from "managePanProps" /* 5315 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5316 */;
import _mod5317 from "module_5317" /* 5317 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5319 */;
import _mod5320 from "module_5320" /* 5320 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5321 */;
import _mod5392 from "module_5392" /* 5392 */;
import _modDef5393 from "module_5393" /* 5393 */;
import LegacyScrollView from "LegacyScrollView" /* 5394 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5395 */;
import _modDef5397 from "module_5397" /* 5397 */;
import GestureObjects from "GestureObjects" /* 5399 */;
import LegacyText from "LegacyText" /* 5409 */;
import TouchableHighlight from "TouchableHighlight" /* 5410 */;
import Directions from "Directions" /* 5416 */;
import pinchHandlerName from "pinchHandlerName" /* 5417 */;
import rotationHandlerName from "rotationHandlerName" /* 5418 */;
import PointerType from "PointerType" /* 5419 */;
import module_5280 from "module_5280" /* 5280 */;
import initialize_mod from "module_5281" /* 5281 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5392.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5392.LegacyBorderlessButton;
export const LegacyRawButton = _mod5392.LegacyRawButton;
export const LegacyRectButton = _mod5392.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5397;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5393;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5317.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5320.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5285.State;