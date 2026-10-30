// === Module 17260: DisplayNameStylesEffectOrder ===

// Module 17260 (DisplayNameStylesEffectOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1402 */;
import size from "module_2" /* 2 */;

const items = [..._module.FLYWHEEL_EFFECTS];
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export function useVisibleEffectOrder() {
  return items;
}