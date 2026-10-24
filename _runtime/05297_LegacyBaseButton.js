// === Module 5297: LegacyBaseButton ===

// Module 5297 (LegacyBaseButton)
import _mod5303 from "module_5303" /* 5303 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5322 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5323 */;
import managePanProps from "managePanProps" /* 5333 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5334 */;
import _mod5335 from "module_5335" /* 5335 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5337 */;
import _mod5338 from "module_5338" /* 5338 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5339 */;
import _mod5410 from "module_5410" /* 5410 */;
import _modDef5411 from "module_5411" /* 5411 */;
import LegacyScrollView from "LegacyScrollView" /* 5412 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5413 */;
import _modDef5415 from "module_5415" /* 5415 */;
import GestureObjects from "GestureObjects" /* 5417 */;
import LegacyText from "LegacyText" /* 5427 */;
import TouchableHighlight from "TouchableHighlight" /* 5428 */;
import Directions from "Directions" /* 5434 */;
import pinchHandlerName from "pinchHandlerName" /* 5435 */;
import rotationHandlerName from "rotationHandlerName" /* 5436 */;
import PointerType from "PointerType" /* 5437 */;
import module_5298 from "module_5298" /* 5298 */;
import initialize_mod from "module_5299" /* 5299 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5410.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5410.LegacyBorderlessButton;
export const LegacyRawButton = _mod5410.LegacyRawButton;
export const LegacyRectButton = _mod5410.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5415;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5411;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5335.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5338.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5303.State;