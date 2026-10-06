// _runtime/metro/08004__.js
import _mod8002 from "08002__.js";
import _mod8007 from "08007__.js";
import _mod8011 from "08011__.js";
import DeprecatedStyleSheetPropType from "../08005_DeprecatedStyleSheetPropType.js";
import "module_4713";
import module_4713_mod from "04713__.js";

let module_4713;
let module_8007;
const obj = {
  accessible: module_4713.bool,
  accessibilityLabel: module_4713.node,
  accessibilityHint: module_4713.string,
  accessibilityActions: module_4713.arrayOf(module_4713.string),
  accessibilityIgnoresInvertColors: module_4713.bool,
  accessibilityRole: module_4713.oneOf(_mod8011.DeprecatedAccessibilityRoles),
  accessibilityState: module_4713.object,
  accessibilityValue: module_4713.object,
  accessibilityLiveRegion: module_4713.oneOf(["none", "polite", "assertive"]),
  importantForAccessibility: module_4713.oneOf(["auto", "yes", "no", "no-hide-descendants"]),
  accessibilityViewIsModal: module_4713.bool,
  accessibilityElementsHidden: module_4713.bool,
  onAccessibilityAction: module_4713.func,
  onAccessibilityTap: module_4713.func,
  onMagicTap: module_4713.func,
  testID: module_4713.string,
  nativeID: module_4713.string,
  onResponderGrant: module_4713.func,
  onResponderMove: module_4713.func,
  onResponderReject: module_4713.func,
  onResponderRelease: module_4713.func,
  onResponderTerminate: module_4713.func,
  onResponderTerminationRequest: module_4713.func,
  onStartShouldSetResponder: module_4713.func,
  onStartShouldSetResponderCapture: module_4713.func,
  onMoveShouldSetResponder: module_4713.func,
  onMoveShouldSetResponderCapture: module_4713.func,
  hitSlop: _mod8002,
  onLayout: module_4713.func,
  pointerEvents: module_4713.oneOf(["box-none", "none", "box-only", "auto"]),
  style: module_8007,
  removeClippedSubviews: module_4713.bool,
  renderToHardwareTextureAndroid: module_4713.bool,
  shouldRasterizeIOS: module_4713.bool,
  collapsable: module_4713.bool,
  needsOffscreenAlphaCompositing: module_4713.bool,
};
module_8007 = DeprecatedStyleSheetPropType(_mod8007);
module_4713 = module_4713_mod;

export default obj;
