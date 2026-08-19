// === Module 13812: A11Y_FEATURE_MAP ===

// Module 13812 (A11Y_FEATURE_MAP)
import obj132 from "obj132" /* 2 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 13492 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 13570 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = obj132.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;