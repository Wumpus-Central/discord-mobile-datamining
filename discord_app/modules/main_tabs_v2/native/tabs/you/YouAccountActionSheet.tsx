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
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import TableRowIcon from "../../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import useDesignToggleDefault from "../../../../devtools/design_toggles/useDesignToggle.tsx";
import TableRadioRow from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import _modDef6584 from "../../../../../../_runtime/metro/06584__.js";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import getChannelA11yLabel from "../../../../channel/getChannelA11yLabel.tsx";
import useGameMentionsAsPlainText from "../../../../game_mentions/hooks/useGameMentionsAsPlainText.tsx";
import ActivityEmojiDefault from "../../../../activity_status/native/ActivityEmoji.tsx";
import userSettingToActivity from "../../../../custom_status/utils/userSettingToActivity.tsx";
import removeCustomStatusDefault from "../../../../custom_status/utils/removeCustomStatus.tsx";
import MultiAccountActionCreatorsAll from "../../../../multi_account/MultiAccountActionCreators.tsx";
import FocusModeUtils from "../../../../notifications/FocusModeUtils.tsx";
import setUserStatusDefault from "../../../../multi_account/setUserStatus.tsx";
import ThemeDarkIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import _modDef13924 from "../../../../../../_runtime/metro/13924__.js";
import _modDef13925 from "../../../../../../_runtime/metro/13925__.js";
import _modDef13926 from "../../../../../../_runtime/metro/13926__.js";
import _modDef13927 from "../../../../../../_runtime/metro/13927__.js";
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
const TableRowGroup = currentLocale(6074);
const TableSwitchRow = currentLocale(6698);
const BellSlashIcon = currentLocale(9813);
const DevToolsContentDefault = tmp9(15625);
const YouSwitchClientsRadioGroupDefault = tmp9(16321);
require = fn;
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  const tmp = closure_21();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    let obj2 = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
              closure_1_0(12473).setFocusMode(quiet_mode_enabled, arg1);
              const obj = closure_1_0(12473);
              closure_1_1(4854).hideActionSheet();
              const obj2 = closure_1_1(4854);
              const result = closure_1_0(16310).showYouAccountActionSheet();
            }
        };
        require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[50], paths.paths), "FocusModeOptionsActionSheet", obj3);
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
      obj2 = closure_1_19(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      closure_1_19(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj5.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj5);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12056).MultiAccountTokenStatus;
const Constants = fn(1085);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = Constants);
let closure_18 = fn(12057).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4890);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null, sectionHeading: null };
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj3 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj4 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRemoveButton = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let obj5 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.sectionHeading = { marginBottom: nativeDefault.space.PX_8 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_21();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.sectionHeading) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = closure_1_19(Text_Text.Text, { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: tmp4.sectionHeading, children });
  cResult[0] = children;
  cResult[1] = tmp4.sectionHeading;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: tmp4.sectionHeading, children };
}) : ((children) => {
  const tmp = closure_21();
  return closure_1_19(Text_Text.Text, { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children: children.children });
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: null, value: null };
    const obj3 = { source: _modDef13927, variant: "text-status-online" };
    obj2.icon = closure_1_19(TableRowIcon.TableRowIcon, obj3);
    obj2.value = constants3.ONLINE;
    const items = [obj2, , , ];
    const obj4 = { icon: null, value: null };
    const obj5 = { source: _modDef13924, variant: "text-status-idle" };
    obj4.icon = closure_1_19(TableRowIcon.TableRowIcon, obj5);
    obj4.value = constants3.IDLE;
    items[1] = obj4;
    const obj6 = { icon: null, value: null };
    const obj7 = { source: _modDef13925, variant: "text-status-dnd" };
    obj6.icon = closure_1_19(TableRowIcon.TableRowIcon, obj7);
    obj6.value = constants3.DND;
    items[2] = obj6;
    const obj8 = { icon: null, value: null };
    const obj9 = { source: _modDef13926, variant: "text-status-offline" };
    obj8.icon = closure_1_19(TableRowIcon.TableRowIcon, obj9);
    obj8.value = constants3.INVISIBLE;
    items[3] = obj8;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const obj = { icon: closure_1_19(require("TableRowIcon").TableRowIcon, { source: _modDef13927, variant: "text-status-online" }), value: constants.ONLINE };
  const items = [obj, , , ];
  const obj3 = { icon: null, value: null };
  const obj2 = { source: _modDef13927, variant: "text-status-online" };
  obj3.icon = closure_1_19(require("TableRowIcon").TableRowIcon, { source: _modDef13924, variant: "text-status-idle" });
  obj3.value = constants.IDLE;
  items[1] = obj3;
  const obj5 = { icon: null, value: null };
  const obj4 = { source: _modDef13924, variant: "text-status-idle" };
  obj5.icon = closure_1_19(require("TableRowIcon").TableRowIcon, { source: _modDef13925, variant: "text-status-dnd" });
  obj5.value = constants.DND;
  items[2] = obj5;
  const obj7 = { icon: null, value: null };
  const obj6 = { source: _modDef13925, variant: "text-status-dnd" };
  obj7.icon = closure_1_19(require("TableRowIcon").TableRowIcon, { source: _modDef13926, variant: "text-status-offline" });
  obj7.value = constants.INVISIBLE;
  items[3] = obj7;
  return items;
}, []));
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = setting(576).c(19);
  const arr = closure_23();
  const StatusSetting = setting(2028).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(2028).StatusExpiresAtSetting;
  const setting1 = StatusExpiresAtSetting.useSetting();
  let obj = setting(576);
  const manaTypeConsolidationExperiment = setting(6470).useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
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
                  const items = [closure_19(closure_22, obj4), tmp16];
                  obj3.children = items;
                  tmp20 = closure_20(closure_5, obj3);
                }
                cResult[16] = manaTypeConsolidationExperiment;
                cResult[17] = tmp16;
                cResult[18] = tmp20;
                tmp19 = tmp20;
              }
            }
          }
        }
        const obj5 = { title: tmp10, accessibilityLabel: tmp11, onChange: tmp7, defaultValue: setting, hasIcons: true, children: cResult[6] };
        const tmp18 = closure_19(tmp(6072).TableRadioGroup, obj5);
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
  class T {
    constructor(arg0) {
      tmp2 = closure_0;
      tmp3 = closure_3;
      tmp = jsx;
      obj = {};
      merged = Object.assign(arg0);
      obj2 = closure_0(closure_3[27]);
      obj.label = obj2.getStatusLabel(arg0.value);
      formatToPlainStringResult = undefined;
      if (arg0.value === closure_0) {
        tmp6 = closure_1;
        tmp7 = null;
        if (null != closure_1) {
          str = "0";
          if ("0" !== tmp6) {
            intl = tmp2(tmp3[25]).intl;
            obj1 = { endTime: null };
            tmp8 = globalThis;
            _Date = Date;
            _Number = Number;
            tmp9 = new.target;
            tmp10 = new.target;
            date = new Date(Number(tmp6));
            tmp11 = date;
            obj1.endTime = date.toLocaleString(tmp2(tmp3[25]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
            formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[25]).t.BWD8fs, obj1);
          }
        }
      }
      obj.subLabel = formatToPlainStringResult;
      return tmp(closure_0(closure_3[26]).TableRadioRow, obj, arg0.value);
    }
  }
  cResult[7] = setting;
  cResult[8] = setting1;
  cResult[9] = T;
  tmp13 = T;
  const obj2 = setting(6470);
}) : (() => {
  const StatusSetting = setting(2028).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(2028).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  const arr = closure_23();
  const manaTypeConsolidationExperiment = setting(6470).useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
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
  const obj2 = { title: tmp6, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
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
          obj3.endTime = date.toLocaleString(util.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  const tmp5Result = closure_19(setting(6072).TableRadioGroup, obj2);
  let tmp9 = tmp5Result;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: null };
    const obj4 = { children: stringResult };
    const items1 = [closure_19(closure_22, obj4), tmp5Result];
    obj3.children = items1;
    tmp9 = closure_20(closure_5, obj3);
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function t() {
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
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(arg0) {
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
      tmp13 = closure_1_19(closure_22, obj2);
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
    const obj3 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: ClientThemesUtils.getThemeName(constants4.LIGHT), value: constants4.LIGHT };
    const tmp21 = closure_1_19(TableRadioRow.TableRadioRow, obj3);
    cResult[6] = tmp21;
    let tmp18 = tmp21;
    const tmpResult7 = ClientThemesUtils;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: ClientThemesUtils.getThemeName(constants4.ASH), value: constants4.ASH };
    const tmp25 = closure_1_19(TableRadioRow.TableRadioRow, obj4);
    cResult[7] = tmp25;
    let tmp22 = tmp25;
    const tmpResult8 = ClientThemesUtils;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: ClientThemesUtils.getThemeName(constants4.DARK), value: constants4.DARK };
    const tmp29 = closure_1_19(TableRadioRow.TableRadioRow, obj5);
    cResult[8] = tmp29;
    let tmp26 = tmp29;
    const tmpResult9 = ClientThemesUtils;
  } else {
    tmp26 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: ClientThemesUtils.getThemeName(constants4.ONYX), value: constants4.ONYX };
    const tmp33 = closure_1_19(TableRadioRow.TableRadioRow, obj6);
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
      const tmp39 = closure_1_20(hasOwnProperty, obj7);
      cResult[14] = tmp34;
      cResult[15] = tmp12;
      cResult[16] = tmp39;
      tmp36 = tmp39;
    }
  }
  const obj8 = { title: tmp16, accessibilityLabel: tmp17, onChange: tmp9, defaultValue: stateFromStores, hasIcons: true, children: null };
  const items2 = [tmp18, tmp22, tmp26, tmp30];
  obj8.children = items2;
  const tmp35 = closure_1_20(TableRadioGroup.TableRadioGroup, obj8);
  cResult[10] = tmp16;
  cResult[11] = tmp17;
  cResult[12] = stateFromStores;
  cResult[13] = tmp35;
  tmp34 = tmp35;
  const tmpResult6 = ManaTypeConsolidationExperiment;
}) : (() => {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
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
    tmp9 = closure_1_19(closure_22, obj3);
  }
  const items1 = [tmp9, ];
  let tmp12;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = { title: tmp12, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let tmp13;
  if (manaTypeConsolidationExperiment) {
    tmp13 = stringResult;
  }
  const obj5 = { children: null };
  obj4.accessibilityLabel = tmp13;
  obj4.onChange = callback;
  obj4.defaultValue = stateFromStores;
  const obj6 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  obj6.label = ClientThemesUtils.getThemeName(constants4.LIGHT);
  obj6.value = constants4.LIGHT;
  const items2 = [closure_1_19(TableRadioRow.TableRadioRow, obj6), , , ];
  const obj7 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
  const tmpResult = ClientThemesUtils;
  obj7.label = ClientThemesUtils.getThemeName(constants4.ASH);
  obj7.value = constants4.ASH;
  items2[1] = closure_1_19(TableRadioRow.TableRadioRow, obj7);
  const obj8 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  const tmpResult4 = ClientThemesUtils;
  obj8.label = ClientThemesUtils.getThemeName(constants4.DARK);
  obj8.value = constants4.DARK;
  items2[2] = closure_1_19(TableRadioRow.TableRadioRow, obj8);
  const obj9 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  const tmpResult5 = ClientThemesUtils;
  obj9.label = ClientThemesUtils.getThemeName(constants4.ONYX);
  obj9.value = constants4.ONYX;
  items2[3] = closure_1_19(TableRadioRow.TableRadioRow, obj9);
  obj4.children = items2;
  items1[1] = closure_1_20(TableRadioGroup.TableRadioGroup, obj4);
  obj5.children = items1;
  return closure_1_20(hasOwnProperty, obj5);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = stateFromStores(576).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamerModeStore];
    const fn = function n() {
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
    const fn2 = function s(id) {
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
      const obj3 = { label: UserUtilsDefault.getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
      const obj4 = { user: obj, guildId: "Array", size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      obj3.icon = closure_2_19(native.Avatar, obj4);
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
}) : ((arg0) => {
  _require = arg0;
  const items = [StreamerModeStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [arg0, stateFromStores];
  return noop.useMemo(() => closure_0.map((id) => {
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
    const obj3 = { label: stateFromStores(dependencyMap[38]).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    const obj4 = { user: obj, guildId: "Array", size: closure_0(dependencyMap[39]).AvatarSizes.REFRESH_MEDIUM_32 };
    obj3.icon = closure_2_19(closure_0(dependencyMap[39]).Avatar, obj4);
    return obj3;
  }), items1);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(26);
  const tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
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
  const multiAccountUsers = stateFromStores(15872).useMultiAccountUsers().multiAccountUsers;
  const arr2 = closure_26(multiAccountUsers);
  const tmpResult3 = stateFromStores(15872);
  const manaTypeConsolidationExperiment = stateFromStores(6470).useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
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
        const fn3 = function p() {
          return multiAccountUsers(16315)();
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
        obj2.children = closure_19(tmp(4886).Text, obj3);
        const tmp17 = closure_19(tmp(5909).PressableOpacity, obj2);
        cResult[7] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== tmp4.manage) {
        let obj4 = { style: tmp4.manage, children: tmp15 };
        const tmp21 = closure_19(closure_5, obj4);
        cResult[8] = tmp4.manage;
        cResult[9] = tmp21;
      }
      if (cResult[10] !== manaTypeConsolidationExperiment) {
        let tmp23 = manaTypeConsolidationExperiment;
        if (manaTypeConsolidationExperiment) {
          let obj5 = { children: tmp12 };
          tmp23 = closure_19(closure_22, obj5);
        }
        cResult[10] = manaTypeConsolidationExperiment;
        cResult[11] = tmp23;
      }
      if (cResult[12] !== arr2) {
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(arg0);
              return closure_1_19(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
            }
          }
          cResult[14] = H;
        } else {
          class H {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(arg0);
              return closure_1_19(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
            }
          }
        }
        const mapped = arr2.map(H);
        cResult[12] = arr2;
        cResult[13] = mapped;
      } else {
        class H {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(arg0);
            return closure_1_19(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
          }
        }
        if (cResult[15] === stateFromStores.id) {
          class H {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(arg0);
              return closure_1_19(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
            }
          }
        }
        const obj6 = { title: tmp26, accessibilityLabel: tmp27, onChange: tmp11, defaultValue: tmp28, hasIcons: true, children: tmp29 };
        const tmp35 = closure_19(tmp(6072).TableRadioGroup, obj6);
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
    class H {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(arg0);
        return closure_1_19(closure_0(closure_1_3[26]).TableRadioRow, obj, arg0.value);
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
  const tmpResult4 = stateFromStores(6470);
}) : (() => {
  const tmp = closure_21();
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  const multiAccountUsers = stateFromStores(15872).useMultiAccountUsers().multiAccountUsers;
  let obj2 = stateFromStores(15872);
  const arr2 = closure_26(multiAccountUsers);
  const manaTypeConsolidationExperiment = stateFromStores(6470).useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  const items1 = [multiAccountUsers, ];
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
          return multiAccountUsers(16315)();
        },
      children: null
    };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp2(1126).intl;
    obj7.children = intl2.string(tmp2(1126).t.HxrBOZ);
    obj6.children = closure_19(tmp2(4886).Text, obj7);
    obj5.children = closure_19(tmp2(5909).PressableOpacity, obj6);
    const items2 = [closure_19(closure_5, obj5), , ];
    let tmp15Result = manaTypeConsolidationExperiment;
    if (manaTypeConsolidationExperiment) {
      const obj8 = { children: stringResult };
      tmp15Result = closure_19(closure_22, obj8);
    }
    items2[1] = tmp15Result;
    let tmp10;
    if (!manaTypeConsolidationExperiment) {
      tmp10 = stringResult;
    }
    const obj9 = { title: tmp10, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    let tmp11;
    if (manaTypeConsolidationExperiment) {
      tmp11 = stringResult;
    }
    obj9.accessibilityLabel = tmp11;
    obj9.onChange = tmp7;
    obj9.defaultValue = stateFromStores.id;
    obj9.children = arr2.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(6071).TableRadioRow, {}, value.value);
    });
    items2[2] = closure_19(tmp2(6072).TableRadioGroup, obj9);
    obj4.children = items2;
    return closure_20(closure_5, obj4);
  }
  let obj3 = stateFromStores(6470);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(33);
  const tmp4 = closure_21();
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  state = undefined;
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
          const fn = function n() {
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
                                  const obj5 = { shadow: "none", border: "none", style: tmp4.customStatusRow, children: null };
                                  let items = [tmp34, tmp37];
                                  obj5.children = items;
                                  obj4.children = closure_1_20(Card.Card, obj5);
                                  const tmp44 = closure_1_19(TableRowGroup.TableRowGroup, obj4);
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
                                  children: null
                                };
                                const intl4 = util.intl;
                                obj6.accessibilityLabel = intl4.string(util.t.wfYTHe);
                                obj6.style = tmp4.customStatusRemoveButton;
                                const obj7 = { style: tmp4.trailingIcon, source: _modDef6584 };
                                obj6.children = closure_1_19(timestampProducer, obj7);
                                tmp38 = closure_1_19(Pressables.PressableOpacity, obj6);
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
                      const obj8 = { style: tmp4.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: tmp15, accessibilityHint: tmp19, onPress: tmp22, children: null };
                      const items1 = [tmp23, tmp31];
                      obj8.children = items1;
                      const tmp36 = closure_1_20(Pressables.PressableOpacity, obj8);
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
                const obj9 = { variant: token1, color: token2, lineClamp: 2, style: tmp4.customStatusText, children: tmp29 };
                const tmp33 = closure_1_19(Text_Text.Text, obj9);
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
          let tmp26 = closure_1_19(ActivityEmojiDefault, obj10);
        } else {
          const obj11 = { size: "md", style: tmp4.leadingIcon };
          tmp26 = closure_1_19(ReactionIcon.ReactionIcon, obj11);
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
}) : (() => {
  const tmp = closure_21();
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  state = undefined;
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
  const obj4 = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
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
    let tmp14Result = closure_1_19(ActivityEmojiDefault, obj6);
  } else {
    const obj7 = { size: "md", style: tmp.leadingIcon };
    tmp14Result = closure_1_19(ReactionIcon.ReactionIcon, obj7);
  }
  let items = [tmp14Result, ];
  const obj8 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp8) {
    const intl3 = util.intl;
    gameMentionsAsPlainText = intl3.string(util.t["/UonHN"]);
  }
  obj8.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj8);
  obj4.children = items;
  const items1 = [closure_1_20(Pressables.PressableOpacity, obj4), ];
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
      children: null
    };
    const intl4 = util.intl;
    obj9.accessibilityLabel = intl4.string(util.t.wfYTHe);
    obj9.style = tmp.customStatusRemoveButton;
    const obj10 = { style: tmp.trailingIcon, source: _modDef6584 };
    obj9.children = closure_1_19(timestampProducer, obj10);
    tmp14Result2 = closure_1_19(Pressables.PressableOpacity, obj9);
  }
  const tmp2Result4 = useToken;
  items1[1] = tmp14Result2;
  obj3.children = items1;
  return closure_1_19(TableRowGroup.TableRowGroup, { hasIcons: false, children: closure_1_20(Card.Card, obj3) });
});
ReactCompilerGating = fn(558);
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((statusOnly) => {
  const cResult = c.c(33);
  statusOnly = statusOnly.statusOnly;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MultiAccountStore];
    const fn = function o() {
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
    class T {
      constructor() {
        return closure_1_11.isDeveloper;
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp12 = T;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
  const tmpResult3 = initialize;
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp4) {
      if (cResult[7] !== cResult[6]) {
        { title: null }.title = tmp16;
        class T {
          constructor() {
            return closure_1_11.isDeveloper;
          }
        }
        cResult[7] = tmp16;
        cResult[8] = tmp21;
        let tmp19 = tmp21;
        const obj2 = { title: null };
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== tmp10) {
        let tmp23 = tmp10;
        if (tmp10) {
          tmp23 = closure_1_19(closure_25, {});
        }
        class T {
          constructor() {
            return closure_1_11.isDeveloper;
          }
        }
        cResult[10] = tmp23;
        let tmp22 = tmp23;
      } else {
        tmp22 = cResult[10];
      }
      class T {
        constructor() {
          return closure_1_11.isDeveloper;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp31 = closure_1_19(closure_24, {});
        class T {
          constructor() {
            return closure_1_11.isDeveloper;
          }
        }
        const tmp32 = closure_1_19(FocusModeSetting, {});
        const tmp34 = closure_1_19(closure_29, {});
        cResult[11] = tmp32;
        cResult[12] = tmp34;
        cResult[13] = tmp31;
        let tmp28 = tmp31;
        let tmp27 = tmp34;
        let tmp26 = tmp32;
      } else {
        tmp26 = cResult[11];
        tmp27 = cResult[12];
        tmp28 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === tmp4) {
          let tmp35 = cResult[16];
        }
        if (cResult[17] === stateFromStores1) {
          if (cResult[18] === tmp4) {
            let tmp39 = cResult[19];
          }
          if (cResult[20] === stateFromStores1) {
            if (cResult[21] === manaTypeConsolidationExperiment) {
              if (cResult[22] === tmp4) {
                let tmp42 = cResult[23];
              }
              if (cResult[24] === tmp35) {
                if (cResult[25] === tmp39) {
                  if (cResult[26] === tmp42) {
                    if (cResult[27] === tmp22) {
                      let tmp50 = cResult[28];
                    }
                    if (cResult[29] === stateFromStores) {
                      if (cResult[30] === tmp50) {
                        if (cResult[31] === tmp19) {
                          let tmp54 = cResult[32];
                        }
                        return tmp54;
                      }
                    }
                    class T {
                      constructor() {
                        return closure_1_11.isDeveloper;
                      }
                    }
                    tmp56[0] = stateFromStores;
                    tmp56[1] = tmp19;
                    tmp56[3] = tmp50;
                    const tmp57 = closure_1_19(ActionSheet.ActionSheet, tmp56);
                    cResult[29] = stateFromStores;
                    cResult[30] = tmp50;
                    cResult[31] = tmp19;
                    cResult[32] = tmp57;
                    tmp54 = tmp57;
                  }
                }
              }
              class T {
                constructor() {
                  return closure_1_11.isDeveloper;
                }
              }
              const items2 = [tmp22, tmp28, tmp26, tmp27, tmp35, tmp39, tmp42];
              tmp52[1] = items2;
              const tmp53 = closure_1_20(Stack_Stack.Stack, tmp52);
              cResult[24] = tmp35;
              cResult[25] = tmp39;
              cResult[26] = tmp42;
              cResult[27] = tmp22;
              cResult[28] = tmp53;
              tmp50 = tmp53;
            }
          }
          class T {
            constructor() {
              return closure_1_11.isDeveloper;
            }
          }
          if (!!tmp4) {
            cResult[20] = stateFromStores1;
            class T {
              constructor() {
                return closure_1_11.isDeveloper;
              }
            }
            cResult[22] = tmp4;
            cResult[23] = tmp43;
            tmp42 = tmp43;
          } else if (manaTypeConsolidationExperiment) {
            const obj3 = { children: null };
            class T {
              constructor() {
                return closure_1_11.isDeveloper;
              }
            }
            const items3 = [closure_1_19(closure_22, { children: "Developer Tools" }), ];
            tmp9 = DevToolsContentDefault;
            items3[1] = closure_1_19(tmp9, { embedded: true });
            obj3.children = items3;
            let tmp45 = closure_1_20(hasOwnProperty, obj3);
          } else {
            tmp45 = closure_1_19(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
          }
        }
        let tmp40 = !tmp4;
        class T {
          constructor() {
            return closure_1_11.isDeveloper;
          }
        }
        if (tmp40) {
          tmp40 = closure_1_19(YouSwitchClientsRadioGroupDefault, {});
        }
        cResult[17] = stateFromStores1;
        cResult[18] = tmp4;
        cResult[19] = tmp40;
        tmp39 = tmp40;
      }
      let tmp36 = !tmp4;
      if (!tmp4) {
        tmp36 = stateFromStores;
      }
      if (tmp36) {
        tmp36 = closure_1_19(closure_27, {});
      }
      cResult[14] = stateFromStores;
      cResult[15] = tmp4;
      cResult[16] = tmp36;
      tmp35 = tmp36;
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
}) : ((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let tmp8Result6 = dependencyMap;
  const items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  let tmp4 = importDefault;
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
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
  obj4.header = closure_1_19(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp8Result = tmp5;
  if (tmp5) {
    tmp8Result = closure_1_19(closure_25, {});
  }
  const items2 = [tmp8Result, closure_1_19(closure_24, {}), closure_1_19(FocusModeSetting, {}), closure_1_19(closure_29, {}), , , ];
  let tmp8Result4 = !flag;
  if (!flag) {
    tmp8Result4 = stateFromStores;
  }
  if (tmp8Result4) {
    tmp8Result4 = closure_1_19(closure_27, {});
  }
  items2[4] = tmp8Result4;
  let tmp8Result5 = !flag;
  if (!flag) {
    tmp8Result5 = stateFromStores1;
  }
  if (tmp8Result5) {
    tmp8Result5 = closure_1_19(YouSwitchClientsRadioGroupDefault, {});
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
    obj4.children = closure_1_20(Stack_Stack.Stack, obj5);
    return closure_1_19(ActionSheet.ActionSheet, obj4);
  } else if (manaTypeConsolidationExperiment) {
    const obj6 = { children: null };
    const items3 = [closure_1_19(closure_22, { children: "Developer Tools" }), ];
    tmp4 = DevToolsContentDefault;
    tmp8Result6 = closure_1_19(tmp4, { embedded: true });
    items3[1] = tmp8Result6;
    obj6.children = items3;
    let tmp8Result7 = closure_1_20(hasOwnProperty, obj6);
  } else {
    tmp8Result7 = closure_1_19(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
  }
}));