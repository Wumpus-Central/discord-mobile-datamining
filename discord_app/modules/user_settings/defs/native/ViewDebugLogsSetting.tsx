// discord_app/modules/user_settings/defs/native/ViewDebugLogsSetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import UserSettingsDebugLogsDefault from "../../dev_tools/native/UserSettingsDebugLogs.tsx";
import UserSettingsStartupTimingsDefault from "../../dev_tools/native/UserSettingsStartupTimings.tsx";
import UserSettingsPushNotificationLogsDefault from "../../notifications/native/UserSettingsPushNotificationLogs.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return closure_5(title(7200).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ViewDebugLogsActionSheet);
      obj = {
        default() {
          return closure_2_5(ModalStackNavigatorDefault, { title, render, screenKey });
        },
      };
      ModalActionCreatorsDefault.pushLazy(Promise.resolve(obj));
    },
  });
}
function ViewDebugLogsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.BUOCPi);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}), title: null, screenKey: "debugLogs", render: null };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.XpPGhL);
  obj.render = function render() {
    return closure_1_5(UserSettingsDebugLogsDefault, {});
  };
  const items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj), ,];
  const obj1 = { icon: hasOwnProperty(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = util.intl;
  obj1.title = intl3.string(util.t.b0nJvk);
  obj1.render = function render() {
    return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
  };
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj1);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj2 = {
      icon: tmp(tmp2(10961).ChannelNotificationIcon, {}),
      title: null,
      screenKey: "pushNotificationLogs",
      render: null,
    };
    const intl4 = tmp2(1114).intl;
    obj2.title = intl4.string(tmp2(1114).t.Ljj0ps);
    obj2.render = function render() {
      return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
    };
    tmpResult = tmp(ViewDebugLogsActionSheetRow, obj2);
  }
  items[2] = tmpResult;
  obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: items });
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const Suspense = _mod19.Suspense;
const Keyboard = _mod17.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    const obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
