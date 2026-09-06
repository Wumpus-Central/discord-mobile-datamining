// discord_app/modules/a11y/native/AccessibilityPreferencesSharedValue.tsx
import AccessibilityConstants from "../AccessibilityConstants.tsx";
import native from "../../../design/native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = {
  [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion",
  [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades",
  [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled",
};
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
