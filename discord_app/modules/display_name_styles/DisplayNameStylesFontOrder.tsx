// === Module 17259: DisplayNameStylesFontOrder ===

// Module 17259 (DisplayNameStylesFontOrder)
import noop from "module_19" /* 19 */;

const require = fn;
const DisplayNameStylesConstants = fn(1402);
({ FLYWHEEL_FONTS, HEXAGON_CAMPAIGN_FONTS: c3 } = DisplayNameStylesConstants);
const HexagonCampaignConstants = fn(5034);
({ HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let items = [fn(1404).DisplayNameFont.DEFAULT, fn(1404).DisplayNameFont.ZILLA_SLAB, fn(1404).DisplayNameFont.CHERRY_BOMB, fn(1404).DisplayNameFont.CHICLE, fn(1404).DisplayNameFont.MUSEO_MODERNO, fn(1404).DisplayNameFont.NEO_CASTEL, fn(1404).DisplayNameFont.PIXELIFY, fn(1404).DisplayNameFont.SINISTRE];
const items1 = [...FLYWHEEL_FONTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export function useVisibleFontOrder(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeCampaignFonts;
  if (flag === undefined) {
    flag = false;
  }
  flag = undefined;
  flag(5037);
  if (flag) {
    flag = tmp2 !== constants.HIDDEN;
  }
  let items = [flag];
  return noop.useMemo(() => {
    if (flag) {
      const items = [];
      HermesBuiltin.arraySpread(React3, HermesBuiltin.arraySpread(items1, 0));
      let tmp2 = items;
    } else {
      tmp2 = items1;
    }
    return tmp2;
  }, items);
}