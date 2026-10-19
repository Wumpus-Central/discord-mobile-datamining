// === Module 5258: LegacyBaseButton ===

// Module 5258 (LegacyBaseButton)
import _mod5264 from "module_5264" /* 5264 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5283 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5284 */;
import managePanProps from "managePanProps" /* 5294 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5295 */;
import _mod5296 from "module_5296" /* 5296 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5298 */;
import _mod5299 from "module_5299" /* 5299 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5300 */;
import _mod5371 from "module_5371" /* 5371 */;
import _modDef5372 from "module_5372" /* 5372 */;
import LegacyScrollView from "LegacyScrollView" /* 5373 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5374 */;
import _modDef5376 from "module_5376" /* 5376 */;
import GestureObjects from "GestureObjects" /* 5378 */;
import LegacyText from "LegacyText" /* 5388 */;
import TouchableHighlight from "TouchableHighlight" /* 5389 */;
import Directions from "Directions" /* 5395 */;
import pinchHandlerName from "pinchHandlerName" /* 5396 */;
import rotationHandlerName from "rotationHandlerName" /* 5397 */;
import PointerType from "PointerType" /* 5398 */;
import module_5259 from "module_5259" /* 5259 */;
import initialize_mod from "module_5260" /* 5260 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5371.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5371.LegacyBorderlessButton;
export const LegacyRawButton = _mod5371.LegacyRawButton;
export const LegacyRectButton = _mod5371.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5376;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5372;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5296.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5299.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5264.State;