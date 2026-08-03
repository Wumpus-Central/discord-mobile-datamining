// === Module 10590: LIKELY_ATO_MORE_TIPS_MODAL_KEY ===

// Module 10590 (LIKELY_ATO_MORE_TIPS_MODAL_KEY)
const result = require("set").fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = { title: null, description: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.wSZfJR);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.CRwzW5);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.cmMUaB);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl4.string(require(1236) /* getSystemLocale */.t.n6G1ue);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl5.string(require(1236) /* getSystemLocale */.t["5SPKSy"]);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl6.string(require(1236) /* getSystemLocale */.t.eyjeJQ);
  items[2] = obj;
  return items;
};