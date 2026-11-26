// === Module 17200: ShowDevWidgetSetting ===

// Module 17200 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17201 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8383 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(17202).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(16349).useStaffOrDeveloperSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;