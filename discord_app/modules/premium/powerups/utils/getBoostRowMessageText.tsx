// discord_app/modules/premium/powerups/utils/getBoostRowMessageText.tsx
const result = require("BOOST_EXPIRING_DISPLAY_WINDOW_DAYS").fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../GuildPowerups.messages.js").plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let endsAt = phase.boost.endsAt;
    if (endsAt == null) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + require("getBoostLifecyclePhase.tsx") /* BOOST_EXPIRING_DISPLAY_WINDOW_DAYS */.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: null };
    obj[0] = endsAt;
    return intl2.formatToPlainString(require("../GuildPowerups.messages.js").vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../GuildPowerups.messages.js").hSXjlI);
  }
};