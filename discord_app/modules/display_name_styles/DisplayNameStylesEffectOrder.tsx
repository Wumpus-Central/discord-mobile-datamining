// === Module 15610: DisplayNameStylesEffectOrder ===

// Module 15610 (DisplayNameStylesEffectOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14847 */;
import noop from "module_19" /* 19 */;

require = fn;
const DisplayNameStylesConstants = fn(1408);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleEffectOrder() {
  return DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order") ? items : EFFECT_ORDER;
}) : (function useVisibleEffectOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(14847).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
});