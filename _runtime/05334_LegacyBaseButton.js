// _runtime/05334_LegacyBaseButton.js
import _mod5340 from "metro/05340__.js";
import baseGestureHandlerProps from "05359_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05360_tapGestureHandlerProps.js";
import managePanProps from "05370_managePanProps.js";
import longPressGestureHandlerProps from "05371_longPressGestureHandlerProps.js";
import _mod5372 from "metro/05372__.js";
import flingGestureHandlerProps from "05374_flingGestureHandlerProps.js";
import _mod5375 from "metro/05375__.js";
import nativeViewGestureHandlerProps from "05376_nativeViewGestureHandlerProps.js";
import _mod5447 from "metro/05447__.js";
import _modDef5448 from "metro/05448__.js";
import LegacyScrollView from "05449_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05450_GestureHandlerRootView.js";
import _modDef5452 from "metro/05452__.js";
import GestureObjects from "05454_GestureObjects.js";
import LegacyText from "05464_LegacyText.js";
import TouchableHighlight from "05465_TouchableHighlight.js";
import Directions from "05471_Directions.js";
import pinchHandlerName from "05472_pinchHandlerName.js";
import rotationHandlerName from "05473_rotationHandlerName.js";
import PointerType from "05474_PointerType.js";
import 05335__ from "metro/05335__.js";
import initialize_mod from "metro/05336__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5447.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5447.LegacyBorderlessButton;
export const LegacyRawButton = _mod5447.LegacyRawButton;
export const LegacyRectButton = _mod5447.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5452;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5448;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5372.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5375.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5340.State;