// === Module 16023: YouExpiringTrialOfferCard ===

// Module 16023 (YouExpiringTrialOfferCard)
import obj132Default from "obj132" /* 687 */;
import ThemesDefault from "Themes" /* 712 */;
import tDefault from "t" /* 3975 */;
import useCountdownDefault from "useCountdown" /* 7410 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import clearDismissUntil from "clearDismissUntil" /* 13270 */;
import ME from "ME" /* 676 */;
import { Gradients } from "items" /* 7403 */;
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_11 } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ AnalyticEvents: closure_6, HelpdeskArticles: error, HorizontalGradient: closure_8, NoticeTypes: c9 } = ME);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * obj132Default.Millis.SECOND;
const createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.round, gap: 4 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  navigateToPremium = navigateToPremium.navigateToPremium;
  let shouldShowExpiringTrialOfferCard;
  let obj = tDefault();
  importDefault = obj.add(5, "days");
  const tmp3 = callback();
  dependencyMap = tmp3;
  obj1 = navigateToPremium(647);
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = obj1.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj2 = navigateToPremium(7418);
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  let num = 0;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const time = useCountdownDefault(num, closure_15);
  let tmp4Result = tmp4(16022);
  shouldShowExpiringTrialOfferCard = tmp4Result.useShouldShowExpiringTrialOfferCard();
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = stateFromStores.useEffect(() => {
    let tmp = shouldShowExpiringTrialOfferCard;
    if (shouldShowExpiringTrialOfferCard) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != premiumTrialOffer;
    }
    if (tmp) {
      callback(linearGradient[11]);
      const obj = { notice_type: null, trial_id: null };
      obj[0] = stateFromStores;
      obj[1] = premiumTrialOffer.trialId;
      obj.track(closure_1_6.APP_NOTICE_VIEWED, obj);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        if (premiumTrialOffer.trialId === closure_11) {
          let PREMIUM_TRIAL = constants.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants.PREMIUM_TRIAL;
        }
        const articleURL = tmp(1993).getArticleURL(PREMIUM_TRIAL);
        obj = { style: null, children: null };
        obj[0] = tmp3.header;
        tmp4Result = tmp4(4039);
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        obj = { intervalType: null, intervalCount: null };
        obj[0] = interval;
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        let intervalCount;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        obj[1] = intervalCount;
        const result = tmp4Result.formatIntervalDuration(obj);
        if (time.days > 0) {
          const intl3 = tmp4(1236).intl;
          obj1 = { days: null, trialPeriod: null, termsUrl: null };
          obj1[0] = time.days;
          obj1[1] = result;
          obj1[2] = articleURL;
          let formatResult = intl3.format(tmp4(1236).t.GPqVWT, obj1);
        } else if (time.hours > 0) {
          const intl2 = tmp4(1236).intl;
          obj2 = { hours: null, trialPeriod: null, termsUrl: null };
          obj2[0] = time.hours;
          obj2[1] = result;
          obj2[2] = articleURL;
          formatResult = intl2.format(tmp4(1236).t.WFMtg1, obj2);
        } else {
          const intl = tmp4(1236).intl;
          let obj3 = { minutes: null, trialPeriod: null, termsUrl: null };
          const _Math = Math;
          obj3[0] = Math.max(time.minutes, 1);
          obj3[1] = result;
          obj3[2] = articleURL;
          formatResult = intl.format(tmp4(1236).t.SxXB42, obj3);
        }
        const obj4 = { children: null };
        const obj5 = { variant: "heading-sm/medium", color: "text-default", children: null };
        obj5[2] = formatResult;
        obj[1] = callback(tmp4(4734).Text, obj5);
        const items2 = [callback(premiumTrialOffer, obj), , ];
        const obj6 = { style: null, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
        obj6[0] = tmp3.closeButton;
        const intl4 = tmp4(1236).intl;
        obj6[2] = intl4.string(tmp4(1236).t.cpT0Cq);
        obj6[3] = { top: 8, right: 8, bottom: 8, left: 8 };
        obj6[4] = function onPress() {
          if (null != stateFromStores) {
            callback(linearGradient[11]);
            let obj = { notice_type: null, trial_id: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            obj.track(closure_1_6.APP_NOTICE_CLOSED, obj);
          }
          obj = { untilAtLeast: callback };
          callback(linearGradient[10]).dismiss(obj);
          const obj3 = callback(linearGradient[10]);
        };
        const obj7 = { width: 16, height: 16, color: null };
        obj7[2] = tmp3.closeIcon.color;
        obj6[5] = callback(tmp4(1297).CloseIcon, obj7);
        items2[1] = callback(tmp4(5433).PressableOpacity, obj6);
        const obj8 = { style: null, text: null, onPress: null, renderIcon: null, renderLinearGradient: null };
        obj8[0] = tmp3.primaryCTA;
        const intl5 = tmp4(1236).intl;
        obj8[1] = intl5.string(tmp4(1236).t.J61px0);
        obj8[2] = function onPress() {
          if (null != stateFromStores) {
            callback(linearGradient[11]);
            const obj = { notice_type: null, trial_id: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            obj.track(closure_1_6.APP_NOTICE_PRIMARY_CTA_OPENED, obj);
          }
          navigateToPremium();
        };
        obj8[3] = function renderIcon() {
          return callback2(navigateToPremium(linearGradient[23]).NitroWheelIcon, { color: "white", size: "sm" });
        };
        obj8[4] = function renderLinearGradient() {
          const obj = { style: items, start: closure_1_8.START, end: closure_1_8.END, colors: null };
          items = [linearGradient.linearGradient];
          if (closure_1_9.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
            let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
            PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Unsupported notice type: " + stateFromStores);
            throw error;
          }
          obj[3] = PREMIUM_TIER_2_TRI_COLOR;
          return closure_1_12(callback(linearGradient[24]), obj);
        };
        items2[2] = callback(tmp4(1297).ShinyButton, obj8);
        obj4[0] = items2;
        const tmpResult = tmp(1993);
        const obj9 = { style: null, children: null };
        obj9[0] = navigateToPremium.style;
        obj9[1] = callback2(closure_13, obj4);
        return callback(tmp(7185), obj9);
      }
    }
    return null;
  } else {
    return null;
  }
};