// _runtime/05333_LegacyBaseButton.js
import _mod5339 from "metro/05339__.js";
import baseGestureHandlerProps from "05358_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05359_tapGestureHandlerProps.js";
import managePanProps from "05369_managePanProps.js";
import longPressGestureHandlerProps from "05370_longPressGestureHandlerProps.js";
import _mod5371 from "metro/05371__.js";
import flingGestureHandlerProps from "05373_flingGestureHandlerProps.js";
import _mod5374 from "metro/05374__.js";
import nativeViewGestureHandlerProps from "05375_nativeViewGestureHandlerProps.js";
import _mod5446 from "metro/05446__.js";
import _modDef5447 from "metro/05447__.js";
import LegacyScrollView from "05448_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05449_GestureHandlerRootView.js";
import _modDef5451 from "metro/05451__.js";
import GestureObjects from "05453_GestureObjects.js";
import LegacyText from "05463_LegacyText.js";
import TouchableHighlight from "05464_TouchableHighlight.js";
import Directions from "05470_Directions.js";
import pinchHandlerName from "05471_pinchHandlerName.js";
import rotationHandlerName from "05472_rotationHandlerName.js";
import PointerType from "05473_PointerType.js";
import 05334__ from "metro/05334__.js";
import initialize_mod from "metro/05335__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5446.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5446.LegacyBorderlessButton;
export const LegacyRawButton = _mod5446.LegacyRawButton;
export const LegacyRectButton = _mod5446.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5451;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5447;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5371.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5374.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5339.State;