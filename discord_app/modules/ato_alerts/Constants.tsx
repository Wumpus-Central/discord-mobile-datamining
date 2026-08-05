// discord_app/modules/ato_alerts/Constants.tsx
const result = require("set").fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = { title: null, description: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.wSZfJR);
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.CRwzW5);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.cmMUaB);
  const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl4.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.n6G1ue);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl5.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["5SPKSy"]);
  const intl6 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl6.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.eyjeJQ);
  items[2] = obj;
  return items;
};