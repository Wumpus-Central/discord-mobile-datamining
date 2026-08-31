// === Module 13019: presentBuyNitroPurchaseSuccess ===

// Module 13019 (presentBuyNitroPurchaseSuccess)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useAlertStore from "useAlertStore" /* 4827 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4831 */;
import { reset } from "usePremiumPlanPurchasedStore" /* 7134 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = useAlertStore;
  obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["Q+BB2w"]);
  if (PremiumTypes.TIER_0 === premiumTier) {
    const intl4 = tmp(1236).intl;
    let stringResult = intl4.string(tmp(1236).t["6WWrVM"]);
  } else if (tmp4.TIER_1 === premiumTier) {
    const intl3 = tmp(1236).intl;
    stringResult = intl3.string(tmp(1236).t.LAAgsy);
  } else {
    const intl2 = tmp(1236).intl;
    stringResult = intl2.string(tmp(1236).t.I7xNzI);
  }
  obj[1] = stringResult;
  obj = { variant: "primary", text: null };
  const intl5 = tmp(1236).intl;
  obj[1] = intl5.string(getSystemLocale.t.TkTvBz);
  obj[2] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "primary", text: null });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(getAlertModalItemKey.AlertModal, { variant: "primary", text: null }), reset);
};