// discord_app/modules/premium/powerups/utils/getBoostRowMessageText.tsx
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../GuildPowerups.messages.js";
import { BOOST_EXPIRING_DISPLAY_WINDOW_DAYS } from "getBoostLifecyclePhase.tsx";
const result = require("BOOST_EXPIRING_DISPLAY_WINDOW_DAYS").fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(messagesProxy.plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let endsAt = phase.boost.endsAt;
    if (endsAt == null) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + BOOST_EXPIRING_DISPLAY_WINDOW_DAYS /* BOOST_EXPIRING_DISPLAY_WINDOW_DAYS */.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: null };
    obj[0] = endsAt;
    return intl2.formatToPlainString(messagesProxy.vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.hSXjlI);
  }
};