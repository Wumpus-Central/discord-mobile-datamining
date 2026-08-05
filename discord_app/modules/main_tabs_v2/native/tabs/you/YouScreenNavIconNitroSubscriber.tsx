// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import emitChanges from "emitChanges";
import zustandStore from "zustandStore";
import { NitroHomeSectionId } from "zustandStore";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
const memoResult = importAllResult.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  showReferralNotificationDot = undefined;
  let dependencyMap;
  let callback;
  let obj = onPress(7944);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  let tmpResult = tmp(589);
  const items = [emitChanges];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = tmpResult.useStateFromStores(items, () => outer1_5.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  tmpResult = tmp(5916);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(1358).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: tmp(15721).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(1358).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  callback = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  callback = importAllResult.useCallback(() => {
    if (c3) {
      _undefined(outer1_8.TAKE_ACTION);
      const obj = { scrollToSectionId: null };
      obj[0] = outer1_7.REFERRAL_PROGRAM;
      outer1_6.setState(obj);
    }
    onPress();
  }, items2);
  obj = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  obj[0] = onPress(7597).NitroWheelIcon;
  const intl = tmp(1236).intl;
  obj[1] = intl.string(onPress(1236).t.Ipxkog);
  obj[2] = callback;
  obj[3] = tmp7;
  return jsx(showReferralNotificationDot(15723), { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null });
});
const result = require("emitChanges").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;