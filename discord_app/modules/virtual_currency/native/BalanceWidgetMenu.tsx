// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonEllipsis from "../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod9641 from "../hooks/index.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import useOrbBalanceEntrypoint from "useOrbBalanceEntrypoint.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function OrbsBalanceRow(isBusy) {
  let flag = isBusy.isBusy;
  ({ onPress, accessibilityLabel, trailing } = isBusy);
  if (flag === undefined) {
    flag = false;
  }
  const obj = {
    label: null,
    accessibilityLabel: null,
    accessibilityState: null,
    onPress: null,
    trailing: null,
    start: true,
    end: true,
  };
  const obj2 = { variant: "body-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.gGtZpz);
  obj.label = jsx(Text_Text.Text, { variant: "body-sm/semibold", color: "text-default", children: null });
  obj.accessibilityLabel = accessibilityLabel;
  let obj3;
  if (flag) {
    obj3 = { busy: true };
  }
  obj.accessibilityState = obj3;
  obj.onPress = onPress;
  obj.trailing = trailing;
  return jsx(TableRow.TableRow, {
    label: null,
    accessibilityLabel: null,
    accessibilityState: null,
    onPress: null,
    trailing: null,
    start: true,
    end: true,
  });
}
class OrbsOnboardingMenuDismissibleContent {
  constructor() {
    obj = { contentTypes: null, groupName: null, children: null };
    tmp = closure_1(closure_2[10]);
    items = [];
    items[0] = closure_0(closure_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = closure_9.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (
        markAsDismissed.visibleContent ===
        markAsDismissed(4973).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
      ) {
        let obj = { accessibilityLabel: null, onPress: null, trailing: null };
        const intl = tmp(1113).intl;
        obj.accessibilityLabel = intl.string(tmp(1113).t.Kt2QDh);
        obj.onPress = function onPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          const obj2 = QuestUtils;
          obj2.openQuestHome({
            filter: constants3.VIRTUAL_CURRENCY,
            fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
          });
        };
        obj.trailing = closure_11(closure_1(18022), {});
        return closure_11(closure_12, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(orbWalletEntryRowRef) {
  let str;
  str = str(9641).useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  let obj = str(9641);
  const isOrbWalletEntrypointEnabled = str(17207).useIsOrbWalletEntrypointEnabled({
    location: "MobileBalanceWidgetMenu",
  });
  items = [str, isOrbWalletEntrypointEnabled];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj3 = {
      balance: str,
      primaryButtonConfig: null,
      secondaryButtonConfig: null,
      source: null,
      analyticsPage: null,
    };
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj4.buttonText = intl.string(util.t.WrzJBf);
    obj4.onButtonPress = function onButtonPress() {
      const obj = isOrbWalletEntrypointEnabled(1252);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_SHOP",
        source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_SHOP", source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN, balance };
      isOrbWalletEntrypointEnabled(5374).hideActionSheet();
      const obj3 = isOrbWalletEntrypointEnabled(5374);
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      items = [isOrbWalletEntrypointEnabled(7412).COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = isOrbWalletEntrypointEnabled(7412).COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(7795).openCollectiblesShopMobile(obj5);
    };
    obj3.primaryButtonConfig = obj4;
    let obj5 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj5.buttonText = intl2.string(util.t.SymzJC);
    obj5.onButtonPress = function onButtonPress() {
      const obj = isOrbWalletEntrypointEnabled(1252);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_QUEST_HOME",
        source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN, balance };
      isOrbWalletEntrypointEnabled(5374).hideActionSheet();
      const obj3 = isOrbWalletEntrypointEnabled(5374);
      const obj4 = str(9769);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: str(6839).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    obj3.analyticsPage = constants2.USER_PROFILE;
    let result = useOrbBalanceEntrypoint.openBalanceWidgetActionSheet(isOrbWalletEntrypointEnabled, obj3);
  }, items);
  str(17207);
  if (isOrbWalletEntrypointEnabled) {
    let obj3 = { ref: orbWalletEntryRowRef.orbWalletEntryRowRef, collapsable: false, children: null };
    let obj4 = { balance: str, notificationType: tmp6, onPress: callback };
    obj3.children = jsx(tmp(18023).OrbWalletEntryRow, { balance: str, notificationType: tmp6, onPress: callback });
    let tmp7Result = (
      <View ref={orbWalletEntryRowRef.orbWalletEntryRowRef} collapsable={false}>
        {null}
      </View>
    );
  } else {
    let intl = tmp(1113).intl;
    let str2;
    if (str != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    let obj5 = { accessibilityLabel: null, onPress: null, trailing: null };
    const obj6 = { balance: str2 };
    obj5.accessibilityLabel = intl.formatToPlainString(tmp(1113).t.zPaLL9, obj6);
    obj5.onPress = callback;
    const obj7 = { balance: str, onPress: callback, accessible: false };
    obj5.trailing = jsx(isOrbWalletEntrypointEnabled(14746), { balance: str, onPress: callback, accessible: false });
    tmp7Result = <OrbsBalanceRow accessibilityLabel={null} onPress={null} trailing={null} />;
  }
  return tmp7Result;
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: closure_6 } = Constants);
let closure_7 = fn(1074).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(4986);
({ ContentDismissActionType: closure_8, DismissibleContentGroupName: closure_9 } = DismissibleContentConstants);
const RewardFilterTypes = fn(6836).RewardFilterTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(orbWalletEntryRowRef) {
  const balance = _mod9641.useFetchVirtualCurrencyBalance().balance;
  if (null == balance) {
    const obj2 = { accessibilityLabel: null, trailing: null, isBusy: true };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cKwv4k);
    obj2.trailing = jsx(ButtonEllipsis.Ellipsis, { variant: "primary", size: "sm" });
    let tmp4Result = <OrbsBalanceRow accessibilityLabel={null} trailing={null} isBusy />;
  } else {
    let result = balance > 0;
    if (!result) {
      result = DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
      );
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    if (result) {
      const obj3 = { orbWalletEntryRowRef: orbWalletEntryRowRef.orbWalletEntryRowRef };
      tmp4Result = <BalanceWidgetMenu orbWalletEntryRowRef={orbWalletEntryRowRef.orbWalletEntryRowRef} />;
    } else {
      tmp4Result = <OrbsOnboardingMenuDismissibleContent />;
    }
  }
  return tmp4Result;
}
export { OrbsOnboardingMenuDismissibleContent };
export function useOpenOrbWalletFromYouScreen() {
  balance = balance(9641).useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  const obj = balance(9641);
  const isOrbWalletEntrypointEnabled = balance(17207).useIsOrbWalletEntrypointEnabled({
    location: "MobileBalanceWidgetMenu",
  });
  items = [balance, isOrbWalletEntrypointEnabled];
  const obj2 = balance(17207);
  return {
    balance,
    isOrbchievementsEnabled: isOrbWalletEntrypointEnabled,
    openOrbWallet: noop.useCallback(() => {
      AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
      let obj3 = {
        balance: str,
        primaryButtonConfig: null,
        secondaryButtonConfig: null,
        source: null,
        analyticsPage: null,
      };
      let obj4 = { buttonText: null, onButtonPress: null };
      const intl = util.intl;
      obj4.buttonText = intl.string(util.t.WrzJBf);
      obj4.onButtonPress = function onButtonPress() {
        const obj = isOrbWalletEntrypointEnabled(1252);
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
          type: "GO_TO_SHOP",
          source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN,
          balance,
        });
        const obj2 = { type: "GO_TO_SHOP", source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN, balance };
        isOrbWalletEntrypointEnabled(5374).hideActionSheet();
        const obj3 = isOrbWalletEntrypointEnabled(5374);
        const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
        items = [isOrbWalletEntrypointEnabled(7412).COLLECTIBLES_SHOP];
        obj5.analyticsLocations = items;
        obj5.analyticsSource = isOrbWalletEntrypointEnabled(7412).COLLECTIBLES_SHOP;
        obj5.screen = constants2.ORBS;
        const result = str(7795).openCollectiblesShopMobile(obj5);
      };
      obj3.primaryButtonConfig = obj4;
      let obj5 = { buttonText: null, onButtonPress: null };
      const intl2 = util.intl;
      obj5.buttonText = intl2.string(util.t.SymzJC);
      obj5.onButtonPress = function onButtonPress() {
        const obj = isOrbWalletEntrypointEnabled(1252);
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
          type: "GO_TO_QUEST_HOME",
          source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN,
          balance,
        });
        const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbWalletEntrypointEnabled(7412).YOU_SCREEN, balance };
        isOrbWalletEntrypointEnabled(5374).hideActionSheet();
        const obj3 = isOrbWalletEntrypointEnabled(5374);
        const obj4 = str(9769);
        obj4.openQuestHome({
          mergeExistingRoutes: true,
          filter: constants3.VIRTUAL_CURRENCY,
          fromContent: str(6839).QuestContent.ORBS_BALANCE_MENU,
        });
      };
      obj3.secondaryButtonConfig = obj5;
      obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
      obj3.analyticsPage = constants2.USER_PROFILE;
      let result = useOrbBalanceEntrypoint.openBalanceWidgetActionSheet(isOrbWalletEntrypointEnabled, obj3);
    }, items),
  };
}
export function useIsOrbWalletEntryRowShown() {
  let isOrbWalletEntrypointEnabled = useOrbBalanceEntrypoint.useIsOrbWalletEntrypointEnabled({
    location: "MobileBalanceWidgetMenu",
  });
  const balance = _mod9641.useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  if (isOrbWalletEntrypointEnabled) {
    isOrbWalletEntrypointEnabled = null != balance;
  }
  if (isOrbWalletEntrypointEnabled) {
    let result = balance > 0;
    if (!result) {
      result = DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
      );
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    isOrbWalletEntrypointEnabled = result;
  }
  return isOrbWalletEntrypointEnabled;
}
