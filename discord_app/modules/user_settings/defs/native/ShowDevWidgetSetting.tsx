// === Module 17149: ShowDevWidgetSetting ===

// Module 17149 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17150 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8341 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(17151).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(16298).useStaffOrDeveloperSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;