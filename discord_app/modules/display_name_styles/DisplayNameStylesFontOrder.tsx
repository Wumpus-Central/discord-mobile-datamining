// === Module 14752: items ===

// Module 14752 (items)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let items = [require("DisplayNameFont").DisplayNameFont.DEFAULT, require("DisplayNameFont").DisplayNameFont.ZILLA_SLAB, require("DisplayNameFont").DisplayNameFont.CHERRY_BOMB, require("DisplayNameFont").DisplayNameFont.CHICLE, require("DisplayNameFont").DisplayNameFont.MUSEO_MODERNO, require("DisplayNameFont").DisplayNameFont.NEO_CASTEL, require("DisplayNameFont").DisplayNameFont.PIXELIFY, require("DisplayNameFont").DisplayNameFont.SINISTRE];
const items1 = [...require("items3").FLYWHEEL_FONTS];
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9491).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? closure_1_4 : closure_1_3, items);
};