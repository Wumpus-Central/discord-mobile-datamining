// === Module 5303: LegacyBaseButton ===

// Module 5303 (LegacyBaseButton)
import _mod5308 from "module_5308" /* 5308 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5329 */;
import managePanProps from "managePanProps" /* 5340 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5341 */;
import _mod5342 from "module_5342" /* 5342 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5344 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5346 */;
import _mod5426 from "module_5426" /* 5426 */;
import _modDef5427 from "module_5427" /* 5427 */;
import LegacyScrollView from "LegacyScrollView" /* 5428 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5429 */;
import _modDef5431 from "module_5431" /* 5431 */;
import GestureObjects from "GestureObjects" /* 5433 */;
import LegacyText from "LegacyText" /* 5443 */;
import TouchableHighlight from "TouchableHighlight" /* 5444 */;
import Directions from "Directions" /* 5450 */;
import pinchHandlerName from "pinchHandlerName" /* 5451 */;
import rotationHandlerName from "rotationHandlerName" /* 5452 */;
import HoverEffect from "HoverEffect" /* 5453 */;
import PointerType from "PointerType" /* 5454 */;
import initialize_mod from "module_5304" /* 5304 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5426.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5426.LegacyBorderlessButton;
export const LegacyRawButton = _mod5426.LegacyRawButton;
export const LegacyRectButton = _mod5426.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5431;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5427;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5342.ForceTouchGestureHandler;
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
export const State = _mod5308.State;