// === Module 12117: getBoostRowMessageText ===

// Module 12117 (getBoostRowMessageText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2401 */;
import BOOST_EXPIRING_DISPLAY_WINDOW_DAYS from "BOOST_EXPIRING_DISPLAY_WINDOW_DAYS" /* 12112 */;

const result = set.fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(messagesProxyDefault.plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = getSystemLocale.intl;
    let endsAt = phase.boost.endsAt;
    if (endsAt == null) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + BOOST_EXPIRING_DISPLAY_WINDOW_DAYS.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: null };
    obj[0] = endsAt;
    return intl2.formatToPlainString(messagesProxyDefault.vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.hSXjlI);
  }
};