// === Module 6333: LegacyBaseButton ===

// Module 6333 (LegacyBaseButton)
import _mod6339 from "module_6339" /* 6339 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6358 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6359 */;
import managePanProps from "managePanProps" /* 6369 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6370 */;
import _mod6371 from "module_6371" /* 6371 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6373 */;
import _mod6374 from "module_6374" /* 6374 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6375 */;
import _mod6446 from "module_6446" /* 6446 */;
import _modDef6447 from "module_6447" /* 6447 */;
import LegacyScrollView from "LegacyScrollView" /* 6448 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6449 */;
import _modDef6451 from "module_6451" /* 6451 */;
import GestureObjects from "GestureObjects" /* 6453 */;
import LegacyText from "LegacyText" /* 6463 */;
import TouchableHighlight from "TouchableHighlight" /* 6464 */;
import Directions from "Directions" /* 6470 */;
import pinchHandlerName from "pinchHandlerName" /* 6471 */;
import rotationHandlerName from "rotationHandlerName" /* 6472 */;
import PointerType from "PointerType" /* 6473 */;
import module_6334 from "module_6334" /* 6334 */;
import initialize_mod from "module_6335" /* 6335 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6446.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6446.LegacyBorderlessButton;
export const LegacyRawButton = _mod6446.LegacyRawButton;
export const LegacyRectButton = _mod6446.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6451;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6447;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6371.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6374.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6339.State;