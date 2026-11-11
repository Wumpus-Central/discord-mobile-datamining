// _runtime/05535_LegacyBaseButton.js
import _mod5540 from "metro/05540__.js";
import baseGestureHandlerProps from "05560_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "05561_tapGestureHandlerProps.js";
import managePanProps from "05572_managePanProps.js";
import longPressGestureHandlerProps from "05573_longPressGestureHandlerProps.js";
import _mod5574 from "metro/05574__.js";
import flingGestureHandlerProps from "05576_flingGestureHandlerProps.js";
import nativeViewGestureHandlerProps from "05578_nativeViewGestureHandlerProps.js";
import _mod5658 from "metro/05658__.js";
import _modDef5659 from "metro/05659__.js";
import LegacyScrollView from "05660_LegacyScrollView.js";
import GestureHandlerRootViewDefault from "05661_GestureHandlerRootView.js";
import _modDef5663 from "metro/05663__.js";
import GestureObjects from "05665_GestureObjects.js";
import LegacyText from "05675_LegacyText.js";
import TouchableHighlight from "05676_TouchableHighlight.js";
import Directions from "05682_Directions.js";
import pinchHandlerName from "05683_pinchHandlerName.js";
import rotationHandlerName from "05684_rotationHandlerName.js";
import HoverEffect from "05685_HoverEffect.js";
import PointerType from "05686_PointerType.js";
import initialize_mod from "metro/05536__.js";

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in require("BaseButton")) {
  arg5[key10017] = require("BaseButton")[key10017];
  continue;
}

export const LegacyBaseButton = _mod5658.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5658.LegacyBorderlessButton;
export const LegacyRawButton = _mod5658.LegacyRawButton;
export const LegacyRectButton = _mod5658.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5663;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5659;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5574.ForceTouchGestureHandler;
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
export const State = _mod5540.State;
