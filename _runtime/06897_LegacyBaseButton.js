// === Module 6897: LegacyBaseButton ===

// Module 6897 (LegacyBaseButton)
import _mod6903 from "module_6903" /* 6903 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6922 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6923 */;
import managePanProps from "managePanProps" /* 6933 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6934 */;
import _mod6935 from "module_6935" /* 6935 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6937 */;
import _mod6938 from "module_6938" /* 6938 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6939 */;
import _mod7010 from "module_7010" /* 7010 */;
import _modDef7011 from "module_7011" /* 7011 */;
import LegacyScrollView from "LegacyScrollView" /* 7012 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7013 */;
import _modDef7015 from "module_7015" /* 7015 */;
import GestureObjects from "GestureObjects" /* 7017 */;
import LegacyText from "LegacyText" /* 7027 */;
import TouchableHighlight from "TouchableHighlight" /* 7028 */;
import Directions from "Directions" /* 7034 */;
import pinchHandlerName from "pinchHandlerName" /* 7035 */;
import rotationHandlerName from "rotationHandlerName" /* 7036 */;
import PointerType from "PointerType" /* 7037 */;
import module_6898 from "module_6898" /* 6898 */;
import initialize_mod from "module_6899" /* 6899 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7010.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7010.LegacyBorderlessButton;
export const LegacyRawButton = _mod7010.LegacyRawButton;
export const LegacyRectButton = _mod7010.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7015;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7011;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6935.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6938.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6903.State;