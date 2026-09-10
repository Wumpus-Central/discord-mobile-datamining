// _runtime/metro/08383__.js
import _mod8381 from "08381__.js";
import _mod8386 from "08386__.js";
import _mod8390 from "08390__.js";
import flattenStyle from "08384__.js";
import emptyFunction from "04434__.js";

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
const module_8386 = flattenStyle(_mod8386);
obj.accessible = emptyFunction.bool;
obj.accessibilityLabel = emptyFunction.node;
obj.accessibilityHint = emptyFunction.string;
obj.accessibilityActions = emptyFunction.arrayOf(emptyFunction.string);
obj.accessibilityIgnoresInvertColors = emptyFunction.bool;
obj.accessibilityRole = emptyFunction.oneOf(_mod8390.DeprecatedAccessibilityRoles);
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
obj.hitSlop = _mod8381;
obj.onLayout = emptyFunction.func;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_8386;
obj.removeClippedSubviews = emptyFunction.bool;
obj.renderToHardwareTextureAndroid = emptyFunction.bool;
obj.shouldRasterizeIOS = emptyFunction.bool;
obj.collapsable = emptyFunction.bool;
obj.needsOffscreenAlphaCompositing = emptyFunction.bool;

export default obj;
