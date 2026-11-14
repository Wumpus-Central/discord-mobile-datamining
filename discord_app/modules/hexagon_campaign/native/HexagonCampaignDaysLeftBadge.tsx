// === Module 17108: HexagonCampaignDaysLeftBadge ===

// Module 17108 (HexagonCampaignDaysLeftBadge)
import util from "util" /* 1113 */;
import _modDef4516 from "module_4516" /* 4516 */;
import ClockIcon from "ClockIcon" /* 6042 */;
import Badge from "Badge" /* 7459 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 17109 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default function HexagonCampaignDaysLeftBadge(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "secondary";
  }
  const hexagonCampaignDaysLeft = useHexagonCampaignDaysLeft.useHexagonCampaignDaysLeft(variant.perk);
  const obj2 = { type: null, variant: null, icon: null };
  const obj3 = { text: null };
  const intl = util.intl;
  obj3.text = intl.formatToPlainString(_modDef4516["noGK/D"], { days: hexagonCampaignDaysLeft });
  obj2.type = obj3;
  obj2.variant = str;
  obj2.icon = ClockIcon.ClockIcon;
  return jsx(Badge.Badge, { type: null, variant: null, icon: null });
};