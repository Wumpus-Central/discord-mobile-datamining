// === Module 4258: mutable ===

// Module 4258 (mutable)
import module_4116 from "module_4116";

const mutable = module_4116.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;