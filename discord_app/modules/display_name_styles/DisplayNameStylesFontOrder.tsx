// === Module 15157: DisplayNameStylesFontOrder ===

// Module 15157 (DisplayNameStylesFontOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import DisplayNameFont from "DisplayNameFont" /* 1397 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9390 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FLYWHEEL_FONTS = DisplayNameStylesConstants.FLYWHEEL_FONTS;
let items = [DisplayNameFont.DisplayNameFont.DEFAULT, DisplayNameFont.DisplayNameFont.ZILLA_SLAB, DisplayNameFont.DisplayNameFont.CHERRY_BOMB, DisplayNameFont.DisplayNameFont.CHICLE, DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, DisplayNameFont.DisplayNameFont.NEO_CASTEL, DisplayNameFont.DisplayNameFont.PIXELIFY, DisplayNameFont.DisplayNameFont.SINISTRE];
const items1 = [...FLYWHEEL_FONTS];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = DisplayNameStylesFlywheelExperiment;
  return obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items;
}) : (() => {
  let isDisplayNameStylesFlywheelSettersEnabled;
  const obj = isDisplayNameStylesFlywheelSettersEnabled(9390);
  isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return react.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = tmp2;