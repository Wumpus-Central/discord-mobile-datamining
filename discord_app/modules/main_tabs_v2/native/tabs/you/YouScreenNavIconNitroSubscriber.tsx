// === Module 16016: ? ===

// Module 16016
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import emitChanges from "emitChanges" /* 7423 */;
import zustandStore from "zustandStore" /* 12849 */;
import { NitroHomeSectionId } from "zustandStore" /* 12849 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
const memoResult = importAllResult.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  let callback;
  let obj = onPress(8274);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  let tmpResult = tmp(589);
  const items = [closure_5];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = tmpResult.useStateFromStores(items, () => closure_1_5.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  tmpResult = tmp(7366);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(1377).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: tmp(16011).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(1377).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  const items2 = [tmp7, tmp5[1], onPress];
  callback = importAllResult.useCallback(() => {
    if (closure_3) {
      callback(ContentDismissActionType.TAKE_ACTION);
      const obj = { scrollToSectionId: null };
      obj[0] = NitroHomeSectionId.REFERRAL_PROGRAM;
      closure_1_6.setState(obj);
    }
    onPress();
  }, items2);
  obj = { IconComponent: onPress(7988).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(onPress(1236).t.Ipxkog);
  obj[2] = callback;
  obj[3] = tmp7;
  return jsx(showReferralNotificationDot(16013), { IconComponent: onPress(7988).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null });
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;