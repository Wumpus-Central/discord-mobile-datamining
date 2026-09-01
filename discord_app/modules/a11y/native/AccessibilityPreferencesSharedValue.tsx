// discord_app/modules/a11y/native/AccessibilityPreferencesSharedValue.tsx
import set from "../../../../_runtime/00002_set.js";
import AccessibilityAnnouncer from "../../../design/native.tsx";
import AccessibilityFeatureFlags2 from "../AccessibilityConstants.tsx";

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = {
  [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion",
  [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades",
  [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled",
};
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
