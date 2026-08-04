// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
import noop from "noop";
import { PremiumTypes } from "GuildFeatures";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

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
      let obj = userTrialOffer(analyticsLocations[7]);
      obj = { location: null, trial_id: null };
      obj[0] = analyticsLocations;
      obj[1] = tmp.trial_id;
      obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
      const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(tmp);
      const obj3 = userTrialOffer(analyticsLocations[8]);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = React.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(outer1_6.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: null };
    let trial_id;
    if (userTrialOffer != null) {
      trial_id = userTrialOffer.trial_id;
    }
    obj[1] = trial_id;
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_6.USER_DISMISS);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: null };
    let trial_id;
    if (userTrialOffer != null) {
      trial_id = userTrialOffer.trial_id;
    }
    obj[1] = trial_id;
    obj.track(outer1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(outer1_6.TAKE_ACTION);
    userTrialOffer(analyticsLocations[9])({ analyticsLocations });
  }, items2);
  markAsDismissed(analyticsLocations[10]);
  let interval;
  if (userTrialOffer != null) {
    const subscription_trial = userTrialOffer.subscription_trial;
    if (subscription_trial != null) {
      interval = subscription_trial.interval;
    }
  }
  let interval_count;
  if (userTrialOffer != null) {
    const subscription_trial2 = userTrialOffer.subscription_trial;
    if (subscription_trial2 != null) {
      interval_count = subscription_trial2.interval_count;
    }
  }
  { intervalType: interval, intervalCount: null }[1] = interval_count;
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