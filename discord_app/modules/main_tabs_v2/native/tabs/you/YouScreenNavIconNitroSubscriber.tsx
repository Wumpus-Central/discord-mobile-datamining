// === Module 16909: YouScreenNavIconNitroSubscriber ===

// Module 16909 (YouScreenNavIconNitroSubscriber)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7555 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13480 */;

const require = fn;
const NitroHomeSectionId = fn(13480).NitroHomeSectionId;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default noop.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let obj = onPress(8161);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  let tmpResult = tmp(504);
  const items = [ReferralTrialStore];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  tmpResult = tmp(7491);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(1943).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: tmp(16904).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = _slicedToArray(tmpResult.useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(1943).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  const callback = noop.useCallback(() => {
    if (closure_3) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
      const obj = { scrollToSectionId: NitroHomeSectionId.REFERRAL_PROGRAM };
      PremiumNitroNavigationStore.setState(obj);
    }
    onPress();
  }, items2);
  obj = { IconComponent: onPress(8785).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
  const intl = tmp(1114).intl;
  obj.accessibilityLabel = intl.string(onPress(1114).t.Ipxkog);
  obj.onPress = callback;
  obj.showRedDot = tmp7;
  return jsx(showReferralNotificationDot(16906), { IconComponent: onPress(8785).NitroWheelIcon, accessibilityLabel: null, onPress: null, showRedDot: null });
});