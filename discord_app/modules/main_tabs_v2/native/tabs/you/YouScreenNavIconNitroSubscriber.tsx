// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReferralTrialStore from "../../../../premium/ReferralTrialStore.tsx";
import PremiumNitroNavigationStore from "../../../../user_settings/premium/native/PremiumNitroNavigationStore.tsx";

const require = fn;
const NitroHomeSectionId = fn(13756).NitroHomeSectionId;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default noop.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  obj = onPress(8401);
  const items = [ReferralTrialStore];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = onPress(504).useStateFromStores(
    items,
    () => ReferralTrialStore.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }),
    items1,
  );
  const tmpResult = onPress(504);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2028).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const tmpResult2 = onPress(7716);
  const tmp5 = _slicedToArray(
    tmpResult2.useSelectedTimeRecurringDismissibleContent(
      prop,
      { cooldownDurationMs: onPress(17335).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS },
      undefined,
      true,
    ),
    2,
  );
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(2028).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
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
  const obj3 = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const obj2 = { cooldownDurationMs: onPress(17335).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  obj3.IconComponent = onPress(9016).NitroWheelIcon;
  const intl = tmp(1115).intl;
  obj3.accessibilityLabel = intl.string(onPress(1115).t.Ipxkog);
  obj3.onPress = callback;
  obj3.showRedDot = tmp7;
  return jsx(showReferralNotificationDot(17337), {
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
    showRedDot: null,
  });
});
