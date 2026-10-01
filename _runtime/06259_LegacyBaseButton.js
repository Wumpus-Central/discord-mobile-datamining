// _runtime/06259_LegacyBaseButton.js
import _mod6265 from "metro/06265__.js";
import baseGestureHandlerProps from "06284_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06285_tapGestureHandlerProps.js";
import managePanProps from "06295_managePanProps.js";
import longPressGestureHandlerProps from "06296_longPressGestureHandlerProps.js";
import _mod6297 from "metro/06297__.js";
import flingGestureHandlerProps from "06299_flingGestureHandlerProps.js";
import _mod6300 from "metro/06300__.js";
import nativeViewGestureHandlerProps from "06301_nativeViewGestureHandlerProps.js";
import _mod6372 from "metro/06372__.js";
import _modDef6373 from "metro/06373__.js";
import LegacyScrollView from "06374_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06375_GestureHandlerRootView.js";
import _modDef6377 from "metro/06377__.js";
import GestureObjects from "06379_GestureObjects.js";
import LegacyText from "06389_LegacyText.js";
import TouchableHighlight from "06390_TouchableHighlight.js";
import Directions from "06396_Directions.js";
import pinchHandlerName from "06397_pinchHandlerName.js";
import rotationHandlerName from "06398_rotationHandlerName.js";
import PointerType from "06399_PointerType.js";
import 06260__ from "metro/06260__.js";
import initialize_mod from "metro/06261__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6372.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6372.LegacyBorderlessButton;
export const LegacyRawButton = _mod6372.LegacyRawButton;
export const LegacyRectButton = _mod6372.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6377;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6373;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6297.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6300.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6265.State;