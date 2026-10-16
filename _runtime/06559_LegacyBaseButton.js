// === Module 6559: LegacyBaseButton ===

// Module 6559 (LegacyBaseButton)
import _mod6565 from "module_6565" /* 6565 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6584 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6585 */;
import managePanProps from "managePanProps" /* 6595 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6596 */;
import _mod6597 from "module_6597" /* 6597 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6599 */;
import _mod6600 from "module_6600" /* 6600 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6601 */;
import _mod6672 from "module_6672" /* 6672 */;
import _modDef6673 from "module_6673" /* 6673 */;
import LegacyScrollView from "LegacyScrollView" /* 6674 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6675 */;
import _modDef6677 from "module_6677" /* 6677 */;
import GestureObjects from "GestureObjects" /* 6679 */;
import LegacyText from "LegacyText" /* 6689 */;
import TouchableHighlight from "TouchableHighlight" /* 6690 */;
import Directions from "Directions" /* 6696 */;
import pinchHandlerName from "pinchHandlerName" /* 6697 */;
import rotationHandlerName from "rotationHandlerName" /* 6698 */;
import PointerType from "PointerType" /* 6699 */;
import module_6560 from "module_6560" /* 6560 */;
import initialize_mod from "module_6561" /* 6561 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6672.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6672.LegacyBorderlessButton;
export const LegacyRawButton = _mod6672.LegacyRawButton;
export const LegacyRectButton = _mod6672.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6677;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6673;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6597.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6600.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6565.State;