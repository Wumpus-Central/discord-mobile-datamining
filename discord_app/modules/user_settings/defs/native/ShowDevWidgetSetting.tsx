// === Module 17890: ShowDevWidgetSetting ===

// Module 17890 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17891 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7940 */;

require = fn;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(17892).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(17053).useStaffOrDeveloperSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;