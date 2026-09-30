// === Module 6269: LegacyBaseButton ===

// Module 6269 (LegacyBaseButton)
import _mod6275 from "module_6275" /* 6275 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6294 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6295 */;
import managePanProps from "managePanProps" /* 6305 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6306 */;
import _mod6307 from "module_6307" /* 6307 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6309 */;
import _mod6310 from "module_6310" /* 6310 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6311 */;
import _mod6382 from "module_6382" /* 6382 */;
import _modDef6383 from "module_6383" /* 6383 */;
import LegacyScrollView from "LegacyScrollView" /* 6384 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6385 */;
import _modDef6387 from "module_6387" /* 6387 */;
import GestureObjects from "GestureObjects" /* 6389 */;
import LegacyText from "LegacyText" /* 6399 */;
import TouchableHighlight from "TouchableHighlight" /* 6400 */;
import Directions from "Directions" /* 6406 */;
import pinchHandlerName from "pinchHandlerName" /* 6407 */;
import rotationHandlerName from "rotationHandlerName" /* 6408 */;
import PointerType from "PointerType" /* 6409 */;
import module_6270 from "module_6270" /* 6270 */;
import initialize_mod from "module_6271" /* 6271 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6382.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6382.LegacyBorderlessButton;
export const LegacyRawButton = _mod6382.LegacyRawButton;
export const LegacyRectButton = _mod6382.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6387;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6383;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6307.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6310.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6275.State;