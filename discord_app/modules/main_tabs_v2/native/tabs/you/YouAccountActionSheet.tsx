// discord_app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ClientThemesUtils from "../../../../client_themes/ClientThemesUtils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import TableRowIcon from "../../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import useDesignToggleDefault from "../../../../devtools/design_toggles/useDesignToggle.tsx";
import TableRadioRow from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import _modDef6777 from "../../../../../../_runtime/metro/06777__.js";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import getChannelA11yLabel from "../../../../channel/getChannelA11yLabel.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import useGameMentionsAsPlainText from "../../../../game_mentions/hooks/useGameMentionsAsPlainText.tsx";
import ActivityEmojiDefault from "../../../../activity_status/native/ActivityEmoji.tsx";
import userSettingToActivity from "../../../../custom_status/utils/userSettingToActivity.tsx";
import removeCustomStatusDefault from "../../../../custom_status/utils/removeCustomStatus.tsx";
import MultiAccountActionCreatorsAll from "../../../../multi_account/MultiAccountActionCreators.tsx";
import FocusModeUtils from "../../../../notifications/FocusModeUtils.tsx";
import setUserStatusDefault from "../../../../multi_account/setUserStatus.tsx";
import ThemeDarkIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import _modDef14395 from "../../../../../../_runtime/metro/14395__.js";
import _modDef14396 from "../../../../../../_runtime/metro/14396__.js";
import _modDef14397 from "../../../../../../_runtime/metro/14397__.js";
import _modDef14398 from "../../../../../../_runtime/metro/14398__.js";
import ThemeLightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx";
import ThemeMidnightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx";
import ThemeGrayIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeGrayIcon.tsx";
import openManageAccountsModalDefault from "../../../../multi_account/native/openManageAccountsModal.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../../multi_account/MultiAccountStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UserRecord from "../../../../../records/UserRecord.tsx";
import DeveloperExperimentStore from "../../../../../stores/DeveloperExperimentStore.tsx";
import StreamerModeStore from "../../../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const util = currentLocale(1126);
const TableRowGroup = currentLocale(6264);
const TableSwitchRow = currentLocale(6895);
const BellSlashIcon = currentLocale(10345);
const DevToolsContentDefault = tmp9(16098);
const YouSwitchClientsRadioGroupDefault = tmp9(16816);
require = fn;
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  const tmp = closure_20();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    let obj2 = {
      accessibilityLabel: null,
      accessibilityHint: null,
      icon: null,
      onValueChange: null,
      value: null,
      label: null,
      subLabel: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = collapsedCategories(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
            closure_1_0(12571).setFocusMode(quiet_mode_enabled, arg1);
            const obj = closure_1_0(12571);
            closure_1_1(5056).hideActionSheet();
            const obj2 = closure_1_1(5056);
            const result = closure_1_0(16805).showYouAccountActionSheet();
          },
        };
        require("ActionSheetActionCreators").openLazy(
          require("asyncRequireImpl")(paths[50], paths.paths),
          "FocusModeOptionsActionSheet",
          obj3,
        );
        let obj2 = require("ActionSheetActionCreators");
      } else {
        require("FocusModeUtils").setFocusMode(false);
        let obj = require("FocusModeUtils");
      }
    };
    obj2.value = focusModeEnabled;
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.wCxBOc);
    if (null == setting) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.i0nsoY);
      const obj4 = { hasIcons: true, children: null };
      obj2.subLabel = stringResult;
      obj2 = collapsedCategories(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      collapsedCategories(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    obj5.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj5);
  }
}
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12125).MultiAccountTokenStatus;
const Constants = fn(1085);
({ AnalyticEvents: map1, AuthStates: closure_14, StatusTypes: closure_15, ThemeTypes: closure_16 } = Constants);
let closure_17 = fn(12126).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  account: { position: "relative" },
  manage: { position: "absolute", right: 0, zIndex: 100 },
  leadingIcon: { width: 24, height: 24, margin: 4 },
  trailingIcon: null,
  customStatusRow: null,
  customStatusEditButton: null,
  customStatusRemoveButton: null,
  customStatusText: null,
  sectionHeading: null,
};
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = {
  padding: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj3 = {
  padding: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj.customStatusEditButton = {
  minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj4 = {
  minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj.customStatusRemoveButton = {
  height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  alignItems: "center",
  justifyContent: "center",
};
obj.customStatusText = { flexShrink: 1 };
let obj5 = {
  height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  alignItems: "center",
  justifyContent: "center",
};
obj.sectionHeading = { marginBottom: nativeDefault.space.PX_8 };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AccountSectionHeading(children) {
      const cResult = c.c(3);
      children = children.children;
      const tmp4 = closure_20();
      if (cResult[0] === children) {
        if (cResult[1] === tmp4.sectionHeading) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = collapsedCategories(Text_Text.Text, {
        accessibilityRole: "header",
        variant: "experimental/body-sm/medium",
        color: "text-subtle",
        style: tmp4.sectionHeading,
        children,
      });
      cResult[0] = children;
      cResult[1] = tmp4.sectionHeading;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = {
        accessibilityRole: "header",
        variant: "experimental/body-sm/medium",
        color: "text-subtle",
        style: tmp4.sectionHeading,
        children,
      };
    }
  : function AccountSectionHeading(children) {
      const tmp = closure_20();
      return collapsedCategories(Text_Text.Text, {
        accessibilityRole: "header",
        variant: "experimental/body-sm/medium",
        color: "text-subtle",
        style: closure_20().sectionHeading,
        children: children.children,
      });
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStatusRadioRowProps() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { icon: null, value: null };
        const obj3 = { source: _modDef14398, variant: "text-status-online" };
        obj2.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj3);
        obj2.value = constants3.ONLINE;
        const items = [obj2, , ,];
        const obj4 = { icon: null, value: null };
        const obj5 = { source: _modDef14395, variant: "text-status-idle" };
        obj4.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj5);
        obj4.value = constants3.IDLE;
        items[1] = obj4;
        const obj6 = { icon: null, value: null };
        const obj7 = { source: _modDef14396, variant: "text-status-dnd" };
        obj6.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj7);
        obj6.value = constants3.DND;
        items[2] = obj6;
        const obj8 = { icon: null, value: null };
        const obj9 = { source: _modDef14397, variant: "text-status-offline" };
        obj8.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj9);
        obj8.value = constants3.INVISIBLE;
        items[3] = obj8;
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function useStatusRadioRowProps() {
      return noop.useMemo(() => {
        const obj = {
          icon: closure_1_18(require("TableRowIcon").TableRowIcon, {
            source: _modDef14398,
            variant: "text-status-online",
          }),
          value: constants.ONLINE,
        };
        const items = [obj, , ,];
        const obj3 = { icon: null, value: null };
        const obj2 = { source: _modDef14398, variant: "text-status-online" };
        obj3.icon = closure_1_18(require("TableRowIcon").TableRowIcon, {
          source: _modDef14395,
          variant: "text-status-idle",
        });
        obj3.value = constants.IDLE;
        items[1] = obj3;
        const obj5 = { icon: null, value: null };
        const obj4 = { source: _modDef14395, variant: "text-status-idle" };
        obj5.icon = closure_1_18(require("TableRowIcon").TableRowIcon, {
          source: _modDef14396,
          variant: "text-status-dnd",
        });
        obj5.value = constants.DND;
        items[2] = obj5;
        const obj7 = { icon: null, value: null };
        const obj6 = { source: _modDef14396, variant: "text-status-dnd" };
        obj7.icon = closure_1_18(require("TableRowIcon").TableRowIcon, {
          source: _modDef14397,
          variant: "text-status-offline",
        });
        obj7.value = constants.INVISIBLE;
        items[3] = obj7;
        return items;
      }, []);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function YouStatusRadioGroup() {
      const cResult = setting(576).c(19);
      const arr = closure_22();
      const StatusSetting = setting(2041).StatusSetting;
      setting = StatusSetting.useSetting();
      const StatusExpiresAtSetting = setting(2041).StatusExpiresAtSetting;
      const setting1 = StatusExpiresAtSetting.useSetting();
      let obj = setting(576);
      const manaTypeConsolidationExperiment = setting(6663).useManaTypeConsolidationExperiment(
        "YouAccountActionSheetOnlineStatus",
      );
      if (cResult[0] !== setting) {
        const fn = function e(nextStatus) {
          setUserStatusDefault({ prevStatus: setting, nextStatus });
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[0] = setting;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["0DPAZH"]);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === arr) {
        if (cResult[4] === setting) {
          if (cResult[5] === setting1) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === setting) {
                if (cResult[12] === tmp10) {
                  if (cResult[13] === tmp11) {
                    if (cResult[14] === tmp12) {
                      let tmp16 = cResult[15];
                    }
                    if (cResult[16] === manaTypeConsolidationExperiment) {
                      if (cResult[17] === tmp16) {
                        let tmp19 = cResult[18];
                      }
                      return tmp19;
                    }
                    let tmp20 = tmp16;
                    if (manaTypeConsolidationExperiment) {
                      let obj3 = { children: null };
                      const obj4 = { children: tmp8 };
                      const items = [closure_18(closure_21, obj4), tmp16];
                      obj3.children = items;
                      tmp20 = closure_19(View, obj3);
                    }
                    cResult[16] = manaTypeConsolidationExperiment;
                    cResult[17] = tmp16;
                    cResult[18] = tmp20;
                    tmp19 = tmp20;
                  }
                }
              }
            }
            const obj5 = {
              title: tmp10,
              accessibilityLabel: tmp11,
              onChange: tmp7,
              defaultValue: setting,
              hasIcons: true,
              children: cResult[6],
            };
            const tmp18 = closure_18(tmp(6262).TableRadioGroup, obj5);
            cResult[10] = tmp7;
            cResult[11] = setting;
            cResult[12] = tmp10;
            cResult[13] = tmp11;
            cResult[14] = cResult[6];
            cResult[15] = tmp18;
            tmp16 = tmp18;
          }
        }
      }
      if (cResult[7] === setting) {
        if (cResult[8] === setting1) {
          let tmp13 = cResult[9];
        }
        const mapped = arr.map(tmp13);
        cResult[3] = arr;
        cResult[4] = setting;
        cResult[5] = setting1;
        cResult[6] = mapped;
      }
      const fn2 = function b(value) {
        const obj = {};
        const merged = Object.assign(value);
        obj.label = getChannelA11yLabel.getStatusLabel(value.value);
        let formatToPlainStringResult;
        if (value.value === setting) {
          if (null != setting1) {
            if ("0" !== setting1) {
              const intl = util.intl;
              const obj3 = { endTime: null };
              const _Date = Date;
              const _Number = Number;
              const date = new Date(Number(setting1));
              obj3.endTime = date.toLocaleString(util.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              });
              formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
            }
          }
        }
        obj.subLabel = formatToPlainStringResult;
        return collapsedCategories(TableRadioRow.TableRadioRow, obj, value.value);
      };
      cResult[7] = setting;
      cResult[8] = setting1;
      cResult[9] = fn2;
      tmp13 = fn2;
      const obj2 = setting(6663);
    }
  : function YouStatusRadioGroup() {
      const StatusSetting = setting(2041).StatusSetting;
      setting = StatusSetting.useSetting();
      const StatusExpiresAtSetting = setting(2041).StatusExpiresAtSetting;
      closure_1 = StatusExpiresAtSetting.useSetting();
      const arr = closure_22();
      const manaTypeConsolidationExperiment = setting(6663).useManaTypeConsolidationExperiment(
        "YouAccountActionSheetOnlineStatus",
      );
      const items = [setting];
      const callback = noop.useCallback((nextStatus) => {
        setUserStatusDefault({ prevStatus: setting, nextStatus });
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items);
      let intl = setting(1126).intl;
      const stringResult = intl.string(setting(1126).t["0DPAZH"]);
      let tmp6;
      if (!manaTypeConsolidationExperiment) {
        tmp6 = stringResult;
      }
      const obj2 = {
        title: tmp6,
        accessibilityLabel: null,
        onChange: null,
        defaultValue: null,
        hasIcons: true,
        children: null,
      };
      let tmp7;
      if (manaTypeConsolidationExperiment) {
        tmp7 = stringResult;
      }
      obj2.accessibilityLabel = tmp7;
      obj2.onChange = callback;
      obj2.defaultValue = setting;
      obj2.children = arr.map((value) => {
        const obj = {};
        const merged = Object.assign(value);
        obj.label = getChannelA11yLabel.getStatusLabel(value.value);
        let formatToPlainStringResult;
        if (value.value === setting) {
          if (null != closure_1) {
            if ("0" !== closure_1) {
              const intl = util.intl;
              const obj3 = { endTime: null };
              const _Date = Date;
              const _Number = Number;
              const date = new Date(Number(closure_1));
              obj3.endTime = date.toLocaleString(util.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              });
              formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
            }
          }
        }
        obj.subLabel = formatToPlainStringResult;
        return collapsedCategories(TableRadioRow.TableRadioRow, obj, value.value);
      });
      const tmp5Result = closure_18(setting(6262).TableRadioGroup, obj2);
      let tmp9 = tmp5Result;
      if (manaTypeConsolidationExperiment) {
        let obj3 = { children: null };
        const obj4 = { children: stringResult };
        const items1 = [closure_18(closure_21, obj4), tmp5Result];
        obj3.children = items1;
        tmp9 = closure_19(View, obj3);
      }
      return tmp9;
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThemeRadioGroup() {
      const cResult = c.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function o() {
          return theme.theme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s(arg0) {
          const result = require("ClientThemesBackgroundActionCreators").resetBackgroundGradientPreset();
          const obj = require("ClientThemesBackgroundActionCreators");
          require("CustomThemeMobileActionCreators").resetCustomTheme();
          const obj2 = require("CustomThemeMobileActionCreators");
          UserSettingsActionCreatorsDefault.updateTheme(arg0);
        };
        cResult[2] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Ksh3ik);
        cResult[3] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== manaTypeConsolidationExperiment) {
        let tmp13 = manaTypeConsolidationExperiment;
        if (manaTypeConsolidationExperiment) {
          let obj2 = { children: tmp10 };
          tmp13 = collapsedCategories(closure_21, obj2);
        }
        cResult[4] = manaTypeConsolidationExperiment;
        cResult[5] = tmp13;
        let tmp12 = tmp13;
      } else {
        tmp12 = cResult[5];
      }
      let tmp16;
      if (!manaTypeConsolidationExperiment) {
        tmp16 = tmp10;
      }
      let tmp17;
      if (manaTypeConsolidationExperiment) {
        tmp17 = tmp10;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          icon: collapsedCategories(ThemeLightIcon.ThemeLightIcon, {}),
          label: ClientThemesUtils.getThemeName(constants4.LIGHT),
          value: constants4.LIGHT,
        };
        const tmp21 = collapsedCategories(TableRadioRow.TableRadioRow, obj3);
        cResult[6] = tmp21;
        let tmp18 = tmp21;
        const tmpResult7 = ClientThemesUtils;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          icon: collapsedCategories(ThemeGrayIcon.ThemeGrayIcon, {}),
          label: ClientThemesUtils.getThemeName(constants4.ASH),
          value: constants4.ASH,
        };
        const tmp25 = collapsedCategories(TableRadioRow.TableRadioRow, obj4);
        cResult[7] = tmp25;
        let tmp22 = tmp25;
        const tmpResult8 = ClientThemesUtils;
      } else {
        tmp22 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = {
          icon: collapsedCategories(ThemeDarkIcon.ThemeDarkIcon, {}),
          label: ClientThemesUtils.getThemeName(constants4.DARK),
          value: constants4.DARK,
        };
        const tmp29 = collapsedCategories(TableRadioRow.TableRadioRow, obj5);
        cResult[8] = tmp29;
        let tmp26 = tmp29;
        const tmpResult9 = ClientThemesUtils;
      } else {
        tmp26 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          icon: collapsedCategories(ThemeMidnightIcon.ThemeMidnightIcon, {}),
          label: ClientThemesUtils.getThemeName(constants4.ONYX),
          value: constants4.ONYX,
        };
        const tmp33 = collapsedCategories(TableRadioRow.TableRadioRow, obj6);
        cResult[9] = tmp33;
        let tmp30 = tmp33;
        const tmpResult10 = ClientThemesUtils;
      } else {
        tmp30 = cResult[9];
      }
      if (cResult[10] === tmp16) {
        if (cResult[11] === tmp17) {
          if (cResult[12] === stateFromStores) {
            let tmp34 = cResult[13];
          }
          if (cResult[14] === tmp34) {
            if (cResult[15] === tmp12) {
              let tmp36 = cResult[16];
            }
            return tmp36;
          }
          const obj7 = { children: null };
          const items1 = [tmp12, tmp34];
          obj7.children = items1;
          const tmp39 = closure_1_19(View, obj7);
          cResult[14] = tmp34;
          cResult[15] = tmp12;
          cResult[16] = tmp39;
          tmp36 = tmp39;
        }
      }
      const obj8 = {
        title: tmp16,
        accessibilityLabel: tmp17,
        onChange: tmp9,
        defaultValue: stateFromStores,
        hasIcons: true,
        children: null,
      };
      const items2 = [tmp18, tmp22, tmp26, tmp30];
      obj8.children = items2;
      const tmp35 = closure_1_19(TableRadioGroup.TableRadioGroup, obj8);
      cResult[10] = tmp16;
      cResult[11] = tmp17;
      cResult[12] = stateFromStores;
      cResult[13] = tmp35;
      tmp34 = tmp35;
      const tmpResult6 = ManaTypeConsolidationExperiment;
    }
  : function ThemeRadioGroup() {
      const items = [ThemeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
      const callback = noop.useCallback((arg0) => {
        const result = require("ClientThemesBackgroundActionCreators").resetBackgroundGradientPreset();
        const obj = require("ClientThemesBackgroundActionCreators");
        require("CustomThemeMobileActionCreators").resetCustomTheme();
        const obj2 = require("CustomThemeMobileActionCreators");
        UserSettingsActionCreatorsDefault.updateTheme(arg0);
      }, []);
      const intl = util.intl;
      const stringResult = intl.string(util.t.Ksh3ik);
      let tmp9 = manaTypeConsolidationExperiment;
      if (manaTypeConsolidationExperiment) {
        const obj3 = { children: stringResult };
        tmp9 = collapsedCategories(closure_21, obj3);
      }
      const items1 = [tmp9];
      let tmp12;
      if (!manaTypeConsolidationExperiment) {
        tmp12 = stringResult;
      }
      const obj4 = {
        title: tmp12,
        accessibilityLabel: null,
        onChange: null,
        defaultValue: null,
        hasIcons: true,
        children: null,
      };
      let tmp13;
      if (manaTypeConsolidationExperiment) {
        tmp13 = stringResult;
      }
      const obj5 = { children: null };
      obj4.accessibilityLabel = tmp13;
      obj4.onChange = callback;
      obj4.defaultValue = stateFromStores;
      const obj6 = { icon: collapsedCategories(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
      obj6.label = ClientThemesUtils.getThemeName(constants4.LIGHT);
      obj6.value = constants4.LIGHT;
      const items2 = [collapsedCategories(TableRadioRow.TableRadioRow, obj6), , ,];
      const obj7 = { icon: collapsedCategories(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
      const tmpResult = ClientThemesUtils;
      obj7.label = ClientThemesUtils.getThemeName(constants4.ASH);
      obj7.value = constants4.ASH;
      items2[1] = collapsedCategories(TableRadioRow.TableRadioRow, obj7);
      const obj8 = { icon: collapsedCategories(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
      const tmpResult4 = ClientThemesUtils;
      obj8.label = ClientThemesUtils.getThemeName(constants4.DARK);
      obj8.value = constants4.DARK;
      items2[2] = collapsedCategories(TableRadioRow.TableRadioRow, obj8);
      const obj9 = { icon: collapsedCategories(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
      const tmpResult5 = ClientThemesUtils;
      obj9.label = ClientThemesUtils.getThemeName(constants4.ONYX);
      obj9.value = constants4.ONYX;
      items2[3] = collapsedCategories(TableRadioRow.TableRadioRow, obj9);
      obj4.children = items2;
      items1[1] = closure_1_19(TableRadioGroup.TableRadioGroup, obj4);
      obj5.children = items1;
      return closure_1_19(View, obj5);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountRadioRowProps(arr) {
      const cResult = stateFromStores(576).c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StreamerModeStore];
        const fn = function o() {
          return StreamerModeStore.hidePersonalInformation;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arr) {
          return cResult[4];
        }
      }
      if (cResult[5] !== stateFromStores) {
        const fn2 = function c(id) {
          const obj = new UserRecord(id);
          let combined = null;
          if (!stateFromStores) {
            combined = null;
            if (!obj.hasUniqueUsername()) {
              const _HermesInternal = HermesInternal;
              combined = "#" + obj.discriminator;
            }
          }
          let str2 = "always";
          if (stateFromStores) {
            str2 = "never";
          }
          const obj3 = {
            label: UserUtilsDefault.getUserTag(obj, { mode: "username", identifiable: str2 }),
            value: id.id,
            subLabel: combined,
            icon: null,
          };
          obj3.icon = collapsedCategories(native.Avatar, {
            user: obj,
            guildId: "Array",
            size: native.AvatarSizes.REFRESH_MEDIUM_32,
          });
          return obj3;
        };
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[6];
      }
      const mapped = arr.map(tmp8);
      cResult[2] = stateFromStores;
      cResult[3] = arr;
      cResult[4] = mapped;
      const tmpResult = stateFromStores(504);
    }
  : function useAccountRadioRowProps(arg0) {
      _require = arg0;
      const items = [StreamerModeStore];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => StreamerModeStore.hidePersonalInformation,
      );
      const items1 = [arg0, stateFromStores];
      return noop.useMemo(
        () =>
          closure_0.map((id) => {
            const obj = new UserRecord(id);
            let combined = null;
            if (!closure_1_1) {
              combined = null;
              if (!obj.hasUniqueUsername()) {
                const _HermesInternal = HermesInternal;
                combined = "#" + obj.discriminator;
              }
            }
            let str2 = "always";
            if (closure_1_1) {
              str2 = "never";
            }
            const obj3 = {
              label: stateFromStores(dependencyMap[38]).getUserTag(obj, { mode: "username", identifiable: str2 }),
              value: id.id,
              subLabel: combined,
              icon: null,
            };
            const obj2 = stateFromStores(dependencyMap[38]);
            obj3.icon = closure_2_18(closure_0(dependencyMap[39]).Avatar, {
              user: obj,
              guildId: "Array",
              size: closure_0(dependencyMap[39]).AvatarSizes.REFRESH_MEDIUM_32,
            });
            return obj3;
          }),
        items1,
      );
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function YouAccountRadioGroup() {
      const cResult = stateFromStores(576).c(26);
      const tmp4 = closure_20();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      const tmpResult = stateFromStores(504);
      const multiAccountUsers = stateFromStores(16353).useMultiAccountUsers().multiAccountUsers;
      const arr2 = closure_25(multiAccountUsers);
      const tmpResult3 = stateFromStores(16353);
      const manaTypeConsolidationExperiment = stateFromStores(6663).useManaTypeConsolidationExperiment(
        "YouAccountActionSheetSwitchAccounts",
      );
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (cResult[2] === id) {
        if (cResult[3] === multiAccountUsers) {
          let tmp11 = cResult[4];
        }
        if (null == stateFromStores) {
          return null;
        } else {
          const _Symbol4 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.oMNyYN);
            cResult[5] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[5];
          }
          const _Symbol = Symbol;
          const account = tmp4.account;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function f() {
              return multiAccountUsers(16810)();
            };
            cResult[6] = fn3;
            let tmp14 = fn3;
          } else {
            tmp14 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { onPress: tmp14, children: null };
            let obj3 = { variant: "text-sm/semibold", color: "text-brand", children: null };
            const intl2 = tmp(1126).intl;
            obj3.children = intl2.string(tmp(1126).t.HxrBOZ);
            obj2.children = closure_18(tmp(5088).Text, obj3);
            const tmp17 = closure_18(tmp(6184).PressableOpacity, obj2);
            cResult[7] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] !== tmp4.manage) {
            let obj4 = { style: tmp4.manage, children: tmp15 };
            const tmp21 = closure_18(View, obj4);
            cResult[8] = tmp4.manage;
            cResult[9] = tmp21;
          }
          if (cResult[10] !== manaTypeConsolidationExperiment) {
            let tmp23 = manaTypeConsolidationExperiment;
            if (manaTypeConsolidationExperiment) {
              let obj5 = { children: tmp12 };
              tmp23 = closure_18(closure_21, obj5);
            }
            cResult[10] = manaTypeConsolidationExperiment;
            cResult[11] = tmp23;
          }
          if (cResult[12] !== arr2) {
            const _Symbol3 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(arg0);
                  return closure_1_18(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
                }
              }
              cResult[14] = M;
            } else {
              class M {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(arg0);
                  return closure_1_18(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
                }
              }
            }
            const mapped = arr2.map(M);
            cResult[12] = arr2;
            cResult[13] = mapped;
          } else {
            class M {
              constructor(arg0) {
                obj = {};
                merged = Object.assign(arg0);
                return closure_1_18(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
              }
            }
            if (cResult[15] === stateFromStores.id) {
              class M {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(arg0);
                  return closure_1_18(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
                }
              }
            }
            const obj6 = {
              title: tmp26,
              accessibilityLabel: tmp27,
              onChange: tmp11,
              defaultValue: tmp28,
              hasIcons: true,
              children: tmp29,
            };
            const tmp35 = closure_18(tmp(6262).TableRadioGroup, obj6);
            cResult[15] = stateFromStores.id;
            cResult[16] = tmp11;
            cResult[17] = tmp27;
            cResult[18] = tmp29;
            cResult[19] = tmp26;
            cResult[20] = tmp35;
          }
        }
      }
      if (stateFromStores != null) {
        class M {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(arg0);
            return closure_1_18(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
          }
        }
      }
      const fn2 = function c(arg0) {
        closure_0 = arg0;
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (arg0 !== id) {
          const found = multiAccountUsers.find((id) => id.id === closure_0);
          if (null != found) {
            if (found.tokenStatus === MultiAccountTokenStatus.INVALID) {
              openManageAccountsModalDefault(constants2.LOGIN);
              AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "you_account_action_sheet" });
            } else {
              const obj3 = { location: AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET };
              AnalyticsUtilsDefault.track(constants.MULTI_ACCOUNT_SWITCH_ATTEMPT, obj3);
              ActionSheetActionCreatorsDefault.hideActionSheet();
              MultiAccountActionCreatorsAll.switchAccount(found.id, undefined, constants.YOU_ACCOUNT_ACTION_SHEET);
            }
          }
        }
      };
      cResult[2] = undefined;
      cResult[3] = multiAccountUsers;
      cResult[4] = fn2;
      tmp11 = fn2;
      const tmpResult4 = stateFromStores(6663);
    }
  : function YouAccountRadioGroup() {
      const tmp = closure_20();
      const items = [UserStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj = stateFromStores(504);
      const multiAccountUsers = stateFromStores(16353).useMultiAccountUsers().multiAccountUsers;
      let obj2 = stateFromStores(16353);
      const arr2 = closure_25(multiAccountUsers);
      const manaTypeConsolidationExperiment = stateFromStores(6663).useManaTypeConsolidationExperiment(
        "YouAccountActionSheetSwitchAccounts",
      );
      const items1 = [multiAccountUsers];
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      items1[1] = id;
      if (null == stateFromStores) {
        return null;
      } else {
        const intl = tmp2(1126).intl;
        const stringResult = intl.string(tmp2(1126).t.oMNyYN);
        let obj4 = { style: tmp.account, children: null };
        let obj5 = { style: tmp.manage, children: null };
        const obj6 = {
          onPress() {
            return multiAccountUsers(16810)();
          },
          children: null,
        };
        const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
        const intl2 = tmp2(1126).intl;
        obj7.children = intl2.string(tmp2(1126).t.HxrBOZ);
        obj6.children = closure_18(tmp2(5088).Text, obj7);
        obj5.children = closure_18(tmp2(6184).PressableOpacity, obj6);
        const items2 = [closure_18(View, obj5), ,];
        let tmp15Result = manaTypeConsolidationExperiment;
        if (manaTypeConsolidationExperiment) {
          const obj8 = { children: stringResult };
          tmp15Result = closure_18(closure_21, obj8);
        }
        items2[1] = tmp15Result;
        let tmp10;
        if (!manaTypeConsolidationExperiment) {
          tmp10 = stringResult;
        }
        const obj9 = {
          title: tmp10,
          accessibilityLabel: null,
          onChange: null,
          defaultValue: null,
          hasIcons: true,
          children: null,
        };
        let tmp11;
        if (manaTypeConsolidationExperiment) {
          tmp11 = stringResult;
        }
        obj9.accessibilityLabel = tmp11;
        obj9.onChange = tmp7;
        obj9.defaultValue = stateFromStores.id;
        obj9.children = arr2.map((value) => {
          const merged = Object.assign(value);
          return closure_1_18(stateFromStores(6261).TableRadioRow, {}, value.value);
        });
        items2[2] = closure_18(tmp2(6262).TableRadioGroup, obj9);
        obj4.children = items2;
        return closure_19(View, obj4);
      }
      let obj3 = stateFromStores(6663);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomStatus() {
      const cResult = c.c(33);
      const tmp4 = closure_20();
      const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
      let state;
      if (customStatusActivity != null) {
        state = customStatusActivity.state;
      }
      let tmp9 = null != state;
      if (tmp9) {
        tmp9 = "" !== customStatusActivity.state;
      }
      if (!tmp9) {
        let emoji1;
        if (customStatusActivity != null) {
          emoji1 = customStatusActivity.emoji;
        }
        tmp9 = null != emoji1;
      }
      let state1;
      if (customStatusActivity != null) {
        state1 = customStatusActivity.state;
      }
      const gameMentionsAsPlainText = useGameMentionsAsPlainText.useGameMentionsAsPlainText(state1);
      const tmpResult = useGameMentionsAsPlainText;
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const tmpResult3 = useToken;
      const token2 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      if (cResult[0] !== tmp9) {
        const intl = util.intl;
        const string = intl.string;
        let t = util.t;
        if (tmp9) {
          t = t["2p9FMw"];
          let stringResult = string(t);
        } else {
          stringResult = string(t["/UonHN"]);
        }
        cResult[0] = tmp9;
        cResult[1] = stringResult;
      } else {
        if (cResult[2] === customStatusActivity) {
          if (cResult[3] === tmp9) {
            if (cResult[4] === gameMentionsAsPlainText) {
              let tmp19 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function o() {
                ActionSheetActionCreatorsDefault.hideActionSheet();
                const obj3 = { analyticsLocations: null };
                const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
                obj3.analyticsLocations = items;
                const result = require("CustomStatusUtils").openEditCustomStatusModal(obj3);
              };
              cResult[6] = fn;
              let tmp22 = fn;
            } else {
              tmp22 = cResult[6];
            }
            if (cResult[7] === customStatusActivity) {
              if (cResult[8] === tmp4.leadingIcon) {
                if (cResult[9] === token) {
                  if (cResult[11] === tmp9) {
                    if (cResult[12] === gameMentionsAsPlainText) {
                      let tmp29 = cResult[13];
                    }
                    if (cResult[14] === token2) {
                      if (cResult[15] === token1) {
                        if (cResult[16] === tmp4.customStatusText) {
                          if (cResult[17] === tmp29) {
                            let tmp31 = cResult[18];
                          }
                          if (cResult[19] === tmp4.customStatusEditButton) {
                            if (cResult[20] === tmp15) {
                              if (cResult[21] === tmp19) {
                                if (cResult[22] === tmp23) {
                                  if (cResult[23] === tmp31) {
                                    let tmp34 = cResult[24];
                                  }
                                  if (cResult[25] === customStatusActivity) {
                                    if (cResult[26] === tmp4.customStatusRemoveButton) {
                                      if (cResult[27] === tmp4.trailingIcon) {
                                        let tmp37 = cResult[28];
                                      }
                                      if (cResult[29] === tmp4.customStatusRow) {
                                        if (cResult[30] === tmp34) {
                                          if (cResult[31] === tmp37) {
                                            let tmp41 = cResult[32];
                                          }
                                          return tmp41;
                                        }
                                      }
                                      const obj4 = { hasIcons: false, children: null };
                                      const obj5 = {
                                        shadow: "none",
                                        border: "none",
                                        style: tmp4.customStatusRow,
                                        children: null,
                                      };
                                      let items = [tmp34, tmp37];
                                      obj5.children = items;
                                      obj4.children = closure_1_19(Card.Card, obj5);
                                      const tmp44 = collapsedCategories(TableRowGroup.TableRowGroup, obj4);
                                      cResult[29] = tmp4.customStatusRow;
                                      cResult[30] = tmp34;
                                      cResult[31] = tmp37;
                                      cResult[32] = tmp44;
                                      tmp41 = tmp44;
                                    }
                                  }
                                  let tmp38 = null;
                                  if (null != customStatusActivity) {
                                    const obj6 = {
                                      onPress(stopPropagation) {
                                        stopPropagation.stopPropagation();
                                        removeCustomStatusDefault();
                                      },
                                      accessibilityRole: "button",
                                      accessibilityLabel: null,
                                      style: null,
                                      children: null,
                                    };
                                    const intl4 = util.intl;
                                    obj6.accessibilityLabel = intl4.string(util.t.wfYTHe);
                                    obj6.style = tmp4.customStatusRemoveButton;
                                    const obj7 = { style: tmp4.trailingIcon, source: _modDef6777 };
                                    obj6.children = collapsedCategories(FastImageDefault, obj7);
                                    tmp38 = collapsedCategories(Pressables.PressableOpacity, obj6);
                                    const tmp6Result = FastImageDefault;
                                  }
                                  cResult[25] = customStatusActivity;
                                  cResult[26] = tmp4.customStatusRemoveButton;
                                  cResult[27] = tmp4.trailingIcon;
                                  cResult[28] = tmp38;
                                  tmp37 = tmp38;
                                }
                              }
                            }
                          }
                          const obj8 = {
                            style: tmp4.customStatusEditButton,
                            accessibilityRole: "button",
                            accessibilityLabel: tmp15,
                            accessibilityHint: tmp19,
                            onPress: tmp22,
                            children: null,
                          };
                          const items1 = [tmp23, tmp31];
                          obj8.children = items1;
                          const tmp36 = closure_1_19(Pressables.PressableOpacity, obj8);
                          cResult[19] = tmp4.customStatusEditButton;
                          cResult[20] = tmp15;
                          cResult[21] = tmp19;
                          cResult[22] = tmp23;
                          cResult[23] = tmp31;
                          cResult[24] = tmp36;
                          tmp34 = tmp36;
                        }
                      }
                    }
                    const obj9 = {
                      variant: token1,
                      color: token2,
                      lineClamp: 2,
                      style: tmp4.customStatusText,
                      children: tmp29,
                    };
                    const tmp33 = collapsedCategories(Text_Text.Text, obj9);
                    cResult[14] = token2;
                    cResult[15] = token1;
                    cResult[16] = tmp4.customStatusText;
                    cResult[17] = tmp29;
                    cResult[18] = tmp33;
                    tmp31 = tmp33;
                  }
                  let stringResult1 = gameMentionsAsPlainText;
                  if (!tmp9) {
                    const intl3 = util.intl;
                    stringResult1 = intl3.string(util.t["/UonHN"]);
                  }
                  cResult[11] = tmp9;
                  cResult[12] = gameMentionsAsPlainText;
                  cResult[13] = stringResult1;
                  tmp29 = stringResult1;
                }
              }
            }
            let emoji2;
            if (customStatusActivity != null) {
              emoji2 = customStatusActivity.emoji;
            }
            if (null != emoji2) {
              const obj10 = { emoji: customStatusActivity.emoji, size: token };
              let tmp26 = collapsedCategories(ActivityEmojiDefault, obj10);
            } else {
              const obj11 = { size: "md", style: tmp4.leadingIcon };
              tmp26 = collapsedCategories(ReactionIcon.ReactionIcon, obj11);
            }
            cResult[7] = customStatusActivity;
            cResult[8] = tmp4.leadingIcon;
            cResult[9] = token;
            cResult[10] = tmp26;
          }
        }
        let formatToPlainStringResult;
        if (tmp9) {
          const intl2 = util.intl;
          const emoji = customStatusActivity.emoji;
          let str2;
          if (emoji != null) {
            str2 = emoji.name;
          }
          if (str2 == null) {
            str2 = "";
          }
          const obj12 = { emoji: str2, status: gameMentionsAsPlainText };
          formatToPlainStringResult = intl2.formatToPlainString(util.t.GE7QzY, obj12);
        }
        cResult[2] = customStatusActivity;
        cResult[3] = tmp9;
        cResult[4] = gameMentionsAsPlainText;
        cResult[5] = formatToPlainStringResult;
        tmp19 = formatToPlainStringResult;
      }
      const tmpResult4 = useToken;
    }
  : function CustomStatus() {
      const tmp = closure_20();
      const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
      let state;
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
      if (customStatusActivity != null) {
        state = customStatusActivity.state;
      }
      let tmp8 = null != state;
      if (tmp8) {
        tmp8 = "" !== customStatusActivity.state;
      }
      if (!tmp8) {
        let emoji1;
        if (customStatusActivity != null) {
          emoji1 = customStatusActivity.emoji;
        }
        tmp8 = null != emoji1;
      }
      let state1;
      if (customStatusActivity != null) {
        state1 = customStatusActivity.state;
      }
      let gameMentionsAsPlainText = useGameMentionsAsPlainText.useGameMentionsAsPlainText(state1);
      const tmp2Result = useGameMentionsAsPlainText;
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const tmp2Result3 = useToken;
      const token2 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      let obj3 = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
      const obj4 = {
        style: tmp.customStatusEditButton,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        onPress: null,
        children: null,
      };
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (tmp8) {
        let stringResult = string(t["2p9FMw"]);
      } else {
        stringResult = string(t["/UonHN"]);
      }
      obj4.accessibilityLabel = stringResult;
      let formatToPlainStringResult;
      if (tmp8) {
        const intl2 = util.intl;
        const emoji = customStatusActivity.emoji;
        let str2;
        if (emoji != null) {
          str2 = emoji.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj5 = { emoji: str2, status: gameMentionsAsPlainText };
        formatToPlainStringResult = intl2.formatToPlainString(util.t.GE7QzY, obj5);
      }
      obj4.accessibilityHint = formatToPlainStringResult;
      obj4.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { analyticsLocations: null };
        const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
        obj3.analyticsLocations = items;
        const result = require("CustomStatusUtils").openEditCustomStatusModal(obj3);
      };
      let emoji2;
      if (customStatusActivity != null) {
        emoji2 = customStatusActivity.emoji;
      }
      if (null != emoji2) {
        const obj6 = { emoji: customStatusActivity.emoji, size: token };
        let tmp14Result = collapsedCategories(ActivityEmojiDefault, obj6);
      } else {
        const obj7 = { size: "md", style: tmp.leadingIcon };
        tmp14Result = collapsedCategories(ReactionIcon.ReactionIcon, obj7);
      }
      let items = [tmp14Result];
      const obj8 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
      if (!tmp8) {
        const intl3 = util.intl;
        gameMentionsAsPlainText = intl3.string(util.t["/UonHN"]);
      }
      obj8.children = gameMentionsAsPlainText;
      items[1] = collapsedCategories(Text_Text.Text, obj8);
      obj4.children = items;
      const items1 = [closure_1_19(Pressables.PressableOpacity, obj4)];
      let tmp14Result2 = null;
      if (null != customStatusActivity) {
        const obj9 = {
          onPress(stopPropagation) {
            stopPropagation.stopPropagation();
            removeCustomStatusDefault();
          },
          accessibilityRole: "button",
          accessibilityLabel: null,
          style: null,
          children: null,
        };
        const intl4 = util.intl;
        obj9.accessibilityLabel = intl4.string(util.t.wfYTHe);
        obj9.style = tmp.customStatusRemoveButton;
        const obj10 = { style: tmp.trailingIcon, source: _modDef6777 };
        obj9.children = collapsedCategories(FastImageDefault, obj10);
        tmp14Result2 = collapsedCategories(Pressables.PressableOpacity, obj9);
        const tmp5Result = FastImageDefault;
      }
      const tmp2Result4 = useToken;
      items1[1] = tmp14Result2;
      obj3.children = items1;
      return collapsedCategories(TableRowGroup.TableRowGroup, {
        hasIcons: false,
        children: closure_1_19(Card.Card, obj3),
      });
    };
ReactCompilerGating = fn(558);
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function YouAccountActionSheet(statusOnly) {
        const cResult = c.c(33);
        statusOnly = statusOnly.statusOnly;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MultiAccountStore];
          const fn = function l() {
            return canUseMultiAccountMobile.getCanUseMultiAccountMobile();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
        let tmp9 = importDefault;
        const tmp10 = useDesignToggleDefault("theme_setting_in_account_sheet");
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [DeveloperExperimentStore];
          const fn2 = function b() {
            return isDeveloper.isDeveloper;
          };
          cResult[2] = items1;
          cResult[3] = fn2;
          let tmp12 = fn2;
          let tmp11 = items1;
        } else {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const tmpResult = initialize;
        const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
        const tmpResult3 = initialize;
        const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment(
          "YouAccountActionSheetDeveloperTools",
        );
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === tmp4) {
            if (cResult[7] !== cResult[6]) {
              const obj2 = { title: tmp16 };
              const tmp21 = collapsedCategories(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
              cResult[7] = tmp16;
              cResult[8] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[8];
            }
            if (cResult[9] !== tmp10) {
              let tmp23 = tmp10;
              if (tmp10) {
                tmp23 = collapsedCategories(closure_24, {});
              }
              cResult[9] = tmp10;
              cResult[10] = tmp23;
              let tmp22 = tmp23;
            } else {
              tmp22 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp31 = collapsedCategories(closure_23, {});
              const tmp33 = collapsedCategories(FocusModeSetting, {});
              const tmp35 = collapsedCategories(closure_28, {});
              cResult[11] = tmp33;
              cResult[12] = tmp35;
              cResult[13] = tmp31;
              let tmp28 = tmp31;
              let tmp27 = tmp35;
              let tmp26 = tmp33;
            } else {
              tmp26 = cResult[11];
              tmp27 = cResult[12];
              tmp28 = cResult[13];
            }
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === tmp4) {
                let tmp36 = cResult[16];
              }
              if (cResult[17] === stateFromStores1) {
                if (cResult[18] === tmp4) {
                  let tmp40 = cResult[19];
                }
                if (cResult[20] === stateFromStores1) {
                  if (cResult[21] === manaTypeConsolidationExperiment) {
                    if (cResult[22] === tmp4) {
                      let tmp43 = cResult[23];
                    }
                    if (cResult[24] === tmp36) {
                      if (cResult[25] === tmp40) {
                        if (cResult[26] === tmp43) {
                          if (cResult[27] === tmp22) {
                            let tmp52 = cResult[28];
                          }
                          if (cResult[29] === stateFromStores) {
                            if (cResult[30] === tmp52) {
                              if (cResult[31] === tmp19) {
                                let tmp55 = cResult[32];
                              }
                              return tmp55;
                            }
                          }
                          const obj3 = {
                            startExpanded: stateFromStores,
                            header: tmp19,
                            showGradient: true,
                            children: tmp52,
                          };
                          const tmp57 = collapsedCategories(ActionSheet.ActionSheet, obj3);
                          cResult[29] = stateFromStores;
                          cResult[30] = tmp52;
                          cResult[31] = tmp19;
                          cResult[32] = tmp57;
                          tmp55 = tmp57;
                        }
                      }
                    }
                    const obj4 = { spacing: 24, children: null };
                    const items2 = [tmp22, tmp28, tmp26, tmp27, tmp36, tmp40, tmp43];
                    obj4.children = items2;
                    const tmp54 = closure_1_19(Stack_Stack.Stack, obj4);
                    cResult[24] = tmp36;
                    cResult[25] = tmp40;
                    cResult[26] = tmp43;
                    cResult[27] = tmp22;
                    cResult[28] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                let tmp44 = !tmp4;
                if (!tmp4) {
                  tmp44 = stateFromStores1;
                }
                if (!tmp44) {
                  cResult[20] = stateFromStores1;
                  cResult[21] = manaTypeConsolidationExperiment;
                  cResult[22] = tmp4;
                  cResult[23] = tmp44;
                  tmp43 = tmp44;
                } else if (manaTypeConsolidationExperiment) {
                  const obj5 = { children: null };
                  const items3 = [collapsedCategories(closure_21, { children: "Developer Tools" })];
                  tmp9 = DevToolsContentDefault;
                  items3[1] = collapsedCategories(tmp9, { embedded: true });
                  obj5.children = items3;
                  let tmp46 = closure_1_19(View, obj5);
                } else {
                  tmp46 = collapsedCategories(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
                }
              }
              let tmp41 = !tmp4;
              if (!tmp4) {
                tmp41 = stateFromStores1;
              }
              if (tmp41) {
                tmp41 = collapsedCategories(YouSwitchClientsRadioGroupDefault, {});
              }
              cResult[17] = stateFromStores1;
              cResult[18] = tmp4;
              cResult[19] = tmp41;
              tmp40 = tmp41;
            }
            let tmp37 = !tmp4;
            if (!tmp4) {
              tmp37 = stateFromStores;
            }
            if (tmp37) {
              tmp37 = collapsedCategories(closure_26, {});
            }
            cResult[14] = stateFromStores;
            cResult[15] = tmp4;
            cResult[16] = tmp37;
            tmp36 = tmp37;
          }
        }
        const intl = util.intl;
        const string = intl.string;
        let t = util.t;
        if (undefined !== statusOnly && statusOnly) {
          t = t["3Uj+2p"];
          let stringResult = string(t);
        } else if (stateFromStores) {
          stringResult = string(t["ldCE/p"]);
        } else {
          stringResult = string(t["qP/i6k"]);
        }
        cResult[4] = stateFromStores;
        cResult[5] = undefined !== statusOnly && statusOnly;
        cResult[6] = stringResult;
        const tmpResult4 = ManaTypeConsolidationExperiment;
      }
    : function YouAccountActionSheet(statusOnly) {
        let flag = statusOnly.statusOnly;
        if (flag === undefined) {
          flag = false;
        }
        let tmp8Result6 = dependencyMap;
        const items = [MultiAccountStore];
        const stateFromStores = initialize.useStateFromStores(items, () =>
          canUseMultiAccountMobile.getCanUseMultiAccountMobile(),
        );
        let tmp4 = importDefault;
        const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
        const items1 = [DeveloperExperimentStore];
        const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
        const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment(
          "YouAccountActionSheetDeveloperTools",
        );
        const obj4 = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
        const intl = util.intl;
        const string = intl.string;
        const t = util.t;
        if (flag) {
          let stringResult = string(t["3Uj+2p"]);
        } else if (stateFromStores) {
          stringResult = string(t["ldCE/p"]);
        } else {
          stringResult = string(t["qP/i6k"]);
        }
        obj4.header = collapsedCategories(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
        let tmp8Result = tmp5;
        if (tmp5) {
          tmp8Result = collapsedCategories(closure_24, {});
        }
        const items2 = [
          tmp8Result,
          collapsedCategories(closure_23, {}),
          collapsedCategories(FocusModeSetting, {}),
          collapsedCategories(closure_28, {}),
          ,
          ,
        ];
        let tmp8Result4 = !flag;
        if (!flag) {
          tmp8Result4 = stateFromStores;
        }
        if (tmp8Result4) {
          tmp8Result4 = collapsedCategories(closure_26, {});
        }
        items2[4] = tmp8Result4;
        let tmp8Result5 = !flag;
        if (!flag) {
          tmp8Result5 = stateFromStores1;
        }
        if (tmp8Result5) {
          tmp8Result5 = collapsedCategories(YouSwitchClientsRadioGroupDefault, {});
        }
        items2[5] = tmp8Result5;
        let tmp16 = !flag;
        if (!flag) {
          tmp16 = stateFromStores1;
        }
        if (!tmp16) {
          const obj5 = { spacing: 24, children: null };
          items2[6] = tmp16;
          obj5.children = items2;
          obj4.children = closure_1_19(Stack_Stack.Stack, obj5);
          return collapsedCategories(ActionSheet.ActionSheet, obj4);
        } else if (manaTypeConsolidationExperiment) {
          const obj6 = { children: null };
          const items3 = [collapsedCategories(closure_21, { children: "Developer Tools" })];
          tmp4 = DevToolsContentDefault;
          tmp8Result6 = collapsedCategories(tmp4, { embedded: true });
          items3[1] = tmp8Result6;
          obj6.children = items3;
          let tmp8Result7 = closure_1_19(View, obj6);
        } else {
          tmp8Result7 = collapsedCategories(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
        }
      },
);
