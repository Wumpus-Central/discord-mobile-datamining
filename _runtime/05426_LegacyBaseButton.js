// _runtime/05426_LegacyBaseButton.js
import _mod5432 from "metro/05432__.js";
import baseGestureHandlerProps from "05451_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05452_tapGestureHandlerProps.js";
import managePanProps from "05462_managePanProps.js";
import longPressGestureHandlerProps from "05463_longPressGestureHandlerProps.js";
import _mod5464 from "metro/05464__.js";
import flingGestureHandlerProps from "05466_flingGestureHandlerProps.js";
import _mod5467 from "metro/05467__.js";
import nativeViewGestureHandlerProps from "05468_nativeViewGestureHandlerProps.js";
import _mod5539 from "metro/05539__.js";
import _modDef5540 from "metro/05540__.js";
import LegacyScrollView from "05541_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05542_GestureHandlerRootView.js";
import _modDef5544 from "metro/05544__.js";
import GestureObjects from "05546_GestureObjects.js";
import LegacyText from "05556_LegacyText.js";
import TouchableHighlight from "05557_TouchableHighlight.js";
import Directions from "05563_Directions.js";
import pinchHandlerName from "05564_pinchHandlerName.js";
import rotationHandlerName from "05565_rotationHandlerName.js";
import PointerType from "05566_PointerType.js";
import 05427__ from "metro/05427__.js";
import initialize_mod from "metro/05428__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5539.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5539.LegacyBorderlessButton;
export const LegacyRawButton = _mod5539.LegacyRawButton;
export const LegacyRectButton = _mod5539.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5544;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5540;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5464.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5467.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5432.State;