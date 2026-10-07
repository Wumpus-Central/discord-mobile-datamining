// === Module 6147: LegacyBaseButton ===

// Module 6147 (LegacyBaseButton)
import _mod6153 from "module_6153" /* 6153 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6172 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6173 */;
import managePanProps from "managePanProps" /* 6183 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6184 */;
import _mod6185 from "module_6185" /* 6185 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6187 */;
import _mod6188 from "module_6188" /* 6188 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6189 */;
import _mod6260 from "module_6260" /* 6260 */;
import _modDef6261 from "module_6261" /* 6261 */;
import LegacyScrollView from "LegacyScrollView" /* 6262 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6263 */;
import _modDef6265 from "module_6265" /* 6265 */;
import GestureObjects from "GestureObjects" /* 6267 */;
import LegacyText from "LegacyText" /* 6277 */;
import TouchableHighlight from "TouchableHighlight" /* 6278 */;
import Directions from "Directions" /* 6284 */;
import pinchHandlerName from "pinchHandlerName" /* 6285 */;
import rotationHandlerName from "rotationHandlerName" /* 6286 */;
import PointerType from "PointerType" /* 6287 */;
import module_6148 from "module_6148" /* 6148 */;
import initialize_mod from "module_6149" /* 6149 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6260.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6260.LegacyBorderlessButton;
export const LegacyRawButton = _mod6260.LegacyRawButton;
export const LegacyRectButton = _mod6260.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6265;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6261;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6185.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6188.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6153.State;