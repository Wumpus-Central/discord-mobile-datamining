// === Module 5426: LegacyBaseButton ===

// Module 5426 (LegacyBaseButton)
import _mod5432 from "module_5432" /* 5432 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5451 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5452 */;
import managePanProps from "managePanProps" /* 5462 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5463 */;
import _mod5464 from "module_5464" /* 5464 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5466 */;
import _mod5467 from "module_5467" /* 5467 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5468 */;
import _mod5539 from "module_5539" /* 5539 */;
import _modDef5540 from "module_5540" /* 5540 */;
import LegacyScrollView from "LegacyScrollView" /* 5541 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5542 */;
import _modDef5544 from "module_5544" /* 5544 */;
import GestureObjects from "GestureObjects" /* 5546 */;
import LegacyText from "LegacyText" /* 5556 */;
import TouchableHighlight from "TouchableHighlight" /* 5557 */;
import Directions from "Directions" /* 5563 */;
import pinchHandlerName from "pinchHandlerName" /* 5564 */;
import rotationHandlerName from "rotationHandlerName" /* 5565 */;
import PointerType from "PointerType" /* 5566 */;
import module_5427 from "module_5427" /* 5427 */;
import initialize_mod from "module_5428" /* 5428 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5539.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5539.LegacyBorderlessButton;
export const LegacyRawButton = _mod5539.LegacyRawButton;
export const LegacyRectButton = _mod5539.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5544;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5540;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5464.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5467.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5432.State;