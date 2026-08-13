// discord_app/design/components/Text/native/PlainTextEligibility.tsx
import { StyleSheet } from "get ActivityIndicator";
import set from "set";

let set = new Set(["accessibilityActions", "accessibilityElementsHidden", "accessibilityHint", "accessibilityIgnoresInvertColors", "accessibilityLabel", "accessibilityLabelledBy", "accessibilityLanguage", "accessibilityLargeContentTitle", "accessibilityLiveRegion", "accessibilityRespondsToUserInteraction", "accessibilityRole", "accessibilityShowsLargeContentViewer", "accessibilityState", "accessibilityValue", "accessibilityViewIsModal", "accessible", "allowFontScaling", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-modal", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "id", "importantForAccessibility", "maxFontSizeMultiplier", "nativeID", "onAccessibilityAction", "onAccessibilityEscape", "onAccessibilityTap", "onMagicTap", "role", "screenReaderFocusable", "testID"]);
const set1 = new Set(["fontVariant", "textDecorationColor", "textDecorationStyle", "textShadowColor", "textShadowOffset", "textShadowRadius", "userSelect", "writingDirection"]);
let closure_3 = { eligible: false, reason: "animated" };
let closure_4 = { eligible: false, reason: "experiment-disabled" };
let closure_5 = { eligible: false, reason: "native-text-override" };
let closure_6 = { eligible: false, reason: "nested-text" };
let closure_7 = { eligible: false, reason: "non-string-children" };
let closure_8 = { eligible: false, reason: "non-ios" };
let closure_9 = { eligible: false, reason: "ref" };
const result = set.fileFinishedImporting("design/components/Text/native/PlainTextEligibility.tsx");

export const isPlainTextEligible = function isPlainTextEligible(plainTextEligibility) {
  return !("eligible" in plainTextEligibility);
};
export const getPlainTextEligibility = function getPlainTextEligibility(enabled) {
  if (enabled.enabled) {
    if (enabled.isIOS) {
      if (enabled.hasTextAncestor) {
        return closure_6;
      } else if (enabled.hasRef) {
        return closure_9;
      } else if (enabled.animated) {
        return closure_3;
      } else if (enabled.experimentalUseNativeText) {
        return closure_5;
      } else if (typeof enabled.children !== "string") {
        return closure_7;
      } else {
        for (const key10010 in arg0.props) {
          let tmp10 = key10010;
          if (null == arg0.props[key10010]) {
            continue;
          } else {
            let tmp3 = set;
            if (set.has(key10010)) {
              continue;
            } else {
              let obj = { eligible: false, reason: "unsupported-prop", unsupportedName: null };
              obj[2] = key10010;
              return obj;
            }
          }
          continue;
        }
        return (function getPlainTextStyle(style) {
          const flattenResult = closure_0.flatten(style);
          delete tmp[tmp2];
          if (null != flattenResult.textTransform) {
            if ("none" !== flattenResult.textTransform) {
              return { eligible: false, reason: "unsupported-style", unsupportedName: "textTransform" };
            }
          }
          delete tmp[tmp2];
          for (const item10016 of closure_2) {
            let tmp5 = item10016;
            if (null != flattenResult[item10016]) {
              let obj = { eligible: false, reason: "unsupported-style", unsupportedName: null };
              obj[2] = item10016;
              let tmp7 = obj;
              obj.return();
              return obj;
            } else {
              let tmp6 = item10016;
              delete tmp[tmp3];
              continue;
            }
          }
          return flattenResult;
        })(enabled.style);
      }
    } else {
      return closure_8;
    }
  } else {
    return closure_4;
  }
};