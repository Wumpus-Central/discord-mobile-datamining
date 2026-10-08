// === Module 15434: DisplayNameStylesFontOrder ===

// Module 15434 (DisplayNameStylesFontOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14685 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [fn(1409).DisplayNameFont.DEFAULT, fn(1409).DisplayNameFont.ZILLA_SLAB, fn(1409).DisplayNameFont.CHERRY_BOMB, fn(1409).DisplayNameFont.CHICLE, fn(1409).DisplayNameFont.MUSEO_MODERNO, fn(1409).DisplayNameFont.NEO_CASTEL, fn(1409).DisplayNameFont.PIXELIFY, fn(1409).DisplayNameFont.SINISTRE];
const items1 = [...fn(1407).FLYWHEEL_FONTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleFontOrder() {
  return DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items;
}) : (function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(14685).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
});