// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import UserTrialActionCreatorsDefault from "../../UserTrialActionCreators.android.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

const PremiumTypes = PremiumConstants.PremiumTypes;
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let analyticsLocations;
  const tmp3 = analyticsLocations;
  const tmp4 = userTrialOffer(analyticsLocations[5]);
  analyticsLocations = tmp4(userTrialOffer(analyticsLocations[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  const effect = react.useEffect(() => {
    if (null != userTrialOffer) {
      const obj2 = { location: analyticsLocations, trial_id: userTrialOffer.trialId };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj2);
      const obj3 = UserTrialActionCreatorsDefault;
      const result = obj3.acknowledgeUserTrialOffer(userTrialOffer);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = react.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = react.useCallback(() => {
    let trialId;
    const obj = { location: analyticsLocations, trial_id: trialId };
    trialId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED = AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
    AnalyticsUtilsDefault;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    track(PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback1 = react.useCallback(() => {
    let trialId;
    const obj = { location: analyticsLocations, trial_id: trialId };
    trialId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED = AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
    AnalyticsUtilsDefault;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    track(PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    openPremiumModalDefault({ analyticsLocations });
  }, items2);
  markAsDismissed(analyticsLocations[10]);
  let interval;
  const tmp9 = markAsDismissed;
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
  ({ intervalType: interval, intervalCount: null }).intervalCount = intervalCount;
  let tmp14 = null;
  if (null != userTrialOffer) {
    BottomSheet = tmp9(tmp3[11]).BottomSheet;
    let obj2 = {
      intervalDuration: tmp13,
      trialOffer: userTrialOffer,
      onConfirm: callback1,
      fallbackPremiumType: TIER_2,
    };
    tmp14 = (
      <BottomSheet key={userTrialOffer.id} startExpanded onDismiss={callback}>
        {null}
      </BottomSheet>
    );
  }
  return tmp14;
}
