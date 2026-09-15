// === Module 6760: LegacyBaseButton ===

// Module 6760 (LegacyBaseButton)
import _mod6766 from "module_6766" /* 6766 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6785 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6786 */;
import managePanProps from "managePanProps" /* 6796 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6797 */;
import _mod6798 from "module_6798" /* 6798 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6800 */;
import _mod6801 from "module_6801" /* 6801 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6802 */;
import _mod6873 from "module_6873" /* 6873 */;
import _modDef6874 from "module_6874" /* 6874 */;
import LegacyScrollView from "LegacyScrollView" /* 6875 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6876 */;
import _modDef6878 from "module_6878" /* 6878 */;
import GestureObjects from "GestureObjects" /* 6880 */;
import LegacyText from "LegacyText" /* 6890 */;
import TouchableHighlight from "TouchableHighlight" /* 6891 */;
import Directions from "Directions" /* 6897 */;
import pinchHandlerName from "pinchHandlerName" /* 6898 */;
import rotationHandlerName from "rotationHandlerName" /* 6899 */;
import PointerType from "PointerType" /* 6900 */;
import module_6761 from "module_6761" /* 6761 */;
import initialize_mod from "module_6762" /* 6762 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6873.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6873.LegacyBorderlessButton;
export const LegacyRawButton = _mod6873.LegacyRawButton;
export const LegacyRectButton = _mod6873.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6878;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6874;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6798.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6801.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6766.State;