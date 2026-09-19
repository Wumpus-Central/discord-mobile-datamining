// === Module 15603: DisplayNameStylesFontOrder ===

// Module 15603 (DisplayNameStylesFontOrder)
import noop from "module_19" /* 19 */;

const require = fn;
let items = [fn(1392).DisplayNameFont.DEFAULT, fn(1392).DisplayNameFont.ZILLA_SLAB, fn(1392).DisplayNameFont.CHERRY_BOMB, fn(1392).DisplayNameFont.CHICLE, fn(1392).DisplayNameFont.MUSEO_MODERNO, fn(1392).DisplayNameFont.NEO_CASTEL, fn(1392).DisplayNameFont.PIXELIFY, fn(1392).DisplayNameFont.SINISTRE];
const items1 = [...fn(1390).FLYWHEEL_FONTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9996).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
};