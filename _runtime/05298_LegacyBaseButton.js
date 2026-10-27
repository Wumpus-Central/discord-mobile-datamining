// === Module 5298: LegacyBaseButton ===

// Module 5298 (LegacyBaseButton)
import _mod5304 from "module_5304" /* 5304 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5323 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5324 */;
import managePanProps from "managePanProps" /* 5334 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5335 */;
import _mod5336 from "module_5336" /* 5336 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5338 */;
import _mod5339 from "module_5339" /* 5339 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5340 */;
import _mod5411 from "module_5411" /* 5411 */;
import _modDef5412 from "module_5412" /* 5412 */;
import LegacyScrollView from "LegacyScrollView" /* 5413 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5414 */;
import _modDef5416 from "module_5416" /* 5416 */;
import GestureObjects from "GestureObjects" /* 5418 */;
import LegacyText from "LegacyText" /* 5428 */;
import TouchableHighlight from "TouchableHighlight" /* 5429 */;
import Directions from "Directions" /* 5435 */;
import pinchHandlerName from "pinchHandlerName" /* 5436 */;
import rotationHandlerName from "rotationHandlerName" /* 5437 */;
import PointerType from "PointerType" /* 5438 */;
import module_5299 from "module_5299" /* 5299 */;
import initialize_mod from "module_5300" /* 5300 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5411.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5411.LegacyBorderlessButton;
export const LegacyRawButton = _mod5411.LegacyRawButton;
export const LegacyRectButton = _mod5411.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5416;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5412;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5336.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5339.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5304.State;