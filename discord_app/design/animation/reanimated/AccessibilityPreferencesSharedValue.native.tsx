// === Module 4481: mutable ===

// Module 4481 (mutable)
import set from "set" /* 2 */;
import module_4217 from "module_4217" /* 4217 */;

const mutable = module_4217.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;