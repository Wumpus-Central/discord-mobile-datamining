// === Module 16632: ? ===

// Module 16632
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "emitChanges" /* 7207 */;
import closure_6 from "zustandStore" /* 13308 */;
import { NitroHomeSectionId } from "zustandStore" /* 13308 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
const memoResult = importAllResult.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  showReferralNotificationDot = undefined;
  dependencyMap = undefined;
  let callback;
  let obj = onPress(7977);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  let tmpResult = tmp(586);
  const items = [closure_5];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = tmpResult.useStateFromStores(items, () => closure_1_5.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  tmpResult = tmp(6261);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(1372).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: tmp(16627).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(1372).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  callback = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  callback = importAllResult.useCallback(() => {
    if (closure_3) {
      callback(closure_1_8.TAKE_ACTION);
      const obj = { scrollToSectionId: null };
      obj[0] = closure_1_7.REFERRAL_PROGRAM;
      closure_1_6.setState(obj);
    }
    onPress();
  }, items2);
  obj = { IconComponent: onPress(8107).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(onPress(1233).t.Ipxkog);
  obj[2] = callback;
  obj[3] = tmp7;
  return jsx(showReferralNotificationDot(16629), { IconComponent: onPress(8107).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;