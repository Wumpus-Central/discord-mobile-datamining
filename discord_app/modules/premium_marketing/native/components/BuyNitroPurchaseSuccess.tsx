// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx
import "noop";
import { reset } from "usePremiumPlanPurchasedStore";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import { getAlertModalItemKey } from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { useAlertStore } from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = useAlertStore /* useAlertStore */;
  obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["Q+BB2w"]);
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
  obj[1] = intl5.string(getSystemLocale /* getSystemLocale */.t.TkTvBz);
  obj[2] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { variant: "primary", text: null });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { variant: "primary", text: null }), reset);
};