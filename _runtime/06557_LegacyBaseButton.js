// === Module 6557: LegacyBaseButton ===

// Module 6557 (LegacyBaseButton)
import _mod6563 from "module_6563" /* 6563 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6582 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6583 */;
import managePanProps from "managePanProps" /* 6593 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6594 */;
import _mod6595 from "module_6595" /* 6595 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6597 */;
import _mod6598 from "module_6598" /* 6598 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6599 */;
import _mod6670 from "module_6670" /* 6670 */;
import _modDef6671 from "module_6671" /* 6671 */;
import LegacyScrollView from "LegacyScrollView" /* 6672 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6673 */;
import _modDef6675 from "module_6675" /* 6675 */;
import GestureObjects from "GestureObjects" /* 6677 */;
import LegacyText from "LegacyText" /* 6687 */;
import TouchableHighlight from "TouchableHighlight" /* 6688 */;
import Directions from "Directions" /* 6694 */;
import pinchHandlerName from "pinchHandlerName" /* 6695 */;
import rotationHandlerName from "rotationHandlerName" /* 6696 */;
import PointerType from "PointerType" /* 6697 */;
import module_6558 from "module_6558" /* 6558 */;
import initialize_mod from "module_6559" /* 6559 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6670.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6670.LegacyBorderlessButton;
export const LegacyRawButton = _mod6670.LegacyRawButton;
export const LegacyRectButton = _mod6670.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6675;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6671;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6595.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6598.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6563.State;