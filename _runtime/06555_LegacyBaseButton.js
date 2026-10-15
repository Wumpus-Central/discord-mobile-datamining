// === Module 6555: LegacyBaseButton ===

// Module 6555 (LegacyBaseButton)
import _mod6561 from "module_6561" /* 6561 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6580 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6581 */;
import managePanProps from "managePanProps" /* 6591 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6592 */;
import _mod6593 from "module_6593" /* 6593 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6595 */;
import _mod6596 from "module_6596" /* 6596 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6597 */;
import _mod6668 from "module_6668" /* 6668 */;
import _modDef6669 from "module_6669" /* 6669 */;
import LegacyScrollView from "LegacyScrollView" /* 6670 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6671 */;
import _modDef6673 from "module_6673" /* 6673 */;
import GestureObjects from "GestureObjects" /* 6675 */;
import LegacyText from "LegacyText" /* 6685 */;
import TouchableHighlight from "TouchableHighlight" /* 6686 */;
import Directions from "Directions" /* 6692 */;
import pinchHandlerName from "pinchHandlerName" /* 6693 */;
import rotationHandlerName from "rotationHandlerName" /* 6694 */;
import PointerType from "PointerType" /* 6695 */;
import module_6556 from "module_6556" /* 6556 */;
import initialize_mod from "module_6557" /* 6557 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6668.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6668.LegacyBorderlessButton;
export const LegacyRawButton = _mod6668.LegacyRawButton;
export const LegacyRectButton = _mod6668.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6673;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6669;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6593.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6596.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6561.State;