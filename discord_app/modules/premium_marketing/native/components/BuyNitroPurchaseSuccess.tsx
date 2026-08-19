// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { reset } from "../../../premium/native/PremiumPlanPurchasedStore.tsx";
import { PremiumTypes } from "../../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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