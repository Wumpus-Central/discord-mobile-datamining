// discord_app/modules/safe_area/SafeAreaConstants.native.tsx
import set from "../../../_runtime/00002_set.js";
import _mod1631 from "../../../_runtime/metro/01631__.js";

const initialWindowMetrics = _mod1631.initialWindowMetrics;
let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}
const obj = { top: 0, bottom: 0, left: 0, right: 0 };
if (insets == null) {
  insets = obj;
}
const result = set.fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = obj;
export const META_QUEST_SAFE_AREA_INSETS = { top: 4, bottom: 4, left: 0, right: 0 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = insets;
