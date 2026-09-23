// _runtime/06983_LegacyBaseButton.js
import _mod6989 from "metro/06989__.js";
import baseGestureHandlerProps from "07008_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "07009_tapGestureHandlerProps.js";
import managePanProps from "07019_managePanProps.js";
import longPressGestureHandlerProps from "07020_longPressGestureHandlerProps.js";
import _mod7021 from "metro/07021__.js";
import flingGestureHandlerProps from "07023_flingGestureHandlerProps.js";
import _mod7024 from "metro/07024__.js";
import nativeViewGestureHandlerProps from "07025_nativeViewGestureHandlerProps.js";
import _mod7096 from "metro/07096__.js";
import _modDef7097 from "metro/07097__.js";
import LegacyScrollView from "07098_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "07099_GestureHandlerRootView.js";
import _modDef7101 from "metro/07101__.js";
import GestureObjects from "07103_GestureObjects.js";
import LegacyText from "07113_LegacyText.js";
import TouchableHighlight from "07114_TouchableHighlight.js";
import Directions from "07120_Directions.js";
import pinchHandlerName from "07121_pinchHandlerName.js";
import rotationHandlerName from "07122_rotationHandlerName.js";
import PointerType from "07123_PointerType.js";
import 06984__ from "metro/06984__.js";
import initialize_mod from "metro/06985__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7096.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7096.LegacyBorderlessButton;
export const LegacyRawButton = _mod7096.LegacyRawButton;
export const LegacyRectButton = _mod7096.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7101;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7097;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod7021.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod7024.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6989.State;