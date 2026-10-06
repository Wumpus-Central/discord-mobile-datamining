// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../../collectibles/CollectiblesShopConstants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestConstants from "../../quests/QuestConstants.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod8541 from "../hooks/index.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import react from "../../../../_runtime/00019_react.js";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
function BalanceWidgetMenu() {
  let constants2;
  let constants3;
  let str;
  let obj = str(8541);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = react.useCallback(() => {
    let balance;
    let intl;
    let intl2;
    let obj3;
    let obj4;
    let paths;
    let obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj2 = {
      balance: str,
      primaryButtonConfig: obj3,
      secondaryButtonConfig: obj4,
      source: AnalyticsLocationDefault.YOU_SCREEN,
    };
    obj3 = {
      buttonText: intl.string(intl3.t.WrzJBf),
      onButtonPress() {
        let items;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = {
          analyticsLocations: items,
          analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
          screen: constants2.ORBS,
        };
        const openCollectiblesShopMobile = str(dependencyMap[22]).openCollectiblesShopMobile;
        items = [];
        str(dependencyMap[22]);
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj4);
      },
    };
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    intl = intl3.intl;
    obj4 = {
      buttonText: intl2.string(intl3.t.SymzJC),
      onButtonPress() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = str(dependencyMap[14]);
        const obj5 = {
          mergeExistingRoutes: true,
          filter: constants3.VIRTUAL_CURRENCY,
          fromContent: str(dependencyMap[15]).QuestContent.ORBS_BALANCE_MENU,
        };
        obj4.openQuestHome(obj5);
      },
    };
    intl2 = intl3.intl;
    openLazy(
      () => {
        const promise = balance(paths[20])(paths[19], paths.paths);
        return promise.then((result) => result.default);
      },
      "BalanceWidgetMenu",
      obj2,
    );
  }, items);
  let intl = str(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str2;
  const zPaLL9 = str(1126).t.zPaLL9;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  return (
    <closure_10
      accessibilityLabel={formatToPlainString(zPaLL9, { balance: str2 })}
      onPress={callback}
      trailing={jsx(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false })}
    />
  );
}
const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ ContentDismissActionType: metroRequire, DismissibleContentGroupName: metroImportDefault } =
  DismissibleContentConstants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let first;
      let isBusy;
      let onPress;
      let tmp8;
      let trailing;
      const obj = react2;
      const cResult = obj.c(8);
      ({ onPress, accessibilityLabel, trailing, isBusy } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = Text_Text.Text;
        const intl = intl3.intl;
        const tmp7 = (
          <Text variant="text-sm/semibold" color="text-default">
            {intl.string(intl3.t.gGtZpz)}
          </Text>
        );
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== (undefined !== isBusy && isBusy)) {
        let obj3;
        if (undefined !== isBusy && isBusy) {
          obj3 = { busy: true };
        }
        cResult[1] = undefined !== isBusy && isBusy;
        cResult[2] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === onPress) {
          if (cResult[5] === tmp8) {
            let tmp9;
            if (cResult[6] === trailing) {
              tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
      }
      const tmp10 = jsx(TableRow2.TableRow, {
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
  : (isBusy) => {
      let accessibilityLabel;
      let intl;
      let onPress;
      let trailing;
      let flag = isBusy.isBusy;
      ({ onPress, accessibilityLabel, trailing } = isBusy);
      if (flag === undefined) {
        flag = false;
      }
      const TableRow = TableRow2.TableRow;
      ({ variant: "text-sm/semibold", color: "text-default", children: intl.string(intl3.t.gGtZpz) });
      const Text = Text_Text.Text;
      intl = intl3.intl;
      let obj3;
      if (flag) {
        obj3 = { busy: true };
      }
      return (
        <TableRow
          label={null}
          accessibilityLabel={accessibilityLabel}
          accessibilityState={obj3}
          onPress={onPress}
          trailing={trailing}
          start
          end
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let constants2;
      let constants3;
      let first;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(SelectedDismissibleContentDefault, {
          contentTypes: first,
          groupName: metroImportDefault.VIRTUAL_CURRENCY_MOBILE_ONBOARDING,
          children(markAsDismissed) {
            let intl;
            markAsDismissed = markAsDismissed.markAsDismissed;
            if (
              markAsDismissed.visibleContent ===
              markAsDismissed(closure_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
            ) {
              let obj = {
                accessibilityLabel: intl.string(tmp(closure_2[9]).t.Kt2QDh),
                onPress() {
                  markAsDismissed(constants2.TAKE_ACTION);
                  const obj = AnalyticsUtilsDefault;
                  obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
                  const obj2 = QuestUtils;
                  const obj3 = {
                    filter: constants3.VIRTUAL_CURRENCY,
                    fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
                  };
                  obj2.openQuestHome(obj3);
                },
                trailing: closure_9(closure_1(closure_2[16]), {}),
              };
              intl = tmp(closure_2[9]).intl;
              return closure_9(closure_10, obj);
            } else {
              return null;
            }
          },
        });
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let constants2;
      let constants3;
      const tmp = SelectedDismissibleContentDefault;
      const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
      return (
        <tmp contentTypes={items} groupName={metroImportDefault.VIRTUAL_CURRENCY_MOBILE_ONBOARDING}>
          {function children(markAsDismissed) {
            let intl;
            markAsDismissed = markAsDismissed.markAsDismissed;
            if (
              markAsDismissed.visibleContent ===
              markAsDismissed(closure_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
            ) {
              let obj = {
                accessibilityLabel: intl.string(tmp(closure_2[9]).t.Kt2QDh),
                onPress() {
                  markAsDismissed(constants2.TAKE_ACTION);
                  const obj = AnalyticsUtilsDefault;
                  obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
                  const obj2 = QuestUtils;
                  const obj3 = {
                    filter: constants3.VIRTUAL_CURRENCY,
                    fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC,
                  };
                  obj2.openQuestHome(obj3);
                },
                trailing: closure_9(closure_1(closure_2[16]), {}),
              };
              intl = tmp(closure_2[9]).intl;
              return closure_9(closure_10, obj);
            } else {
              return null;
            }
          }}
        </tmp>
      );
    };
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = _mod8541;
      const balance = obj2.useFetchVirtualCurrencyBalance().balance;
      DismissibleContentUnsafeUtils;
      if (null == balance) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const tmp20 = <closure_10 accessibilityLabel={intl.string(intl3.t.cKwv4k)} trailing={null} isBusy />;
          cResult[0] = tmp20;
          first = tmp20;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      } else {
        let tmp12;
        if (balance <= 0) {
          if (!tmp5) {
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = <closure_11 />;
              cResult[2] = tmp10;
              tmp7 = tmp10;
            } else {
              tmp7 = cResult[2];
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = <BalanceWidgetMenu />;
          cResult[1] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[1];
        }
        tmp7 = tmp12;
      }
      return tmp7;
    }
  : () => {
      let tmp5Result;
      const obj = _mod8541;
      const balance = obj.useFetchVirtualCurrencyBalance().balance;
      DismissibleContentUnsafeUtils;
      if (null == balance) {
        const intl = intl3.intl;
        tmp5Result = <closure_10 accessibilityLabel={intl.string(intl3.t.cKwv4k)} trailing={null} isBusy />;
      } else {
        if (balance <= 0) {
          let tmp6;
          if (!tmp4) {
            tmp6 = closure_11;
          }
          tmp5Result = tmp5(tmp6, {});
        }
        tmp6 = BalanceWidgetMenu;
      }
      return tmp5Result;
    };
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default tmp4;
export const OrbsOnboardingMenuDismissibleContent = tmp3;
