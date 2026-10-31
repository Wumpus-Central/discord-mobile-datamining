// === Module 5303: LegacyBaseButton ===

// Module 5303 (LegacyBaseButton)
import _mod5309 from "module_5309" /* 5309 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5329 */;
import managePanProps from "managePanProps" /* 5339 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5340 */;
import _mod5341 from "module_5341" /* 5341 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5343 */;
import _mod5344 from "module_5344" /* 5344 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5345 */;
import _mod5416 from "module_5416" /* 5416 */;
import _modDef5417 from "module_5417" /* 5417 */;
import LegacyScrollView from "LegacyScrollView" /* 5418 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5419 */;
import _modDef5421 from "module_5421" /* 5421 */;
import GestureObjects from "GestureObjects" /* 5423 */;
import LegacyText from "LegacyText" /* 5433 */;
import TouchableHighlight from "TouchableHighlight" /* 5434 */;
import Directions from "Directions" /* 5440 */;
import pinchHandlerName from "pinchHandlerName" /* 5441 */;
import rotationHandlerName from "rotationHandlerName" /* 5442 */;
import PointerType from "PointerType" /* 5443 */;
import module_5304 from "module_5304" /* 5304 */;
import initialize_mod from "module_5305" /* 5305 */;

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