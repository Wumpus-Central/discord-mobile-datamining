// === Module 5430: LegacyBaseButton ===

// Module 5430 (LegacyBaseButton)
import _mod5435 from "module_5435" /* 5435 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5455 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5456 */;
import managePanProps from "managePanProps" /* 5467 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5468 */;
import _mod5469 from "module_5469" /* 5469 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5471 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5473 */;
import _mod5553 from "module_5553" /* 5553 */;
import _modDef5554 from "module_5554" /* 5554 */;
import LegacyScrollView from "LegacyScrollView" /* 5555 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5556 */;
import _modDef5558 from "module_5558" /* 5558 */;
import GestureObjects from "GestureObjects" /* 5560 */;
import LegacyText from "LegacyText" /* 5570 */;
import TouchableHighlight from "TouchableHighlight" /* 5571 */;
import Directions from "Directions" /* 5577 */;
import pinchHandlerName from "pinchHandlerName" /* 5578 */;
import rotationHandlerName from "rotationHandlerName" /* 5579 */;
import HoverEffect from "HoverEffect" /* 5580 */;
import PointerType from "PointerType" /* 5581 */;
import initialize_mod from "module_5431" /* 5431 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5553.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5553.LegacyBorderlessButton;
export const LegacyRawButton = _mod5553.LegacyRawButton;
export const LegacyRectButton = _mod5553.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5558;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5554;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5469.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const HoverEffect = HoverEffect.HoverEffect;
export const PointerType = PointerType.PointerType;
export const State = _mod5435.State;