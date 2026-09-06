// === Module 12586: getBoostRowMessageText ===

// Module 12586 (getBoostRowMessageText)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import getBoostLifecyclePhase from "getBoostLifecyclePhase" /* 12581 */;
import size from "module_2" /* 2 */;

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
};