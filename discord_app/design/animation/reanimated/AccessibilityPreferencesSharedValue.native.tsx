// === Module 5255: reanimated/AccessibilityPreferencesSharedValue ===

// Module 5255 (reanimated/AccessibilityPreferencesSharedValue)
import module_1654 from "module_1654" /* 1654 */;
import size from "module_2" /* 2 */;

const mutable = module_1654.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;