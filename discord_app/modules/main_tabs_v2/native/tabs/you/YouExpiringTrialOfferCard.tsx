// discord_app/modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
import setDefault from "../../../../../utils/Durations.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import hooksDefault from "../../../../../../_runtime/04043_hooks.js";
import useCountdownDefault from "../../../../../hooks/useCountdown.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../premium/native/NoticeStore.tsx";
import ME from "../../../../../Constants.tsx";
import { Gradients } from "../../../../colors/native/ColorConstants.tsx";
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_11 } from "../../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ AnalyticEvents: closure_6, HelpdeskArticles: error, HorizontalGradient: closure_8, NoticeTypes: c9 } = ME);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * setDefault.Millis.SECOND;
createCacheKey = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 }, closeIcon: null, linearGradient: null, primaryCTA: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.round, gap: 4 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.round, gap: 4 };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  navigateToPremium = navigateToPremium.navigateToPremium;
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  let premiumTrialOffer;
  let shouldShowExpiringTrialOfferCard;
  let obj = hooksDefault();
  importDefault = obj.add(5, "days");
  const tmp3 = callback();
  dependencyMap = tmp3;
  obj1 = navigateToPremium(647);
  let items = [shouldShowExpiringTrialOfferCard];
  stateFromStores = obj1.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj2 = navigateToPremium(7120);
  premiumTrialOffer = obj2.usePremiumTrialOffer();
  let num = 0;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const tmp7Result = useCountdownDefault(num, closure_15);
  let tmp4Result = tmp4(16233);
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
      let obj = callback(linearGradient[11]);
      obj = { notice_type: null, trial_id: null };
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
        const articleURL = tmp(1995).getArticleURL(PREMIUM_TRIAL);
        obj = { style: null, children: null };
        obj[0] = tmp3.header;
        tmp4Result = tmp4(4107);
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
        if (tmp7Result.days > 0) {
          const intl3 = tmp4(1236).intl;
          obj1 = { days: null, trialPeriod: null, termsUrl: null };
          obj1[0] = tmp7Result.days;
          obj1[1] = result;
          obj1[2] = articleURL;
          let formatResult = intl3.format(tmp4(1236).t.GPqVWT, obj1);
        } else if (tmp7Result.hours > 0) {
          const intl2 = tmp4(1236).intl;
          obj2 = { hours: null, trialPeriod: null, termsUrl: null };
          obj2[0] = tmp7Result.hours;
          obj2[1] = result;
          obj2[2] = articleURL;
          formatResult = intl2.format(tmp4(1236).t.WFMtg1, obj2);
        } else {
          const intl = tmp4(1236).intl;
          const obj3 = { minutes: null, trialPeriod: null, termsUrl: null };
          const _Math = Math;
          obj3[0] = Math.max(tmp7Result.minutes, 1);
          obj3[1] = result;
          obj3[2] = articleURL;
          formatResult = intl.format(tmp4(1236).t.SxXB42, obj3);
        }
        const obj4 = { children: null };
        const obj5 = { variant: "heading-sm/medium", color: "text-default", children: null };
        obj5[2] = formatResult;
        obj[1] = closure_12(tmp4(4440).Text, obj5);
        const items2 = [closure_12(premiumTrialOffer, obj), , ];
        const obj6 = { style: null, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
        obj6[0] = tmp3.closeButton;
        const intl4 = tmp4(1236).intl;
        obj6[2] = intl4.string(tmp4(1236).t.cpT0Cq);
        obj6[3] = { top: 8, right: 8, bottom: 8, left: 8 };
        obj6[4] = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(linearGradient[11]);
            obj = { notice_type: null, trial_id: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            obj.track(closure_1_6.APP_NOTICE_CLOSED, obj);
          }
          obj = { untilAtLeast: callback };
          callback(linearGradient[10]).dismiss(obj);
        };
        const obj7 = { width: 16, height: 16, color: null };
        obj7[2] = tmp3.closeIcon.color;
        obj6[5] = closure_12(tmp4(1297).CloseIcon, obj7);
        items2[1] = closure_12(tmp4(5015).PressableOpacity, obj6);
        const obj8 = { style: null, text: null, onPress: null, renderIcon: null, renderLinearGradient: null };
        obj8[0] = tmp3.primaryCTA;
        const intl5 = tmp4(1236).intl;
        obj8[1] = intl5.string(tmp4(1236).t.J61px0);
        obj8[2] = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(linearGradient[11]);
            obj = { notice_type: null, trial_id: null };
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
            let PREMIUM_TIER_2_TRI_COLOR = closure_1_10.PREMIUM_TIER_0;
          } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
            PREMIUM_TIER_2_TRI_COLOR = closure_1_10.PREMIUM_TIER_2_TRI_COLOR;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Unsupported notice type: " + tmp3);
            throw error;
          }
          obj[3] = PREMIUM_TIER_2_TRI_COLOR;
          return closure_1_12(callback(linearGradient[24]), obj);
        };
        items2[2] = closure_12(tmp4(1297).ShinyButton, obj8);
        obj4[0] = items2;
        const tmp14 = closure_14;
        const tmp15 = closure_13;
        const tmp17 = premiumTrialOffer;
        const tmpResult = tmp(1995);
        const obj9 = { style: null, children: null };
        obj9[0] = navigateToPremium.style;
        obj9[1] = closure_14(closure_13, obj4);
        return closure_12(tmp(5947), obj9);
      }
    }
    return null;
  } else {
    return null;
  }
  const tmp7 = useCountdownDefault;
};