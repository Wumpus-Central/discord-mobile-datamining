// _runtime/06557_LegacyBaseButton.js
import _mod6563 from "metro/06563__.js";
import baseGestureHandlerProps from "06582_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06583_tapGestureHandlerProps.js";
import managePanProps from "06593_managePanProps.js";
import longPressGestureHandlerProps from "06594_longPressGestureHandlerProps.js";
import _mod6595 from "metro/06595__.js";
import flingGestureHandlerProps from "06597_flingGestureHandlerProps.js";
import _mod6598 from "metro/06598__.js";
import nativeViewGestureHandlerProps from "06599_nativeViewGestureHandlerProps.js";
import _mod6670 from "metro/06670__.js";
import _modDef6671 from "metro/06671__.js";
import LegacyScrollView from "06672_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "06673_GestureHandlerRootView.js";
import _modDef6675 from "metro/06675__.js";
import GestureObjects from "06677_GestureObjects.js";
import LegacyText from "06687_LegacyText.js";
import TouchableHighlight from "06688_TouchableHighlight.js";
import Directions from "06694_Directions.js";
import pinchHandlerName from "06695_pinchHandlerName.js";
import rotationHandlerName from "06696_rotationHandlerName.js";
import PointerType from "06697_PointerType.js";
import 06558__ from "metro/06558__.js";
import initialize_mod from "metro/06559__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6670.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6670.LegacyBorderlessButton;
export const LegacyRawButton = _mod6670.LegacyRawButton;
export const LegacyRectButton = _mod6670.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6675;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6671;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6595.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6598.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6563.State;