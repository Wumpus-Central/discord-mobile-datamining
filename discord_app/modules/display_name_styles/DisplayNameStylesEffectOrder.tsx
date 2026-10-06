// discord_app/modules/display_name_styles/DisplayNameStylesEffectOrder.tsx
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment.tsx";
import react from "../../../_runtime/00019_react.js";
import DisplayNameStylesConstants from "DisplayNameStylesConstants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
const FLYWHEEL_EFFECTS = DisplayNameStylesConstants.FLYWHEEL_EFFECTS;
let items = [...FLYWHEEL_EFFECTS];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = DisplayNameStylesFlywheelExperiment;
      return obj.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order") ? items : EFFECT_ORDER;
    }
  : () => {
      let isDisplayNameStylesFlywheelSettersEnabled;
      const obj = isDisplayNameStylesFlywheelSettersEnabled(9404);
      isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
      items = [isDisplayNameStylesFlywheelSettersEnabled];
      return react.useMemo(() => (isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER), items);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = tmp3;
