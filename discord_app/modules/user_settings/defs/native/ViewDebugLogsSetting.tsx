// === Module 15561: ViewDebugLogsSetting ===

// Module 15561 (ViewDebugLogsSetting)
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10924 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 13843 */;
import WrenchIcon from "WrenchIcon" /* 15562 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 15564 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 15567 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 15568 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

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
        }
      };
      ModalActionCreatorsDefault.pushLazy(Promise.resolve(obj));
    }
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
  const items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj), , ];
  const obj1 = { icon: hasOwnProperty(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = util.intl;
  obj1.title = intl3.string(util.t.b0nJvk);
  obj1.render = function render() {
    return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
  };
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj1);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj2 = { icon: tmp(tmp2(10961).ChannelNotificationIcon, {}), title: null, screenKey: "pushNotificationLogs", render: null };
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
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;