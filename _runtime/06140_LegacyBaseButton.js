// === Module 6140: LegacyBaseButton ===

// Module 6140 (LegacyBaseButton)
import _mod6146 from "module_6146" /* 6146 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6166 */;
import managePanProps from "managePanProps" /* 6176 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6177 */;
import _mod6178 from "module_6178" /* 6178 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6180 */;
import _mod6181 from "module_6181" /* 6181 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6182 */;
import _mod6253 from "module_6253" /* 6253 */;
import _modDef6254 from "module_6254" /* 6254 */;
import LegacyScrollView from "LegacyScrollView" /* 6255 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6256 */;
import _modDef6258 from "module_6258" /* 6258 */;
import GestureObjects from "GestureObjects" /* 6260 */;
import LegacyText from "LegacyText" /* 6270 */;
import TouchableHighlight from "TouchableHighlight" /* 6271 */;
import Directions from "Directions" /* 6277 */;
import pinchHandlerName from "pinchHandlerName" /* 6278 */;
import rotationHandlerName from "rotationHandlerName" /* 6279 */;
import PointerType from "PointerType" /* 6280 */;
import module_6141 from "module_6141" /* 6141 */;
import initialize_mod from "module_6142" /* 6142 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6253.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6253.LegacyBorderlessButton;
export const LegacyRawButton = _mod6253.LegacyRawButton;
export const LegacyRectButton = _mod6253.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6258;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6254;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6178.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6181.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6146.State;