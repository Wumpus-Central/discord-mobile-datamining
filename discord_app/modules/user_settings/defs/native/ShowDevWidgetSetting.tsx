// === Module 15847: ShowDevWidgetSetting ===

// Module 15847 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15848 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7953 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(15849).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(15114).useStaffOrDeveloperSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;