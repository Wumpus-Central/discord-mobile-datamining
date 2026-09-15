// discord_app/modules/safe_area/SafeAreaConstants.native.tsx
import _mod1615 from "../../../_runtime/metro/01615__.js";
import size from "../../../_runtime/metro/00002__.js";

const initialWindowMetrics = _mod1615.initialWindowMetrics;
let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}
const rect = { top: 0, bottom: 0, left: 0, right: 0 };
if (insets == null) {
  insets = rect;
}
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = rect;
export const META_QUEST_SAFE_AREA_INSETS = { top: 4, bottom: 4, left: 0, right: 0 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = insets;
