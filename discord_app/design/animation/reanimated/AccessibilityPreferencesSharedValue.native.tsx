// === Module 4383: mutable ===

// Module 4383 (mutable)
import set from "set" /* 2 */;
import module_4120 from "module_4120" /* 4120 */;

const mutable = module_4120.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;