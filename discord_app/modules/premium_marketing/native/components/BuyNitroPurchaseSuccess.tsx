// === Module 13391: BuyNitroPurchaseSuccess ===

// Module 13391 (BuyNitroPurchaseSuccess)
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const reset = fn(7421).reset;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["Q+BB2w"]);
  if (PremiumTypes.TIER_0 === premiumTier) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t["6WWrVM"]);
  } else if (tmp4.TIER_1 === premiumTier) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.LAAgsy);
  } else {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.I7xNzI);
  }
  obj.content = stringResult;
  obj = { variant: "primary", text: null };
  const intl5 = util.intl;
  obj.text = intl5.string(util.t.TkTvBz);
  obj.actions = jsx(AlertModal.AlertActionButton, { variant: "primary", text: null });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(AlertModal.AlertModal, { variant: "primary", text: null }), reset);
};