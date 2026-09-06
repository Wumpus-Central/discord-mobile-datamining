// discord_app/modules/user_settings/defs/native/ShowDevWidgetSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DevToolsActionCreators from "../../../devtools/DevToolsActionCreators.tsx";
import DevToolsSettingsStore from "../../../devtools/DevToolsSettingsStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(15575).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: fn(14842).useStaffOrDeveloperSettingPredicate,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default SettingBuilders;
