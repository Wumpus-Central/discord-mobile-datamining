// discord_app/modules/hexagon_campaign/useHexagonCampaignDaysLeft.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HexagonCampaignUtils from "HexagonCampaignUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_5 = 60 * DurationsDefault.Millis.SECOND;
let closure_6 = Object.values(fn(5268).HexagonCampaignPerk);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignDaysLeft.tsx");

export function useHexagonCampaignDaysLeft(perk) {
  _require = perk;
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const items1 = [perk, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != closure_0) {
      let hexagonCampaignPerkCutoffMs = HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(tmp, stateFromStores);
    } else {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(
        closure_6.map((item) => closure_0(dependencyMap[5]).getHexagonCampaignPerkCutoffMs(item, stateFromStores)),
        0,
      );
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp3 = stateFromStores(9373)(memo, closure_5);
  let num = 0;
  if (tmp3.hours > 0) {
    num = 1;
  }
  return Math.max(tmp3.days + num, 1);
}
