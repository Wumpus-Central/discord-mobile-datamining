// === Module 4196: mutable ===

// Module 4196 (mutable)
import module_4054 from "module_4054";

const mutable = module_4054.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;