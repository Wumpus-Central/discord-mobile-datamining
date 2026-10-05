// === Module 6140: LegacyBaseButton ===

// Module 6140 (LegacyBaseButton)
import State from "State" /* 6146 */;
import BaseButton from "BaseButton" /* 6149 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6166 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6176 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6177 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6178 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6180 */;
import HoverEffect from "HoverEffect" /* 6181 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6182 */;
import LegacyRawButton from "LegacyRawButton" /* 6253 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6254 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6255 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6256 */;
import _modDef6258 from "module_6258" /* 6258 */;
import GestureObjects from "GestureObjects" /* 6260 */;
import LegacyText from "LegacyText" /* 6270 */;
import _mod6271 from "module_6271" /* 6271 */;
import Directions from "Directions" /* 6277 */;
import createHandler from "createHandler" /* 6278 */;
import createHandler2 from "createHandler" /* 6279 */;
import PointerType from "PointerType" /* 6280 */;
import module_6141 from "module_6141" /* 6141 */;
import initialize_mod from "initialize" /* 6142 */;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in BaseButton) {
  exports[key10019] = BaseButton[key10019];
  continue;
}
const LegacyRawButton_export = LegacyRawButton.LegacyRawButton;
const LegacyRefreshControl_export = LegacyRefreshControl.LegacyRefreshControl;
const LegacyText_export = LegacyText.LegacyText;
const Directions_export = Directions.Directions;
const HoverEffect_export = HoverEffect.HoverEffect;
const PointerType_export = PointerType.PointerType;
const State_export = State.State;

export const LegacyBaseButton = LegacyRawButton.LegacyBaseButton;
export const LegacyBorderlessButton = LegacyRawButton.LegacyBorderlessButton;
export { LegacyRawButton_export as LegacyRawButton };
export const LegacyRectButton = LegacyRawButton.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyRefreshControl.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyRefreshControl.LegacyFlatList;
export { LegacyRefreshControl_export as LegacyRefreshControl };
export const LegacyScrollView = LegacyRefreshControl.LegacyScrollView;
export const LegacySwitch = LegacyRefreshControl.LegacySwitch;
export const LegacyTextInput = LegacyRefreshControl.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6258;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6271.TouchableHighlight;
export const TouchableNativeFeedback = _mod6271.TouchableNativeFeedback;
export const TouchableOpacity = _mod6271.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6271.TouchableWithoutFeedback;
export { Directions_export as Directions };
export const legacy_createNativeWrapper = createNativeWrapperDefault;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = forceTouchGestureHandlerProps.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export { HoverEffect_export as HoverEffect };
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = panGestureHandlerProps.PanGestureHandler;
export const PinchGestureHandler = createHandler.PinchGestureHandler;
export const RotationGestureHandler = createHandler2.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export { PointerType_export as PointerType };
export { State_export as State };