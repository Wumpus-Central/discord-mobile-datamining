// === Module 14975: toggle ===

// Module 14975 (toggle)
import initialize from "initialize" /* 589 */;
import updateDevToolsSettings from "updateDevToolsSettings" /* 14054 */;
import closure_2 from "initialize" /* 7323 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    let obj = updateDevToolsSettings;
    obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default createToggle;