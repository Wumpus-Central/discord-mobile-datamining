// _runtime/metro/09174__.js
import _mod9172 from "09172__.js";
import _mod9177 from "09177__.js";
import _mod9181 from "09181__.js";
import flattenStyle from "09175__.js";
import emptyFunction_mod from "04864__.js";

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
const module_9177 = flattenStyle(_mod9177);
obj.accessible = emptyFunction.bool;
obj.accessibilityLabel = emptyFunction.node;
obj.accessibilityHint = emptyFunction.string;
let emptyFunction = emptyFunction_mod;
obj.accessibilityActions = emptyFunction.arrayOf(emptyFunction.string);
obj.accessibilityIgnoresInvertColors = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.accessibilityRole = emptyFunction.oneOf(_mod9181.DeprecatedAccessibilityRoles);
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
obj.hitSlop = _mod9172;
obj.onLayout = emptyFunction.func;
let emptyFunction = emptyFunction_mod;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_9177;
obj.removeClippedSubviews = emptyFunction.bool;
obj.renderToHardwareTextureAndroid = emptyFunction.bool;
obj.shouldRasterizeIOS = emptyFunction.bool;
obj.collapsable = emptyFunction.bool;
obj.needsOffscreenAlphaCompositing = emptyFunction.bool;

export default obj;
