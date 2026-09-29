// === Module 6239: LegacyBaseButton ===

// Module 6239 (LegacyBaseButton)
import _mod6245 from "module_6245" /* 6245 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6264 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6265 */;
import managePanProps from "managePanProps" /* 6275 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6276 */;
import _mod6277 from "module_6277" /* 6277 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6279 */;
import _mod6280 from "module_6280" /* 6280 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6281 */;
import _mod6352 from "module_6352" /* 6352 */;
import _modDef6353 from "module_6353" /* 6353 */;
import LegacyScrollView from "LegacyScrollView" /* 6354 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6355 */;
import _modDef6357 from "module_6357" /* 6357 */;
import GestureObjects from "GestureObjects" /* 6359 */;
import LegacyText from "LegacyText" /* 6369 */;
import TouchableHighlight from "TouchableHighlight" /* 6370 */;
import Directions from "Directions" /* 6376 */;
import pinchHandlerName from "pinchHandlerName" /* 6377 */;
import rotationHandlerName from "rotationHandlerName" /* 6378 */;
import PointerType from "PointerType" /* 6379 */;
import module_6240 from "module_6240" /* 6240 */;
import initialize_mod from "module_6241" /* 6241 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6352.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6352.LegacyBorderlessButton;
export const LegacyRawButton = _mod6352.LegacyRawButton;
export const LegacyRectButton = _mod6352.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6357;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6353;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6277.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6280.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6245.State;