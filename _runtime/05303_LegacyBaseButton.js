// _runtime/05303_LegacyBaseButton.js
import _mod5309 from "metro/05309__.js";
import baseGestureHandlerProps from "05328_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05329_tapGestureHandlerProps.js";
import managePanProps from "05339_managePanProps.js";
import longPressGestureHandlerProps from "05340_longPressGestureHandlerProps.js";
import _mod5341 from "metro/05341__.js";
import flingGestureHandlerProps from "05343_flingGestureHandlerProps.js";
import _mod5344 from "metro/05344__.js";
import nativeViewGestureHandlerProps from "05345_nativeViewGestureHandlerProps.js";
import _mod5416 from "metro/05416__.js";
import _modDef5417 from "metro/05417__.js";
import LegacyScrollView from "05418_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05419_GestureHandlerRootView.js";
import _modDef5421 from "metro/05421__.js";
import GestureObjects from "05423_GestureObjects.js";
import LegacyText from "05433_LegacyText.js";
import TouchableHighlight from "05434_TouchableHighlight.js";
import Directions from "05440_Directions.js";
import pinchHandlerName from "05441_pinchHandlerName.js";
import rotationHandlerName from "05442_rotationHandlerName.js";
import PointerType from "05443_PointerType.js";
import 05304__ from "metro/05304__.js";
import initialize_mod from "metro/05305__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5416.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5416.LegacyBorderlessButton;
export const LegacyRawButton = _mod5416.LegacyRawButton;
export const LegacyRectButton = _mod5416.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5421;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5417;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5341.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5344.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5309.State;