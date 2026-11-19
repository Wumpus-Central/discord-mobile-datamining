// === Module 16798: useHexagonCampaignFontPickerSection ===

// Module 16798 (useHexagonCampaignFontPickerSection)
import noop from "module_19" /* 19 */;

const require = fn;
const HexagonCampaignConstants = fn(4817);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c3, HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
const HEXAGON_CAMPAIGN_FONTS = fn(1397).HEXAGON_CAMPAIGN_FONTS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignFontPickerSection.tsx");

export function useHexagonCampaignFontPickerSection(DisplayNameStylesFontPickerSheet, isTryItOut) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.includeLockedInTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let visibleFontOrder;
  visibleFontOrder = visibleFontOrder(16795).useVisibleFontOrder({ includeCampaignFonts: true });
  const obj2 = visibleFontOrder(16795);
  const hexagonCampaignPerkAvailability = visibleFontOrder(4822).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesFontPickerSheet);
  let hasItem = hexagonCampaignPerkAvailability === constants2.SELECTABLE;
  if (!hasItem) {
    if (flag) {
      flag = isTryItOut;
    }
    if (flag) {
      flag = hexagonCampaignPerkAvailability === tmp4.LOCKED;
    }
    hasItem = flag;
  }
  if (hasItem) {
    hasItem = visibleFontOrder.includes(closure_3);
  }
  const obj4 = visibleFontOrder(4822);
  let tmp7 = hasItem;
  if (hasItem) {
    tmp7 = !isTryItOut;
  }
  const trackHexagonCampaignContentViewed = visibleFontOrder(15767).useTrackHexagonCampaignContentViewed(tmp(6440).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp(15767).HexagonCampaignContentSurface.FONT_PICKER, tmp7);
  items = [visibleFontOrder];
  const tmpResult = visibleFontOrder(15767);
  return { visibleFontOrder, gridFontOrder: noop.useMemo(() => visibleFontOrder.filter((item) => !closure_1_6.includes(item)), items), showCampaignSection: hasItem };
}