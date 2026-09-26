// === Module 15116: ViewDebugLogsSetting ===

// Module 15116 (ViewDebugLogsSetting)
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import ClockIcon from "ClockIcon" /* 4795 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet from "ActionSheet" /* 6618 */;
import ActionSheetRow from "ActionSheetRow" /* 6620 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10385 */;
import ChannelNotificationIcon from "ChannelNotificationIcon" /* 10424 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 13389 */;
import WrenchIcon from "WrenchIcon" /* 15117 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 15119 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 15122 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 15123 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return closure_5(title(6620).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ViewDebugLogsActionSheet);
      ModalActionCreatorsDefault.pushLazy(Promise.resolve({
        default() {
          return closure_2_5(ModalStackNavigatorDefault, { title, render, screenKey });
        }
      }));
    }
  });
}
function ViewDebugLogsActionSheet() {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.BUOCPi);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}), title: null, screenKey: "debugLogs", render: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.XpPGhL);
  obj3.render = function render() {
    return closure_1_5(UserSettingsDebugLogsDefault, {});
  };
  const items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj3), , ];
  const obj4 = { icon: hasOwnProperty(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = util.intl;
  obj4.title = intl3.string(util.t.b0nJvk);
  obj4.render = function render() {
    return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
  };
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj4);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj6 = { icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}), title: null, screenKey: "pushNotificationLogs", render: null };
    const intl4 = util.intl;
    obj6.title = intl4.string(util.t.Ljj0ps);
    obj6.render = function render() {
      return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
    };
    tmpResult = hasOwnProperty(ViewDebugLogsActionSheetRow, obj6);
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
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ViewDebugLogsActionSheet }), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;