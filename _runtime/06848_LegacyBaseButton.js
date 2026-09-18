// === Module 6848: LegacyBaseButton ===

// Module 6848 (LegacyBaseButton)
import _mod6854 from "module_6854" /* 6854 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6873 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6874 */;
import managePanProps from "managePanProps" /* 6884 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6885 */;
import _mod6886 from "module_6886" /* 6886 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6888 */;
import _mod6889 from "module_6889" /* 6889 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6890 */;
import _mod6961 from "module_6961" /* 6961 */;
import _modDef6962 from "module_6962" /* 6962 */;
import LegacyScrollView from "LegacyScrollView" /* 6963 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6964 */;
import _modDef6966 from "module_6966" /* 6966 */;
import GestureObjects from "GestureObjects" /* 6968 */;
import LegacyText from "LegacyText" /* 6978 */;
import TouchableHighlight from "TouchableHighlight" /* 6979 */;
import Directions from "Directions" /* 6985 */;
import pinchHandlerName from "pinchHandlerName" /* 6986 */;
import rotationHandlerName from "rotationHandlerName" /* 6987 */;
import PointerType from "PointerType" /* 6988 */;
import module_6849 from "module_6849" /* 6849 */;
import initialize_mod from "module_6850" /* 6850 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6961.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6961.LegacyBorderlessButton;
export const LegacyRawButton = _mod6961.LegacyRawButton;
export const LegacyRectButton = _mod6961.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6966;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6962;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6886.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6889.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6854.State;