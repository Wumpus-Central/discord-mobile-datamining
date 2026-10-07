// _runtime/06147_LegacyBaseButton.js
import _mod6153 from "metro/06153__.js";
import baseGestureHandlerProps from "06172_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06173_tapGestureHandlerProps.js";
import managePanProps from "06183_managePanProps.js";
import longPressGestureHandlerProps from "06184_longPressGestureHandlerProps.js";
import _mod6185 from "metro/06185__.js";
import flingGestureHandlerProps from "06187_flingGestureHandlerProps.js";
import _mod6188 from "metro/06188__.js";
import nativeViewGestureHandlerProps from "06189_nativeViewGestureHandlerProps.js";
import _mod6260 from "metro/06260__.js";
import _modDef6261 from "metro/06261__.js";
import LegacyScrollView from "06262_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06263_GestureHandlerRootView.js";
import _modDef6265 from "metro/06265__.js";
import GestureObjects from "06267_GestureObjects.js";
import LegacyText from "06277_LegacyText.js";
import TouchableHighlight from "06278_TouchableHighlight.js";
import Directions from "06284_Directions.js";
import pinchHandlerName from "06285_pinchHandlerName.js";
import rotationHandlerName from "06286_rotationHandlerName.js";
import PointerType from "06287_PointerType.js";
import 06148__ from "metro/06148__.js";
import initialize_mod from "metro/06149__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6260.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6260.LegacyBorderlessButton;
export const LegacyRawButton = _mod6260.LegacyRawButton;
export const LegacyRectButton = _mod6260.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6265;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6261;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6185.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6188.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6153.State;