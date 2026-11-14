// _runtime/05598_LegacyBaseButton.js
import _mod5603 from "metro/05603__.js";
import baseGestureHandlerProps from "05623_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05624_tapGestureHandlerProps.js";
import managePanProps from "05635_managePanProps.js";
import longPressGestureHandlerProps from "05636_longPressGestureHandlerProps.js";
import _mod5637 from "metro/05637__.js";
import flingGestureHandlerProps from "05639_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05641_nativeViewGestureHandlerProps.js";
import _mod5721 from "metro/05721__.js";
import _modDef5722 from "metro/05722__.js";
import LegacyScrollView from "05723_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05724_GestureHandlerRootView.js";
import _modDef5726 from "metro/05726__.js";
import GestureObjects from "05728_GestureObjects.js";
import LegacyText from "05738_LegacyText.js";
import TouchableHighlight from "05739_TouchableHighlight.js";
import Directions from "05745_Directions.js";
import pinchHandlerName from "05746_pinchHandlerName.js";
import rotationHandlerName from "05747_rotationHandlerName.js";
import HoverEffect from "05748_HoverEffect.js";
import PointerType from "05749_PointerType.js";
import initialize_mod from "metro/05599__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5721.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5721.LegacyBorderlessButton;
export const LegacyRawButton = _mod5721.LegacyRawButton;
export const LegacyRectButton = _mod5721.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5726;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5722;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5637.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const HoverEffect = HoverEffect.HoverEffect;
export const PointerType = PointerType.PointerType;
export const State = _mod5603.State;
