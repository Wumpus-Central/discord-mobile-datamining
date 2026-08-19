// === Module 8023: BuyNitroPurchaseButtonLegalDisclaimer ===

// Module 8023 (BuyNitroPurchaseButtonLegalDisclaimer)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ HelpdeskArticles: c3, MarketingURLs: c4 } = ME);
const createCacheKey = { marginTop: ThemesDefault.space.PX_12, textAlign: "center" };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx");

export default function BuyNitroPurchaseButtonLegalDisclaimer(arg0) {
  ({ item, ctaText } = arg0);
  ({ isTrial, isDiscounted } = arg0);
  let interval;
  if (item != null) {
    interval = item.interval;
  }
  if (null == interval) {
    return null;
  } else {
    const intl = getSystemLocale.intl;
    const format = intl.format;
    if (!isTrial) {
      if (isDiscounted) {
        let obj = { buttonText: null, interval: null, cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj[0] = ctaText;
        obj[1] = getPremiumPlanItemDefault.formatInterval(item.interval);
        obj[2] = combinedDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
        obj[3] = combinedDefault.getArticleURL(constants.PAID_TERMS);
        let formatResult = format(getSystemLocale.t["3uC7vj"], obj);
        let tmp10 = require;
      } else {
        let tmp3Result = obj132;
        let t = getSystemLocale.t;
        obj = { paidURL: null, interval: null, ctaText: null };
        obj[0] = constants2.PAID_TERMS;
        const isAndroidResult = tmp3Result.isAndroid();
        tmp3Result = getPremiumPlanItem;
        obj[1] = tmp3Result.getIntervalStringAsNoun(item.interval);
        obj[2] = ctaText;
        formatResult = format(tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"], obj);
        tmp10 = require;
        const tmp6 = tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"];
      }
      obj1 = { style: null, variant: "text-xxs/medium", children: null };
      obj1[0] = tmp.disclaimer;
      obj1[2] = formatResult;
      jsx(tmp10(4734).Text, { style: null, variant: "text-xxs/medium", children: null });
    }
    const tmp3Result1 = obj132;
    const isAndroidResult1 = obj132.isAndroid();
    t = { paidURL: null, interval: null, cancelURL: null };
    t[0] = constants2.PAID_TERMS;
    const tmp14 = obj132.isAndroid() ? t.tINI9V : t.ZWXtAj;
    t[1] = getPremiumPlanItem.getIntervalStringAsNoun(item.interval);
    const tmp3Result2 = getPremiumPlanItem;
    item = combinedDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
    t[2] = item;
    format(tmp14, t);
  }
  tmp = callback();
};