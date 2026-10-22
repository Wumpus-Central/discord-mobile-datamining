// === Module 5283: LegacyBaseButton ===

// Module 5283 (LegacyBaseButton)
import _mod5289 from "module_5289" /* 5289 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5308 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5309 */;
import managePanProps from "managePanProps" /* 5319 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5320 */;
import _mod5321 from "module_5321" /* 5321 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5323 */;
import _mod5324 from "module_5324" /* 5324 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5325 */;
import _mod5396 from "module_5396" /* 5396 */;
import _modDef5397 from "module_5397" /* 5397 */;
import LegacyScrollView from "LegacyScrollView" /* 5398 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5399 */;
import _modDef5401 from "module_5401" /* 5401 */;
import GestureObjects from "GestureObjects" /* 5403 */;
import LegacyText from "LegacyText" /* 5413 */;
import TouchableHighlight from "TouchableHighlight" /* 5414 */;
import Directions from "Directions" /* 5420 */;
import pinchHandlerName from "pinchHandlerName" /* 5421 */;
import rotationHandlerName from "rotationHandlerName" /* 5422 */;
import PointerType from "PointerType" /* 5423 */;
import module_5284 from "module_5284" /* 5284 */;
import initialize_mod from "module_5285" /* 5285 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5396.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5396.LegacyBorderlessButton;
export const LegacyRawButton = _mod5396.LegacyRawButton;
export const LegacyRectButton = _mod5396.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5401;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5397;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5321.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5324.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5289.State;