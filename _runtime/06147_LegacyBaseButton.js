// === Module 6147: LegacyBaseButton ===

// Module 6147 (LegacyBaseButton)
import State from "State" /* 6153 */;
import BaseButton from "BaseButton" /* 6156 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6172 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6173 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6183 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6184 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6185 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6187 */;
import HoverEffect from "HoverEffect" /* 6188 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6189 */;
import LegacyRawButton from "LegacyRawButton" /* 6260 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6261 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6262 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6263 */;
import _modDef6265 from "module_6265" /* 6265 */;
import GestureObjects from "GestureObjects" /* 6267 */;
import LegacyText from "LegacyText" /* 6277 */;
import _mod6278 from "module_6278" /* 6278 */;
import Directions from "Directions" /* 6284 */;
import createHandler from "createHandler" /* 6285 */;
import createHandler2 from "createHandler" /* 6286 */;
import PointerType from "PointerType" /* 6287 */;
import module_6148 from "module_6148" /* 6148 */;
import initialize_mod from "initialize" /* 6149 */;

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
export const LegacyPressable = _modDef6265;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6278.TouchableHighlight;
export const TouchableNativeFeedback = _mod6278.TouchableNativeFeedback;
export const TouchableOpacity = _mod6278.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6278.TouchableWithoutFeedback;
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