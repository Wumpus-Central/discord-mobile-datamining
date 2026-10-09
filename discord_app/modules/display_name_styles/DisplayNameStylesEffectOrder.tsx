// discord_app/modules/display_name_styles/DisplayNameStylesEffectOrder.tsx
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const DisplayNameStylesConstants = fn(1408);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
let items = [...tmp2.FLYWHEEL_EFFECTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVisibleEffectOrder() {
      return DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order")
        ? items
        : EFFECT_ORDER;
    }
  : function useVisibleEffectOrder() {
      isDisplayNameStylesFlywheelSettersEnabled =
        isDisplayNameStylesFlywheelSettersEnabled(14791).useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
      items = [isDisplayNameStylesFlywheelSettersEnabled];
      return noop.useMemo(() => (isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER), items);
    };
