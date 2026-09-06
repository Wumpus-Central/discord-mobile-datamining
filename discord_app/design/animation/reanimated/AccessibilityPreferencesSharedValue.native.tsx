// === Module 4563: mutable ===

// Module 4563 (mutable)
import set from "set" /* 2 */;
import module_4296 from "module_4296" /* 4296 */;

const mutable = module_4296.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;