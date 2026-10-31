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
import _mod9553 from "../hooks/index.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
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
  const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.gGtZpz);
  obj.label = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: null });
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
    tmp = closure_1(closure_2[9]);
    items = [];
    items[0] = closure_0(closure_2[10]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = closure_8.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (
        markAsDismissed.visibleContent ===
        markAsDismissed(4847).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
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
        obj.trailing = closure_10(closure_1(17695), {});
        return closure_10(closure_11, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu() {
  str = str(9553).useFetchVirtualCurrencyBalance().balance;
  let obj = str(9553);
  const orbBalanceEntrypoint = str(16887).useOrbBalanceEntrypoint({ location: "MobileBalanceWidgetMenu" });
  const openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  let items = [str, openBalanceWidgetActionSheet];
  ({ isOrbchievementsEnabled, notificationType } = orbBalanceEntrypoint);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj2 = {
      balance: str,
      primaryButtonConfig: null,
      secondaryButtonConfig: null,
      source: null,
      analyticsPage: null,
    };
    let obj3 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj3.buttonText = intl.string(util.t.WrzJBf);
    obj3.onButtonPress = function onButtonPress() {
      const obj = openBalanceWidgetActionSheet(1252);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_SHOP",
        source: openBalanceWidgetActionSheet(7351).YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_SHOP", source: openBalanceWidgetActionSheet(7351).YOU_SCREEN, balance };
      openBalanceWidgetActionSheet(5258).hideActionSheet();
      const obj3 = openBalanceWidgetActionSheet(5258);
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [openBalanceWidgetActionSheet(7351).COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = openBalanceWidgetActionSheet(7351).COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(7719).openCollectiblesShopMobile(obj5);
    };
    obj2.primaryButtonConfig = obj3;
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj4.buttonText = intl2.string(util.t.SymzJC);
    obj4.onButtonPress = function onButtonPress() {
      const obj = openBalanceWidgetActionSheet(1252);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_QUEST_HOME",
        source: openBalanceWidgetActionSheet(7351).YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: openBalanceWidgetActionSheet(7351).YOU_SCREEN, balance };
      openBalanceWidgetActionSheet(5258).hideActionSheet();
      const obj3 = openBalanceWidgetActionSheet(5258);
      const obj4 = str(9678);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: str(6784).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj2.secondaryButtonConfig = obj4;
    obj2.source = AnalyticsLocationDefault.YOU_SCREEN;
    obj2.analyticsPage = constants2.USER_PROFILE;
    openBalanceWidgetActionSheet(obj2);
  }, items);
  if (isOrbchievementsEnabled) {
    let obj3 = { balance: str, notificationType, onPress: callback };
    let tmp5Result = jsx(tmp(17696).OrbWalletEntryRow, { balance: str, notificationType, onPress: callback });
  } else {
    let intl = tmp(1113).intl;
    let str2;
    if (str != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    let obj4 = { accessibilityLabel: null, onPress: null, trailing: null };
    let obj5 = { balance: str2 };
    obj4.accessibilityLabel = intl.formatToPlainString(tmp(1113).t.zPaLL9, obj5);
    obj4.onPress = callback;
    const obj6 = { balance: str, onPress: callback, accessible: false };
    obj4.trailing = jsx(openBalanceWidgetActionSheet(14497), { balance: str, onPress: callback, accessible: false });
    tmp5Result = <OrbsBalanceRow accessibilityLabel={null} onPress={null} trailing={null} />;
  }
  return tmp5Result;
}
const Constants = fn(1072);
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
let closure_6 = fn(1074).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(4860);
({ ContentDismissActionType: closure_7, DismissibleContentGroupName: closure_8 } = DismissibleContentConstants);
const RewardFilterTypes = fn(6781).RewardFilterTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  const balance = _mod9553.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const obj2 = { accessibilityLabel: null, trailing: null, isBusy: true };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cKwv4k);
    obj2.trailing = jsx(ButtonEllipsis.Ellipsis, { variant: "primary", size: "sm" });
    let tmp5Result = <OrbsBalanceRow accessibilityLabel={null} trailing={null} isBusy />;
  } else {
    if (balance <= 0) {
      if (!tmp4) {
        let tmp6 = OrbsOnboardingMenuDismissibleContent;
      }
      tmp5Result = tmp5(tmp6, {});
    }
    tmp6 = BalanceWidgetMenu;
  }
  return tmp5Result;
}
export { OrbsOnboardingMenuDismissibleContent };
