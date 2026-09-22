// === Module 6899: LegacyBaseButton ===

// Module 6899 (LegacyBaseButton)
import _mod6905 from "module_6905" /* 6905 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6924 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6925 */;
import managePanProps from "managePanProps" /* 6935 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6936 */;
import _mod6937 from "module_6937" /* 6937 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6939 */;
import _mod6940 from "module_6940" /* 6940 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6941 */;
import _mod7012 from "module_7012" /* 7012 */;
import _modDef7013 from "module_7013" /* 7013 */;
import LegacyScrollView from "LegacyScrollView" /* 7014 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7015 */;
import _modDef7017 from "module_7017" /* 7017 */;
import GestureObjects from "GestureObjects" /* 7019 */;
import LegacyText from "LegacyText" /* 7029 */;
import TouchableHighlight from "TouchableHighlight" /* 7030 */;
import Directions from "Directions" /* 7036 */;
import pinchHandlerName from "pinchHandlerName" /* 7037 */;
import rotationHandlerName from "rotationHandlerName" /* 7038 */;
import PointerType from "PointerType" /* 7039 */;
import module_6900 from "module_6900" /* 6900 */;
import initialize_mod from "module_6901" /* 6901 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7012.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7012.LegacyBorderlessButton;
export const LegacyRawButton = _mod7012.LegacyRawButton;
export const LegacyRectButton = _mod7012.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7017;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7013;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6937.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6940.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6905.State;