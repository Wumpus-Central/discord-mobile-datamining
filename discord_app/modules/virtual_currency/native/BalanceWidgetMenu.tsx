// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod9060 from "../hooks/index.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ButtonEllipsis = Ellipsis(5395);
require = fn;
function BalanceWidgetMenu() {
  str = str(9060).useFetchVirtualCurrencyBalance().balance;
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
      const result = str(7262).openCollectiblesShopMobile(obj5);
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
      const obj4 = str(9167);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: str(5975).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    ActionSheetActionCreatorsDefault.openLazy(
      () => balance(paths[20])(paths[19], paths.paths).then((result) => result.default),
      "BalanceWidgetMenu",
      obj3,
    );
  }, items);
  let intl = str(1126).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj = str(9060);
  return (
    <closure_10
      accessibilityLabel={intl.formatToPlainString(str(1126).t.zPaLL9, { balance: str2 })}
      onPress={callback}
      trailing={jsx(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false })}
    />
  );
}
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_5 = fn(1087).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(2062);
({ ContentDismissActionType: metroRequire, DismissibleContentGroupName: closure_7 } = DismissibleContentConstants);
const RewardFilterTypes = fn(5972).RewardFilterTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsBalanceRow(arg0) {
      const cResult = c.c(8);
      ({ onPress, accessibilityLabel, trailing, isBusy } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.gGtZpz);
        const tmp7 = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: null });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== (undefined !== isBusy && isBusy)) {
        let obj3;
        if (tmp4) {
          obj3 = { busy: true };
        }
        cResult[1] = tmp4;
        cResult[2] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === onPress) {
          if (cResult[5] === tmp8) {
            if (cResult[6] === trailing) {
              let tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
      }
      const tmp10 = jsx(TableRow.TableRow, {
        label: first,
        accessibilityLabel,
        accessibilityState: tmp8,
        onPress,
        trailing,
        start: true,
        end: true,
      });
      cResult[3] = accessibilityLabel;
      cResult[4] = onPress;
      cResult[5] = tmp8;
      cResult[6] = trailing;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : function OrbsBalanceRow(isBusy) {
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
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsOnboardingMenuDismissibleContent() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          contentTypes: first,
          groupName: constants.VIRTUAL_CURRENCY_MOBILE_ONBOARDING,
          children(markAsDismissed) {
            markAsDismissed = markAsDismissed.markAsDismissed;
            if (
              markAsDismissed.visibleContent ===
              markAsDismissed(2049).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
            ) {
              let obj = { accessibilityLabel: null, onPress: null, trailing: null };
              const intl = tmp(1126).intl;
              obj.accessibilityLabel = intl.string(tmp(1126).t.Kt2QDh);
              obj.onPress = function onPress() {
                markAsDismissed(constants2.TAKE_ACTION);
                AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
                const obj2 = QuestUtils;
                obj2.openQuestHome({
                  filter: constants3.VIRTUAL_CURRENCY,
                  fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
                });
              };
              obj.trailing = closure_9(closure_1(16047), {});
              return closure_9(closure_10, obj);
            } else {
              return null;
            }
          },
        };
        const tmp9 = jsx(SelectedDismissibleContentDefault, {
          contentTypes: first,
          groupName: constants.VIRTUAL_CURRENCY_MOBILE_ONBOARDING,
          children(markAsDismissed) {
            markAsDismissed = markAsDismissed.markAsDismissed;
            if (
              markAsDismissed.visibleContent ===
              markAsDismissed(2049).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
            ) {
              let obj = { accessibilityLabel: null, onPress: null, trailing: null };
              const intl = tmp(1126).intl;
              obj.accessibilityLabel = intl.string(tmp(1126).t.Kt2QDh);
              obj.onPress = function onPress() {
                markAsDismissed(constants2.TAKE_ACTION);
                AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
                const obj2 = QuestUtils;
                obj2.openQuestHome({
                  filter: constants3.VIRTUAL_CURRENCY,
                  fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
                });
              };
              obj.trailing = closure_9(closure_1(16047), {});
              return closure_9(closure_10, obj);
            } else {
              return null;
            }
          },
        });
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function OrbsOnboardingMenuDismissibleContent() {
      let obj = { contentTypes: null, groupName: null, children: null };
      const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
      obj.contentTypes = items;
      obj.groupName = constants.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
      obj.children = function children(markAsDismissed) {
        markAsDismissed = markAsDismissed.markAsDismissed;
        if (
          markAsDismissed.visibleContent ===
          markAsDismissed(2049).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
        ) {
          let obj = { accessibilityLabel: null, onPress: null, trailing: null };
          const intl = tmp(1126).intl;
          obj.accessibilityLabel = intl.string(tmp(1126).t.Kt2QDh);
          obj.onPress = function onPress() {
            markAsDismissed(constants2.TAKE_ACTION);
            AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
            const obj2 = QuestUtils;
            obj2.openQuestHome({
              filter: constants3.VIRTUAL_CURRENCY,
              fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
            });
          };
          obj.trailing = closure_9(closure_1(16047), {});
          return closure_9(closure_10, obj);
        } else {
          return null;
        }
      };
      return jsx(SelectedDismissibleContentDefault, { contentTypes: null, groupName: null, children: null });
    };
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BalanceWidgetMenuWrapper() {
      let Ellipsis = require;
      let tmp = dependencyMap;
      const cResult = c.c(3);
      const balance = _mod9060.useFetchVirtualCurrencyBalance().balance;
      DismissibleContentUnsafeUtils;
      if (null == balance) {
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { accessibilityLabel: null, trailing: null, isBusy: true };
          const intl = util.intl;
          obj3.accessibilityLabel = intl.string(util.t.cKwv4k);
          Ellipsis = ButtonEllipsis.Ellipsis;
          tmp = <Ellipsis variant="primary" size="sm" />;
          obj3.trailing = tmp;
          const tmp20 = <closure_10 accessibilityLabel={null} trailing={null} isBusy />;
          cResult[0] = tmp20;
          let first = tmp20;
        } else {
          first = cResult[0];
        }
      } else {
        if (balance <= 0) {
          if (!tmp4) {
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = <closure_11 />;
              cResult[2] = tmp9;
              let tmp6 = tmp9;
            } else {
              tmp6 = cResult[2];
            }
            return tmp6;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = <BalanceWidgetMenu />;
          cResult[1] = tmp14;
        }
      }
    }
  : function BalanceWidgetMenuWrapper() {
      const balance = _mod9060.useFetchVirtualCurrencyBalance().balance;
      DismissibleContentUnsafeUtils;
      if (null == balance) {
        const obj2 = { accessibilityLabel: null, trailing: null, isBusy: true };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.cKwv4k);
        obj2.trailing = jsx(ButtonEllipsis.Ellipsis, { variant: "primary", size: "sm" });
        let tmp5Result = <closure_10 accessibilityLabel={null} trailing={null} isBusy />;
      } else {
        if (balance <= 0) {
          if (!tmp4) {
            let tmp6 = closure_11;
          }
          tmp5Result = tmp5(tmp6, {});
        }
        tmp6 = BalanceWidgetMenu;
      }
      return tmp5Result;
    };
export const OrbsOnboardingMenuDismissibleContent = tmp3;
