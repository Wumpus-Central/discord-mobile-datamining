// === Module 4451: mutable ===

// Module 4451 (mutable)
import set from "set" /* 2 */;
import module_4187 from "module_4187" /* 4187 */;

const mutable = module_4187.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;