// discord_app/modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import NumberUtils from "../../../../../utils/NumberUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ DISCOUNTS: metroRequire, SubscriptionPlans: closure_7 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { labelRow: null, discountBadge: null, discountBadgeText: null };
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.labelRow = createStyles;
createStyles.discountBadge = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
};
createStyles.discountBadgeText = { textTransform: "uppercase" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx",
);

export const useBuyNitroPlanLabelRenderer = function useBuyNitroPlanLabelRenderer() {
  const tmp = closure_10();
  _require = tmp;
  token = require("useToken").useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = require("useToken");
  token1 = require("useToken").useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let items = [tmp, token, token1];
  return noop.useCallback((hasDiscountOffer, productId) => {
    ({ bogoEligible, trialTier, discounted } = hasDiscountOffer);
    let tmp2 = productId.productId === discounted.id;
    if (tmp2) {
      tmp2 = null != discounted.priceString;
    }
    let tmp5 =
      null == tmp || hasDiscountOffer.hasDiscountOffer || (null != trialTier && productId.premiumTier === trialTier);
    if (!tmp5) {
      let tmp6 = bogoEligible;
      if (bogoEligible) {
        tmp6 = productId.basePlanId === React5.PREMIUM_YEAR_TIER_2;
      }
      tmp5 = tmp6;
    }
    if (bogoEligible) {
      if (productId.basePlanId === React5.PREMIUM_MONTH_TIER_2) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.iQTfWx);
      }
      let obj = { style: labelRow.labelRow, children: null };
      obj = { variant: token, color: token1, children: PremiumUtils.getIntervalString(productId.interval, false) };
      const items = [React6(Text_Text.Text, obj)];
      let tmp21Result = null != stringResult;
      if (tmp21Result) {
        let obj1 = { style: tmp20.discountBadge, children: null };
        const obj2 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: tmp20.discountBadgeText,
          children: stringResult,
        };
        obj1.children = tmp21(Text_Text.Text, obj2);
        tmp21Result = tmp21(tmp19, obj1);
      }
      items[1] = tmp21Result;
      obj.children = items;
      return React7(View, obj);
    }
    if (tmp2) {
      if (null != discounted.percentOff) {
        const intl2 = util.intl;
        let obj3 = { discount: null };
        obj3 = NumberUtils;
        obj3.discount = obj3.formatPercent(LocaleStore.locale, discounted.percentOff / 100);
        stringResult = intl2.format(util.t.IAybsG, obj3);
      }
    }
    stringResult = null;
    if (!tmp5) {
      const intl = util.intl;
      obj = { discount: null };
      obj1 = NumberUtils;
      obj.discount = obj1.formatPercent(LocaleStore.locale, tmp / 100);
      stringResult = intl.format(util.t.IAybsG, obj);
    }
  }, items);
};
