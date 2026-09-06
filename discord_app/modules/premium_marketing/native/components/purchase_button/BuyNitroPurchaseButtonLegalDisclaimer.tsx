// === Module 13389: BuyNitroPurchaseButtonLegalDisclaimer ===

// Module 13389 (BuyNitroPurchaseButtonLegalDisclaimer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, MarketingURLs: closure_4 } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { disclaimer: null };
createStyles = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
createStyles.disclaimer = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx");

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
    const intl = util.intl;
    const format = intl.format;
    if (!isTrial) {
      if (isDiscounted) {
        let obj = { buttonText: ctaText, interval: PremiumUtilsDefault.formatInterval(item.interval), cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
        obj.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants.PAID_TERMS);
        let formatResult = format(util.t["3uC7vj"], obj);
        let tmp10 = require;
      } else {
        let tmp3Result = PlatformUtils;
        let t = util.t;
        obj = { paidURL: constants2.PAID_TERMS, interval: null, ctaText: null };
        const isAndroidResult = tmp3Result.isAndroid();
        tmp3Result = PremiumUtils;
        obj.interval = tmp3Result.getIntervalStringAsNoun(item.interval);
        obj.ctaText = ctaText;
        formatResult = format(tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"], obj);
        tmp10 = require;
        const tmp6 = tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"];
      }
      const obj1 = { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult };
      jsx(tmp10(4556).Text, { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult });
    }
    const tmp3Result1 = PlatformUtils;
    const isAndroidResult1 = PlatformUtils.isAndroid();
    t = { paidURL: constants2.PAID_TERMS, interval: null, cancelURL: null };
    const tmp14 = PlatformUtils.isAndroid() ? t.tINI9V : t.ZWXtAj;
    t.interval = PremiumUtils.getIntervalStringAsNoun(item.interval);
    const tmp3Result2 = PremiumUtils;
    item = HelpdeskUtilsDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
    t.cancelURL = item;
    format(tmp14, t);
  }
  tmp = closure_6();
};