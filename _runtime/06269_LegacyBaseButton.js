// _runtime/06269_LegacyBaseButton.js
import _mod6275 from "metro/06275__.js";
import baseGestureHandlerProps from "06294_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06295_tapGestureHandlerProps.js";
import managePanProps from "06305_managePanProps.js";
import longPressGestureHandlerProps from "06306_longPressGestureHandlerProps.js";
import _mod6307 from "metro/06307__.js";
import flingGestureHandlerProps from "06309_flingGestureHandlerProps.js";
import _mod6310 from "metro/06310__.js";
import nativeViewGestureHandlerProps from "06311_nativeViewGestureHandlerProps.js";
import _mod6382 from "metro/06382__.js";
import _modDef6383 from "metro/06383__.js";
import LegacyScrollView from "06384_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06385_GestureHandlerRootView.js";
import _modDef6387 from "metro/06387__.js";
import GestureObjects from "06389_GestureObjects.js";
import LegacyText from "06399_LegacyText.js";
import TouchableHighlight from "06400_TouchableHighlight.js";
import Directions from "06406_Directions.js";
import pinchHandlerName from "06407_pinchHandlerName.js";
import rotationHandlerName from "06408_rotationHandlerName.js";
import PointerType from "06409_PointerType.js";
import 06270__ from "metro/06270__.js";
import initialize_mod from "metro/06271__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6382.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6382.LegacyBorderlessButton;
export const LegacyRawButton = _mod6382.LegacyRawButton;
export const LegacyRectButton = _mod6382.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6387;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6383;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6307.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6310.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6275.State;