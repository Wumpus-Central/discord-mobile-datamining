// === Module 4569: PlainTextEligibility ===

// Module 4569 (PlainTextEligibility)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const StyleSheet = _mod17.StyleSheet;
const set = new Set(["accessibilityActions", "accessibilityElementsHidden", "accessibilityHint", "accessibilityIgnoresInvertColors", "accessibilityLabel", "accessibilityLabelledBy", "accessibilityLanguage", "accessibilityLargeContentTitle", "accessibilityLiveRegion", "accessibilityRespondsToUserInteraction", "accessibilityRole", "accessibilityShowsLargeContentViewer", "accessibilityState", "accessibilityValue", "accessibilityViewIsModal", "accessible", "allowFontScaling", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-modal", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "id", "importantForAccessibility", "maxFontSizeMultiplier", "nativeID", "onAccessibilityAction", "onAccessibilityEscape", "onAccessibilityTap", "onMagicTap", "role", "screenReaderFocusable", "testID"]);
const set1 = new Set(["fontVariant", "textDecorationColor", "textDecorationStyle", "textShadowColor", "textShadowOffset", "textShadowRadius", "userSelect", "writingDirection"]);
let closure_3 = { eligible: false, reason: "animated" };
let closure_4 = { eligible: false, reason: "experiment-disabled" };
let closure_5 = { eligible: false, reason: "native-text-override" };
let closure_6 = { eligible: false, reason: "nested-text" };
let closure_7 = { eligible: false, reason: "non-string-children" };
let closure_8 = { eligible: false, reason: "non-ios" };
let closure_9 = { eligible: false, reason: "ref" };
const result = size.fileFinishedImporting("design/components/Text/native/PlainTextEligibility.tsx");

export const isPlainTextEligible = function isPlainTextEligible(plainTextEligibility) {
  return !("eligible" in plainTextEligibility);
};
export const getPlainTextEligibility = function getPlainTextEligibility(element) {
  if (element.enabled) {
    if (element.isIOS) {
      if (element.hasTextAncestor) {
        return closure_6;
      } else if (element.hasRef) {
        return closure_9;
      } else if (element.animated) {
        return closure_3;
      } else if (element.experimentalUseNativeText) {
        return closure_5;
      } else if (typeof element.children !== "string") {
        return closure_7;
      } else {
        for (const key10010 in arg0.props) {
          if (null == arg0.props[key10010]) {
            continue;
          } else if (set.has(key10010)) {
            continue;
          } else {
            let obj = { eligible: false, reason: "unsupported-prop", unsupportedName: key10010 };
            return obj;
          }
          continue;
        }
        return (function getPlainTextStyle(style) {
          const flattenResult = StyleSheet.flatten(style);
          delete tmp[tmp2];
          if (null != flattenResult.textTransform) {
            if ("none" !== flattenResult.textTransform) {
              return { eligible: false, reason: "unsupported-style", unsupportedName: "textTransform" };
            }
          }
          delete tmp[tmp2];
          for (const item10016 of closure_1_2) {
            if (null != flattenResult[item10016]) {
              let obj = { eligible: false, reason: "unsupported-style", unsupportedName: item10016 };
              obj.return();
              return obj;
            } else {
              delete tmp[tmp3];
              continue;
            }
          }
          return flattenResult;
        })(element.style);
      }
    } else {
      return closure_8;
    }
  } else {
    return closure_4;
  }
};