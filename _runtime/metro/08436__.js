// _runtime/metro/08436__.js
import _mod8434 from "08434__.js";
import _mod8439 from "08439__.js";
import _mod8443 from "08443__.js";
import flattenStyle from "08437__.js";
import emptyFunction from "04466__.js";

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
const module_8439 = flattenStyle(_mod8439);
obj.accessible = emptyFunction.bool;
obj.accessibilityLabel = emptyFunction.node;
obj.accessibilityHint = emptyFunction.string;
obj.accessibilityActions = emptyFunction.arrayOf(emptyFunction.string);
obj.accessibilityIgnoresInvertColors = emptyFunction.bool;
obj.accessibilityRole = emptyFunction.oneOf(_mod8443.DeprecatedAccessibilityRoles);
obj.accessibilityState = emptyFunction.object;
obj.accessibilityValue = emptyFunction.object;
obj.accessibilityLiveRegion = emptyFunction.oneOf(["none", "polite", "assertive"]);
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
obj.hitSlop = _mod8434;
obj.onLayout = emptyFunction.func;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_8439;
obj.removeClippedSubviews = emptyFunction.bool;
obj.renderToHardwareTextureAndroid = emptyFunction.bool;
obj.shouldRasterizeIOS = emptyFunction.bool;
obj.collapsable = emptyFunction.bool;
obj.needsOffscreenAlphaCompositing = emptyFunction.bool;

export default obj;
