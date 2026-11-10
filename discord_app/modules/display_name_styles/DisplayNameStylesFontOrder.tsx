// === Module 17677: DisplayNameStylesFontOrder ===

// Module 17677 (DisplayNameStylesFontOrder)
import noop from "module_19" /* 19 */;

const require = fn;
const DisplayNameStylesConstants = fn(1394);
({ FONT_ORDER: c3, HEXAGON_CAMPAIGN_FONTS: closure_4 } = DisplayNameStylesConstants);
const HexagonCampaignConstants = fn(5167);
({ HexagonCampaignPerk: hasOwnProperty, HexagonCampaignPerkAvailability: closure_6 } = HexagonCampaignConstants);
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
  flag(5170);
  if (flag) {
    flag = tmp2 !== constants.HIDDEN;
  }
  items = [flag];
  return noop.useMemo(() => {
    if (flag) {
      items = [];
      HermesBuiltin.arraySpread(React4, HermesBuiltin.arraySpread(React3, 0));
      let tmp2 = items;
    } else {
      tmp2 = React3;
    }
    return tmp2;
  }, items);
}