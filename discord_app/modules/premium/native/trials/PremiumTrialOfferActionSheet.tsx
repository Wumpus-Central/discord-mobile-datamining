// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import UserTrialActionCreatorsDefault from "../../UserTrialActionCreators.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let analyticsLocations;
  analyticsLocations = userTrialOffer(analyticsLocations[5])(userTrialOffer(analyticsLocations[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  const effect = noop.useEffect(() => {
    if (null != userTrialOffer) {
      const obj = { location: analyticsLocations, trial_id: userTrialOffer.trialId };
      obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
      const result = UserTrialActionCreatorsDefault.acknowledgeUserTrialOffer(userTrialOffer);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = noop.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = noop.useCallback(() => {
    const obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj.trial_id = trialId;
    obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback1 = noop.useCallback(() => {
    const obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj.trial_id = trialId;
    obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    openPremiumModalDefault({ analyticsLocations });
  }, items2);
  markAsDismissed(analyticsLocations[10]);
  let interval;
  if (userTrialOffer != null) {
    const subscriptionTrial = userTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      interval = subscriptionTrial.interval;
    }
  }
  let intervalCount;
  if (userTrialOffer != null) {
    const subscriptionTrial2 = userTrialOffer.subscriptionTrial;
    if (subscriptionTrial2 != null) {
      intervalCount = subscriptionTrial2.intervalCount;
    }
  }
  { intervalType: interval, intervalCount: null }.intervalCount = intervalCount;
  let tmp14 = null;
  if (null != userTrialOffer) {
    let obj = { startExpanded: true, onDismiss: callback, children: null };
    obj = { intervalDuration: tmp13, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 };
    obj.children = jsx(userTrialOffer(tmp3[12]), { intervalDuration: tmp13, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 });
    tmp14 = jsx(markAsDismissed(tmp3[11]).BottomSheet, { intervalDuration: tmp13, trialOffer: userTrialOffer, onConfirm: callback1, fallbackPremiumType: TIER_2 }, userTrialOffer.id);
  }
  return tmp14;
};