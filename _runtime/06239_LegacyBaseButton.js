// _runtime/06239_LegacyBaseButton.js
import _mod6245 from "metro/06245__.js";
import baseGestureHandlerProps from "06264_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06265_tapGestureHandlerProps.js";
import managePanProps from "06275_managePanProps.js";
import longPressGestureHandlerProps from "06276_longPressGestureHandlerProps.js";
import _mod6277 from "metro/06277__.js";
import flingGestureHandlerProps from "06279_flingGestureHandlerProps.js";
import _mod6280 from "metro/06280__.js";
import nativeViewGestureHandlerProps from "06281_nativeViewGestureHandlerProps.js";
import _mod6352 from "metro/06352__.js";
import _modDef6353 from "metro/06353__.js";
import LegacyScrollView from "06354_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06355_GestureHandlerRootView.js";
import _modDef6357 from "metro/06357__.js";
import GestureObjects from "06359_GestureObjects.js";
import LegacyText from "06369_LegacyText.js";
import TouchableHighlight from "06370_TouchableHighlight.js";
import Directions from "06376_Directions.js";
import pinchHandlerName from "06377_pinchHandlerName.js";
import rotationHandlerName from "06378_rotationHandlerName.js";
import PointerType from "06379_PointerType.js";
import 06240__ from "metro/06240__.js";
import initialize_mod from "metro/06241__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6352.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6352.LegacyBorderlessButton;
export const LegacyRawButton = _mod6352.LegacyRawButton;
export const LegacyRectButton = _mod6352.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6357;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6353;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6277.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6280.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6245.State;