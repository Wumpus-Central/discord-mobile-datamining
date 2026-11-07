// === Module 5420: LegacyBaseButton ===

// Module 5420 (LegacyBaseButton)
import _mod5425 from "module_5425" /* 5425 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5445 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5446 */;
import managePanProps from "managePanProps" /* 5457 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5458 */;
import _mod5459 from "module_5459" /* 5459 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5461 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5463 */;
import _mod5543 from "module_5543" /* 5543 */;
import _modDef5544 from "module_5544" /* 5544 */;
import LegacyScrollView from "LegacyScrollView" /* 5545 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5546 */;
import _modDef5548 from "module_5548" /* 5548 */;
import GestureObjects from "GestureObjects" /* 5550 */;
import LegacyText from "LegacyText" /* 5560 */;
import TouchableHighlight from "TouchableHighlight" /* 5561 */;
import Directions from "Directions" /* 5567 */;
import pinchHandlerName from "pinchHandlerName" /* 5568 */;
import rotationHandlerName from "rotationHandlerName" /* 5569 */;
import HoverEffect from "HoverEffect" /* 5570 */;
import PointerType from "PointerType" /* 5571 */;
import initialize_mod from "module_5421" /* 5421 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5543.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5543.LegacyBorderlessButton;
export const LegacyRawButton = _mod5543.LegacyRawButton;
export const LegacyRectButton = _mod5543.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5548;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5544;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5459.ForceTouchGestureHandler;
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
export const State = _mod5425.State;