// discord_app/modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4464 from "../HexagonCampaign.messages.js";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Badge from "../../../design/components/Badge/native/Badge.native.tsx";
import useHexagonCampaignDaysLeft from "../useHexagonCampaignDaysLeft.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj3.text = intl.formatToPlainString(_modDef4464["noGK/D"], { days: hexagonCampaignDaysLeft });
  obj2.type = obj3;
  obj2.variant = str;
  obj2.icon = ClockIcon.ClockIcon;
  return jsx(Badge.Badge, { type: null, variant: null, icon: null });
}
