// === Module 8969: ? ===

// Module 8969
import _mod8967 from "module_8967" /* 8967 */;
import _mod8972 from "module_8972" /* 8972 */;
import _mod8976 from "module_8976" /* 8976 */;
import flattenStyle from "module_8970" /* 8970 */;
import emptyFunction_mod from "module_5181" /* 5181 */;

const obj = { accessible: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, accessibilityIgnoresInvertColors: null, accessibilityRole: null, accessibilityState: null, accessibilityValue: null, accessibilityLiveRegion: null, importantForAccessibility: null, accessibilityViewIsModal: null, accessibilityElementsHidden: null, onAccessibilityAction: null, onAccessibilityTap: null, onMagicTap: null, testID: null, nativeID: null, onResponderGrant: null, onResponderMove: null, onResponderReject: null, onResponderRelease: null, onResponderTerminate: null, onResponderTerminationRequest: null, onStartShouldSetResponder: null, onStartShouldSetResponderCapture: null, onMoveShouldSetResponder: null, onMoveShouldSetResponderCapture: null, hitSlop: null, onLayout: null, pointerEvents: null, style: null, removeClippedSubviews: null, renderToHardwareTextureAndroid: null, shouldRasterizeIOS: null, collapsable: null, needsOffscreenAlphaCompositing: null };
const module_8972 = flattenStyle(_mod8972);
obj.accessible = emptyFunction.bool;
obj.accessibilityLabel = emptyFunction.node;
obj.accessibilityHint = emptyFunction.string;
let emptyFunction = emptyFunction_mod;
obj.accessibilityActions = emptyFunction.arrayOf(emptyFunction.string);
obj.accessibilityIgnoresInvertColors = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.accessibilityRole = emptyFunction.oneOf(_mod8976.DeprecatedAccessibilityRoles);
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
obj.hitSlop = _mod8967;
obj.onLayout = emptyFunction.func;
let emptyFunction = emptyFunction_mod;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_8972;
obj.removeClippedSubviews = emptyFunction.bool;
obj.renderToHardwareTextureAndroid = emptyFunction.bool;
obj.shouldRasterizeIOS = emptyFunction.bool;
obj.collapsable = emptyFunction.bool;
obj.needsOffscreenAlphaCompositing = emptyFunction.bool;

export default obj;