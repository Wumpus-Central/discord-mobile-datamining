// discord_app/modules/orbs_arcade/utils/OrbsArcadeWindowUtils.tsx
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeWindowUtils.tsx");

export function formatOrbsArcadeTimeUntil(timeUntilNextRound) {
  ({ days, hours } = timeUntilNextRound);
  if (days > 0) {
    const intl3 = util.intl;
    const obj2 = { days };
    let formatToPlainStringResult = intl3.formatToPlainString(util.t.GBLpQ8, obj2);
  } else if (hours > 0) {
    const intl2 = util.intl;
    const obj3 = { hours };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.rhY1Rs, obj3);
  } else {
    const intl = util.intl;
    const obj = { minutes: null };
    const _Math = Math;
    obj.minutes = Math.max(tmp, 1);
    formatToPlainStringResult = intl.formatToPlainString(util.t["XIGt+W"], obj);
  }
  return formatToPlainStringResult;
}
