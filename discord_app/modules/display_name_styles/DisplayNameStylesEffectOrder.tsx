// === Module 15154: DisplayNameStylesEffectOrder ===

// Module 15154 (DisplayNameStylesEffectOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9390 */;
import noop from "module_19" /* 19 */;

require = fn;
const DisplayNameStylesConstants = fn(1395);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = ReactCompilerGating.isReactCompilerEnabled() ? (() => DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order") ? items : EFFECT_ORDER) : (() => {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9390).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
});