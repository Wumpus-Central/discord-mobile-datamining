// discord_app/modules/user_settings/defs/native/ShowDevWidgetSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DevToolsActionCreators from "../../../devtools/DevToolsActionCreators.tsx";
import DevToolsSettingsStore from "../../../devtools/DevToolsSettingsStore.tsx";

require = fn;
const SettingBuilders = fn(12317);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(18096).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(17254).useStaffOrDeveloperSettingPredicate,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;
