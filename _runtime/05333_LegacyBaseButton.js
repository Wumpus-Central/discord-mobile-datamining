// === Module 5333: LegacyBaseButton ===

// Module 5333 (LegacyBaseButton)
import _mod5339 from "module_5339" /* 5339 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5358 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5359 */;
import managePanProps from "managePanProps" /* 5369 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5370 */;
import _mod5371 from "module_5371" /* 5371 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5373 */;
import _mod5374 from "module_5374" /* 5374 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5375 */;
import _mod5446 from "module_5446" /* 5446 */;
import _modDef5447 from "module_5447" /* 5447 */;
import LegacyScrollView from "LegacyScrollView" /* 5448 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5449 */;
import _modDef5451 from "module_5451" /* 5451 */;
import GestureObjects from "GestureObjects" /* 5453 */;
import LegacyText from "LegacyText" /* 5463 */;
import TouchableHighlight from "TouchableHighlight" /* 5464 */;
import Directions from "Directions" /* 5470 */;
import pinchHandlerName from "pinchHandlerName" /* 5471 */;
import rotationHandlerName from "rotationHandlerName" /* 5472 */;
import PointerType from "PointerType" /* 5473 */;
import module_5334 from "module_5334" /* 5334 */;
import initialize_mod from "module_5335" /* 5335 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod5446.LegacyBaseButton;
export const LegacyBorderlessButton = _mod5446.LegacyBorderlessButton;
export const LegacyRawButton = _mod5446.LegacyRawButton;
export const LegacyRectButton = _mod5446.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5451;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef5447;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod5371.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod5374.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod5339.State;