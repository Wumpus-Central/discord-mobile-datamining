// discord_app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
import DisplayNameStylesConstants from "DisplayNameStylesConstants.tsx";
import DisplayNameFont from "../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const FLYWHEEL_FONTS = DisplayNameStylesConstants.FLYWHEEL_FONTS;
let items = [
  DisplayNameFont.DisplayNameFont.DEFAULT,
  DisplayNameFont.DisplayNameFont.ZILLA_SLAB,
  DisplayNameFont.DisplayNameFont.CHERRY_BOMB,
  DisplayNameFont.DisplayNameFont.CHICLE,
  DisplayNameFont.DisplayNameFont.MUSEO_MODERNO,
  DisplayNameFont.DisplayNameFont.NEO_CASTEL,
  DisplayNameFont.DisplayNameFont.PIXELIFY,
  DisplayNameFont.DisplayNameFont.SINISTRE,
];
const items1 = [...FLYWHEEL_FONTS];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = DisplayNameStylesFlywheelExperiment;
      return obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items;
    }
  : () => {
      let isDisplayNameStylesFlywheelSettersEnabled;
      const obj = isDisplayNameStylesFlywheelSettersEnabled(9404);
      isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
      items = [isDisplayNameStylesFlywheelSettersEnabled];
      return react.useMemo(() => (isDisplayNameStylesFlywheelSettersEnabled ? items1 : items), items);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = tmp2;
