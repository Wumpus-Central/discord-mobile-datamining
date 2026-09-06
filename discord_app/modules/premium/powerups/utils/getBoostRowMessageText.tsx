// discord_app/modules/premium/powerups/utils/getBoostRowMessageText.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2428 from "../GuildPowerups.messages.js";
import getBoostLifecyclePhase from "getBoostLifecyclePhase.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = util.intl;
    return intl3.string(_modDef2428.plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = util.intl;
    let endsAt = phase.boost.endsAt;
    if (endsAt == null) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + getBoostLifecyclePhase.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: endsAt };
    return intl2.formatToPlainString(_modDef2428.vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = util.intl;
    return intl.string(_modDef2428.hSXjlI);
  }
}
