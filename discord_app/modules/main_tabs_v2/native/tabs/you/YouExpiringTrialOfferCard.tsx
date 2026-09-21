// discord_app/modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import _modDef4348 from "../../../../../../_runtime/metro/04348__.js";
import LinearGradientDefault from "../../../../../../_runtime/05198_LinearGradient.js";
import useCountdownDefault from "../../../../../hooks/useCountdown.tsx";
import NoticeActionCreatorsDefault from "../../../../../actions/NoticeActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import NoticeStore from "../../../../premium/native/NoticeStore.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({
  AnalyticEvents: metroRequire,
  HelpdeskArticles: closure_7,
  HorizontalGradient: closure_8,
  NoticeTypes: closure_9,
} = Constants);
const Gradients = fn(7674).Gradients;
let closure_11 = fn(1374).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4756);
let obj2 = {
  header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 },
  closeButton: { position: "absolute", top: 16, right: 16 },
  closeIcon: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" },
  primaryCTA: null,
};
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.primaryCTA = { borderRadius: nativeDefault.radii.round, gap: 4 };
let closure_16 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  navigateToPremium = navigateToPremium.navigateToPremium;
  let shouldShowExpiringTrialOfferCard;
  importDefault = _modDef4348().add(5, "days");
  const tmp3 = closure_16();
  dependencyMap = tmp3;
  let obj = _modDef4348();
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = navigateToPremium(563).useStateFromStores(items, () =>
    shouldShowExpiringTrialOfferCard.getNoticeType(),
  );
  let obj2 = navigateToPremium(563);
  const premiumTrialOffer = navigateToPremium(7689).usePremiumTrialOffer();
  let num = 0;
  let obj3 = navigateToPremium(7689);
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const time = useCountdownDefault(num, closure_15);
  shouldShowExpiringTrialOfferCard = navigateToPremium(17271).useShouldShowExpiringTrialOfferCard();
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
      const obj2 = { notice_type: stateFromStores, trial_id: premiumTrialOffer.trialId };
      AnalyticsUtilsDefault.track(constants.APP_NOTICE_VIEWED, obj2);
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
        const articleURL = tmp(2108).getArticleURL(PREMIUM_TRIAL);
        let obj4 = { style: tmp3.header, children: null };
        const tmp16 = premiumTrialOffer;
        const tmpResult = tmp(2108);
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        const obj5 = { intervalType: interval, intervalCount: null };
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        let intervalCount;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        obj5.intervalCount = intervalCount;
        const result = tmp4(4414).formatIntervalDuration(obj5);
        if (time.days > 0) {
          const intl3 = tmp4(1115).intl;
          const obj6 = { days: time.days, trialPeriod: result, termsUrl: articleURL };
          let formatResult = intl3.format(tmp4(1115).t.GPqVWT, obj6);
        } else if (time.hours > 0) {
          const intl2 = tmp4(1115).intl;
          const obj7 = { hours: time.hours, trialPeriod: result, termsUrl: articleURL };
          formatResult = intl2.format(tmp4(1115).t.WFMtg1, obj7);
        } else {
          const intl = tmp4(1115).intl;
          const obj8 = { minutes: null, trialPeriod: null, termsUrl: null };
          const _Math = Math;
          obj8.minutes = Math.max(time.minutes, 1);
          obj8.trialPeriod = result;
          obj8.termsUrl = articleURL;
          formatResult = intl.format(tmp4(1115).t.SxXB42, obj8);
        }
        const obj9 = { children: null };
        const obj10 = { variant: "heading-sm/medium", color: "text-default", children: formatResult };
        obj4.children = closure_12(tmp4(4752).Text, obj10);
        const items2 = [closure_12(tmp16, obj4), ,];
        const obj11 = {
          style: tmp3.closeButton,
          accessibilityRole: "button",
          accessibilityLabel: null,
          hitSlop: null,
          onPress: null,
          children: null,
        };
        const intl4 = tmp4(1115).intl;
        obj11.accessibilityLabel = intl4.string(tmp4(1115).t.cpT0Cq);
        obj11.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        obj11.onPress = function onPress() {
          if (null != stateFromStores) {
            const obj2 = { notice_type: tmp, trial_id: tmp2 };
            AnalyticsUtilsDefault.track(constants.APP_NOTICE_CLOSED, obj2);
          }
          NoticeActionCreatorsDefault.dismiss({ untilAtLeast });
          const obj4 = { untilAtLeast };
        };
        const size = { width: 16, height: 16, color: tmp3.closeIcon.color };
        obj11.children = closure_12(tmp4(1177).CloseIcon, size);
        items2[1] = closure_12(tmp4(5339).PressableOpacity, obj11);
        const obj12 = {
          style: tmp3.primaryCTA,
          text: null,
          onPress: null,
          renderIcon: null,
          renderLinearGradient: null,
        };
        const intl5 = tmp4(1115).intl;
        obj12.text = intl5.string(tmp4(1115).t.J61px0);
        obj12.onPress = function onPress() {
          if (null != stateFromStores) {
            const obj2 = { notice_type: tmp, trial_id: tmp2 };
            AnalyticsUtilsDefault.track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
          }
          navigateToPremium();
        };
        obj12.renderIcon = function renderIcon() {
          return closure_1_12(navigateToPremium(linearGradient[23]).NitroWheelIcon, { color: "white", size: "sm" });
        };
        obj12.renderLinearGradient = function renderLinearGradient() {
          const obj = { style: null, start: constants3.START, end: constants3.END, colors: null };
          const items = [linearGradient.linearGradient];
          obj.style = items;
          if (React7.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
            let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
            PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unsupported notice type: " + stateFromStores);
            throw error;
          }
          obj.colors = PREMIUM_TIER_2_TRI_COLOR;
          return closure_2_12(LinearGradientDefault, obj);
        };
        items2[2] = closure_12(tmp4(1177).ShinyButton, obj12);
        obj9.children = items2;
        const tmp4Result2 = tmp4(4414);
        const obj13 = { style: navigateToPremium.style, children: closure_14(closure_13, obj9) };
        return closure_12(tmp(7452), obj13);
      }
    }
    return null;
  } else {
    return null;
  }
  const tmp4Result = navigateToPremium(17271);
}
