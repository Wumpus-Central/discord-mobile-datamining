// === Module 16804: YouExpiringTrialOfferCard ===

// Module 16804 (YouExpiringTrialOfferCard)
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import _modDef4153 from "module_4153" /* 4153 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useCountdownDefault from "useCountdown" /* 7439 */;
import NoticeActionCreatorsDefault from "NoticeActionCreators" /* 16805 */;
import noop from "module_19" /* 19 */;
import NoticeStore from "NoticeStore" /* 13722 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, HelpdeskArticles: closure_7, HorizontalGradient: closure_8, NoticeTypes: closure_9 } = Constants);
const Gradients = fn(7432).Gradients;
let closure_11 = fn(1373).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
fn(4560);
let createStyles = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 }, closeIcon: null, linearGradient: null, primaryCTA: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.closeIcon = createStyles;
createStyles.linearGradient = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createStyles.primaryCTA = { borderRadius: nativeDefault.radii.round, gap: 4 };
let closure_16 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  navigateToPremium = navigateToPremium.navigateToPremium;
  let shouldShowExpiringTrialOfferCard;
  let obj = _modDef4153();
  importDefault = obj.add(5, "days");
  const tmp3 = closure_16();
  dependencyMap = tmp3;
  let obj1 = navigateToPremium(563);
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = obj1.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj2 = navigateToPremium(7447);
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
  let tmp4Result = tmp4(16803);
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
      const obj = { notice_type: stateFromStores, trial_id: premiumTrialOffer.trialId };
      obj.track(constants.APP_NOTICE_VIEWED, obj);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        if (premiumTrialOffer.trialId === closure_11) {
          let PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
        }
        const articleURL = tmp(2024).getArticleURL(PREMIUM_TRIAL);
        obj = { style: tmp3.header, children: null };
        tmp4Result = tmp4(4218);
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        obj = { intervalType: interval, intervalCount: null };
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        let intervalCount;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        obj.intervalCount = intervalCount;
        const result = tmp4Result.formatIntervalDuration(obj);
        if (time.days > 0) {
          const intl3 = tmp4(1114).intl;
          obj1 = { days: time.days, trialPeriod: result, termsUrl: articleURL };
          let formatResult = intl3.format(tmp4(1114).t.GPqVWT, obj1);
        } else if (time.hours > 0) {
          const intl2 = tmp4(1114).intl;
          obj2 = { hours: time.hours, trialPeriod: result, termsUrl: articleURL };
          formatResult = intl2.format(tmp4(1114).t.WFMtg1, obj2);
        } else {
          const intl = tmp4(1114).intl;
          const obj3 = { minutes: null, trialPeriod: null, termsUrl: null };
          const _Math = Math;
          obj3.minutes = Math.max(time.minutes, 1);
          obj3.trialPeriod = result;
          obj3.termsUrl = articleURL;
          formatResult = intl.format(tmp4(1114).t.SxXB42, obj3);
        }
        const obj4 = { children: null };
        const obj5 = { variant: "heading-sm/medium", color: "text-default", children: formatResult };
        obj.children = closure_12(tmp4(4556).Text, obj5);
        const items2 = [closure_12(premiumTrialOffer, obj), , ];
        const obj6 = { style: tmp3.closeButton, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
        const intl4 = tmp4(1114).intl;
        obj6.accessibilityLabel = intl4.string(tmp4(1114).t.cpT0Cq);
        obj6.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        obj6.onPress = function onPress() {
          if (null != stateFromStores) {
            let obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(constants.APP_NOTICE_CLOSED, obj);
          }
          obj = { untilAtLeast };
          NoticeActionCreatorsDefault.dismiss(obj);
        };
        const size = { width: 16, height: 16, color: tmp3.closeIcon.color };
        obj6.children = closure_12(tmp4(1178).CloseIcon, size);
        items2[1] = closure_12(tmp4(5123).PressableOpacity, obj6);
        const obj7 = { style: tmp3.primaryCTA, text: null, onPress: null, renderIcon: null, renderLinearGradient: null };
        const intl5 = tmp4(1114).intl;
        obj7.text = intl5.string(tmp4(1114).t.J61px0);
        obj7.onPress = function onPress() {
          if (null != stateFromStores) {
            const obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj);
          }
          navigateToPremium();
        };
        obj7.renderIcon = function renderIcon() {
          return closure_1_12(navigateToPremium(linearGradient[23]).NitroWheelIcon, { color: "white", size: "sm" });
        };
        obj7.renderLinearGradient = function renderLinearGradient() {
          const obj = { style: null, start: constants3.START, end: constants3.END, colors: null };
          const items = [linearGradient.linearGradient];
          obj.style = items;
          if (React7.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
            let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
            PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unsupported notice type: " + tmp3);
            throw error;
          }
          obj.colors = PREMIUM_TIER_2_TRI_COLOR;
          return closure_2_12(LinearGradientDefault, obj);
        };
        items2[2] = closure_12(tmp4(1178).ShinyButton, obj7);
        obj4.children = items2;
        const tmpResult = tmp(2024);
        const obj8 = { style: navigateToPremium.style, children: closure_14(closure_13, obj4) };
        return closure_12(tmp(7207), obj8);
      }
    }
    return null;
  } else {
    return null;
  }
};