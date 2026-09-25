// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonEllipsis from "../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod8307 from "../hooks/index.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
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
    obj.groupName = closure_7.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (
        markAsDismissed.visibleContent ===
        markAsDismissed(2028).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
      ) {
        let obj = { accessibilityLabel: null, onPress: null, trailing: null };
        const intl = tmp(1115).intl;
        obj.accessibilityLabel = intl.string(tmp(1115).t.Kt2QDh);
        obj.onPress = function onPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          const obj2 = QuestUtils;
          obj2.openQuestHome({
            filter: constants3.VIRTUAL_CURRENCY,
            fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
          });
        };
        obj.trailing = closure_9(closure_1(15272), {});
        return closure_9(closure_10, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu() {
  str = str(8307).useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj3 = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj4.buttonText = intl.string(util.t.WrzJBf);
    obj4.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_SHOP",
        source: AnalyticsLocationDefault.YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(6956).openCollectiblesShopMobile(obj5);
    };
    obj3.primaryButtonConfig = obj4;
    let obj5 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj5.buttonText = intl2.string(util.t.SymzJC);
    obj5.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_QUEST_HOME",
        source: AnalyticsLocationDefault.YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj4 = str(10665);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: str(5754).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    ActionSheetActionCreatorsDefault.openLazy(
      () => balance(paths[18])(paths[17], paths.paths).then((result) => result.default),
      "BalanceWidgetMenu",
      obj3,
    );
  }, items);
  let intl = str(1115).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj = str(8307);
  return (
    <OrbsBalanceRow
      accessibilityLabel={intl.formatToPlainString(str(1115).t.zPaLL9, { balance: str2 })}
      onPress={callback}
      trailing={jsx(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false })}
    />
  );
}
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(2041);
({ ContentDismissActionType: metroRequire, DismissibleContentGroupName: closure_7 } = DismissibleContentConstants);
const RewardFilterTypes = fn(5751).RewardFilterTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  const balance = _mod8307.useFetchVirtualCurrencyBalance().balance;
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
