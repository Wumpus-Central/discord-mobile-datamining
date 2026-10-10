// === Module 15609: DisplayNameStylesFontOrder ===

// Module 15609 (DisplayNameStylesFontOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14847 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [fn(1410).DisplayNameFont.DEFAULT, fn(1410).DisplayNameFont.ZILLA_SLAB, fn(1410).DisplayNameFont.CHERRY_BOMB, fn(1410).DisplayNameFont.CHICLE, fn(1410).DisplayNameFont.MUSEO_MODERNO, fn(1410).DisplayNameFont.NEO_CASTEL, fn(1410).DisplayNameFont.PIXELIFY, fn(1410).DisplayNameFont.SINISTRE];
const items1 = [...fn(1408).FLYWHEEL_FONTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleFontOrder() {
  return DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items;
}) : (function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(14847).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
});