// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userTrialOffer = markAsDismissed.userTrialOffer;
  let TIER_2 = markAsDismissed.fallbackPremiumType;
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let analyticsLocations;
  analyticsLocations = userTrialOffer(analyticsLocations[5])(userTrialOffer(analyticsLocations[6]).PREMIUM_TRIAL_OFFER_ACTION_SHEET).analyticsLocations;
  const effect = React.useEffect(() => {
    if (null != userTrialOffer) {
      userTrialOffer(analyticsLocations[7]);
      const obj = { location: null, trial_id: null };
      obj[0] = analyticsLocations;
      obj[1] = userTrialOffer.trialId;
      obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
      const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(userTrialOffer);
      const obj3 = userTrialOffer(analyticsLocations[8]);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = React.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    userTrialOffer(analyticsLocations[7]);
    const obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj[1] = trialId;
    obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback1 = React.useCallback(() => {
    userTrialOffer(analyticsLocations[7]);
    const obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj[1] = trialId;
    obj.track(AnalyticEvents.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    userTrialOffer(analyticsLocations[9])({ analyticsLocations });
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
  { intervalType: interval, intervalCount: null }[1] = intervalCount;
  let tmp14 = null;
  if (null != userTrialOffer) {
    let obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = callback;
    obj = { intervalDuration: null, trialOffer: null, onConfirm: null, fallbackPremiumType: null };
    obj[0] = tmp13;
    obj[1] = userTrialOffer;
    obj[2] = callback1;
    obj[3] = TIER_2;
    obj[2] = jsx(userTrialOffer(tmp3[12]), { intervalDuration: null, trialOffer: null, onConfirm: null, fallbackPremiumType: null });
    tmp14 = jsx(markAsDismissed(tmp3[11]).BottomSheet, { intervalDuration: null, trialOffer: null, onConfirm: null, fallbackPremiumType: null }, userTrialOffer.id);
  }
  return tmp14;
};