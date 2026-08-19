// === Module 8025: presentBuyNitroPurchaseSuccess ===

// Module 8025 (presentBuyNitroPurchaseSuccess)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useAlertStore from "useAlertStore" /* 4657 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import { reset } from "usePremiumPlanPurchasedStore" /* 7392 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["Q+BB2w"]);
  if (PremiumTypes.TIER_0 === premiumTier) {
    const intl4 = getSystemLocale.intl;
    let stringResult = intl4.string(getSystemLocale.t["6WWrVM"]);
  } else if (tmp4.TIER_1 === premiumTier) {
    const intl3 = getSystemLocale.intl;
    stringResult = intl3.string(getSystemLocale.t.LAAgsy);
  } else {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.I7xNzI);
  }
  obj[1] = stringResult;
  obj = { variant: "primary", text: null };
  const intl5 = getSystemLocale.intl;
  obj[1] = intl5.string(getSystemLocale.t.TkTvBz);
  obj[2] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "primary", text: null });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(getAlertModalItemKey.AlertModal, { variant: "primary", text: null }), reset);
};