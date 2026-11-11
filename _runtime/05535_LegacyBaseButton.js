// === Module 5535: LegacyBaseButton ===

// Module 5535 (LegacyBaseButton)
import _mod5540 from "module_5540" /* 5540 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5560 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5561 */;
import managePanProps from "managePanProps" /* 5572 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5573 */;
import _mod5574 from "module_5574" /* 5574 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5576 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5578 */;
import _mod5658 from "module_5658" /* 5658 */;
import _modDef5659 from "module_5659" /* 5659 */;
import LegacyScrollView from "LegacyScrollView" /* 5660 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5661 */;
import _modDef5663 from "module_5663" /* 5663 */;
import GestureObjects from "GestureObjects" /* 5665 */;
import LegacyText from "LegacyText" /* 5675 */;
import TouchableHighlight from "TouchableHighlight" /* 5676 */;
import Directions from "Directions" /* 5682 */;
import pinchHandlerName from "pinchHandlerName" /* 5683 */;
import rotationHandlerName from "rotationHandlerName" /* 5684 */;
import HoverEffect from "HoverEffect" /* 5685 */;
import PointerType from "PointerType" /* 5686 */;
import initialize_mod from "module_5536" /* 5536 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5658.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5658.LegacyBorderlessButton;
export const LegacyRawButton = _mod5658.LegacyRawButton;
export const LegacyRectButton = _mod5658.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5663;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5659;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5574.ForceTouchGestureHandler;
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
export const State = _mod5540.State;