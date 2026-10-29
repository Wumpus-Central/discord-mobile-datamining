// === Module 5334: LegacyBaseButton ===

// Module 5334 (LegacyBaseButton)
import _mod5340 from "module_5340" /* 5340 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5359 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5360 */;
import managePanProps from "managePanProps" /* 5370 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5371 */;
import _mod5372 from "module_5372" /* 5372 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5374 */;
import _mod5375 from "module_5375" /* 5375 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5376 */;
import _mod5447 from "module_5447" /* 5447 */;
import _modDef5448 from "module_5448" /* 5448 */;
import LegacyScrollView from "LegacyScrollView" /* 5449 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5450 */;
import _modDef5452 from "module_5452" /* 5452 */;
import GestureObjects from "GestureObjects" /* 5454 */;
import LegacyText from "LegacyText" /* 5464 */;
import TouchableHighlight from "TouchableHighlight" /* 5465 */;
import Directions from "Directions" /* 5471 */;
import pinchHandlerName from "pinchHandlerName" /* 5472 */;
import rotationHandlerName from "rotationHandlerName" /* 5473 */;
import PointerType from "PointerType" /* 5474 */;
import module_5335 from "module_5335" /* 5335 */;
import initialize_mod from "module_5336" /* 5336 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5447.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5447.LegacyBorderlessButton;
export const LegacyRawButton = _mod5447.LegacyRawButton;
export const LegacyRectButton = _mod5447.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5452;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5448;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5372.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5375.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5340.State;