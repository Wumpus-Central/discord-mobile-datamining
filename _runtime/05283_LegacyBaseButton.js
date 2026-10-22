// _runtime/05283_LegacyBaseButton.js
import _mod5289 from "metro/05289__.js";
import baseGestureHandlerProps from "05308_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05309_tapGestureHandlerProps.js";
import managePanProps from "05319_managePanProps.js";
import longPressGestureHandlerProps from "05320_longPressGestureHandlerProps.js";
import _mod5321 from "metro/05321__.js";
import flingGestureHandlerProps from "05323_flingGestureHandlerProps.js";
import _mod5324 from "metro/05324__.js";
import nativeViewGestureHandlerProps from "05325_nativeViewGestureHandlerProps.js";
import _mod5396 from "metro/05396__.js";
import _modDef5397 from "metro/05397__.js";
import LegacyScrollView from "05398_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05399_GestureHandlerRootView.js";
import _modDef5401 from "metro/05401__.js";
import GestureObjects from "05403_GestureObjects.js";
import LegacyText from "05413_LegacyText.js";
import TouchableHighlight from "05414_TouchableHighlight.js";
import Directions from "05420_Directions.js";
import pinchHandlerName from "05421_pinchHandlerName.js";
import rotationHandlerName from "05422_rotationHandlerName.js";
import PointerType from "05423_PointerType.js";
import 05284__ from "metro/05284__.js";
import initialize_mod from "metro/05285__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5396.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5396.LegacyBorderlessButton;
export const LegacyRawButton = _mod5396.LegacyRawButton;
export const LegacyRectButton = _mod5396.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5401;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5397;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5321.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5324.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5289.State;