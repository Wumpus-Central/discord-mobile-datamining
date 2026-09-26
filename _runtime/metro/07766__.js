// _runtime/metro/07766__.js
import _mod7764 from "07764__.js";
import _mod7769 from "07769__.js";
import _mod7773 from "07773__.js";
import flattenStyle from "07767__.js";
import emptyFunction_mod from "04663__.js";

const obj = {
  accessible: null,
  accessibilityLabel: null,
  accessibilityHint: null,
  accessibilityActions: null,
  accessibilityIgnoresInvertColors: null,
  accessibilityRole: null,
  accessibilityState: null,
  accessibilityValue: null,
  accessibilityLiveRegion: null,
  importantForAccessibility: null,
  accessibilityViewIsModal: null,
  accessibilityElementsHidden: null,
  onAccessibilityAction: null,
  onAccessibilityTap: null,
  onMagicTap: null,
  testID: null,
  nativeID: null,
  onResponderGrant: null,
  onResponderMove: null,
  onResponderReject: null,
  onResponderRelease: null,
  onResponderTerminate: null,
  onResponderTerminationRequest: null,
  onStartShouldSetResponder: null,
  onStartShouldSetResponderCapture: null,
  onMoveShouldSetResponder: null,
  onMoveShouldSetResponderCapture: null,
  hitSlop: null,
  onLayout: null,
  pointerEvents: null,
  style: null,
  removeClippedSubviews: null,
  renderToHardwareTextureAndroid: null,
  shouldRasterizeIOS: null,
  collapsable: null,
  needsOffscreenAlphaCompositing: null,
};
const module_7769 = flattenStyle(_mod7769);
obj.accessible = emptyFunction.bool;
obj.accessibilityLabel = emptyFunction.node;
obj.accessibilityHint = emptyFunction.string;
let emptyFunction = emptyFunction_mod;
obj.accessibilityActions = emptyFunction.arrayOf(emptyFunction.string);
obj.accessibilityIgnoresInvertColors = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.accessibilityRole = emptyFunction.oneOf(_mod7773.DeprecatedAccessibilityRoles);
obj.accessibilityState = emptyFunction.object;
obj.accessibilityValue = emptyFunction.object;
let emptyFunction = emptyFunction_mod;
obj.accessibilityLiveRegion = emptyFunction.oneOf(["none", "polite", "assertive"]);
let emptyFunction = emptyFunction_mod;
obj.importantForAccessibility = emptyFunction.oneOf(["auto", "yes", "no", "no-hide-descendants"]);
obj.accessibilityViewIsModal = emptyFunction.bool;
obj.accessibilityElementsHidden = emptyFunction.bool;
obj.onAccessibilityAction = emptyFunction.func;
obj.onAccessibilityTap = emptyFunction.func;
obj.onMagicTap = emptyFunction.func;
obj.testID = emptyFunction.string;
obj.nativeID = emptyFunction.string;
obj.onResponderGrant = emptyFunction.func;
obj.onResponderMove = emptyFunction.func;
obj.onResponderReject = emptyFunction.func;
obj.onResponderRelease = emptyFunction.func;
obj.onResponderTerminate = emptyFunction.func;
obj.onResponderTerminationRequest = emptyFunction.func;
obj.onStartShouldSetResponder = emptyFunction.func;
obj.onStartShouldSetResponderCapture = emptyFunction.func;
obj.onMoveShouldSetResponder = emptyFunction.func;
obj.onMoveShouldSetResponderCapture = emptyFunction.func;
obj.hitSlop = _mod7764;
obj.onLayout = emptyFunction.func;
let emptyFunction = emptyFunction_mod;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_7769;
obj.removeClippedSubviews = emptyFunction.bool;
obj.renderToHardwareTextureAndroid = emptyFunction.bool;
obj.shouldRasterizeIOS = emptyFunction.bool;
obj.collapsable = emptyFunction.bool;
obj.needsOffscreenAlphaCompositing = emptyFunction.bool;

export default obj;
