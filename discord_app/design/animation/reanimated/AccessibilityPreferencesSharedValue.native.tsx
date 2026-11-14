// === Module 5550: reanimated/AccessibilityPreferencesSharedValue ===

// Module 5550 (reanimated/AccessibilityPreferencesSharedValue)
import module_1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const mutable = module_1655.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;