// _runtime/06985_LegacyBaseButton.js
import _mod6991 from "metro/06991__.js";
import baseGestureHandlerProps from "07010_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "07011_tapGestureHandlerProps.js";
import managePanProps from "07021_managePanProps.js";
import longPressGestureHandlerProps from "07022_longPressGestureHandlerProps.js";
import _mod7023 from "metro/07023__.js";
import flingGestureHandlerProps from "07025_flingGestureHandlerProps.js";
import _mod7026 from "metro/07026__.js";
import nativeViewGestureHandlerProps from "07027_nativeViewGestureHandlerProps.js";
import _mod7098 from "metro/07098__.js";
import _modDef7099 from "metro/07099__.js";
import LegacyScrollView from "07100_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "07101_GestureHandlerRootView.js";
import _modDef7103 from "metro/07103__.js";
import GestureObjects from "07105_GestureObjects.js";
import LegacyText from "07115_LegacyText.js";
import TouchableHighlight from "07116_TouchableHighlight.js";
import Directions from "07122_Directions.js";
import pinchHandlerName from "07123_pinchHandlerName.js";
import rotationHandlerName from "07124_rotationHandlerName.js";
import PointerType from "07125_PointerType.js";
import 06986__ from "metro/06986__.js";
import initialize_mod from "metro/06987__.js";

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