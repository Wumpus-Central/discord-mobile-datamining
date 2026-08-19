// === Module 1631: EMPTY_SAFE_AREA_INSETS ===

// Module 1631 (EMPTY_SAFE_AREA_INSETS)
import obj132 from "obj132" /* 2 */;
import _mod1632 from "module_1632" /* 1632 */;

const initialWindowMetrics = _mod1632.initialWindowMetrics;
let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}
const obj = { top: 0, bottom: 0, left: 0, right: 0 };
if (insets == null) {
  insets = obj;
}
const result = obj132.fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = obj;
export const META_QUEST_SAFE_AREA_INSETS = { top: 4, bottom: 4, left: 0, right: 0 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = insets;