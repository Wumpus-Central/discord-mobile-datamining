// === Module 15638: ShowDevWidgetSetting ===

// Module 15638 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15639 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7791 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(15640).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(14897).useStaffOrDeveloperSettingPredicate
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default SettingBuilders;