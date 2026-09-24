// === Module 6985: LegacyBaseButton ===

// Module 6985 (LegacyBaseButton)
import _mod6991 from "module_6991" /* 6991 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 7010 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 7011 */;
import managePanProps from "managePanProps" /* 7021 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 7022 */;
import _mod7023 from "module_7023" /* 7023 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 7025 */;
import _mod7026 from "module_7026" /* 7026 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 7027 */;
import _mod7098 from "module_7098" /* 7098 */;
import _modDef7099 from "module_7099" /* 7099 */;
import LegacyScrollView from "LegacyScrollView" /* 7100 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7101 */;
import _modDef7103 from "module_7103" /* 7103 */;
import GestureObjects from "GestureObjects" /* 7105 */;
import LegacyText from "LegacyText" /* 7115 */;
import TouchableHighlight from "TouchableHighlight" /* 7116 */;
import Directions from "Directions" /* 7122 */;
import pinchHandlerName from "pinchHandlerName" /* 7123 */;
import rotationHandlerName from "rotationHandlerName" /* 7124 */;
import PointerType from "PointerType" /* 7125 */;
import module_6986 from "module_6986" /* 6986 */;
import initialize_mod from "module_6987" /* 6987 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7098.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7098.LegacyBorderlessButton;
export const LegacyRawButton = _mod7098.LegacyRawButton;
export const LegacyRectButton = _mod7098.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7103;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7099;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod7023.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod7026.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6991.State;