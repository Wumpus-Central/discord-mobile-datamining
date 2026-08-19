// discord_app/modules/a11y/native/AccessibilityPreferencesSharedValue.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import AccessibilityAnnouncer from "../../../design/native.tsx";
import AccessibilityFeatureFlags2 from "../AccessibilityConstants.tsx";

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = obj132.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;