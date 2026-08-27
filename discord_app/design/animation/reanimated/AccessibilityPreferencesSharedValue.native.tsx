// === Module 4448: mutable ===

// Module 4448 (mutable)
import set from "set" /* 2 */;
import module_4185 from "module_4185" /* 4185 */;

const mutable = module_4185.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;