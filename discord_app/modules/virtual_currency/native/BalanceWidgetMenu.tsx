// === Module 17634: BalanceWidgetMenu ===

// Module 17634 (BalanceWidgetMenu)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import ButtonEllipsis from "ButtonEllipsis" /* 5642 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import TableRow from "TableRow" /* 6969 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import _mod9531 from "module_9531" /* 9531 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10500 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbsBalanceRow(isBusy) {
  let flag = isBusy.isBusy;
  ({ onPress, accessibilityLabel, trailing } = isBusy);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { label: null, accessibilityLabel: null, accessibilityState: null, onPress: null, trailing: null, start: true, end: true };
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
  return jsx(TableRow.TableRow, { label: null, accessibilityLabel: null, accessibilityState: null, onPress: null, trailing: null, start: true, end: true });
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
      if (markAsDismissed.visibleContent === markAsDismissed(4842).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        let obj = { accessibilityLabel: null, onPress: null, trailing: null };
        const intl = tmp(1114).intl;
        obj.accessibilityLabel = intl.string(tmp(1114).t.Kt2QDh);
        obj.onPress = function onPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          const obj2 = QuestUtils;
          obj2.openQuestHome({ filter: constants3.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC });
        };
        obj.trailing = closure_11(closure_1(17635), {});
        return closure_11(closure_12, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu() {
  str = str(9531).useFetchVirtualCurrencyBalance().balance;
  let obj = str(9531);
  const isOrbchievementsEnabled = str(17636).useIsOrbchievementsEnabled({ location: "NativeBalanceWidgetMenu" });
  let items = [str, isOrbchievementsEnabled];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj3 = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null, analyticsPage: null };
    let obj4 = { buttonText: null, onButtonPress: null };
    let obj2 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj4.buttonText = intl.string(util.t.WrzJBf);
    obj4.onButtonPress = function onButtonPress() {
      const obj = isOrbchievementsEnabled(1253);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_TO_SHOP", source: isOrbchievementsEnabled(7345).YOU_SCREEN, balance });
      const obj2 = { type: "GO_TO_SHOP", source: isOrbchievementsEnabled(7345).YOU_SCREEN, balance };
      isOrbchievementsEnabled(5253).hideActionSheet();
      const obj3 = isOrbchievementsEnabled(5253);
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [isOrbchievementsEnabled(7345).COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = isOrbchievementsEnabled(7345).COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(7712).openCollectiblesShopMobile(obj5);
    };
    obj3.primaryButtonConfig = obj4;
    let obj5 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj5.buttonText = intl2.string(util.t.SymzJC);
    obj5.onButtonPress = function onButtonPress() {
      const obj = isOrbchievementsEnabled(1253);
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_TO_QUEST_HOME", source: isOrbchievementsEnabled(7345).YOU_SCREEN, balance });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbchievementsEnabled(7345).YOU_SCREEN, balance };
      isOrbchievementsEnabled(5253).hideActionSheet();
      const obj3 = isOrbchievementsEnabled(5253);
      const obj4 = str(9658);
      obj4.openQuestHome({ mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(6778).QuestContent.ORBS_BALANCE_MENU });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    obj3.analyticsPage = constants2.USER_PROFILE;
    obj2.openLazy(asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp15 = v3(dependencyMap[20]);
              if (isOrbchievementsEnabled) {
                c1 = 2;
                v3 = 1;
                const obj4 = { value: tmp15(dependencyMap[19], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c1 = 1;
                v3 = 1;
                const obj5 = { value: tmp15(dependencyMap[21], dependencyMap.paths), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                v3 = 3;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            }
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp7) {
          v3 = tmp;
          throw tmp7;
        }
      }
    }), "BalanceWidgetMenu", obj3);
  }, items);
  let intl = str(1114).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj2 = str(17636);
  return <OrbsBalanceRow accessibilityLabel={intl.formatToPlainString(str(1114).t.zPaLL9, { balance: str2 })} onPress={callback} trailing={jsx(isOrbchievementsEnabled(14459), { balance: str, onPress: callback, accessible: false })} />;
}
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
let closure_7 = fn(1074).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(4855);
({ ContentDismissActionType: closure_8, DismissibleContentGroupName: closure_9 } = DismissibleContentConstants);
const RewardFilterTypes = fn(6775).RewardFilterTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  const balance = _mod9531.useFetchVirtualCurrencyBalance().balance;
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
};
export { OrbsOnboardingMenuDismissibleContent };