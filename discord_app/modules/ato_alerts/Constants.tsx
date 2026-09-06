// === Module 11369: Constants ===

// Module 11369 (Constants)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = { title: null, description: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.wSZfJR);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.CRwzW5);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = util.intl;
  obj.title = intl3.string(util.t.cmMUaB);
  const intl4 = util.intl;
  obj.description = intl4.string(util.t.n6G1ue);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = util.intl;
  obj.title = intl5.string(util.t["5SPKSy"]);
  const intl6 = util.intl;
  obj.description = intl6.string(util.t.eyjeJQ);
  items[2] = obj;
  return items;
};