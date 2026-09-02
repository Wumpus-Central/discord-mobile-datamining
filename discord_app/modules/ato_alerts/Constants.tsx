// === Module 11226: LIKELY_ATO_MORE_TIPS_MODAL_KEY ===

// Module 11226 (LIKELY_ATO_MORE_TIPS_MODAL_KEY)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = { title: null, description: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.wSZfJR);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.CRwzW5);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.cmMUaB);
  const intl4 = getSystemLocale.intl;
  obj[1] = intl4.string(getSystemLocale.t.n6G1ue);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t["5SPKSy"]);
  const intl6 = getSystemLocale.intl;
  obj[1] = intl6.string(getSystemLocale.t.eyjeJQ);
  items[2] = obj;
  return items;
};