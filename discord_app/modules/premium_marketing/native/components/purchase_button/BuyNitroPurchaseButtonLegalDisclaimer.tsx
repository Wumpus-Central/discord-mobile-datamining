// discord_app/modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { combined } from "../../../../../utils/HelpdeskUtils.tsx";
import { set } from "../../../../../utils/PlatformUtils.tsx";
import { getPremiumPlanItem } from "../../../../../utils/PremiumUtils.tsx";

let c3;
let c4;
const require = arg1;
({ HelpdeskArticles: c3, MarketingURLs: c4 } = ME);
createCacheKey = { disclaimer: null };
createCacheKey = { marginTop: require("Themes").space.PX_12, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx");

export default function BuyNitroPurchaseButtonLegalDisclaimer(arg0) {
  let ctaText;
  let isDiscounted;
  let isTrial;
  let item;
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
        obj[1] = getPremiumPlanItem.formatInterval(item.interval);
        const obj5 = getPremiumPlanItem;
        obj[2] = combined.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
        const obj6 = combined;
        obj[3] = combined.getArticleURL(constants.PAID_TERMS);
        let formatResult = format(tmp3(1236).t["3uC7vj"], obj);
        let tmp10 = tmp3;
        const obj7 = combined;
      } else {
        let tmp3Result = tmp3(500);
        let t = tmp3(1236).t;
        obj = { paidURL: null, interval: null, ctaText: null };
        obj[0] = constants2.PAID_TERMS;
        const isAndroidResult = tmp3Result.isAndroid();
        tmp3Result = tmp3(3930);
        obj[1] = tmp3Result.getIntervalStringAsNoun(item.interval);
        obj[2] = ctaText;
        formatResult = format(tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"], obj);
        tmp10 = tmp3;
        const tmp6 = tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"];
      }
      const obj1 = { style: null, variant: "text-xxs/medium", children: null };
      obj1[0] = tmp.disclaimer;
      obj1[2] = formatResult;
      jsx(tmp10(4281).Text, { style: null, variant: "text-xxs/medium", children: null });
    }
    const tmp3Result1 = set;
    t = tmp3(1236).t;
    const isAndroidResult1 = set.isAndroid();
    t = { paidURL: null, interval: null, cancelURL: null };
    t[0] = constants2.PAID_TERMS;
    const tmp14 = set.isAndroid() ? t.tINI9V : t.ZWXtAj;
    t[1] = getPremiumPlanItem.getIntervalStringAsNoun(item.interval);
    const tmp3Result2 = getPremiumPlanItem;
    item = combined.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
    t[2] = item;
    format(tmp14, t);
    const obj11 = combined;
  }
};