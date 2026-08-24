// === Module 15205: markAsDismissed ===

// Module 15205 (markAsDismissed)
import closure_3 from "noop" /* 19 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx");

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
      obj[1] = tmp.trialId;
      obj.track(closure_1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED, obj);
      const result = userTrialOffer(analyticsLocations[8]).acknowledgeUserTrialOffer(tmp);
      const obj3 = userTrialOffer(analyticsLocations[8]);
    }
  }, []);
  const items = [userTrialOffer, markAsDismissed];
  const effect1 = React.useEffect(() => {
    if (null == userTrialOffer) {
      markAsDismissed(closure_1_6.AUTO_DISMISS);
    }
  }, items);
  const items1 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const items2 = [analyticsLocations, markAsDismissed, userTrialOffer];
  const callback = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj[1] = trialId;
    obj.track(closure_1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = userTrialOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, trial_id: null };
    let trialId;
    if (userTrialOffer != null) {
      trialId = userTrialOffer.trialId;
    }
    obj[1] = trialId;
    obj.track(closure_1_5.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED, obj);
    markAsDismissed(closure_1_6.TAKE_ACTION);
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