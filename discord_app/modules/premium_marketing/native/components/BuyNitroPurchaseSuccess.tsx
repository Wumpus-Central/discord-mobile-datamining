// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx
import "noop";
import { reset } from "usePremiumPlanPurchasedStore";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = require(4625) /* useAlertStore */;
  obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["Q+BB2w"]);
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
  obj[1] = intl5.string(require(1236) /* getSystemLocale */.t.TkTvBz);
  obj[2] = jsx(require(4628) /* getAlertModalItemKey */.AlertActionButton, { variant: "primary", text: null });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(require(4628) /* getAlertModalItemKey */.AlertModal, { variant: "primary", text: null }), reset);
};