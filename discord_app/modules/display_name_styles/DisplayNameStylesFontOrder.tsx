// discord_app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const DisplayNameStylesConstants = fn(1403);
({ FLYWHEEL_FONTS, HEXAGON_CAMPAIGN_FONTS: c3 } = DisplayNameStylesConstants);
const HexagonCampaignConstants = fn(5166);
({ HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let items = [
  fn(1405).DisplayNameFont.DEFAULT,
  fn(1405).DisplayNameFont.ZILLA_SLAB,
  fn(1405).DisplayNameFont.CHERRY_BOMB,
  fn(1405).DisplayNameFont.CHICLE,
  fn(1405).DisplayNameFont.MUSEO_MODERNO,
  fn(1405).DisplayNameFont.NEO_CASTEL,
  fn(1405).DisplayNameFont.PIXELIFY,
  fn(1405).DisplayNameFont.SINISTRE,
];
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
  flag(5169);
  if (flag) {
    flag = tmp2 !== constants.HIDDEN;
  }
  items = [flag];
  return noop.useMemo(() => {
    if (flag) {
      items = [];
      HermesBuiltin.arraySpread(React3, HermesBuiltin.arraySpread(items1, 0));
      let tmp2 = items;
    } else {
      tmp2 = items1;
    }
    return tmp2;
  }, items);
}
